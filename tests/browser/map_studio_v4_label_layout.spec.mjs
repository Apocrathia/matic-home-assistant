import { expect, test } from "@playwright/test";
import { build } from "esbuild";
import { writeFile } from "node:fs/promises";

for (const [width, height, count, expected, mobile] of [
  [900, 700, 12, 12, false],
  [390, 126, 12, 12, false],
  [180, 44, 12, null, false],
  [390, 126, 12, 12, true],
]) {
  test(`room labels stay readable at ${width}x${height}${mobile ? " @mobile" : ""}`, async ({ page }) => {
    const bundle = await build({
      stdin: {
        contents: 'export { RendererController } from "./frontend/map-studio-v4/renderer-controller"; export { createGalleryState } from "./frontend/map-studio-v4/gallery-state";',
        resolveDir: process.cwd(),
      },
      bundle: true, format: "esm", write: false,
    });
    await page.route("**/label-layout.js", (route) => route.fulfill({
      contentType: "text/javascript", body: bundle.outputFiles[0].text,
    }));
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const result = await page.evaluate(async ({ width, height, count }) => {
      const { RendererController, createGalleryState } = await import("/label-layout.js");
      const base = createGalleryState("ready");
      // Neighbouring small rooms converge in a fitted, shallow phone map.
      // Start with the important rooms last to exercise placement priority.
      const rooms = Array.from({ length: count }, (_, i) => {
        const x = 40 + (i % 2) * 20 + Math.floor(i / 2) / 2;
        const y = 50 + Math.floor(i / 2) / 2;
        return {
          id: `room-${i}`, roomId: `room-${i}`, name: `Room ${String(i).padStart(2, "0")}`,
          boundary: [[x - 1, y - 1], [x + 1, y - 1], [x + 1, y + 1], [x - 1, y + 1]], center: [x, y],
        };
      });
      const canvases = [document.createElement("canvas"), document.createElement("canvas")];
      for (const canvas of canvases) {
        Object.assign(canvas.style, { position: "absolute", width: `${width}px`, height: `${height}px` });
        document.body.append(canvas);
      }
      const overlay = canvases[1];
      const captures = [];
      let plates = [], labels = [], leaders = [], path = [], anchors = [];
      const proto = CanvasRenderingContext2D.prototype;
      const original = Object.fromEntries(["clearRect", "fillRect", "fillText", "beginPath", "moveTo", "lineTo", "stroke", "fill"].map((name) => [name, proto[name]]));
      proto.clearRect = function (...args) {
        if (this.canvas === overlay) { plates = []; labels = []; leaders = []; anchors = []; }
        return original.clearRect.apply(this, args);
      };
      proto.beginPath = function (...args) {
        if (this.canvas === overlay) path = [];
        return original.beginPath.apply(this, args);
      };
      for (const method of ["moveTo", "lineTo"]) proto[method] = function (x, y) {
        if (this.canvas === overlay) path.push({ x, y });
        return original[method].call(this, x, y);
      };
      proto.fill = function (...args) {
        if (this.canvas === overlay && path.length === 4 && anchors.length < count) anchors.push({
          x: path.reduce((sum, p) => sum + p.x, 0) / 4,
          y: path.reduce((sum, p) => sum + p.y, 0) / 4,
        });
        return original.fill.apply(this, args);
      };
      proto.stroke = function (...args) {
        if (this.canvas === overlay && path.length === 2) leaders.push({ from: path[0], to: path[1], platesBefore: plates.length });
        return original.stroke.apply(this, args);
      };
      proto.fillRect = function (x, y, w, h) {
        if (this.canvas === overlay) plates.push({ x, y, width: w, height: h });
        return original.fillRect.call(this, x, y, w, h);
      };
      proto.fillText = function (text, x, y, ...args) {
        if (this.canvas === overlay && text.startsWith("Room")) labels.push({ text, x, y, plate: plates.at(-1) });
        return original.fillText.call(this, text, x, y, ...args);
      };
      const renderer = new RendererController(...canvases);
      const frame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      try {
        for (const appearance of ["photo", "rooms"]) {
          renderer.setState({
            ...base, workflow: "plan", view: "top", appearance, labelsVisible: true,
            currentArea: "rOoM 10",
            planDraft: { ...base.planDraft, runBehavior: "ordered", rooms: [{ roomId: "room-11", cleaningMode: "vacuum", coverageSetting: "standard" }] },
            resources: {
              ...base.resources,
              plans: { ...base.resources.plans, value: { ...base.resources.plans.value, rooms: rooms.map(({ roomId, name }) => ({ roomId, name })) } },
              scene: { ...base.resources.scene, value: { ...base.resources.scene.value,
                metadata: { ...base.resources.scene.value.metadata, rooms } } },
            },
          });
          await frame();
          captures.push({ appearance, labels: structuredClone(labels), leaders: structuredClone(leaders), anchors: structuredClone(anchors), png: overlay.toDataURL() });
        }
      } finally {
        renderer.dispose();
        Object.assign(proto, original);
        canvases.forEach((canvas) => canvas.remove());
      }
      return captures;
    }, { width, height, count });

    for (const capture of result) {
      const path = test.info().outputPath(`${capture.appearance}-${width}x${height}.png`);
      await writeFile(path, Buffer.from(capture.png.split(",")[1], "base64"));
      await test.info().attach(`${capture.appearance}-${width}x${height}`, { path, contentType: "image/png" });
      const names = capture.labels.map((label) => label.text);
      expect(names).toContain("Room 11");
      expect(names).toContain("Room 10");
      if (expected !== null) expect(names).toHaveLength(expected);
      else expect(names.length).toBeLessThan(count);
      if (expected !== null) expect(capture.leaders.length).toBeGreaterThan(0);
      for (const leader of capture.leaders) {
        expect(leader.platesBefore, "all connectors paint before every text plate").toBe(0);
        expect(capture.anchors.some((anchor) => Math.hypot(leader.from.x - anchor.x, leader.from.y - anchor.y) < .1), "connector starts at a projected room center").toBe(true);
      }
      for (const [i, label] of capture.labels.entries()) {
        const a = label.plate;
        expect(a.x).toBeGreaterThanOrEqual(0);
        expect(a.y).toBeGreaterThanOrEqual(0);
        expect(a.x + a.width).toBeLessThanOrEqual(width);
        expect(a.y + a.height).toBeLessThanOrEqual(height);
        const anchor = capture.anchors[Number(label.text.slice(5))];
        const edge = {
          x: Math.max(a.x, Math.min(a.x + a.width, anchor.x)),
          y: Math.max(a.y, Math.min(a.y + a.height, anchor.y)),
        };
        if (Math.hypot(edge.x - anchor.x, edge.y - anchor.y) > .1) {
          const matching = capture.leaders.filter(({ from, to }) => Math.hypot(from.x - anchor.x, from.y - anchor.y) < .1
            && Math.hypot(to.x - edge.x, to.y - edge.y) < .1);
          expect(matching, `${label.text} connects to its own projected room center`).toHaveLength(1);
        }
        expect(label.x).toBeGreaterThan(a.x);
        expect(label.x).toBeLessThan(a.x + a.width);
        for (const other of capture.labels.slice(i + 1)) {
          const b = other.plate;
          const overlaps = a.x < b.x + b.width + 8 && a.x + a.width + 8 > b.x
            && a.y < b.y + b.height + 4 && a.y + a.height + 4 > b.y;
          expect(overlaps, `${label.text} and ${other.text} keep readable plates`).toBe(false);
        }
      }
    }
  });
}
