// UX9 owner rulings (2026-10-13): the home plan card's due lines show in
// full; custom areas get Your areas; saved plans and areas can be pinned to
// home as one-tap shortcuts, kept in Home Assistant's per-user frontend data.
import { expect, test } from "@playwright/test";
import { build } from "esbuild";

import { installPanelFixture } from "./map_studio_v4_panel_fixture.mjs";

const GALLERY_TAG = "matic-map-studio-gallery-v0-4-0";

async function loadGallery(page, { scenario = "ready", viewport = { width: 1024, height: 768 }, dir = null } = {}) {
  await page.setViewportSize(viewport);
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.evaluate(async () => { await import("/map_studio_v4-review/review.js"); });
  await page.evaluate(async ({ tag, scenario, narrow, dir }) => {
    await customElements.whenDefined(tag);
    if (dir) document.documentElement.dir = dir;
    const gallery = document.createElement(tag);
    gallery.controls = false;
    gallery.scenario = scenario;
    gallery.narrow = narrow;
    document.body.style.margin = "0";
    document.body.append(gallery);
  }, { tag: GALLERY_TAG, scenario, narrow: viewport.width < 768, dir });
  return page.locator(GALLERY_TAG);
}

const snapshot = (page) => page.evaluate((tag) => document.querySelector(tag).getWorkspaceSnapshot(), GALLERY_TAG);
const patchState = (gallery, patch) => gallery.evaluate((element, applied) => {
  element.replaceWorkspaceState({ ...element.getWorkspaceSnapshot(), ...applied });
}, patch);
const recordActions = (page) => page.evaluate((tag) => {
  const element = document.querySelector(tag);
  element.__actions = [];
  element.addEventListener("matic-workspace-action", (event) => element.__actions.push(event.detail.id));
}, GALLERY_TAG);
const actions = (page) => page.evaluate((tag) => document.querySelector(tag).__actions, GALLERY_TAG);
const focusedText = (page) => page.evaluate(() => {
  let active = document.activeElement;
  while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement;
  return active ? `${active.tagName.toLowerCase()} ${active.getAttribute("aria-label") ?? active.textContent.replace(/\s+/g, " ").trim()}` : null;
});

// Each button's visible text, one space between its lines.
const texts = (locator) => locator.evaluateAll((elements) => elements.map((element) => element.innerText.replace(/\s+/g, " ").trim()));
const choices = (gallery) => gallery.getByRole("group", { name: "Cleaning choices" });
const runButton = (gallery, name) => choices(gallery).locator("button.shortcut-run").filter({ hasText: name });
const heading = (gallery, name) => gallery.getByRole("heading", { level: 2, name, exact: true });
const areaRows = (gallery) => gallery.locator("[data-area-row]");

// ---- Due lines in full -----------------------------------------------------

const ALL_DUE = [
  "Mop due in Kitchen, Living room, and Bedroom",
  "Quick vacuum due in Kitchen",
  "Optimal vacuum due in Living room",
  "Heavy duty vacuum due in Office and Bedroom",
];

test.describe("the plan shortcut shows every due line in full", () => {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }, { width: 320, height: 844 }]) {
    test(`four due kinds, none cut, at ${viewport.width}`, async ({ page }) => {
      const gallery = await loadGallery(page, { scenario: "home-plan-due-full", viewport });
      const card = runButton(gallery, "Daily clean");
      const lines = card.locator(".line");
      await expect(lines).toHaveText(ALL_DUE);
      expect(await card.locator(".card-lines").evaluate((element) => getComputedStyle(element).webkitLineClamp)).toBe("none");
      const box = await card.boundingBox();
      for (const line of await lines.all()) {
        const lineBox = await line.boundingBox();
        expect(lineBox.y).toBeGreaterThanOrEqual(box.y);
        expect(lineBox.y + lineBox.height).toBeLessThanOrEqual(box.y + box.height + 0.5);
        expect(lineBox.height).toBeGreaterThan(0);
      }
      const clipped = await card.evaluate((element) => element.scrollHeight > element.clientHeight + 1);
      expect(clipped).toBe(false);
      await expect(card).toHaveAccessibleName(new RegExp(`${ALL_DUE.join(" ")}$`));
    });
  }

  test("the walkthrough's case at 1440: the second line no longer vanishes", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-plan-due", viewport: { width: 1440, height: 900 } });
    const lines = runButton(gallery, "Daily clean").locator(".line");
    await expect(lines).toHaveText(["Mop due in Kitchen and Living room", "Heavy duty vacuum due in Living room"]);
    await expect(lines.nth(1)).toBeVisible();
  });

  test("a blocked plan's reason shows whole too", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-plan-blocked", viewport: { width: 1440, height: 900 } });
    const card = runButton(gallery, "Daily clean");
    const reason = card.locator(".line[data-tone=warning]");
    await expect(reason).toHaveCount(1);
    await expect(reason).toBeVisible();
    const text = (await reason.textContent()).trim();
    expect(text).toMatch(/^Can't run this plan until/);
    await expect(card).toHaveAccessibleName(new RegExp(`${text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
    expect(await card.evaluate((element) => element.scrollHeight > element.clientHeight + 1)).toBe(false);
  });
});

// ---- Home shortcuts ------------------------------------------------------

test.describe("home shortcuts", () => {
  test("home lists Clean rooms, the shortcuts in pin order, Clean custom area, then Your plans", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    await expect.poll(() => texts(choices(gallery).getByRole("button"))).toEqual([
      "Clean rooms Pick rooms and clean them now.",
      expect.stringMatching(/^Run Daily clean 3 rooms · /),
      "",
      "Clean Entryway Vacuum · Optimal",
      "",
      expect.stringMatching(/^Run Weekend refresh /),
      "",
      "Clean custom area Draw or choose a custom area",
      "Your plans",
    ]);
    const opens = choices(gallery).locator(".shortcut-open");
    await expect(opens.nth(0)).toHaveAccessibleName("Open Daily clean");
    await expect(opens.nth(1)).toHaveAccessibleName("Open Entryway");
    for (const open of await opens.all()) {
      const box = await open.boundingBox();
      expect(box.width).toBeGreaterThanOrEqual(44);
      expect(box.height).toBeGreaterThanOrEqual(44);
    }
    await expect(gallery.getByRole("button", { name: "Your areas" })).toHaveCount(0);
  });

  test("with nothing pinned there is no plan card, only the Your plans row", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-unpinned" });
    await expect.poll(() => texts(choices(gallery).getByRole("button")))
      .toEqual(["Clean rooms Pick rooms and clean them now.", "Clean custom area Draw or choose a custom area", "Your plans"]);
  });

  test("a plan shortcut runs through Run plan's own action and an area through Clean this area's", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    await recordActions(page);
    await runButton(gallery, "Entryway").click();
    expect(await actions(page)).toEqual(["run-area"]);
    let state = await snapshot(page);
    expect({ workflow: state.workflow, areaId: state.selection.areaId }).toEqual({ workflow: "none", areaId: "entryway" });
    await runButton(gallery, "Daily clean").click();
    expect(await actions(page)).toEqual(["run-area", "run-plan"]);
    state = await snapshot(page);
    expect({ workflow: state.workflow, planView: state.planView, planOrigin: state.planOrigin, planId: state.selection.planId })
      .toEqual({ workflow: "plan", planView: "run", planOrigin: "home", planId: "daily" });
    // Run plan here is the very button the shortcut pressed: enabled, same plan.
    await expect(gallery.getByRole("button", { name: "Run plan Daily clean" })).toBeEnabled();
  });

  test("once the run starts the shell returns home, where Stop shows", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    await runButton(gallery, "Daily clean").click();
    await expect(heading(gallery, "Daily clean")).toBeVisible();
    await patchState(gallery, { command: "starting" });
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("none");
    await patchState(gallery, { command: "idle", activity: "cleaning" });
    await expect(gallery.getByRole("button", { name: "Stop cleaning", exact: true }).first()).toBeVisible();
    await expect(runButton(gallery, "Daily clean")).toHaveAttribute("aria-disabled", "true");
  });

  test("a shortcut that can't run is held, says why, and a tap does nothing", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcut-blocked" });
    await recordActions(page);
    const expected = [
      ["Daily clean", /^Can't run this plan until/],
      ["Hallway rug", "Can't clean this area until you check it."],
      ["Porch mat", "Can't clean this area until you redraw it."],
    ];
    for (const [name, reason] of expected) {
      const button = runButton(gallery, name);
      await expect(button).toHaveAttribute("aria-disabled", "true");
      await expect(button.locator(".line[data-tone=warning]")).toHaveText(reason);
      await button.click({ force: true });
    }
    expect(await actions(page)).toEqual([]);
    expect((await snapshot(page)).workflow).toBe("none");
    // A paused plan says so and its chip shows.
    const paused = await loadGallery(page, { scenario: "home-plan-paused" });
    await expect(runButton(paused, "Daily clean").locator(".ms-chip")).toHaveText("Paused");
    await expect(runButton(paused, "Daily clean").locator(".line[data-tone=warning]")).toHaveText("Can't run this plan until you turn it on.");
  });

  test("while a run goes on, every shortcut waits with the home reason and Stop holds the bar", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcut-running" });
    const reason = await gallery.locator("#home-reason").textContent();
    for (const name of ["Daily clean", "Entryway", "Weekend refresh"]) {
      await expect(runButton(gallery, name)).toHaveAttribute("aria-disabled", "true");
      await expect(runButton(gallery, name)).toHaveAccessibleDescription(reason);
    }
    await expect(choices(gallery).locator(".shortcut-open").first()).toHaveAttribute("aria-disabled", "true");
    await expect(gallery.getByRole("button", { name: "Stop cleaning", exact: true }).first()).toBeVisible();
  });

  test("Open goes to the plan's Run view, and Back and Escape return to it", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    await recordActions(page);
    const open = gallery.getByRole("button", { name: "Open Daily clean" });
    await open.click();
    expect(await actions(page)).toEqual([]);
    expect(await snapshot(page)).toMatchObject({ workflow: "plan", planView: "run", planOrigin: "home" });
    await gallery.getByRole("button", { name: "Back to all tasks" }).click();
    await expect.poll(() => focusedText(page)).toBe("button Open Daily clean");
    await page.keyboard.press("Enter");
    await expect(heading(gallery, "Daily clean")).toBeFocused();
    await page.keyboard.press("Escape");
    await expect.poll(() => focusedText(page)).toBe("button Open Daily clean");
  });

  test("Open on an area goes to its screen; Back steps to Your areas, then home", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    await gallery.getByRole("button", { name: "Open Entryway" }).click();
    await expect(heading(gallery, "Entryway")).toBeVisible();
    await gallery.getByRole("button", { name: "Back to areas" }).click();
    await expect(heading(gallery, "Your areas")).toBeVisible();
    await expect.poll(() => focusedText(page)).toMatch(/^button Entryway/);
    await gallery.getByRole("button", { name: "Back to all tasks" }).click();
    await expect.poll(() => focusedText(page)).toBe("button Open Entryway");
  });

  test("a failed read shows nothing pinned and one quiet line with Try again; home still works", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-pins-error" });
    await expect(choices(gallery).locator(".pins-error")).toHaveText(/^Home Assistant couldn't load your home shortcuts\. Try again$/);
    await expect(choices(gallery).locator(".shortcut")).toHaveCount(0);
    await expect(choices(gallery).locator("[role=alert], [role=status]")).toHaveCount(0);
    await choices(gallery).getByRole("button", { name: /^Clean rooms/ }).click();
    await expect(heading(gallery, "Choose rooms")).toBeVisible();
  });

  test("Show on home on a plan's Run view pins and unpins it, in the order pinned", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    await gallery.getByRole("button", { name: "Open Daily clean" }).click();
    const pin = gallery.getByRole("switch", { name: "Show on home" });
    await expect(pin).toHaveAttribute("aria-checked", "true");
    await expect(pin).toHaveAccessibleDescription("Adds a one-tap button for this plan to the Matic Map home screen.");
    await pin.click();
    await expect(pin).toHaveAttribute("aria-checked", "false");
    expect((await snapshot(page)).homePins.pins).toEqual([{ kind: "area", id: "entryway" }, { kind: "plan", id: "weekend" }]);
    await pin.click();
    expect((await snapshot(page)).homePins.pins).toEqual([{ kind: "area", id: "entryway" }, { kind: "plan", id: "weekend" }, { kind: "plan", id: "daily" }]);
  });

  test("Show on home on an area's screen pins it to home", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "area-review-saved" });
    const pin = gallery.getByRole("switch", { name: "Show on home" });
    await expect(pin).toHaveAttribute("aria-checked", "false");
    await expect(pin).toHaveAccessibleDescription("Adds a one-tap button for this area to the Matic Map home screen.");
    await pin.click();
    await expect(pin).toHaveAttribute("aria-checked", "true");
    await patchState(gallery, { workflow: "none" });
    await expect(runButton(gallery, "Entryway")).toHaveAccessibleName(/^Clean Entryway Vacuum · Optimal$/);
  });

  test("the switch waits while shortcuts load, says why after a failed read, and is absent without user data", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "plan-saved-intelligent" });
    const pin = gallery.getByRole("switch", { name: "Show on home" });
    for (const [status, reason] of [
      ["loading", "Waiting for Home Assistant to load your home shortcuts."],
      ["error", "Can't change this until you choose Try again on the home screen."],
    ]) {
      await patchState(gallery, { homePins: { status, pins: [] } });
      await expect(pin).toHaveAttribute("aria-disabled", "true");
      await expect(pin).toHaveAccessibleDescription(new RegExp(`${reason.replace(/\./g, "\\.")}$`));
      await pin.click({ force: true });
      expect((await snapshot(page)).homePins).toEqual({ status, pins: [] });
    }
    await patchState(gallery, { homePins: { status: "unavailable", pins: [] } });
    await expect(pin).toHaveCount(0);
  });
});

test.describe("home shortcuts: review fixes", () => {
  test("a shortcut starts with the play glyph and Open is a bordered button of its own", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    const run = runButton(gallery, "Daily clean");
    const open = gallery.getByRole("button", { name: "Open Daily clean" });
    const rooms = choices(gallery).getByRole("button", { name: /^Clean rooms/ });
    const glyph = (locator) => locator.locator(".ms-row__lead path").getAttribute("d");
    expect(await glyph(run)).not.toBe(await glyph(rooms));
    expect(await glyph(run)).toBe(await glyph(runButton(gallery, "Entryway")));
    await expect(run.locator(".ms-row__trail")).toHaveCount(0);
    expect(await open.evaluate((element) => getComputedStyle(element).borderTopStyle)).toBe("solid");
  });

  test("a held shortcut's reason is readable text, not disabled grey", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcut-blocked" });
    const colors = await runButton(gallery, "Porch mat").evaluate((button) => ({
      reason: getComputedStyle(button.querySelector(".line[data-tone=warning]")).color,
      title: getComputedStyle(button.querySelector("strong")).color,
    }));
    expect(colors.reason).not.toBe(colors.title);
  });

  test("while the plan list is reread or failed, the plan shortcut is held with its Run view's reason", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    const plans = (await snapshot(page)).resources.plans;
    for (const [status, reason] of [
      // The Run view's own gate already holds a list being read.
      ["loading", "Load the room and plan list before choosing a cleaning action."],
      ["error", "Load the room and plan list before choosing a cleaning action."],
    ]) {
      await patchState(gallery, { resources: { ...(await snapshot(page)).resources, plans: { ...plans, status } } });
      await expect(runButton(gallery, "Daily clean")).toHaveAttribute("aria-disabled", "true");
      await expect(runButton(gallery, "Daily clean").locator(".line[data-tone=warning]")).toHaveText(reason);
    }
  });

  test("a refused shortcut run stays on Run, and a later Run plan there does not jump home", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "home-shortcuts" });
    await runButton(gallery, "Daily clean").click();
    await patchState(gallery, { command: "pending", pendingAction: "run-plan" });
    await patchState(gallery, { command: "idle", pendingAction: null });
    await patchState(gallery, { command: "starting" });
    await page.waitForTimeout(100);
    expect((await snapshot(page)).workflow).toBe("plan");
  });

  test("New area after viewing an area starts a blank drawing", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-list" });
    await areaRows(gallery).nth(0).click();
    await gallery.getByRole("button", { name: "Back to areas" }).click();
    await gallery.getByRole("button", { name: "New area", exact: true }).click();
    const state = await snapshot(page);
    expect({ id: state.areaDraft.id, areaId: state.selection.areaId, circles: state.draw.circles.length }).toEqual({ id: null, areaId: null, circles: 0 });
    await expect(gallery.getByRole("button", { name: "Back to areas" }).first()).toBeAttached();
  });

  test("Show on home sits below the run's end line, apart from Plan enabled", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "plan-saved-intelligent" });
    const end = gallery.getByText("Returns to the dock when finished");
    const enabled = gallery.getByRole("switch", { name: "Plan enabled" });
    const pin = gallery.getByRole("switch", { name: "Show on home" });
    const [endBox, enabledBox, pinBox] = [await end.boundingBox(), await enabled.boundingBox(), await pin.boundingBox()];
    expect(enabledBox.y).toBeLessThan(endBox.y);
    expect(pinBox.y).toBeGreaterThan(endBox.y + endBox.height);
  });
});

// ---- Your areas ------------------------------------------------------------

test.describe("Your areas", () => {
  test("the Clean custom area card opens Your areas; Back and Escape return to the card", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "ready" });
    const card = choices(gallery).getByRole("button", { name: /^Clean custom area/ });
    await card.click();
    expect((await snapshot(page)).workflow).toBe("areas");
    await expect(heading(gallery, "Your areas")).toBeFocused();
    await gallery.getByRole("button", { name: "Back to all tasks" }).click();
    expect((await snapshot(page)).workflow).toBe("none");
    await expect.poll(() => focusedText(page)).toMatch(/^button Clean custom area/);
    await page.keyboard.press("Enter");
    await expect(heading(gallery, "Your areas")).toBeFocused();
    await page.keyboard.press("Escape");
    expect((await snapshot(page)).workflow).toBe("none");
    await expect.poll(() => focusedText(page)).toMatch(/^button Clean custom area/);
  });

  test("rows show each area's name, its setting and what a changed map needs; New area is last", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-list" });
    await expect(gallery.getByText("Tap an area to clean it or change it.")).toBeVisible();
    const list = gallery.getByRole("list");
    await expect.poll(() => texts(list.getByRole("button"))).toEqual([
      "Entryway Vacuum · Optimal",
      "Under the dining table Mop",
      "Hallway rug Vacuum · Heavy duty Map changed · Check it before cleaning",
      "Porch mat Vacuum · Optimal Redraw it before cleaning",
      "New area",
    ]);
    await expect(areaRows(gallery).locator("bdi")).toHaveText(["Entryway", "Under the dining table", "Hallway rug", "Porch mat"]);
    await expect(areaRows(gallery).nth(2).locator(".line[data-tone=warning] svg")).toHaveCount(1);
    // Draw no longer lists saved areas: Your areas is their one place.
    await list.getByRole("button", { name: "New area" }).click();
    await expect(heading(gallery, "Draw an area")).toBeVisible();
    await expect(gallery.getByRole("heading", { name: "Custom areas" })).toHaveCount(0);
    await expect(gallery.getByRole("button", { name: /^Entryway/ })).toHaveCount(0);
  });

  test("the stale scenario reads plainly", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-stale" });
    await expect(areaRows(gallery).nth(0)).toHaveAccessibleName(/^Entryway Vacuum · Optimal Map changed · Check it before cleaning$/);
    await expect(areaRows(gallery).nth(3)).toHaveAccessibleName(/^Porch mat Vacuum · Optimal Redraw it before cleaning$/);
  });

  test("an area opens its screen with Clean this area, Redraw, its settings and Delete; Back and Escape return to its row", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-list" });
    await areaRows(gallery).nth(0).click();
    await expect(heading(gallery, "Entryway")).toBeFocused();
    await expect(gallery.getByRole("button", { name: "Clean this area" })).toBeVisible();
    await expect(gallery.getByRole("button", { name: "Redraw" })).toBeVisible();
    await expect(gallery.getByRole("button", { name: "Delete" })).toBeVisible();
    await expect(gallery.getByRole("combobox", { name: "Cleaning mode" })).toBeVisible();
    await gallery.getByRole("button", { name: "Back to areas" }).click();
    expect((await snapshot(page)).workflow).toBe("areas");
    await expect.poll(() => focusedText(page)).toMatch(/^button Entryway/);
    await areaRows(gallery).nth(1).click();
    await expect(heading(gallery, "Under the dining table")).toBeFocused();
    await page.keyboard.press("Escape");
    expect((await snapshot(page)).workflow).toBe("areas");
    await expect.poll(() => focusedText(page)).toMatch(/^button Under the dining table/);
  });

  test("Redraw, then Cancel, returns to the area; Back from the area to Your areas", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-list" });
    await areaRows(gallery).nth(0).click();
    await gallery.getByRole("button", { name: "Redraw" }).click();
    await expect(heading(gallery, "Draw an area")).toBeVisible();
    await gallery.locator(".action-bar").getByRole("button", { name: "Cancel" }).click();
    await expect(heading(gallery, "Entryway")).toBeVisible();
    // Cancel hands focus to Redraw a frame later (WebKit does not focus a
    // clicked button), and Escape is the shell's key, so wait for it.
    await expect(gallery.getByRole("button", { name: "Redraw" })).toBeFocused();
    await page.keyboard.press("Escape");
    await expect.poll(async () => (await snapshot(page)).workflow).toBe("areas");
  });

  test("New area's Cancel and Escape return to Your areas with focus on New area", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-list" });
    const newArea = gallery.getByRole("button", { name: "New area" });
    await newArea.click();
    expect(await snapshot(page)).toMatchObject({ workflow: "draw", areaDraft: { id: null } });
    await gallery.locator(".action-bar").getByRole("button", { name: "Cancel" }).click();
    expect((await snapshot(page)).workflow).toBe("areas");
    await expect.poll(() => focusedText(page)).toBe("button New area");
    await page.keyboard.press("Enter");
    await expect(heading(gallery, "Draw an area")).toBeVisible();
    await expect(gallery.getByRole("button", { name: "Back to areas" }).first()).toBeAttached();
    await page.keyboard.press("Escape");
    expect((await snapshot(page)).workflow).toBe("areas");
    await expect.poll(() => focusedText(page)).toBe("button New area");
  });

  test("a dirty new drawing asks before leaving and lands on Your areas", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "draw" });
    await gallery.locator(".action-bar").getByRole("button", { name: "Cancel" }).click();
    const dialog = gallery.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: "Discard" }).click();
    expect((await snapshot(page)).workflow).toBe("areas");
  });

  test("an empty floor shows one card whose New area opens Draw", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-empty" });
    await expect(gallery.getByRole("heading", { level: 3, name: "No custom areas yet" })).toBeVisible();
    await expect(gallery.getByText("Draw an area on the map to clean just that spot.")).toBeVisible();
    await expect(gallery.getByText("Tap an area to clean it or change it.")).toHaveCount(0);
    await gallery.getByRole("button", { name: "New area" }).click();
    await expect(heading(gallery, "Draw an area")).toBeVisible();
  });

  test("loading says so; a failed read says so with Try again", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-list" });
    const areas = (await snapshot(page)).resources.areas;
    await patchState(gallery, { resources: { ...(await snapshot(page)).resources, areas: { status: "loading", value: null, problem: null } } });
    await expect(gallery.getByRole("status").filter({ hasText: "Loading saved areas…" })).toBeVisible();
    await patchState(gallery, { resources: { ...(await snapshot(page)).resources, areas: { status: "error", value: null, problem: "areas-unavailable" } } });
    await expect(gallery.getByRole("alert").filter({ hasText: "Home Assistant couldn't load your saved areas." })).toBeVisible();
    await gallery.getByRole("button", { name: "Try again" }).click();
    expect((await snapshot(page)).workflow).toBe("areas");
    // A failed reload keeps the last list on show, below the problem.
    await patchState(gallery, { resources: { ...(await snapshot(page)).resources, areas: { ...areas, status: "error" } } });
    await expect(areaRows(gallery)).toHaveCount(4);
  });

  test("rows are held while a command runs and say why", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-list" });
    await patchState(gallery, { command: "pending" });
    const row = areaRows(gallery).nth(0);
    await expect(row).toHaveAttribute("aria-disabled", "true");
    await expect(row).toHaveAccessibleDescription("Waiting for the current change to finish.");
    await row.click({ force: true });
    expect((await snapshot(page)).workflow).toBe("areas");
  });

  test("right to left mirrors the rows' chevrons", async ({ page }) => {
    const gallery = await loadGallery(page, { scenario: "areas-list", viewport: { width: 390, height: 844 }, dir: "rtl" });
    const scale = await areaRows(gallery).first().locator(".ms-row__trail .ms-icon").evaluate((element) => getComputedStyle(element).scale);
    expect(scale).toBe("-1 1");
  });
});

// ---- Persistence in Home Assistant's user data (the installed panel) --------

const PLAN_CATALOG = {
  rooms: [{ room_id: "room-a", name: "Kitchen" }],
  selected_plan: "daily",
  plans: [{
    id: "daily",
    name: "Daily clean",
    enabled: true,
    run_behavior: "intelligent",
    rooms: [{ room_id: "room-a", cleaning_mode: "vacuum", coverage_setting: "standard" }],
    room_order: ["room-a"],
    return_to_base: true,
    finish_current_room: false,
    finish_current_room_threshold: 50,
    next_run_preview: {
      preview_token: "e".repeat(64),
      rooms: [{ room_id: "room-a", name: "Kitchen", cleaning_mode: "vacuum", coverage_setting: "standard", cadence_reasons: [] }],
      mission_boundaries: [],
      blocker: null,
    },
  }],
};
// One user-data key per robot (Codex PRRT_kwDOTau7uM6sPDWX).
const KEY = "matic_robot_home_shortcuts.synthetic-entry";
const OTHER = "matic_robot_home_shortcuts.other-entry";

async function mountPanel(page, options) {
  const fixture = await installPanelFixture(page, { initialPlanCatalog: PLAN_CATALOG, ...options });
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.evaluate(() => {
    window.__pinPanel = window.__panelFixture.createPanel();
    document.body.append(window.__pinPanel);
  });
  const panel = page.locator(fixture.panelTag);
  await expect.poll(() => page.evaluate(() => {
    const state = window.__pinPanel.getWorkspaceSnapshot();
    return state.resources.scene.status === "ready" && state.map.exactPose && state.resources.plans.status === "ready";
  })).toBe(true);
  return panel;
}
const pins = (page) => page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().homePins);
const stored = (page) => page.evaluate((keys) => Object.fromEntries(keys.map((key) => [key, window.__panelFixture.userData()[key]]).filter(([, value]) => value !== undefined)), [KEY, OTHER]);

test.describe("home shortcuts in Home Assistant's user data", () => {
  test("the default plan becomes the first shortcut once; a cleared list stays cleared", async ({ page }) => {
    const panel = await mountPanel(page, { userData: {} });
    await expect.poll(() => pins(page)).toEqual({ status: "ready", pins: [{ kind: "plan", id: "daily" }] });
    expect(await stored(page)).toEqual({ [KEY]: { pins: [{ kind: "plan", id: "daily" }] } });
    await expect(panel.getByRole("button", { name: "Open Daily clean" })).toBeVisible();

    const cleared = await mountPanel(page, { userData: { [KEY]: { pins: [] }, [OTHER]: { pins: [{ kind: "area", id: "x" }] } } });
    await expect.poll(() => pins(page)).toEqual({ status: "ready", pins: [] });
    await expect(cleared.getByRole("button", { name: "Open Daily clean" })).toHaveCount(0);
    await expect(cleared.getByRole("button", { name: "Your plans", exact: true })).toBeVisible();
  });

  test("pin and unpin are written for this robot only, keeping other robots' lists", async ({ page }) => {
    const panel = await mountPanel(page, { userData: { [KEY]: { pins: [] }, [OTHER]: { pins: [{ kind: "plan", id: "x" }] } } });
    await expect.poll(() => pins(page)).toMatchObject({ status: "ready" });
    await panel.getByRole("button", { name: "Your plans", exact: true }).click();
    await panel.getByRole("button", { name: /^Daily clean/ }).click();
    const pin = panel.getByRole("switch", { name: "Show on home" });
    await pin.click();
    await expect.poll(() => stored(page)).toEqual({ [KEY]: { pins: [{ kind: "plan", id: "daily" }] }, [OTHER]: { pins: [{ kind: "plan", id: "x" }] } });
    await pin.click();
    await expect.poll(() => stored(page)).toEqual({ [KEY]: { pins: [] }, [OTHER]: { pins: [{ kind: "plan", id: "x" }] } });
  });

  test("a failed read leaves home working with nothing pinned and a quiet Try again", async ({ page }) => {
    await installPanelFixture(page, { initialPlanCatalog: PLAN_CATALOG, userData: { [KEY]: { pins: [{ kind: "plan", id: "daily" }] } } });
    await page.evaluate(() => window.__panelFixture.failNextUserData("frontend/get_user_data"));
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.evaluate(() => {
      window.__pinPanel = window.__panelFixture.createPanel();
      document.body.append(window.__pinPanel);
    });
    const panel = page.locator(await page.evaluate(() => window.__panelFixture.panelTag));
    await expect.poll(() => pins(page)).toEqual({ status: "error", pins: [] });
    await expect(panel.getByText("Home Assistant couldn't load your home shortcuts.")).toBeVisible();
    await expect(panel.getByRole("button", { name: /^Clean rooms/ })).toBeVisible();
    await panel.locator(".pins-error").getByRole("button", { name: "Try again" }).click();
    await expect.poll(() => pins(page)).toEqual({ status: "ready", pins: [{ kind: "plan", id: "daily" }] });
  });

  test("a failed write puts the switch back and says so", async ({ page }) => {
    const panel = await mountPanel(page, { userData: { [KEY]: { pins: [] } } });
    await expect.poll(() => pins(page)).toMatchObject({ status: "ready" });
    await page.evaluate(() => window.__panelFixture.failNextUserData("frontend/set_user_data"));
    await panel.getByRole("button", { name: "Your plans", exact: true }).click();
    await panel.getByRole("button", { name: /^Daily clean/ }).click();
    const pin = panel.getByRole("switch", { name: "Show on home" });
    await pin.click();
    await expect.poll(() => pins(page)).toEqual({ status: "ready", pins: [] });
    await expect(pin).toHaveAttribute("aria-checked", "false");
    expect(await page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().notice)).toMatchObject({ tone: "error", key: "v4_notice_shortcuts_save_failed" });
    expect(await stored(page)).toEqual({ [KEY]: { pins: [] } });
  });

  test("one tap runs the plan through run_selected_plan with its preview, then home shows Stop", async ({ page }) => {
    const panel = await mountPanel(page, { userData: { [KEY]: { pins: [{ kind: "plan", id: "daily" }] } } });
    const run = panel.locator("button.shortcut-run");
    await expect(run).toHaveAccessibleName(/^Run Daily clean/);
    await expect(run).not.toHaveAttribute("aria-disabled", "true");
    await page.evaluate(() => window.__panelFixture.deferNextService());
    await run.click();
    await expect.poll(() => page.evaluate(() => window.__panelFixture.serviceCalls.map((call) => call.service))).toEqual(["run_selected_plan"]);
    expect(await page.evaluate(() => window.__panelFixture.serviceCalls[0].data)).toEqual({ plan: "daily", preview_token: "e".repeat(64) });
    await expect.poll(() => page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().workflow)).toBe("none");
    await expect(panel.getByRole("button", { name: "Stop cleaning" }).first()).toBeVisible();
    await page.evaluate(() => window.__panelFixture.releaseService());
  });


  test("a failed write puts an unpinned shortcut back in its place", async ({ page }) => {
    const pins = [{ kind: "plan", id: "x" }, { kind: "plan", id: "daily" }, { kind: "plan", id: "y" }];
    // Every pinned plan exists: a pin whose plan is gone is cleaned up (followPins).
    const [daily] = PLAN_CATALOG.plans;
    const initialPlanCatalog = { ...PLAN_CATALOG, plans: [daily, { ...daily, id: "x", name: "Plan X" }, { ...daily, id: "y", name: "Plan Y" }] };
    const panel = await mountPanel(page, { initialPlanCatalog, userData: { [KEY]: { pins } } });
    await expect.poll(() => page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().homePins.status)).toBe("ready");
    await page.evaluate(() => window.__panelFixture.failNextUserData("frontend/set_user_data"));
    await panel.getByRole("button", { name: "Open Daily clean" }).click();
    await panel.getByRole("switch", { name: "Show on home" }).click();
    await expect.poll(() => page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().notice?.key)).toBe("v4_notice_shortcuts_save_failed");
    expect(await page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().homePins.pins)).toEqual(pins);
  });

  test("browser Back steps New area → Your areas → home", async ({ page }) => {
    const panel = await mountPanel(page, {});
    await panel.getByRole("button", { name: /^Clean custom area/ }).click();
    await expect(panel.getByRole("heading", { level: 3, name: "No custom areas yet" })).toBeVisible();
    await panel.getByRole("button", { name: "New area" }).click();
    await expect(panel.getByRole("heading", { level: 2, name: "Draw an area" })).toBeVisible();
    await page.evaluate(() => history.back());
    await expect(panel.getByRole("heading", { level: 2, name: "Your areas" })).toBeVisible();
    await page.evaluate(() => history.back());
    await expect.poll(() => page.evaluate(() => window.__pinPanel.getWorkspaceSnapshot().workflow)).toBe("none");
  });

  test("without a websocket there is no switch and no shortcut, and nothing to report", async ({ page }) => {
    const panel = await mountPanel(page, {});
    await expect.poll(() => pins(page)).toEqual({ status: "unavailable", pins: [] });
    await expect(panel.locator(".pins-error")).toHaveCount(0);
    await panel.getByRole("button", { name: "Your plans", exact: true }).click();
    await panel.getByRole("button", { name: /^Daily clean/ }).click();
    await expect(panel.getByRole("switch", { name: "Plan enabled" })).toBeVisible();
    await expect(panel.getByRole("switch", { name: "Show on home" })).toHaveCount(0);
  });
});

// ---- Seeding, on the module itself -----------------------------------------

test.describe("home-pins seeding", () => {
  test("seeds the default plan only from a plan list that loaded", async ({ page }) => {
    const bundle = await build({
      stdin: { contents: 'export { loadPins } from "./frontend/map-studio-v4/home-pins"; export { WorkspaceStore } from "./frontend/map-studio-v4/state"; export { createGalleryState } from "./frontend/map-studio-v4/gallery-state";', resolveDir: process.cwd() },
      bundle: true, format: "esm", write: false,
    });
    await page.route("**/home-pins-test.js", (route) => route.fulfill({ contentType: "text/javascript", body: bundle.outputFiles[0].text }));
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const result = await page.evaluate(async () => {
      const { loadPins, WorkspaceStore, createGalleryState } = await import("/home-pins-test.js");
      const run = async (status, failWrite = false) => {
        const writes = [];
        const connection = { sendMessagePromise: async (message) => {
          if (message.type === "frontend/get_user_data") return { value: null };
          if (failWrite) throw new Error("synthetic");
          writes.push(message.value);
          return null;
        } };
        const initial = createGalleryState("ready");
        const store = new WorkspaceStore({ ...initial, resources: { ...initial.resources, plans: { ...initial.resources.plans, status } } });
        const pins = await loadPins(connection, store, initial.selection.entryId);
        return { pins, writes };
      };
      return { ready: await run("ready"), error: await run("error"), failedWrite: await run("ready", true) };
    });
    expect(result.ready.pins).toEqual([{ kind: "plan", id: "daily" }]);
    expect(result.ready.writes).toHaveLength(1);
    // Undecided, not empty: null keeps the robot unseeded until the plans load.
    expect(result.error).toEqual({ pins: null, writes: [] });
    expect(result.failedWrite.pins).toEqual([{ kind: "plan", id: "daily" }]);
  });
});
