# What Home Assistant adds

[Install](../README.md#install) · [Cleaning guide](cleaning.md) · [Automations](automation.md)

Use Matic's cleaning in automations that respond to your home.
These are the integration's main additions:

| Feature | What you can do |
| --- | --- |
| Intelligent rotation | Clean the rooms that have waited longest first on your next run. |
| Per-room plans | Save a room order with individual cleaning modes and vacuum coverage; preview the next run. |
| Live map | Map changes and robot position update automatically. Experimental status/activity push is withheld until reliability and resource testing is complete; no setting is needed. |
| Room schedules | Mop every few cleans or run a vacuum rotation at a chosen level, counted in one plan or across all plans; one-time room cleans include work that's due. A vacuum rotation stays due until Home Assistant can confirm the robot used its setting. [Guide](room-schedules.md). |
| Finish-current-room stopping | Stop immediately or finish the active room when its estimated progress reaches your chosen threshold. |
| Home-driven cleaning | Combine presence, schedules, pet devices, and other Home Assistant triggers with plans or named areas. |
| Completion events | React to confirmed room completion and plan outcomes in automations. |
| Room statistics | Put last-cleaned times and successful cleaning durations on dashboards and in Recorder. |
| Assistant tools | Inspect plan order, run status, recent events, command activity, and mode-specific history, and run plans, clean rooms, stop cleaning or reset schedule progress through administrator-only tools for Assist and MCP. |
| Firmware comparisons | Track changes in how the robot talks to Home Assistant after a firmware update, with a Home Assistant Repair when something it uses changes. |

## An automation that adapts to short trips away

Create a plan with your rooms and their preferred cleaning settings. Use the
[away blueprint](automation.md#ready-to-import-blueprints) to start it when
everyone leaves and stop when someone returns. Enable intelligent rotation so
the next departure gives waiting rooms a turn. Choose whether a stop should
finish the active room using the plan's progress threshold.

Rotation tracks which rooms have had a turn separately from successful
completion. A room that starts moves behind waiting rooms; **Last cleaned**
updates only when completion is confirmed. [How rotation works](cleaning.md#intelligent-rotation).

## Maps and controls alongside your other devices

Matic Map brings live 2D/3D maps, room selection, plan Run and Edit views, named custom
areas, and saved map history into Home Assistant. Dashboard cameras and entities
let you build your own view. Settings include water flow, double-pass mopping,
child lock, pet-waste avoidance, and the Cues voice assistant.

[Map and area guide](cleaning.md) · [Plan Run and Edit](cleaning.md#run-and-edit) ·
[Entity reference](entities.md)

## Saved areas and Home Assistant automations

This integration saves named custom areas for reuse and lets Home Assistant
schedules and automations run them. Room plans store room order and per-room
cleaning settings, while intelligent rotation gives waiting rooms an earlier
turn. The other Home Assistant features are listed above.

Use the Matic app to turn on Pairing mode during setup. After pairing, Home
Assistant talks to the robot on your network with its own key. Matic still
handles robot firmware updates.
