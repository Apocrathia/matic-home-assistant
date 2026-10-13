// UX4 Home and rooms (docs/ux-spec-0.5/home-rooms.md; D1-D5 accepted
// 2026-10-11). Home gets one heading per state and three task cards, Rooms a
// settings disclosure, check lines and `.ms-check` rows, and the narrow
// Display group moves into Map options.
import { expect, test } from "@playwright/test";
import { build } from "esbuild";

const GALLERY_TAG = "matic-map-studio-gallery-v0-4-0";
const HARNESS = "/home-rooms-test.js";

async function loadGallery(page, { scenario = "ready", narrow = false, viewport = null } = {}) {
  if (viewport) await page.setViewportSize(viewport);
  else if (narrow) await page.setViewportSize({ width: 390, height: 844 });
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

// The store and gallery fixtures, bundled from source, for reducer-level
// assertions that need no rendering.
async function loadStoreHarness(page) {
  const bundle = await build({
    stdin: {
      contents: 'export { WorkspaceStore, selectPrimaryAction, canSelectRooms } from "./frontend/map-studio-v4/state"; export { createGalleryState, withGalleryRoomPreview } from "./frontend/map-studio-v4/gallery-state";',
      resolveDir: process.cwd(),
    },
    bundle: true, format: "esm", write: false,
  });
  await page.route(`**${HARNESS}`, (route) => route.fulfill({
    contentType: "text/javascript", body: bundle.outputFiles[0].text,
  }));
  await page.goto("/", { waitUntil: "domcontentloaded" });
}

const snapshot = (page) => page.evaluate((tag) => document.querySelector(tag).getWorkspaceSnapshot(), GALLERY_TAG);

const patchState = (gallery, patch) => gallery.evaluate((element, applied) => {
  element.replaceWorkspaceState({ ...element.getWorkspaceSnapshot(), ...applied });
}, patch);

const recordActions = (page) => page.evaluate((tag) => {
  const element = document.querySelector(tag);
  element.__actions = [];
  element.addEventListener("matic-workspace-action", (event) => element.__actions.push(event.detail));
}, GALLERY_TAG);

const actions = (page) => page.evaluate((tag) => document.querySelector(tag).__actions, GALLERY_TAG);

const twoRooms = (state, activity = state.activity) => ({
  ...state,
  activity,
  selection: {
    ...state.selection,
    roomIds: ["room-a", "room-b"],
    roomSettings: [
      { roomId: "room-a", cleaningMode: "vacuum", coverageSetting: "standard" },
      { roomId: "room-b", cleaningMode: "vacuum", coverageSetting: "standard" },
    ],
  },
});

test.describe("plan origin (home-rooms.md §5 Cards D1; plan.md §5 State)", () => {
  test("a plan opened from home returns to home, one opened from the picker returns to the picker", async ({ page }) => {
    await loadStoreHarness(page);
    const result = await page.evaluate(async (harness) => {
      const { WorkspaceStore, createGalleryState } = await import(harness);
      const store = new WorkspaceStore(createGalleryState("ready"));
      const out = {};
      store.dispatch({ type: "select-plan", planId: "daily", origin: "home" });
      out.fromHome = [store.value.planOrigin, store.value.planView, store.value.workflow];
      store.dispatch({ type: "select-plan", planId: "daily" });
      out.reselectKeeps = store.value.planOrigin;
      store.dispatch({ type: "set-plan-view", view: "edit" });
      store.dispatch({ type: "dismiss-top-layer" });
      out.afterEditBack = [store.value.planView, store.value.planOrigin];
      store.dispatch({ type: "dismiss-top-layer" });
      out.homeBack = [store.value.workflow, store.value.planOrigin];
      store.dispatch({ type: "open-workflow", workflow: "plans" });
      store.dispatch({ type: "select-plan", planId: "daily" });
      out.fromPicker = store.value.planOrigin;
      store.dispatch({ type: "dismiss-top-layer" });
      out.pickerBack = store.value.workflow;
      store.dispatch({ type: "open-workflow", workflow: "none" });
      store.dispatch({ type: "select-plan", planId: "daily" });
      out.defaultOrigin = store.value.planOrigin;
      return out;
    }, HARNESS);
    expect(result.fromHome).toEqual(["home", "run", "plan"]);
    expect(result.reselectKeeps).toBe("home");
    expect(result.afterEditBack).toEqual(["run", "home"]);
    expect(result.homeBack).toEqual(["none", "plans"]);
    expect(result.fromPicker).toBe("plans");
    expect(result.pickerBack).toBe("plans");
    expect(result.defaultOrigin).toBe("plans");
  });

  test("Back from Run names and reaches the origin", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "plan-saved-intelligent" });
    await patchState(gallery, { planOrigin: "home" });
    const toHome = gallery.getByRole("button", { name: "Back to all tasks" });
    await expect(toHome).toBeVisible();
    await expect(toHome).toContainText("All tasks");
    await toHome.click();
    expect((await snapshot(page)).workflow).toBe("none");

    await patchState(gallery, { workflow: "plan", planView: "run", planOrigin: "plans" });
    const toPlans = gallery.getByRole("button", { name: "Back to plans" });
    await expect(toPlans).toBeVisible();
    await expect(toPlans).toContainText("Your plans");
    await toPlans.click();
    expect((await snapshot(page)).workflow).toBe("plans");
  });
});

test.describe("whole-clean settings (home-rooms.md §5 Settings, Selection gate)", () => {
  test("a whole-clean change becomes the default and rewrites every selected room", async ({ page }) => {
    await loadStoreHarness(page);
    const result = await page.evaluate(async (harness) => {
      const { WorkspaceStore, createGalleryState } = await import(harness);
      const store = new WorkspaceStore({ ...createGalleryState("rooms") });
      const out = {};
      store.dispatch({ type: "set-clean-settings", cleaningMode: "vacuum_and_mop" });
      store.dispatch({ type: "set-clean-settings", coverageSetting: "quick" });
      store.dispatch({ type: "toggle-room", roomId: "room-a" });
      out.newRoom = store.value.selection.roomSettings.find((room) => room.roomId === "room-a");
      store.dispatch({ type: "toggle-room", roomId: "room-b" });
      store.dispatch({ type: "patch-room-settings", roomId: "room-b", cleaningMode: "mop" });
      store.dispatch({ type: "set-clean-settings", coverageSetting: "heavy_duty" });
      out.rewritten = store.value.selection.roomSettings.map((room) => [room.roomId, room.cleaningMode, room.coverageSetting]);
      store.dispatch({ type: "clear-selection" });
      out.afterClear = [store.value.selection.roomIds.length, store.value.selection.cleaningMode, store.value.selection.coverageSetting];
      return out;
    }, HARNESS);
    expect(result.newRoom).toEqual({ roomId: "room-a", cleaningMode: "vacuum_and_mop", coverageSetting: "quick" });
    expect(result.rewritten).toEqual([
      ["room-a", "vacuum_and_mop", "heavy_duty"],
      ["room-b", "vacuum_and_mop", "heavy_duty"],
    ]);
    expect(result.afterClear).toEqual([0, "vacuum_and_mop", "heavy_duty"]);
  });

  test("every rooms intent is refused while the selection is locked", async ({ page }) => {
    await loadStoreHarness(page);
    const result = await page.evaluate(async (harness) => {
      const { WorkspaceStore, createGalleryState, canSelectRooms } = await import(harness);
      const base = createGalleryState("rooms");
      const locked = {
        ...base,
        activity: "cleaning",
        selection: {
          ...base.selection,
          roomIds: ["room-a", "room-b"],
          roomSettings: [
            { roomId: "room-a", cleaningMode: "vacuum", coverageSetting: "standard" },
            { roomId: "room-b", cleaningMode: "vacuum", coverageSetting: "standard" },
          ],
        },
      };
      const store = new WorkspaceStore(locked);
      const before = JSON.stringify(store.value.selection);
      const results = {};
      for (const intent of [
        { type: "toggle-room", roomId: "room-c" },
        { type: "toggle-room", roomId: "room-a" },
        { type: "patch-room-settings", roomId: "room-a", cleaningMode: "mop" },
        { type: "set-clean-settings", cleaningMode: "mop", coverageSetting: "quick" },
        { type: "set-use-room-schedule", value: false },
        { type: "clear-selection" },
      ]) {
        store.dispatch(intent);
        results[intent.type] = JSON.stringify(store.value.selection) === before;
      }
      return { gate: canSelectRooms(locked), results };
    }, HARNESS);
    expect(result.gate).toBe(false);
    expect(result.results).toEqual({
      "toggle-room": true,
      "patch-room-settings": true,
      "set-clean-settings": true,
      "set-use-room-schedule": true,
      "clear-selection": true,
    });
  });

  test("a refused add at the limit raises the limit notice", async ({ page }) => {
    await loadStoreHarness(page);
    const result = await page.evaluate(async (harness) => {
      const { WorkspaceStore, createGalleryState } = await import(harness);
      const store = new WorkspaceStore(createGalleryState("room-limit"));
      store.dispatch({ type: "toggle-room", roomId: "room-extra" });
      const { notice } = store.value;
      return {
        count: store.value.selection.roomIds.length,
        notice: notice && { tone: notice.tone, key: notice.key, placeholders: notice.placeholders },
      };
    }, HARNESS);
    expect(result.count).toBe(100);
    expect(result.notice).toEqual({ tone: "info", key: "v4_room_limit_reached", placeholders: { limit: 100 } });
  });
});

test.describe("no robot (home-rooms.md §4 H10, D2)", () => {
  for (const narrow of [true, false]) {
    test(`the primary action is a link to the integration page (narrow: ${narrow})`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario: "empty", narrow });
      const link = gallery.locator(".action-bar").getByRole("link", { name: "Open integration" });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", "/config/integrations/integration/matic_robot");
      await expect(link).toHaveClass(/ms-btn--primary/);
      await expect(gallery.getByRole("link", { name: "Open integration" })).toHaveCount(1);
      await expect(gallery.locator(".action-bar button")).toHaveCount(0);
      await recordActions(page);
      await link.evaluate((element) => element.addEventListener("click", (event) => event.preventDefault()));
      await link.click();
      expect(await actions(page)).toEqual([]);
    });
  }
});
