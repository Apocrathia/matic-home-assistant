# v0.5.0-rc35

Saved custom areas can remain usable through routine map refinements when
their saved evidence proves that the physical coordinates and room associations
are unchanged. The integration retains the same area ID, coverage and settings;
it does not silently rewrite or rebind the area.

The continuity checks now handle partition changes and distinctive, distributed
room-frame landmarks. Ambiguous or displaced frames, changed room associations,
and inadequate historical evidence remain blocked for review. Additional
regressions cover translations, rotations, repeated contour patterns and budget
limits.

Home shortcuts now recover when an integration temporarily disappears and the
same robot returns, without requiring a page reload. Saved order and explicit
exclusions are preserved; an older pending response cannot replace the fresh
shortcut state.

See the [continuity qualification](verification-0.5-area-continuity.md) for
source evidence and the remaining installed-runtime and release gates.

Fresh bounded area bindings retain an immutable circle-multiset digest so
refinement recovery cannot conceal added or removed duplicate circles. Existing
v5 bindings keep their original conservative validation and saved anchors.

The 2D map uses stronger, more distinct room colors and clearer boundaries.
Colors remain stable when room metadata reorders; selected rooms retain a
stronger outline, and forced colors continue to use the system palette.

Robot markers now require a fresh native observation for the displayed map's
mission. Old or foreign-mission poses, failed reads and unavailable positions
clear the marker, including camera caches. Native observation age is reported
separately from fetch age. See the [position qualification](verification-0.5-pose-provenance.md)
for evidence and the remaining installed-runtime checks.
