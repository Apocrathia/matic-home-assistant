import { expect, test } from "@playwright/test";

const GALLERY_TAG = "matic-map-studio-gallery-v0-4-0";
const AUTO_TOUCH_CANVAS_PIXELS = 1_100_000;

async function loadGallery(page) {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.evaluate(async (tag) => {
    await import("/map_studio_v4-review/review.js");
    await customElements.whenDefined(tag);
    const gallery = document.createElement(tag);
    gallery.controls = false;
    document.body.style.margin = "0";
    document.body.append(gallery);
  }, GALLERY_TAG);
  const gallery = page.locator(GALLERY_TAG);
  await gallery.getByRole("button", { name: "3D", exact: true }).click();
  return gallery;
}

const canvases = (gallery) => gallery.locator(".scene-window").evaluate((window) => {
  const [scene, overlay] = window.querySelectorAll("canvas");
  const rect = scene.getBoundingClientRect();
  return { css: [rect.width, rect.height], scene: [scene.width, scene.height],
    overlay: [overlay.width, overlay.height], ratio: devicePixelRatio };
});

test("Auto bounds both map canvases to the touch pixel budget, Maximum keeps full density @mobile", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  const gallery = await loadGallery(page);
  let size;
  await expect.poll(async () => {
    size = await canvases(gallery);
    return size.scene[0] * size.scene[1];
  }).toBeLessThanOrEqual(AUTO_TOUCH_CANVAS_PIXELS * 1.01);
  expect(size.overlay).toEqual(size.scene);
  expect(size.scene[0]).toBeGreaterThanOrEqual(Math.round(size.css[0]));
  expect(size.scene[0]).toBeLessThan(Math.round(size.css[0] * size.ratio));

  await gallery.evaluate((element) => {
    element.replaceWorkspaceState({ ...element.getWorkspaceSnapshot(), quality: "maximum" });
  });
  await expect.poll(async () => (await canvases(gallery)).scene)
    .toEqual(size.css.map((value) => Math.round(value * size.ratio)));
});

test("a pointer press focuses the map without a focus ring; Tab shows the overlay ring", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  const gallery = await loadGallery(page);
  const mapRoot = gallery.locator(".map-root");
  const ring = () => mapRoot.evaluate((element) => ({
    focused: element.matches(":focus"),
    visible: element.matches(":focus-visible"),
    outline: getComputedStyle(element).outlineStyle,
    overlay: getComputedStyle(element, "::after").borderTopWidth,
  }));
  const box = await gallery.locator(".scene-canvas").boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.up();
  await expect.poll(ring).toEqual({ focused: true, visible: false, outline: "none", overlay: "0px" });

  // A key press first, so the next focus is keyboard focus (:focus-visible).
  await page.keyboard.press("Tab");
  await mapRoot.focus();
  await expect.poll(ring).toEqual({ focused: true, visible: true, outline: "none", overlay: "3px" });
});
