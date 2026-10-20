"""End-to-end saved-area recovery through persistence, Map Studio, and preview."""

from __future__ import annotations

import json
import math
from dataclasses import replace
from types import SimpleNamespace
from unittest.mock import AsyncMock

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers import llm

from custom_components.matic_robot.area_binding import (
    ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
    AREA_SCHEMA_VERSION,
    BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
    AreaBindingStatus,
    area_binding_status,
    binding_for_area,
)
from custom_components.matic_robot.client.models import FloorPlan, Room
from custom_components.matic_robot.llm import (
    MaticGetPlanReadinessTool,
    MaticGetPlanTool,
)
from custom_components.matic_robot.plans import (
    AreaBindingUpgradeResult,
    CleaningPlanManager,
    PlanAreaMapChangedError,
)
from custom_components.matic_robot.services import _saved_plan_preview
from custom_components.matic_robot.slam_scene import MaticAreasView
from tests.test_llm import (
    _context as _llm_context,
)
from tests.test_llm import (
    _entry as _llm_entry,
)
from tests.test_llm import (
    _hass as _llm_hass,
)
from tests.test_slam_scene import _entry, _hass, _json_request, _request, _runtime


def _dense_floor_plan() -> FloorPlan:
    """Build a complex saved room which uses the bounded legacy binding."""
    boundary = [
        (
            0.5 + 0.45 * math.cos(2 * math.pi * index / 320),
            0.5 + 0.45 * math.sin(2 * math.pi * index / 320),
        )
        for index in range(320)
    ]
    return FloorPlan(
        1,
        "partition",
        b"partition",
        (Room("room-1", "Kitchen", "kitchen", b"kitchen", tuple(boundary)),),
        "Main floor",
    )


def _map_with_unrelated_room(floor_plan: FloorPlan) -> FloorPlan:
    remote = Room(
        "room-2",
        "Office",
        "office",
        b"office",
        ((3.0, 0.0), (4.0, 0.0), (4.0, 1.0), (3.0, 1.0)),
    )
    return replace(floor_plan, rooms=(*floor_plan.rooms, remote))


def _legacy_v4_binding(floor_plan: FloorPlan, circles: list[dict]) -> dict:
    current = binding_for_area(floor_plan, circles)
    assert current["version"] == ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
    return {
        "version": BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION,
        "mission_id": current["mission_id"],
        "partition_id": current["partition_id"],
        "geometry_sha256": current["geometry_sha256"],
        "local_geometry_sha256": current["local_geometry_sha256"],
    }


def _saved_plan(manager: CleaningPlanManager) -> None:
    robot = manager._robot("synthetic-serial")
    robot["plans"]["area-plan"] = {
        "id": "area-plan",
        "name": "Area plan",
        "enabled": True,
        "run_behavior": "intelligent",
        "rooms": [],
        "entries": [
            {
                "kind": "area",
                "area_id": "saved-zone",
                "cleaning_mode": "vacuum",
                "coverage_setting": "standard",
            }
        ],
        "return_to_base": True,
    }


@pytest.mark.asyncio
async def test_stale_v4_area_recovers_through_catalog_and_saved_plan_preview(
    hass: HomeAssistant,
) -> None:
    """A stale legacy binding stays blocked until explicit validated rebind."""
    manager = CleaningPlanManager(hass)
    manager._store = SimpleNamespace(async_save=AsyncMock())
    original_map = _dense_floor_plan()
    current_map = _map_with_unrelated_room(original_map)
    circles = [{"x": 0.5, "y": 0.5, "radius": 0.2}]
    saved_area = {
        "schema_version": AREA_SCHEMA_VERSION,
        "name": "Saved zone",
        "circles": circles,
        "cleaning_mode": "vacuum",
        "coverage_setting": "standard",
        "map_binding": _legacy_v4_binding(original_map, circles),
    }
    manager._robot("synthetic-serial")["areas"]["saved-zone"] = saved_area
    _saved_plan(manager)

    runtime = _runtime()
    runtime.coordinator.data.floor_plan = current_map
    runtime.cleaning_plans = manager
    runtime.client.async_send_command = AsyncMock()
    entry = _entry(runtime)
    api = MaticAreasView()
    tool_entry = _llm_entry(floor_plan=current_map)
    tool_entry.runtime_data.cleaning_plans = manager
    tool_hass = _llm_hass(tool_entry)
    get_plan = MaticGetPlanTool()
    readiness = MaticGetPlanReadinessTool()

    migration = await manager.async_upgrade_area_bindings(
        "synthetic-serial", current_map
    )
    assert migration == AreaBindingUpgradeResult(0, True)
    assert (
        saved_area["map_binding"]["version"]
        == BOUNDED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
    )
    assert (
        area_binding_status(saved_area, current_map)
        is AreaBindingStatus.GEOMETRY_CHANGED
    )

    with pytest.raises(PlanAreaMapChangedError):
        _saved_plan_preview(manager, "synthetic-serial", entry, {}, "area-plan")
    with pytest.raises(HomeAssistantError):
        await get_plan.async_call(
            tool_hass,
            llm.ToolInput(get_plan.name, {"plan": "area-plan"}),
            _llm_context(),
        )
    stale_readiness = await readiness.async_call(
        tool_hass,
        llm.ToolInput(readiness.name, {"plan": "area-plan"}),
        _llm_context(),
    )
    assert stale_readiness.data["status"] == "needs_confirmation"
    assert stale_readiness.data["areas"] == [
        {"name": "Saved zone", "status": "needs_confirmation"}
    ]
    assert stale_readiness.data["can_preview"] is False
    runtime.client.async_send_command.assert_not_awaited()

    areas = json.loads((await api.get(_request(_hass(entry)), "entry")).body)["areas"]
    assert areas == [
        {
            "id": "saved-zone",
            "name": "Saved zone",
            "circles": circles,
            "cleaning_mode": "vacuum",
            "coverage_setting": "standard",
            "status": "geometry_changed",
            "can_rebind": True,
        }
    ]

    response = await api.post(
        _json_request(
            _hass(entry),
            "POST",
            {
                "area_id": "saved-zone",
                "name": "Saved zone",
                "circles": circles,
                "cleaning_mode": "vacuum",
                "coverage_setting": "standard",
            },
        ),
        "entry",
    )
    assert response.status == 200
    assert json.loads(response.body) == {"id": "saved-zone"}
    rebound = manager.area("synthetic-serial", "saved-zone")
    assert rebound is not None
    assert (
        rebound["map_binding"]["version"]
        == ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
    )
    assert area_binding_status(rebound, current_map) is AreaBindingStatus.CURRENT

    _floor, preview, _token = _saved_plan_preview(
        manager, "synthetic-serial", entry, {}, "area-plan"
    )
    assert preview["valid"] is True
    assert preview["entries"][0]["area_id"] == "saved-zone"
    llm_preview = await get_plan.async_call(
        tool_hass,
        llm.ToolInput(get_plan.name, {"plan": "area-plan"}),
        _llm_context(),
    )
    assert llm_preview.data["legs"][0]["custom_area"]["id"] == "saved-zone"
    ready = await readiness.async_call(
        tool_hass,
        llm.ToolInput(readiness.name, {"plan": "area-plan"}),
        _llm_context(),
    )
    assert ready.data["status"] == "ready"
    assert ready.data["areas"] == [{"name": "Saved zone", "status": "ready"}]
    assert ready.data["can_preview"] is True
    runtime.client.async_send_command.assert_not_awaited()


@pytest.mark.asyncio
async def test_v5_area_survives_unrelated_room_addition_but_not_room_translation(
    hass: HomeAssistant,
) -> None:
    """Anchors preserve safe remote edits and reject movement of the bound room."""
    manager = CleaningPlanManager(hass)
    manager._store = SimpleNamespace(async_save=AsyncMock())
    original_map = _dense_floor_plan()
    current_map = _map_with_unrelated_room(original_map)
    circles = [{"x": 0.5, "y": 0.5, "radius": 0.2}]
    area = {
        "schema_version": AREA_SCHEMA_VERSION,
        "name": "Saved zone",
        "circles": circles,
        "cleaning_mode": "vacuum",
        "coverage_setting": "standard",
        "map_binding": binding_for_area(original_map, circles),
    }
    assert (
        area["map_binding"]["version"] == ANCHORED_HASH_ONLY_SCOPED_MAP_BINDING_VERSION
    )
    manager._robot("synthetic-serial")["areas"]["saved-zone"] = area
    _saved_plan(manager)

    assert area_binding_status(area, current_map) is AreaBindingStatus.CURRENT
    assert (
        manager.preview("synthetic-serial", {}, "area-plan", floor_plan=current_map)[
            "valid"
        ]
        is True
    )

    moved_room = replace(
        current_map.rooms[0],
        boundary=tuple((x + 0.1, y) for x, y in current_map.rooms[0].boundary),
    )
    translated_map = replace(current_map, rooms=(moved_room, *current_map.rooms[1:]))
    assert (
        area_binding_status(area, translated_map) is AreaBindingStatus.GEOMETRY_CHANGED
    )
    with pytest.raises(PlanAreaMapChangedError):
        manager.preview("synthetic-serial", {}, "area-plan", floor_plan=translated_map)
