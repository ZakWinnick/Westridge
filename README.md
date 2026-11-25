# Westridge

Static site for flywestridge.com (Westridge Private Aviation). Plain HTML, no build step.

- Pages: `index.html`, `on-demand-charter.html`, `aircraft.html`, `why-westridge.html`, `safety.html`, `about.html`, `request-a-quote.html`
- Styles are inline per element; `assets/site.css` holds the base rules and the mobile menu breakpoint; `assets/site.js` passes the home page quote fields to the request form
- Images: `assets/img/`, Unsplash photos graded to the palette

## Before Launch

Search the HTML for `[` to find placeholders: CA Seller of Travel number, quote and payment terms, crew and insurance minimums, founder story, founder portrait.

The quote form has no backend. GitHub Pages is static, so point the form at a form service or replace it with a mailto link.

## Hosting

GitHub Pages: Settings, Pages, deploy from branch `main`, folder `/ (root)`.
