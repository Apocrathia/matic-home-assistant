# 0.5 product review after the interface overhaul

October 15, 2026, Pacific time. Initial frozen source:
`b6fed2fbd31d5712bc16652c585e9ca1ce2cd1db` (RC24).
This follows the [earlier RC22 review](review-0.5-product.md).

## Complete source scope

Eight disjoint reviews inspected 170 handwritten files, 75,677 lines: integration
and standalone-client Python, Map Studio TypeScript, protocol declarations,
English/source translations, service/metadata definitions, blueprints and delivery
scripts. Per-file SHA-256 hashes, line counts, complete read coverage, and a clean
frozen checkout were checked before and after each review.

Generated protobuf Python, compiled bundles, binary brand assets and dependency
contents were outside manual scope. Required CI separately checks package/fresh
installation and generated-bundle parity. The initial shards reported no P0/P1
findings; follow-up regular review found the legacy recovery regression below.

## Findings and repairs

| Finding | Disposition and evidence |
|---|---|
| P2: replacement pairing can delete another robot's bond before credential verification | Initial repair [a9347abcef0c0b1d64e2ed269cd77a51d664b850](https://github.com/ProspectOre/matic-home-assistant/commit/a9347abcef0c0b1d64e2ed269cd77a51d664b850) binds automatic replacement to the saved address; legacy pairing initially became non-destructive. All 23 client files (9,384 lines), the full repair diff and changed test file were independently re-reviewed with no findings. Its focused Bluetooth/BlueZ run passed 132 tests. Follow-up review found the legacy recovery regression below. |
| P1: legacy identity recovery cannot renew a cached bond | [f917627203b5f8819880371c90dfd9a256123600](https://github.com/ProspectOre/matic-home-assistant/commit/f917627203b5f8819880371c90dfd9a256123600) resumes the existing explicit reset dialog for reauthentication and identity recovery. A fresh exact selection permits one pre-connect removal attempt per path for the flow's lifetime. Host preflight, selected-address binding, fresh-passkey proof and final authenticated identity checks remain mandatory. No automatic fallback removes another candidate's bond. |
| P2: concurrent AlreadyExists bond classification can reach GATT without scoped passkey proof | [1c2cccfae91fba8a4980c164196bca585ecab12b](https://github.com/ProspectOre/matic-home-assistant/commit/1c2cccfae91fba8a4980c164196bca585ecab12b) leaves this state unknown unless the same candidate requested, submitted and answered a passkey. Unknown state stops before GATT service discovery or credential exchange. The existing in-progress SMP ordering is preserved. This was a pre-GATT guard gap; no identity-persistence bypass was established. |
| P2: performance collector cannot reach the v0.4.5 baseline room list | [PR #266](https://github.com/ProspectOre/matic-home-assistant/pull/266), merge `771084d509921e7e525e708b23ae9017aa55da8e`, accepts both One-time clean and Clean rooms. Independent source review covered the repair; regular review and required CI passed. The [performance receipt](performance-0.5-rc24.md) binds actual measurements to the private collector's identical locator fix. |

The first client repair review and its published commit have identical complete
Git trees: `21edbc14c2167835cbf4ffb089d3107aebea8369`. Follow-up client and auth
reviews bind all affected source and consumer tests to `1c2cccfae91fba8a4980c164196bca585ecab12b`;
the final candidate comparison rechecks those file hashes and unchanged shards.
That code passed 5,000 Python tests with 100% coverage, including 245 focused
Bluetooth/BlueZ/flow/recovery cases; Ruff, formatting and typing checks passed.

An area-session completion concern was withdrawn after tracing the area-specific
contract and an independent adjudication: areas record `owned_session_ended`,
without room coverage/cadence credit. Requiring a dock after each area would
conflict with mixed-plan handoff. Source cannot establish whether robot-side Stop
and natural completion emit distinguishable signals; the supervised
[completion and Stop runs](owner-gate-f-run-sheet.md) remain necessary.

The release PR's final review and hash comparison bind this source coverage to
the assembled RC25 candidate. Release/version and collector changes also require
review. A later product edit invalidates affected source coverage.

## Limits

Source review supplies no physical Bluetooth pairing, robot movement, touch or
screen-reader verdict. RC24's [runtime readback](verification-0.5-rc24.md) applies
to that installed candidate; RC25 needs its own installation and readback.
Performance, recovery, live transport, device and owner gates remain independent.
