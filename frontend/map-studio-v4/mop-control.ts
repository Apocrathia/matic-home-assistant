import { html, nothing } from "lit";
import type { CleaningMode } from "./backend-contracts";
import type { WorkspaceState } from "./contracts";
import type { Translate } from "./plan-copy";
import { WORKSPACE_ACTION_EVENT } from "./map-canvas";
import { canChangeRobotSetting, hasStoppableWork } from "./state";

/** One live robot setting, shown only in contexts that can mop. */
export const mopControl = (t: Translate, state: WorkspaceState, mode: CleaningMode, key: string) => {
  if (mode === "vacuum") return nothing;
  const setting = state.deepMop;
  const unavailable = !setting || setting.enabled === null;
  const pending = state.pendingAction === "set-deep-mop";
  const disabled = !canChangeRobotSetting(state);
  const label = `deep-mop-${key}`;
  return html`<div class="mop-setting">
    <span class="mop-setting-copy">
      <span id=${label}>${t("v4_deep_mop", "Double-pass mopping")}</span>
      <small id=${`${label}-scope`}>${pending
        ? t("v4_saving", "Saving…")
        : unavailable || !state.host.connected || !state.host.robotConnected || !state.host.administrator
          ? t("v4_setting_unavailable", "Unavailable")
          : state.managedLock || hasStoppableWork(state) ? t("v4_setting_busy", "Available when cleaning stops")
          : t("v4_deep_mop_scope", "All mopping · saves immediately")}</small>
    </span>
    ${unavailable ? nothing : html`<button class="ms-switch" type="button" role="switch"
      aria-labelledby=${label} aria-describedby=${`${label}-scope`}
      aria-checked=${String(setting?.enabled === true)} aria-disabled=${String(disabled)}
      aria-busy=${pending ? "true" : nothing}
      @click=${(event: Event) => {
        if (!disabled) event.currentTarget?.dispatchEvent(new CustomEvent(WORKSPACE_ACTION_EVENT, {
          detail: { id: "toggle-deep-mop" }, bubbles: true, composed: true,
        }));
      }}></button>`}
  </div>`;
};
