# Data Readiness — V6 Full Page Build

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/services-pages.md`

## Motivation
The Data Readiness page shipped as an intentional stub — enough to resolve nav links and show the track positioning, but with a "Coming Soon" section in place of real content. The V6 design (PDF page 6, stamped APPROVED COPY) delivers the full page: a 30-day timeline, five deliverables with descriptions, qualification panels, and a timeline bar. This enhancement replaces the stub with the complete page and moves the route from `/services/data/` to `/services/data-readiness/` to match the V6 URL convention.

## Summary
Replace the Data Readiness stub page with the full V6 design. The page gains a four-row timeline ("What the first 30 days look like"), a five-item deliverables section ("What we deliver"), a two-column qualification panel ("Right for you if" / "Not right for you if"), and a timeline bar. The route moves from `/services/data/` to `/services/data-readiness/` with a 301 redirect for the old path.

## Changing
- Original: Route is `/services/data/`. Updated: Route is `/services/data-readiness/`.
- Original: Page body is a stub with a "Coming Soon" section. Updated: Full page content from PDF page 6.
- Original: Primary CTA was "Book a Discovery Call" opening modal. Updated: Still "Book a Discovery Call" opening modal (same behavior, but button now also appears at bottom of page alongside timeline bar).
- Original: Breadcrumb URLs point to `/services/data/`. Updated: Breadcrumb terminal item is at `/services/data-readiness/`.
- Original: Metadata canonical and OG URLs point to `/services/data/`. Updated: Point to `/services/data-readiness/`.
- Original: Structured data URLs reference `/services/data/`. Updated: Reference `/services/data-readiness/`.

## Decided
- The page file moves from `src/app/services/data/page.tsx` to `src/app/services/data-readiness/page.tsx`. The old directory can be removed.
- A 301 redirect from `/services/data/` to `/services/data-readiness/` is added to `public/_redirects`.
- The sitemap entry for `/services/data/` is updated to `/services/data-readiness/`.
- The hero section retains the breadcrumb, eyebrow, H1, sub-head, body paragraph, and two CTAs from the PDF. The body paragraph copy changes from the stub version to the PDF version.
- The eyebrow format changes from "Track 02 · Data Readiness" to "SERVICES · DATA READINESS" to match the PDF.
- The "What the first 30 days look like" section is a new content block with four rows: Week 1, Week 2, Weeks 3 to 4, and "Day 30 — what you have". Each row has a bold label and a description. The "Day 30" label is rendered in Alphabyte Blue as a distinct visual callout.
- The "What we deliver" section lists five deliverables, each with a bold title and description paragraph. Each deliverable has a small icon/indicator to its left (the PDF shows simple geometric shapes — implement as small decorative squares or circles in muted foreground).
- The "Right for you if" / "Not right for you if" section is a two-column layout. Left column has checkmark items; right column has X-mark items. Both columns are bordered containers on white background.
- The timeline bar at the bottom reads "4 to 8 weeks from kickoff" on the left with a "Book a Discovery Call" button on the right, opening the Discovery Call modal.
- All copy is verbatim from the PDF — no paraphrasing.

## Open Questions
None

## Scope

### In scope
- New route at `/services/data-readiness/` with full page content from PDF page 6
- Removal of the old stub at `src/app/services/data/page.tsx`
- 301 redirect from `/services/data/` to `/services/data-readiness/` in `public/_redirects`
- Sitemap update for the new route
- Updated metadata, structured data, and breadcrumb for new URL
- Hero section with PDF-verbatim copy
- "What the first 30 days look like" timeline section
- "What we deliver" deliverables section (5 items)
- "Right for you if" / "Not right for you if" qualification panels
- Timeline bar with "4 to 8 weeks from kickoff" and bottom CTA

### Out of scope
- Changes to other service pages
- Changes to the services index page
- Changes to the header or footer
- Pricing display on this page (the PDF does not show pricing on this page)
- Case study integrations or testimonials
- OG image specific to this page (continue using `/og/default.png`)

## Pages & Components

### Modifying
- `src/app/sitemap.ts` — update `/services/data/` entry to `/services/data-readiness/`
- `public/_redirects` — add 301 redirect from `/services/data/` to `/services/data-readiness/`

### Creating
- `src/app/services/data-readiness/page.tsx` — full Data Readiness page replacing the stub

## Content

### Verbatim copy

All copy below is taken directly from the PDF (page 6) and must be used exactly as written.

#### Breadcrumb
- "Home" / "Services" / "Data Readiness"

#### Hero
- Eyebrow: "SERVICES · DATA READINESS"
- H1: "Data Readiness"
- Sub-head: "Is our data ready for AI?"
- Body paragraph 1: "Most AI projects do not fail because of the model. They fail because nobody validated the data underneath it before the build started."
- Body paragraph 2: "You do not know which of your data is clean and which is a problem until something breaks in — usually six months and a significant budget into an engagement. We find that out in week two, before anything is built on top of it."
- Primary CTA: "Book a Discovery Call" (opens Discovery Call modal)
- Secondary CTA: "Back to all services" (links to `/services/`)

#### What the first 30 days look like
- Section heading: "WHAT THE FIRST 30 DAYS LOOK LIKE"
- Week 1: "Data environment audit — we assess your operational data across every source that will feed your AI deployment. Deduplication, completeness, accuracy, consistency. We map what you have and what the gaps cost you."
- Week 2: "Governance and security review — retention policies, classification, DLP tagging, compliance alignment against SOC 2, PIPEDA, and where relevant FIPPA. Infrastructure and security reviewed for AI deployment requirements."
- Weeks 3 to 4: "AI readiness scorecard delivered across five dimensions. Where gaps exist, a specific prioritized remediation plan with your options for closing them."
- Day 30 — what you have: "A formal AI readiness scorecard you can take into a board or compliance conversation. A clear remediation pathway. No ambiguity about what needs to happen before any build can begin."

#### What we deliver
- Section heading: "WHAT WE DELIVER"
- Full data quality audit: "Deduplication, completeness, accuracy, consistency across every data source feeding your AI deployment. Gaps mapped, risks quantified."
- Data governance assessment: "Retention policies, DLP tagging, classification frameworks, SOC 2, PIPEDA, and FIPPA compliance alignment. Required documentation for regulated industries and the Canadian public sector."
- Infrastructure and security posture review: "A targeted review from the perspective of Claude deployment — data access patterns, credential management, network segmentation, and the controls required to operate safely."
- AI readiness scorecard: "Formal rating across five dimensions: data quality, data governance, infrastructure readiness, security posture, and integration maturity."
- Remediation pathway: "Specific, prioritized steps to close each gap. You leave with problems and the sequence of fixes — not just a list of concerns."

#### Right for you if
- "You are in a regulated industry and data compliance is a hard prerequisite to any AI deployment"
- "You have been told your data is messy and want to know exactly how messy before committing to a build"
- "You are about to begin agent or MCP work and want to protect that investment"
- "A previous AI engagement underdelivered and you want to understand why"

#### Not right for you if
- "You are in early-stage discovery and do not yet know which data sources your AI deployment will require — complete Discovery first"
- "You have recent, validated data documentation and just need a scoped integration — we will confirm this in the first conversation"

#### Timeline bar
- Left: "TIMELINE" label, "4 to 8 weeks from kickoff"
- Right: "Book a Discovery Call" button (opens Discovery Call modal)

### Drafted at implement-time
None — all copy is specified above from the PDF.

## Search Intent & SEO
- **Target query:** "AI data readiness assessment", "data quality audit AI"
- **URL slug:** `/services/data-readiness/` (changed from `/services/data/`)
- **Meta title:** "Data Readiness — AI Data Quality & Governance" (unchanged text, but canonical URL updated)
- **Meta description:** "Data quality audits, governance assessments, and AI readiness scorecards. Make sure your data foundation supports the AI you want to build." (unchanged)
- **Structured data:** Service JSON-LD and BreadcrumbList JSON-LD updated to reference `/services/data-readiness/`
- **OG image:** `/og/default.png` (unchanged)

## Design Notes

SOURCE OF TRUTH: `/tmp/page-service-data-readiness-06.png`

The PDF is the canonical visual spec. All layout and typographic decisions below are derived from it.

- **Hero section:** `bg-canvas`, editorial typography. Eyebrow is uppercase, `text-body-sm`, `tracking-brand-wide`, `text-alphabyte-blue`. H1 at `text-display`, `tracking-brand-tight`. Sub-head at `text-headline`, `tracking-brand-snug`, `text-muted-foreground`. Body in `text-body`, `text-foreground`. Max content width ~55ch for body text.
- **"What the first 30 days look like" section:** White card surface (`bg-white`) with border (`border-border-default`), internal padding. Section heading is uppercase, `tracking-brand-wide`, `text-body-sm`, `text-foreground`, font-bold. Four rows with bold week labels on the left and description text on the right. "Day 30 — what you have" label is rendered in `text-alphabyte-blue` to visually distinguish it as the outcome row. Rows separated by spacing, not hairlines.
- **"What we deliver" section:** `bg-canvas` background. Section heading is uppercase, `tracking-brand-wide`, `text-body-sm`, `text-foreground`, font-bold. Five deliverable items stacked vertically. Each has a small decorative icon/shape to the left (implement as a small square or geometric indicator in `text-muted-foreground`), a bold title, and a description paragraph.
- **Qualification panels:** Two-column layout on desktop, stacked on mobile. Each panel is a bordered container on white background. "RIGHT FOR YOU IF" heading uppercase in `text-body-sm`, `tracking-brand-wide`. Left panel items have teal checkmarks (✓ in `text-alphabyte-blue`). Right panel items have muted X marks (✕ in `text-muted-foreground`). "NOT RIGHT FOR YOU IF" heading also uppercase.
- **Timeline bar:** Full-width strip at the bottom. "TIMELINE" label uppercase, `text-body-sm`, `tracking-brand-wide`. "4 to 8 weeks from kickoff" in larger body text. "Book a Discovery Call" button right-aligned, using the dark variant (black fill, white text).
- **Overall spacing rhythm:** Generous vertical spacing between sections (py-16 md:py-24). The page follows the same editorial, content-dense layout as other V6 service pages.

## Motion & Interactivity
None — static page. No scroll animations, no tab switching, no interactive elements beyond the Discovery Call modal triggers and standard link interactions. Consistent with other V6 service detail pages.

## Impact

### Affected pages or components
- `src/app/services/page.tsx` — if the services index page links to `/services/data/`, those links need updating to `/services/data-readiness/`. (Check at implement time; navigation.ts already points to `/services/data-readiness/`.)
- `src/components/track-tabs.tsx` — if track tab CTAs link to `/services/data/`, update to `/services/data-readiness/`.

### URL or routing changes
- `/services/data/` → `/services/data-readiness/` (301 redirect in `public/_redirects`)

### Content backfill
- Any internal links pointing to `/services/data/` across the site should be updated to `/services/data-readiness/`. The redirect handles external links, but internal links should point to the canonical URL directly.

## Acceptance Criteria
- [ ] `/services/data-readiness/` renders without console errors and displays all sections from the PDF
- [ ] Old stub at `src/app/services/data/page.tsx` is removed
- [ ] 301 redirect from `/services/data/` to `/services/data-readiness/` exists in `public/_redirects`
- [ ] Sitemap entry updated to `/services/data-readiness/`
- [ ] Breadcrumb shows Home / Services / Data Readiness with correct links
- [ ] Eyebrow reads "SERVICES · DATA READINESS"
- [ ] H1 is "Data Readiness", sub-head is "Is our data ready for AI?"
- [ ] Hero body copy matches PDF verbatim (two paragraphs)
- [ ] "Book a Discovery Call" button opens the Discovery Call modal
- [ ] "Back to all services" links to `/services/`
- [ ] "What the first 30 days look like" section has four timeline rows with correct copy
- [ ] "Day 30 — what you have" label is visually distinct in Alphabyte Blue
- [ ] "What we deliver" section lists five deliverables with correct titles and descriptions
- [ ] "Right for you if" panel has four checkmark items with correct copy
- [ ] "Not right for you if" panel has two X-mark items with correct copy
- [ ] Timeline bar shows "4 to 8 weeks from kickoff" with a "Book a Discovery Call" button
- [ ] All internal links to `/services/data/` across the site are updated to `/services/data-readiness/`
- [ ] Metadata (title, description, canonical, OG) references `/services/data-readiness/`
- [ ] Service JSON-LD and BreadcrumbList JSON-LD reference `/services/data-readiness/`
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks — no forbidden vocabulary
- [ ] Visuals pass alphabyte-brand/component-rules.md review — Option C surface system
- [ ] Passes seo/page-checklist.md for `/services/data-readiness/`
- [ ] Passes alphabyte-services hard rules — no rate card, no competitor names, no hours-as-effort, exact track and offering names
- [ ] Parts of the feature not covered by this enhancement behave identically to before
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean
- [ ] Page is responsive (mobile through desktop, no horizontal scroll)

## Related
- `prds/services-pages.md` (the feature being enhanced)
- `prds/enhance-services-index-v6.md` (V6 services index redesign)
- `.claude/skills/alphabyte-services/service-tracks.md` (Track 2 content source)
- `.claude/skills/alphabyte-services/pricing.md` (public-safe pricing rules)
- `.claude/skills/seo/page-checklist.md` (pre-ship gate)
- `design/INDEX.md` (page dispatch index)
- `design/MIGRATION.md` (route decisions and nav order)

## Notes
- The PDF does not show pricing on this page. The services index page shows the investment range ($15K–$40K) for Data Readiness in the tab content, but the detail page focuses on scope and qualification rather than price. This is consistent with the pricing.md guidance that per-track detail pages "should show ranges for the specific offerings on that page" — but the PDF as source of truth takes precedence, and it omits pricing.
- The route change from `/services/data/` to `/services/data-readiness/` aligns with the V6 navigation structure already present in the uncommitted `navigation.ts` changes.
- The "Day 30 — what you have" row in the timeline is visually distinct in the PDF — rendered with a blue label. This is an intentional design choice to emphasize the outcome milestone.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28 (Shipped)*
