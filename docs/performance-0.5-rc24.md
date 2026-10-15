# RC24 performance receipt

Measured October 15, 2026 against clean head
`811c1699b94cf96203299a16f1165cea9ace3260`. Published RC24 commit
`b6fed2fbd31d5712bc16652c585e9ca1ce2cd1db` has the same tree.
These are packaged synthetic measurements. Installation, owner/device acceptance,
physical robot behavior and live transport remain separate [qualification gates](verification-0.5-rc24.md).
No screenshots or video were collected.

## Identity

Path-sorted compiled JavaScript names and bytes, SHA-256:

| Input | Identity |
|---|---|
| Candidate production bundle | `fee7c6e9a5e2783193b84942cd94d5cba713eabec033e605e40a11b856b77ad0` |
| Candidate review-only bundle | `2f8c2b0aaab95e3c34bb3c0870a6b18fe247254fb9b982b5b23c7f6003ddfe2c` |
| v0.4.5 control | `f15dfa25d373fe2b4a448595ad0fc40c1d5ed191` |
| Control bundle | `55fdd0680408a32fcf72a1478bb88445505185a6047317312ebf0e67d7c52752` |
| Desktop collector | `27b46b751b896c949394d5c5145f6b0d8aedd1bf89779f1dd7185b8239eaceaf` |
| Android collector | `96e42d4e8d9974bd02204e823a6e581e6482cc52c80a90e7b3b834160753d833` |

## Desktop input

Untraced headed Chromium 151.0.7922.34 on Apple M4/macOS arm64,
1280×900/DPR 1, unthrottled loopback, fresh contexts and no-store assets.
Three AB/BA/AB pairs each recorded 100 inputs: 60 view switches, five plan
editor loops and ten room-list/back loops, after workflow warm-up. Scene hashes
matched. One-minute host load ranged 3.95–4.36 on ten logical CPUs.

| Measure, three runs | v0.4.5 | RC24 |
|---|---|---|
| Estimated input p95, ms | 56 / 56 / 56 | 40 / 40 / 40 |
| Tasks over 50 ms | 0 / 0 / 0 | 0 / 0 / 0 |

The initial collector failed because the control's home card is called
"One-time clean" while RC24 calls it "Clean rooms". A private copy accepted
both labels and completed identical journeys. This was a collector mismatch;
no product source was altered. Event Timing retains browser quantization and
imputes unreported interactions at 16 ms; this is a lab proxy, not field INP.
The control's empty review-module shim only satisfies the current harness;
its production bundle is unchanged. Raw receipts remain private.

## Android touch

Samsung Galaxy Tab A9+ (SM-X210), Android 16, Chrome 155.0.8059.39,
landscape 920×520 CSS pixels. The collector served the exact packaged gallery
over ADB reverse with 1.2 million deterministic synthetic points, Auto detail,
and 40 real 250 ms swipes per run, 700 ms apart. Native and 150% density
emulation alternated for three repetitions each; every run recorded 1,200
TouchMove EventLatency samples. No HA or robot was contacted.

| p95, ms, three runs | Native scale 1.5 | 150% emulation, scale 2.25 |
|---|---|---|
| Event Timing | 64 / 64 / 72 | 64 / 72 / 80 |
| Touch to presented frame | 71.0 / 72.7 / 68.7 | 73.9 / 72.6 / 72.7 |

Every p95 is under 100 ms; one native run had individual maxima of 104 ms
Event Timing and 102 ms touch-to-present. Benchmark/input trace categories
supply presentation timing; these traced measurements are distinct from the
untraced desktop receipt. Task-created tabs/ADB forwarding were removed.
This is one tablet and a synthetic gallery, not an installed HA or phone verdict.

## Startup accounting

The unchanged [startup graph](../scripts/startup_graph.mjs) budget is 92,160 B.
Local Node 26.11.1 level-9 gzip estimates give 91,843 B for the static graph,
including the registered icon module. The release CI's Node 22 build/budget
checks pass. Compression implementations can give different estimates for the
same source bytes; do not substitute the local number for another runtime's receipt.

Pinned Home intentionally requests the lazy workflow on first rendering;
unpinned Home does not. The synthetic pinned gallery initially requested
123,521 B: 91,843 static plus 30,041 workflow and 1,637 shared dependency.
This conditional traffic is not relabeled as static startup. Existing tests
cover the conditional loading contract; neither size limit was broadened.

## Sustained resources and remaining measurements

A separate headed run used the same 1.5-million-source-point scene for three
minutes per build, 12 post-GC checkpoints and five unmount/remounts each.
Scene hashes matched; both used WebGL2. Auto detail rendered 1,500,000 points
on the control and 131,072 on RC24, so this is not equal rendered work.
Post-GC checkpoint heap ranged 2.67–2.73 MB on control and 3.23–3.33 MB on
RC24. Renderer-page task duration was 8.14/12.18 seconds; script duration
2.84/3.68 seconds. These are CDP page proxies, not whole-process CPU/GPU use.
All lifecycles completed and DOM/listener counts returned to consistent
per-build values. This bounds the observation window, not all future retention.

A separate 60-second numeric-only desktop frame trace completed with 3,600
scheduled drag moves and no page errors. Tracker interpretation remains open;
no presented-FPS pass is recorded here. GPU allocation/retention,
supported-phone behavior, slow-device stalls, live HA traffic and transport
recovery/budgets remain open. Production live transport stays OFF.
