# 0.5 walkthrough: local E2E results

## Source and scope

- Candidate: `d865312f36ef21a372d946272d206a70eb1ea92c`; intended base: `b03a3839e7eefe50cd4205835d280aca4b1695ba`.
- This is synthetic browser and local source evidence. It does not establish live command persistence, robot compatibility or release acceptance.

## Changes verified

- Home shortcuts have a distinct, softly tinted group and play icons. Standard navigation remains neutral; comfortable controls and full names are preserved.
- Long room/area names wrap in Run/Edit. Hidden disabled explanations are anchored so they cannot extend the outer page.
- Destructive text, selection labels and canvas badges use colors resolved against their actual backgrounds. Short dialogs scroll within the viewport.
- Smart cleaning defaults and scope labels agree; held-mode and paused-plan copy explain the current state. Existing every-clean schedules remain supported.
- Intelligent rotation includes rooms and custom areas; Saved order preserves the sequence. Area history is geometry-bound.
- Area completion rereads cancellation and robot state after awaiting session identity, preventing false completion when Stop, error or resumed activity arrives during that read.

## Full matrix on the candidate

All 117 cells and 765 banner-step visits completed. Safari covered C01–C07 and C09 (104 cells, 680 steps); Chromium covered C08 (13 cells, 85 steps) with forced colors and reduced motion confirmed. R08 included opening Help in every state. There were no missing/duplicate steps, stage errors, outer-page overflow or visible-control text overflow.

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


C09 also has 85 WebKit name/role readouts, with no unnamed visible form/action controls. Direct control snapshots supplement whole-page omissions from shadow headings with `display:contents`. This is browser accessibility evidence, not a physical screen-reader usability verdict.

The matrix checks staged states, copy, geometry, media settings and accessible controls. Interaction suites separately exercise transitions, edits, synthetic saves, sharing, deletion, drawing and safety states. Matrix visits alone do not prove actions in live Home Assistant.

## Verification

| Check on candidate | Result |
|---|---|
| TypeScript and production/review bundle build | Pass |
| Startup gzip graph | 91,696 bytes / unchanged 92,160-byte limit |
| Python: session ownership, rotation, configuration flows, frontend and translations | 478 passed |
| Frontend assets/translations after final build | 112 passed (overlaps the Python set) |
| Focused browser regressions | 37 passed; 1 Chromium-only capability skip |
| Contrast and short-dialog regressions | 18 passed across Chromium/WebKit |
| Affected Home/Your areas/room schedule suites | 207 passed across initial run and targeted retest; 1 capability skip |
| Seven additional suites, desktop/mobile WebKit | 159 + 27 passed |
| Expanded screen/dialog axe audit | 316 cases, zero violations |
| Home Assistant light/dark color audit | 92 cases, zero failing contrast pairs; 64 focus checks and 12 destructive-text checks |
| Reflow audit | 84 screen layouts + 9 dialogs; no page or sheet-body overflow |
| Changed Python lint and `git diff --check` | Pass |

The affected-suite run initially had one assertion comparing the old shortcut row width with a main card. It was updated to compare the new group's outer boundary, then passed. Three reflow warnings identify the intentional horizontal drawing-toolbar scroller at 320×256; they are not page overflow. Short dialogs fit and all actions are reachable.

The additional suites cover map surfaces, dialog navigation, nonphysical acceptance, compact layouts, entry configuration, entry selection and general quality. The 316-case audit covers 79 staged screen/dialog combinations in both themes at phone and desktop widths, expanding native disclosure controls and recording visible select options. Automated accessibility coverage is bounded by these states and rules.

Configuration source review and Python tests cover discovery/manual pairing, code/reset/recovery paths, reauthentication, reconfiguration, default-plan and advanced transport options, and single/all-schedule reset. These are local configuration-flow checks; live onboarding was not completed.

Local reviewers checked the affected backend and frontend changes and their corrections with no remaining findings in those scopes. Generated assets came from the installed dependency tree. Earlier broad interaction results remain bound to their earlier source commits; the candidate runs above refresh the affected surfaces.

Browser commands used `--trace=off`; screenshot-taking cases and default `@audit` captures were excluded. Forced-color states were inspected through the full C08 matrix. No screenshots or video were captured.

## Evidence still needed

- **C05:** real iPhone/iPad touch. Safari input hints and mobile WebKit emulation are complete.
- **C08:** real Windows High Contrast. Chromium emulation on the Mac is complete.
- **Gate F:** supervised room-plus-area run, matching area-session IDs, completion/dock observation and the separate Stop run. The [run sheet](owner-gate-f-run-sheet.md) is prepared; physical execution is pending.
- **Live setup:** the installed integration's initial dialog was opened and closed without submission. Synthetic setup/first-clean states passed; onboarding completion is unverified.
- **Shipping:** PR #264 completed source review, required CI and manual merge as `630029aef521ff0d5492ed8012d95b94e675da1d`. Its reviewed head `744d646be5f99d8341832dca7bb7f168c4efe563` passed 2,485 browser cases (six skips) and 4,978 Python tests at 100% coverage. The matrix above retains its original source scope; release/runtime qualification remains open in the [RC24 receipt](verification-0.5-rc24.md).

No further confirmed product defect remains from this bounded pass. These results do not certify universal usability or award-level quality.
