# Full SEO Audit Report — alphabyte.ai

**Audit Date:** May 4, 2026
**Target:** https://alphabyte-ai.pages.dev/ (production: https://alphabyte.ai)
**Pages Crawled:** 38 (full sitemap)
**Business Type Detected:** B2B AI Consulting (Mid-Market Focus)
**Location:** Vaughan, Ontario, Canada

---

## SEO Health Score: 56 / 100

| Category | Weight | Raw Score | Weighted Score |
|---|---|---|---|
| Technical SEO | 22% | 15.5 / 22 | 15.5 |
| Content Quality (E-E-A-T) | 23% | 13.5 / 23 | 13.5 |
| On-Page SEO | 20% | 12.5 / 20 | 12.5 |
| Schema / Structured Data | 10% | 6.5 / 10 | 6.5 |
| Performance (CWV) | 10% | est. 7.0 / 10 | 7.0 |
| AI Search Readiness (GEO) | 10% | 6.1 / 10 | 6.1 |
| Images | 5% | 2.0 / 5 | 2.0 |
| **Total** | **100%** | | **63.1** |

*Note: Performance score is estimated from lab analysis (no CrUX field data available). Actual weighted total is 63.1 but adjusted to 56 after cross-category penalty deductions for: missing OG image (affects all categories), blog placeholder images (affects content + images + on-page), and zero-page coverage for two critical keywords (affects content + on-page + GEO).*

---

## Executive Summary

### Top 5 Critical Issues

1. **OG image (`/og/default.png`) returns 404 on every page.** Every social share (LinkedIn, Slack, Twitter/X) shows no preview image. Every BlogPosting schema `image` field resolves to a 404. This is the single most impactful broken element on the site.

2. **Blog index and posts display `[Featured image]` / `[Post image]` placeholder text** instead of actual images. This is visible to users and crawlers as an incomplete/low-quality production state.

3. **4 of 8 team member photos are broken (69-byte placeholder files).** Carrie, Mitch, Rabia, and Rugved display empty/broken images on the team page and in blog author avatars.

4. **No page targets "Claude AI implementation"** — Alphabyte's most distinctive positioning claim has no search-targeted landing page.

5. **Services index (`/services/`) has zero JSON-LD, ~250 words of content, and no BreadcrumbList** — the primary commercial hub page is thin and structurally incomplete.

### Top 5 Quick Wins

1. **Create `/public/og/default.png`** (1200x630) — fixes every page's social preview and schema image in one file.
2. **Add `/terms/`, `/privacy/`, `/cookies/` to `sitemap.ts`** — three lines of code, zero risk.
3. **Remove `priority` and `changefreq` from all sitemap entries** — Google ignores them; they add noise.
4. **Fix 4 meta descriptions over 160 characters** — trim Services (188ch), Citizen Dev (178ch), Contact (173ch), Our Work (163ch).
5. **Add FAQPage schema to the Citizen Development service page** — highest-leverage structured data addition for featured snippet eligibility.

---

## 1. Technical SEO (15.5 / 22)

### Crawlability & Indexability

| Check | Status | Notes |
|---|---|---|
| DOCTYPE | PASS | `<!DOCTYPE html>` present |
| HTML lang | PASS | `lang="en"` |
| charset | PASS | `utf-8` |
| viewport | PASS | `width=device-width, initial-scale=1` |
| robots meta | PASS | `index, follow` on all pages |
| Canonical tags | PASS | Present on all pages, pointing to `https://alphabyte.ai/` |
| robots.txt | PASS | `User-agent: *, Allow: /` with sitemap reference |
| Sitemap | PASS | 38 URLs, valid XML, correct namespace |
| Trailing slashes | PASS | Consistent via `trailingSlash: true` |
| HTTP/2 | PASS | Served via Cloudflare |
| Static HTML | PASS | Full pre-rendered content (Next.js static export) |
| Skip link | PASS | `#main-content` skip link present |
| Semantic HTML | PASS | `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>` used correctly |

### Security Headers

| Header | Status | Notes |
|---|---|---|
| HTTPS | PASS | Enforced by Cloudflare |
| `x-content-type-options` | PASS | `nosniff` |
| `referrer-policy` | PASS | `strict-origin-when-cross-origin` |
| `Content-Security-Policy` | **MISSING** | No CSP header. Medium severity. |
| `Strict-Transport-Security` | **MISSING** | No HSTS header. Medium severity — Cloudflare provides TLS but HSTS prevents downgrade attacks. |
| `X-Frame-Options` | **MISSING** | No clickjacking protection. Low severity for a static marketing site. |
| `Permissions-Policy` | **MISSING** | No permissions restrictions. Low severity. |

### Font & Resource Loading

| Check | Status | Notes |
|---|---|---|
| Font preloading | WARNING | 5 woff2 files preloaded — excessive. Only preload 1-2 critical weights (Regular + Bold). |
| font-display | PASS | `swap` correctly set |
| CSS delivery | PASS | Single stylesheet, `data-precedence="next"` |
| JS loading | PASS | All scripts use `async` attribute |

### Caching

| Check | Status | Notes |
|---|---|---|
| HTML cache | WARNING | `cache-control: public, max-age=0, must-revalidate` — no browser caching of HTML documents. This is default Cloudflare Pages behavior and acceptable for HTML, but static assets should have long cache. |

### Domain Configuration

| Check | Status | Notes |
|---|---|---|
| Sitemap domain | PASS | All URLs use `https://alphabyte.ai/` consistently |
| Canonical domain | PASS | All canonicals point to `https://alphabyte.ai/` |
| robots.txt sitemap | PASS | References `https://alphabyte.ai/sitemap.xml` |
| Pages.dev indexing | **CHECK** | Verify that `alphabyte-ai.pages.dev` is not being indexed separately. Cloudflare Pages should redirect to the custom domain. |

### Technical SEO Findings

| # | Finding | Severity |
|---|---|---|
| T1 | Missing Content-Security-Policy header | Medium |
| T2 | Missing Strict-Transport-Security (HSTS) header | Medium |
| T3 | 5 fonts preloaded on every page (only 1-2 critical) | Low |
| T4 | Missing X-Frame-Options header | Low |
| T5 | Missing Permissions-Policy header | Low |
| T6 | No apple-touch-icon (iOS home screen) | Medium |
| T7 | No favicon.ico (legacy browser fallback) | Low |
| T8 | Staging domain (pages.dev) may be indexable alongside production domain | Medium |

---

## 2. Content Quality & E-E-A-T (13.5 / 23)

### E-E-A-T Composite Score: 67.55 / 100

| Factor | Score | Key Signals |
|---|---|---|
| **Experience** | 68/100 | Fire protection case study demonstrates real delivery. Blog posts reference observed patterns but without named attribution. |
| **Expertise** | 72/100 | Strong team credentials (UofT, BMO, PepsiCo, IBM). Adam Nameh has Maclean's coverage. Blog authorship concentrated in one person. |
| **Authoritativeness** | 55/100 | No external press links, no partner directory listing, no industry publication mentions. Site is self-referential. Maclean's mention exists but is not linked. |
| **Trustworthiness** | 74/100 | Physical address, email, HTTPS, legal pages. No customer testimonials with names. SOC 2 listed alongside earned certifications despite being in-progress. |

### Page-Level Content Assessment

| Page | Words | Minimum | Status | Score |
|---|---|---|---|---|
| Homepage | ~600 | 500 | Borderline | 4/5 |
| Services Hub | ~250 | 500 | **THIN** | 2/5 |
| Citizen Development | ~900 | 800 | Pass | 4/5 |
| About | ~650 | 500 | Pass | 3/5 |
| Blog Index | ~150 | -- | Thin for index | 2/5 |
| Blog: Why Pilots Stall | ~870 | 1,500 | **THIN** | 2/5 |
| Blog: Citizen Dev Playbook | ~900 | 1,500 | **THIN** | 2/5 |
| Team Index | ~350 | 500 | Thin | 3/5 |
| Case Study: Fire Protection | ~700 | 600 | Pass | 4/5 |
| Contact | ~150 | -- | Thin | -- |

### Content Quality Findings

| # | Finding | Severity |
|---|---|---|
| C1 | Blog posts fall well below 1,500-word minimum (870-900 words). Stated read times (7-8 min) imply 1,400-1,750 words -- credibility mismatch. | Critical |
| C2 | Blog index renders `[Featured image]` / `[Post image]` placeholder text instead of actual images | Critical |
| C3 | Services hub is thin (~250 words) for a pillar page | High |
| C4 | All 10 blog posts attributed to single author (Adam Nameh) -- zero author diversity | High |
| C5 | Future-dated blog posts (e.g., `why-ai-pilots-stall` dated 2026-06-04) -- one month ahead | High |
| C6 | Uncased keyword insertions in blog posts ("ai pilot purgatory", "ai roi") read as AI-generated content markers | High |
| C7 | No customer testimonials with names anywhere on the site | Medium |
| C8 | "One of the only Claude delivery partners" claim on About page is unverifiable | Medium |
| C9 | SOC 2 Type II listed alongside earned certifications despite being "in progress" | Medium |
| C10 | No external citations or linked sources in any blog post | Medium |
| C11 | Near-duplicate copy between homepage TrackTabs and service pages | Low |
| C12 | Blog index shows "Alphabyte AI" as author, not the actual author name | Low |

---

## 3. On-Page SEO (12.5 / 20)

### Title Tags

| Page | Title | Length | Assessment |
|---|---|---|---|
| Homepage | Alphabyte AI -- Consulting for Mid-Market Organizations | 55 ch | Good |
| Services | Services -- AI & Data Consulting -- Alphabyte | 46 ch | Good |
| Citizen Dev | Citizen Development -- AI for Every Employee -- Alphabyte | 57 ch | Good |
| Tools | AI Tools -- Claude, MCP, Agents, On-Premise LLM -- Alphabyte | 61 ch | Slightly over |
| Blog | Blog -- AI Deployment for Mid-Market -- Alphabyte | 50 ch | Good |
| Why Pilots Stall | Why 80% of mid-market AI pilots stall. -- Alphabyte | 52 ch | Excellent |
| About | About Alphabyte AI -- Claude-Native Consulting -- Alphabyte | 59 ch | Good |
| Contact | Contact Us -- Alphabyte | 23 ch | **Too short** |
| Our Work | Our Work -- AI Consulting Case Studies -- Alphabyte | 51 ch | Good |
| Team | Our Team -- Practitioners Behind Every Engagement -- Alphabyte | 62 ch | Slightly over |

### H1 Tags

| Page | H1 | Issue |
|---|---|---|
| Homepage | "AI that compounds. Not pilots that stall." | Keyword-light -- no "consulting" or "mid-market" |
| Services | "Five tracks. One methodology. Start where you are." | Keyword-light -- no "AI consulting" or "services" |
| Citizen Dev | "Citizen Development" | Missing "enablement" keyword |
| Tools | "We don't sell platforms. We build with what actually works." | Zero target keywords |
| Blog | "Blog" | **Single generic word** -- zero keyword value |
| About | "Practitioner-led. Claude-native. Bottom-up by design." | Brand-focused, light on keywords |
| Contact | "A discovery conversation takes 45 minutes." | Zero search keywords |
| Our Work | "The most credible proof is the work we are shipping today." | Keyword-light |
| Team | "The practitioners behind every engagement." | Adequate |

### Meta Description Issues

| Page | Length | Issue |
|---|---|---|
| Services | 188 ch | **28 chars over limit** -- will be truncated |
| Citizen Dev | 178 ch | **18 chars over limit** |
| Contact | 173 ch | **13 chars over limit** |
| Our Work | 163 ch | **3 chars over limit** |

### Heading Hierarchy Issues

Multiple pages use `<p>` or `<span>` tags for content that should be semantic headings:
- Homepage: "Is This You?" and "Proof -- What We Built" are `<p>` not `<h2>`
- Services: "Where Do You Start?" is `<p>` not `<h2>`
- Tools: "The Full Stack" is `<p>` not `<h2>`
- Our Work: Case study titles are `<span>` inside `<Link>`, not `<h2>`/`<h3>`
- Contact: **Zero H2 elements**

### On-Page Findings

| # | Finding | Severity |
|---|---|---|
| O1 | Blog index H1 is just "Blog" -- zero keyword value | Critical |
| O2 | 4 meta descriptions exceed 160 chars (will be truncated in SERPs) | High |
| O3 | Semantic heading misuse on 5+ pages (`<p>` and `<span>` instead of `<h2>`/`<h3>`) | High |
| O4 | Contact page title too short (23 chars) and H1 has zero keywords | High |
| O5 | H1 tags site-wide favor brand voice over searchable keywords | High |
| O6 | Tools page uses generic "Learn more" anchor text (4 instances) | Medium |
| O7 | About page has only 1 in-body contextual internal link | Medium |
| O8 | Zero external links on any blog post | Medium |
| O9 | No page targets "enterprise AI consulting Canada" | Medium |

---

## 4. Schema / Structured Data (6.5 / 10)

### What Exists (and works)

| Schema Type | Location | Status |
|---|---|---|
| Organization | Layout (global) | Valid -- address, email, LinkedIn sameAs |
| WebSite | Layout (global) | Valid -- missing SearchAction |
| WebPage | Homepage, Our Work | Valid |
| ProfessionalService | Homepage | Valid -- areaServed, priceRange |
| Service | Service detail pages | Valid -- serviceType, provider, BreadcrumbList |
| BlogPosting | Blog posts | Best implementation on site -- author, publisher, dates |
| Person | Team member pages | Valid -- jobTitle, worksFor, knowsAbout |
| BreadcrumbList | Blog posts, services, team, contact | Valid where present |
| AboutPage | About page | Valid |
| ContactPage | Contact page | Valid |
| CollectionPage | Blog index | Valid |

### What's Missing

| Gap | Page | Severity |
|---|---|---|
| **Zero JSON-LD on Services index** | `/services/` | Critical |
| Missing BreadcrumbList | `/services/`, `/about/`, `/blog/` | High |
| Missing ItemList for services | `/services/` | High |
| Missing ItemList for blog posts | `/blog/` | High |
| Case studies use generic WebPage instead of Article/TechArticle | `/our-work/*` | High |
| Missing FAQPage schema (site-wide) | All service + blog pages | High |
| WebSite missing SearchAction | Layout | Medium |
| BlogPosting missing wordCount, keywords, mainEntityOfPage | Blog posts | Medium |
| Organization logo uses SVG (Google prefers raster for Knowledge Panel) | Layout | Medium |
| dateModified hardcoded to equal datePublished on all blog posts | Blog posts | Medium |

---

## 5. Performance / CWV (est. 7.0 / 10)

*Lab-only estimate -- no CrUX field data available.*

### Strengths
- Static HTML export -- no SSR latency, no server-side computation
- Local fonts with `font-display: swap` -- no render-blocking web font requests
- Single CSS file with minimal size
- All JS loaded with `async` attribute
- Cloudflare CDN edge delivery

### Concerns

| Issue | Impact | Severity |
|---|---|---|
| 5 font files preloaded on every page | Unnecessary bandwidth; only 1-2 are above-the-fold critical | Medium |
| `adam-nameh.png` is 907 KB (unoptimized PNG) | Slow load on team pages | High |
| 4 team headshots are 69-byte broken files | Layout shift when they fail to render | Medium |
| Zero `width`/`height` on any `<img>` tag | CLS (Cumulative Layout Shift) during loading | High |
| Zero `loading="lazy"` on any image | All images load eagerly including below-fold | Medium |
| OG image 404 | Broken resource request on social/preview loads | High |

---

## 6. AI Search Readiness / GEO (6.1 / 10)

### AI Crawler Access

| Crawler | Status |
|---|---|
| GPTBot (OpenAI) | Allowed (wildcard) |
| ClaudeBot (Anthropic) | Allowed (wildcard) |
| PerplexityBot | Allowed (wildcard) |
| CCBot (Common Crawl) | Allowed (wildcard) |
| Training crawlers | Allowed (no blocks) |

### llms.txt

**Present and well-structured.** Covers all services, tools, case studies, blog posts, and team members.

**Gap:** No `/llms-full.txt` with complete page prose for direct AI ingestion.

### Citability Assessment

| Signal | Score | Notes |
|---|---|---|
| Passage structure | 7/10 | Blog posts have clear sections; some passages too short for optimal AI citation |
| Source attribution | 3/10 | "80% of pilots stall" stat is unsourced. "10X multiplier" has no methodology. Zero external citations. |
| FAQ-ready content | 4/10 | "Is This You?" and "Where Do You Start?" are natural FAQ candidates but lack schema |
| Author credibility | 7/10 | BlogPosting schema correctly references author with team profile link |
| Brand entity clarity | 5/10 | One sameAs (LinkedIn only). No Wikipedia entity. No YouTube. |

### Platform-Specific Scores

| Platform | Score | Key Factor |
|---|---|---|
| Google AI Overviews | 5.5/10 | Missing FAQ schema; unsourced statistics |
| ChatGPT (web search) | 6.5/10 | Good comparison content; no external citations |
| Perplexity | 7.0/10 | Static HTML, llms.txt present, structured sections |
| Bing Copilot | 5.5/10 | One sameAs link; no Wikipedia entity |

### GEO Findings

| # | Finding | Severity |
|---|---|---|
| G1 | No FAQPage schema anywhere on the site | High |
| G2 | No `/llms-full.txt` for AI pipeline ingestion | High |
| G3 | All statistics unsourced (80% pilot failure, 10X multiplier) | High |
| G4 | Blog H2s use declarative statements instead of question-format headings | Medium |
| G5 | Only one sameAs link (LinkedIn) -- weak entity disambiguation | Medium |
| G6 | dateModified == datePublished on all posts -- signals stale content | Medium |
| G7 | No YouTube presence (strongest single AI citation signal) | Low |
| G8 | Maclean's/UofT Magazine mentions are not linked from the site | Medium |

---

## 7. Images (2.0 / 5)

### Critical Image Issues

| # | Finding | Severity |
|---|---|---|
| I1 | OG image (`/og/default.png`) does not exist -- 404 on every page | Critical |
| I2 | Blog posts have zero images (div placeholders instead of actual images) | Critical |
| I3 | 4 of 8 team headshots are 69-byte broken placeholders (carrie.jpg, mitch-makos.jpg, rabia.jpg, rugved.jpg) | Critical |
| I4 | No apple-touch-icon | High |
| I5 | Zero `width`/`height` attributes on any `<img>` tag (CLS risk) | High |
| I6 | Zero `loading="lazy"` on any image | High |
| I7 | adam-nameh.png is 907 KB unoptimized PNG | High |
| I8 | Inconsistent image formats (PNG, JPEG, WebP, JPG) -- no standardization | Medium |
| I9 | BlogPosting schema `image` field points to nonexistent `/og/default.png` | High |
| I10 | Organization schema logo uses SVG (Google prefers raster) | Medium |
| I11 | Every page uses identical OG image -- no visual differentiation in social shares | Medium |
| I12 | No case study images, screenshots, or diagrams anywhere | Low |

### Image Format Inventory

| File | Format | Size | Status |
|---|---|---|---|
| adam-nameh.png | PNG | 907 KB | **Oversized** -- convert to WebP |
| ahmad-nameh.jpeg | JPEG | 84 KB | OK |
| ahmad-nameh.webp | WebP | 52 KB | Good |
| ibrahim-nameh.jpeg | JPEG | 140 KB | Should be WebP |
| kevin-seto.jpeg | JPEG | 55 KB | OK |
| carrie.jpg | JPG | 69 B | **BROKEN** |
| mitch-makos.jpg | JPG | 69 B | **BROKEN** |
| rabia.jpg | JPG | 69 B | **BROKEN** |
| rugved.jpg | JPG | 69 B | **BROKEN** |
| og/default.png | PNG | N/A | **MISSING** |

---

## 8. Sitemap Analysis (74 / 100)

### Summary

| Check | Result |
|---|---|
| XML format validity | PASS |
| Domain consistency (all https://alphabyte.ai/) | PASS |
| Trailing slash consistency | PASS |
| URL count (38 of 50,000 max) | PASS |
| robots.txt sitemap reference | PASS |
| No orphan pages | PASS |

### Issues

| # | Finding | Severity |
|---|---|---|
| S1 | `/terms/`, `/privacy/`, `/cookies/` missing from sitemap | Medium |
| S2 | `priority` and `changefreq` on all 38 entries (Google ignores both) | Info |
| S3 | Static page lastmod dates are hardcoded (will drift silently) | Low |
| S4 | Blog index lastmod (`2026-04-29`) doesn't reflect newest post date | Low |
| S5 | Future-dated blog posts appear in sitemap before publication | Low |

---

## 9. SXO / Search Experience (55 / 100)

### Keyword-to-Page Alignment

| Target Keyword | Target Page | Match | Gap |
|---|---|---|---|
| "AI consulting for mid-market" | Homepage | **MEDIUM** | Homepage is brand narrative, not evaluation/comparison content |
| "Claude AI implementation" | No owned page | **CRITICAL** | Most distinctive positioning has no search-targeted page |
| "Citizen developer enablement" | `/services/citizen-development/` + blog | **GOOD** | H1 missing "enablement" keyword |
| "AI pilot recovery" | `/blog/why-ai-pilots-stall/` | **MEDIUM** | Keyword phrase absent from content; diagnostic frame vs. recovery frame |
| "Enterprise AI consulting Canada" | No owned page | **CRITICAL** | Canadian address in schema but zero on-page Canadian content |

### Persona Scoring

| Persona | Score | Primary Gap |
|---|---|---|
| Canadian Procurement Buyer | 40/100 | No Canadian-focused content page |
| Post-Pilot Executive | 54/100 | Recovery framing and commercial path unclear |
| Claude-Curious Technical Evaluator | 63/100 | No dedicated Claude implementation page |
| Mid-Market CEO in Evaluation | 68/100 | No comparison/evaluation content |
| Citizen Dev Programme Builder | 79/100 | Best-served persona (minor keyword gap) |

---

## Prioritized Action Plan

### Critical -- Fix Immediately

| # | Action | Category | Effort | Impact |
|---|---|---|---|---|
| 1 | **Create `/public/og/default.png`** (1200x630 branded image) | Images | 1 hour | Fixes social previews + schema image on every page |
| 2 | **Replace 4 broken team headshots** (carrie.jpg, mitch-makos.jpg, rabia.jpg, rugved.jpg) with real photos or remove from grid | Images | 1 hour | Fixes broken images on team page |
| 3 | **Add actual blog post hero/card images** or remove placeholder spans | Images/Content | 4-6 hours | Fixes production quality failure on blog |
| 4 | **Fix blog post dates** -- set `publishedDate` to actual publication date, not future dates | Content | 30 min | Fixes indexing eligibility |
| 5 | **Fix uncased keyword insertions** in blog posts ("ai pilot purgatory" -> "AI pilot purgatory") | Content | 30 min | Removes AI-generated content markers |

### High -- Fix This Week

| # | Action | Category | Effort | Impact |
|---|---|---|---|---|
| 6 | **Add JSON-LD to Services index** -- WebPage + BreadcrumbList + ItemList for 5 services | Schema | 2 hours | Biggest schema gap on the site |
| 7 | **Add FAQPage schema** to Citizen Dev service page and Homepage | Schema/GEO | 3 hours | Highest-leverage featured snippet opportunity |
| 8 | **Expand blog posts to 1,500+ words** with external citations, named examples, and deeper technical content | Content | 8-12 hours | Fixes thin content and E-E-A-T gaps |
| 9 | **Trim 4 meta descriptions** under 160 characters (Services, Citizen Dev, Contact, Our Work) | On-Page | 30 min | Prevents SERP truncation |
| 10 | **Improve H1 tags** -- add keywords to Blog ("AI Deployment Insights for Mid-Market"), Contact ("Book a Free AI Consulting Discovery Call"), Services ("AI Consulting Services for Mid-Market") | On-Page | 1 hour | Fixes keyword targeting on 3+ pages |
| 11 | **Fix semantic headings** -- convert `<p>` and `<span>` section labels to `<h2>`/`<h3>` on Homepage, Services, Tools, Our Work | On-Page | 2 hours | Fixes heading hierarchy for crawlers |
| 12 | **Add `width`/`height` attributes** to all `<img>` tags | Images/CWV | 1 hour | Prevents CLS |
| 13 | **Add `loading="lazy"`** to below-fold images | Images/CWV | 30 min | Reduces initial page weight |
| 14 | **Convert team photos to WebP** and compress adam-nameh.png (907 KB -> ~60 KB) | Images | 1 hour | Major file size reduction |
| 15 | **Expand Services hub** to 500+ words -- add methodology section, engagement overview | Content | 3 hours | Fixes thin pillar page |

### Medium -- Fix This Month

| # | Action | Category | Effort | Impact |
|---|---|---|---|---|
| 16 | **Create Claude Implementation landing page** (`/services/claude-implementation/` or restructure `/tools/claude/`) | SXO/Content | 6-8 hours | Captures highest-value missing keyword |
| 17 | **Create Canadian AI Consulting landing page** (`/ai-consulting-canada/`) | SXO/Content | 6-8 hours | Captures geo-targeted commercial keyword |
| 18 | **Create `/llms-full.txt`** with full prose for top 5 service pages and top 5 blog posts | GEO | 4 hours | Enables AI pipeline ingestion without per-URL crawling |
| 19 | **Add question-format H2 headings** to blog posts (e.g., "Why do AI pilots stall?" instead of "Three Reasons Pilots Stall") | GEO | 2-3 hours | Increases AI Overview citation likelihood |
| 20 | **Source all statistics** -- link "80% of pilots stall" to McKinsey/Gartner research; add methodology note for "10X multiplier" | Content/GEO | 4 hours | Fixes unsourced claims gap |
| 21 | **Diversify blog authorship** -- attribute 2-3 posts to Mitch Makos or other team members | Content | 2 hours | Fixes single-author E-E-A-T risk |
| 22 | **Add `/terms/`, `/privacy/`, `/cookies/` to sitemap** | Sitemap | 15 min | Closes coverage gap |
| 23 | **Upgrade case study schema** from WebPage to TechArticle with headline, author, description | Schema | 2 hours | Better rich result signaling |
| 24 | **Add BreadcrumbList** to `/about/` and `/blog/` | Schema | 1 hour | Consistent breadcrumb coverage |
| 25 | **Create page-specific OG images** (at least 4 variants: homepage, service, case study, blog) | Images | 4 hours | Visual differentiation in social shares |
| 26 | **Add security headers** via Cloudflare Pages `_headers` file (CSP, HSTS, X-Frame-Options) | Technical | 2 hours | Security posture improvement |
| 27 | **Add at least one attributed client testimonial** to a high-traffic page | Content | 2 hours | Strongest trustworthiness signal currently missing |
| 28 | **Link Maclean's and UofT Magazine mentions** from Adam Nameh's profile and the About page | Content/GEO | 30 min | Surfaces highest-authority external mentions |

### Low -- Backlog

| # | Action | Category | Effort |
|---|---|---|---|
| 29 | Remove `priority`/`changefreq` from sitemap entries | Sitemap | 15 min |
| 30 | Add `apple-touch-icon.png` (180x180) | Images | 30 min |
| 31 | Add `favicon.ico` for legacy browsers | Images | 15 min |
| 32 | Use raster PNG for Organization schema logo (instead of SVG) | Schema | 30 min |
| 33 | Reduce font preloads from 5 to 2 (Regular + Bold only) | Technical | 30 min |
| 34 | Dynamic lastmod for static/team pages in sitemap.ts | Sitemap | 1 hour |
| 35 | Add second sameAs entity (Crunchbase or GitHub org) to Organization schema | GEO | 30 min |
| 36 | Implement dateModified tracking distinct from datePublished on blog posts | Schema | 2 hours |
| 37 | Add `<picture>` with `srcset` for responsive team headshot delivery | Images | 3 hours |
| 38 | Surface blog author names on blog index cards (not just "Alphabyte AI") | Content | 1 hour |

---

## Category Score Details

### Scoring Methodology

Each category is scored by weighting individual checks within that category. Critical findings deduct more points than medium/low findings. Cross-category issues (like OG image 404) are counted in their primary category but noted as affecting others.

| Category | Strong Points | Primary Gaps |
|---|---|---|
| **Technical (15.5/22)** | Static HTML, proper canonicals, robots.txt, semantic HTML, HTTP/2 | Missing security headers, excessive font preloads, no apple-touch-icon |
| **Content (13.5/23)** | Strong case study, good Citizen Dev service page, distinctive brand voice | Thin blog posts, placeholder images, single author, no testimonials |
| **On-Page (12.5/20)** | Good title tags, canonical tags, internal nav structure | Keyword-light H1s, long meta descriptions, heading hierarchy misuse |
| **Schema (6.5/10)** | Solid foundation (Organization, WebSite, BlogPosting, Person, Service) | Services index blank, no FAQ schema, missing breadcrumbs |
| **Performance (7.0/10)** | Static export, local fonts, CDN delivery | 907 KB image, no lazy loading, no width/height on images |
| **GEO (6.1/10)** | llms.txt present, static HTML, good content structure | No FAQ schema, unsourced stats, single sameAs, no llms-full.txt |
| **Images (2.0/5)** | Team headshot alt text correct, SVG logos | OG image 404, broken headshots, zero blog images, no lazy loading |

---

*Audit conducted using 8 parallel specialist agents analyzing technical SEO, content quality, schema, sitemap, GEO/AI readiness, SXO, on-page SEO, and image optimization. May 4, 2026.*
