# India Tools

An independent public dashboard by Sarada Sutar. Version 1.7 has responsive navigation, a Gregorian calendar, a government calendar collection, 21 local tools, a Central Government employee toolkit, official government resource links and offline-ready PWA support.

## Public tools

Monthly calendar, days between dates, percentage of an amount, age, add/subtract days, length/mass/temperature conversion, percentage change, text studio, Indian/international number formatting, countdown, GST, EMI, simple interest, salary, basic pension, 7th CPC promotion/MACP fixation, HRA, transport allowance, retirement gratuity, retirement leave encashment and pension commutation. Search by name or common terms; filter by category; star favourites; revisit recent tools; press `/` to focus search; share `?tool=age` or `?month=2026-11`. Dark theme, larger text, stronger contrast, reduced motion and a compact welcome are browser preferences. Calculator inputs stay in the page; favourites, recent names and appearance settings are stored on that browser only.

The main dashboard includes a compact monthly DoPT calendar for the 14 compulsory holidays applicable to Central Government offices outside Delhi/New Delhi, with month navigation, holiday markers, and a monthly agenda. It currently includes the 2026 and 2027 DoPT schedules. Three additional holidays selected by the State CGEWCC, local restricted holidays and moon-sighting revisions are not inferred; verify the applicable Bengaluru/Karnataka office order. The separate Gregorian calendar remains a date planner. No Odia/festival data is asserted until verified and published.

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


## DoPT holiday calendar sources

- 2026 DoPT Office Memorandum, F.No.12/2/2023-JCA dated 3 July 2025: [PDF copy](https://d1jmc0u14z2tmp.cloudfront.net/uploads/media/List-of-Holiday-2026-DoPT-0693911b85f7cc3-00668785.pdf). The 14 compulsory holidays for offices outside Delhi/New Delhi are used in the mainboard calendar.
- 2027 DoPT Office Memorandum, F.No.12/2/2023-JCA dated 16 July 2026: [PDF copy of the memorandum](https://dtf.in/wp-content/files/DoPT_O.M._dated_16.07.2026__Holidays_to_be_observed_in_Central_Government_Offices_during_the_year_2027_-_reg...PDF). The 14 compulsory holidays for offices outside Delhi/New Delhi are used in the mainboard calendar.
- The DoPT memorandum provides for three additional holidays selected by the Central Government Employees Welfare Coordination Committee in each State. Those dates must be added only after the applicable Karnataka/Bengaluru list is confirmed. Moon-dependent dates may be revised at short notice.

 
## Restricted holiday calendar — v1.7

- The mainboard now has a separate toggle for restricted-holiday references. Amber markers and a monthly agenda distinguish RH references from compulsory holidays.
- The 2026 and 2027 RH dates are transcribed from DoPT Annexure-II. Those Annexure-II lists are explicitly for Delhi/New Delhi offices only.
- For Bengaluru/Karnataka offices, the State CGEWCC issues a separate RH list. The Delhi annexure must not be treated as the user's office entitlement. The nine unselected occasions from the 12 optional-holiday categories are also to be included in the outside-Delhi RH list.
- Users can save dates to a browser-local personal RH shortlist. It does not submit leave, synchronise between devices, or determine entitlement.
- A print action produces a calendar-and-agenda print layout. Islamic dates and local office amendments remain subject to official notifications.

Sources:
- 2026 DoPT OM, F.No.12/2/2023-JCA dated 03.07.2025: [PDF](https://d1jmc0u14z2tmp.cloudfront.net/uploads/media/List-of-Holiday-2026-DoPT-0693911b85f7cc3-00668785.pdf).
- 2027 DoPT OM, F.No.12/2/2023-JCA dated 16.07.2026: [PDF](https://dtf.in/wp-content/files/DoPT_O.M._dated_16.07.2026__Holidays_to_be_observed_in_Central_Government_Offices_during_the_year_2027_-_reg...PDF).
