# v0.5.0-rc21

Diagnostics now compare loaded Matic source-defined Python code with the
installed source and report the Core process ID, code digest, source digest,
identity errors and explicit exclusions. The passive check performs no robot I/O
and runs source reads and compilation in Home Assistant's executor.

It detects stale or replaced function code, missing source bindings, changed
property/static/class method descriptors, incorrect module origins and runtime
changes during collection. It does not attest the whole process, dependencies,
globals, closure values, generated code or aliases held outside the inspected
bindings. No raw code, runtime values or absolute paths are exported.

RC21 retains RC20's quiet firmware notifications and RC19's Stop ownership
repairs. It remains a prerelease; see [qualification](verification-0.5-rc21.md).
