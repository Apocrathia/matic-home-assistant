# 0.5 robot-position provenance

Status: source regression fix; installed-candidate qualification remains open.

## Observed failure

During RC34 qualification, HA reported the robot as docked while its map marker
appeared in another room. The owner confirmed that Matic's own app showed the
correct dock location. A private, bounded native read established that the first
`latest_pose` entry belonged to another mission and contained an old native
observation time. The displayed floor and retained dock record agreed with each
other; that pose did not. An acknowledged stream then delivered the active
mission's pose at its second record and repeated updates for the same key.

The client had treated `latest_pose` as a property, discarded its collection
key, and retained only translation. The pose endpoint checked map coherence
without checking the pose's mission. Its former `pose_age_seconds` measured time
since fetch, allowing a new fetch of an old observation to appear current. The
frontend also retained a previous point after null responses and read failures.

Private capture data, household coordinates, mission identifiers and credentials
are excluded from the repository. Diagnostic connections performed their normal
session identification; they sent no motion commands. The task's temporary SSH
key was removed and the add-on restored to its original stopped/manual state.

## Candidate contract

- `latest_pose` is an acknowledged keyed stream. The client requires the expected
  floor's mission ID and an exact canonical mission key. It reads at most 65
  records within three seconds and rejects values above 16 KiB before decoding.
  It selects a matching observation, never a foreign first record. Repeated
  same-key updates are normal and do not make a verified observation ambiguous.
  The iterator closes on success, failure, cancellation and deadline expiry.
- `RobotPose` preserves native mission identity and observation time. Unknown,
  invalid, old, excessively future-dated or wrong-mission observations cannot
  produce an exact map point. Legacy coordinate decoding supplies no provenance.
- A modern translation decode failure cannot fall back to decoding its native
  Timestamp as a legacy vector. Ambiguous layouts fail closed.
- The shared positional gate permits native observations up to five seconds old
  and up to two seconds ahead of HA's clock. These conservative source limits
  require installed publisher-cadence and clock qualification; they are not
  measured runtime performance claims.
- Coordinator reads identify the floor before requesting its pose, and discard
  pose publication after a floor-read generation changes. The HTTP endpoint
  retains its runtime, frame, revocation and unload checks around asynchronous
  reads. Transport fallback supplies no positional marker.
- `pose_age_seconds` now measures signed native observation age, or null when
  unknown. `pose_fetch_age_seconds` separately reports transport-cache age.
  `pose_observation_current` explicitly reports positional admission. The retained
  `pose_freshness` enum describes transport success/fallback for compatibility.
- Null responses, errors and coordinator fallback revoke the frontend marker.
  Older-generation responses cannot revoke or replace a newer frame's pose.
- A local browser deadline subtracts native age and elapsed fetch time from the
  remaining observation budget. It clears the marker even while a later read
  hangs; older timers cannot clear a newer response or frame.
- Both camera cache keys use only an admitted native pose. Admission is checked
  again after executor rendering; an observation that expires during rendering
  is redrawn without the point before the image is returned or cached.

The robot's room label remains non-positional presence. Neither a room center,
retained dock hypothesis nor an approximate path endpoint is promoted to an
exact robot coordinate. A missing current-mission observation is unavailable.

## Qualification

Synthetic regressions cover keyed selection, repeated/malformed/oversized
records, missing and invalid time, wrong mission, age boundaries, native age
advancing inside a fresh transport cache, camera expiry during rendering and
cache reuse, coordinator ordering/revocation, and frontend loss/recovery.

The actual private native snapshot is also replayed offline against the candidate
without opening a robot connection. That replay must reject the observed foreign
mission and old observation; synthetic fresh matching data remains admissible.

RC34 runtime evidence remains historical. Before release acceptance, install the
reviewed candidate and verify the original reported docked mismatch is gone,
fresh current-mission positions advance during a separately authorized bounded
run, and missing observations clear truthfully. Verify the native timestamp's
cadence/clock behavior, actual devices, reload/restart and map transitions. These
position checks supplement the [area continuity receipt](verification-0.5-area-continuity.md)
and [acceptance contract](acceptance-0.5.md); they do not close those gates.
