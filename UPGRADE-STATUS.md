# India Tools — 100-improvement programme

[The detailed checklist](100-UPGRADE-ROADMAP.md) distinguishes implemented source code, partial work, backend setup, and plans. This is an authorised sequence of improvements, not a claim that 100 changes are shipped.

## v0.8 public frontend

- One design system replaces accumulated inline style overrides. Responsive single left navigation, mobile bottom navigation, calendar rail, consistent SVG icons, dark mode, compact welcome, improved empty states, and SVG favicon.
- Fifteen local tools: calendar, date and number calculators, text studio, unit conversion, GST, EMI, simple interest, salary estimation and indicative pension estimation.
- Search terms, categories, favourites, recent tools, deep links, slash shortcut, example/clear/copy controls and browser-data reset.
- Government calendar year/jurisdiction filters and Google Calendar help; raw iCal URLs are copyable for desktop subscription. Holiday data is still supplied only by the owner from verified sources.
- Admin indicates unpublished edits, warns before leaving, and avoids a publish while a calendar editor is open.

## Verification

`node tests/public-tools.test.cjs` exercises leap years, age convention, date shifts, percentages, absolute zero, units, number precision and invalid inputs. `node tests/backend.test.cjs` checks mocked OTP security and publishing boundaries. JavaScript syntax, HTML IDs and asset references pass. Managed browser preview stopped immediately after starting (`ERR_CONNECTION_REFUSED`), so desktop/mobile appearance and interaction screenshots are unverified. GitHub Pages and live Apps Script have not been checked with the backend URL.

## Next gate

Connect the private Apps Script `/exec` URL in `india-config.json`, then test email OTP, public PDF links, subscription links, notice updates, visit counts and signed-out access. Test phone/tablet/desktop layout in a working browser. Avoid treating a PDF as a ready-made set of holiday events.


## v1.3 implementation update

- Published 15 browser-side tools, including configurable monthly salary estimation and an explicitly indicative basic pension estimator.
- Added official Government resource links and current-source reminders; rates are user-entered rather than silently assumed.
- Added PWA manifest, offline shell caching, sitemap and robots rules.
- Fixed a malformed separator between existing tool definitions that prevented the public dashboard script from parsing; `dashboard.js` and `service-worker.js` now pass JavaScript syntax compilation checks.
- Live GitHub Pages rendering, mobile interaction, install prompt behaviour and offline acceptance still require browser testing after Pages deployment. The private Apps Script backend remains unconfigured in the public repository.


## v1.4 Central Government employee toolkit

- Added 7th CPC promotion/MACP fixation estimate using Rule 13's one-increment then equal/next-higher-cell method for the standard civilian matrix; special cases and DNI options remain outside scope.
- Added configurable HRA and transport allowance estimators (rates are entered by the user, not hardcoded).
- Added retirement gratuity estimator with 66 half-yearly period and ₹25 lakh ceiling controls.
- Added retirement EL/HPL encashment estimator enforcing the combined 300-day limit.
- Added commutation estimator requiring the user to enter the applicable official factor.
- Updated basic pension estimate to apply Rule 44's ₹9,000 minimum and ₹1,25,000 maximum.
- Added `CENTRAL-GOVT-CALCULATOR-NOTES.md` with formulas, source links and limitations.
- Source checks: dashboard and service-worker JavaScript syntax compile; 21 calculator definitions are present. Browser-level acceptance and live Pages deployment are still unverified.


## v1.5 validation refinement

- Added an explicit check that the selected promotion/MACP destination level is higher than the current level.
- Added a public link to the calculator methodology and official-source notes from the dashboard.
- Updated the offline shell to cache the methodology notes and v1.5 JavaScript asset.


## v1.6 DoPT mainboard monthly calendar

- Added a compact monthly calendar to the main dashboard, with holiday date markers, month navigation, and a clickable monthly holiday agenda.
- Added 2026 and 2027 DoPT compulsory holiday dates for Central Government offices outside Delhi/New Delhi.
- Clearly excludes the three State CGEWCC-selected holidays and local restricted holidays until the applicable Karnataka/Bengaluru notification is verified; flags moon-dependent dates as subject to revision.
- Added links to the 2026 and 2027 DoPT Office Memoranda and refreshed the PWA cache.
- JavaScript syntax, calendar data and deployment asset versions are checked in source. Live browser/mobile appearance and Pages deployment still need acceptance testing.


## v1.7 Restricted holiday references and printing

- Added separate RH reference toggle and amber date markers for DoPT Annexure-II dates in 2026 and 2027.
- Added monthly agenda entries with personal shortlist save/remove controls; shortlist is stored locally in the user's browser only.
- Added a print action with a dedicated print layout showing the month grid and holiday agenda.
- Corrected the 2027 compulsory holiday dates to match the DoPT OM (including Dussehra 9 October, Diwali 29 October, Guru Nanak Jayanti 14 November, and Milad 15 August).
- Clearly labels Annexure-II RH data as Delhi/New Delhi reference only; Bengaluru users must verify the State CGEWCC / office RH list.


## v1.8 final validation

- CSS print isolation refined and static asset cache keys refreshed to v1.8.
- Dashboard JavaScript and service-worker syntax compile successfully.
- Restricted holiday data contains 32 date entries for 2026 and 32 for 2027; entries sharing a date are grouped under one calendar date.
- RH toggle, local shortlist, print controls, and Bengaluru-specific applicability disclaimer are present in the public HTML/JS.


## v1.9 Bengaluru jurisdiction-specific holiday sources

- Added Bengaluru CGEWCC-linked 2026 closed holidays (Makara Sankranti, Ugadi, Ganesh Chaturthi) based on the ICAR-NIVEDI office order.
- Added 35 Bengaluru 2026 restricted-holiday dates from the ICAR-NIVEDI office order issued in pursuance of the Karnataka CGEWCC letter.
- Updated Bengaluru Id-ul-Zuha (Bakrid) closed-holiday date to 28 May 2026 following the CGEWCC Karnataka circular dated 20 May 2026.
- Added 19 Karnataka State restricted-holiday dates for 2027 as a separately labelled State Government reference, not a Central Government office entitlement.
- Separated Bengaluru Central Government, Karnataka State, and Delhi DoPT reference toggles; only the Bengaluru RH toggle is enabled by default.
- Added source links and refreshed PWA cache to v1.9.
