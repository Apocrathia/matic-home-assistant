# RC24 release qualification

RC24 packages the 0.5 interface overhaul and the cleaning refinements merged in
[PR #264](https://github.com/ProspectOre/matic-home-assistant/pull/264).
RC23 was never tagged. Stable remains `v0.4.8` until the acceptance gates close.

## Candidate and source evidence

- Product base: `630029aef521ff0d5492ed8012d95b94e675da1d`.
- Reviewed product head: `744d646be5f99d8341832dca7bb7f168c4efe563`, against
  `b03a3839e7eefe50cd4205835d280aca4b1695ba`.
- [Complete product review](https://github.com/ProspectOre/matic-home-assistant/pull/264#issuecomment-6187889389):
  clean; the stop-settle finding is fixed and resolved.
- [Browser CI](https://github.com/ProspectOre/matic-home-assistant/actions/runs/38705865472):
  2,485 passed, six skips.
- [Test CI](https://github.com/ProspectOre/matic-home-assistant/actions/runs/38705866399):
  4,978 passed, 100% coverage; lint, types, package and fresh-install checks pass.
- [Validate](https://github.com/ProspectOre/matic-home-assistant/actions/runs/38705865501):
  HACS and hassfest pass.

The RC24 metadata and qualification records require their own exact-head review
and CI before merge and publication. Earlier source results retain their named
scope. Publication, installation and acceptance are recorded independently below.

## Qualification ledger

| Gate | Status and evidence needed |
|---|---|
| RC24 review, CI and merge | Pending for the release-preparation PR. |
| Publication and archive | Pending: tagged prerelease, verified assets; archive superseded RC22 before retiring its release/tag. |
| HACS installation | Pending: exact installed files/version and served assets, new startup and in-process identity; verified rollback and preserved configuration/plans/automations. |
| Runtime recovery and guards | Pending: idle reload/restart, live setting confirmation/failure paths, reconnect, authorization loss, stale/wrong-floor and history/area recovery. |
| Owner acceptance | The [117-cell verdict ledger](owner-walkthrough-0.5-ledger.json) is pending; synthetic execution is not an owner verdict. Reopen affected approvals after an interface change. |
| Devices and accessibility | Pending: real iPhone/iPad touch, Android Chrome, keyboard/native zoom, VoiceOver/NVDA and Windows High Contrast. |
| Sustained performance | Pending: exact-candidate desktop/mobile latency and frames, large maps, slow-device stalls and retained heap/GPU bounds. |
| Live transport | Default OFF; qualify loss/reconnect/fallback, queues and resource/traffic budgets before switchover. |
| Room and custom-area execution | Pending: supervised matching-session completion/dock and a separate active-area Stop run; [run sheet](owner-gate-f-run-sheet.md). |
| Cadence and recovery | Pending: private/shared N=1/N=3, mode-specific completion and causal coverage credit, pause/restart/low-charge, guarded failure and map transitions. |
| Stable publication | Held for completed qualification and owner signoff under [Gates E6/F](acceptance-0.5.md#gate-sequence-and-release-receipts). |

Device/runtime evidence from RC22 and earlier remains historical. No robot motion,
installation result or owner approval is implied by this preparation record.
Private identities, maps, credentials, raw traces and storage remain outside the
public qualification packet.
