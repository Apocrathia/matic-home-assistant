# RC19 Stop ownership qualification

October 10, 2026, Pacific time. RC19 closes a Stop ownership race found while
preparing the next bounded physical acceptance test.

## Source behavior and verification

A managed run can finish and release its plan lock while a Stop checkpoint
waits for storage. A replacement can then claim motion. Previously the plan
service read its expected motion generation after that wait; the pending Stop
could inherit the replacement's generation. Checkpoint persistence also wrote
the current last-run record without binding the write to its original run ID.

The plan service and vacuum entity now capture run and generation ownership
before persistence, checkpoint only the captured run, and recheck ownership
after persistence before dispatch. Return Home also rechecks the generation
after replacement persistence. An optional `expected_run_id` rejects stale
observer requests before any Stop mutation, including unmanaged fallback.

Six new regression cases cover replacement during both persistence waits and
stale/absent run matches. The checkpoint and mismatch cases failed on RC18;
the second persistence regression also failed before its dispatch recheck.
The repaired suite passes 4,382 tests with 100% coverage of 17,738 statements.
Ruff, formatting, strict types and the public-tree privacy check pass.
Release metadata is aligned with RC19; release packaging checks are separate.
Required complete regular review and hosted checks still apply to the final head.

## Existing live evidence and limits

[RC18](https://github.com/ProspectOre/matic-home-assistant/releases/tag/v0.5.0-rc18)
is HACS-installed: all 92 files match its reviewed candidate; rollback,
saved-state preservation, new startup/version, live pose, registered frontend
and six served assets pass. Native Safari verified `1 room · paused`, disabled
Run and cleanup without robot motion. [RC17 scope](verification-0.5-rc18.md)
includes ten setter change/restore checks, idle reload, desktop UI and a
separately authorized one-room Vacuum/Quick completion with natural docking.
Those receipts remain bound to their original candidates.

A bounded Android Chrome 155 pilot on RC18 exercised 57 injected gestures at
Auto detail. Control rAF intervals had p95 about 11.2 ms; sampled JavaScript
render durations do not measure actual display presentation. Tracing altered
cadence, and trace export occupied part of the pilot. The first instrument
attempt was discarded after a helper error. Original tabs and preferences were
restored. This does not qualify physical touch-to-visible latency or accessibility.

RC19 requires prerelease publication, HACS installation and candidate-specific
startup/UI/guard verification. Direct backend in-process identity, live fault
paths, active Stop, actual touch performance/assistive technology, causal
coverage/private/shared cadence and owner acceptance remain open. No RC19
physical motion has been authorized or performed. Stable publication remains
held under the [acceptance matrix](acceptance-0.5.md).
