# v0.5.0-rc29

Let a pending Back or Escape dismissal finish when a same-depth resource
update arrives. The history controller now leaves the pending browser
marker stack intact until `popstate`, preventing a replacement marker from
making that Back a no-op. A deterministic WebKit regression holds the area
catalog response across Escape and then delivers the native `popstate`.

RC29 retains RC28's managed mission history-baseline admission guard and
unknown-cancellation handling without backend changes. This candidate's
qualification scope is the WebKit history regression, generated bundle parity,
version metadata, and startup budget. Runtime installation, robot/device
acceptance, accessibility, performance, and stable release acceptance remain
separate gates.
