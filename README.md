# mgr-nav — Visma Manager login prototype

The Visma Manager prototype: the app home screen, plus a click-through login flow
built on the Gaia design system. No build step, no dependencies, no server required.

| File | What it is |
|---|---|
| `index.html` | **Entry point — the shell.** Owns the device frame; screens load into an iframe inside it. |
| `start.html` | The Manager start screen, frameless. Built from Figma node `17707:147660`. |
| `app.html` | The full app prototype (Approval, detail views, history) — the generated bundle. |
| `login.html` | The login flow. Bypassed, not deleted; open it directly to demo it. |

The shell exists so navigation is seamless. Screens are separate documents with no
chrome of their own, and links inside the view target the view, so moving between
the start screen and the app swaps only the content — the frame never re-renders
and never shifts. Before this, each screen carried its own frame and they landed
17px apart vertically, with a further 7px sideways jump from a stray scrollbar.

`index.html?open=<key>` loads the app directly in the shell, so deep links survive.

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
