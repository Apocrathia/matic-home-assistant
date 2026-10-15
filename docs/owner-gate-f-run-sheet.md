# Gate F: supervised mixed-plan acceptance

Status: preparation only; no physical run or Stop result recorded.

## Setup

Create a Saved order plan with one room followed by one small custom area on the same current map. Use Vacuum and Quick coverage, return to dock, and no schedule or home pin. Before starting, verify a clear physical area, a docked idle robot, valid geometry and exactly two available targets in the preview.

## Completion run

Start under supervision. Record the room-to-area handoff, minted area-session ID, robot-reported active area-session ID, each leg's completion and the final docked state. The session IDs must match; a different session is a takeover and must fail closed. Missing session or completion evidence leaves the result open.

## Stop run

After the first run has ended and the robot is docked, start the same plan again and press Stop during the area leg. Record the active session ID, Stop result and final robot state. Both runs require separate authorization and physical supervision.

| Evidence | Completion run | Stop run |
|---|---|---|
| Plan and area IDs | Pending | Pending |
| Start/end timestamps | Pending | Pending |
| Minted/reported area session | Pending | Pending |
| Room/area outcome | Pending | Pending |
| Final dock/robot state | Pending | Pending |
