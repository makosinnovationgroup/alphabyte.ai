# Executive Enablement — V7 Full Page Build

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/services-pages.md`

## Motivation
The Enablement page shipped as an intentional stub at `/services/enablement/` — enough to resolve nav links and show the track positioning, but with a "Coming Soon" section in place of real content. V7 resolves the V6 ambiguity (OQ2) by splitting Enablement into two standalone pages: Executive Enablement and Citizen Development. This enhancement builds the Executive Enablement page from V7 PDF page 3 (stamped APPROVED COPY), moves the route to `/services/executive-enablement/`, and retires the legacy `/services/enablement/` stub. The `ServicePage` component (shipped via `prds/service-page-component.md`) already implements the exact layout structure this page needs.

## Summary
Replace the Enablement stub with a full Executive Enablement page at `/services/executive-enablement/`. The page uses the `ServicePage` component with data props covering a hero with eyebrow, H1, subhead, and two body paragraphs; a three-stat dark bar (2 to 4 weeks / Day 1 / Fast win); a four-row 30-days timeline; six deliverables with icons; two qualification panels (right for you / not right for you); and a timeline footer. The legacy `/services/enablement/` route is retired with a 301 redirect.

## Changing
- Original: Route is `/services/enablement/`. Updated: Route is `/services/executive-enablement/`.
- Original: Page title is "Enablement". Updated: Page title is "Executive Enablement".
- Original: H1 is "Enablement". Updated: H1 is "Executive Enablement".
- Original: Subhead is "How do our people use AI?" (generic track question). Updated: Subhead is "A fast, visible AI win for your leadership team."
- Original: Body is a brief track overview mentioning both Executive Productivity Suite and Citizen Dev. Updated: Body is two paragraphs focused solely on Executive Enablement from the PDF.
- Original: Page body has a "Coming Soon" stub section. Updated: Full page content — stat bar, 30-days timeline, six deliverables, qualification panels, timeline footer.
- Original: Breadcrumb terminal item is "Enablement" at `/services/enablement/`. Updated: Terminal item is "Executive Enablement" at `/services/executive-enablement/`.
- Original: Metadata canonical and OG URLs reference `/services/enablement/`. Updated: Reference `/services/executive-enablement/`.
- Original: Structured data name is "Enablement" with URL at `/services/enablement/`. Updated: Name is "Executive Enablement" with URL at `/services/executive-enablement/`.
- Original: Page renders its own inline layout markup. Updated: Page uses the `ServicePage` component with data props.

## Decided
- The page file is created at `src/app/services/executive-enablement/page.tsx`. The old `src/app/services/enablement/` directory is deleted.
- The page imports and renders `ServicePage` from `@/components/service-page`, passing all content via props. No inline layout markup.
- A 301 redirect from `/services/enablement/` to `/services/executive-enablement/` is added to `public/_redirects` (per MIGRATION.md §3.4).
- The sitemap entry for `/services/enablement/` is updated to `/services/executive-enablement/`.
- The eyebrow text is "SERVICES · EXECUTIVE ENABLEMENT" (verbatim from PDF).
- The three-stat bar values are: "2 to 4 weeks" / "From kickoff to a live Claude environment for your leadership team", "Day 1" / "Executives using Claude against their actual operational data", "Fast win" / "The internal proof point that makes the broader programme easy to resource".
- The 30-days timeline has four rows: Week 1, Week 2, Weeks 3 to 4, Day 30 (with Day 30 in Alphabyte Blue per ServicePage convention).
- Six deliverables rendered with emoji icons: Executive workflow discovery, Custom knowledgebases, Custom skills library, Prompt toolkit, Claude Teams configuration, Knowledge transfer session.
- Right-for-you panel has four items; Not-right-for-you panel has two items.
- Timeline footer text: "2 to 4 weeks from kickoff".
- Primary CTA: "Book a Discovery Call" (opens modal). Secondary CTA: "Back to all services" (links to `/services/`).
- Navigation entry in `navigation.ts` already points to `/services/executive-enablement/` — no change needed.
- The breadcrumb in the ServicePage component is rendered via the component's layout. The page data passes "Executive Enablement" as the breadcrumb label.

## Open Questions
None

## Scope

### In scope
- New page file at `src/app/services/executive-enablement/page.tsx` using `ServicePage` component
- Full page content from V7 PDF page 3 — all verbatim copy, layout, and structure
- Metadata (title, description, canonical, OG, Twitter) for the new route
- Service + BreadcrumbList JSON-LD structured data
- 301 redirect from `/services/enablement/` to `/services/executive-enablement/` in `public/_redirects`
- Sitemap update: replace `/services/enablement/` with `/services/executive-enablement/`
- Delete `src/app/services/enablement/` directory

### Out of scope
- Citizen Development page (separate `/page` dispatch)
- Changes to the ServicePage component itself
- Changes to the Services index page
- OG image creation (use `/og/default.png` as placeholder)
- Homepage tab content for the Enablement track

## Pages & Components

### Modifying
- `public/_redirects` — add `/services/enablement/` → `/services/executive-enablement/` 301 redirect
- `src/app/sitemap.ts` — update enablement URL from `/services/enablement/` to `/services/executive-enablement/`

### Creating
- `src/app/services/executive-enablement/page.tsx` — Executive Enablement page using `ServicePage` component

### Deleting
- `src/app/services/enablement/page.tsx` — legacy stub, replaced by the new route

## Content

### Verbatim copy
All copy below is taken directly from V7 PDF page 3.

- Eyebrow: "SERVICES · EXECUTIVE ENABLEMENT"
- H1: "Executive Enablement"
- Subhead: "A fast, visible AI win for your leadership team."
- Body paragraph 1: "Executives do not need a generic AI tool. They need a Claude environment that understands their business — populated with the operational data they actually work from, equipped with skills that automate the specific workflows on their leadership calendar, and configured so that each functional leader gets a differentiated experience."
- Body paragraph 2: "We deliver that in two to four weeks. Most clients see measurable time savings in the first sprint. And because the CFO and COO are actively using it, it becomes significantly easier to resource the broader programme that follows."
- Primary CTA: "Book a Discovery Call"
- Secondary CTA: "Back to all services"
- Stat 1 value: "2 to 4 weeks"
- Stat 1 label: "From kickoff to a live Claude environment for your leadership team"
- Stat 2 value: "Day 1"
- Stat 2 label: "Executives using Claude against their actual operational data"
- Stat 3 value: "Fast win"
- Stat 3 label: "The internal proof point that makes the broader programme easy to resource"
- 30-days heading: "What the first 30 days look like"
- Week 1 label: "Week 1"
- Week 1 body: "Executive workflow discovery — one-on-one sessions with each leader. We map the highest-frequency workflows on their calendar and identify the specific interventions most likely to produce measurable time savings."
- Week 2 label: "Week 2"
- Week 2 body: "Build — we ingest your organizational data into structured Claude knowledgebases, build the custom skills surfaced during discovery, and configure the Claude Teams environment with domain-level context arbitration for each functional leader."
- Weeks 3 to 4 label: "Weeks 3 to 4"
- Weeks 3 to 4 body: "Deploy and transfer — the environment goes live. We run a hands-on knowledge transfer session with the full executive cohort. Every participant leaves the session using what we built. Recorded for onboarding of future executives."
- Day 30 label: "Day 30"
- Day 30 body: "A live Claude environment used by your entire leadership team, built from your actual operational data, with measurable productivity gains visible in the first sprint. The internal proof point that makes the broader programme significantly easier to resource."
- Deliverables heading: "What we deliver"
- Deliverable 1 title: "Executive workflow discovery"
- Deliverable 1 body: "One-on-one sessions with each leader on the team — mapping the highest-frequency workflows on their calendar and identifying the specific interventions most likely to save measurable time."
- Deliverable 2 title: "Custom knowledgebases"
- Deliverable 2 body: "Your policies, SOPs, strategic documents, board materials, and product data ingested into a structured Claude Project each executive works from daily. Claude understands your business before the conversation starts."
- Deliverable 3 title: "Custom skills library"
- Deliverable 3 body: "Claude Skills that automate the workflows surfaced during discovery — report generation, data parsing, strategic analysis, board preparation. Built for your executives, not recycled from another client."
- Deliverable 4 title: "Prompt toolkit"
- Deliverable 4 body: "A curated library structured around the patterns of thought your leadership team uses when working through real business problems. Tested against your actual data. Refined during knowledge transfer."
- Deliverable 5 title: "Claude Teams configuration"
- Deliverable 5 body: "Domain-level context arbitration producing a differentiated experience for each functional leader. The CFO's environment and the COO's draw from the same foundation but surface different data and skills."
- Deliverable 6 title: "Knowledge transfer session"
- Deliverable 6 body: "Hands-on session for the full executive cohort, recorded for future reference and for the onboarding of new executives. Your team leaves knowing how to use what we built — and how to extend it."
- Right for you 1: "Leadership wants a concrete AI win they can point to while the broader programme gets resourced"
- Right for you 2: "Your leadership team wants to understand AI by using it — not by sitting through presentations"
- Right for you 3: "You want the executive team enabled before rolling out citizen development to the wider workforce"
- Right for you 4: "Your board is asking what the return on AI investment looks like and you need something to show them"
- Not right for you 1: "Your executive team is not prepared to engage with a new tool actively — the environment requires use to produce value"
- Not right for you 2: "You are expecting a one-size-fits-all environment — the value is in the customisation, which requires time from your executives in week one"
- Timeline label: "Timeline"
- Timeline value: "2 to 4 weeks from kickoff"

### Drafted at implement-time
- Meta title: Draft per SEO skill guidelines (under 60 chars before suffix, Title Case)
- Meta description: Draft per SEO skill guidelines (140–160 chars, brand voice, distinct from title)
- OG/Twitter descriptions: May be shorter than meta description
- Deliverable emoji icons: Select appropriate emoji for each deliverable matching the visual intent from the PDF

## Search Intent & SEO
- **Target query:** "executive AI enablement", "Claude environment for leadership", "executive AI consulting"
- **URL slug:** `/services/executive-enablement/`
- **Meta title:** To be drafted (targeting ~"Executive Enablement — AI for Leadership Teams" shape)
- **Meta description:** To be drafted (140–160 chars, mentioning custom Claude environment, leadership, 2–4 week timeline)
- **Structured data:** Service JSON-LD (serviceType: "Executive AI Enablement Consulting", name: "Executive Enablement", provider: Alphabyte) + BreadcrumbList (Home > Services > Executive Enablement). URLs updated to `/services/executive-enablement/`.
- **OG image:** `/og/default.png` (placeholder — unchanged)

## Design Notes
The page uses the `ServicePage` component, which already implements the canonical V7 service detail layout:
1. Hero section (eyebrow, H1, subhead, body paragraphs, CTA row)
2. Three-stat dark bar (dark background, Alphabyte Blue stat values, white/70 labels)
3. 30-days bordered card (week rows with Day 30 in Alphabyte Blue)
4. Deliverables list (emoji icon + title + body, separated by hairlines)
5. Right/Not-right qualification panels (green-50 and red-50 backgrounds with check/X icons)
6. Timeline footer (label + value + Discovery Call CTA)

No design deviations from the component's existing implementation are expected. All visual direction comes from the component.

## Motion & Interactivity
Unchanged from original. No page-specific motion. Discovery Call CTA opens the site-wide modal.

## Impact

### Affected pages or components
- `src/components/header.tsx` — navigation already references `/services/executive-enablement/`; no change needed
- `src/lib/footer-data.ts` — check if footer references the old `/services/enablement/` path; update if so
- Homepage service tabs — may reference enablement; check `src/components/home/` or `src/components/track-tabs.tsx` for old path references

### URL or routing changes
- `/services/enablement/` → `/services/executive-enablement/` (301 redirect via `public/_redirects`)
- Navigation already points to the new path; no nav change needed

### Content backfill
- Sitemap: update URL and lastModified date
- Footer data: verify no stale references to `/services/enablement/`
- Track tabs on homepage: verify links reference the correct path

## Acceptance Criteria
- [ ] `src/app/services/executive-enablement/page.tsx` exists and renders using the `ServicePage` component
- [ ] `src/app/services/enablement/` directory is deleted
- [ ] All verbatim copy from the PDF appears exactly as written — no paraphrase, no truncation
- [ ] The three-stat bar displays: "2 to 4 weeks", "Day 1", "Fast win" with correct labels
- [ ] The 30-days timeline has four rows (Week 1, Week 2, Weeks 3 to 4, Day 30) with Day 30 in Alphabyte Blue
- [ ] Six deliverables render with icons, titles, and bodies matching PDF content
- [ ] Right-for-you panel has four items; Not-right-for-you panel has two items
- [ ] Timeline footer shows "2 to 4 weeks from kickoff" with a "Book a Discovery Call" CTA
- [ ] "Book a Discovery Call" CTA opens the discovery call modal
- [ ] "Back to all services" links to `/services/`
- [ ] `public/_redirects` includes `/services/enablement/ /services/executive-enablement/ 301`
- [ ] Sitemap entry updated from `/services/enablement/` to `/services/executive-enablement/`
- [ ] Metadata: title, description, canonical, OG, Twitter all reference `/services/executive-enablement/`
- [ ] Service + BreadcrumbList JSON-LD structured data present and valid
- [ ] No references to `/services/enablement/` remain in `navigation.ts`, `footer-data.ts`, `track-tabs.tsx`, or sitemap
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean
- [ ] Passes seo/page-checklist.md for the new route
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Passes alphabyte-services hard rules — no rate card, no competitor names, no hours-as-effort, exact track and offering names
- [ ] Parts of the site not covered by this enhancement behave identically to before

## Related
- `prds/services-pages.md` (the feature being enhanced — original Enablement stub)
- `prds/service-page-component.md` (the ServicePage component this page consumes)
- `prds/enhance-v6-service-data-readiness.md` (sibling service page enhancement — same pattern)
- `design/MIGRATION.md` §3.3 (route retirement rule for `/services/enablement/`)
- `design/INDEX.md` row `service-executive-enablement`

## Notes
- The ServicePage component was shipped specifically to support this and sibling service pages. This page should be a straightforward data-prop pass with no layout overrides.
- The PDF uses "programme" (British spelling) — preserve exactly as shown; do not Americanize.
- The PDF uses "customisation" (British spelling) in the Not-right-for-you panel — preserve exactly.
- Emoji icons for deliverables are not in the PDF (they appear as small graphic elements). The implementer should select appropriate emoji that match the visual intent: clipboard/document for workflow discovery, books for knowledgebases, lightning for skills, scroll/notepad for prompt toolkit, monitor/settings for Claude Teams config, graduation cap for knowledge transfer.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*

