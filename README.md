# mgr-nav — Visma Manager login prototype

The Visma Manager prototype: the app home screen, plus a click-through login flow
built on the Gaia design system. No build step, no dependencies, no server required.

| File | What it is |
|---|---|
| `index.html` | **Entry point — the Manager start screen.** Hand-built from Figma MOB-Manager-App node `17707:147660`. |
| `app.html` | The full app prototype (Approval, detail views, nav menu, history) — the generated bundle. |
| `login.html` | The login flow. Bypassed, not deleted; open it directly to demo it. |

The login is disabled only in the sense that nothing routes to it. Clicking through
it still ends on the start screen, so it can be re-enabled by pointing the entry
point back at it.

## Start screen

Built to the Figma frame rather than approximated: sections are GAiA, INTEGRATIONS,
RECENT ACTIVITY and SETTINGS AND FEEDBACK, and the bottom nav is Home / Approval /
Autopay / HRM / More with Home selected. Section headers collapse and expand.

Every row links into `app.html` via `?open=<key>`, which the app reads to set its
initial state. The old home screen is gone: `homeActive` is forced false so its
markup never renders, and the app's own Home button returns here.

| Row | Opens |
|---|---|
| Approval / Autopay / BNXT / HRM | that module |
| Payroll | Wagerun detail (`Månedslønn`) |
| Calendar, OSR | nothing — no such module exists in the app |
| GAiA sparkles button | GAiA Agent |
| Recent activity rows | voucher detail, task detail, HRM |
| View all recent activities | Approval, History tab |
| Feedback / Settings | those screens |
| Bottom nav | Approval / Autopay / HRM / History |

`app.html` with no parameter falls back to Approval, since Home no longer exists.

Type follows the **Gaia Mobile** ramp, matching the Figma frame, which resolves
`lineheight/md` to 20 and `lineheight/xl2` to 36. The vendored `_ds` bundle is
the web port, so those are overridden per-page rather than in the bundle.

## Hosting note

`.nojekyll` is required. GitHub Pages runs a legacy Jekyll build that excludes
paths beginning with an underscore, which silently drops the whole `_ds/` bundle
and serves an unstyled page.

## Status

Demo only. No authentication, no network calls, no credentials are checked.
