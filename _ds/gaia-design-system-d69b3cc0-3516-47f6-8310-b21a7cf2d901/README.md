# Gaia Design System

Gaia is Visma's multi-brand design system, shared across a large portfolio of Nordic business-software products (accounting, payroll, HR, invoicing, tax, public-sector tools). It exists to make products feel like one coherent family while each team ships at their own pace.

Gaia is opinionated about **density, clarity, and trust** — the software runs a business's books, payroll, and compliance, so typography is legible at small sizes, colors carry clear semantic meaning (information / success / warning / error), and surfaces stay calm rather than decorative.

This project is a **framework-agnostic** port of Gaia: design **tokens** (CSS custom properties), **fonts**, and **components** expressed as plain CSS classes. There is no build step and no framework dependency. The component *contract* mirrors the official `@vsn-ux/ngx-gaia` Angular library 1:1 — same variants, sizes, states, and BEM class names — but everything here is markup + classes, so you can apply it from Angular, React, Vue, Svelte, web components, a templating language, or hand-written HTML. Where the Angular library exposes an input like `gaButton="primary"`, the equivalent here is a modifier class like `.ga-button--primary`.

---

## Files

| File | What's in it |
|---|---|
| `styles.css` | Single entry point — imports fonts → tokens → components in order. |
| `tokens.css` | All design tokens as CSS custom properties — color scales, semantic colors, type scale, spacing, sizing, radii, shadows, z-index, motion. Verified against the Figma UI kit's variable collections AND the gaia-styles DTCG source. |
| `fonts.css` | `@font-face` declarations for Inter (variable + statics). |
| `components.css` | Barrel of `@import`s — one file per component under `components/`, mirroring the upstream gaia-styles repo. Every rule reads tokens; change an atom and every component follows. |
| `icons.js` | A curated set of Gaia-spec Lucide line icons (24×24, 1.5 stroke). `<span class="ga-icon" data-icon="name">` auto-hydrates to inline SVG. |
| `fonts/` | Inter `woff2` files. |
| `preview/` | Visual review cards for colors, type, spacing, icons, and components (see `preview/molecules/ngx-gaia-parity.html` for the full component gallery). |

## Quick start

Link the stylesheets (order: fonts → tokens → components — or just `styles.css`, which imports all three) and the icon hydrator. Adjust relative paths if your file lives in a subfolder.

```html
<link rel="stylesheet" href="styles.css">
<script src="icons.js" defer></script>

<button class="ga-button ga-button--primary">
  <span class="ga-icon" data-icon="plus"></span> New invoice
</button>
```

## Framework-agnostic usage

Components are **structure (markup) + classes**. The same DOM works everywhere:

- **Vanilla / templating** — write the markup as shown in each component below.
- **React / JSX** — use `className`, and drive modifier classes from props (`` `ga-button ga-button--${variant}` ``).
- **Angular / Vue / Svelte** — bind the modifier classes conditionally (`[class.ga-button--loading]`, `:class`, `class:`).
- **State is expressed two ways** so it works with or without a real `<input>`:
  - native semantics — e.g. `<input type="checkbox" checked>` inside `.ga-checkbox` flips the marker automatically;
  - **host-class hooks** — e.g. `.ga-switch--checked` / `.ga-switch--disabled` / `.ga-switch--invalid` render the same state from a class alone, for components rendered without a native control.
- **Error/validation state** is the modifier `--invalid` across all form controls (legacy `--error` is kept as an alias on some controls). Pair it with `aria-invalid="true"`.

The only JS in the kit is `icons.js`, and it is optional — it just expands `<span class="ga-icon" data-icon="…">` placeholders into inline SVG. You can inline your own SVGs instead.

---

## CONTENT FUNDAMENTALS

**Voice.** Calm, competent, never cute. Gaia products help people handle money, taxes, and employees — tone should feel like a reliable accountant, not a mascot. Avoid exclamation points, emoji, and marketing superlatives. Say "Invoice sent" not "🎉 Invoice sent!".

**Clarity over cleverness.** Prefer concrete nouns and action verbs. "Approve 3 invoices" beats "Get started". "Due Friday" beats "Due soon". If a word like *synchronize* can be *sync* without losing meaning, shorten it.

**Numbers, dates, currency.** Use the user's locale formatting. Norwegian kroner as `kr 12 450,50` (space thousands, comma decimals). Dates default to the ISO-ish `DD.MM.YYYY` or written `15 March 2025`. Never mix styles within one screen.

**Empty states.** Name what's missing ("No invoices this month") then offer the most likely next action as a primary button. One sentence of context is enough.

**Error messages.** Tell the user *what* went wrong and *what they can do next*. "Enter a valid email address" not "Invalid input". Never blame the user.

**Capitalization.** Sentence case for everything — buttons, labels, headings, menu items. Proper nouns and product names keep their casing.

**Button labels — verb + noun.** "Create report", "Save changes", "Delete account". Never "Submit" or "OK". Keep to 1–3 words. No trailing period, no exclamation marks.

**Verb vocabulary — use the same word for the same action system-wide.**

| Use | When | Don't use |
|---|---|---|
| **Create** | Making a new thing that didn't exist (user, invoice, report) | *Add* |
| **Add** | Moving an existing thing into a list (add user to group) | *Create* |
| **Delete** | Destructive — the thing is gone | *Remove* |
| **Remove** | Non-destructive — taken out of a list, still exists elsewhere | *Delete* |
| **Edit** | Standard verb for altering content | *Modify* (too technical) |
| **Change** | Swapping one state for another (change password) | — |
| **Save** | Writes to database | — |
| **Apply** | Applies filters / view settings immediately | — |
| **Export** | System data → file format | *Download* |
| **Download** | Retrieving a previously uploaded file | *Export* |
| **Log in / Log out** | Two words as verb, "login" one word as noun | *Sign in* |

**Blacklist.** Never `click here`, `please`, `oops`, `whoops`, `invalid`, `disable`, `enable` (ambiguous for toggles — use `turn on`/`turn off`), `abort`, `forbidden`, `success` as a label (state the result: "Saved", "Sent"). Never address the system as "we".

**Dialog titles match the trigger.** A "Delete user" button opens a modal titled "Delete user?" with body text explaining the consequence and buttons "Delete" / "Cancel" (never Yes/No, never OK/Cancel).

---

## VISUAL FOUNDATIONS

### Color

- **Primary** is **deep teal** (`--ga-color-primary` → `--ga-color-cyan-80` → `#1f4e66`). It carries brand and primary-action weight. `.ga-button--primary` uses deep teal on warm off-white text. Use it sparingly, one primary action per view.
- **Secondary** is a warm **orange** family (`--ga-color-secondary` / `--ga-color-orange-10…60`). It's the accent — used for the spinner arc, secondary hovers, and highlights. Not a generic "grey".
- **Neutral** is a cool grey scale for page surface, dividers, and disabled chrome. The whole app sits on `--ga-color-surface-page` (a near-white neutral) with `--ga-color-surface-primary` (pure white) for elevated cards and panels.
- **Status** semantics — information (blue), success (green), warning (orange-60), error (red). Each has a surface, border, icon, and text variant. Never use green/red to encode anything other than success/error.
- **Utility** colors (indigo, teal, lime, purple, pink, rose, blue, green, orange, grey) are for data-vis, tags, and categorical labels — not UI chrome.

### Typography

Inter across the board. Seven steps keyed to the **Gaia semantic names** (use the `.ga-text-*` helper classes):

| Class | Gaia name | Desktop size | Line height | Typical use |
|---|---|---|---|---|
| `.ga-text-helper` | **Helper** | 11px | 16px | Legal, timestamps, form validation. Never primary copy. |
| `.ga-text-caption` | **Caption** | 12px | 16px | Tags, tooltips, chart labels. |
| `.ga-text-body` | **Body** | 14px | 24px | The default — paragraphs, inputs, labels, buttons. |
| `.ga-text-heading` | **Heading** | 16px | 24px | Card headers, sub-sections. |
| `.ga-text-title` | **Title** | 20px (18px mobile) | 32px (24px) | Page titles, modal titles. |
| `.ga-text-headline` | **Headline** | 24px | 40px (32px) | Major section breaks. |
| `.ga-text-display` | **Display** | 36px (32px mobile) | 48px (40px) | Hero / marketing only. |

Weights: 400 / 500 / 600 / 700. Every line-height lands on a multiple of 4px so text and components share the grid. Letter-spacing is **absolute** (rem-based, e.g. `--ga-text-md-letter-spacing` = −0.096px), matching the Figma values — the older `--ga-text-*-tracking` names remain as aliases. Title/Headline/Display step up to their desktop sizes at the S breakpoint (48rem = 768px); everything below stays constant. A single `--ga-base-scaling-factor` (default 1) multiplies the type, spacing and size ramps for legacy 10px-root hosts (set 1.6).

### Spacing & layout

Strict 4px baseline. Two parallel token families:

- **`--ga-size-*`** (raw): `--ga-size-0` → `--ga-size-416`. Use for dimensions — widths, heights, icon sizes.
- **`--ga-size-spacing-0X`** (semantic): 14 curated steps for the gap *between* things — `spacing-03` (8px) atomic gap, `spacing-04` (12px) input padding, `spacing-05` (16px) default component gap/card inset, `spacing-06` (24px) related groups, `spacing-07/08` (32/40px) sections, `spacing-09/10` (48/64px) page regions.

**Layout** is a 16-column fluid grid with a fixed 16px gutter; columns halve at each breakpoint (16 desktop → 8 tablet → 4 mobile). Margins step up with viewport: 16 → 24 → 24 → 40px.

### Radii

Three values — never invent intermediates. `--ga-radius` (alias `--ga-radius-default`) = **4px** (inputs, buttons, cards, modals); `--ga-radius-round` = **999px** (pills, tags, badges, avatars, switch knobs); `--ga-radius-sharp` = **0.28px** (table cells, dividers, flush edges). **Nesting rule:** a child surface's radius must be ≤ its parent's.

### Elevation & layering

Four directional shadows named for the direction they cast: `--ga-shadow-north` (dropdowns, menus, modals), `--ga-shadow-south` (bottom sheets), `--ga-shadow-east` (right drawers), `--ga-shadow-west` (left nav). All are 5-layer stacks tinted with deep teal (derived from `--ga-color-cyan-90`, so retinting the brand retints elevation). **Shadows are scarce** — at rest most surfaces use a 1px border. Seven z-index tokens: `index-default` (1) → `index-toast` (600).

**Focus** is an outline, not a halo: `outline: var(--ga-focus-outline); outline-offset: var(--ga-focus-outline-offset);` — a 2px `border-focus` ring offset 2px. Form states recolour the same outline (error/warning/success border tokens).

### Motion

Everything under 400ms. Six durations (`instant` 50ms → `slower` 400ms) × three easings (`standard`, `entrance`, `exit`) plus `linear` for loaders. Use the composite transition tokens as the API: `--ga-transition-hover`, `--ga-transition-state`, `--ga-transition-reveal`, `--ga-transition-overlay-in`. The composite tokens bake in `--ga-duration-scalar`, which collapses to 0 under `prefers-reduced-motion` — so every transition built on them goes instant automatically.

### Density & interactive heights

Desktop-first. Standard interactive height is **40px** (`--ga-size-40`) — buttons, inputs, selects. Touch-first surfaces step up to **44px** (WCAG AA) or **48px** (AAA).

---

## ICONOGRAPHY

Gaia uses **Lucide** as its sole icon library: 24×24 SVG, **1.5px stroke**, rounded caps/joins, no fills. Icons inherit `currentColor` via the `.ga-icon` wrapper, so they tint with surrounding text or button.

```html
<span class="ga-icon" data-icon="search"></span>
<span class="ga-icon" data-icon="invoice" data-size="20"></span>
```

`icons.js` hydrates these on load (see `preview/atoms/iconography.html` for the inventory). **Sizes:** 16×16 inline/in-buttons (default), 20×20 navigation/empty-state, 24×24 page-header actions. Above 32×32, use a pictogram or illustration, not an enlarged icon. **Don't** mix styles (solid with line), invent filled variants, or add gradients. Icons are never decorative — if removing the icon leaves the user no less informed, it shouldn't be there.

---

## COMPONENT REFERENCE

Conventions: a component's root class is `.ga-<name>`; **modifiers** are `.ga-<name>--<variant>`; **parts** are `.ga-<name>__<part>`. Defaults below match the Angular library's defaults. Apply `--invalid` + `aria-invalid="true"` for error states.

### Actions

#### Button — `.ga-button`
Variants (modifier): `--primary` · `--secondary` (**default**) · `--ghost` · `--transparent`. A `.ga-button` with no variant renders as secondary. Add `--icon-only` for a 40×40 square. States: native `:hover` / `:active` / `:disabled`; loading via `--loading` (swap content for a spinner + `.ga-button__loading-label`). Icon-only buttons keep a visually-hidden `.ga-button__icon-label`. Height 40px, sentence-case label, one primary per view.

```html
<button class="ga-button ga-button--primary"><span class="ga-icon" data-icon="plus"></span> Create invoice</button>
<button class="ga-button ga-button--secondary">Save draft</button>
<button class="ga-button ga-button--primary ga-button--loading" disabled aria-busy="true">
  <span class="ga-spinner"></span><span class="ga-button__loading-label">Saving…</span>
</button>
<button class="ga-button ga-button--secondary ga-button--icon-only" aria-label="More">
  <span class="ga-icon" data-icon="more"></span><span class="ga-button__icon-label">More</span>
</button>
```

#### Link — `.ga-link`
Variants: default · `--inline` (for links inside running text). Sizes: `--small` · (medium, default) · `--large`. State: `--disabled`. Leading/trailing icon via `.ga-link__icon` (16px at small/medium, 24px at large).

```html
<a class="ga-link" href="#">Open report <span class="ga-link__icon ga-icon" data-icon="external"></span></a>
<a class="ga-link ga-link--inline" href="#">inline link</a>
```

#### Segmented control — `.ga-segmented-control`
A grouped single-select toolbar. Add `--icon` on the container for the compact icon layout. Buttons: `.ga-segmented-control__button` (+ `--selected`). Icon buttons add `--icon-only` and a visually-hidden `.ga-segmented-control__button-sr-label`. Set `aria-pressed` on the selected button.

```html
<div class="ga-segmented-control" role="group">
  <button class="ga-segmented-control__button ga-segmented-control__button--selected">Day</button>
  <button class="ga-segmented-control__button">Week</button>
</div>
```

#### Chip / quick-filter-button — `.ga-quick-filter-button`
Pill-shaped selectable filter (40px). Modifiers: `--selected` · `--disabled` · `--transparent`. Optional trailing count `.ga-quick-filter__count`. Group chips in a `.ga-chip-listbox` (add `--vertical` for a column). `.ga-quick-filter` is a kept alias.

```html
<div class="ga-chip-listbox">
  <button class="ga-quick-filter-button ga-quick-filter-button--selected">Paid <span class="ga-quick-filter__count">138</span></button>
  <button class="ga-quick-filter-button">Draft</button>
</div>
```

### Forms & text entry

#### Input — `.ga-input`
A field wrapper around a native `<input>`; supports prefix/suffix content (icon, clear button, loading spinner). States: `--invalid` · `--success` · `--disabled`. Focus ring is automatic.

```html
<div class="ga-input"><span class="ga-icon" data-icon="search"></span><input type="text" placeholder="Search"></div>
<div class="ga-input ga-input--invalid"><input type="email" value="bad@"></div>
```

#### Form field — `.ga-form-field`
Wraps a label + control + helper/error into an accessible block. Parts: `.ga-form-field__label` (with `__label-text` and optional `__label-state` like "(optional)"), `.ga-form-field__info` (+ `--error` for validation messages).

```html
<div class="ga-form-field">
  <label class="ga-form-field__label"><span class="ga-form-field__label-text">Email</span><span class="ga-form-field__label-state">(optional)</span></label>
  <div class="ga-input"><input type="email"></div>
  <div class="ga-form-field__info ga-form-field__info--error">Enter a valid email address</div>
</div>
```

#### Textarea — `.ga-text-area` (alias `.ga-textarea`)
Multi-line input on a `<textarea>`. State: `--invalid`; native `:disabled`. Filled fields tint on hover/disabled like inputs. Optional character counter `.ga-textarea__counter` (+ `--warning` / `--error`).

```html
<textarea class="ga-text-area" rows="5" placeholder="Enter description"></textarea>
```

#### Checkbox — `.ga-checkbox`
Wraps a hidden native input (`.ga-checkbox__native`), a `.ga-checkbox__marker`, and a `.ga-checkbox__label`. Supports `checked`, `indeterminate` and `disabled` via the native input. Error: `--invalid`. The marker can carry icon indicators `.ga-checkbox__marker__indicator-checked` / `…-indeterminate` (lucide Check / Minus) or fall back to a CSS glyph.

```html
<label class="ga-checkbox">
  <input class="ga-checkbox__native" type="checkbox" checked>
  <span class="ga-checkbox__marker"></span>
  <span class="ga-checkbox__label">Send a copy to my email</span>
</label>
```

#### Radio — `.ga-radio-button`
Same anatomy as checkbox (`__native` / `__marker` / `__label`). Group with a shared input `name`. Error: `--invalid`.

```html
<label class="ga-radio-button"><input class="ga-radio-button__native" type="radio" name="plan" checked><span class="ga-radio-button__marker"></span><span class="ga-radio-button__label">Monthly</span></label>
```

#### Switch — `.ga-switch`
48×24 track, 16px thumb, check glyph inside when on. Parts: `.ga-switch__input`, `.ga-switch__marker`, `.ga-switch__slider`, optional `.ga-switch__check-icon`, `.ga-switch__label`. State from the native input **or** host classes `--checked` / `--disabled` / `--invalid` (legacy `--error` / `--success` / `--warning` outlines also supported).

```html
<label class="ga-switch"><input class="ga-switch__input" type="checkbox" checked><span class="ga-switch__marker"><span class="ga-switch__slider"></span></span><span class="ga-switch__label">Auto-pay invoices</span></label>
```

#### Select & data-select — `.ga-select` trigger + `.ga-dropdown`
A select is a `.ga-select` trigger (200px default; full-width inside a form field) paired with a floating `.ga-dropdown` panel of `.ga-dropdown__item` rows (add `--selected` / `--disabled` / keyboard `--active`). Multi-select (`--multi`) hosts `.ga-tag` chips in `.ga-select__main-area`; `--expanded` / `--invalid` ring the trigger. Searchable selects add a sticky `.ga-dropdown__search`; empty results use `.ga-dropdown__empty`; grouped options use `.ga-dropdown__caption`. For a native `<select>`, wrap in `.ga-native-select`.

```html
<div class="ga-input" role="combobox" aria-expanded="true"><input type="text" placeholder="Select an option"><span class="ga-icon" data-icon="chevronD" style="margin-left:auto"></span></div>
<div class="ga-dropdown">
  <button class="ga-dropdown__item ga-dropdown__item--selected">Option 1</button>
  <button class="ga-dropdown__item">Option 2</button>
</div>
```

#### Datepicker — `.ga-datepicker` + `.ga-calendar`
The `.ga-datepicker` panel (border + north shadow + 16px inset) hosts a bare 280px `.ga-calendar`. Calendar parts: `__header`, `__month-year(-button)`, `__navigation(-button)`, `__weekdays`/`__weekday`, `__selection--day/month/year`, `__day`, `__footer`. Day modifiers: `--outside` · `--weekend` · `--current` (alias `--today`) · `--special` · `--selected` · `--selected-range-start/-middle/-end` (aliases `--range-start` / `--in-range` / `--range-end`) · `--disabled`. Legacy trigger `.ga-date-picker__trigger` is kept.

#### Quantity selector — `.ga-input--quantity-selector` (alias `.ga-quantity`)
Number stepper. Canonical form: an `.ga-input.ga-input--quantity-selector` (160px) whose value input sits between `.ga-input__quantity-button`s divided by `.ga-input__quantity-separator`s. The standalone `.ga-quantity` block (default 40px · `--small` 32px · `--disabled` / `--error` / `--success`) is kept as an alias.

#### File uploader — `.ga-file-uploader`
A `.ga-file-uploader__dropzone` (+ `--drag-hover` / `--active` / `--disabled`) with optional `__heading(-label/-description)`, over a `__file-list` of `__file-item` rows (+ `--success` / `--error` with `__error-callout`). Legacy `.ga-file-row` rows (with `__progress` bar) are kept.

### Data display

#### Card — `.ga-card`
White surface for grouping content. Modifiers: `--selectable` · `--selected` · `--disabled`. Parts: `__header`, `__title`, `__description`, `__body`, `__footer`.

#### Badge — `.ga-badge`
Tiny status/count chip. Type (required): `--text` (**default**) or `--dot`. Variant: `--default` · `--default-inverted` · `--information` · `--error` · `--warning` · `--success` · `--muted` · `--disabled`.

```html
<span class="ga-badge ga-badge--text ga-badge--information">42</span>
<span class="ga-badge ga-badge--dot ga-badge--error"></span>
```

#### Tag — `.ga-tag`
Pill (status) or rounded-rect (utility) label. Status: `--information` · `--success` · `--error` · `--warning`. Utility (data categories): `--utility-{grey|indigo|teal|lime|purple|pink|rose|blue|green|orange}`. Interactive variants: `--add` (dashed) · `--interactive`. Parts: `__label`, `__divider`, `__close`.

#### Avatar — `.ga-avatar`
Sizes: `--xs` (16) · `--small` (24) · medium (40, default) · `--large` (64). Types: icon (`.ga-avatar__icon`), initials (text child), image (`.ga-avatar__image`, add `--image`). Add `--interactive` for hover/focus, `--disabled` for the muted state. Status dot via a nested `.ga-badge.ga-badge--dot`.

#### Stepper / progress indicator — `.ga-progress-indicator` (alias `.ga-stepper`)
Horizontal (default) or `--vertical` multi-step progress. Canonical anatomy: `__item` (+ `--completed` · `--current` · `--incomplete` · `--error` · `--disabled`) with `__indicator` (24px state icon), `__label(-text/-state)`, `__description`, `__current-dot`. The earlier `.ga-stepper` naming (`__step` + `--current`/`--complete`/`--error`/`--disabled`, `__row`, `__bubble`, `__label`, `__description`) still works.

#### Progress bar — `.ga-progress`
4px pill with optional `.ga-progress__label` / `.ga-progress__helper`. Track `.ga-progress__buffer` > fill `.ga-progress__bar`. Variants: `--success` · `--error` · `--indeterminate`.

#### Pagination — `.ga-pagination`
Compact numbered pagination (`.ga-pagination__button`, + `--selected`, `__ellipsis`, `__summary`) or the full table footer `--table` (page-size dropdown, range counter, first/prev/next/last nav).

#### Skeleton — `.ga-skeleton`
Shimmering placeholder block while content loads. Size it with width/height.

### Feedback & status

#### Alert / inline notification — `.ga-notification`
Banner surface. Variant: `--brand` (**default**, no icon) · `--information` · `--success` · `--warning` · `--error` · `--transparent`. Parts: `__icon`, `__content`, `__heading` (title row), `__title`, `__description`, `__action`, optional `__progress` > `__progress-bar` (add `--indeterminate`), and a `__close` button.

```html
<div class="ga-notification ga-notification--success" role="status" style="display:flex">
  <span class="ga-notification__icon ga-icon" data-icon="circle-check"></span>
  <div class="ga-notification__content">
    <div class="ga-notification__heading"><span class="ga-notification__title">Export ready</span></div>
    <div class="ga-notification__description">248 invoices exported to CSV.</div>
  </div>
</div>
```

#### Toast — `.ga-toast` in `.ga-toast-stack`
A transient notification: reuse `.ga-notification--{variant}` markup, add `.ga-toast` (north shadow), and stack instances in a fixed `.ga-toast-stack`. Variants: information (default) · success · warning · error. Auto-dismiss ~5s; dismissible by default.

#### Spinner — `.ga-spinner`
Orange track ring with a rotating cyan quarter-arc (stroke = size⁄5, 1100ms staggered cycle). Default 32px; size with width/height. `.ga-loader` is the labelled **stacked** loader (icon above label; `--small` 16 / medium 32 / `--large` 64, `--inverse`, `--centered`; add `--inline` for a row). For the 16px inline status loader use `.ga-inline-loading` (+ `--active` / `--completed` / `--error` / `--inactive`).

```html
<span class="ga-spinner"></span>
<div class="ga-loader ga-loader--small ga-loader--inline"><span class="ga-loader__spinner"></span><span class="ga-loader__label">Syncing…</span></div>
```

#### Tooltip — `.ga-tooltip`
Dark contextual overlay. Parts: `__row`, `__title`, `__close`, `__actions`; keyboard hints use `.ga-kbd`. Compact shortcut form: `--shortcut`. Placement arrow via `--top-center` (and siblings).

### Overlays & navigation

#### Modal / dialog — `.ga-modal`
Centered dialog over a `.ga-modal__backdrop`. Sizes: `--small` (340px) · `--medium` (696px, default) · `--large` (1230px). Type icon: `--information` · `--danger` · `--warning` · `--success`. Parts: `__top-section`, `__icon`, `__heading` (`__label` + `__title`), `__content` / `__description`, `__close`, `__actions` (right-aligned buttons). Title should match the trigger; actions are verbs, never Yes/No.

```html
<div class="ga-modal__backdrop"></div>
<div class="ga-modal ga-modal--small ga-modal--danger" role="alertdialog">
  <div class="ga-modal__top-section">
    <span class="ga-modal__icon ga-icon" data-icon="octagon-alert"></span>
    <div class="ga-modal__heading"><div class="ga-modal__title">Delete user?</div></div>
    <button class="ga-modal__close" aria-label="Dismiss"><span class="ga-icon" data-icon="close"></span></button>
  </div>
  <div class="ga-modal__content">This permanently removes the account.</div>
  <div class="ga-modal__actions">
    <button class="ga-button ga-button--secondary">Cancel</button>
    <button class="ga-button ga-button--primary">Delete</button>
  </div>
</div>
```

#### Menu / dropdown — `.ga-menu` (or `.ga-dropdown`)
A floating list of actions. Items: `.ga-menu__item` (+ `--selected`), with `__item-icon`, `__item-shortcut`. Structure with `.ga-menu__title` and `.ga-menu__separator`. Uses the north shadow.

#### Accordion — `.ga-accordion` > `.ga-accordion-item`
Progressive disclosure. Each item: `__header` (48px; `__title` 16/24 medium + 24px `__chevron`) over `__content` (padded 8/48/24/16). Modifiers: `--expanded` · `--disabled` · `--chevron-start` (chevron before the title).

#### Drawer — `.ga-drawer`
Sliding side panel: `__header` (icon button + `__title` xl + `__description` sm), scrollable `__body`, 56px `__footer` > `__footer-actions`. Types: flyout (in-flow, 1px primary border, default) · `--modal` (over `.ga-drawer__backdrop` in a `.ga-drawer__container`, east shadow; `--start` slides from the left with the west shadow).

#### Tabs — `.ga-tabs`
Underline tabs: each tab carries a 4px keyline (bottom when horizontal, left when `--vertical`) that colours in on `--selected`. `--keyline` / `--with-keyline` adds a 1px rule behind the whole row. Tabs: `.ga-tabs__tab` (+ `--selected` / `--disabled`), optional `.ga-tabs__tab-icon` / `.ga-tab__right-icon`, overflow trigger `.ga-tabs__more`. The outer flex wrapper is `.ga-tabs-container` (`--horizontal` / `--vertical`).

```html
<div class="ga-tabs ga-tabs--horizontal">
  <button class="ga-tabs__tab ga-tabs__tab--selected">Overview</button>
  <button class="ga-tabs__tab">Invoices</button>
</div>
```

#### Breadcrumb — `.ga-breadcrumb`
Trail of `.ga-breadcrumb-item` triggers separated by `__separator`; the last is `--current-page`.

#### Side navigation — `.ga-side-navigation`
App shell rail (320px): `__header` / `__body` / `__footer`, a brand `__switcher` (+ dropdown), in-rail `__search` (+ `__search-shortcut`), `__item` rows (+ `--active`, which adds a 4px left accent bar; `--level-2…6` nesting; `__item-description`), `__recent-*` and `__search-results-*` lists, and a `__user` block with `__footer-dropdown`.

#### Page header — `.ga-page-header`
Global navigation row (`__global-navigation` → `__menu-breadcrumbs` + `__header-actions`) over an optional `__page-navigation` row (`__page-nav-start` / `__page-nav-end`). Responsive: breadcrumbs wrap to a second row below 768px.

#### Container — `.ga-container`
Responsive page margins only — 16 / 24 / 32 / 40px stepping up at 840 / 1440 / 1920px (canonical). For the old bordered-panel look use `.ga-container--surface`.

---

## React components

The same contract is available as typed React components, compiled onto `window.GaiaDesignSystem_d69b3c`. They are thin emitters of the BEM markup above — the CSS stays the single source of truth, so restyling an atom restyles both worlds. Each has a `.d.ts` next to it in `components/`.

Components: Accordion, AccordionItem, Avatar, AvatarGroup, Badge, BadgeIndicator, Breadcrumbs, Button, Calendar, Card, Checkbox, CheckboxGroup, ChipListbox, ContextSelector, ContextSelectorBranchSlot, ContextSelectorItem, ContextSelectorList, ContextSelectorSection, ContextSelectorSlot, Datepicker, Drawer, Dropdown, DropdownItem, Feedback, FileUploader, FormField, Icon, IconButton, InlineLoading, Input, Kbd, Link, Loader, Menu, MenuItem, MenuSeparator, MenuTitle, Modal, Notification, PageHeader, Pagination, ProgressBar, ProgressIndicator, QuantitySelector, QuickFilterButton, RadioButton, RadioGroup, Search, SegmentedControl, SegmentedControlButton, Select, SideNavigation, SideNavigationItem, Skeleton, Spinner, Switch, Tab, Tabs, Tag, TextArea, Toast, ToastStack, Tooltip.

### Figma kit coverage — intentional skips

`KIT-COVERAGE.md` maps all 372 kit families: the 58 built components and every skipped family with its reason. Summary of the skip categories:

- **Figma-internal parts** (names starting with `_` or `.` — `_cs-*`, `.context-selector-*`, `.nav-menu-*`, `.dropdown-*_item`, keylines, slots, `_color-master`, Variable/Mode row components): private building blocks of the kit's own documentation.
- **Icon glyphs (~1,594) and `dyn-icon-*`**: Gaia's icon library is Lucide; `icons.js` + the `Icon` component provide the full set through the official pipeline instead of duplicating drawn glyphs.
- **Flags (259 variants)**: locale artwork, not UI components.
- **ag-grid theme mocks** (`_Checkbox-theme-alpine/balham/material/quartz`, Grid/Input Cell): they document the ag-grid *integration*, which lives in token form (the `gaia` grid mode), not as DOM components.
- **Browser/OS chrome mocks** (`_Figma parts / Chrome | Edge…`, `❖ Browser/Desktop previews`, favicons): device framing for mockups.
- **Spec/annotation helpers** (Addnotation, `.component-overview-block`, design-checklist, brand assets, `.visma-vud-products` logo sheet): documentation furniture.
- **Product organisms** (AI assistant, notifications hub, dashboards, widgets): product-level compositions built *from* this system, out of library scope. Context selector and Feedback graduated to built components (2026-07) as `ContextSelector` and `Feedback`.

#### Skip register — every skipped family by name

Intentionally skipped, verbatim from the kit inventory (reason in parentheses; ×N = the kit contains N families with this exact name):

`_component-header-frame`, `_icons-shell` ×2, `_menu_shortcut_combo` ×2, `_slotx160h`, `_business date`, `_color-master`, `_Collection Row Component`, `_Color Cell Component`, `_Group Row Component`, `_Group Text Component`, `_Mode Text Component`, `_Variable Name Component`, `_VariableCollectionId:12:362:Color Variable Row Component`, `_VariableCollectionId:12:362:Mode Row Component`, `_VariableCollectionId:12:362:Variable Row Component`, `_VariableCollectionId:17:95:Mode Row Component`, `_VariableCollectionId:17:95:Variable Row Component`, `_VariableCollectionId:2128:2:Color Variable Row Component`, `_VariableCollectionId:2128:2:Mode Row Component`, `_VariableCollectionId:2128:2:Variable Row Component`, `_VariableCollectionId:2134:165:Color Variable Row Component`, `_VariableCollectionId:2134:165:Mode Row Component`, `Addnotation`, `addnotation-number`, `addnotation-pointer` ×2, `.addnotation-item`, `.component-overview-block`, `design-checklist`, `keyline` ×6, `left icon`, `.add-icon`, `.subtract-icon`, `.tree-line-1`, `.icon-box`, `.Frame 1337`, `button-test`, `❖ UIPreview`, `utility/slot` (kit-internal documentation machinery).

`_cs-branch-row`, `_cs-panel` ×2, `_cs-row`, `_cs-section-header`, `_cs-trigger`, `.branch-selector`, `.context-selector-branch-row`, `.context-selector-container`, `.context-selector-favourite`, `.context-selector-row`, `.context-selector-section-header`, `.context-selector-trigger`, `.context-selector-branch-list`, `.context-selector-list`, `.context-selector/error`, `.context-selector/loading`, `.context-selector/no-results`, `.context-selector/single-company`, `_company-list` (variant sheets → `ContextSelector`); `feedback-header-button` (→ `Feedback` + `Button`); `.avatar-people`, `.avatar-entities`, `.avatar-02/icon/large/default`, `.avatar-02/icon/large/disabled`, `.avatar-02/icon/large/hover`, `.avatar-02/image/large/default`, `.avatar-02/image/large/disabled`, `.avatar-02/image/large/hover`, `.avatar-02/initial/large/default`, `.avatar-02/initial/large/disabled`, `.avatar-02/initial/large/hover` (→ `Avatar`); `.accordion-item` (→ `AccordionItem`); `.breadcrumb-item` ×2 (→ `Breadcrumbs`); `.calendar-day` (→ `Calendar`); `.checkbox` ×2, `checkbox-label` (→ `Checkbox`); `.dropdown-checkbox_item`, `.dropdown-radio_item`, `.dropdown-menu_item` ×2, `.dropdown-checkbox-menu`, `.dropdown-radio-menu`, `.dropdown-menu`, `.item` (→ `Dropdown` / `Menu`); `.file_uploader-item_file`, `.file_uploader-file_list-item`, `file_uploader - drag&drop box` (→ `FileUploader`); `.loader-animation` ×2 (→ `Loader` / `Spinner` keyframes); `.menu-item` (→ `MenuItem`); `.module-dropdown-item`, `.module-item`, `_module dropdown` ×2, `.nav-footer-dropdown`, `.nav-menu-container`, `.nav-menu-footer-item`, `.nav-menu-icon`, `.nav-menu-item`, `.nav-menu-item-tier`, `.nav-module-dropdown`, `.nav-search`, `.nav-search-result`, `_navigation badge` ×2, `_navigation content` ×2, `_navigation footer` ×2, `_navigation footer item` ×2, `_navigation header` ×2, `_navigation item` ×2, `_navigation selection indicator`, `_navigation user` ×2, `_navigation-dropdown-user-menu`, `_side-navigation` ×2 (→ `SideNavigation` / `PageHeader`); `.page-header` (→ `PageHeader`); `.progress`, `.progress-bar_animation`, `.progress-bar_animation-indetermined` (→ `ProgressBar`); `.progress_indicator-item` (→ `ProgressIndicator`); `.radio-button` (→ `RadioButton`); `.tab-item` (→ `Tab`); `.demo-drawer-01`, `.demo-drawer-02`, `.drawer_content`, `.drawer/modal` (→ `Drawer` / `Modal`) (private variant sheets duplicating built components).

`dyn-icon-24-comment-chat`, `dyn-icon-24-copy`, `dyn-icon-24-folder`, `dyn-icon-24-open-folder-2`, `dyn-icon-24-paperplane`, `dyn-icon-24-preview`, `dyn-icon-24-save` and the ~1,594-glyph icon set (→ Lucide via `icons.js` / `Icon`); `flag` (259 locale variants); `avatar logos`, `favi icon`, `.VS-logo`, `.visma-vud-products` (102 logo variants), `brand-asset-mountain-01-2k` (artwork, not components).

`_Checkbox-theme-alpine`, `_Checkbox-theme-balham`, `_Checkbox-theme-material`, `_Checkbox-theme-quartz`, `_Checkbox-theme-quartz/Off`, `Grid Cell`, `Input Cell`, `Legend-single` (ag-grid integration docs — ships as the token-level grid theme).

`_Figma parts / Chrome / Tab bar / New tab` ×2, `_Figma parts / Chrome / Tab bar / Search tabs` ×2, `_Figma parts / Chrome / Tab bar / Tab`, `_Figma parts / Chrome / Tab bar / Tab / Tab edge`, `_Figma parts / Chrome / Navigation bar`, `_Figma parts / Chrome / Tab bar`, `_Figma parts / Chrome / Toolbars`, `_Figma parts / Edge / Tab bar / New tab`, `_Figma parts / Edge / Tab bar / Tab`, `_Figma parts / Edge / Navigation bar`, `_Figma parts / Edge / Tab bar`, `_Figma parts / Edge / Toolbars`, `_Figma parts / Favicon`, `❖ Browser previews`, `❖ Desktop preview` (browser/OS chrome mockups).

`ai_chat-header-button`, `dashboard-shell` (product compositions — consuming-project scope).

## Attribution

This system is an educational, framework-agnostic reproduction of Visma's Gaia design language. Its component contract mirrors the open-source `@vsn-ux/ngx-gaia` Angular library and `@vsn-ux/gaia-styles`. All trademarks belong to Visma.
