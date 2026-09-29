---
name: tradeify-fx-design
description: Build new Tradeify FX (forex prop firm) web screens that match the existing Figma product. Use for any Tradeify FX page, section, component, mockup or marketing surface.
---

# Designing Tradeify FX screens

Read `README.md` first. Then build from what already exists, and stay inside the system.

## Setup
```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="stylesheet" href="ui_kits/tradeify-fx/components.css">
<body class="tfx"> … <script src="ui_kits/tradeify-fx/components.js"></script>
```
Look at `ui_kits/tradeify-fx/index.html` for a complete page, and at `ui_kits/tradeify-fx/README.md` for component markup.

## Hard rules
1. **Tokens only.** Colours come from `--tfx-*` semantic tokens, or from `--color-*` when no semantic token exists. Spacing uses `--space-*` and radius uses `--radius-*`. Never add a new hex value, spacing value or radius.
2. **Reuse components.** Use a kit class whenever one exists (button, tabs, input, badge, accordion, cards, navs, footer). Change content, not styling. Don't create new button styles, card styles or shadows.
3. **Dark page.** The background is `--tfx-bg-page`. Surfaces are `--tfx-bg-surface` (Dark teal) or `--tfx-bg-surface-subtle` (White/50) with a `--tfx-border-subtle` hairline. Depth comes from glow and hairlines, never from drop shadows.
4. **One accent.** Nitrogen (`--tfx-accent`) is limited to the payoff phrase of a headline, prices, focus and active indicators, the bolt, and `[n]` numerals. Use at most one accent phrase per headline.
5. **CTAs.** Each view gets one Primary button (light face and cyan glow, bolt on the right). Its companion is Secondary, with no bolt or with the bolt. Use Outline only in dense UI. Sizes: L on hero, sections and navs, M in cards and forms, S on the mobile nav.
6. **Typography.** Section titles use `.t-h1` with the two-tone treatment, leads use L/Regular in Jet Stream (max about 548px), card titles use 20px SemiBold, and card body uses M/Regular. Labels, overlines, nav links and badges are uppercase mono.

## Section recipe (desktop 1920 / mobile 402)
`<section class="tfx-section">` gives 92px vertical padding, a 1396 content column and a 48px gap (mobile: 32 padding, 16 gutter, 32 gap). Inside it:
1. `.tfx-section-head` with `.tfx-badge` (1–3 words) → `h2.t-h1` with a `.tfx-accent` span → `p` lead.
2. Content: `.tfx-grid-3` (cards, gap 20), `.tfx-grid-4` (pricing, gap 16), `.tfx-narrow` (FAQ, 874) or `.tfx-stats`.
3. Optional closing row: a CTA pair, trust chips or a grey footnote.

Put a `.tfx-waveform` between major sections. Page order follows the reference screens: Global Nav → Hero (Nav bar inside, then badge, H1, bolt list, CTA, promo card, ticker) → content sections → FAQ (accordion + support CTA card) → Final CTA → Footer.

## Responsive
Below 768px, switch to the mobile variants. Headings shrink automatically, cards stack to one column, the Nav bar collapses to logo, login icon, Primary S and menu icon, and hero copy centres. The fluid side padding is already built into `.tfx-section`.

## Copy
Direct and concrete, in trader language, with numbers doing the persuading ("$100,000 Account Size", "Up to 95% profit split"). Use Title Case for headlines and CTAs. CTA verbs: Explore Plans, Start with 50k, Become a Partner, Join Discord. Add a small compliance footnote whenever payouts or funding are promised.

## Before finishing
Check: no raw hex, only kit components, one Primary per view, headline accent used at most once, mobile at 402 wide, focus states visible.
