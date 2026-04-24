# Open Graph Images

This directory holds OG images for social sharing previews (LinkedIn, Slack, Twitter/X, etc.).

## Convention (per seo/metadata-patterns.md)

- **Dimensions:** 1200 x 630 pixels
- **Format:** PNG
- **Visual treatment:** Follow brand guide sections 3.0 and 6.0. Typical patterns include dark background with brand gradient, Alphabyte Blue flat with white logo lockup and page title, or greyscale photo with Alphabyte Blue multiply overlay.
- **Text:** Use Aeonik (or Arial fallback) with tight tracking. Keep to a single short headline. Ensure contrast (white on blue, black on white/grey, white on gradient).
- **Logo:** Use the primary logo in the approved color for the background (see brand skill component-rules.md).

## Naming convention

Name each image after the page slug it belongs to:

- `default.png` — site-wide fallback (referenced by `src/app/layout.tsx`)
- `pricing.png` — for `/pricing`
- `ml-deployment.png` — for `/services/ml-deployment`
- `case-study-acme.png` — for `/case-studies/acme`

## TODO

`default.png` does not exist yet. It is referenced by the root layout as the site-wide fallback OG image and **must be created before production deployment**. Design this image following the brand guide specifications above.
