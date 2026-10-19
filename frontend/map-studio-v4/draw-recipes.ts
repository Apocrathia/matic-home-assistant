import { html } from "lit";

/** The screen-reader recipes the map names in Draw (aria-describedby). */
export const drawRecipes = (t: (key: string, fallback: string) => string) => html`
  <p id="zone-keyboard-help" class="sr-only">${t("v4_zone_keyboard_help", "Focus the map, aim with arrow keys, and press Enter to place points. The edges join automatically after three points. Keep adding points or Tab to a point; arrows move it, Delete removes it, and Escape cancels a drag.")}</p>
  <p id="keyboard-draw-help" class="sr-only">${t("v4_keyboard_draw_help", "Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.")}</p>
`;
