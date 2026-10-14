import type { HomePin, WorkspaceNotice, WorkspaceState } from "./contracts";
import type { WorkspaceStore } from "./state";
import type { WorkspaceConnection } from "./workspace-transport";

/**
 * Home shortcuts live in Home Assistant's per-user frontend data, never in
 * the integration's storage: one key for this integration, one record per
 * robot (config entry), each a list of pins in the order they were added.
 * A robot with no record has never been set up, and its backend default plan
 * becomes the first pin once (owner ruling, 2026-10-13).
 */
export const HOME_PINS_KEY = "matic_robot_home_shortcuts";

type Stored = Readonly<Record<string, { readonly pins?: unknown }>>;

const isPin = (value: unknown): value is HomePin => {
  if (!value || typeof value !== "object") return false;
  const { kind, id } = value as { kind?: unknown; id?: unknown };
  return (kind === "plan" || kind === "area") && typeof id === "string" && id.length > 0;
};

const readStored = async (connection: WorkspaceConnection): Promise<Stored> => {
  const response = await connection.sendMessagePromise<{ value?: unknown } | null>({ type: "frontend/get_user_data", key: HOME_PINS_KEY });
  const value = response?.value;
  return value && typeof value === "object" && !Array.isArray(value) ? value as Stored : {};
};

/** One robot's pins, or null when this user never set any for it. */
const pinsOf = (stored: Stored, entryId: string): HomePin[] | null => {
  const record = stored[entryId];
  if (!record || typeof record !== "object" || !Array.isArray(record.pins)) return null;
  const seen = new Set<string>();
  return record.pins.filter(isPin).filter(({ kind, id }) => !seen.has(`${kind}:${id}`) && Boolean(seen.add(`${kind}:${id}`)))
    .map(({ kind, id }) => ({ kind, id }));
};

/** Writes one robot's pins over a fresh read, so other robots' records stay as they are. */
export const writePins = async (connection: WorkspaceConnection, entryId: string, pins: readonly HomePin[]): Promise<void> => {
  const stored = await readStored(connection);
  await connection.sendMessagePromise({
    type: "frontend/set_user_data",
    key: HOME_PINS_KEY,
    value: { ...stored, [entryId]: { pins: pins.map(({ kind, id }) => ({ kind, id })) } },
  });
};

// The default plan, once the plan list has settled for this robot.
const settledDefaultPlan = (store: WorkspaceStore, entryId: string): Promise<string | null> => new Promise((resolve) => {
  const check = (state: WorkspaceState): boolean => {
    if (state.selection.entryId !== entryId) { resolve(null); return true; }
    const { status, value } = state.resources.plans;
    if (status === "idle" || status === "loading") return false;
    resolve(value?.plans.some((plan) => plan.id === value.selectedPlan) ? value.selectedPlan : null);
    return true;
  };
  if (check(store.value)) return;
  const stop = store.subscribe((state) => { if (check(state)) stop(); });
});

/** Reads this robot's pins, seeding the default plan when there is no record. */
export const loadPins = async (connection: WorkspaceConnection, store: WorkspaceStore, entryId: string): Promise<HomePin[]> => {
  const pins = pinsOf(await readStored(connection), entryId);
  if (pins) return pins;
  const plan = await settledDefaultPlan(store, entryId);
  const seeded: HomePin[] = plan ? [{ kind: "plan", id: plan }] : [];
  await writePins(connection, entryId, seeded);
  return seeded;
};

// A plain notice: the store validates and freezes every notice it commits,
// and importing contracts' helper would split it out of the startup chunk.
const notice = (tone: WorkspaceNotice["tone"], key: string, fallback: string): WorkspaceNotice => ({ tone, key, fallback });

export const PINS_SAVE_FAILED = notice("error", "v4_notice_shortcuts_save_failed", "Home Assistant couldn't save your home shortcuts. Try again.");
