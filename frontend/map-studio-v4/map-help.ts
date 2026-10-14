import { html } from "lit";

import type { WorkspaceState } from "./contracts";
import { topView } from "./renderer-controller";

export interface MapHelpContext {
  readonly state: WorkspaceState;
  /** `(any-pointer: coarse)` matched when the popover opened. */
  readonly coarse: boolean;
  readonly t: (key: string, fallback: string) => string;
  readonly close: () => void;
}

/** The screen-reader recipes the map names in Draw (`aria-describedby`). */
export const drawRecipes = (t: MapHelpContext["t"]) => html`
  <p id="zone-keyboard-help" class="sr-only">${t("v4_zone_keyboard_help", "Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag.")}</p>
  <p id="keyboard-draw-help" class="sr-only">${t("v4_keyboard_draw_help", "Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>
`;

/**
 * The one "How to move the map" popover (map-surfaces.md §5 Help): a
 * non-modal dialog the canvas renders in its rail beside the "?" that opens
 * it. Rows follow the input: a coarse pointer reads Touch only, a fine one
 * Trackpad, Mouse and Keyboard; Draw swaps in the drawing rows, with the
 * keyboard recipe that used to sit in the Draw panel. The gesture model is
 * D1: a drag moves the map on every input, rotation takes a modifier. Rows
 * follow the view the map shows: in 2D and the area review the modifiers
 * and arrows move the map, so no orbit row is offered.
 */
export const renderMapHelp = ({ state, coarse, t, close }: MapHelpContext) => {
  const draw = state.workflow === "draw";
  const flat = topView(state) === "top";
  const title = t("v4_how_to_move", "How to move the map");
  const rows: readonly (readonly [string, string])[] = coarse
    ? [[t("v4_touch", "Touch"), draw
      ? t("v4_touch_draw_help", "Drag to paint · two fingers to move or zoom")
      : t("v4_touch_help", "Drag to move the map · pinch to zoom · twist two fingers to rotate")]]
    : [
      [t("v4_trackpad", "Trackpad"), t("v4_trackpad_help", "Scroll to move the map · pinch to zoom · twist to rotate")],
      [t("v4_mouse", "Mouse"), draw
        ? t("v4_mouse_draw_help", "Drag to paint · right-drag or Space-drag to move · wheel to zoom")
        : flat
          ? t("v4_mouse_top_help", "Drag to move the map · wheel to zoom")
          : t("v4_mouse_help", "Drag to move the map · right-drag or Shift-drag to rotate · wheel to zoom")],
      [t("v4_keyboard", "Keyboard"), !draw
        ? flat
          ? t("v4_keyboard_top_help", "WASD or arrows to move · +/− to zoom · 0 to fit")
          : t("v4_keyboard_help", "WASD to move · Q/E or arrows to orbit · +/− to zoom · 0 to fit")
        : state.draw.tool === "outline"
          ? t("v4_zone_keyboard_help", "Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag.")
          : t("v4_keyboard_draw_help", "Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")],
    ];
  return html`
    <div id="navigation-help" class="navigation-help ms-surface ms-surface--floating" role="dialog" aria-modal="false" aria-label=${title}>
      <header>
        <h2>${title}</h2>
        <button class="ms-btn ms-btn--sm" type="button" @click=${close}>${t("v4_close", "Close")}</button>
      </header>
      <dl>${rows.map(([term, detail]) => html`<dt>${term}</dt><dd>${detail}</dd>`)}</dl>
    </div>
  `;
};
