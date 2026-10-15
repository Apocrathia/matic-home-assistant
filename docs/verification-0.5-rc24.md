# RC24 release qualification

RC24 packages the 0.5 interface overhaul and the cleaning refinements merged in
[PR #264](https://github.com/ProspectOre/matic-home-assistant/pull/264).
RC23 was never tagged. Stable remains `v0.4.8` until the acceptance gates close.
This receipt records source/publication and scoped lab evidence, not stable approval.

## Candidate and source evidence

- Release commit: `b6fed2fbd31d5712bc16652c585e9ca1ce2cd1db`.
- [PR #265](https://github.com/ProspectOre/matic-home-assistant/pull/265) merged October 15, 2026 at 8:51 AM PDT.
  Its reviewed head `811c1699b94cf96203299a16f1165cea9ace3260` and release commit have identical trees.
  Intended base: `630029aef521ff0d5492ed8012d95b94e675da1d`.
- [Complete regular review](https://github.com/ProspectOre/matic-home-assistant/pull/265#issuecomment-6195850399):
  clean for the unchanged comparison; no finding threads.
- [Browser CI](https://github.com/ProspectOre/matic-home-assistant/actions/runs/38760669141):
  2,485 passed, six skips.
- [Test CI](https://github.com/ProspectOre/matic-home-assistant/actions/runs/38760669143):
  4,978 passed, 100% coverage; lint, types, package and fresh-install checks pass.
- [Validate](https://github.com/ProspectOre/matic-home-assistant/actions/runs/38760669286):
  HACS and hassfest pass. Native protections were refreshed before manual merge.
- Product changes retain their own [PR #264 review](https://github.com/ProspectOre/matic-home-assistant/pull/264#issuecomment-6187889389)
  of `744d646be5f99d8341832dca7bb7f168c4efe563` against `b03a3839e7eefe50cd4205835d280aca4b1695ba`;
  the stop-settle finding was fixed and resolved before its merge.

## Publication and rollback preparation

[RC24](https://github.com/ProspectOre/matic-home-assistant/releases/tag/v0.5.0-rc24)
was published at 8:52 AM PDT on October 15. Its tag resolves to the release commit
above; manifest version is `0.5.0rc24`. All 101 integration files in GitHub's
source ZIP match that commit byte for byte. HACS lists RC24 as available.
HACS consumes the repository source; no separate release asset is required.

RC22's source ZIP and complete Git-history bundle were verified and retained
privately before removing its release and remote/local tag. Reviewed rollback
commit: `c00f878947874ce3724c73d811f1c46f09db8f4a`. RC24 is the only RC release/tag;
stable releases and tags remain preserved.

A native encrypted HA configuration backup was downloaded off-host and fully
authenticated with its separately retained key. It contains 4,178 files, including
plans, configuration and automations; all 93 installed RC22 integration files
match reviewed RC22. Recorder database/WAL and add-on data were excluded.
No plaintext configuration was extracted. This proves backup content and key,
not a performed restore. Independent host recovery access still needs verification.

## Qualification ledger

Status snapshot: October 15, 2026, 9:18 AM PDT. Later evidence must identify
its candidate and scope before changing a gate.

| Gate | Status and evidence needed |
|---|---|
| RC24 review, CI, merge and publication | Passed for the exact commits above. |
| Rollback preparation | Encrypted configuration backup, key and RC22 source/history verified; independent host recovery access pending. |
| HACS installation | Pending. Live HA remains RC22; RC24 is available but has not been downloaded or restarted. Requires recovery access, exact installed/served files, new startup/in-process identity and preserved settings. |
| Runtime recovery and guards | Pending on RC24: idle reload/restart, live setting confirmation/failure paths, reconnect, authorization loss, stale/wrong-floor and history/area recovery. |
| Owner acceptance | All [117 verdicts](owner-walkthrough-0.5-ledger.json) remain pending. R01-C01 was staged; no owner verdict received. Synthetic execution is not approval. |
| Devices and accessibility | RC24 synthetic Android latency passes its named budget; live iPhone/iPad/Android, keyboard/native zoom, VoiceOver/NVDA and Windows High Contrast remain open. |
| Performance | [Exact-candidate lab receipt](performance-0.5-rc24.md): desktop and Android p95 pass; traced desktop intervals meet ≥55 produced frames/s. Retained heap/GPU, mobile frames and live traffic remain open. |
| Live transport | Default OFF. Loss/reconnect/fallback, queues and resource/traffic qualification are still required before switchover. |
| Room and custom-area execution | Pending: supervised matching-session completion/dock and a separate active-area Stop run; [run sheet](owner-gate-f-run-sheet.md). |
| Cadence and recovery | Pending: private/shared N=1/N=3, mode-specific and causal coverage credit, pause/restart/low-charge, guarded failure and map transitions. |
| Stable publication | Held for completed qualification and owner signoff under [Gates E6/F](acceptance-0.5.md#gate-sequence-and-release-receipts). |

Historical RC22 runtime matched 1,239 functions across 63 modules with zero source,
code or identity errors. That readback does not qualify RC24. Private identities,
maps, credentials, storage and raw receipts remain outside this public packet.
