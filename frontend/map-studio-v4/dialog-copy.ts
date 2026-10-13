import { isWorkspaceIntent } from "./contracts";
import type { DialogKind, Localize, ResetCadenceAction, WorkspaceIntent, WorkspaceState } from "./contracts";
import { needsDraftConfirmation } from "./draft-navigation";
import { translate } from "./localize";
import { PLAN_VIEWS_TAG, WORKFLOW_TAG } from "./element-tags";
import { deleteSubject } from "./state";

export interface DialogPresentation {
  readonly title: string;
  readonly detail: string;
  /** What else the delete changes: the default plan or the selected custom area. */
  readonly consequence?: string;
  readonly cancelLabel: string;
  readonly confirmLabel: string;
  readonly action: "discard" | "delete-plan" | "delete-area" | "reset-room-cadence";
}

/**
 * Every dialog opened from a control inside the workflow views. The shell owns
 * the draft confirmation and builds `discardDraft` itself, so that dialog
 * shows even when this chunk failed to load.
 */
export type WorkflowDialog = Exclude<DialogKind, "discardDraft">;

export const dialogCopy = (
  dialog: WorkflowDialog,
  state: WorkspaceState,
  localize?: Localize,
): DialogPresentation | undefined => {
  const t = (key: string, fallback: string, placeholders?: Record<string, string | number>): string =>
    translate(localize, key, fallback, placeholders);
  // Automations name the saved plan or area, never an unsaved rename.
  const subject = deleteSubject(state);
  const request = state.cadenceResetRequest;
  const plans = state.resources.plans.value;
  const resetRoomName = (request && plans?.rooms.find((room) => room.roomId === request.roomId)?.name)
    || request?.roomId || "room";
  const sharedCadence = request
    ? plans?.plans.find((plan) => plan.id === request.planId)
      ?.rooms.find((room) => room.roomId === request.roomId)?.cadence?.scope === "shared"
    : false;
  const resetMode = request?.mode ?? "mop";
  switch (dialog) {
    case "confirmDeletePlan":
      return subject && {
        title: t("v4_delete_plan", "Delete plan?"),
        detail: t("v4_delete_plan_detail", "Automations that run \"{name}\" will stop working, and the robot won't move.", { name: subject.name }),
        ...(subject.successor === undefined ? {} : {
          consequence: subject.successor === null
            ? t("v4_delete_plan_none", "You'll have no default plan.")
            : t("v4_delete_plan_default", "{new_default} becomes your default plan.", { new_default: subject.successor }),
        }),
        cancelLabel: t("v4_cancel", "Cancel"),
        confirmLabel: t("plan_delete", "Delete"),
        action: "delete-plan",
      };
    case "confirmDeleteArea":
      return subject && {
        title: t("v4_delete_area", "Delete area?"),
        detail: t("v4_delete_area_detail", "Automations that clean \"{name}\" will stop working, and the robot won't move.", { name: subject.name }),
        ...(subject.successor === undefined ? {} : {
          consequence: subject.successor === null
            ? t("v4_delete_area_none", "No custom area will be selected.")
            : t("v4_delete_area_selected", "{area} becomes the selected custom area.", { area: subject.successor }),
        }),
        cancelLabel: t("v4_cancel", "Cancel"),
        confirmLabel: t("area_delete", "Delete"),
        action: "delete-area",
      };
    case "confirmResetCadence":
      return {
        title: resetMode === "mop"
          ? t("v4_reset_mop_cadence_title", "Reset mopping progress?")
          : t("v4_reset_coverage_cadence_title", "Reset vacuum rotation progress?"),
        detail: sharedCadence
          ? t("v4_reset_shared_cadence_detail", "The count for {room} starts again in every plan that shares its schedule, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.", { room: resetRoomName })
          : t("v4_reset_private_cadence_detail", "The count for {room} starts again in this plan only, and work brought forward to the next clean goes back to its schedule. Other work and cleaning history don't change.", { room: resetRoomName }),
        cancelLabel: t("v4_cancel", "Cancel"),
        confirmLabel: t("v4_reset", "Reset"),
        action: "reset-room-cadence",
      };
  }
};

/**
 * The shell's look at each intent the views send: one that would lose a draft
 * asks first, in place of the intent; a dialog's explicit launcher is returned
 * for focus to come back to.
 */
export const dialogLauncher = (
  event: Event,
  state: WorkspaceState,
  ask: (intent: WorkspaceIntent) => void,
): HTMLElement | undefined => {
  const intent = event as CustomEvent<WorkspaceIntent>;
  if (!isWorkspaceIntent(intent.detail)) return;
  if (needsDraftConfirmation(state, intent.detail)) {
    event.stopPropagation();
    ask(intent.detail);
    return;
  }
  if (intent.detail?.type !== "open-dialog") return;
  // Safari does not focus a button when it is clicked with a pointing device.
  // The composed path may be retargeted, so keep only an explicit launcher.
  const launcher = intent.composedPath().find((candidate) => candidate instanceof HTMLElement
    && candidate.hasAttribute("data-dialog-launcher"));
  return launcher instanceof HTMLElement ? launcher : undefined;
};

/** A workflow dialog's confirm closes it, then asks for its write. */
export const confirmDialog = (
  state: WorkspaceState,
  action: Exclude<DialogPresentation["action"], "discard">,
  emit: (intent: WorkspaceIntent) => void,
  dispatch: (action: string | ResetCadenceAction) => void,
): void => {
  const request = state.cadenceResetRequest;
  emit({ type: "dismiss-top-layer" });
  if (action !== "reset-room-cadence") dispatch(action);
  else if (request) dispatch({ id: action, planId: request.planId, roomId: request.roomId, mode: request.mode });
};

/**
 * Where focus returns when a dialog closes, when that is not its launcher: a
 * schedule Reset returns to the header of the room that holds it, its
 * disclosure, since the menu or inline button may be gone (room-schedule.md §5).
 */
export const dialogReturnTarget = (previous: WorkspaceState, root: ParentNode): HTMLElement | null => {
  const request = previous.cadenceResetRequest;
  if (previous.dialog !== "confirmResetCadence" || !request) return null;
  const views = root.querySelector(WORKFLOW_TAG)?.shadowRoot?.querySelector(PLAN_VIEWS_TAG)?.shadowRoot;
  return views?.querySelector<HTMLElement>(`[data-room-disclosure="${CSS.escape(request.roomId)}"]`) ?? null;
};
