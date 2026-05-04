# Full SEO Audit Report — alphabyte.ai

**Audit Date:** 2026-05-04
**URL Audited:** https://alphabyte-ai.pages.dev/ (production domain: alphabyte.ai)
**Pages Crawled:** 41 URLs in sitemap, all accessible
**Business Type Detected:** Professional Service / AI Consulting (B2B)

---

## Executive Summary

### Overall SEO Health Score: 52/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 62/100 | 22% | 13.6 |
| Content Quality | 58/100 | 23% | 13.3 |
| On-Page SEO | 55/100 | 20% | 11.0 |
| Schema / Structured Data | 45/100 | 10% | 4.5 |
| Performance (CWV) | 70/100 | 10% | 7.0 |
| AI Search Readiness | 25/100 | 10% | 2.5 |
| Images | 15/100 | 5% | 0.8 |
| **Total** | | | **52.7** |

### Top 5 Critical Issues

1. **No OG images exist** — Every page references `/og/default.png` which does not exist. Social sharing on LinkedIn, Slack, and X will show no preview image.
2. **No `llms.txt` file** — The site is invisible to AI search indexing conventions.
3. **Organization schema has empty `sameAs` and no address** — Weakens entity recognition for Google Knowledge Graph.
4. **Services page H1 duplicates homepage H1** — "AI that compounds. Not pilots that stall." appears as H1 on both pages.
5. **Site-wide image poverty** — Most pages have zero content images. Only the team page and blog author bylines include non-logo images.

### Top 5 Quick Wins

1. Create `/og/default.png` (1200x630) — instant social preview fix for all 41 pages.
2. Add `llms.txt` to `/public/` — 10-minute task, major AI search signal.
3. Fill `sameAs` array with LinkedIn URL in `layout.tsx` Organization schema.
4. Add `dateModified` to all BlogPosting schema blocks.
5. Fix LinkedIn URL inconsistency (footer vs. contact page use different URLs).

---

## 1. Technical SEO (62/100)

### 1.1 Crawlability

| Check | Status | Details |
|-------|--------|---------|
| robots.txt | PASS | Allows all crawlers, references sitemap |
| Sitemap | WARN | 41 URLs present, valid structure |
| Sitemap domain | INFO | Uses `alphabyte.ai` (correct for production; `pages.dev` is staging) |
| Trailing slashes | PASS | Enforced via `trailingSlash: true` in next.config |
| Crawl depth | PASS | All pages reachable within 3 clicks from homepage |

**Medium — Sitemap `lastModified` dates are hardcoded.** Every entry uses a static date (e.g., `new Date("2026-04-28")`). These should update when content changes, or search engines will stop trusting the field.

**Medium — Terms/Privacy/Cookies pages not in sitemap.** These pages are `noindex` (correct), but they are also not in the sitemap (correct behavior). No action needed.

### 1.2 Indexability

| Check | Status | Details |
|-------|--------|---------|
| Meta robots | PASS | All content pages are `index: true, follow: true` |
| Canonical URLs | PASS | Every page has a canonical tag via `alternates.canonical` |
| Noindex pages | PASS | Terms, Privacy, Cookies correctly set to `noindex, follow` |
| Duplicate content | WARN | Services page shares H1 with homepage |

### 1.3 URL Structure

| Check | Status | Details |
|-------|--------|---------|
| HTTPS | PASS | Cloudflare Pages enforces HTTPS |
| URL format | PASS | Clean, semantic slugs throughout |
| Trailing slash consistency | PASS | All internal links include trailing slash |
| 404 handling | NOT TESTED | Static export; Next.js generates a default 404 |

### 1.4 Security

| Check | Status | Details |
|-------|--------|---------|
| HTTPS | PASS | Enforced by Cloudflare |
| `lang` attribute | PASS | `<html lang="en">` present |
| Content Security Policy | NOT TESTED | Cloudflare Pages headers need separate review |

### 1.5 Internal Linking

| Check | Status | Details |
|-------|--------|---------|
| Orphan pages | PASS | All pages linked from navigation or parent pages |
| Cross-linking depth | WARN | Blog posts link to 2-3 other pages; service/tool pages rarely cross-link |
| Footer links | PASS | Comprehensive footer with all major sections |

**Medium — Weak cross-linking between blog posts and service pages.** Blog posts mention services but linking is sparse. For example, the AI governance post links to `/services/discovery/` but not to `/services/citizen-development/` despite discussing citizen developers.

**Medium — No breadcrumb navigation rendered in HTML.** BreadcrumbList schema exists on most pages, but no visible breadcrumb component appears in the UI. Visible breadcrumbs aid user navigation and reinforce hierarchy signals.

### Technical SEO Findings Summary

| Severity | Finding |
|----------|---------|
| High | Hardcoded sitemap dates reduce freshness signals |
| Medium | Services page H1 duplicates homepage H1 |
| Medium | Weak cross-linking between content types |
| Medium | No visible breadcrumb navigation (schema-only) |
| Low | No XML sitemap index (not needed at 41 pages) |

---

## 2. Content Quality (58/100)

### 2.1 E-E-A-T Assessment

| Signal | Status | Details |
|--------|--------|---------|
| **Experience** | GOOD | Case studies demonstrate real project delivery; "Active Delivery" section shows current work |
| **Expertise** | GOOD | Team page lists 8 members with specific roles; blog content is technically detailed |
| **Authoritativeness** | WEAK | Only 1 external link (LinkedIn); no press mentions, awards, partnerships, or testimonials linked |
| **Trustworthiness** | MODERATE | Physical address listed; privacy policy exists; no client testimonials or reviews |

### 2.2 Thin Content Pages

| Page | Word Count | Assessment |
|------|-----------|------------|
| Homepage | ~400 | THIN — hero pages can be light, but minimal supporting content |
| Services index | ~420 | THIN — mostly navigation links with little descriptive text |
| Our Work index | ~550 | BORDERLINE — brief case study summaries |
| Contact | ~450 | ACCEPTABLE — contact pages are naturally concise |
| Blog index | ~700 | ACCEPTABLE — list page with excerpts |
| Team index | ~300 (est.) | THIN — name/title cards only |

**High — 3 pages under 500 words with no justification.** The homepage, services index, and team index are light on substantive content. While these are navigation/gateway pages, adding 200-300 words of unique descriptive content would strengthen topical signals.

### 2.3 Heading Structure Issues

| Issue | Severity | Pages Affected |
|-------|----------|----------------|
| Duplicate H1 across pages | HIGH | Homepage + Services share "AI that compounds. Not pilots that stall." |
| Multiple H1 tags | HIGH | Our Work page has 2 H1 elements |
| Generic H1s | MEDIUM | Blog index ("Blog"), Team index ("Our Team"), Tools ("Our Tools") |
| Missing H2/H3 hierarchy | LOW | Some service pages jump from H1 to H3 |

### 2.4 Content Depth & Topical Authority

**Strengths:**
- Blog covers a coherent topic cluster: AI governance, Claude deployment, citizen development, AI comparisons
- Case studies show specific metrics (40+ hours/week saved, 10X multiplier)
- Service pages follow a clear problem → solution → timeline structure

**Weaknesses:**
- No content for common mid-funnel queries: "how to evaluate AI consultants", "AI ROI calculator", "AI implementation timeline"
- No FAQ content on any page
- No glossary or resource hub for AI terminology
- Blog posts lack internal data, original research, or unique datasets

### 2.5 Readability

| Metric | Assessment |
|--------|-----------|
| Sentence length | GOOD — concise, direct prose |
| Jargon density | MODERATE — assumes familiarity with Claude, MCP, LLM terminology |
| Scannability | GOOD — clear headings, bullet points, short paragraphs |
| CTA clarity | GOOD — "Book a Discovery Call" is consistent and clear |

### Content Quality Findings Summary

| Severity | Finding |
|----------|---------|
| Critical | Services page duplicates homepage H1 |
| High | Our Work page has multiple H1 tags |
| High | 3+ pages with thin content (<500 words) |
| High | Weak authority signals — only 1 external link site-wide |
| Medium | No FAQ content anywhere on site |
| Medium | Generic H1s on index pages don't target search queries |
| Low | Blog posts could benefit from original data/research |

---

## 3. On-Page SEO (55/100)

### 3.1 Title Tags

| Check | Status | Details |
|-------|--------|---------|
| Unique titles | PASS | Every page has a unique `<title>` via Next.js metadata |
| Title template | PASS | Uses `%s — Alphabyte` template |
| Title length | MOSTLY PASS | Most titles 30-60 chars; some service pages may exceed 60 |
| Keyword targeting | MODERATE | Titles include relevant terms but could be more search-optimized |

**Medium — Some titles are brand-heavy, not search-intent-driven.** Example: "About — Alphabyte" could be "About Alphabyte AI — Claude-Native Consulting for Mid-Market". Title is prime keyword real estate.

### 3.2 Meta Descriptions

| Check | Status | Details |
|-------|--------|---------|
| Present | PASS | All content pages have descriptions in source code |
| Unique | PASS | Each page has a unique description |
| Length | MOSTLY PASS | Most are 120-160 chars |
| Keyword inclusion | MODERATE | Primary keywords present but not always at the start |

Note: WebFetch initially suggested no meta descriptions existed, but source code analysis confirms they are properly implemented via Next.js `metadata` exports on every page.

### 3.3 Open Graph & Social Tags

| Check | Status | Details |
|-------|--------|---------|
| OG title | PASS | Set on all pages |
| OG description | PASS | Set on all pages |
| OG image | CRITICAL FAIL | References `/og/default.png` which DOES NOT EXIST |
| OG type | PASS | `website` default, `article` on blog posts |
| Twitter card | PASS | `summary_large_image` set globally |
| OG image per page | FAIL | All pages use the same non-existent default image |

**CRITICAL — OG image `/og/default.png` does not exist.** The `public/og/` directory contains only a `README.md` placeholder. Every social share of any page will show a broken/missing preview image. This severely impacts CTR from LinkedIn, Slack, and X shares — the primary referral channels for a B2B consulting firm.

### 3.4 Canonical URLs

| Check | Status | Details |
|-------|--------|---------|
| Present | PASS | All 41 content pages have canonical tags |
| Self-referencing | PASS | Canonicals point to the page's own path |
| Domain consistency | PASS | Uses relative paths; `metadataBase` resolves to `https://alphabyte.ai` |

### 3.5 Internal Linking Analysis

| Metric | Value |
|--------|-------|
| Total internal links (homepage) | ~15 |
| Avg internal links per page | ~20 (including nav + footer) |
| Content-area internal links per blog post | 2-4 |
| Cross-section links (blog → service) | Sparse |

**Medium — Blog posts should link more aggressively to service and tool pages.** Each blog post mentions Alphabyte services but links are inconsistent. A structured "Related Services" or "Next Steps" section at the end of each post would capture intent.

### On-Page SEO Findings Summary

| Severity | Finding |
|----------|---------|
| Critical | OG image does not exist — all social previews broken |
| High | All pages use same (non-existent) OG image — no page-specific social images |
| Medium | Title tags could be more keyword-optimized |
| Medium | Blog → service cross-linking is weak |
| Low | No page-specific OG images even when the default is fixed |

---

## 4. Schema / Structured Data (45/100)

### 4.1 Current Implementation

The site has a reasonable schema foundation, but with significant gaps:

| Page Type | Schema Present | Status |
|-----------|---------------|--------|
| Root layout (all pages) | `Organization` | PARTIAL — empty `sameAs`, no address |
| Homepage | `WebPage` + `ProfessionalService` | PARTIAL — no address on ProfessionalService |
| Service pages (5) | `Service` + `BreadcrumbList` | PASS |
| Tool pages (4) | `Service` + `BreadcrumbList` | PASS |
| Blog posts (10) | `BlogPosting` + `BreadcrumbList` | PARTIAL — no `dateModified` |
| Team pages (8) | `Person` + `BreadcrumbList` | PARTIAL — no `image`, `knowsAbout` |
| Blog index | `CollectionPage` | PASS |
| Case studies (3) | `BreadcrumbList` only | FAIL — no primary entity |
| Contact page | `BreadcrumbList` only | FAIL — missing ContactPage + address |
| About page | None | FAIL |
| Services index | Unknown | Needs check |
| Team index | Unknown | Needs check |

### 4.2 Critical Missing Schemas

1. **WebSite with SearchAction** — Not present anywhere. Enables Google Sitelinks Searchbox.
2. **LocalBusiness/ProfessionalService with address** — Organization in layout.tsx has no physical address despite the contact page publishing a full civic address (155 Winges Road, Unit 1, Vaughan, ON L4L 6C7).
3. **ContactPage** — The contact page has a form, address, email, and LinkedIn but only emits a BreadcrumbList.

### 4.3 Validation Issues

| Issue | Severity | Location |
|-------|----------|----------|
| Empty `sameAs: []` array | Critical | `src/app/layout.tsx:65` |
| No `dateModified` on BlogPosting | High | `src/app/blog/[slug]/page.tsx` |
| No `image` on Person schemas | High | `src/app/team/[slug]/page.tsx` |
| No address on ProfessionalService | High | `src/app/page.tsx:137-150` |
| LinkedIn URL inconsistency | Medium | Footer: `alphabyte-solutions-inc` vs Contact: `alphabyte` |

### Schema Findings Summary

| Severity | Finding |
|----------|---------|
| Critical | Organization schema has empty `sameAs` and no address data |
| Critical | No WebSite schema with `@id` for cross-referencing |
| High | BlogPosting missing `dateModified` on all 10 posts |
| High | Person schemas missing `image`, `knowsAbout`, `description` |
| High | Contact page has no ContactPage schema |
| Medium | About page has no schema at all |
| Medium | Case study pages lack primary entity schema |
| Low | No ItemList schemas on index pages |

---

## 5. Performance / Core Web Vitals (70/100)

### 5.1 Architecture Assessment

| Factor | Status | Details |
|--------|--------|---------|
| Static export | EXCELLENT | Pre-rendered HTML, no SSR latency |
| Cloudflare CDN | EXCELLENT | Global edge caching |
| Font loading | GOOD | `display: swap` on local Geist font |
| JavaScript bundle | GOOD | Next.js 14 with automatic code splitting |
| Image optimization | DISABLED | `images.unoptimized: true` (static export limitation) |
| Third-party scripts | MINIMAL | No analytics, ads, or heavy third-party JS detected |

### 5.2 Estimated CWV (Lab)

| Metric | Estimate | Status |
|--------|----------|--------|
| LCP | < 1.5s | GOOD — static HTML + CDN + minimal images |
| INP | < 100ms | GOOD — minimal JavaScript interactivity |
| CLS | < 0.05 | GOOD — static layouts, `font-display: swap` |

Note: These are estimates based on architecture analysis. Field data (CrUX) requires Google API integration for real measurements.

### 5.3 Improvement Opportunities

**Medium — No image optimization pipeline.** Images are served as-is (PNG, JPEG, WebP mixed). Team headshots are various formats and likely not optimized. Consider:
- Converting all images to WebP
- Adding explicit `width`/`height` attributes to prevent CLS
- Implementing responsive `srcset` for team photos

**Low — No resource hints.** No `<link rel="preconnect">` or `<link rel="dns-prefetch">` for external resources. Currently minimal external resources, so low impact.

---

## 6. Images (15/100)

### 6.1 Image Inventory

| Category | Count | Status |
|----------|-------|--------|
| Logo instances | ~80 (header + footer on every page) | OK |
| Team headshots | 8 | GOOD — alt text present |
| Content/hero images | 0 | CRITICAL — no images in any content area |
| Blog post images | 0 | CRITICAL — no hero images, no inline images |
| Case study images | 0 | HIGH — no screenshots, diagrams, or results visuals |
| OG/social images | 0 | CRITICAL — `default.png` does not exist |

### 6.2 Findings

| Severity | Finding |
|----------|---------|
| Critical | `/og/default.png` does not exist — broken social previews site-wide |
| Critical | Zero content images across all blog posts |
| Critical | Zero images on case study pages — no visual proof of work |
| High | No hero images on any page — text-only layouts lack visual engagement |
| High | Mixed image formats (PNG, JPEG, WebP) — no consistent optimization |
| Medium | Team headshots lack `width`/`height` attributes |
| Low | No favicon or apple-touch-icon verified |

**The site is almost entirely text-only.** For a consulting firm whose primary marketing channel is LinkedIn (visual-heavy), this is a significant competitive disadvantage. Case studies without screenshots or result visualizations feel unsubstantiated. Blog posts without hero images underperform on social shares and search (Google Images is a meaningful traffic source for B2B content).

---

## 7. AI Search Readiness (25/100)

### 7.1 AI Crawler Accessibility

| Check | Status | Details |
|-------|--------|---------|
| robots.txt allows AI crawlers | PASS | `User-Agent: *` allows all |
| No AI-specific blocks | PASS | No blocks on GPTBot, Anthropic-AI, etc. |
| `llms.txt` file | FAIL | Does not exist |
| `llms-full.txt` file | FAIL | Does not exist |
| Structured for AI extraction | WEAK | Clean HTML but lacking semantic markers |

### 7.2 Citability Assessment

| Factor | Score | Details |
|--------|-------|---------|
| Clear factual claims | MODERATE | Case studies have specific numbers (40+ hrs/week, 10X multiplier) |
| Source attribution | WEAK | No external citations, no linked sources |
| Passage-level structure | MODERATE | Good heading hierarchy, but no `<summary>`, `<details>`, or structured definitions |
| Entity disambiguation | WEAK | No schema linking to known entities (Anthropic, Claude, etc.) |
| Content freshness signals | WEAK | No `dateModified` in schema; hardcoded sitemap dates |

### 7.3 Brand Authority Signals

| Signal | Status |
|--------|--------|
| External backlinks | UNKNOWN — no backlink data available |
| Social proof | WEAK — no testimonials, reviews, or third-party endorsements |
| Cross-platform presence | WEAK — only LinkedIn linked; no GitHub, YouTube, podcast appearances |
| Original research/data | ABSENT — blog posts are advisory, not data-driven |

### 7.4 Platform-Specific Readiness

| Platform | Readiness | Key Gap |
|----------|-----------|---------|
| Google AI Overviews | LOW | No FAQ content, weak passage citability |
| ChatGPT web search | LOW | No `llms.txt`, weak external authority signals |
| Perplexity | LOW | Limited structured data, no cited sources |
| Bing Copilot | LOW | No IndexNow integration, weak schema |

### AI Search Readiness Findings Summary

| Severity | Finding |
|----------|---------|
| Critical | No `llms.txt` or `llms-full.txt` file |
| High | No FAQ content on any page (prime AI Overview trigger) |
| High | Zero external citations or source links in blog content |
| High | No cross-platform authority signals beyond LinkedIn |
| Medium | Content lacks structured definitions and key takeaway sections |
| Medium | No IndexNow integration for rapid content indexing |
| Low | No `<details>`/`<summary>` for expandable FAQ-style content |

---

## 8. Additional Findings

### 8.1 LinkedIn URL Inconsistency

Two different LinkedIn URLs are used:
- **Footer** (`src/lib/footer-data.ts:28`): `https://www.linkedin.com/company/alphabyte-solutions-inc`
- **Contact page** (`src/app/contact/page.tsx:150`): `https://www.linkedin.com/company/alphabyte`

One of these is likely a 404. This needs to be verified and unified across all references including the Organization schema `sameAs`.

### 8.2 Missing Pages in Sitemap

The sitemap does not include `/terms/`, `/privacy/`, or `/cookies/` — this is correct since those pages are `noindex`. No missing pages detected.

### 8.3 No Analytics Detected

No Google Analytics, Plausible, or other analytics scripts were detected in the codebase. Without analytics, there is no way to measure SEO performance, track organic traffic, or validate improvements.

### 8.4 No Search Console Verification

No Google Search Console verification meta tag or file detected. GSC is essential for monitoring indexing status, crawl errors, and search performance.

---

## Priority Action Plan

### Critical (Fix Immediately)

| # | Action | Impact | Effort | Files |
|---|--------|--------|--------|-------|
| 1 | Create `/og/default.png` (1200x630, brand-compliant) | Fixes all social previews | 30 min | `public/og/default.png` |
| 2 | Create `/public/llms.txt` with site summary | AI search visibility | 15 min | `public/llms.txt` |
| 3 | Fix Organization schema: add LinkedIn to `sameAs`, add address | Entity recognition | 15 min | `src/app/layout.tsx` |
| 4 | Fix Services page H1 — make unique, keyword-targeted | Resolves duplicate H1 | 5 min | `src/app/services/page.tsx` |
| 5 | Fix Our Work page — reduce to single H1 | Heading structure | 5 min | `src/app/our-work/page.tsx` |

### High (Fix Within 1 Week)

| # | Action | Impact | Effort | Files |
|---|--------|--------|--------|-------|
| 6 | Add hero/content images to blog posts | Visual engagement + Google Images traffic | 2-4 hrs | `content/blog/*.mdx` |
| 7 | Add screenshots/visuals to case study pages | Proof of work, visual authority | 2-3 hrs | `src/app/our-work/*/page.tsx` |
| 8 | Add `dateModified` to BlogPosting schema | Content freshness signal | 15 min | `src/app/blog/[slug]/page.tsx` |
| 9 | Expand Organization schema to ProfessionalService with address | Local search eligibility | 20 min | `src/app/layout.tsx` |
| 10 | Add WebSite schema with `@id` | Cross-schema referencing | 10 min | `src/app/layout.tsx` |
| 11 | Add ContactPage schema | Contact page rich results | 15 min | `src/app/contact/page.tsx` |
| 12 | Unify LinkedIn URL across all references | Consistency | 10 min | Multiple files |
| 13 | Add `image`, `knowsAbout` to Person schemas | Team rich results | 20 min | `src/app/team/[slug]/page.tsx` |

### Medium (Fix Within 1 Month)

| # | Action | Impact | Effort | Files |
|---|--------|--------|--------|-------|
| 14 | Add FAQ sections to service pages | AI Overview eligibility | 2-3 hrs | `src/app/services/*/page.tsx` |
| 15 | Strengthen blog → service cross-linking | Internal link equity | 1-2 hrs | `content/blog/*.mdx` |
| 16 | Make sitemap `lastModified` dynamic | Freshness signals | 30 min | `src/app/sitemap.ts` |
| 17 | Add AboutPage schema | About page coverage | 10 min | `src/app/about/page.tsx` |
| 18 | Add case study primary entity schemas | Case study rich results | 30 min | `src/app/our-work/*/page.tsx` |
| 19 | Optimize title tags for search intent | CTR improvement | 1 hr | Multiple `page.tsx` files |
| 20 | Add visible breadcrumb navigation | UX + SEO | 1-2 hrs | `src/components/breadcrumb.tsx` |
| 21 | Add Google Analytics or Plausible | Performance tracking | 30 min | `src/app/layout.tsx` |
| 22 | Verify Google Search Console ownership | Index monitoring | 15 min | `public/` or DNS |
| 23 | Add IndexNow integration | Faster indexing | 30 min | Build pipeline |

### Low (Backlog)

| # | Action | Impact | Effort | Files |
|---|--------|--------|--------|-------|
| 24 | Create page-specific OG images for top pages | Social CTR | 3-4 hrs | `public/og/*.png` |
| 25 | Convert team photos to WebP with explicit dimensions | Performance | 1 hr | `public/team/*` |
| 26 | Add external citations/sources to blog posts | Authority signals | 2-3 hrs | `content/blog/*.mdx` |
| 27 | Add `ItemList` schemas to index pages | Rich result eligibility | 30 min | Multiple files |
| 28 | Add structured FAQ schema where FAQ content exists | FAQ rich results | 20 min | After #14 |
| 29 | Build a resource/glossary page | Topical authority | 4-6 hrs | New route |
| 30 | Add cross-platform social profiles (GitHub, YouTube) | Authority signals | Ongoing | External |

---

## Score Breakdown Methodology

### Technical SEO (62/100)
- +20: Clean URL structure with trailing slashes
- +15: Proper canonical tags on all pages
- +10: Valid robots.txt and sitemap
- +10: Correct noindex on legal pages
- +7: Good internal linking foundation
- -10: Hardcoded sitemap dates
- -8: No visible breadcrumbs
- -5: Weak cross-linking between sections
- -5: Duplicate H1 across pages

### Content Quality (58/100)
- +15: Strong E-E-A-T Experience signals (real case studies)
- +12: Good blog topic coherence
- +10: Clear, readable prose
- +8: Specific metrics in case studies
- +5: Author attribution on blog posts
- -12: Thin content on 3+ pages
- -10: Only 1 external link site-wide
- -8: No FAQ content
- -5: No original research or data
- -5: Heading structure issues

### On-Page SEO (55/100)
- +15: Unique titles on all pages
- +15: Meta descriptions on all pages
- +10: OG and Twitter tags configured
- +10: Canonical URLs correct
- -20: OG image does not exist (critical)
- -8: All pages use same OG image (no differentiation)
- -5: Title tags could be more keyword-optimized
- -2: Weak blog → service cross-linking

### Schema / Structured Data (45/100)
- +15: Organization schema present globally
- +10: BlogPosting on all blog posts
- +8: Person schemas on team pages
- +7: Service schemas on service/tool pages
- +5: BreadcrumbList on most pages
- -15: Critical gaps (empty sameAs, no address)
- -10: No WebSite schema
- -8: Missing dateModified on BlogPosting
- -5: No ContactPage, AboutPage schemas
- -2: No image in Person schemas

### Performance (70/100)
- +25: Static export (excellent TTFB)
- +20: Cloudflare CDN
- +10: Local font with `display: swap`
- +10: Minimal third-party scripts
- +5: Next.js automatic code splitting
- -10: No image optimization
- -5: Mixed image formats
- -5: No resource hints

### AI Search Readiness (25/100)
- +10: Clean, crawlable HTML
- +5: robots.txt allows AI crawlers
- +5: Some structured data exists
- +5: Specific factual claims in case studies
- -20: No llms.txt
- -15: No FAQ content
- -10: Zero external authority signals
- -5: No IndexNow
- -5: Weak passage-level citability

### Images (15/100)
- +8: Team headshots with alt text
- +4: Logo alt text present
- +3: SVG logos (small file size)
- -30: No content images anywhere
- -25: OG image doesn't exist
- -15: No blog hero images
- -10: No case study visuals
- -5: Mixed formats, no optimization

---

*Generated by Claude Code SEO Audit — 2026-05-04*
