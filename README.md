# mgr-nav — Visma Manager login prototype

A click-through prototype of the Visma Manager login flow, built on the Gaia design system.
Open `login.html` in a browser. No build step, no dependencies, no server required.

## The flow

Four screens, advanced by clicking. Nothing validates and nothing blocks — every
primary button always moves forward, so the demo can be driven without typing.

1. **Email** — address field, `Next`
2. **Password** — initials avatar and the address entered on step 1, password field
   with a show/hide toggle, `Log in`
3. **Verification** — six single-digit boxes that auto-advance as you type, `Verify`
4. **Logged in** — success confirmation and a hand-off to the dashboard prototype

Fields stay editable so the demo feels live: the address typed on step 1 carries
through to later screens, and the avatar initials follow it (`anna.berg` → `AB`).
<kbd>Enter</kbd> fires the active screen's primary button. `Start over` resets to step 1.

## Design system

Everything reads Gaia tokens — no hardcoded colours, spacing, or type sizes. The
bundle is vendored under `_ds/` so the prototype renders standalone; it is a copy
of the Gaia framework-agnostic port (tokens, fonts, and component CSS).

Type sizes come from the system's own `.ga-text-*` helpers rather than re-derived
tokens, since those helpers deliberately carry size only and leave family and
weight to the components.

## Artwork

Both Visma marks are inline SVG, traced from reference screenshots of the real
Visma Connect login rather than hand-approximated, and filled with `currentColor`
so they retint with surrounding text:

- the **Visma Manager checkmark** in the brand lockup
- the **VISMA corporate wordmark** in the footer, using `fill-rule="evenodd"` to
  keep the counters in the `A` and the `®` open

Interface icons are inline Lucide glyphs at 1.5 stroke, per the Gaia icon spec.
Note that `.ga-icon` is pinned to 16×16 by the design system and stretches its
`<svg>` to fill, so `data-size` sizes the wrapper box, not the SVG attributes.

## Known limitation

The `Go to Visma Manager` button on the final screen points at the separate VMM
dashboard prototype, which is **not part of this repo**. It resolves only when
this folder sits alongside that prototype on disk; from a fresh clone it is a
dead link. Everything else works standalone.

## Status

Demo only. No authentication, no network calls, no credentials are checked.
