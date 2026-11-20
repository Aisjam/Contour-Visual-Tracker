# Contour – Device & Deployment Candidates

> **Compatibility watchlist · Updated 21 November 2026**  
> Prospective hardware and platform targets; this is **not a verified compatibility list**. Manufacturer listings are linked directly wherever available.

## Five-point candidate rubric (handhelds)

A star is awarded for each **independent** criterion below; a new chipset can therefore score 4/5 despite having no Contour CMake target yet. The score evaluates *suitability*, not demonstrated compatibility.

| Point | Criterion |
|:--:|---|
| ★ 1 | **Handheld** — a portable handheld gaming device. |
| ★ 2 | **Current CMake family** — included in Contour's current Windows or Allwinner H700 build-target families; this alone does not guarantee device-specific compatibility. |
| ★ 3 | **Could run Contour** — a plausible operating system, CPU and hardware for a future build; not a confirmed launch. |
| ★ 4 | **Dual thumbsticks** — two analogue sticks for Contour's macro/joystick control layout. |
| ★ 5 | **Complete user interface** — sufficient physical controls and/or alternative touch/mouse input to map Contour's interaction system, potentially requiring custom layouts. |

**A 5/5 score does not mean 'tested'.** Details like screen size, kernel, SDL3, audio routing, input devices, graphics support and firmware still need validation.

### Development status (Contour light-mode-inspired badges)

| Status | Meaning | Label |
|---|---|---|
| **Active** | Owned and currently used for Contour development/testing | ![Active](https://img.shields.io/badge/Active-237A57?style=flat-square) |
| **Planned** | Intent to buy/test soon, or explicitly scheduled future deployment | ![Planned](https://img.shields.io/badge/Planned-3269A8?style=flat-square) |
| **Radar** | Recognised as a potential target but not scheduled | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) |
| **Nope** | Not pursuing at present | ![Nope](https://img.shields.io/badge/Nope-A13D4B?style=flat-square) |

GitHub Markdown does not reliably support cell backgrounds. The colour-coded badge approximations use high-contrast mint/blue/amber/rose semantic status colours for legibility in light mode. They are not claimed to be the exact Contour theme tokens.

## Chipset: Allwinner H700

**CMake family:** H700/Linux AArch64 (current). Device-specific OS, display and controls may still vary.

### Brand: Anbernic

| Name | Manufacturer link | Likelihood | Development | Notes |
|---|---|:---:|---|---|
| **RG35XX Pro** | [Official listing](https://anbernic.com/en-au/products/rg35xxpro) | ★★★★★ | ![Active](https://img.shields.io/badge/Active-237A57?style=flat-square) | Vertical, 3.5-inch 640×480, dual sticks; primary H700 target. |
| **RG34XX SP** | [Official listing](https://anbernic.com/en-au/products/rg34xxsp) | ★★★★★ | ![Active](https://img.shields.io/badge/Active-237A57?style=flat-square) | Clamshell 720×480;dual sticks; Secondary H700 target. |
| **RG35XX H** | [Official listing](https://win.anbernic.com/product/364.html) | ★★★★★ | ![Active](https://img.shields.io/badge/Active-237A57?style=flat-square) | Horizontal 3.5-inch 640×480, dual sticks; Horizontal UX and UI Testing. |
| **RG40XX H** | [Official listing](https://anbernic.com/en-au/products/rg40xx-h) | ★★★★★ | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | 4-inch 640×480, dual sticks; strong larger-screen option. |
| **RG CubeXX** | [Official listing](https://anbernic.com/en-au/products/rg-cubexx) | ★★★★★ | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | Dual sticks, square 720×720; visual layout tests required. |
| **RG40XX V** | [Official listing](https://anbernic.com/en-au/products/rg-40xxv) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | 4-inch 640×480, single stick; alternate macro mapping. |
| **RG35XX Plus** | [Official listing](https://anbernic.com/en-au/products/rg35xx-plus) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | 3.5-inch 640×480, stickless. |
| **RG35XX (2024)** | [Official listing](https://anbernic.com/en-au/products/rg35xx) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | Only H700 2024 revision; no sticks; not original model. |
| **RG35XX SP** | [Official listing](https://anbernic.com/en-au/products/rg35xxsp) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | 3.5-inch clamshell; no sticks; test sleep handling. |
| **RG34XX** | [Official listing](https://anbernic.com/en-au/products/rg34xx) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | 720×480; no dual sticks; alternate mapping. |
| **RG28XX** | [Official listing](https://anbernic.com/en-au/products/rg28xx) | ★★★☆☆ | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | 2.83-inch display; small UI, no sticks or built-in Wi-Fi/Bluetooth. |

**Active status check:** The three Active labels above retain prior project/watchlist classifications. Verify ownership and current hands-on testing before describing them publicly as personally owned or fully supported.

## Chipset: Allwinner A133P

**CMake family:** Not currently an explicit target; a new deployment configuration/toolchain will be needed.

### Brand: TrimUI

| Name | Manufacturer link | Likelihood | Development | Notes |
|---|---|:---:|---|---|
| **Brick Pro** | [Official TrimUI Store](https://www.trimuistore.com/products/trimui-brick-pro-handheld-game-console?variant=48810422894848) | ★★★★☆ **(4/5)** | ![Planned](https://img.shields.io/badge/Planned-3269A8?style=flat-square) | 3.95-inch 1024×768, dual Hall sticks, full front/shoulder buttons, built-in **mono microphone**; strong candidate for live sample recording/audio input. Verify SDL3 capture and microphone access on TrimUI Linux, and test latency. |

**Audio clarification:** The manufacturer advertises a *built-in mono microphone* and a 3.5 mm **headphone output**. Do **not** assume the 3.5 mm socket is an analogue line-in or microphone input; that requires separate hardware verification. The potential for recording directly into Contour is why this is Planned.

## Chipset: Rockchip RK3568

**CMake family:** Not currently an explicit target. Android/Linux packaging and dual-display handling require investigation.

### Brand: Anbernic

| Name | Manufacturer link | Likelihood | Development | Notes |
|---|---|:---:|---|---|
| **RG DS** | [Official Anbernic listing](https://anbernic.com/en-au/products/rgds) | ★★★★☆ **(4/5)** | ![Planned](https://img.shields.io/badge/Planned-3269A8?style=flat-square) | Clamshell with two 4-inch 640×480 multitouch screens, capacitive stylus, dual sticks, Android 14 / Linux 64-bit. Existing Contour mouse/touch support is a useful foundation, but dual-screen window routing, separate views and platform build still need implementation. |

**Dual-screen concept:** Song/Chain/Roll or visualiser on one display; instrument editing, pattern controls, mixer, keyboard or touch macros on the other. SDL display enumeration, touch coordinates, input focus and application-window placement must be tested on actual hardware.

## Other deployment targets (not specific to chipset or brand)

Desktop operating systems are listed separately: the **handheld five-star rubric is not applicable**. Status means *Contour deployment development* rather than ownership of a physical handheld.

| Target | Official platform link | Current build target | Development | Plan / blocker |
|---|---|:---:|---|---|
| **Windows** | [Microsoft Windows](https://www.microsoft.com/windows) | Yes | ![Active](https://img.shields.io/badge/Active-237A57?style=flat-square) | Existing desktop development/build target; continue testing mouse, keyboard, controller and audio. |
| **Linux desktop** | [Linux kernel](https://www.kernel.org/) | Not yet separate desktop target | ![Planned](https://img.shields.io/badge/Planned-3269A8?style=flat-square) | Expand deployment targets when Contour reaches beta or is close to beta. Plan x86-64 desktop build, SDL3/audio, packaging and distro testing. H700 Linux does **not** by itself imply a desktop Linux build. |
| **macOS** | [Apple macOS](https://www.apple.com/macos/) | No | ![Radar](https://img.shields.io/badge/Radar-946000?style=flat-square) | Mac hardware purchase required before local build, signing, packaging and hands-on testing. Review Apple Silicon support and SDL3 dependencies. |

### Scope for future entries

Add further `## Chipset: ...` sections and `### Brand: ...` tables for other dedicated handheld devices. Put desktop operating systems, mobile, tablets, browser/WebAssembly or other non-handheld deployment targets in **Other deployment targets**, with their own feasibility notes rather than an artificial handheld star score.

## Got a device I should know about?

Know a handheld, console, or other device that could be a good fit for **Contour** but isn't listed here? I'd love to hear about it!

[**Suggest a device by opening a GitHub issue**](https://github.com/Aisjam/Contour-Visual-Tracker/issues/new?title=Device%20suggestion%3A%20&body=Device%20name%3A%20%0AManufacturer%2Fproduct%20link%3A%20%0AChipset%20and%20operating%20system%20(if%20known)%3A%20%0AWhy%20it%20would%20be%20a%20good%20fit%20for%20Contour%3A%20)

Please include the **device name**, a **manufacturer or product link**, and what makes it interesting for Contour (for example, dual sticks, touchscreen, audio input, or Linux support). If you know the chipset or operating system, that's useful too.

I'll take a look and consider adding it to this candidate list. **A listing is not a promise of a future port or compatibility.**

## Validation checklist

1. **Build/toolchain** — correct CPU architecture, compiler, CMake preset, SDL3 and system libraries.
2. **Launch/audio** — 48 kHz output at default 512-frame buffer; profile synth voices, mixer, effects and memory.
3. **Capture** — for microphone devices, validate real audio capture endpoints, permissions, latency, monitor routing and sample import.
4. **Input** — D-pad, ABXY, Start/Select/Menu, shoulders, stick axes/clicks, keyboard, mouse and touch as available.
5. **Display** — test 640×480, 720×480, 720×720, 1024×768 and dual-screen layouts; check text scaling and overlays.
6. **Connectivity** — validate Bluetooth/Wi-Fi availability and Contour file-sharing transport per device.
7. **Record test result separately** — only label a platform/device **Verified** after a documented, reproducible successful launch.

## Manufacturer references

- [Anbernic official catalogue](https://anbernic.com/)
- [TrimUI official Brick Pro listing](https://www.trimuistore.com/products/trimui-brick-pro-handheld-game-console)
- [Contour source repository](https://github.com/Aisjam/Contour-Visual-Tracker)
