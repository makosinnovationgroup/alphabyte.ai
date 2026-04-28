# V7 Citizen Development Service Page

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/services-pages.md`

## Motivation
The V6 foundation shipped five service stubs, but the `/services/citizen-development/` route was never built — the nav pointed to a non-existent page (accepted as intermediate state in the V6 dropdown-content PRD). V7 resolves OQ2 (the Citizen Dev / Enablement collision) with a clean standalone Citizen Development page at PDF page 4. This is a net-new page build using the `ServicePage` layout component already extracted for sibling service pages.

## Summary
Create the `/services/citizen-development/` route as a full service detail page using the `ServicePage` component. Content is verbatim from V7 PDF page 4: eyebrow "SERVICES · FLAGSHIP OFFERING", eight deliverables, three-stat dark bar (Week 3 / 2 to 12 weeks / Flagship), right/not-right qualification panels, and a 30-days timeline. The redirect from `/citizen-dev` already exists in `_redirects`.

## Changing
None — this enhancement only adds; it does not override original decisions. The original PRD shipped service stubs; this builds out the Citizen Development detail page that was deferred.

## Decided
- **Layout component:** Use `ServicePage` from `src/components/service-page.tsx`. Do not rebuild the layout. Pass all content as data props, following the pattern established by `src/app/services/executive-enablement/page.tsx`.
- **Route:** `/services/citizen-development/` — new `page.tsx` at `src/app/services/citizen-development/page.tsx`.
- **Breadcrumb:** Home / Services / Citizen Development (matching PDF page 4 breadcrumb).
- **Eyebrow:** "SERVICES · FLAGSHIP OFFERING" (verbatim from PDF — note this differs from Executive Enablement's "Services · Executive Enablement" pattern; the PDF is authoritative).
- **H1:** "Citizen Development"
- **Subhead:** "Every employee, now an AI developer."
- **Body copy:** Two paragraphs from PDF page 4 (see Verbatim copy below).
- **Primary CTA:** "Book a Discovery Call" — opens the Discovery Call modal (action: "modal").
- **Secondary CTA:** "Back to all services" linking to `/services/`.
- **Stats bar (3 items):**
  1. Value: "Week 3" / Label: "Most clients have something running in production"
  2. Value: "2 to 12 weeks" / Label: "Depending on scope and team size"
  3. Value: "Flagship" / Label: "Our most-delivered, highest-return offering"
- **30-days timeline:** Three weeks plus Day 30 (see Verbatim copy below).
- **Deliverables:** Eight items with emoji icons (see Verbatim copy below).
- **Right for you if:** Four bullets (see Verbatim copy below).
- **Not right for you if:** Three bullets (see Verbatim copy below).
- **Timeline footer:** "3 to 12 weeks from kickoff depending on delivery tier"
- **Metadata:** Follow the pattern from executive-enablement. Title under 60 chars, description 140–160 chars, canonical set, OG and Twitter cards set.
- **Structured data:** `Service` JSON-LD and `BreadcrumbList` JSON-LD, matching the executive-enablement pattern.
- **Sitemap:** Add `/services/citizen-development/` to `src/app/sitemap.ts` with priority 0.8, changeFrequency 'monthly'.
- **Redirect:** `/citizen-dev` → `/services/citizen-development` already exists in `public/_redirects` (302). No new redirect needed.

## Open Questions
None

## Scope

### In scope
- New file `src/app/services/citizen-development/page.tsx` using `ServicePage` component
- All verbatim copy from PDF page 4
- Metadata, OG, Twitter card, structured data
- Sitemap entry

### Out of scope
- Changes to the `ServicePage` component itself
- Changes to navigation (already includes Citizen Development)
- Changes to the redirect file (already has `/citizen-dev` redirect)
- Changes to any other service page
- OG image generation (use default `og/default.png` per existing pattern)

## Pages & Components

### Modifying
- `src/app/sitemap.ts` — add `/services/citizen-development/` entry

### Creating
- `src/app/services/citizen-development/page.tsx` — Citizen Development service detail page using `ServicePage` component

## Content

### Verbatim copy
All copy below is transcribed from V7 PDF page 4 and must be used exactly.

- Eyebrow: "SERVICES · FLAGSHIP OFFERING"
- H1: "Citizen Development"
- Subhead: "Every employee, now an AI developer."
- Body paragraph 1: "The technology is finally ready. Claude — combined with Projects, Skills, Model Context Protocol, and Claude Code — means any employee who can describe their work can now build applications, automate workflows, and query live operational data against real systems. Without a software engineering background."
- Body paragraph 2: "Your team is already building. Someone automated a workflow on her laptop that saves three hours a week. A sales coordinator built a tool nobody else can use. None of it is governed. None of it scales. Citizen Development installs the infrastructure that changes that — and connects it to your live operational data."
- Primary CTA: "Book a Discovery Call"
- Secondary CTA: "← Back to all services"
- Stat 1 value: "Week 3"
- Stat 1 label: "Most clients have something running in production"
- Stat 2 value: "2 to 12 weeks"
- Stat 2 label: "Depending on scope and team size"
- Stat 3 value: "Flagship"
- Stat 3 label: "Our most-delivered, highest-return offering"
- 30-days heading: "What the first 30 days look like"
- Week 1 label: "Week 1"
- Week 1 body: "Discovery and design — we talk to the people doing the actual work, find out what they have already built, and design the SDLC plugin and guardrails architecture around what we find. Not a template."
- Week 2 label: "Week 2"
- Week 2 body: "Build and configure — we build the custom SDLC plugin with four to five purpose-built skills, configure the guardrails scaffolding, and connect the governed data layer through MCP."
- Week 3 label: "Week 3"
- Week 3 body: "Deploy and enable — the plugin goes live in your Claude Teams environment. We run the hands-on enablement workshop. Every participant builds something on their own laptop. Recorded for future team members."
- Day 30 label: "Day 30 — what you have"
- Day 30 body: "A governed Claude environment deployed across your team. Every authorized employee working from the same standardized starting point. Live data connectivity through MCP. A graduation path for moving proven applications into production. Your team actually using it."
- Deliverables heading: "What we deliver"
- Deliverable 1 title: "Workflow and capability discovery"
- Deliverable 1 body: "Direct conversations with the people doing the real work — finding what each person owns, what they have already built, and where the highest-value automation opportunities are."
- Deliverable 2 title: "Custom SDLC plugin"
- Deliverable 2 body: "Four to five purpose-built Claude skills standardizing how any employee begins a new project. Published once to your Claude Teams environment, available to every authorized user."
- Deliverable 3 title: "Enablement workshop"
- Deliverable 3 body: "Hands-on session — every participant builds something on their own laptop. Not a slide presentation about AI potential. Recorded for future team members and onboarding."
- Deliverable 4 title: "Content engineering templates"
- Deliverable 4 body: "CLAUDE.md files, project-level content structure patterns, and proven approaches to instructing Claude effectively. Every citizen developer builds on a shared foundation."
- Deliverable 5 title: "Guardrails scaffolding"
- Deliverable 5 body: "Branch protection, required review on Claude-generated pull requests, per-project sandbox environments, and least-privilege data access. Built before anyone starts building."
- Deliverable 6 title: "Governed data connectivity via MCP"
- Deliverable 6 body: "Your team builds against real operational data, not exports. Custom MCP servers with governed access, role-based permissions, and full audit logging."
- Deliverable 7 title: "Graduation playbook"
- Deliverable 7 body: "A documented path for moving a proven citizen developer application from the R&D stack into full production on GCR, AWS, or Azure."
- Deliverable 8 title: "Hypercare support"
- Deliverable 8 body: "Dedicated channel, weekly sync calls, prompt bug resolution, and skills iteration based on observed usage. We stay on until it's running reliably."
- Deliverable 1 icon: 🔍
- Deliverable 2 icon: 💻
- Deliverable 3 icon: 🎓
- Deliverable 4 icon: 📋
- Deliverable 5 icon: 🛡️
- Deliverable 6 icon: 🔗
- Deliverable 7 icon: 🎓
- Deliverable 8 icon: 🔧
- Right for you heading: "Right for you if"
- Right for you 1: "Your team is already using Claude informally and you need governance before the sprawl becomes a liability"
- Right for you 2: "You want every employee operating at the level of your best AI user — not just the ones who figured it out themselves"
- Right for you 3: "You want to multiply workforce output without waiting six months for a full-spec deployment"
- Right for you 4: "You are ready to connect your team's AI capability to live operational data through MCP"
- Not right for you heading: "Not right for you if"
- Not right for you 1: "Your organization has fewer than five people who could realistically use a Claude-based development environment"
- Not right for you 2: "Your data environment has not been stabilized — we will find the gaps in week one, and the engagement requires addressing them"
- Not right for you 3: "You're looking for a pilot with no defined governance or production path — we do not deliver proofs of concept that are not designed to ship"
- Timeline label: "Timeline"
- Timeline value: "3 to 12 weeks from kickoff depending on delivery tier"

### Drafted at implement-time
- Meta title: draft under 60 chars, include "Citizen Development" and "AI"
- Meta description: draft 140–160 chars, include primary search intent
- OG title and description: draft for social sharing
- Structured data description: draft for Service schema

## Search Intent & SEO
- **Target query:** "citizen development AI consulting", "Claude citizen developer program", "AI enablement for teams"
- **URL slug:** `/services/citizen-development/` (unchanged)
- **Meta title:** To be drafted — pattern: "Citizen Development — [qualifier]"
- **Meta description:** To be drafted — 140–160 chars
- **Structured data:** New `Service` JSON-LD + `BreadcrumbList` JSON-LD (following executive-enablement pattern)
- **OG image:** `/og/default.png` (existing default)

## Design Notes
Defer to `ServicePage` component for all layout. The PDF page 4 structure matches the component's section order exactly: breadcrumb → hero (eyebrow, h1, subhead, body, CTAs) → stat bar → 30-days box → deliverables → right/not-right panels → timeline footer.

No visual deviations from the component are needed. The only content difference from executive-enablement is the eyebrow ("SERVICES · FLAGSHIP OFFERING" vs "Services · Executive Enablement") — the component renders whatever string is passed.

## Motion & Interactivity
Unchanged from original. The `ServicePage` component handles any motion or interactivity.

## Impact

### Affected pages or components
None beyond the creating/modifying list above. Navigation already references this route. The `ServicePage` component is not being modified.

### URL or routing changes
None. Route `/services/citizen-development/` is new. Redirect from `/citizen-dev` already exists.

### Content backfill
None.

## Acceptance Criteria
- [ ] New file at `src/app/services/citizen-development/page.tsx` exists and uses `ServicePage` component
- [ ] All verbatim copy from PDF page 4 appears exactly as transcribed — no paraphrase, no truncation
- [ ] Eyebrow reads "SERVICES · FLAGSHIP OFFERING" (not "Services · Citizen Development")
- [ ] Three-stat bar renders: "Week 3" / "2 to 12 weeks" / "Flagship" with correct labels
- [ ] 30-days timeline has three weeks plus Day 30 with correct labels and body text
- [ ] Eight deliverables render with correct icons, titles, and body text
- [ ] Right/not-right panels render with correct bullets
- [ ] Timeline footer shows "3 to 12 weeks from kickoff depending on delivery tier"
- [ ] Primary CTA opens Discovery Call modal
- [ ] Secondary CTA links to `/services/`
- [ ] Breadcrumb shows Home / Services / Citizen Development with correct links
- [ ] Metadata exports: title, description, canonical, OG, Twitter
- [ ] JSON-LD structured data: Service + BreadcrumbList schemas present
- [ ] Sitemap includes `/services/citizen-development/` with priority 0.8
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` passes
- [ ] Passes seo/page-checklist.md for `/services/citizen-development/`
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Passes alphabyte-services hard rules — no rate card, no competitor names, no hours-as-effort, exact track and offering names

## Related
- `prds/services-pages.md` (the feature being enhanced — original service stubs)
- `prds/service-page-component.md` (the ServicePage component PRD)
- `prds/enhance-v7-service-executive-enablement.md` (sibling service page, reference pattern)
- `prds/enhance-v6-dropdown-content-redirects.md` (established the navigation entry and redirect)
- `design/INDEX.md` (page inventory)
- `design/MIGRATION.md` (V7 migration context, OQ2 resolution)

## Notes
- The executive-enablement page is the closest reference implementation — follow its file structure, metadata pattern, and JSON-LD shape exactly, substituting citizen-development content.
- PDF page 4 shows "Not right for you if" with three bullets. This differs from Executive Enablement which has two — the count is intentional per the PDF.
- The existing redirect at `/citizen-dev → /services/citizen-development` uses 302 (temporary). This was set during the V6 foundation when the page didn't exist yet. Consider whether it should be upgraded to 301 (permanent) now that the page is being built — but this is out of scope for this PRD; log it for a future redirect audit.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*

