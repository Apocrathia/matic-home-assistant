// design-system.md Decision 3 (owner, 2026-10-11): the panel's light or dark
// mode follows Home Assistant's own theme (`hass.themes.darkMode`), and the
// device setting only when Home Assistant gives no answer. Only the mode is
// chosen here; the HA variables each token maps to are unchanged.
import { expect, test } from "@playwright/test";
import { installPanelFixture } from "./map_studio_v4_panel_fixture.mjs";

const LIGHT_APP = "rgb(243, 246, 248)"; // --ms-surface-app's light fallback
const DARK_APP = "rgb(16, 26, 32)"; // and its dark one

async function mount(page, scheme, themes) {
  await page.emulateMedia({ colorScheme: scheme });
  const fixture = await installPanelFixture(page, { moduleSource: "packaged" });
  await page.evaluate((value) => {
    const panel = window.__panelFixture.createPanel();
    if (value !== undefined) panel.hass = { ...panel.hass, themes: value };
    window.__darkPanel = panel;
    document.body.append(panel);
  }, themes);
  const app = page.locator(fixture.panelTag).locator(".app");
  await app.waitFor();
  return app;
}

const background = (app) => app.evaluate((element) => getComputedStyle(element).backgroundColor);

test("Home Assistant's dark theme wins over a light device", async ({ page }) => {
  const app = await mount(page, "light", { darkMode: true });
  await expect.poll(() => background(app)).toBe(DARK_APP);
});

test("Home Assistant's light theme wins over a dark device", async ({ page }) => {
  const app = await mount(page, "dark", { darkMode: false });
  await expect.poll(() => background(app)).toBe(LIGHT_APP);
});

test("without an answer from Home Assistant the device decides", async ({ page }) => {
  let app = await mount(page, "dark", undefined);
  await expect.poll(() => background(app)).toBe(DARK_APP);
  app = await mount(page, "light", {});
  await expect.poll(() => background(app)).toBe(LIGHT_APP);
});

test("switching Home Assistant's theme switches the panel", async ({ page }) => {
  // Every colour the map canvas paints with, from the canvases on the page
  // (the theme probe's own canvases are never attached).
  await page.addInitScript(() => {
    window.__canvasColours = new Set();
    for (const name of ["fillStyle", "strokeStyle"]) {
      const native = Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, name);
      Object.defineProperty(CanvasRenderingContext2D.prototype, name, {
        ...native,
        set(value) {
          if (this.canvas.isConnected) window.__canvasColours.add(value);
          native.set.call(this, value);
        },
      });
    }
  });
  const app = await mount(page, "light", { darkMode: false });
  await expect.poll(() => background(app)).toBe(LIGHT_APP);
  const shell = page.locator("matic-map-shell-v4");
  // The contrast-resolved primary and Stop fills and the indicator, which
  // the canvas strokes and fills its accent with (design-system.md §7).
  const resolved = () => shell.evaluate((element) => Object.fromEntries(["accent-fill", "danger-fill", "indicator"]
    .map((name) => [name, element.style.getPropertyValue(`--ms-resolved-${name}`)])));
  const painted = () => page.evaluate(() => [...window.__canvasColours]);
  await expect.poll(async () => (await resolved()).indicator).not.toBe("");
  const light = await resolved();
  await expect.poll(painted).toContain(light.indicator);
  await page.evaluate(() => {
    window.__canvasColours.clear();
    const panel = window.__darkPanel;
    panel.hass = { ...panel.hass, themes: { darkMode: true } };
  });
  await expect.poll(() => background(app)).toBe(DARK_APP);
  await expect.poll(async () => (await resolved())["accent-fill"], "primary resolved for the dark scheme").not.toBe(light["accent-fill"]);
  const dark = await resolved();
  expect(dark["danger-fill"], "Stop resolved for the dark scheme").not.toBe(light["danger-fill"]);
  expect(dark.indicator).not.toBe(light.indicator);
  await expect.poll(painted, "the canvas repaints with the dark palette").toContain(dark.indicator);
});
