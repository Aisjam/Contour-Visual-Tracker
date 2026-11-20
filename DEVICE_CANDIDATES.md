# Contour – Device Candidates

> **Compatibility watchlist · Updated 21 November 2026**  
> This is a planning document, **not** a list of confirmed working devices. Actual support depends on firmware, audio, SDL3, display, input mapping and device testing.

## Rating system

The five stars describe **five cumulative suitability checkpoints**, not a review score. A device earns a star for each applicable checkpoint, in order:

| Star | Requirement |
|:--:|---|
| ★☆☆☆☆ | **1 — Handheld:** it is a handheld gaming device. |
| ★★☆☆☆ | **2 — CMake target:** its platform/chipset is represented by the current Contour CMake build targets (**Windows** and **Allwinner H700**). A shared H700 target does **not** guarantee a device-specific build works. |
| ★★★☆☆ | **3 — Runtime plausible:** CPU, Linux/Windows environment and resources make running Contour plausible; **not a verified successful launch**. |
| ★★★★☆ | **4 — Dual thumbsticks:** two physical analogue sticks for Contour's intended input/macro controls. |
| ★★★★★ | **5 — Complete UI controls:** D-pad, face buttons, Start/Select/Menu equivalents, shoulder controls and two sticks offer a practical mapping for all core Contour interactions. Device-specific remapping may still be needed. |

**Important:** a device without two sticks is capped at **3/5** under this *cumulative* rubric, even if a stickless control scheme may become viable. Stars indicate candidate suitability, **not** the current test result.

### Development status

| Status | Meaning | Light-theme indicator |
|---|---|---|
| **Active** | Owned and currently used for Contour development/testing | ![Active](https://img.shields.io/badge/Active-DAF4E8?style=flat-square&labelColor=DAF4E8&color=DAF4E8) |
| **Planned** | Intended to purchase for hands-on testing soon | ![Planned](https://img.shields.io/badge/Planned-DDEBFF?style=flat-square&labelColor=DDEBFF&color=DDEBFF) |
| **Radar** | Identified as a candidate; no purchase or test scheduled | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) |
| **Nope** | Not pursuing this device | ![Nope](https://img.shields.io/badge/Nope-F8DDDF?style=flat-square&labelColor=F8DDDF&color=F8DDDF) |

Palette above uses **provisional Contour-light-inspired** pastel backgrounds (mint, blue, amber and rose); replace hex values with the actual light-theme semantic tokens if those are standardised elsewhere. GitHub Markdown tables do not support reliably coloured cells, so badges provide visual status cues.

## Chipset: Allwinner H700

**Existing CMake platform family:** H700 / Linux AArch64 (alongside Windows). The presence of the target alone does not certify every device. Device-level differences include display resolution, joystick count, button mapping, audio and firmware.

### Brand: Anbernic

| Candidate | Device link | Likelihood | Current development | Key considerations |
|---|---|:---:|---|---|
| **RG35XX Pro** | [Device information](https://www.retrodock.com/handhelds/anbernic/rg35xx-pro/) | ★★★★★ | ![Active](https://img.shields.io/badge/Active-DAF4E8?style=flat-square&labelColor=DAF4E8&color=DAF4E8) | Vertical, 3.5″ 640×480, dual sticks; primary target. |
| **RG35XX H** | [Device information](https://retrogamecorps.com/2024/06/07/anbernic-rg35xx-family-starter-guide/) | ★★★★★ | ![Active](https://img.shields.io/badge/Active-DAF4E8?style=flat-square&labelColor=DAF4E8&color=DAF4E8) | Horizontal, 3.5″ 640×480, dual sticks; important button-layout test. |
| **RG34XX SP** | [Device information](https://www.handhelds.wiki/Category:Allwinner_H700) | ★★★☆☆ | ![Active](https://img.shields.io/badge/Active-DAF4E8?style=flat-square&labelColor=DAF4E8&color=DAF4E8) | Clamshell, 3:2 screen, no dual sticks; verify alternate mapping. |
| **RG40XX H** | [Device information](https://www.retrodock.com/handhelds/anbernic/rg40xx-h/) | ★★★★★ | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) | Horizontal, 4″ 640×480, dual sticks; strong larger-screen candidate. |
| **RG CubeXX** | [Device information](https://www.retrodock.com/handhelds/anbernic/rg-cubexx/) | ★★★★★ | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) | Dual sticks, 720×720 square screen; needs explicit layout/scaling test. |
| **RG40XX V** | [Device information](https://www.retrodock.com/handhelds/anbernic/rg40xx-v/) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) | Vertical, 4″ 640×480, **one** stick; evaluate reduced macro controls. |
| **RG35XX Plus** | [Device information](https://retrogamecorps.com/2024/06/07/anbernic-rg35xx-family-starter-guide/) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) | Vertical 3.5″, no sticks; alternative input map needed. |
| **RG35XX (2024)** | [Official product page](https://anbernic.com/en-gb/collections/handheld-game-console/products/rg35xx) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) | H700 revision **only**; no sticks or built-in Wi-Fi/Bluetooth. Not the original pre-2024 RG35XX. |
| **RG35XX SP** | [Device information](https://retrogamecorps.com/2024/06/07/anbernic-rg35xx-family-starter-guide/) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) | 3.5″ clamshell, no sticks; test folding/suspend behaviour. |
| **RG34XX** | [Device information](https://www.handhelds.wiki/Category:Allwinner_H700) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) | 3:2 screen, no dual sticks; alternate layout. |
| **RG28XX** | [Device information](https://retrogamecorps.com/2024/06/07/anbernic-rg35xx-family-starter-guide/) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-FFF0CC?style=flat-square&labelColor=FFF0CC&color=FFF0CC) | Tiny 2.8″ display, no sticks or built-in Wi-Fi/Bluetooth; UI readability and sharing limitations. |

**Status verification:** The three Active entries reflect devices previously identified in Contour development/testing materials; ownership and *current* hands-on use should be reconfirmed before publicly asserting that all three are actively owned. No device is marked Planned or Nope without a stated purchase/rejection decision.

## Next validation steps

1. **Build:** check CMake/SDL3 target, deployable binary and firmware/OS support.
2. **Boot:** launch without missing libraries and verify audio at 48 kHz, 512-frame buffers.
3. **Inputs:** confirm D-pad, A/B/X/Y, Start/Select/Menu, L1/R1/L2/R2, stick axes and stick clicks where present.
4. **UI:** test 640×480, 720×480 and 720×720 layouts; confirm overlays, text, macro controls and readable menus.
5. **Connectivity:** validate wireless discovery, pairing and local transfer separately; do not assume all H700 models include wireless hardware.
6. **Performance:** profile sampler+synth voices, effects, compositor and memory under realistic projects.
7. **Record:** only call a device **Verified** after a documented launch and test, independent of the five-star suitability rating.

## Reference sources

- [H700 model family – Handhelds Wiki](https://handhelds.wiki/Category:Allwinner_H700)
- [Anbernic H700 platform and firmware list – KNULLI](https://github.com/knulli-cfw/knulli.org/blob/main/docs/devices/index.md)
- [RG35XX family hardware guide – Retro Game Corps](https://retrogamecorps.com/2024/06/07/anbernic-rg35xx-family-starter-guide/)
- [H700 platform specs – Batocera Wiki](https://wiki.batocera.org/choose_a_handheld)
- [Contour project](https://github.com/Aisjam/Contour-Visual-Tracker)

> **Maintainer note:** Planned and Nope are intentionally defined but currently unused. Change a Radar row to Planned when a purchase is actually intended, or Nope when support is ruled out. For additional chipsets, add a new `## Chipset: ...` section and `### Brand: ...` subsections using the same table format.
