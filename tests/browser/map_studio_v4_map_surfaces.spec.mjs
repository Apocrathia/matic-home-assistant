// UX5 Map surfaces (docs/ux-spec-0.5/map-surfaces.md; D1-D3 accepted
// 2026-10-11): one input-aware help popover in every workflow, Full map,
// the Draw tool row and precision, area review and history.
import { expect, test } from "@playwright/test";

const GALLERY_TAG = "matic-map-studio-gallery-v0-4-0";
const CANVAS_TAG = "matic-map-canvas-v4";

async function loadGallery(page, { scenario = "ready", narrow = false, viewport = null } = {}) {
  if (viewport) await page.setViewportSize(viewport);
  else if (narrow) await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.evaluate(async () => {
    window.__galleryModule = await import("/map_studio_v4-review/review.js");
  });
  await page.evaluate(async ({ tag, selectedScenario, selectedNarrow }) => {
    await customElements.whenDefined(tag);
    const gallery = document.createElement(tag);
    gallery.controls = false;
    gallery.scenario = selectedScenario;
    gallery.narrow = selectedNarrow;
    document.body.style.margin = "0";
    document.body.append(gallery);
  }, { tag: GALLERY_TAG, selectedScenario: scenario, selectedNarrow: narrow });
  return page.locator(GALLERY_TAG);
}

const snapshot = (page) => page.evaluate((tag) => document.querySelector(tag).getWorkspaceSnapshot(), GALLERY_TAG);

const patchState = (gallery, patch) => gallery.evaluate((element, applied) => {
  element.replaceWorkspaceState({ ...element.getWorkspaceSnapshot(), ...applied });
}, patch);

const canvasOf = (gallery) => gallery.locator(CANVAS_TAG);
const panelOf = (gallery) => gallery.getByRole("complementary", { name: "Cleaning panel" });
const helpButton = (gallery) => canvasOf(gallery).getByRole("button", { name: "How to move the map", exact: true });
const helpDialog = (gallery) => canvasOf(gallery).getByRole("dialog", { name: "How to move the map" });
const optionsButton = (gallery) => gallery.getByRole("button", { name: "Map options", exact: true });
const optionsMenu = (gallery) => gallery.getByRole("menu", { name: "Map options" });

const rows = async (dialog) => {
  // The first "?" press may wait for the views chunk; the rows follow it.
  await dialog.locator("dt").first().waitFor();
  const terms = await dialog.locator("dt").allTextContents();
  const details = await dialog.locator("dd").allTextContents();
  return Object.fromEntries(terms.map((term, index) => [term, details[index]]));
};

const drag = async (page, from, to, options = {}) => {
  await page.mouse.move(from.x, from.y);
  await page.mouse.down(options);
  await page.mouse.move(to.x, to.y, { steps: 5 });
  await page.mouse.up(options);
};

test.describe("help (map-surfaces.md §5 Help, §11 MS-HELP-01/02)", () => {
  test("the rail shows ? whenever a map shows and nothing is locating", async ({ page }) => {
    for (const scenario of ["ready", "rooms", "draw", "history", "area-review-new"]) {
      const gallery = await loadGallery(page, { scenario });
      await expect(helpButton(gallery), scenario).toBeVisible();
    }
    for (const scenario of ["transition", "empty", "access"]) {
      const gallery = await loadGallery(page, { scenario });
      await expect(helpButton(gallery), scenario).toHaveCount(0);
    }
  });

  test("a fine pointer reads Trackpad, Mouse and Keyboard rows for the one gesture model", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "ready" });
    const help = helpButton(gallery);
    await expect(help).toHaveAttribute("aria-expanded", "false");
    await help.click();
    const dialog = helpDialog(gallery);
    await expect(dialog).toHaveAttribute("aria-modal", "false");
    await expect(help).toHaveAttribute("aria-expanded", "true");
    await expect(help).toHaveAttribute("aria-controls", "navigation-help");
    expect(await canvasOf(gallery).evaluate((canvas) => Boolean(canvas.shadowRoot.getElementById("navigation-help")))).toBe(true);
    expect(await rows(dialog)).toEqual({
      Trackpad: "Scroll to move the map · pinch to zoom · twist to rotate",
      Mouse: "Drag to move the map · right-drag or Shift-drag to rotate · wheel to zoom",
      Keyboard: "WASD to move · Q/E or arrows to orbit · +/− to zoom · 0 to fit",
    });
    await expect(dialog.getByRole("button", { name: "Close" })).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(dialog).toHaveCount(0);
    await expect(help).toBeFocused();
    await expect(help).toHaveAttribute("aria-expanded", "false");
    await help.click();
    await dialog.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toHaveCount(0);
    await expect(help).toBeFocused();
  });

  test("a coarse pointer reads one Touch row and a 44 px Close @mobile", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "ready", narrow: true });
    await helpButton(gallery).click();
    const dialog = helpDialog(gallery);
    expect(await rows(dialog)).toEqual({ Touch: "Drag to move the map · pinch to zoom · twist two fingers to rotate" });
    const close = dialog.getByRole("button", { name: "Close" });
    await expect(close).toBeFocused();
    const box = await close.boundingBox();
    expect(box.width).toBeGreaterThanOrEqual(44);
    expect(box.height).toBeGreaterThanOrEqual(44);
    await close.click();
    await expect(dialog).toHaveCount(0);
    await expect(helpButton(gallery)).toBeFocused();
  });

  test("Draw swaps in the drawing rows and the keyboard recipe leaves the panel", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw" });
    await expect(panelOf(gallery).getByText(/arrow keys to aim/)).toHaveCount(0);
    await helpButton(gallery).click();
    const dialog = helpDialog(gallery);
    const paint = await rows(dialog);
    expect(Object.keys(paint)).toEqual(["Trackpad", "Mouse", "Keyboard"]);
    expect(paint.Mouse).toBe("Drag to paint · right-drag or Space-drag to move · wheel to zoom");
    expect(paint.Keyboard).toBe("Focus the map, use arrow keys to aim, then Enter to paint or erase at the crosshair. D selects Paint; E selects Erase.");
    await patchState(gallery, { draw: { ...(await snapshot(page)).draw, tool: "outline" } });
    await expect(dialog.locator("dd").last()).toContainText("press Enter to place points");
  });

  test("Draw on a phone reads the touch drawing row @mobile", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw", narrow: true });
    await helpButton(gallery).click();
    expect(await rows(helpDialog(gallery))).toEqual({ Touch: "Drag to paint · two fingers to move or zoom" });
  });

  test("Escape closes Map options, then help, then the workflow (shell.md §5)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "rooms" });
    await helpButton(gallery).click();
    await expect(helpDialog(gallery)).toBeVisible();
    await optionsButton(gallery).click();
    await expect(optionsMenu(gallery)).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(optionsMenu(gallery)).toHaveCount(0);
    await expect(helpDialog(gallery)).toBeVisible();
    await expect(optionsButton(gallery)).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(helpDialog(gallery)).toHaveCount(0);
    await expect(helpButton(gallery)).toBeFocused();
    expect((await snapshot(page)).workflow).toBe("rooms");
    await page.keyboard.press("Escape");
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("none");
  });

  test("a plain drag moves the map and Shift-, right- or middle-drag rotates in 3D (D1)", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    const gallery = await loadGallery(page, { scenario: "ready" });
    await gallery.getByRole("button", { name: "3D", exact: true }).click();
    const bounds = await gallery.locator(".map-root").boundingBox();
    const from = { x: bounds.x + bounds.width * 0.45, y: bounds.y + bounds.height * 0.48 };
    const to = { x: from.x + 90, y: from.y + 45 };
    const three = async () => (await snapshot(page)).cameras.three;
    const moved = (a, b) => Math.hypot(b.targetX - a.targetX, b.targetZ - a.targetZ);

    await drag(page, from, to);
    await expect.poll(async () => Boolean(await three())).toBe(true);
    const afterPan = await three();
    expect(afterPan.yaw).toBeCloseTo(-Math.PI / 4, 3);
    expect(afterPan.pitch).toBeCloseTo(0.82, 3);

    await page.keyboard.down("Shift");
    await drag(page, from, to);
    await page.keyboard.up("Shift");
    const afterShift = await three();
    expect(afterShift.yaw).not.toBeCloseTo(afterPan.yaw, 3);
    expect(moved(afterPan, afterShift)).toBeLessThan(0.001);

    await drag(page, from, to, { button: "right" });
    const afterRight = await three();
    expect(afterRight.yaw).not.toBeCloseTo(afterShift.yaw, 3);

    await drag(page, from, to, { button: "middle" });
    const afterMiddle = await three();
    expect(afterMiddle.yaw).not.toBeCloseTo(afterRight.yaw, 3);

    await drag(page, from, to);
    expect(moved(afterMiddle, await three())).toBeGreaterThan(0.01);

    await gallery.getByRole("button", { name: "2D", exact: true }).click();
    await drag(page, from, to, { button: "right" });
    await expect.poll(async () => Boolean((await snapshot(page)).cameras.top)).toBe(true);
    const top = (await snapshot(page)).cameras.top;
    await drag(page, from, to, { button: "right" });
    expect(moved(top, (await snapshot(page)).cameras.top)).toBeGreaterThan(0.01);
  });
});


const fullMapToggle = (gallery) => gallery.getByRole("button", { name: "Full map", exact: true });
const hudOf = (gallery) => gallery.getByRole("region", { name: "Robot status and action" });
const exitButton = (gallery) => hudOf(gallery).getByRole("button", { name: "Exit full map", exact: true });

// A browser full screen double: records requests on the app, answers
// fullscreenchange, and lets a test leave full screen from outside.
const installFullscreen = (page) => page.evaluate((tag) => {
  const shell = document.querySelector(tag).shadowRoot.querySelector("matic-map-shell-v4");
  const app = shell.shadowRoot.querySelector(".app");
  let current = null;
  window.__fs = { requests: 0, exits: 0 };
  Object.defineProperty(document, "fullscreenElement", { configurable: true, get: () => current });
  Element.prototype.requestFullscreen = async function requestFullscreen() {
    window.__fs.requests += this === app ? 1 : 0;
    current = this;
    document.dispatchEvent(new Event("fullscreenchange"));
  };
  document.exitFullscreen = async () => {
    window.__fs.exits += 1;
    current = null;
    document.dispatchEvent(new Event("fullscreenchange"));
  };
  window.__fs.leave = () => { current = null; document.dispatchEvent(new Event("fullscreenchange")); };
}, GALLERY_TAG);

test.describe("Full map (map-surfaces.md §5 Full map, §11 MS-FULL-01…04)", () => {
  for (const narrow of [false, true]) {
    test(`the toggle is pressed in Full map and the HUD holds the status, the primary and Exit${narrow ? " @mobile" : ""}`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario: "ready", narrow, viewport: narrow ? null : { width: 1024, height: 768 } });
      const toggle = fullMapToggle(gallery);
      await expect(toggle).toHaveAttribute("aria-pressed", "false");
      await expect(toggle).not.toHaveAttribute("aria-expanded", /.*/);
      await expect(gallery.getByRole("button", { name: /cleaning panel/ })).toHaveCount(0);
      await toggle.click();
      await expect(toggle).toHaveAttribute("aria-pressed", "true");
      await expect(panelOf(gallery)).toBeHidden();
      const hud = hudOf(gallery);
      await expect(hud).toContainText("Docked");
      await expect(exitButton(gallery)).toBeVisible();
      await expect(toggle).toBeFocused();
      await exitButton(gallery).click();
      await expect.poll(async () => (await snapshot(page)).fullMap).toBe(false);
      await expect(toggle).toHaveAttribute("aria-pressed", "false");
      await expect(toggle).toBeFocused();
      await expect(panelOf(gallery)).toBeVisible();
    });
  }

  test("every exit lands on the toggle and closes precision and help", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw", viewport: { width: 1024, height: 768 } });
    // Browser full screen is stubbed: a real one would turn Escape into
    // its own exit (the D3 trade-off), which the @safety test covers.
    await installFullscreen(page);
    const toggle = fullMapToggle(gallery);
    await toggle.click();
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(true);
    await helpButton(gallery).click();
    await expect(helpDialog(gallery)).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(helpDialog(gallery)).toHaveCount(0);
    expect((await snapshot(page)).fullMap).toBe(true);
    await helpButton(gallery).click();
    await expect(helpDialog(gallery)).toBeVisible();
    await patchState(gallery, { precisionOpen: true });
    await exitButton(gallery).click();
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(false);
    expect((await snapshot(page)).precisionOpen).toBe(false);
    await expect(helpDialog(gallery)).toHaveCount(0);
    await expect(toggle).toBeFocused();
    expect((await snapshot(page)).workflow).toBe("draw");

    await toggle.click();
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(true);
    await toggle.press("Escape");
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(false);
    await expect(toggle).toBeFocused();
  });

  test("a working robot keeps Stop in the HUD and Locating keeps Stop and Exit only with the canvas card", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "cleaning", viewport: { width: 1024, height: 768 } });
    await fullMapToggle(gallery).click();
    const hud = hudOf(gallery);
    await expect(hud.getByRole("button")).toHaveText([/Stop/, "Exit full map"]);
    await expect(hud.getByRole("button", { name: "Stop cleaning" })).toHaveClass(/ms-btn--danger/);

    const locating = await loadGallery(page, { scenario: "full-map-locating", viewport: { width: 1024, height: 768 } });
    await expect(hudOf(locating).getByRole("button")).toHaveText(["Exit full map"]);
    await expect(locating.locator(".map-message")).toContainText("Locating");
  });

  test("entering asks the browser for full screen, leaving releases it, and an outside exit leaves Full map @safety", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "ready", viewport: { width: 1024, height: 768 } });
    await installFullscreen(page);
    const toggle = fullMapToggle(gallery);
    await toggle.click();
    await expect.poll(() => page.evaluate(() => window.__fs.requests)).toBe(1);
    expect((await snapshot(page)).fullMap).toBe(true);
    await exitButton(gallery).click();
    await expect.poll(() => page.evaluate(() => window.__fs.exits)).toBe(1);
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(false);

    await toggle.click();
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(true);
    await page.evaluate(() => window.__fs.leave());
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(false);
    await expect(toggle).toBeFocused();
    expect(await page.evaluate(() => window.__fs.exits)).toBe(1);

    await optionsButton(gallery).click();
    await expect(optionsMenu(gallery).getByRole("menuitem")).toHaveText(["Map diagnostics"]);
  });

  test("the HUD is content-sized at the bottom inline-end on wide and the Draw dock sits above it", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "ready", viewport: { width: 1024, height: 768 } });
    await fullMapToggle(gallery).click();
    const hud = hudOf(gallery);
    const canvas = await canvasOf(gallery).boundingBox();
    let box = await hud.boundingBox();
    expect(canvas.x + canvas.width - (box.x + box.width)).toBeLessThanOrEqual(12.5);
    expect(canvas.y + canvas.height - (box.y + box.height)).toBeLessThanOrEqual(12.5);
    expect(box.width).toBeLessThan(24 * 16);

    const draw = await loadGallery(page, { scenario: "draw", viewport: { width: 1024, height: 768 } });
    await fullMapToggle(draw).click();
    await expect(hudOf(draw)).toBeVisible();
    const dock = await draw.getByRole("toolbar", { name: "Draw area tools" }).boundingBox();
    box = await hudOf(draw).boundingBox();
    expect(dock.y + dock.height).toBeLessThanOrEqual(box.y);
    const help = await helpButton(draw).boundingBox();
    expect(help.y + help.height).toBeLessThanOrEqual(box.y);
  });

  test("the HUD spans the phone's width minus the gutters and its Exit is 44 px @mobile", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "full-map", narrow: true });
    const hud = hudOf(gallery);
    const box = await hud.boundingBox();
    expect(box.width).toBeCloseTo(390 - 24, 0);
    const exit = await exitButton(gallery).boundingBox();
    expect(exit.height).toBeGreaterThanOrEqual(44);
    expect(exit.width).toBeGreaterThanOrEqual(44);
  });

  test("a fitted map stays fitted across the toggle and a moved one keeps its target (framed bounds)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "ready", viewport: { width: 1024, height: 768 } });
    await gallery.getByRole("button", { name: "3D", exact: true }).click();
    const fit = gallery.getByRole("button", { name: "Fit the whole map on screen" });
    await fit.click();
    const three = async () => (await snapshot(page)).cameras.three;
    const renderer = () => canvasOf(gallery).evaluate((canvas) => canvas.rendererDiagnostics());
    await expect.poll(async () => (await renderer()).fitActive).toBe(true);
    const fitted = await renderer();
    expect(fitted.cameraDistance).toBeCloseTo(fitted.fitDistance, 6);
    const width = (await canvasOf(gallery).boundingBox()).width;
    await fullMapToggle(gallery).click();
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(true);
    // The wider canvas keeps the framed map: the camera sits at its fit distance.
    await expect.poll(async () => (await canvasOf(gallery).boundingBox()).width).toBeGreaterThan(width);
    await page.waitForTimeout(100);
    const refitted = await renderer();
    expect(refitted.fitActive).toBe(true);
    expect(refitted.cameraDistance).toBeCloseTo(refitted.fitDistance, 6);
    await exitButton(gallery).click();
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(false);

    const bounds = await gallery.locator(".map-root").boundingBox();
    const from = { x: bounds.x + bounds.width * 0.45, y: bounds.y + bounds.height * 0.48 };
    await drag(page, from, { x: from.x + 80, y: from.y + 30 });
    await expect.poll(async () => (await renderer()).fitActive).toBe(false);
    const moved = await three();
    const movedDistance = (await renderer()).cameraDistance;
    await fullMapToggle(gallery).click();
    await expect.poll(async () => (await snapshot(page)).fullMap).toBe(true);
    await page.waitForTimeout(100);
    const after = await three();
    expect(after.targetX).toBeCloseTo(moved.targetX, 4);
    expect(after.targetZ).toBeCloseTo(moved.targetZ, 4);
    expect(after.yaw).toBeCloseTo(moved.yaw, 4);
    expect((await renderer()).cameraDistance).toBeCloseTo(movedDistance, 6);
  });
});

// ---- Draw (map-surfaces.md §3-§8 Draw, §11 MS-DRAW-01…07, MS-RESP-02) ------
const DRAW_TOOLS = ["Points", "Paint", "Erase", "Move map", "Undo", "Redo", "Clear", "Brush width, 60 cm. Opens brush settings."];
const toolbarOf = (scope) => scope.getByRole("toolbar", { name: "Draw area tools" });
const labelWidth = (button) => button.locator(".ms-btn__label").evaluate((label) => label.getBoundingClientRect().width);
const describedBy = (control) => control.evaluate((element) => {
  const id = element.getAttribute("aria-describedby");
  return id ? element.getRootNode().getElementById(id)?.textContent.trim() ?? null : null;
});

test.describe("Draw tools", () => {
  for (const width of [390, 360, 320]) {
    test(`the sheet holds the eight tools in two rows at ${width}px, labelled from 360 @mobile`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario: "draw", viewport: { width, height: 844 } });
      const toolbar = toolbarOf(gallery.locator(".sheet-tools"));
      const tools = toolbar.locator("button");
      await expect(tools).toHaveCount(8);
      for (const [index, name] of DRAW_TOOLS.entries()) {
        const tool = tools.nth(index);
        await expect(tool).toHaveAccessibleName(name);
        const box = await tool.boundingBox();
        expect(box.width, `${name} width`).toBeGreaterThanOrEqual(44);
        expect(box.height, `${name} height`).toBeGreaterThanOrEqual(44);
        if (width >= 360) expect(await labelWidth(tool), `${name} label shows`).toBeGreaterThan(8);
        else expect(await labelWidth(tool), `${name} label is assistive`).toBeLessThanOrEqual(1);
      }
      const rowsY = new Set((await Promise.all((await tools.all()).map(async (tool) => Math.round((await tool.boundingBox()).y)))));
      expect(rowsY.size, "two rows").toBe(2);
      await expect(tools.nth(7)).toHaveText("Brush · 60 cm");
      const brush = await tools.nth(7).boundingBox();
      expect(brush.height, "Brush never wraps").toBeLessThan(60);
      expect(await page.evaluate((limit) => document.documentElement.scrollWidth <= limit, width)).toBe(true);
      const sheet = await gallery.locator(".mobile-sheet").boundingBox();
      const bar = await toolbar.boundingBox();
      expect(bar.x + bar.width).toBeLessThanOrEqual(sheet.x + sheet.width + 0.5);
      await tools.nth(0).click();
      await expect(tools).toHaveCount(7);
    });
  }

  test("a landscape phone gets one icon-only row that scrolls sideways when the sheet is narrower @mobile", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw", viewport: { width: 844, height: 390 } });
    const toolbar = toolbarOf(gallery.locator(".sheet-tools"));
    const tools = toolbar.locator("button");
    await expect(tools).toHaveCount(8);
    const boxes = await Promise.all((await tools.all()).map((tool) => tool.boundingBox()));
    expect(new Set(boxes.map((box) => Math.round(box.y))).size, "one row").toBe(1);
    for (const [index, box] of boxes.entries()) {
      expect(box.width, `${DRAW_TOOLS[index]} width`).toBeGreaterThanOrEqual(44);
      expect(box.width, `${DRAW_TOOLS[index]} icon-only`).toBeLessThanOrEqual(48);
      expect(box.height).toBeGreaterThanOrEqual(44);
      expect(await labelWidth(tools.nth(index))).toBeLessThanOrEqual(1);
    }
    expect(await toolbar.evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true);
    await page.setViewportSize({ width: 320, height: 256 });
    await expect.poll(() => toolbar.evaluate((element) => element.scrollWidth > element.clientWidth)).toBe(true);
    expect(await toolbar.evaluate((element) => getComputedStyle(element).overflowX)).toMatch(/auto|scroll/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= 320)).toBe(true);
    await expect(tools.nth(7)).toHaveAccessibleName(DRAW_TOOLS[7]);
  });

  test("the desktop dock holds the eight labelled tools and Clear leaves the action bar", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw", viewport: { width: 1024, height: 768 } });
    const toolbar = toolbarOf(canvasOf(gallery));
    const tools = toolbar.locator("button");
    await expect(tools).toHaveCount(8);
    for (const [index, name] of DRAW_TOOLS.entries()) await expect(tools.nth(index)).toHaveAccessibleName(name);
    await expect(gallery.locator(".action-bar").getByRole("button", { name: "Clear" })).toHaveCount(0);
    const clear = toolbar.getByRole("button", { name: "Clear", exact: true });
    const before = (await snapshot(page)).draw.circles.length;
    expect(before).toBeGreaterThan(0);
    await expect(clear).toBeEnabled();
    await clear.click();
    await expect.poll(async () => (await snapshot(page)).draw.circles.length).toBe(0);
    await expect(clear).toBeDisabled();
    await toolbar.getByRole("button", { name: "Undo", exact: true }).click();
    await expect.poll(async () => (await snapshot(page)).draw.circles.length).toBe(before);
    await expect(clear).toBeEnabled();
  });

  test("the brush reads in centimetres through Intl in the host locale", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw" });
    const brush = toolbarOf(canvasOf(gallery)).locator(".draw-brush");
    await expect(brush).toHaveText("Brush · 60 cm");
    await expect(brush).toHaveAccessibleName("Brush width, 60 cm. Opens brush settings.");
    const state = await snapshot(page);
    await patchState(gallery, { draw: { ...state.draw, brushMeters: 1.5 }, locale: "de" });
    const expected = await page.evaluate(() => new Intl.NumberFormat("de", { style: "unit", unit: "centimeter", unitDisplay: "short" }).format(150));
    await expect(brush).toHaveText(`Brush · ${expected}`);
    await expect(brush).toHaveAccessibleName(`Brush width, ${expected}. Opens brush settings.`);
  });

  test("Undo and Redo mirror under RTL; Points does not", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw" });
    await page.evaluate(() => { document.documentElement.dir = "rtl"; });
    const toolbar = toolbarOf(canvasOf(gallery));
    const scaleOf = (name) => toolbar.getByRole("button", { name, exact: true }).locator(".ms-icon").evaluate((icon) => getComputedStyle(icon).scale);
    expect(await scaleOf("Undo")).toBe("-1 1");
    expect(await scaleOf("Redo")).toBe("-1 1");
    expect(await scaleOf("Points")).toBe("none");
    await page.evaluate(() => { document.documentElement.dir = "ltr"; });
    expect(await scaleOf("Undo")).toBe("none");
  });

  test("the panel shows one pointer hint per tool and no keyboard paragraph", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw" });
    const panel = panelOf(gallery);
    const hint = panel.locator(".draw-hint");
    await expect(hint).toHaveText("Drag to paint · right-drag or Space-drag to move the map");
    await gallery.getByRole("button", { name: "Erase", exact: true }).click();
    await expect(hint).toHaveText("Drag to paint · right-drag or Space-drag to move the map");
    await gallery.getByRole("button", { name: "Points", exact: true }).click();
    await expect(hint).toHaveText("Click to add points · right-drag to move the map");
    await gallery.getByRole("button", { name: "Move map", exact: true }).click();
    await expect(hint).toHaveCount(0);
    await expect(panel.getByText(/Keyboard/)).toHaveCount(0);
    await expect(panel.getByText(/mapped floor|narrow edges/)).toHaveCount(0);
  });

  test("a touch screen reads the touch hints @mobile", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw", narrow: true });
    await gallery.getByRole("button", { name: "Expand panel", exact: true }).click();
    const hint = gallery.locator(".mobile-sheet .draw-hint");
    await expect(hint).toHaveText("Drag to paint · two fingers to move the map");
    await gallery.getByRole("button", { name: "Points", exact: true }).click();
    await expect(hint).toHaveText("Tap to add points · two fingers to move the map");
  });
});

test.describe("Draw bar and Custom areas", () => {
  test("Draw pairs Cancel with Name and save; a redraw reads Done and returns to Redraw", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw" });
    const bar = gallery.locator(".action-bar");
    await expect(bar).toHaveClass(/paired/);
    await expect(bar.getByRole("button")).toHaveText(["Cancel", "Name and save"]);
    await gallery.evaluate((element) => element.setScenario("area-review-rebind"));
    const redraw = gallery.getByRole("button", { name: "Redraw", exact: true });
    await redraw.click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("draw");
    await expect(bar.getByRole("button")).toHaveText(["Cancel", "Done"]);
    const done = bar.getByRole("button", { name: "Done", exact: true });
    await expect(done).toBeEnabled();
    await done.click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("areaReview");
    await expect(redraw).toBeFocused();
  });

  test("Cancel from a dirty fresh Draw asks, then lands on the home card that opened it", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "ready" });
    const card = gallery.getByRole("button", { name: /^Clean custom area/ });
    await card.click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("draw");
    const state = await snapshot(page);
    await patchState(gallery, { draw: { ...state.draw, dirty: true, strokeCount: 1, circles: [{ x: 1, z: 1, radius: 0.3 }] } });
    const cancel = gallery.locator(".action-bar").getByRole("button", { name: "Cancel", exact: true });
    await cancel.click();
    const dialog = gallery.getByRole("dialog", { name: "Discard changes?" });
    await expect(dialog).toHaveAccessibleDescription("This new area hasn't been saved, and discarding it can't be undone.");
    await dialog.getByRole("button", { name: "Keep editing", exact: true }).click();
    await expect(dialog).toHaveCount(0);
    await expect(cancel).toBeFocused();
    expect((await snapshot(page)).workflow).toBe("draw");
    await cancel.click();
    await dialog.getByRole("button", { name: "Discard", exact: true }).click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("none");
    await expect(card).toBeFocused();
  });

  test("Cancel from a redraw asks, then restores the saved outline in the review", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "area-review-rebind" });
    const saved = (await snapshot(page)).resources.areas.value.areas[0].circles;
    await gallery.getByRole("button", { name: "Redraw", exact: true }).click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("draw");
    const state = await snapshot(page);
    await patchState(gallery, { draw: { ...state.draw, circles: [], dirty: true, strokeCount: 1 } });
    await gallery.locator(".action-bar").getByRole("button", { name: "Cancel", exact: true }).click();
    const dialog = gallery.getByRole("dialog", { name: "Discard changes?" });
    await expect(dialog).toHaveAccessibleDescription("Your changes to \"Entryway\" haven't been saved, and discarding them can't be undone.");
    await dialog.getByRole("button", { name: "Discard", exact: true }).click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("areaReview");
    const after = await snapshot(page);
    expect(after.draw.circles).toEqual(saved);
    expect(after.areaDraft).toMatchObject({ id: "entryway", name: "Entryway", dirty: false });
    // The heading's Back takes the same road.
    await gallery.getByRole("button", { name: "Redraw", exact: true }).click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("draw");
    const back = gallery.getByRole("button", { name: "Back to Entryway", exact: true });
    await expect(back).toHaveText("Entryway");
    await back.click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("areaReview");
  });

  for (const narrow of [false, true]) {
    test(`held Draw controls say why while a command runs${narrow ? " @mobile" : ""}`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario: "draw", narrow });
      if (narrow) await gallery.getByRole("button", { name: "Expand panel", exact: true }).click();
      const toolbar = toolbarOf(narrow ? gallery.locator(".sheet-tools") : canvasOf(gallery));
      const panel = narrow ? gallery.locator(".mobile-sheet") : panelOf(gallery);
      const before = (await snapshot(page)).draw;
      await patchState(gallery, { command: "pending" });
      for (const name of ["Undo", "Redo", "Clear"]) {
        const tool = toolbar.getByRole("button", { name, exact: true });
        await expect(tool).toHaveAttribute("aria-disabled", "true");
        expect(await describedBy(tool), name).toBe("Waiting for the current change to finish.");
      }
      await toolbar.getByRole("button", { name: "Clear", exact: true }).click({ force: true });
      expect((await snapshot(page)).draw).toEqual(before);
      for (const name of ["Points", "Paint", "Erase", "Move map"]) {
        const tool = toolbar.getByRole("button", { name, exact: true });
        await expect(tool).toBeEnabled();
        await expect(tool).not.toHaveAttribute("aria-disabled", "true");
      }
      const row = panel.getByRole("button", { name: "New area", exact: true });
      await expect(row).toHaveAttribute("aria-disabled", "true");
      expect(await describedBy(row)).toBe("Waiting for the current change to finish.");
      await row.click({ force: true });
      expect((await snapshot(page)).workflow).toBe("draw");
      expect((await snapshot(page)).draw).toEqual(before);
      await patchState(gallery, { command: "starting" });
      expect(await describedBy(toolbar.getByRole("button", { name: "Undo", exact: true }))).toBe("Waiting for the robot to begin.");
      await patchState(gallery, { command: "settling" });
      expect(await describedBy(toolbar.getByRole("button", { name: "Undo", exact: true }))).toBe("Waiting for the robot to stop.");
      await patchState(gallery, { command: "idle" });
      await expect(toolbar.getByRole("button", { name: "Undo", exact: true })).not.toHaveAttribute("aria-disabled", "true");
      await expect(row).not.toHaveAttribute("aria-disabled", "true");
      await expect(panel.locator("fieldset")).toHaveCount(0);
    });
  }

  test("Custom areas is a section with New area first, names in bdi and a Review trail only when the map changed", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw" });
    const panel = panelOf(gallery);
    const heading = panel.getByRole("heading", { level: 3, name: "Custom areas" });
    await expect(heading).toHaveClass(/ms-section-heading/);
    const list = panel.getByRole("group", { name: "Custom areas" });
    await expect(list.getByRole("button")).toHaveText(["New area", "Entryway"]);
    await expect(list.locator("bdi")).toHaveText(["Entryway"]);
    await expect(panel.getByText("Ready", { exact: true })).toHaveCount(0);
    await expect(list.getByRole("button", { name: "Entryway", exact: true })).toHaveCount(1);
    const state = await snapshot(page);
    const areas = state.resources.areas.value;
    await patchState(gallery, { resources: { ...state.resources, areas: { ...state.resources.areas, value: { ...areas, areas: areas.areas.map((area) => ({ ...area, status: "review", canRebind: true })) } } } });
    await expect(list.getByRole("button")).toHaveText(["New area", "Entryway Review"]);
    // A dirty draft would ask first; a clean one opens the review at once.
    await patchState(gallery, { draw: { ...(await snapshot(page)).draw, dirty: false } });
    await list.getByRole("button", { name: /^Entryway/ }).click();
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("areaReview");
    expect((await snapshot(page)).areaDraft.id).toBe("entryway");
  });
});
