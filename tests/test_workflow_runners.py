"""Keep every workflow job on GitHub-hosted runners.

This public repository has no self-hosted runner. A job that targets one would
either queue forever or, if a runner were registered again, run pull-request
code on a private machine.
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest
import yaml

ROOT = Path(__file__).parents[1]
WORKFLOWS = ROOT / ".github" / "workflows"
GITHUB_HOSTED_RUNNER = re.compile(
    r"ubuntu-(?:latest|\d{2}\.\d{2})(?:-arm)?"
    r"|windows-(?:latest|\d{4})(?:-arm)?"
    r"|macos-(?:latest|\d{2})(?:-intel|-large|-xlarge)?"
)


def _runner_violations(path: Path) -> list[str]:
    """Return every job whose runner is not a literal GitHub-hosted label."""
    text = path.read_text(encoding="utf-8")
    violations = [f"{path.name}: mentions self-hosted"] if "self-hosted" in text else []
    jobs = (yaml.safe_load(text) or {}).get("jobs") or {}
    if not jobs:
        violations.append(f"{path.name}: defines no jobs")
    for name, job in jobs.items():
        runs_on = job.get("runs-on") if isinstance(job, dict) else None
        if not isinstance(runs_on, str) or not GITHUB_HOSTED_RUNNER.fullmatch(runs_on):
            violations.append(f"{path.name}:{name}: runs-on {runs_on!r}")
    return violations


def test_every_workflow_job_runs_on_a_github_hosted_runner() -> None:
    """Fail on any self-hosted, custom-label or indirect runs-on."""
    workflows = sorted([*WORKFLOWS.glob("*.yml"), *WORKFLOWS.glob("*.yaml")])
    assert workflows
    assert [v for path in workflows for v in _runner_violations(path)] == []


@pytest.mark.parametrize(
    "jobs",
    [
        "  build:\n    runs-on: [self-hosted, macOS, ARM64]\n",
        "  build:\n    runs-on: self-hosted\n",
        "  build:\n    runs-on: mbp\n",
        "  build:\n    runs-on: ${{ matrix.os }}\n",
        "  build:\n    runs-on:\n      group: private\n",
        "  build:\n    uses: ./.github/workflows/reusable.yml\n",
        "  build:\n    runs-on: ubuntu-latest  # not self-hosted\n",
        "  build:\n    runs-on: ubuntu-mine\n",
    ],
)
def test_runner_check_rejects_runners_that_are_not_github_hosted(
    tmp_path: Path, jobs: str
) -> None:
    """Each form that could reach a private machine is reported."""
    path = tmp_path / "workflow.yml"
    path.write_text(f"on: push\njobs:\n{jobs}", encoding="utf-8")
    assert _runner_violations(path)


@pytest.mark.parametrize(
    "runner",
    ["ubuntu-latest", "ubuntu-24.04", "ubuntu-24.04-arm", "windows-2025", "macos-15"],
)
def test_runner_check_accepts_github_hosted_labels(tmp_path: Path, runner: str) -> None:
    """Standard GitHub-hosted labels pass."""
    path = tmp_path / "workflow.yml"
    path.write_text(
        f"on: push\njobs:\n  build:\n    runs-on: {runner}\n", encoding="utf-8"
    )
    assert _runner_violations(path) == []
