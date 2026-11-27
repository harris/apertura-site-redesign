# Apertura Gene Therapy — site rebuild

A static rebuild of aperturagtx.com: hand-written HTML/CSS, no WordPress, no build step,
no JS framework. Two fonts from Google Fonts, one 2.5 KB script for the mobile menu,
scroll reveals and the copy-to-clipboard buttons.

## Run it

    python3 -m http.server 8000

then open http://localhost:8000/

(Or drop the folder on any static host — Netlify, Cloudflare Pages, S3, Railway.)

## Pages

| File | Replaces |
| --- | --- |
| `index.html` | home |
| `science.html` | Science — TfR1 CapX |
| `pipeline.html` | Science — Pipeline |
| `open-aperture.html` | Open Aperture + Program Details |
| `partnering.html` | Partnering |
| `team.html` | Our Team |
| `about.html` | About Us |
| `news.html` | Press Releases + Publications + In Focus |
| `faq.html` | Resources — FAQ |
| `contact.html` | Contact |

`styles.css` holds the whole design system; the tokens are in the `:root` block at the top.
`assets/` holds images pulled from the current site (logo, capsid render, transferrin
diagram, pipeline chart, headshots, partner logos).

## Known gaps

- The contact form has no backend. It intercepts submit and tells the visitor to email
  info@aperturagtx.com. Point it at a form service or an API route when you have one.
- Press releases, the application form and the blog still link out to the live
  WordPress site; those article bodies were not copied over.
- The pipeline table encodes stage as relative progress bars. Verify the percentages
  against the current internal pipeline before publishing.

## Status

Unofficial redesign concept, built from the public content of aperturagtx.com.
Not affiliated with or endorsed by Apertura Gene Therapy. The logo, photography,
headshots and copy in `assets/` and across the pages belong to them, and are
reproduced here only to show the design. Every page carries `<meta name="robots"
content="noindex">` so the demo is not indexed as a lookalike of the real site.
