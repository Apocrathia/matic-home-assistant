import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { installPanelFixture, openPlanPicker } from "./map_studio_v4_panel_fixture.mjs";

const cadence = (scope, mopEvery, coverageEvery, periodicCoverage, doMopNext = false, doCoverageNext = false) => ({
  scope,
  mop_every_n: mopEvery,
  coverage_every_n: coverageEvery,
  periodic_coverage_setting: periodicCoverage,
  do_mop_next: doMopNext,
  do_coverage_next: doCoverageNext,
});

const planCatalog = ({ enabled = true, policy }) => ({
  rooms: [{ room_id: "room-a", name: "Kitchen" }],
  selected_plan: "daily",
  plans: [{
    id: "daily",
    name: "Daily clean",
    enabled,
    run_behavior: "intelligent",
    rooms: [{ room_id: "room-a", cleaning_mode: "vacuum", coverage_setting: "standard", cadence: policy }],
    room_order: ["room-a"],
    return_to_base: true,
    finish_current_room: false,
    finish_current_room_threshold: 50,
  }],
});

const expectNoSeriousAccessibilityViolations = async (page, workflow) => {
  // Every running transition, in the document and in each shadow root, so a
  // control whose colours are still easing (Save turning on) is read at rest.
  const waitForTransitions = () => page.evaluate(async () => {
    const running = () => {
      const roots = [document];
      for (let index = 0; index < roots.length; index += 1) {
        for (const element of roots[index].querySelectorAll("*")) if (element.shadowRoot) roots.push(element.shadowRoot);
      }
      return roots.flatMap((root) => root.getAnimations())
        .filter((animation) => "transitionProperty" in animation && animation.playState === "running");
    };
    for (let frame = 0; frame < 120 && running().length; frame += 1) {
      await new Promise(requestAnimationFrame);
    }
  });

  try {
    for (const colorScheme of ["light", "dark"]) {
      await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
      await waitForTransitions();
      const { violations } = await new AxeBuilder({ page }).analyze();
      const serious = violations
        .filter(({ impact }) => impact === "serious" || impact === "critical")
        .map(({ id, impact, help, nodes }) => ({
          id,
          impact,
          help,
          nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })),
        }));
      expect(serious, `${workflow} (${colorScheme}) has serious or critical accessibility violations`).toEqual([]);
    }
  } finally {
    await page.emulateMedia({ colorScheme: "light", reducedMotion: null });
    await waitForTransitions();
  }
};

const exerciseCadenceRoundtrip = async ({ page }) => {
  const privateInitial = cadence("plan", 2, 3, "quick");
  const sharedEdited = cadence("shared", 7, 5, "heavy_duty", true, true);
  const privateEdited = cadence("plan", 4, 2, "standard", true, true);
  const cadenceDisabledWrite = cadence("plan", null, null, "standard");
  const cadenceDisabled = cadence("plan", null, null, null);
  const cadenceReenabled = cadence("plan", 4, 2, "standard");
  const fixture = await installPanelFixture(page, {
    initialPlanCatalog: planCatalog({ policy: privateInitial }),
    moduleSource: "packaged",
  });
  await page.evaluate(() => {
    const panel = window.__panelFixture.createPanel();
    panel.dataset.cadenceRoundtrip = "true";
    document.body.append(panel);
  });

  const panel = page.locator(`${fixture.panelTag}[data-cadence-roundtrip="true"]`);
  await expect.poll(() => page.evaluate(() => {
    const panel = document.querySelector("[data-cadence-roundtrip='true']");
    return panel?.getWorkspaceSnapshot().resources.scene.status;
  })).toBe("ready");
  await expect.poll(() => page.evaluate(() => {
    const resource = document.querySelector("[data-cadence-roundtrip='true']").getWorkspaceSnapshot().resources.plans;
    return { status: resource.status, problem: resource.problem };
  })).toEqual({ status: "ready", problem: null });
  await expectNoSeriousAccessibilityViolations(page, "ready workspace");
  await openPlanPicker(panel);
  const editPlan = panel.getByRole("button", { name: /^Daily clean/ });
  await expect(editPlan).toBeVisible();
  await editPlan.click();
  if ((page.viewportSize()?.width ?? Infinity) <= 600) {
    const sheet = panel.locator(".mobile-sheet");
    await expect(sheet).toBeVisible();
    // shell.md §5 Sheet: a saved plan opens in Run, at half height.
    await expect(sheet).toHaveAttribute("data-detent", "half");
    await expect(sheet.locator(".sheet-body")).toBeVisible();
  }

  const rooms = panel.getByRole("list", { name: "Rooms", exact: true });
  const schedule = rooms.getByRole("group", { name: "Smart cleaning for Kitchen" });
  // A saved plan opens in Run, and Save returns there (plan.md §5); its
  // schedules change in Edit, inside the room's settings (plan.md §3).
  const openSchedule = async () => {
    await panel.getByRole("button", { name: "Edit Daily clean", exact: true }).click();
    const settings = rooms.getByRole("button", { name: "Settings for Kitchen", exact: true });
    if ((await settings.getAttribute("aria-expanded")) !== "true") await settings.click();
    await expect(schedule).toBeVisible();
  };
  await openSchedule();
  await expectNoSeriousAccessibilityViolations(page, "plan cadence editor");
  // "Count completed cleans" lives under Advanced (room-schedule.md §3).
  const scopeRadio = (label) => schedule.getByRole("radio", { name: label, exact: true, includeHidden: true });
  const setScope = async (label) => {
    if (!(await scopeRadio(label).isVisible())) await schedule.getByText("Advanced", { exact: true }).click();
    await scopeRadio(label).check();
  };
  const shared = "Across all plans (recommended)";
  const thisPlan = "In this plan only";
  // Each field is named by its row's label line, which says its value (room-schedule.md §3).
  const mopInterval = schedule.getByRole("spinbutton", { name: /^(Mop|Occasional mopping)/ });
  const coverageInterval = schedule.getByRole("spinbutton", { name: /vacuum/ });
  const coverageSetting = schedule.getByLabel("Vacuum level for Kitchen");
  // One next-clean switch, named by the work it brings forward.
  const nextClean = schedule.getByRole("switch");
  const save = panel.getByRole("button", { name: "Save", exact: true });

  const waitForReadback = async (saveCount, expectedEnabled, expectedPolicy) => {
    await expect.poll(() => page.evaluate(() => window.__panelFixture.serviceCalls.length)).toBe(saveCount);
    await expect.poll(() => page.evaluate(() => {
      const state = document.querySelector("[data-cadence-roundtrip='true']").getWorkspaceSnapshot();
      return {
        draftEnabled: state.planDraft.enabled,
        draftDirty: state.planDraft.dirty,
        draftCadence: state.planDraft.rooms[0]?.cadence ?? null,
        savedEnabled: state.resources.plans.value?.plans[0]?.enabled,
        savedCadence: state.resources.plans.value?.plans[0]?.rooms[0]?.cadence ?? null,
      };
    })).toEqual({
      draftEnabled: expectedEnabled,
      draftDirty: false,
      draftCadence: {
        scope: expectedPolicy.scope,
        mopEveryN: expectedPolicy.mop_every_n,
        coverageEveryN: expectedPolicy.coverage_every_n,
        periodicCoverageSetting: expectedPolicy.periodic_coverage_setting,
        doMopNext: expectedPolicy.do_mop_next,
        doCoverageNext: expectedPolicy.do_coverage_next,
      },
      savedEnabled: expectedEnabled,
      savedCadence: {
        scope: expectedPolicy.scope,
        mopEveryN: expectedPolicy.mop_every_n,
        coverageEveryN: expectedPolicy.coverage_every_n,
        periodicCoverageSetting: expectedPolicy.periodic_coverage_setting,
        doMopNext: expectedPolicy.do_mop_next,
        doCoverageNext: expectedPolicy.do_coverage_next,
      },
    });
  };

  await setScope(shared);
  await mopInterval.fill("7");
  await coverageInterval.fill("5");
  await coverageSetting.selectOption("heavy_duty");
  await expect(nextClean).toHaveAccessibleName("Mop and heavy duty vacuum on the next clean");
  await nextClean.click();
  await expect(nextClean).toHaveAttribute("aria-checked", "true");
  await save.click();
  await waitForReadback(1, true, sharedEdited);
  await openSchedule();
  await expect(scopeRadio(shared)).toBeChecked();
  await expect(mopInterval).toHaveValue("7");
  await expect(coverageInterval).toHaveValue("5");

  await panel.getByRole("button", { name: "Cancel", exact: true }).click();
  await panel.getByRole("button", { name: "Back to plans" }).click();
  await expect(panel.getByRole("button", { name: /^Daily clean/ })).toBeVisible();
  await panel.getByRole("button", { name: /^Daily clean/ }).click();
  await panel.getByRole("button", { name: "Edit Daily clean", exact: true }).click();
  await rooms.getByRole("button", { name: "Settings for Kitchen", exact: true }).click();
  const reopenedSchedule = rooms.getByRole("group", { name: "Smart cleaning for Kitchen" });
  await expect(reopenedSchedule.getByRole("radio", { name: shared, exact: true, includeHidden: true })).toBeChecked();
  await expect(reopenedSchedule.getByRole("spinbutton", { name: "Mop every 7 cleans" })).toHaveValue("7");
  await expect(reopenedSchedule.getByRole("spinbutton", { name: "Heavy duty vacuum every 5 cleans" })).toHaveValue("5");
  await expect(reopenedSchedule.getByLabel("Vacuum level for Kitchen")).toHaveValue("heavy_duty");
  await expect(reopenedSchedule.getByRole("switch")).toHaveAttribute("aria-checked", "true");

  // The saved flags stay set, so the switch stays on through the scope change.
  await setScope(thisPlan);
  await expect(nextClean).toHaveAttribute("aria-checked", "true");
  await mopInterval.fill("4");
  await coverageInterval.fill("2");
  await coverageSetting.selectOption("standard");
  await save.click();
  await waitForReadback(2, true, privateEdited);
  await openSchedule();
  await expect(scopeRadio(thisPlan)).toBeChecked();
  await expect(mopInterval).toHaveValue("4");
  await expect(coverageInterval).toHaveValue("2");

  await mopInterval.fill("");
  await coverageInterval.fill("");
  await save.click();
  await waitForReadback(3, true, cadenceDisabled);
  await openSchedule();
  // Nothing is scheduled, so there is nothing to bring forward.
  await expect(nextClean).toHaveCount(0);

  // A new rotation is Heavy duty unless a level is chosen first (room-schedule.md D1).
  await expect(coverageSetting).toHaveValue("heavy_duty");
  await coverageSetting.selectOption("standard");
  await mopInterval.fill("4");
  await coverageInterval.fill("2");
  await save.click();
  await waitForReadback(4, true, cadenceReenabled);

  const calls = await page.evaluate(() => window.__panelFixture.serviceCalls);
  const payload = (enabledValue, policy) => ({
    plan_id: "daily",
    name: "Daily clean",
    enabled: enabledValue,
    run_behavior: "intelligent",
    rooms: [{
      room: "room-a",
      cleaning_mode: "vacuum",
      coverage_setting: "standard",
      cadence: policy,
    }],
    return_to_base: true,
    finish_current_room: false,
    finish_current_room_threshold: 50,
    select: true,
  });
  expect(calls).toEqual([
    payload(true, sharedEdited),
    payload(true, privateEdited),
    payload(true, cadenceDisabledWrite),
    payload(true, cadenceReenabled),
  ].map((data) => ({
    domain: "matic_robot",
    service: "save_plan",
    data,
    target: { entity_id: "vacuum.synthetic" },
  })));
  expect(await page.evaluate(() => window.__panelFixture.planReads)).toBeGreaterThanOrEqual(5);
};

test("plan editor saves cadence choices and restores them from the packaged panel @safety", exerciseCadenceRoundtrip);
test("plan editor restores cadence choices on touch viewports @mobile", exerciseCadenceRoundtrip);

test("mop-only legacy vacuum rules stay visible and can leave shared participation @safety", async ({ page }) => {
  const catalog = planCatalog({ policy: cadence("shared", null, 3, "heavy_duty", false, true) });
  catalog.plans[0].rooms[0].cleaning_mode = "mop";
  catalog.plans[0].rooms[0].cadence_reasons = ["coverage_requires_vacuum"];
  catalog.plans[0].next_run_preview = {
    rooms: [], mission_boundaries: [], blocker: "coverage_requires_vacuum",
  };
  const fixture = await installPanelFixture(page, { initialPlanCatalog: catalog, moduleSource: "packaged" });
  await page.evaluate(() => document.body.append(window.__panelFixture.createPanel()));
  const panel = page.locator(fixture.panelTag);
  await openPlanPicker(panel);
  await panel.getByRole("button", { name: /^Daily clean/ }).click();
  await expect(panel.getByRole("button", { name: "Run plan Daily clean", exact: true })).toBeDisabled();
  // The schedule changes in Edit, which opens at full height (plan.md §3).
  await panel.getByRole("button", { name: "Edit Daily clean", exact: true }).click();
  const rooms = panel.getByRole("list", { name: "Rooms", exact: true });
  await rooms.getByRole("button", { name: "Settings for Kitchen", exact: true }).click();
  const schedule = rooms.getByRole("group", { name: "Smart cleaning for Kitchen" });
  const rotation = schedule.getByRole("spinbutton", { name: /vacuum/ });
  await expect(rotation).toHaveValue("3");
  await expect(rotation).toHaveAttribute("aria-disabled", "true");
  await expect(schedule.getByLabel("Vacuum level for Kitchen")).toHaveValue("heavy_duty");
  await expect(schedule.getByLabel("Vacuum level for Kitchen")).toHaveAttribute("aria-disabled", "true");
  const turnOff = schedule.getByRole("button", { name: "Turn off the vacuum rotation in Kitchen", exact: true });
  await expect(turnOff).toHaveText("Turn off");
  await turnOff.click();
  await expect(schedule.getByRole("radio", { name: "In this plan only", exact: true, includeHidden: true })).toBeChecked();
  await expect(rotation).toHaveValue("");
  await panel.getByRole("button", { name: "Save", exact: true }).click();
  await expect.poll(() => page.evaluate(() => window.__panelFixture.serviceCalls.length)).toBe(1);
  const calls = await page.evaluate(() => window.__panelFixture.serviceCalls);
  expect(calls[0].data.rooms[0]).toMatchObject({
    cleaning_mode: "mop", coverage_setting: "standard",
    cadence: cadence("plan", null, null, null),
  });
});
