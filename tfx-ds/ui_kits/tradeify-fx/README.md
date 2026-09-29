# Tradeify FX UI kit — component API

Every class maps to a Figma component set (node ids in brackets) or to a pattern repeated across the Landing, About and Affiliates screens. Variants are set with `data-*` attributes named after the Figma properties.

## Button (331:895)
```html
<a class="tfx-btn" data-hierarchy="primary|secondary|outline" data-size="l|m|s">
  <span class="tfx-btn__face">Explore Plans<i class="tfx-bolt"></i></span>
</a>
```
- State: `:hover` / `.is-hover` → Hover; `disabled` / `aria-disabled="true"` → Disabled.
- Left Icon / Right Icon: put `.tfx-bolt` or a Lucide `svg.tfx-icon` before or after the label. The Figma default is the right bolt.
- `.tfx-btn--block` makes it full width (used in price cards).
- Heights: L 60, M 48, S 39. The frame has 4px padding and a White/400 hairline, and the face sits inside it.

## Tabs (910:12275 / 910:12191)
```html
<div class="tfx-tabs" role="tablist"><button class="tfx-tab" role="tab" aria-selected="true">Daily<i class="tfx-bolt"></i></button>…</div>
```

## Input (513:1756)
```html
<div class="tfx-field" data-state="default|typing|filled|success|error" data-size="l|m">
  <label class="tfx-field__label">Email</label>          <!-- Label = true (optional) -->
  <div class="tfx-input"><input placeholder="Email"></div>
  <span class="tfx-field__help">Success text</span>      <!-- success / error only -->
</div>
```
Typing = focus (the Nitrogen border is applied automatically by `:focus-within`). Width is 291px by default; use `.tfx-field--fluid` for full width.

## Badge · Tag · Chip · New pill (513:1988 + patterns)
`span.tfx-badge` is the section eyebrow (uppercase mono, glass pill). `span.tfx-tag(--accent)` is the plan-card label. `span.tfx-chip` is a trust chip with a `badge-check` icon. `span.tfx-pill-new` is the "New" pill in Global Nav.

## Divider (513:1921) · Data row (513:1992)
`hr.tfx-divider` / `hr.tfx-divider--v`.
`span.tfx-datarow[data-status="down"] > .tfx-datarow__pair · __sep · __price · __chg`, placed inside `.tfx-ticker`.

## Switch (1000:20598)
```html
<label class="tfx-switch"><input type="checkbox"><span class="tfx-switch__track"></span><span class="tfx-switch__text">Show Funded Rules</span></label>
```

## Pagination (1730:24463) · Dropdown (1754:10357)
See `preview/component-pagination.html` and `preview/component-dropdown.html`. The current page uses `aria-current="page"`. The dropdown toggles with `data-open`, and options use `role="option"` with `aria-selected`.

## Accordion (513:1967)
```html
<div class="tfx-accordion">
  <div class="tfx-acc" data-open="false">
    <button class="tfx-acc__head" aria-expanded="false"><span class="tfx-acc__title">What is Tradeify FX?</span><span class="tfx-acc__glyph">[+]</span></button>
    <p class="tfx-acc__body">…</p>
  </div>
</div>
```

## CTA card — Discord (525:2621) / Support (2189:69368)
`.tfx-cta-card` has the body on the left and art on the right. `.tfx-cta-card--center` is the centred Support layout. Inside: `.tfx-cta-card__body` > `h3` (with a `.tfx-accent` span) + `p` + button(s) in `.tfx-cta-card__actions`.

## Navigation
- Global Nav (518:4101): `.tfx-globalnav` > `.tfx-globalnav__products` (the active link uses `aria-current`) + `.tfx-globalnav__promo` (with `.sep` slashes and `.tfx-code-chip`).
- Nav bar (513:4008): `.tfx-navbar` > `.tfx-navbar__logo` + `.tfx-navbar__links` (Nav Links slot) + `.tfx-navbar__actions` (Login, `.tfx-navbar__icon-btn` log-in and menu for mobile, Primary L). On mobile the button switches to size S automatically.
- Footer (529:2695): `.tfx-footer` > `__news`, `__cols` > `__col`, `__legal`.

## Patterns
| Pattern | Class | Where in Figma |
|---|---|---|
| Section | `.tfx-section` (+ `--deep`, `--gap-64`) | every section frame (92 / 262 / 1396) |
| Section header | `.tfx-section-head` | Badge + H1 + lead blocks |
| Step card | `.tfx-step` > `.tfx-step__visual`, `.tfx-step__title` > `.tfx-step__num` | How it Works |
| Glass mini-card | `.tfx-glass` | "$100,000 Account Size", "Payout Received" |
| Plan selector | `button.tfx-plan[aria-pressed]` > `__title` + `.tfx-tag` + `__sub` | Pricing |
| Price card | `.tfx-price(--popular)` > `__head`, `__body` > `dl.__rows` > `.__row`, `__foot` | Pricing |
| Review card | `.tfx-review` | Tradeify Community |
| Stat strip | `.tfx-stats` > `.tfx-stat` > `.tfx-icon-tile` + value/label | Community, Affiliates hero |
| Feature item | `.tfx-feature` | About · Why Tradeify |
| Bolt list | `ul.tfx-bolt-list` | Hero bullets, comparison card |
| Promo card | `.tfx-promo` + `.tfx-dots` | Landing hero carousel |
| Hero | `.tfx-hero` > `.tfx-hero__inner` > navbar + `.tfx-hero__copy` | all heroes |
| Waveform | `.tfx-waveform` | Graphics component between sections |
