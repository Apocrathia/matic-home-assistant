# v0.5.0-rc25

RC25 adds a Bluetooth pairing fix to the [RC24 interface overhaul](release-notes-0.5.0-rc24.md).
Requires Home Assistant 2026.10 or later. Stable remains `v0.4.8` while
[owner and physical acceptance](acceptance-0.5.md#gate-sequence-and-release-receipts) continue.

## Bluetooth pairing

**Robot was reset** can delete a previous Bluetooth bond only when the discovered
robot matches the address saved for that entry. If that address is absent from
discovery, pairing stops before contacting another candidate.

Older entries without a saved address can still try pairing with their sole fresh
advertisement. They cannot authorize deleting an existing bond. This closes a
case where another nearby robot's bond could be removed before credential checks.

## Upgrade and rollback

The four duplicate-entity removals and plan-store migration introduced in RC24
also apply when upgrading from an earlier release. See its entity replacements
and rollback guidance above. Returning to RC22 requires a matching pre-upgrade
backup and plan store; copying older integration files alone is insufficient.
Preserve newer run records before restoring prior state.

RC24's scoped installation, preservation and runtime results are recorded in
[its qualification receipt](verification-0.5-rc24.md). RC25 needs its own review,
CI, HACS installation and runtime readback. These checks do not supply human,
device or physical acceptance.
