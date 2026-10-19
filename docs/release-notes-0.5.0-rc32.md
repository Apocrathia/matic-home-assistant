# v0.5.0-rc32

Custom areas can remain current when the map changes in a compatible way,
including harmless room-boundary retessellation and small refinements away
from the saved cleaning area. Matching uses bounded room-frame landmarks and
the existing local wall and occupancy checks; tolerated intermediate maps do
not replace the saved reference. Ambiguous or over-budget geometry remains
reviewable instead of being accepted automatically.

This candidate includes the current 0.5 Stop and room-color changes. Source
checks, CI, installation, runtime, device, physical and owner acceptance are
separate qualification steps.
