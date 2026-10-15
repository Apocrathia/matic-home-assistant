// Custom-area decoding is loaded only when a workflow or pinned area needs it.
// Runtime helpers arrive from the backend so this module adds no startup edge.
import type { AreaOutline } from "./area-outline";
import type { AreaCircle, AreaBindingStatus, AreasCatalog, SavedArea } from "./backend-contracts";
type AreaCatalogHelpers = typeof import("./backend-contracts").areaCatalogHelpers;

export const parseAreasCatalog = (value: unknown, helpers: AreaCatalogHelpers): AreasCatalog => {
  const { ContractError, objectValue, boundedString, boundedNumber, booleanValue,
    privatePath, parseRooms, parseCleaningMode, parseCoverage, selectedId, validOutline } = helpers;
  const parseOutline = (value: unknown): AreaOutline | null => {
    if (value === undefined || value === null) return null;
    if (!Array.isArray(value) || value.length < 3 || value.length > 64) throw new ContractError("invalid-area-outline");
    const outline: AreaOutline = { closed: true, points: value.map((p) => {
      const point = objectValue(p, "invalid-area-outline");
      if (typeof point.x !== "number" || typeof point.y !== "number") throw new ContractError("invalid-area-outline");
      return { x: point.x, y: point.y };
    }) };
    if (!validOutline(outline)) throw new ContractError("invalid-area-outline");
    return outline;
  };

  const parseCircle = (value: unknown): AreaCircle => {
    const circle = objectValue(value, "invalid-area-circle");
    return {
      x: boundedNumber(circle.x, -1_000_000, 1_000_000, "invalid-area-circle"),
      y: boundedNumber(circle.y, -1_000_000, 1_000_000, "invalid-area-circle"),
      radius: boundedNumber(circle.radius, 0.05, 2.5, "invalid-area-circle"),
    };
  };

  const bindingStatus = (value: unknown): AreaBindingStatus => {
    if (value === "current" || value === "review" || value === "stale") return value;
    return "unknown";
  };

  const payload = objectValue(value, "invalid-areas");
  if (!Array.isArray(payload.areas) || payload.areas.length > 256) {
    throw new ContractError("invalid-area-list");
  }
  return {
    sceneUrl: privatePath(payload.scene_url, "invalid-area-scene-url"),
    rooms: parseRooms(payload.rooms, true),
    areas: payload.areas.map((candidate) => {
      const area = objectValue(candidate, "invalid-area");
      if (!Array.isArray(area.circles) || area.circles.length > 512) {
        throw new ContractError("invalid-area-circles");
      }
      return {
        id: boundedString(area.id, 128, "invalid-area-id"),
        name: boundedString(area.name, 128, "invalid-area-name"),
        circles: area.circles.map(parseCircle),
        outline: parseOutline(area.outline),
        cleaningMode: parseCleaningMode(area.cleaning_mode),
        coverageSetting: parseCoverage(area.coverage_setting),
        status: bindingStatus(area.status),
        canRebind: booleanValue(area.can_rebind, "invalid-area-rebind"),
      } satisfies SavedArea;
    }),
    selectedArea: selectedId(payload.selected_area, "invalid-selected-area"),
  };
};

