import { html, nothing } from "lit";
import type {
  CadenceReason,
  CleaningMode,
  CoverageSetting,
  PlanRoom,
  PlansCatalog,
  RoomCadencePolicy,
  RoomCadenceProgress,
} from "./backend-contracts";
import type { WorkspaceIntent, WorkspaceState } from "./contracts";
import { formatNumber, type Translate } from "./plan-copy";
import { roomBlockReason } from "./state";

export const MODES: readonly CleaningMode[] = ["vacuum", "mop", "vacuum_and_mop"];
export const COVERAGES: readonly CoverageSetting[] = ["quick", "standard", "heavy_duty"];

export const modeLabel = (t: Translate, mode: CleaningMode): string =>
  mode === "vacuum" ? t("vacuum", "Vacuum") : mode === "mop" ? t("mop", "Mop") : t("vacuum_and_mop", "Vacuum + mop");

export const coverageLabel = (t: Translate, value: CoverageSetting): string =>
  value === "quick" ? t("quick", "Quick") : value === "standard" ? t("standard", "Optimal") : t("heavy_duty", "Heavy duty");

export const coverageNeedsVacuum = (t: Translate): string =>
  t("v4_cadence_coverage_requires_vacuum", "The vacuum rotation needs a cleaning mode that includes vacuuming, so change the mode or turn the rotation off.");

const cadenceFor = (room: PlanRoom): RoomCadencePolicy => room.cadence || {
  scope: "plan",
  mopEveryN: null,
  coverageEveryN: null,
  periodicCoverageSetting: null,
  doMopNext: false,
  doCoverageNext: false,
};

/** A room schedule's state in one or two sentences, most urgent first. */
export const cadenceSummary = (
  t: Translate,
  policy: RoomCadencePolicy | undefined,
  progress: PlanRoom["cadenceProgress"] | undefined,
  reasons: readonly CadenceReason[] = progress?.reasons || [],
): string => {
  if (reasons.includes("coverage_requires_vacuum")) return coverageNeedsVacuum(t);
  if (reasons.includes("identity_changed") || reasons.includes("room_not_on_current_map")) {
    return t("v4_cadence_identity_blocked", "This room's schedule was set up on a different map, so it can't run. Review the room's schedule before cleaning.");
  }
  if (reasons.includes("shared_schedule_unavailable")) {
    return t("v4_cadence_shared_unavailable", "The shared room schedule is unavailable. Review its settings before cleaning.");
  }
  if (reasons.includes("mop_progress_unverified") || reasons.includes("coverage_progress_unverified")) {
    const unverified: string[] = [];
    if (reasons.includes("mop_progress_unverified")) {
      unverified.push(t("v4_cadence_mop_progress_unverified", "Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm."));
    }
    if (reasons.includes("coverage_progress_unverified")) {
      unverified.push(t("v4_cadence_coverage_progress_unverified", "Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm."));
    }
    return unverified.join(" ");
  }
  if (reasons.includes("invalid_cadence_policy")) {
    return t("v4_cadence_policy_invalid", "The room schedule needs review before it can be applied.");
  }
  if (!policy || (!policy.mopEveryN && !policy.coverageEveryN)) {
    return t("v4_cadence_not_enabled", "No recurring room schedule is enabled.");
  }
  const parts: string[] = [];
  const mopDue = progress?.mopDue || progress?.reasons.includes("mop_due");
  const coverageDue = progress?.coverageDue || progress?.reasons.includes("coverage_due");
  if (policy.mopEveryN) {
    parts.push(mopDue
      ? t("v4_cadence_mop_due", "Vacuum and mop is due on this clean.")
      : t("v4_cadence_mop_progress", "Mop every {interval} cleans; {completed} counted since the last mop.", {
        interval: policy.mopEveryN,
        completed: progress?.mopProgress ?? 0,
      }));
  }
  if (policy.coverageEveryN) {
    parts.push(coverageDue
      ? t("v4_cadence_coverage_due", "{coverage} vacuum rotation is due on this clean.", {
        coverage: coverageLabel(t, policy.periodicCoverageSetting || "standard"),
      })
      : t("v4_cadence_coverage_progress", "Vacuum rotation every {interval} cleans; {completed} counted so far.", {
        interval: policy.coverageEveryN,
        completed: progress?.coverageProgress ?? 0,
      }));
  }
  return parts.join(" ");
};

// ---- The schedule model (room-schedule.md §3-§6) ----------------------------

export type ScheduleKind = "mop" | "coverage";
export const INTERVAL_MIN = 1;
export const INTERVAL_MAX = 100;

/** A room with no schedule yet counts across all plans (room-schedule.md §5 Scope). */
const OFF: RoomCadencePolicy = {
  scope: "shared",
  mopEveryN: null,
  coverageEveryN: null,
  periodicCoverageSetting: null,
  doMopNext: false,
  doCoverageNext: false,
};

export const hasSchedule = (policy: RoomCadencePolicy | null | undefined): boolean =>
  Boolean(policy && (policy.mopEveryN !== null || policy.coverageEveryN !== null));

/** What a committed field becomes: bad input keeps the value, empty is Off, numbers snap into 1 to 100. */
export const snapInterval = (raw: string, badInput: boolean, current: number | null): number | null => {
  if (badInput) return current;
  const text = raw.trim();
  if (text === "") return null;
  const value = Number(text);
  return Number.isFinite(value) ? Math.min(INTERVAL_MAX, Math.max(INTERVAL_MIN, Math.round(value))) : current;
};

/** "−" at 1 turns the row Off, "+" at Off gives 1, and the ends stay put. */
export const stepInterval = (current: number | null, delta: -1 | 1): number | null =>
  current === null
    ? delta > 0 ? INTERVAL_MIN : null
    : current + delta < INTERVAL_MIN ? null : Math.min(INTERVAL_MAX, current + delta);

export interface ScheduleInput {
  /** The draft room. */
  readonly room: PlanRoom;
  /** That room in the saved plan. */
  readonly saved: PlanRoom | undefined;
  readonly catalogRoom: PlansCatalog["rooms"][number] | undefined;
  /** The room's name, for {room}. */
  readonly name: string;
  /** The level chosen while the rotation is Off, held by the view (never a draft patch). */
  readonly offLevel: CoverageSetting | null;
}

export interface ScheduleRow {
  readonly every: number | null;
  /** The label line, which also names the field. */
  readonly label: string;
  /** The status line; null shows none. */
  readonly status: string | null;
  /** A reason that replaces the status line. */
  readonly reason: string | null;
  /** A mode conflict: the stepper is held by `reason`. */
  readonly blocked: boolean;
  /** Progress Home Assistant can't confirm: Reset shows under the reason. */
  readonly unverified: boolean;
}

export interface NextClean {
  readonly label: string;
  readonly on: boolean;
  readonly mop: boolean;
  readonly coverage: boolean;
}

export interface ScheduleModel {
  /** The draft cadence, or Off counted across all plans. */
  readonly policy: RoomCadencePolicy;
  /** The rotation's level as shown. */
  readonly level: CoverageSetting;
  readonly mop: ScheduleRow;
  readonly coverage: ScheduleRow;
  /** A rotation on a mop-only room, which only "Turn off" can fix. */
  readonly legacyCoverage: boolean;
  /** The reason under the heading for a schedule from another map or one that needs fixing. */
  readonly roomReason: string | null;
  readonly sharedHint: boolean;
  /** Joining a shared schedule: both rows read-only until Save. */
  readonly joinPending: boolean;
  /** The saved room already uses the shared schedule. */
  readonly participating: boolean;
  readonly next: NextClean | null;
  readonly explanation: string | null;
  readonly scope: "shared" | "plan";
  /** Which progress the room menu can reset: only saved progress. */
  readonly resettable: { readonly mop: boolean; readonly coverage: boolean };
}

const ROTATION: Record<CoverageSetting, (t: Translate, count: string | null, one: boolean) => string> = {
  quick: (t, count, one) => count === null
    ? t("v4_cadence_coverage_quick_off", "Quick vacuum")
    : one
      ? t("v4_cadence_coverage_quick_one", "Quick vacuum every clean")
      : t("v4_cadence_coverage_quick", "Quick vacuum every {count} cleans", { count }),
  standard: (t, count, one) => count === null
    ? t("v4_cadence_coverage_optimal_off", "Optimal vacuum")
    : one
      ? t("v4_cadence_coverage_optimal_one", "Optimal vacuum every clean")
      : t("v4_cadence_coverage_optimal", "Optimal vacuum every {count} cleans", { count }),
  heavy_duty: (t, count, one) => count === null
    ? t("v4_cadence_coverage_heavy_off", "Heavy duty vacuum")
    : one
      ? t("v4_cadence_coverage_heavy_one", "Heavy duty vacuum every clean")
      : t("v4_cadence_coverage_heavy", "Heavy duty vacuum every {count} cleans", { count }),
};

const NEXT: Record<CoverageSetting, (t: Translate, mop: boolean) => string> = {
  quick: (t, mop) => mop
    ? t("v4_cadence_next_mop_quick", "Mop and quick vacuum on the next clean")
    : t("v4_cadence_next_quick", "Quick vacuum on the next clean"),
  standard: (t, mop) => mop
    ? t("v4_cadence_next_mop_optimal", "Mop and optimal vacuum on the next clean")
    : t("v4_cadence_next_optimal", "Optimal vacuum on the next clean"),
  heavy_duty: (t, mop) => mop
    ? t("v4_cadence_next_mop_heavy", "Mop and heavy duty vacuum on the next clean")
    : t("v4_cadence_next_heavy", "Heavy duty vacuum on the next clean"),
};

const mopLabel = (t: Translate, locale: string, every: number | null): string =>
  every === null
    ? t("v4_cadence_mop_off", "Mop")
    : every === 1
      ? t("v4_cadence_mop_interval_one", "Mop every clean")
      : t("v4_cadence_mop_interval", "Mop every {count} cleans", { count: formatNumber(locale, every) });

const rotationLabel = (t: Translate, locale: string, level: CoverageSetting, every: number | null): string =>
  ROTATION[level](t, every === null ? null : formatNumber(locale, every), every === 1);

/** The reasons that hold the whole block, shown under its heading (plan.md R3 text). */
const ROOM_REASONS: readonly CadenceReason[] = ["identity_changed", "room_not_on_current_map", "shared_schedule_unavailable", "invalid_cadence_policy"];

interface Facts {
  readonly policy: RoomCadencePolicy;
  readonly shared: RoomCadencePolicy | undefined;
  readonly sharedExists: boolean;
  readonly participating: boolean;
  readonly joinPending: boolean;
  readonly progress: RoomCadenceProgress | undefined;
  readonly reasons: readonly CadenceReason[];
  readonly savedPolicy: RoomCadencePolicy | undefined;
}

const facts = ({ room, saved, catalogRoom }: ScheduleInput): Facts => {
  const policy = room.cadence ?? OFF;
  const shared = catalogRoom?.sharedCadence;
  const sharedExists = shared !== undefined;
  const participating = saved?.cadence?.scope === "shared";
  const joinPending = sharedExists && !participating && room.cadence?.scope === "shared";
  return {
    policy,
    shared,
    sharedExists,
    participating,
    joinPending,
    progress: joinPending ? catalogRoom?.sharedCadenceProgress : room.cadenceProgress,
    reasons: joinPending ? catalogRoom?.sharedCadenceReasons ?? [] : room.cadenceReasons ?? [],
    savedPolicy: saved?.cadence,
  };
};

const FIELDS = {
  mop: { every: "mopEveryN", flag: "doMopNext", next: "nextMopIn" },
  coverage: { every: "coverageEveryN", flag: "doCoverageNext", next: "nextCoverageIn" },
} as const;

/** How often changed from a saved value (a join is not an edit). */
const edited = (f: Facts, kind: ScheduleKind): boolean => {
  const field = FIELDS[kind].every;
  const before = f.savedPolicy?.[field] ?? null;
  return !f.joinPending && before !== null && f.policy[field] !== null && f.policy[field] !== before;
};

/** The work the switch can bring forward: on, not every clean, and not already due next clean. */
const named = (f: Facts, kind: ScheduleKind): boolean => {
  const every = f.policy[FIELDS[kind].every];
  const nextIn = f.progress?.[FIELDS[kind].next] ?? null;
  return every !== null && every > 1 && (f.policy[FIELDS[kind].flag] || edited(f, kind) || nextIn !== 1);
};

const statusLine = (t: Translate, locale: string, f: Facts, kind: ScheduleKind): string | null => {
  const every = f.policy[FIELDS[kind].every];
  const nextIn = f.progress?.[FIELDS[kind].next] ?? null;
  if (every === null) return t("v4_cadence_status_off", "Not scheduled");
  if (every === 1) return t("v4_cadence_status_every", "Due every clean");
  if (f.policy[FIELDS[kind].flag]) return t("v4_cadence_status_next", "Due next clean");
  if (edited(f, kind)) return t("v4_cadence_status_edited", "Keeps the progress so far");
  const scopeChanged = !f.joinPending && f.savedPolicy !== undefined && f.savedPolicy.scope !== f.policy.scope;
  if (scopeChanged || nextIn === null) return null;
  return nextIn <= 1
    ? t("v4_cadence_status_next", "Due next clean")
    : t("v4_cadence_status_in", "Due in {count} cleans", { count: formatNumber(locale, nextIn) });
};

const explanation = (t: Translate, f: Facts, name: string): string | null => {
  const { policy, participating } = f;
  const scheduled = hasSchedule(policy);
  if (f.joinPending) {
    return t("v4_cadence_shared_join_effect", "Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");
  }
  if (participating && policy.scope === "plan") {
    return t("v4_cadence_shared_leave_effect", "Saving starts new progress for this plan only, and other plans keep the shared schedule.");
  }
  if (!participating && policy.scope === "shared" && scheduled) {
    return t("v4_cadence_new_shared_effect", "Saving creates a schedule shared by every plan that uses this room, starting from zero.");
  }
  if (policy.scope === "plan" && scheduled && !hasSchedule(f.savedPolicy)) {
    return t("v4_cadence_new_private_effect", "Saving starts progress for this plan only, from zero.");
  }
  if (f.savedPolicy && (policy.mopEveryN !== f.savedPolicy.mopEveryN || policy.coverageEveryN !== f.savedPolicy.coverageEveryN)) {
    return t("v4_cadence_existing_effect", "Changing how often keeps the progress, and turning a schedule off pauses it.");
  }
  return participating
    ? t("v4_cadence_shared_edit_effect", "Changes apply to every plan that uses {room}'s shared schedule.", { room: name })
    : null;
};

export const scheduleModel = (t: Translate, locale: string, input: ScheduleInput): ScheduleModel => {
  const f = facts(input);
  const { policy, reasons } = f;
  const { room, saved, name } = input;
  const coverageOn = policy.coverageEveryN !== null;
  const level = (coverageOn ? null : input.offLevel) ?? policy.periodicCoverageSetting ?? "heavy_duty";
  const has = (reason: CadenceReason): boolean => reasons.includes(reason);
  const mopUnverified = has("mop_progress_unverified");
  const mopBlocked = !mopUnverified && room.cleaningMode !== "vacuum" && policy.mopEveryN === null;
  const coverageUnverified = has("coverage_progress_unverified");
  const legacyCoverage = !coverageUnverified && room.cleaningMode === "mop" && coverageOn;
  const coverageBlocked = !coverageUnverified && room.cleaningMode === "mop";
  const block = roomBlockReason(reasons.filter((reason) => ROOM_REASONS.includes(reason)), name);
  const namedMop = named(f, "mop");
  const namedCoverage = named(f, "coverage");
  const on = policy.doMopNext || policy.doCoverageNext;
  // With nothing left to bring forward, a set flag keeps the switch so it can be turned off.
  const labelMop = namedMop || (!namedCoverage && policy.doMopNext);
  const labelCoverage = namedCoverage || (!namedMop && policy.doCoverageNext);
  const savedHas = (count: number | undefined, flag: boolean | undefined, reason: CadenceReason): boolean =>
    saved !== undefined && ((count ?? 0) > 0 || Boolean(flag) || Boolean(saved.cadenceReasons?.includes(reason)));
  return {
    policy,
    level,
    mop: {
      every: policy.mopEveryN,
      label: mopLabel(t, locale, policy.mopEveryN),
      status: statusLine(t, locale, f, "mop"),
      reason: mopUnverified
        ? t("v4_cadence_mop_progress_unverified", "Can't run this schedule until you reset its mopping progress, which Home Assistant can't confirm.")
        : mopBlocked ? t("v4_cadence_mop_requires_vacuum", "Can't add a mop schedule until this room's cleaning mode is Vacuum.") : null,
      blocked: mopBlocked,
      unverified: mopUnverified,
    },
    coverage: {
      every: policy.coverageEveryN,
      label: rotationLabel(t, locale, level, policy.coverageEveryN),
      status: statusLine(t, locale, f, "coverage"),
      reason: coverageUnverified
        ? t("v4_cadence_coverage_progress_unverified", "Can't run this schedule until you reset its vacuum rotation progress, which Home Assistant can't confirm.")
        : legacyCoverage
          ? coverageNeedsVacuum(t)
          : coverageBlocked
            ? t("v4_cadence_coverage_available_modes", "Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.")
            : null,
      blocked: coverageBlocked,
      unverified: coverageUnverified,
    },
    legacyCoverage,
    roomReason: block ? t(block.reasonKey, block.reason, block.reasonPlaceholders) : null,
    sharedHint: f.sharedExists && !f.participating && policy.scope === "shared" && !hasSchedule(policy),
    joinPending: f.joinPending,
    participating: f.participating,
    next: labelMop || labelCoverage
      ? {
        label: labelCoverage ? NEXT[level](t, labelMop) : t("v4_cadence_next_mop", "Mop on the next clean"),
        on,
        mop: namedMop,
        coverage: namedCoverage,
      }
      : null,
    explanation: explanation(t, f, name),
    scope: policy.scope,
    resettable: {
      mop: savedHas(saved?.cadenceProgress?.mopProgress, saved?.cadence?.doMopNext, "mop_progress_unverified"),
      coverage: savedHas(saved?.cadenceProgress?.coverageProgress, saved?.cadence?.doCoverageNext, "coverage_progress_unverified"),
    },
  };
};

/** Joining copies the shared schedule exactly, as the backend adopts it on save. */
const joined = (f: Facts): RoomCadencePolicy | null =>
  f.shared && f.sharedExists && !f.participating ? { ...f.shared, scope: "shared" } : null;

/** The room's next cadence for a new "how often", or null when nothing may change. */
export const withInterval = (input: ScheduleInput, kind: ScheduleKind, every: number | null): RoomCadencePolicy | null => {
  const f = facts(input);
  const { policy } = f;
  if (f.joinPending) return null;
  if (every !== null && !hasSchedule(policy) && policy.scope === "shared") {
    const join = joined(f);
    if (join) return join;
  }
  if (kind === "mop") {
    return every === null ? { ...policy, mopEveryN: null, doMopNext: false } : { ...policy, mopEveryN: every };
  }
  if (every === null) return { ...policy, coverageEveryN: null, doCoverageNext: false };
  return policy.coverageEveryN === null
    ? { ...policy, coverageEveryN: every, periodicCoverageSetting: input.offLevel ?? policy.periodicCoverageSetting ?? "heavy_duty" }
    : { ...policy, coverageEveryN: every };
};

/** A new rotation level: a draft change only while the rotation is on. */
export const withLevel = (input: ScheduleInput, level: CoverageSetting): RoomCadencePolicy | null => {
  const f = facts(input);
  return f.joinPending || f.policy.coverageEveryN === null ? null : { ...f.policy, periodicCoverageSetting: level };
};

/** The next-clean switch: on flags the work its label names, off clears both. */
export const withNextClean = (input: ScheduleInput, on: boolean): RoomCadencePolicy | null => {
  const f = facts(input);
  if (f.joinPending) return null;
  const mop = named(f, "mop");
  const coverage = named(f, "coverage");
  if (!mop && !coverage && !f.policy.doMopNext && !f.policy.doCoverageNext) return null;
  return on
    ? { ...f.policy, doMopNext: mop, doCoverageNext: coverage }
    : { ...f.policy, doMopNext: false, doCoverageNext: false };
};

/** "Count cleans": back to all plans joins a shared schedule the plan doesn't use yet. */
export const withScope = (input: ScheduleInput, scope: "shared" | "plan"): RoomCadencePolicy => {
  const f = facts(input);
  return (scope === "shared" ? joined(f) : null) ?? { ...f.policy, scope };
};

/** "Turn off" for a rotation on a mop-only room. */
export const withoutLegacyCoverage = (policy: RoomCadencePolicy): RoomCadencePolicy => ({
  ...policy,
  scope: "plan",
  coverageEveryN: null,
  periodicCoverageSetting: null,
  doCoverageNext: false,
});

/** Why Reset can't run now, or null: it needs a clean draft, an idle robot and a live map. */
export const resetBlock = (t: Translate, state: WorkspaceState): string | null =>
  state.planDraft.dirty
    ? t("v4_reason_reset_unsaved", "Can't reset until you save or cancel your changes.")
    : state.command !== "idle" || state.managedLock || (state.activity !== "idle" && state.activity !== "docked") || state.dataMode !== "live"
      ? t("v4_reason_reset_busy", "Can't reset until the robot is idle and the map is live.")
      : null;

/** What the schedule block needs from the Edit view that shows it. */
export interface CadenceContext {
  readonly t: Translate;
  readonly state: WorkspaceState;
  readonly intent: (intent: WorkspaceIntent) => void;
  /** The shared reason's id while every Edit control is held (plan.md §4 E5), else null. */
  readonly held: string | null;
}

const patchCadence = (context: CadenceContext, index: number, patch: Partial<RoomCadencePolicy>): void => {
  const room = context.state.planDraft.rooms[index];
  if (!room || context.held) return;
  const rooms = context.state.planDraft.rooms.map((candidate, at) =>
    at === index ? { ...candidate, cadence: { ...cadenceFor(candidate), ...patch } } : candidate);
  context.intent({ type: "patch-plan-draft", patch: { rooms } });
};

const patchInterval = (context: CadenceContext, event: Event, index: number, field: "mopEveryN" | "coverageEveryN"): void => {
  const input = event.currentTarget as HTMLInputElement;
  const room = context.state.planDraft.rooms[index];
  if (!room) return;
  if (context.held) {
    input.value = cadenceFor(room)[field]?.toString() || "";
    return;
  }
  const raw = input.value;
  if (raw === "") {
    patchCadence(context, index, field === "mopEveryN" ? { mopEveryN: null, doMopNext: false } : { coverageEveryN: null, doCoverageNext: false });
    return;
  }
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1 || value > 100) {
    input.reportValidity();
    return;
  }
  patchCadence(context, index, field === "coverageEveryN"
    ? { coverageEveryN: value, periodicCoverageSetting: room.cadence?.periodicCoverageSetting || room.coverageSetting }
    : { mopEveryN: value });
};

/** A held select or checkbox shows the draft's value again and changes nothing. */
const keep = (context: CadenceContext, event: Event, value: string | boolean): boolean => {
  if (!context.held) return false;
  const input = event.currentTarget as HTMLInputElement;
  if (typeof value === "boolean") input.checked = value;
  else input.value = value;
  return true;
};

/** The room schedule block in an open Edit row (UX3 replaces it; room-schedule.md). */
export const cadenceControls = (context: CadenceContext, room: PlanRoom, index: number, label: string) => {
  const { t, state, held } = context;
  const draft = state.planDraft;
  const policy = cadenceFor(room);
  const progress = room.cadenceProgress;
  const savedRoom = draft.id
    ? state.resources.plans.value?.plans.find((plan) => plan.id === draft.id)?.rooms.find((candidate) => candidate.roomId === room.roomId)
    : undefined;
  const previousScope = savedRoom?.cadence?.scope ?? null;
  const sharedRoom = state.resources.plans.value?.rooms.find((candidate) => candidate.roomId === room.roomId);
  const hasSharedSchedule = Boolean(sharedRoom?.sharedCadence || sharedRoom?.sharedCadenceProgress);
  const hasCadence = Boolean(policy.mopEveryN || policy.coverageEveryN);
  const hasMopProgress = Boolean(progress?.mopProgress || policy.doMopNext || room.cadenceReasons?.includes("mop_progress_unverified"));
  const hasCoverageProgress = Boolean(progress?.coverageProgress || policy.doCoverageNext
    || room.cadenceReasons?.includes("coverage_progress_unverified"));
  const resetDisabled = draft.dirty || state.command !== "idle" || state.managedLock
    || (state.activity !== "idle" && state.activity !== "docked")
    || state.dataMode !== "live";
  const join = t("v4_cadence_shared_join_effect", "Saving shares this room's progress with every plan that uses it, picking up any progress already counted.");
  const scopeExplanation = previousScope !== null && previousScope !== policy.scope
    ? policy.scope === "shared"
      ? join
      : t("v4_cadence_shared_leave_effect", "Saving starts new progress for this plan only, and other plans keep the shared schedule.")
    : previousScope === null && hasCadence
      ? policy.scope === "shared"
        ? hasSharedSchedule ? join : t("v4_cadence_new_shared_effect", "Saving creates a schedule shared by every plan that uses this room, starting from zero.")
        : t("v4_cadence_new_private_effect", "Saving starts progress for this plan only, from zero.")
      : t("v4_cadence_existing_effect", "Changing how often keeps the progress, and turning a schedule off pauses it.");
  const gate = { disabled: held ? "true" : nothing, described: held ?? nothing };
  return html`
    <details class="plan-option cadence-config">
      <summary aria-disabled=${gate.disabled} aria-describedby=${gate.described}>${t("v4_room_cadence_named", "Room schedule for {room}", { room: label })}</summary>
      <p class="subtle">${t("v4_cadence_description", "Only cleans the robot confirms count toward these schedules, and due work stays due until a clean is confirmed.")}</p>
      <div class="cadence-fields">
        <label class="field ms-field">${t("v4_cadence_scope", "Count cleans")}
          <select aria-label=${t("v4_cadence_scope_named", "Count cleans for {room}", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} .value=${policy.scope}
            @change=${(event: Event) => { if (!keep(context, event, policy.scope)) patchCadence(context, index, { scope: (event.currentTarget as HTMLSelectElement).value as RoomCadencePolicy["scope"] }); }}>
            <option value="plan" ?selected=${policy.scope === "plan"}>${t("v4_cadence_this_plan", "In this plan only")}</option>
            <option value="shared" ?selected=${policy.scope === "shared"}>${t("v4_cadence_shared", "Across all plans (recommended)")}</option>
          </select>
        </label>
        <label class="field ms-field">${policy.mopEveryN === null ? t("v4_cadence_mop_off", "Mop") : policy.mopEveryN === 1 ? t("v4_cadence_mop_interval_one", "Mop every clean") : t("v4_cadence_mop_interval", "Mop every {count} cleans", { count: policy.mopEveryN })}
          <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${t("v4_cadence_mop_interval_named", "How often to mop {room}, every 1 to 100 cleans", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} ?readonly=${Boolean(held)} .value=${policy.mopEveryN?.toString() || ""} ?disabled=${room.cleaningMode !== "vacuum"} @change=${(event: Event) => patchInterval(context, event, index, "mopEveryN")}>
        </label>
        <label class="field ms-field">${t("v4_cadence_coverage_interval", "Vacuum rotation every N cleans")}
          <input type="number" min="1" max="100" step="1" inputmode="numeric" aria-label=${t("v4_cadence_coverage_interval_named", "How often to add a vacuum rotation in {room}, every 1 to 100 cleans", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} ?readonly=${Boolean(held)} ?disabled=${room.cleaningMode === "mop"} .value=${policy.coverageEveryN?.toString() || ""} @change=${(event: Event) => patchInterval(context, event, index, "coverageEveryN")}>
        </label>
        ${policy.coverageEveryN ? html`
          <label class="field ms-field">${t("v4_cadence_periodic_coverage", "Vacuum rotation level")}
            <select aria-label=${t("v4_cadence_periodic_coverage_named", "Vacuum rotation level for {room}", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} ?disabled=${room.cleaningMode === "mop"} .value=${policy.periodicCoverageSetting || "standard"}
              @change=${(event: Event) => { if (!keep(context, event, policy.periodicCoverageSetting || "standard")) patchCadence(context, index, { periodicCoverageSetting: (event.currentTarget as HTMLSelectElement).value as CoverageSetting }); }}
            >${COVERAGES.map((option) => html`<option value=${option} ?selected=${option === policy.periodicCoverageSetting}>${coverageLabel(t, option)}</option>`)}</select>
          </label>
        ` : nothing}
      </div>
      <p class="subtle" role="status">${scopeExplanation}</p>
      ${room.cleaningMode === "mop" ? html`
        <p class="subtle">${policy.coverageEveryN ? coverageNeedsVacuum(t) : t("v4_cadence_coverage_available_modes", "Can't add a vacuum rotation until this room's cleaning mode includes vacuuming.")}</p>
        ${policy.coverageEveryN ? html`<button type="button" class="ms-btn ms-btn--secondary" aria-disabled=${gate.disabled} aria-describedby=${gate.described}
          @click=${() => patchCadence(context, index, { scope: "plan", coverageEveryN: null, periodicCoverageSetting: null, doCoverageNext: false })}
        >${t("v4_cadence_clear_room_coverage", "Turn off")}</button>` : nothing}
      ` : nothing}
      ${room.cleaningMode !== "vacuum" ? html`<p class="subtle">${t("v4_cadence_mop_requires_vacuum", "Can't add a mop schedule until this room's cleaning mode is Vacuum.")}</p>` : nothing}
      ${policy.mopEveryN && room.cleaningMode === "vacuum" ? html`<p class="subtle">${t("v4_cadence_clear_mop_to_change_normal", "Can't change the cleaning mode until the mop schedule is off.")}</p>` : nothing}
      <div class="plan-options" role="group" aria-label=${t("v4_cadence_next_actions_named", "Next clean options for {room}", { room: label })}>
        <label class="plan-option"><input type="checkbox" aria-label=${t("v4_cadence_do_mop_next_named", "Do vacuum and mop on the next clean for {room}", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} .checked=${policy.doMopNext} ?disabled=${!policy.mopEveryN}
          @change=${(event: Event) => { if (!keep(context, event, policy.doMopNext)) patchCadence(context, index, { doMopNext: (event.currentTarget as HTMLInputElement).checked }); }}><span class="plan-option-copy"><strong>${t("v4_cadence_do_mop_next", "Do vacuum and mop on the next clean")}</strong></span></label>
        <label class="plan-option"><input type="checkbox" aria-label=${t("v4_cadence_do_coverage_next_named", "Add a vacuum rotation on the next clean for {room}", { room: label })} aria-disabled=${gate.disabled} aria-describedby=${gate.described} .checked=${policy.doCoverageNext} ?disabled=${!policy.coverageEveryN || room.cleaningMode === "mop"}
          @change=${(event: Event) => { if (!keep(context, event, policy.doCoverageNext)) patchCadence(context, index, { doCoverageNext: (event.currentTarget as HTMLInputElement).checked }); }}><span class="plan-option-copy"><strong>${t("v4_cadence_do_coverage_next", "Add a vacuum rotation on the next clean")}</strong></span></label>
      </div>
      ${policy.coverageEveryN ? html`<p class="subtle">${t("v4_cadence_coverage_verification_hint", "A vacuum rotation counts only after the robot confirms the vacuum coverage and that the clean finished. If it can't confirm, the rotation stays due for the next clean.")}</p>` : nothing}
      <p class="subtle" aria-live="polite">${cadenceSummary(t, policy, progress, room.cadenceReasons)}</p>
      ${draft.id && (policy.mopEveryN || policy.coverageEveryN || hasMopProgress || hasCoverageProgress) ? html`
        <div class="toolbar">
          ${policy.mopEveryN || hasMopProgress ? html`<button
            class="danger ms-btn ms-btn--secondary ms-btn--danger"
            type="button"
            aria-label=${t("v4_reset_mop_cadence_button_named", "Reset mopping progress for {room}", { room: label })}
            data-dialog-launcher="confirmResetCadence"
            ?disabled=${resetDisabled}
            @click=${() => context.intent({ type: "request-room-cadence-reset", planId: draft.id as string, roomId: room.roomId, mode: "mop" })}
          >${t("v4_reset_mop_cadence_button", "Reset mopping")}</button>` : nothing}
          ${policy.coverageEveryN || hasCoverageProgress ? html`<button
            class="danger ms-btn ms-btn--secondary ms-btn--danger"
            type="button"
            aria-label=${t("v4_reset_coverage_cadence_button_named", "Reset vacuum rotation progress for {room}", { room: label })}
            data-dialog-launcher="confirmResetCadence"
            ?disabled=${resetDisabled}
            @click=${() => context.intent({ type: "request-room-cadence-reset", planId: draft.id as string, roomId: room.roomId, mode: "coverage" })}
          >${t("v4_reset_coverage_cadence_button", "Reset vacuum rotation")}</button>` : nothing}
        </div>
        <p class="subtle">${t("v4_reset_cadence_hint", "Reset is available for a saved plan while the robot is idle. Cleaning history is kept separately.")}</p>
      ` : nothing}
    </details>
  `;
};
