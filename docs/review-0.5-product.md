# 0.5 independent product and architecture review

October 11, 2026, Pacific time. Initial frozen source:
`c8d266834f5e0c86f71dedd10f7965827bd0c034`; repairs are grouped in [PR #245](https://github.com/ProspectOre/matic-home-assistant/pull/245).

## Scope

Independent, disjoint source reviews covered every handwritten integration and
standalone-client Python file, all Map Studio TypeScript files, the static icon
provider, integration metadata and service definitions, English/source
translations, five automation blueprints, and frontend build/normalization.
The review inspected contracts, ownership, error handling, persistence,
compatibility, user interaction and resource bounds. Generated protobuf code and
compiled bundles were excluded from manual source scope; package/fresh imports
and generated-bundle parity remain required automated checks.

## Findings and repairs

No P0/P1 findings were identified. All seven P2 findings were reproduced or
established from source before repair:

| Finding | Repair and regression evidence |
|---|---|
| An unsupported optional telemetry endpoint aborts successful sibling reads | Optional readers preserve sibling telemetry and endpoint-health failures; full telemetry and collection regressions cover unsupported endpoints. |
| Dense floor/flythrough payloads allocate before checking collection limits | Per-message and shared floor field budgets bound allocation before materialization; tests count actual field constructions at root and nested levels. The same preallocation principle now applies to firmware wire-shape fingerprints. |
| A failed default-agent request permits an unbonded GATT connection whose robot-initiated security can use another agent | Check scoped default-agent readiness or BlueZ's existing bond before connection; tests reject unknown/unbonded paths without connecting, preserve verified bonds and registration cleanup. Explicit same-bus Pair already selects its registered agent; the broader initial claim against that path was withdrawn. |
| Ownerless Stop fencing clears at idle before Dock settlement | Only confirmed docked/charging states clear the fence; idle/native-inactive regression preserves it and the existing watcher verifies Dock then settlement. |
| Native-session sensor treats returning as authoritative activity | Project raw-derived native activity directly, preserving true, false and unknown values. |
| Pose TTL and in-flight reads can cross a floor/session revocation | Bind cached/read poses to map identity, browser session and floor-generation epoch; tests cover cached floor changes, same-key revocation and queued readers. |
| Historical scene read survives runtime/store replacement during its await | Recheck loaded runtime and captured history store before returning private scene bytes; regressions cover unload and both replacements. |

Complete re-review of every changed source shard and its regressions found no
unresolved findings. A producer/consumer refinement replaced frame-revoked HTTP
errors with the established typed unavailable pose response, clearing the prior
marker even after the session key returns to its former value. Chromium and
WebKit verified this consumer behavior. The final local suite passes 4,498 tests
at 100% of 18,075 statements; Ruff, formatting, strict mypy and privacy pass.
Regular review and required hosted CI still apply to the final PR head.

## Limits

This review establishes source coverage and finding dispositions. It does not
attest generated dependency contents or whole-process identity and cannot
establish physical movement, hardware pairing, touch/screen-reader behavior,
performance budgets or owner acceptance. Bluetooth agent-selection calibration
uses [BlueZ AgentManager](https://github.com/bluez/bluez/blob/master/doc/org.bluez.AgentManager.rst)
and [Device](https://github.com/bluez/bluez/blob/master/doc/org.bluez.Device.rst)
contracts; the failed-default-agent hardware path was not exercised live.
