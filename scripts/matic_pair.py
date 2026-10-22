#!/usr/bin/env python3
"""Matic companion pairing tool: mint a robot credential over Bluetooth.

Standalone script for pairing a Matic robot from a machine with its own
Bluetooth adapter — including one that cannot run the Home Assistant pairing
flow (a Mac, a laptop, any Linux box). It reproduces the integration's BLE
pairing client stack (custom_components/matic_robot/bluetooth_pairing.py) and
prints the credential exactly as the integration stores it, ready to import
(docs/matic-pair.md).

What it reuses from the integration (no reinvention):
- the robot-match predicate: word-boundary "matic" local name OR service UUID
  5b14adcd-e995-9e80-c55a-b6c6fb6c612f (bluetooth_pairing.py:305-313); the
  robot advertises only while Pairing mode is open (bluetooth_pairing.py:100);
- the GATT exchange: characteristic 84b52f26-d3b7-5ebe-ba52-ff38a447788d, raw
  protobuf TokenRequest{user_id} write + BotToken read
  (bluetooth_pairing.py:730-759), decoded/validated exactly like
  client/auth.py (HermesCredential.from_message, app_id == user_id).
When the repo checkout is importable (client/ is Home Assistant-agnostic) and
the protobuf package is installed, the script uses those modules directly;
otherwise it falls back to a hand-rolled protobuf codec for the two tiny
messages, so bleak is the only hard dependency.

Fleet safety: with more than one robot around, pass --name <substring>
(e.g. --name matic-a1b2); the script then matches only advertisements whose
local name contains the substring. Without --name, it refuses to connect when
more than one distinct robot name is advertising, and always prints the robot
it is about to connect to. Connection targets must carry Matic's BLE service
UUID unless --name explicitly selects them by name: household devices merely
NAMED "Matic" (a common given name) never pass the name predicate alone, so
the script cannot be talked into pairing a phone.

Platform support:
- macOS (CoreBluetooth): VERIFIED LIVE, 2026-10-21, two robots in range.
  Pairing is implicit: the robot raises its SMP Security Request right after
  connect (and/or the encrypted token write triggers it), the operating system
  shows a pairing sheet, and the operator types the robot's 6-digit code.
  bleak's pair() raises NotImplementedError on macOS by design; do not call it.
  macOS reports rotating LE-privacy pseudo-addresses, never the robot's real
  BD_ADDR; the saved bluetooth_address is meaningless outside this Mac.
- Linux (BlueZ): UNTESTED. bleak pair() / a BlueZ Agent1 (or
  `bluetoothctl` default-agent) replaces the OS sheet; the integration's own
  bluez_agent.py is the reference implementation.
- Windows (WinRT): UNTESTED. WinRT raises a system pairing dialog.

Exit codes: 0 success; 1 clean failure; 2 Bluetooth stack/permission error;
4 fleet-safety refusal (ambiguous robots; pass --name).
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import re
import select as _stdlib_select  # noqa: F401  (preload before path insert)
import sys
import time
from base64 import b64encode
from datetime import UTC, datetime
from pathlib import Path
from uuid import UUID, uuid4

from bleak import BleakClient, BleakScanner
from bleak.backends.device import BLEDevice
from bleak.backends.scanner import AdvertisementData

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent
UPSTREAM_MATIC = REPO_ROOT / "custom_components" / "matic_robot"
DEFAULT_SAVE = REPO_ROOT / ".private" / "matic_pair_result.json"

# Upstream constants (bluetooth_pairing.py:74-76).
MATIC_BLE_SERVICE_UUID = "5b14adcd-e995-9e80-c55a-b6c6fb6c612f"
HERMES_TOKEN_CHARACTERISTIC = "84b52f26-d3b7-5ebe-ba52-ff38a447788d"
MATIC_LOCAL_NAME = "matic"

CONNECT_TIMEOUT = 15.0
PAIR_WAIT_SECONDS = 120.0
GATT_RETRY_SECONDS = 2.0
SETTLE_SECONDS = 5.0

# --- integration client helpers (soft import) or hand-rolled fallbacks ------
if UPSTREAM_MATIC.is_dir():
    sys.path.insert(0, str(UPSTREAM_MATIC))

HermesCredential = None
new_hermes_user_id = None
decode_fields = None

# The integration's client/ uses Python 3.14 syntax; older interpreters raise
# SyntaxError on import and must take the hand-rolled fallback too.
_CLIENT_IMPORT_ERRORS = (ImportError, SyntaxError)

try:  # client/ is Home Assistant-agnostic (client/__init__.py)
    from client.auth import HermesCredential as _HermesCredential
    from client.auth import new_hermes_user_id as _new_hermes_user_id
    from client.wire import decode_fields as _decode_fields

    HermesCredential = _HermesCredential
    new_hermes_user_id = _new_hermes_user_id
    decode_fields = _decode_fields
    _USING_INTEGRATION_CLIENT = True
except _CLIENT_IMPORT_ERRORS:
    _USING_INTEGRATION_CLIENT = False


def _encode_varint(value: int) -> bytes:
    out = b""
    while True:
        byte = value & 0x7F
        value >>= 7
        if value:
            out += bytes([byte | 0x80])
        else:
            out += bytes([byte])
            return out


def _encode_token_request(user_id: str) -> bytes:
    """TokenRequest{user_id: string=1} in protobuf wire form."""
    raw = user_id.encode("utf-8")
    return b"\x0a" + _encode_varint(len(raw)) + raw


def _decode_length_fields(payload: bytes) -> dict[int, bytes]:
    """Decode length-delimited protobuf fields (wire format 2) by field number.

    Mirrors the integration's hand-rolled bounded decoder
    (client/wire.py decode_fields) for the BotToken response shape.
    """
    fields: dict[int, bytes] = {}
    offset = 0
    while offset < len(payload):
        tag, offset = _decode_varint(payload, offset)
        number, wire_type = tag >> 3, tag & 7
        if wire_type != 2:
            raise ValueError(f"unexpected wire type {wire_type} for field {number}")
        length, offset = _decode_varint(payload, offset)
        end = offset + length
        if end > len(payload):
            raise ValueError("truncated protobuf value")
        fields.setdefault(number, payload[offset:end])
        offset = end
    return fields


def _decode_varint(payload: bytes, offset: int) -> tuple[int, int]:
    value = 0
    shift = 0
    while shift < 70:
        if offset >= len(payload):
            raise ValueError("truncated protobuf varint")
        byte = payload[offset]
        offset += 1
        value |= (byte & 0x7F) << shift
        if not byte & 0x80:
            return value, offset
        shift += 7
    raise ValueError("oversized protobuf varint")


class _FallbackCredential:
    """Hand-rolled HermesCredential (client/auth.py) without protobuf."""

    def __init__(self, hashed_token: bytes, user: bytes) -> None:
        if not hashed_token or not user:
            raise ValueError("Hermes credential is incomplete")
        self.hashed_token = hashed_token
        self.user = user
        if not self._is_valid_hermes_user_id(self.app_id):
            raise ValueError("Hermes credential has an invalid user identity")

    @classmethod
    def from_message_fields(cls, user: bytes, hashed_token: bytes):
        return cls(hashed_token=hashed_token, user=user)

    @property
    def app_id(self) -> str:
        fields = _decode_length_fields(self.user)
        if 1 not in fields:
            raise ValueError("Hermes credential has malformed user data")
        return fields[1].decode("utf-8")

    def to_storage(self) -> str:
        """BotToken{user=1, hashed_token=2} serialization, base64."""
        message = (
            b"\x0a"
            + _encode_varint(len(self.user))
            + self.user
            + b"\x12"
            + _encode_varint(len(self.hashed_token))
            + self.hashed_token
        )
        return b64encode(message).decode("ascii")

    @staticmethod
    def _is_valid_hermes_user_id(value: str) -> bool:
        try:
            parsed = UUID(value)
        except ValueError:
            return False
        return parsed.version == 4 and str(parsed) == value.lower()


def _fallback_new_hermes_user_id() -> str:
    return str(uuid4())


if not _USING_INTEGRATION_CLIENT:
    new_hermes_user_id = _fallback_new_hermes_user_id


def _utc_stamp() -> str:
    return datetime.now(UTC).isoformat(timespec="milliseconds")


def is_matic(name: object, service_uuids) -> bool:
    """Port of upstream _is_matic_identity (bluetooth_pairing.py:305-313)."""
    normalized_name = str(name or "").casefold()
    normalized_uuids = {str(uuid).casefold() for uuid in (service_uuids or ())}
    named_matic = re.search(rf"\b{MATIC_LOCAL_NAME}\b", normalized_name) is not None
    return named_matic or MATIC_BLE_SERVICE_UUID in normalized_uuids


def matches_name_filter(name: str, name_filter: str | None) -> bool:
    """Return whether the advertisement name passes the --name filter."""
    if name_filter is None:
        return True
    return name_filter.casefold() in str(name or "").casefold()


async def scan_for_robot(
    scan_seconds, discover_timeout, name_filter, *, heartbeat: bool = True
):
    """Scan until candidate robots appear; returns candidates or None on error.

    The caller decides ambiguity. After the first match the scan lingers
    SETTLE_SECONDS so a second robot advertising nearby is observed before any
    connection happens (fleet safety).
    """
    candidates = {}  # address -> dict(device, adv, name, rssi)
    printed = set()

    def on_advertisement(device: BLEDevice, adv: AdvertisementData) -> None:
        name = adv.local_name or device.name or "Matic"
        if not is_matic(name, adv.service_uuids):
            return
        if not matches_name_filter(name, name_filter):
            return
        candidates[device.address] = {
            "device": device,
            "adv": adv,
            "name": name,
            "rssi": adv.rssi,
        }
        if device.address not in printed:
            printed.add(device.address)
            uuids = [u.casefold() for u in adv.service_uuids]
            print(
                f"matic_pair: [{_utc_stamp()}] MATCH {name!r} "
                f"({device.address.upper()}) rssi={adv.rssi} service_uuids={uuids}"
            )

    scanner = BleakScanner(detection_callback=on_advertisement)
    try:
        await scanner.start()
    except Exception as err:
        print(
            f"matic_pair: FAIL — Bluetooth stack unavailable: "
            f"{type(err).__name__}: {err}"
        )
        return None
    try:
        deadline = time.monotonic() + (scan_seconds or discover_timeout)
        last_beat = time.monotonic()
        settle_until = None
        while True:
            await asyncio.sleep(0.5)
            now = time.monotonic()
            if candidates:
                if settle_until is None:
                    settle_until = now + SETTLE_SECONDS
                if now >= settle_until:
                    return candidates
            if now >= deadline:
                return candidates
            if heartbeat and now - last_beat >= 5.0:
                last_beat = now
                if scan_seconds:
                    print(f"matic_pair: [{_utc_stamp()}] waiting for pairing window…")
    finally:
        await scanner.stop()


def carries_matic_uuid(entry) -> bool:
    """Return whether the advertisement carries Matic's BLE service UUID.

    Matic's own Android app filters on the service UUID; live pairing
    advertisements observed with it too (bluetooth_pairing.py:293-313). It is
    the only robot-proof signal, because phones and other household devices
    can be *named* "Matic" (a common given name) and would otherwise pass the
    upstream word-boundary name predicate.
    """
    uuids = {str(u).casefold() for u in entry["adv"].service_uuids}
    return MATIC_BLE_SERVICE_UUID in uuids


def eligible_candidates(candidates, name_filter):
    """Return candidates safe to connect to, and (for diagnosis) the rest.

    Safe means: the advertisement carries Matic's service UUID, OR the operator
    explicitly matched this robot by name via --name.
    """
    eligible = {}
    name_only = {}
    for address, entry in candidates.items():
        if carries_matic_uuid(entry):
            eligible[address] = entry
        elif name_filter is not None and matches_name_filter(
            entry["name"], name_filter
        ):
            eligible[address] = entry
        else:
            name_only[address] = entry
    return eligible, name_only


def choose_candidate(candidates, name_filter) -> tuple | None:
    """Pick the connect target; refuse on ambiguity or unsafe matches."""
    if not candidates:
        return None
    eligible, name_only = eligible_candidates(candidates, name_filter)
    if name_filter is not None:
        # --name narrows the pool: only substring-matching advertisements are
        # candidates at all (the operator names the intended robot).
        eligible = {
            address: entry
            for address, entry in eligible.items()
            if matches_name_filter(entry["name"], name_filter)
        }
    if not eligible:
        if name_only:
            sample = sorted({entry["name"] for entry in name_only.values()})[:3]
            print(
                "matic_pair: REFUSED — only name-only matches were seen "
                f"({len(name_only)} advertisement(s) named like {sample}); "
                "none carried Matic's service UUID. Devices merely NAMED "
                "Matic (phones, laptops) are never contacted without the "
                "service UUID or an explicit --name <substring>."
            )
        return None
    names = {entry["name"] for entry in eligible.values()}
    if len(names) > 1:
        print("matic_pair: REFUSED — more than one distinct robot is advertising:")
        for address, entry in sorted(eligible.items()):
            uuid_note = "uuid" if carries_matic_uuid(entry) else "name"
            print(
                f"matic_pair:   {entry['name']!r} ({address.upper()}) "
                f"rssi={entry['rssi']} match={uuid_note}"
            )
        print(
            "matic_pair: pass --name <substring> to select the intended robot "
            "(e.g. --name matic-a1b2); nothing was contacted."
        )
        return None
    # Rank like upstream: service-UUID carriers first, then RSSI
    # (bluetooth_pairing.py:390-398).
    address = max(
        eligible,
        key=lambda addr: (
            carries_matic_uuid(eligible[addr]),
            eligible[addr]["rssi"] or -127,
        ),
    )
    entry = eligible[address]
    if name_only:
        print(
            f"matic_pair: ignoring {len(name_only)} name-only advertisement(s) "
            "without Matic's service UUID (not safe to contact)."
        )
    return entry


async def find_token_characteristic(client: BleakClient):
    """Return the Hermes token characteristic, if visible (raw protobuf GATT)."""
    return client.services.get_characteristic(HERMES_TOKEN_CHARACTERISTIC)


def _credential_from_response(response: bytes, user_id: str):
    """Decode BotToken and validate, exactly like client/auth.py."""
    if HermesCredential is not None:
        credential = HermesCredential.from_message(_bot_token_from(response))
    else:
        fields = (
            decode_fields(response)
            if decode_fields is not None
            else _decode_length_fields(response)
        )
        credential = _FallbackCredential.from_message_fields(
            user=fields.get(1, b""), hashed_token=fields.get(2, b"")
        )
    if credential.app_id != user_id:
        raise RuntimeError(
            f"credential user mismatch: {credential.app_id} != {user_id}"
        )
    return credential


def _bot_token_from(response: bytes):
    """BotToken via the integration's generated module (protobuf present)."""
    from client.proto.hermes_auth_pb2 import BotToken

    return BotToken.FromString(response)


async def attempt_exchange(client: BleakClient, user_id: str):
    """One TokenRequest write + BotToken read on the encrypted link
    (the exact upstream GATT exchange, bluetooth_pairing.py:730-759)."""
    token_char = await find_token_characteristic(client)
    if token_char is None:
        return None  # service hidden — bond required first
    request = _encode_request(user_id)
    response_mode = "write-without-response" not in set(token_char.properties)
    await client.write_gatt_char(token_char, request, response=response_mode)
    response = bytes(await client.read_gatt_char(token_char))
    return _credential_from_response(response, user_id)


def _encode_request(user_id: str) -> bytes:
    """TokenRequest{user_id} bytes — generated module when available."""
    if _USING_INTEGRATION_CLIENT:
        from client.proto.hermes_auth_pb2 import TokenRequest

        return TokenRequest(user_id=user_id).SerializeToString()
    return _encode_token_request(user_id)


async def _safe_disconnect(client: BleakClient) -> None:
    try:
        await client.disconnect()
    except Exception:
        pass


async def mint_over_ble(device: BLEDevice, user_id: str):
    """Connect and mint the credential; OS pairing sheet on encrypted access."""
    print(f"matic_pair: connecting to {device.address}…")
    client = BleakClient(device, timeout=CONNECT_TIMEOUT)
    await client.connect()
    print("matic_pair: OPERATOR — watch for the OS Bluetooth pairing sheet;")
    print("matic_pair:             type the robot's 6-digit code when it appears.")
    deadline = time.monotonic() + PAIR_WAIT_SECONDS
    last_beat = 0.0
    hidden_since = None
    try:
        while time.monotonic() < deadline:
            try:
                credential = await attempt_exchange(client, user_id)
                if credential is not None:
                    return credential
                now = time.monotonic()
                if hidden_since is None:
                    hidden_since = now
                    print(
                        "matic_pair: token characteristic hidden — waiting for pairing…"
                    )
                if now - last_beat >= 5.0:
                    last_beat = now
                    print(f"matic_pair: [{_utc_stamp()}] waiting for pairing/bond…")
                if now - hidden_since >= 15.0:
                    # macOS analogue of upstream's post-bond service-cache drop
                    # (bluetooth_pairing.py:704-715): reconnect to re-resolve.
                    print("matic_pair: reconnecting fresh to re-resolve services…")
                    await _safe_disconnect(client)
                    await asyncio.sleep(1.0)
                    client = BleakClient(device, timeout=CONNECT_TIMEOUT)
                    await client.connect()
                    hidden_since = None
                await asyncio.sleep(GATT_RETRY_SECONDS)
            except Exception as err:
                # A transient failure mid-pairing is expected while the OS
                # sheet is open; upstream retries candidates the same way
                # (bluetooth_pairing.py:786-804). Keep retrying until the
                # deadline.
                print(
                    f"matic_pair: [{_utc_stamp()}] exchange retry "
                    f"({type(err).__name__}: {str(err)[:120]})"
                )
                await asyncio.sleep(GATT_RETRY_SECONDS)
        raise RuntimeError(
            f"pairing/exchange did not complete within {PAIR_WAIT_SECONDS:.0f}s"
        )
    finally:
        await _safe_disconnect(client)


async def mint_flow(args, user_id: str) -> int:
    """Single-event-loop flow (bleak objects are loop-bound)."""
    print("matic_pair: scanning for the robot (Pairing mode ON in the Matic app)…")
    candidates = await scan_for_robot(
        None, args.discover_timeout, args.name, heartbeat=True
    )
    if candidates is None:
        return 2
    if not candidates:
        print("matic_pair: FAIL — no matching advertisement. Is Pairing mode on?")
        return 1
    chosen = choose_candidate(candidates, args.name)
    if chosen is None:
        return 4 if candidates else 1  # refused / nothing contacted
    device = chosen["device"]
    print(
        f"matic_pair: will pair with robot {chosen['name']!r} at "
        f"{device.address.upper()} (rssi={chosen['rssi']})"
    )
    try:
        credential = await mint_over_ble(device, user_id)
    except Exception as err:
        print(f"matic_pair: FAIL — {type(err).__name__}: {err}")
        return 1
    print("matic_pair: VERDICT — CREDENTIAL MINTED OVER BLUETOOTH.")
    print(f"matic_pair: robot user         = {credential.user!r}")
    print(f"matic_pair: robot hashed_token = {credential.hashed_token.hex()}")
    print("matic_pair: HermesCredential.to_storage() (hermes_credential value):")
    print(f"matic_pair: {credential.to_storage()}")
    payload = {
        "robot": chosen["name"],
        "bluetooth_address": device.address.upper(),
        "user_id": user_id,
        "user": credential.user.hex(),
        "hashed_token": credential.hashed_token.hex(),
        "bearer": credential.to_storage(),
        "timestamp": datetime.now(UTC).isoformat(),
    }

    def _save_sync() -> Path:
        save_path = Path(args.save)
        save_path.parent.mkdir(parents=True, exist_ok=True)
        data = json.dumps(payload, indent=2) + "\n"
        fd = os.open(save_path, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
        try:
            with os.fdopen(fd, "w") as handle:
                handle.write(data)
        except Exception:
            try:
                os.close(fd)
            except OSError:
                pass
            raise
        return save_path

    save_path = await asyncio.to_thread(_save_sync)
    print(f"matic_pair: wrote credential to {save_path} (mode 0600)")
    print("matic_pair: this bearer token authorizes this user_id against the robot;")
    print("matic_pair: treat it like a password; see docs/matic-pair.md.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--scan",
        nargs="?",
        const=20.0,
        type=float,
        default=None,
        metavar="N",
        help="smoke/locate mode: scan N seconds (default 20), print matches, exit",
    )
    parser.add_argument(
        "--name",
        default=None,
        metavar="SUBSTRING",
        help="match only advertisements whose local name contains SUBSTRING "
        "(required with multiple robots; e.g. --name matic-a1b2)",
    )
    parser.add_argument(
        "--user-id", default=None, help="Hermes user_id (UUIDv4); default fresh one"
    )
    parser.add_argument(
        "--discover-timeout",
        type=float,
        default=120.0,
        help="seconds to wait for the advertisement (mint mode)",
    )
    parser.add_argument(
        "--save",
        default=str(DEFAULT_SAVE),
        help="credential JSON path (written on success, mode 0600; "
        f"default {DEFAULT_SAVE})",
    )
    args = parser.parse_args()

    if args.user_id is not None:
        try:
            parsed = UUID(str(args.user_id).strip())
        except ValueError:
            parser.error(f"--user-id must be a UUID, got {args.user_id!r}")
        if parsed.version != 4:
            parser.error("--user-id must be a UUIDv4")
        args.user_id = str(parsed)
    user_id = args.user_id or (
        new_hermes_user_id() if new_hermes_user_id else _fallback_new_hermes_user_id()
    )
    print(
        f"matic_pair: user_id={user_id} "
        f"client={'integration' if _USING_INTEGRATION_CLIENT else 'hand-rolled'}"
    )

    if args.scan is not None:
        print(f"matic_pair: smoke scan for {args.scan:.0f}s — no connect, no pairing…")
        candidates = asyncio.run(
            scan_for_robot(args.scan, args.scan, args.name, heartbeat=True)
        )
        if candidates is None:
            return 2
        if not candidates:
            print("matic_pair: smoke scan finished — no matching advertisement seen.")
            print("matic_pair: (robots advertise only during Pairing mode;")
            print("matic_pair:  the stack works if no FAIL line printed above)")
            return 0
        eligible, name_only = eligible_candidates(candidates, args.name)
        for address, entry in sorted(eligible.items()):
            print(
                f"matic_pair: smoke scan saw ROBOT {entry['name']!r} "
                f"({address.upper()}) rssi={entry['rssi']} — Pairing mode looks OPEN."
            )
        for address, entry in sorted(name_only.items()):
            print(
                f"matic_pair: smoke scan saw name-only match {entry['name']!r} "
                f"({address.upper()}) rssi={entry['rssi']} — not contacted "
                "(no Matic service UUID; pass --name to select by name)."
            )
        chosen = choose_candidate(candidates, args.name)
        if chosen is None:
            print("matic_pair: smoke scan: no safe connect target (mint would refuse).")
        else:
            print(
                f"matic_pair: smoke scan: mint would pair with "
                f"{chosen['name']!r} ({chosen['device'].address.upper()})."
            )
        return 0

    return asyncio.run(mint_flow(args, user_id))


if __name__ == "__main__":
    sys.exit(main())
