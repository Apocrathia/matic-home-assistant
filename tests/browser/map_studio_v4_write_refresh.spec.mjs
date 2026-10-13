import { expect, test } from "@playwright/test";
import { installPanelFixture, openPlanPicker } from "./map_studio_v4_panel_fixture.mjs";

const catalog = {
  rooms: [{ room_id: "kitchen", name: "Kitchen" }], selected_plan: "daily",
  plans: [{ id: "daily", name: "Daily", enabled: true, run_behavior: "ordered",
    rooms: [{ room_id: "kitchen", cleaning_mode: "vacuum", coverage_setting: "standard",
      cadence: { scope: "plan", mop_every_n: 2, coverage_every_n: null,
        periodic_coverage_setting: null, do_mop_next: false, do_coverage_next: false } }],
    room_order: ["kitchen"], return_to_base: true, finish_current_room: false,
    finish_current_room_threshold: 50 }],
};

async function mount(page, initialPlanCatalog = catalog) {
  const fixture = await installPanelFixture(page, { moduleSource: "packaged", initialPlanCatalog });
  await page.evaluate(() => {
    const panel = window.__panelFixture.createPanel();
    const fetch = panel.hass.fetchWithAuth;
    const service = panel.hass.callService;
    const failures = { armed: false, defer: false, reads: 0, release: null };
    panel.hass = { ...panel.hass,
      callService: async (...args) => {
        const result = await service(...args);
        failures.armed = true;
        return result;
      },
      fetchWithAuth: async (path, ...args) => {
        if (failures.armed && path.endsWith("/plans/synthetic")) {
          failures.armed = false;
          failures.reads += 1;
          if (failures.defer) return new Promise(resolve => {
            failures.release = () => resolve(new Response("unavailable", { status: 503 }));
          });
          return new Response("unavailable", { status: 503 });
        }
        return fetch(path, ...args);
      },
    };
    window.__writeRefresh = failures;
    window.__writePanel = panel;
    document.body.append(panel);
  });
  const panel = page.locator(fixture.panelTag);
  await openPlanPicker(panel);
  await panel.getByRole("button", { name: /^Daily/ }).click();
  return panel;
}

async function edit(page, panel) {
  await panel.getByRole("button", { name: "Edit Daily", exact: true }).click();
  await panel.getByRole("textbox", { name: "Plan name" }).fill("Daily edited");
}

for (const operation of ["save", "delete", "reset", "switch"]) {
  test(`acknowledged ${operation} reports a failed refresh and recovers by opening Your plans again`, async ({ page }) => {
    const panel = await mount(page);
    if (operation === "switch") await panel.getByRole("switch", { name: "Plan enabled", exact: true }).click();
    else if (operation === "save") {
      await edit(page, panel);
      await panel.getByRole("button", { name: "Save", exact: true }).click();
    } else if (operation === "delete") {
      await panel.getByRole("button", { name: "Edit Daily", exact: true }).click();
      await panel.getByRole("button", { name: "More actions", exact: true }).click();
      await panel.getByRole("menuitem", { name: "Delete", exact: true }).click();
      await panel.getByRole("dialog").getByRole("button", { name: "Delete", exact: true }).click();
    } else {
      await panel.getByRole("button", { name: "Edit Daily", exact: true }).click();
      await panel.evaluate(element => element.shadowRoot.querySelector("matic-map-shell-v4")
        .dispatchEvent(new CustomEvent("matic-workspace-intent", { bubbles: true, composed: true,
          detail: { type: "request-room-cadence-reset", planId: "daily", roomId: "kitchen", mode: "mop" } })));
      await panel.getByRole("dialog").getByRole("button", { name: "Reset", exact: true }).click();
    }
    await expect.poll(() => page.evaluate(() => window.__writeRefresh.reads)).toBe(1);
    await expect.poll(() => panel.evaluate(element => {
      const state = element.getWorkspaceSnapshot();
      return { command: state.command, status: state.resources.plans.status, tone: state.notice?.tone };
    })).toEqual({ command: "idle", status: "ready", tone: "warning" });
    await expect(panel.getByText("Home Assistant made the change but couldn't reload your plans, so open Your plans again.", { exact: true }).first()).toBeVisible();
    expect(await page.evaluate(() => window.__panelFixture.serviceCalls.length)).toBe(1);
    // Follow the notice: open Your plans again from wherever the write left
    // the user (Run, Edit or the picker itself).
    const reads = await page.evaluate(() => window.__panelFixture.planReads);
    const yourPlans = panel.getByRole("button", { name: "Back to plans", exact: true });
    const editCancel = panel.getByRole("button", { name: "Cancel", exact: true });
    if (await editCancel.isVisible()) await editCancel.click();
    if (await yourPlans.isVisible()) {
      await expect(yourPlans).toContainText("Your plans");
      await yourPlans.click();
    } else {
      await expect(panel.getByRole("heading", { level: 2, name: "Your plans" })).toBeVisible();
      await panel.getByRole("button", { name: "Back to all tasks", exact: true }).click();
      await openPlanPicker(panel);
    }
    await expect(panel.getByRole("heading", { level: 2, name: "Your plans" })).toBeVisible();
    await expect.poll(() => page.evaluate(() => window.__panelFixture.planReads)).toBeGreaterThan(reads);
    await expect.poll(() => panel.evaluate(element => element.getWorkspaceSnapshot().resources.plans.status)).toBe("ready");
    if (operation === "delete") await expect(panel.getByRole("button", { name: /^Daily/ })).toHaveCount(0);
    if (operation === "save") await expect(panel.getByRole("button", { name: /^Daily edited/ })).toBeVisible();
  });
}

test("an aborted post-write refresh cannot replace the disconnected state with a warning", async ({ page }) => {
  const panel = await mount(page);
  await edit(page, panel);
  await page.evaluate(() => { window.__writeRefresh.defer = true; });
  await panel.getByRole("button", { name: "Save", exact: true }).click();
  await expect.poll(() => page.evaluate(() => Boolean(window.__writeRefresh.release))).toBe(true);
  await panel.evaluate(element => { element.hass = { ...element.hass, connected: false }; });
  await expect.poll(() => panel.evaluate(element => element.getWorkspaceSnapshot().host.connected)).toBe(false);
  await page.evaluate(() => window.__writeRefresh.release());
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  await expect.poll(() => panel.evaluate(element => element.getWorkspaceSnapshot().command)).toBe("idle");
  await expect(panel.getByText("Home Assistant made the change but couldn't reload your plans, so open Your plans again.", { exact: true })).toHaveCount(0);
});

test("an older refresh failure cannot replace a newer failed save's notice or draft", async ({ page }) => {
  const panel = await mount(page);
  await edit(page, panel);
  await page.evaluate(() => { window.__writeRefresh.defer = true; });
  await panel.getByRole("button", { name: "Save", exact: true }).click();
  await expect.poll(() => page.evaluate(() => Boolean(window.__writeRefresh.release))).toBe(true);
  await panel.getByRole("button", { name: "Edit Daily edited", exact: true }).click();
  await panel.getByRole("textbox", { name: "Plan name" }).fill("New change");
  await page.evaluate(() => window.__panelFixture.failNextService("save_plan"));
  await panel.getByRole("button", { name: "Save", exact: true }).click();
  await expect.poll(() => panel.evaluate(element => element.getWorkspaceSnapshot().notice?.tone)).toBe("error");
  const notice = await panel.evaluate(element => element.getWorkspaceSnapshot().notice);
  await page.evaluate(() => window.__writeRefresh.release());
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  expect(await panel.evaluate(element => {
    const state = element.getWorkspaceSnapshot();
    return { notice: state.notice, dirty: state.planDraft.dirty, name: state.planDraft.name };
  })).toEqual({ notice, dirty: true, name: "New change" });
  expect(await page.evaluate(() => window.__panelFixture.serviceCalls.length)).toBe(2);
});

test("a room removed by an acknowledged save comes back with defaults after a failed refresh", async ({ page }) => {
  const [plan] = catalog.plans;
  const hall = { room_id: "hall", cleaning_mode: "vacuum_and_mop", coverage_setting: "heavy_duty",
    cadence: { scope: "plan", mop_every_n: 3, coverage_every_n: null,
      periodic_coverage_setting: null, do_mop_next: false, do_coverage_next: false } };
  const panel = await mount(page, { ...catalog, rooms: [...catalog.rooms, { room_id: "hall", name: "Hall" }],
    plans: [{ ...plan, rooms: [...plan.rooms, hall], room_order: ["kitchen", "hall"] }] });
  const toggleHall = () => panel.evaluate(element => element.shadowRoot.querySelector("matic-map-shell-v4")
    .dispatchEvent(new CustomEvent("matic-workspace-intent", { bubbles: true, composed: true,
      detail: { type: "toggle-room", roomId: "hall" } })));
  await panel.getByRole("button", { name: "Edit Daily", exact: true }).click();
  await toggleHall();
  await panel.getByRole("button", { name: "Save", exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.__writeRefresh.reads)).toBe(1);
  await expect.poll(() => panel.evaluate(element => element.getWorkspaceSnapshot().notice?.tone)).toBe("warning");
  // The save took Hall out, so its pre-save settings and cadence are gone:
  // ticking it again in Edit adds it fresh, not as it was before the save.
  await panel.getByRole("button", { name: "Edit Daily", exact: true }).click();
  await toggleHall();
  expect(await panel.evaluate(element => {
    const { rooms, parkedRooms } = element.getWorkspaceSnapshot().planDraft;
    return { hall: rooms.find(room => room.roomId === "hall"), parked: parkedRooms.length };
  })).toEqual({ hall: { roomId: "hall", cleaningMode: "vacuum", coverageSetting: "standard" }, parked: 0 });
});

test("a switch on a plan deleted elsewhere goes back to Your plans and sends nothing", async ({ page }) => {
  const fixture = await installPanelFixture(page, { moduleSource: "packaged", initialPlanCatalog: catalog });
  await page.evaluate(() => {
    const panel = window.__panelFixture.createPanel();
    const fetch = panel.hass.fetchWithAuth;
    const gone = { armed: false };
    panel.hass = { ...panel.hass,
      fetchWithAuth: async (path, ...args) => {
        const response = await fetch(path, ...args);
        if (!gone.armed || !path.endsWith("/plans/synthetic")) return response;
        const body = await response.json();
        return new Response(JSON.stringify({ ...body, plans: [], selected_plan: null }),
          { status: 200, headers: { "content-type": "application/json" } });
      },
    };
    window.__planGone = gone;
    document.body.append(panel);
  });
  const panel = page.locator(fixture.panelTag);
  await openPlanPicker(panel);
  await panel.getByRole("button", { name: /^Daily/ }).click();
  await page.evaluate(() => { window.__planGone.armed = true; });
  await panel.getByRole("switch", { name: "Plan enabled", exact: true }).click();
  await expect(panel.getByRole("heading", { level: 2, name: "Your plans" })).toBeVisible();
  await expect(panel.getByText("This plan was removed elsewhere, so nothing was changed.", { exact: true }).first()).toBeVisible();
  expect(await page.evaluate(() => window.__panelFixture.serviceCalls.length)).toBe(0);
  await expect.poll(() => panel.evaluate((element) => {
    const state = element.getWorkspaceSnapshot();
    return { command: state.command, workflow: state.workflow, id: state.planDraft.id, dirty: state.planDraft.dirty };
  })).toEqual({ command: "idle", workflow: "plans", id: null, dirty: false });
});
