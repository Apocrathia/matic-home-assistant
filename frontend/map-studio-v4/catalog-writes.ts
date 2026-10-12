// Plan and area writes. They run only from a control inside a workflow, so
// effects.ts loads this module on the first write instead of at startup.
// Runtime imports are deliberately absent: an import edge into the startup
// modules makes esbuild split them into more chunks, which costs the startup
// graph more than this module saves. Startup helpers arrive in the context.
import type { HassProjection, PlanDraft, ResetCadenceAction, WorkspaceNotice, WorkspaceState } from "./contracts";
import type { MaticBackend } from "./backend";
import type { WorkspaceStore } from "./state";
import type { EffectController } from "./effects";

/** The startup functions the writes use; effects.ts passes the same ones it imports. */
export interface CatalogWriteHelpers {
  readonly notice: typeof import("./contracts").notice;
  readonly parseSavedPlanId: typeof import("./backend-contracts").parseSavedPlanId;
  readonly BackendError: typeof import("./backend").BackendError;
  readonly isAbort: (error: unknown) => boolean;
  readonly canEditCoordinates: typeof import("./state").canEditCoordinates;
  readonly initialWorkspaceState: typeof import("./state").initialWorkspaceState;
  readonly draftForPlan: typeof import("./state").draftForPlan;
  readonly hasStoppableWork: typeof import("./state").hasStoppableWork;
}

/**
 * One write, as EffectController started it. The write belongs to the moment
 * it was asked for: `state` is the workspace then, and `signal` is its
 * mutation resource, taken then, so a floor, entry or user change cancels it
 * whether the module or the request is still loading.
 */
export interface CatalogWriteContext {
  readonly state: WorkspaceState;
  readonly signal: AbortSignal;
  readonly store: WorkspaceStore;
  readonly backend: MaticBackend;
  readonly effects: Pick<EffectController, "loadPlans" | "loadAreas" | "selectPlan" | "selectArea">;
  readonly helpers: CatalogWriteHelpers;
  /** The write's failure notice; effects.ts shows the same one if this module fails to load. */
  readonly failure: WorkspaceNotice;
  /** The live projection; a completion for an older entry or user changes nothing. */
  projection(): HassProjection | null;
  disposed(): boolean;
  /** Gives back the mutation resource before the write's own follow-up reads finish. */
  release(): void;
}

export const saveArea = async (context: CatalogWriteContext): Promise<void> => {
  const { state, signal, store, backend, effects } = context;
  const { notice, canEditCoordinates, isAbort } = context.helpers;
  const entry = state.resources.entry;
  const draft = state.areaDraft;
  if (!entry || !canEditCoordinates(state) || !draft.name.trim() || !state.draw.circles.length) return;
  const current = (): boolean => !context.disposed() && !signal.aborted;
  store.patch({ command: "pending", notice: notice("info", "v4_notice_area_saving", "Saving area…") });
  try {
    const id = await backend.saveArea(entry.areasUrl, {
      areaId: draft.id,
      name: draft.name.trim(),
      circles: state.draw.circles,
      outline: state.draw.outline ?? null,
      cleaningMode: draft.cleaningMode,
      coverageSetting: draft.coverageSetting,
    }, signal);
    if (!current()) return;
    const latest = store.value;
    const sameDraft = latest.areaDraft === draft
      && latest.draw.circles === state.draw.circles && latest.draw.outline === state.draw.outline
      && latest.selection.entryId === state.selection.entryId
      && (latest.workflow === "draw" || latest.workflow === "areaReview");
    const savedDraft = sameDraft ? {
      ...draft, id, name: draft.name.trim(), status: "current" as const, canRebind: false, dirty: false,
    } : null;
    // The write acknowledgement is the save boundary. Refreshing the list
    // must not leave a successfully saved draft dirty or restore it after Back.
    store.patch({
      command: "idle", notice: notice("success", "v4_notice_area_saved", "Area saved"),
      ...(savedDraft ? {
        dialog: latest.dialog === "discardDraft" ? null : latest.dialog,
        selection: { ...latest.selection, areaId: id },
        areaDraft: savedDraft,
        draw: { ...latest.draw, dirty: false, strokeCount: 0, undo: [], redo: [], outlineUndo: [], outlineRedo: [] },
      } : {}),
    });
    const areas = await effects.loadAreas({ reconcileDraft: false });
    const refreshed = store.value;
    if (current() && savedDraft && refreshed.areaDraft === savedDraft
      && !refreshed.draw.dirty
      && (refreshed.workflow === "draw" || refreshed.workflow === "areaReview")
      && refreshed.selection.entryId === state.selection.entryId
      && areas && refreshed.resources.areas.value === areas
      && areas.areas.some((area) => area.id === id)) effects.selectArea(id);
  } catch (error) {
    if (isAbort(error) || !current()) return;
    store.patch({ command: "idle", notice: context.failure });
  }
};

export const deleteArea = async (context: CatalogWriteContext): Promise<void> => {
  const { state, signal, store } = context;
  const { notice, canEditCoordinates, isAbort } = context.helpers;
  const entry = state.resources.entry;
  const areaId = state.selection.areaId;
  if (!entry || !areaId || !canEditCoordinates(state)) return;
  const current = (): boolean => !context.disposed() && !signal.aborted;
  store.patch({ command: "pending", notice: null });
  try {
    await context.backend.deleteArea(entry.areasUrl, areaId, signal);
    if (!current()) return;
    store.patch({ command: "idle", notice: notice("success", "v4_notice_area_deleted", "Area deleted") });
    await context.effects.loadAreas();
  } catch (error) {
    if (!isAbort(error) && current()) store.patch({ command: "idle", notice: context.failure });
  }
};

export const savePlan = async (context: CatalogWriteContext): Promise<void> => {
  const { state, store, effects } = context;
  const { notice, canEditCoordinates, parseSavedPlanId, BackendError } = context.helpers;
  const draft = state.planDraft;
  const plans = state.resources.plans.value;
  if (!plans || !draft.name.trim() || !draft.rooms.length || !canEditCoordinates(state)) return;
  let savedId = draft.id;
  // Home Assistant makes a new plan the default only when none exists.
  const request = planSaveRequest(draft, plans.selectedPlan === draft.id);
  const saved = await serviceMutation(context, "save_plan", request, notice("success", "v4_notice_plan_saved", "Plan saved"), (response) => {
    const acknowledgedId = response === undefined && draft.id ? draft.id : parseSavedPlanId(response);
    if (draft.id && acknowledgedId !== draft.id) throw new BackendError("invalid-plan-save-response");
    savedId = acknowledgedId;
  });
  if (saved) {
    // A save may finish after Back/discard or after another editor opens.
    // Refresh the catalog in every case, but reconcile only the same draft.
    const savedDraft = store.value.workflow === "plan"
      && store.value.planDraft === draft ? { ...draft, id: savedId, dirty: false } : null;
    if (savedDraft) {
      store.patch({
        planDraft: savedDraft,
        selection: { ...store.value.selection, planId: savedId },
      });
      // The saved draft is clean, so the plan returns to Run (plan.md §5).
      store.dispatch({ type: "set-plan-view", view: "run" });
    }
    const catalog = await effects.loadPlans({ force: true, inPlace: true });
    if (savedDraft && store.value.workflow === "plan"
      && store.value.planDraft === savedDraft
      && store.value.selection.entryId === state.selection.entryId
      && catalog && store.value.resources.plans.value === catalog) {
      if (savedId && catalog.plans.some((plan) => plan.id === savedId)) effects.selectPlan(savedId, true);
    }
  }
};

export const deletePlan = async (context: CatalogWriteContext): Promise<void> => {
  const { state, store } = context;
  const planId = state.selection.planId;
  const entryId = state.selection.entryId;
  if (!planId) return;
  const deleted = await serviceMutation(
    context, "delete_plan", { plan: planId }, context.helpers.notice("success", "v4_notice_plan_deleted", "Plan deleted"),
  );
  if (deleted) {
    const current = store.value;
    if (current.selection.entryId === entryId && current.planDraft.id === planId) {
      store.patch({
        selection: { ...current.selection, planId: null },
        planDraft: context.helpers.initialWorkspaceState().planDraft,
      });
      if (current.workflow === "plan") store.patch({ workflow: "plans", precisionOpen: false });
    }
    await context.effects.loadPlans({ force: true, inPlace: true });
  }
};

export const resetRoomCadence = async (context: CatalogWriteContext, action: ResetCadenceAction): Promise<void> => {
  const { state, store } = context;
  const { notice } = context.helpers;
  if (state.selection.planId !== action.planId || state.planDraft.dirty
    || state.dataMode !== "live" || state.command !== "idle"
    || (state.activity !== "idle" && state.activity !== "docked")) return;
  const reset = await serviceMutation(
    context,
    "reset_room_cadence",
    { plan: action.planId, room_id: action.roomId, modes: [action.mode] },
    action.mode === "mop"
      ? notice("success", "v4_notice_reset_mop", "Mopping progress reset")
      : notice("success", "v4_notice_reset_vacuum", "Vacuum rotation progress reset"),
  );
  if (!reset) return;
  const catalog = await context.effects.loadPlans({ force: true, inPlace: true });
  const latest = store.value;
  if (!context.disposed() && latest.selection.entryId === state.selection.entryId
    && latest.selection.planId === action.planId && !latest.planDraft.dirty
    && catalog && latest.resources.plans.value === catalog) {
    context.effects.selectPlan(action.planId, true);
  }
};

/**
 * The Run switch (plan.md §5). It shows the change at once, reads the catalog
 * in place, then saves the plan as Home Assistant now holds it with only
 * `enabled` changed. A failed read or send puts the switch back.
 */
export const setPlanEnabled = async (context: CatalogWriteContext, enabled: boolean): Promise<void> => {
  const { state, store, effects } = context;
  const { notice, canEditCoordinates, hasStoppableWork, draftForPlan } = context.helpers;
  const id = state.planDraft.id;
  // Admitted when asked for and still now, for the same clean saved plan.
  const switchable = (value: WorkspaceState): boolean => value.workflow === "plan" && value.planView === "run"
    && value.planDraft === state.planDraft && !value.planDraft.dirty && value.command === "idle"
    && canEditCoordinates(value) && !hasStoppableWork(value);
  const writer = planWriter(context);
  if (!id || !writer || !switchable(state) || !switchable(store.value)) return;
  const switched = store.dispatch({ type: "set-plan-enabled", enabled }).planDraft;
  store.patch({ command: "pending", pendingAction: "save-plan", notice: null });
  const catalog = await effects.loadPlans({ force: true, inPlace: true });
  const plan = catalog?.plans.find((candidate) => candidate.id === id);
  const sent = catalog && plan
    ? await writer.send("save_plan", planSaveRequest({ ...draftForPlan(plan), enabled }, catalog.selectedPlan === id))
    : writer.current() ? false : null;
  if (sent === null) return;
  store.patch({
    command: "idle",
    notice: !sent ? context.failure : enabled
      ? notice("success", "v4_notice_plan_on", "Plan turned on")
      : notice("success", "v4_notice_plan_paused", "Plan paused"),
    ...(!sent && store.value.planDraft === switched ? { planDraft: state.planDraft } : {}),
  });
  if (sent) await effects.loadPlans({ force: true, inPlace: true });
};

/** The one `save_plan` request shape, for Save and the Run switch. Parked rooms are never sent. */
const planSaveRequest = (draft: PlanDraft, select: boolean): Record<string, unknown> => ({
  ...(draft.id ? { plan_id: draft.id } : {}),
  name: draft.name.trim(),
  enabled: draft.enabled,
  run_behavior: draft.runBehavior,
  rooms: draft.rooms.map((room) => ({
    room: room.roomId,
    cleaning_mode: room.cleaningMode,
    coverage_setting: room.coverageSetting,
    ...(room.cadence ? {
      cadence: {
        scope: room.cadence.scope,
        mop_every_n: room.cadence.mopEveryN,
        coverage_every_n: room.cadence.coverageEveryN,
        periodic_coverage_setting: room.cadence.periodicCoverageSetting,
        do_mop_next: room.cadence.doMopNext,
        do_coverage_next: room.cadence.doCoverageNext,
      },
    } : {}),
  })),
  return_to_base: draft.returnToBase,
  finish_current_room: draft.finishCurrentRoom,
  finish_current_room_threshold: draft.finishCurrentRoomThreshold,
  select,
});

/** Save, delete and Reset: refused unless the map is editable, then pending as a plan save. */
const serviceMutation = async (
  context: CatalogWriteContext,
  service: string,
  data: Readonly<Record<string, unknown>>,
  success: WorkspaceNotice,
  onAcknowledged?: (response: unknown) => void,
): Promise<boolean> => {
  const { notice, canEditCoordinates } = context.helpers;
  const writer = planWriter(context);
  if (!writer || !canEditCoordinates(context.state)) return false;
  context.store.patch({ command: "pending", pendingAction: "save-plan", notice: notice("info", "v4_notice_saving", "Saving…") });
  const sent = await writer.send(service, data, onAcknowledged);
  if (sent !== null) context.store.patch({ command: "idle", notice: sent ? success : context.failure });
  return sent === true;
};

/**
 * Sends plan-catalog writes for the entry and user of this moment. `send`
 * resolves true once Home Assistant acknowledges, false when the write failed
 * and null when the answer arrives for an older entry or user, which then
 * changes nothing.
 */
const planWriter = (context: CatalogWriteContext) => {
  const projection = context.projection();
  const entityId = projection?.vacuumEntityId;
  if (!entityId) return null;
  const current = (): boolean => !context.disposed() && !context.signal.aborted
    && projection.entryKey === context.projection()?.entryKey && projection.userKey === context.projection()?.userKey;
  const send = async (
    service: string,
    data: Readonly<Record<string, unknown>>,
    onAcknowledged?: (response: unknown) => void,
  ): Promise<boolean | null> => {
    try {
      const response = await context.backend.service("matic_robot", service, data, entityId, {
        acknowledgementTimeout: "mutation",
        ...(onAcknowledged ? { returnResponse: true } : {}),
      });
      if (!current()) return null;
      onAcknowledged?.(response);
      return true;
    } catch {
      return current() ? false : null;
    } finally {
      // Home Assistant has answered, so the next plan write may start while
      // this one reloads the catalog.
      context.release();
    }
  };
  return { current, send };
};
