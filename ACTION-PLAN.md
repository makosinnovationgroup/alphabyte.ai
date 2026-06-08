# SEO Action Plan — alphabyte.ai

**Generated:** 2026-06-08 (revised after Ahrefs cross-check)
**Current Score:** 65 / 100 (Ahrefs Site Audit: 58/100 Fair)
**Target Score:** 88+ / 100 (achievable in ~14 hours of focused work)
**Full report:** `FULL-AUDIT-REPORT.md`

Items grouped by priority. Effort estimates are for a single engineer familiar with this codebase. Score impact is the estimated point gain on the relevant category if the fix is shipped.

Items prefixed 🆕 were caught by the Ahrefs cross-check and not by the first-pass multi-agent audit.

---

## CRITICAL — Fix this week

### 🆕 0. ✅ DONE — Bypass Cloudflare Email Address Obfuscation via code
**Status:** Shipped 2026-06-08
**Effort taken:** ~20 min

**What changed:**
- Created `src/components/email-address.tsx` — client component that renders a placeholder link to `/contact/` server-side, then swaps to a real `mailto:` after hydration via `useEffect`.
- Split `contact@alphabyte.ai` into `emailUser` + `emailDomain` in `src/lib/footer-data.ts` so the full email string never appears in serialized RSC payload (which Cloudflare may also scan).
- Replaced visible email displays on 3 surfaces: `src/components/footer.tsx` (global, 39 pages), `src/app/about/page.tsx`, `src/app/contact/page.tsx`.

**Result (verified in built HTML):**
- `mailto:` count: 0 across all pages.
- Visible `contact@alphabyte.ai` text: 0 in body HTML.
- Email only remains in Organization JSON-LD (which Cloudflare doesn't obfuscate — verified on prod) and in split form (`emailUser`/`emailDomain`) in props that don't concatenate until client.
- Users still see the real email and a working mailto: after JS hydrates (~50ms).
- Crawlers see "Contact us" / "Use the form below" / link to `/contact/`.

**Expected Ahrefs delta:** "Page has links to broken page" should drop from 39 → 0 on the next crawl.

**Score impact:** Technical +8

---

### 🆕 1. ✅ DONE — Re-compress 3 oversized case study illustrations
**Status:** Shipped 2026-06-08
**Effort taken:** ~5 min

**Root cause found:** The three files had `.webp` extensions but were actually PNG data (likely renamed at export time without re-encoding). Only `media-buy-analytics-hero.webp` was a real WebP.

**Result (in-place re-encode with `cwebp -q 80`, same 1536×1024 dimensions):**

| File | Before | After | Reduction |
|---|---|---|---|
| `circular-economy-platform-msi-concept.webp` | 1302 KB | 85 KB | −94% |
| `community-housing-organisation-roadmap-concept.webp` | 1430 KB | 116 KB | −92% |
| `fire-protection-compliance-knowledge-graph.webp` | 1254 KB | 68 KB | −95% |

Total bytes saved per case study page load: ~3.6 MB across the three pages.

No code changes — filenames/extensions/dimensions unchanged. `next build` clean.

**Score impact:** Performance +15, Images +25

---

### 🆕 2. ✅ DONE — Add `og:type` to every page wrapper
**Status:** Shipped 2026-06-08
**Effort taken:** ~10 min

**Root cause:** Next.js App Router doesn't merge child `openGraph` blocks with the parent's — when a child page wrapper defines `openGraph: {...}` without `type:`, the layout's `type: "website"` default is dropped. Only `src/app/services/data-readiness/page.tsx` and `src/app/blog/[slug]/page.tsx` had set their own type — every other page wrapper inherited nothing.

**What changed:** Added `type:` as the first property of `openGraph: {...}` on 21 page wrappers:
- `article` on 4 case studies under `/our-work/`
- `profile` on `/team/[slug]/`
- `website` on the remaining 16 (homepage, hubs, about, contact, services children, tools children, etc.)

**Verified in built HTML:** all sampled pages now emit the right `og:type` — `/` → website, `/our-work/media-buy-analytics/` → article, `/team/adam-nameh/` → profile, `/blog/why-ai-pilots-stall/` → article (was already correct).

**Expected Ahrefs delta:** "Open Graph tags incomplete" should drop from 28 → 0 on the next crawl.

**Score impact:** On-Page +6

---

### 🆕 3. ✅ DONE — Fix the noindex-in-sitemap contradiction
**Status:** Shipped 2026-06-08
**Effort taken:** ~3 min

Removed the 3 explicit `/terms/`, `/privacy/`, `/cookies/` entries from `src/app/sitemap.ts`. Replaced with an inline comment so the omission is intentional and discoverable.

**Verified in built output:**
- `out/sitemap.xml` now contains 38 URLs (was 41).
- No occurrences of "terms", "privacy", or "cookies" in the sitemap.
- All three pages still build (`out/terms/index.html`, etc.) and still ship with `<meta name="robots" content="noindex, follow">`.
- Pages remain footer-linked, so they stay reachable for users without polluting Google's crawl signal.

**Expected Ahrefs delta:** "Noindex page in sitemap" (3) and "Page links to broken page (not indexable)" (3) both drop to 0.

**Note:** the audit summary previously called this a "39-URL" sitemap — actual prod count was 41 (I miscounted on the first pass). The new count of 38 is correct.

**Score impact:** Sitemap +6, Technical +2

---

### 🆕 4. ✅ DONE — Trim 5 long meta descriptions to ≤155 chars
**Status:** Shipped 2026-06-08
**Effort taken:** ~5 min

| Page | Before | After |
|---|---|---|
| `/our-work/circular-economy-platform/` | 194 chars | **139** |
| `/our-work/media-buy-analytics/` | 173 chars | **142** |
| `/our-work/community-housing-organisation/` | 171 chars | **145** |
| `/our-work/fire-protection-compliance/` | 170 chars | **137** |
| `/tools/` | 161 chars | **136** |

Only the top-level `metadata.description` was edited; `openGraph.description` and `twitter.description` were already short. Value proposition front-loaded in each.

**Verified:** all 29 main pages now ≤160 chars (longest is `/services/executive-enablement/` at 160 — borderline but acceptable, and `/about/` also at 160).

**Expected Ahrefs delta:** "Meta description too long" drops from 5 → 0.

**Score impact:** On-Page +4

---

### 5. ✅ DONE — Remove deprecated HowTo schema from 5 service pages
**Status:** Shipped 2026-06-08
**Effort taken:** ~3 min

Deleted the `const howToSchema = { ... };` block and the matching `, howToSchema` array reference on all 5 service pages. Each page lost 13 lines.

**Verified in built HTML:**
- `"HowTo"` count: 0 on all 5 service pages.
- Remaining schemas (`Service`, `FAQPage`, `BreadcrumbList`) still emit 1 each per page.

**Why:** Google retired HowTo rich results in Sept 2023 — was emitting dead markup that adds payload weight with zero rendering benefit.

**Score impact:** Schema +5

---

### 6. Source or reframe the homepage statistics
**Effort:** 1 hour
**File:** `src/app/page.tsx`

"10X workforce output", "2 weeks fastest deployment", "4 active North American deployments" — AI engines (and quality raters) discount unsourced proprietary stats. Three options:
- Link each stat to the case study that produced it
- Reframe as customer-specific outcome ("One client achieved 10X in 30 days — read the case study")
- Replace with cited industry stat followed by the Alphabyte claim

**Score impact:** GEO +6, Content +3

---

### 7. Stop targeting "AI consulting agency" with the homepage
**Effort:** 1 hour (decision + meta update) + future page work
**File:** `src/app/page.tsx`

That SERP is owned by aggregator listicles ("Top 10 AI consulting firms"). A brand homepage cannot rank for it. Two parts:
- Update homepage title/description/OG to target branded + long-tail terms ("Anthropic partner consulting Toronto", "Claude implementation partner Canada")
- Plan a future `/why-alphabyte/` comparison page (Alphabyte vs Big 4 vs freelancer) as the SEO target for the head term

**Score impact:** On-Page +4

---

## HIGH — Fix within 2 weeks

### 8. Add HTML comparison tables to 3 comparison blog posts
**Effort:** 2 hours total
**Files:**
- `content/blog/claude-vs-chatgpt-enterprise.mdx`
- `content/blog/claude-vs-microsoft-copilot.mdx`
- `content/blog/private-llm-vs-claude-enterprise.mdx`

Insert a 4-6 row `<table>` near the top of each post (after intro, before first H2). Dimensions: integration, governance, deployment speed, cost model, best-for. MDX renders tables as real `<table>` elements natively. This is the format Google AI Overviews and featured snippets pull from on comparison queries.

**Score impact:** SXO/On-Page +6, GEO +4

---

### 9. ✅ DONE — Sitemap.ts `lastmod` derived from data
**Status:** Shipped 2026-06-08

Rewrote `src/app/sitemap.ts` to derive `lastModified` from file mtimes and frontmatter dates instead of hardcoded constants. Behavior:
- Homepage / about / contact / each service / tool / case-study page: derived from `page.tsx` mtime.
- Hubs (`/services/`, `/tools/`, `/our-work/`, `/blog/`, `/team/`): `Math.max(children.lastModified)` so the hub reflects its newest child.
- Team bios: file mtime of `content/team/<slug>.json`.
- Blog posts: prefer frontmatter `publishedDate`, fall back to file mtime when older.

`/our-work/fire-protection-compliance/` decision: still omitted (case study client privacy decision predates this audit — leave as-is, page has self-canonical and noindex stays off it).

**Score impact:** Sitemap +12

---

### 10. ✅ DONE — ItemList schema on 4 hub pages
**Status:** Shipped 2026-06-08

Added `ItemList` JSON-LD to `/services/`, `/tools/`, `/our-work/`, `/blog/`. Blog list is dynamically built from `getAllPosts()` so it reflects post additions automatically. Verified `"ItemList"` emits 1× each in `out/{services,tools,our-work,blog}/index.html`.

**Score impact:** Schema +4

---

### 11. ✅ DONE — Case study schema upgraded to Article
**Status:** Shipped 2026-06-08

All 4 case study `caseStudySchema` blocks switched from `CreativeWork` to `Article` with: `headline` (was `name`), `image`, `datePublished`, `dateModified`, `publisher` (Organization + logo `ImageObject`). Verified `@type:"Article"` emits on all 4 `/our-work/*/` built pages.

**Score impact:** Schema +3

---

### 12. Add `/tools/mcp/` (and other tool pages) an explainer-first section
**Effort:** 2-3 hours total
**Files:** `src/app/tools/mcp/page.tsx` (and likely `/tools/claude/`, `/tools/custom-ai-agents/`, `/tools/on-premise-llm/`)

Add a 300-500 word "What is MCP?" section above the fold before any service content. 7 of 10 SERP results for "MCP implementation" are educational — Google is rewarding explainer-first content because the query is still in "what is this?" phase. Apply same pattern to the other 3 tool pages after verifying their target SERPs.

**Score impact:** SXO/On-Page +5

---

### 13. Add `sameAs` URLs to Organization schema
**Effort:** 30 min
**File:** `src/app/layout.tsx` (~line 73-75)

Currently only LinkedIn. Add Crunchbase, Canadian business registry, G2 / Clutch profiles if they exist. Each additional `sameAs` reduces LLM entity-confusion risk.

**Score impact:** GEO +3, Schema +1

---

### 14. Link the Microsoft Partner and Anthropic Certified badges
**Effort:** 30 min
**Files:** `src/app/about/page.tsx`, `src/app/tools/claude/page.tsx`, homepage trust bar

Unverifiable claims read as fabricated to quality raters. Link each badge to its directory listing.

**Score impact:** Content +3

---

### 15. ✅ DONE — `/services/discovery/` H1
**Status:** Shipped 2026-06-08

Changed H1 from "Discovery" to "AI Discovery Workshop". Picked the short form over the longer SEO recommendation ("AI Discovery Workshop: 30-Day Strategy & Roadmap Engagement") to fit the display H1 styling pattern used on other service pages — exact-match keyword is preserved.

**Score impact:** On-Page +2

---

## MEDIUM — Fix within 1 month

### 16. Author 5 net-new blog posts targeting dark pillars
**Effort:** 5-10 hours per post (40-50 hours total)

In priority order — each targets a pillar currently with zero supporting content:
1. "What Is Data Readiness for AI? A Mid-Market Checklist" → `/services/data-readiness/`
2. "How to Build a Custom AI Agent for Your Business (Without a Developer)" → `/tools/custom-ai-agents/`
3. "AI for the C-Suite: What Every Mid-Market Executive Needs to Know in 2026" → `/services/executive-enablement/`
4. "How to Write an AI Acceptable Use Policy for a Mid-Market Company" → Cluster A consolidation
5. "On-Premise LLM Setup Guide: Hardware, Costs, and When It's Worth It" → `/tools/on-premise-llm/` + `/services/infrastructure/`

**Score impact:** Cluster +25, Content +4

---

### 17. Publish primary research
**Effort:** 4-6 hours

Publish one piece of original data: e.g., "average workflow count per client at 90 days", "median time-to-first-production across our engagements", "% of pilots that compound vs stall in our portfolio". Single highest-leverage improvement for AI citability and E-E-A-T. Could be a standalone blog post or a recurring "Alphabyte Index" reference page.

**Score impact:** Content +5, GEO +3

---

### 18. Add named-client or titled testimonials to case studies
**Effort:** 4 hours (mostly client outreach)
**Files:** all 4 `/our-work/*` pages

Even title-only attribution ("VP Operations, major reverse-logistics supplier") plus a pull quote would meaningfully lift Experience score. Reach out to existing clients for permission.

**Score impact:** Content +4

---

### 19. Open `/blog/why-ai-pilots-stall/` with a stat-backed lede
**Effort:** 30 min
**File:** `content/blog/why-ai-pilots-stall.mdx`

The "95% of AI pilots fail" stat appears in 4 of 10 ranking pages. Current hook ("AI that compounds") is brand-consistent but SEO-opaque. Open with the sourced stat, then transition to the brand POV.

**Score impact:** On-Page +1, GEO +1

---

### 20. ✅ DONE — Mentions schema on comparison blog posts
**Status:** Shipped 2026-06-08

Added `mentions?: { name; url }[]` to `BlogFrontmatter` interface; renders as `SoftwareApplication` entries in `BlogPosting` JSON-LD when present. Added `mentions:` to frontmatter of `claude-vs-chatgpt-enterprise.mdx`, `claude-vs-microsoft-copilot.mdx`, `private-llm-vs-claude-enterprise.mdx`. Verified `"mentions":` appears in all 3 built post pages.

**Score impact:** Schema +2, GEO +2

---

### 21. ✅ ALREADY DONE — FAQ schema on service + tool pages
**Status:** Verified already implemented 2026-06-08

Audit report flagged this as missing but built HTML shows `FAQPage` JSON-LD emits 1× on every service page (5) and every tool child page (4). No code change required.

**Score impact:** GEO +3, Schema +1

---

### 22. Differentiate service-page timeline language
**Effort:** 1 hour
**Files:** `src/app/services/citizen-development/page.tsx`, `src/app/services/executive-enablement/page.tsx`

Currently use near-identical "Week 2 / Week 3 / Day 30" language. Differentiate copy so two service pages aren't structurally identical.

**Score impact:** Content +1

---

### 23. ✅ DONE — Removed "transform" from Adam's bio
**Status:** Shipped 2026-06-08

Two instances replaced in `content/team/adam-nameh.json`:
- Bio: "transform complex data environments…" → "turn complex data environments…"
- Achievements: "data transformation projects" → "data modernization projects"

**Score impact:** Content +0.5

---

### 24. ✅ DONE — SOC 2 moved to "In Progress" label
**Status:** Shipped 2026-06-08

Added `inProgressCertifications` array on `/about/` and a separate "In Progress" subheader below the Certifications chips. Dashed-border styling on the chip + muted text so visitors immediately see it's pending. SOC 2 Type II is no longer commingled with shipped certifications.

**Score impact:** Content +1

---

### 25. Fix Adam Nameh's null thoughtleadership links
**Effort:** 30 min
**File:** `content/team/adam-nameh.json`

4 entries have `null` hrefs — either link them or remove.

**Score impact:** Content +0.5

---

## LOW — Backlog

### 26. Add `/why-alphabyte/` comparison page
**Effort:** 8-12 hours

Targets "AI consulting agency" and adjacent head terms with the format Google rewards: comparison matrix (Alphabyte vs Big 4 vs freelancer vs offshore). Replaces the misaligned homepage targeting.

**Score impact:** On-Page +3

---

### 27. ✅ DONE — RSS feed at `/feed.xml`
**Status:** Shipped 2026-06-08

Added `src/app/feed.xml/route.ts` with `dynamic = "force-static"` (compatible with Cloudflare Pages static export). Reads `content/blog/*.mdx`, sorts by `publishedDate`, emits RSS 2.0 with `atom:link` self-reference and per-post `<item>` blocks. Discovery: `<link rel="alternate" type="application/rss+xml" href="/feed.xml" />` added to layout `<head>` (sitewide).

---

### 28. ✅ DONE — IndexNow integration
**Status:** Shipped 2026-06-08

- Verification key file at `public/2c7a65716354b576e6ede8500d8c4f20.txt` (matches filename — required by IndexNow spec).
- `scripts/ping-indexnow.sh` posts URL list to `api.indexnow.org/indexnow`. Defaults to all sitemap URLs; can take specific URLs as args.
- `pnpm indexnow` runs the script. Best invoked post-deploy from CI or manually after a content update.

---

### 29. Wire up Google Search Console + CrUX field data
**Effort:** 1-2 hours

Replaces lab CWV estimates with real user metrics. Run `python scripts/google_auth.py` per `seo-google` agent. Future audits will gain real INP/LCP/CLS data and indexation status.

---

### 30. ✅ DONE — seo-drift baseline captured
**Status:** Captured 2026-06-08

Captured 9 baseline snapshots (homepage + 8 key sub-pages) via `drift_baseline.py --skip-cwv`. Stored in `~/.cache/claude-seo/drift/baselines.db`. Each baseline records title, meta description, canonical, robots, H1, H2 count, H3 count, schema count, OG tag count, status code, and HTML hash. Next deploy can run `drift_compare.py` to detect regressions.

Baselines: `/`, `/services/`, `/services/discovery/`, `/tools/`, `/tools/mcp/`, `/our-work/`, `/blog/`, `/about/`, `/contact/` — IDs 1–9.

---

### 31. ✅ DONE — Removed dead WebSite.potentialAction
**Status:** Shipped 2026-06-08

Deleted the `potentialAction` block from `webSiteSchema` in `src/app/layout.tsx`. Verified `potentialAction` count = 0 in built `out/index.html`.

**Score impact:** Schema +0.5

---

### 32. ✅ DONE — Added email + telephone to ProfessionalService
**Status:** Shipped 2026-06-08

Added `email: "contact@alphabyte.ai"` and `telephone: "+1-647-204-4581"` to `professionalServiceSchema` in `src/app/page.tsx`. Verified both fields emit in built homepage HTML.

**Score impact:** Schema +0.5

---

### 33. Append cited stats to llms.txt blog descriptions
**Effort:** 30 min
**File:** `public/llms.txt`

LLMs reading llms.txt alone get more credibility signal when each blog description ends with the post's lead sourced stat.

**Score impact:** GEO +1

---

### 34. Whitelist AhrefsBot in Cloudflare bot management
**Effort:** 5 min
**Where:** Cloudflare dashboard → Security → Bots

Ahrefs Site Audit reported "Robots.txt not accessible" — local `curl` returns 200, so Cloudflare's Super Bot Fight Mode is blocking AhrefsBot specifically. Doesn't affect Googlebot, but means Ahrefs crawls are incomplete. Whitelist AhrefsBot so future site audits return clean data.

**Score impact:** Tooling improvement (no direct SEO score impact)

---

### 35. Decide on the `/our-work/circular-economy-platform/` slug mismatch
**Effort:** 30 min if redirect

Slug doesn't match content (executive productivity suite, not circular economy). Either accept as legacy or add a redirect to `/our-work/executive-productivity-suite/`.

---

### 36. Establish YouTube presence (3-5 explainer videos)
**Effort:** 20-40 hours

YouTube brand mentions have the highest known correlation with AI citation rates. Each video can mirror an existing comparison post. List channel in `sameAs` and llms.txt.

**Score impact:** GEO +5 (over 6 months)

---

## Estimated Score Progression

| Stage | Items | Effort | This audit | Ahrefs Health |
|---|---|---|---|---|
| Today | — | — | 65 | 58 |
| 🆕 Critical hygiene | 0–4 | ~1.5 hours | 78 | ~80 |
| + Strategic critical | 5–7 | + ~3 hours | 83 | ~85 |
| + High items | 8–15 | + ~10 hours | 88 | ~90 |
| + Medium items | 16–25 | + ~50 hours (mostly content) | 92 | ~92 |
| + Low backlog | 26–36 | + ~70 hours | 95+ | ~95 |

**The 5 🆕 critical items (0–4) take ~1.5 hours and resolve every Ahrefs Health Score deduction except the AhrefsBot-blocked robots.txt** (which doesn't affect Googlebot, but is fixable as item 34). Run Ahrefs Site Audit again after shipping items 0–4 — expected Health Score jump from 58 → 85+.

Beyond that, gains come from content (new blog posts, primary research, named client testimonials, video) rather than code changes.

---

## What the first version of this audit got wrong

The initial 75/100 score was generated by 7 strategic sub-agents (SXO, content E-E-A-T, schema, cluster architecture, GEO, sitemap, plus an inline technical pass) that spot-checked individual pages rather than crawling the full site. Ahrefs Site Audit crawled all 110 URLs and surfaced hygiene issues that strategic analysis was structurally blind to:

1. **`og:type` missing on 28 pages.** I only checked the homepage's OG block. og:title/description/image/url were all present, so I called it "complete." Ahrefs caught the missing `og:type` because it checks the full Open Graph spec across every page.
2. **Cloudflare email-protection 404.** I never crawled the footer links, only the canonical/og/h1 elements. The 39-page link-health issue was invisible to a strategic audit.
3. **Oversized images.** I noted homepage images had alt text and stopped there. The case study illustrations were never fetched.
4. **Meta descriptions over 160 chars.** I checked for presence, not length, on the few pages I sampled.
5. **Noindex + sitemap contradiction.** I knew the legal pages were in the sitemap (sitemap audit caught it) and I knew they had noindex (technical pass spot-checked terms/), but I didn't connect them as a contradiction signal until Ahrefs reported "Noindex page in sitemap" as a distinct issue.

**Lesson:** strategic multi-agent audits and full-site crawlers find different things. Always pair them.
