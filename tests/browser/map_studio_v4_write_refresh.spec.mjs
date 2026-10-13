import { expect, test } from "@playwright/test";
import { installPanelFixture } from "./map_studio_v4_panel_fixture.mjs";

const catalog = {
  rooms: [{ room_id: "kitchen", name: "Kitchen" }], selected_plan: "daily",
  plans: [{ id: "daily", name: "Daily", enabled: true, run_behavior: "ordered",
    rooms: [{ room_id: "kitchen", cleaning_mode: "vacuum", coverage_setting: "standard",
      cadence: { scope: "plan", mop_every_n: 2, coverage_every_n: null,
        periodic_coverage_setting: null, do_mop_next: false, do_coverage_next: false } }],
    room_order: ["kitchen"], return_to_base: true, finish_current_room: false,
    finish_current_room_threshold: 50 }],
};

async function mount(page) {
  const fixture = await installPanelFixture(page, { moduleSource: "packaged", initialPlanCatalog: catalog });
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
  await panel.getByRole("button", { name: /^Run a plan/ }).click();
  await panel.getByRole("button", { name: /^Daily/ }).click();
  return panel;
}

async function edit(page, panel) {
  await panel.getByRole("button", { name: "Edit Daily", exact: true }).click();
  await panel.getByRole("textbox", { name: "Plan name" }).fill("Daily edited");
}

for (const operation of ["save", "delete", "reset", "switch"]) {
  test(`acknowledged ${operation} reports a failed refresh and recovers in Plans`, async ({ page }) => {
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
    await expect(panel.getByText("Your change was saved, but Home Assistant couldn't reload the plans. Reopen Plans to try again.", { exact: true }).first()).toBeVisible();
    expect(await page.evaluate(() => window.__panelFixture.serviceCalls.length)).toBe(1);
    await panel.evaluate(element => element.shadowRoot.querySelector("matic-map-shell-v4")
      .dispatchEvent(new CustomEvent("matic-workspace-intent", { bubbles: true, composed: true,
        detail: { type: "open-workflow", workflow: "plans" } })));
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
  await expect(panel.getByText("Your change was saved, but Home Assistant couldn't reload the plans. Reopen Plans to try again.", { exact: true })).toHaveCount(0);
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
