# Fonts

## Geist (web typeface)

This folder contains **Geist** `.woff2` webfonts used by the site:

- `Geist-Regular.woff2`
- `Geist-RegularItalic.woff2`
- `Geist-Medium.woff2`
- `Geist-Bold.woff2`
- `Geist-BoldItalic.woff2`

Source: `resources/1 Branding/3 Fonts/Geist/webfonts/`
Synced via `scripts/sync-brand-assets.sh`.

## Aeonik (print typeface)

Aeonik remains the primary brand typeface for print per the Brand Guide
(§4.0). The source files are `.otf` only and not web-ready. If an Aeonik
webfont licence (`.woff2`) is obtained from Cotype Foundry
(https://cotypefoundry.com/our-fonts/aeonik/), it's a drop-in swap —
add the files here and update the `next/font/local` block in
`src/app/layout.tsx`.
