# India Tools

An independent public dashboard by Sarada Sutar. Version 0.8 has a responsive left navigation (bottom navigation on phones), a Gregorian calendar, a moving admin notice, a government calendar collection and ten local tools.

## Public tools

Monthly calendar, days between dates, percentage of an amount, age, add/subtract days, length/mass/temperature conversion, percentage change, text studio, Indian/international number formatting and days until a date. Search by name or common terms; filter by category; star favourites; revisit recent tools; press `/` to focus search; share `?tool=age` or `?month=2026-11`. Dark theme, larger text, stronger contrast, reduced motion and a compact welcome are browser preferences. Calculator inputs stay in the page; favourites, recent names and appearance settings are stored on that browser only.

The Gregorian month view has no government holiday overlays. No Odia/festival data is asserted until verified and published.

## Admin and calendars

`admin.html` has email verification, notice/calendar editing, public PDF uploads and aggregate daily visit counts when the private Apps Script backend is connected. The public `india-config.json` currently has an empty `backendUrl`; until a real Apps Script `/exec` URL is supplied and deployed, email codes, publishing, calendar listings and visit counts are inactive. The user has chosen GitHub frontend plus private Google Apps Script, without Supabase or a paid database. Backend source and setup instructions are in the privately delivered FE+BE package, not this public repository. Do not publish `Code.gs`, private Script Properties, OTPs or secrets here.

To publish a holiday calendar, the owner must curate verified all-day events in a separate public Google Calendar and publish its public share link or public iCal URL alongside the official PDF. The site never invents holiday events from a PDF. For a raw `.ics` URL, visitors can copy it and subscribe on a computer using Google Calendar → Other calendars → From URL. See [Google's instructions](https://support.google.com/calendar/answer/37100).

## GitHub Pages

Set Settings → Pages → Deploy from a branch → `main` → `/(root)` if Pages is not already configured. The files are plain HTML/CSS/JS with no build step; the public URL is normally `https://saradasutar.github.io/india/`. Repository content updates alone do not prove Pages is enabled or that the live site was checked.

## Checks and limitations

Core calculations and mocked backend security flows are checked locally; source assets, HTML IDs and JavaScript syntax are checked. The v0.8 browser preview stopped before desktop/mobile inspection. Actual Apps Script deployment, OTP delivery, Drive uploads, visit counts and public Google links require a deployed backend and live acceptance test. See [UPGRADE-STATUS.md](UPGRADE-STATUS.md) for the 100-improvement programme and release status, plus [PUBLIC-DASHBOARD-STRATEGY.md](PUBLIC-DASHBOARD-STRATEGY.md) for the earlier website research and its access limitations.

To roll back a frontend release, revert its GitHub commit; keep the private backend and `india-config.json` as they were. No backend migration is required for v0.8.
