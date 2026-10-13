import { LitElement, css, html, nothing } from "lit";
import type { PropertyValues } from "lit";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { controls } from "./controls";
import { formControls } from "./form-controls";
import { base, tokens } from "./tokens";

import type { CleaningMode, CoverageSetting } from "./backend-contracts";
import {
  type DateFormat,
  type Localize,
  type ResourceState,
  type WorkspaceIntent,
  type WorkspaceState,
} from "./contracts";
import { PLAN_VIEWS_TAG, ROOMS_VIEW_TAG, WORKFLOW_TAG } from "./element-tags";
import { WORKSPACE_INTENT_EVENT } from "./map-canvas";
import { deleteSubject, initialWorkspaceState } from "./state";
import { formatDateTime, translate } from "./localize";
import { LazyChunk, chunkStatus } from "./lazy-chunk";
import { COVERAGES, MODES, coverageLabel, modeLabel } from "./plan-cadence";
// The plan picker, Run and Edit, and the Rooms view.
import "./plan-views";
import "./rooms-view";
// Draw's precision controls load with the other workflow tools; the shell
// renders them only in the draw workflow.
import "./precision-controls";
// The plan heading's tools, which the shell renders once these views load,
// and the shell's other plan-only pieces.
export { actionReason, focusPlanTarget, planCancel, planTitle, planTools } from "./plan-heading";

// Dialogs that only these views' controls open carry their copy, launcher and
// confirm here.
export { confirmDialog, dialogCopy, dialogLauncher, dialogReturnTarget } from "./dialog-copy";
export { MapOptions } from "./map-options";
export { drawRecipes, renderMapHelp } from "./map-help";
export { roomTapAnnouncement, roomsGripLine, roomsSummary } from "./rooms-view";
export { shellWorkflowStyles } from "./workflow-styles";
export { formControls } from "./form-controls";

const planViewsTag = unsafeStatic(PLAN_VIEWS_TAG);
const roomsViewTag = unsafeStatic(ROOMS_VIEW_TAG);

const eventValue = (event: Event): string => (event.currentTarget as HTMLInputElement).value;

export class MaticMapWorkflowV4 extends LitElement {
  static override properties = {
    state: { attribute: false },
    localize: { attribute: false },
    dates: { attribute: false },
    _historyPreviewPosition: { state: true },
  };

  static override styles = [tokens, base, controls, formControls, css`
:host { display: block; min-inline-size: 0; container-type: inline-size; }
.workflow-fields { border: 0; margin: 0; padding: 0; min-inline-size: 0; }
button, select, input[type="checkbox"] { cursor: pointer; }
.stack { display: grid; gap: var(--ms-space-3); }
.subtle { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); line-height: var(--ms-lh-snug); }
.loading, .empty, .problem, .notice {
--ms-local: var(--ms-surface-sunken);
padding: var(--ms-space-3);
border-radius: var(--ms-radius-md);
background: var(--ms-local);
font-size: var(--ms-t-sm);
line-height: var(--ms-lh-snug);
}
/* As the shell's notices: the text keeps the primary colour and the tone is
   the inline-start rule and the tint (design-system.md). */
.problem, .notice[data-tone="warning"] { --ms-local: color-mix(in srgb, var(--notice-tone) 12%, var(--ms-surface-card)); border-inline-start: 3px solid var(--notice-tone); color: var(--ms-text); }
.problem { --notice-tone: var(--ms-danger); }
.notice[data-tone="warning"] { --notice-tone: var(--ms-warning); }
.split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--ms-space-2); }
.list { display: grid; gap: var(--ms-space-2); }
.group { display: grid; gap: var(--ms-space-2); }
.group-heading { margin: 0; color: var(--ms-text-quiet); font-size: var(--ms-t-xs); font-weight: var(--ms-w-medium); letter-spacing: 0.04em; line-height: var(--ms-lh-snug); text-transform: uppercase; }
.floor[aria-current="true"] { border-color: var(--ms-resolved-indicator, var(--ms-accent)); background: color-mix(in srgb, var(--ms-accent) 12%, var(--ms-local)); }
.problem p { margin: 0; }
@media (forced-colors: active) { .floor[aria-current="true"] { forced-color-adjust: none; color: HighlightText; background: Highlight; border-color: Highlight; } }
.toolbar { display: flex; flex-wrap: wrap; gap: var(--ms-space-2); }
.checkbox { display: flex; align-items: center; gap: var(--ms-space-2); min-block-size: var(--ms-control); font-size: var(--ms-t-xs); font-weight: var(--ms-w-medium); }
.checkbox input { inline-size: 1.2rem; block-size: 1.2rem; }
.floor small, .snapshot small, .list-button small { margin-inline-start: auto; color: color-mix(in srgb, var(--ms-text) 78%, var(--ms-local)); font-weight: var(--ms-w-regular); }
.timeline { display: grid; gap: var(--ms-space-2); }
.timeline input[type="range"] { inline-size: 100%; min-block-size: var(--ms-control); }
@media (max-width: 25rem) { .split { grid-template-columns: 1fr; } }
`];

  state: WorkspaceState = initialWorkspaceState();
  localize?: Localize;
  dates?: DateFormat;
  /** The shell's Try again (shell.ts #retry), for the diagnostics chunk. */
  retry!: (event: Event) => void;
  _historyPreviewPosition: number | null = null;
  readonly #diagnostics = new LazyChunk(this, () => import("./diagnostics-panel"));
  #historySelectionKey = "";

  protected override willUpdate(changed: PropertyValues<this>): void {
    if (!changed.has("state")) return;
    const { workflow, selection } = this.state;
    const key = `${workflow}:${selection.floorId}:${selection.historyId ?? "live"}`;
    if (key !== this.#historySelectionKey) {
      this.#historySelectionKey = key;
      this._historyPreviewPosition = null;
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  #t(key: string, fallback: string, placeholders?: Readonly<Record<string, string | number>>): string {
    return translate(this.localize, key, fallback, placeholders);
  }

  #modeLabel(mode: CleaningMode): string {
    return modeLabel(this.#tr, mode);
  }

  #coverageLabel(value: CoverageSetting): string {
    return coverageLabel(this.#tr, value);
  }

  readonly #tr = (key: string, fallback: string, placeholders?: Readonly<Record<string, string | number>>): string =>
    this.#t(key, fallback, placeholders);

  #mopCoverageHint(mode: CleaningMode) {
    return mode === "vacuum" ? nothing : html`<p class="subtle">${this.#t("v4_mop_coverage_hint", "Vacuum coverage applies only when vacuuming. Use the robot's Double-pass mopping setting for an extra mop pass.")}</p>`;
  }

  #intent(intent: WorkspaceIntent): void {
    this.dispatchEvent(new CustomEvent(WORKSPACE_INTENT_EVENT, {
      detail: intent,
      bubbles: true,
      composed: true,
    }));
  }

  #resourceCopy(workflow: "rooms" | "plans" | "plan" | "draw" | "areaReview" | "history"): { readonly loading: string; readonly unavailable: string; readonly empty: string } {
    switch (workflow) {
      case "rooms":
      case "plans":
      case "plan":
        return {
          loading: this.#t("v4_loading_rooms_plans", "Loading rooms and plans…"),
          unavailable: this.#t("v4_rooms_plans_unavailable", "Home Assistant couldn't load rooms and plans."),
          empty: this.#t("v4_no_rooms_plans", "This floor has no rooms yet. Name rooms in the Matic app to see them here."),
        };
      case "draw":
      case "areaReview":
        return {
          loading: this.#t("v4_loading_areas", "Loading saved areas…"),
          unavailable: this.#t("v4_areas_unavailable", "Saved areas are unavailable right now."),
          empty: this.#t("v4_no_saved_areas", "No saved areas yet. Draw one on the map."),
        };
      case "history":
        return {
          loading: this.#t("v4_loading_history", "Loading map history…"),
          unavailable: this.#t("v4_history_unavailable", "Map history is unavailable right now."),
          empty: this.#t("v4_no_map_history", "No saved map snapshots yet."),
        };
    }
  }

  // A reload keeps showing what is already loaded; only an empty load waits.
  #resource({ status, value }: ResourceState<unknown>, body: unknown, workflow: "rooms" | "plans" | "plan" | "draw" | "areaReview" | "history") {
    const copy = this.#resourceCopy(workflow);
    if (value === null && (status === "idle" || status === "loading")) return html`<div class="loading" role="status">${copy.loading}</div>`;
    if (status === "error") {
      return html`
        <div class="stack">
          <div class="problem" role="alert">${copy.unavailable}</div>
          <div class="toolbar">
            <button class="ms-btn ms-btn--secondary" type="button" @click=${() => this.#intent({ type: "open-workflow", workflow })}>${this.#t("v4_retry", "Try again")}</button>
          </div>
        </div>
      `;
    }
    if (status === "empty") return html`<div class="empty">${copy.empty}</div>`;
    return body;
  }

  #rooms() {
    return this.#resource(this.state.resources.plans, staticHtml`<${roomsViewTag}
      .state=${this.state}
      .localize=${this.localize}
    ></${roomsViewTag}>`, "rooms");
  }

  #planViews() {
    const workflow = this.state.workflow === "plans" ? "plans" : "plan";
    return this.#resource(this.state.resources.plans, staticHtml`<${planViewsTag}
      .state=${this.state}
      .localize=${this.localize}
    ></${planViewsTag}>`, workflow);
  }

  #draw() {
    const areas = this.state.resources.areas;
    return html`
      <div class="stack">
        <p class="subtle">${this.state.draw.tool === "outline" ? this.#t("v4_zone_coverage", "Place points around the area. Shading shows where the robot cleans inside the outline; narrow edges may stay uncovered.") : this.#t("v4_draw_floor_hint", "Paint only on the mapped floor. Zooming and panning never change the area.")}</p>
        ${this.#resource(areas, html`
          <div class="group">
            <h3 class="group-heading" id="areas-heading">${this.#t("area_workspace_title", "Custom areas")}</h3>
            <div class="list" role="group" aria-labelledby="areas-heading">
            <button class="list-button ms-row ms-row" type="button" @click=${() => this.#intent({ type: "select-area", areaId: null })}>${this.#t("area_new", "New area")}</button>
            ${(areas.value?.areas || []).map((area) => html`
              <button class="list-button ms-row ms-row" type="button" @click=${() => {
                this.#intent({ type: "select-area", areaId: area.id, workflow: "areaReview" });
              }}>
                <span>${area.name}</span>
                <small>${area.status === "current" ? this.#t("area_workspace_ready", "Ready") : this.#t("v4_review", "Review")}</small>
              </button>
            `)}
            </div>
          </div>
        `, "draw")}
      </div>
    `;
  }

  #areaReview() {
    const draft = this.state.areaDraft;
    const areas = this.state.resources.areas;
    const needsReview = draft.canRebind || draft.status === "review";
    const stale = !needsReview && (draft.status === "stale" || draft.status === "unknown");
    return html`
      <div class="stack">
        ${areas.status === "error" ? html`
          <div class="stack">
            <div class="problem" role="alert">${this.#resourceCopy("areaReview").unavailable}</div>
            <div class="toolbar"><button class="ms-btn ms-btn--secondary" type="button" @click=${() => this.#intent({ type: "open-workflow", workflow: "areaReview" })}>${this.#t("v4_retry", "Try again")}</button></div>
          </div>
        ` : nothing}
        ${needsReview ? html`<div class="notice" data-tone="warning" role="status">${this.#t("area_review_required", "The map changed since you saved this area, so save it again or redraw it.")}</div>` : nothing}
        ${stale ? html`<div class="problem" role="alert">${this.#t("area_redraw_required", "Home Assistant can't use this area as it was saved, so redraw it.")}</div>` : nothing}
        <label class="field ms-field">${this.#t("area_name", "Area name")}
          <input maxlength="128" autocomplete="off" .value=${draft.name} @input=${(event: Event) => this.#intent({ type: "patch-area-draft", patch: { name: eventValue(event) } })}>
        </label>
        <div class="split">
          <label class="field ms-field">${this.#t("v4_cleaning_system", "Cleaning mode")}
            <select .value=${draft.cleaningMode} @change=${(event: Event) => this.#intent({ type: "patch-area-draft", patch: { cleaningMode: eventValue(event) as CleaningMode } })}>${MODES.map((mode) => html`<option value=${mode} ?selected=${mode === draft.cleaningMode}>${this.#modeLabel(mode)}</option>`)}</select>
          </label>
          <label class="field ms-field">${this.#t("vacuum_coverage", "Vacuum coverage")}
            <select ?disabled=${draft.cleaningMode === "mop"} .value=${draft.coverageSetting} @change=${(event: Event) => this.#intent({ type: "patch-area-draft", patch: { coverageSetting: eventValue(event) as CoverageSetting } })}>${COVERAGES.map((option) => html`<option value=${option} ?selected=${option === draft.coverageSetting}>${this.#coverageLabel(option)}</option>`)}</select>
          </label>
        </div>
        ${this.#mopCoverageHint(draft.cleaningMode)}
        <div class="toolbar">
          <button class="ms-btn ms-btn--secondary" type="button" @click=${() => this.#intent({ type: "open-workflow", workflow: "draw" })}>${this.#t("v4_edit_outline", "Redraw")}</button>
          ${deleteSubject(this.state, "confirmDeleteArea") ? html`
            <button
              class="danger ms-btn ms-btn--secondary ms-btn--danger"
              type="button"
              aria-label=${this.#t("v4_delete_area_label", "Delete area")}
              data-dialog-launcher="confirmDeleteArea"
              @click=${() => this.#intent({ type: "open-dialog", dialog: "confirmDeleteArea" })}
            >${this.#t("area_delete", "Delete")}</button>
          ` : nothing}
        </div>
      </div>
    `;
  }

  #history() {
    const resource = this.state.resources.history;
    const catalog = resource.value;
    const floor = catalog?.floors.find((candidate) => candidate.id === this.state.selection.floorId)
      || catalog?.floors.find((candidate) => candidate.active)
      || catalog?.floors[0];
    const snapshots = floor?.snapshots || [];
    const position = this.state.selection.historyId
      ? Math.max(0, snapshots.findIndex((snapshot) => snapshot.id === this.state.selection.historyId))
      : snapshots.length;
    const liveLabel = floor?.active
      ? this.#t("map_timeline_live_action", "Live")
      : this.#t("v4_return_current_floor", "Return to current floor");
    const displayPosition = this._historyPreviewPosition ?? position;
    const selectedSnapshot = snapshots[displayPosition];
    return this.#resource(resource, html`
      <div class="stack">
        ${(catalog?.floors.length || 0) > 1 ? html`
          <div class="group">
            <h3 class="group-heading" id="floors-heading">${this.#t("v4_mapped_floors", "Mapped floors")}</h3>
            <div class="list" role="group" aria-labelledby="floors-heading">
            ${(catalog?.floors || []).map((candidate, index) => html`
              <button
                class="floor ms-row ms-row"
                type="button"
                aria-current=${String(candidate.id === floor?.id)}
                @click=${() => this.#intent({ type: "set-floor", floorId: candidate.id })}
              >
                <span>${candidate.label || (candidate.active
                  ? this.#t("v4_current_floor", "Current floor")
                  : this.#t("v4_saved_floor", "Saved floor {number}", { number: candidate.ordinal ?? index }))}</span>
                <small>${candidate.active ? this.#t("map_timeline_live_action", "Live") : this.#t("v4_read_only", "Read only")}</small>
              </button>
            `)}
            </div>
          </div>
        ` : nothing}
        <div class="timeline">
          <label class="field ms-field">${this.#t("map_timeline_label", "Map timeline")}
            <input
              type="range"
              min="0"
              max=${String(snapshots.length)}
              step="1"
              .value=${String(displayPosition)}
              aria-valuetext=${selectedSnapshot ? formatDateTime(selectedSnapshot.createdAt, this.dates) : liveLabel}
              ?disabled=${!snapshots.length}
              @input=${(event: Event) => {
                this._historyPreviewPosition = Number(eventValue(event));
              }}
              @change=${(event: Event) => {
                const index = Number(eventValue(event));
                this._historyPreviewPosition = null;
                this.#intent({ type: "set-history", historyId: index === snapshots.length ? null : snapshots[index]?.id || null });
              }}
            >
          </label>
          <div class="list">
            <button class="snapshot ms-row ms-row" type="button" aria-current=${String(!this.state.selection.historyId && Boolean(floor?.active))} @click=${() => this.#intent({ type: "set-history", historyId: null })}><span>${liveLabel}</span><small>${this.#t("v4_current", "Current")}</small></button>
            ${snapshots.map((snapshot, index) => html`
              <button class="snapshot ms-row ms-row" type="button" aria-current=${String(snapshot.id === this.state.selection.historyId)} @click=${() => this.#intent({ type: "set-history", historyId: snapshot.id })}>
                <span>${formatDateTime(snapshot.createdAt, this.dates)}</span><small>${this.#t("v4_history_position", "{position} of {count}", { position: index + 1, count: snapshots.length })}</small>
              </button>
            `)}
          </div>
        </div>
        <p class="subtle">${this.#t("v4_history_privacy", "Saved maps show one floor each and never show where the robot is now.")}</p>
      </div>
    `, "history");
  }

  #support() {
    this.#diagnostics.request();
    if (this.#diagnostics.status !== "ready") return chunkStatus(this.#diagnostics.status, this.localize, this.retry);
    return html`<matic-map-diagnostics-v4
      .state=${this.state}
      .localize=${this.localize}
      .disabled=${this.state.command !== "idle" && this.state.command !== "failed"}
    ></matic-map-diagnostics-v4>`;
  }

  // Draw, area review and history keep the hold they had before plan Edit
  // and Rooms gained their own: every control waits while a command runs
  // until map-surfaces.md gives each its reason. A Delete confirmed then would
  // be refused while its dialog closed as if it had been sent.
  #held(content: unknown) {
    return html`<fieldset class="workflow-fields" ?disabled=${this.state.command !== "idle" && this.state.command !== "failed"}>${content}</fieldset>`;
  }

  protected override render() {
    switch (this.state.workflow) {
      case "rooms": return this.#rooms();
      case "plans":
      case "plan": return this.#planViews();
      case "draw": return this.#held(this.#draw());
      case "areaReview": return this.#held(this.#areaReview());
      case "history": return this.#held(this.#history());
      case "support": return this.#support();
      case "none": return nothing;
    }
  }
}

if (!customElements.get(WORKFLOW_TAG)) {
  customElements.define(WORKFLOW_TAG, MaticMapWorkflowV4);
}
