import { expect, test } from "@playwright/test";

import { installPanelFixture } from "./map_studio_v4_panel_fixture.mjs";

async function mountPanel(page) {
  const fixture = await installPanelFixture(page);
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.evaluate(() => {
    window.__historyPanel = window.__panelFixture.createPanel();
    document.body.append(window.__historyPanel);
  });
  const panel = page.locator(fixture.panelTag);
  await expect.poll(() => page.evaluate(() => {
    const state = window.__historyPanel.getWorkspaceSnapshot();
    return state.workflow === "none" && state.resources.scene.status === "ready";
  })).toBe(true);
  return panel;
}

test("a stale close traversal does not dismiss Draw opened from Home", async ({ page }) => {
  const panel = await mountPanel(page);
  await panel.getByRole("button", { name: /^Clean custom area/ }).click();
  await expect(panel.getByRole("heading", { level: 2, name: "Your areas" })).toBeVisible();

  // Hold the browser traversal started by the Home navigation. The rendered
  // Home controls remain usable while the old close is still outstanding.
  await page.evaluate(() => {
    const nativeGo = window.history.go.bind(window.history);
    const nativePushState = window.history.pushState.bind(window.history);
    window.__historyTraversal = { nativeGo, nativePushState, deltas: [], pushesAfterClose: 0 };
    window.history.go = (delta) => window.__historyTraversal.deltas.push(delta);
    window.history.pushState = (...args) => {
      window.__historyTraversal.pushesAfterClose += 1;
      return nativePushState(...args);
    };
  });
  await panel.getByRole("button", { name: "Back to all tasks" }).click();
  await expect.poll(() => page.evaluate(() => window.__historyPanel.getWorkspaceSnapshot().workflow)).toBe("none");
  await expect(panel.getByRole("button", { name: /^Clean custom area/ })).toBeVisible();
  expect(await page.evaluate(() => window.__historyTraversal.deltas)).toEqual([-1]);

  await panel.getByRole("button", { name: /^Clean custom area/ }).click();
  await expect(panel.getByRole("button", { name: "New area" })).toBeVisible();
  await panel.getByRole("button", { name: "New area" }).click();
  await expect(panel.getByRole("heading", { level: 2, name: "Draw an area" })).toBeVisible();
  expect(await page.evaluate(() => window.__historyTraversal.pushesAfterClose)).toBe(2);

  const popstate = page.evaluate(() => new Promise((resolve) => {
    window.addEventListener("popstate", resolve, { once: true });
    const { deltas: [delta], pushesAfterClose } = window.__historyTraversal;
    // The traversal target was fixed when the close requested go(-1). Account
    // for entries opened after that request so this reaches that original
    // target even though the delayed invocation happens from the new Draw.
    window.__historyTraversal.nativeGo(delta - pushesAfterClose);
  }));
  await popstate;
  await expect.poll(() => page.evaluate(() => window.__historyPanel.getWorkspaceSnapshot().workflow)).toBe("draw");

  const backToAreas = page.evaluate(() => new Promise((resolve) => {
    window.addEventListener("popstate", resolve, { once: true });
    window.history.back();
  }));
  await backToAreas;
  await expect.poll(() => page.evaluate(() => window.__historyPanel.getWorkspaceSnapshot().workflow)).toBe("areas");

  const backToHome = page.evaluate(() => new Promise((resolve) => {
    window.addEventListener("popstate", resolve, { once: true });
    window.history.back();
  }));
  await backToHome;
  await expect.poll(() => page.evaluate(() => window.__historyPanel.getWorkspaceSnapshot().workflow)).toBe("none");
});

test("a pending Escape dismissal still closes Draw when its Back popstate arrives", async ({ page }) => {
  const panel = await mountPanel(page);
  await panel.getByRole("button", { name: /^Clean custom area/ }).click();
  await expect(panel.getByRole("heading", { level: 2, name: "Your areas" })).toBeVisible();
  await panel.getByRole("button", { name: "New area" }).click();
  await expect(panel.getByRole("heading", { level: 2, name: "Draw an area" })).toBeVisible();

  await page.evaluate(() => {
    const nativeBack = window.history.back.bind(window.history);
    window.__pendingBack = { nativeBack, calls: 0 };
    window.history.back = () => { window.__pendingBack.calls += 1; };
  });
  await page.keyboard.press("Escape");
  expect(await page.evaluate(() => window.__pendingBack.calls)).toBe(1);
  expect(await page.evaluate(() => window.__historyPanel.getWorkspaceSnapshot().workflow)).toBe("draw");

  const popstate = page.evaluate(() => new Promise((resolve) => {
    window.addEventListener("popstate", resolve, { once: true });
    window.__pendingBack.nativeBack();
  }));
  await popstate;
  await expect.poll(() => page.evaluate(() => window.__historyPanel.getWorkspaceSnapshot().workflow)).toBe("areas");
});
