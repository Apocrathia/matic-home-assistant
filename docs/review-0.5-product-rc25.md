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
installation and generated-bundle parity. No P0/P1 findings were identified.

## Findings and repairs

| Finding | Disposition and evidence |
|---|---|
| P2: replacement pairing can delete another robot's bond before credential verification | Published repair [a9347abcef0c0b1d64e2ed269cd77a51d664b850](https://github.com/ProspectOre/matic-home-assistant/commit/a9347abcef0c0b1d64e2ed269cd77a51d664b850): require the saved Bluetooth address before destructive replacement; legacy entries without an address use non-destructive pairing. All 23 client files (9,384 lines), the full repair diff and changed test file were independently re-reviewed with no findings. Focused Bluetooth/BlueZ tests: 132 passed; Ruff and formatting passed. |
| P2: performance collector cannot reach the v0.4.5 baseline room list | [PR #266](https://github.com/ProspectOre/matic-home-assistant/pull/266), merge `771084d509921e7e525e708b23ae9017aa55da8e`, accepts both One-time clean and Clean rooms. Independent source review covered the repair; regular review and required CI passed. The [performance receipt](performance-0.5-rc24.md) binds actual measurements to the private collector's identical locator fix. |

The independent client review's frozen checkout and the published Bluetooth
repair have identical complete Git trees: `21edbc14c2167835cbf4ffb089d3107aebea8369`.
The final candidate comparison rechecks every client file against that review.

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
