import type { DialogKind, Localize } from "./contracts";
import { translate } from "./localize";
import type { DeleteSubject } from "./state";

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
  localize?: Localize,
  resetRoomName = "room",
  sharedCadence = false,
  resetMode: "mop" | "coverage" = "mop",
  subject?: DeleteSubject,
): DialogPresentation | undefined => {
  const t = (key: string, fallback: string, placeholders?: Record<string, string | number>): string =>
    translate(localize, key, fallback, placeholders);
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
