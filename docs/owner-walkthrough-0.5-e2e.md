# 0.5 walkthrough: local E2E results

## Source and scope

- Candidate: `77448328ea2824238616fbf85c33e3cbc073dbc8`; intended base: `b03a3839e7eefe50cd4205835d280aca4b1695ba`.
- This is synthetic browser and local source evidence. It does not establish live command persistence, robot compatibility or release acceptance.

## Fixed during this walkthrough

| Commit | Change |
|---|---|
| `05e3d963` | Area-only plans no longer say they clean rooms; Save guidance accepts a room or custom area. |
| `e026dd13` | Intelligent rotation includes rooms and custom areas; Saved order retains the exact sequence. Area history is geometry-bound and completion requires the owned session to end. |
| `34bd4868` | Smart cleaning wording and occasional mopping use Off or 2–100 cleans; normal Vacuum + mop remains distinct. Existing every-clean settings are preserved until explicitly changed. |
| `77448328` | Full room/area names wrap in Run/Edit; hidden disabled reasons no longer cause outer-page scrolling; accessibility readouts include omitted heading actions. |

The page-scroll root cause was an absolutely positioned, visually hidden explanation whose static position extended beyond the clipped workflow. Anchoring it fixes document bounds while preserving its accessible description. Regression checks cover phone, tablet and desktop.

## Full matrix on the final candidate

All 117 cells and 765 banner-step visits completed. Safari covered C01–C07 and C09 (104 cells, 680 steps); Chromium covered C08 (13 cells, 85 steps) with forced colours and reduced motion confirmed. R08 included opening Help in every state. No stage errors, outer-page overflow or visible-control text overflow were observed.

| Row | Journey | Cells | Step visits |
|---|---|---:|---:|
| R01 | Home, plan shortcut and Your plans | 9 | 36 |
| R02 | Plan pick, run, edit, save and delete | 9 | 144 |
| R03 | Room schedules | 9 | 54 |
| R04 | Rooms view | 9 | 54 |
| R05 | Custom areas: draw, review, redraw, delete | 9 | 81 |
| R06 | Map history | 9 | 18 |
| R07 | Full map | 9 | 27 |
| R08 | Help popover | 9 | 27 |
| R09 | Stop, pending and held states | 9 | 81 |
| R10 | Offline, locating, error and access states | 9 | 72 |
| R11 | Setup and first clean | 9 | 36 |
| R12 | Your areas | 9 | 63 |
| R13 | Home shortcuts | 9 | 72 |

C09 also has 85 WebKit name/role readouts, with no unnamed visible form/action controls. Direct control snapshots supplement 22 whole-page omissions, including Edit and More actions in a shadow heading with `display:contents`. This is browser accessibility evidence, not a full physical screen-reader usability verdict.

The matrix checks staged states, copy, geometry, media settings and accessible controls. The interaction suites below separately exercise transitions, edits, saves through the synthetic backend, sharing, deletion, drawing and safety states. Matrix visits alone do not prove all actions in live Home Assistant.

## Verification

| Source | Check | Result |
|---|---|---|
| `77448328` | TypeScript and production/review bundle build | Pass |
| `77448328` | Walkthrough-stage spec, WebKit and Chromium | 27 passed; 3 documented Chromium-only capability skips in WebKit |
| `77448328` | Affected plan/area interaction spec | 26 desktop WebKit + 3 mobile WebKit passed |
| `77448328` | Frontend assets and translation tests | 112 passed |
| `77448328` | Startup gzip graph | 91,552 bytes / unchanged 92,160-byte limit |
| `34bd4868` | Eight walkthrough interaction specs, desktop WebKit | 641 passed; 3 Chromium-only skips |
| `34bd4868` | Same specs, mobile WebKit | 92 passed |
| `34bd4868` | Smart cleaning focused verification | 149 Python + 63 WebKit passed |
| `e026dd13` | Rotation/executor verification | 923 Python + 35 WebKit passed; ruff and mypy passed |

The final CSS/readout change was reviewed across its four source/test files with no findings. Earlier interaction results are source-bound above; final matrix, stage and affected plan tests refresh evidence affected by the last change. Generated assets came from the installed dependency tree. `git diff --check` passed.

Eight-spec set: `map_studio_v4_home_rooms`, `plan_areas`, `cadence_roundtrip`, `your_areas`, `notices`, the main `map_studio_v4` spec, `walkthrough_stage`, and `room_schedule` (all under `tests/browser`, with the common prefix).

Browser commands used `--trace=off`; screenshot-taking tests and default `@audit` captures were excluded as required by the walkthrough. The title exclusion was `keeps a (saved|retained) map visible during live revalidation|map corner controls stay separate|zone controls fit and edit on|forced colors keep the primary and Stop labels readable`. Forced-colour states were inspected through the separate full C08 matrix. No screenshots or video were captured.

## Items still requiring physical or owner evidence

- **C05:** real iPhone/iPad touch. Safari input hints and mobile WebKit emulation are complete.
- **C08:** real Windows High Contrast. Chromium emulation on the Mac is complete.
- **Gate F:** supervised room-plus-area run, matching area-session IDs, completion/dock observation and the separate Stop run. The [run sheet](owner-gate-f-run-sheet.md) is prepared; physical execution is pending.
- **R11 live setup:** opened and closed the installed integration's initial dialog without submitting it. The synthetic setup/first-clean states passed; onboarding completion is unverified.
- **Shipping:** authentic complete PR review bound to full head/base, required CI, designated-owner manual merge and release/runtime qualification remain outstanding. Local review/tests do not substitute for these gates.

Compact truncation in the history selector, dense room-count summary and status header remains intentional; full contextual text is available in the associated view or accessible name. No further confirmed product defect remains from this bounded pass.
