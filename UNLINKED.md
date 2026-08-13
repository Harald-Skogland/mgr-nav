# Views with no remaining link

The app's per-module bar was replaced by the shared module nav (Home · Approval ·
Autopay · HRM · More). That bar was the only route to some in-module filters, so
those views still exist in the prototype but nothing navigates to them.

Determined by checking which code paths set each state key, excluding the removed
bar itself.

## No longer reachable

| Module | View | State it needed | Why it's stranded |
|---|---|---|---|
| Approval | **Overdue** | `overdueOnly: true` | Every other setter writes `false`. `clearOverdue` only turns it off. |
| Autopay | **Invoices** | `apFilter: 'invoices'` | Every other setter writes `'all'`. |
| Autopay | **Salary** | `apFilter: 'salary'` | Every other setter writes `'all'`. |
| HRM | **Calendar** | `hrmTab: 'calendar'` | Only the removed bar set it; other paths write `employees` or `dialogue`. |

Autopay is the biggest loss: all three of its filters came from that bar, so it
now only ever shows the default Payments view.

## Still reachable, via other routes

| Module | View | Route that survives |
|---|---|---|
| Approval | Tasks | `pickTasks` — the Tasks/History tabs in the header |
| Approval | History | `pickHistory` — same tabs; also `?open=history` |
| Autopay | Payments | the default `apFilter: 'all'` |
| HRM | Employees | start screen HRM row, search results, `?open=hrm` |
| HRM | Dialogue | `openDept`, and the app's own dialogue links |

## Not affected

BNXT's **Orders / Products / Contacts** carried no state patch in the bar — they
only moved a selection index — so removing them changes nothing functional.

## Re-linking

Each stranded view needs one control that writes its state. The cheapest options:

- **Overdue** — the Approval header already has a filter icon; adding an overdue
  toggle there is the natural home.
- **Autopay Invoices / Salary** — a segmented control or filter row on the Autopay
  screen, mirroring what the bar used to provide.
- **HRM Calendar** — HRM has a tab row; adding Calendar alongside Employees and
  Dialogue would restore it.

Alternatively `?open=` routing in `app.html` could take extra keys (for example
`open=overdue`), since it already sets arbitrary initial state — that would make
them reachable by URL without adding UI.
