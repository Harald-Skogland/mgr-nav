# mgr-nav — Visma Manager login prototype

The Visma Manager prototype: the app home screen, plus a click-through login flow
built on the Gaia design system. No build step, no dependencies, no server required.

| File | What it is |
|---|---|
| `index.html` | **Entry point — opens straight on the home screen.** |
| `login.html` | The login flow. Currently bypassed, not deleted; open it directly to demo it. |

The login is disabled only in the sense that nothing routes to it. Clicking through
it still ends on the home screen, so it can be re-enabled by pointing the entry
point back at it.

**Live:** https://harald-skogland.github.io/mgr-nav/

## The login flow (`login.html`)

Four screens, advanced by clicking. Nothing validates and nothing blocks — every
primary button always moves forward, so the demo can be driven without typing.

1. **Email** — address field, `Next`
2. **Password** — initials avatar and the address entered on step 1, password field
   with a show/hide toggle, `Log in`
3. **Verification** — six single-digit boxes that auto-advance as you type, `Verify`
4. **Logged in** — success confirmation, then `Go to Visma Manager` opens
   `index.html` — the home screen, with the full app prototype behind it

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

## Sizing

Mobile-first and frameless: no device bezel and no mock status bar, so on a
handset the page fills the viewport and reads as a real web app rather than a
phone drawn inside a phone. A desktop preview constrains the page to a
412px column so it stays representative.

Below a 745px viewport height — most phones in a browser once the URL bar and
toolbar are subtracted — the vertical rhythm compacts (smaller brand mark,
tighter gaps and card inset) so the tallest screen, the verification step, fits
without scrolling. Nothing is hidden to achieve it.

Two layout notes worth keeping:

- The page shell uses `min-height`, not `height`. A fixed-height flex container
  with `justify-content: center` clips the **top** of content that outgrows it,
  and that clipped region cannot be scrolled to. `min-height` lets the container
  grow instead.
- `index.html` (the app) carries a small script that strips its own 412x892
  AndroidDevice frame, mock status bar and gesture pill below 480px, so the
  login and the app match on a phone. Above that width the frame is kept.

## Hosting note

`.nojekyll` is required. GitHub Pages runs a legacy Jekyll build that excludes
paths beginning with an underscore, which silently drops the whole `_ds/` bundle
and serves an unstyled page.

## Status

Demo only. No authentication, no network calls, no credentials are checked.
