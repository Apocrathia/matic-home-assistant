import type { NextRunPreviewRoom, PlanRoom, SavedPlan } from "./backend-contracts";
import { formatList } from "./localize";

// Shared by the shell's home plan card and the plan views, so only what the
// card needs lives here (home-rooms.md R1); the rest is in plan-cadence.ts.

/** The views' translate: key, fallback and the values for its placeholders. */
export type Translate = (key: string, fallback: string, placeholders?: Readonly<Record<string, string | number>>) => string;

/** A count as the language writes it (plan.md §8). */
export const formatNumber = (locale: string, value: number): string => new Intl.NumberFormat(locale).format(value);

/**
 * The due lines (plan.md §6 `v4_due_*`): one whole string per due kind, in
 * the order mop, quick, optimal, heavy duty. A rotation's level is the
 * preview room's own vacuum coverage.
 */
export const dueLines = (t: Translate, locale: string, rooms: readonly NextRunPreviewRoom[]): string[] => {
  const due = (match: (room: NextRunPreviewRoom) => boolean): string | null => {
    const names = rooms.filter(match).map((room) => room.name);
    return names.length ? formatList(locale, names) : null;
  };
  const rotation = (level: PlanRoom["coverageSetting"]) => due((room) =>
    room.cadenceReasons.includes("coverage_due") && room.coverageSetting === level);
  const mop = due((room) => room.cadenceReasons.includes("mop_due"));
  const quick = rotation("quick");
  const optimal = rotation("standard");
  const heavy = rotation("heavy_duty");
  return [
    mop && t("v4_due_mop", "Mop due in {rooms}", { rooms: mop }),
    quick && t("v4_due_quick", "Quick vacuum due in {rooms}", { rooms: quick }),
    optimal && t("v4_due_optimal", "Optimal vacuum due in {rooms}", { rooms: optimal }),
    heavy && t("v4_due_heavy", "Heavy duty vacuum due in {rooms}", { rooms: heavy }),
  ].filter((line): line is string => Boolean(line));
};

/** A plan row's second line: room count and run order (plan.md §6 `v4_plan_row_*`). */
export const planRowLine2 = (t: Translate, locale: string, plan: SavedPlan): string => {
  const count = plan.rooms.length;
  const ordered = plan.runBehavior === "ordered";
  if (count === 1) {
    return ordered
      ? t("v4_plan_row_ordered_one", "1 room · Top to bottom, as listed")
      : t("v4_plan_row_rotation_one", "1 room · Longest-waiting rooms first");
  }
  return ordered
    ? t("v4_plan_row_ordered", "{count} rooms · Top to bottom, as listed", { count: formatNumber(locale, count) })
    : t("v4_plan_row_rotation", "{count} rooms · Longest-waiting rooms first", { count: formatNumber(locale, count) });
};

export type PlanRowLine3 = { readonly blocked: string } | { readonly due: readonly string[] } | null;

/**
 * A plan row's third line: the due work, or the one blocked line. A paused
 * plan shows only its chip (plan.md R2), so it has none.
 */
export const planRowLine3 = (t: Translate, locale: string, plan: SavedPlan): PlanRowLine3 => {
  if (!plan.enabled) return null;
  const blocker = plan.nextRunPreview?.blocker;
  if (blocker && blocker !== "plan_disabled") return { blocked: t("v4_plan_row_blocked", "Needs attention before it can run") };
  const due = dueLines(t, locale, plan.nextRunPreview?.rooms ?? []);
  return due.length ? { due } : null;
};
