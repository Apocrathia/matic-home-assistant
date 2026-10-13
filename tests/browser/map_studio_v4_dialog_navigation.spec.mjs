import { expect, test } from "@playwright/test";
import { installPanelFixture } from "./map_studio_v4_panel_fixture.mjs";

const plan = (id, name) => ({
  id, name, enabled: true, run_behavior: "ordered",
  rooms: [{ room_id: "kitchen", cleaning_mode: "vacuum", coverage_setting: "standard" }],
  room_order: ["kitchen"], return_to_base: true,
  finish_current_room: false, finish_current_room_threshold: 50,
});

async function setup(page, plans = [plan("daily", "Daily")]) {
  const fixture = await installPanelFixture(page, {
    moduleSource: "packaged",
    initialPlanCatalog: { rooms: [{ room_id: "kitchen", name: "Kitchen", boundary: [[0, 0], [5, 0], [5, 5]] }], plans, selected_plan: plans[0]?.id ?? null },
  });
  await page.evaluate(() => document.body.append(window.__panelFixture.createPanel()));
  const panel = page.locator(fixture.panelTag);
  await panel.getByRole("button", { name: /^Run a plan/ }).click();
  await panel.getByRole("button", { name: new RegExp(`^${plans[0].name}`) }).click();
  await panel.getByRole("button", { name: `Edit ${plans[0].name}`, exact: true }).click();
  return { panel, fixture };
}

async function back(page) {
  await page.evaluate(() => history.back());
}

test.describe("UX2 discard dialog navigation", () => {
  test("save after Cancel leaves no stale layer that eats Back", async ({ page }) => {
    const { panel } = await setup(page);
    await panel.getByRole("textbox", { name: "Plan name" }).fill("Daily tidy");
    await panel.getByRole("button", { name: "Cancel", exact: true }).click();
    const dialog = panel.getByRole("dialog", { name: "Discard changes?" });
    await dialog.getByRole("button", { name: "Save", exact: true }).click();
    await expect(dialog).toHaveCount(0);
    await expect(panel.getByRole("heading", { level: 2, name: "Daily tidy" })).toBeVisible();
    await back(page);
    await expect(panel.getByRole("heading", { level: 2, name: "Your plans" })).toBeVisible();
    await back(page);
    await expect(panel.getByRole("button", { name: /^Run a plan/ })).toBeVisible();
  });

  test("Back-opened dialog save continues to the picker, and the next Back goes home", async ({ page }) => {
    const { panel } = await setup(page);
    await panel.getByRole("textbox", { name: "Plan name" }).fill("Back save");
    await back(page);
    const dialog = panel.getByRole("dialog", { name: "Discard changes?" });
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: "Save", exact: true }).click();
    await expect(dialog).toHaveCount(0);
    await expect(panel.getByRole("heading", { level: 2, name: "Back save" })).toBeVisible();
    await back(page);
    await expect(panel.getByRole("heading", { level: 2, name: "Your plans" })).toBeVisible();
    await back(page);
    await expect(panel.getByRole("button", { name: /^Run a plan/ })).toBeVisible();
  });

  test("Back from a dirty new plan holds through real Save and Back while pending", async ({ page }) => {
    const fixture = await installPanelFixture(page, {
      moduleSource: "packaged",
      initialPlanCatalog: {
        rooms: [{ room_id: "kitchen", name: "Kitchen", boundary: [[0, 0], [5, 0], [5, 5]] }],
        plans: [], selected_plan: null,
      },
    });
    await page.evaluate(() => document.body.append(window.__panelFixture.createPanel()));
    const panel = page.locator(fixture.panelTag);
    await panel.getByRole("button", { name: /^Create a plan/ }).click();
    await panel.getByRole("button", { name: "Create a plan", exact: true }).click();
    await panel.getByRole("textbox", { name: "Plan name" }).fill("New plan");
    await panel.getByRole("list", { name: "Rooms", exact: true }).getByRole("checkbox").first().check();
    await back(page);
    const dialog = panel.getByRole("dialog", { name: "Discard changes?" });
    await expect(dialog).toBeVisible();
    await page.evaluate(() => window.__panelFixture.deferNextService());
    await dialog.getByRole("button", { name: "Save", exact: true }).click();
    await expect.poll(() => page.evaluate(() => window.__panelFixture.pendingServiceCount())).toBe(1);
    const status = dialog.getByRole("status");
    await expect(status).toHaveText("Saving…");
    for (const button of [dialog.getByRole("button", { name: "Keep editing" }), dialog.getByRole("button", { name: "Save" }), dialog.getByRole("button", { name: "Discard" })]) {
      await expect(button).toHaveAttribute("aria-disabled", "true");
      await expect(button).toHaveAttribute("aria-describedby", "dialog-saving");
    }
    await back(page);
    await expect(dialog, "Back cannot dismiss a save that owns the dialog").toBeVisible();
    await page.evaluate(() => window.__panelFixture.releaseService());
    await expect(dialog).toHaveCount(0);
    await expect(panel.getByRole("heading", { level: 2, name: "Your plans" })).toBeVisible();
    await expect(panel.getByRole("button", { name: /^New plan/ })).toBeVisible();
    // The shell changes to the destination immediately; wait until WebKit has
    // completed its native traversal before issuing the next browser Back.
    await expect.poll(() => page.evaluate(() => history.state?.maticMapLayer?.depth)).toBe(1);
    await back(page);
    await expect(panel.getByRole("button", { name: /^Run a plan/ })).toBeVisible();
  });

  test("Delete lands on the picker and Back from there goes home", async ({ page }) => {
    const plans = [plan("daily", "Daily"), plan("weekend", "Weekend")];
    const { panel } = await setup(page, plans);
    await panel.getByRole("button", { name: "More actions", exact: true }).click();
    await panel.getByRole("menuitem", { name: "Delete", exact: true }).click();
    await panel.getByRole("dialog", { name: "Delete plan?" }).getByRole("button", { name: "Delete", exact: true }).click();
    await expect(panel.getByRole("heading", { level: 2, name: "Your plans" })).toBeVisible();
    await back(page);
    await expect(panel.getByRole("button", { name: /^Run a plan/ })).toBeVisible();
  });

  test("a rejected dialog save closes and keeps the draft", async ({ page }) => {
    await page.route("**/chunks/catalog-writes-*.js", (route) => route.abort());
    const { panel } = await setup(page);
    await panel.getByRole("textbox", { name: "Plan name" }).fill("Kept draft");
    await panel.getByRole("button", { name: "Cancel", exact: true }).click();
    const dialog = panel.getByRole("dialog", { name: "Discard changes?" });
    await dialog.getByRole("button", { name: "Save", exact: true }).click();
    await expect(dialog).toHaveCount(0);
    await expect(panel.getByRole("alert")).toContainText("can't confirm the plan was saved");
    await expect(panel.getByRole("textbox", { name: "Plan name" })).toHaveValue("Kept draft");
  });

  for (const outcome of ["resolve", "reject"]) {
    test(`disconnect cancels a deferred dialog save and ignores late ${outcome}`, async ({ page }) => {
      const { panel } = await setup(page);
      await panel.getByRole("textbox", { name: "Plan name" }).fill("Kept after disconnect");
      await panel.getByRole("button", { name: "Cancel", exact: true }).click();
      const dialog = panel.getByRole("dialog", { name: "Discard changes?" });
      await page.evaluate(() => window.__panelFixture.deferNextService());
      await dialog.getByRole("button", { name: "Save", exact: true }).click();
      await expect.poll(() => page.evaluate(() => window.__panelFixture.pendingServiceCount())).toBe(1);

      await page.evaluate(() => {
        const panel = document.querySelector(window.__panelFixture.panelTag);
        panel.hass = { ...panel.hass, connected: false };
      });
      await expect.poll(() => panel.evaluate((element) => {
        const state = element.getWorkspaceSnapshot();
        return { command: state.command, dialog: state.dialog, notice: state.notice?.tone ?? null, dirty: state.planDraft.dirty, view: state.planView };
      })).toEqual({ command: "idle", dialog: null, notice: null, dirty: true, view: "edit" });

      await page.evaluate((result) => {
        if (result === "resolve") window.__panelFixture.releaseService();
        else window.__panelFixture.rejectService();
      }, outcome);
      await expect.poll(() => panel.evaluate((element) => {
        const state = element.getWorkspaceSnapshot();
        return { dialog: state.dialog, notice: state.notice?.tone ?? null, dirty: state.planDraft.dirty, view: state.planView };
      })).toEqual({ dialog: null, notice: null, dirty: true, view: "edit" });
      await expect(panel.getByRole("textbox", { name: "Plan name" })).toHaveValue("Kept after disconnect");
    });

    test(`disconnect cancels a deferred area dialog save and ignores late ${outcome}`, async ({ page }) => {
      const { panel, fixture } = await setup(page);
      await page.evaluate((tag) => {
        const panel = document.querySelector(tag);
        const shell = panel.shadowRoot.querySelector("matic-map-shell-v4");
        const send = (detail) => shell.dispatchEvent(new CustomEvent("matic-workspace-intent", { detail, bubbles: true, composed: true }));
        send({ type: "open-workflow", workflow: "draw" });
      }, fixture.panelTag);
      await expect.poll(() => panel.evaluate((element) => element.getWorkspaceSnapshot().workflow)).toBe("draw");
      await page.evaluate((tag) => {
        const panel = document.querySelector(tag);
        const shell = panel.shadowRoot.querySelector("matic-map-shell-v4");
        const state = panel.getWorkspaceSnapshot();
        shell.dispatchEvent(new CustomEvent("matic-workspace-intent", {
          detail: { type: "set-draft-circles", circles: [{ x: 1, y: 1, radius: 0.2 }], coordinateEdit: {
            generation: state.generation, tool: state.draw.tool, baselineCircles: state.draw.circles, baselineOutline: state.draw.outline ?? null,
          } }, bubbles: true, composed: true,
        }));
        shell.dispatchEvent(new CustomEvent("matic-workspace-intent", {
          detail: { type: "patch-area-draft", patch: { name: "Kept area" } }, bubbles: true, composed: true,
        }));
        shell.dispatchEvent(new CustomEvent("matic-workspace-intent", { detail: { type: "open-workflow", workflow: "areaReview" }, bubbles: true, composed: true }));
        shell.dispatchEvent(new CustomEvent("matic-workspace-intent", { detail: { type: "open-dialog", dialog: "discardDraft" }, bubbles: true, composed: true }));
      }, fixture.panelTag);
      const dialog = panel.getByRole("dialog", { name: "Discard changes?" });
      await expect(dialog).toBeVisible();
      await page.evaluate(() => window.__panelFixture.deferNextAreaWrite());
      await dialog.getByRole("button", { name: "Save", exact: true }).click();
      await expect.poll(() => page.evaluate(() => window.__panelFixture.pendingAreaWriteCount())).toBe(1);

      await page.evaluate(() => {
        const element = document.querySelector(window.__panelFixture.panelTag);
        element.hass = { ...element.hass, connected: false };
      });
      await expect.poll(() => panel.evaluate((element) => {
        const state = element.getWorkspaceSnapshot();
        return { command: state.command, dialog: state.dialog, notice: state.notice?.tone ?? null, dirty: state.areaDraft.dirty, circles: state.draw.circles.length, workflow: state.workflow };
      })).toEqual({ command: "idle", dialog: null, notice: null, dirty: true, circles: 1, workflow: "areaReview" });

      await page.evaluate((result) => {
        if (result === "resolve") window.__panelFixture.releaseAreaWrite();
        else window.__panelFixture.rejectAreaWrite();
      }, outcome);
      await expect.poll(() => panel.evaluate((element) => {
        const state = element.getWorkspaceSnapshot();
        return { dialog: state.dialog, notice: state.notice?.tone ?? null, dirty: state.areaDraft.dirty, workflow: state.workflow };
      })).toEqual({ dialog: null, notice: null, dirty: true, workflow: "areaReview" });
      await expect(panel.getByRole("textbox", { name: "Area name" })).toHaveValue("Kept area");
    });
  }

});
