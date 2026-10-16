# v0.5.0-rc26

RC26 improves Map Studio recovery from delayed responses and temporary
connection or map revalidation. It includes the [RC25 pairing repair](release-notes-0.5.0-rc25.md).
Requires Home Assistant 2026.10 or later. Stable remains `v0.4.8` while
[release acceptance](acceptance-0.5.md#gate-sequence-and-release-receipts) continues.

## Map recovery

Map view controls remain available when the last map can still be shown.
Home keeps its cleaning choices in place, disabled with the recovery reason,
until the live connection and map are verified again. Recovery messages stay
in the status strip and sheet rather than covering a visible map.

An old, invalid pose response must not revoke a newer verified scene. Pose
responses and the catalog now carry shared scene revision and epoch provenance;
only a demonstrably older response in the same epoch can be ignored. Missing
provenance, a changed epoch, and current or newer incoherence still require
revalidation. The legacy raw SLAM revision is preserved separately.

Cleaning, editing, and exact-position guards remain enforced. Viewing a retained
map does not authorize cleaning on an unverified floor or session.

## Qualification and rollback

The delayed-response and recovery regression tests supplement the required
complete review and CI. Installed runtime, device, fault/performance, and
supervised robot evidence must be bound to this candidate before stable release.
Earlier RC25 results do not establish qualification of changed RC26 behavior.

Preserve the pre-upgrade backup and plan store described in RC24 and RC25.
Returning to an older release may require restoring its matching data, rather
than copying older integration files alone. Preserve newer run records first.
