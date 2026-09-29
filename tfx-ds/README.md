# Tradeify FX — Design System

The design system for **Tradeify FX**, the forex prop-trading product in the Tradeify family (Futures · Crypto · **Forex**). Everything here was pulled from the Figma file, which stays the source of truth:

| Source | Figma node |
|---|---|
| File | `Tradeify Forex - Web` · key `R7nhAhk4dzg7ooooZ7iQlC` |
| Component gallery + foundations | page `❖ UI Kit / Components` (184:13944) |
| Landing page v1.1 | 2216:83304 (page `✅ Landing Page`) |
| About us (desktop + mobile) | 1491:17019 (page `✅ About us`) |
| Affiliates (desktop + mobile) | 2408:93482 (page `✅ Affiliates Page`) |
| Pricing component set | 2056:34756 (page `✅ Landing Page`, section "Pricing v3.0") |

**Priority of truth used in this build:** 1) Figma variables → 2) Figma components → 3) patterns repeated across the three screens → 4) inferred rules, used only where nothing explicit existed. Every inferred rule is marked *(inferred)* below.

---

## Files

```
colors_and_type.css        All tokens. Layer 1 mirrors Figma 1:1, Layer 2 (--tfx-*) is semantic
tokens.json                Raw Figma export: 101 colour vars × 2 modes, 15 number vars, 40 text styles, 3 grids
assets/                    logo-tradeify-fx.svg · bolt.svg · waveform-marker.svg · icons/ (Lucide subset)
ui_kits/tradeify-fx/
  components.css           Component + pattern classes (every class notes its Figma node)
  components.js            Tabs, Accordion, Dropdown, Plan selector behaviour (no deps)
  index.html               Landing page rebuilt only from kit components (desktop + mobile)
  README.md                Component API: markup, variants, props ↔ Figma properties
preview/                   Design System cards (Colors, Type, Spacing, Brand, Components, Patterns)
SKILL.md                   Rules for generating new Tradeify FX screens
```

Load order in any screen: `colors_and_type.css` → `ui_kits/tradeify-fx/components.css` → (optional) `components.js`. Put `class="tfx"` on `<body>`.

---

## Visual language

The product is **dark only in practice**: every screen sits on `Brand/Black #05090A`. Depth comes from light, not from shadows. That means cyan glows, hairline borders, teal radial washes, glass chips and ASCII/particle imagery. There is one accent colour, **Nitrogen `#00DFFF`**. It goes on the highlighted phrase of a headline, on prices, on the "fx" logo tile, on the bolt glyph, on the focus state and on active indicators. It is never used as a big fill, except on the Primary button hover face.

Recurring brand motifs:
- **Two-tone headline.** Off White text with one payoff phrase in Nitrogen ("Your Path to **Live Capital**").
- **Bolt glyph** (`assets/bolt.svg`). It is the default right icon on every CTA, and it marks bullets.
- **Mono brackets.** `[1]` step numerals, `[+]` / `[-]` accordion toggles, and corner brackets around icon tiles.
- **Mono uppercase labels.** Nav links, overlines, badges and "VIEW FUNDED RULES".
- **Waveform divider** (Figma component `Graphics`). Hairlines 4px apart with a cyan centre marker, placed between major sections.

### Colour
Figma collection **Colors** has modes **Dark** (default) and **Light**, with 101 variables in these groups: Brand (6), Border (6, Jet Stream at 10–72% alpha), Gray, Zinc, Red, Yellow, Green, Cyan (50–950), White/Black alpha (50–900), plus White/Black. In Light mode the ramps invert. No screen uses Light yet, so `[data-theme="light"]` is available but untested in real layouts.

Semantic roles *(inferred from screens; each aliases a Figma variable)*:

| Role | Token | Figma variable |
|---|---|---|
| Page | `--tfx-bg-page` | Brand/Black |
| Footer / mobile page | `--tfx-bg-page-deep` | Zinc/1000 |
| Surface (promo, review, CTA card, active plan) | `--tfx-bg-surface` | Brand/Dark teal |
| Subtle surface (step card, price body) | `--tfx-bg-surface-subtle` | White/50 |
| Headline + card text | `--tfx-text-primary` | Brand/Off White |
| Strong text (buttons, values, links) | `--tfx-text-strong` | White/White |
| Body copy | `--tfx-text-secondary` | Brand/Jet Stream |
| Overlines, row labels | `--tfx-text-muted` | Gray/400 |
| Accent | `--tfx-text-accent` | Brand/Nitrogen |
| Card border | `--tfx-border-subtle` | Border/50 |
| Divider, inactive plan | `--tfx-border-default` | Border/200 |
| Input border | `--tfx-border-strong` | Border/400 |
| Button / tabs frame | `--tfx-border-control` | White/400 |
| Up / success | `--tfx-positive` / `--tfx-success` | Green/500 / Green/400 |
| Down / error | `--tfx-negative` / `--tfx-error` | Red/500 / Red/400 |

### Typography
The type family is **Mona Sans**. Figma uses its width/optical cuts: *Mona Sans Display SemiExpanded* for H1 and buttons, *Mona Sans SemiExpanded* for H2–H5, *Mona Sans Display Expanded* for H6 and accordion titles, *Mona Sans* for body, and *Mona Sans Mono* for links and labels. In CSS these map to one variable font with `font-stretch` 112.5% (SemiExpanded) or 125% (Expanded). The stylesheet loads Mona Sans and JetBrains Mono from Google Fonts. Mona Sans Mono falls back to JetBrains Mono, which the file already uses for `[1]` numerals and `/` separators.

| Style group | Sizes | Notes |
|---|---|---|
| Heading/Desktop H1–H6 | 56 / 48 / 40 / 32 / 24 / 20 | SemiBold, tracking −1% (H6 0%), H6 line-height 180% |
| Heading/Mobile H1–H6 | 32 / 30 / 28 / 24 / 20 / 16 | use below 768px (`.t-h1` … swap automatically) |
| Body XL / L / M / S / XS | 20 / 18 / 16 / 14 / 12 | Regular · Medium · SemiBold · Bold. L/Regular = section lead, M/Regular = card body, S = UI |
| Interactive | Button L 18 · Button M 16 · Link M 14 (mono, uppercase) · Link S 11 | |
| Labels (mono) | Meta 12 · Overline 12 · Input 14 · Caption 12 | uppercase for Meta/Overline |

### Spacing, radius, layout
- **Spacing** (Figma `Numbers/Spacing`): 0, 4, 8, 16, 20, 24, 32, 40, 48. Components also use library values 6, 12, 14 and 28, and screens use 60, 64, 92 and 120 for section rhythm.
- **Radius** (Figma `Numbers/Border Radius`): 0, 4, 8, 12, 16, full. Cards and large frames use 16, faces, tabs and reviews use 12, the M button face uses 8, tags use 4, and pills use full.
- **Desktop** *(repeated in all 3 screens)*: 1920 frame, 262 side padding, **1396 content**, sections padded **92 top/bottom**, header-to-content gap **48–64**, header block gap **20**. Grids are 3 × 452 with gap 20 (cards) and 4 × 337 with gap 16 (price cards). The FAQ column is 874.
- **Mobile**: 402 frame, 16 gutter, 4-column grid, section padding 32–64, one column with gap 24–32. Mobile variants exist for Input, Global Nav, Nav bar, Accordion, Footer and the CTA cards.
- **Fluid rule** *(inferred)*: side padding is `max(120px, (100% − 1396px)/2)`. That gives 262 at 1920 and matches the "Descktop - 1440" grid (margin 120) at 1440. It drops to 40px below 1200 and 16px below 768.

### Effects
Primary glow = blurred Nitrogen ellipse behind the button (`--tfx-glow-primary`). CTA cards use an inner blue glow (`#2A7AFF @20%`) plus a gradient hairline. Badges and chips use Figma's GLASS effect, approximated here with `backdrop-filter: blur(3px)`. The mobile Nav bar uses a background blur of 19px. There are no drop-shadow elevation tokens, so don't add any.

---

## Components (Figma component sets → kit classes)

| Figma set (node) | Variants / properties | Kit class |
|---|---|---|
| Button (331:895) | Hierarchy Primary·Secondary·Outline × Size L·M·S × State Default·Hover·Disabled; Left/Right Icon booleans; L_icon/R_icon slots (default Bolt) | `.tfx-btn[data-hierarchy][data-size]` + `.tfx-btn__face` |
| Tabs (910:12275) / Tab (910:12191) | Select Yes·No; icon slots | `.tfx-tabs` / `.tfx-tab[aria-selected]` |
| Input (513:1756) | Breakpoint × State Default·Typing·Filled·Success·Error × Size L·M; Label, Left/Right Icon | `.tfx-field[data-state][data-size]` > `.tfx-input` |
| Divider (513:1921) | Horizontal·Vertical | `.tfx-divider(--v)` |
| Data row (513:1992) | Status Up·Down | `.tfx-datarow[data-status]`, `.tfx-ticker` |
| Badge (513:1988) | — | `.tfx-badge` |
| Switch (1000:20598) | Active Yes·No; Text boolean | `.tfx-switch` |
| Pagination (1730:24463) | — | `.tfx-pagination` |
| Dropdown (1754:10357) | Open Yes·No | `.tfx-dropdown[data-open]` |
| Accordion (513:1967) | Open × Breakpoint | `.tfx-acc[data-open]` |
| Discord (525:2621) / Suport (2189:69368) | Breakpoint | `.tfx-cta-card(--center)` |
| Global Nav (518:4101) | Desktop·Mobile | `.tfx-globalnav` |
| Nav bar (513:4008) | Breakpoint × Open; Nav Links slot | `.tfx-navbar` |
| Footer (529:2695) | Desktop·Mobile | `.tfx-footer` |
| Graphics (525:736) | — | `.tfx-waveform` |
| Pricing (2056:34756) | Account Lightning·Growth·Select × View Evaluation·Funded | `.tfx-plan` + `.tfx-price` (pattern) |

Patterns taken from screens: section header, step card, glass mini-card, price card, plan selector, review card, stat strip, icon tile, feature item, bolt list, promo card, hero, final CTA. See `ui_kits/tradeify-fx/README.md` for markup.

---

## Content fundamentals
- The voice is direct, trader-to-trader and concrete: "Choose Your Path. Progress to Live Capital." Avoid hype.
- Title Case for headlines and CTAs ("Explore Plans", "Start with 50k"). Overlines, badges and nav links are uppercase mono.
- Numbers carry the argument: "$100,000", "80% Profit Split", "Up to 1:100 FX", "24-hour payout guarantee".
- Recurring vocabulary: *plan, evaluation, sim funded, live capital, payout, profit split, Daily / Classic / Direct, 1-Step / 2-Step, funded rules*.
- Money is shown as `$1,000`, account sizes as `10K / 25K / 50K / 100K`, and market pairs as `EUR/USD • $ 1.02 +0.02%`.
- Compliance footnotes go in small grey text under comparison or pricing blocks.

---

## Normalisation log (what changed vs Figma, and why)

| # | Finding in Figma | What this system does |
|---|---|---|
| 1 | Components bind many **library variables** that aren't in the local collections: `rounded-2xl/xl`, `p-3,5`, `p-5`, `p-6`, `p-7`, `Spacing/4` ("Old Variables"), `WhiteAlpha/*`, `Surface/Futures/Primary`, `Foreground/default`, `Text/Secondary`, `Stone Blue` (from the Tradeify Futures / 24-7 libraries). | Mapped each one to the equal local token (`rounded-2xl`→`--radius-16`, `WhiteAlpha/400`→`--color-white-400`, `Surface/Futures/Primary`→`--color-zinc-1000`). Values with no local equivalent (6, 12, 14, 28 spacing) are added as `--space-*` and marked as library-origin. |
| 2 | **Unbound hex values**: Primary / Tab face `#F1FBFF`, input fill `#0E191D @60%`, placeholder `#BBCAC7 @70%`, bolt `#00B1D0`, badge fill `#7E7E7E @20%`, review role `#64748B`. | Kept the exact values as component tokens (`--tfx-primary-face` etc.). Where the value is an alpha of a Figma colour, it is expressed with `color-mix()` on that variable. No new primitives. |
| 3 | Headings on screens mix the text style (`Heading/Desktop/H1`, Display SemiExpanded) with **ad-hoc "Mona Sans SemiBold 56"** (hero, "Why Tradeify FX", Final CTA). | Section headings use the text style (`.t-h1`). The hero H1 keeps the plain Mona Sans 56/100% seen in the hero frame. |
| 4 | Button **Size S** is an 80% scale of M (radius 9.6/6.4, stroke 0.8, padding 6.4/9.6/12.8) and binds no variables. | Kept as-is, as component constants. |
| 5 | **Disabled Primary/Secondary** label is `Brand/Black` on a ~10% white face, which is illegible on the dark page. | Disabled label uses `Zinc/600`, the same as Outline/Disabled, and the bolt drops to 50% opacity. |
| 6 | Input radius is **10px**, which isn't in the radius scale. | Kept 10px on the input only. |
| 7 | Foundations doc frames say Labels/Input and Labels/Caption have **5% tracking**, but the text styles say 0%. The Brand swatches all print `#05090A`. | Followed the text styles and variables, not the doc labels. |
| 8 | Pricing uses a second Divider component (`Divider/Direction=Horizontal`) from a library. | Uses the local `.tfx-divider` (Border/200). |
| 9 | Figma `GLASS` and background-blur effects have no CSS equivalent. | Approximated with `backdrop-filter`. |
| 10 | Component set name typo `Suport`, variant `Succes`, instance `Code Imput`, grid `Descktop - 1440`. | Documented under the correct names; the Figma names are kept in the tables above for lookup. |
| 11 | No Light-mode screen exists. | Light values are exported but not tuned; treat Light as unsupported until a screen defines it. |

## Known gaps
- **Fonts.** Mona Sans Mono and the Display optical cut aren't on Google Fonts. For exact rendering, add the `.woff2` files to `fonts/` and a matching `@font-face`.
- **Imagery** (ASCII art backgrounds, 3D Discord/support art, trader photography, videos) wasn't exported. Screens should use the gradient washes defined here or real assets supplied by the brand team.
