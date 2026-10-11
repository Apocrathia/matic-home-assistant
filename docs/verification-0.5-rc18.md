# RC18 qualification and current RC17 evidence

October 10, 2026, Pacific time. RC18 corrects the plan picker's one-room wording
and advances release metadata. Robot execution code is unchanged from RC17.
The regenerated frontend passes TypeScript and 16 focused Chromium/WebKit
picker checks; 34 release-metadata/public-tree tests and the privacy check pass.

## Qualified RC17 scope

[PR #238](https://github.com/ProspectOre/matic-home-assistant/pull/238) merged as
`32276a5206904d9f50c3613d9fec45aa8399aac4`, with the same tree as reviewed head
`37e26a3bc3b6108d31848810c4b8ea7a4847bede`. Complete regular review and hosted
Test, Browser, HACS and Hassfest passed. Local Python: 4,376 tests at 100%
statement coverage; hosted browser: 1,066 passed, one skipped.

HACS-installed RC17 matches 92 reviewed files. Rollback and saved-state
preservation, new startup/version, registered frontend and all six served
assets, map/live pose, ten setter change/restore checks and idle unload/recovery
passed. Native desktop Safari verified live/history separation, plan inspection,
200% zoom and Escape recovery. The original zoom was restored.

A separately authorized one-room Vacuum/Quick run completed within seven
minutes. Fresh native vacuum evidence reports one completed room and 277 seconds
of room work; the owned managed result credited 1/1 with `all_rooms_verified`
and terminal `docked`. Native activity then showed charging, no active task,
no runner lock, no Stop fence and no reconciliation. Temporary-plan removal,
original settings, selection, plans, Areas and automations were verified.
The post-completion Stop service was an idle no-op; this run did not exercise
active Stop, interruption, mopping, coverage causality or private/shared cadence.

## Remaining gates

RC18 still requires review/hosted CI, prerelease publication, HACS installation,
fingerprints and loaded UI readback. Direct backend in-process hashes, live
fault paths, active Stop, sustained actual-device performance, assistive
technology, causal coverage/private/shared cadence and owner acceptance remain
open. RC16's generated-swipe p95 and RC15's unattested reference do not qualify
input-to-visible camera motion; see [RC17 qualification](verification-0.5-rc17.md).
Stable publication remains held under the [acceptance matrix](acceptance-0.5.md).
