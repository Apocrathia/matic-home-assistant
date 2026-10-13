import { LitElement, css, html, nothing } from "lit";
import { controls } from "./controls";
import { icon, iconChevronRight, iconDue, iconNoticeWarning, iconPlus } from "./icons";
import { base, tokens } from "./tokens";
import type { SavedPlan } from "./backend-contracts";
import type { Localize, WorkspaceIntent, WorkspaceState } from "./contracts";
import { PLAN_VIEWS_TAG } from "./element-tags";
import { WORKSPACE_INTENT_EVENT } from "./map-canvas";
import {
  PLAN_BLOCKERS,
  PLAN_PREVIEW,
  canEditCoordinates,
  draftForPlan,
  hasStoppableWork,
  initialWorkspaceState,
  roomBlocker,
} from "./state";
import { translate } from "./localize";
import { dueLines, formatNumber, settingLabel } from "./plan-copy";

/**
 * The plan picker and a plan's Run view (plan.md §3). Their rows and copy
 * load with the workflow views, since only the plan workflows show them.
 */
export class MaticPlanViewsV4 extends LitElement {
  static override properties = {
    state: { attribute: false },
    localize: { attribute: false },
  };

  static override styles = [tokens, base, controls, css`
:host { display: block; }
.plain { display: grid; gap: var(--ms-space-2); margin: 0; padding: 0; list-style: none; }
.plan-row .ms-row__body { display: grid; gap: 0.125rem; }
/* Beats controls' .ms-row__body strong; a long name ellipsizes and its chips stay on line 1. */
.plan-row .plan-title { display: flex; gap: var(--ms-space-1) var(--ms-space-2); align-items: center; min-inline-size: 0; }
.plan-row .plan-title bdi { overflow: hidden; min-inline-size: 0; text-overflow: ellipsis; white-space: nowrap; }
.plan-row .plan-title .ms-chip { flex: none; }
.chip-default { border-color: transparent; background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface-card)); }
.chip-attention { border-color: transparent; background: color-mix(in srgb, var(--ms-danger) 12%, var(--ms-surface-card)); }
/* Line 3 keeps the text colour; the glyph carries the tone (design-system.md §5). */
.lines { display: grid; gap: 0.125rem; margin: 0; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.line { display: flex; gap: var(--ms-space-1); align-items: flex-start; margin: 0; color: var(--ms-text); }
.line .ms-icon { inline-size: 1rem; block-size: 1rem; color: var(--ms-resolved-indicator, var(--ms-accent)); }
.line[data-tone="warning"] .ms-icon { color: var(--ms-warning); }
.plan-row .ms-row__trail:dir(rtl) .ms-icon { scale: -1 1; }
.empty-card { display: grid; gap: var(--ms-space-2); padding: var(--ms-space-4); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); }
.empty-card h3 { margin: 0; font-size: var(--ms-t-md); }
.empty-card p { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-md); line-height: var(--ms-lh-normal); }
.empty-card .ms-btn { justify-self: start; }
.quiet { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.heading { margin: var(--ms-space-4) 0 var(--ms-space-2); color: var(--ms-text-quiet); font-size: var(--ms-t-md); font-weight: var(--ms-w-bold); line-height: var(--ms-lh-tight); }
.summary { margin: 0 0 var(--ms-space-2); color: var(--ms-text-quiet); font-size: var(--ms-t-md); line-height: var(--ms-lh-snug); }
.run-list { display: grid; margin: 0 0 var(--ms-space-3); padding: 0; list-style: none; }
.run-row { display: flex; gap: var(--ms-space-3); align-items: flex-start; padding-block: var(--ms-space-2); border-block-end: 1px solid var(--ms-line); }
.run-row:last-child { border-block-end: 0; }
.run-row[data-break] { margin-block-start: var(--ms-space-3); padding-block-start: var(--ms-space-3); border-block-start: 2px dashed var(--ms-line-strong); }
.row-lines { display: grid; flex: 1; gap: 0.125rem; min-inline-size: 0; }
.row-lines bdi { overflow: hidden; font-weight: var(--ms-w-bold); text-overflow: ellipsis; white-space: nowrap; }
.row-lines small { color: color-mix(in srgb, var(--ms-text) 78%, var(--ms-local, var(--ms-surface-card))); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.row-lines .ms-chip { justify-self: start; }
.ms-badge { display: grid; flex: none; place-items: center; inline-size: 1.5rem; block-size: 1.5rem; border-radius: 50%; background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface-card)); font-size: var(--ms-t-xs); font-weight: var(--ms-w-bold); font-variant-numeric: tabular-nums; }
.problem { margin: 0 0 var(--ms-space-2); padding: var(--ms-space-3); border-inline-start: 3px solid var(--ms-danger); border-radius: var(--ms-radius-md); background: color-mix(in srgb, var(--ms-danger) 12%, var(--ms-surface-card)); font-size: var(--ms-t-sm); line-height: var(--ms-lh-snug); }
.switch-row { display: flex; gap: var(--ms-space-3); align-items: center; min-block-size: var(--ms-control); }
.switch-copy { display: grid; flex: 1; gap: 0.125rem; min-inline-size: 0; font-size: var(--ms-t-md); }
.switch-copy small, .reason { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.sr-only { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; padding: 0; border: 0; clip-path: inset(50%); white-space: nowrap; }
`];

  state: WorkspaceState = initialWorkspaceState();
  localize?: Localize;

  readonly #t = (key: string, fallback: string, placeholders?: Readonly<Record<string, string | number>>): string =>
    translate(this.localize, key, fallback, placeholders);

  #intent(intent: WorkspaceIntent): void {
    this.dispatchEvent(new CustomEvent(WORKSPACE_INTENT_EVENT, { detail: intent, bubbles: true, composed: true }));
  }

  #count(value: number): string {
    return formatNumber(this.state.locale, value);
  }

  /** The tone lines under a row or a summary: the due work with the due glyph. */
  #lines(lines: readonly string[]) {
    return lines.length
      ? html`<span class="lines">${lines.map((line) => html`<span class="line">${icon(iconDue)}<span>${line}</span></span>`)}</span>`
      : nothing;
  }

  #planRow(plan: SavedPlan, isDefault: boolean) {
    const count = plan.rooms.length;
    const ordered = plan.runBehavior === "ordered";
    const line2 = count === 1
      ? ordered
        ? this.#t("v4_plan_row_ordered_one", "1 room · Top to bottom, as listed")
        : this.#t("v4_plan_row_rotation_one", "1 room · Longest-waiting rooms first")
      : ordered
        ? this.#t("v4_plan_row_ordered", "{count} rooms · Top to bottom, as listed", { count: this.#count(count) })
        : this.#t("v4_plan_row_rotation", "{count} rooms · Longest-waiting rooms first", { count: this.#count(count) });
    const blocker = plan.nextRunPreview?.blocker;
    // A paused plan shows one status, its chip (plan.md R2).
    const line3 = !plan.enabled
      ? nothing
      : blocker && blocker !== "plan_disabled"
        ? html`<span class="lines"><span class="line" data-tone="warning">${icon(iconNoticeWarning)}<span>${this.#t("v4_plan_row_blocked", "Needs attention before it can run")}</span></span></span>`
        : this.#lines(dueLines(this.#t, this.state.locale, plan.nextRunPreview?.rooms ?? []));
    const hint = this.#t("v4_plan_default_hint", "Home Assistant's plan button and plan select run this plan.");
    return html`<li>
      <button
        class="ms-row ms-row--card plan-row"
        type="button"
        data-plan-row=${plan.id}
        aria-describedby=${isDefault ? "default-hint" : nothing}
        @click=${() => this.#intent({ type: "select-plan", planId: plan.id })}
      >
        <span class="ms-row__body">
          <strong class="plan-title"><bdi>${plan.name}</bdi>${isDefault
            ? html`<span class="ms-chip chip-default" title=${hint}>${this.#t("v4_plan_default", "Default")}</span>`
            : nothing}${plan.enabled ? nothing : html`<span class="ms-chip">${this.#t("v4_paused", "Paused")}</span>`}</strong>
          <small>${line2}</small>
          ${line3}
        </span>
        <span class="ms-row__trail">${icon(iconChevronRight)}</span>
      </button>
      ${isDefault ? html`<span class="sr-only" id="default-hint">${hint}</span>` : nothing}
    </li>`;
  }

  #picker() {
    const catalog = this.state.resources.plans.value;
    const create = this.#t("v4_create_plan", "Create a plan");
    if (!catalog?.plans.length) {
      return html`<div class="empty-card">
        <h3>${this.#t("v4_no_plans", "No plans yet")}</h3>
        <p>${this.#t("v4_no_plans_hint", "Save a plan to repeat a set of rooms.")}</p>
        <button class="ms-btn ms-btn--primary" type="button" @click=${() => this.#intent({ type: "select-plan", planId: null })}>${create}</button>
      </div>`;
    }
    // The default plan first, then the catalog's order (plan.md §3).
    const plans = [...catalog.plans].sort((a, b) => Number(b.id === catalog.selectedPlan) - Number(a.id === catalog.selectedPlan));
    return html`<ul class="plain">
      ${plans.map((plan) => this.#planRow(plan, plan.id === catalog.selectedPlan))}
      <li><button class="ms-row ms-row--card" type="button" @click=${() => this.#intent({ type: "select-plan", planId: null })}>
        <span class="ms-row__lead">${icon(iconPlus)}</span>
        <span class="ms-row__body"><strong>${create}</strong></span>
      </button></li>
    </ul>`;
  }

  /** Run's "Plan enabled" switch and why it is held (plan.md §5 Run switch, row RS). */
  #switchReason(): string | null {
    const state = this.state;
    if (state.pendingAction === "save-plan") return this.#t("v4_reason_plan_saving", "Waiting for Home Assistant to save the plan.");
    if (state.pendingAction === "run-plan") return this.#t("v4_reason_run_plan_checking", "Waiting for Home Assistant to check the next run.");
    if (hasStoppableWork(state)) return this.#t("v4_reason_plan_switch_busy", "Can't change this until the robot finishes.");
    if (!state.host.connected || !state.host.robotConnected) {
      return this.#t("v4_reason_plan_switch_offline", "Waiting for Home Assistant to reach the robot again.");
    }
    return canEditCoordinates(state) ? null : this.#t("v4_reason_save_plan_map", "Waiting for the map to be ready.");
  }

  #switch() {
    const enabled = this.state.planDraft.enabled;
    const reason = this.#switchReason();
    return html`
      <div class="switch-row">
        <span class="switch-copy">
          <span id="enabled-label">${this.#t("v4_plan_can_run", "Plan enabled")}</span>
          <small id="enabled-hint">${this.#t("v4_plan_can_run_on", "When it's on, this plan can run from here, from automations and from Home Assistant actions.")}</small>
        </span>
        <button
          class="ms-switch"
          type="button"
          role="switch"
          aria-checked=${String(enabled)}
          aria-labelledby="enabled-label"
          aria-describedby=${reason ? "enabled-hint enabled-reason" : "enabled-hint"}
          aria-disabled=${reason ? "true" : nothing}
          @click=${() => { if (!reason) this.#intent({ type: "set-plan-enabled", enabled: !enabled }); }}
        ></button>
      </div>
      ${reason ? html`<p class="reason" id="enabled-reason">${reason}</p>` : nothing}
    `;
  }

  /** One Run row: the position in Saved order, the name, its setting, and "Needs attention" on the blocking room. */
  #runRow(name: string, setting: string, position: number | null, options: { readonly part?: number; readonly blocked?: boolean } = {}) {
    return html`<li class="run-row" ?data-break=${options.part !== undefined}>
      ${options.part === undefined ? nothing : html`<span class="sr-only">${this.#t("v4_part_break", "Part {number} starts here; the robot may stop at the dock first", { number: this.#count(options.part) })}</span>`}
      ${position === null ? nothing : html`<span class="ms-badge" aria-hidden="true">${this.#count(position)}</span>`}
      <span class="row-lines">
        <bdi>${name}</bdi>
        <small>${setting}</small>
        ${options.blocked ? html`<span class="ms-chip chip-attention">${this.#t("v4_needs_attention", "Needs attention")}</span>` : nothing}
      </span>
    </li>`;
  }

  /** plan.md §3 Run view, rows R1-R4. */
  #run() {
    const state = this.state;
    const draft = state.planDraft;
    const catalog = state.resources.plans.value;
    const plan = catalog?.plans.find((candidate) => candidate.id === draft.id);
    if (!catalog || !plan) return nothing;
    const preview = plan.nextRunPreview;
    const blocker = preview?.blocker ?? null;
    const paused = !draft.enabled;
    const ready = !paused && Boolean(preview && !blocker && /^[0-9a-f]{64}$/u.test(preview.previewToken ?? ""));
    const ordered = plan.runBehavior === "ordered";
    const previewRooms = ready && preview ? preview.rooms : [];
    const blockedRoom = !paused && blocker ? roomBlocker(state, plan)?.jump.roomId ?? null : null;
    const problem = paused || ready || blockedRoom ? null : (blocker && PLAN_BLOCKERS[blocker]) || PLAN_PREVIEW;
    const count = ready ? previewRooms.length : plan.rooms.length;
    const seconds = ready ? plan.nextRunEstimateSeconds : null;
    const minutes = seconds === null ? "" : this.#count(Math.max(1, Math.round(seconds / 60)));
    const summary = seconds === null
      ? count === 1
        ? this.#t("v4_plan_summary_rooms_one", "1 room")
        : this.#t("v4_plan_summary_rooms", "{count} rooms", { count: this.#count(count) })
      : count === 1
        ? this.#t("v4_plan_summary_rooms_estimate_one", "1 room · about {minutes} min", { minutes })
        : this.#t("v4_plan_summary_rooms_estimate", "{count} rooms · about {minutes} min", { count: this.#count(count), minutes });
    const boundaries = ready && preview ? preview.missionBoundaries : [];
    const rows = ready
      ? previewRooms.map((room, index) => {
        const part = boundaries.indexOf(index);
        return this.#runRow(room.name, settingLabel(this.#t, room), ordered ? index + 1 : null, part < 0 ? {} : { part: part + 2 });
      })
      : draftForPlan(plan).rooms.map((room) => this.#runRow(
        catalog.rooms.find((candidate) => candidate.roomId === room.roomId)?.name ?? room.roomId,
        settingLabel(this.#t, room),
        null,
        { blocked: room.roomId === blockedRoom },
      ));
    const end = draft.finishCurrentRoom
      ? this.#t("v4_plan_summary_finish", "When you press Stop, the robot finishes the current room if it's at least {percent}% done.", {
        percent: this.#count(draft.finishCurrentRoomThreshold),
      })
      : draft.returnToBase ? this.#t("v4_plan_summary_return", "Returns to the dock when finished") : null;
    return html`
      <p class="summary">${summary}</p>
      ${this.#lines(dueLines(this.#t, state.locale, previewRooms))}
      <h3 class="heading">${paused
        ? this.#t("v4_plan_rooms_heading", "Rooms in this plan")
        : state.resources.entry?.activePlan
          ? this.#t("v4_next_run_after_active", "After this run")
          : this.#t("v4_next_run_preview", "Next run")}</h3>
      ${ready && !ordered ? html`<p class="quiet">${this.#t("v4_plan_rotation_settings", "Longest-waiting rooms first, checked again when you run the plan.")}</p>` : nothing}
      ${boundaries.length ? html`<p class="quiet">${this.#t("v4_room_parts", "The robot cleans these rooms in {count} parts and may stop at the dock between parts.", {
        count: this.#count(boundaries.length + 1),
      })}</p>` : nothing}
      ${problem ? html`<p class="problem">${this.#t(problem.reasonKey, problem.reason)}</p>
        <button class="ms-btn ms-btn--secondary" type="button" @click=${() => this.#intent({ type: "open-workflow", workflow: "plan" })}>${this.#t("v4_retry", "Try again")}</button>` : nothing}
      ${ready && ordered ? html`<ol class="run-list">${rows}</ol>` : html`<ul class="run-list">${rows}</ul>`}
      ${this.#switch()}
      ${end ? html`<p class="quiet">${end}</p>` : nothing}
    `;
  }

  protected override render() {
    const { workflow, planView } = this.state;
    return workflow === "plans" ? this.#picker() : workflow === "plan" && planView === "run" ? this.#run() : nothing;
  }
}

if (!customElements.get(PLAN_VIEWS_TAG)) customElements.define(PLAN_VIEWS_TAG, MaticPlanViewsV4);
