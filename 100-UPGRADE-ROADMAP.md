# India Tools — coordinated 100-improvement roadmap

Approval scope: the user requested one coordinated upgrade programme. Routine implementation and reversible fixes are authorised. A new paid service, new account permission or publication of private data is not implied.

Status: CODE = implemented in source (browser QA may remain); PARTIAL = some of the stated work exists; SETUP = code supplied but needs Apps Script deployment and live acceptance; PLAN = not implemented. Nothing marked PLAN should be advertised as available. The v0.8 managed preview stopped before browser QA, so desktop/mobile screenshots are unverified. Mocked backend tests, public-tool edge cases, script syntax and source checks passed. Desktop/mobile visual QA still needs a working preview. No numeric “best website” rating or complete visual audit of 100 websites is claimed.

## 1. Readability and calendar navigation
1. CODE — Larger-text reading option.
2. CODE — Stronger-contrast option.
3. CODE — User-controlled reduced animation.
4. CODE — Save reading preferences on this browser.
5. CODE — Reset all reading preferences.
6. CODE — Jump directly to a selected calendar month and year.
7. CODE — Bound calendar navigation to supported years 1900–2100.
8. CODE — Distinguish weekends visually from weekdays.
9. CODE — Copy and reopen a link to a selected calendar month.
10. CODE — Announce month navigation and copy results with a status region.

## 2. Email-only admin foundation
11. SETUP — Email verification without a password.
12. SETUP — Backend-only allowlist for the authorised administrator.
13. SETUP — Single-use verification codes.
14. SETUP — Ten-minute code expiry.
15. SETUP — Resend cooldown plus hourly/daily email limits.
16. SETUP — Failed-code attempt limit and temporary lockout.
17. SETUP — Store hashes of codes and session tokens, not their plaintext.
18. SETUP — Check admin authentication for every private operation.
19. SETUP — Two-hour sessions and explicit sign-out revocation.
20. SETUP — Owner-run emergency session revocation.

## 3. Publishing and statistics foundation
21. SETUP — Publish scrolling notices from admin.
22. SETUP — Choose Notice, Quote or Announcement heading.
23. SETUP — Set notice visibility, HTTPS link and scrolling speed.
24. SETUP — Detect conflicting settings revisions before overwriting.
25. SETUP — Maintain a yearly calendar catalogue with jurisdiction labels.
26. SETUP — Upload public calendar PDFs to Drive, up to 5 MB.
27. SETUP — Display PDF and Google Calendar subscription links publicly.
28. SETUP — Record aggregate daily page views in Sheets.
29. SETUP — Show today's views, total and 30 recorded days in admin.
30. SETUP — Keep admin sessions in browser memory and exclude personal visitor identity from the counter.

## 4. Further visual refinements
31. CODE — A consistent, lightweight SVG icon system replaces mixed text symbols across public navigation and tools.
32. CODE — Public styling consolidated into one dashboard.css with design tokens; prior override layers removed.
33. CODE — Consistent spacing and card rhythm in the public layout.
34. CODE — Public button sizing and primary/secondary action styles standardised.
35. PARTIAL — User-selectable dark theme is implemented; measured colour-contrast testing remains.
36. CODE — Header and bottom navigation adapt to narrow phone widths in CSS; visual screenshot QA remains.
37. CODE — Welcome section can be compacted and the preference is saved locally.
38. PARTIAL — Tool and calendar empty states are designed; other modules need review.
39. PARTIAL — A code-native SVG favicon was created; social sharing image remains.
40. PLAN — Review desktop, tablet and mobile layout screenshots together.

## 5. Useful calendar improvements
41. PLAN — Add source-document and issue-date fields to calendar entries.
42. PLAN — Separate central, state and office-specific holiday catalogues.
43. PLAN — Add year and jurisdiction filters.
44. PLAN — Import a reviewed holiday CSV with validation and preview.
45. PLAN — Distinguish gazetted and restricted holidays.
46. PLAN — Show upcoming verified holidays and days remaining.
47. PLAN — Export reviewed holidays as ICS calendar files.
48. PLAN — Offer printable annual and monthly holiday views.
49. PLAN — Add correction notes and last-verified dates.
50. PLAN — Add a documented annual update/archive workflow.

## 6. Everyday public tools
51. CODE — Age calculator with explicit last-day-of-month convention.
52. CODE — Add/subtract calendar days with date-only arithmetic.
53. PLAN — Add working-day calculations using chosen verified holidays.
54. CODE — Length, mass and temperature converter with labelled results.
55. CODE — Percentage change for a positive baseline.
56. CODE — Local text word, character and line counts.
57. CODE — Uppercase, lowercase and whitespace cleanup, with undo for one transformation.
58. CODE — Indian and international comma grouping, preserving decimals.
59. CODE — Date countdown in whole days with device-local default date.
60. CODE — Example, clear and copy controls in public calculator dialogs.

## 7. Personal convenience without public accounts
61. CODE — Favourite tools saved in the browser.
62. CODE — Recently opened tools saved in the browser.
63. CODE — Category filters for tools.
64. CODE — Tool search matches descriptions and common synonyms.
65. CODE — Slash keyboard shortcut focuses tool search.
66. CODE — ?tool= links open individual tools.
67. PARTIAL — Favourites and recent history can be cleared; appearance reset is separate.
68. PARTIAL — Privacy/storage explanation is visible in About and preferences; a dedicated help panel remains.
69. PLAN — Add an installable web-app manifest and icons.
70. PLAN — Define safe offline caching that never caches admin responses.

## 8. Admin reliability and recovery
71. PLAN — Add an audit log for published changes.
72. PLAN — Keep previous public settings versions.
73. PLAN — Restore a selected version with an explicit review screen.
74. PLAN — Add export/import backups with schema validation.
75. CODE — Admin warns before leaving with unpublished notice/calendar edits.
76. PLAN — Preserve draft edits within the open admin session.
77. PLAN — Add backend version compatibility checks.
78. PLAN — Add a connection-health screen without exposing private IDs.
79. PLAN — Add actionable quota and failure messages.
80. PLAN — Add upload idempotency to avoid duplicates after timeouts.

## 9. Accessibility and localisation
81. PLAN — Test keyboard-only use across every tool and admin form.
82. PLAN — Test screen-reader names and status announcements.
83. PLAN — Measure text/control contrast in every theme.
84. PLAN — Test layout at 200% and 400% zoom.
85. PLAN — Test at narrow widths without horizontal page scrolling.
86. CODE — Scripted scrolling respects reduced-motion preference.
87. PLAN — Add accessible form error summaries.
88. CODE — Public and admin controls have visible keyboard focus styles.
89. PLAN — Prepare English/Odia interface translation keys.
90. PLAN — Add reviewed Odia labels and date formatting without inventing festival data.

## 10. Speed, quality and public-launch readiness
91. PLAN — Measure real phone loading time before setting targets.
92. CODE — Public CSS consolidated; screenshot regression remains before full visual sign-off.
93. PLAN — Split admin-only assets away from the public page if beneficial.
94. PLAN — Cache public configuration briefly with explicit refresh rules.
95. PLAN — Batch public configuration reads and minimise Sheets calls.
96. PLAN — Test concurrent settings saves and visit updates.
97. PLAN — Test failure/recovery behaviour on weak mobile connections.
98. PLAN — Test public PDF and subscription links while signed out.
99. PLAN — Run live OTP, logout, expiry and protected-endpoint acceptance tests.
100. PLAN — Publish a release checklist, rollback instructions and honest verification report.

## Order of work
Finish live setup and acceptance for 11–30 first. Then improve visual consistency and accessibility together; add tools/calendar data only when verified. Every batch should leave the existing public tools working. Performance targets must be measured, not guaranteed in advance. “100 improvements” is a roadmap, not a claim that 100 changes have already shipped.
