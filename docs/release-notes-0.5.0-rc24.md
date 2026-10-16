# v0.5.0-rc24

RC24 is the first release candidate with the 0.5 interface overhaul, including
plain words, one action at a time and layouts for every screen. RC23 was never
tagged; its entity, setup and action changes first ship here.
Retained entities keep their IDs and unique IDs; four duplicates are retired below. Requires Home Assistant 2026.10+.

**Stable 0.5.0 waits for autonomous inspection of the
[interface matrix](owner-walkthrough-0.5.md)** (117 cells: 13 journeys at 9
setups, with source-bound results and findings resolved), and until the
rest of Gates E6 and F in [acceptance-0.5.md](acceptance-0.5.md) close: this
RC installed through HACS and read back, restart recovery, Stop reachability,
iPhone, iPad and Android walkthroughs with VoiceOver and NVDA, and physical
acceptance of identity recovery.

## Matic Map

- **Words.** Every string follows one copy style and is translated through
  Home Assistant; notices appear once under the heading and as a toast when
  the panel is out of view.
- **Home.** One status line, the default plan's card with what is due, **Your
  plans**, **Clean rooms** and **Clean custom area**. Held controls say why.
- **Plans.** A plan opens in **Run**, with a separate **Edit**, where saved
  custom areas join the rooms in the order you set. Save, Cancel and Delete
  ask only when a change would be lost; Back and Escape return to where you
  came from. Your areas names the plans that clean each area.
- **Room schedules.** Two rows per room, mop and vacuum rotation, each with
  − and +, a line that says when the work is next due and a switch to bring it
  forward once. New schedules count across all plans.
- **Rooms.** Map and list stay in step; whole-clean settings and per-room
  settings; the line above Clean lists the rooms in run order.
- **Custom areas, history, Full map, help.** One tool row and one hint in
  Draw, Cancel beside the primary, review titles and Delete last; dated saved
  maps that never start anything; Full map keeps the status, the main action,
  Stop and Exit; **?** lists only the controls for your input.
- **Status.** Stopping shows from the Stop press until the robot has stopped;
  Cleaning names the room the robot reports.
- **Screens.** On a phone held sideways (under 480 px of height) the panel
  keeps the main action or Stop in the sheet's top row and the page never
  scrolls; from 768 to 1023 px in landscape it keeps a 320 px side panel.
  Colours that miss contrast on your theme are adjusted, and light or dark
  follows Home Assistant's theme rather than the device.
- **Android.** Touching the map no longer shows the keyboard focus ring, and
  map canvases on touch devices are capped in resolution, bringing a tablet's
  touch-to-screen p95 from about 86 ms to 73–75 ms.

## Owner decisions

- 2026-10-11: all 24 recommendations of the [0.5 UX spec](ux-spec-0.5.md)
  accepted, including contrast-resolved colours, the unchanged 768 px
  landscape row and dark mode from Home Assistant's theme. In Full map,
  Locating keeps Stop and the exit control.
- 2026-10-12: assistants can run plans, clean rooms, stop and reset a room
  schedule through the same checks as Matic Map.
- 2026-10-14: custom areas join plans in 0.5 and run every time.
- Earlier UX8 procedure requested approval cell by cell. The owner superseded it
  with autonomous E2E inspection and reconfirmed that instruction on 2026-10-15;
  physical/device and final release acceptance remain separate.

## Entity changes

### Renamed

Only the names Home Assistant shows change; each entity ID stays as it was.

| Entity ID | Old name | New name |
| --- | --- | --- |
| `button.matic_run_selected_plan` | Start default plan | Run plan |
| `button.matic_intelligent_clean` | Start intelligent rotation | Run intelligent rotation |
| `button.matic_clean_entire_plan` | Clean all rooms in default plan | Run saved order |
| `button.matic_stop_intelligent_cleaning` | Stop plan and dock | Stop cleaning |
| `sensor.matic_current_area` | Current area | Current room |
| `sensor.matic_cleaning_history` | Plan room completions | Rooms cleaned by plans |
| `sensor.matic_last_run_duration` | Last run duration | Last clean duration |
| `sensor.matic_local_cleaning_sessions` | Local cleaning sessions | Robot cleaning runs |
| `sensor.matic_firmware_compatibility` | Firmware compatibility | Firmware check status |
| `binary_sensor.matic_ssh_tunnel_permission` | Robot SSH tunnel permission | Support tunnel permission |
| `binary_sensor.matic_diagnostic_upload` | Robot diagnostic upload | Diagnostic upload |
| `switch.matic_voice_assistant` | Matic Cues | Cues voice assistant |

IDs assume a robot named "Matic". An unnamed robot is "Matic (Unofficial)" plus
its host name's last four characters; its device model reads "Robot".

### Removed

The first start of this release removes four duplicate entities, once.
Automations that still use them show them as unavailable; switch to the
replacement.

| Removed entity | Use instead |
| --- | --- |
| `binary_sensor.matic_active_cleaning_session` (Active cleaning session) | `binary_sensor.matic_cleaning` (Cleaning) |
| `binary_sensor.matic_update_available` (Update available) | `update.matic_firmware` (Firmware) |
| `sensor.matic_software_version` (Software version) | the device's software version |
| `sensor.matic_hardware_revision` (Hardware revision) | the device's hardware version |

For rollback, restore a matching pre-upgrade Home Assistant backup. RC22 rejects
RC24's minor-11 plan store, so downgrading integration files alone is insufficient.
Preserve any newer run records before restoring prior state.

### States, units and defaults

- Activity, Firmware check status, Update status, Wi-Fi status and both Cues
  statuses list their states, so the automation editor offers a pick list.
  Cues and firmware states use plain words ("Command understood", "Checks
  recorded for comparison", "Some robot reads are failing", "Up to date").
- Coverage time is a duration and shows as time; Mopping water flow shows "×".
- Disabled by default for new installs: Paused, Returning to dock and Fully
  charged (they repeat Activity), Update channel and Protocol version.
  Scheduled cleanings, Robot cleaning runs and the Cues statuses move to
  Diagnostic. Existing installs keep their enabled or disabled choices.
- While the robot reports a pending update, the Firmware entity says the robot
  installs it itself.

## Setup, Reconfigure and Repairs

- Adding a robot shows progress while it searches, skips robots already added,
  and asks only to turn on Pairing mode; the code field accepts the six-digit
  code directly. Errors name one cause and one next step.
- Reconfigure gains **Robot was reset**. It pairs the robot again over
  Bluetooth with a fresh code and keeps plans, custom areas and history. The
  "Can't confirm this is …" Repair now has a Fix button that leads there.
  Nothing is saved until the robot accepts the new pairing, and a different
  robot is never accepted in its place
  ([details](hermes-pairing.md#robot-was-reset)).
- **Matic settings**: reset room cleaning history for one plan or for all
  plans, each with its own confirmation; live updates move under **Advanced**.

## Actions and automations

- Everyday actions use the button names (Run plan, Stop cleaning, …);
  developer actions start with "Advanced:". Run and preview IDs are Advanced
  fields. Action errors are plain translated messages.
- New device triggers: Room finished, Plan finished and Cleaning finished.
- **Custom areas in plans**: plan actions and Matic Map take saved custom
  areas beside rooms, or areas alone, and each area runs as its own part of
  the run in its place ([details](actions.md#custom-areas-in-plans)). Earlier
  RCs can't open the updated plan storage; use the rollback guidance above.
- The five blueprints are renamed "Matic: …", describe every input, count a
  named zone as away, and run only when the robot is docked or idle. Re-import
  them to pick up the changes.

## Assistants

- "Matic: Robot status (administrators only)" can also run a plan, clean
  rooms, stop and reset a room schedule, through the same checks as Matic Map,
  and is offered to Assist. Firmware claim and complete move to a separate
  "Matic: Firmware research (administrators only)" API; agents that used them
  must select it.
- Non-administrators get no tools and a plain explanation.
