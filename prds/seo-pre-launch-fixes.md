# SEO Pre-Launch Fixes

## Status
Shipped

## Type
Cross-cutting

## Summary
A full 41-page crawl of `alphabyte-ai.pages.dev` against the production sitemap surfaced six launch-blocking issues across three themes: indexation hygiene, security & trust, and day-one rendering. The site is technically excellent (Lighthouse 100/100/100/96, OnPage 97.4/100, all images have alt text, every page has exactly one H1), so these fixes are targeted. They address: Cloudflare Pages preview host competing with production for indexation, three legal pages missing canonical tags, absent security response headers, missing favicon/manifest/security.txt files, a single shared OG image across all 41 pages, and the need for an `llms.txt` file. The `llms.txt` was already created in the Phase 1 remediation — this PRD covers the remaining five fixes plus any `llms.txt` updates needed.

Source: `reqs/alphabyte-seo-fixes.html` (full audit report)

## Decided
- **Fix 01 (pages.dev redirect):** Use Option B (noindex via `_headers` + conditional meta tag) rather than a Cloudflare dashboard redirect. This keeps the preview accessible for QA while preventing indexation. The redirect can be added at the Cloudflare dashboard level later; the repo-side noindex provides defence in depth regardless.
- **Fix 02 (canonicals on legal pages):** Legal pages already have `robots: { index: false, follow: true }`. Canonicals are still needed as defence in depth — the canonical consolidates link equity to the production URL even though the pages are noindexed. Add WebPage JSON-LD as well.
- **Fix 03 (security headers):** Ship CSP in `Content-Security-Policy-Report-Only` mode initially since the site is pre-launch and we can flip to enforce mode after verifying no violations. HSTS ships with `preload` included — the team is committed to HTTPS permanently.
- **Fix 04 (favicon set):** Raster icon files (favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png) are being delivered in a separate PR. This PRD ships the manifest, security.txt, and layout metadata updates — they reference the icon paths so the HTML is ready when the rasters land. The SVG favicon at `src/app/icon.svg` stays as the primary modern-browser icon.
- **Fix 05 (per-page OG images):** OG image files are being delivered in a separate PR. This PRD does NOT generate the images. However, it ensures each page's metadata is structured to reference a page-specific OG image path (e.g., `/og/citizen-development.png`) so that when the images land, they are picked up automatically. Pages without a matching image will fall back to `/og/default.png` via the root layout.
- **Fix 06 (llms.txt):** Already shipped in Phase 1 remediation. Verify current content is accurate and update if the site structure has changed since. No major work expected.
- **CSP enforcement:** Industry standard is to ship `Content-Security-Policy-Report-Only` for 1-2 weeks, monitor for violations, then flip to enforcing `Content-Security-Policy`. The `_headers` file will include a comment noting when to flip.

## Open Questions
None — all resolved.

## Scope

### In scope

**Fix 01 — Prevent `.pages.dev` indexation (repo-side)**
- Create `public/_headers` with `X-Robots-Tag: noindex, nofollow` for the preview host
- Document in README.md that `.pages.dev` is QA-only and a Cloudflare dashboard redirect is recommended post-launch

**Fix 02 — Canonical tags on legal pages**
- Add `alternates: { canonical: "/privacy/" }` (and `/terms/`, `/cookies/`) to the three legal page metadata exports
- Add WebPage JSON-LD to each legal page

**Fix 03 — Security & response headers**
- Create `public/_headers` (combined with Fix 01) with all missing security headers applied to `/*`
- Headers: HSTS, X-Frame-Options, Permissions-Policy, Cross-Origin-Opener-Policy, Content-Security-Policy (report-only initially)
- Audit CSP against actual site content (inline scripts for JSON-LD, Google Fonts, any connect targets)

**Fix 04 — Web manifest, security.txt, layout metadata**
- Create `public/site.webmanifest` with PWA metadata referencing icon paths (raster PNGs arriving in a separate images PR)
- Create `public/.well-known/security.txt` per RFC 9116
- Update root metadata in `src/app/layout.tsx` to emit apple-touch-icon, manifest, and theme-color link relations
- Raster icon files (favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png) ship in a separate images PR — NOT in scope here

**Fix 05 — OG image metadata wiring**
- Update each page's metadata to reference a page-specific OG image path (e.g., `/og/citizen-development.png`) instead of the shared `/og/default.png`
- Actual OG image files (PNGs) ship in a separate images PR — NOT generated here
- Pages fall back to `/og/default.png` via root layout until images land

**Fix 06 — llms.txt verification**
- Verify `public/llms.txt` content matches current site structure
- Update if any pages were added or removed since Phase 1

**README documentation**
- Add a "Deployment" section documenting production domain (`alphabyte.ai`), that `.pages.dev` is QA-only, and that a Cloudflare-level redirect is recommended

### Out of scope
- Cloudflare dashboard configuration (bulk redirect rule for `.pages.dev`) — this is an ops task, not a code change
- Raster icon files (favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png) — arriving in a separate images PR
- OG image PNG files — arriving in a separate images PR. This PRD wires up the metadata paths only.
- FAQPage schema on service/tool pages — post-launch backlog (Appendix B item)
- ItemList/CollectionPage schema on hub pages — post-launch backlog
- Trimming over-length meta descriptions (17 titles, 8 descriptions) — post-launch content review
- Expanding thin pages (Housing Services Corp, Contact, Our Work index) — content task
- Auditing `/team/carrie/` single-name convention — verify with team
- Google Search Console setup and sitemap submission — external account task
- Analytics integration — external vendor decision

## Pages & Components

### Creating
- `public/_headers` — Cloudflare Pages custom response headers (security + noindex for preview host)
- `public/site.webmanifest` — Progressive Web App manifest
- `public/.well-known/security.txt` — Security disclosure contact per RFC 9116

### Modifying
- `src/app/layout.tsx` — Add `icons` (apple-touch-icon), `manifest`, and `themeColor` to root metadata export
- `src/app/privacy/page.tsx` — Add `alternates.canonical`, add WebPage JSON-LD
- `src/app/terms/page.tsx` — Add `alternates.canonical`, add WebPage JSON-LD
- `src/app/cookies/page.tsx` — Add `alternates.canonical`, add WebPage JSON-LD
- `README.md` — Add Deployment section documenting production domain and preview host guidance
- All pages with `openGraph.images` referencing `/og/default.png` — Update to page-specific OG image paths (images arrive in separate PR; metadata wiring ships now)
- `public/llms.txt` — Verify and update if needed

### Not modifying
- `next.config.mjs` — No changes needed
- `src/app/sitemap.ts` — Legal pages already included
- `src/app/robots.ts` — Production robots config is correct as-is
- Any page content or copy — this PRD is purely infrastructure/metadata

## Content

### Verbatim copy

**`public/_headers`:**
```
/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Cross-Origin-Opener-Policy: same-origin
  Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'

https://alphabyte-ai.pages.dev/*
  X-Robots-Tag: noindex, nofollow
```

CSP notes for the implementer:
- `'unsafe-inline'` in `script-src` is required because JSON-LD blocks use `dangerouslySetInnerHTML`
- `'unsafe-inline'` in `style-src` is required because Next.js injects inline styles and Tailwind uses inline custom properties
- `https://fonts.googleapis.com` and `https://fonts.gstatic.com` are needed for Google Fonts loaded in the HTML head
- No third-party analytics, tag managers, or external scripts were found in the codebase — CSP can be tight
- `'unsafe-eval'` is NOT included (not needed) — keep it that way
- The site loads fonts locally via `next/font/local` from `public/fonts/`, but the Google Fonts references in `<link>` tags (if any remain from earlier iterations) need the allowlist. Verify at implement time.

**`public/site.webmanifest`:**
```json
{
  "name": "Alphabyte AI",
  "short_name": "Alphabyte",
  "description": "AI consulting for mid-market organizations.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#00ABF0",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

**`public/.well-known/security.txt`:**
```
Contact: mailto:contact@alphabyte.ai
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://alphabyte.ai/.well-known/security.txt
```

### Metadata additions for legal pages

Each legal page gets:
1. `alternates: { canonical: "/<slug>/" }` in the metadata export
2. WebPage JSON-LD block following this pattern:

```typescript
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy", // or Terms of Service, Cookies Policy
  url: "https://alphabyte.ai/privacy/", // matching canonical
  description: "Alphabyte's privacy policy describing how we collect, use, and protect your personal information.",
  isPartOf: {
    "@id": "https://alphabyte.ai/#website",
  },
};
```

### Layout metadata additions

```typescript
// Add to the existing metadata export in src/app/layout.tsx:
icons: {
  icon: [
    { url: "/icon.svg", type: "image/svg+xml" },
  ],
  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",
themeColor: "#00ABF0",
```

### README.md Deployment section addition

```markdown
## Deployment

Production domain: **alphabyte.ai** — DNS managed by Cloudflare.

The Cloudflare Pages preview host (`alphabyte-ai.pages.dev`) remains live after connecting the custom domain. It is intended for QA only — a `X-Robots-Tag: noindex` header is set in `public/_headers` to prevent search engine indexation. For a clean production launch, configure a **301 redirect** from `*.pages.dev` to `alphabyte.ai` at the Cloudflare dashboard level (Rules → Single Redirect or Bulk Redirects).
```

### OG image template specification

Each OG image (1200×630px PNG) follows this layout:
- **Background:** `#0a0a0a` (brand ink)
- **Section eyebrow:** Top-left, `11px` uppercase, `#00ABF0` (Alphabyte Blue), letter-spacing 0.12em. Values: "SERVICES", "TOOLS", "CASE STUDY", "BLOG", "TEAM", "COMPANY" (omit for homepage)
- **Title:** Left-aligned, `48-56px` (scale down for long titles), `#FFFFFF`, Geist Bold, tight tracking (-0.02em), max 3 lines, vertically centred in the remaining space
- **Wordmark:** Bottom-left, "ALPHABYTE" in `12px` uppercase, `#FFFFFF` at 50% opacity, letter-spacing 0.14em
- **Accent:** 4px horizontal line in `#00ABF0` between eyebrow and title

Section-to-eyebrow mapping:
| Route prefix | Eyebrow label |
|---|---|
| `/services/*` | SERVICES |
| `/tools/*` | TOOLS |
| `/our-work/*` | CASE STUDY |
| `/blog/*` | BLOG |
| `/team/*` | TEAM |
| `/about/` | COMPANY |
| `/contact/` | COMPANY |
| `/` (homepage) | _(none)_ |

## Search Intent & SEO
No new routes created. All changes improve existing page signals:
- Canonicals on legal pages prevent signal splitting between preview and production hosts
- Security headers raise Mozilla Observatory score from D/F to A territory
- Per-page OG images improve click-through from social shares and AI citation rendering
- Favicon set ensures brand presence on iOS home screens, Android install prompts, and bookmark bars

## Design Notes
- OG image template follows brand guide §3.0 (colour) and §4.0 (typography). Uses Geist (the web typeface) since `ImageResponse` / `satori` supports it natively.
- Favicon rasters should use the existing `icon.svg` mark on a white or `#00ABF0` background per brand guide §2.0 logo usage rules.
- Web manifest `theme_color` uses `#00ABF0` (Alphabyte Blue) — this colours the mobile browser chrome.

## Motion & Interactivity
None. All changes are headers, metadata, static files, and build-time image generation.

## Acceptance Criteria

### Fix 01 — Preview host noindex
- [ ] `public/_headers` exists and includes `X-Robots-Tag: noindex, nofollow` scoped to `https://alphabyte-ai.pages.dev/*`
- [ ] README.md documents that `.pages.dev` is QA-only and recommends a Cloudflare dashboard redirect

### Fix 02 — Legal page canonicals
- [ ] `/privacy/`, `/terms/`, and `/cookies/` each emit `<link rel="canonical" href="https://alphabyte.ai/{slug}/">` in the rendered HTML
- [ ] Each legal page emits a WebPage JSON-LD block with `name`, `url`, `description`, and `isPartOf` referencing `/#website`
- [ ] Existing `robots: { index: false, follow: true }` is preserved (not overwritten)

### Fix 03 — Security headers
- [ ] `public/_headers` includes all five missing headers applied to `/*`: HSTS, X-Frame-Options, Permissions-Policy, COOP, and CSP
- [ ] CSP is in `Content-Security-Policy-Report-Only` mode (not enforcing)
- [ ] CSP allows: `'self'`, `'unsafe-inline'` for scripts and styles, Google Fonts domains for style/font-src, `data:` and `https:` for img-src
- [ ] CSP does NOT include `'unsafe-eval'`
- [ ] HSTS includes `preload` directive with `max-age=63072000`

### Fix 04 — Manifest, security.txt, layout metadata
- [ ] `public/site.webmanifest` exists with correct PWA metadata and icon path references
- [ ] `public/.well-known/security.txt` exists per RFC 9116 with Contact, Expires, Preferred-Languages, Canonical
- [ ] Root layout metadata emits `<link rel="apple-touch-icon">`, `<link rel="manifest">`, and `<meta name="theme-color">`
- [ ] After build, `/site.webmanifest` and `/.well-known/security.txt` are present in the `out/` directory
- [ ] Icon rasters (favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png) are NOT required in this PR — they arrive in a separate images PR

### Fix 05 — OG image metadata wiring
- [ ] Each page's metadata `openGraph.images[0].url` references a page-specific path (e.g., `/og/citizen-development.png`), not the shared `/og/default.png`
- [ ] Root layout retains `/og/default.png` as the fallback for pages without a specific image
- [ ] OG image PNGs are NOT required in this PR — they arrive in a separate images PR

### Fix 06 — llms.txt verification
- [ ] `public/llms.txt` accurately reflects the current site structure (all services, tools, case studies, blog posts listed)
- [ ] No dead links in `llms.txt` — every URL listed resolves to a real page

### Cross-cutting
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds with no errors
- [ ] No changes to page content, copy, or visual layout
- [ ] No new routes added (all changes are metadata, headers, and static files)

## Implementation Order

Recommended sequence (some fixes can be parallelised):

1. **Fix 01 + Fix 03** — Create `public/_headers` with both security headers and preview noindex (same file, ship together)
2. **Fix 02** — Add canonicals and WebPage schema to legal pages (independent, can parallel with step 1)
3. **Fix 04** — Create manifest, security.txt, update layout metadata (independent, can parallel)
4. **Fix 05** — Update OG image paths in all page metadata exports (independent, can parallel)
5. **Fix 06** — Verify llms.txt (quick check, parallel with anything)

Estimated effort: Fix 01+03 = 30 min, Fix 02 = 20 min, Fix 04 = 30 min, Fix 05 = 1-2 hours (metadata wiring across ~25 page files), Fix 06 = 10 min. Total: ~3 hours.

## Related
- `reqs/alphabyte-seo-fixes.html` — Source audit document with full findings and prompts
- `prds/seo-remediation-phase-1.md` — Previous SEO remediation (Phase 1) that addressed schema, dead links, H1 issues, and created llms.txt
- `.claude/skills/seo/page-checklist.md` — Page-level SEO checklist
- `.claude/skills/seo/structured-data.md` — JSON-LD implementation patterns
- `.claude/skills/seo/metadata-patterns.md` — Metadata and OG tag patterns
- `public/og/README.md` — OG image naming and design conventions

## Notes
- **Static export constraint:** This project uses `output: 'export'` in `next.config.mjs`. The `opengraph-image.tsx` convention (route handlers that generate images at request time) does NOT work in static export mode. OG images must be pre-generated as static PNGs. This PRD only wires metadata paths; images arrive in a separate PR.
- **Images arrive separately.** Both the favicon raster set (Fix 04) and OG image PNGs (Fix 05) are being delivered in another PR. This PRD ships the metadata, manifest, and path references so the HTML is ready when images land. Until then, missing images will 404 — this is acceptable pre-launch.
- **`_headers` file is Cloudflare Pages-specific.** It is only processed by Cloudflare's edge, not by the Next.js dev server. To test headers locally, use `npx wrangler pages dev out/` after a build, or verify after deploying to the preview environment.
- **Google Fonts in CSP:** The root layout loads Geist via `next/font/local` from `public/fonts/`. If Google Fonts `<link>` tags were removed in a previous iteration, the CSP allowlist for `fonts.googleapis.com` and `fonts.gstatic.com` is harmless but unnecessary. Verify at implement time and remove if not needed.
- **HSTS preload is irreversible.** Once submitted to the preload list, the domain must serve HTTPS for at least two years. This is the correct choice for `alphabyte.ai` since it will always be HTTPS.
- **CSP enforcement timeline:** Industry standard is to run `Content-Security-Policy-Report-Only` for 1-2 weeks post-launch, monitor browser console for violations, then flip to enforcing `Content-Security-Policy`. Add a comment in `_headers` noting the flip date target.
- **Phase 1 overlap:** `llms.txt` was already created in Phase 1 (`prds/seo-remediation-phase-1.md`). Fix 06 here is verification only. If the file needs updates, make them, but no major rework expected.

---
*Created: 2026-05-05*
*Last updated: 2026-05-05 (shipped)*
