import { expect, test } from "@playwright/test";
import { build } from "esbuild";

// room-schedule.md: the pure schedule model (plan-cadence.ts), tested through
// an esbuild-bundled harness route, then the Schedule block in the gallery.

async function loadHarness(page) {
  const bundle = await build({
    stdin: {
      contents: 'export * from "./frontend/map-studio-v4/plan-cadence"; export { translate } from "./frontend/map-studio-v4/localize"; export { createGalleryState } from "./frontend/map-studio-v4/gallery-state";',
      resolveDir: process.cwd(),
    },
    bundle: true, format: "esm", write: false,
  });
  await page.route("**/room-schedule-test.js", (route) => route.fulfill({ contentType: "text/javascript", body: bundle.outputFiles[0].text }));
  await page.goto("/", { waitUntil: "domcontentloaded" });
}

const GALLERY_TAG = "matic-map-studio-gallery-v0-4-0";

async function loadGallery(page, { scenario = "ready", narrow = false } = {}) {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.evaluate(async () => {
    window.__galleryModule = await import("/map_studio_v4-review/review.js");
  });
  await page.evaluate(async ({ tag, selectedScenario, selectedNarrow }) => {
    await customElements.whenDefined(tag);
    const gallery = document.createElement(tag);
    gallery.controls = false;
    gallery.scenario = selectedScenario;
    gallery.narrow = selectedNarrow;
    document.body.style.margin = "0";
    document.body.append(gallery);
  }, { tag: GALLERY_TAG, selectedScenario: scenario, selectedNarrow: narrow });
  return page.locator(GALLERY_TAG);
}

const snapshot = (page) => page.evaluate((tag) => document.querySelector(tag).getWorkspaceSnapshot(), GALLERY_TAG);

// Merges `patch` (a function source over the snapshot) into the gallery's state.
const patchState = (page, source) => page.evaluate(({ tag, source }) => {
  const element = document.querySelector(tag);
  element.replaceWorkspaceState(new Function("s", `return (${source})`)(element.getWorkspaceSnapshot()));
}, { tag: GALLERY_TAG, source });

// The deepest focused element's accessible name.
const focusedName = (page) => page.evaluate(() => {
  let active = document.activeElement;
  while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement;
  return active?.getAttribute("aria-label") ?? active?.localName;
});

// Evaluates `body` in the page with m (the harness module), t (the fallback
// translator), p (a policy), g (progress), room (a draft room) and input (a
// ScheduleInput: cadence, saved room, progress, catalog room, extra fields).
const run = (page, body) => page.evaluate(async (body) => {
  const m = await import("/room-schedule-test.js");
  const t = (key, fallback, placeholders) => m.translate(undefined, key, fallback, placeholders);
  const p = (patch = {}) => ({ scope: "plan", mopEveryN: null, coverageEveryN: null, periodicCoverageSetting: null, doMopNext: false, doCoverageNext: false, ...patch });
  const g = (patch = {}) => ({ mopProgress: 0, coverageProgress: 0, mopDue: false, coverageDue: false, nextMopIn: null, nextCoverageIn: null, reasons: [], ...patch });
  const room = (cadence, cadenceProgress, extra = {}) => ({ roomId: "a", cleaningMode: "vacuum", coverageSetting: "standard", ...(cadence ? { cadence } : {}), ...(cadenceProgress ? { cadenceProgress } : {}), ...extra });
  const input = (cadence, saved, progress, catalogRoom, extra = {}) => ({ room: room(cadence, progress, extra.room), saved, catalogRoom, name: "Kitchen", offLevel: null, ...extra.input });
  return new Function("m", "t", "p", "g", "room", "input", body)(m, t, p, g, room, input);
}, body);

test.describe("room schedule model", () => {
  test.beforeEach(({ page }) => loadHarness(page));

  test("snaps typed input and steps to Off and back", async ({ page }) => {
    expect(await run(page, `return [["e",true,4],["",false,4],["0",false,4],["-1",false,4],["250",false,4],["2.5",false,4],["7",false,null],[" 3 ",false,null]].map(([r,b,c]) => m.snapInterval(r,b,c));`))
      .toEqual([4, null, 1, 1, 100, 3, 7, 3]);
    expect(await run(page, `return [[null,1],[1,-1],[null,-1],[100,1],[5,1],[5,-1]].map(([c,d]) => m.stepInterval(c,d));`))
      .toEqual([1, null, null, 100, 6, 4]);
  });

  test("status lines follow the server's next clean", async ({ page }) => {
    const rows = await run(page, `
      const m1 = m.scheduleModel(t, "en", input(p({ mopEveryN: 3 }), room(p({ mopEveryN: 3 })), g({ nextMopIn: 2 })));
      const m2 = m.scheduleModel(t, "en", input(p({ mopEveryN: 4 }), room(p({ mopEveryN: 3 })), g({ nextMopIn: 2 })));
      const m3 = m.scheduleModel(t, "en", input(p({ mopEveryN: 1, coverageEveryN: 5, periodicCoverageSetting: "quick", doCoverageNext: true }), undefined, g({ nextMopIn: 1, nextCoverageIn: 1 })));
      const m4 = m.scheduleModel(t, "en", input(p({ mopEveryN: 3 }), room(p({ mopEveryN: 3 })), g({ nextMopIn: 1 })));
      const m5 = m.scheduleModel(t, "en", input(p({ scope: "shared", mopEveryN: 3 }), room(p({ mopEveryN: 3 })), g({ nextMopIn: 2 })));
      const m6 = m.scheduleModel(t, "en", input(p({ mopEveryN: 3 }), undefined, undefined));
      return [m1.mop.status, m1.mop.label, m2.mop.status, m3.mop.status, m3.coverage.status, m3.coverage.label, m3.next?.label,
        m4.mop.status, m5.mop.status, m6.mop.status, m6.coverage.status, m6.coverage.label, m3.mop.label];`);
    expect(rows).toEqual(["Due in 2 cleans", "Mop every 3 cleans", "Keeps the progress so far", "Due every clean", "Due next clean",
      "Quick vacuum every 5 cleans", "Quick vacuum on the next clean", "Due next clean", null, null, "Not scheduled", "Heavy duty vacuum", "Mop every clean"]);
  });

  test("joins a shared schedule with its exact values, read-only until Save", async ({ page }) => {
    const result = await run(page, `
      const shared = p({ scope: "shared", mopEveryN: 3, coverageEveryN: 2, periodicCoverageSetting: "heavy_duty" });
      const catalogRoom = { roomId: "a", name: "Kitchen", sharedCadence: shared, sharedCadenceProgress: g({ nextMopIn: 2, nextCoverageIn: 1 }) };
      const saved = room(p());
      const off = input(undefined, room(), undefined, catalogRoom);
      const offModel = m.scheduleModel(t, "en", off);
      const joined = m.withInterval(off, "mop", 5);
      const joining = input(joined, room(), undefined, catalogRoom);
      const joinModel = m.scheduleModel(t, "en", joining);
      const privateOff = input(p(), saved, undefined, catalogRoom);
      return {
        hint: offModel.sharedHint, scope: offModel.scope, joined,
        joinPending: joinModel.joinPending, statuses: [joinModel.mop.status, joinModel.coverage.status],
        explanation: joinModel.explanation, hintWhileJoining: joinModel.sharedHint,
        duringJoin: m.withInterval(joining, "mop", 7), level: m.withLevel(joining, "quick"), next: m.withNextClean(joining, true),
        leave: m.withScope(joining, "plan"), rejoin: m.withScope(off, "shared"),
        privateHint: m.scheduleModel(t, "en", privateOff).sharedHint,
        privateOn: m.withInterval(privateOff, "mop", 4),
      };`);
    const shared = { scope: "shared", mopEveryN: 3, coverageEveryN: 2, periodicCoverageSetting: "heavy_duty", doMopNext: false, doCoverageNext: false };
    expect(result).toEqual({
      hint: true, scope: "shared", joined: shared,
      joinPending: true, statuses: ["Due in 2 cleans", "Due next clean"],
      explanation: "Saving shares this room's progress with every plan that uses it, picking up any progress already counted.",
      hintWhileJoining: false,
      duringJoin: null, level: null, next: null,
      leave: { ...shared, scope: "plan" }, rejoin: shared,
      privateHint: false,
      privateOn: { ...shared, scope: "plan", mopEveryN: 4, coverageEveryN: null, periodicCoverageSetting: null },
    });
  });

  test("a room that uses the shared schedule edits it in place", async ({ page }) => {
    const result = await run(page, `
      const shared = p({ scope: "shared", mopEveryN: 3 });
      const catalogRoom = { roomId: "a", name: "Kitchen", sharedCadence: shared };
      const model = m.scheduleModel(t, "en", input(shared, room(shared), g({ nextMopIn: 2 }), catalogRoom));
      const left = m.scheduleModel(t, "en", input({ ...shared, scope: "plan" }, room(shared), g({ nextMopIn: 2 }), catalogRoom));
      return [model.sharedHint, model.joinPending, model.participating, model.explanation,
        m.withInterval(input(shared, room(shared), undefined, catalogRoom), "mop", 4)?.mopEveryN, left.explanation, left.mop.status];`);
    expect(result).toEqual([false, false, true, "Changes apply to every plan that uses Kitchen's shared schedule.", 4,
      "Saving starts new progress for this plan only, and other plans keep the shared schedule.", null]);
  });

  test("a new rotation is Heavy duty unless a level was chosen while Off", async ({ page }) => {
    const result = await run(page, `
      const quickRoom = { room: { coverageSetting: "quick" } };
      const plain = input(undefined, undefined, undefined, undefined, quickRoom);
      const chosen = input(undefined, undefined, undefined, undefined, { ...quickRoom, input: { offLevel: "quick" } });
      return [m.withInterval(plain, "coverage", 2), m.withInterval(chosen, "coverage", 2).periodicCoverageSetting,
        m.withLevel(plain, "standard"), m.scheduleModel(t, "en", chosen).coverage.label,
        m.withLevel(input(p({ coverageEveryN: 2, periodicCoverageSetting: "heavy_duty", mopEveryN: 3 })), "quick"),
        m.withInterval(input(p({ coverageEveryN: 2, periodicCoverageSetting: "quick", doCoverageNext: true })), "coverage", null)];`);
    expect(result).toEqual([
      { scope: "shared", mopEveryN: null, coverageEveryN: 2, periodicCoverageSetting: "heavy_duty", doMopNext: false, doCoverageNext: false },
      "quick", null, "Quick vacuum",
      { scope: "plan", mopEveryN: 3, coverageEveryN: 2, periodicCoverageSetting: "quick", doMopNext: false, doCoverageNext: false },
      { scope: "plan", mopEveryN: null, coverageEveryN: null, periodicCoverageSetting: "quick", doMopNext: false, doCoverageNext: false },
    ]);
  });

  test("the next-clean switch names only work it can bring forward", async ({ page }) => {
    const result = await run(page, `
      const policy = p({ mopEveryN: 3, coverageEveryN: 5, periodicCoverageSetting: "heavy_duty" });
      const dueMop = input(policy, room(policy), g({ nextMopIn: 1, nextCoverageIn: 4 }));
      const neither = input(policy, room(policy), g({ nextMopIn: 2, nextCoverageIn: 4 }));
      const everyClean = input(p({ mopEveryN: 1, coverageEveryN: 5, periodicCoverageSetting: "quick" }), undefined, g({ nextMopIn: 1, nextCoverageIn: 1 }));
      const flagged = p({ ...policy, doMopNext: true });
      const on = input(flagged, room(flagged), g({ nextMopIn: 1, nextCoverageIn: 1 }));
      const mopOff = m.withInterval(on, "mop", null);
      return {
        dueMop: m.scheduleModel(t, "en", dueMop).next, dueMopOn: m.withNextClean(dueMop, true),
        neither: m.scheduleModel(t, "en", neither).next.label,
        everyClean: m.scheduleModel(t, "en", everyClean).next, everyCleanSwitch: m.withNextClean(everyClean, true),
        on: m.scheduleModel(t, "en", on).next, onStatus: m.scheduleModel(t, "en", on).mop.status, off: m.withNextClean(on, false),
        mopOff: [mopOff.mopEveryN, mopOff.doMopNext],
      };`);
    expect(result).toEqual({
      dueMop: { label: "Heavy duty vacuum on the next clean", on: false, mop: false, coverage: true },
      dueMopOn: expect.objectContaining({ doMopNext: false, doCoverageNext: true }),
      neither: "Mop and heavy duty vacuum on the next clean",
      everyClean: null, everyCleanSwitch: null,
      on: { label: "Mop on the next clean", on: true, mop: true, coverage: false },
      onStatus: "Due next clean",
      off: expect.objectContaining({ doMopNext: false, doCoverageNext: false }),
      mopOff: [null, false],
    });
  });

  test("row and room reasons", async ({ page }) => {
    const result = await run(page, `
      const unverified = m.scheduleModel(t, "en", input(p({ mopEveryN: 3 }), undefined, undefined, undefined,
        { room: { cleaningMode: "vacuum", cadenceReasons: ["mop_progress_unverified", "coverage_progress_unverified", "identity_changed"] } }));
      const mopMode = m.scheduleModel(t, "en", input(p(), undefined, undefined, undefined, { room: { cleaningMode: "mop" } }));
      const legacy = m.scheduleModel(t, "en", input(p({ coverageEveryN: 3, periodicCoverageSetting: "heavy_duty" }), undefined, undefined, undefined, { room: { cleaningMode: "mop" } }));
      const both = m.scheduleModel(t, "en", input(p(), undefined, undefined, undefined, { room: { cleaningMode: "vacuum_and_mop" } }));
      const offMap = m.scheduleModel(t, "en", input(p(), undefined, undefined, undefined, { room: { cadenceReasons: ["room_not_on_current_map"] } }));
      const invalid = m.scheduleModel(t, "en", input(p(), undefined, undefined, undefined, { room: { cadenceReasons: ["invalid_cadence_policy"] } }));
      return {
        unverified: [unverified.mop.reason, unverified.mop.unverified, unverified.mop.blocked, unverified.coverage.reason, unverified.coverage.unverified, unverified.roomReason],
        mopMode: [mopMode.mop.reason, mopMode.mop.blocked, mopMode.coverage.reason, mopMode.coverage.blocked, mopMode.legacyCoverage],
        legacy: [legacy.coverage.reason, legacy.coverage.blocked, legacy.legacyCoverage],
        both: [both.mop.blocked, both.coverage.blocked],
        offMap: offMap.roomReason, invalid: invalid.roomReason,
        turnOff: m.withoutLegacyCoverage(p({ scope: "shared", coverageEveryN: 3, periodicCoverageSetting: "heavy_duty", doCoverageNext: true })),
      };`);
    expect(result).toEqual({
      unverified: ["Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.", true, false,
        "Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.", true,
        "Can't run this plan until you review Kitchen's schedule on this map."],
      mopMode: ["Can't add a mop schedule until this room's cleaning mode is Vacuum.", true,
        "Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.", true, false],
      legacy: ["The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off.", true, true],
      both: [true, false],
      offMap: "Can't run this plan until Kitchen is on the current map or removed from the plan.",
      invalid: "Can't run this plan until you fix Kitchen's schedule.",
      turnOff: { scope: "plan", mopEveryN: null, coverageEveryN: null, periodicCoverageSetting: null, doMopNext: false, doCoverageNext: false },
    });
  });

  test("explanations in order", async ({ page }) => {
    const result = await run(page, `
      const e = (cadence, saved) => m.scheduleModel(t, "en", input(cadence, saved)).explanation;
      return [
        e(p({ scope: "shared", mopEveryN: 3 }), undefined),
        e(p({ mopEveryN: 3 }), room()),
        e(p({ mopEveryN: 3 }), room(p({ mopEveryN: 2 }))),
        e(p({ mopEveryN: 3 }), room(p({ mopEveryN: 3 }))),
        e(undefined, undefined),
      ];`);
    expect(result).toEqual([
      "Saving creates a schedule shared by every plan that uses this room, starting from zero.",
      "Saving starts progress for this plan only, from zero.",
      "Changing how often keeps the progress, and turning a schedule off pauses it.",
      null,
      null,
    ]);
  });

  test("Reset offers only saved progress and says why it can't run", async ({ page }) => {
    const result = await run(page, `
      const r = (saved) => m.scheduleModel(t, "en", input(p({ mopEveryN: 3, coverageEveryN: 2 }), saved)).resettable;
      const state = m.createGalleryState("plan-cadence-shared");
      return {
        none: r(undefined), zero: r(room(p({ mopEveryN: 3 }), g())), counted: r(room(p({ mopEveryN: 3 }), g({ mopProgress: 1 }))),
        flagged: r(room(p({ coverageEveryN: 2, doCoverageNext: true }))), unverified: r(room(p(), undefined, { cadenceReasons: ["coverage_progress_unverified"] })),
        idle: m.resetBlock(t, state),
        dirty: m.resetBlock(t, { ...state, planDraft: { ...state.planDraft, dirty: true } }),
        busy: m.resetBlock(t, { ...state, activity: "cleaning" }),
        history: m.resetBlock(t, { ...state, dataMode: "history" }),
        command: m.resetBlock(t, { ...state, command: "pending" }),
      };`);
    const busy = "Can't reset until the robot is idle and the map is live.";
    expect(result).toEqual({
      none: { mop: false, coverage: false }, zero: { mop: false, coverage: false }, counted: { mop: true, coverage: false },
      flagged: { mop: false, coverage: true }, unverified: { mop: false, coverage: true },
      idle: null, dirty: "Can't reset until you save or cancel your changes.", busy, history: busy, command: busy,
    });
  });
});

test.describe("Schedule block", () => {
  test("rows step, snap, turn Off and keep the rotation level", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    const gallery = await loadGallery(page, { scenario: "plan-cadence-shared" });
    const schedule = gallery.getByRole("group", { name: "Room schedule for Kitchen" });
    await expect(schedule.getByRole("heading", { level: 3, name: "Schedule" })).toBeVisible();
    const mop = schedule.getByRole("spinbutton", { name: /^Mop/ });
    const rotation = schedule.getByRole("spinbutton", { name: /vacuum/ });
    await expect(schedule.getByRole("spinbutton", { name: /^Mop every 3 cleans$/ })).toHaveValue("3");
    await expect(mop).toHaveAccessibleDescription("Due in 2 cleans");
    await expect(schedule.getByRole("spinbutton", { name: "Heavy duty vacuum every 2 cleans" })).toHaveValue("2");
    await expect(rotation).toHaveAccessibleDescription("Due next clean");
    const level = schedule.getByRole("combobox", { name: "Vacuum level for Kitchen" });
    await expect(level).toHaveValue("heavy_duty");

    await schedule.getByRole("button", { name: "Increase Mop every 3 cleans" }).click();
    await expect(mop).toHaveValue("4");
    await expect(schedule.getByText("Mop every 4 cleans", { exact: true })).toBeVisible();
    await expect(mop).toHaveAccessibleDescription("Keeps the progress so far");
    expect((await snapshot(page)).planDraft.rooms[0].cadence.mopEveryN).toBe(4);

    await mop.fill("250");
    await mop.press("Enter");
    await expect(mop).toHaveValue("100");
    const increase = schedule.getByRole("button", { name: "Increase Mop every 100 cleans" });
    await expect(increase).toHaveAttribute("aria-disabled", "true");
    await expect(increase).toHaveAccessibleDescription("Every 100 cleans is the longest schedule.");
    await increase.focus();
    await page.keyboard.press("Enter");
    await expect(mop).toHaveValue("100");
    expect(await focusedName(page)).toBe("Increase Mop every 100 cleans");

    const dirty = (await snapshot(page)).planDraft.dirty;
    await mop.fill("");
    await mop.pressSequentially("e");
    await mop.press("Enter");
    await mop.blur();
    await expect(mop).toHaveValue("100");
    expect((await snapshot(page)).planDraft.dirty).toBe(dirty);
    expect((await snapshot(page)).planDraft.rooms[0].cadence.mopEveryN).toBe(100);

    await mop.fill("");
    await mop.press("Tab");
    const off = schedule.getByRole("spinbutton", { name: "Mop", exact: true });
    await expect(off).toHaveValue("");
    await expect(off).toHaveAttribute("placeholder", "Off");
    await expect(off).toHaveAccessibleDescription("Not scheduled");
    const decrease = schedule.getByRole("button", { name: "Decrease Mop", exact: true });
    await expect(decrease).toHaveAttribute("aria-disabled", "true");
    await expect(decrease).toHaveAccessibleDescription("This schedule is already off.");

    await level.selectOption("quick");
    expect((await snapshot(page)).planDraft.rooms[0].cadence.periodicCoverageSetting).toBe("quick");
    await expect(schedule.getByRole("spinbutton", { name: "Quick vacuum every 2 cleans" })).toBeVisible();
    await rotation.fill("");
    await rotation.press("Tab");
    const before = (await snapshot(page)).planDraft;
    await level.selectOption("standard");
    await expect(schedule.getByRole("spinbutton", { name: "Optimal vacuum", exact: true })).toBeVisible();
    expect((await snapshot(page)).planDraft).toEqual(before);
    await schedule.getByRole("button", { name: "Increase Optimal vacuum", exact: true }).click();
    expect((await snapshot(page)).planDraft.rooms[0].cadence).toMatchObject({ coverageEveryN: 1, periodicCoverageSetting: "standard" });
    await expect(schedule.getByRole("spinbutton", { name: "Optimal vacuum every clean" })).toHaveAccessibleDescription("Due every clean");
  });

  test("a new vacuum rotation is Heavy duty whatever the room's coverage", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    const gallery = await loadGallery(page, { scenario: "plan-cadence-shared" });
    await gallery.getByRole("button", { name: "Settings for Living room", exact: true }).click();
    const schedule = gallery.getByRole("group", { name: "Room schedule for Living room" });
    await schedule.getByRole("button", { name: "Increase Heavy duty vacuum", exact: true }).click();
    const state = await snapshot(page);
    expect(state.planDraft.rooms[1].coverageSetting).toBe("standard");
    expect(state.planDraft.rooms[1].cadence).toEqual({
      scope: "shared", mopEveryN: null, coverageEveryN: 1, periodicCoverageSetting: "heavy_duty", doMopNext: false, doCoverageNext: false,
    });
  });

  test("mode conflicts hold their control with one reason", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    const gallery = await loadGallery(page, { scenario: "plan-schedule-conflict" });
    const schedule = gallery.getByRole("group", { name: "Room schedule for Kitchen" });
    const mop = schedule.getByRole("spinbutton", { name: "Mop", exact: true });
    await expect(mop).toHaveAttribute("aria-disabled", "true");
    await expect(mop).toHaveAccessibleDescription("Can't add a mop schedule until this room's cleaning mode is Vacuum.");
    const increase = schedule.getByRole("button", { name: "Increase Mop", exact: true });
    await expect(increase).toHaveAccessibleDescription("Can't add a mop schedule until this room's cleaning mode is Vacuum.");
    await increase.click({ force: true });
    expect((await snapshot(page)).planDraft.dirty).toBe(false);
    const rotation = schedule.getByRole("spinbutton", { name: "Heavy duty vacuum every 3 cleans" });
    await expect(rotation).toHaveAttribute("aria-disabled", "true");
    await expect(rotation).toHaveAccessibleDescription("The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off.");
    const turnOff = schedule.getByRole("button", { name: "Turn off the vacuum rotation in Kitchen", exact: true });
    await expect(turnOff).toHaveText("Turn off");
    await turnOff.click();
    expect((await snapshot(page)).planDraft.rooms[0].cadence).toEqual({
      scope: "plan", mopEveryN: null, coverageEveryN: null, periodicCoverageSetting: null, doMopNext: false, doCoverageNext: false,
    });

    const shared = await loadGallery(page, { scenario: "plan-cadence-shared" });
    await expect(shared.getByRole("combobox", { name: "Cleaning mode for Kitchen" }))
      .toHaveAccessibleDescription("Can't change the cleaning mode until the mop schedule is off.");
  });

  test("a save in flight holds every schedule control", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    const gallery = await loadGallery(page, { scenario: "plan-cadence-shared" });
    await patchState(page, `{ ...s, command: "pending", pendingAction: "save-plan" }`);
    const schedule = gallery.getByRole("group", { name: "Room schedule for Kitchen" });
    const controls = schedule.locator(".ms-stepper button, .ms-stepper input, .sched-row select");
    await expect(controls).toHaveCount(7);
    for (const control of await controls.all()) await expect(control).toHaveAttribute("aria-disabled", "true");
    const before = (await snapshot(page)).planDraft;
    await schedule.getByRole("button", { name: "Increase Mop every 3 cleans" }).click({ force: true });
    await schedule.getByRole("spinbutton", { name: /^Mop/ }).fill("9", { force: true });
    await schedule.getByRole("spinbutton", { name: /^Mop/ }).press("Enter");
    // A held select still opens natively; its change shows the draft's value again.
    await schedule.getByRole("combobox", { name: "Vacuum level for Kitchen" }).evaluate((select) => {
      select.value = "quick";
      select.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await expect(schedule.getByRole("combobox", { name: "Vacuum level for Kitchen" })).toHaveValue("heavy_duty");
    expect((await snapshot(page)).planDraft).toEqual(before);
    await expect(schedule.getByRole("spinbutton", { name: /^Mop/ })).toHaveValue("3");
  });

  for (const [width, height, narrow, shared] of [[390, 844, true, true], [360, 844, true, false], [320, 844, true, false], [1024, 768, false, false]]) {
    test(`the level select and stepper ${shared ? "share" : "stack"} their line at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      const gallery = await loadGallery(page, { scenario: "plan-cadence-shared", narrow });
      const schedule = gallery.getByRole("group", { name: "Room schedule for Kitchen" });
      // The sheet settles at its detent first, so both boxes are read in one frame.
      await schedule.evaluate(async (element) => {
        const root = element.getRootNode();
        let host = root.host;
        while (host?.getRootNode() instanceof ShadowRoot) host = host.getRootNode().host;
        await Promise.all((host ?? document).getAnimations({ subtree: true }).map((animation) => animation.finished.catch(() => undefined)));
      });
      const [select, stepper] = await schedule.evaluate((element) => [
        element.querySelector(".sched-level").getBoundingClientRect().toJSON(),
        element.querySelectorAll(".ms-stepper")[1].getBoundingClientRect().toJSON(),
      ]);
      if (shared) expect(Math.abs(stepper.y - select.y)).toBeLessThanOrEqual(2);
      else expect(stepper.y).toBeGreaterThanOrEqual(select.y + select.height);
      for (const target of await schedule.locator(".ms-stepper button, .ms-stepper input, .sched-row select").all()) {
        const box = await target.boundingBox();
        expect(box.width).toBeGreaterThanOrEqual(44);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    });
  }
});
