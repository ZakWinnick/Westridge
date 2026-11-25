# Westridge

Static site for flywestridge.com (Westridge Private Aviation). Plain HTML, no build step.

- Pages: `index.html`, `how-we-work.html`, `aircraft.html`, `safety.html`, `destinations.html`, `destinations-tahoe.html`, `about.html`, `request-a-quote.html` (`request-a-trip.html` redirects to it)
- Styles are inline per element; `assets/site.css` holds the base rules and the mobile menu breakpoint; `assets/site.js` passes the home page quote fields to the request form
- Images: `assets/img/`, Unsplash photos graded to the palette

## Before Launch

Search the HTML for `[` to find placeholders: CA Seller of Travel number, legal entity name, response time, quote and payment terms, crew and insurance minimums, founder story, founder portrait.

The quote form has no backend. GitHub Pages is static, so point the form at a form service or replace it with a mailto link.

## Hosting

GitHub Pages: Settings, Pages, deploy from branch `main`, folder `/ (root)`.
