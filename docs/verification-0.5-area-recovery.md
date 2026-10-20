# Matic 0.5 saved-area recovery receipt

**Status: OPEN — area recovery and release acceptance are not certified.**

This receipt tracks whether an existing saved custom area can be reviewed
safely on a changed map, rebound only after an explicit current-map confirmation,
and then previewed for a saved plan. It does not authorize robot motion.

## Candidate identity

- Recovery implementation: `fix/home-shortcuts-half-sheet-fit` (PR
  [#283](https://github.com/ProspectOre/matic-home-assistant/pull/283)), with
  intended base `614b0b60b24f918366cf7d2950935657f7860a44`, final head
  `b68165c3df44c8f196b48c22e3450aac773c7cd4`, and merge commit
  `080e213f73a4754e8d63aa9c4e439a9a1b740aa6`.
- Qualification snapshot: `main`
  `17a6eecf6c486eb82b4e1a1fc60ca3c1a6d41350`, which contains the recovery
  implementation and the later GitHub-hosted-runner guard from PR #282.
- The earlier PR #281 source result at
  `106c4bd28c027c0ba658e799c81c76da28b2d7e6` is historical only; it does not
  qualify the recovery implementation or this snapshot.
- Target manifest version: `0.5.0rc34`.
- This receipt describes source work only. It does not identify the code
  currently loaded by Home Assistant; installed identity is **open**.

## Why legacy v4 cannot be automatically rebound

A v4 custom-area binding stores a bounded local-geometry fingerprint and floor
identity, but not the historical room-frame evidence needed to prove that the
area retained its meaning after the map changed. A current map that happens to
contain valid circles does not establish that the room boundaries or coordinate
frame stayed fixed. Automatically replacing the old binding would therefore
turn missing historical evidence into an unsafe claim of continuity. The
fail-closed `GEOMETRY_CHANGED` result is intentional until a person reviews the
area against the current map. See
[`area_binding.py`](../custom_components/matic_robot/area_binding.py) and the
[0.5 acceptance matrix](acceptance-0.5.md).

## Required safe recovery flow

1. Read the saved area and current map without issuing a robot command. Show
   the saved coverage over the current map: its outline and coverage when an
   outline is stored, otherwise its saved circles. Identify the map/frame
   change and make the action's effect explicit: confirming writes a new
   binding for the same saved area ID using the current map. If saved coverage
   is unavailable to inspect, require redraw instead.
2. Require the operator to inspect the overlay and explicitly confirm that the
   area still covers the intended physical room. If identity, geometry,
   association, or visibility is ambiguous, keep the area blocked and require
   redraw; do not silently rebind.
3. After confirmation, read the area back and verify the stored binding is
   current. Then request a fresh preview of the saved plan and verify that the
   expected room and custom area appear exactly once, with no stale-map blocker.
4. Keep all execution controls locked until a separate authorized physical
   acceptance. Preview success alone is not a motion or completion receipt.

The candidate labels this action **Confirm area on current map** and explains
that it updates the saved map binding.

## Source E2E coverage and its boundary

`tests/test_area_recovery_e2e.py` exercises the persisted integration flow:
legacy v4 area → map change → blocked plan/service preview with no robot
command → area API readback → same-ID confirmation write → current readback →
`MaticGetPlanReadiness` → fresh `MaticGetPlan` preview. It also covers an
unrelated room addition and a bound-room translation.

`tests/browser/map_studio_v4_area_confirmation_e2e.spec.mjs` mounts the actual
Map Studio panel against a controlled Home Assistant-shaped browser backend. It
checks the visible outline path when present, the circle-only legacy warning,
the visible confirmation action, one same-ID POST, current-state readback, a
fresh plan-catalog request that carries a preview token, and zero service calls
in Chromium and WebKit. The browser backend is intentionally a test fixture;
it does not execute the Python `MaticGetPlan` tool. The Python and browser
checks together qualify source behavior, while installed Home Assistant and
live-robot evidence remain separate open gates.

## Evidence ledger

| Gate | Evidence recorded | Status / closure evidence |
|---|---|---|
| Source logic and regression tests | Exact `main` snapshot `17a6eecf6c486eb82b4e1a1fc60ca3c1a6d41350`: `python -m pytest --cov=custom_components/matic_robot --cov-report=term-missing` passed 5,135 tests at 100.00% coverage. It includes saved-area recovery and the later runner guard. | **Pass — source evidence only.** The suite cannot prove installed state, user review, or robot behavior. Re-run if the release source changes. |
| Hosted CI | Exact `main` snapshot `17a6eecf6c486eb82b4e1a1fc60ca3c1a6d41350` passed Browser UI, Test, HACS, and Hassfest. PR #283's final head also passed those four checks. | **Pass — exact snapshot.** This does not substitute for complete review or runtime gates. Recheck if the release source changes. |
| Regular review and findings | The retry completed with no findings on merge commit `080e213f73a4754e8d63aa9c4e439a9a1b740aa6`. Its parents are the intended base and PR #283 final head, and its tree and base diff match that head exactly. Separately, Codex completed a no-findings review on unmerged draft PR [#285](https://github.com/ProspectOre/matic-home-assistant/pull/285), whose exact base is `614b0b60b24f918366cf7d2950935657f7860a44` and head is `b68165c3df44c8f196b48c22e3450aac773c7cd4`. | **Open — pre-merge sequence.** PR #285 supplies the literal final-head/intended-base comparison and has no findings to disposition, but its review occurred after PR #283 merged. PR #283 was manually merged; this later receipt cannot establish the required owner recheck before that merge. Record the owner's disposition of that timing gap before certification; see [review and manual-merge checklist](maintenance-reviews.md). |
| Installed runtime identity | The Home Assistant loaded integration version and source fingerprint have not been established for this candidate. | **Open.** Record installed version, exact file identity, startup/reload result, and rollback/preservation evidence. |
| Saved-area recovery E2E | The owner has not used **Confirm area on current map** on the affected area. No current-map confirmation/readback receipt exists. | **Open.** On the installed candidate, exercise the review → explicit confirmation → area readback → `MaticGetPlanReadiness` → fresh `MaticGetPlan` preview flow. Preserve plan ID and expected target counts in the private evidence record; do not put map coordinates or secrets here. |
| Safe live preview | A prior `MaticGetPlan` attempt for `release_05_supervised_acceptance_rc27_20261016` returned “plan custom area is not on this map.” No successful preview after a current-map confirmation is recorded. | **Open.** Require a fresh successful preview after readback, with the room and area both present exactly once. Preview is read-only and does not certify execution. |
| Robot and physical Gate F | The October 19 Office run ended `unverified` with `cancellation_unattributed`; the retained result does not prove successful completion. No qualifying current-candidate mixed room/area run plus separate owner Stop leg is recorded here. | **Open.** Follow the [Gate F run sheet](owner-gate-f-run-sheet.md): supervised mixed-plan run, attributable native and managed completion, docked terminal state, then a separate supervised Stop-during-area run. Preserve the physical route and owner supervision conditions. |
| Owner acceptance and release | No final owner walkthrough/signoff or stable publication receipt is recorded. | **Open.** Owner acceptance follows completion of the exact-candidate review, CI, installed-runtime, preview, and physical gates. Keep publication separate from source qualification. |

## Release-wide qualification

This receipt closes no broader 0.5 rows by itself. The final RC must still meet
the [0.5 acceptance matrix](acceptance-0.5.md): exact-head CI and independent
review, the refreshed walkthrough and device/accessibility evidence, installed
runtime identity and preservation, transport/cadence/performance evidence, the
supervised physical gates, and owner signoff. Historical evidence for earlier
RCs stays historical until it is refreshed against the final candidate.

## Release decision

Do not certify 0.5 from this receipt while any required row remains open. A
green source suite or hosted CI can qualify only its named source revision. A
successful area rebind and plan preview would establish safe preparation for a
run; only attributable supervised robot evidence can close the physical gate.
