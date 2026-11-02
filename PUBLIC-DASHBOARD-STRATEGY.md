# India Tools: public dashboard strategy
Research date: 2 November 2026

## Decision
Build an independent public tools website by Sarada Sutar. Working name: **India Tools**; tagline: **Everyday, made easier.** The existing repository contained only README.md (# T). A calm, useful home for the existing calendar is a stronger starting point than a dense personal dashboard.

## Research method and limits
100 deliberately selected website addresses across ten categories were checked using public web retrieval. This is a relevance-based benchmark set, NOT a claim that these are the world's objectively best 100 sites. Similarweb ranks traffic, which differs from design quality. The useful benchmarks include calendar specialists, utility directories, public services, product sites and design resources.

The inventory below records access limits. Readable means public content/navigation was available; it does not mean all interactions, mobile rendering, accessibility, security or performance were audited. Proposed lessons are design recommendations/inferences, not measured scores. Blocked and limited pages supply no verified interaction findings. No numerical competitor ratings were invented.

## Strongest applicable findings
| Reference | Public evidence | Recommendation for India Tools |
| --- | --- | --- |
| [Google](https://www.google.com/) | Search is the main entry | Put search near the top, with useful synonyms and empty states |
| [GOV.UK](https://www.gov.uk/) | Task categories and popular services | Organise around what people want to do |
| [Government design principles](https://www.gov.uk/guidance/government-design-principles) | Start with user needs and keep services simple | Test whether a first-time visitor can find and complete a task |
| [Timeanddate](https://www.timeanddate.com/) | Calendars, printing, holidays and date tools form related collections | Make calendar the anchor, with related tools nearby |
| [Calculator.net](https://www.calculator.net/) | Named calculators grouped by task | Use literal names and short explanations |
| [Wikipedia](https://www.wikipedia.org/) | Prominent language selection and search | Add English/Odia only with complete, reviewed translations |
| [Photopea](https://www.photopea.com/) | Explicit explanation that processing is local | Say exactly where a tool processes visitor inputs |
| [Squoosh](https://squoosh.app/) | Input/preview workflow and local processing statement | Prefer simple browser-side tools where appropriate |
| [GOV.UK Design System](https://design-system.service.gov.uk/) | Reusable components and patterns | Use one shared set of form, button and error styles |
| [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/) | Accessibility success criteria | Target AA; assess keyboard, labels, contrast and zoom before launch |
| [Web Vitals](https://web.dev/articles/vitals) | Loading, responsiveness and stability thresholds | Target LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile |

## Visual direction
Warm ivory #F7F6F0 background, deep teal #123E3B actions and navy ink #172E35. Use white tool panels with thin borders and restrained pastel category accents. Display headings use Georgia; tool text uses system sans-serif. Keep body copy around 17px, bold labels, generous spacing, visible focus and large tap targets. Let the calendar provide visual interest without a heavy image or video. Avoid automatic carousels, moving notices, decorative counters and excessive animation.

## Information architecture
- Home: concise purpose, search, today's calendar and useful tools.
- Calendar: English view; separate verified Odia view; month/year navigation; today; print; shareable dates.
- Tools: Date & Time, Numbers & Money, Text & Documents, and Image Tools only as working tools become available.
- Each tool: clear title, labelled inputs, result, method, example, limitations and related tools.
- About: creator, purpose and independent ownership.
- Help: usage instructions, contact/report-error channel once a public contact method is chosen.
- Privacy and accessibility: accurate statements reflecting actual behaviour.

The starter intentionally exposes only three working tools. Do not present a tile as working if it is only a future idea.

## Calendar integration: the next major feature
SarNi's sarni-festivals-v20-8-14.js uses authenticated state.importantDates, private API operations and account-specific festival notes. It cannot be copied unchanged into a public service.

Extract reusable date logic separately. Publish an explicitly public, reviewed dataset containing date, Odia label, festival, year, location/timezone basis, source edition, verification state and last review date. Do not publish personal birthdays, diary entries, family guides/photos, access tokens, sheet IDs or private API configuration as part of that dataset.

English-to-Odia calendar conversion needs defined semantics: Odia solar month/day and lunar tithi are different concepts. Label them clearly; do not infer either by a fixed Gregorian offset. Confirm the intended calendar representation from the existing implementation. Mark unsupported years as unavailable. Kohinoor-specific claims must be checked against the relevant edition and appropriate permission to reuse its content established. Never claim affiliation, publisher approval or verification without evidence.

Public pages should read only the curated dataset. Editing belongs in a separately authenticated administration flow. A public link to SarNi's private backend is not a substitute.

## Priority roadmap
| Order | Work | Completion criterion |
| --- | --- | --- |
| 1 | Attractive, functional public starter | Working calendar, tool search and calculators; clear ownership |
| 2 | Existing calendar extraction and verified public data | Correct representative dates, year boundaries and observances; source notes |
| 3 | Dedicated calendar/tool URLs | Each tool directly shareable with a meaningful title and description |
| 4 | Complete Odia/English interface | Both interfaces fully translated and checked by a fluent reader |
| 5 | Trust pages and feedback | Working contact/error route and accurate privacy/accessibility statements |
| 6 | Installable experience and optional preferences | Proper icons/manifest, update handling and tested installation |
| 7 | Expansion based on usage | Add dependable tools in response to visitor needs |

## Architecture
Keep this repository independent from personal dashboards. Begin with static HTML/CSS/JavaScript; three local tools need no Apps Script dependency or server. As the catalogue grows, split into shared styles, tool modules and a small public tools manifest. Add individual static tool pages for discoverability. Keep secrets and administrative operations on a protected server when those features are actually needed.

Use GitHub Pages if already configured, or enable it through repository Settings → Pages → Deploy from a branch → main / (root). The connected GitHub tools can change repository files and merge a PR, but do not expose a Pages-settings mutation. A source merge alone is not proof of deployment. No new hosting account or paid service is necessary for this static starter.

Use a custom domain matching the eventual creator brand when ready; verify availability first. Do not embed private dashboards or automatically grant the public access to them.

## Validation
Browser preview checks are recorded in VALIDATION.md. Performance targets and WCAG AA are goals, not achieved certifications. Full Android/iOS testing, real-user performance and verified festival data remain launch checks.

## 100-site benchmark inventory
Each entry is a proposed lesson/study focus, with retrieval status. A blocked entry is retained to make coverage honest.

| # | Category | Website | Retrieval | Proposed lesson / study focus |
| --- | --- | --- | --- | --- |
| 1 | Search & discovery | [google.com](https://google.com/) | Sign-in only | Prominent search |
| 2 | Search & discovery | [bing.com](https://bing.com/) | Limited / script or challenge | Search entry clarity |
| 3 | Search & discovery | [duckduckgo.com](https://duckduckgo.com/) | Readable public content | Privacy explanation |
| 4 | Search & discovery | [wikipedia.org](https://wikipedia.org/) | Readable public content | Language discovery |
| 5 | Search & discovery | [archive.org](https://archive.org/) | Limited / script or challenge | Archive discovery |
| 6 | Search & discovery | [britannica.com](https://britannica.com/) | Unavailable | Reference credibility |
| 7 | Search & discovery | [wolframalpha.com](https://wolframalpha.com/) | Readable public content | Input examples |
| 8 | Search & discovery | [khanacademy.org](https://khanacademy.org/) | Limited / script or challenge | Approachable learning |
| 9 | Search & discovery | [coursera.org](https://coursera.org/) | Readable public content | Searchable categories |
| 10 | Search & discovery | [edx.org](https://edx.org/) | Readable public content | Topic navigation |
| 11 | Calendar & time | [timeanddate.com](https://timeanddate.com/) | Readable public content | Calendar + calculators together |
| 12 | Calendar & time | [calendar.google.com](https://calendar.google.com/) | Sign-in only | Month navigation (signed-in UI not inspected) |
| 13 | Calendar & time | [calendar.yahoo.com](https://calendar.yahoo.com/) | Unavailable | Calendar navigation (retrieval blocked) |
| 14 | Calendar & time | [outlook.live.com](https://outlook.live.com/) | Limited / script or challenge | Calendar workspace (JS-only) |
| 15 | Calendar & time | [calendly.com](https://calendly.com/) | Readable public content | Clear scheduling action |
| 16 | Calendar & time | [cal.com](https://cal.com/) | Readable public content | Audience-specific entry points |
| 17 | Calendar & time | [calendarpedia.com](https://calendarpedia.com/) | Unavailable | Printable month layouts (unverified) |
| 18 | Calendar & time | [officeholidays.com](https://officeholidays.com/) | Unavailable | Regional holiday filtering (unverified) |
| 19 | Calendar & time | [drikpanchang.com](https://drikpanchang.com/) | Unavailable | Location-sensitive observances (unverified) |
| 20 | Calendar & time | [prokerala.com](https://prokerala.com/) | Unavailable | Regional calendar discovery (unverified) |
| 21 | Everyday utilities | [calculator.net](https://calculator.net/) | Readable public content | Task categories |
| 22 | Everyday utilities | [calculatorsoup.com](https://calculatorsoup.com/) | Readable public content | Search and calculator index |
| 23 | Everyday utilities | [omnicalculator.com](https://omnicalculator.com/) | Unavailable | Explanations alongside results (unverified) |
| 24 | Everyday utilities | [rapidtables.com](https://rapidtables.com/) | Readable public content | Short tool names |
| 25 | Everyday utilities | [unitconverters.net](https://unitconverters.net/) | Unavailable | Units shown beside inputs (unverified) |
| 26 | Everyday utilities | [convertworld.com](https://convertworld.com/) | Unavailable | Conversion direction clarity (unverified) |
| 27 | Everyday utilities | [xe.com](https://xe.com/) | Readable public content | Source and rate timestamps |
| 28 | Everyday utilities | [wise.com](https://wise.com/) | Readable public content | Explain calculation assumptions |
| 29 | Everyday utilities | [worldtimebuddy.com](https://worldtimebuddy.com/) | Readable public content | Share current selection |
| 30 | Everyday utilities | [tickcounter.com](https://tickcounter.com/) | Readable public content | Clear countdown configuration |
| 31 | Public services | [gov.uk](https://gov.uk/) | Readable public content | Plain-language task navigation |
| 32 | Public services | [usa.gov](https://usa.gov/) | Readable public content | Organise by visitor needs |
| 33 | Public services | [india.gov.in](https://india.gov.in/) | Readable public content | Topic-based public directory |
| 34 | Public services | [odisha.gov.in](https://odisha.gov.in/) | Unavailable | Regional language access (unverified) |
| 35 | Public services | [service.gov.uk](https://service.gov.uk/) | Unavailable | Service flow simplicity (unverified root) |
| 36 | Public services | [canada.ca](https://canada.ca/) | Readable public content | Visible language choice |
| 37 | Public services | [australia.gov.au](https://australia.gov.au/) | Readable public content | Browse + search |
| 38 | Public services | [gov.sg](https://gov.sg/) | Readable public content | Ownership transparency |
| 39 | Public services | [europa.eu](https://europa.eu/) | Readable public content | Language entry points |
| 40 | Public services | [data.gov](https://data.gov/) | Readable public content | Dataset discovery and provenance |
| 41 | Product clarity | [apple.com](https://apple.com/) | Readable public content | Few primary actions |
| 42 | Product clarity | [stripe.com](https://stripe.com/) | Readable public content | Structured product navigation |
| 43 | Product clarity | [linear.app](https://linear.app/) | Readable public content | Feature hierarchy |
| 44 | Product clarity | [notion.com](https://notion.com/) | Readable public content | Group related capabilities |
| 45 | Product clarity | [figma.com](https://figma.com/) | Readable public content | Action-oriented categories |
| 46 | Product clarity | [slack.com](https://slack.com/) | Readable public content | Localised messaging |
| 47 | Product clarity | [dropbox.com](https://dropbox.com/) | Readable public content | Concise purpose statement |
| 48 | Product clarity | [todoist.com](https://todoist.com/) | Readable public content | Personal/business separation |
| 49 | Product clarity | [trello.com](https://trello.com/) | Readable public content | Feature explanations |
| 50 | Product clarity | [asana.com](https://asana.com/) | Readable public content | Clear audience routes |
| 51 | Tool organisation | [canva.com](https://canva.com/) | Readable public content | Tool families |
| 52 | Tool organisation | [adobe.com](https://adobe.com/) | Readable public content | Product grouping |
| 53 | Tool organisation | [ilovepdf.com](https://ilovepdf.com/) | Unavailable | Task-specific tiles (unverified) |
| 54 | Tool organisation | [smallpdf.com](https://smallpdf.com/) | Readable public content | Action-named tools |
| 55 | Tool organisation | [pdf24.org](https://pdf24.org/) | Unavailable | Utility directory (unverified) |
| 56 | Tool organisation | [photopea.com](https://photopea.com/) | Readable public content | Explain browser-local processing |
| 57 | Tool organisation | [excalidraw.com](https://excalidraw.com/) | Limited / script or challenge | Immediate canvas (JS-only) |
| 58 | Tool organisation | [draw.io](https://draw.io/) | Limited / script or challenge | Clear utility purpose |
| 59 | Tool organisation | [remove.bg](https://remove.bg/) | Readable public content | Single-purpose tool entry |
| 60 | Tool organisation | [squoosh.app](https://squoosh.app/) | Readable public content | Local processing and preview |
| 61 | Learning & documentation | [developer.mozilla.org](https://developer.mozilla.org/) | Readable public content | Searchable documentation |
| 62 | Learning & documentation | [web.dev](https://web.dev/) | Readable public content | Performance and accessibility resources |
| 63 | Learning & documentation | [w3.org](https://w3.org/) | Readable public content | Standards provenance |
| 64 | Learning & documentation | [design-system.service.gov.uk](https://design-system.service.gov.uk/) | Readable public content | Reusable forms and components |
| 65 | Learning & documentation | [designsystemsrepo.com](https://designsystemsrepo.com/) | Readable public content | Consistent design vocabulary |
| 66 | Learning & documentation | [nngroup.com](https://nngroup.com/) | Unavailable | Usability evidence (unverified) |
| 67 | Learning & documentation | [smashingmagazine.com](https://smashingmagazine.com/) | Readable public content | Readable topic organisation |
| 68 | Learning & documentation | [alistapart.com](https://alistapart.com/) | Readable public content | Focused editorial hierarchy |
| 69 | Learning & documentation | [getbootstrap.com](https://getbootstrap.com/) | Readable public content | Predictable components |
| 70 | Learning & documentation | [m3.material.io](https://m3.material.io/) | Limited / script or challenge | Consistent mobile controls (JS-only) |
| 71 | Navigation at scale | [amazon.com](https://amazon.com/) | Limited / script or challenge | Search/filter patterns (challenge page) |
| 72 | Navigation at scale | [ikea.com](https://ikea.com/) | Readable public content | Region-aware entry |
| 73 | Navigation at scale | [etsy.com](https://etsy.com/) | Readable public content | Prominent search |
| 74 | Navigation at scale | [ebay.com](https://ebay.com/) | Readable public content | Search and category browse |
| 75 | Navigation at scale | [airbnb.com](https://airbnb.com/) | Readable public content | Category discovery |
| 76 | Navigation at scale | [booking.com](https://booking.com/) | Limited / script or challenge | Search flow (challenge page) |
| 77 | Navigation at scale | [tripadvisor.com](https://tripadvisor.com/) | Readable public content | Task/category navigation |
| 78 | Navigation at scale | [openstreetmap.org](https://openstreetmap.org/) | Readable public content | Map attribution |
| 79 | Navigation at scale | [maps.google.com](https://maps.google.com/) | Limited / script or challenge | Location search (JS-only) |
| 80 | Navigation at scale | [alltrails.com](https://alltrails.com/) | Readable public content | Search guidance and result summaries |
| 81 | Editorial & culture | [bbc.com](https://bbc.com/) | Unavailable | Editorial hierarchy (blocked) |
| 82 | Editorial & culture | [reuters.com](https://reuters.com/) | Readable public content | Topic organisation |
| 83 | Editorial & culture | [apnews.com](https://apnews.com/) | Readable public content | Section navigation |
| 84 | Editorial & culture | [theguardian.com](https://theguardian.com/) | Readable public content | Readable sectioning |
| 85 | Editorial & culture | [nationalgeographic.com](https://nationalgeographic.com/) | Readable public content | Cultural context |
| 86 | Editorial & culture | [si.edu](https://si.edu/) | Unavailable | Cultural collection exploration (unverified) |
| 87 | Editorial & culture | [metmuseum.org](https://metmuseum.org/) | Readable public content | Language and visit actions |
| 88 | Editorial & culture | [artsandculture.google.com](https://artsandculture.google.com/) | Sign-in only | Themes and collections |
| 89 | Editorial & culture | [nasa.gov](https://nasa.gov/) | Readable public content | Public resources and sources |
| 90 | Editorial & culture | [ted.com](https://ted.com/) | Readable public content | Topic discovery |
| 91 | Design & infrastructure | [awwwards.com](https://awwwards.com/) | Unavailable | Visual inspiration (blocked) |
| 92 | Design & infrastructure | [cssdesignawards.com](https://cssdesignawards.com/) | Readable public content | Curated design references |
| 93 | Design & infrastructure | [webbyawards.com](https://webbyawards.com/) | Unavailable | Award criteria (unverified) |
| 94 | Design & infrastructure | [siteinspire.com](https://siteinspire.com/) | Readable public content | Curated examples |
| 95 | Design & infrastructure | [land-book.com](https://land-book.com/) | Readable public content | Section references |
| 96 | Design & infrastructure | [godly.website](https://godly.website/) | Unavailable | Visual inspiration (blocked redirect) |
| 97 | Design & infrastructure | [vercel.com](https://vercel.com/) | Readable public content | Developer resource structure |
| 98 | Design & infrastructure | [netlify.com](https://netlify.com/) | Readable public content | Documentation/support routes |
| 99 | Design & infrastructure | [cloudflare.com](https://cloudflare.com/) | Readable public content | Service transparency |
| 100 | Design & infrastructure | [github.com](https://github.com/) | Readable public content | Versioned change history |

Retrieval totals: Sign-in only: 3; Limited / script or challenge: 10; Readable public content: 68; Unavailable: 19. These are retrieval counts, not quality scores.

## Ranking context
[Similarweb top-100 traffic report](https://www.similarweb.com/blog/research/market-research/most-visited-websites/) was used to distinguish traffic popularity from design suitability. [CSS Design Awards](https://www.cssdesignawards.com/) and [Siteinspire](https://www.siteinspire.com/) supply inspiration, not proof that heavy visual effects suit a public utility. The 100-site set above is independently selected for relevance.
