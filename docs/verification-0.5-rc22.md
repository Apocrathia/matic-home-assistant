# RC22 root runtime-class qualification

October 11, 2026, Pacific time.

## Actual failure and repair

RC21 is installed through HACS. Its 93 files match the reviewed candidate;
rollback, saved state, new startup/version, coherent map, live pose and six served
frontend assets passed. A stale run-bound Stop request returned the specific
validation error without sending a command. Independent operations are docked,
native-inactive and runner-unlocked.

The actual Core Python process measured 1,235 functions across 63 loaded Matic
modules. Every sampled source file matched the candidate and no code body
mismatched. The diagnostic still reported one identity error: it rejected the
root-defined `MaticRuntimeData` class because it required a dotted submodule
prefix. The actual class reproduces exactly that error in a regression that
failed before the fix. Root and child modules now use the same canonical-owner
check. No framework/decorator rule was relaxed on an inferred cause.

Failure details are capped and retain total/omitted counts. They contain fixed
reason codes, relative source files, AST lines or runtime-class indexes, without
function names, object representations, exception text, values or absolute paths.
The [RC21 scope and exclusions](verification-0.5-rc21.md) remain binding; this is
not whole-process attestation.

## Qualification scope

The full local suite passes 4,465 tests with 100% coverage of 18,041 statements;
Ruff, formatting, strict mypy and privacy checks pass. Regular review and hosted
CI apply before merge.
RC22 installation and a fresh actual in-process identity verdict apply afterward.
The RC21 negative identity result does not qualify a passing final runtime check.

The firmware alert fix remains installed with an independent quiet live trace;
RC19's authorized active Stop/Dock and prior one-room completion remain scoped
receipts. Actual touch-to-visible latency, device/assistive technology, broader
live faults, causal coverage/private/shared cadence and the owner walkthrough
remain open under the [acceptance matrix](acceptance-0.5.md). Stable is held.
