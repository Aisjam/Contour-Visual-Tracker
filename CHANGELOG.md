# Contour – Visual Tracker: Changelog

Public releases are listed newest first. Contour is still in early development, and features, interfaces and file formats may change.

## [v0.0.2-alpha] — 16 November 2026

**Contour v0.0.2-alpha — The Syntax ’26 Performance Pass**

**Release:** 0.0.2-alpha  
**Status:** Early Development / Experimental

After showing Contour at Syntax ’26, it was clear that performance needed some
attention. Just four channels of samples were making things feel very sluggish.

So I built a profiler and started looking at where the audio processing time was
going. Turns out someone had left all the modulators running all the time…

This update cuts out unnecessary work in sample playback, modulation, filters,
synths and the master bus. There is still plenty to improve, but there are now
proper profiling tools to help find the expensive bits instead of guessing.

### Added

- **DUEL filter for sample instruments:** a simple low-pass followed by a
  high-pass, with separate cutoff controls.
- **FRAY panel update:** dedicated artwork, a live DAC waveform display and
  indicators for its Ghost processing.

### Changed

- **Less repeated filter work.** Cache unchanged coefficients and share matching
  stereo coefficient calculations while keeping each channel’s audio history
  separate. The lite ACID filter also uses a more efficient coefficient solve.
- **Synth processing cleanup.** Reduce repeated control conversions, oscillator
  setup and other unnecessary calculations across SPELL, PULSELINE, POLYBRAIDS,
  MACROBRAIDS and ACIDLINE. ACIDLINE now uses the lite ACID filter; the Braids
  engines run at native 48 kHz.
- **Lighter master and effects processing.** Cache gain conversions, reduce
  limiter-meter calculations, stop repeating settled smoothing updates and
  reuse Tape modulation calculations.
- **FRACTURE revision.** New and factory-reset patches use a two-pole high-pass
  filter, independent HP LFO amount and an attack/decay/release filter envelope.
  Existing patches retain their previous filter behaviour.
- **Release packaging.** Separate Windows and H700 downloads, preserved empty
  `data` directories, and a separate library archive made from the Release
  `data` folder with `Samples` excluded.

### Fixed

- **Disabled sample-instrument modulators no longer run every audio frame.**
  Modulation settings are reused until changed, and disabling a generator clears
  its state once rather than repeatedly doing the same work.

### Compatibility and known limits

Back up your projects and preserve your existing `data` folder when updating.

Some DSP changes intentionally affect the sound, particularly native-rate Braids
processing, lite-filter changes and the revised FRACTURE factory patch. Existing
FRACTURE patches retain their legacy behaviour.

This is still an alpha. Performance depends on the instruments, modulation,
effects and visuals in use; there is no guaranteed channel count or blanket
speedup. Windows checks and targeted audio comparisons have passed, but the final
H700 release still needs on-device acceptance testing. Older save-staging errors
remain a separate unresolved issue.

Thanks to everyone who tried Contour at Syntax ’26. Please keep the bug reports
and suggestions coming through [GitHub Issues](https://github.com/Aisjam/Contour-Visual-Tracker/issues).

**CONT ❤️ OUR**

— Aisjam

### Downloads

- [Contour-0.0.2-alpha-Factory-Library.zip](https://github.com/Aisjam/Contour-Visual-Tracker/releases/download/v0.0.2-alpha/Contour-0.0.2-alpha-Factory-Library.zip) — SHA-256: `e7b90691f5439bf05e323cde8ffb0b5714973057efd6278a4c2e5db82984ed1f`
- [Contour-0.0.2-alpha-H700.zip](https://github.com/Aisjam/Contour-Visual-Tracker/releases/download/v0.0.2-alpha/Contour-0.0.2-alpha-H700.zip) — SHA-256: `74c4246622fe1a230c6e8914e2385e43d7f07eec4a56b1b6cdcbb77be3069fd1`
- [Contour-0.0.2-alpha-Windows.zip](https://github.com/Aisjam/Contour-Visual-Tracker/releases/download/v0.0.2-alpha/Contour-0.0.2-alpha-Windows.zip) — SHA-256: `aebe0bd5ff393ee52a642b19c2b6dacd544501649a6a325e31b98ce0341e16aa`

[View v0.0.2-alpha on GitHub Releases](https://github.com/Aisjam/Contour-Visual-Tracker/releases/tag/v0.0.2-alpha)

---

## [v0.0.1-alpha] — 14 November 2026

**Contour 0.0.1 Alpha — Proof of Concept**  
**Status:** Experimental pre-release

This is the first public alpha build of Contour. It is a proof of concept for a portable music tracker that brings sequencing, synthesizers, sampling and generative visuals together.

### What this release is for

This build is an early look at the direction of the project, not a stable or feature-complete music workstation. I'm putting it out so people can try the ideas, report problems and suggest improvements.

### Areas of development

These are the systems the project is exploring. **Not all are complete or available in this build.**

- **Horizontal tracker workflow:** Pattern and phrase editing inspired by LSDj and M8, with more visibility at the phrase level.
- **Instruments, synthesis and sampling:** A developing collection of sound engines and instruments.
- **Visual performance:** Generative graphics and demoscene-inspired visuals connected to the music workflow.
- **Customisation:** Themes, workflow options and creative tools.
- **CONT (Creative Open Network Terminal):** The longer-term plan for exchanging songs, instruments and creative work between devices.

### Known limitations and warnings

- Expect bugs, crashes and unexpected behaviour.
- Interfaces and workflows are incomplete or experimental.
- Audio glitches and performance problems may occur.
- Features may be changed or removed during development.
- Documentation is limited.
- **Song data and file formats may change before beta and might not be backward-compatible.** Keep backups of your projects, and don't rely on this build as the only copy of important work.

Some things work, some almost work, and others are still being developed.

### Next priorities

Focus on a more stable foundation, testing the tracker workflow and improving performance on the target hardware. The design and file formats are not final.

### Feedback

If you try this build and find problems or have suggestions, please open an [issue](https://github.com/Aisjam/Contour-Visual-Tracker/issues). This is an independent project I want to keep improving with feedback from people using it.

**CONT ❤️ OUR**

### Download

- [Contour 0.0.1 Alpha release](https://github.com/Aisjam/Contour-Visual-Tracker/releases/tag/v0.0.1-alpha)
- File: `Contour_0_0_1_Alpha.zip`
- SHA-256: `271e5ae1bd6c607757deeffa5567697133caafa2729d78aa171907d3a0080290`

---

For future versions, add a new dated entry above this one and keep the [GitHub Releases](https://github.com/Aisjam/Contour-Visual-Tracker/releases) page as the source for downloads and build-specific notes.
