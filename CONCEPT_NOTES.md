# Paint It Forward — website concept v0.1: review notes

For Emily's review. Nothing here appears on the visitor-facing pages. In the HTML, every block of copy is tagged `data-copy="source"` (existing wording or facts from paintitforward.co, checked 24 Nov 2026) or `data-copy="proposed"` (new draft copy).

## Pages

The concept is one page with three views. Links such as `#chapters` and `#get-involved` switch between them, and a link to a section opens the right view and scrolls to it. In Wix these would become three separate pages.

- **Home:** hero, how it works, navy impact band, chapter preview, artwork wall, ways to get involved.
- **Chapters:** Nigeria, Kenya and Singapore panels, a network photo gallery, and start-a-chapter steps and requirements.
- **Get involved:** attend, volunteer/lead (NYC roles), start a chapter, support (shop and donate), collaborate, FAQ.

## Copy taken from the current site

- Youth-led 501(c)(3) nonprofit based in New York, NY.
- "Devoted to enriching lives through art"; "No kid should have unequal opportunities."
- Art sold online and at events and exhibitions; proceeds fund school and art supplies for students with special needs.
- Volunteers and leaders aged 13 and over. Leader roles and requirements (NYC metro area) and the application form.
- Chapter-founder requirements (13+, outside New York, interest in art), what founders do, the five start-up steps and the application form.
- Painting sessions in Riverside Park and an indoor studio, and the event-updates sign-up form.
- Six product titles, each linking to its live product page.

## Proposed new copy

Headlines, ledes, captions, chapter introductions, the collaboration invitation, the "Make art. Make a difference." band and the FAQ wording are proposed. The hero line and supporting line come from the design system's draft copy.

## Deliberately left out

- **Volunteer figures:** the ~20 / ~200 numbers and the old "200+ volunteers".
- **"100% of proceeds":** HQ needs to confirm its scope first.
- **Fundraising totals and prices:** no totals are given. Product prices are left to the shop.
- **Event dates:** see the issues below.
- **Singapore details:** no collaboration or venue is named. Its status is shown only as "First event in planning".
- **Photo locations:** captions are neutral and no photo is tied to a country.
- **Impact band:** it shows "3 chapters in focus" (editorial, not a verified total), "13+" (age, from the site) and "Art → supplies" (qualitative).

## Issues found on the current site

1. The footer email links point to `info@mysite.com`, and the Instagram and TikTok icons point to Wix's own accounts. The concept links to @paintitforwardofficial, using the handle shown on the homepage. Please confirm those profile URLs.
2. The events page labels every event "Upcoming", including June–November dates with no year. The first event is listed as Sat Dec 05, but its detail page says Dec 12, 2026, 1–4 PM at 50 Riverside Blvd, with no ticket price set. The concept links to the events page instead of listing dates.
3. The Donate page (/donate) returned an error twice. The concept links to it, but please check that it works.
4. Product photos are on Wix's image server, which the concept can't load. The artwork wall uses colour-matted "frames" with real titles and links, so it doesn't show any made-up artwork images.

## Needs confirming before publication

- Chapter introductions, cities, contacts and photos for Nigeria and Kenya; Singapore event details when final.
- Photo locations, people's consent and attribution.
- Whether "Chapters in focus: 3" may appear publicly.
- That the NYC leadership roles and the founder form are still open.
- DM Sans: the concept loads it from Google Fonts. Production should self-host it with its licence, or the system font fallback is used.

## How it was checked

Screenshots at 320, 390, 768, 1024 and 1440px on every view, with no horizontal overflow and one H1 per view. The mobile menu toggles `aria-expanded`, closes on link choice and Escape, and returns focus to the button. Deep links open the right view. No script errors. Colour pairs follow the design system's approved list, and motion turns off under reduced-motion.

Not done: a full screen-reader pass, a 200% zoom check, or tests of the external Google Forms and Wix checkout.
