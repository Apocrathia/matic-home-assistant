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

// ---- Home by state (home-rooms.md §3 Home, §4 H1-H11) ----------------------

const panelOf = (gallery) => gallery.getByRole("complementary", { name: "Cleaning panel" });
const homeReason = (gallery) => gallery.locator("#home-reason");
const cards = (gallery) => gallery.getByRole("group", { name: "Cleaning choices" }).getByRole("button");
const mapsRows = (gallery) => gallery.locator(".maps .ms-row");
const LOCATING = "Waiting for the robot to confirm which floor it is on.";
const BUSY = "You can start a new clean when it's done.";

test.describe("home by state", () => {
  for (const narrow of [true, false]) {
    test(`ready: one heading, three cards, Maps and no idle action bar (narrow: ${narrow})`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario: "ready", narrow });
      await expect(gallery.getByRole("heading", { name: "Choose what to clean", level: 2 })).toBeVisible();
      await expect(panelOf(gallery).locator(".panel-description")).toHaveCount(0);
      const group = gallery.getByRole("group", { name: "Cleaning choices" });
      await expect(group.getByRole("button")).toHaveCount(3);
      await expect(cards(gallery).nth(0)).toHaveAccessibleName(/^Clean rooms Pick rooms and clean them now\./);
      await expect(cards(gallery).nth(0)).toHaveClass(/ms-row--featured/);
      await expect(cards(gallery).nth(1)).toHaveAccessibleName(/^Run (a plan|Daily clean)/);
      await expect(cards(gallery).nth(2)).toHaveAccessibleName(/^Clean custom area Draw or choose a custom area/);
      await expect(gallery.getByRole("heading", { name: "Maps", level: 3 })).toBeVisible();
      await expect(mapsRows(gallery)).toHaveCount(2);
      await expect(mapsRows(gallery).nth(0)).toHaveAccessibleName(/^Map history Browse earlier floor maps\./);
      await expect(mapsRows(gallery).nth(1)).toHaveAccessibleName(/^Map diagnostics Check the map and copy details for support\./);
      await expect(panelOf(gallery).locator(".action-bar")).toHaveCount(0);
      await expect(gallery.getByRole("heading", { name: "Map tools" })).toHaveCount(0);
      // The narrow Map display group moves into Map options in Task 4.
      if (!narrow) {
        await expect(panelOf(gallery).getByRole("group", { name: "Map display" })).toHaveCount(0);
        await expect(panelOf(gallery).locator("h3")).toHaveText(["Maps"]);
      }
    });
  }

  test("ready without named rooms demotes the rooms card alone (H2)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "ready" });
    await gallery.evaluate((element) => {
      const state = element.getWorkspaceSnapshot();
      const plans = state.resources.plans.value;
      element.replaceWorkspaceState({
        ...state,
        resources: { ...state.resources, plans: { ...state.resources.plans, value: { ...plans, rooms: [], plans: [], selectedPlan: null } } },
      });
    });
    const rooms = cards(gallery).nth(0);
    await expect(rooms).toHaveAttribute("aria-disabled", "true");
    await expect(rooms).toHaveAccessibleName(/^Clean rooms Can't clean rooms until you name them in the Matic app\./);
    await expect(cards(gallery).nth(1)).not.toHaveAttribute("aria-disabled", "true");
    await expect(cards(gallery).nth(2)).not.toHaveAttribute("aria-disabled", "true");
    await expect(panelOf(gallery).locator(".panel-description")).toHaveCount(0);
  });

  test("locating keeps the heading and demotes every card with one shared reason (H3)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "transition" });
    await expect(gallery.getByRole("heading", { name: "Choose what to clean", level: 2 })).toBeVisible();
    await expect(homeReason(gallery)).toHaveText(LOCATING);
    await expect(cards(gallery)).toHaveCount(3);
    for (const index of [0, 1, 2]) {
      const card = cards(gallery).nth(index);
      await expect(card).toHaveAttribute("aria-disabled", "true");
      await expect(card).toHaveAccessibleDescription(LOCATING);
      await expect(card).not.toContainText(LOCATING);
    }
    await cards(gallery).nth(0).dispatchEvent("click");
    expect((await snapshot(page)).workflow).toBe("none");
    await expect(mapsRows(gallery).nth(0)).not.toHaveAttribute("aria-disabled", "true");
  });

  for (const scenario of ["cleaning", "returning", "recharging", "starting-command", "stopping-command", "task-in-progress"]) {
    test(`${scenario} is busy: title, one line, demoted cards, Maps enabled (H4)`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario });
      await expect(gallery.getByRole("heading", { name: "The robot is busy", level: 2 })).toBeVisible();
      await expect(homeReason(gallery)).toHaveText(BUSY);
      await expect(cards(gallery)).toHaveCount(3);
      for (const index of [0, 1, 2]) {
        await expect(cards(gallery).nth(index)).toHaveAttribute("aria-disabled", "true");
        await expect(cards(gallery).nth(index)).toHaveAccessibleDescription(BUSY);
      }
      await expect(mapsRows(gallery)).toHaveCount(2);
      await expect(mapsRows(gallery).nth(0)).not.toHaveAttribute("aria-disabled", "true");
    });
  }

  test("a busy robot puts Stop in the bar on a phone and in the strip on a desk", async ({ page }) => {
    const narrow = await loadGallery(page, { scenario: "cleaning", narrow: true });
    await expect(narrow.locator(".action-bar").getByRole("button", { name: "Stop cleaning" })).toBeVisible();
    const wide = await loadGallery(page, { scenario: "cleaning", viewport: { width: 1024, height: 768 } });
    await expect(wide.locator(".status-strip").getByRole("button", { name: "Stop cleaning" })).toBeVisible();
    await expect(panelOf(wide).locator(".action-bar")).toHaveCount(0);
  });

  test("paused says how to get back to a new clean (H5)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "paused" });
    await expect(gallery.getByRole("heading", { name: "The robot is busy", level: 2 })).toBeVisible();
    await expect(homeReason(gallery)).toHaveText("Resume or stop this clean before starting a new one.");
    await expect(gallery.getByRole("button", { name: "Resume cleaning" })).toBeVisible();
    await expect(cards(gallery).nth(1)).toHaveAttribute("aria-disabled", "true");
  });

  test("a robot problem replaces the cards with diagnostics (H7)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "problem" });
    await expect(gallery.getByRole("heading", { name: "The robot needs attention", level: 2 })).toBeVisible();
    await expect(panelOf(gallery).locator(".panel-description")).toHaveText("The robot reported a problem. Check it in the Matic app, then start a new clean.");
    await expect(gallery.getByRole("group", { name: "Cleaning choices" })).toHaveCount(0);
    await expect(panelOf(gallery).locator("h3")).toHaveCount(1);
    await expect(mapsRows(gallery).nth(0)).toHaveAccessibleName(/^Map diagnostics/);
    await expect(mapsRows(gallery).nth(1)).toHaveAccessibleName(/^Map history/);
    await panelOf(gallery).getByRole("button", { name: "Open map diagnostics" }).click();
    expect((await snapshot(page)).workflow).toBe("support");
  });

  for (const scenario of ["map-unavailable", "unsupported"]) {
    test(`${scenario}: the map reason, Try again, demoted cards and diagnostics first (H8)`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario });
      await expect(gallery.getByRole("heading", { name: "Choose what to clean", level: 2 })).toBeVisible();
      await expect(homeReason(gallery)).toHaveText("Home Assistant can't show the map right now, so cleaning can't start.");
      await expect(cards(gallery)).toHaveCount(3);
      await expect(cards(gallery).nth(0)).toHaveAttribute("aria-disabled", "true");
      await expect(mapsRows(gallery).nth(0)).toHaveAccessibleName(/^Map diagnostics/);
      await recordActions(page);
      await panelOf(gallery).getByRole("button", { name: "Try again", exact: true }).click();
      expect(await actions(page)).toEqual([{ id: "recheck-status" }]);
    });
  }

  test("a limited map keeps its line and Try again under the heading", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "map-limited" });
    await expect(gallery.getByRole("heading", { name: "Choose what to clean", level: 2 })).toBeVisible();
    await expect(homeReason(gallery)).toHaveText("Home Assistant can show this map but can't confirm it well enough to start cleaning.");
    await expect(panelOf(gallery).getByRole("button", { name: "Try again", exact: true })).toBeVisible();
    await expect(cards(gallery).nth(0)).toHaveAttribute("aria-disabled", "true");
    await expect(cards(gallery).nth(0)).toHaveAccessibleDescription(/can't confirm it well enough/);
  });

  test("robot offline keeps Maps and nothing else (H9)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "robot-offline" });
    await expect(gallery.getByRole("heading", { name: "Robot offline", level: 2 })).toBeVisible();
    await expect(panelOf(gallery).locator(".panel-description")).toHaveText("Showing the last known map. Cleaning comes back when the robot reconnects.");
    await expect(gallery.getByRole("group", { name: "Cleaning choices" })).toHaveCount(0);
    await expect(mapsRows(gallery)).toHaveCount(2);
    await expect(panelOf(gallery).locator("h3")).toHaveText(["Maps"]);
  });

  for (const [scenario, title, body] of [
    ["ha-offline", "Reconnecting to Home Assistant", "Cleaning controls come back when Home Assistant reconnects."],
    ["access", "Administrator access required", "Ask a Home Assistant administrator to open this map."],
    ["empty", "Set up your robot", "Add the Matic (Unofficial) integration to see a map here."],
  ]) {
    test(`${scenario} states the problem once, with no cards and no Maps (H10, H11)`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario });
      await expect(gallery.getByRole("heading", { name: title, level: 2 })).toBeVisible();
      await expect(panelOf(gallery).locator(".panel-description")).toHaveText(body);
      await expect(panelOf(gallery).locator("h3")).toHaveCount(0);
      await expect(gallery.getByRole("group", { name: "Cleaning choices" })).toHaveCount(0);
      await expect(mapsRows(gallery)).toHaveCount(0);
      await expect(panelOf(gallery).locator(".host-state")).toHaveCount(0);
    });
  }

  test("an unavailable robot selection states it once (H11)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "multi-robot" });
    await patchState(gallery, { robots: [{ entryId: "synthetic-entry-two", label: "Second robot" }] });
    await expect(gallery.getByRole("heading", { name: "Selected robot unavailable", level: 2 })).toBeVisible();
    await expect(panelOf(gallery).locator(".panel-description")).toHaveText("Choose another robot to open its map.");
    await expect(panelOf(gallery).locator("h3")).toHaveCount(0);
    await expect(gallery.getByRole("group", { name: "Cleaning choices" })).toHaveCount(0);
  });

  test("a saved map keeps Maps and no cards (read-only)", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "history" });
    await patchState(gallery, { workflow: "none" });
    await expect(gallery.getByRole("heading", { name: "Saved map is read only", level: 2 })).toBeVisible();
    await expect(gallery.getByRole("group", { name: "Cleaning choices" })).toHaveCount(0);
    await expect(mapsRows(gallery)).toHaveCount(2);
  });

  // MS-HOME-01 / MS-STATUS-02: a notice is visible on home, under the heading,
  // in every layout; at peek it toasts.
  for (const scenario of ["ready", "cleaning"]) {
    test(`${scenario}: a notice shows under the home heading at 390 and 1024`, async ({ page }) => {
      const notice = { tone: "error", key: "v4_notice_stop_unconfirmed", fallback: "Home Assistant couldn't confirm the stop." };
      for (const narrow of [false, true]) {
        const gallery = await loadGallery(page, { scenario, narrow });
        await page.evaluate(({ tag, detail }) => {
          const shell = document.querySelector(tag).shadowRoot.querySelector("matic-map-shell-v4");
          shell.dispatchEvent(new CustomEvent("matic-workspace-intent", { detail, bubbles: true, composed: true }));
        }, { tag: GALLERY_TAG, detail: { type: "set-notice", notice } });
        const slot = gallery.locator("[data-notice-slot]");
        await expect(slot).toBeVisible();
        await expect(slot).toContainText(notice.fallback);
        await expect(slot).not.toHaveAttribute("role", /.+/);
        await expect(slot).not.toHaveAttribute("aria-live", /.+/);
        const heading = gallery.locator(".panel-heading");
        await expect(slot).toHaveJSProperty("previousElementSibling.className", await heading.evaluate((element) => element.className));
        if (narrow) {
          await panelOf(gallery).getByRole("button", { name: "Collapse panel", exact: true }).click();
          await expect(panelOf(gallery)).toHaveAttribute("data-detent", "peek");
          await page.evaluate(({ tag, detail }) => {
            const shell = document.querySelector(tag).shadowRoot.querySelector("matic-map-shell-v4");
            shell.dispatchEvent(new CustomEvent("matic-workspace-intent", { detail, bubbles: true, composed: true }));
          }, { tag: GALLERY_TAG, detail: { type: "set-notice", notice: { ...notice, fallback: "Again at peek" } } });
          const toast = gallery.getByRole("region", { name: "Notifications" });
          await expect(toast).toBeVisible();
          await expect(toast).toContainText("Again at peek");
        }
      }
    });
  }

  test("forced colors draw a demoted card in GrayText and the featured card with a border", async ({ page }) => {
    await page.emulateMedia({ forcedColors: "active" });
    const gallery = await loadGallery(page, { scenario: "transition" });
    const probe = await page.evaluate(() => {
      const element = document.createElement("span");
      element.style.color = "GrayText";
      document.body.append(element);
      return getComputedStyle(element).color;
    });
    await expect(cards(gallery).nth(0)).toHaveAttribute("aria-disabled", "true");
    const title = cards(gallery).nth(0).locator("strong");
    expect(await title.evaluate((element) => getComputedStyle(element).color)).toBe(probe);
    const border = await cards(gallery).nth(0).evaluate((element) => getComputedStyle(element).borderTopStyle);
    expect(border).not.toBe("none");
  });
});
