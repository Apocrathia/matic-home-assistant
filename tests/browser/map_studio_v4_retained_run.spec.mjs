import { expect, test } from "@playwright/test";
import { build } from "esbuild";
import { readFileSync } from "node:fs";

const HISTORY_PAYLOAD = JSON.parse(readFileSync(new URL("./fixtures/matic_cleaning_history.json", import.meta.url), "utf8"));

const HARNESS = "/retained-run-test.js";
test("retained outcomes are entry-scoped, invalidate on outcome-only changes, and reject malformed or active records", async ({ page }) => {
  const bundle = await build({ stdin: { contents: `
    export { HassAdapter } from "./frontend/map-studio-v4/hass-adapter";
    export { WorkspaceStore, reduceWorkspace, initialWorkspaceState } from "./frontend/map-studio-v4/state";
  `, resolveDir: process.cwd() }, bundle: true, format: "esm", write: false });
  await page.route(`**${HARNESS}`, route => route.fulfill({ contentType: "text/javascript", body: bundle.outputFiles[0].text }));
  await page.goto("/");
  const result = await page.evaluate(async (url) => {
    const { HassAdapter, WorkspaceStore, initialWorkspaceState } = await import(url);
    const adapter = new HassAdapter();
    const run = (overrides = {}) => ({ run_id: "run-1", outcome: "failed", room_count: 4, completed_room_count: 2, ...overrides });
    const states = {
      "vacuum.one": { state: "docked", attributes: { matic_entry_id: "one" } },
      "vacuum.two": { state: "docked", attributes: { matic_entry_id: "two" } },
      "sensor.one_history": { state: "ready", attributes: { matic_entry_id: "one", plans: {}, last_run: run() } },
      "sensor.two_history": { state: "ready", attributes: { matic_entry_id: "two", plans: {}, last_run: run({ run_id: "other", outcome: "unverified", completed_room_count: 1 }) } },
    };
    const hass = { connected: true, user: { is_admin: true }, states };
    const first = adapter.project(hass, undefined, "one");
    const second = adapter.project(hass, undefined, "two");
    states["sensor.one_history"].attributes.last_run = run({ completed_room_count: 3 });
    const updated = adapter.project(hass, undefined, "one");
    const unchanged = adapter.project(hass, undefined, "one");
    states["sensor.one_history"].attributes.last_run = run({ outcome: "running" });
    const running = adapter.project(hass, undefined, "one");
    states["sensor.one_history"].attributes.last_run = run({ run_id: "bad/id" });
    const malformed = adapter.project(hass, undefined, "one");
    const invalidCounts = [];
    for (const fields of [{ room_count: -1 }, { room_count: 1.5 }, { completed_room_count: 5 },
      { completed_room_count: "2" }, { room_count: Number.MAX_SAFE_INTEGER + 1 }]) {
      states["sensor.one_history"].attributes.last_run = run(fields);
      invalidCounts.push(adapter.project(hass, undefined, "one").lastRun);
    }
    const terminalOutcomes = {};
    for (const outcome of ["failed", "stopped_docked", "cancelled", "unverified", "completed", "recharge_suspended", "running"]) {
      states["sensor.one_history"].attributes.last_run = run({ outcome });
      terminalOutcomes[outcome] = adapter.project(hass, undefined, "one").lastRun?.outcome ?? null;
    }
    const store = new WorkspaceStore(initialWorkspaceState());
    return { first: first.lastRun, second: second.lastRun, changedIdentity: updated !== first,
      updated: updated.lastRun, unchangedIdentity: unchanged === updated, running: running.lastRun, malformed: malformed.lastRun,
      reduced: store.value.lastRun, invalidCounts, terminalOutcomes };
  }, HARNESS);
  expect(result).toEqual({
    first: { runId: "run-1", outcome: "partial", completedRoomCount: 2, roomCount: 4 },
    second: { runId: "other", outcome: "unverified", completedRoomCount: 1, roomCount: 4 },
    changedIdentity: true,
    updated: { runId: "run-1", outcome: "partial", completedRoomCount: 3, roomCount: 4 },
    unchangedIdentity: true,
    running: null,
    malformed: null,
    reduced: null,
    invalidCounts: [null, null, null, null, null],
    terminalOutcomes: { failed: "partial", stopped_docked: "partial", cancelled: "partial", unverified: "unverified", completed: null, recharge_suspended: null, running: null },
  });
});

test("selected robot changes its retained outcome without another HA state update", async ({ page }) => {
  const { installPanelFixture } = await import("./map_studio_v4_panel_fixture.mjs");
  const fixture = await installPanelFixture(page, { moduleSource: "packaged", initialRobotStates: {
    "vacuum.one": { state: "docked", attributes: { matic_entry_id: "synthetic-entry", friendly_name: "One" } },
    "vacuum.two": { state: "docked", attributes: { matic_entry_id: "other-entry", friendly_name: "Two" } },
    "sensor.one_history": { state: "ready", attributes: { matic_entry_id: "synthetic-entry", plans: {}, last_run: {
      run_id: "one-run", outcome: "failed", room_count: 3, completed_room_count: 1,
    } } },
    "sensor.two_history": { state: "ready", attributes: { matic_entry_id: "other-entry", plans: {}, last_run: {
      run_id: "two-run", outcome: "unverified", room_count: 4, completed_room_count: 2,
    } } },
  } });
  await page.evaluate(() => document.body.append(window.__panelFixture.createPanel()));
  const panel = page.locator(fixture.panelTag);
  await expect.poll(() => panel.evaluate(element => element.getWorkspaceSnapshot().lastRun?.runId)).toBe("one-run");
  const changed = await panel.evaluate(element => {
    element.shadowRoot.querySelector("matic-map-shell-v4").dispatchEvent(new CustomEvent("matic-workspace-intent", {
      bubbles: true, composed: true, detail: { type: "select-entry", entryId: "other-entry" },
    }));
    const state = element.getWorkspaceSnapshot();
    return { entry: state.selection.entryId, lastRun: state.lastRun };
  });
  expect(changed).toEqual({ entry: "other-entry", lastRun: {
    runId: "two-run", outcome: "unverified", completedRoomCount: 2, roomCount: 4,
  } });
});

test("a retained result preserves current map warning and active-run priority and omits zero-room counts", async ({ page }) => {
  const { installPanelFixture } = await import("./map_studio_v4_panel_fixture.mjs");
  const fixture = await installPanelFixture(page, { moduleSource: "packaged" });
  await page.evaluate(() => document.body.append(window.__panelFixture.createPanel()));
  const panel = page.locator(fixture.panelTag);
  const shell = panel.locator("matic-map-shell-v4");
  await expect.poll(() => panel.evaluate(element => element.getWorkspaceSnapshot().coherence)).toBe("current");
  await shell.evaluate(element => {
    const state = element.state;
    element.state = { ...state, activity: "docked", coherence: "degraded",
      lastRun: { runId: "area-run", outcome: "unverified", completedRoomCount: 0, roomCount: 0 } };
  });
  await expect(shell.locator(".status-copy strong")).toHaveText("Map limited");
  await shell.evaluate(element => element.state = { ...element.state, coherence: "current" });
  await expect(shell.locator(".status-copy strong")).toHaveText("Last run unverified");
  await expect(shell.locator(".status-copy small")).toHaveCount(0);
  await shell.evaluate(element => {
    const state = element.state;
    element.state = { ...state, resources: { ...state.resources, entry: { ...state.resources.entry, activePlan: true } } };
  });
  await expect(shell.locator(".status-copy strong")).toHaveText("Run in progress");
});

test("Home panel keeps a partial result after dock and refresh, hides it for a new run and successful completion", async ({ page }) => {
  const { installPanelFixture } = await import("./map_studio_v4_panel_fixture.mjs");
  const fixture = await installPanelFixture(page, { moduleSource: "packaged", initialRobotStates: {
    "vacuum.synthetic": { state: "docked", attributes: { matic_entry_id: "synthetic-entry" } },
    "sensor.synthetic_cleaning_history": { state: "ready", attributes: HISTORY_PAYLOAD },
  } });
  await page.evaluate(() => document.body.append(window.__panelFixture.createPanel()));
  const panel = page.locator(fixture.panelTag);
  const shell = panel.locator("matic-map-shell-v4");
  await expect(shell.locator(".status-copy strong")).toHaveText("Last run did not finish");
  await expect(shell.locator(".status-copy small")).toHaveText("1 of 3 rooms completed");
  await page.reload();
  await fixture.remount();
  await page.evaluate(() => document.body.append(window.__panelFixture.createPanel()));
  const refreshed = page.locator(fixture.panelTag).locator("matic-map-shell-v4");
  await expect(refreshed.locator(".status-copy strong")).toHaveText("Last run did not finish");
  await page.evaluate(() => {
    const panel = document.querySelector(window.__panelFixture.panelTag);
    const states = structuredClone(panel.hass.states);
    states["sensor.synthetic_cleaning_history"].attributes.last_run = {
      run_id: "partial-2", outcome: "running", room_count: 3, completed_room_count: 0,
    };
    panel.hass = { ...panel.hass, states };
  });
  await expect(refreshed.locator(".status-copy strong")).not.toHaveText("Last run did not finish");
  await page.evaluate(() => {
    const panel = document.querySelector(window.__panelFixture.panelTag);
    const states = structuredClone(panel.hass.states);
    states["sensor.synthetic_cleaning_history"].attributes.last_run = {
      run_id: "completed-3", outcome: "completed", room_count: 3, completed_room_count: 3,
    };
    panel.hass = { ...panel.hass, states };
  });
  await expect(refreshed.locator(".status-copy strong")).not.toHaveText("Last run did not finish");
});
