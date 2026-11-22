# India Tools

An independent public dashboard by Sarada Sutar. Version 1.5 has responsive navigation, a Gregorian calendar, a government calendar collection, 21 local tools, a Central Government employee toolkit, official government resource links and offline-ready PWA support.

## Public tools

Monthly calendar, days between dates, percentage of an amount, age, add/subtract days, length/mass/temperature conversion, percentage change, text studio, Indian/international number formatting, countdown, GST, EMI, simple interest, salary, basic pension, 7th CPC promotion/MACP fixation, HRA, transport allowance, retirement gratuity, retirement leave encashment and pension commutation. Search by name or common terms; filter by category; star favourites; revisit recent tools; press `/` to focus search; share `?tool=age` or `?month=2026-11`. Dark theme, larger text, stronger contrast, reduced motion and a compact welcome are browser preferences. Calculator inputs stay in the page; favourites, recent names and appearance settings are stored on that browser only.

The Gregorian month view has no government holiday overlays. No Odia/festival data is asserted until verified and published.

## Admin and calendars

`admin.html` has email verification, notice/calendar editing, public PDF uploads and aggregate daily visit counts when the private Apps Script backend is connected. The public `india-config.json` currently has an empty `backendUrl`; until a real Apps Script `/exec` URL is supplied and deployed, email codes, publishing, calendar listings and visit counts are inactive. The user has chosen GitHub frontend plus private Google Apps Script, without Supabase or a paid database. Backend source and setup instructions are in the privately delivered FE+BE package, not this public repository. Do not publish `Code.gs`, private Script Properties, OTPs or secrets here.

To publish a holiday calendar, the owner must curate verified all-day events in a separate public Google Calendar and publish its public share link or public iCal URL alongside the official PDF. The site never invents holiday events from a PDF. For a raw `.ics` URL, visitors can copy it and subscribe on a computer using Google Calendar → Other calendars → From URL. See [Google's instructions](https://support.google.com/calendar/answer/37100).

## GitHub Pages

Set Settings → Pages → Deploy from a branch → `main` → `/(root)` if Pages is not already configured. The files are plain HTML/CSS/JS with no build step; the public URL is normally `https://saradasutar.github.io/india/`. Repository content updates alone do not prove Pages is enabled or that the live site was checked.

## Checks and limitations

Core calculations and mocked backend security flows are checked locally; source assets, HTML IDs and JavaScript syntax are checked. The v0.8 browser preview stopped before desktop/mobile inspection. Actual Apps Script deployment, OTP delivery, Drive uploads, visit counts and public Google links require a deployed backend and live acceptance test. See [UPGRADE-STATUS.md](UPGRADE-STATUS.md) for the 100-improvement programme and release status, plus [PUBLIC-DASHBOARD-STRATEGY.md](PUBLIC-DASHBOARD-STRATEGY.md) for the earlier website research and its access limitations.

To roll back a frontend release, revert its GitHub commit; keep the private backend and `india-config.json` as they were. No backend migration is required for the v1.3 public frontend.

## v1.3 public release additions

- Refined responsive card layouts, category colour treatments, focus visibility and dynamic tool-count display.
- Added a web app manifest and service worker. After a successful first online visit, the public dashboard shell and its local calculator assets can be served offline; dynamic admin publishing, calendar feeds and remote resources still require a connection.
- Added a sitemap and crawler rules. The admin page is excluded from indexing.
- Added a Government resources directory linking to official Department of Expenditure, DoPPW, DoPT, EPFO, Income Tax and NPS Trust portals.
- Added a configurable monthly salary estimator. DA/HRA and other allowances are user-entered rather than hardcoded, so estimates can be adapted to the applicable order and posting.
- Added an indicative basic pension estimator using 50% of the higher of entered emoluments or average emoluments, subject to at least 10 completed years of qualifying service. It is not an official sanction calculation and does not model special cases, limits, commutation or NPS/UPS.
- The public site remains an independent personal project, not an official Government of India service.

## Release checks still required

GitHub source commits do not prove the Pages deployment or browser rendering has completed. Verify the live public URL on a phone and desktop, test install/offline behaviour after one online visit, and confirm all calculator flows. The backend URL remains blank in `india-config.json`; email OTP, publishing, visitor metrics and calendar management are therefore not active until the private Apps Script deployment is connected and tested. The salary and pension estimators are expressly indicative; they are not authoritative payroll, pension sanction, pay-fixation or retirement-benefit determinations. Do not use them in place of current Government orders, the applicable service rules, or the department's calculation.


## Central Government employee calculators

See [CENTRAL-GOVT-CALCULATOR-NOTES.md](CENTRAL-GOVT-CALCULATOR-NOTES.md) for the formula scope, official source links and limitations of the 7th CPC fixation, HRA, transport allowance, gratuity, leave encashment, pension and commutation estimators. The tools are indicative aids, not official determinations.
