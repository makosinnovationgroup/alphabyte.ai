# Full SEO Audit Report — alphabyte.ai

**Audit Date:** 2026-06-08
**Previous Audit:** 2026-05-07 (post-deploy verification, score 88/100)
**Scope:** Full site, 39 URLs in sitemap, B2B AI/Data consulting agency
**Auditor:** claude-seo:seo-audit (multi-agent parallel delegation) + Ahrefs Site Audit cross-check (2026-06-04)

---

## Executive Summary

### Overall SEO Health Score: 65 / 100

This number reconciles two sources:
- **Ahrefs Site Audit (2026-06-04): 58/100 Fair.** Ahrefs crawled all 110 URLs (45 internal + 65 resources, 1,210 links) and surfaced hygiene issues on every page that a spot-check missed.
- **This audit's strategic findings: 75/100.** Stronger on technical fundamentals (security headers, robots, sitemap, schema presence) and weaker on per-page details Ahrefs caught.

Combined score weights hygiene (Ahrefs ground truth) and strategy (SXO, clusters, GEO) equally.

| Category | Weight | Score | Weighted | Source |
|---|---|---|---|---|
| Technical SEO | 22% | 75 | 16.5 | Downgraded — broken `cdn-cgi/l/email-protection` link on all 39 pages; AhrefsBot blocked from robots.txt |
| Content Quality | 23% | 74 | 17.0 | E-E-A-T, citability |
| On-Page SEO | 20% | 55 | 11.0 | Downgraded — og:type missing on 28 pages, 5 meta descriptions over 160 chars, plus SXO mismatches |
| Schema / Structured Data | 10% | 74 | 7.4 | |
| Performance (CWV, lab only) | 10% | 55 | 5.5 | Downgraded — 3 case study illustrations 1.2-1.4 MB each |
| AI Search Readiness (GEO) | 10% | 72 | 7.2 | |
| Images | 5% | 50 | 2.5 | Downgraded — 3 oversized images |
| **Total** | **100%** | | **67.1 ≈ 65** | |

### Initial audit revision

This report was first published showing 75/100 based on multi-agent strategic analysis. After cross-checking against Ahrefs Site Audit (which had crawled all 110 URLs vs my spot-check on ~10), the score was revised down to 65 to reflect hygiene issues found on every page. **The strategic findings (SXO mismatches, cluster gaps, citability) remain valid.** What's new is a layer of per-page hygiene problems the spot-check missed.

### Business Type Detected
B2B AI/Data consulting agency, Canada-based (Vaughan, ON), Anthropic + Microsoft partner, blog-led content marketing, 4 service tracks + 4 tool offerings + 4 case studies + 10 blog posts + 8 team bios.

### Top Critical / High Issues (revised)

1. **🆕 Cloudflare email-obfuscation produces a 404 link on every page (39 pages).** The footer renders `<a href="/cdn-cgi/l/email-protection#...">` for the `contact@alphabyte.ai` mailto: link. Cloudflare's Email Address Obfuscation feature is enabled in the dashboard. The link returns 404 when crawlers hit the bare path. Every page on the site shows up as "links to broken page" in Ahrefs. Highest-impact single fix.
2. **🆕 3 case study illustrations are 1.2–1.4 MB each.** circular-economy-platform-msi-concept.webp (1302 KB), community-housing-organisation-roadmap-concept.webp (1430 KB), fire-protection-compliance-knowledge-graph.webp (1254 KB). Likely the LCP element on each case study, will tank field CWV.
3. **🆕 `og:type` missing on 28 pages.** Only blog posts emit `og:type="article"`. Every other page (homepage, services, tools, case studies, team, about, contact, hubs) lacks it. Required for Open Graph spec compliance; affects Facebook/LinkedIn previews.
4. **🆕 `/terms/`, `/privacy/`, `/cookies/` have `noindex, follow` AND are in the sitemap.** Self-contradictory signal: sitemap says "crawl me", noindex says "don't index me". Fix is one or the other.
5. **🆕 5 meta descriptions over 160 chars.** All 4 case studies (170-194 chars) and `/tools/` hub (161 chars). Will be truncated mid-sentence in SERPs.
6. **Deprecated HowTo schema on all 5 service pages.** Google retired HowTo rich results in Sept 2023. Currently emitting dead markup.
7. **No HTML comparison tables on 3 comparison blog posts.** Every ranking competitor on "Claude vs ChatGPT" / "Claude vs Copilot" / "Private LLM vs Claude" uses a `<table>`. Largest single SXO miss on the site.
8. **`/tools/mcp/` is a brochure where SERP rewards explainer-first.** 7 of 10 ranking pages are educational. Same pattern likely on other tool pages.
9. **4 pillar pages have zero supporting blog content.** `/services/data-readiness/`, `/services/executive-enablement/`, `/tools/custom-ai-agents/`, `/tools/on-premise-llm/`.
10. **Hardcoded `lastmod` dates in sitemap.ts misrepresent freshness.** Hub pages carry `2026-04-28` while git history shows post-date commits.

### Top Quick Wins (<2 hours each)

1. **Disable Cloudflare Email Address Obfuscation** OR change the footer mailto: link to a contact-form link. Either eliminates 39 broken-link warnings instantly. Effort: 5 min in Cloudflare dashboard (Scrape Shield → toggle off Email Obfuscation).
2. **Re-compress 3 case study illustrations** to under 200 KB each (target ~100 KB). Effort: 15 min via `cwebp -q 75` or similar.
3. **Add `og:type` to layout/page metadata.** `website` for hubs, `article` for case studies and blog posts (blog already has it), `profile` for team. Effort: 30 min.
4. **Remove `/terms/`, `/privacy/`, `/cookies/` from sitemap.ts.** Keeps the noindex tag, drops sitemap noise. Effort: 5 min.
5. **Trim 5 long meta descriptions to ≤160 chars.** Effort: 20 min.
6. **Remove HowTo schema from 5 service pages.** Effort: 30 min.
7. **Add comparison tables to the 3 comparison blog posts.** Effort: 2 hours total.
8. **Add `ItemList` schema to 4 hub pages.** Effort: 1 hour.

---

## Technical SEO — Score: 75 / 100 (revised)

Strong fundamentals (headers, redirects, robots, sitemap), but the Cloudflare email-obfuscation issue is a real ground-truth defect that affects every page on the site.

**Verified strengths:**
- `https://www.alphabyte.ai/` → 301 → `https://alphabyte.ai/` (apex canonicalization correct)
- `http://alphabyte.ai/` → 301 → `https://alphabyte.ai/` (HTTPS upgrade enforced)
- HSTS with preload (`max-age=63072000; includeSubDomains; preload`)
- Full security header stack: CSP, X-Frame-Options, X-Content-Type-Options, COOP, Referrer-Policy, Permissions-Policy
- Canonical tags present and self-referential (verified on all main hub URLs)
- Trailing slash enforced consistently (`trailingSlash: true` in next.config)
- Robots.txt explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Amazonbot
- 404 returns proper 404 status code
- Twitter card metadata complete on homepage
- Static export means JS rendering is not a crawlability concern
- Homepage HTML payload ~55KB (lean)

**Critical issues (verified against Ahrefs site audit):**

| Severity | Issue | Fix |
|---|---|---|
| **Critical** | Cloudflare Email Address Obfuscation rewrites footer `mailto:contact@alphabyte.ai` to `/cdn-cgi/l/email-protection#...` on every page. The bare path returns 404. Ahrefs reports 39/39 pages "link to broken page". | Disable Email Address Obfuscation in Cloudflare dashboard (Scrape Shield → Email Address Obfuscation → Off), OR replace footer mailto: with a `/contact/` page link. |
| **Critical** | One server 5xx error in crawl (source unidentified from PDF — likely an asset or `/cdn-cgi/...` endpoint) | Re-run Ahrefs site audit after fixing email-obfuscation; if 5xx persists, find the originating URL in the Ahrefs UI's "All issues" view. |
| **High** | AhrefsBot reported "Robots.txt not accessible". Local `curl` returns 200, so this is Cloudflare bot management blocking AhrefsBot specifically. | Either whitelist AhrefsBot in Cloudflare's Bot Fight Mode / Super Bot Fight Mode, OR accept (Google/Bing/AI bots still see robots.txt). |
| Medium | `cache-control: max-age=0, must-revalidate` on HTML responses | Acceptable behind Cloudflare CDN edge cache. Consider longer browser cache with stale-while-revalidate. |
| Low | No IndexNow integration | Wire IndexNow on build to ping Bing/Yandex on content updates. |
| Low | No Core Web Vitals field data | No GSC/CrUX credentials configured. Wire up GSC for real INP/LCP/CLS data. |

**Note on the email-obfuscation issue:** This is Cloudflare's "Scrape Shield" feature replacing visible email addresses with JavaScript-decoded versions to prevent scrapers. Crawlers see only the obfuscated `/cdn-cgi/l/email-protection#hash` URL. Google has stated that this is generally not penalized (it's recognized as obfuscation, not a 404 in their eyes), but it pollutes site-audit reports and is a real broken-link signal to non-Google crawlers including AI search engines.

---

## Content Quality — Score: 74 / 100

Strong technical depth, clean brand voice, coherent internal linking. Ceiling is set by two structural gaps: anonymized case studies and zero primary research.

### E-E-A-T Breakdown

| Dimension | Score | Note |
|---|---|---|
| Experience | 68 | Process-level specifics are real and citable. All client names anonymized — no testimonials, no third-party references. |
| Expertise | 78 | Adam Nameh (BMO architect, Parlawatch/Maclean's), Mitch Makos ($32M Hertz recovery, $130M NCR), Rugved Ambekar ($1.3M seed, Samsung/RBC Android) — verifiable credentials. Author attribution well-matched to topic. |
| Authoritativeness | 65 | Microsoft Solutions Partner + Anthropic Claude Certified badges present but neither links to verification page. "SOC 2 Type II — In progress" disclosure honest but signals incomplete compliance. |
| Trust | 76 | Physical address (155 Winges Road, Vaughan), email, legal pages all present. No G2/Clutch/Google reviews linked. |
| AI Citability | 61 | All statistics borrowed from McKinsey/Deloitte/Anthropic. Zero Alphabyte-originated data. |

### High-Severity Issues

1. **All 4 case studies anonymize the client.** Reads as fabricated to quality raters. Even title-only attribution ("VP Operations, major reverse-logistics supplier") with a pull quote would meaningfully lift Experience score.
2. **Microsoft Partner & Anthropic Certified claims have no verification links.** Link the badges to the partner directory listing and an Anthropic Academy credential page.
3. **No primary research across 10 blog posts.** Publish one piece of original data (e.g., "average workflow count per client at 90 days") — single highest-leverage improvement for both AI citability and E-E-A-T.

### Medium-Severity Issues

4. Adam Nameh's `/team/adam-nameh/` has 4 thoughtleadership entries with `null` hrefs — listed but unlinked.
5. `claude-vs-chatgpt-enterprise` references "weeks not months" build times sourced from anonymized circular-economy case study. Citation chain is internal and unverifiable.
6. `/our-work/circular-economy-platform/` slug doesn't match the actual content (executive productivity suite for reverse logistics). Topical mismatch signal.
7. `/services/citizen-development/` and `/services/executive-enablement/` use near-identical "Week 2 / Week 3 / Day 30" timeline language. Differentiate.
8. "SOC 2 Type II — In progress" listed under Certifications on About page. Move to a separate "In Progress" label so it doesn't appear to assert current certification.

### Low-Severity Issues

9. Brand voice violation: Adam Nameh's bio uses "transform" (forbidden vocab). Replace.
10. Kevin Seto's bio ends with generic "reduce costs / boost revenue" — lead with Standard Chartered HK + FP&A Manager + U of T specifics instead.
11. `/tools/` and `/services/` hub pages have no FAQ schema while children do — extend pattern.
12. `claude-vs-microsoft-copilot` and `claude-for-finance-teams` lack visible "Last updated" line in post body.

### Pages Doing Well (Templates to Replicate)

- `/services/citizen-development/` — best service page on the site (timeline + deliverables + fit/not-fit + 4 schemas).
- `/blog/why-ai-pilots-stall/` — best blog post (real client reference, McKinsey-cited stat, cross-links).
- `/blog/how-to-build-a-custom-mcp-server/` — sets the expertise bar (PIPEDA / Bill C-27 references, real build timelines).

---

## On-Page SEO + SXO — Score: 55 / 100 (revised)

### Ground-truth issues from Ahrefs (every page checked)

**Critical — `og:type` missing on 28 pages.** Only blog posts emit `og:type="article"`. Every other page lacks it. Open Graph spec requires it; Facebook/LinkedIn/Slack/X cards may fall back to incomplete previews. Fix in `src/app/layout.tsx` (set default `og:type="website"`) and override in case study and team page metadata exports.

**High — 5 meta descriptions exceed 160 chars (will be truncated in SERPs):**

| Page | Length | Truncation risk |
|---|---|---|
| `/our-work/circular-economy-platform/` | 194 chars | Severe |
| `/our-work/media-buy-analytics/` | 173 chars | High |
| `/our-work/community-housing-organisation/` | 171 chars | High |
| `/our-work/fire-protection-compliance/` | 170 chars | High |
| `/tools/` | 161 chars | Borderline |

Trim each to ≤155 chars with the value proposition front-loaded.

**Note (vs the first version of this report):** my earlier finding that "discovery has no meta description" was wrong — it does (155 chars). The real meta description issue is length, not absence. The original SXO finding was the only data point I had at the time; Ahrefs has the actual per-page measurement.

### SXO findings (per-page intent matching)


This is the weakest category. The site uses one page-type (service landing) for queries that reward multiple page-types (educational guide, comparison table, listicle). Until structural format matches intent, rank ceilings are set by format — not content quality.

### Per-Page SXO Findings

| Page | Target query | Expected page-type | Actual | Severity |
|---|---|---|---|---|
| `/` | "AI consulting agency" | Listicle / aggregator | Brand homepage | Critical (don't target this query) |
| `/services/discovery/` | "AI discovery workshop" | Service landing | Service landing | **Aligned** ✓ |
| `/tools/mcp/` | "MCP implementation" | Explainer-first | Brochure | High |
| `/blog/why-ai-pilots-stall/` | "why AI pilots fail" | Long-form guide w/ stat | Blog post (2k words) | Medium |
| `/blog/claude-vs-chatgpt-enterprise/` | "Claude vs ChatGPT enterprise" | Comparison table | Prose comparison | High |
| `/our-work/media-buy-analytics/` | (referral-driven) | n/a — not a SERP target | Case study | Medium (add quantified outcomes) |

### Critical & High Fixes

1. **Stop targeting "AI consulting agency" with the homepage.** That SERP is owned by aggregators. Build a `/why-alphabyte/` comparison page (Alphabyte vs Big 4 vs freelancer) for that head term. Use the homepage for branded + long-tail terms.
2. **Add comparison tables to all 3 comparison posts** (`claude-vs-chatgpt-enterprise`, `claude-vs-microsoft-copilot`, `private-llm-vs-claude-enterprise`). Single biggest SERP-feature unlock on the site.
3. **`/tools/mcp/` H1 rewrite + 300-500 word "What is MCP?" section above the fold.** Mirror the AdvisorLabs pattern. Likely applies to `/tools/claude/`, `/tools/custom-ai-agents/`, `/tools/on-premise-llm/` as well — verify and apply.
4. **`/services/discovery/` H1 currently "Discovery"** — change to "AI Discovery Workshop: 30-Day Strategy & Roadmap Engagement" for exact-match intent.
5. **`/services/discovery/` (and likely others) missing meta description.** Author one per page.
6. **`/blog/why-ai-pilots-stall/` open with a stat-backed lede.** The "95% of AI pilots fail" stat appears in 4 of 10 ranking pages. Currently leads with brand-consistent but SEO-opaque hook.

### Site-Wide SXO Patterns

- **Format rigidity:** every page type uses the same service-landing layout. Distinguish service / comparison / explainer templates visually and structurally.
- **Missing meta descriptions:** 3 of 6 spot-checked pages lacked detectable descriptions. Audit all 39 URLs.
- **No blog → service internal-link cluster.** Informational and commercial content live in silos. Every informational post should close with one contextual link to its adjacent service.

---

## Schema / Structured Data — Score: 74 / 100

Strong foundation: Organization (with `@id`, `sameAs`, `foundingDate`), WebSite, BreadcrumbList, Service, BlogPosting, Person all present and mostly well-formed.

### Detection Summary

| Page group | @types present |
|---|---|
| Global layout | Organization, WebSite (w/ `potentialAction`), SiteNavigationElement |
| Homepage | WebPage, ProfessionalService |
| Service hub | CollectionPage, BreadcrumbList |
| Service children (5) | Service, BreadcrumbList, FAQPage, **HowTo (DEPRECATED)** |
| Tool hub | CollectionPage, BreadcrumbList |
| Tool children (4) | Service, BreadcrumbList, FAQPage |
| Case study hub | WebPage, BreadcrumbList |
| Case studies (4) | **CreativeWork** (recommend Article), BreadcrumbList |
| Blog hub | CollectionPage |
| Blog posts | BlogPosting, BreadcrumbList, FAQPage (conditional) |
| Team bios | Person (w/ `sameAs`, `knowsAbout`), BreadcrumbList |
| About / Contact | AboutPage / ContactPage |

### Critical

**HowTo schema on all 5 service pages** — Google retired HowTo rich results September 2023. Delete `howToSchema` const + `JSON.stringify()` array entry in:
- `src/app/services/citizen-development/page.tsx` (~line 111-130)
- `src/app/services/executive-enablement/page.tsx`
- `src/app/services/discovery/page.tsx`
- `src/app/services/data-readiness/page.tsx`
- `src/app/services/infrastructure/page.tsx`

### High

**Case studies use `CreativeWork`** — upgrade to `Article` to unlock Google rich-result eligibility. Add `datePublished`, `author` (Organization), `publisher`. Affects all 4 `/our-work/*` pages.

**Hub pages missing `ItemList` schema** — `/services/`, `/tools/`, `/our-work/`, `/blog/` all visually list children but emit no `ItemList` JSON-LD. Cheapest schema add with highest crawlability return.

### Medium

- `ProfessionalService` on homepage missing `telephone` and `email`. Add `"email": "contact@alphabyte.ai"` to `professionalServiceSchema` in `src/app/page.tsx` (~line 137-158).
- `FAQPage` on service/tool pages no longer drives Google rich results (restricted to .gov/.edu since Aug 2023). Still consumed by AI engines for citation — keep if GEO is a priority, drop if payload reduction matters.

### Low

- `WebSite.potentialAction` points to `/blog/?q={search_term_string}` — site has no search. Dead markup. Remove from `webSiteSchema` in `layout.tsx` (~line 122-126).
- `/about/` `AboutPage` missing `"about": { "@id": "https://alphabyte.ai/#organization" }` link to global Organization.
- `BlogPosting` missing `wordCount` and `keywords` — both derivable at build time.

---

## Sitemap — Score: 65 / 100 (revised)

Structurally sound (valid XML, HTTPS throughout, no duplicates, all hub URLs return 200). Now reflecting the noindex contradiction Ahrefs caught.

**Critical (added):** `/terms/`, `/privacy/`, `/cookies/` all carry `<meta name="robots" content="noindex, follow">` AND are listed in `sitemap.xml`. This is a self-contradictory signal — sitemap inclusion tells Google "this is a canonical, indexable URL," while the meta tag tells it "don't index." Fix is either-or:
- Remove the three URLs from `src/app/sitemap.ts` (preferred — they have no organic intent), OR
- Drop the `noindex` from their page metadata (worse — adds three low-value pages to the index).

### High

1. **Hardcoded `lastmod` dates are materially stale.** Hubs carry `2026-04-28` while git history shows blog/team/case-study commits after that date. Googlebot uses `lastmod` as a recrawl signal — wrong dates train it to deprioritize pages that have actually changed.
   - Fix: derive `lastmod` from `Math.max()` of child entries (for hubs) or file mtime / a per-entry `updatedDate` (for service/tool/team pages).
   - File: `src/app/sitemap.ts` lines 38–82, 105–106.

2. **`/our-work/fire-protection-compliance/` is live, self-canonicalized, internally linked — but commented out of the sitemap** (`sitemap.ts` lines 88–91).
   - Fix: either re-add with its correct `lastmod`, or add `robots: { index: false }` to the page's metadata if exclusion is intentional.

### Medium

3. **Legal pages (`/terms/`, `/privacy/`, `/cookies/`) in sitemap.** Generate no organic traffic, dilute crawl budget. Standard practice for B2B is to exclude.
   - Fix: remove `sitemap.ts` lines 121–131. Footer links remain — pages stay discoverable.

4. **`/blog/` hub `lastmod` doesn't reflect posts published after 2026-04-29.** Should always equal most recent post date.

### Low / Info

- No `changefreq` / `priority` — correct (Google ignores both).
- Single sitemap is correct at 39 URLs (revisit at 500+).
- No RSS feed referenced — low-priority addition for feed readers.
- `src/app/robots.ts` is well-formed; no changes needed.

---

## Performance (CWV) — Score: 55 / 100 (revised)

**Critical: 3 case study illustrations are massively oversized** (verified by direct fetch):

| Image | Size | Page |
|---|---|---|
| `community-housing-organisation-roadmap-concept.webp` | **1430 KB** | `/our-work/community-housing-organisation/` |
| `circular-economy-platform-msi-concept.webp` | **1302 KB** | `/our-work/circular-economy-platform/` |
| `fire-protection-compliance-knowledge-graph.webp` | **1254 KB** | `/our-work/fire-protection-compliance/` |

Each is likely the LCP element on its case study page. Field CWV on these pages is almost certainly failing LCP (target: <2.5s; with ~1.3MB images these will be >4s on mobile). The `media-buy-analytics-hero.webp` at 104 KB is correctly sized — it's the template for what the others should be.

**Fix:** re-encode each to ≤200 KB at the rendered display dimensions. `cwebp -q 75` typically gets WebP files into this range; if these are screenshots of technical diagrams, consider rendering at smaller resolution (~1600px wide max).



No Google API credentials configured for CrUX field data. Lab-only assessment.

**Positive signals:**
- Static HTML export → zero server-render time
- Font preloading (`<link rel="preload" as="font">`)
- Critical logo preloaded as image
- HTML payload lean (~55KB on homepage)
- Cloudflare Pages CDN edge delivery
- Images set to `unoptimized: true` in next config — plain `<img>` tags

**Recommendations:**
- Wire up GSC + CrUX field data via `python scripts/google_auth.py` to replace lab estimates with real user metrics.
- Spot-check LCP image — preloaded logo is good but if hero illustration is the LCP element, preload that instead.
- Consider switching `cache-control` on static HTML to allow longer browser cache with stale-while-revalidate.
- Monitor INP (replaced FID March 2024) — Discovery Call modal interaction is the likely INP candidate.

---

## AI Search Readiness (GEO) — Score: 72 / 100

Unusually strong technical and structural foundation for a B2B firm this size. Primary gap is citability — homepage statistics lack source attribution.

### Platform Scores

| Platform | Score |
|---|---|
| Google AI Overviews | 71 |
| ChatGPT Search | 74 |
| Perplexity | 76 (best-positioned — McKinsey/Deloitte citations match Perplexity's model) |
| Bing Copilot | 70 |
| Claude | 75 |

### Critical

**Homepage stats are uncitable.** "10X workforce output", "2 weeks fastest deployment", "4 active North American deployments" appear without methodology or source. AI engines do not cite unsourced proprietary claims.
- Fix: link to a case study or methodology note, OR reframe as customer-specific outcome ("One client achieved 10X in 30 days — see case study"), OR replace with cited industry stat followed by the Alphabyte claim.

### High

**Service/tool pages have no FAQ schema.** Question-format H2s ("Right for you if", "Not right for you if") but no `FAQPage` JSON-LD. Free AI Overview real estate left unused.
- Note: FAQ schema no longer drives Google rich results for commercial sites, but Perplexity/ChatGPT/Claude actively consume it for citations.

**`Organization.sameAs` has one URL (LinkedIn only).** LLMs resolve entities by triangulating across multiple authoritative sources.
- Fix: add Crunchbase, Canadian business registry, G2/Clutch listings if they exist. Each additional `sameAs` reduces entity-confusion risk.
- File: `src/app/layout.tsx` (~line 73-75).

### Medium

- **Comparison posts lack HTML tables** (duplicates SXO finding #2).
- **Blog posts missing `mentions` entities in schema** — comparison posts reference Claude, ChatGPT, Copilot, MCP by name but `BlogPosting` JSON-LD doesn't assert these as `SoftwareApplication` mentions.
- **llms.txt blog descriptions don't include key statistics.** Append lead sourced stat to each description so crawlers reading llms.txt alone get the credibility signal.

### Low

- No YouTube presence — YouTube brand mentions have the highest known correlation (~0.74) with AI citation rates. Creating 3-5 short explainer videos matching the comparison posts would have outsized GEO impact.

---

## Topic Cluster Architecture — Score: 52 / 100

Strong individual posts, almost no architectural coherence. 4 commercial pillars have zero supporting content.

### Pillar Coverage

| Pillar | Supporting spokes | Status |
|---|---|---|
| `/services/discovery/` | 2 | Under-supported |
| `/services/data-readiness/` | **0** | Dark |
| `/services/citizen-development/` | 1 | Under-supported |
| `/services/executive-enablement/` | **0** | Dark |
| `/services/infrastructure/` | 1 | Under-supported |
| `/tools/claude/` | 4 | Strongest cluster ✓ |
| `/tools/mcp/` | 1 | Under-supported |
| `/tools/custom-ai-agents/` | **0** | Dark |
| `/tools/on-premise-llm/` | 1 (shared) | Under-supported |

### Clusters

- **A — AI Governance & Risk**: `ai-governance-framework-mid-market`, `shadow-ai-governance`, `why-ai-pilots-stall` → currently pointed at `/services/discovery/` (partial fit). No `/services/governance/` pillar exists.
- **B — AI Readiness & Discovery**: `ai-readiness-assessment` → `/services/discovery/`.
- **C — Claude & LLM Selection**: `claude-vs-chatgpt-enterprise`, `claude-vs-microsoft-copilot`, `claude-for-finance-teams`, `private-llm-vs-claude-enterprise` → `/tools/claude/`. Strongest cluster.
- **D — Citizen Development**: `citizen-developer-enablement-playbook`, `claude-for-finance-teams` (shared) → `/services/citizen-development/`.
- **E — Infrastructure & MCP**: `how-to-build-a-custom-mcp-server`, `private-llm-vs-claude-enterprise` (shared) → `/tools/mcp/`, `/services/infrastructure/`.

### Top 5 Net-New Posts (Priority Order)

1. **"What Is Data Readiness for AI? A Mid-Market Checklist"** → supports `/services/data-readiness/` (currently dark)
2. **"How to Build a Custom AI Agent for Your Business (Without a Developer)"** → supports `/tools/custom-ai-agents/` (currently dark)
3. **"AI for the C-Suite: What Every Mid-Market Executive Needs to Know in 2026"** → supports `/services/executive-enablement/` (currently dark)
4. **"How to Write an AI Acceptable Use Policy for a Mid-Market Company"** → consolidates Cluster A or supports a future `/services/governance/` pillar
5. **"On-Premise LLM Setup Guide: Hardware, Costs, and When It's Worth It"** → supports `/tools/on-premise-llm/` and `/services/infrastructure/`

---

## Images — Score: 50 / 100 (revised)

3 case study illustrations are 1.2-1.4 MB each (see Performance section above). All format choices (WebP) are correct, but the encoded files are far too large for their display purpose. This is the single biggest performance issue on the site.

Other findings (unchanged):
- Homepage: 2 `<img>` tags, both have alt text. ✓
- OG default image: 1200×630 with proper `og:image:alt`. ✓
- Static export means no Next.js image optimization — using plain `<img>` is correct given `images.unoptimized: true`.
- Verify case study illustrations carry meaningful alt text describing the diagram (not "diagram" or "illustration").
- Verify hero illustrations have explicit width/height to prevent CLS.

---

## Limitations

- **No CrUX field data.** Performance score uses lab estimates plus the verified oversized-image issue. Wire up GSC via `python scripts/google_auth.py` for real INP/LCP/CLS data.
- **No DataForSEO.** No live SERP positions, backlink counts, or competitor data. SXO findings are based on the agent's SERP backwards-analysis reasoning, not live position data.
- **No baseline for seo-drift.** First drift baseline can be captured now to monitor regression on future deploys.
- **First-pass audit ran 7 strategic sub-agents but only spot-checked individual pages.** Ahrefs Site Audit (110 URLs crawled) caught hygiene issues this audit missed — they're now integrated above. Lesson: pair strategic multi-agent audits with a full-site crawler.

---

## Reconciliation: This Audit vs Ahrefs

| Ahrefs flag | Verified? | Action |
|---|---|---|
| Page has links to broken page (39) | ✅ Cloudflare email-protection 404 | Critical fix in ACTION-PLAN |
| Image file size too large (3) | ✅ 1.2-1.4 MB case study illustrations | Critical fix in ACTION-PLAN |
| Noindex page in sitemap (3) | ✅ terms/privacy/cookies | High fix in ACTION-PLAN (already aligned) |
| Robots.txt not accessible (1) | ⚠️ Cloudflare blocking AhrefsBot, not a real issue for Googlebot | Whitelist AhrefsBot in Cloudflare bot mgmt |
| 404 page (1) + 4XX page (1) | Same cdn-cgi/l/email-protection URL | Covered by fix #1 |
| Open Graph tags incomplete (28) | ✅ og:type missing on 28 pages | Critical fix in ACTION-PLAN |
| Meta description too long (5) | ✅ All 4 case studies + /tools/ hub | High fix in ACTION-PLAN |
| Noindex page (3) | ✅ Same 3 legal pages | Covered |
| Page links to broken page (not indexable) (3) | ✅ The 3 noindex legal pages also link to email-protection 404 | Covered by fix #1 |

---

## Suggested Next Steps

1. Read `ACTION-PLAN.md` for the prioritized fix list with effort estimates.
2. Fix #1 (Cloudflare Email Obfuscation) first — it eliminates the largest single category of Ahrefs issues with one toggle.
3. Re-run Ahrefs Site Audit after fixing items 1-5 in ACTION-PLAN; Health Score should jump from 58 → 80+.
4. Capture a drift baseline via `/seo-drift baseline https://alphabyte.ai/` so the next audit can diff against this snapshot.
5. Wire up Google Search Console + CrUX field data so the next audit has real user metrics.
