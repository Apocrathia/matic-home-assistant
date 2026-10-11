# v0.5.0-rc19

Stop stays tied to the run that owned the request when Home Assistant admitted
it. A replacement run started while Stop waits for durable checkpoint or
reconciliation writes no longer receives that older Stop or its checkpoint.
Both the plan action and vacuum entity enforce this ownership.

Automations can optionally pass `expected_run_id` to `matic_robot.stop_intelligent_cleaning`
to reject a stale observation before changing any Stop state. Omitting the
field retains the current-run action; `include_unmanaged` remains available.

RC19 retains the RC18 one-room wording and RC17 floor, dispatch and rendering
repairs. It remains a prerelease: reviewed source and green CI do not replace
HACS installation, guarded failure readback, physical/cadence, device and owner
acceptance. See [qualification](verification-0.5-rc19.md).
