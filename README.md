# Visma Manager prototype

A mobile prototype of Visma Manager, built against the Gaia design system.

**Live:** https://harald-skogland.github.io/mgr-nav/

## Running it

It must be served over **http** — not opened as a file. The runtime fetches
`android-frame.jsx` to transpile it, and `file://` blocks that, which makes the
device frame silently disappear.

```
python3 -m http.server 8000 --bind 0.0.0.0
```

Then http://localhost:8000/ — or the machine's LAN address on a phone.

## Files

| File | What it is |
|---|---|
| `index.html` | The prototype. One document, all screens. |
| `support.js` | The `dc` runtime that renders it. Generated — do not edit. |
| `android-frame.jsx` | The device frame component the document imports. |
| `gaia-icons-extra.js` | Fills gaps in the Gaia icon registry. |
| `vendor/` | React, ReactDOM and Babel, pinned and local. |
| `_ds/` | Vendored Gaia design system. Kept pristine — override per page instead. |

Nothing is fetched from a CDN: the runtime resolves React, ReactDOM and Babel
through `window.__resources`, which points at `vendor/`.

## Structure

Every screen lives in `index.html` as an `sc-if` block with a
`data-screen-label`, switched by state rather than navigation. Moving between
the start screen, a module and a detail view never reloads the document, so the
frame stays mounted and there is nothing to keep in sync.

This replaced an earlier split — a hand-written start screen plus a generated
8.1MB export carrying seven runtime patches. Keeping those two consistent was
manual, and it was where every visual inconsistency came from. The history
before `5d44946` has that version if it is ever needed.

## Design notes

- The device frame is for desktop preview. Below 480px it un-frames: no bezel,
  no mock status or gesture bar, and the nav shrinks rather than clipping.
- Type follows the **Gaia Mobile** ramp, which differs from the vendored web
  bundle. Those line-heights are overridden in the document, not in `_ds/`.
- The nav is defined once at root level, so every screen that shows one shows
  the same one — including Payroll, which is reached from the More menu.

## Known gaps

- **Icons need the network.** Every glyph resolves, but the runtime re-renders
  the icon spans and blanks them after the painter fills them, so the Lucide
  fallback is doing the work. Invisible online; blank offline.
- **The app's own controls are under 44px** — header icons, tabs and checkboxes
  at 24–37px. The screens added here meet the target; fixing the rest means
  restyling the original app.
- **The start screen shows Figma copy**, not live data — "Good morning, Sam",
  "12 tasks to approve". The app knows the real figures.
