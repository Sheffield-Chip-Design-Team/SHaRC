# SHaRC Brand Guidelines

**Sheffield Hardware and Reconfigurable Computing (SHaRC)** — a student-led chip design group at the University of Sheffield.

These guidelines keep SHaRC's identity consistent across the website, slides, posters, social media and silicon. They are designed to sit comfortably alongside the [University of Sheffield brand](https://www.sheffield.ac.uk/brand-toolkit) without imitating it.

---

## 1. The mark

The SHaRC mark is a **shark fin breaking a waterline that resolves into PCB traces and vias** — the moment where Sheffield's hardware community surfaces in the silicon world. It also reads as a dhow sail: forward motion, exploration.

| Asset | Use |
|---|---|
| `assets/brand/sharc-mark.svg` | Master (inherits `currentColor` — use inline in web/UI) |
| `assets/brand/sharc-mark-black.svg` | Print, light backgrounds |
| `assets/brand/sharc-mark-white.svg` | Dark backgrounds |
| `assets/brand/sharc-mark-blue.svg` | Primary brand colourway |
| `assets/brand/sharc-mark-lightblue.svg` | On dark / digital surfaces |
| `assets/brand/sharc-mark-orange.svg` | Accent / event materials |
| `assets/brand/sharc-mark-violet.svg` | University co-branded contexts only |
| `assets/img/logos/*.png` | Original high-resolution raster exports |

**Rules**

- Clear space: keep a margin of at least 25% of the mark's width on all sides.
- Minimum size: 24 px tall on screen; 8 mm in print. Below that, the via circles fill in.
- Use **one colourway at a time**. Never apply gradients, outlines, shadows or rotation to the mark.
- Don't redraw, stretch, or place the mark on low-contrast or busy backgrounds.
- The fin always points **right** (forward). Never mirror it.

## 2. Colour

SHaRC's palette comes from the logo itself, anchored by a deep "silicon" navy. The violet is reserved as a bridge to University of Sheffield materials.

### Core palette

| Name | Hex | Role |
|---|---|---|
| **SHaRC Blue** | `#4B71B8` | Primary. Headings, links, primary buttons on light surfaces |
| **Reef Light Blue** | `#6CCCD8` | Secondary. Accents on dark surfaces, traces, data viz |
| **Signal Orange** | `#FEA23A` | Accent. CTAs, highlights, event branding. Use sparingly (~10%) |
| **Abyss Navy** | `#0B0F1A` | Dark surface colour (website background) |
| **Silicon Slate** | `#101828` | Raised dark surface / cards |
| **Wave White** | `#F4F7FB` | Light surface / body text on dark |

### University bridge colours

Use only when co-branding with the University of Sheffield (e.g. joint events, posters with the University logo). Sampled from the live University palette:

| Name | Hex |
|---|---|
| UoS Brand Violet | `#440099` |
| UoS Electric Violet | `#7100FF` |
| UoS Dark Violet | `#251D5A` |
| UoS Powder Blue | `#9ADBE8` |

UoS Powder Blue sits naturally next to Reef Light Blue, which is the preferred pairing in co-branded materials. Never recolour the University's own logo, and follow the [University brand toolkit](https://www.sheffield.ac.uk/brand-toolkit) for their assets.

### Accessibility

- Body text on Abyss Navy: use Wave White (`#F4F7FB`) — contrast 16:1.
- Reef Light Blue and Signal Orange on Abyss Navy both pass WCAG AA for large text and UI elements; don't use them for long body copy on light backgrounds.
- SHaRC Blue on white passes AA for normal text.

## 3. Typography

To echo University of Sheffield typography (Source Sans / Source Serif) with open licensing:

| Use | Typeface | Weights |
|---|---|---|
| Headings & display | **Source Sans 3** | 700, 900 |
| Body | **Source Sans 3** | 400, 600 |
| Code, part numbers, technical labels | **JetBrains Mono** | 400, 700 |

Both are free via Google Fonts. Headings are set tight (line-height ≈ 1.05, letter-spacing −0.02 em). Technical motifs (signal names, register maps, `tt_um_` module names) are always set in the mono face.

## 4. Graphic language

- **Circuit traces**: 90°/45° trace runs ending in via circles, taken from the mark's waterline. Used as section dividers and connective lines.
- **Decomposition**: hardware shown as exploded layers — package → die → RTL → gates → transistors. Motion should feel like an assembly/disassembly, not decoration.
- **Grid**: layouts align to an 8 px grid, mirroring standard-cell rows.
- **Photography/renders**: dies, dev boards, FPGAs, lab sessions. Dark, high contrast, teal/orange grading.

## 5. Voice

- **Confident, concrete, generous.** We say "we taped out three chips", not "we are passionate about innovation".
- Plain English first, precise jargon second — explain acronyms once (ASIC, RTL, FPGA).
- Always student-led: "members design, verify and tape out".

## 6. Naming

- Group: **SHaRC** (capital S, H, R, C — lowercase "a"). Full form: *Sheffield Hardware and Reconfigurable Computing*.
- Project teams keep their own names (ANCHOR, RetroSoC, Ripple, LogiSynth) set in heading weight, optionally with their team colour.
