import { LitElement, css, html, nothing } from "lit";
import { controls } from "./controls";
import { icon, iconChevronRight, iconDue, iconNoticeWarning, iconPlus } from "./icons";
import { base, tokens } from "./tokens";
import type { SavedPlan } from "./backend-contracts";
import type { Localize, WorkspaceIntent, WorkspaceState } from "./contracts";
import { PLAN_VIEWS_TAG } from "./element-tags";
import { WORKSPACE_INTENT_EVENT } from "./map-canvas";
import { initialWorkspaceState } from "./state";
import { translate } from "./localize";
import { dueLines, formatNumber } from "./plan-copy";

/**
 * The plan picker (plan.md §3). Its rows and their copy load with the
 * workflow views, since only the plan workflows show them.
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
.plan-title { display: flex; flex-wrap: wrap; gap: var(--ms-space-1) var(--ms-space-2); align-items: center; min-inline-size: 0; }
.plan-title bdi { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.chip-default { border-color: transparent; background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-surface-card)); }
/* Line 3 keeps the text colour; the glyph carries the tone (design-system.md §5). */
.lines { display: grid; gap: 0.125rem; margin: 0; color: var(--ms-text); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.ms-row__body .line { display: flex; gap: var(--ms-space-1); align-items: flex-start; margin: 0; color: var(--ms-text); }
.line .ms-icon { inline-size: 1rem; block-size: 1rem; color: var(--ms-resolved-indicator, var(--ms-accent)); }
.line[data-tone="warning"] .ms-icon { color: var(--ms-warning); }
.plan-row .ms-row__trail:dir(rtl) .ms-icon { scale: -1 1; }
.empty-card { display: grid; gap: var(--ms-space-2); padding: var(--ms-space-4); border: 1px solid var(--ms-line); border-radius: var(--ms-radius-md); }
.empty-card h3 { margin: 0; font-size: var(--ms-t-md); }
.empty-card p { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-md); line-height: var(--ms-lh-normal); }
.empty-card .ms-btn { justify-self: start; }
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
        ? html`<span class="line" data-tone="warning">${icon(iconNoticeWarning)}<span>${this.#t("v4_plan_row_blocked", "Needs attention before it can run")}</span></span>`
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

  protected override render() {
    return this.state.workflow === "plans" ? this.#picker() : nothing;
  }
}

if (!customElements.get(PLAN_VIEWS_TAG)) customElements.define(PLAN_VIEWS_TAG, MaticPlanViewsV4);
