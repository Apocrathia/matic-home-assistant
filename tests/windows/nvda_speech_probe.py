"""Temporary passive recorder for the Windows AT qualification pilot only."""

import hashlib
import json
import os
import time

import api
import globalPluginHandler
import speech.extensions as speechExtensions

SAFE_TERMS = (
    "Map options",
    "Your plans",
    "How to move the map",
    "Matic Map",
    "Kitchen",
)
MAX_SEGMENT = 180


class GlobalPlugin(globalPluginHandler.GlobalPlugin):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._phase_path = os.environ["NVDA_PILOT_PHASE_FILE"]
        self._event_path = os.environ["NVDA_PILOT_EVENT_FILE"]
        self._source_hash = self._hash_source()
        speechExtensions.pre_speechQueued.register(self._on_speech_queued)
        self._append({"kind": "loaded"})

    def _hash_source(self):
        with open(__file__, "rb") as source:
            return hashlib.sha256(source.read()).hexdigest()

    def _phase(self):
        try:
            with open(self._phase_path, encoding="utf-8") as marker:
                value = json.load(marker)
            if value.get("phase") not in {
                "tab-1",
                "tab-2",
                "tab-3",
                "tab-4",
                "tab-5",
                "tab-6",
                "tab-7",
                "tab-8",
                "nvda-report",
            }:
                return "idle"
            return value["phase"]
        except (OSError, ValueError, TypeError):
            return "idle"

    def _module(self, obj=None):
        try:
            focus = obj if obj is not None else api.getFocusObject()
            module = str(focus.appModule.appModuleName).lower()
            if module in {"msedge", "msedge.exe"}:
                return "msedge"
        except Exception:
            pass
        return None

    def _append(self, value, module=None):
        if value.get("kind") == "loaded":
            module = "nvda"
        elif module is None:
            module = self._module()
        if module is None:
            return
        record = {
            "timeNs": str(time.time_ns()),
            "pid": os.getpid(),
            "module": module,
            "sourceHash": self._source_hash,
            "phase": self._phase(),
            **value,
        }
        with open(self._event_path, "a", encoding="utf-8") as events:
            events.write(
                json.dumps(record, ensure_ascii=True, separators=(",", ":")) + "\n"
            )

    def event_gainFocus(self, obj, nextHandler):
        try:
            name = str(getattr(obj, "name", ""))
            role = str(getattr(obj, "role", ""))
            module = self._module(obj)
            if module and any(
                term.casefold() in name.casefold() for term in SAFE_TERMS
            ):
                self._append(
                    {"kind": "focus", "name": name[:MAX_SEGMENT], "role": role[:48]},
                    module,
                )
        except Exception:
            pass
        finally:
            nextHandler()

    def _safe_focus_name(self):
        try:
            name = str(getattr(api.getFocusObject(), "name", ""))
            if len(name) <= MAX_SEGMENT and any(
                term.casefold() in name.casefold() for term in SAFE_TERMS
            ):
                return name
        except Exception:
            pass
        return None

    def _on_speech_queued(self, speechSequence, priority):
        try:
            segments = []
            for segment in speechSequence:
                if (
                    not isinstance(segment, str)
                    or not segment
                    or len(segment) > MAX_SEGMENT
                ):
                    continue
                if any(term.casefold() in segment.casefold() for term in SAFE_TERMS):
                    if all(character.isprintable() for character in segment):
                        segments.append(segment)
            if segments:
                self._append(
                    {
                        "kind": "speech",
                        "segments": segments[:8],
                        "focusName": self._safe_focus_name(),
                    }
                )
        except Exception:
            # Observation must never disrupt NVDA's speech queue.
            pass

    def terminate(self, *args, **kwargs):
        speechExtensions.pre_speechQueued.unregister(self._on_speech_queued)
        super().terminate(*args, **kwargs)
