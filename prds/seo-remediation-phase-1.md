# SEO Remediation Phase 1

## Status
Shipped

## Type
Cross-cutting

## Summary
The site scored 52/100 in a full SEO audit. Most issues are code-level fixes that shipped without passing the existing SEO page checklist: a missing OG image, dead internal links, duplicate H1 tags, empty Organization schema fields, missing structured data on several page types, and an absent `llms.txt`. This PRD covers the Critical and High code-implementable fixes from the audit action plan. Design asset creation (OG images, blog hero images) and external account setup (GSC, analytics) are separate efforts.

## Decided
- Dead blog links will be redirected to existing relevant pages, not held for new post creation. Writing the 4 missing posts is a separate content effort.
- `llms.txt` content follows the structure from the audit action plan.
- `dateModified` on BlogPosting schema defaults to `publishedDate` when no `updatedDate` frontmatter field exists.
- WebSite schema goes in `layout.tsx` alongside the existing Organization schema.
- Blog sitemap `changeFrequency` changes from `yearly` to `monthly`.
- Title tag optimizations use the brand voice. No forbidden vocabulary.
- Schema additions follow the existing `structured-data.md` skill patterns (JSON-LD via `dangerouslySetInnerHTML`, array syntax for multiple schemas per page).
- The `sameAs` array in Organization schema will include the verified LinkedIn company URL once confirmed.

## Open Questions
- What is the correct street address spelling — "Winges Road" (used in footer-data.ts and contact page) or "Wintges Road" (used in about page)? (owner: Mitchell, blocks implementation: yes)
- Which LinkedIn company URL is correct — `https://www.linkedin.com/company/alphabyte-solutions-inc` (footer) or `https://www.linkedin.com/company/alphabyte` (contact page)? (owner: Mitchell, blocks implementation: yes)

## Scope

### In scope
- Fix 4 dead internal blog links by redirecting to existing relevant pages
- Fix duplicate H1 on Services page (currently shares H1 with homepage)
- Fix double H1 on Our Work page (reduce to one)
- Create `public/llms.txt` for AI crawler discoverability
- Fix Organization schema in `layout.tsx`: populate `sameAs` with LinkedIn URL, add `address`, add `contactPoint` with email
- Add WebSite schema with `@id` to `layout.tsx`
- Add `dateModified` to BlogPosting schema (all 10 posts, via `blog/[slug]/page.tsx`)
- Add ContactPage schema to contact page
- Add `image`, `knowsAbout`, `description` to Person schemas on team member pages
- Expand ProfessionalService schema on homepage with `address` block
- Add AboutPage schema to about page
- Add primary entity schema (WebPage or CreativeWork) to the 3 case study pages
- Optimize thin title tags: About, Blog, Team, homepage brand name inclusion
- Change blog sitemap `changeFrequency` from `yearly` to `monthly`
- Unify address spelling across all references once correct value is confirmed
- Unify LinkedIn URL across all references once correct value is confirmed

### Out of scope
- Creating the 4 missing blog posts that dead links reference (content creation, separate PRD)
- Creating OG images (`/og/default.png` and page-specific variants) — design asset, separate effort
- Adding blog hero images or case study visuals — design assets
- Google Search Console setup and sitemap submission — external account provisioning
- Analytics integration (Plausible or GA4) — external vendor decision + account provisioning
- FAQ sections on service pages — Medium priority, separate PRD
- Blog H2 reformatting to question format — Medium priority, content change
- External citations in blog posts — Medium priority, content change
- Visible breadcrumb navigation component — Medium priority, separate PRD
- IndexNow integration — Medium priority

## Pages & Components

### Modifying
- `src/app/layout.tsx` — expand Organization schema (sameAs, address, contactPoint), add WebSite schema
- `src/app/page.tsx` — expand ProfessionalService schema with address, update meta title to include brand name
- `src/app/services/page.tsx` — change H1 to be unique and keyword-targeted
- `src/app/our-work/page.tsx` — reduce to single H1
- `src/app/blog/[slug]/page.tsx` — add `dateModified` to BlogPosting schema
- `src/app/team/[slug]/page.tsx` — add `image`, `knowsAbout`, `description` to Person schema
- `src/app/contact/page.tsx` — add ContactPage schema, fix LinkedIn URL
- `src/app/about/page.tsx` — add AboutPage schema, fix address spelling
- `src/app/team/page.tsx` — update title tag
- `src/app/blog/page.tsx` — update title tag
- `src/app/sitemap.ts` — change blog post `changeFrequency` from `yearly` to `monthly`
- `src/lib/footer-data.ts` — fix address spelling or LinkedIn URL as needed
- `src/app/our-work/fire-protection-compliance/page.tsx` — add primary entity schema
- `src/app/our-work/circular-economy-platform/page.tsx` — add primary entity schema
- `src/app/our-work/housing-services-corp/page.tsx` — add primary entity schema
- `content/blog/citizen-developer-enablement-playbook.mdx` — fix 2 dead internal links
- `content/blog/claude-for-finance-teams.mdx` — fix 1 dead internal link
- `content/blog/how-to-build-a-custom-mcp-server.mdx` — fix 1 dead internal link
- `content/blog/ai-readiness-assessment.mdx` — fix 1 dead internal link
- `content/blog/shadow-ai-governance.mdx` — fix 1 dead internal link

### Creating
- `public/llms.txt` — AI crawler site summary following llms.txt standard

## Content

### Verbatim copy
- `public/llms.txt` full content:
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

### Drafted at implement-time
- Services page H1: must be unique from homepage H1 ("AI that compounds. Not pilots that stall."), keyword-targeted for "AI consulting services," under 8 words per brand rule, Alphabyte voice
- Homepage meta title: add "Alphabyte" or "Alphabyte AI" naturally, keep under 60 chars including suffix
- About page meta title: replace bare "About" with something search-intent-driven, under 60 chars
- Blog index meta title: replace bare "Blog" with something search-intent-driven, under 60 chars
- Team index meta title: replace bare "Our Team" with something search-intent-driven, under 60 chars
- Dead link replacements: each broken `/blog/...` link should be replaced with the most topically relevant existing blog post or service page URL. Map each dead link to the closest existing content.

## Search Intent & SEO
N/A (no new routes — all changes are to existing pages)

Note: the `llms.txt` file at `public/llms.txt` is a static file served at the root, not a Next.js route. No sitemap entry needed.

## Design Notes
Defer to alphabyte-brand skill defaults. No visual changes in this PRD.

## Motion & Interactivity
None. All changes are metadata, structured data, copy, and static file creation.

## Acceptance Criteria
- [ ] Zero dead internal links across all blog posts (`pnpm build` succeeds and all internal `href` paths resolve to real routes)
- [ ] Services page has exactly one H1 that is distinct from the homepage H1
- [ ] Our Work page has exactly one H1
- [ ] `public/llms.txt` exists and is accessible at `/llms.txt` after build
- [ ] Organization schema in `layout.tsx` has a non-empty `sameAs` array with the verified LinkedIn URL
- [ ] Organization schema includes a `PostalAddress` with the verified street address
- [ ] Organization schema includes `contactPoint` with email
- [ ] WebSite schema with `@id` is emitted on every page via `layout.tsx`
- [ ] Every BlogPosting schema includes `dateModified` (value matches `publishedDate` unless `updatedDate` exists in frontmatter)
- [ ] Contact page emits ContactPage JSON-LD alongside existing BreadcrumbList
- [ ] All 8 Person schemas include `image`, `knowsAbout`, and `description` properties
- [ ] Homepage ProfessionalService schema includes `address` block
- [ ] About page emits AboutPage JSON-LD
- [ ] All 3 case study pages emit a primary entity schema (WebPage at minimum)
- [ ] Homepage meta title includes "Alphabyte" brand name
- [ ] About, Blog, and Team index titles are descriptive (not single-word)
- [ ] Blog posts in `sitemap.ts` use `changeFrequency: "monthly"` not `"yearly"`
- [ ] Address is spelled consistently in all 3 locations (footer-data.ts, about page, contact page)
- [ ] LinkedIn URL is consistent in all references (footer-data.ts, contact page, Organization sameAs)
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks (no forbidden vocabulary in new titles or H1)
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds

## Related
- `FULL-AUDIT-REPORT.md` — source audit with scoring methodology
- `ACTION-PLAN.md` — full 36-item prioritized action plan (this PRD covers items #2-4, #7-12, #14, #22-23, #27, and the address/LinkedIn fixes #5-6)
- `.claude/skills/seo/page-checklist.md` �� the pre-ship checklist that should have caught most of these issues
- `.claude/skills/seo/structured-data.md` — patterns for JSON-LD implementation
- `.claude/skills/seo/metadata-patterns.md` — patterns for metadata and OG tags

## Notes
- This PRD intentionally excludes Action Plan item #1 (OG image creation) because it requires a design asset that cannot be produced in code. That said, the OG image is the single highest-impact fix on the list. It should be created before or in parallel with this implementation.
- The 4 dead blog link targets (`what-a-claude-sdlc-plugin-does`, `start-with-people-not-process`, `mcp-servers-what-they-are`, `data-first-discipline`) represent genuine content gaps. A follow-up content PRD should create these posts to fill the topic cluster. For now, redirect the links to prevent 404s.
- The audit also flagged future-dated blog posts (some posts have `publishedDate` values after 2026-05-04). This is not addressed in this PRD because changing publish dates affects sitemap entries, blog index sort order, and schema — it needs its own scoping decision.
- Estimated effort: 2-4 hours for an implementer familiar with the codebase. All changes are metadata, schema, copy, and one new static file.
- Action Plan items #13 (blog/case study images), #15 (GSC), #16 (analytics), and #17-36 (Medium/Low) are deferred to future PRDs or backlog items.

---
*Created: 2026-05-04*
*Last updated: 2026-05-04 (shipped)*
