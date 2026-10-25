import { expect, test } from "@playwright/test";
import { build } from "esbuild";

async function loadCamera(page) {
  const bundle = await build({
    stdin: {
      contents: 'export { RendererController, topView } from "./frontend/map-studio-v4/renderer-controller"; export { EffectController } from "./frontend/map-studio-v4/effects"; export { WorkspaceStore } from "./frontend/map-studio-v4/state"; export { liveCameraKey, cameraPreferences } from "./frontend/map-studio-v4/camera-preferences"; export { createGalleryState } from "./frontend/map-studio-v4/gallery-state"; export { PreferenceStore, parsePreferences } from "./frontend/map-studio-v4/preferences";',
      resolveDir: process.cwd(),
    },
    bundle: true, format: "esm", write: false,
  });
  await page.route("**/live-camera.js", (route) => route.fulfill({ contentType: "text/javascript", body: bundle.outputFiles[0].text }));
  await page.goto("/", { waitUntil: "domcontentloaded" });
}

for (const [view, boundary, mobile] of [
  ["top", "same", false], ["three", "same", false],
  ["top", "session", false], ["top", "floor", false],
  ["top", "entry", false], ["top", "user", false], ["top", "same", true],
]) {
  test(`history camera stays separate from ${view} live framing across ${boundary} identity${mobile ? " @mobile" : ""}`, async ({ page }) => {
    await loadCamera(page);
    const result = await page.evaluate(async ({ view, boundary }) => {
      const { RendererController, topView, WorkspaceStore, createGalleryState } = await import("/live-camera.js");
      const base = createGalleryState("ready");
      const entry = { ...base.resources.entry, selectedFloorOrdinal: 1, mapFloorOrdinal: 1,
        mapFloorCoherent: true, mapSessionVerified: true, mapSessionKey: "a".repeat(64) };
      const liveScene = base.resources.scene.value;
      const store = new WorkspaceStore({ ...base, view, owner: { userKey: "camera-user", entryKey: entry.entryId },
        resources: { ...base.resources, entry } });
      const canvases = [document.createElement("canvas"), document.createElement("canvas")];
      for (const canvas of canvases) {
        Object.assign(canvas.style, { width: "900px", height: "700px" });
        document.body.append(canvas);
      }
      const renderer = new RendererController(...canvases, {
        onCamera: (camera, zoomPercent) => store.dispatch({ type: "set-camera", view: topView(store.value), camera: {
          yaw: camera.yaw, pitch: camera.pitch, zoom: zoomPercent / 100, targetX: camera.targetX, targetZ: camera.targetZ,
        } }),
        onCameraPreferences: (cameras) => {
          for (const [cameraView, camera] of Object.entries(cameras)) store.dispatch({ type: "set-camera", view: cameraView, camera });
        },
      });
      const frame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const sync = async (patch = {}) => { store.patch(patch); renderer.setState(store.value); await frame(); };
      const capture = () => ({ camera: renderer.camera, zoom: renderer.diagnostics().fitDistance / renderer.diagnostics().cameraDistance });
      try {
        await sync();
        renderer.zoomAt(2);
        renderer.panBy(35, -24);
        await sync();
        const before = capture();
        const livePreferences = structuredClone(store.value.cameras);
        const historyScene = { ...liveScene, source: "history", revision: liveScene.revision + 1,
          metadata: { ...liveScene.metadata, span: [100, 90] } };
        await sync({ dataMode: "history", floor: { ...store.value.floor, readOnly: true },
          selection: { ...store.value.selection, floorId: "saved-shed", historyId: "saved-one" },
          resources: { ...store.value.resources, scene: { status: "ready", value: historyScene, problem: null } } });
        renderer.zoomAt(1.4);
        renderer.panBy(-50, 12);
        await sync();
        const history = capture();
        const afterHistoryPreferences = structuredClone(store.value.cameras);
        // A view toggle within history keeps its own framing too.
        await sync({ view: view === "top" ? "three" : "top" });
        await sync({ view });
        const historyAfterToggle = capture();
        await sync({ dataMode: "live", coherence: "verifying",
          selection: { ...store.value.selection, floorId: "current", historyId: null },
          resources: { ...store.value.resources, scene: { status: "loading", value: historyScene, problem: null } } });
        const loading = capture();
        const nextEntry = { ...entry,
          ...(boundary === "session" ? { mapSessionKey: "b".repeat(64) } : {}),
          ...(boundary === "floor" ? { selectedFloorOrdinal: 2, mapFloorOrdinal: 2 } : {}),
          ...(boundary === "entry" ? { entryId: "other-entry" } : {}),
        };
        await sync({ coherence: "current", floor: { ...store.value.floor, readOnly: false },
          ...(boundary === "user" ? { owner: { userKey: "other-user", entryKey: entry.entryId } } : {}),
          selection: { ...store.value.selection, entryId: nextEntry.entryId },
          resources: { ...store.value.resources, entry: nextEntry,
            scene: { status: "ready", value: { ...liveScene, revision: liveScene.revision + 2 }, problem: null } } });
        return { before, livePreferences, afterHistoryPreferences, history, historyAfterToggle, loading, restored: capture() };
      } finally {
        renderer.dispose();
        canvases.forEach((canvas) => canvas.remove());
      }
    }, { view, boundary });

    expect(result.afterHistoryPreferences, "history gestures preserve live preferences").toEqual(result.livePreferences);
    expect(result.historyAfterToggle.zoom).toBeCloseTo(result.history.zoom, 4);
    expect(result.historyAfterToggle.camera.targetX).toBeCloseTo(result.history.camera.targetX, 4);
    expect(result.loading.camera, "held saved geometry does not receive the live camera").toEqual(result.historyAfterToggle.camera);
    if (boundary === "same") {
      expect(result.restored.zoom).toBeCloseTo(result.before.zoom, 4);
      expect(result.restored.camera.targetX).toBeCloseTo(result.before.camera.targetX, 4);
      expect(result.restored.camera.targetZ).toBeCloseTo(result.before.camera.targetZ, 4);
      expect(result.restored.camera.yaw).toBeCloseTo(result.before.camera.yaw, 4);
    } else {
      expect(result.restored.zoom, "a different live identity starts fitted").toBeCloseTo(1, 4);
      expect(result.restored.camera.targetX).toBeCloseTo(0, 4);
      expect(result.restored.camera.targetZ).toBeCloseTo(0, 4);
    }
  });
}

test("@safety camera preferences reload only for their verified map and ignore held-scene gestures", async ({ page }) => {
  await loadCamera(page);
  const result = await page.evaluate(async () => {
    const { WorkspaceStore, liveCameraKey, cameraPreferences, createGalleryState, PreferenceStore, parsePreferences } = await import("/live-camera.js");
    const base = createGalleryState("ready");
    const owner = { userKey: "reload-user", entryKey: base.selection.entryId };
    const store = new WorkspaceStore({ ...base, owner });
    const preference = { yaw: .3, pitch: 1.2, zoom: 2, targetX: .2, targetZ: -.3 };
    store.dispatch({ type: "set-camera", view: "top", camera: preference });
    const preferences = new PreferenceStore();
    preferences.load(owner.userKey);
    preferences.schedule({ version: 4, view: "top", appearance: "photo", labels: true, quality: "auto",
      cameras: store.value.cameras, cameraKey: store.value.cameraKey });
    preferences.dispose();
    const loaded = preferences.load(owner.userKey);
    const reload = { ...base, owner, cameras: loaded.cameras, cameraKey: loaded.cameraKey };
    const same = cameraPreferences(reload);
    const changed = cameraPreferences({ ...reload, resources: { ...reload.resources,
      entry: { ...reload.resources.entry, mapSessionKey: "c".repeat(64) } } });
    const legacy = parsePreferences({ cameras: { top: preference } });
    const unbound = cameraPreferences({ ...reload, ...legacy });
    const before = store.value.cameras;
    store.patch({ coherence: "verifying", floor: { ...store.value.floor, readOnly: true } });
    store.dispatch({ type: "set-camera", view: "top", camera: { ...preference, zoom: 3 } });
    const heldUntouched = before === store.value.cameras;
    // A content-only refresh can keep a verified live scene interactive.
    store.patch({ coherence: "current", floor: { ...store.value.floor, readOnly: false },
      resources: { ...store.value.resources, scene: { ...store.value.resources.scene, status: "loading" } } });
    store.dispatch({ type: "set-camera", view: "top", camera: { ...preference, zoom: 4 } });
    return { same, changed, unbound, heldUntouched, refreshedZoom: store.value.cameras.top.zoom,
      keyMatches: loaded.cameraKey === liveCameraKey(reload), invalidKey: parsePreferences({ cameraKey: "x".repeat(1025) }).cameraKey };
  });
  expect(result.same.top).toEqual({ yaw: .3, pitch: 1.2, zoom: 2, targetX: .2, targetZ: -.3 });
  expect(result.changed).toEqual({});
  expect(result.unbound).toEqual({});
  expect(result.keyMatches).toBe(true);
  expect(result.heldUntouched).toBe(true);
  expect(result.refreshedZoom).toBe(4);
  expect(result.invalidKey).toBeNull();
});

test("history camera resets on a new selection and owner while live preferences remain separate", async ({ page }) => {
  await loadCamera(page);
  const result = await page.evaluate(async () => {
    const { EffectController, WorkspaceStore, createGalleryState } = await import("/live-camera.js");
    const initial = createGalleryState("ready");
    const entry = { ...initial.resources.entry, deltaUrl: null };
    const store = new WorkspaceStore(initial);
    const effects = new EffectController(store, {
      catalog: async () => [entry],
      history: async () => initial.resources.history.value,
      scene: async (_url, revision, floorCoherent, source) => ({ revision, floorCoherent,
        scene: { ...initial.resources.scene.value, revision, source } }),
      pose: async () => { throw new DOMException("Aborted", "AbortError"); },
      plans: async () => initial.resources.plans.value,
      areas: async () => initial.resources.areas.value,
      dispose() {},
    });
    const projection = (userKey) => ({ host: initial.host, activity: initial.activity,
      batteryPercent: 92, robotLabel: "Synthetic", robots: initial.robots, language: "en",
      userKey, entryKey: entry.entryId, vacuumEntityId: "vacuum.synthetic" });
    const preference = { yaw: .3, pitch: 1.2, zoom: 2, targetX: .2, targetZ: -.3 };
    const saveCamera = () => store.dispatch({ type: "set-camera", view: "top", camera: preference });
    try {
      effects.sync(projection("selection-user"));
      await effects.refreshCatalog(true);
      saveCamera();
      const live = store.value.cameras;
      await effects.selectFloor("saved-1");
      saveCamera();
      const saved = store.value.historyCameras;
      await effects.selectFloor("saved-1");
      const sameSelection = store.value.historyCameras;
      await effects.selectHistory("current-old");
      const changedSelection = store.value.historyCameras;
      saveCamera();
      await effects.selectHistory("current-new");
      const changedSnapshot = store.value.historyCameras;
      const liveUntouched = live === store.value.cameras;
      saveCamera();
      effects.sync(projection("replacement-user"));
      const previousOwner = JSON.parse(localStorage.getItem("matic-map-studio:v4:selection-user"));
      return { saved, sameSelection, changedSelection, changedSnapshot, liveUntouched,
        ownerHistory: store.value.historyCameras, ownerCameras: store.value.cameras, ownerKey: store.value.cameraKey,
        previousOwner: previousOwner.cameras };
    } finally { effects.dispose(); }
  });
  expect(result.saved.top).toEqual({ yaw: .3, pitch: 1.2, zoom: 2, targetX: .2, targetZ: -.3 });
  expect(result.sameSelection).toEqual(result.saved);
  expect(result.changedSelection).toEqual({});
  expect(result.changedSnapshot).toEqual({});
  expect(result.liveUntouched).toBe(true);
  expect(result.ownerHistory).toEqual({});
  expect(result.ownerCameras).toEqual({});
  expect(result.ownerKey).toBeNull();
  expect(result.previousOwner.top).toEqual(result.saved.top);
});

test("@safety a held saved scene honors explicit view changes and keeps automatic updates still", async ({ page }) => {
  await loadCamera(page);
  const result = await page.evaluate(async () => {
    const { RendererController, createGalleryState } = await import("/live-camera.js");
    const base = createGalleryState("ready");
    const saved = { ...base, view: "three", dataMode: "history", floor: { ...base.floor, readOnly: true },
      selection: { ...base.selection, floorId: "saved", historyId: "saved-one" },
      resources: { ...base.resources, scene: { ...base.resources.scene, value: { ...base.resources.scene.value, source: "history" } } } };
    const canvases = Array.from({ length: 2 }, () => document.createElement("canvas"));
    canvases.forEach((canvas) => { Object.assign(canvas.style, { width: "700px", height: "500px" }); document.body.append(canvas); });
    const renderer = new RendererController(...canvases);
    const frame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    try {
      renderer.setState(saved);
      await frame();
      renderer.zoomAt(1.5);
      renderer.panBy(20, -15);
      const before = renderer.camera;
      const held = { ...saved, dataMode: "live", coherence: "verifying",
        selection: { ...saved.selection, floorId: "current", historyId: null },
        resources: { ...saved.resources, scene: { ...saved.resources.scene, status: "loading" } } };
      renderer.setState(held);
      await frame();
      const automatic = renderer.camera;
      renderer.setState({ ...held, view: "top" });
      await frame();
      const top = renderer.camera;
      renderer.setState({ ...held, view: "top" });
      await frame();
      const topAutomatic = renderer.camera;
      renderer.setState(held);
      await frame();
      const three = renderer.camera;
      renderer.setState({ ...held });
      await frame();
      return { before, automatic, top, topAutomatic, three, threeAutomatic: renderer.camera };
    } finally { renderer.dispose(); canvases.forEach((canvas) => canvas.remove()); }
  });
  expect(result.automatic).toEqual(result.before);
  expect(result.top.orthographic).toBe(true);
  expect(result.topAutomatic).toEqual(result.top);
  expect(result.three.orthographic).toBe(false);
  expect(result.threeAutomatic).toEqual(result.three);
});
