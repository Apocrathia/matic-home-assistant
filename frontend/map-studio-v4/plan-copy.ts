import type { NextRunPreviewRoom, PlanRoom, RoomCadencePolicy } from "./backend-contracts";
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

type Schedule = (t: Translate, mop: string, cov: string) => string;

/** Edit row line 3 (plan.md §6 `v4_room_schedules_*`), by kind and which counts are one. */
const SCHEDULES: Readonly<Record<string, Schedule>> = {
  mop: (t, mop) => t("v4_room_schedules_mop", "Mop every {mop} cleans", { mop }),
  mop_one: (t) => t("v4_room_schedules_mop_one", "Mop every clean"),
  quick: (t, _, cov) => t("v4_room_schedules_quick", "Quick vacuum every {cov} cleans", { cov }),
  quick_one: (t) => t("v4_room_schedules_quick_one", "Quick vacuum every clean"),
  optimal: (t, _, cov) => t("v4_room_schedules_optimal", "Optimal vacuum every {cov} cleans", { cov }),
  optimal_one: (t) => t("v4_room_schedules_optimal_one", "Optimal vacuum every clean"),
  heavy: (t, _, cov) => t("v4_room_schedules_heavy", "Heavy duty vacuum every {cov} cleans", { cov }),
  heavy_one: (t) => t("v4_room_schedules_heavy_one", "Heavy duty vacuum every clean"),
  mop_quick: (t, mop, cov) => t("v4_room_schedules_mop_quick", "Mop every {mop} cleans · Quick vacuum every {cov} cleans", { mop, cov }),
  mop_quick_one_mop: (t, _, cov) => t("v4_room_schedules_mop_quick_one_mop", "Mop every clean · Quick vacuum every {cov} cleans", { cov }),
  mop_quick_one_cov: (t, mop) => t("v4_room_schedules_mop_quick_one_cov", "Mop every {mop} cleans · Quick vacuum every clean", { mop }),
  mop_quick_one_both: (t) => t("v4_room_schedules_mop_quick_one_both", "Mop every clean · Quick vacuum every clean"),
  mop_optimal: (t, mop, cov) => t("v4_room_schedules_mop_optimal", "Mop every {mop} cleans · Optimal vacuum every {cov} cleans", { mop, cov }),
  mop_optimal_one_mop: (t, _, cov) => t("v4_room_schedules_mop_optimal_one_mop", "Mop every clean · Optimal vacuum every {cov} cleans", { cov }),
  mop_optimal_one_cov: (t, mop) => t("v4_room_schedules_mop_optimal_one_cov", "Mop every {mop} cleans · Optimal vacuum every clean", { mop }),
  mop_optimal_one_both: (t) => t("v4_room_schedules_mop_optimal_one_both", "Mop every clean · Optimal vacuum every clean"),
  mop_heavy: (t, mop, cov) => t("v4_room_schedules_mop_heavy", "Mop every {mop} cleans · Heavy duty vacuum every {cov} cleans", { mop, cov }),
  mop_heavy_one_mop: (t, _, cov) => t("v4_room_schedules_mop_heavy_one_mop", "Mop every clean · Heavy duty vacuum every {cov} cleans", { cov }),
  mop_heavy_one_cov: (t, mop) => t("v4_room_schedules_mop_heavy_one_cov", "Mop every {mop} cleans · Heavy duty vacuum every clean", { mop }),
  mop_heavy_one_both: (t) => t("v4_room_schedules_mop_heavy_one_both", "Mop every clean · Heavy duty vacuum every clean"),
};

/** A room's schedule as one line, or null while no schedule is on. */
export const scheduleLine = (t: Translate, locale: string, cadence: RoomCadencePolicy | null | undefined): string | null => {
  const mop = cadence?.mopEveryN ?? null;
  const cov = cadence?.coverageEveryN ?? null;
  if (mop === null && cov === null) return null;
  const setting = cadence?.periodicCoverageSetting;
  const level = setting === "quick" ? "quick" : setting === "heavy_duty" ? "heavy" : "optimal";
  const name = mop === null
    ? `${level}${cov === 1 ? "_one" : ""}`
    : cov === null
      ? `mop${mop === 1 ? "_one" : ""}`
      : `mop_${level}${mop === 1 && cov === 1 ? "_one_both" : mop === 1 ? "_one_mop" : cov === 1 ? "_one_cov" : ""}`;
  const line = SCHEDULES[name];
  return line ? line(t, mop === null ? "" : formatNumber(locale, mop), cov === null ? "" : formatNumber(locale, cov)) : null;
};
