import { expect, test } from "@playwright/test";
import { build } from "esbuild";

test("precomputes room selection once for the supported 100-room bound", async ({ page }) => {
  const bundle = await build({
    stdin: {
      contents: 'export { RendererController } from "./frontend/map-studio-v4/renderer-controller"; export { createGalleryState } from "./frontend/map-studio-v4/gallery-state";',
      resolveDir: process.cwd(),
    },
    bundle: true,
    format: "esm",
    write: false,
  });
  await page.route("**/renderer-room-bounds.js", (route) => route.fulfill({
    contentType: "text/javascript",
    body: bundle.outputFiles[0].text,
  }));
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const result = await page.evaluate(async () => {
    const { RendererController, createGalleryState } = await import("/renderer-room-bounds.js");
    const base = createGalleryState("ready");
    const roomCount = 100;
    const rooms = Array.from({ length: roomCount }, (_, index) => {
      const column = index % 10;
      const row = Math.floor(index / 10);
      const left = column * 16;
      const top = row * 12;
      return {
        id: `scene-${index}`,
        roomId: `room-${index}`,
        name: `Room ${index}`,
        boundary: [[left, top], [left + 15, top], [left + 15, top + 11], [left, top + 11]],
        center: [left + 7.5, top + 5.5],
      };
    });
    const selectedRooms = rooms.filter((_, index) => index % 2 === 0).map((room) => ({
      roomId: room.roomId,
      cleaningMode: "vacuum",
      coverageSetting: "standard",
    }));
    let selectedIdsMapCalls = 0;
    selectedRooms.map = function (...args) {
      selectedIdsMapCalls += 1;
      return Array.prototype.map.apply(this, args);
    };
    const plans = {
      ...base.resources.plans.value,
      rooms: rooms.map(({ roomId, name }) => ({ roomId, name })),
    };
    const state = {
      ...base,
      workflow: "plan",
      view: "top",
      appearance: "rooms",
      labelsVisible: false,
      planDraft: { ...base.planDraft, rooms: selectedRooms },
      resources: {
        ...base.resources,
        plans: { ...base.resources.plans, value: plans },
        scene: {
          ...base.resources.scene,
          value: {
            ...base.resources.scene.value,
            metadata: { ...base.resources.scene.value.metadata, rooms },
          },
        },
      },
    };
    const sceneCanvas = document.createElement("canvas");
    const overlayCanvas = document.createElement("canvas");
    for (const canvas of [sceneCanvas, overlayCanvas]) {
      Object.assign(canvas.style, { position: "absolute", width: "900px", height: "700px" });
      document.body.append(canvas);
    }
    const fillStyles = [];
    const originalFill = CanvasRenderingContext2D.prototype.fill;
    CanvasRenderingContext2D.prototype.fill = function (...args) {
      if (this.canvas === overlayCanvas) fillStyles.push(String(this.fillStyle));
      return originalFill.apply(this, args);
    };
    const renderer = new RendererController(sceneCanvas, overlayCanvas);
    renderer.setState(state);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    renderer.dispose();
    CanvasRenderingContext2D.prototype.fill = originalFill;
    sceneCanvas.remove();
    overlayCanvas.remove();
    const roomFillStyles = fillStyles.slice(0, roomCount);
    return { selectedIdsMapCalls, roomFillStyles, fillCount: fillStyles.length };
  });

  expect(result.selectedIdsMapCalls).toBe(1);
  expect(result.roomFillStyles).toHaveLength(100);
  const selectedStyles = result.roomFillStyles.filter((_, index) => index % 2 === 0);
  const unselectedStyles = result.roomFillStyles.filter((_, index) => index % 2 === 1);
  expect(new Set(selectedStyles).size).toBe(1);
  expect(new Set(unselectedStyles).size).toBeGreaterThanOrEqual(6);
  expect(result.roomFillStyles.filter((style) => style === selectedStyles[0])).toHaveLength(50);
});

test("room colors stay distinct by room ID, retain selection and labels, and yield to forced colors", async ({ page }) => {
  const bundle = await build({
    stdin: {
      contents: 'export { RendererController } from "./frontend/map-studio-v4/renderer-controller"; export { createGalleryState } from "./frontend/map-studio-v4/gallery-state";',
      resolveDir: process.cwd(),
    },
    bundle: true,
    format: "esm",
    write: false,
  });
  await page.route("**/renderer-room-colors.js", (route) => route.fulfill({
    contentType: "text/javascript",
    body: bundle.outputFiles[0].text,
  }));
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const result = await page.evaluate(async () => {
    const { RendererController, createGalleryState } = await import("/renderer-room-colors.js");
    const base = createGalleryState("ready");
    const rooms = Array.from({ length: 7 }, (_, index) => {
      const left = index * 12;
      return {
        id: `stable-room-${index}`,
        roomId: `room-${index}`,
        name: `Room ${index}`,
        boundary: [[left, 0], [left + 10, 0], [left + 10, 10], [left, 10]],
        center: [left + 5, 5],
      };
    });
    const selectedRooms = [{ roomId: "room-0", cleaningMode: "vacuum", coverageSetting: "standard" }];
    const plans = { ...base.resources.plans.value, rooms: rooms.map(({ roomId, name }) => ({ roomId, name })) };
    const makeState = (orderedRooms, { labelsVisible = false, appearance = "rooms" } = {}) => ({
      ...base,
      workflow: "plan",
      view: "top",
      appearance,
      labelsVisible,
      planDraft: { ...base.planDraft, rooms: selectedRooms },
      resources: {
        ...base.resources,
        plans: { ...base.resources.plans, value: plans },
        scene: { ...base.resources.scene, value: {
          ...base.resources.scene.value,
          metadata: { ...base.resources.scene.value.metadata, rooms: orderedRooms },
        } },
      },
    });
    const sceneCanvas = document.createElement("canvas");
    const overlayCanvas = document.createElement("canvas");
    for (const canvas of [sceneCanvas, overlayCanvas]) {
      Object.assign(canvas.style, { position: "absolute", width: "900px", height: "700px" });
      document.body.append(canvas);
    }
    const capture = async (orderedRooms, options = {}, forced = false, dark = false) => {
      const fills = [];
      const strokes = [];
      let textCount = 0;
      const originalFill = CanvasRenderingContext2D.prototype.fill;
      const originalStroke = CanvasRenderingContext2D.prototype.stroke;
      const originalFillText = CanvasRenderingContext2D.prototype.fillText;
      CanvasRenderingContext2D.prototype.fill = function (...args) {
        if (this.canvas === overlayCanvas) fills.push(String(this.fillStyle));
        return originalFill.apply(this, args);
      };
      CanvasRenderingContext2D.prototype.stroke = function (...args) {
        if (this.canvas === overlayCanvas) strokes.push(String(this.strokeStyle));
        return originalStroke.apply(this, args);
      };
      CanvasRenderingContext2D.prototype.fillText = function (...args) {
        if (this.canvas === overlayCanvas) textCount += 1;
        return originalFillText.apply(this, args);
      };
      const renderer = new RendererController(sceneCanvas, overlayCanvas);
      renderer.setPalette({ accent: [12, 120, 200], onAccent: [255, 255, 255], text: dark ? [230, 230, 230] : [20, 30, 40], quiet: dark ? [180, 180, 180] : [70, 80, 90], plate: dark ? [28, 28, 28] : [250, 250, 250], roomFill: forced ? [235, 235, 235] : dark ? [40, 40, 40] : [231, 238, 242], forced });
      renderer.setState(makeState(orderedRooms, options));
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const diagnostics = renderer.diagnostics();
      renderer.dispose();
      CanvasRenderingContext2D.prototype.fill = originalFill;
      CanvasRenderingContext2D.prototype.stroke = originalStroke;
      CanvasRenderingContext2D.prototype.fillText = originalFillText;
      return { fills, strokes, textCount, renderedPoints: diagnostics.renderedPoints };
    };
    const first = await capture(rooms);
    const reordered = await capture([...rooms].reverse());
    const labeled = await capture(rooms, { labelsVisible: true });
    const forced = await capture(rooms, {}, true);
    const dark = await capture(rooms, {}, false, true);
    const photo = await capture(rooms, { appearance: "photo" });
    sceneCanvas.remove();
    overlayCanvas.remove();
    const byId = (order, fills) => Object.fromEntries(order.map((room, index) => [room.id, fills[index]]));
    return {
      first,
      reordered,
      labeled,
      forced,
      dark,
      photo,
      firstById: byId(rooms, first.fills),
      reorderedById: byId([...rooms].reverse(), reordered.fills),
    };
  });

  const selectedIndex = result.first.fills.findIndex((style) => style === "rgba(12, 120, 200, 0.26)");
  expect(result.first.strokes[selectedIndex]).toBe("#0c78c8");
  const roomCount = Object.keys(result.firstById).length;
  const roomFills = result.first.fills.slice(0, roomCount);
  const unselectedFills = roomFills.filter((_, index) => index !== selectedIndex);
  expect(new Set(unselectedFills).size).toBeGreaterThanOrEqual(6);
  expect(result.firstById).toEqual(result.reorderedById);
  expect(roomFills[selectedIndex]).toBe("rgba(12, 120, 200, 0.26)");
  expect(result.labeled.textCount).toBeGreaterThan(0);
  expect(result.first.textCount).toBe(0);
  expect(result.labeled.fills).toEqual(result.first.fills);
  const darkSelectedIndex = result.dark.fills.findIndex((style) => style === "rgba(12, 120, 200, 0.26)");
  expect(darkSelectedIndex).toBe(selectedIndex);
  expect(result.dark.strokes[darkSelectedIndex]).toBe("#0c78c8");
  const darkUnselected = result.dark.fills.slice(0, roomCount).filter((_, index) => index !== darkSelectedIndex);
  expect(new Set(darkUnselected).size).toBeGreaterThanOrEqual(6);
  const channelMean = (style) => style.match(/rgba\((\d+), (\d+), (\d+),/).slice(1, 4)
    .reduce((sum, channel) => sum + Number(channel), 0) / 3;
  const lightUnselected = roomFills.filter((_, index) => index !== selectedIndex);
  expect(darkUnselected.every((style, index) => channelMean(style) < channelMean(lightUnselected[index]))).toBe(true);
  const forcedSelectedIndex = result.forced.fills.findIndex((style) => style === "rgba(12, 120, 200, 0.26)");
  expect(forcedSelectedIndex).toBe(selectedIndex);
  expect(result.forced.strokes[forcedSelectedIndex]).toBe("#0c78c8");
  expect(result.forced.fills.slice(0, roomCount).filter((_, index) => index !== forcedSelectedIndex))
    .toEqual(Array(6).fill("rgba(235, 235, 235, 0.94)"));
  expect(result.forced.strokes.slice(0, roomCount).filter((_, index) => index !== forcedSelectedIndex))
    .toEqual(Array(6).fill("#141e28"));
  expect(result.photo.renderedPoints).toBeGreaterThan(0);
});
