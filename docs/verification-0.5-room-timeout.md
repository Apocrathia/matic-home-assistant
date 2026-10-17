# Room timeout qualification

A supervised RC26 room-plus-area check ended before the area leg. Its configured
completion budget was 900 seconds; the native session lasted about 909 seconds.
The managed run recorded `CancelledError`, `managed_failure` and `internal`, with
zero completed rooms. The robot subsequently returned to its dock. This remains
a failed acceptance attempt; timing alone does not identify the cancellation
source.

## Software evidence

`tests/test_managed_executor_cancellation.py` exercises the real room outcome
waiter, native identity monitor, periodic refresh cleanup and `asyncio.Timeout`.
It waits for the periodic loop's normal five-second refresh interval, then the
refresh callback and native identity read remain pending together. Once both
waiter and refresh are active, it reschedules the real timeout to expire and
asserts cancellation unwinds the identity read and refresh task. It requires a
handled completion timeout, one cleanup STOP, a failed-room event and no
completion credit. It neither injects `TimeoutError` nor shortens the configured
refresh interval; qualification takes at least one normal refresh interval.

This closes the elapsed room-deadline regression gap. It does not reproduce or
explain the observed raw cancellation. The inspected Home Assistant 2026.10.1
WebSocket handler runs service commands in background tasks; losing the response
connection alone does not establish cancellation of the managed runner.

## Next physical check

Use a fresh candidate-bound observer and an exact preview of one room followed
by one saved area. Set the qualification budget to 1,800 seconds per leg, leaving
room for native session settlement. Keep normal application timeout defaults.
Confirm current physical targets and supervision before motion. Compare the
area checkpoint session fingerprint with the robot's independently read active
session fingerprint. Require positive room and area results and final native-idle
docking. A separate repeat must demonstrate fenced Stop during the area leg and
Stop/dock settlement without area completion credit.

Retain the original failed receipt and any browser observation gaps. A longer
budget or a passing software test is not a physical acceptance result. If raw
cancellation recurs, capture its task-cancellation count, timeout-expiry state and
initiating caller before changing cancellation behavior.
