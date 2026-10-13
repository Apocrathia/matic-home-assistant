import { LitElement, css, html, nothing } from "lit";
import type { PropertyValues } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { controls } from "./controls";
import { icon, iconChevronRight, iconDue, iconMoveDown, iconMoveUp, iconNoticeWarning, iconPlus } from "./icons";
import { base, tokens } from "./tokens";
import type { CadenceReason, CleaningMode, CoverageSetting, PlanRoom, SavedPlan } from "./backend-contracts";
import { MAX_ROOM_SEQUENCE_SIZE, type Localize, type WorkspaceIntent, type WorkspaceState } from "./contracts";
import { COVERAGES, MODES, coverageLabel, modeLabel, scheduleBlock } from "./plan-cadence";
import { stepperStyles } from "./stepper";
import { PLAN_VIEWS_TAG } from "./element-tags";
import { MenuController } from "./menu-controller";
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
import { dueLines, formatNumber, scheduleLine, settingLabel } from "./plan-copy";

/** The saved schedule reasons that keep a room's run from starting (plan.md R3). */
const BLOCKING: readonly CadenceReason[] = [
  "mop_progress_unverified", "coverage_progress_unverified", "identity_changed", "room_not_on_current_map",
  "shared_schedule_unavailable", "invalid_cadence_policy", "coverage_requires_vacuum",
];

/**
 * The plan picker and a plan's Run view (plan.md §3). Their rows and copy
 * load with the workflow views, since only the plan workflows show them.
 */
export class MaticPlanViewsV4 extends LitElement {
  static override styles = [tokens, base, controls, stepperStyles, css`
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
.pos-badge { display: grid; flex: none; place-items: center; inline-size: 1.5rem; block-size: 1.5rem; border-radius: 50%; background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface-card)); font-size: var(--ms-t-xs); font-weight: var(--ms-w-bold); font-variant-numeric: tabular-nums; }
.problem { margin: 0 0 var(--ms-space-2); padding: var(--ms-space-3); border-inline-start: 3px solid var(--ms-danger); border-radius: var(--ms-radius-md); background: color-mix(in srgb, var(--ms-danger) 12%, var(--ms-surface-card)); font-size: var(--ms-t-sm); line-height: var(--ms-lh-snug); }
.switch-row { display: flex; gap: var(--ms-space-3); align-items: center; min-block-size: var(--ms-control); }
.switch-copy { display: grid; flex: 1; gap: 0.125rem; min-inline-size: 0; font-size: var(--ms-t-md); }
.switch-copy small, .reason { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.sr-only { position: absolute; overflow: hidden; inline-size: 1px; block-size: 1px; margin: -1px; padding: 0; border: 0; clip-path: inset(50%); white-space: nowrap; }
/* Edit (plan.md §3, ported from mockups/plan.ts). */
.edit { display: grid; gap: var(--ms-space-3); }
.order { display: grid; gap: var(--ms-space-1); margin: 0; padding: 0; border: 0; font-size: var(--ms-t-sm); }
.order .ms-segment { padding: 0; }
.order .ms-btn { flex: 1; }
.list-header { display: flex; align-items: baseline; justify-content: space-between; gap: var(--ms-space-2); }
.list-header .heading { margin: 0; }
.list-header small { color: var(--ms-text-quiet); font-size: var(--ms-t-xs); }
.edit-row { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; align-items: center; padding: 0; }
.edit-row:not([data-selected]) { --ms-local: var(--ms-surface-card); }
.edit-check { display: grid; place-items: center; inline-size: var(--ms-control); block-size: var(--ms-control); cursor: pointer; }
.edit-check input { inline-size: 1.2rem; block-size: 1.2rem; margin: 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); cursor: pointer; }
.edit-disclosure { display: flex; gap: var(--ms-space-2); align-items: center; min-inline-size: 0; min-block-size: var(--ms-control); padding: var(--ms-space-2) var(--ms-space-1); border: 0; border-radius: var(--ms-radius-sm); color: inherit; background: transparent; font: inherit; text-align: start; cursor: pointer; }
.edit-disclosure:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: -2px; }
.edit-disclosure > .ms-icon { flex: none; transition: rotate 120ms; }
.edit-disclosure[aria-expanded="true"] > .ms-icon { rotate: 90deg; }
.edit-disclosure:dir(rtl) > .ms-icon { scale: -1 1; }
/* scale applies before rotate, so the mirrored chevron turns the other way to point down. */
.edit-disclosure[aria-expanded="true"]:dir(rtl) > .ms-icon { rotate: -90deg; }
.edit-name { padding-inline: var(--ms-space-1); }
.edit-moves { display: flex; }
.row-expanded { display: grid; grid-column: 1 / -1; gap: var(--ms-space-2); padding: var(--ms-space-3); border-block-start: 1px solid var(--ms-line); }
.run-end { display: grid; gap: var(--ms-space-2); }
.run-end > summary { min-block-size: var(--ms-control); align-content: center; font-weight: var(--ms-w-bold); cursor: pointer; }
.threshold { display: grid; gap: var(--ms-space-1); font-size: var(--ms-t-md); }
.threshold input { inline-size: 100%; min-block-size: var(--ms-control-sm); accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.subtle { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ms-space-2); }
/* The Schedule block (room-schedule.md §3, ported from mockups/plan.ts): the
   room card is its only border; groups are separated by space and a heading. */
.schedule { display: grid; gap: var(--ms-space-3); min-inline-size: 0; margin-block-start: var(--ms-space-2); }
.schedule-head { display: flex; align-items: center; gap: var(--ms-space-2); }
.schedule-head h3 { flex: 1; margin: 0; font-size: var(--ms-t-md); font-weight: var(--ms-w-bold); }
/* Each row is a label line, a control line and a status line. */
.sched-row { display: grid; gap: var(--ms-space-1); justify-items: start; min-inline-size: 0; }
.sched-label { font-size: var(--ms-t-md); font-weight: var(--ms-w-medium); }
/* Row 2's level select (9 rem) leads and the stepper (170 px) follows on the
   same line when the content is at least 326 px wide, else it wraps below. */
.sched-controls { display: flex; flex-wrap: wrap; gap: var(--ms-space-3); align-items: center; }
.sched-level { flex: none; inline-size: 9rem; block-size: var(--ms-control); font-size: var(--ms-t-md); }
.sched-status { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
/* Reasons keep the text colour; the glyph carries the tone (design-system.md §5). */
.sched-reason { display: flex; gap: var(--ms-space-1); align-items: flex-start; color: var(--ms-text); }
.sched-reason .ms-icon { flex: none; inline-size: 1rem; block-size: 1rem; color: var(--ms-warning); }
.sched-off, .sched-row > .ms-btn { justify-self: start; }
/* "More for {room}": the plan tools' menu, anchored to the heading's end. */
.room-more { position: relative; }
.room-more .menu { position: absolute; z-index: 18; inset-block-start: calc(100% + var(--ms-space-1)); inset-inline-end: 0; display: grid; min-inline-size: 14rem; padding: var(--ms-space-1); }
.room-more .menu .ms-row { justify-content: flex-start; inline-size: 100%; }
.room-more .reason { padding: var(--ms-space-1) var(--ms-space-3); }
/* Advanced: a 44 px disclosure with the ms-* chevron, opened without animation. */
.advanced > summary { display: flex; gap: var(--ms-space-2); align-items: center; min-block-size: var(--ms-control); font-weight: var(--ms-w-medium); list-style: none; cursor: pointer; }
.advanced > summary::-webkit-details-marker { display: none; }
.advanced > summary .ms-icon { inline-size: 1.25rem; block-size: 1.25rem; }
.advanced[open] > summary .ms-icon { rotate: 90deg; }
.advanced > summary:dir(rtl) .ms-icon { scale: -1 1; }
.advanced[open] > summary:dir(rtl) .ms-icon { rotate: -90deg; }
.advanced > summary:focus-visible { outline: 2px solid var(--ms-resolved-indicator, var(--ms-accent)); outline-offset: 2px; border-radius: var(--ms-radius-xs); }
.scope { display: grid; margin: 0 0 var(--ms-space-2); padding: 0; border: 0; }
.scope legend { padding: 0; font-size: var(--ms-t-sm); font-weight: var(--ms-w-bold); }
.scope-row { display: flex; gap: var(--ms-space-3); align-items: center; min-block-size: var(--ms-control); font-size: var(--ms-t-md); cursor: pointer; }
.scope-row input { flex: none; inline-size: 1.2rem; block-size: 1.2rem; margin: 0; accent-color: var(--ms-resolved-indicator, var(--ms-accent)); }
.schedule-note { margin: 0; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
/* A selected row is Highlight in forced colors; its open settings return to
   the system's own colours so their text stays readable. */
@media (forced-colors: active) { .row-expanded { forced-color-adjust: auto; color: CanvasText; background: Canvas; } .edit-row .row-lines small { color: inherit; } }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
`];

  static override properties = {
    state: { attribute: false },
    localize: { attribute: false },
    _moved: { state: true },
  };

  /** The last move, said once in the polite region (plan.md §5 Order). */
  protected _moved = "";
  /** The arrow a move was made with, focused again once the rows have moved. */
  #refocus: string | null = null;
  /** A vacuum rotation level chosen while the rotation is Off, by room: never a draft change. */
  readonly #offLevels = new Map<string, CoverageSetting>();
  /** The open room's "More for {room}" menu (room-schedule.md §3). */
  readonly #roomMenu = new MenuController(this, ".room-more", "> button");

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
      ${position === null ? nothing : html`<span class="pos-badge" aria-hidden="true">${this.#count(position)}</span>`}
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
    // While a save is pending the preview is about to be read again, so it has no problem yet.
    const problem = paused || ready || blockedRoom || state.pendingAction === "save-plan"
      ? null
      : (blocker && PLAN_BLOCKERS[blocker]) || PLAN_PREVIEW;
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
      ${ready && ordered ? html`<ol class="run-list" role="list">${rows}</ol>` : html`<ul class="run-list" role="list">${rows}</ul>`}
      ${this.#switch()}
      ${end ? html`<p class="quiet">${end}</p>` : nothing}
    `;
  }

  protected override willUpdate(changed: PropertyValues<this>): void {
    if (changed.has("state") && (this.state.workflow !== "plan" || this.state.planView !== "edit")) this._moved = "";
    // The menu belongs to the open room; it closes with it, and while a save holds Edit.
    const previous = changed.get("state") as WorkspaceState | undefined;
    if (previous && (previous.expandedRoom !== this.state.expandedRoom || this.state.planView !== "edit" || this.state.dialog || this.#held())) this.#roomMenu.open = false;
    // A level chosen while Off belongs to this draft: it is forgotten when
    // Edit is left (Cancel, Done), another plan opens, or the workflow changes.
    if (previous && (previous.planDraft.id !== this.state.planDraft.id || previous.workflow !== this.state.workflow || this.state.planView !== "edit")) this.#offLevels.clear();
  }

  // A keyed move re-inserts the row, which drops focus, so the arrow takes it
  // back once the moved draft arrives (not on the announcement's own render).
  protected override updated(changed: PropertyValues<this>): void {
    if (!this.#refocus || !changed.has("state")) return;
    this.renderRoot.querySelector<HTMLElement>(`[data-move="${CSS.escape(this.#refocus)}"]`)?.focus();
    this.#refocus = null;
  }

  /** The id of the shared reason while a save holds every Edit control (plan.md §4 E5), else null. */
  #held(): string | null {
    return this.state.pendingAction === "save-plan" ? "edit-held" : null;
  }

  #patch(patch: Partial<WorkspaceState["planDraft"]>): void {
    if (!this.#held()) this.#intent({ type: "patch-plan-draft", patch });
  }

  #patchRoom(index: number, patch: Partial<PlanRoom>): void {
    this.#patch({ rooms: this.state.planDraft.rooms.map((room, at) => at === index ? { ...room, ...patch } : room) });
  }

  /** One place earlier or later; focus stays on the arrow and the move is said once. */
  #move(index: number, delta: number, name: string, arrow: string): void {
    const rooms = [...this.state.planDraft.rooms];
    const next = index + delta;
    if (this.#held() || next < 0 || next >= rooms.length) return;
    const [room] = rooms.splice(index, 1);
    if (!room) return;
    rooms.splice(next, 0, room);
    this.#refocus = arrow;
    this._moved = this.#t("v4_room_moved", "{room} moved to position {position}", { room: name, position: this.#count(next + 1) });
    this.#intent({ type: "patch-plan-draft", patch: { rooms } });
  }

  /** A form control's hold: aria-disabled and the shared reason while a save runs. */
  #gate(held: string | null) {
    return { disabled: held ? "true" : nothing, described: held ?? nothing };
  }

  #arrow(room: PlanRoom, index: number, name: string, delta: -1 | 1, end: boolean, held: string | null) {
    const id = `${room.roomId}:${delta < 0 ? "up" : "down"}`;
    const label = delta < 0
      ? this.#t("move_room_up", "Move {room} earlier", { room: name })
      : this.#t("move_room_down", "Move {room} later", { room: name });
    const at = delta < 0
      ? this.#t("v4_room_already_first", "{room} is already first", { room: name })
      : this.#t("v4_room_already_last", "{room} is already last", { room: name });
    const reason = end ? `${id}-end` : held;
    return html`<button
        class="ms-btn ms-btn--icon"
        type="button"
        data-move=${id}
        aria-label=${label}
        title=${end ? at : label}
        aria-disabled=${end || held ? "true" : nothing}
        aria-describedby=${reason ?? nothing}
        @click=${() => { if (!end) this.#move(index, delta, name, id); }}
      >${icon(delta < 0 ? iconMoveUp : iconMoveDown)}</button>
      ${end ? html`<span class="sr-only" id=${`${id}-end`}>${at}</span>` : nothing}`;
  }

  /** One Edit room row (plan.md §3 Edit room row). */
  #editRow(roomId: string, name: string, room: PlanRoom | null, index: number, ordered: boolean, atLimit: boolean, held: string | null) {
    const draft = this.state.planDraft;
    const open = room !== null && this.state.expandedRoom === roomId;
    const last = draft.rooms.length - 1;
    const gate = this.#gate(held);
    const limited = room === null && atLimit;
    const schedule = room ? scheduleLine(this.#t, this.state.locale, room.cadence) : null;
    const blocked = room?.cadenceReasons?.some((reason) => BLOCKING.includes(reason));
    // While the mop schedule is on, the mode stays Vacuum (room-schedule.md §4 S10).
    const modeLocked = Boolean(room?.cadence?.mopEveryN);
    return html`<li class="ms-row edit-row" data-selected=${room ? "true" : nothing}>
      <label class="edit-check"><input
        type="checkbox"
        .checked=${room !== null}
        aria-label=${this.#t("v4_room_include_named", "Include {room}", { room: name })}
        aria-disabled=${held || limited ? "true" : nothing}
        aria-describedby=${held ?? (limited ? "room-limit" : nothing)}
        @click=${(event: Event) => { if (held || limited) event.preventDefault(); }}
        @change=${() => this.#intent({ type: "toggle-room", roomId })}
      ></label>
      ${room ? html`<button
          class="edit-disclosure"
          type="button"
          data-room-disclosure=${roomId}
          aria-expanded=${String(open)}
          aria-label=${this.#t("v4_room_settings_named", "Settings for {room}", { room: name })}
          aria-disabled=${gate.disabled}
          aria-describedby=${gate.described}
          @click=${() => { if (!held) this.#intent({ type: "set-plan-view", view: "edit", roomId: open ? null : roomId }); }}
        >
          ${ordered ? html`<span class="pos-badge" aria-hidden="true">${this.#count(index + 1)}</span>` : nothing}
          <span class="row-lines">
            <bdi>${name}</bdi>
            <small>${settingLabel(this.#t, room)}</small>
            ${schedule ? html`<small>${schedule}</small>` : nothing}
            ${blocked ? html`<span class="ms-chip chip-attention">${this.#t("v4_needs_attention", "Needs attention")}</span>` : nothing}
          </span>
          ${icon(iconChevronRight)}
        </button>` : html`<span class="edit-name"><bdi>${name}</bdi></span>`}
      ${room && ordered ? html`<span class="edit-moves">
        ${this.#arrow(room, index, name, -1, index === 0, held)}
        ${this.#arrow(room, index, name, 1, index === last, held)}
      </span>` : html`<span></span>`}
      ${open && room ? html`<div class="row-expanded">
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system", "Cleaning mode")}
            <select
              aria-label=${this.#t("v4_room_cleaning_system_named", "Cleaning mode for {room}", { room: name })}
              aria-disabled=${gate.disabled}
              aria-describedby=${[held, modeLocked ? "mode-reason" : null].filter(Boolean).join(" ") || nothing}
              .value=${room.cleaningMode}
              @change=${(event: Event) => {
                const select = event.currentTarget as HTMLSelectElement;
                if (held) select.value = room.cleaningMode;
                else this.#patchRoom(index, { cleaningMode: select.value as CleaningMode });
              }}
            >${MODES.map((mode) => html`<option value=${mode} ?selected=${mode === room.cleaningMode} ?disabled=${modeLocked && mode !== "vacuum"}>${modeLabel(this.#t, mode)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage", "Vacuum coverage")}
            <select
              aria-label=${this.#t("v4_room_vacuum_coverage_named", "Vacuum coverage for {room}", { room: name })}
              aria-disabled=${gate.disabled}
              aria-describedby=${gate.described}
              ?disabled=${room.cleaningMode === "mop"}
              .value=${room.coverageSetting}
              @change=${(event: Event) => {
                const select = event.currentTarget as HTMLSelectElement;
                if (held) select.value = room.coverageSetting;
                else this.#patchRoom(index, { coverageSetting: select.value as CoverageSetting });
              }}
            >${COVERAGES.map((option) => html`<option value=${option} ?selected=${option === room.coverageSetting}>${coverageLabel(this.#t, option)}</option>`)}</select>
          </label>
        </div>
        ${modeLocked ? html`<p class="sched-status sched-reason" id="mode-reason">${icon(iconNoticeWarning)}<span>${this.#t("v4_cadence_clear_mop_to_change_normal", "Can't change the cleaning mode until the mop schedule is off.")}</span></p>` : nothing}
        ${room.cleaningMode === "vacuum" ? nothing : html`<p class="subtle">${this.#t("v4_mop_coverage_hint", "Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`}
        ${scheduleBlock({
          t: this.#t,
          state: this.state,
          intent: (intent) => this.#intent(intent),
          held,
          offLevel: this.#offLevels.get(roomId) ?? null,
          setOffLevel: (level) => {
            if (level) this.#offLevels.set(roomId, level);
            else this.#offLevels.delete(roomId);
            this.requestUpdate();
          },
          menu: this.#roomMenu,
        }, room, index, name)}
      </div>` : nothing}
    </li>`;
  }

  /** A run-end switch (plan.md §3 When a run ends). */
  #endSwitch(id: string, label: string, hint: string | null, on: boolean, held: string | null, change: (on: boolean) => void) {
    const described = [hint ? `${id}-hint` : "", held ?? ""].filter(Boolean).join(" ");
    return html`<div class="switch-row">
      <span class="switch-copy">
        <span id=${`${id}-label`}>${label}</span>
        ${hint ? html`<small id=${`${id}-hint`}>${hint}</small>` : nothing}
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(on)}
        aria-labelledby=${`${id}-label`}
        aria-describedby=${described || nothing}
        aria-disabled=${held ? "true" : nothing}
        @click=${() => { if (!held) change(!on); }}
      ></button>
    </div>`;
  }

  /** plan.md §3 Edit view. */
  #edit() {
    const state = this.state;
    const draft = state.planDraft;
    const catalog = state.resources.plans.value;
    if (!catalog) return nothing;
    const held = this.#held();
    const gate = this.#gate(held);
    const ordered = draft.runBehavior === "ordered";
    const atLimit = draft.rooms.length >= MAX_ROOM_SEQUENCE_SIZE;
    const nameOf = (roomId: string): string => catalog.rooms.find((room) => room.roomId === roomId)?.name ?? roomId;
    const rows = [
      ...draft.rooms.map((room, index) => ({ roomId: room.roomId, room, index })),
      ...catalog.rooms
        .filter((room) => !draft.rooms.some((candidate) => candidate.roomId === room.roomId))
        .map((room) => ({ roomId: room.roomId, room: null, index: -1 })),
    ];
    const threshold = draft.finishCurrentRoomThreshold;
    const percent = this.#count(threshold);
    const order = (value: "intelligent" | "ordered", label: string) => html`<button
      class="ms-btn"
      type="button"
      aria-pressed=${String(draft.runBehavior === value)}
      aria-disabled=${gate.disabled}
      aria-describedby=${gate.described}
      @click=${() => this.#patch({ runBehavior: value })}
    >${label}</button>`;
    return html`<div class="edit">
      ${held ? html`<p class="reason" id="edit-held">${this.#t("v4_reason_plan_saving", "Waiting for Home Assistant to save the plan.")}</p>` : nothing}
      <label class="field ms-field">${this.#t("plan_name", "Plan name")}
        <input
          maxlength="128"
          autocomplete="off"
          ?readonly=${Boolean(held)}
          aria-disabled=${gate.disabled}
          aria-describedby=${gate.described}
          .value=${draft.name}
          @input=${(event: Event) => this.#patch({ name: (event.currentTarget as HTMLInputElement).value })}
        >
      </label>
      <div class="order" role="group" aria-labelledby="order-label">
        <span id="order-label">${this.#t("plan_run_behavior", "Cleaning order")}</span>
        <div class="ms-segment">
          ${order("intelligent", this.#t("plan_intelligent", "Intelligent rotation"))}
          ${order("ordered", this.#t("plan_ordered", "Saved order"))}
        </div>
        <p class="quiet">${ordered
          ? this.#t("v4_plan_order_ordered_hint", "Top to bottom, as listed")
          : this.#t("v4_plan_order_intelligent_hint", "Longest-waiting rooms first")}</p>
      </div>
      <div class="list-header">
        <h3 class="heading" id="edit-rooms">${this.#t("v4_rooms_heading", "Rooms")}</h3>
        <small>${this.#t("v4_plan_rooms_selected", "{selected} of {total} selected", {
          selected: this.#count(draft.rooms.length),
          total: this.#count(catalog.rooms.length),
        })}</small>
      </div>
      ${atLimit ? html`<p class="reason" id="room-limit">${this.#t("v4_plan_room_limit", "Can't add more rooms until you remove one; a plan holds up to {limit}.", {
        limit: this.#count(MAX_ROOM_SEQUENCE_SIZE),
      })}</p>` : nothing}
      <ul class="plain" role="list" aria-labelledby="edit-rooms">
        ${repeat(rows, (row) => row.roomId, (row) => this.#editRow(row.roomId, nameOf(row.roomId), row.room, row.index, ordered, atLimit, held))}
      </ul>
      <span class="sr-only" role="status">${this._moved}</span>
      <details class="run-end">
        <summary>${this.#t("v4_run_end_options", "When a run ends")}</summary>
        ${this.#endSwitch("return-dock", this.#t("v4_plan_return_to_dock", "Return to the dock when finished"), null, draft.returnToBase, held,
          (on) => this.#patch({ returnToBase: on }))}
        ${this.#endSwitch("finish-room", this.#t("v4_plan_finish_room", "Finish the current room when you press Stop"),
          this.#t("v4_plan_finish_room_hint", "Only if the room is at least {percent}% done; otherwise the robot stops right away.", { percent }),
          draft.finishCurrentRoom, held, (on) => this.#patch({ finishCurrentRoom: on }))}
        ${draft.finishCurrentRoom ? html`<div class="threshold">
          <span id="finish-threshold-label">${this.#t("v4_plan_finish_threshold", "Finish if at least {percent}% done", { percent })}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            aria-labelledby="finish-threshold-label"
            aria-valuetext=${`${percent}%`}
            aria-disabled=${gate.disabled}
            aria-describedby=${gate.described}
            .value=${String(threshold)}
            @input=${(event: Event) => {
              const input = event.currentTarget as HTMLInputElement;
              if (held) input.value = String(threshold);
              else this.#patch({ finishCurrentRoomThreshold: Number(input.value) });
            }}
          >
        </div>` : nothing}
      </details>
    </div>`;
  }

  protected override render() {
    const { workflow, planView } = this.state;
    return workflow === "plans" ? this.#picker() : workflow !== "plan" ? nothing : planView === "run" ? this.#run() : this.#edit();
  }
}

if (!customElements.get(PLAN_VIEWS_TAG)) customElements.define(PLAN_VIEWS_TAG, MaticPlanViewsV4);
