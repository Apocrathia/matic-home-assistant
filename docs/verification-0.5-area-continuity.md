# 0.5 custom-area continuity qualification

**Status: OPEN. Stable release certification is withheld.**

## Intended behavior

A saved area remains usable across routine cleaning runs, supported map
refinements, integration reloads, and Home Assistant restarts. These events
must not require repeated confirmation or silently rewrite the area. A changed
floor, displaced coordinate frame, changed room association, or insufficient
historical evidence must remain blocked until reviewed.

## Candidate scope

The RC35 change is based on reviewed main
`37d1cf03cbf2526344b5561e12e26c77dd455ea9` (RC34). The accompanying PR and CI
records identify the exact candidate head; this document alone is not a
completed review or installation receipt.

For the same mission, current v3 and v6 bindings can now survive simultaneous
partition-identity and unrelated geometry changes after anchored validation.
V3 requires complete room-frame snapshots for this exception. Saved/current
room identities and each room's circle associations must match exactly. Fresh
circle validity and immutable area shape remain mandatory. A stronger proof
uses unique, distributed turn contexts at the same saved millimeter positions
to establish the absolute frame through ordinary contour refinements. Weak
frame evidence retains the existing local-geometry checks. Fresh bounded bindings use version 6, adding an immutable circle-multiset
digest before refinement recovery. Legacy v5 bindings retain their original
local-hash and frame checks; their anchors are not silently rebased. Legacy
bindings without adequate historical evidence retain their review requirement.

Optional witness work is admitted atomically with a bounded reserve for
existing frame validation; large unchanged contours retain their fallback.

The change also closes a v3 association gap: an additional room covering saved
circles can no longer pass merely because all original anchors still match.
It does not add automatic rebinding or coordinate transformations.

## Source evidence

The final local source run passed **5,208 tests with 100.00% coverage** across
20,009 statements (`python -m pytest --cov=custom_components/matic_robot
--cov-report=term-missing`). Required PR CI and installed retesting remain open.

- Binding regressions cover partition churn, unrelated room changes,
  containing-room contour reshaping, fractional wall refinements, new overlaps,
  translations, room rekeys, missing historical evidence, and older versions.
- Persisted v3/v6 integration cases cover manager refresh, real HA Store reload,
  readiness, plan preview and service validation with unchanged areas and no
  area writes or robot commands. Unsafe cases remain blocked.
- Actual setup-listener cases cover repeated safe refreshes for v3 and v6,
  scheduled manager reconciliation, no new HA Repair, no Store save, and a
  valid saved-plan preview. These are controlled integration fixtures.
- Migration defensive guards are checked independently as well as through the
  stricter normal status path. No production guard was removed for coverage.

## Installed and physical evidence

These results belong to **RC34**, not the uninstalled RC35 change. Private raw
receipts retain timestamps, plan/area identities, session fingerprints, state
hashes, command journals, and preservation evidence. Private map data is not
included here.

| Gate | Result |
|---|---|
| RC34 installation and restart | Pass: all 110 integration files match reviewed source; credentials/options, 77 entity identities, YAML and plan-store bytes preserved. |
| RC34 loaded runtime and frontend | Pass: 64 loaded source modules / 1,352 observed functions match installed source; 22 served frontend assets match. Whole-process verification is explicitly excluded. |
| One-time current-map recovery | Pass: explicit owner review, same saved area ID and unchanged geometry/settings; ready readback and mixed-plan preview. |
| Supervised completion run | Pass: room then custom area, independent area-session fingerprint match, verified completion, final docked/native-idle state. |
| Immediate post-run continuity | Pass before floor-plan refresh: unchanged area/binding and valid preview. This did not establish continuity once the refined contours were fetched. |
| Automation-service repeat | Pass for start: same saved plan started through `matic_robot.run_selected_plan` without intervening area confirmation/save/rebind. |
| Owner Stop during repeat area | Pass: matching active area session, attributed managed Stop, no additional area completion credit; final charging/native-idle state with lock and Stop settlement cleared. |
| Idle integration reload continuity | **Fail:** saved area/binding unchanged, but newly fetched contours return `geometry_changed` and block preview. Mission/partition session key and room IDs remain stable. |
| Full Home Assistant restart continuity | **Fail for readiness:** area/binding remain unchanged; the same geometry blocker persists. HA restarts successfully and the robot remains docked. |
| Home shortcut recovery | **Fail after integration reload:** stored pins and catalog IDs remain intact, but the existing page hides both shortcuts. Fresh page load restores them; full HA restart also restores them. |
| RC35 exact-head CI and complete regular review | Pending; actual reload fixes still in progress. |
| RC35 owner manual merge, installation and runtime qualification | Pending. |
| Final physical/owner acceptance and stable publication | Open. |

## Reproduced release blockers

Routine post-run contour refinement changed the containing-room bounds by up
to 90 mm, its local occupancy and segment evidence, while retaining the same
map session and room associations. The initial RC35 partition fix also rejected
this recorded pair. The revised distinctive-witness fallback accepts the exact
private pair offline with the original area unchanged. Its installed-runtime
retest is still pending. Do not use another confirmation to conceal a failure.

The shortcut failure is a frontend recovery problem, not demonstrated storage
loss. The returning same-user/same-entry lifecycle now rereads saved pins in source.
The packaged-panel regression passes Chromium and WebKit with no preference
writes or robot commands; installed retesting remains pending.

## Room-color readability

The 2D room palette now starts with sixteen perceptually separated colors and
uses stronger fills. All 256 supported rooms retain distinct colors. Room IDs
preserve assignment under metadata reordering. The backend carries its stable
room identity through the actual scene parser; production-format reorder and
legacy/duplicate-ID fallbacks are tested. Two-pixel neutral boundaries
separate rooms, with a three-pixel selection boundary. Forced colors retain the
system palette. Chromium and WebKit checks cover uniqueness, first-sixteen
OKLab separation, selection, labels, dark mode and forced colors; synthetic
12-room light/dark captures were visually inspected. Installed-map inspection
is pending with RC35. The canonical Node 24 startup graph is 92,146 bytes,
within the unchanged 92,160-byte budget. Developer notes no longer ship inside
a rendered HTML template.

## Boundaries

Source fixtures establish supported refinement behavior; the observed RC34 run
establishes its named live sequence only. Neither proves every firmware/map
transition. Larger containing-room boundary changes that no longer establish
the saved absolute frame remain blocked. A firmware coordinate-frame migration
would require a separately proven transform, not a relaxed validation check.

The historical PR #283 pre-merge review-sequencing gap remains recorded in the
[recovery receipt](verification-0.5-area-recovery.md). New reviews do not repair
that historical sequence. The broader [acceptance matrix](acceptance-0.5.md),
[Gate F run sheet](owner-gate-f-run-sheet.md), and
[manual-merge contract](maintenance-reviews.md) continue to apply.
