import type { HomePin, WorkspaceNotice, WorkspaceState } from "./contracts";
import type { EffectController } from "./effects";
import type { WorkspaceStore } from "./state";
import type { WorkspaceConnection } from "./workspace-transport";

/**
 * Home shortcuts live in one Home Assistant user's frontend data, per robot.
 * v2 keeps the displayed order and explicit exclusions separately. A v1
 * record contains only positive pins: migration preserves that order and
 * conservatively excludes every currently saved item absent from the list,
 * because the old format cannot distinguish an explicit off from no choice.
 */
export const HOME_PINS_KEY = "matic_robot_home_shortcuts";
const FORMAT_VERSION = 2;
const keyFor = (entryId: string): string => `${HOME_PINS_KEY}.${entryId}`;

const isPin = (value: unknown): value is HomePin => {
  if (!value || typeof value !== "object") return false;
  const { kind, id } = value as { kind?: unknown; id?: unknown };
  return (kind === "plan" || kind === "area") && typeof id === "string" && id.length > 0;
};
const clean = (value: unknown): HomePin[] => {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  return value.filter(isPin).filter(({ kind, id }) => {
    const key = `${kind}:${id}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map(({ kind, id }) => ({ kind, id }));
};
const same = (a: HomePin, b: HomePin): boolean => a.kind === b.kind && a.id === b.id;
const unique = (pins: readonly HomePin[]): HomePin[] => clean(pins);

interface StoredPins { readonly pins: HomePin[]; readonly excluded: HomePin[]; readonly mode: "new" | "legacy" | "v2" }
export interface LoadedPins extends StoredPins {}

const readPins = async (connection: WorkspaceConnection, entryId: string): Promise<StoredPins> => {
  const response = await connection.sendMessagePromise<{ value?: unknown } | null>({ type: "frontend/get_user_data", key: keyFor(entryId) });
  const record = response?.value as { version?: unknown; pins?: unknown; excluded?: unknown } | null | undefined;
  if (!record || typeof record !== "object") return { pins: [], excluded: [], mode: "new" };
  if (record.version === FORMAT_VERSION) return { pins: clean(record.pins), excluded: clean(record.excluded), mode: "v2" };
  if (Array.isArray(record.pins)) return { pins: clean(record.pins), excluded: [], mode: "legacy" };
  // Keep malformed existing data from being treated as a brand-new account.
  return { pins: [], excluded: [], mode: "legacy" };
};

/** Writes this user's ordered visible items and explicit exclusions to one robot's key. */
export const writePins = async (
  connection: WorkspaceConnection,
  entryId: string,
  pins: readonly HomePin[],
  excluded: readonly HomePin[] = [],
  stillOwned: () => boolean = () => true,
): Promise<void> => {
  if (!stillOwned()) return;
  await connection.sendMessagePromise({
    type: "frontend/set_user_data",
    key: keyFor(entryId),
    value: { version: FORMAT_VERSION, pins: unique(pins), excluded: unique(excluded) },
  });
};

/** Keeps awaiting catalogs bound to this robot; errors leave the decision pending. */
const catalogReady = (state: WorkspaceState, kind: HomePin["kind"]): boolean =>
  kind === "plan" ? state.resources.plans.status === "ready" && Boolean(state.resources.plans.value)
    : state.resources.areas.status === "ready" && Boolean(state.resources.areas.value);
const catalogPins = (state: WorkspaceState, kind: HomePin["kind"]): HomePin[] => kind === "plan"
  ? (state.resources.plans.value?.plans ?? []).map(({ id }) => ({ kind, id }))
  : (state.resources.areas.value?.areas ?? []).map(({ id }) => ({ kind, id }));

export const followPins = (
  store: WorkspaceStore,
  host: Pick<EffectController, "saveHomePin" | "saveHomePinState" | "homePinExclusions">,
  entryId: string,
  live: () => boolean,
  initialMode: StoredPins["mode"],
): void => {
  let mode = initialMode;
  let done = false;
  let unsubscribe: (() => void) | null = null;
  const ok = (state: WorkspaceState): boolean => live() && state.selection.entryId === entryId && state.homePins.status === "ready";
  const reconcile = (state: WorkspaceState): void => {
    if (done) return;
    if (!ok(state)) { done = true; unsubscribe?.(); return; }
    const bothReady = catalogReady(state, "plan") && catalogReady(state, "area");
    if (mode === "legacy") {
      if (!bothReady) return;
      const present = [...catalogPins(state, "plan"), ...catalogPins(state, "area")];
      const oldPins = state.homePins.pins;
      const excluded = [
        ...present.filter((pin) => !oldPins.some((existing) => same(existing, pin))),
        ...oldPins.filter((pin) => !present.some((existing) => same(existing, pin))),
      ];
      const nextPins = oldPins.filter((pin) => present.some((existing) => same(existing, pin)));
      mode = "v2";
      host.saveHomePinState(excluded);
      if (nextPins.length !== oldPins.length) store.patch({ homePins: { ...state.homePins, pins: nextPins } });
      return;
    }
    const readyKinds: HomePin["kind"][] = (["plan", "area"] as const).filter((kind) => catalogReady(state, kind));
    if (!readyKinds.length) return;
    const pins = [...state.homePins.pins];
    const excludedPins = [...host.homePinExclusions()];
    const excluded = new Set(excludedPins.map(({ kind, id }) => `${kind}:${id}`));
    let changed = false;
    for (const kind of readyKinds) {
      const present = catalogPins(state, kind);
      const missing = pins.filter((pin) => pin.kind === kind && !present.some((item) => same(item, pin)));
      for (const pin of missing) {
        if (!excluded.has(`${pin.kind}:${pin.id}`)) { excluded.add(`${pin.kind}:${pin.id}`); changed = true; }
        const index = pins.findIndex((item) => same(item, pin));
        if (index >= 0) { pins.splice(index, 1); changed = true; }
      }
      for (const pin of present) {
        if (!pins.some((item) => same(item, pin)) && !excluded.has(`${pin.kind}:${pin.id}`)) {
          pins.push(pin);
          changed = true;
        }
      }
    }
    if (changed) {
      const nextExcluded = [...excluded].map((value) => {
        const [kind, ...id] = value.split(":");
        return { kind: kind as HomePin["kind"], id: id.join(":") };
      });
      host.saveHomePinState(nextExcluded);
      store.patch({ homePins: { ...state.homePins, pins } });
    }
  };
  unsubscribe = store.subscribe(reconcile);
  // Catalogs can resolve before the user-data read. Evaluate the settled state
  // once after subscribing so those results initialize defaults/migrations
  // without waiting for an unrelated store patch.
  queueMicrotask(() => { if (!done) reconcile(store.value); });
  if (done) unsubscribe();
};

/** Reads one robot's record; followPins waits for ready catalogs to initialize or migrate it. */
export const loadPins = async (
  connection: WorkspaceConnection,
  _store: WorkspaceStore,
  entryId: string,
  stillOwned: () => boolean = () => true,
): Promise<LoadedPins> => {
  const record = await readPins(connection, entryId);
  if (!stillOwned()) return { pins: [], excluded: [], mode: "new" };
  return record;
};

const notice = (tone: WorkspaceNotice["tone"], key: string, fallback: string): WorkspaceNotice => ({ tone, key, fallback });
export const PINS_SAVE_FAILED = notice("error", "v4_notice_shortcuts_save_failed", "Home Assistant couldn't save your home shortcuts. Try again.");


/** Persistence runs from this already-lazy module so one-tap pins add no startup bytes. */
export class HomePinsPersistence {
  readonly #store: WorkspaceStore;
  readonly #connection: WorkspaceConnection;
  readonly #context: {
    readonly owner: () => string | null;
    readonly currentOwner: () => string | null;
    readonly epoch: () => number;
    readonly disposed: () => boolean;
    readonly onWrite: () => void;
  };
  #write: Promise<unknown> = Promise.resolve();
  #revisions = new Map<string, number>();
  #exclusions: HomePin[] = [];
  #orderRevision = 0;
  #mutationRevision = 0;

  constructor(
    store: WorkspaceStore,
    connection: WorkspaceConnection,
    context: {
      readonly owner: () => string | null;
      readonly currentOwner: () => string | null;
      readonly epoch: () => number;
      readonly disposed: () => boolean;
      readonly onWrite: () => void;
    },
  ) {
    this.#store = store;
    this.#connection = connection;
    this.#context = context;
  }

  reset(): void {
    this.#write = Promise.resolve();
    this.#revisions.clear();
    this.#exclusions = [];
    this.#orderRevision += 1;
    this.#mutationRevision += 1;
  }

  setExclusions(excluded: readonly HomePin[]): void { this.#exclusions = [...excluded]; }
  exclusions(): readonly HomePin[] { return this.#exclusions; }

  #writePins(onFailure: () => void): void {
    const entryId = this.#store.value.selection.entryId;
    const owner = this.#context.owner();
    const epoch = this.#context.epoch();
    if (!entryId || !owner || owner !== this.#context.currentOwner() || this.#store.value.homePins.status !== "ready") return;
    const current = (): boolean => !this.#context.disposed() && epoch === this.#context.epoch()
      && this.#context.currentOwner() === owner && this.#store.value.homePins.status === "ready";
    this.#write = this.#write.then(async () => {
      if (!current()) return;
      try {
        await writePins(this.#connection, entryId, this.#store.value.homePins.pins, this.#exclusions, current);
        if (current()) this.#context.onWrite();
      } catch {
        if (current()) onFailure();
      }
    }).catch(() => undefined);
  }

  saveState(excluded: readonly HomePin[]): void {
    this.#exclusions = [...excluded];
    this.#mutationRevision += 1;
    this.#writePins(() => this.#store.patch({ notice: PINS_SAVE_FAILED }));
  }

  savePin(pin: HomePin, pinned: boolean, previous: readonly HomePin[]): void {
    const matches = (candidate: HomePin): boolean => same(candidate, pin);
    const wasExcluded = this.#exclusions.some(matches);
    this.#exclusions = this.#exclusions.filter((candidate) => !matches(candidate));
    if (!pinned) this.#exclusions.push(pin);
    const key = `${pin.kind}:${pin.id}`;
    const revision = (this.#revisions.get(key) ?? 0) + 1;
    this.#revisions.set(key, revision);
    this.#mutationRevision += 1;
    this.#writePins(() => {
      if (this.#revisions.get(key) !== revision) return;
      this.#exclusions = this.#exclusions.filter((candidate) => !matches(candidate));
      if (wasExcluded) this.#exclusions.push(pin);
      const pins = this.#store.value.homePins.pins.filter((candidate) => !matches(candidate));
      if (!pinned) pins.splice(Math.min(Math.max(previous.findIndex(matches), 0), pins.length), 0, pin);
      this.#store.patch({ homePins: { status: "ready", pins }, notice: PINS_SAVE_FAILED });
    });
  }

  move(pin: HomePin, direction: -1 | 1): void {
    const state = this.#store.value;
    if (state.homePins.status !== "ready") return;
    const previous = [...state.homePins.pins];
    const index = previous.findIndex((candidate) => same(candidate, pin));
    const target = index + direction;
    if (index < 0 || target < 0 || target >= previous.length) return;
    const pins = [...previous];
    [pins[index], pins[target]] = [pins[target]!, pins[index]!];
    const revision = ++this.#orderRevision;
    const mutation = ++this.#mutationRevision;
    this.#store.patch({ homePins: { ...state.homePins, pins } });
    this.#writePins(() => {
      if (this.#orderRevision !== revision || this.#mutationRevision !== mutation) return;
      this.#store.patch({ homePins: { status: "ready", pins: [...previous] }, notice: PINS_SAVE_FAILED });
    });
  }
}
