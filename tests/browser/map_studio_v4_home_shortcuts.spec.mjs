import { expect, test } from "@playwright/test";

import { installPanelFixture } from "./map_studio_v4_panel_fixture.mjs";

const KEY = "matic_robot_home_shortcuts.synthetic-entry";
const dailyPlan = {
  id: "daily", name: "Daily clean", enabled: true, run_behavior: "intelligent",
  rooms: [{ room_id: "room-a", cleaning_mode: "vacuum", coverage_setting: "standard" }],
  room_order: ["room-a"], return_to_base: true, finish_current_room: false,
  finish_current_room_threshold: 50,
};
const PLAN_CATALOG = {
  rooms: [{ room_id: "room-a", name: "Kitchen" }],
  plans: [
    dailyPlan,
    { ...dailyPlan, id: "weekend", name: "Weekend refresh" },
  ],
  selected_plan: "daily",
};
const AREA_CATALOG = {
  scene_url: "/api/matic_robot/slam_scene/synthetic",
  rooms: [],
  areas: [{ id: "entryway", name: "Entryway", circles: [{ x: 0, y: 0, radius: 0.2 }],
    cleaning_mode: "vacuum", coverage_setting: "standard", status: "current", can_rebind: false }],
  selected_area: null,
};
const SAVED_PINS = [{ kind: "plan", id: "daily" }, { kind: "area", id: "entryway" }];
const EXCLUDED_PINS = [{ kind: "plan", id: "weekend" }];

test("same entry recovery restores the saved home shortcuts without writing user data", async ({ page }) => {
  const fixture = await installPanelFixture(page, {
    moduleSource: "packaged",
    initialPlanCatalog: PLAN_CATALOG,
    initialAreasCatalog: AREA_CATALOG,
    userData: { [KEY]: { version: 2, pins: SAVED_PINS, excluded: EXCLUDED_PINS } },
  });
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.evaluate(() => {
    window.__pinPanel = window.__panelFixture.createPanel();
    document.body.append(window.__pinPanel);
  });
  const panel = page.locator(fixture.panelTag);
  await expect.poll(() => page.evaluate(() => {
    const state = window.__pinPanel.getWorkspaceSnapshot();
    return state.resources.scene.status === "ready" && state.map.exactPose;
  })).toBe(true);
  await expect.poll(() => page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().homePins))
    .toEqual({ status: "ready", pins: SAVED_PINS });
  await expect(panel.getByRole("heading", { level: 3, name: "Shortcuts" })).toBeVisible();
  await expect(panel.locator("button.shortcut")).toHaveCount(2);

  const baseline = await page.evaluate(() => ({
    userDataCalls: window.__panelFixture.userDataCalls.length,
    serviceCalls: window.__panelFixture.serviceCalls.length,
  }));
  expect(baseline.userDataCalls).toBe(1);

  // Mirror an integration reload while the panel remains mounted: the robot
  // temporarily has no entry in the coordinator catalog or HA state.
  await page.evaluate(() => {
    window.__panelFixture.setCatalogEntries([]);
    const { hass } = window.__pinPanel;
    window.__pinPanel.hass = { ...hass, states: {} };
  });
  await expect.poll(() => page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().homePins.status)).toBe("idle");
  await expect(panel.getByRole("heading", { level: 3, name: "Shortcuts" })).toHaveCount(0);

  // The same entry and catalog return without reloading the page.
  await page.evaluate(() => {
    const entry = {
      entry_id: "synthetic-entry", scene_url: "/api/matic_robot/slam_scene/synthetic", delta_url: null,
      pose_url: "/api/matic_robot/slam_pose/synthetic", history_url: "/api/matic_robot/slam_history/synthetic",
      areas_url: "/api/matic_robot/areas/synthetic", plans_url: "/api/matic_robot/plans/synthetic",
      map_revision: 7, map_floor_coherent: true, map_session_verified: true, map_session_key: "a".repeat(64),
      map_complete: true, map_truncated: false, selected_floor_ordinal: 1, map_floor_ordinal: 1,
      history_count: 1, history_floor_count: 2, map_health: "ready", stream_failures: 0,
      bootstrap_state: "complete", bootstrap_photo_seen: true, bootstrap_structure_seen: true,
      bootstrap_failures: 0, runner_locked: false, stop_settle_pending: false, active_plan: false,
      native_reconciliation_pending: false, native_session_active: false,
    };
    window.__panelFixture.setCatalogEntries([entry]);
    const { hass } = window.__pinPanel;
    window.__pinPanel.hass = { ...hass, states: {
      "vacuum.synthetic": { state: "idle", attributes: { matic_entry_id: "synthetic-entry" } },
    } };
  });

  await expect.poll(() => page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().homePins))
    .toEqual({ status: "ready", pins: SAVED_PINS });
  await expect(panel.getByRole("heading", { level: 3, name: "Shortcuts" })).toBeVisible();
  await expect(panel.locator("button.shortcut")).toHaveCount(2);
  expect(await page.evaluate(() => window.__panelFixture.userDataCalls.filter((call) => call.type === "frontend/get_user_data").length)).toBe(2);
  expect(await page.evaluate(() => window.__panelFixture.userDataCalls.filter((call) => call.type === "frontend/set_user_data").length)).toBe(0);
  expect(await page.evaluate(() => window.__panelFixture.userData()["matic_robot_home_shortcuts.synthetic-entry"]))
    .toEqual({ version: 2, pins: SAVED_PINS, excluded: EXCLUDED_PINS });
  expect(await page.evaluate(() => window.__panelFixture.serviceCalls.length)).toBe(baseline.serviceCalls);
});
