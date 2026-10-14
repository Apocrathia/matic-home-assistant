import type { HomePin, WorkspaceNotice, WorkspaceState } from "./contracts";
import type { EffectController } from "./effects";
import type { WorkspaceStore } from "./state";
import type { WorkspaceConnection } from "./workspace-transport";

/**
 * Home shortcuts live in Home Assistant's per-user frontend data, never in
 * the integration's storage: one key per robot (config entry),
 * `matic_robot_home_shortcuts.<entry_id>`, holding that robot's pins in the
 * order they were added. A write touches only its own robot's key, so two
 * tabs on different robots never read-modify-write each other's lists
 * (Codex PRRT_kwDOTau7uM6sPDWX). Two tabs on the same robot write the whole
 * list each shows: the last write wins, for that user's own list only.
 * A robot with no record has never been set up, and its backend default plan
 * becomes the first pin once (owner ruling, 2026-10-13).
 */
export const HOME_PINS_KEY = "matic_robot_home_shortcuts";

const keyFor = (entryId: string): string => `${HOME_PINS_KEY}.${entryId}`;

const isPin = (value: unknown): value is HomePin => {
  if (!value || typeof value !== "object") return false;
  const { kind, id } = value as { kind?: unknown; id?: unknown };
  return (kind === "plan" || kind === "area") && typeof id === "string" && id.length > 0;
};

/** One robot's pins, or null when this user never set any for it. */
const readPins = async (connection: WorkspaceConnection, entryId: string): Promise<HomePin[] | null> => {
  const response = await connection.sendMessagePromise<{ value?: unknown } | null>({ type: "frontend/get_user_data", key: keyFor(entryId) });
  const record = response?.value as { pins?: unknown } | null | undefined;
  if (!record || typeof record !== "object" || !Array.isArray(record.pins)) return null;
  const seen = new Set<string>();
  return record.pins.filter(isPin).filter(({ kind, id }) => !seen.has(`${kind}:${id}`) && Boolean(seen.add(`${kind}:${id}`)))
    .map(({ kind, id }) => ({ kind, id }));
};

/**
 * Writes one robot's pins to its own key. A write whose owner changed before
 * its turn (`stillOwned`) is dropped, never sent to the next user's data.
 */
export const writePins = async (
  connection: WorkspaceConnection,
  entryId: string,
  pins: readonly HomePin[],
  stillOwned: () => boolean = () => true,
): Promise<void> => {
  if (!stillOwned()) return;
  await connection.sendMessagePromise({
    type: "frontend/set_user_data",
    key: keyFor(entryId),
    value: { pins: pins.map(({ kind, id }) => ({ kind, id })) },
  });
};

// The plan list once it has settled for this robot: undefined when it could
// not be read (or the robot changed), so nothing is decided from it.
const settledPlans = (store: WorkspaceStore, entryId: string): Promise<{ readonly selected: string | null } | undefined> => new Promise((resolve) => {
  const check = (state: WorkspaceState): boolean => {
    if (state.selection.entryId !== entryId) { resolve(undefined); return true; }
    const { status, value } = state.resources.plans;
    if (status === "idle" || status === "loading") return false;
    if (status !== "ready" || !value) { resolve(undefined); return true; }
    resolve({ selected: value.plans.some((plan) => plan.id === value.selectedPlan) ? value.selectedPlan : null });
    return true;
  };
  if (check(store.value)) return;
  const stop = store.subscribe((state) => { if (check(state)) stop(); });
});

/**
 * Keeps one read's pins true to the catalogs while that read stands (`live`:
 * same owner, same token, shortcuts ready). Through the same queued toggle a
 * person makes, so it never races their own:
 * - Unseeded (no record, no default plan yet): the first default plan that
 *   appears is pinned and written, unless the person pinned or unpinned
 *   something first (Codex PRRT_kwDOTau7uM6sQAVO).
 * - A pinned plan or area missing from a ready catalog was deleted (catalogs
 *   list every saved plan and area for the robot): it is unpinned, once per
 *   pin, so a new plan or area saved under the same name, and so the same
 *   id, never comes back pinned.
 */
export const followPins = (
  store: WorkspaceStore,
  host: Pick<EffectController, "saveHomePin">,
  entryId: string,
  live: () => boolean,
  unseeded: boolean,
): void => {
  const initial = store.value.homePins;
  const tried = new Set<string>();
  let seeding = unseeded;
  let done = false;
  let unsubscribe: (() => void) | null = null;
  const toggle = (pin: HomePin, pinned: boolean): void => {
    const before = store.value.homePins.pins;
    store.dispatch({ type: "set-home-pin", pin, pinned });
    host.saveHomePin(pin, pinned, before);
  };
  const ok = (state: WorkspaceState): boolean => live() && state.selection.entryId === entryId && state.homePins.status === "ready";
  unsubscribe = store.subscribe((state) => {
    if (done) return;
    if (!ok(state)) { done = true; unsubscribe?.(); return; }
    if (state.homePins !== initial) seeding = false;
    const plans = state.resources.plans.status === "ready" ? state.resources.plans.value : null;
    const areas = state.resources.areas.status === "ready" ? state.resources.areas.value : null;
    const gone = state.homePins.pins.filter((pin) => !tried.has(`${pin.kind}:${pin.id}`) && (pin.kind === "plan"
      ? plans && !plans.plans.some((candidate) => candidate.id === pin.id)
      : areas && !areas.areas.some((candidate) => candidate.id === pin.id)));
    const selected = seeding && plans?.plans.some((candidate) => candidate.id === plans.selectedPlan) ? plans.selectedPlan : null;
    if (selected) seeding = false;
    if (!gone.length && !selected) return;
    for (const pin of gone) tried.add(`${pin.kind}:${pin.id}`);
    // Never from inside the store's own notification.
    queueMicrotask(() => {
      if (!ok(store.value)) return;
      for (const pin of gone) toggle(pin, false);
      if (selected && !store.value.homePins.pins.length) toggle({ kind: "plan", id: selected }, true);
    });
  });
  if (done) unsubscribe();
};

/**
 * Reads this robot's pins. With no record yet, the default plan becomes the
 * first pin and is written once. A plan list that failed to load, or that has
 * no default plan yet, decides nothing: null (unseeded) and no record, so
 * followPins seeds the first default plan that appears, and a reload does.
 * A seed whose write fails still shows; the next load tries again.
 */
export const loadPins = async (
  connection: WorkspaceConnection,
  store: WorkspaceStore,
  entryId: string,
  stillOwned: () => boolean = () => true,
): Promise<HomePin[] | null> => {
  const pins = await readPins(connection, entryId);
  if (pins) return pins;
  const plans = await settledPlans(store, entryId);
  if (!stillOwned()) return [];
  if (!plans?.selected) return null;
  const seeded: HomePin[] = [{ kind: "plan", id: plans.selected }];
  try {
    await writePins(connection, entryId, seeded, stillOwned);
  } catch {
    // Shown now, written on a later load.
  }
  return seeded;
};

// A plain notice: the store validates and freezes every notice it commits,
// and importing contracts' helper would split it out of the startup chunk.
const notice = (tone: WorkspaceNotice["tone"], key: string, fallback: string): WorkspaceNotice => ({ tone, key, fallback });

export const PINS_SAVE_FAILED = notice("error", "v4_notice_shortcuts_save_failed", "Home Assistant couldn't save your home shortcuts. Try again.");
