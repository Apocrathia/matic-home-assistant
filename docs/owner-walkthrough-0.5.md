# Owner walkthrough for 0.5

The owner signs off the 0.5 interface by looking at it, one cell at a time. The agent stages every cell of the
matrix below live in a browser; the owner only answers **Approve** or **Critique**. Nobody hand-tests a script,
and there are no screenshots or recordings: each cell is the real Matic Map code running on synthetic data.

Gate E6 in [acceptance-0.5.md](acceptance-0.5.md) links here. **Stable waits until every cell is approved.**
A release candidate can ship before that; stable cannot.

## What is staged

The stage runs the shipped Matic Map shell from the review bundle with synthetic fixtures. It never talks to Home
Assistant or a robot, and the page says so in a banner above the frame. Each cell is one journey (a row) at one setup
(a column): 13 journeys × 9 setups = 117 cells. A row lists the states of its journey as steps; the banner shows a
button per step, so the owner can walk the journey inside the one cell.

The frame is sized to the setup's width and height, so the layout is the one a phone, tablet or desktop of that
size gets. Without a size the frame fills the window.

## How the agent stages a cell

1. Build the review bundle once per change: `npm run build:map-studio-v4`.
2. Stage the cell: `npm run stage:walkthrough -- R01-C01`. The script serves the bundle on
   `http://127.0.0.1:4180`, prints the cell, what to try and its URL, and opens it in Safari.
3. Post one short message: "Cell 29 of 117: Rooms view at phone landscape. Try: map and list stay in step; each
   disabled Clean says why. Approve or critique?"
4. Wait for the answer, record it in the ledger, then stage the next cell. Ctrl-C stops the server.

Other forms: `npm run stage:walkthrough -- --list` prints every cell with its hash; `--print` prints the URL without
opening a browser; `--port 4181` picks another port.

### Cell IDs and hashes

A cell ID is its row and column, `R04-C02`. The stage URL's hash is the cell ID, the row part and the column part:

`/map-studio-v4-stage#cell=R04-C02&steps=rooms,rooms-ready,…&w=844&h=390`

A step is a gallery scenario, optionally with a dialog after a colon (`plan-dirty:discardDraft`). `step=3` opens the
third step directly. A misspelled step, setting or value is shown as an error on the page, never staged as another
state. A cell ID with settings other than its own is an error too, and the banner reads "Not cell R04-C02".

## Journeys (rows)

| ID | Journey | Row part | What to check |
|---|---|---|---|
| R01 | Home, plan shortcut and Your plans | `steps=home-plan-due,home-plan-paused,home-plan-blocked,ready` | The task cards, the pinned plan's due lines in full and the Your plans row last. |
| R02 | Plan pick, run, edit, save and delete | `steps=plans,plan-saved-intelligent,plan-saved-ordered,plan-run-parts,plan-run-paused,plan-run-blocked,plan-run-areas,plan-run-areas-only,plan-edit-ordered,plan-edit-areas,plan-edit-areas-rotation,plan-edit-area-stale,plan-dirty,plan-dirty:discardDraft,plan-new,plan-saved-intelligent:confirmDeletePlan` | Picker to Run to Edit; numbers only in Saved order; custom areas sit among the rooms, keep their places in Intelligent rotation and say what they need; Save, Cancel and Delete ask only when data would be lost. |
| R03 | Room schedules | `steps=plan-cadence-shared,plan-schedule-available,plan-schedule-joining,plan-schedule-conflict,plan-cadence-blocked,plan-cadence-shared:confirmResetCadence` | Each schedule row says when work is due; sharing, joining and Reset read plainly. |
| R04 | Rooms view | `steps=rooms,rooms-ready,rooms-busy,rooms-failed,rooms-empty,room-limit` | Map and list stay in step; each disabled Clean says why. |
| R05 | Custom areas: draw, review, redraw, delete | `steps=draw,draw-points,draw-saved,area-review-new,area-review-saved,draw-redraw,area-review-rebind,area-review-stale,area-review-rebind:confirmDeleteArea` | One tool row, one hint, Cancel beside the primary; review titles and Delete last. |
| R06 | Map history | `steps=history,history-floors` | Saved maps are dated, show no robot and never start anything; Show live map returns. |
| R07 | Full map | `steps=full-map,full-map-cleaning,full-map-locating` | The bar keeps the status, the main action, Stop when it applies and Exit full map. |
| R08 | Help popover | `steps=ready,plan-saved-intelligent,draw` | Press ? on the map in each step; rows match the input you use, Draw adds its rows. |
| R09 | Stop, pending and held states | `steps=cleaning,starting-command,starting,stopping-command,stopping,paused,returning,recharging,task-in-progress` | Stop is always reachable when it applies; held controls say why. |
| R10 | Offline, locating, error and access states | `steps=ha-offline,robot-offline,transition,problem,map-unavailable,map-limited,access,unsupported` | Each state says what is true, what it stops and one next action. |
| R11 | Setup and first clean | `steps=empty,multi-robot,rooms,rooms-ready` | No robot leads to Open integration; the first clean reads as one obvious path. |
| R12 | Your areas | `steps=areas-list,areas-stale,areas-in-plans,areas-empty,area-review-saved,area-delete-refused,draw` | Each row shows its setting, the plans that clean it and what a changed map needs; a refused Delete names the plan to change; New area, last, is the one way into Draw; Back returns to the list. |
| R13 | Home shortcuts | `steps=home-shortcuts,home-shortcut-areas,home-plan-due-full,home-unpinned,home-shortcut-blocked,home-shortcut-running,home-pins-error,plan-saved-intelligent` | One tap runs a pinned plan or area; a plan with custom areas counts them; a held one says why; there is no separate Open; Show on home pins and unpins. |

## Setups (columns)

| ID | Setup | Column part | Where it is staged |
|---|---|---|---|
| C01 | Phone 390 portrait | `w=390&h=844` | Safari on the Mac, frame 390 × 844 |
| C02 | Phone landscape | `w=844&h=390` | Safari on the Mac, frame 844 × 390 |
| C03 | Tablet 1024 | `w=1024&h=768` | Safari on the Mac, frame 1024 × 768 |
| C04 | Desktop 1440 | `w=1440&h=900` | Safari on the Mac, frame 1440 × 900 |
| C05 | Touch / mouse+keyboard | `input=touch` | `--lan`: the iPhone or iPad on the same Wi-Fi for touch; then Safari on the Mac, mouse and keyboard only |
| C06 | Light/dark | `w=390&h=844&theme=dark` | Safari on the Mac, Home Assistant's dark palette |
| C07 | RTL + one non-English language | `w=390&h=844&dir=rtl&lang=xa` | Safari on the Mac, right to left, pseudo-language |
| C08 | Forced colours | `w=1024&h=768&contrast=forced&motion=reduce` | Chromium, opened by the script with forced colours and reduced motion on |
| C09 | Screen-reader name/role read-out | `w=390&h=844&readout=tree` | The script prints the accessibility tree (names and roles) of every step, then opens Safari for VoiceOver |

### Setup notes

- **Touch (C05).** `--lan` also serves the stage on this Mac's Wi-Fi address and prints a link for the iPhone or
  iPad. The address works only while the script runs; without `--lan` only this Mac can reach it. The same cell is
  then checked on the Mac with a mouse and the keyboard alone (Tab, Enter, Escape, arrow keys). Both must pass.
- **Language (C07).** `lang=xa` is a synthetic pseudo-language made from `strings.json`: every string is accented,
  bracketed and about 30 % longer, with `{placeholders}` filled in. Plain English left on screen is text that skipped
  translation; a clipped bracket is a layout that will clip a real language. `dir=rtl` mirrors the layout.
- **Forced colours (C08).** Safari on the Mac has no forced-colours mode, so the script opens Chromium with forced
  colours and reduced motion emulated; the page warns when a browser has them off. Windows High Contrast on a real
  Windows machine is checked by hand for the primary and Stop buttons (`design-system.md` MS-DS-01, MS-DS-02) before
  the cell is approved.
- **Read-out (C09).** The agent posts the accessibility trees the script prints with the cell, one per step: each
  control's role and name, as a screen reader announces them. The owner can also turn on VoiceOver in the Safari frame.
- **Setup (R11).** At desktop (R11-C04) the agent also opens Settings > Devices & services > Add integration > Matic
  in the owner's signed-in Safari to show the first setup screen, then closes it. Nothing is submitted, and no cell
  ever sends a robot command.

## Approve or critique

- **Approve:** the cell is recorded as approved with the commit it was staged from.
- **Critique:** the owner says what is wrong in their own words. The agent records it, fixes it, rebuilds and stages
  the same cell again for re-approval. A fix can change other cells: every approved cell whose journey or setup the
  fix touches is staged again too.
- After the last cell is approved, any later change to the shipped interface reopens the cells it touches.

### Ledger

The agent keeps one ledger line per cell: cell ID, verdict, critique (if any), the fixing commit and the re-approval.
The release PR carries the ledger; stable is not tagged while any line is open.

## Limits

- The stage shows synthetic data. Live Home Assistant behaviour (sign-in, entity history, real map sizes) is covered
  by the other gates in [acceptance-0.5.md](acceptance-0.5.md), not by this matrix.
- The pseudo-language checks translation coverage and room for longer text, not the quality of any real translation.
