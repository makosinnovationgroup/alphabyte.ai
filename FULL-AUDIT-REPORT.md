# Full SEO Audit Report — alphabyte.ai

**Audit Date:** 2026-05-07 (fifth pass)
**Initial Audit:** 2026-05-04 (score: 52/100)
**Previous Audit:** 2026-05-06 (score: 78/100)
**URL Audited:** https://alphabyte.ai/
**Pages Crawled:** 50 (all pages in sitemap)
**Business Type Detected:** B2B Professional Services — AI & Data Consulting

---

## Executive Summary

### Overall SEO Health Score: 81 / 100

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 88 / 100 | 22% | 19.4 |
| Content Quality | 82 / 100 | 23% | 18.9 |
| On-Page SEO | 85 / 100 | 20% | 17.0 |
| Schema / Structured Data | 90 / 100 | 10% | 9.0 |
| Performance (CWV) | 55 / 100 | 10% | 5.5 |
| AI Search Readiness | 88 / 100 | 10% | 8.8 |
| Images | 40 / 100 | 5% | 2.0 |
| **Total** | | | **80.6 → 81** |

**Score progression:** 52 → 78 → 81. The remaining gap is dominated by image optimization and performance — fixing Critical items below would push the score to 90+.

### Top 5 Critical Issues

1. **Blog hero images are 1.1–1.3 MB each** — 10 images at ~12 MB total. Severe LCP impact.
2. **Team headshot photos are 888 KB–2.1 MB PNGs** — 8 photos at ~13 MB total, not converted to WebP.
3. **Single default OG image for 40+ pages** — Every non-blog page shares `/og/default.png`. Social sharing previews are undifferentiated.
4. **OG image is 948 KB PNG** — Should be <300 KB. Slows social preview rendering.
5. **5 unused Geist font files in `/public/fonts/`** — ~220 KB of dead weight shipped to production.

### Top 5 Quick Wins

1. **Compress blog hero images** to <200 KB each (save ~10 MB site-wide).
2. **Convert team PNGs to WebP** and resize to max 600px width (save ~12 MB).
3. **Generate page-specific OG images** for service, tool, and case study pages.
4. **Remove unused Geist-*.woff2 files** from `/public/fonts/`.
5. **Add `modifiedDate` to blog frontmatter** where missing — helps freshness signals.

---

## Technical SEO — 88/100

### Crawlability — Excellent

- **robots.txt**: Well-configured. Allows all crawlers including AI bots (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Amazonbot).
- **Sitemap**: Valid XML at `/sitemap.xml` with 50 URLs. Auto-generated from content directories. All pages include `lastmod` dates.
- **Trailing slashes**: Consistently enforced via `trailingSlash: true` in Next.js config.
- **Internal linking**: Strong sitewide navigation. Footer includes full service/tool/case study links. Blog posts cross-link to services and other posts.

### Indexability — Good

- **Canonical tags**: Present on ALL 50 pages (confirmed in source code). Blog posts and team pages set via `generateMetadata()`, static pages via `export const metadata`.
- **Meta robots**: Global `index: true, follow: true` set in root layout.
- **`lang` attribute**: `<html lang="en">` set correctly.
- **Status codes**: All crawled pages returned successfully (no 404s detected in sitemap URLs).

### Security

- **HTTPS**: Enforced sitewide.
- **Static export on Cloudflare Pages**: Minimal attack surface. No SSR, no API routes, no middleware.

### Issues Found

| Issue | Severity | Details |
|---|---|---|
| No `_headers` file for Cloudflare | Medium | Missing security headers (CSP, X-Frame-Options, Permissions-Policy). Should add a `public/_headers` file for Cloudflare Pages. |
| Unused font files shipped | Low | 5 Geist-*.woff2 files (~220 KB) in `/public/fonts/` are never loaded. The CSS variable `--font-geist` is assigned to Aeonik fonts. |
| Static `lastmod` dates | Low | Sitemap `lastmod` dates are hardcoded strings rather than derived from git or file mtime. Some may drift from actual content update dates. |

---

## Content Quality — 82/100

### E-E-A-T Assessment — Strong

- **Experience**: Case studies demonstrate real client work with specific outcomes (compliance agent, executive productivity suite, housing assessment).
- **Expertise**: Team members have named credentials (University of Toronto, BMO Financial Group). Detailed career timelines and expertise areas.
- **Authoritativeness**: Blog posts cite external sources (McKinsey, Deloitte, Anthropic docs). Author bios link to team profile pages. LinkedIn company page linked.
- **Trustworthiness**: Physical office address in Vaughan, Ontario. Contact form with company info fields. Legal pages (terms, privacy, cookies) present.

### Content Depth

| Page Type | Count | Avg Word Count | Assessment |
|---|---|---|---|
| Blog posts | 10 | ~1,800 | Good depth — long-form with TOC, FAQ, cross-links |
| Service pages | 5 | ~1,100 | Good — includes timeline, deliverables, fit/not-fit criteria, FAQ |
| Tool pages | 4 | ~500 | Thin — could benefit from more detailed content |
| Case studies | 3 | ~650 | Adequate but light — more metrics and outcomes would strengthen |
| Team profiles | 8 | ~800 | Good — structured with credentials, timeline, expertise, articles |

### Content Strategy

- **Blog cadence**: 10 articles published in April–May 2026. Strong initial library.
- **Topic clustering**: Good coverage of AI consulting topics (governance, readiness, citizen development, Claude comparisons).
- **Comparison content**: 3 "vs" articles targeting competitive keywords (Claude vs ChatGPT, Claude vs Copilot, Private LLM vs Claude Enterprise).
- **FAQ sections**: Present on blog posts and service pages — eligible for FAQ rich results.

### Issues Found

| Issue | Severity | Details |
|---|---|---|
| Tool pages are thin | Medium | 4 tool pages average ~500 words. Add use cases, configuration examples, integration details. |
| Case studies lack hard metrics | Medium | No specific numbers (e.g., "reduced lookup time by X%", "saved Y hours/week"). Quantifiable outcomes strengthen E-E-A-T. |
| No content freshness signals | Low | Blog posts have `publishedDate` but many lack `modifiedDate` in frontmatter. |

---

## On-Page SEO — 85/100

### Title Tags — Good

- All 50 pages have title tags via Next.js `metadata` exports.
- Template pattern: `"%s — Alphabyte"` provides consistent branding.
- Titles are descriptive and include primary keywords.
- Homepage title: "Alphabyte AI — Consulting for Mid-Market Organizations" — good keyword targeting.

### Meta Descriptions — Good

- All pages have meta descriptions.
- Blog post descriptions generated from `excerpt` frontmatter.
- Descriptions are generally 120–160 characters and descriptive.

### Heading Structure — Good

- Every page has a single H1.
- Heading hierarchy is logical (H1 → H2 → H3).
- Blog posts use proper H2/H3 nesting for article sections.
- H1 text is distinct from title tags on most pages, providing keyword variation.

### Internal Linking — Strong

- Global navigation links to all 7 main sections.
- Footer includes 23+ internal links covering all page categories.
- Blog posts contain 6–8 contextual internal links each.
- Service pages cross-link to related tools and case studies.
- Breadcrumb navigation on all detail pages.

### Issues Found

| Issue | Severity | Details |
|---|---|---|
| Some H1s could be more keyword-rich | Low | e.g., Tools page H1 "Our Tools" could target "AI Tools" for better search alignment. About page H1 is a tagline, not a keyword phrase. |
| Tools page may have dual H1 | Low | WebFetch detected two H1-level elements on /tools/. Verify only one `<h1>` tag exists in the HTML output. |

---

## Schema / Structured Data — 90/100

### Implementation — Excellent

Every page on the site has JSON-LD structured data. Coverage by type:

| Schema Type | Where Used | Status |
|---|---|---|
| Organization | Root layout (global) | ✅ Complete — name, legalName, url, logo, address, contactPoint, sameAs |
| WebSite | Root layout (global) | ✅ Complete — linked to Organization |
| WebPage | Homepage, case studies | ✅ |
| ProfessionalService | Homepage | ✅ Good for local/service discovery |
| Service | All 5 service pages | ✅ With provider, serviceType, areaServed |
| BlogPosting | All 10 blog posts | ✅ Complete — headline, author, publisher, datePublished, dateModified, image |
| FAQPage | Blog posts with FAQ sections | ✅ Conditional — only emitted when FAQ data exists |
| BreadcrumbList | Blog posts, team profiles, case studies | ✅ Three-level breadcrumbs |
| Person | All 8 team member pages | ✅ With jobTitle, worksFor, knowsAbout, sameAs |

### Issues Found

| Issue | Severity | Details |
|---|---|---|
| No `SiteNavigationElement` schema | Low | Could add for global nav to help AI search engines understand site structure. |
| Case studies use generic `WebPage` type | Low | Consider `CreativeWork` or a more specific type to distinguish case studies. |
| Organization missing `telephone` | Low | Address present but no phone number in schema or on site. |
| No `HowTo` schema on service pages | Low | Service pages with "What the first 30 days look like" could use `HowTo`. |

---

## Performance (CWV) — 55/100

### Estimated Impact

This score is based on resource analysis (no CrUX field data available).

| Metric | Risk Level | Analysis |
|---|---|---|
| LCP | High risk | Blog hero images (1.1–1.3 MB) and team photos (up to 2.1 MB) will significantly delay LCP on slower connections. |
| INP | Low risk | Static site with minimal JavaScript. Discovery call modal is the main interactive element. |
| CLS | Low risk | Static layout, `font-display: swap` configured. |

### Resource Analysis

| Resource Type | Count | Total Size | Issue |
|---|---|---|---|
| Blog hero images (WebP) | 10 | ~12 MB | 1.1–1.3 MB each — should be <200 KB |
| Team headshots (PNG) | 8 | ~13 MB | 888 KB–2.1 MB each — should be WebP <150 KB |
| OG default image (PNG) | 1 | 948 KB | Should be <300 KB |
| Aeonik fonts (WOFF2) | 5 | ~224 KB | Reasonable — `font-display: swap` configured |
| Unused Geist fonts (WOFF2) | 5 | ~220 KB | Dead weight — remove from `/public/fonts/` |

---

## AI Search Readiness — 88/100

### AI Crawler Access — Excellent

- **robots.txt explicitly allows**: GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Amazonbot.
- **No blocking rules** for any AI crawlers.
- Best-in-class configuration for AI search visibility.

### llms.txt — Excellent

- **`/llms.txt` exists** with comprehensive 49-line site map.
- Covers: Services (5), Tools (4), Case Studies (3), Blog (10), Team (8), Company pages.
- Well-structured with descriptive one-liners for each URL.
- This is rare and gives the site a meaningful advantage for LLM-based search.

### Citability Assessment

| Signal | Status | Notes |
|---|---|---|
| Clear, factual claims | ✅ | Blog posts cite external sources (McKinsey, Deloitte). |
| Structured content | ✅ | H2/H3 hierarchy, FAQ sections, table of contents. |
| Author attribution | ✅ | Named authors with credentials and profile links. |
| Date signals | ✅ | Published dates on all blog posts. `datePublished` in schema. |
| Original data/insights | ⚠️ | Limited original research. Case studies lack quantifiable metrics. |
| Entity disambiguation | ✅ | Organization schema with `legalName`, `sameAs`. Person schema for team. |

---

## Images — 40/100

### OG / Social Images

| Issue | Severity | Details |
|---|---|---|
| Single OG image for 40+ pages | High | Only blog posts have unique OG images. All other pages share `/og/default.png`. |
| OG image is 948 KB PNG | High | Should be <300 KB. |
| No unique OG images for services/tools | High | Each page should have a distinct social preview. |

### Content Images

| Issue | Severity | Details |
|---|---|---|
| Blog hero images oversized | Critical | 1.1–1.3 MB each. Target <200 KB. |
| Team photos are uncompressed PNGs | Critical | 888 KB–2.1 MB. Convert to WebP, resize to max 600x600. |
| Alt text | ✅ | Present on logos, blog heroes, team photos, case study figures. |

### Optimization Savings Estimate

| Image Set | Current | Target | Savings |
|---|---|---|---|
| Blog heroes (10) | ~12 MB | ~2 MB | ~10 MB |
| Team photos (8) | ~13 MB | ~1 MB | ~12 MB |
| OG default (1) | 948 KB | ~200 KB | ~750 KB |
| Unused fonts (5) | ~220 KB | 0 | ~220 KB |
| **Total** | | | **~23 MB** |

---

## What Improved Since Last Audit (52 → 78 → 81)

- ✅ All 50 pages now have metadata (title, description, OG, Twitter)
- ✅ Canonical tags added to every page
- ✅ JSON-LD structured data on every page (9 schema types)
- ✅ Blog posts have BlogPosting + FAQPage + BreadcrumbList schema
- ✅ Team members have Person schema with knowsAbout, sameAs
- ✅ robots.txt allows all AI crawlers
- ✅ llms.txt file created with comprehensive site index
- ✅ Sitemap auto-generated with all 50 URLs
- ✅ Blog content library of 10 articles with strong internal linking

## What Remains (81 → 90+)

The path to 90+ is almost entirely **image optimization**:

1. Compress blog hero images → Performance jumps from 55 to ~70
2. Convert team PNGs to WebP → Performance jumps to ~80
3. Generate page-specific OG images → Images score jumps from 40 to ~70
4. Add security headers → Technical goes from 88 to ~92
5. Expand tool page content → Content goes from 82 to ~87

These 5 items alone would bring the overall score to approximately **90/100**.
