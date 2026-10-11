# RC21 loaded-code qualification

October 11, 2026, Pacific time.

## Runtime identity scope

The diagnostics probe hashes actual source-defined code objects reached through
loaded module and class bindings, including nested code, properties and local
wrappers. It compiles the installed source without executing it and compares
canonical code fields and typed constants. Module origin, declared bindings,
runtime class identity and the bindings surviving the executor await must match.
Source enumeration and reads are bounded. Compilation and filesystem work run
outside Home Assistant's event loop; descriptors are inspected without invoking
them. The public report contains hashes, relative source paths, counters, Core
process ID and explicit scope limits, without code, globals or closure values.

This is a stale-code diagnostic, not whole-process attestation. Module execution,
mutable globals/closures, dependencies, generated code, unloaded modules and
external aliases remain excluded. Installed-tree receipts and fresh runtime/map
readback remain separate requirements.

## Verification and existing installation

Focused tests cover stale disk/loaded code, changed module/function/class
metadata, missing bindings, descriptor replacements, generated-method
provenance, bounded enumeration/reads, mid-capture changes, post-executor changes,
privacy and the real component's loaded modules. The full local suite passes
4,462 tests with 100% coverage of 18,031 statements; Ruff, formatting, strict
mypy and privacy checks pass. Regular review and hosted CI apply before merge. RC21 installation and the actual
in-process diagnostic report are still pending in this source receipt.

RC20 is installed through HACS with exact tree, rollback, startup, frontend,
map/pose and stale Stop guard receipts. Its legacy capability automation was
migrated to the reviewed firmware-intelligence blueprint. An independent live
trace selected no notification actions for ordinary unknown observations;
phone delivery was not tested. RC19's separately authorized active Stop/Dock
receipt remains scoped to that candidate and test.

Actual touch-to-visible latency, device/assistive technology, broader live fault
paths, causal coverage/private/shared cadence and the owner walkthrough remain
open under the [acceptance matrix](acceptance-0.5.md). Stable release is held.
