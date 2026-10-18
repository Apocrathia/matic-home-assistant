# v0.5.0-rc30

Add an explicit Delete shared schedule action to a saved room’s menu. The
confirmation names every affected plan. Deletion removes the room’s shared
schedule, shared counters and next-clean flags from those plans; their usual
cleaning settings, private schedules and cleaning history remain.

Deletion checks the current map and rejects a changed confirmation or a
schedule in use. The update is saved atomically, with rollback on failure.

RC30 retains the RC29 history dismissal fix and the earlier reconnect and
managed completion guards. Source review, CI, installation, runtime, device,
physical and owner acceptance are recorded separately.
