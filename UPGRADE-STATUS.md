# India Tools — 100-improvement programme

[The detailed checklist](100-UPGRADE-ROADMAP.md) distinguishes implemented source code, partial work, backend setup, and plans. This is an authorised sequence of improvements, not a claim that 100 changes are shipped.

## v0.8 public frontend

- One design system replaces accumulated inline style overrides. Responsive single left navigation, mobile bottom navigation, calendar rail, consistent SVG icons, dark mode, compact welcome, improved empty states, and SVG favicon.
- Ten local tools, including seven added in this release: age, date arithmetic, units, percentage change, text studio, number formatting, and countdown.
- Search terms, categories, favourites, recent tools, deep links, slash shortcut, example/clear/copy controls and browser-data reset.
- Government calendar year/jurisdiction filters and Google Calendar help; raw iCal URLs are copyable for desktop subscription. Holiday data is still supplied only by the owner from verified sources.
- Admin indicates unpublished edits, warns before leaving, and avoids a publish while a calendar editor is open.

## Verification

`node tests/public-tools.test.cjs` exercises leap years, age convention, date shifts, percentages, absolute zero, units, number precision and invalid inputs. `node tests/backend.test.cjs` checks mocked OTP security and publishing boundaries. JavaScript syntax, HTML IDs and asset references pass. Managed browser preview stopped immediately after starting (`ERR_CONNECTION_REFUSED`), so desktop/mobile appearance and interaction screenshots are unverified. GitHub Pages and live Apps Script have not been checked with the backend URL.

## Next gate

Connect the private Apps Script `/exec` URL in `india-config.json`, then test email OTP, public PDF links, subscription links, notice updates, visit counts and signed-out access. Test phone/tablet/desktop layout in a working browser. Avoid treating a PDF as a ready-made set of holiday events.
