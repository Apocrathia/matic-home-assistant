# Cleaning and maps

[Documentation](README.md) · [Automations](automation.md)

Save per-room preferences, give waiting rooms a turn, and choose when a plan
should stop. Open **Matic Map** in the Home Assistant sidebar to get started.

## Saved plans

Choose **Your plans** on the home screen, then **Create a plan**. Your plans
lists every plan. Each plan saves:

- Included rooms and their order.
- Cleaning mode and vacuum coverage for each room.
- Intelligent rotation or saved-order execution.
- Return-to-dock and finish-current-room preferences.

<a id="run-and-edit"></a>
The **Run** view previews the next run. Use **Plan enabled** to pause or
resume it; choose **Run plan** to start. **Show on home** adds the plan to the
home screen as a [shortcut](#home-shortcuts). Open **Edit** to change the plan:
tick the rooms to include, open a room for its settings and schedule, and, in
**Saved order**, use its arrows to move it. Each room keeps its mode and
coverage within one ordered run, including mixed settings.
Choose **Save** to keep changes, or **Done** when an unchanged plan is open.
**Cancel** leaves Edit and asks before discarding unsaved changes.
**More actions > Delete** removes the plan.
The robot handles battery and water servicing as needed.
[Rooms with different settings in one run](mixed-room-missions.md).

A plan defines what to clean. Home Assistant automations decide when it runs.
Create and edit plans and custom areas in Matic Map. **Matic settings**
(Settings > Devices & services > Matic (Unofficial) > Configure) chooses the
default plan and resets room cleaning history for one plan or for all plans.

Rooms in a plan can also have [room schedules](room-schedules.md): mop every
few cleans, or a vacuum rotation at a chosen level, counted in one plan or
across all plans.

### Intelligent rotation

Rotation starts with the room that has waited longest to be cleaned;
saved order breaks ties. Rooms that actually start move behind waiting rooms,
even if cleaning later stops. Rejected commands do not change their priority.
Cleaning started in the Matic app also contributes to this ordering.

Completion history is separate: only confirmed completed work advances **Last
cleaned** and successful durations. [How results are counted](native-cleaning-results.md).

Choose **Saved order** under **Cleaning order** in Edit to use that order every
time.

### Stopping a plan

Stop normally ends cleaning and returns the robot to its dock. If **Finish the
current room when you press Stop** is on (in Edit, under **When a run ends**),
the plan uses its progress threshold:

- Below the threshold: stop immediately.
- At or above it: finish the active room, then dock without starting another.
- No learned duration yet: finish the active room. Use **0%** to always finish it.

Progress is a time estimate from successful runs with matching room settings,
not a measured floor-area percentage. Pauses and recharge are excluded from
active cleaning time. Wait for the stop to settle before starting another run.

Pause/resume preserves the plan. A separate clean, Stop, or Dock replaces it.
Avoid controlling the robot from multiple integrations or apps at once.

<a id="map-studio"></a>

## Matic Map

Open **Matic Map** from Home Assistant's sidebar. Choose **3D** for the photographic
map or **2D** for a top-down view. The 2D appearance can show the photo or room map.

Drag to move around the map; pinch or scroll to zoom; twist two fingers,
Shift-drag, or use the camera buttons to turn the 3D view. **Fit map** recenters
the floor. The **?** on the map opens **How to move the map**, which lists only
the controls for the input you use, and adds the drawing controls in Draw.
**Full map** in the top bar hides the panel and keeps the status, the main
action, and **Exit full map** in a small bar over the map. **Map options** holds
map detail and map diagnostics; on a phone it also holds the 2D appearance and
room names.
When choosing rooms for a run or plan, click a room on either map view to select
or deselect it. The map and room list stay in sync.

**Map history** lists each saved map by date. Choose one to show it: the map
says **Saved map**, with its date and position, and shows no robot position.
With three or more saved maps, the slider under them runs from **Oldest** to
**Live** on your current floor and to **Newest** on another floor; **Mapped
floors** appears when another floor is mapped. Nothing starts
from a saved map; **Show live map** returns to the live map of your current
floor. After carrying the robot, wait for its new map and position to appear.

The map panel requires a Home Assistant administrator. For a dashboard, add
`camera.matic_map` with a Picture Entity card.

## One-time cleaning

Choose **Clean rooms**, then tick rooms on the map or in the list. **Cleaning
settings** picks vacuum, mop, or both and the vacuum coverage for the whole
clean; **Settings for {room}** changes one room. Vacuum coverage choices are
**Quick**, **Optimal**, and **Heavy duty**. They do not change mopping; use the
robot's **Double-pass mopping** setting for an extra mop pass. When scheduled
work is due, **Include scheduled work that's due** is on; turn it off to use
only your settings. The line above the button lists the rooms in run order,
then the robot returns to the dock. Use the active cleaning controls to pause,
resume, or stop.

Home Assistant Areas can map to Matic rooms. Exact names and unique aliases
match automatically; manage other matches in the vacuum entity's cleaning-area
settings.
Mapped room names must be unique.

## Custom areas

Choose **Clean custom area** to open **Your areas**, which lists the areas
saved on this floor with their settings, and choose **New area** to draw one.

1. Pick a tool: **Points** places corners, **Paint** and **Erase** brush the
   map (**Brush** sets the width), and **Move map** pans without drawing.
2. **Undo**, **Redo**, and **Clear** sit in the same row; **Cancel** leaves
   the map as it was.
3. Choose **Name and save**, then give the area a name, cleaning mode, and
   coverage, and choose **Save area**. **Redraw** returns to the map; **Done**
   brings you back.
4. Choose the area in **Your areas** to clean it, change its settings, redraw
   it, or delete it with **Delete** at the end of its details. **Show on
   home** adds it to the home screen as a shortcut.

Areas may cross room boundaries. They remain saved for future runs and can be
selected from the robot's **Custom cleaning area** entity or called by name in
an [automation](automation.md#custom-areas).

Map updates outside an area do not require resaving when its local geometry and
room frame still match. If nearby geometry changes or the saved frame can no
longer be matched, the row says **Map changed** and the area opens as
**Check {name}**, asking for **Save area** or **Redraw**. An area the map can't
place any more says **Redraw it before cleaning**. Coordinates stay in Home
Assistant; automations need only the saved name.

## Home shortcuts

New plans and custom areas appear under **Shortcuts** by default. Turn
**Show on home** off on a saved item's screen to hide it. Use the small edit
icon at the end of the **Shortcuts** heading to move items up or down, then
choose **Done editing shortcuts**. Choices and order are saved per Home
Assistant user and robot; updates preserve your existing shortcuts.
One tap runs a shortcut exactly as **Run plan** or **Clean this area** would.
A shortcut that can't run says why, and **Stop** shows while it runs.
