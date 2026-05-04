# SEO Action Plan — alphabyte.ai

**Generated:** 2026-05-04
**Current Health Score:** 52/100
**Target Score (30 days):** 72/100

---

## Critical — Fix Immediately

### 1. Create OG image (`/og/default.png`)

**Impact:** Fixes broken social previews on ALL 41 pages. Every LinkedIn, Slack, and X share currently shows no image.

**Details:** `public/og/` contains only a README. Every page references `/og/default.png` (1200x630 PNG). This is the single highest-impact fix for a B2B firm whose primary channel is LinkedIn.

**Files:** `public/og/default.png` (create)

---

### 2. Fix 4 dead internal blog links

**Impact:** Removes 404 internal links from the site's primary content assets. Google interprets dead internal links as quality signals.

**Broken links found in blog posts:**
| Dead URL | Referenced In |
|----------|--------------|
| `/blog/what-a-claude-sdlc-plugin-does/` | citizen-developer-enablement-playbook.mdx (line 68) |
| `/blog/start-with-people-not-process/` | citizen-developer-enablement-playbook.mdx (line 72), claude-for-finance-teams.mdx (line 45) |
| `/blog/mcp-servers-what-they-are/` | how-to-build-a-custom-mcp-server.mdx (line 47) |
| `/blog/data-first-discipline/` | ai-readiness-assessment.mdx (line 49), shadow-ai-governance.mdx (line 83) |

**Options:** Either create the 4 missing blog posts (recommended — they fill real content gaps) or redirect links to existing relevant pages.

**Files:** `content/blog/*.mdx` (4-6 files affected)

---

### 3. Fix duplicate H1 on Services page

**Impact:** Resolves the most significant heading structure issue. Homepage and Services page both have H1: "AI that compounds. Not pilots that stall."

**Fix:** Change the Services page H1 to something unique and keyword-targeted, e.g., "Five AI consulting tracks. Start where your situation actually is."

**Files:** `src/app/services/page.tsx` (line 81-84)

---

### 4. Fix double H1 on Our Work page

**Impact:** Our Work page has two H1 elements. Reduce to one.

**Files:** `src/app/our-work/page.tsx` (lines 88-94)

---

### 5. Fix address spelling inconsistency

**Impact:** NAP consistency is a trust signal. Two different spellings exist:
- "155 Winges Road" — `src/lib/footer-data.ts:21`, `src/app/contact/page.tsx:137`
- "155 Wintges Road" — `src/app/about/page.tsx:254`

**Fix:** Verify the correct spelling against the actual lease/registration and unify.

**Files:** `src/lib/footer-data.ts`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`

---

### 6. Fix LinkedIn URL inconsistency

**Impact:** Two different LinkedIn company URLs:
- Footer: `https://www.linkedin.com/company/alphabyte-solutions-inc`
- Contact page: `https://www.linkedin.com/company/alphabyte`

**Fix:** Verify which URL is correct and unify everywhere, including in the Organization schema `sameAs`.

**Files:** `src/lib/footer-data.ts:28`, `src/app/contact/page.tsx:150`

---

### 7. Create `/public/llms.txt`

**Impact:** AI search discoverability. The `llms.txt` standard tells AI crawlers what the site covers.

**Files:** `public/llms.txt` (create)

**Suggested content:**
```
# Alphabyte AI

> Claude-focused AI consulting for mid-market organizations in North America. Practitioner-led, no junior bench. Operating since 2016.

## Services
- /services/citizen-development/ — Governed Claude environment for every employee
- /services/executive-enablement/ — Custom Claude environment for leadership
- /services/discovery/ — AI strategy sprint, 3-5 weeks
- /services/data-readiness/ — Data quality audit and governance
- /services/infrastructure/ — MCP servers, agents, on-premise LLMs

## Blog (Top Articles)
- /blog/ai-governance-framework-mid-market/ — PIPEDA-aware AI governance framework
- /blog/how-to-build-a-custom-mcp-server/ — Production MCP server architecture
- /blog/claude-vs-chatgpt-enterprise/ — Honest enterprise AI comparison
- /blog/citizen-developer-enablement-playbook/ — 2026 citizen dev playbook

## About
- /about/ — Practice description, certifications, team
- /team/ — 8 practitioners with full profiles
- /our-work/ — Active case studies with outcomes
```

---

### 8. Fix Organization schema — populate `sameAs`, add address

**Impact:** Closes the entity disambiguation gap that prevents AI knowledge graphs from recognizing Alphabyte.

**Current state:** `sameAs: []` (empty array) in `src/app/layout.tsx:65`. No `address`, `telephone`, or `contactPoint`.

**Fix:** Add LinkedIn URL to `sameAs`, add full address block, add email.

**Files:** `src/app/layout.tsx` (lines 55-66)

---

## High — Fix Within 1 Week

### 9. Add `dateModified` to BlogPosting schema

All 10 blog posts emit `datePublished` but not `dateModified`. Google uses this for content freshness.

**Fix:** Add `dateModified` to the BlogPosting JSON-LD, defaulting to `publishedDate` if no `updatedDate` exists in frontmatter.

**Files:** `src/app/blog/[slug]/page.tsx` (lines 204-225)

---

### 10. Add WebSite schema with `@id`

No `WebSite` schema node exists. This enables Google Sitelinks Searchbox and cross-schema referencing.

**Files:** `src/app/layout.tsx`

---

### 11. Add ContactPage schema with address

Contact page emits only BreadcrumbList despite having a form, address, email, and LinkedIn.

**Files:** `src/app/contact/page.tsx`

---

### 12. Add `image`, `knowsAbout`, `description` to Person schemas

Team member schemas have `name`, `jobTitle`, `worksFor` but are missing `image` (available in `member.avatarSrc`), `knowsAbout` (from `member.expertise`), and `description` (from `member.bio[0]`).

**Files:** `src/app/team/[slug]/page.tsx`

---

### 13. Add blog hero images and case study visuals

Zero content images exist across the entire site beyond the team headshots and logo. Blog posts need hero images. Case studies need screenshots or diagrams showing the work.

**Files:** `content/blog/*.mdx`, `src/app/our-work/*/page.tsx`, `public/blog/`, `public/our-work/`

---

### 14. Expand ProfessionalService schema on homepage with address

The homepage ProfessionalService schema has no `address`, `telephone`, or `geo` properties. These are recommended for local search eligibility.

**Files:** `src/app/page.tsx` (lines 137-150)

---

### 15. Set up Google Search Console and submit sitemap

Without GSC verification, there is no visibility into index coverage or crawl errors.

---

### 16. Add analytics (Plausible or GA4)

No analytics detected in the codebase. Cannot measure SEO performance without it.

**Files:** `src/app/layout.tsx`

---

## Medium — Fix Within 1 Month

### 17. Add FAQ sections to service pages with FAQPage schema

No FAQ content exists anywhere on the site. This is prime AI Overview and PAA content.

**Files:** `src/app/services/*/page.tsx`

---

### 18. Convert blog H2s to question format on top 3 posts

Question-based headings trigger Google AI Overview featured snippet extraction.

**Files:** `content/blog/ai-governance-framework-mid-market.mdx`, `content/blog/claude-vs-chatgpt-enterprise.mdx`, `content/blog/how-to-build-a-custom-mcp-server.mdx`

---

### 19. Add external citations to blog posts

Every blog post has zero outbound links to primary sources. The governance post discusses PIPEDA with no link to the legislation. The shadow AI post makes claims with no data sources.

**Files:** `content/blog/*.mdx` (prioritize top 5 posts)

---

### 20. Strengthen blog-to-service cross-linking

Blog posts mention services but linking is inconsistent. Add "Related Services" sections at the end of each post.

**Files:** `content/blog/*.mdx`

---

### 21. Make sitemap `lastModified` dynamic

All dates are hardcoded. Consider using file modification times or git commit dates.

**Files:** `src/app/sitemap.ts`

---

### 22. Optimize title tags for search intent

Some titles are too short or brand-heavy:
- "About" → "About Alphabyte AI — Claude-Native Consulting Since 2016"
- "Blog" → "Blog — AI Deployment for Mid-Market | Alphabyte"
- Homepage title should include "Alphabyte" brand name

**Files:** Multiple `page.tsx` files

---

### 23. Add AboutPage and case study schemas

About page has zero JSON-LD. Case study pages have only BreadcrumbList.

**Files:** `src/app/about/page.tsx`, `src/app/our-work/*/page.tsx`

---

### 24. Add visible breadcrumb navigation component

BreadcrumbList schema exists but no visible breadcrumb UI component.

**Files:** New `src/components/breadcrumb.tsx`, update page layouts

---

### 25. Surface press mentions with hyperlinks

Maclean's and University of Toronto Magazine mentions exist in team bio JSON but are invisible to crawlers. Add visible hyperlinks on the About page and team profiles.

**Files:** `src/app/about/page.tsx`, `content/team/adam-nameh.json`

---

### 26. Add IndexNow integration for faster content indexing

**Files:** Build pipeline or `public/` key file

---

### 27. Change blog sitemap `changeFrequency` from `yearly` to `monthly`

**Files:** `src/app/sitemap.ts` (line 33)

---

## Low — Backlog

### 28. Create page-specific OG images for high-value pages
### 29. Convert team photos to WebP with explicit width/height
### 30. Add ItemList schemas to index pages (blog, team, services, tools)
### 31. Add `timeRequired` to BlogPosting schemas
### 32. Add FAQPage schema to comparison blog posts
### 33. Build a resource/glossary page for topical authority
### 34. Establish cross-platform social profiles (GitHub, YouTube)
### 35. Add downloadable one-pagers for service pages
### 36. Add Crunchbase profile and link in Organization sameAs

---

## Estimated Impact by Phase

| Phase | Timeline | Actions | Score Impact |
|-------|----------|---------|-------------|
| Phase 1 (Critical) | This week | #1-8 | 52 → 62 |
| Phase 2 (High) | Next week | #9-16 | 62 → 72 |
| Phase 3 (Medium) | Month 1 | #17-27 | 72 → 80 |
| Phase 4 (Low) | Backlog | #28-36 | 80 → 85+ |

---

*Generated by Claude Code SEO Audit — 2026-05-04*
