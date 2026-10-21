# Pairing without a Home Assistant Bluetooth adapter

[Local pairing](hermes-pairing.md) · [Firmware compatibility](firmware-compatibility.md)

`scripts/matic_pair.py` mints a robot credential over Bluetooth from any machine
with its own adapter — a Mac, a laptop, a spare Linux box — when the Home
Assistant host has no usable Bluetooth adapter (a VM, a container without
D-Bus). It reproduces the integration's BLE pairing stack
(`custom_components/matic_robot/bluetooth_pairing.py`) and prints the
credential exactly as the integration stores it, ready to import into a
config entry.

```bash
# Look around (scan only; no connection, no pairing):
python scripts/matic_pair.py --scan 20

# Mint (requires a robot with Pairing mode on; see below):
python scripts/matic_pair.py --name matic-9ddr
```

Only `bleak` must be installed (`pip install bleak`). Inside the repository
checkout the script reuses the integration's Home Assistant-agnostic client
modules (`client/auth.py`, `client/wire.py`); outside it, or without the
`protobuf` package, it falls back to a hand-rolled codec for the two pairing
messages.

## Fleet safety — always pass --name with multiple robots

The robot advertises only while Pairing mode is open in the Matic app
(Settings → Connectivity → Add another user), roughly a 20-second window. The
script then:

1. matches advertisements carrying Matic's BLE service UUID
   (`5b14adcd-…`) or the name you selected with `--name <substring>`, and
2. **refuses to connect when more than one distinct robot name is
   advertising** unless `--name` narrows the choice, and
3. never contacts devices that merely pass the name predicate: household
   devices *named* "Matic" (a common given name) are ignored unless they carry
   the service UUID or an explicit `--name` match.

It prints the robot it is about to pair with before connecting. Exit code 4
means the refusal fired; nothing was contacted.

## What you will see

Scan lines for matches, `connecting…`, and then the operating system's
Bluetooth pairing sheet — type the six-digit code shown on the robot. After
the link encrypts, the script completes the token exchange and prints
`HermesCredential.to_storage()` — the same base64 string the integration
stores as `hermes_credential` — and writes
`.private/matic_pair_result.json` (mode 0600; `.private/` is gitignored as
live robot material). The JSON carries `robot`, `bluetooth_address`, `user_id`,
`user`, `hashed_token`, `bearer`, `timestamp`.

Import note: on macOS, `bluetooth_address` is the machine's rotating
LE-privacy pseudo-address, not the robot's real BD_ADDR — do not copy it
into a config entry; entries without a stored address are fully supported.
The entry's `host`/`port` come from the robot's mDNS service as usual.

## Platform support

| Platform | Status |
| --- | --- |
| macOS (CoreBluetooth) | **Verified live**, two robots in range (2026-10-21). Pairing is implicit: the robot's SMP Security Request and/or the encrypted token write raises the OS sheet. bleak's `pair()` is unavailable by design. |
| Linux (BlueZ) | Untested. `bleak pair()`, a scoped `org.bluez.Agent1` (the integration's `bluez_agent.py` is the reference) or `bluetoothctl default-agent` replaces the OS sheet. |
| Windows (WinRT) | Untested. WinRT raises a system pairing dialog. |

## Secrets

The printed value and the JSON file are a live bearer credential for the
`user_id` used at mint time — treat them like passwords. Do not commit them
(`.private/` is gitignored); remove the minted user in the Matic app when it
is no longer needed; deleting the file does not revoke the robot-side grant.
