import { expect, test } from "@playwright/test";
import { build } from "esbuild";

test("plan map labels number rooms only in Saved order, and taps edit only in Edit", async ({ page }) => {
  const bundle = await build({
    stdin: {
      contents: 'export { RendererController } from "./frontend/map-studio-v4/renderer-controller"; export { GestureController } from "./frontend/map-studio-v4/gesture-controller"; export { WorkspaceStore } from "./frontend/map-studio-v4/state"; export { createGalleryState } from "./frontend/map-studio-v4/gallery-state";',
      resolveDir: process.cwd(),
    },
    bundle: true, format: "esm", write: false,
  });
  await page.route("**/plan-numbers.js", (route) => route.fulfill({
    contentType: "text/javascript", body: bundle.outputFiles[0].text,
  }));
  await page.goto("/");
  const result = await page.evaluate(async () => {
    const { RendererController, GestureController, WorkspaceStore, createGalleryState } = await import("/plan-numbers.js");
    const originalFillText = CanvasRenderingContext2D.prototype.fillText;
    let activeOverlay = null;
    const drawnText = [];
    CanvasRenderingContext2D.prototype.fillText = function(text, ...args) {
      if (this.canvas === activeOverlay) drawnText.push(String(text));
      return originalFillText.call(this, text, ...args);
    };
    const render = async (workflow, planView, runBehavior) => {
      const scene = document.createElement("canvas");
      const overlay = document.createElement("canvas");
      for (const canvas of [scene, overlay]) {
        Object.assign(canvas.style, { position: "absolute", width: "720px", height: "540px" });
        document.body.append(canvas);
      }
      const initial = createGalleryState("ready");
      const rooms = initial.resources.scene.value.metadata.rooms;
      const state = {
        ...initial, workflow, planView, locale: "ar-EG", view: "top", labelsVisible: true, appearance: "map",
        planDraft: {
          ...initial.planDraft, runBehavior,
          rooms: rooms.slice(0, 2).reverse().map((room, index) => ({ roomId: room.id, cleaningMode: "vacuum", coverageSetting: "standard", index })),
        },
      };
      const store = new WorkspaceStore(state);
      const renderer = new RendererController(scene, overlay);
      activeOverlay = overlay;
      drawnText.length = 0;
      renderer.setState(store.value);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const first = rooms[0];
      const meters = initial.resources.scene.value.metadata.metersPerCell;
      const origin = initial.resources.scene.value.metadata.origin;
      const center = renderer.mapToScreen({ x: (first.center[0] + origin[0]) * meters, y: (first.center[1] + origin[1]) * meters });
      const text = overlay.getContext("2d").measureText(first.name).width;
      const position = new Intl.NumberFormat(state.locale).format(2);
      const positionWidth = overlay.getContext("2d").measureText(position).width;
      const badgeWidth = Math.max(16, positionWidth + 10);
      const badgeCenter = { x: center.x - (badgeWidth + 4 + text) / 2 + badgeWidth / 2, y: center.y };
      const ctx = overlay.getContext("2d");
      const ratio = overlay.width / overlay.getBoundingClientRect().width;
      const badgePixels = [];
      for (let y = -7; y <= 7; y += 1) for (let x = -7; x <= 7; x += 1) {
        const px = Math.round((badgeCenter.x + x) * ratio);
        const py = Math.round((badgeCenter.y + y) * ratio);
        const data = ctx.getImageData(px, py, 1, 1).data;
        if (data[0] === 6 && data[1] === 120 && data[2] === 206 && data[3] > 0) badgePixels.push([x, y]);
      }
      let hit;
      const bounds = scene.getBoundingClientRect();
      for (let y = 20; y < 520 && !hit; y += 8) for (let x = 20; x < 700 && !hit; x += 8) {
        const room = renderer.roomAt(bounds.left + x, bounds.top + y);
        if (room) hit = { x: bounds.left + x, y: bounds.top + y, room };
      }
      const gestures = new GestureController(scene, renderer, {
        state: () => store.value,
        onRoom: (roomId) => store.dispatch({ type: "toggle-room", roomId }),
        onCircles: () => {}, onCirclePreview: () => {},
      });
      scene.setPointerCapture = () => {}; scene.releasePointerCapture = () => {};
      const before = store.value.planDraft.rooms.map((room) => room.roomId);
      if (hit) for (const type of ["pointerdown", "pointerup"]) scene.dispatchEvent(new PointerEvent(type, {
        pointerId: 1, isPrimary: true, pointerType: "mouse", clientX: hit.x, clientY: hit.y, bubbles: true,
      }));
      const after = store.value.planDraft.rooms.map((room) => room.roomId);
      gestures.dispose(); renderer.dispose(); scene.remove(); overlay.remove();
      const firstLabelIndex = drawnText.indexOf(first.name);
      return {
        badgePixels: badgePixels.length, firstId: first.id, before, after, hitId: hit?.room,
        firstLabelText: firstLabelIndex > 0 ? drawnText[firstLabelIndex - 1] : null,
      };
    };
    return {
      orderedRun: await render("plan", "run", "ordered"),
      orderedEdit: await render("plan", "edit", "ordered"),
      rotation: await render("plan", "edit", "intelligent"),
      otherWorkflow: await render("rooms", "edit", "ordered"),
    };
  });
  expect(result.orderedRun.badgePixels).toBeGreaterThan(0);
  expect(result.orderedEdit.badgePixels).toBeGreaterThan(0);
  expect(result.orderedRun.firstLabelText).toBe(new Intl.NumberFormat("ar-EG").format(2));
  expect(result.orderedEdit.firstLabelText).toBe(new Intl.NumberFormat("ar-EG").format(2));
  expect(result.rotation.badgePixels).toBe(0);
  expect(result.otherWorkflow.badgePixels).toBe(0);
  expect(result.orderedRun.after).toEqual(result.orderedRun.before);
  expect(result.orderedEdit.after).not.toEqual(result.orderedEdit.before);
});
