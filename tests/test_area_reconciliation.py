"""Automatic custom-area recovery keeps the original spatial reference."""

import math
from copy import deepcopy
from dataclasses import replace
from types import SimpleNamespace
from unittest.mock import AsyncMock, patch

import pytest

from custom_components.matic_robot import area_binding as binding
from custom_components.matic_robot.area_geometry import RoomGeometryIndex
from custom_components.matic_robot.client.models import FloorPlan, Room
from custom_components.matic_robot.plans import (
    AreaBindingUpgradeResult,
    CleaningPlanManager,
    PlanAreaMapChangedError,
)
from custom_components.matic_robot.services import _validated_area_command


def _floor(boundary=((0, 0), (10, 0), (10, 10), (0, 10))):
    return FloorPlan(
        42,
        "partition",
        b"partition",
        (Room("room", "Room", "protocol", b"room", boundary),),
    )


def _area(floor):
    circles = [{"x": 5.0, "y": 5.0, "radius": 0.2}]
    return {
        "schema_version": binding.AREA_SCHEMA_VERSION,
        "name": "Area",
        "circles": circles,
        "cleaning_mode": "vacuum",
        "coverage_setting": "standard",
        "map_binding": binding.binding_for_area(floor, circles),
    }


@pytest.mark.parametrize("offset", [0.002, 0.015])
def test_outer_contour_refinement_recovers_without_rewriting_area(offset):
    original = _floor()
    area = _area(original)
    before = deepcopy(area)
    changed = _floor(((offset, 0), (10, 0), (10, 10), (offset, 10)))
    for current in (changed, original, changed):
        assert (
            binding.area_binding_status(area, current)
            is binding.AreaBindingStatus.CURRENT
        )
        # The cleaning command uses the same decision as the area workspace.
        assert _validated_area_command(area, current, None, None)[1] == [
            (5.0, 5.0, 0.2)
        ]
    assert area == before


def test_successive_small_changes_cannot_walk_the_saved_frame():
    area = _area(_floor())
    for offset in (0.005, 0.010, 0.015):
        current = _floor(((offset, 0), (10, 0), (10, 10), (offset, 10)))
        assert (
            binding.area_binding_status(area, current)
            is binding.AreaBindingStatus.CURRENT
        )
    current = _floor(((0.025, 0), (10, 0), (10, 10), (0.025, 10)))
    assert (
        binding.area_binding_status(area, current)
        is binding.AreaBindingStatus.GEOMETRY_CHANGED
    )


def test_partition_churn_requires_identical_spatial_evidence():
    original = _floor()
    area = _area(original)
    repartitioned = replace(
        original, partition_protocol_id="new", partition_id_wire=b"new"
    )
    assert (
        binding.area_binding_status(area, repartitioned)
        is binding.AreaBindingStatus.CURRENT
    )
    changed = replace(
        _floor(((1, 0), (11, 0), (11, 10), (1, 10))),
        partition_protocol_id="new",
        partition_id_wire=b"new",
    )
    assert (
        binding.area_binding_status(area, changed)
        is binding.AreaBindingStatus.PARTITION_CHANGED
    )


def test_same_bounds_do_not_replace_real_frame_landmarks():
    original = _floor(
        ((0, 2), (2, 0), (8, 0), (10, 2), (10, 8), (8, 10), (2, 10), (0, 8))
    )
    area = _area(original)
    assert (
        binding.area_binding_status(area, _floor())
        is binding.AreaBindingStatus.GEOMETRY_CHANGED
    )


def test_room_retessellation_does_not_invalidate_an_interior_area():
    area = _area(_floor())
    current = _floor(((0, 0), (3, 0), (10, 0), (10, 7), (10, 10), (0, 10)))
    assert (
        binding.area_binding_status(area, current) is binding.AreaBindingStatus.CURRENT
    )


@pytest.mark.parametrize("offset", [(0.001, 0), (0.015, 0), (0, 0.015), (0.015, 0.015)])
def test_small_single_room_translation_does_not_keep_stale_area_frame(offset):
    original = _floor()
    remote = Room(
        "remote", "Remote", "remote", b"remote", ((20, 0), (30, 0), (30, 10), (20, 10))
    )
    original = replace(original, rooms=(*original.rooms, remote))
    area = _area(original)
    dx, dy = offset
    moved = replace(
        original,
        rooms=(
            replace(
                original.rooms[0],
                boundary=tuple((x + dx, y + dy) for x, y in original.rooms[0].boundary),
            ),
            remote,
        ),
    )
    assert (
        binding.translation_invariant_geometry_fingerprint(moved)
        != area["map_binding"]["translation_invariant_geometry_sha256"]
    )
    assert (
        binding.area_binding_status(area, moved)
        is binding.AreaBindingStatus.GEOMETRY_CHANGED
    )


def test_small_centered_room_rotation_does_not_keep_stale_area_frame():
    original = _floor()
    remote = Room(
        "remote", "Remote", "remote", b"remote", ((20, 0), (30, 0), (30, 10), (20, 10))
    )
    original = replace(original, rooms=(*original.rooms, remote))
    area = _area(original)
    angle = 0.0005
    cos_angle, sin_angle = math.cos(angle), math.sin(angle)
    rotated_boundary = tuple(
        (
            5 + cos_angle * (x - 5) - sin_angle * (y - 5),
            5 + sin_angle * (x - 5) + cos_angle * (y - 5),
        )
        for x, y in original.rooms[0].boundary
    )
    rotated = replace(
        original,
        rooms=(replace(original.rooms[0], boundary=rotated_boundary), remote),
    )
    assert (
        binding.area_binding_status(area, rotated)
        is binding.AreaBindingStatus.GEOMETRY_CHANGED
    )


async def test_moved_room_blocks_saved_plan_preview(hass):
    original = _floor()
    remote = Room(
        "remote", "Remote", "remote", b"remote", ((20, 0), (30, 0), (30, 10), (20, 10))
    )
    original = replace(original, rooms=(*original.rooms, remote))
    area = _area(original)
    moved = replace(
        original,
        rooms=(
            replace(
                original.rooms[0],
                boundary=tuple((x + 0.015, y) for x, y in original.rooms[0].boundary),
            ),
            remote,
        ),
    )
    manager = CleaningPlanManager(hass)
    manager._robot("serial")["areas"]["area"] = area
    with pytest.raises(PlanAreaMapChangedError):
        manager._preview_area(
            "serial",
            {
                "area_id": "area",
                "cleaning_mode": "vacuum",
                "coverage_setting": "standard",
            },
            moved,
        )


def test_legacy_bounds_bug_does_not_invalidate_unchanged_room_after_remote_edit():
    original = _floor(((0, 0), (1, 0), (10, 2), (10, 10), (0, 10)))
    remote = Room(
        "remote", "Remote", "remote", b"remote", ((20, 0), (30, 0), (30, 10), (20, 10))
    )
    original = replace(original, rooms=(*original.rooms, remote))
    area = _area(original)
    anchor = area["map_binding"]["translation_room_anchors"][0]
    assert anchor["bounds"][2] == 10000
    anchor["bounds"][2] = anchor.pop("boundary_mm")[-1][0]
    assert anchor["bounds"][2] == 1000
    changed = replace(
        original,
        rooms=(
            original.rooms[0],
            replace(remote, boundary=((20, 0), (31, 0), (31, 10), (20, 10))),
        ),
    )
    assert (
        binding.area_binding_status(area, changed) is binding.AreaBindingStatus.CURRENT
    )


@pytest.mark.parametrize(
    "polygon", [None, [], [[True, 0]] * 3, [[0, 0]] * 3, [[0, 0, 0]] * 3]
)
def test_corrupt_frame_snapshot_stays_blocked(polygon):
    floor = _floor()
    area = _area(floor)
    area["map_binding"]["translation_room_anchors"][0]["boundary_mm"] = polygon
    assert binding.area_binding_status(area, floor) is binding.AreaBindingStatus.INVALID


def test_overflowing_frame_snapshot_and_malformed_legacy_bounds_stay_blocked():
    floor = _floor()
    area = _area(floor)
    anchor = area["map_binding"]["translation_room_anchors"][0]
    anchor["boundary_mm"] = [[-(1 << 63), 0], [0, 0], [(1 << 63) - 1, 1]]
    assert binding.area_binding_status(area, floor) is binding.AreaBindingStatus.INVALID
    anchor.pop("boundary_mm")
    anchor["bounds"] = [0, 0, True, 10000]
    assert binding.area_binding_status(area, floor) is binding.AreaBindingStatus.INVALID


def test_frame_snapshot_and_matching_are_bounded():
    floor = _floor()
    area = _area(floor)
    with patch.object(binding, "_MAX_ROOM_FRAME_POINTS", 3):
        assert (
            binding.area_binding_status(area, floor)
            is binding.AreaBindingStatus.INVALID
        )
        with pytest.raises(ValueError, match="too many room frame"):
            binding.binding_for_area(floor, area["circles"])
    changed = _floor(((0.002, 0), (10, 0), (10, 10), (0.002, 10)))
    with patch.object(
        binding,
        "_room_frame_matches",
        side_effect=binding.GeometryTooComplex("bounded"),
    ):
        assert (
            binding.area_binding_status(area, changed)
            is binding.AreaBindingStatus.GEOMETRY_CHANGED
        )


def test_degenerate_landmarks_do_not_establish_a_frame():
    saved = {"fingerprint": "a" * 64, "boundary_mm": [[0, 0], [1, 0], [2, 0]]}
    current = {"fingerprint": "b" * 64, "boundary_mm": [[0, 0], [1, 1], [2, 0]]}
    assert not binding._room_frame_matches(saved, current, RoomGeometryIndex([]))


async def test_old_binding_enriches_only_on_original_map_and_survives_reload(hass):
    floor = _floor()
    area = _area(floor)
    area["map_binding"]["translation_room_anchors"][0].pop("boundary_mm")
    manager = CleaningPlanManager(hass)
    manager._store = SimpleNamespace(async_save=AsyncMock())
    manager._robot("serial")["areas"]["area"] = deepcopy(area)
    changed = _floor(((0.015, 0), (10, 0), (10, 10), (0.015, 10)))
    assert await manager.async_upgrade_area_bindings(
        "serial", changed
    ) == AreaBindingUpgradeResult(0, True)
    manager._store.async_save.assert_not_awaited()
    assert await manager.async_upgrade_area_bindings(
        "serial", floor
    ) == AreaBindingUpgradeResult(1, False)
    saved = deepcopy(manager._data)
    manager._store.async_save.assert_awaited_once()
    reloaded = CleaningPlanManager(hass)
    reloaded._data = saved
    reloaded._store = SimpleNamespace(async_save=AsyncMock())
    assert (
        binding.area_binding_status(reloaded.area("serial", "area"), changed)
        is binding.AreaBindingStatus.CURRENT
    )
    assert await reloaded.async_upgrade_area_bindings(
        "serial", changed
    ) == AreaBindingUpgradeResult(0, False)
    reloaded._store.async_save.assert_not_awaited()
    assert reloaded._data == saved


async def test_legacy_upgrade_does_not_rebase_tolerated_remote_map_changes(hass):
    floor = _floor()
    remote = Room(
        "remote", "Remote", "remote", b"remote", ((20, 0), (30, 0), (30, 10), (20, 10))
    )
    floor = replace(floor, rooms=(*floor.rooms, remote))
    area = _area(floor)
    area["map_binding"]["translation_room_anchors"][0].pop("boundary_mm")
    changed = replace(
        floor,
        rooms=(
            floor.rooms[0],
            replace(remote, boundary=((20, 0), (31, 0), (31, 10), (20, 10))),
        ),
    )
    assert (
        binding.area_binding_status(area, changed) is binding.AreaBindingStatus.CURRENT
    )
    manager = CleaningPlanManager(hass)
    manager._store = SimpleNamespace(async_save=AsyncMock())
    manager._robot("serial")["areas"]["area"] = deepcopy(area)
    assert await manager.async_upgrade_area_bindings(
        "serial", changed
    ) == AreaBindingUpgradeResult(0, True)
    manager._store.async_save.assert_not_awaited()
    assert manager.areas("serial")["area"] == area


async def test_legacy_enrichment_respects_aggregate_frame_point_limit(hass):
    floor = _floor()
    legacy = _area(floor)
    legacy["map_binding"]["translation_room_anchors"][0].pop("boundary_mm")
    manager = CleaningPlanManager(hass)
    manager._store = SimpleNamespace(async_save=AsyncMock())
    manager._robot("serial")["areas"] = {
        "legacy": deepcopy(legacy),
        "existing": _area(floor),
    }
    before = deepcopy(manager.areas("serial"))
    with patch(
        "custom_components.matic_robot.plans._MAX_PERSISTED_ROOM_FRAME_POINTS_PER_ROBOT",
        6,
    ):
        result = await manager.async_upgrade_area_bindings("serial", floor)
    assert result == AreaBindingUpgradeResult(0, True)
    manager._store.async_save.assert_not_awaited()
    assert manager.areas("serial") == before


async def test_legacy_enrichment_rolls_back_when_store_write_fails(hass):
    floor = _floor()
    legacy = _area(floor)
    legacy["map_binding"]["translation_room_anchors"][0].pop("boundary_mm")
    manager = CleaningPlanManager(hass)
    manager._store = SimpleNamespace(async_save=AsyncMock(side_effect=OSError("disk")))
    manager._robot("serial")["areas"]["legacy"] = deepcopy(legacy)
    before = manager.areas("serial")
    with pytest.raises(OSError, match="disk"):
        await manager.async_upgrade_area_bindings("serial", floor)
    assert manager.areas("serial") == before
