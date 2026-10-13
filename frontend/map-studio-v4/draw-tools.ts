import { html, nothing, type TemplateResult } from "lit";

import type { WorkspaceIntent, WorkspaceState } from "./contracts";
import { icon, iconBrush, iconClear, iconErase, iconMoveMap, iconPaint, iconNewArea, iconRedo, iconUndo } from "./icons";

// The drawing tools, rendered by whichever surface owns them: the map's
// dock at desktop width, the sheet's rows on a phone. One template so the
// two surfaces cannot drift apart, and a plain template rather than a custom
// element so the map's gesture handler still recognises the buttons.
//
// Points · Paint · Erase · Move map | Undo · Redo · Clear | Brush
// (map-surfaces.md §5). The primary ("Name and save" or "Done") is the
// workflow's and lives in the action bar.
export type DrawToolsLayout = "row" | "grid";

export interface DrawToolsHandlers {
  readonly intent: (intent: WorkspaceIntent) => void;
  readonly openBrush: () => void;
  readonly t: (key: string, fallback: string, placeholders?: Readonly<Record<string, string | number>>) => string;
}

const TOOLS = ["outline", "paint", "erase", "pan"] as const;

// While a command runs, the edits that would race it are held and say why
// (shell.md §5); choosing a tool stays open, since painting is refused anyway.
export const heldReason = (state: WorkspaceState, t: DrawToolsHandlers["t"]): string | null =>
  state.command === "pending" ? t("v4_reason_stop_busy", "Waiting for the current change to finish.")
    : state.command === "starting" ? t("v4_reason_starting", "Waiting for the robot to begin.")
      : state.command === "settling" ? t("v4_reason_stop", "Waiting for the robot to stop.")
        : null;

export const renderDrawTools = (
  state: WorkspaceState,
  handlers: DrawToolsHandlers,
  layout: DrawToolsLayout,
): TemplateResult => {
  const { draw } = state;
  const brush = new Intl.NumberFormat(state.locale, { style: "unit", unit: "centimeter", unitDisplay: "short" }).format(Math.round(draw.brushMeters * 100));
  const held = heldReason(state, handlers.t);
  const edit = (idle: boolean, path: string, label: string, intent: WorkspaceIntent, directional = false) => html`<button
    class="ms-btn"
    type="button"
    ?disabled=${!held && idle}
    aria-disabled=${held ? "true" : nothing}
    aria-describedby=${held ? "draw-held-reason" : nothing}
    @click=${() => { if (!held) handlers.intent(intent); }}
  >${icon(path, { directional })}<span class="ms-btn__label">${label}</span></button>`;
  return html`
    <div
      class=${`draw-tools draw-tools--${layout} ms-segment`}
      data-zone=${String(draw.tool === "outline")}
      role="toolbar"
      aria-label=${handlers.t("v4_draw_tools", "Draw area tools")}
      data-map-control
    >
      ${TOOLS.map((tool) => html`
        <button
          class="ms-btn"
          type="button"
          aria-pressed=${String(draw.tool === tool)}
          data-tool=${tool}
          @click=${() => handlers.intent({ type: "set-draw-tool", tool })}
        >${icon(tool === "outline" ? iconNewArea : tool === "paint" ? iconPaint : tool === "erase" ? iconErase : iconMoveMap)}<span class="ms-btn__label">${
          tool === "outline" ? handlers.t("v4_zone_tool", "Points")
          : tool === "paint" ? handlers.t("area_paint", "Paint")
          : tool === "erase" ? handlers.t("area_erase", "Erase")
          : handlers.t("move_map", "Move map")
        }</span></button>
      `)}
      ${edit(draw.strokeCount === 0, iconUndo, handlers.t("undo", "Undo"), { type: "undo-draft" }, true)}
      ${edit(draw.redo.length === 0, iconRedo, handlers.t("redo", "Redo"), { type: "redo-draft" }, true)}
      ${edit(draw.circles.length === 0 && !draw.outline?.points.length, iconClear, handlers.t("v4_clear_drawing", "Clear"), { type: "clear-draft" })}
      ${draw.tool !== "outline" ? html`<button
        class="ms-btn draw-brush"
        type="button"
        aria-label=${handlers.t("v4_brush_button", "Brush width, {brush}. Opens brush settings.", { brush })}
        aria-expanded=${String(state.precisionOpen)}
        aria-haspopup="dialog"
        @click=${handlers.openBrush}
      >${icon(iconBrush)}<span class="ms-btn__label">${handlers.t("v4_brush", "Brush · {brush}", { brush })}</span></button>` : nothing}
      ${held ? html`<p class="sr-only" id="draw-held-reason">${held}</p>` : nothing}
    </div>
  `;
};
