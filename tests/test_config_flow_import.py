"""Manual pairing import: paste a minted credential instead of Bluetooth pairing.

The import step must accept exactly the storage form the Bluetooth flow writes
(``HermesCredential.to_storage()``, optionally with the ``Bearer: `` header
prefix), validate it live over the pinned LAN channel, and produce an entry
indistinguishable from a Bluetooth pairing — minus the Bluetooth address, which
only a local adapter can confirm.
"""

from __future__ import annotations

import base64
import hashlib
from dataclasses import replace
from unittest.mock import AsyncMock, MagicMock

import pytest
from homeassistant import config_entries
from homeassistant.data_entry_flow import FlowResultType
from homeassistant.helpers import issue_registry as ir
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.matic_robot import config_flow as flow_module
from custom_components.matic_robot.client.auth import HermesCredential
from custom_components.matic_robot.client.exceptions import (
    AuthenticationRequiredError,
    CannotConnectError,
    CertificateMismatchError,
    EndpointUnsupportedError,
    InvalidRobotCertificateError,
    PairingModeRequiredError,
)
from custom_components.matic_robot.client.models import RobotInfo
from custom_components.matic_robot.client.proto.hermes_auth_pb2 import (
    BotToken,
    TokenRequest,
)
from custom_components.matic_robot.client.tls import PeerIdentity
from custom_components.matic_robot.config_flow import MaticRobotConfigFlow
from custom_components.matic_robot.const import (
    CONF_BLUETOOTH_ADDRESS,
    CONF_CERTIFICATE_FINGERPRINT,
    CONF_HERMES_CREDENTIAL,
    CONF_HOSTNAME,
    CONF_SERIAL_NUMBER,
    DOMAIN,
)

CONF_IMPORT_CREDENTIAL = flow_module.CONF_IMPORT_CREDENTIAL

USER_ID = "40dd38c5-0492-49de-b333-41f16f67471e"
TEST_CREDENTIAL = HermesCredential(
    b"synthetic-token",
    TokenRequest(user_id=USER_ID).SerializeToString(),
)
REPLACEMENT_CREDENTIAL = HermesCredential(
    b"replacement-token",
    TokenRequest(user_id="4c908528-5e07-4618-b5f5-7cee90a34626").SerializeToString(),
)
IDENTITY = PeerIdentity("00" * 32, "robot.invalid", "synthetic", "robot_server")
NEW_FINGERPRINT = hashlib.sha256(b"new certificate").hexdigest()
HOST = "192.0.2.1"
PORT = 16320
ENTRY_DATA = {
    "host": HOST,
    "port": PORT,
    CONF_HOSTNAME: "robot.invalid",
    CONF_SERIAL_NUMBER: "synthetic",
    CONF_CERTIFICATE_FINGERPRINT: "00" * 32,
    CONF_HERMES_CREDENTIAL: TEST_CREDENTIAL.to_storage(),
}


@pytest.fixture(autouse=True)
def _local_bluetooth_adapter(monkeypatch) -> None:
    """Pass the flow's adapter pre-check; import tests override it."""
    monkeypatch.setattr(
        flow_module, "async_has_local_bluetooth_adapter", lambda _hass: True
    )


def _info(*, requires_auth: bool = False) -> RobotInfo:
    return RobotInfo(
        "synthetic",
        "Test Robot",
        "robot.invalid",
        PORT,
        HOST,
        "2001:db8::1",
        True,
        requires_auth,
        requires_auth,
        "test-hardware",
    )


class _Client:
    """A pinned-channel stand-in the flow can open and close."""

    def __init__(self, get_info: AsyncMock) -> None:
        self.async_get_info = get_info
        self.exited = False

    async def __aenter__(self) -> _Client:
        return self

    async def __aexit__(self, *args) -> None:
        self.exited = True


class _Recorder:
    """Collect every client the flow opens, like the pairing-path tests."""

    def __init__(
        self,
        *,
        reject_credentials: bool = False,
        wrong_serial: bool = False,
        client_error: Exception | None = None,
    ) -> None:
        self.calls: list[dict] = []
        self.reject_credentials = reject_credentials
        self.wrong_serial = wrong_serial
        self.client_error = client_error

    def factory(self, *args, **kwargs) -> _Client:
        self.calls.append({"args": args, "kwargs": kwargs})
        info = (
            replace(_info(), serial_number="another-serial")
            if self.wrong_serial
            else _info()
        )
        if self.client_error is not None:
            get_info = AsyncMock(side_effect=self.client_error)
        elif self.reject_credentials and kwargs.get("credential") is not None:
            get_info = AsyncMock(side_effect=AuthenticationRequiredError())
        else:
            get_info = AsyncMock(return_value=info)
        return _Client(get_info)


def _flow(hass) -> MaticRobotConfigFlow:
    flow = MaticRobotConfigFlow()
    flow.hass = hass
    flow.context = {}
    flow.async_set_unique_id = AsyncMock()
    flow._abort_if_unique_id_configured = MagicMock()
    flow._abort_if_unique_id_mismatch = MagicMock()
    return flow


def _mock_robot(monkeypatch, *, reject_credentials: bool = False) -> _Recorder:
    recorder = _Recorder(reject_credentials=reject_credentials)
    monkeypatch.setattr(
        flow_module, "async_fetch_peer_certificate", AsyncMock(return_value=b"c")
    )
    monkeypatch.setattr(
        flow_module, "validate_certificate", MagicMock(return_value=IDENTITY)
    )
    monkeypatch.setattr(flow_module, "MaticHermesClient", recorder.factory)
    return recorder


async def _drive_setup_import(flow: MaticRobotConfigFlow, value: str):
    form = await flow.async_step_pair()
    assert form["type"] is FlowResultType.FORM
    assert form["step_id"] == "pair"
    assert CONF_IMPORT_CREDENTIAL in form["data_schema"].schema
    picked = await flow.async_step_pair({CONF_IMPORT_CREDENTIAL: True})
    assert picked["type"] is FlowResultType.FORM
    assert picked["step_id"] == "import_credential"
    return await flow.async_step_import_credential({CONF_HERMES_CREDENTIAL: value})


@pytest.mark.parametrize("adapter", [False, True])
async def test_import_creates_an_entry_identical_to_a_paired_robot(
    hass, monkeypatch, adapter
) -> None:
    """Import works with and without a local adapter and validates live."""
    monkeypatch.setattr(
        flow_module,
        "async_has_local_bluetooth_adapter",
        lambda _hass: adapter,
    )
    recorder = _mock_robot(monkeypatch)
    flow = _flow(hass)
    flow._pairing_data = {"host": HOST, "port": PORT}

    result = await _drive_setup_import(flow, TEST_CREDENTIAL.to_storage())

    assert result["type"] is FlowResultType.CREATE_ENTRY
    assert result["data"] == {
        "host": HOST,
        "port": PORT,
        CONF_HOSTNAME: "robot.invalid",
        CONF_SERIAL_NUMBER: "synthetic",
        CONF_CERTIFICATE_FINGERPRINT: "00" * 32,
        CONF_HERMES_CREDENTIAL: TEST_CREDENTIAL.to_storage(),
    }
    assert CONF_BLUETOOTH_ADDRESS not in result["data"]
    # The credential was checked live on the pinned channel: one
    # authenticated read plus one post-credential read, both carrying it.
    assert len(recorder.calls) == 2
    assert all(
        call["kwargs"]["credential"] == TEST_CREDENTIAL for call in recorder.calls
    )
    flow.async_set_unique_id.assert_awaited_once_with("synthetic")


@pytest.mark.parametrize(
    "pasted",
    [
        TEST_CREDENTIAL.to_storage(),
        "Bearer: " + TEST_CREDENTIAL.to_storage(),
        '  "' + TEST_CREDENTIAL.to_storage() + '" ',
    ],
    ids=["bare", "bearer-prefixed", "quoted"],
)
async def test_import_accepts_bearer_and_quoted_pastes(
    hass, monkeypatch, pasted
) -> None:
    """The header form of the stored credential pastes cleanly."""
    recorder = _mock_robot(monkeypatch)
    flow = _flow(hass)
    flow._pairing_data = {"host": HOST, "port": PORT}

    result = await _drive_setup_import(flow, pasted)

    assert result["type"] is FlowResultType.CREATE_ENTRY
    assert result["data"][CONF_HERMES_CREDENTIAL] == TEST_CREDENTIAL.to_storage()
    assert all(
        call["kwargs"]["credential"] == TEST_CREDENTIAL for call in recorder.calls
    )


async def test_import_rejects_a_credential_the_robot_refuses(hass, monkeypatch) -> None:
    """A live authentication failure stays on the import form."""
    recorder = _mock_robot(monkeypatch, reject_credentials=True)
    flow = _flow(hass)
    flow._pairing_data = {"host": HOST, "port": PORT}

    result = await _drive_setup_import(flow, TEST_CREDENTIAL.to_storage())

    assert result["type"] is FlowResultType.FORM
    assert result["step_id"] == "import_credential"
    assert result["errors"] == {"base": "import_rejected"}
    # The robot saw the imported credential on the pinned channel.
    assert recorder.calls and recorder.calls[0]["kwargs"]["credential"] is not None


@pytest.mark.parametrize(
    "pasted",
    [
        pytest.param("", id="empty"),
        pytest.param("not base64!", id="not-base64"),
        pytest.param("Bearer: /w==", id="bearer-empty-payload"),
        pytest.param(
            "Bearer: " + base64.b64encode(b"\xff\xff\xff\xff").decode(),
            id="protobuf-garbage",
        ),
        pytest.param(
            base64.b64encode(BotToken().SerializeToString()).decode(),
            id="empty-bot-token",
        ),
    ],
)
async def test_import_rejects_malformed_credential_strings(
    hass, monkeypatch, pasted
) -> None:
    """Strings that are not a stored credential never reach the robot."""
    fetch = AsyncMock()
    monkeypatch.setattr(flow_module, "async_fetch_peer_certificate", fetch)
    flow = _flow(hass)
    flow._pairing_data = {"host": HOST, "port": PORT}

    form = await flow.async_step_pair({CONF_IMPORT_CREDENTIAL: True})
    assert form["step_id"] == "import_credential"
    result = await flow.async_step_import_credential({CONF_HERMES_CREDENTIAL: pasted})

    assert result["type"] is FlowResultType.FORM
    assert result["step_id"] == "import_credential"
    assert result["errors"] == {CONF_HERMES_CREDENTIAL: "malformed_credential"}
    fetch.assert_not_awaited()


@pytest.mark.parametrize("adapter", [False, True])
async def test_pair_step_offers_import_and_keeps_bluetooth(
    hass, monkeypatch, adapter
) -> None:
    """Without an adapter the import option replaces the hard failure; with
    one, both paths stay available."""
    monkeypatch.setattr(
        flow_module,
        "async_has_local_bluetooth_adapter",
        lambda _hass: adapter,
    )
    _mock_robot(monkeypatch)
    flow = _flow(hass)
    flow._pairing_data = {"host": HOST, "port": PORT}

    form = await flow.async_step_pair()
    assert CONF_IMPORT_CREDENTIAL in form["data_schema"].schema
    unchecked = await flow.async_step_pair({})
    if adapter:
        # The Bluetooth path is untouched: submitting the unchecked form
        # starts the live pairing progress.
        assert unchecked["type"] is FlowResultType.SHOW_PROGRESS
        assert flow._pairing_task is not None
        await flow._pairing_task
        finished = await flow.async_step_finish()
        assert finished["type"] is FlowResultType.CREATE_ENTRY
        assert flow._pairing_task is None
    else:
        # Without an adapter the old hard failure stays, and the import
        # checkbox is presented alongside it on the same form.
        assert unchecked["type"] is FlowResultType.FORM
        assert unchecked["step_id"] == "pair"
        assert CONF_IMPORT_CREDENTIAL in unchecked["data_schema"].schema
        assert unchecked["errors"] == {"base": "bluetooth_unavailable"}
        assert flow._pairing_task is None


async def test_reauth_import_replaces_the_saved_credential(hass, monkeypatch) -> None:
    """Reauth can finish with an imported credential, entry data updates."""
    entry = MockConfigEntry(domain=DOMAIN, unique_id="synthetic", data=ENTRY_DATA)
    entry.add_to_hass(hass)
    monkeypatch.setattr(hass.config_entries, "async_schedule_reload", MagicMock())
    recorder = _mock_robot(monkeypatch)
    flow = MaticRobotConfigFlow()
    flow.hass = hass
    flow.handler = DOMAIN
    flow.context = {
        "source": config_entries.SOURCE_REAUTH,
        "entry_id": entry.entry_id,
        "unique_id": "synthetic",
    }

    form = await flow.async_step_reauth_confirm()
    assert form["step_id"] == "reauth_confirm"
    assert CONF_IMPORT_CREDENTIAL in form["data_schema"].schema
    picked = await flow.async_step_reauth_confirm({CONF_IMPORT_CREDENTIAL: True})
    assert picked["step_id"] == "import_credential"
    result = await flow.async_step_import_credential(
        {CONF_HERMES_CREDENTIAL: REPLACEMENT_CREDENTIAL.to_storage()}
    )

    assert result["type"] is FlowResultType.ABORT
    assert result["reason"] == "reauth_successful"
    assert entry.data[CONF_HERMES_CREDENTIAL] == REPLACEMENT_CREDENTIAL.to_storage()
    assert entry.data["host"] == HOST
    assert recorder.calls[0]["kwargs"]["credential"] == REPLACEMENT_CREDENTIAL


async def test_reauth_import_reports_live_errors(hass, monkeypatch) -> None:
    """A refused reauth import stays on the form and changes nothing."""
    entry = MockConfigEntry(domain=DOMAIN, unique_id="synthetic", data=ENTRY_DATA)
    entry.add_to_hass(hass)
    _mock_robot(monkeypatch, reject_credentials=True)
    flow = MaticRobotConfigFlow()
    flow.hass = hass
    flow.handler = DOMAIN
    flow.context = {
        "source": config_entries.SOURCE_REAUTH,
        "entry_id": entry.entry_id,
        "unique_id": "synthetic",
    }

    await flow.async_step_reauth_confirm({CONF_IMPORT_CREDENTIAL: True})
    result = await flow.async_step_import_credential(
        {CONF_HERMES_CREDENTIAL: REPLACEMENT_CREDENTIAL.to_storage()}
    )

    assert result["type"] is FlowResultType.FORM
    assert result["errors"] == {"base": "import_rejected"}
    assert entry.data[CONF_HERMES_CREDENTIAL] == TEST_CREDENTIAL.to_storage()


async def test_recover_import_repins_a_reset_robot(hass, monkeypatch) -> None:
    """Identity recovery finishes with an imported credential and a new pin."""
    entry = MockConfigEntry(domain=DOMAIN, unique_id="synthetic", data=ENTRY_DATA)
    entry.add_to_hass(hass)
    issue_id = f"robot_identity_changed_{entry.entry_id}"
    ir.async_create_issue(
        hass,
        DOMAIN,
        issue_id,
        data={"entry_id": entry.entry_id},
        is_fixable=True,
        severity=ir.IssueSeverity.ERROR,
        translation_key="robot_identity_changed",
    )
    monkeypatch.setattr(
        flow_module,
        "async_fetch_peer_certificate",
        AsyncMock(return_value=b"new certificate"),
    )
    monkeypatch.setattr(
        flow_module,
        "validate_certificate",
        MagicMock(
            return_value=PeerIdentity(
                NEW_FINGERPRINT, "robot.invalid", "synthetic", "robot_server"
            )
        ),
    )
    recorder = _Recorder()
    monkeypatch.setattr(flow_module, "MaticHermesClient", recorder.factory)
    monkeypatch.setattr(hass.config_entries, "async_schedule_reload", MagicMock())
    flow = MaticRobotConfigFlow()
    flow.hass = hass
    flow.handler = DOMAIN
    flow.context = {
        "source": config_entries.SOURCE_RECONFIGURE,
        "entry_id": entry.entry_id,
    }
    recovery = {"robot_address": {"host": "192.0.2.9", "port": PORT}}

    picked = await flow.async_step_recover_identity(
        {**recovery, CONF_IMPORT_CREDENTIAL: True}
    )
    assert picked["type"] is FlowResultType.FORM
    assert picked["step_id"] == "import_credential"
    result = await flow.async_step_import_credential(
        {CONF_HERMES_CREDENTIAL: REPLACEMENT_CREDENTIAL.to_storage()}
    )

    assert result["type"] is FlowResultType.ABORT
    assert result["reason"] == "identity_recovered"
    assert result["description_placeholders"] == {"name": entry.title}
    assert entry.data == {
        **ENTRY_DATA,
        "host": "192.0.2.9",
        CONF_CERTIFICATE_FINGERPRINT: NEW_FINGERPRINT,
        CONF_HERMES_CREDENTIAL: REPLACEMENT_CREDENTIAL.to_storage(),
    }
    assert recorder.calls[0]["kwargs"]["credential"] == REPLACEMENT_CREDENTIAL
    assert recorder.calls[0]["kwargs"]["certificate_fingerprint"] == NEW_FINGERPRINT
    assert ir.async_get(hass).async_get_issue(DOMAIN, issue_id) is None


@pytest.mark.parametrize("adapter", [False, True])
async def test_recover_step_offers_import_and_keeps_bluetooth(
    hass, monkeypatch, adapter
) -> None:
    """The recovery form always offers the import path, adapter or not."""
    monkeypatch.setattr(
        flow_module,
        "async_has_local_bluetooth_adapter",
        lambda _hass: adapter,
    )
    entry = MockConfigEntry(domain=DOMAIN, unique_id="synthetic", data=ENTRY_DATA)
    entry.add_to_hass(hass)
    monkeypatch.setattr(
        flow_module,
        "async_fetch_peer_certificate",
        AsyncMock(return_value=b"new certificate"),
    )
    monkeypatch.setattr(
        flow_module,
        "validate_certificate",
        MagicMock(return_value=IDENTITY),
    )
    # Keep the live Bluetooth runner from touching real BLE machinery.
    monkeypatch.setattr(
        flow_module,
        "async_request_bluetooth_credential",
        AsyncMock(side_effect=PairingModeRequiredError("no pairing window")),
    )
    monkeypatch.setattr(flow_module, "PAIRING_ATTEMPTS", 1)
    monkeypatch.setattr(flow_module.asyncio, "sleep", AsyncMock())
    flow = MaticRobotConfigFlow()
    flow.hass = hass
    flow.handler = DOMAIN
    flow.context = {
        "source": config_entries.SOURCE_RECONFIGURE,
        "entry_id": entry.entry_id,
    }
    recovery = {"robot_address": {"host": "192.0.2.9", "port": PORT}}

    form = await flow.async_step_recover_identity()
    assert form["step_id"] == "recover_identity"
    assert CONF_IMPORT_CREDENTIAL in form["data_schema"].schema
    unchecked = await flow.async_step_recover_identity(dict(recovery))
    if adapter:
        # The Bluetooth path is untouched: the live pairing runner starts.
        assert unchecked["type"] is FlowResultType.SHOW_PROGRESS
        assert flow._pairing_task is not None
        await flow._pairing_task
        result = await flow.async_step_finish()
        assert result["type"] is FlowResultType.FORM
        assert result["errors"] == {"base": "robot_not_found"}
    else:
        # Without an adapter the old hard failure stays, and the import
        # checkbox is presented alongside it on the same form.
        assert unchecked["type"] is FlowResultType.FORM
        assert unchecked["step_id"] == "recover_identity"
        assert CONF_IMPORT_CREDENTIAL in unchecked["data_schema"].schema
        assert unchecked["errors"] == {"base": "bluetooth_unavailable"}
        assert flow._pairing_task is None
        picked = await flow.async_step_recover_identity(
            {**recovery, CONF_IMPORT_CREDENTIAL: True}
        )
        assert picked["step_id"] == "import_credential"


@pytest.mark.parametrize(
    ("failure", "expected"),
    [
        pytest.param(CannotConnectError("offline"), "cannot_connect", id="offline"),
        pytest.param(
            CertificateMismatchError("changed"), "certificate_changed", id="cert"
        ),
        pytest.param(
            InvalidRobotCertificateError("not a robot"),
            "invalid_certificate",
            id="bad-cert",
        ),
        pytest.param(
            EndpointUnsupportedError("no Handshake"),
            "cannot_connect",
            id="unsupported",
        ),
    ],
)
async def test_reauth_import_reports_connection_errors(
    hass, monkeypatch, failure, expected
) -> None:
    """Connection and certificate failures keep the import form open."""
    entry = MockConfigEntry(domain=DOMAIN, unique_id="synthetic", data=ENTRY_DATA)
    entry.add_to_hass(hass)
    monkeypatch.setattr(
        flow_module,
        "async_fetch_peer_certificate",
        AsyncMock(side_effect=failure)
        if not isinstance(failure, EndpointUnsupportedError)
        else AsyncMock(return_value=b"c"),
    )
    flow = MaticRobotConfigFlow()
    flow.hass = hass
    flow.handler = DOMAIN
    flow.context = {
        "source": config_entries.SOURCE_REAUTH,
        "entry_id": entry.entry_id,
        "unique_id": "synthetic",
    }

    monkeypatch.setattr(
        flow_module, "validate_certificate", MagicMock(return_value=IDENTITY)
    )
    monkeypatch.setattr(
        flow_module,
        "MaticHermesClient",
        _Recorder(client_error=failure).factory,
    )

    await flow.async_step_reauth_confirm({CONF_IMPORT_CREDENTIAL: True})
    result = await flow.async_step_import_credential(
        {CONF_HERMES_CREDENTIAL: REPLACEMENT_CREDENTIAL.to_storage()}
    )

    assert result["type"] is FlowResultType.FORM
    assert result["errors"] == {"base": expected}
    assert entry.data[CONF_HERMES_CREDENTIAL] == TEST_CREDENTIAL.to_storage()


@pytest.mark.parametrize(
    ("case", "expected"),
    [
        pytest.param("second_fetch_offline", "recover_cannot_connect", id="offline"),
        pytest.param("refused", "import_rejected", id="refused"),
        pytest.param("wrong_serial", "invalid_certificate", id="wrong-serial"),
        pytest.param("another_robot", "different_robot", id="another-robot"),
        pytest.param("unsupported", "recover_cannot_connect", id="unsupported"),
    ],
)
async def test_recover_import_reports_live_errors(
    hass, monkeypatch, case, expected
) -> None:
    """A refused import never writes the entry or dismisses the Repair."""
    entry = MockConfigEntry(domain=DOMAIN, unique_id="synthetic", data=ENTRY_DATA)
    entry.add_to_hass(hass)
    issue_id = f"robot_identity_changed_{entry.entry_id}"
    ir.async_create_issue(
        hass,
        DOMAIN,
        issue_id,
        data={"entry_id": entry.entry_id},
        is_fixable=True,
        severity=ir.IssueSeverity.ERROR,
        translation_key="robot_identity_changed",
    )
    same_robot = PeerIdentity(
        NEW_FINGERPRINT, "robot.invalid", "synthetic", "robot_server"
    )
    other_robot = PeerIdentity(
        NEW_FINGERPRINT, "robot.invalid", "another-serial", "robot_server"
    )
    monkeypatch.setattr(
        flow_module,
        "async_fetch_peer_certificate",
        AsyncMock(side_effect=[b"new certificate", CannotConnectError("offline")])
        if case == "second_fetch_offline"
        else AsyncMock(return_value=b"new certificate"),
    )
    monkeypatch.setattr(
        flow_module,
        "validate_certificate",
        MagicMock(
            side_effect=[same_robot, same_robot, other_robot, other_robot]
            if case == "another_robot"
            else MagicMock(return_value=same_robot)
        ),
    )
    recorder = _Recorder(
        reject_credentials=case == "refused",
        wrong_serial=case == "wrong_serial",
        client_error=EndpointUnsupportedError("no Handshake")
        if case == "unsupported"
        else None,
    )
    monkeypatch.setattr(flow_module, "MaticHermesClient", recorder.factory)
    flow = MaticRobotConfigFlow()
    flow.hass = hass
    flow.handler = DOMAIN
    flow.context = {
        "source": config_entries.SOURCE_RECONFIGURE,
        "entry_id": entry.entry_id,
    }
    recovery = {"robot_address": {"host": "192.0.2.9", "port": PORT}}

    await flow.async_step_recover_identity({**recovery, CONF_IMPORT_CREDENTIAL: True})
    result = await flow.async_step_import_credential(
        {CONF_HERMES_CREDENTIAL: REPLACEMENT_CREDENTIAL.to_storage()}
    )

    assert result["type"] is FlowResultType.FORM
    assert result["errors"] == {"base": expected}
    assert entry.data == ENTRY_DATA
    assert ir.async_get(hass).async_get_issue(DOMAIN, issue_id) is not None
