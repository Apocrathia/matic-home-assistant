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

