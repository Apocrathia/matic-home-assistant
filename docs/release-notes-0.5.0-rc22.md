# v0.5.0-rc22

The loaded-code diagnostic now accepts the integration's canonical runtime class
when it is defined directly in the package root. RC21 incorrectly rejected that
class while accepting classes in submodules, producing one identity error on the
real installation even though every measured code body matched its source.

Canonical class identity, module origin, source-binding and code comparisons
remain enforced. Bounded failure reasons now identify a relative source file,
AST line or runtime-class index without exposing private values or paths.

RC22 retains the earlier alert and Stop repairs. It remains a prerelease;
see [qualification](verification-0.5-rc22.md).
