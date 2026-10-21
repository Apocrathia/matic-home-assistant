"""Bind private custom cleaning areas to one verified local floor plan."""

from __future__ import annotations

import hashlib
import math
import struct
from collections import Counter, deque
from collections.abc import Callable, Mapping, Sequence
from enum import StrEnum
from typing import Any

import probatio
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import issue_registry as ir

from .area_geometry import AreaGeometry, GeometryTooComplex, RoomGeometryIndex
from .client.floor_plan import MAX_FLOOR_PLAN_BOUNDARY_POINTS
from .client.models import FloorPlan
from .client.slam_map import VOXEL_SCALE_METERS
from .const import DOMAIN
from .repairs import repair_placeholders

AREA_SCHEMA_VERSION = 1
MAP_BINDING_VERSION = 1
HASH_ONLY_SCOPED_MAP_BINDING_VERSION = 2
SCOPED_MAP_BINDING_VERSION = 3
BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION = 4
ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION = 5
SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION = 6
_FINGERPRINT_DOMAIN = b"matic-area-geometry\0"
_SCOPED_FINGERPRINT_DOMAIN = b"matic-area-local-geometry\0"
_AREA_SHAPE_FINGERPRINT_DOMAIN = b"matic-area-shape\0"
_MILLIMETERS_PER_METER = 1_000
_LEGACY_LOCAL_UNITS_PER_METER = 100
_LOCAL_GEOMETRY_MARGIN_METERS = 0.25
_LOCAL_GEOMETRY_TOLERANCE_MILLIMETERS = 10
_LOCAL_GEOMETRY_TOLERANCE_METERS = (
    _LOCAL_GEOMETRY_TOLERANCE_MILLIMETERS / _MILLIMETERS_PER_METER
)
# Outer room landmarks may refine by one native voxel. This does not relax
# the separate 10 mm wall/occupancy checks around the actual cleaning area.
_ROOM_FRAME_TOLERANCE_MILLIMETERS = (
    math.ceil(VOXEL_SCALE_METERS * _MILLIMETERS_PER_METER) + 1
)
_FRAME_WITNESS_MIN_TURN_DEGREES = 25
_FRAME_WITNESS_TURN_BUCKET_DEGREES = 5
_FRAME_WITNESS_EDGE_BUCKET_MILLIMETERS = 25
_FRAME_WITNESS_CONTEXT_RADIUS = 2
_FRAME_WITNESS_MIN_TURN_COVERAGE = 0.04
_FRAME_WITNESS_MIN_SPAN_FRACTION = 0.5
_FRAME_WITNESS_MIN_TRIANGLE_FRACTION = 0.05
_COORDINATE_QUANTIZATION_ERROR_MILLIMETERS = 0.5
_SEGMENT_QUANTIZATION_ERROR_MILLIMETERS = math.sqrt(
    2 * _COORDINATE_QUANTIZATION_ERROR_MILLIMETERS**2
)
_NEIGHBORHOOD_QUANTIZATION_ERROR_MILLIMETERS = (
    3 * _COORDINATE_QUANTIZATION_ERROR_MILLIMETERS
)
_SEMANTIC_MARGIN_MILLIMETERS = math.ceil(
    _LOCAL_GEOMETRY_MARGIN_METERS * _MILLIMETERS_PER_METER
    + _NEIGHBORHOOD_QUANTIZATION_ERROR_MILLIMETERS
)
_GUARD_MARGIN_MILLIMETERS = math.ceil(
    (_LOCAL_GEOMETRY_MARGIN_METERS + _LOCAL_GEOMETRY_TOLERANCE_METERS)
    * _MILLIMETERS_PER_METER
    + _NEIGHBORHOOD_QUANTIZATION_ERROR_MILLIMETERS
)
_SPATIAL_INDEX_CELL_MILLIMETERS = 100
_SPATIAL_INDEX_SAMPLE_MILLIMETERS = _SPATIAL_INDEX_CELL_MILLIMETERS // 2
_MAX_LOCAL_SEGMENT_MATCH_SEGMENTS = 256
_MAX_LOCAL_SEGMENT_MATCH_PAIRS = 16_384
_MAX_LOCAL_SEGMENT_MATCH_WORK = 1_048_576
_MAX_STORED_LOCAL_SEGMENTS = MAX_FLOOR_PLAN_BOUNDARY_POINTS
_NEIGHBORHOOD_INDEX_CELL_METERS = 0.5
_MAX_NEIGHBORHOOD_QUERY_CELLS = 4_096
_MIN_SIGNED_64 = -(1 << 63)
_MAX_SIGNED_64 = (1 << 63) - 1
_MAX_TRANSLATION_ROOM_ANCHORS = 256
_MAX_TRANSLATION_ROOM_CIRCLE_ASSOCIATIONS = 8_192
_MAX_ROOM_FRAME_POINTS = MAX_FLOOR_PLAN_BOUNDARY_POINTS
_MAX_PERSISTED_ROOM_FRAME_POINTS_PER_ROBOT = MAX_FLOOR_PLAN_BOUNDARY_POINTS
_AREA_REPAIR_LEARN_MORE_URL = (
    "https://github.com/ProspectOre/matic-home-assistant/"
    "blob/main/docs/cleaning.md#custom-areas"
)

MapBinding = dict[str, Any]
_QuantizedPoint = tuple[int, int]
_CanonicalPolygon = tuple[_QuantizedPoint, ...]
_LocalSegment = tuple[int, int, int, int]
_AreaShape = tuple[tuple[int, int, int], ...]
_LocalGeometry = tuple[_AreaShape, tuple[int, ...], tuple[_LocalSegment, ...]]
_SegmentMatch = tuple[int, int]
_SegmentContext = tuple[
    frozenset[int],
    frozenset[int],
    tuple[tuple[int, int], ...],
    frozenset[tuple[int, int]],
]


class AreaBindingStatus(StrEnum):
    """Whether saved custom-area coordinates match the active floor plan."""

    CURRENT = "current"
    LEGACY = "legacy"
    INVALID = "invalid"
    MISSION_CHANGED = "mission_changed"
    PARTITION_CHANGED = "partition_changed"
    GEOMETRY_CHANGED = "geometry_changed"


@callback
def async_sync_custom_area_issue(
    hass: HomeAssistant,
    entry_id: str,
    areas: Mapping[str, Any],
    floor_plan: FloorPlan | None,
) -> int | None:
    """Create, update, or clear one privacy-safe blocked-area Repair.

    A missing or unusable live map cannot establish compatibility, so it never
    creates or clears an existing issue. Same-map outlines that can be reviewed
    stay in the area workspace; routine geometry updates are not HA repairs.
    They remain blocked from cleaning until explicitly confirmed. The Repair
    exposes only the count of areas that require stronger recovery.
    """
    if floor_plan is None:
        return None
    try:
        binding_for_floor_plan(floor_plan)
    except OverflowError, TypeError, ValueError:
        return None

    mapped_missions = tuple(floor.mission_id for floor in floor_plan.mapped_floors)
    primary_mission = mapped_missions[0] if mapped_missions else floor_plan.mission_id
    assigned_missions = tuple(
        _area_repair_mission(area, mapped_missions, primary_mission)
        for area in areas.values()
    )
    room_geometry = None
    stale_count = 0
    for area, assigned_mission in zip(areas.values(), assigned_missions, strict=True):
        if assigned_mission != floor_plan.mission_id:
            continue
        if not isinstance(area, Mapping):
            stale_count += 1
            continue
        uses_query_index = area_binding_needs_geometry_index(area)
        if uses_query_index and room_geometry is None:
            room_geometry = _room_geometry_index(floor_plan)
        status = area_binding_status(area, floor_plan, room_geometry=room_geometry)
        if status is AreaBindingStatus.GEOMETRY_CHANGED and room_geometry is None:
            room_geometry = _room_geometry_index(floor_plan)
        can_review = area_binding_allows_review(
            area,
            floor_plan,
            status=status,
            room_geometry=room_geometry,
            circles_already_validated=uses_query_index,
        )
        if status is not AreaBindingStatus.CURRENT and not can_review:
            stale_count += 1
    issue_id = _custom_area_floor_issue_id(
        entry_id, floor_plan.mission_id, primary_mission
    )
    if stale_count:
        ir.async_create_issue(
            hass,
            DOMAIN,
            issue_id,
            is_fixable=False,
            is_persistent=True,
            learn_more_url=_AREA_REPAIR_LEARN_MORE_URL,
            severity=ir.IssueSeverity.WARNING,
            translation_key="custom_area_map_changed",
            translation_placeholders={
                **repair_placeholders(hass, entry_id),
                "count": str(stale_count),
            },
        )
    else:
        ir.async_delete_issue(hass, DOMAIN, issue_id)
    # A deleted area cannot leave a hidden secondary-floor issue behind. Do
    # not otherwise touch inactive-floor issues: their dismissal and lifecycle
    # must survive carrying the robot to another mapped floor.
    represented_missions = set(assigned_missions)
    for mission_id in mapped_missions:
        if mission_id in {primary_mission, floor_plan.mission_id} or (
            mission_id in represented_missions
        ):
            continue
        ir.async_delete_issue(
            hass,
            DOMAIN,
            _custom_area_issue_id_for_mission(entry_id, mission_id),
        )
    valid_issue_ids = {
        _custom_area_issue_id_for_mission(entry_id, mission_id)
        for mission_id in mapped_missions
        if mission_id != primary_mission
    }
    legacy_id = custom_area_issue_id(entry_id)
    for existing_issue_id in _existing_custom_area_issue_ids(hass, entry_id):
        if existing_issue_id == legacy_id or existing_issue_id in valid_issue_ids:
            continue
        ir.async_delete_issue(hass, DOMAIN, existing_issue_id)
    return stale_count


def _room_geometry_index(floor_plan: FloorPlan) -> RoomGeometryIndex:
    """Build one bounded index lazily for a callback's area scan."""
    return RoomGeometryIndex(
        [
            {
                "room_id": room.id,
                "name": room.name,
                "boundary": [list(point) for point in room.boundary],
            }
            for room in floor_plan.rooms
        ]
    )


def _area_repair_mission(
    area: object, mapped_missions: tuple[int, ...], primary_mission: int
) -> int:
    """Assign malformed, retired, and valid areas to one stable repair floor."""
    if isinstance(area, Mapping):
        binding = area.get("map_binding")
        if isinstance(binding, Mapping) and _valid_saved_binding(binding):
            mission_id = binding["mission_id"]
            assert isinstance(mission_id, int) and not isinstance(mission_id, bool)
            if mission_id in mapped_missions:
                return mission_id
    return primary_mission


def _custom_area_issue_id_for_mission(entry_id: str, mission_id: int) -> str:
    """Return a private stable Repair key for one non-primary mapped floor."""
    floor_digest = hashlib.sha256(
        b"matic-custom-area-floor-v1\0"
        + entry_id.encode()
        + b"\0"
        + str(mission_id).encode()
    ).hexdigest()[:12]
    return f"{custom_area_issue_id(entry_id)}_{floor_digest}"


def _custom_area_floor_issue_id(
    entry_id: str, mission_id: int, primary_mission: int
) -> str:
    """Preserve the legacy primary-floor key and scope every other floor."""
    if mission_id == primary_mission:
        return custom_area_issue_id(entry_id)
    return _custom_area_issue_id_for_mission(entry_id, mission_id)


def _existing_custom_area_issue_ids(hass: HomeAssistant, entry_id: str) -> set[str]:
    """Return this entry's privacy-safe legacy and floor-scoped issue keys."""
    legacy_id = custom_area_issue_id(entry_id)
    registry_issues = getattr(ir.async_get(hass), "issues", {})
    return {
        issue_id
        for domain, issue_id in registry_issues
        if domain == DOMAIN
        and (issue_id == legacy_id or issue_id.startswith(f"{legacy_id}_"))
    }


@callback
def async_delete_custom_area_issue(
    hass: HomeAssistant,
    entry_id: str,
) -> None:
    """Delete the stale-area Repair when its config entry is removed."""
    legacy_id = custom_area_issue_id(entry_id)
    issue_ids = _existing_custom_area_issue_ids(hass, entry_id)
    issue_ids.add(legacy_id)
    for issue_id in issue_ids:
        ir.async_delete_issue(hass, DOMAIN, issue_id)


def custom_area_issue_id(entry_id: str) -> str:
    """Return a stable Repair key without exposing the config-entry id."""
    digest = hashlib.sha256(entry_id.encode()).hexdigest()[:12]
    return f"custom_area_map_changed_{digest}"


def floor_plan_geometry_fingerprint(floor_plan: FloorPlan) -> str:
    """Return a stable, name-independent fingerprint of mapped room geometry.

    Coordinates are quantized to millimeters. Polygon start position, winding,
    room order, room names, and protocol identifiers do not affect the result.
    Duplicate polygons remain significant so the digest cannot collapse rooms.
    """
    polygons = sorted(_canonical_polygon(room.boundary) for room in floor_plan.rooms)
    if not polygons:
        raise ValueError("floor plan has no room geometry")

    digest = hashlib.sha256()
    digest.update(_FINGERPRINT_DOMAIN)
    digest.update(struct.pack(">H", MAP_BINDING_VERSION))
    digest.update(struct.pack(">I", len(polygons)))
    for polygon in polygons:
        digest.update(struct.pack(">I", len(polygon)))
        for x, y in polygon:
            digest.update(struct.pack(">qq", x, y))
    return digest.hexdigest()


def binding_for_floor_plan(floor_plan: FloorPlan) -> MapBinding:
    """Return the legacy whole-floor identity and geometry binding."""
    return {
        "version": MAP_BINDING_VERSION,
        **_floor_plan_binding(floor_plan),
    }


def translation_invariant_geometry_fingerprint(floor_plan: FloorPlan) -> str:
    """Fingerprint room geometry after removing one global coordinate offset."""
    polygons = sorted(_canonical_polygon(room.boundary) for room in floor_plan.rooms)
    if not polygons:
        raise ValueError("floor plan has no room geometry")
    origin_x = min(point[0] for polygon in polygons for point in polygon)
    origin_y = min(point[1] for polygon in polygons for point in polygon)
    normalized = [
        tuple((x - origin_x, y - origin_y) for x, y in polygon) for polygon in polygons
    ]
    digest = hashlib.sha256()
    digest.update(b"matic-translation-invariant-floor-v1\0")
    digest.update(struct.pack(">I", len(normalized)))
    for polygon in normalized:
        digest.update(struct.pack(">I", len(polygon)))
        for x, y in polygon:
            digest.update(struct.pack(">qq", x, y))
    return digest.hexdigest()


def translation_frame_bounds(floor_plan: FloorPlan) -> list[int]:
    """Return quantized global bounds used to confirm rigid translation."""
    points = [point for room in floor_plan.rooms for point in room.boundary]
    if not points:
        raise ValueError("floor plan has no room geometry")
    xs = [round(x * 1000) for x, _ in points]
    ys = [round(y * 1000) for _, y in points]
    return [min(xs), min(ys), max(xs), max(ys)]


def _translation_room_key(room: Any) -> str:
    """Hash stable room identity without persisting private protocol IDs."""
    digest = hashlib.sha256()
    digest.update(b"matic-room-frame-key-v1\0")
    for value in (room.id, room.protocol_id):
        encoded = value.encode("utf-8")
        digest.update(struct.pack(">I", len(encoded)))
        digest.update(encoded)
    wire_id = bytes(room.id_wire)
    digest.update(struct.pack(">I", len(wire_id)))
    digest.update(wire_id)
    return digest.hexdigest()


def _translation_circle_key(circle: Mapping[str, Any]) -> str:
    """Identify a saved circle independently of list order."""
    digest = hashlib.sha256()
    digest.update(b"matic-room-frame-circle-v1\0")
    digest.update(
        struct.pack(
            ">qqq",
            _quantize_coordinate(float(circle["x"])),
            _quantize_coordinate(float(circle["y"])),
            _quantize_coordinate(float(circle["radius"])),
        )
    )
    return digest.hexdigest()


def _bounds_within_tolerance(
    old: Sequence[int], new: Sequence[int], *, tolerance: int
) -> bool:
    return all(
        abs(new_value - old_value) <= tolerance
        for old_value, new_value in zip(old, new, strict=True)
    )


def _room_polygon_fingerprint(polygon: Sequence[Sequence[int]]) -> str:
    """Hash a canonical room polygon independently of its absolute origin."""
    origin_x = min(point[0] for point in polygon)
    origin_y = min(point[1] for point in polygon)
    digest = hashlib.sha256()
    digest.update(b"matic-room-frame-anchor-v1\0")
    digest.update(struct.pack(">I", len(polygon)))
    for x, y in polygon:
        digest.update(struct.pack(">qq", x - origin_x, y - origin_y))
    return digest.hexdigest()


def _legacy_room_frame_bounds_mode(
    saved: Mapping[str, Any], current: Mapping[str, Any]
) -> bool | None:
    """Return whether legacy bounds match exactly, including the old x bug."""
    current_bounds = current["bounds"]
    saved_bounds = saved["bounds"]
    new = current["boundary_mm"]
    if saved_bounds == current_bounds:
        return False
    # Old writers used the final canonical vertex x instead of max(x). Accept
    # only that exact representation here; the normal legacy comparison may
    # tolerate small differences, which is insufficient to create a snapshot.
    legacy_bounds = [*current_bounds]
    legacy_bounds[2] = new[-1][0]
    if saved_bounds == legacy_bounds:
        return True
    return None


def _legacy_room_frame_matches_exactly(
    saved: Mapping[str, Any], current: Mapping[str, Any]
) -> bool:
    """Prove the old translation-free anchor and its exact absolute origin."""
    return (
        bool(current.get("boundary_mm"))
        and str(saved.get("fingerprint", "")).casefold()
        == str(current.get("fingerprint", "")).casefold()
        and _legacy_room_frame_bounds_mode(saved, current) is not None
    )


def _room_frame_matches(
    saved: Mapping[str, Any],
    current: Mapping[str, Any],
    room_geometry: RoomGeometryIndex,
) -> bool:
    """Keep a room's absolute frame through interior outline refinements.

    Compare eight directional extrema against the other boundary in both
    directions. Unlike a bounding box alone, these are actual boundary points.
    This tolerates retessellation and edits away from the frame landmarks;
    local walls and occupancy must still pass the independent area checks.
    Never replace the saved reference with a tolerated intermediate map.
    """
    old: list[list[int]] | None = saved.get("boundary_mm")
    new: list[list[int]] | None = current.get("boundary_mm")
    if not old:
        # Legacy V3 anchors lack the immutable polygon snapshot. They can
        # establish an unchanged frame only when both their translation-free
        # shape fingerprint and absolute bounds are exactly unchanged.
        return _legacy_room_frame_matches_exactly(saved, current)
    if not new:
        return False
    room_geometry.charge_query_work(len(old) + len(new))
    if old == new:
        return True
    directions = ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1))
    room_geometry.charge_query_work((len(old) + len(new)) * len(directions))
    old_landmarks: list[_QuantizedPoint] = []
    new_landmarks: list[_QuantizedPoint] = []
    for dx, dy in directions:
        old_extreme = max(old, key=lambda p: (p[0] * dx + p[1] * dy, p[0], p[1]))
        new_extreme = max(new, key=lambda p: (p[0] * dx + p[1] * dy, p[0], p[1]))
        old_landmarks.append((old_extreme[0], old_extreme[1]))
        new_landmarks.append((new_extreme[0], new_extreme[1]))
    deltas = {
        (new_point[0] - old_point[0], new_point[1] - old_point[1])
        for old_point, new_point in zip(old_landmarks, new_landmarks, strict=True)
    }
    # Translation-normalized room hashes do not establish an absolute frame.
    if len(deltas) == 1 and next(iter(deltas)) != (0, 0):
        return False
    old_unique = set(old_landmarks)
    new_unique = set(new_landmarks)
    # Fixed landmarks must remain the corresponding directional extrema.
    # Merely retaining an old corner as a collinear contour vertex does not
    # establish that the room frame is unchanged.
    fixed_landmarks = {
        old_point
        for old_point, new_point in zip(old_landmarks, new_landmarks, strict=True)
        if old_point == new_point
    }
    # Boundary snapshots are rounded to millimeters. Points on one short edge
    # can therefore remain exactly fixed after a small rotation while the far
    # end moves visibly. Require fixed extrema to span at least half the saved
    # landmark diameter, allowing 2 mm for rounding at both ends. This bounds
    # hidden frame drift; it cannot detect motion that rounds to the same
    # millimeter coordinates. There are at most eight extrema, so pairwise
    # work is constant and explicitly budgeted.
    room_geometry.charge_query_work(
        len(old_unique) * (len(old_unique) - 1) // 2
        + len(fixed_landmarks) * (len(fixed_landmarks) - 1) // 2
    )
    old_points = tuple(old_unique)
    fixed_points = tuple(fixed_landmarks)
    room_span_squared = max(
        (
            (left[0] - right[0]) ** 2 + (left[1] - right[1]) ** 2
            for index, left in enumerate(old_points)
            for right in old_points[index + 1 :]
        ),
        default=0,
    )
    fixed_span_squared = max(
        (
            (left[0] - right[0]) ** 2 + (left[1] - right[1]) ** 2
            for index, left in enumerate(fixed_points)
            for right in fixed_points[index + 1 :]
        ),
        default=0,
    )
    required_fixed_span = max(0, (math.isqrt(room_span_squared) + 1) // 2 - 2)
    room_geometry.charge_query_work(len(new))
    room_geometry.charge_query_work(len(old))
    old_area = sum(
        old[index][0] * old[(index + 1) % len(old)][1]
        - old[(index + 1) % len(old)][0] * old[index][1]
        for index in range(len(old))
    )
    if (
        len(fixed_landmarks) < 2
        or math.isqrt(fixed_span_squared) < required_fixed_span
        or old_area == 0
    ):
        return False
    for source, target in ((old_unique, new), (new_unique, old)):
        for point in source:
            for index, start in enumerate(target):
                room_geometry.charge_query_work()
                end = target[(index + 1) % len(target)]
                if _point_near_segment(
                    point,
                    (start[0], start[1], end[0], end[1]),
                    tolerance=_ROOM_FRAME_TOLERANCE_MILLIMETERS,
                ):
                    break
            else:
                return False
    return True


def _turn_witness_features(
    boundary: Sequence[Sequence[int]],
) -> tuple[tuple[_QuantizedPoint, tuple[tuple[int, int, int], ...]], ...]:
    """Describe genuine turns with a bounded, reversal-invariant context."""
    points = tuple((int(point[0]), int(point[1])) for point in boundary)
    turns: list[tuple[_QuantizedPoint, tuple[int, int, int]]] = []
    for index, point in enumerate(points):
        previous = points[index - 1]
        following = points[(index + 1) % len(points)]
        incoming = (point[0] - previous[0], point[1] - previous[1])
        outgoing = (following[0] - point[0], following[1] - point[1])
        cross = incoming[0] * outgoing[1] - incoming[1] * outgoing[0]
        if cross == 0:
            continue
        dot = incoming[0] * outgoing[0] + incoming[1] * outgoing[1]
        angle = abs(math.degrees(math.atan2(cross, dot)))
        if angle < _FRAME_WITNESS_MIN_TURN_DEGREES:
            continue
        turns.append(
            (
                point,
                (
                    round(angle / _FRAME_WITNESS_TURN_BUCKET_DEGREES),
                    round(
                        math.hypot(*incoming) / _FRAME_WITNESS_EDGE_BUCKET_MILLIMETERS
                    ),
                    round(
                        math.hypot(*outgoing) / _FRAME_WITNESS_EDGE_BUCKET_MILLIMETERS
                    ),
                ),
            )
        )
    if len(turns) < 3:
        return ()

    features = []
    for index, (point, _feature) in enumerate(turns):
        context = tuple(
            turns[(index + offset) % len(turns)][1]
            for offset in range(
                -_FRAME_WITNESS_CONTEXT_RADIUS,
                _FRAME_WITNESS_CONTEXT_RADIUS + 1,
            )
        )
        reversed_context = tuple(
            (angle, outgoing, incoming)
            for angle, incoming, outgoing in reversed(context)
        )
        features.append((point, min(context, reversed_context)))
    return tuple(features)


def _room_has_strong_frame_witnesses(
    saved: Mapping[str, Any],
    current: Mapping[str, Any],
    room_geometry: RoomGeometryIndex,
) -> bool:
    """Prove an absolute room frame from unique, distributed saved turns.

    Witnesses are immutable integer-millimeter boundary points. Repeated
    contour motifs are ambiguous and cannot establish a frame. The three-point
    area condition prevents a single fixed corner or a short edge from serving
    as evidence for a two-dimensional coordinate frame.
    """
    old = saved.get("boundary_mm")
    new = current.get("boundary_mm")
    if not isinstance(old, list) or not isinstance(new, list):
        return False
    if len(old) < 3 or len(new) < 3:
        return False
    # Cover feature extraction plus the bounded extreme/match comparisons up
    # front. If this optional proof cannot fit, leave the legacy frame/local
    # validation budget intact instead of consuming it on a failed attempt.
    if not room_geometry.try_charge_query_work(
        (len(old) + len(new)) * 64, reserve=10_000
    ):
        return False
    try:
        old_features = _turn_witness_features(old)
        new_features = _turn_witness_features(new)
    except IndexError, TypeError, ValueError, OverflowError:
        return False
    if not old_features or not new_features:
        return False

    old_counts = Counter(feature for _point, feature in old_features)
    new_counts = Counter(feature for _point, feature in new_features)
    new_by_point = dict(new_features)
    matches = tuple(
        point
        for point, feature in old_features
        if old_counts[feature] == 1
        and new_counts[feature] == 1
        and new_by_point.get(point) == feature
    )
    minimum_matches = max(
        3,
        math.ceil(
            min(len(old_features), len(new_features)) * _FRAME_WITNESS_MIN_TURN_COVERAGE
        ),
    )
    if len(matches) < minimum_matches:
        return False

    # The bounding-box diagonal is a conservative upper bound on room
    # diameter. Directional extrema give a small deterministic candidate set;
    # testing each pair against all witnesses stays linear in boundary size.
    min_x = min(point[0] for point in old)
    max_x = max(point[0] for point in old)
    min_y = min(point[1] for point in old)
    max_y = max(point[1] for point in old)
    diameter_bound = math.hypot(max_x - min_x, max_y - min_y)
    # Three genuine turns already imply a nonzero boundary diameter.
    required_span = diameter_bound * _FRAME_WITNESS_MIN_SPAN_FRACTION
    required_twice_area = (
        2 * diameter_bound * diameter_bound * _FRAME_WITNESS_MIN_TRIANGLE_FRACTION
    )
    extremes: set[_QuantizedPoint] = set()
    for dx, dy in (
        (1, 0),
        (-1, 0),
        (0, 1),
        (0, -1),
        (1, 1),
        (1, -1),
        (-1, 1),
        (-1, -1),
    ):
        extremes.add(
            max(matches, key=lambda point: (point[0] * dx + point[1] * dy, point))
        )
    candidates = tuple(extremes)
    for index, left in enumerate(candidates):
        for right in candidates[index + 1 :]:
            if math.dist(left, right) < required_span:
                continue
            if (
                max(
                    (
                        abs(
                            (right[0] - left[0]) * (point[1] - left[1])
                            - (right[1] - left[1]) * (point[0] - left[0])
                        )
                        for point in matches
                    ),
                    default=0,
                )
                >= required_twice_area
            ):
                return True
    return False


def room_frame_point_count(area: Mapping[str, Any]) -> int:
    """Count persisted room-frame boundary vertices in one saved area."""
    binding = area.get("map_binding")
    anchors = (
        binding.get("translation_room_anchors")
        if isinstance(binding, Mapping)
        else None
    )
    if not isinstance(anchors, list):
        return 0
    return sum(
        len(points)
        for anchor in anchors
        if isinstance(anchor, Mapping)
        and isinstance((points := anchor.get("boundary_mm")), list)
    )


def total_room_frame_point_count(areas: Mapping[str, Any]) -> int:
    """Count all persisted room-frame boundary vertices for one robot."""
    return sum(
        room_frame_point_count(area)
        for area in areas.values()
        if isinstance(area, Mapping)
    )


def _room_anchor_bounds_match(
    saved: Mapping[str, Any], current: Mapping[str, Any]
) -> bool:
    """Compare bounds, including the old last-vertex-as-max-x storage bug."""
    tolerance = (
        _ROOM_FRAME_TOLERANCE_MILLIMETERS
        if "boundary_mm" in saved
        else _LOCAL_GEOMETRY_TOLERANCE_MILLIMETERS
    )
    if _bounds_within_tolerance(
        saved["bounds"], current["bounds"], tolerance=tolerance
    ):
        return True
    if "boundary_mm" in saved or not current.get("boundary_mm"):
        return False
    # Legacy writers accidentally captured the final loop x instead of max(x).
    # Reproduce that representation for comparison only. The unchanged room
    # fingerprint is still mandatory for an anchor without a boundary snapshot.
    legacy_bounds = [*current["bounds"]]
    legacy_bounds[2] = current["boundary_mm"][-1][0]
    return _bounds_within_tolerance(saved["bounds"], legacy_bounds, tolerance=tolerance)


def _translation_room_anchors(
    floor_plan: FloorPlan,
    circles: Sequence[Mapping[str, Any]],
    *,
    room_geometry: RoomGeometryIndex | None = None,
) -> list[dict[str, Any]]:
    """Persist frame anchors only for rooms containing saved circle centers."""
    if len(floor_plan.rooms) > _MAX_TRANSLATION_ROOM_ANCHORS:
        raise ValueError("too many rooms for scoped area frame anchors")
    if room_geometry is None:
        room_geometry = RoomGeometryIndex(
            [
                {
                    "room_id": room.id,
                    "name": room.name,
                    "boundary": [list(point) for point in room.boundary],
                }
                for room in floor_plan.rooms
            ]
        )
    circle_keys_by_room: dict[int, set[str]] = {}
    association_count = 0
    for circle in circles:
        circle_key = _translation_circle_key(circle)
        for index in room_geometry.containing_indices(
            float(circle["x"]),
            float(circle["y"]),
            _LOCAL_GEOMETRY_TOLERANCE_METERS,
        ):
            keys = circle_keys_by_room.setdefault(index, set())
            if circle_key not in keys:
                if association_count >= _MAX_TRANSLATION_ROOM_CIRCLE_ASSOCIATIONS:
                    raise ValueError("too many circle-room frame anchors")
                room_geometry.charge_query_work()
                keys.add(circle_key)
                association_count += 1
    anchors = []
    point_count = 0
    for index, room in enumerate(floor_plan.rooms):
        circle_keys = circle_keys_by_room.get(index)
        if not circle_keys:
            continue
        room_geometry.charge_query_work(len(room.boundary))
        polygon = _canonical_polygon(room.boundary)
        point_count += len(polygon)
        if point_count > _MAX_ROOM_FRAME_POINTS:
            raise ValueError("too many room frame boundary points")
        anchors.append(
            {
                "fingerprint": _room_polygon_fingerprint(polygon),
                "boundary_mm": [list(point) for point in polygon],
                "room_key": _translation_room_key(room),
                "circle_keys": sorted(circle_keys),
                "bounds": [
                    min(x for x, _y in polygon),
                    min(y for _x, y in polygon),
                    max(x for x, _y in polygon),
                    max(y for _x, y in polygon),
                ],
            }
        )
    return anchors


def _graft_legacy_room_frame_boundaries(
    binding: Mapping[str, Any],
    current_anchors: Sequence[Mapping[str, Any]],
    *,
    room_geometry: RoomGeometryIndex,
) -> MapBinding | None:
    """Graft snapshots onto a status-validated legacy V3 binding.

    Caller must have verified CURRENT status after a changed whole-map digest
    and supplied anchors generated from the current floor plan. Thus saved
    fields, circle coverage, current anchor fields, boundaries, and bounds have
    already passed their respective validators. Keep the extra uniqueness and
    exact per-room association checks here as independent defensive checks
    for this migration helper.
    """
    saved_anchors = binding["translation_room_anchors"]
    room_geometry.charge_query_work(len(saved_anchors) + len(current_anchors))
    current_by_room_key = {
        anchor["room_key"].casefold(): anchor for anchor in current_anchors
    }
    saved_room_keys: set[str] = set()
    for anchor in saved_anchors:
        room_geometry.charge_query_work(len(anchor["circle_keys"]))
        room_key = anchor["room_key"].casefold()
        if room_key in saved_room_keys:
            return None
        saved_room_keys.add(room_key)
    updated_anchors = [dict(anchor) for anchor in saved_anchors]
    for saved_anchor, updated_anchor in zip(
        saved_anchors, updated_anchors, strict=True
    ):
        room_key = saved_anchor["room_key"].casefold()
        # CURRENT status proved that every saved room key resolves to a
        # generated current anchor with the same saved circle association.
        current_anchor = current_by_room_key[room_key]
        saved_keys = {str(key).casefold() for key in saved_anchor["circle_keys"]}
        current_keys = current_anchor["circle_keys"]
        room_geometry.charge_query_work(len(current_keys))
        normalized_current_keys = {str(key).casefold() for key in current_keys}
        if "boundary_mm" in saved_anchor:
            # Mixed legacy and snapshot anchors are valid during staged
            # migrations; CURRENT status verified this existing snapshot.
            continue
        # A snapshot may only be added when this room still has the exact old
        # canonical shape, absolute origin, and circle association. The normal
        # status check is also strict; retain equality as an independent guard.
        if (
            saved_keys != normalized_current_keys
            or not _legacy_room_frame_matches_exactly(saved_anchor, current_anchor)
        ):
            return None
        boundary = current_anchor["boundary_mm"]
        room_geometry.charge_query_work(len(boundary))
        updated_anchor["boundary_mm"] = [list(point) for point in boundary]
        if _legacy_room_frame_bounds_mode(saved_anchor, current_anchor):
            # The exact frame proof above established the historical bugged
            # bounds; normalize them because a v3 snapshot requires true bounds.
            updated_anchor["bounds"] = list(current_anchor["bounds"])
    updated_binding = dict(binding)
    updated_binding["translation_room_anchors"] = updated_anchors
    return updated_binding


def binding_for_area(
    floor_plan: FloorPlan,
    circles: Sequence[Mapping[str, Any]],
    *,
    room_geometry: RoomGeometryIndex | None = None,
) -> MapBinding:
    """Bind an area to its map identity and nearby room geometry."""
    room_geometry = room_geometry or _room_geometry_index(floor_plan)
    shape, occupancy, segments = _area_geometry_components(
        floor_plan, circles, room_geometry=room_geometry
    )
    if len(segments) > _MAX_LOCAL_SEGMENT_MATCH_SEGMENTS:
        floor_binding = _floor_plan_binding(floor_plan)
        local_geometry = _bounded_hash_only_area_geometry_fingerprint(
            floor_plan, circles, room_geometry=room_geometry
        )
        try:
            anchors = _translation_room_anchors(
                floor_plan, circles, room_geometry=room_geometry
            )
            expected_circle_keys = {
                _translation_circle_key(circle).casefold() for circle in circles
            }
            anchored_circle_keys = {
                str(key).casefold()
                for anchor in anchors
                for key in anchor["circle_keys"]
            }
            if (
                not anchors
                or anchored_circle_keys != expected_circle_keys
                or not _valid_anchored_room_frame_anchors(anchors)
            ):
                raise ValueError("bounded area has incomplete room-frame anchors")
            return {
                "version": SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
                **floor_binding,
                "local_geometry_sha256": local_geometry,
                "area_shape_sha256": _area_shape_fingerprint(shape),
                "translation_invariant_geometry_sha256": (
                    translation_invariant_geometry_fingerprint(floor_plan)
                ),
                "translation_room_anchors": anchors,
            }
        except GeometryTooComplex, OverflowError, TypeError, ValueError:
            # Keep saving supported when an otherwise safe area fits the
            # bounded hash but its additional absolute-frame evidence does not.
            return {
                "version": BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
                **floor_binding,
                "local_geometry_sha256": local_geometry,
            }
    return {
        "version": SCOPED_MAP_BINDING_VERSION,
        **_floor_plan_binding(floor_plan),
        "translation_invariant_geometry_sha256": (
            translation_invariant_geometry_fingerprint(floor_plan)
        ),
        "translation_frame_bounds": translation_frame_bounds(floor_plan),
        "translation_room_anchors": _translation_room_anchors(
            floor_plan, circles, room_geometry=room_geometry
        ),
        "area_shape_sha256": _area_shape_fingerprint(shape),
        "local_geometry_sha256": _local_geometry_fingerprint(
            shape, occupancy, segments
        ),
        "local_occupancy": list(occupancy),
        "local_segments_mm": [list(segment) for segment in segments],
    }


def _floor_plan_binding(floor_plan: FloorPlan) -> MapBinding:
    """Return validated floor identity fields shared by binding versions."""
    mission_id = floor_plan.mission_id
    if (
        isinstance(mission_id, bool)
        or not isinstance(mission_id, int)
        or not 0 <= mission_id <= 0xFFFFFFFF
    ):
        raise ValueError("floor plan mission id is invalid")
    partition_id = floor_plan.partition_protocol_id
    if not isinstance(partition_id, str) or not partition_id:
        raise ValueError("floor plan partition id is invalid")
    return {
        "mission_id": mission_id,
        "partition_id": partition_id,
        "geometry_sha256": floor_plan_geometry_fingerprint(floor_plan),
    }


def area_geometry_fingerprint(
    floor_plan: FloorPlan, circles: Sequence[Mapping[str, Any]]
) -> str:
    """Fingerprint map geometry only near one painted cleaning area.

    The fingerprint includes the immutable saved circles, mapped-floor
    occupancy probes, and room-boundary segments within a small safety margin
    plus a tolerance guard band. Geometry elsewhere on the floor cannot
    invalidate the area. Binding status compares the private millimeter
    components with an explicit tolerance when the exact digest changes.
    """
    return _local_geometry_fingerprint(*_area_geometry_components(floor_plan, circles))


def _legacy_hash_only_area_geometry_fingerprint(
    floor_plan: FloorPlan,
    circles: Sequence[Mapping[str, Any]],
    *,
    room_geometry: RoomGeometryIndex | None = None,
) -> str:
    """Reproduce the persisted hash-only v2 signature for safe migration."""
    room_geometry = room_geometry or _room_geometry_index(floor_plan)
    normalized = _validate_area_circles(
        floor_plan, circles, room_geometry=room_geometry
    )
    ordered = sorted(
        (
            float(circle["x"]),
            float(circle["y"]),
            float(circle["radius"]),
        )
        for circle in normalized
    )
    neighborhood = (
        min(x - radius for x, _y, radius in ordered) - _LOCAL_GEOMETRY_MARGIN_METERS,
        min(y - radius for _x, y, radius in ordered) - _LOCAL_GEOMETRY_MARGIN_METERS,
        max(x + radius for x, _y, radius in ordered) + _LOCAL_GEOMETRY_MARGIN_METERS,
        max(y + radius for _x, y, radius in ordered) + _LOCAL_GEOMETRY_MARGIN_METERS,
    )
    segments: set[_LocalSegment] = set()
    for room in floor_plan.rooms:
        boundary = room.boundary
        for start, end in zip(boundary, (*boundary[1:], boundary[0]), strict=True):
            room_geometry.charge_query_work()
            clipped = _clip_segment(start, end, neighborhood)
            if clipped is None:
                continue
            first = (
                _quantize(clipped[0][0], _LEGACY_LOCAL_UNITS_PER_METER),
                _quantize(clipped[0][1], _LEGACY_LOCAL_UNITS_PER_METER),
            )
            second = (
                _quantize(clipped[1][0], _LEGACY_LOCAL_UNITS_PER_METER),
                _quantize(clipped[1][1], _LEGACY_LOCAL_UNITS_PER_METER),
            )
            if second < first:
                first, second = second, first
            segments.add((*first, *second))
    room_geometry.charge_query_work(len(segments))

    digest = hashlib.sha256()
    digest.update(_SCOPED_FINGERPRINT_DOMAIN)
    digest.update(struct.pack(">H", HASH_ONLY_SCOPED_MAP_BINDING_VERSION))
    digest.update(struct.pack(">I", len(ordered)))
    for x, y, radius in ordered:
        digest.update(
            struct.pack(
                ">qqq",
                _quantize_coordinate(x),
                _quantize_coordinate(y),
                _quantize_coordinate(radius),
            )
        )
        probes = _occupancy_probes(x, y, radius)
        occupancy = sum(
            int(room_geometry.contains(probe_x, probe_y)) << index
            for index, (probe_x, probe_y) in enumerate(probes)
        )
        digest.update(struct.pack(">H", occupancy))
    digest.update(struct.pack(">I", len(segments)))
    for segment in sorted(segments):
        digest.update(struct.pack(">qqqq", *segment))
    return digest.hexdigest()


def _hash_only_area_geometry_fingerprint(
    floor_plan: FloorPlan,
    circles: Sequence[Mapping[str, Any]],
    *,
    room_geometry: RoomGeometryIndex | None = None,
) -> str:
    """Keep the v2 helper name bound to its original serialization."""
    return _legacy_hash_only_area_geometry_fingerprint(
        floor_plan, circles, room_geometry=room_geometry
    )


class _BoundedFingerprintWorkExhausted(GeometryTooComplex):
    """Signal exhausted post-validation fingerprint work for v4 bindings."""


def _bounded_hash_only_area_geometry_fingerprint(
    floor_plan: FloorPlan,
    circles: Sequence[Mapping[str, Any]],
    *,
    center_tolerance: float = 0.0,
    room_geometry: RoomGeometryIndex | None = None,
) -> str:
    """Return the per-circle union-scoped v4 hash-only geometry signature."""
    room_geometry = room_geometry or _room_geometry_index(floor_plan)
    normalized = _validate_area_circles(
        floor_plan,
        circles,
        center_tolerance=center_tolerance,
        room_geometry=room_geometry,
    )
    try:
        ordered = sorted(
            (float(circle["x"]), float(circle["y"]), float(circle["radius"]))
            for circle in normalized
        )
        digest = hashlib.sha256()
        digest.update(_SCOPED_FINGERPRINT_DOMAIN)
        digest.update(struct.pack(">H", BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION))
        digest.update(struct.pack(">I", len(ordered)))
        for x, y, radius in ordered:
            digest.update(
                struct.pack(
                    ">qqq",
                    _quantize_coordinate(x),
                    _quantize_coordinate(y),
                    _quantize_coordinate(radius),
                )
            )
            probes = _occupancy_probes(x, y, radius)
            occupancy = sum(
                int(room_geometry.contains(probe_x, probe_y)) << index
                for index, (probe_x, probe_y) in enumerate(probes)
            )
            digest.update(struct.pack(">H", occupancy))
            neighborhood = (
                x - radius - _LOCAL_GEOMETRY_MARGIN_METERS,
                y - radius - _LOCAL_GEOMETRY_MARGIN_METERS,
                x + radius + _LOCAL_GEOMETRY_MARGIN_METERS,
                y + radius + _LOCAL_GEOMETRY_MARGIN_METERS,
            )
            segments: Counter[_LocalSegment] = Counter()
            for room in floor_plan.rooms:
                boundary = room.boundary
                for start, end in zip(
                    boundary, (*boundary[1:], boundary[0]), strict=True
                ):
                    room_geometry.charge_query_work()
                    clipped = _clip_segment(start, end, neighborhood)
                    if clipped is None:
                        continue
                    first = (
                        _quantize(clipped[0][0], _LEGACY_LOCAL_UNITS_PER_METER),
                        _quantize(clipped[0][1], _LEGACY_LOCAL_UNITS_PER_METER),
                    )
                    second = (
                        _quantize(clipped[1][0], _LEGACY_LOCAL_UNITS_PER_METER),
                        _quantize(clipped[1][1], _LEGACY_LOCAL_UNITS_PER_METER),
                    )
                    if second < first:
                        first, second = second, first
                    segments[(*first, *second)] += 1
            room_geometry.charge_query_work(len(segments))
            digest.update(struct.pack(">I", sum(segments.values())))
            for segment, multiplicity in sorted(segments.items()):
                digest.update(struct.pack(">qqqqI", *segment, multiplicity))
        return digest.hexdigest()
    except GeometryTooComplex as error:
        raise _BoundedFingerprintWorkExhausted(
            "bounded area fingerprint work budget exhausted after circle validation"
        ) from error


def _area_geometry_components(
    floor_plan: FloorPlan,
    circles: Sequence[Mapping[str, Any]],
    *,
    center_tolerance: float = 0.0,
    room_geometry: RoomGeometryIndex | None = None,
) -> _LocalGeometry:
    """Return canonical private area shape, occupancy, and nearby segments."""
    room_geometry = room_geometry or _room_geometry_index(floor_plan)
    room_geometry.charge_query_work(
        sum(len(room.boundary) for room in floor_plan.rooms)
    )
    normalized = _validate_area_circles(
        floor_plan,
        circles,
        center_tolerance=center_tolerance,
        room_geometry=room_geometry,
    )
    room_geometry.charge_query_work(len(normalized))
    ordered_float = sorted(
        (
            float(circle["x"]),
            float(circle["y"]),
            float(circle["radius"]),
        )
        for circle in normalized
    )
    shape = tuple(
        (
            _quantize_coordinate(x),
            _quantize_coordinate(y),
            _quantize_coordinate(radius),
        )
        for x, y, radius in ordered_float
    )
    neighborhoods = tuple(
        (
            x
            - radius
            - _LOCAL_GEOMETRY_MARGIN_METERS
            - _LOCAL_GEOMETRY_TOLERANCE_METERS,
            y
            - radius
            - _LOCAL_GEOMETRY_MARGIN_METERS
            - _LOCAL_GEOMETRY_TOLERANCE_METERS,
            x
            + radius
            + _LOCAL_GEOMETRY_MARGIN_METERS
            + _LOCAL_GEOMETRY_TOLERANCE_METERS,
            y
            + radius
            + _LOCAL_GEOMETRY_MARGIN_METERS
            + _LOCAL_GEOMETRY_TOLERANCE_METERS,
        )
        for x, y, radius in ordered_float
    )
    neighborhood_index: dict[tuple[int, int], set[int]] = {}
    for index, neighborhood in enumerate(neighborhoods):
        first_x = math.floor(neighborhood[0] / _NEIGHBORHOOD_INDEX_CELL_METERS)
        first_y = math.floor(neighborhood[1] / _NEIGHBORHOOD_INDEX_CELL_METERS)
        last_x = math.floor(neighborhood[2] / _NEIGHBORHOOD_INDEX_CELL_METERS)
        last_y = math.floor(neighborhood[3] / _NEIGHBORHOOD_INDEX_CELL_METERS)
        for cell_x in range(first_x, last_x + 1):
            for cell_y in range(first_y, last_y + 1):
                neighborhood_index.setdefault((cell_x, cell_y), set()).add(index)

    segments: list[_LocalSegment] = []
    for room in floor_plan.rooms:
        boundary = room.boundary
        for start, end in zip(boundary, (*boundary[1:], boundary[0]), strict=True):
            room_geometry.charge_query_work()
            first_x = math.floor(
                min(start[0], end[0]) / _NEIGHBORHOOD_INDEX_CELL_METERS
            )
            first_y = math.floor(
                min(start[1], end[1]) / _NEIGHBORHOOD_INDEX_CELL_METERS
            )
            last_x = math.floor(max(start[0], end[0]) / _NEIGHBORHOOD_INDEX_CELL_METERS)
            last_y = math.floor(max(start[1], end[1]) / _NEIGHBORHOOD_INDEX_CELL_METERS)
            cell_count = (last_x - first_x + 1) * (last_y - first_y + 1)
            if cell_count > _MAX_NEIGHBORHOOD_QUERY_CELLS:
                candidate_neighborhoods = tuple(range(len(neighborhoods)))
            else:
                candidates: set[int] = set()
                for cell_x in range(first_x, last_x + 1):
                    for cell_y in range(first_y, last_y + 1):
                        room_geometry.charge_query_work()
                        for index in neighborhood_index.get((cell_x, cell_y), ()):
                            room_geometry.charge_query_work()
                            candidates.add(index)
                candidate_neighborhoods = tuple(sorted(candidates))
            intersects = False
            for index in candidate_neighborhoods:
                room_geometry.charge_query_work()
                if _clip_segment(start, end, neighborhoods[index]) is not None:
                    intersects = True
                    break
            if not intersects:
                continue
            first = (
                _quantize_coordinate(start[0]),
                _quantize_coordinate(start[1]),
            )
            second = (
                _quantize_coordinate(end[0]),
                _quantize_coordinate(end[1]),
            )
            if second < first:
                first, second = second, first
            segments.append((*first, *second))
            if len(segments) > _MAX_STORED_LOCAL_SEGMENTS:
                raise ValueError("too many local floor-plan segments")
    room_geometry.charge_query_work(len(segments))

    occupancy_values = []
    for x, y, radius in ordered_float:
        probes = _occupancy_probes(x, y, radius)
        occupancy = sum(
            int(room_geometry.contains(probe_x, probe_y)) << index
            for index, (probe_x, probe_y) in enumerate(probes)
        )
        occupancy_values.append(occupancy)
    return shape, tuple(occupancy_values), tuple(sorted(segments))


def _occupancy_probes(
    x: float, y: float, radius: float
) -> tuple[tuple[float, float], ...]:
    """Return the exact floating-point probes used by occupancy evidence."""
    probe_radius = radius + _LOCAL_GEOMETRY_MARGIN_METERS
    diagonal = probe_radius / math.sqrt(2)
    return (
        (x, y),
        (x - probe_radius, y),
        (x + probe_radius, y),
        (x, y - probe_radius),
        (x, y + probe_radius),
        (x - diagonal, y - diagonal),
        (x - diagonal, y + diagonal),
        (x + diagonal, y - diagonal),
        (x + diagonal, y + diagonal),
    )


def _area_shape_fingerprint(shape: _AreaShape) -> str:
    """Fingerprint the immutable saved circles independently of the map."""
    digest = hashlib.sha256()
    digest.update(_AREA_SHAPE_FINGERPRINT_DOMAIN)
    digest.update(struct.pack(">I", len(shape)))
    for circle in shape:
        digest.update(struct.pack(">qqq", *circle))
    return digest.hexdigest()


def _local_geometry_fingerprint(
    shape: _AreaShape,
    occupancy: Sequence[int],
    segments: Sequence[_LocalSegment],
) -> str:
    """Fingerprint exact private components while retaining tolerant evidence."""
    digest = hashlib.sha256()
    digest.update(_SCOPED_FINGERPRINT_DOMAIN)
    digest.update(struct.pack(">H", SCOPED_MAP_BINDING_VERSION))
    digest.update(bytes.fromhex(_area_shape_fingerprint(shape)))
    digest.update(struct.pack(">I", len(occupancy)))
    for value in occupancy:
        digest.update(struct.pack(">H", value))
    digest.update(struct.pack(">I", len(segments)))
    for segment in segments:
        digest.update(struct.pack(">qqqq", *segment))
    return digest.hexdigest()


def _saved_room_frames_match(
    saved_anchors: Any,
    circles: Sequence[Mapping[str, Any]],
    floor_plan: FloorPlan,
    room_geometry: RoomGeometryIndex,
    *,
    failed_room_keys: set[str] | None = None,
    associations_valid: list[bool] | None = None,
) -> bool:
    """Check every legacy room frame and collect those needing stronger proof.

    ``associations_valid`` distinguishes malformed or incomplete evidence from
    a complete association set whose legacy frame checks failed. Callers may
    combine legacy and strong evidence only for the latter.
    """
    if failed_room_keys is not None:
        failed_room_keys.clear()
    if associations_valid is not None:
        associations_valid[:] = [False]
    if not isinstance(saved_anchors, list) or not saved_anchors:
        return False
    if any(
        not isinstance(anchor, Mapping)
        or "room_key" not in anchor
        or "circle_keys" not in anchor
        or "boundary_mm" not in anchor
        or not isinstance(anchor.get("room_key"), str)
        or not isinstance(anchor.get("circle_keys"), list)
        or not anchor.get("circle_keys")
        or any(not isinstance(key, str) for key in anchor.get("circle_keys", ()))
        or len(set(anchor.get("circle_keys", ()))) != len(anchor.get("circle_keys", ()))
        or not isinstance(anchor.get("boundary_mm"), list)
        for anchor in saved_anchors
    ):
        return False
    saved_circle_keys = {
        str(key).casefold() for anchor in saved_anchors for key in anchor["circle_keys"]
    }
    saved_by_room_key: dict[str, set[str]] = {}
    for anchor in saved_anchors:
        room_key = str(anchor["room_key"]).casefold()
        circle_keys = {str(key).casefold() for key in anchor["circle_keys"]}
        if room_key in saved_by_room_key:
            return False
        saved_by_room_key[room_key] = circle_keys
    expected_circle_keys = {
        _translation_circle_key(circle).casefold() for circle in circles
    }
    if saved_circle_keys != expected_circle_keys:
        return False
    current_anchors = _translation_room_anchors(
        floor_plan, circles, room_geometry=room_geometry
    )
    current_by_room_key: dict[str, Mapping[str, Any]] = {}
    for anchor in current_anchors:
        room_key = str(anchor["room_key"]).casefold()
        if room_key in current_by_room_key:
            return False
        current_by_room_key[room_key] = anchor
    if set(saved_by_room_key) != set(current_by_room_key):
        return False
    for room_key, saved_circle_keys_for_room in saved_by_room_key.items():
        if saved_circle_keys_for_room != {
            str(key).casefold() for key in current_by_room_key[room_key]["circle_keys"]
        }:
            return False
    if associations_valid is not None:
        associations_valid[0] = True
    all_frames_match = True
    for anchor in saved_anchors:
        room_key = str(anchor["room_key"]).casefold()
        current_anchor = current_by_room_key.get(room_key)
        if (
            current_anchor is None
            or not _room_anchor_bounds_match(anchor, current_anchor)
            or not _room_frame_matches(anchor, current_anchor, room_geometry)
        ):
            all_frames_match = False
            if failed_room_keys is not None:
                failed_room_keys.add(room_key)
    return all_frames_match


def _saved_room_frames_have_strong_witnesses(
    saved_anchors: Any,
    circles: Sequence[Mapping[str, Any]],
    floor_plan: FloorPlan,
    room_geometry: RoomGeometryIndex,
) -> bool:
    """Require exact circle-room associations and strong immutable frame proof."""
    if not isinstance(saved_anchors, list) or not saved_anchors:
        return False
    if any(
        not isinstance(anchor, Mapping)
        or not {"room_key", "circle_keys", "boundary_mm"}.issubset(anchor)
        for anchor in saved_anchors
    ):
        return False
    expected_circle_keys = {
        _translation_circle_key(circle).casefold() for circle in circles
    }
    saved_by_room_key: dict[str, Mapping[str, Any]] = {}
    for anchor in saved_anchors:
        room_key = str(anchor["room_key"]).casefold()
        if room_key in saved_by_room_key:
            return False
        saved_by_room_key[room_key] = anchor
    saved_circle_keys = {
        str(key).casefold() for anchor in saved_anchors for key in anchor["circle_keys"]
    }
    if saved_circle_keys != expected_circle_keys:
        return False

    current_anchors = _translation_room_anchors(
        floor_plan, circles, room_geometry=room_geometry
    )
    current_by_room_key: dict[str, Mapping[str, Any]] = {}
    for anchor in current_anchors:
        room_key = str(anchor["room_key"]).casefold()
        if room_key in current_by_room_key:
            return False
        current_by_room_key[room_key] = anchor
    if set(saved_by_room_key) != set(current_by_room_key):
        return False
    for room_key, saved_anchor in saved_by_room_key.items():
        current_anchor = current_by_room_key[room_key]
        if {str(key).casefold() for key in saved_anchor["circle_keys"]} != {
            str(key).casefold() for key in current_anchor["circle_keys"]
        } or not _room_has_strong_frame_witnesses(
            saved_anchor, current_anchor, room_geometry
        ):
            return False
    return True


def area_binding_status(
    area: Mapping[str, Any],
    floor_plan: FloorPlan,
    *,
    room_geometry: RoomGeometryIndex | None = None,
    _current_room_anchors: list[dict[str, Any]] | None = None,
) -> AreaBindingStatus:
    """Compare one saved area with the current floor plan without guessing."""
    if _current_room_anchors is not None:
        _current_room_anchors.clear()
    schema_version = area.get("schema_version")
    if schema_version is None:
        return AreaBindingStatus.LEGACY
    if isinstance(schema_version, bool):
        return AreaBindingStatus.INVALID
    if schema_version == 0:
        return AreaBindingStatus.LEGACY
    if not isinstance(schema_version, int) or schema_version != AREA_SCHEMA_VERSION:
        return AreaBindingStatus.INVALID

    saved = area.get("map_binding")
    if not isinstance(saved, Mapping) or not _valid_saved_binding(saved):
        return AreaBindingStatus.INVALID
    try:
        current = _floor_plan_binding(floor_plan)
    except OverflowError, TypeError, ValueError:
        return AreaBindingStatus.INVALID

    if saved["mission_id"] != current["mission_id"]:
        return AreaBindingStatus.MISSION_CHANGED
    saved_geometry = str(saved["geometry_sha256"]).casefold()
    version = saved["version"]
    partition_changed = saved["partition_id"] != current["partition_id"]
    geometry_changed = saved_geometry != current["geometry_sha256"]
    if (
        partition_changed
        and geometry_changed
        and saved["version"]
        not in {
            SCOPED_MAP_BINDING_VERSION,
            ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
        }
    ):
        return AreaBindingStatus.PARTITION_CHANGED
    if saved["version"] == MAP_BINDING_VERSION:
        if saved_geometry != current["geometry_sha256"]:
            return AreaBindingStatus.GEOMETRY_CHANGED
        return AreaBindingStatus.CURRENT
    if (
        saved["version"] == HASH_ONLY_SCOPED_MAP_BINDING_VERSION
        and saved_geometry != current["geometry_sha256"]
    ):
        # V2 did not persist the local boundary evidence, so its digest cannot
        # distinguish an unrelated edit from a coordinate-frame translation.
        # Fail closed on every whole-map change rather than authorizing stale
        # coordinates from an unanchored occupancy-only match.
        try:
            _validate_area_circles(
                floor_plan, area["circles"], room_geometry=room_geometry
            )
        except KeyError, OverflowError, TypeError, ValueError:
            return AreaBindingStatus.INVALID
        return AreaBindingStatus.GEOMETRY_CHANGED
    if saved["version"] in {
        HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
        BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
        ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
        SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
    }:
        try:
            fingerprint = (
                _legacy_hash_only_area_geometry_fingerprint
                if saved["version"] == HASH_ONLY_SCOPED_MAP_BINDING_VERSION
                else _bounded_hash_only_area_geometry_fingerprint
            )
            if saved["version"] == HASH_ONLY_SCOPED_MAP_BINDING_VERSION:
                local_geometry = fingerprint(
                    floor_plan, area["circles"], room_geometry=room_geometry
                )
            else:
                local_geometry = _bounded_hash_only_area_geometry_fingerprint(
                    floor_plan,
                    area["circles"],
                    center_tolerance=_LOCAL_GEOMETRY_TOLERANCE_METERS,
                    room_geometry=room_geometry,
                )
        except _BoundedFingerprintWorkExhausted:
            if (
                saved["version"]
                in {
                    BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
                    ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
                    SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
                }
                and saved_geometry != current["geometry_sha256"]
            ):
                # The fingerprint helper raises this only after validating the
                # circles. Keep exhausted recovery work on the shared index.
                return AreaBindingStatus.GEOMETRY_CHANGED
            return AreaBindingStatus.INVALID
        except KeyError, OverflowError, TypeError, ValueError:
            return AreaBindingStatus.INVALID
        if (
            saved["version"] == BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
            and saved_geometry != current["geometry_sha256"]
        ):
            # V4's bounded local fingerprint cannot establish that a room
            # frame stayed fixed when the full map changed. Keep these areas
            # reviewable until room anchors are available for this version.
            return AreaBindingStatus.GEOMETRY_CHANGED
        if version in {
            ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
        }:
            if version == SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION:
                try:
                    room_geometry = room_geometry or _room_geometry_index(floor_plan)
                    shape, _, _ = _area_geometry_components(
                        floor_plan,
                        area["circles"],
                        center_tolerance=_LOCAL_GEOMETRY_TOLERANCE_METERS,
                        room_geometry=room_geometry,
                    )
                except KeyError, OverflowError, TypeError, ValueError:
                    return AreaBindingStatus.INVALID
                if str(
                    saved["area_shape_sha256"]
                ).casefold() != _area_shape_fingerprint(shape):
                    return AreaBindingStatus.INVALID
            local_geometry_matches = (
                str(saved["local_geometry_sha256"]).casefold() == local_geometry
            )
            if not local_geometry_matches and (
                version == ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
                or not geometry_changed
            ):
                return (
                    AreaBindingStatus.GEOMETRY_CHANGED
                    if geometry_changed
                    else AreaBindingStatus.INVALID
                )
            if geometry_changed:
                try:
                    room_geometry = room_geometry or _room_geometry_index(floor_plan)
                    failed_room_keys: set[str] = set()
                    associations_valid: list[bool] = []
                    frame_matches = _saved_room_frames_match(
                        saved["translation_room_anchors"],
                        area["circles"],
                        floor_plan,
                        room_geometry,
                        failed_room_keys=failed_room_keys,
                        associations_valid=associations_valid,
                    )
                    if not (local_geometry_matches and frame_matches):
                        if (
                            version
                            != SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
                        ):
                            return AreaBindingStatus.GEOMETRY_CHANGED
                        if local_geometry_matches and associations_valid == [True]:
                            bounded_saved_by_room_key = {
                                str(anchor["room_key"]).casefold(): anchor
                                for anchor in saved["translation_room_anchors"]
                            }
                            bounded_current_by_room_key = {
                                str(anchor["room_key"]).casefold(): anchor
                                for anchor in _translation_room_anchors(
                                    floor_plan,
                                    area["circles"],
                                    room_geometry=room_geometry,
                                )
                            }
                            all_required_proofs_match = bool(failed_room_keys) and all(
                                room_key in bounded_saved_by_room_key
                                and room_key in bounded_current_by_room_key
                                and _room_has_strong_frame_witnesses(
                                    bounded_saved_by_room_key[room_key],
                                    bounded_current_by_room_key[room_key],
                                    room_geometry,
                                )
                                for room_key in failed_room_keys
                            )
                        else:
                            # Aggregate local drift cannot identify which room
                            # moved. Incomplete associations also cannot count
                            # as an empty set, so either case requires proof of
                            # every room before the geometry-change bypass.
                            all_required_proofs_match = (
                                _saved_room_frames_have_strong_witnesses(
                                    saved["translation_room_anchors"],
                                    area["circles"],
                                    floor_plan,
                                    room_geometry,
                                )
                            )
                        if not all_required_proofs_match:
                            return AreaBindingStatus.GEOMETRY_CHANGED
                    if saved[
                        "translation_invariant_geometry_sha256"
                    ].casefold() == translation_invariant_geometry_fingerprint(
                        floor_plan
                    ):
                        return AreaBindingStatus.GEOMETRY_CHANGED
                except GeometryTooComplex, OverflowError, TypeError, ValueError:
                    return AreaBindingStatus.GEOMETRY_CHANGED
            return AreaBindingStatus.CURRENT
        if str(saved["local_geometry_sha256"]).casefold() == local_geometry:
            return AreaBindingStatus.CURRENT
        return AreaBindingStatus.INVALID

    try:
        room_geometry = room_geometry or _room_geometry_index(floor_plan)
        shape, occupancy, segments = _area_geometry_components(
            floor_plan,
            area["circles"],
            center_tolerance=_LOCAL_GEOMETRY_TOLERANCE_METERS,
            room_geometry=room_geometry,
        )
    except KeyError, OverflowError, TypeError, ValueError:
        return AreaBindingStatus.INVALID
    if str(saved["area_shape_sha256"]).casefold() != _area_shape_fingerprint(shape):
        return AreaBindingStatus.INVALID
    if (
        saved_geometry != current["geometry_sha256"]
        and "translation_room_anchors" not in saved
    ):
        # Without room anchors, translation-invariant hashes and frame bounds
        # cannot prove that an unchanged area stayed in its original room
        # frame. Check the area's own shape first so edited input remains INVALID.
        return AreaBindingStatus.GEOMETRY_CHANGED
    # A nearby wall anchors only its own circle. Check containing-room frame
    # evidence for every circle because one area may span anchored and unanchored
    # rooms. Local wall evidence cannot establish another circle's frame.
    if saved_geometry != current["geometry_sha256"]:
        saved_anchors = saved.get("translation_room_anchors")
        if not isinstance(saved_anchors, list) or not saved_anchors:
            return AreaBindingStatus.GEOMETRY_CHANGED
        if any(
            "room_key" not in anchor or "circle_keys" not in anchor
            for anchor in saved_anchors
        ):
            # Older anchors did not retain which circles belonged to which
            # rooms. Keep those coordinates reviewable after drift, but never
            # infer a room match from another circle's anchor.
            return AreaBindingStatus.GEOMETRY_CHANGED
        # A syntactically valid persisted binding can still omit one circle
        # association. Require complete coverage of the saved area before
        # trusting any room anchor; otherwise a moved room could have no
        # corresponding evidence at all.
        saved_circle_keys = {
            str(key).casefold()
            for anchor in saved_anchors
            for key in anchor["circle_keys"]
        }
        expected_circle_keys = {
            _translation_circle_key(circle).casefold() for circle in area["circles"]
        }
        if saved_circle_keys != expected_circle_keys:
            return AreaBindingStatus.GEOMETRY_CHANGED
        frames_needing_witnesses: list[tuple[Mapping[str, Any], Mapping[str, Any]]] = []
        try:
            current_anchors = _translation_room_anchors(
                floor_plan, area["circles"], room_geometry=room_geometry
            )
        except GeometryTooComplex, OverflowError, TypeError, ValueError:
            return AreaBindingStatus.INVALID
        current_by_room_key: dict[str, Mapping[str, Any]] = {}
        for anchor in current_anchors:
            room_key = str(anchor["room_key"]).casefold()
            if room_key in current_by_room_key:
                return AreaBindingStatus.GEOMETRY_CHANGED
            current_by_room_key[room_key] = anchor
        saved_by_room_key: dict[str, Mapping[str, Any]] = {}
        for anchor in saved_anchors:
            room_key = str(anchor["room_key"]).casefold()
            if room_key in saved_by_room_key:
                return AreaBindingStatus.GEOMETRY_CHANGED
            saved_by_room_key[room_key] = anchor
        if set(saved_by_room_key) != set(current_by_room_key):
            return AreaBindingStatus.GEOMETRY_CHANGED
        for room_key, saved_anchor in saved_by_room_key.items():
            current_anchor = current_by_room_key.get(room_key)
            if current_anchor is None or {
                str(key).casefold() for key in saved_anchor["circle_keys"]
            } != {str(key).casefold() for key in current_anchor["circle_keys"]}:
                return AreaBindingStatus.GEOMETRY_CHANGED
            try:
                frame_matches = (
                    not (partition_changed and "boundary_mm" not in saved_anchor)
                    and _room_anchor_bounds_match(saved_anchor, current_anchor)
                    and _room_frame_matches(saved_anchor, current_anchor, room_geometry)
                )
                if not frame_matches:
                    frames_needing_witnesses.append((saved_anchor, current_anchor))
            except GeometryTooComplex:
                return AreaBindingStatus.GEOMETRY_CHANGED
        # Finish every room's established frame checks before optional work.
        # One early refinement must not spend a later room's legacy budget.
        # Legacy v3 records can omit the global digest needed by strong proof.
        if frames_needing_witnesses:
            if "translation_invariant_geometry_sha256" not in saved:
                return AreaBindingStatus.GEOMETRY_CHANGED
            try:
                for saved_anchor, current_anchor in frames_needing_witnesses:
                    if not _room_has_strong_frame_witnesses(
                        saved_anchor, current_anchor, room_geometry
                    ):
                        return AreaBindingStatus.GEOMETRY_CHANGED
            except GeometryTooComplex:
                return AreaBindingStatus.GEOMETRY_CHANGED
        all_frames_strongly_proven = len(frames_needing_witnesses) == len(
            saved_by_room_key
        )
        if _current_room_anchors is not None:
            _current_room_anchors.extend(current_anchors)
    local_geometry = _local_geometry_fingerprint(shape, occupancy, segments)
    if saved_geometry != current["geometry_sha256"] and all_frames_strongly_proven:
        try:
            if saved[
                "translation_invariant_geometry_sha256"
            ].casefold() == translation_invariant_geometry_fingerprint(floor_plan):
                return AreaBindingStatus.GEOMETRY_CHANGED
        except GeometryTooComplex, OverflowError, TypeError, ValueError:
            return AreaBindingStatus.GEOMETRY_CHANGED
        return AreaBindingStatus.CURRENT
    if str(saved["local_geometry_sha256"]).casefold() == local_geometry:
        if (
            "translation_invariant_geometry_sha256" in saved
            and saved_geometry != current["geometry_sha256"]
            and saved["translation_invariant_geometry_sha256"].casefold()
            == translation_invariant_geometry_fingerprint(floor_plan)
        ):
            return AreaBindingStatus.GEOMETRY_CHANGED
        return AreaBindingStatus.CURRENT
    saved_segments = tuple(tuple(segment) for segment in saved["local_segments_mm"])
    saved_occupancy = tuple(saved["local_occupancy"])
    try:
        segment_matches = _local_segment_correspondence(
            saved_segments, segments, shape, room_geometry=room_geometry
        )
        if segment_matches is not None and (
            saved_occupancy == occupancy
            or _occupancy_changes_are_explained(
                saved_occupancy,
                occupancy,
                saved_segments,
                segments,
                shape,
                area["circles"],
                segment_matches,
                room_geometry=room_geometry,
            )
        ):
            return AreaBindingStatus.CURRENT
    except GeometryTooComplex:
        # A valid persisted binding can exceed either the new segment count or
        # work cap. If the map changed, keep its circles reviewable instead of
        # hiding them as invalid; GEOMETRY_CHANGED still blocks stale commands.
        if saved_geometry != current["geometry_sha256"]:
            return AreaBindingStatus.GEOMETRY_CHANGED
        return AreaBindingStatus.INVALID
    if geometry_changed:
        try:
            if (
                "translation_invariant_geometry_sha256" in saved
                and _saved_room_frames_have_strong_witnesses(
                    saved["translation_room_anchors"],
                    area["circles"],
                    floor_plan,
                    room_geometry,
                )
                and saved["translation_invariant_geometry_sha256"].casefold()
                != translation_invariant_geometry_fingerprint(floor_plan)
            ):
                return AreaBindingStatus.CURRENT
        except GeometryTooComplex, OverflowError, TypeError, ValueError:
            pass
        return AreaBindingStatus.GEOMETRY_CHANGED
    return AreaBindingStatus.INVALID


def area_binding_allows_review(
    area: Mapping[str, Any],
    floor_plan: FloorPlan,
    *,
    status: AreaBindingStatus | None = None,
    room_geometry: RoomGeometryIndex | None = None,
    circles_already_validated: bool = False,
) -> bool:
    """Return whether stale coordinates can be shown for local confirmation."""
    binding_status = (
        status
        if status is not None
        else area_binding_status(area, floor_plan, room_geometry=room_geometry)
    )
    if binding_status is not AreaBindingStatus.GEOMETRY_CHANGED:
        return False
    if circles_already_validated:
        return True
    try:
        _validate_area_circles(floor_plan, area["circles"], room_geometry=room_geometry)
    except KeyError, TypeError, ValueError:
        return False
    return True


def _valid_saved_binding(binding: Mapping[str, Any]) -> bool:
    """Return whether a persisted binding has the exact supported shape."""
    base_fields = {
        "version",
        "mission_id",
        "partition_id",
        "geometry_sha256",
    }
    version = binding.get("version")
    if isinstance(version, bool) or not isinstance(version, int):
        return False
    if version == MAP_BINDING_VERSION:
        expected_fields = base_fields
    elif version in {
        HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
        BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
    }:
        expected_fields = {*base_fields, "local_geometry_sha256"}
    elif version in {
        ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
        SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
    }:
        expected_fields = {
            *base_fields,
            "local_geometry_sha256",
            "translation_invariant_geometry_sha256",
            "translation_room_anchors",
        }
        if version == SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION:
            expected_fields.add("area_shape_sha256")
    else:
        expected_fields = {
            *base_fields,
            "area_shape_sha256",
            "local_geometry_sha256",
            "local_occupancy",
            "local_segments_mm",
            "translation_invariant_geometry_sha256",
            "translation_frame_bounds",
            "translation_room_anchors",
        }
    if version == SCOPED_MAP_BINDING_VERSION:
        legacy_fields = expected_fields - {
            "translation_invariant_geometry_sha256",
            "translation_frame_bounds",
            "translation_room_anchors",
        }
        if not set(binding).issubset(expected_fields) or not legacy_fields.issubset(
            set(binding)
        ):
            return False
    elif set(binding) != expected_fields:
        return False
    mission_id = binding["mission_id"]
    partition_id = binding["partition_id"]
    geometry = binding["geometry_sha256"]
    return (
        version
        in {
            MAP_BINDING_VERSION,
            HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            SCOPED_MAP_BINDING_VERSION,
        }
        and not isinstance(mission_id, bool)
        and isinstance(mission_id, int)
        and 0 <= mission_id <= 0xFFFFFFFF
        and isinstance(partition_id, str)
        and bool(partition_id)
        and isinstance(geometry, str)
        and len(geometry) == 64
        and all(character in "0123456789abcdefABCDEF" for character in geometry)
        and (
            version == MAP_BINDING_VERSION
            or (
                version
                in {
                    HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
                    BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
                }
                and _valid_digest(binding["local_geometry_sha256"])
            )
            or (
                version == ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
                and _valid_digest(binding["local_geometry_sha256"])
                and _valid_digest(binding["translation_invariant_geometry_sha256"])
                and _valid_anchored_room_frame_anchors(
                    binding["translation_room_anchors"]
                )
            )
            or (
                version == SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
                and _valid_digest(binding["area_shape_sha256"])
                and _valid_digest(binding["local_geometry_sha256"])
                and _valid_digest(binding["translation_invariant_geometry_sha256"])
                and _valid_anchored_room_frame_anchors(
                    binding["translation_room_anchors"]
                )
            )
            or (
                version == SCOPED_MAP_BINDING_VERSION
                and _valid_digest(binding["area_shape_sha256"])
                and _valid_digest(binding["local_geometry_sha256"])
                and _valid_local_occupancy(binding["local_occupancy"])
                and _valid_local_segments(binding["local_segments_mm"])
                and (
                    "translation_frame_bounds" not in binding
                    or (
                        isinstance(binding["translation_frame_bounds"], list)
                        and len(binding["translation_frame_bounds"]) == 4
                        and all(
                            isinstance(value, int)
                            and not isinstance(value, bool)
                            and -(1 << 63) <= value < (1 << 63)
                            for value in binding["translation_frame_bounds"]
                        )
                    )
                )
                and (
                    "translation_invariant_geometry_sha256" not in binding
                    or _valid_digest(binding["translation_invariant_geometry_sha256"])
                )
                and (
                    "translation_room_anchors" not in binding
                    or _valid_translation_room_anchors(
                        binding["translation_room_anchors"]
                    )
                )
                and _stored_local_geometry_is_intact(binding)
            )
        )
    )


def area_binding_needs_geometry_index(area: Mapping[str, Any]) -> bool:
    """Return whether a valid saved binding performs indexed map queries."""
    schema_version = area.get("schema_version")
    binding = area.get("map_binding")
    return (
        type(schema_version) is int
        and schema_version == AREA_SCHEMA_VERSION
        and isinstance(binding, Mapping)
        and _valid_saved_binding(binding)
        and binding["version"]
        in {
            HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            SHAPE_ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
            SCOPED_MAP_BINDING_VERSION,
        }
    )


def _valid_digest(value: Any) -> bool:
    """Return whether a stored SHA-256 digest is canonicalizable."""
    return (
        isinstance(value, str)
        and len(value) == 64
        and all(character in "0123456789abcdefABCDEF" for character in value)
    )


def _valid_translation_room_anchors(value: Any) -> bool:
    """Validate the bounded optional absolute-frame room evidence."""
    if not isinstance(value, list) or len(value) > _MAX_TRANSLATION_ROOM_ANCHORS:
        return False
    associations = 0
    point_count = 0
    for anchor in value:
        if not isinstance(anchor, Mapping) or set(anchor) not in (
            {"fingerprint", "bounds"},
            {"fingerprint", "bounds", "room_key", "circle_keys"},
            {"fingerprint", "bounds", "room_key", "circle_keys", "boundary_mm"},
        ):
            return False
        if not _valid_digest(anchor["fingerprint"]):
            return False
        if "boundary_mm" in anchor:
            polygon = anchor["boundary_mm"]
            if not isinstance(polygon, list) or len(polygon) < 3:
                return False
            point_count += len(polygon)
            if point_count > _MAX_ROOM_FRAME_POINTS or not all(
                isinstance(point, list)
                and len(point) == 2
                and all(
                    isinstance(coordinate, int)
                    and not isinstance(coordinate, bool)
                    and _MIN_SIGNED_64 <= coordinate <= _MAX_SIGNED_64
                    for coordinate in point
                )
                for point in polygon
            ):
                return False
            try:
                if (
                    _room_polygon_fingerprint(polygon)
                    != anchor["fingerprint"].casefold()
                ):
                    return False
            except OverflowError, struct.error:
                return False
            if anchor["bounds"] != [
                min(p[0] for p in polygon),
                min(p[1] for p in polygon),
                max(p[0] for p in polygon),
                max(p[1] for p in polygon),
            ]:
                return False
        bounds = anchor["bounds"]
        if not (
            isinstance(bounds, list)
            and len(bounds) == 4
            and all(
                isinstance(coordinate, int)
                and not isinstance(coordinate, bool)
                and _MIN_SIGNED_64 <= coordinate <= _MAX_SIGNED_64
                for coordinate in bounds
            )
        ):
            return False
        if "room_key" in anchor:
            keys = anchor["circle_keys"]
            if not (
                _valid_digest(anchor["room_key"])
                and isinstance(keys, list)
                and 0 < len(keys) <= 512
                and all(_valid_digest(key) for key in keys)
                and len(set(keys)) == len(keys)
            ):
                return False
            associations += len(keys)
            if associations > _MAX_TRANSLATION_ROOM_CIRCLE_ASSOCIATIONS:
                return False
    return True


def _valid_anchored_room_frame_anchors(value: Any) -> bool:
    """Require the complete immutable room snapshots used by V5 bindings."""
    return (
        isinstance(value, list)
        and bool(value)
        and all(
            isinstance(anchor, Mapping)
            and {"room_key", "circle_keys", "boundary_mm"}.issubset(anchor)
            for anchor in value
        )
        and _valid_translation_room_anchors(value)
    )


def _valid_local_occupancy(value: Any) -> bool:
    """Return whether saved occupancy probes have their bounded list shape."""
    return isinstance(value, list) and all(
        not isinstance(item, bool) and isinstance(item, int) and 0 <= item < 1 << 9
        for item in value
    )


def _valid_local_segments(value: Any) -> bool:
    """Return whether saved millimeter segments have a bounded numeric shape."""
    return isinstance(value, list) and all(
        isinstance(segment, list)
        and len(segment) == 4
        and all(
            not isinstance(coordinate, bool)
            and isinstance(coordinate, int)
            and _MIN_SIGNED_64 <= coordinate <= _MAX_SIGNED_64
            for coordinate in segment
        )
        for segment in value
    )


def _stored_local_geometry_is_intact(binding: Mapping[str, Any]) -> bool:
    """Verify that the private tolerant evidence still matches its digest."""
    shape_digest = str(binding["area_shape_sha256"]).casefold()
    digest = hashlib.sha256()
    digest.update(_SCOPED_FINGERPRINT_DOMAIN)
    digest.update(struct.pack(">H", SCOPED_MAP_BINDING_VERSION))
    digest.update(bytes.fromhex(shape_digest))
    occupancy = binding["local_occupancy"]
    digest.update(struct.pack(">I", len(occupancy)))
    for value in occupancy:
        digest.update(struct.pack(">H", value))
    segments = binding["local_segments_mm"]
    digest.update(struct.pack(">I", len(segments)))
    for segment in segments:
        digest.update(struct.pack(">qqqq", *segment))
    return digest.hexdigest() == str(binding["local_geometry_sha256"]).casefold()


def _local_segments_match(
    saved: Sequence[_LocalSegment],
    current: Sequence[_LocalSegment],
    shape: _AreaShape,
) -> bool:
    """Return whether all semantically local walls have a correspondence."""
    return _local_segment_correspondence(saved, current, shape) is not None


def _local_segment_correspondence(
    saved: Sequence[_LocalSegment],
    current: Sequence[_LocalSegment],
    shape: _AreaShape,
    *,
    room_geometry: RoomGeometryIndex | None = None,
) -> tuple[_SegmentMatch, ...] | None:
    """Find a tolerant one-to-one match for all semantically local segments.

    Segments in the 10 mm selection guard band may appear or disappear without
    invalidating an area, but a segment touching the original 25 cm
    neighborhood must be covered. Minimum-cost maximum matching avoids a
    first-fit choice consuming the wrong nearby segment.
    """
    charge_work = _segment_matching_work_charger(room_geometry)
    if (
        len(saved) > _MAX_LOCAL_SEGMENT_MATCH_SEGMENTS
        or len(current) > _MAX_LOCAL_SEGMENT_MATCH_SEGMENTS
    ):
        raise GeometryTooComplex("too many local segments to match")
    charge_work(len(saved) + len(current))
    saved_contexts = tuple(
        _segment_context(segment, shape, charge_work=charge_work) for segment in saved
    )
    current_contexts = tuple(
        _segment_context(segment, shape, charge_work=charge_work) for segment in current
    )
    saved_local = tuple(bool(context[0]) for context in saved_contexts)
    current_local = tuple(bool(context[0]) for context in current_contexts)
    current_by_cell: dict[tuple[int, int], list[int]] = {}
    for current_index, context in enumerate(current_contexts):
        charge_work(len(context[3]))
        for cell in context[3]:
            current_by_cell.setdefault(cell, []).append(current_index)

    compatible: list[tuple[int, int, int]] = []
    maximum_pair_cost = 0
    for saved_index, (saved_segment, saved_context) in enumerate(
        zip(saved, saved_contexts, strict=True)
    ):
        candidates: set[int] = set()
        for cell_x, cell_y in saved_context[3]:
            for neighbor_x in range(cell_x - 1, cell_x + 2):
                for neighbor_y in range(cell_y - 1, cell_y + 2):
                    charge_work(1)
                    cell_candidates = current_by_cell.get((neighbor_x, neighbor_y), ())
                    charge_work(len(cell_candidates))
                    candidates.update(cell_candidates)
        charge_work(len(candidates))
        for current_index in sorted(candidates):
            charge_work(max(1, len(shape)))
            if _local_segment_contexts_match(
                saved_segment,
                saved_context,
                current[current_index],
                current_contexts[current_index],
                shape,
            ):
                pair_cost = _segment_pair_cost(saved_segment, current[current_index])
                if len(compatible) >= _MAX_LOCAL_SEGMENT_MATCH_PAIRS:
                    raise GeometryTooComplex("too many compatible local segments")
                charge_work(1)
                compatible.append((saved_index, current_index, pair_cost))
                maximum_pair_cost = max(maximum_pair_cost, pair_cost)

    node_count = len(saved) + len(current) + 2
    source = node_count - 2
    sink = node_count - 1
    graph: list[list[list[int]]] = [[] for _ in range(node_count)]
    charge_work(node_count)
    local_reward = maximum_pair_cost * (min(len(saved), len(current)) + 1) + 1

    for index, is_local in enumerate(saved_local):
        charge_work(1)
        _add_flow_edge(graph, source, index, -local_reward * int(is_local))
    for saved_index, current_index, pair_cost in compatible:
        charge_work(1)
        _add_flow_edge(graph, saved_index, len(saved) + current_index, pair_cost)
    for index, is_local in enumerate(current_local):
        charge_work(1)
        _add_flow_edge(
            graph,
            len(saved) + index,
            sink,
            -local_reward * int(is_local),
        )

    _minimum_cost_maximum_flow(
        graph,
        source,
        sink,
        stop_at_nonnegative=True,
        charge_work=charge_work,
    )
    matches_list = []
    for saved_index in range(len(saved)):
        for edge in graph[saved_index]:
            charge_work(1)
            if len(saved) <= edge[0] < len(saved) + len(current) and edge[2] == 0:
                matches_list.append((saved_index, edge[0] - len(saved)))
    matches = tuple(matches_list)
    required_score = sum(saved_local) + sum(current_local)
    charge_work(len(matches))
    matched_score = sum(
        int(saved_local[saved_index]) + int(current_local[current_index])
        for saved_index, current_index in matches
    )
    return matches if matched_score == required_score else None


def _segment_matching_work_charger(
    room_geometry: RoomGeometryIndex | None,
) -> Callable[[int], None]:
    """Bound matching work locally and charge the shared request budget."""
    remaining = _MAX_LOCAL_SEGMENT_MATCH_WORK

    def charge(work: int = 1) -> None:
        nonlocal remaining
        if work > remaining:
            remaining = 0
            raise GeometryTooComplex("local segment matching work budget exhausted")
        remaining -= work
        if room_geometry is not None:
            room_geometry.charge_query_work(work)

    return charge


def _segment_pair_cost(saved: _LocalSegment, current: _LocalSegment) -> int:
    """Return the endpoint distance for the closer wall orientation."""
    direct = sum(abs(saved[index] - current[index]) for index in range(4))
    reversed_current = (current[2], current[3], current[0], current[1])
    reverse = sum(abs(saved[index] - reversed_current[index]) for index in range(4))
    return min(direct, reverse)


def _occupancy_changes_are_explained(
    saved_occupancy: Sequence[int],
    current_occupancy: Sequence[int],
    saved_segments: Sequence[_LocalSegment],
    current_segments: Sequence[_LocalSegment],
    shape: _AreaShape,
    circles: Sequence[Mapping[str, Any]],
    segment_matches: Sequence[_SegmentMatch] | None = None,
    *,
    room_geometry: RoomGeometryIndex | None = None,
) -> bool:
    """Return whether every changed probe is explained by a moving wall pair."""
    charge_work = _segment_matching_work_charger(room_geometry)
    charge_work(len(circles))
    ordered_circles = sorted(
        (
            float(circle["x"]),
            float(circle["y"]),
            float(circle["radius"]),
        )
        for circle in circles
    )
    if (
        len(saved_occupancy) != len(shape)
        or len(current_occupancy) != len(shape)
        or len(ordered_circles) != len(shape)
    ):
        return False

    charge_work(len(saved_segments) + len(current_segments))
    saved_contexts = tuple(
        _segment_context(segment, shape, charge_work=charge_work)
        for segment in saved_segments
    )
    current_contexts = tuple(
        _segment_context(segment, shape, charge_work=charge_work)
        for segment in current_segments
    )
    if segment_matches is None:
        segment_matches = _local_segment_correspondence(
            saved_segments, current_segments, shape, room_geometry=room_geometry
        )
        if segment_matches is None:
            return False
    matches_by_cell: dict[tuple[int, int], set[_SegmentMatch]] = {}
    for match in segment_matches:
        saved_index, current_index = match
        cells = saved_contexts[saved_index][3] | current_contexts[current_index][3]
        charge_work(len(cells))
        for cell in cells:
            matches_by_cell.setdefault(cell, set()).add(match)

    for (
        (x, y, radius),
        saved_value,
        current_value,
    ) in zip(ordered_circles, saved_occupancy, current_occupancy, strict=True):
        changed = saved_value ^ current_value
        if not changed:
            continue
        probes = tuple(
            (probe_x * _MILLIMETERS_PER_METER, probe_y * _MILLIMETERS_PER_METER)
            for probe_x, probe_y in _occupancy_probes(x, y, radius)
        )
        for probe_index, probe in enumerate(probes):
            if not changed & (1 << probe_index):
                continue
            probe_cell_x = math.floor(probe[0] / _SPATIAL_INDEX_CELL_MILLIMETERS)
            probe_cell_y = math.floor(probe[1] / _SPATIAL_INDEX_CELL_MILLIMETERS)
            candidates: set[_SegmentMatch] = set()
            for cell_x in range(probe_cell_x - 1, probe_cell_x + 2):
                for cell_y in range(probe_cell_y - 1, probe_cell_y + 2):
                    charge_work(1)
                    cell_candidates = matches_by_cell.get((cell_x, cell_y), ())
                    charge_work(len(cell_candidates))
                    candidates.update(cell_candidates)
            charge_work(len(candidates))
            explained = False
            for saved_index, current_index in candidates:
                charge_work(max(1, len(shape)))
                if _wall_pair_explains_probe(
                    saved_segments[saved_index],
                    saved_contexts[saved_index],
                    current_segments[current_index],
                    current_contexts[current_index],
                    probe,
                    shape,
                ):
                    explained = True
                    break
            if not explained:
                return False
    return True


def _wall_pair_explains_probe(
    saved: _LocalSegment,
    saved_context: _SegmentContext,
    current: _LocalSegment,
    current_context: _SegmentContext,
    probe: tuple[float, float],
    shape: _AreaShape,
) -> bool:
    """Return whether one compatible wall pair can cross an occupancy probe."""
    if not _point_near_segment(probe, saved) or not _point_near_segment(probe, current):
        return False
    if not _local_segment_contexts_match(
        saved, saved_context, current, current_context, shape
    ):
        return False
    saved_distance = _signed_distance_to_supporting_line(probe, saved)
    current_distance = _signed_distance_to_supporting_line(probe, current)
    if saved_distance is None or current_distance is None:
        return False
    if saved == current:
        return abs(saved_distance) <= _SEGMENT_QUANTIZATION_ERROR_MILLIMETERS
    saved_direction = (saved[2] - saved[0], saved[3] - saved[1])
    current_direction = (current[2] - current[0], current[3] - current[1])
    if (
        saved_direction[0] * current_direction[0]
        + saved_direction[1] * current_direction[1]
        < 0
    ):
        current_distance = -current_distance
    return (
        saved_distance * current_distance <= 0
        or abs(saved_distance) <= _SEGMENT_QUANTIZATION_ERROR_MILLIMETERS
        or abs(current_distance) <= _SEGMENT_QUANTIZATION_ERROR_MILLIMETERS
    )


def _signed_distance_to_supporting_line(
    point: tuple[float, float], segment: _LocalSegment
) -> float | None:
    """Return an oriented point-to-source-wall distance."""
    start_x, start_y, end_x, end_y = segment
    delta_x = end_x - start_x
    delta_y = end_y - start_y
    length = math.hypot(delta_x, delta_y)
    if not length:
        return None
    return (delta_x * (point[1] - start_y) - delta_y * (point[0] - start_x)) / length


def _segment_context(
    segment: _LocalSegment,
    shape: _AreaShape,
    *,
    charge_work: Callable[[int], None] | None = None,
) -> _SegmentContext:
    """Precompute the local neighborhoods and endpoints for one source wall."""
    start = (segment[0], segment[1])
    end = (segment[2], segment[3])
    semantic: set[int] = set()
    guard: set[int] = set()
    guard_pieces: list[tuple[tuple[float, float], tuple[float, float]]] = []
    local_endpoints: set[tuple[int, int]] = set()
    for index, (center_x, center_y, radius) in enumerate(shape):
        if charge_work is not None:
            charge_work(1)
        semantic_bounds = (
            center_x - radius - _SEMANTIC_MARGIN_MILLIMETERS,
            center_y - radius - _SEMANTIC_MARGIN_MILLIMETERS,
            center_x + radius + _SEMANTIC_MARGIN_MILLIMETERS,
            center_y + radius + _SEMANTIC_MARGIN_MILLIMETERS,
        )
        if _clip_segment(start, end, semantic_bounds) is not None:
            semantic.add(index)
        for point in (start, end):
            if (
                semantic_bounds[0] <= point[0] <= semantic_bounds[2]
                and semantic_bounds[1] <= point[1] <= semantic_bounds[3]
            ):
                local_endpoints.add(point)
        guard_bounds = (
            center_x - radius - _GUARD_MARGIN_MILLIMETERS,
            center_y - radius - _GUARD_MARGIN_MILLIMETERS,
            center_x + radius + _GUARD_MARGIN_MILLIMETERS,
            center_y + radius + _GUARD_MARGIN_MILLIMETERS,
        )
        guard_piece = _clip_segment(start, end, guard_bounds)
        if guard_piece is not None:
            guard.add(index)
            guard_pieces.append(guard_piece)
    return (
        frozenset(semantic),
        frozenset(guard),
        tuple(sorted(local_endpoints)),
        _segment_spatial_cells(start, end, guard_pieces, charge_work=charge_work),
    )


def _segment_spatial_cells(
    start: tuple[int, int],
    end: tuple[int, int],
    pieces: Sequence[tuple[tuple[float, float], tuple[float, float]]],
    *,
    charge_work: Callable[[int], None] | None = None,
) -> frozenset[tuple[int, int]]:
    """Index the union of guard-clipped wall intervals into fixed cells."""
    delta_x = end[0] - start[0]
    delta_y = end[1] - start[1]
    length_squared = delta_x * delta_x + delta_y * delta_y
    if not length_squared:
        return frozenset(
            {
                (
                    math.floor(start[0] / _SPATIAL_INDEX_CELL_MILLIMETERS),
                    math.floor(start[1] / _SPATIAL_INDEX_CELL_MILLIMETERS),
                )
            }
            if pieces
            else set()
        )

    if charge_work is not None:
        charge_work(len(pieces))
    intervals = sorted(
        (
            ((piece[0][0] - start[0]) * delta_x + (piece[0][1] - start[1]) * delta_y)
            / length_squared,
            ((piece[1][0] - start[0]) * delta_x + (piece[1][1] - start[1]) * delta_y)
            / length_squared,
        )
        for piece in pieces
    )
    merged: list[list[float]] = []
    for lower, upper in intervals:
        if merged and lower <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], upper)
        else:
            merged.append([lower, upper])

    cells: set[tuple[int, int]] = set()
    maximum_delta = max(abs(delta_x), abs(delta_y))
    for lower, upper in merged:
        steps = max(
            1,
            math.ceil(
                maximum_delta * (upper - lower) / _SPATIAL_INDEX_SAMPLE_MILLIMETERS
            ),
        )
        for step in range(steps + 1):
            if charge_work is not None:
                charge_work(1)
            ratio = lower + (upper - lower) * step / steps
            cells.add(
                (
                    math.floor(
                        (start[0] + ratio * delta_x) / _SPATIAL_INDEX_CELL_MILLIMETERS
                    ),
                    math.floor(
                        (start[1] + ratio * delta_y) / _SPATIAL_INDEX_CELL_MILLIMETERS
                    ),
                )
            )
    return frozenset(cells)


def _local_segment_geometries_match(
    saved: _LocalSegment, current: _LocalSegment, shape: _AreaShape
) -> bool:
    """Compare source walls inside local guard boxes without clip artifacts."""
    return _local_segment_contexts_match(
        saved,
        _segment_context(saved, shape),
        current,
        _segment_context(current, shape),
        shape,
    )


def _local_segment_contexts_match(
    saved: _LocalSegment,
    saved_context: _SegmentContext,
    current: _LocalSegment,
    current_context: _SegmentContext,
    shape: _AreaShape,
) -> bool:
    """Compare two walls using their precomputed relevant neighborhoods."""
    saved_semantic, saved_guard, saved_local_endpoints, _saved_cells = saved_context
    current_semantic, current_guard, current_local_endpoints, _current_cells = (
        current_context
    )
    relevant = saved_semantic | current_semantic
    if not relevant or not relevant <= saved_guard & current_guard:
        return False

    saved_start = (saved[0], saved[1])
    saved_end = (saved[2], saved[3])
    current_start = (current[0], current[1])
    current_end = (current[2], current[3])
    for neighborhood in relevant:
        center_x, center_y, radius = shape[neighborhood]
        guard_bounds = (
            center_x - radius - _GUARD_MARGIN_MILLIMETERS,
            center_y - radius - _GUARD_MARGIN_MILLIMETERS,
            center_x + radius + _GUARD_MARGIN_MILLIMETERS,
            center_y + radius + _GUARD_MARGIN_MILLIMETERS,
        )
        saved_piece = _clip_segment(saved_start, saved_end, guard_bounds)
        current_piece = _clip_segment(current_start, current_end, guard_bounds)
        assert saved_piece is not None and current_piece is not None
        if not all(
            _point_near_supporting_line(point, current_start, current_end)
            for point in saved_piece
        ) or not all(
            _point_near_supporting_line(point, saved_start, saved_end)
            for point in current_piece
        ):
            return False

    return _endpoints_covered(saved_local_endpoints, (current_start, current_end)) and (
        _endpoints_covered(current_local_endpoints, (saved_start, saved_end))
    )


def _point_near_supporting_line(
    point: tuple[float, float],
    line_start: tuple[int, int],
    line_end: tuple[int, int],
) -> bool:
    """Return whether a point is within tolerance of an infinite source line."""
    delta_x = line_end[0] - line_start[0]
    delta_y = line_end[1] - line_start[1]
    length_squared = delta_x * delta_x + delta_y * delta_y
    if not length_squared:
        return _points_within_tolerance(point, line_start)
    cross = delta_x * (point[1] - line_start[1]) - delta_y * (point[0] - line_start[0])
    tolerance = (
        _LOCAL_GEOMETRY_TOLERANCE_MILLIMETERS
        + 2 * _SEGMENT_QUANTIZATION_ERROR_MILLIMETERS
    )
    return cross * cross <= tolerance * tolerance * length_squared


def _point_near_segment(
    point: tuple[float, float],
    segment: _LocalSegment,
    *,
    tolerance: float | None = None,
) -> bool:
    """Return whether a probe is near a millimeter-quantized source wall."""
    start_x, start_y, end_x, end_y = segment
    delta_x = end_x - start_x
    delta_y = end_y - start_y
    length_squared = delta_x * delta_x + delta_y * delta_y
    nearest_x: float
    nearest_y: float
    if not length_squared:
        nearest_x = start_x
        nearest_y = start_y
    else:
        projection = (
            (point[0] - start_x) * delta_x + (point[1] - start_y) * delta_y
        ) / length_squared
        projection = min(1.0, max(0.0, projection))
        nearest_x = start_x + projection * delta_x
        nearest_y = start_y + projection * delta_y
    distance_x = point[0] - nearest_x
    distance_y = point[1] - nearest_y
    if tolerance is None:
        tolerance = (
            _LOCAL_GEOMETRY_TOLERANCE_MILLIMETERS
            + _SEGMENT_QUANTIZATION_ERROR_MILLIMETERS
        )
    return distance_x * distance_x + distance_y * distance_y <= tolerance * tolerance


def _endpoints_covered(
    required: Sequence[tuple[int, int]], candidates: Sequence[tuple[int, int]]
) -> bool:
    """Return whether every local source endpoint has a tolerant counterpart."""
    return all(
        any(_points_within_tolerance(point, candidate) for candidate in candidates)
        for point in required
    )


def _points_within_tolerance(
    first: tuple[float, float], second: tuple[int, int]
) -> bool:
    """Compare endpoint coordinates with the two-wall rounding allowance."""
    tolerance = (
        _LOCAL_GEOMETRY_TOLERANCE_MILLIMETERS
        + 2 * _COORDINATE_QUANTIZATION_ERROR_MILLIMETERS
    )
    return all(
        abs(saved - current) <= tolerance
        for saved, current in zip(first, second, strict=True)
    )


def _add_flow_edge(
    graph: list[list[list[int]]], source: int, target: int, cost: int
) -> None:
    """Add one unit-capacity edge and its residual reverse edge."""
    graph[source].append([target, len(graph[target]), 1, cost])
    graph[target].append([source, len(graph[source]) - 1, 0, -cost])


def _minimum_cost_maximum_flow(
    graph: list[list[list[int]]],
    source: int,
    sink: int,
    *,
    stop_at_nonnegative: bool = False,
    charge_work: Callable[[int], None] | None = None,
) -> int:
    """Return the cost of a unit-capacity minimum-cost maximum flow."""
    total_cost = 0
    while True:
        if charge_work is not None:
            charge_work(len(graph) * 4)
        distances: list[int | None] = [None] * len(graph)
        previous_nodes = [-1] * len(graph)
        previous_edges = [-1] * len(graph)
        distances[source] = 0
        queue = deque([source])
        queued = [False] * len(graph)
        queued[source] = True
        while queue:
            if charge_work is not None:
                charge_work(1)
            node = queue.popleft()
            queued[node] = False
            distance = distances[node]
            assert distance is not None
            for edge_index, edge in enumerate(graph[node]):
                if charge_work is not None:
                    charge_work(1)
                target, _reverse, capacity, cost = edge
                candidate = distance + cost
                target_distance = distances[target]
                if capacity and (
                    target_distance is None or candidate < target_distance
                ):
                    distances[target] = candidate
                    previous_nodes[target] = node
                    previous_edges[target] = edge_index
                    if not queued[target]:
                        queue.append(target)
                        queued[target] = True
        if previous_nodes[sink] == -1:
            return total_cost
        sink_distance = distances[sink]
        assert sink_distance is not None
        if stop_at_nonnegative and sink_distance >= 0:
            return total_cost

        node = sink
        while node != source:
            if charge_work is not None:
                charge_work(1)
            previous = previous_nodes[node]
            edge = graph[previous][previous_edges[node]]
            edge[2] = 0
            graph[node][edge[1]][2] = 1
            total_cost += edge[3]
            node = previous


def _validate_area_circles(
    floor_plan: FloorPlan,
    circles: Sequence[Mapping[str, Any]],
    *,
    center_tolerance: float = 0.0,
    room_geometry: RoomGeometryIndex | None = None,
) -> list[dict[str, float]]:
    """Validate saved circles against the mapped floor without exposing them."""
    rooms = [
        {
            "room_id": room.id,
            "name": room.name,
            "boundary": [list(point) for point in room.boundary],
        }
        for room in floor_plan.rooms
    ]
    try:
        return AreaGeometry(rooms).validate(
            circles,
            center_tolerance=center_tolerance,
            geometry=room_geometry,
        )
    except probatio.Invalid as err:
        raise ValueError("area circles are invalid for the mapped floor") from err


def _clip_segment(
    start: tuple[float, float],
    end: tuple[float, float],
    bounds: tuple[float, float, float, float],
) -> tuple[tuple[float, float], tuple[float, float]] | None:
    """Clip a line segment to an axis-aligned local area neighborhood."""
    start_x, start_y = start
    delta_x = end[0] - start_x
    delta_y = end[1] - start_y
    minimum_x, minimum_y, maximum_x, maximum_y = bounds
    lower = 0.0
    upper = 1.0
    for direction, offset in (
        (-delta_x, start_x - minimum_x),
        (delta_x, maximum_x - start_x),
        (-delta_y, start_y - minimum_y),
        (delta_y, maximum_y - start_y),
    ):
        if direction == 0:
            if offset < 0:
                return None
            continue
        ratio = offset / direction
        if direction < 0:
            if ratio > upper:
                return None
            lower = max(lower, ratio)
        else:
            if ratio < lower:
                return None
            upper = min(upper, ratio)
    return (
        (start_x + lower * delta_x, start_y + lower * delta_y),
        (start_x + upper * delta_x, start_y + upper * delta_y),
    )


def _canonical_polygon(boundary: tuple[tuple[float, float], ...]) -> _CanonicalPolygon:
    """Canonicalize one polygon across closure, rotation, and winding."""
    points: list[_QuantizedPoint] = []
    for raw_x, raw_y in boundary:
        point = (_quantize_coordinate(raw_x), _quantize_coordinate(raw_y))
        if not points or point != points[-1]:
            points.append(point)
    if len(points) > 1 and points[0] == points[-1]:
        points.pop()
    if len(points) < 3 or len(set(points)) < 3:
        raise ValueError("room boundary has fewer than three distinct points")

    forward = _smallest_rotation(tuple(points))
    reverse = _smallest_rotation(tuple(reversed(points)))
    return min(forward, reverse)


def _smallest_rotation(points: _CanonicalPolygon) -> _CanonicalPolygon:
    """Return the lexicographically smallest cyclic rotation."""
    count = len(points)
    doubled = points + points
    first = 0
    second = 1
    offset = 0
    while first < count and second < count and offset < count:
        first_value = doubled[first + offset]
        second_value = doubled[second + offset]
        if first_value == second_value:
            offset += 1
            continue
        if first_value > second_value:
            first += offset + 1
            if first <= second:
                first = second + 1
        else:
            second += offset + 1
            if second <= first:
                second = first + 1
        offset = 0
    start = min(first, second)
    return points[start:] + points[:start]


def _quantize_coordinate(value: float) -> int:
    """Convert finite meters to signed millimeters, normalizing negative zero."""
    return _quantize(value, _MILLIMETERS_PER_METER)


def _quantize(value: float, units_per_meter: int) -> int:
    """Convert finite meters to a bounded signed integer unit."""
    numeric = float(value)
    if not math.isfinite(numeric):
        raise ValueError("room boundary coordinates must be finite")
    scaled = numeric * units_per_meter
    if not math.isfinite(scaled):
        raise ValueError("room boundary coordinate is out of range")
    quantized = math.floor(scaled + 0.5) if scaled >= 0 else math.ceil(scaled - 0.5)
    if not _MIN_SIGNED_64 <= quantized <= _MAX_SIGNED_64:
        raise ValueError("room boundary coordinate is out of range")
    return quantized
