# Android touch latency (UX7)

The 0.5 audit carried an Android p95 of 152 ms against the 100 ms input budget.
That figure came from RC16 and earlier collectors. It does not reproduce on the
current code and Chrome, and the two costs found while reproducing it are fixed.

## Device and method

Measured October 12, 2026 on a Samsung Galaxy Tab A9+ (SM-X210, Android 16,
landscape 1920×1200, DPR 1.5) in Chrome 155.0.8059.39 over USB debugging.

Command, after `npm run build:map-studio-v4`:
`node scripts/measure_android_latency.mjs --swipes 40 --scale <1.5|2.25>`.
The collector serves the built gallery to the tablet over `adb reverse`, loads a
deterministic synthetic scene of 1.2 million points in 3D at Auto detail, and
injects real touchscreen swipes (250 ms, 700 ms apart) with `adb shell input`.
It reports two measures:

- Touch-to-present: Chrome's `EventLatency` for every touch move, from the
  hardware event to the presented frame. This is the camera following the finger.
- Event Timing: the longest entry per interaction (pointer down and up), 8 ms
  quantized, as in earlier receipts.

`--scale 2.25` overrides the device scale factor, the same density as 150%
browser zoom, the condition of the original 152 ms stress run. Main
(`fa3d014`) and this branch were run alternately, three rounds each.

## Results

| p95, ms (three rounds) | Main | This branch |
|---|---|---|
| Touch-to-present, 150% zoom | 86.1 / 85.1 / 86.2 | 73.3 / 73.2 / 74.5 |
| Touch-to-present max, 150% zoom | 101.5 / 112.2 / 101.5 | 86.9 / 94.7 / 91.9 |
| Event Timing, 150% zoom | 80 / 80 / 72 | 64 / 64 / 64 |
| Touch-to-present, native density | 72.1 / 69.5 / 73.0 | 72.7 / 69.0 / 68.3 |
| Event Timing, native density | 64 / 64 / 64 | 64 / 64 / 64 |

Every configuration meets the 100 ms budget on this device. At native density
the canvases are already inside the new pixel budget, so the branch matches main.

The installed RC22 on the same tablet, with the real map and the Home Assistant
shell, measured Event Timing p95 80 to 96 ms and touch-to-present p95 82 to
84 ms over 30 to 60 swipes. That build predates this branch.

## Causes found

A trace of the installed panel split each touch move into stages. JavaScript
was about 1.5 ms per move with no long animation frames. The time sat in the
GPU and display pipeline: GPU main-thread work ran near 60% during gestures,
and buffer completion reached 24 ms at p95.

1. **Focus ring repaint.** A touch focused the map and showed the keyboard focus
   ring. The ring was an `outline` on the map root, which repainted the whole
   page layer on every canvas frame: 3,116 repaints in 40 swipes, about four
   GPU raster tiles per frame. The map now takes pointer focus with
   `focusVisible: false`. The keyboard ring is a positioned overlay that is
   never repainted by canvas frames, with a forced-colors `Highlight` border.
2. **Canvas fill.** Cost grows with device pixels in both map canvases, the
   WebGL points and the 2D labels and outlines. Capping either canvas helped,
   and capping both helped most. On touch devices at Auto detail, each canvas
   now renders at most 1.1 million device pixels, which is this tablet's native
   map size. It never drops below CSS resolution, so labels stay legible.
   Maximum detail keeps full density.

Ruled out: JavaScript handlers (under 2 ms), the 350,000-point touch cap, which
already applied, Home Assistant's seasonal overlay, and the point shader's
`discard`.

## Limits

This is one Android tablet. A phone's smaller map often fits inside the budget,
and no phone was measured. The phone and owner walkthroughs in the qualification
reset still apply. Raw traces stay private. The collector contacts no Home
Assistant or robot; the RC22 readings only viewed and moved the map camera.
