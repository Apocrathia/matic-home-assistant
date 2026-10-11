# v0.5.0-rc22

The loaded-code diagnostic now accepts the integration's canonical runtime class
when it is defined directly in the package root. RC21 incorrectly rejected that
class while accepting classes in submodules, producing one identity error on the
real installation even though every measured code body matched its source.

Canonical class identity, module origin, source-binding and code comparisons
remain enforced. Bounded failure reasons now identify a relative source file,
AST line or runtime-class index without exposing private values or paths.

The complete handwritten source review also repaired several edge cases:
unsupported optional telemetry no longer loses successful sibling reads; dense
floor, flythrough and firmware-shape messages are rejected before exceeding
field-allocation budgets; idle native inactivity does not clear an outstanding
Stop/Dock fence; and the native-session sensor preserves unknown activity.
Pose caches now bind to the floor and its revocation generation, and historical
scene responses recheck the loaded runtime and history store after awaiting.
An unbonded Bluetooth connection requires the scoped default agent; an existing
verified bond and same-bus explicit pairing retain their established behavior.

RC22 retains the alert repairs. It remains a prerelease;
see [qualification](verification-0.5-rc22.md).
