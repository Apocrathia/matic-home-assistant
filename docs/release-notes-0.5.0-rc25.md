# v0.5.0-rc25

RC25 adds a Bluetooth pairing fix to the [RC24 interface overhaul](release-notes-0.5.0-rc24.md).
Requires Home Assistant 2026.10 or later. Stable remains `v0.4.8` while
[owner and physical acceptance](acceptance-0.5.md#gate-sequence-and-release-receipts) continue.

## Bluetooth pairing

**Robot was reset** binds automatic bond replacement to the Bluetooth address
saved for that entry. If that address is absent from discovery, pairing stops
before contacting another candidate.

For older entries without a saved address, an existing bond requires an explicit
selection in **Reset this Bluetooth pairing?**. Select only the robot you put
in Pairing mode; cancel if you cannot identify it. The selected robot must still
be advertising before its bond can be removed. Removal is limited to one attempt
per device in that flow, including retries after an uncertain result.

Recovery still requires a fresh passkey exchange and authentication against the
selected network robot's stored identity before saving access. This repairs a
legacy-entry recovery regression without allowing another nearby robot's bond to
be removed automatically.

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
