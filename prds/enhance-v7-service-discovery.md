# V7 Discovery Service Page

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/services-pages.md`

## Motivation
The Discovery page at `/services/discovery` currently ships as a stub — a hero with placeholder copy and a "Coming Soon" section. V7 of the approved design (PDF page 5) specifies a full service detail page with body copy, a dark three-stat bar, a "What the first 30 days look like" timeline, a four-item deliverables section, right/not-right qualification panels, and a timeline footer. This enhancement replaces the stub with the full V7 content, bringing Discovery in line with the sibling service pages (Executive Enablement, Citizen Development) that already use the `ServicePage` reusable component.

## Summary
Replace the Discovery stub page with a full service detail page built on the `ServicePage` component. The page matches PDF page 5 verbatim: eyebrow, H1, subhead, two body paragraphs, primary and secondary CTAs, a three-stat dark bar (4 weeks / 3 / No decks), a four-week timeline box, four deliverables, right/not-right qualification panels, and a timeline footer showing "3 to 5 weeks from kickoff."

## Changing
- Original: Discovery page renders a stub with hero section and "Coming Soon" placeholder. Updated: Discovery page renders full V7 content via the `ServicePage` component with all seven sections (hero, stat bar, 30-days timeline, deliverables, right/not-right panels, timeline footer).
- Original: Page uses custom inline layout markup. Updated: Page uses the shared `ServicePage` component with data props, matching the pattern established by Executive Enablement and Citizen Development.

## Decided
- Use the `ServicePage` component from `src/components/service-page.tsx` — the page shape matches exactly (eyebrow, H1, subhead, body, stat bar, 30-days, deliverables, right/not-right, timeline footer).
- Eyebrow text: "SERVICES · DISCOVERY" (matches PDF verbatim).
- H1: "Discovery" (matches PDF).
- Subhead: "What should our AI strategy be?" (matches PDF).
- Body copy is two paragraphs, taken verbatim from the PDF:
  - Paragraph 1: "You have probably already been through this. The workshops. The use case prioritization exercise. The roadmap document that took eight weeks to produce and was obsolete before anyone acted on it."
  - Paragraph 2: "We are not that. Discovery at Alphabyte is four weeks, not six months. We come in with a point of view, not a blank whiteboard. We find out what your team is already building, identify the three workflows worth automating right now, and hand you an architecture and a plan you can execute immediately."
- Primary CTA: "Book a Discovery Call" — opens the Discovery Call modal (action: "modal").
- Secondary CTA: "Back to all services" — links to `/services/`.
- Three-stat bar values (from PDF):
  - Stat 1: value "4 weeks", label "From kickoff to Findings & Recommendations document"
  - Stat 2: value "3", label "Prioritized use cases with preliminary architectures"
  - Stat 3: value "No decks", label "A plan you can execute immediately"
- 30-days timeline (from PDF):
  - Week 1: "Stakeholder and technical sessions — we talk to the people doing the actual work and find out what is genuinely painful, genuinely automatable, and what has already been built informally."
  - Week 2: "Use case development — three defined use cases, each with a feasibility assessment, a preliminary architecture, and a concrete statement of what it will produce for your business."
  - Week 3: "Gap analysis — what is in your environment, what is missing, what must be fixed before any build starts. No surprises six months in."
  - Day 30 — what you have: "A Findings and Recommendations document. Three use cases with architectures. A prioritized gap list. A staging pathway. Everything you need to go into a budget conversation."
- Four deliverables (from PDF):
  - "Stakeholder sessions that surface real problems" — "We talk to the people doing the actual work — operations, finance, sales, product. We are finding the workflows that are genuinely painful and the people who have already started solving them."
  - "Three use cases worth building" — "Not a list of twenty ideas. Three, each with a feasibility assessment, a preliminary architecture, and a concrete outcome statement. Prioritized by impact and buildability."
  - "Current state and gap analysis" — "What is in your environment, and what is missing, and what must be fixed before any build starts. Infrastructure, data quality, governance, security posture."
  - "Findings and Recommendations document" — "Not a slide deck. Exactly what to build, in what order, with what dependencies, against what timeline. You leave with a plan, not a process."
- Right for you if (from PDF):
  - "You have not made a meaningful AI investment yet and want to know where to start without wasting the next six months"
  - "Leadership wants a credible business case before committing budget"
  - "You are in a regulated industry or the Canadian public sector and need governance in the roadmap from day one"
- Not right for you if (from PDF):
  - "You already have a clear roadmap and just need someone to execute — skip to Citizen Dev, Executive Enablement, or Infrastructure"
  - "You want a strategic document to satisfy a stakeholder without a real intent to execute — we scope for execution, not for optics"
- Timeline footer: "3 to 5 weeks from kickoff"
- Deliverable icons: use simple emoji icons consistent with the sibling pages (clipboard/magnifying glass style — the PDF shows small circular icons; match the pattern used by Executive Enablement and Citizen Development).
- Breadcrumb: Home / Services / Discovery (matches PDF and existing breadcrumb schema).
- Preserve existing metadata, structured data (Service + BreadcrumbList JSON-LD), and SEO plumbing. Update metadata description to reflect full page content rather than stub description.

## Open Questions
None

## Scope

### In scope
- Replace the stub page content at `src/app/services/discovery/page.tsx` with a full implementation using the `ServicePage` component
- Pass all content as data props to `ServicePage` — no custom layout markup
- Update the metadata description to reflect the full page content
- Preserve existing structured data schemas (Service, BreadcrumbList)

### Out of scope
- Changes to the `ServicePage` component itself — it already supports all required sections
- Changes to other service pages
- OG image generation (uses existing default)
- Changes to navigation, sitemap, or routing (route already exists)

## Pages & Components

### Modifying
- `src/app/services/discovery/page.tsx` — replace stub content with `ServicePage` component + data props

### Creating
None

## Content

### Verbatim copy
All copy is taken directly from the PDF and listed in the Decided section above. Every string appears verbatim — no paraphrasing.

### Drafted at implement-time
- Updated `metadata.description` — draft a 140–160 character description reflecting the full Discovery page content, following voice-and-tone rules.

## Search Intent & SEO
- **Target query:** Inherits from original ("AI strategy consulting", "AI discovery engagement")
- **URL slug:** Unchanged (`/services/discovery/`)
- **Meta title:** Unchanged ("Discovery — AI Strategy & Roadmap Consulting")
- **Meta description:** Updated to reflect full page content rather than stub placeholder. Draft at implement-time.
- **Structured data:** Unchanged (Service + BreadcrumbList already present)
- **OG image:** Unchanged (uses default)

## Design Notes
- The page uses the `ServicePage` component, which implements the canonical layout for all service detail pages: breadcrumb → hero (eyebrow, H1, subhead, body, CTAs) → dark stat bar → 30-days timeline box → deliverables → right/not-right panels → timeline footer.
- The dark stat bar is the key V7 addition — three stats on a dark (`bg-foreground`) background with green accent values. This is already implemented in `ServicePage`.
- Deliverable icons in the PDF appear as small circular icons. Match the emoji-based icon pattern used by Executive Enablement and Citizen Development sibling pages.

## Motion & Interactivity
Unchanged from original. No new animations or interactions. The `ServicePage` component handles all existing interactivity (Discovery Call modal trigger, link hover states).

## Impact

### Affected pages or components
None beyond the modifying list above. The `ServicePage` component is consumed, not modified.

### URL or routing changes
None — route already exists at `/services/discovery/`.

### Content backfill
None — the stub was a placeholder; replacing it is the intended outcome.

## Acceptance Criteria
- [ ] Discovery page at `/services/discovery` renders the full V7 design using the `ServicePage` component
- [ ] All copy matches PDF page 5 verbatim — no paraphrasing, no truncation
- [ ] Three-stat dark bar renders with values: "4 weeks" / "3" / "No decks"
- [ ] 30-days timeline box renders four rows: Week 1, Week 2, Week 3, Day 30
- [ ] Four deliverables render with icons, titles, and body text
- [ ] Right/not-right panels render with correct items (3 right, 2 not-right)
- [ ] Timeline footer shows "3 to 5 weeks from kickoff" with "Book a Discovery Call" CTA
- [ ] Primary CTA "Book a Discovery Call" opens the Discovery Call modal
- [ ] Secondary CTA "Back to all services" links to `/services/`
- [ ] Breadcrumb shows Home / Services / Discovery
- [ ] Existing structured data (Service, BreadcrumbList JSON-LD) preserved
- [ ] Metadata description updated to 140–160 characters reflecting full content
- [ ] Page builds without errors (`pnpm build` succeeds)
- [ ] No TypeScript errors (`pnpm typecheck` clean)
- [ ] Passes `seo/page-checklist.md` for the Discovery page
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks
- [ ] Visual layout matches PDF page 5 when compared side-by-side

## Related
- `prds/services-pages.md` (the feature being enhanced)
- `prds/service-page-component.md` (the reusable ServicePage component)
- `prds/enhance-v7-service-executive-enablement.md` (sibling V7 service page — reference for ServicePage usage pattern)
- `prds/enhance-v7-service-citizen-development.md` (sibling V7 service page)

## Notes
- The existing stub page has custom inline layout. This enhancement replaces all of it with a single `ServicePage` component call plus data props, matching the pattern established by the V7 Executive Enablement and Citizen Development pages.
- The `ServicePage` component already handles all seven sections. No component modifications are needed.
- The page converts from a Server Component that renders inline JSX to a page that imports and passes props to `ServicePage` (a client component). The metadata export and structured data script remain in the server component wrapper.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*

