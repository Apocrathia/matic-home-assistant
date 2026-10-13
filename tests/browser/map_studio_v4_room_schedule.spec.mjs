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
