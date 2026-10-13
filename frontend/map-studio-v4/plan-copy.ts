import type { NextRunPreviewRoom, PlanRoom } from "./backend-contracts";
import { formatList } from "./localize";

/** The views' translate: key, fallback and the values for its placeholders. */
export type Translate = (key: string, fallback: string, placeholders?: Readonly<Record<string, string | number>>) => string;

/** A count as the language writes it (plan.md §8). */
export const formatNumber = (locale: string, value: number): string => new Intl.NumberFormat(locale).format(value);

/**
 * A room's cleaning mode and vacuum coverage as one whole string
 * (home-rooms.md §6 `v4_room_setting_*`); mop alone has no coverage.
 */
export const settingLabel = (t: Translate, room: Pick<PlanRoom, "cleaningMode" | "coverageSetting">): string => {
  if (room.cleaningMode === "mop") return t("v4_room_setting_mop", "Mop");
  if (room.cleaningMode === "vacuum") {
    return room.coverageSetting === "quick"
      ? t("v4_room_setting_vacuum_quick", "Vacuum · Quick")
      : room.coverageSetting === "standard"
        ? t("v4_room_setting_vacuum_standard", "Vacuum · Optimal")
        : t("v4_room_setting_vacuum_heavy_duty", "Vacuum · Heavy duty");
  }
  return room.coverageSetting === "quick"
    ? t("v4_room_setting_vacuum_and_mop_quick", "Vacuum + mop · Quick")
    : room.coverageSetting === "standard"
      ? t("v4_room_setting_vacuum_and_mop_standard", "Vacuum + mop · Optimal")
      : t("v4_room_setting_vacuum_and_mop_heavy_duty", "Vacuum + mop · Heavy duty");
};

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
