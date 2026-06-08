# SEO Action Plan: alphabyte.ai

**Generated:** June 8, 2026
**Current Score:** 84/100
**Target Score:** 92/100

This plan supersedes the May 7 plan. Items already shipped are documented in `SEO-AUDIT-2026-06-08.md`. Items that remain open from May 7 are folded into the priorities below alongside new findings.

---

## Critical (fix this week)

### A. Add HTML comparison tables to the 3 "vs" blog posts
**Impact:** SXO + GEO + AIO citation eligibility (+5 score)
**Effort:** 2 hours per post (~6 hours total) + 1 hour for MDX `table` component
**Files:**
- `content/blog/claude-vs-chatgpt-enterprise.mdx`
- `content/blog/claude-vs-microsoft-copilot.mdx`
- `content/blog/private-llm-vs-claude-enterprise.mdx`
- `src/app/blog/[slug]/page.tsx` (add `table`, `thead`, `tbody`, `tr`, `th`, `td` to MDX component map)

Suggested column structure for Claude vs ChatGPT (3 columns, 8 rows):
Context window | System integration | Image generation | Brand recognition / change management | Pricing transparency | Mid-market deployment speed | Security documentation | Best for

### B. Fix Organization schema — add legalName, alternateName, expanded sameAs
**Impact:** Schema +5, entity disambiguation for AI engines and Google KG
**Effort:** 30 minutes (code) + ~30 minutes (gathering URLs)
**File:** `src/app/layout.tsx`
**Add:**
```json
"legalName": "Alphabyte Solutions Inc.",
"alternateName": "Alphabyte AI",
"sameAs": [
  "https://www.linkedin.com/company/alphabyte-solutions-inc",
  "<Crunchbase URL>",
  "<Microsoft Partner directory URL>",
  "<Anthropic Academy credential page>",
  "<Google Business Profile URL if claimed>"
]
```

### C. Connect the schema entity graph via @id
**Impact:** Schema +3, AI engines correctly resolve Person ↔ Organization ↔ Service relationships
**Effort:** 1–2 hours
**Files:**
- `src/app/team/[slug]/page.tsx` — add `"@id": "https://alphabyte.ai/team/<slug>/#person"` and switch `worksFor` to `{"@id": "https://alphabyte.ai/#organization"}`
- `src/app/services/[slug]/page.tsx` (or service-page.tsx) — switch `Service.provider` to `@id` reference
- `src/app/tools/[slug]/page.tsx` — same as services
- `src/app/our-work/[slug]/page.tsx` — switch case study Article author to a Person `@id` reference where the post is authored by a named team member
- `src/app/blog/[slug]/page.tsx` — switch `BlogPosting.author` to point to the team page `#person` @id

---

## High (fix within 2 weeks)

### D. Surface modifiedDate on blog post headers
**Impact:** Content trust signal +2, freshness signal for quality raters and AI engines
**Effort:** 15 minutes
**File:** `src/app/blog/[slug]/page.tsx`
Replace:
```ts
const dateAndReadTime = `${formatDate(frontmatter.publishedDate)} · ${frontmatter.readTime}`;
```
with:
```ts
const dateAndReadTime = frontmatter.modifiedDate && frontmatter.modifiedDate !== frontmatter.publishedDate
  ? `${formatDate(frontmatter.publishedDate)} · Updated ${formatDate(frontmatter.modifiedDate)} · ${frontmatter.readTime}`
  : `${formatDate(frontmatter.publishedDate)} · ${frontmatter.readTime}`;
```

### E. Retarget homepage SEO (item 7)
**Impact:** Stop chasing an unwinnable head term; capture branded/geo intent that converts
**Effort:** 1 hour copywriting + 15 minutes code
**Files:** `src/app/layout.tsx` (title template), `src/app/page.tsx` (metadata)
**Recommended title:** "Alphabyte AI — Anthropic Partner | Claude Consulting for Mid-Market in Canada & US"
**Recommended description:** "Anthropic-certified Claude consulting for 50–2,500 employee organizations in Canada and the US. Citizen developer enablement. Working AI, not prototypes. Since 2016."
**Recommended H1:** Keep "AI that compounds." but add a sub-H2 with the geo + ICP qualifier ("Anthropic-certified consulting for mid-market in Canada and the US.")

### F. Source the homepage "10X / 2 Wks / 4" tiles (item 6)
**Impact:** Removes unsubstantiated claims that quality raters and AI engines discount
**Effort:** 1 hour decision + 30 minutes code
**Action:** Pick for each stat: (a) link to case study, (b) methodology note, or (c) replace with cited industry stat. Then wire in.

### G. Add one third-party stat to each service page
**Impact:** Service pages become AI-citable; closes the largest content gap surfaced this audit
**Effort:** ~1 hour per page (4 hours total)
**Files:** `content/services/*.mdx` or wherever service copy lives
**Each:** one McKinsey/Deloitte/Gartner/Anthropic stat with an inline citation link, placed near the top of the page where AI engines will extract it.

### H. Add titled or named-role testimonials to 4 case studies (item 18)
**Impact:** Content authoritativeness +5, AI citation credibility
**Effort:** 4 hours (external — client outreach)
**Action:** Get permission for one titled quote per case study (e.g., "VP Operations, major reverse-logistics supplier"). Even title-only attribution materially improves trust signals.

### I. Verify Microsoft Partner + Anthropic Certified badges (item 14)
**Impact:** Schema sameAs unlock + on-page trust signal
**Effort:** 20 minutes
**Action:** Get directory URLs for Microsoft Partner listing + Anthropic Academy credential page. Wire links into the 3 locations (homepage trust bar, /about/, /tools/claude/).

---

## Medium (fix within 1 month)

### J. Cloudflare HTML cache rule
**Impact:** Performance — HTML served from edge instead of origin worker
**Effort:** 30 minutes Cloudflare config + 15 minutes deploy script for purge
**Action:** Cloudflare Pages → Cache Rules → set `cache-control: public, max-age=0, s-maxage=31536000, stale-while-revalidate=60` on HTML responses. Add `wrangler` (or API) cache purge to the post-deploy step.

### K. Add `analytics.ahrefs.com` to CSP
**Impact:** Hardening — Ahrefs analytics survives a future CSP tightening
**Effort:** 5 minutes
**Files:** Cloudflare Pages `_headers` or wherever CSP is configured
**Add to script-src + connect-src:** `https://analytics.ahrefs.com`

### L. Automate IndexNow on deploy
**Impact:** Faster indexation on Bing/Yandex after each deploy
**Effort:** 30 minutes
**Action:** Add a step to Cloudflare Pages build/deploy that runs `scripts/ping-indexnow.sh` on successful production deploy.

### M. Publish original Alphabyte data (item 17)
**Impact:** Single highest-leverage long-term content move; only authoritative way to escape borrowed-stats trap
**Effort:** 4–6 hours
**Suggestions:** median time-to-first-prod across engagements, % of pilots that compound vs stall in our portfolio, average workflow count at 90 days, citizen dev programme adoption curve. Could be a blog post, a recurring "Alphabyte Index" page, or both.

### N. Rewrite /blog/why-ai-pilots-stall/ lede (item 19)
**Impact:** AI citation signal on the post most likely to be cited for "AI pilot failure"
**Effort:** 30 minutes
**Action:** Lead with the McKinsey 72%/55% stat, then transition to the brand POV. Currently the stat is buried 250 words in.

### O. Fix Adam Nameh's null thoughtleadership entries (item 25)
**Impact:** Trust signal on highest-traffic team page (5 of 10 blog posts list him as author)
**Effort:** 15 minutes
**File:** `content/team/adam-nameh.json`
**Action:** Either supply 4 URLs (LinkedIn article, whitepaper, resource guide, ML case study) or remove the entries.

### P. SiteNavigationElement.hasPart cleanup
**Impact:** Schema validity (currently ignored by Google because hasPart isn't valid for that type)
**Effort:** 15 minutes
**File:** `src/app/layout.tsx`
**Action:** Either remove the SiteNavigationElement block or restructure with `url` array.

### Q. Diversify McKinsey citation
**Impact:** Content originality signal
**Effort:** 1 hour
**Action:** Replace 2 of the 3 verbatim uses of the McKinsey 72%/55% stat with different sources (Gartner Hype Cycle, BCG AI Index, Stanford AI Index) or with Alphabyte-originated numbers from item M.

---

## Low (backlog)

### R. Add explainer-first openings to remaining 3 tool pages (item 12)
**Impact:** SXO — same fix as MCP page, applied to Claude/Custom AI Agents/On-Premise LLM
**Effort:** 3 hours total
**Files:** `content/tools/claude.mdx`, `content/tools/custom-ai-agents.mdx`, `content/tools/on-premise-llm.mdx`
**Action:** Draft 300–500 word "What is X?" sections per tool.

### S. 5 net-new blog posts for dark pillars (item 16)
**Impact:** Topical authority for 4 commercial pillars currently without blog support
**Effort:** 40–50 hours total (content authoring)
**Suggested titles:**
- /blog/how-to-build-a-custom-mcp-server/ — feeds /tools/mcp/ (already referenced internally as a forward link)
- /blog/citizen-developer-enablement-playbook/ — feeds /services/citizen-development/ (already referenced)
- Data Readiness pillar — diagnostic playbook
- Executive Enablement pillar — buyer guide
- Custom AI Agents / On-Premise LLM pillar — comparison or buyer guide

### T. Build /why-alphabyte/ comparison page (item 26)
**Impact:** Replaces homepage targeting for the "AI consulting agency" head term in the format Google rewards (comparison matrix)
**Effort:** 8–12 hours
**Action:** Define competitive POV (dimensions, where Alphabyte wins, where it doesn't). Comparison matrix vs Big 4 vs freelancer vs offshore.

### U. Wire Google Search Console + CrUX field data (item 29)
**Impact:** Replaces lab-only CWV estimates with real user data + unlocks GSC indexation/search query data
**Effort:** 1–2 hours
**Action:** Run `scripts/google_auth.py`; supply Google API credentials. Future audits gain field data.

### V. Establish YouTube presence (item 36)
**Impact:** Largest known correlation with AI citation rates (~0.74). Currently zero video assets
**Effort:** 20–40 hours
**Action:** Create channel; record 3–5 short explainer videos mirroring comparison blog posts; add channel URL to Organization sameAs + llms.txt.

### W. Resolve /our-work/circular-economy-platform/ slug mismatch (item 35)
**Impact:** Topical alignment for the case study (slug suggests circular economy; content is about executive productivity for reverse logistics)
**Effort:** 30 minutes (if redirect)
**Action:** Either accept as legacy, or 301-redirect to /our-work/executive-productivity-suite/.

### X. Whitelist AhrefsBot in Cloudflare (item 34)
**Impact:** Complete Ahrefs crawls (Googlebot/Bingbot/AI bots unaffected today)
**Effort:** 5 minutes
**Action:** Cloudflare → Security → Bots → allowlist AhrefsBot.

### Y. Add `fetchpriority="high"` to blog hero images
**Impact:** Minor LCP improvement on blog posts
**Effort:** 5 minutes
**File:** `src/components/blog-post-page.tsx`

### Z. AVIF fallback for OG / hero images
**Impact:** Minor file size reduction; better CWV under bandwidth-constrained conditions
**Effort:** 1–2 hours (script generation + `<picture>` wiring)

---

## Suggested Sequencing

**Week 1 (this week):** A, B, C, D (≈ 10 hours total — single batch PR)
**Week 2:** E, F, G, I, K (≈ 5 hours of code + 1 hour copy decisions)
**Week 3–4:** H (external), J, L, N, O, P, Q (≈ 4 hours code + client outreach)
**Month 2+:** M, R, S, T, U, V (content + ops)

Expected score after weeks 1–4: ~92/100.
