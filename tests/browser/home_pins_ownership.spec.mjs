// Home shortcuts belong to one Home Assistant user and one robot (UX9,
// Codex PRRT_kwDOTau7uM6sNi6X): a read or a queued write made for one owner
// never lands in another's context or data.
import { expect, test } from "@playwright/test";
import { build } from "esbuild";

const bundle = await build({
  stdin: {
    contents: `export { EffectController } from "./frontend/map-studio-v4/effects";
      export { WorkspaceStore } from "./frontend/map-studio-v4/state";
      export { syntheticEntry, syntheticPlans, syntheticAreas, syntheticHistory } from "./frontend/map-studio-v4/synthetic-fixtures";`,
    resolveDir: process.cwd(),
  },
  bundle: true, format: "esm", write: false,
});

test.beforeEach(async ({ browserName }) => {
  test.skip(browserName !== "chromium", "The pin ownership harness runs once in Chromium");
});

const KEY = "matic_robot_home_shortcuts";
const plan = (id) => ({ kind: "plan", id });

// One controller, a catalog of two robots, and a user-data socket whose
// answers come from the current user's store; any read or write can be held.
async function setup(page, stores) {
  await page.route("**/pins-harness.js", (route) => route.fulfill({ contentType: "text/javascript", body: bundle.outputFiles[0].text }));
  await page.goto("/");
  await page.evaluate(async ({ stores, KEY }) => {
    const { EffectController, WorkspaceStore, syntheticEntry, syntheticPlans, syntheticAreas, syntheticHistory } = await import("/pins-harness.js");
    const data = structuredClone(stores);
    const held = [];
    const log = [];
    const h = { user: "u1", hold: new Set(), held, log, data };
    const connection = {
      subscribeMessage: async () => () => undefined,
      sendMessagePromise: async (message) => {
        const user = h.user;
        log.push({ user, type: message.type, value: structuredClone(message.value ?? null) });
        const answer = () => {
          if (message.type === "frontend/get_user_data") return { value: structuredClone(data[user]?.[KEY] ?? null) };
          if (message.type === "frontend/set_user_data") {
            data[user] = { ...(data[user] ?? {}), [KEY]: structuredClone(message.value) };
            return null;
          }
          throw new Error(`unexpected ${message.type}`);
        };
        if (h.hold.has(message.type)) {
          h.hold.delete(message.type);
          return new Promise((resolve) => held.push({ user, type: message.type, release: (value) => resolve(value ?? answer()) }));
        }
        return answer();
      },
    };
    const entry = (entryId) => ({ ...syntheticEntry(), entryId, deltaUrl: null });
    const backend = {
      catalog: async () => [entry("synthetic-entry"), entry("entry-b")],
      plans: async () => syntheticPlans(),
      areas: async () => syntheticAreas(),
      history: async () => syntheticHistory(),
      scene: async () => ({ scene: { revision: 7, source: "live", buffer: new ArrayBuffer(0), pointOffset: 0,
        floorCount: 0, surfaceCount: 0, total: 0, etag: null,
        metadata: { metersPerCell: 0.05, origin: [0, 0], span: [1, 1], sampleStep: 1, rooms: [] } },
        revision: 7, floorCoherent: true }),
      pose: async () => null,
      dispose() {},
    };
    const store = new WorkspaceStore();
    const controller = new EffectController(store, backend, connection, false);
    h.store = store;
    h.controller = controller;
    h.sync = (user, entryKey) => {
      h.user = user;
      controller.sync({ host: { connected: true, administrator: true, robotConnected: true, robotCount: 2 },
        activity: "idle", batteryPercent: 50, language: "en", userKey: user, vacuumEntityId: "vacuum.x", entryKey,
        robotLabel: "Matic", robots: [{ entryId: "synthetic-entry", label: "A" }, { entryId: "entry-b", label: "B" }] });
    };
    h.pins = () => ({ entry: store.value.selection.entryId, ...store.value.homePins });
    window.pinsHarness = h;
  }, { stores, KEY });
}

const pins = (page) => page.evaluate(() => window.pinsHarness.pins());
const sync = (page, user, entry) => page.evaluate(([u, e]) => window.pinsHarness.sync(u, e), [user, entry]);
const hold = (page, type) => page.evaluate((t) => window.pinsHarness.hold.add(t), type);
const heldCount = (page) => page.evaluate(() => window.pinsHarness.held.length);
const release = (page, index, value) => page.evaluate(([i, v]) => window.pinsHarness.held[i].release(v), [index, value]);
const record = (pinsList) => ({ [KEY]: { "synthetic-entry": { pins: pinsList }, "entry-b": { pins: [plan("b-plan")] } } });

test("a user who signs in on the same robot gets their own shortcuts, never the last user's", async ({ page }) => {
  await setup(page, { u1: record([plan("u1-plan")]), u2: record([plan("u2-plan")]) });
  await hold(page, "frontend/get_user_data");
  await sync(page, "u1", "synthetic-entry");
  await expect.poll(() => heldCount(page)).toBe(1);
  // The second user arrives while the first user's read is still out.
  await sync(page, "u2", "synthetic-entry");
  await expect.poll(() => pins(page)).toEqual({ entry: "synthetic-entry", status: "ready", pins: [plan("u2-plan")] });
  await release(page, 0);
  await page.waitForTimeout(50);
  expect(await pins(page)).toEqual({ entry: "synthetic-entry", status: "ready", pins: [plan("u2-plan")] });
  // And back: the first user's own list is read again, fresh.
  await sync(page, "u1", "synthetic-entry");
  await expect.poll(() => pins(page)).toEqual({ entry: "synthetic-entry", status: "ready", pins: [plan("u1-plan")] });
});

test("robot A, then B, then A again: the first A read, settling last, is dropped", async ({ page }) => {
  await setup(page, { u1: record([plan("fresh")]) });
  await hold(page, "frontend/get_user_data");
  await sync(page, "u1", "synthetic-entry");
  await expect.poll(() => heldCount(page)).toBe(1);
  await sync(page, "u1", "entry-b");
  await expect.poll(() => pins(page)).toEqual({ entry: "entry-b", status: "ready", pins: [plan("b-plan")] });
  await sync(page, "u1", "synthetic-entry");
  await expect.poll(() => pins(page)).toEqual({ entry: "synthetic-entry", status: "ready", pins: [plan("fresh")] });
  // The first read answers late with what it saw then.
  await release(page, 0, { value: { "synthetic-entry": { pins: [plan("stale")] } } });
  await page.waitForTimeout(50);
  expect(await pins(page)).toEqual({ entry: "synthetic-entry", status: "ready", pins: [plan("fresh")] });
});

test("a write queued for one user is never sent after another user takes over", async ({ page }) => {
  await setup(page, { u1: record([plan("daily")]), u2: record([plan("u2-plan")]) });
  await sync(page, "u1", "synthetic-entry");
  await expect.poll(() => pins(page)).toMatchObject({ status: "ready", pins: [plan("daily")] });
  await hold(page, "frontend/get_user_data"); // the first write's reread
  await page.evaluate(() => {
    const h = window.pinsHarness;
    const pin = { kind: "plan", id: "weekend" };
    let before = h.store.value.homePins.pins;
    h.store.dispatch({ type: "set-home-pin", pin, pinned: true });
    h.controller.saveHomePin(pin, true, before);
    before = h.store.value.homePins.pins;
    h.store.dispatch({ type: "set-home-pin", pin: { kind: "plan", id: "daily" }, pinned: false });
    h.controller.saveHomePin({ kind: "plan", id: "daily" }, false, before);
  });
  await expect.poll(() => heldCount(page)).toBe(1);
  await sync(page, "u2", "synthetic-entry");
  await expect.poll(() => pins(page)).toEqual({ entry: "synthetic-entry", status: "ready", pins: [plan("u2-plan")] });
  await release(page, 0);
  await page.waitForTimeout(100);
  const after = await page.evaluate(() => ({ data: window.pinsHarness.data, writes: window.pinsHarness.log.filter((call) => call.type === "frontend/set_user_data") }));
  expect(after.writes).toEqual([]);
  expect(after.data.u2[KEY]["synthetic-entry"].pins).toEqual([plan("u2-plan")]);
  expect(await pins(page)).toEqual({ entry: "synthetic-entry", status: "ready", pins: [plan("u2-plan")] });
});
