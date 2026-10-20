# v0.5.0-rc34

When an older saved custom area no longer has enough historical map evidence to
run safely, Matic Map now asks the person reviewing it to **Confirm area on
current map**. The action keeps the saved area ID, shows the stored outline
when present or the saved circle coverage for legacy areas, and then writes a
fresh map binding. It never starts a cleaning run.

Administrators can use `MaticGetPlanReadiness` to see whether the current map
and each saved area permit a plan preview, without receiving map coordinates
or internal map evidence. It reports map readiness only; normal robot controls
still decide whether a run can start.

The candidate adds an end-to-end regression for legacy-area confirmation,
readback, and preview plus a browser interaction contract. Source review, CI,
installation, runtime, device, physical, and owner acceptance remain separate
qualification steps.
