import { html, nothing } from "lit";
import type {
  CadenceReason,
  CleaningMode,
  CoverageSetting,
  PlanRoom,
  RoomCadencePolicy,
} from "./backend-contracts";
import type { WorkspaceIntent, WorkspaceState } from "./contracts";
import type { Translate } from "./plan-copy";

export const MODES: readonly CleaningMode[] = ["vacuum", "mop", "vacuum_and_mop"];
export const COVERAGES: readonly CoverageSetting[] = ["quick", "standard", "heavy_duty"];

export const modeLabel = (t: Translate, mode: CleaningMode): string =>
  mode === "vacuum" ? t("vacuum", "Vacuum") : mode === "mop" ? t("mop", "Mop") : t("vacuum_and_mop", "Vacuum + mop");

export const coverageLabel = (t: Translate, value: CoverageSetting): string =>
  value === "quick" ? t("quick", "Quick") : value === "standard" ? t("standard", "Optimal") : t("heavy_duty", "Heavy duty");

export const coverageNeedsVacuum = (t: Translate): string =>
  t("v4_cadence_coverage_requires_vacuum", "The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off.");

const cadenceFor = (room: PlanRoom): RoomCadencePolicy => room.cadence || {
  scope: "plan",
  mopEveryN: null,
  coverageEveryN: null,
  periodicCoverageSetting: null,
  doMopNext: false,
  doCoverageNext: false,
};

/** A room schedule's state in one or two sentences, most urgent first. */
export const cadenceSummary = (
  t: Translate,
  policy: RoomCadencePolicy | undefined,
  progress: PlanRoom["cadenceProgress"] | undefined,
  reasons: readonly CadenceReason[] = progress?.reasons || [],
): string => {
  if (reasons.includes("coverage_requires_vacuum")) return coverageNeedsVacuum(t);
  if (reasons.includes("identity_changed") || reasons.includes("room_not_on_current_map")) {
    return t("v4_cadence_identity_blocked", "This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");
  }
  if (reasons.includes("shared_schedule_unavailable")) {
    return t("v4_cadence_shared_unavailable", "The shared room schedule is unavailable. Review its settings before cleaning.");
  }
  if (reasons.includes("mop_progress_unverified") || reasons.includes("coverage_progress_unverified")) {
    const unverified: string[] = [];
    if (reasons.includes("mop_progress_unverified")) {
      unverified.push(t("v4_cadence_mop_progress_unverified", "Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."));
    }
    if (reasons.includes("coverage_progress_unverified")) {
      unverified.push(t("v4_cadence_coverage_progress_unverified", "Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."));
    }
    return unverified.join(" ");
  }
  if (reasons.includes("invalid_cadence_policy")) {
    return t("v4_cadence_policy_invalid", "The room schedule needs review before it can be applied.");
  }
  if (!policy || (!policy.mopEveryN && !policy.coverageEveryN)) {
    return t("v4_cadence_not_enabled", "No recurring room schedule is enabled.");
  }
  const parts: string[] = [];
  const mopDue = progress?.mopDue || progress?.reasons.includes("mop_due");
  const coverageDue = progress?.coverageDue || progress?.reasons.includes("coverage_due");
  if (policy.mopEveryN) {
    parts.push(mopDue
      ? t("v4_cadence_mop_due", "Vacuum and mop is due on this clean.")
      : t("v4_cadence_mop_progress", "Mop every {interval} cleans; {completed} counted since the last mop.", {
        interval: policy.mopEveryN,
        completed: progress?.mopProgress ?? 0,
      }));
  }
  if (policy.coverageEveryN) {
    parts.push(coverageDue
      ? t("v4_cadence_coverage_due", "{coverage} vacuum rotation is due on this clean.", {
        coverage: coverageLabel(t, policy.periodicCoverageSetting || "standard"),
      })
      : t("v4_cadence_coverage_progress", "Vacuum rotation every {interval} cleans; {completed} counted so far.", {
        interval: policy.coverageEveryN,
        completed: progress?.coverageProgress ?? 0,
      }));
  }
  return parts.join(" ");
};

/** What the schedule block needs from the Edit view that shows it. */
export interface CadenceContext {
  readonly t: Translate;
  readonly state: WorkspaceState;
  readonly intent: (intent: WorkspaceIntent) => void;
  /** The shared reason's id while every Edit control is held (plan.md §4 E5), else null. */
  readonly held: string | null;
}

const patchCadence = (context: CadenceContext, index: number, patch: Partial<RoomCadencePolicy>): void => {
  const room = context.state.planDraft.rooms[index];
  if (!room || context.held) return;
  const rooms = context.state.planDraft.rooms.map((candidate, at) =>
    at === index ? { ...candidate, cadence: { ...cadenceFor(candidate), ...patch } } : candidate);
  context.intent({ type: "patch-plan-draft", patch: { rooms } });
};

const patchInterval = (context: CadenceContext, event: Event, index: number, field: "mopEveryN" | "coverageEveryN"): void => {
  const input = event.currentTarget as HTMLInputElement;
  const room = context.state.planDraft.rooms[index];
  if (!room) return;
  if (context.held) {
    input.value = cadenceFor(room)[field]?.toString() || "";
    return;
  }
  const raw = input.value;
  if (raw === "") {
    patchCadence(context, index, field === "mopEveryN" ? { mopEveryN: null, doMopNext: false } : { coverageEveryN: null, doCoverageNext: false });
    return;
  }
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > 100) {
    input.reportValidity();
    return;
  }
  patchCadence(context, index, field === "coverageEveryN"
    ? { coverageEveryN: value, periodicCoverageSetting: room.cadence?.periodicCoverageSetting || room.coverageSetting }
    : { mopEveryN: value });
};

/** A held select or checkbox shows the draft's value again and changes nothing. */
const keep = (context: CadenceContext, event: Event, value: string | boolean): boolean => {
  if (!context.held) return false;
  const input = event.currentTarget as HTMLInputElement;
  if (typeof value === "boolean") input.checked = value;
  else input.value = value;
  return true;
};

/** The room schedule block in an open Edit row (UX3 replaces it; room-schedule.md). */
export const cadenceControls = (context: CadenceContext, room: PlanRoom, index: number, label: string) => {
  const { t, state, held } = context;
  const draft = state.planDraft;
  const policy = cadenceFor(room);
  const progress = room.cadenceProgress;
  const savedRoom = draft.id
    ? state.resources.plans.value?.plans.find((plan) => plan.id === draft.id)?.rooms.find((candidate) => candidate.roomId === room.roomId)
    : undefined;
  const previousScope = savedRoom?.cadence?.scope ?? null;
  const sharedRoom = state.resources.plans.value?.rooms.find((candidate) => candidate.roomId === room.roomId);
  const hasSharedSchedule = Boolean(sharedRoom?.sharedCadence || sharedRoom?.sharedCadenceProgress);
  const hasCadence = Boolean(policy.mopEveryN || policy.coverageEveryN);
  const hasMopProgress = Boolean(progress?.mopProgress || policy.doMopNext || room.cadenceReasons?.includes("mop_progress_unverified"));
  const hasCoverageProgress = Boolean(progress?.coverageProgress || policy.doCoverageNext
    || room.cadenceReasons?.includes("coverage_progress_unverified"));
  const resetDisabled = draft.dirty || state.command !== "idle" || state.managedLock
    || (state.activity !== "idle" && state.activity !== "docked")
    || state.dataMode !== "live";
  const join = t("v4_cadence_shared_join_effect", "Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");
  const scopeExplanation = previousScope !== null && previousScope !== policy.scope
    ? policy.scope === "shared"
      ? join
      : t("v4_cadence_shared_leave_effect", "Saving starts new progress for this plan only, and other plans keep the shared schedule.")
    : previousScope === null && hasCadence
      ? policy.scope === "shared"
        ? hasSharedSchedule ? join : t("v4_cadence_new_shared_effect", "Saving creates a schedule shared by every plan that uses this room, starting from zero.")
        : t("v4_cadence_new_private_effect", "Saving starts progress for this plan only, from zero.")
      : t("v4_cadence_existing_effect", "Changing how often keeps the progress, and turning a schedule off pauses it.");
  const gate = { disabled: held ? "true" : nothing, described: held ?? nothing };
  return html`
    <details class="plan-option cadence-config">
      <summary aria-disabled=${gate.disabled} aria-describedby=${gate.described}>${t("v4_room_cadence_named", "Room schedule for {room}", { room: label })}</summary>
      <p class="subtle">${t("v4_cadence_description", "Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
      <div class="cadence-fields">
        <label class="field ms-field">${t("v4_cadence_scope", "Count cleans")}
          <select aria-label=${t("v4_cadence_scope_named", "Count cleans for {room}", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} .value=${policy.scope}
            @change=${(event: Event) => { if (!keep(context, event, policy.scope)) patchCadence(context, index, { scope: (event.currentTarget as HTMLSelectElement).value as RoomCadencePolicy["scope"] }); }}>
            <option value="plan" ?selected=${policy.scope === "plan"}>${t("v4_cadence_this_plan", "In this plan only")}</option>
            <option value="shared" ?selected=${policy.scope === "shared"}>${t("v4_cadence_shared", "Across all plans (recommended)")}</option>
          </select>
        </label>
        <label class="field ms-field">${t("v4_cadence_mop_interval", "Vacuum and mop every N cleans")}
          <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${t("v4_cadence_mop_interval_named", "How often to mop {room}, every 1 to 100 cleans", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} ?readonly=${Boolean(held)} .value=${policy.mopEveryN?.toString() || ""} ?disabled=${room.cleaningMode !== "vacuum"} @change=${(event: Event) => patchInterval(context, event, index, "mopEveryN")}>
        </label>
        <label class="field ms-field">${t("v4_cadence_coverage_interval", "Vacuum rotation every N cleans")}
          <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${t("v4_cadence_coverage_interval_named", "How often to add a vacuum rotation in {room}, every 1 to 100 cleans", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} ?readonly=${Boolean(held)} ?disabled=${room.cleaningMode === "mop"} .value=${policy.coverageEveryN?.toString() || ""} @change=${(event: Event) => patchInterval(context, event, index, "coverageEveryN")}>
        </label>
        ${policy.coverageEveryN ? html`
          <label class="field ms-field">${t("v4_cadence_periodic_coverage", "Vacuum rotation level")}
            <select aria-label=${t("v4_cadence_periodic_coverage_named", "Vacuum rotation level for {room}", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} ?disabled=${room.cleaningMode === "mop"} .value=${policy.periodicCoverageSetting || "standard"}
              @change=${(event: Event) => { if (!keep(context, event, policy.periodicCoverageSetting || "standard")) patchCadence(context, index, { periodicCoverageSetting: (event.currentTarget as HTMLSelectElement).value as CoverageSetting }); }}
            >${COVERAGES.map((option) => html`<option value=${option} ?selected=${option === policy.periodicCoverageSetting}>${coverageLabel(t, option)}</option>`)}</select>
          </label>
        ` : nothing}
      </div>
      <p class="subtle" role="status">${scopeExplanation}</p>
      ${room.cleaningMode === "mop" ? html`
        <p class="subtle">${policy.coverageEveryN ? coverageNeedsVacuum(t) : t("v4_cadence_coverage_available_modes", "Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.")}</p>
        ${policy.coverageEveryN ? html`<button type="button" class="ms-btn ms-btn--secondary" aria-disabled=${gate.disabled} aria-describedby=${gate.described}
          @click=${() => patchCadence(context, index, { scope: "plan", coverageEveryN: null, periodicCoverageSetting: null, doCoverageNext: false })}
        >${t("v4_cadence_clear_room_coverage", "Turn off")}</button>` : nothing}
      ` : nothing}
      ${room.cleaningMode !== "vacuum" ? html`<p class="subtle">${t("v4_cadence_mop_requires_vacuum", "Can't add a mop schedule until this room's cleaning mode is Vacuum.")}</p>` : nothing}
      ${policy.mopEveryN && room.cleaningMode === "vacuum" ? html`<p class="subtle">${t("v4_cadence_clear_mop_to_change_normal", "Can't change the cleaning mode until the mop schedule is off.")}</p>` : nothing}
      <div class="plan-options" role="group" aria-label=${t("v4_cadence_next_actions_named", "Next clean options for {room}", { room: label })}>
        <label class="plan-option"><input type="checkbox" aria-label=${t("v4_cadence_do_mop_next_named", "Do vacuum and mop on the next clean for {room}", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} .checked=${policy.doMopNext} ?disabled=${!policy.mopEveryN}
          @change=${(event: Event) => { if (!keep(context, event, policy.doMopNext)) patchCadence(context, index, { doMopNext: (event.currentTarget as HTMLInputElement).checked }); }}><span class="plan-option-copy"><strong>${t("v4_cadence_do_mop_next", "Do vacuum and mop on the next clean")}</strong></span></label>
        <label class="plan-option"><input type="checkbox" aria-label=${t("v4_cadence_do_coverage_next_named", "Add a vacuum rotation on the next clean for {room}", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} .checked=${policy.doCoverageNext} ?disabled=${!policy.coverageEveryN || room.cleaningMode === "mop"}
          @change=${(event: Event) => { if (!keep(context, event, policy.doCoverageNext)) patchCadence(context, index, { doCoverageNext: (event.currentTarget as HTMLInputElement).checked }); }}><span class="plan-option-copy"><strong>${t("v4_cadence_do_coverage_next", "Add a vacuum rotation on the next clean")}</strong></span></label>
      </div>
      ${policy.coverageEveryN ? html`<p class="subtle">${t("v4_cadence_coverage_verification_hint", "A vacuum rotation counts only after the robot confirms the vacuum coverage and that the clean finished. If it can't confirm, the rotation stays due for the next clean.")}</p>` : nothing}
      <p class="subtle" aria-live="polite">${cadenceSummary(t, policy, progress, room.cadenceReasons)}</p>
      ${draft.id && (policy.mopEveryN || policy.coverageEveryN || hasMopProgress || hasCoverageProgress) ? html`
        <div class="toolbar">
          ${policy.mopEveryN || hasMopProgress ? html`<button
            class="danger ms-btn ms-btn--secondary ms-btn--danger"
            type="button"
            aria-label=${t("v4_reset_mop_cadence_button_named", "Reset mopping progress for {room}", { room: label })}
            data-dialog-launcher="confirmResetCadence"
            ?disabled=${resetDisabled}
            @click=${() => context.intent({ type: "request-room-cadence-reset", planId: draft.id as string, roomId: room.roomId, mode: "mop" })}
          >${t("v4_reset_mop_cadence_button", "Reset mopping")}</button>` : nothing}
          ${policy.coverageEveryN || hasCoverageProgress ? html`<button
            class="danger ms-btn ms-btn--secondary ms-btn--danger"
            type="button"
            aria-label=${t("v4_reset_coverage_cadence_button_named", "Reset vacuum rotation progress for {room}", { room: label })}
            data-dialog-launcher="confirmResetCadence"
            ?disabled=${resetDisabled}
            @click=${() => context.intent({ type: "request-room-cadence-reset", planId: draft.id as string, roomId: room.roomId, mode: "coverage" })}
          >${t("v4_reset_coverage_cadence_button", "Reset vacuum rotation")}</button>` : nothing}
        </div>
        <p class="subtle">${t("v4_reset_cadence_hint", "Reset is available for a saved plan while the robot is idle. Cleaning history is kept separately.")}</p>
      ` : nothing}
    </details>
  `;
};
