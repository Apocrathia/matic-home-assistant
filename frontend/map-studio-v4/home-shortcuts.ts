import { html, nothing } from "lit";
import { icon, iconCleaning, iconDue, iconNoticeWarning } from "./icons";
import type { SavedArea, SavedPlan } from "./backend-contracts";
import type { HomePin, PrimaryAction, WorkspaceIntent, WorkspaceState } from "./contracts";
import { areaSelection, draftForPlan, selectPrimaryAction } from "./state";
import { dueLines, planRowLine2, type Translate } from "./plan-copy";
import { settingLabel } from "./plan-cadence";
import { actionReason } from "./plan-heading";

/**
 * Home shortcuts (owner, 2026-10-13): a saved plan or custom area the user
 * chose "Show on home" for runs with one tap. Each is gated exactly as its
 * own screen's primary is: the shortcut asks `selectPrimaryAction` what that
 * screen would offer, so it runs only when Run plan or Clean this area would,
 * and otherwise shows that button's reason. The tap itself goes through the
 * same action (the shell's `run`), never a new command.
 */
export interface ShortcutHost {
  readonly state: WorkspaceState;
  readonly t: Translate;
  /** Home is held (busy, locating, map not ready): every card says why through the home reason. */
  readonly held: boolean;
  readonly run: (pin: HomePin) => void;
  readonly emit: (intent: WorkspaceIntent) => void;
}

/** What the plan's Run view would offer now (a list being reread or that failed holds it there too). */
export const planShortcutAction = (state: WorkspaceState, plan: SavedPlan) => selectPrimaryAction({
  ...state,
  workflow: "plan",
  planView: "run",
  selection: { ...state.selection, planId: plan.id },
  planDraft: draftForPlan(plan),
});

/** What the saved area's screen would offer now. */
export const areaShortcutAction = (state: WorkspaceState, area: SavedArea) => selectPrimaryAction({
  ...state,
  ...areaSelection(state, area.id),
  workflow: "areaReview",
});

// An area that needs checking offers Save area on its screen, not Clean, so
// the shortcut says what to do instead.
const CHECK_AREA = { label: "", kind: "primary", enabled: false, id: "check-area", reason: "Can't clean this area until you check it.", reasonKey: "v4_reason_check_area" } as const;

// A shortcut is one button that runs (owner, 2026-10-14): it leads with the
// play glyph, so it reads as "starts now", unlike the cards that open a
// screen. Changing a plan or area is Your plans' or Your areas' job.
const shortcut = (host: ShortcutHost, pin: HomePin, name: string, title: string, lines: unknown, action: PrimaryAction | null, run: string, chip: unknown) => {
  const { t, held } = host;
  const enabled = !held && action?.id === run && action.enabled;
  const reasonAction = held || enabled ? null : action;
  // Only the name is isolated (copy-style <bdi>).
  const [before = "", after = ""] = title.split("\u0000");
  return html`<button
    class="ms-row ms-row--card shortcut"
    type="button"
    data-launcher=${`run:${pin.kind}:${pin.id}`}
    aria-disabled=${enabled ? nothing : "true"}
    aria-describedby=${held ? "home-reason" : nothing}
    @click=${() => { if (enabled) host.run(pin); }}
  >
    <span class="ms-row__lead">${icon(iconCleaning)}</span>
    <span class="ms-row__body">
      <strong class="card-title"><span class="card-name">${before}<bdi>${name}</bdi>${after}</span>${chip}</strong>
      ${lines}
      ${reasonAction?.reason ? html`<span class="card-lines"><span class="line" data-tone="warning">${icon(iconNoticeWarning)}${actionReason(t, reasonAction, false, host.emit)}</span></span>` : nothing}
    </span>
  </button>`;
};

const planShortcut = (host: ShortcutHost, pin: HomePin, plan: SavedPlan) => {
  const { t, state } = host;
  const action = planShortcutAction(state, plan);
  const due = plan.enabled ? dueLines(t, state.locale, plan.nextRunPreview?.rooms ?? []) : [];
  return shortcut(
    host, pin, plan.name, t("v4_run_named_plan", "Run {plan}", { plan: "\u0000" }),
    html`<small>${planRowLine2(t, state.locale, plan)}</small>${due.length ? html`<span class="card-lines">${due.map((line) => html`<span class="line">${icon(iconDue)}${line}</span>`)}</span>` : nothing}`,
    "label" in action ? action : null, "run-plan",
    plan.enabled ? nothing : html`<span class="ms-chip">${t("v4_paused", "Paused")}</span>`,
  );
};

const areaShortcut = (host: ShortcutHost, pin: HomePin, area: SavedArea) => {
  const { t, state } = host;
  const action = areaShortcutAction(state, area);
  return shortcut(
    host, pin, area.name, t("v4_clean_named_area", "Clean {area}", { area: "\u0000" }),
    html`<small>${settingLabel(t, area)}</small>`,
    !("label" in action) ? null : action.id === "save-area" ? CHECK_AREA : action, "run-area",
    nothing,
  );
};

/** The pinned shortcuts in the order they were added, and a quiet line when they could not be read. */
export const homeShortcuts = (host: ShortcutHost) => {
  const { state, t } = host;
  // A catalog being reread or that failed to reread keeps its last list, as
  // the plan's own Run view does; the gate below is that view's.
  const plans = state.resources.plans.value?.plans ?? [];
  const areas = state.resources.areas.value?.areas ?? [];
  return html`${state.homePins.pins.map((pin) => {
    if (pin.kind === "plan") {
      const plan = plans.find((candidate) => candidate.id === pin.id);
      return plan ? planShortcut(host, pin, plan) : nothing;
    }
    const area = areas.find((candidate) => candidate.id === pin.id);
    return area ? areaShortcut(host, pin, area) : nothing;
  })}${state.homePins.status === "error" ? html`<p class="pins-error">${t("v4_shortcuts_unavailable", "Home Assistant couldn't load your home shortcuts.")} <button
    class="ms-btn ms-btn--secondary"
    type="button"
    @click=${() => host.emit({ type: "reload-home-pins" })}
  >${t("v4_retry", "Try again")}</button></p>` : nothing}`;
};

/**
 * "Show on home" on a saved plan's Run view and a saved area's screen. It
 * waits while the shortcuts load, says why it can't change after a failed
 * read, and is absent where Home Assistant has no user data to keep it in.
 */
export const homePinSwitch = (t: Translate, state: WorkspaceState, pin: HomePin, emit: (intent: WorkspaceIntent) => void) => {
  const { status, pins } = state.homePins;
  if (status === "unavailable") return nothing;
  const pinned = pins.some((candidate) => candidate.kind === pin.kind && candidate.id === pin.id);
  const reason = status === "ready" ? null
    : status === "error"
      ? t("v4_reason_shortcuts_unavailable", "Can't change this until you choose Try again on the home screen.")
      : t("v4_reason_shortcuts_loading", "Waiting for Home Assistant to load your home shortcuts.");
  return html`
    <div class="switch-row">
      <span class="switch-copy">
        <span id="pin-label">${t("v4_show_on_home", "Show on home")}</span>
        <small id="pin-hint">${pin.kind === "plan"
          ? t("v4_show_plan_on_home_hint", "Adds a one-tap button for this plan to the Matic Map home screen.")
          : t("v4_show_area_on_home_hint", "Adds a one-tap button for this area to the Matic Map home screen.")}</small>
      </span>
      <button
        class="ms-switch"
        type="button"
        role="switch"
        aria-checked=${String(pinned)}
        aria-labelledby="pin-label"
        aria-describedby=${reason ? "pin-hint pin-reason" : "pin-hint"}
        aria-disabled=${reason ? "true" : nothing}
        @click=${() => { if (!reason) emit({ type: "set-home-pin", pin, pinned: !pinned }); }}
      ></button>
    </div>
    ${reason ? html`<p class="reason" id="pin-reason">${reason}</p>` : nothing}
  `;
};
