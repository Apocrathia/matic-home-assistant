# RC20 firmware alert qualification

October 10, 2026, Pacific time.

## Alert behavior

A legacy event automation treated every baseline wire-shape difference as a new
capability and sent an untagged push. Ordinary operating-state observations can
repeat those differences. Their meaning remains unknown in the report.

The report producer now requests notifications only for repeated read failures,
recovery from repeated failures, or completed research with an integration
opportunity or compatibility issue disposition. The blueprint applies the same
eligibility check even if an older producer marks an unknown candidate pending.
The sensor projection supplies only allowlisted kind/status/count and research
disposition metadata, retaining diagnostic privacy boundaries.

Eleven added cases cover quiet first/repeated/recovered unknown observations,
completed research, correctly labeled read warnings and recovery, and the real
producer-to-sensor-to-blueprint delivery path. The initial alert regressions
failed before the fix. The full suite passes 4,394 tests with 100% coverage of
17,746 statements. Final-head regular review and hosted release checks apply
before merge; HACS installation and live notification readback apply afterward.

## Existing candidate evidence

RC19 is installed through HACS. All 92 files match its reviewed candidate;
rollback, saved state, new startup/version, live pose and six served frontend
assets were verified. A stale run-bound Stop request returned its specific
validation error without issuing a robot command.

A separately authorized, bounded one-room Vacuum/Quick test issued one Start,
one active Stop at three minutes and one Dock. Independent native and managed
readback confirmed partial native cleaning, `stopped_docked`, inactive native
ownership, an unlocked runner and a cleared Stop fence. The temporary plan was
removed; saved plans, selection, areas, settings and automation state were
preserved. An observer helper exited during native settlement; an independent
observer completed verification and cleanup without another robot command.

These receipts qualify RC19's active interruption in this scope, not RC20 or
cadence/mopping. The earlier Android pilot remains UI instrumentation and does
not establish actual touch-to-visible latency. Direct backend in-process
identity, broader live fault paths, device/assistive technology, causal
coverage/private/shared cadence and owner walkthrough remain open under the
[acceptance matrix](acceptance-0.5.md). Stable release is held.
