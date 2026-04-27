# Services Index & Track Detail Stubs

## Status
Shipped

## Type
New page

## Summary
Five new routes under `/services/` that complete the routing chain for the site's primary navigation. The services index page (`/services/`) shows Alphabyte's four-track consulting model with deeper content than the homepage version. Four track detail pages (`/services/discovery/`, `/services/data/`, `/services/enablement/`, `/services/infrastructure/`) ship as intentional stubs — enough to resolve nav and CTA links, with full content deferred to future PRDs.

## Decided
- All copy listed under Verbatim copy is final and must be used exactly
- The existing `src/components/track-tabs.tsx` is hardcoded with content; refactor it to accept a `tracks` prop so both the homepage and services page can pass their own content. The refactor must not change the homepage's rendered output.
- Track sub-pages are stubs intentionally; full track pages are deferred to future PRDs
- Stub pages link back to `/services/` via "Back to all services" so users can recover from a deep-link landing
- Mobile tab pattern stays consistent with whatever the homepage currently uses (no re-deciding)
- Investment ranges on the services page use public-safe framing per `alphabyte-services/pricing.md` — ranges only, weeks not hours, no per-role rates
- The italic callout beneath the services page sub-head is skipped — the sub-head already carries the message; duplicating it in italic would be redundant
- On track detail stubs, primary CTA ("Book a Strategy Sprint") links to `/services/discovery/` (consistent with the rest of the site); secondary CTA links back to `/services/`
- No "Not Sure Where to Start" entry-bundles section — explicitly deferred

## Open Questions
None

## Scope

### In scope
- New route at `/services/` rendering the services index page
- Four new routes at `/services/discovery/`, `/services/data/`, `/services/enablement/`, `/services/infrastructure/` rendering minimal stub pages
- Refactor of `src/components/track-tabs.tsx` to accept tab content as a prop
- Update homepage (`src/app/page.tsx`) to pass the existing homepage content to the refactored tab component
- Sitemap entries for all five new routes
- Per-page metadata (title, description, canonical, OG) for all five pages
- Service JSON-LD on each track stub page
- BreadcrumbList JSON-LD on each track stub page

### Out of scope
- "Not Sure Where to Start" entry-bundles section (Strategy Sprint, Executive Quick Win, Sprawl Fix) — deferred to a future PRD
- Full track detail content on the four sub-pages (stubs only; full pages come later)
- Header/footer changes
- Detailed pricing tables on any page
- Case study content on track pages
- OG images specific to services pages (use `/og/default.png` for now)

## Pages & Components

### Modifying
- `src/components/track-tabs.tsx` — refactor to accept a `tracks` prop instead of hardcoded content
- `src/app/page.tsx` — update to pass homepage track data to the refactored `TrackTabs` component
- `src/app/sitemap.ts` — add five new route entries

### Creating
- `src/app/services/page.tsx` — services index page
- `src/app/services/discovery/page.tsx` — Discovery stub page
- `src/app/services/data/page.tsx` — Data Readiness stub page
- `src/app/services/enablement/page.tsx` — Enablement stub page
- `src/app/services/infrastructure/page.tsx` — Infrastructure stub page

## Content

### Verbatim copy

#### Services index — hero

- Eyebrow: "SERVICES"
- Headline (h1): "Most organizations don't have an AI problem. They have a clarity problem." — the words "AI problem" rendered in Alphabyte Blue
- Sub-head: "We work across four tracks. You don't need all of them. You need the right one, in the right order, for where you actually are."

#### Services index — track tab content

**Discovery (01):**
- Question: "What should our AI strategy be?"
- Track header: "TRACK 01 · DISCOVERY"
- Track name (h2): "Discovery"
- Body: "Before you invest in AI, you need to know what's worth investing in. Discovery is a focused, time-boxed engagement — stakeholder workshops, use case prioritization, and a roadmap you leave with. No vague recommendations."
- Right for you if: "No prior AI investment. Leadership curious but wants the case before committing budget."
- Investment: "Investment: $14K–$22.5K · 3–5 weeks"
- Pills: "Up to 10 stakeholder workshops", "Use case development ×3", "Gap analysis", "Findings & roadmap"
- CTA: "Get started →" linking to `/services/discovery/`

**Data Readiness (02):**
- Question: "Is our data ready for AI?"
- Track header: "TRACK 02 · DATA READINESS"
- Track name (h2): "Data Readiness"
- Body: "Most AI projects don't fail because of the model. They fail because the data feeding it is inconsistent or ungoverned. Finding that out six months into a build is expensive. Finding it in week two is not."
- Right for you if: "Regulated industry, uncertain data quality, or about to begin agent or integration work."
- Investment: "Investment: $15K–$40K · 4–8 weeks"
- Pills: "Data quality audit", "Governance assessment", "AI readiness scorecard", "Remediation pathway"
- CTA: "Get started →" linking to `/services/data/`

**Enablement (03):**
- Question: "How do our people use AI?"
- Track header: "TRACK 03 · ENABLEMENT" with star indicator (★ Hero offering)
- Track name (h2): "Enablement"
- Body: "The fastest ROI in AI isn't a system. It's a person who knows what they're doing. Two paths: an Executive Productivity Suite for leadership, and Citizen Dev Enablement for teams already using AI informally."
- Right for you if: "Leadership wants a fast visible win, or teams are using Claude informally."
- Investment: "Investment: starting at $7K · 2–12 weeks"
- Pills: "Custom Claude environment", "Knowledgebases & skills", "SDLC plugin", "Guardrails & graduation playbook"
- CTA: "Get started →" linking to `/services/enablement/`

**Infrastructure (04):**
- Question: "How do our systems use AI?"
- Track header: "TRACK 04 · INFRASTRUCTURE"
- Track name (h2): "Infrastructure"
- Body: "Where AI stops being a productivity tool and starts being operational infrastructure. Custom MCP servers, autonomous agents, on-premise LLMs. Built in production, not in demos."
- Right for you if: "Ready to connect AI to live systems, or data sovereignty rules out cloud AI."
- Investment: "Investment: $18K–$90K · 4–36 weeks (varies by offering)"
- Pills: "Custom MCP servers", "AI agents & Command Centre", "On-premise LLM", "Fine-tuned custom LLMs"
- CTA: "Get started →" linking to `/services/infrastructure/`

#### Track detail stubs — hero content

**Discovery:**
- Eyebrow: "TRACK 01 · DISCOVERY"
- Headline (h1): "Discovery"
- Sub-head: "What should our AI strategy be?"
- Body: "Stakeholder workshops, use case identification, feasibility analysis, and an AI roadmap. A focused, time-boxed engagement that produces a clear path forward — not a pile of recommendations."
- Primary CTA: "Book a Strategy Sprint" linking to `/services/discovery/`
- Secondary CTA: "← Back to all services" linking to `/services/`

**Data Readiness:**
- Eyebrow: "TRACK 02 · DATA READINESS"
- Headline (h1): "Data Readiness"
- Sub-head: "Is our data ready for AI?"
- Body: "Data quality audit, governance assessment, AI readiness scorecard, and a remediation pathway. AI projects fail more often because of data than because of models — this track makes that risk visible before you spend on infrastructure."
- Primary CTA: "Book a Strategy Sprint" linking to `/services/discovery/`
- Secondary CTA: "← Back to all services" linking to `/services/`

**Enablement:**
- Eyebrow: "TRACK 03 · ENABLEMENT"
- Headline (h1): "Enablement"
- Sub-head: "How do our people use AI?"
- Body: "Two paths: an Executive Productivity Suite for leadership, and Citizen Dev Enablement for teams. The fastest path to visible ROI in most engagements."
- Primary CTA: "Book a Strategy Sprint" linking to `/services/discovery/`
- Secondary CTA: "← Back to all services" linking to `/services/`

**Infrastructure:**
- Eyebrow: "TRACK 04 · INFRASTRUCTURE"
- Headline (h1): "Infrastructure"
- Sub-head: "How do our systems use AI?"
- Body: "Custom MCP servers, autonomous agents, on-premise LLM deployments, fine-tuned models. Where AI stops being a productivity tool and becomes operational infrastructure."
- Primary CTA: "Book a Strategy Sprint" linking to `/services/discovery/`
- Secondary CTA: "← Back to all services" linking to `/services/`

#### Track detail stubs — coming soon section

**Discovery:**
- Eyebrow: "COMING SOON"
- Body: "The full Discovery page is in development. It will cover the Strategy Sprint format, what the workshops look like, and how the roadmap deliverable works. To talk through whether Discovery fits your situation, book a Strategy Sprint or get in touch."

**Data Readiness:**
- Eyebrow: "COMING SOON"
- Body: "The full Data Readiness page is in development. It will cover the audit process, governance assessment framework, and how the AI readiness scorecard works. To talk through whether this track fits your situation, book a Strategy Sprint or get in touch."

**Enablement:**
- Eyebrow: "COMING SOON"
- Body: "The full Enablement page is in development. It will cover the Executive Productivity Suite, Team Citizen Dev Enablement tiers, and what deployment looks like in practice. To talk through whether this track fits your situation, book a Strategy Sprint or get in touch."

**Infrastructure:**
- Eyebrow: "COMING SOON"
- Body: "The full Infrastructure page is in development. It will cover custom MCP servers, AI agents, on-premise LLM deployment, and fine-tuned model work. To talk through whether this track fits your situation, book a Strategy Sprint or get in touch."

### Drafted at implement-time
None — all copy is specified above.

## Search Intent & SEO

### Services index — `/services/`

- **Target query:** "AI consulting services Canada", "AI strategy consulting mid-market"
- **URL slug:** `/services/`
- **Meta title:** "Services — AI Consulting Across Four Tracks"
- **Meta description:** "Discovery, data readiness, enablement, infrastructure. Four AI consulting tracks designed for mid-market organizations. Start where your problem actually is."
- **Structured data:** None specific to this page (root Organization schema covers the business; track sub-pages each get Service schemas)
- **OG image:** `/og/default.png`
- **Sitemap:** priority 0.8, changeFrequency monthly

### Discovery — `/services/discovery/`

- **Target query:** "AI strategy consulting", "AI roadmap consulting"
- **URL slug:** `/services/discovery/`
- **Meta title:** "Discovery — AI Strategy & Roadmap Consulting"
- **Meta description:** "Discovery is a focused 3-5 week engagement that produces a clear AI strategy and roadmap. No vague recommendations."
- **Structured data:** Service JSON-LD (serviceType: "AI Strategy Consulting", name: "Discovery", provider: Alphabyte) + BreadcrumbList (Home > Services > Discovery)
- **OG image:** `/og/default.png`
- **Sitemap:** priority 0.6, changeFrequency monthly

### Data Readiness — `/services/data/`

- **Target query:** "AI data readiness assessment", "data quality audit AI"
- **URL slug:** `/services/data/`
- **Meta title:** "Data Readiness — AI Data Quality & Governance"
- **Meta description:** "Data quality audits, governance assessments, and AI readiness scorecards. Make sure your data foundation supports the AI you want to build."
- **Structured data:** Service JSON-LD (serviceType: "AI Data Quality & Governance Consulting", name: "Data Readiness", provider: Alphabyte) + BreadcrumbList (Home > Services > Data Readiness)
- **OG image:** `/og/default.png`
- **Sitemap:** priority 0.6, changeFrequency monthly

### Enablement — `/services/enablement/`

- **Target query:** "AI enablement consulting", "Claude consulting for teams"
- **URL slug:** `/services/enablement/`
- **Meta title:** "Enablement — Executive AI & Citizen Dev Programs"
- **Meta description:** "Custom Claude environments for leadership and citizen developer enablement for teams. The fastest path to visible AI ROI."
- **Structured data:** Service JSON-LD (serviceType: "AI Enablement Consulting", name: "Enablement", provider: Alphabyte) + BreadcrumbList (Home > Services > Enablement)
- **OG image:** `/og/default.png`
- **Sitemap:** priority 0.6, changeFrequency monthly

### Infrastructure — `/services/infrastructure/`

- **Target query:** "custom MCP server consulting", "on-premise LLM deployment"
- **URL slug:** `/services/infrastructure/`
- **Meta title:** "Infrastructure — Custom MCP, AI Agents, On-Premise LLMs"
- **Meta description:** "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models. AI as operational infrastructure, not a demo."
- **Structured data:** Service JSON-LD (serviceType: "AI Infrastructure Consulting", name: "Infrastructure", provider: Alphabyte) + BreadcrumbList (Home > Services > Infrastructure)
- **OG image:** `/og/default.png`
- **Sitemap:** priority 0.6, changeFrequency monthly

## Design Notes

- Services index hero: off-white canvas background (`bg-canvas`), editorial typography, no gradient, no photography. Eyebrow in Alphabyte Blue, uppercase, `tracking-brand-wide`. Headline at `text-display`, `tracking-brand-tight`. "AI problem" span in `text-alphabyte-blue`.
- Services index tab content: two-column layout on desktop (`lg:grid-cols-2`), stacked on mobile. Left column holds editorial content (question, track header, h2, body, "right for you if", investment line). Right column holds "What's Included" eyebrow + pills + CTA.
- Track header line ("TRACK 01 · DISCOVERY") uses `text-body-sm`, uppercase, `tracking-brand-wide`, `text-alphabyte-blue` or `text-muted-foreground`.
- Investment line is a metadata-sized line in `text-muted-foreground`.
- "Right for you if:" label is bold italic in `text-foreground`, followed by the condition text in `text-muted-foreground`.
- Tab bar: dark background (`bg-foreground`), spans full viewport width — same pattern as homepage.
- Track detail stubs: hero section on `bg-canvas` with the same editorial spacing as the services index hero. Coming soon section below on `bg-canvas` with clear visual separation (border-top or spacing).
- All pages use Option C surface system (off-white canvas, white elevated surfaces, blue accents, black CTAs).

## Motion & Interactivity

- Tab switching: instant content swap, consistent with homepage behavior. No slide animations — crisp transitions per Option C motion rules.
- The refactored `TrackTabs` component preserves the existing `useState`-based tab switching — no routing on tab click.
- No scroll animations on the services index or stub pages.

## Acceptance Criteria
- [ ] `/services/` renders without console errors and displays the hero + tabbed track content
- [ ] `/services/discovery/`, `/services/data/`, `/services/enablement/`, `/services/infrastructure/` each render without console errors
- [ ] Refactored `TrackTabs` accepts a `tracks` prop; homepage still renders identically
- [ ] Tab switching works on the services page — clicking a tab swaps the content panel
- [ ] All five pages have correct metadata (title, description, canonical, OG)
- [ ] All four track stub pages include Service JSON-LD and BreadcrumbList JSON-LD
- [ ] All five routes are in `src/app/sitemap.ts` with correct priority and changeFrequency
- [ ] "Get started →" CTAs on the services page link to the correct track stub page
- [ ] "← Back to all services" links on stubs navigate to `/services/`
- [ ] "Book a Strategy Sprint" CTAs on stubs link to `/services/discovery/`
- [ ] Investment ranges use public-safe framing — no hourly rates, no effort in hours
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks — no forbidden vocabulary
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review — Option C surface system, correct color usage
- [ ] Passes `seo/page-checklist.md` for all five pages
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean
- [ ] Pages are responsive (mobile through desktop, no horizontal scroll)
- [ ] No "Not Sure Where to Start" section ships — explicitly deferred

## Related
- `prds/homepage.md` — homepage PRD (uses the same `TrackTabs` component)
- `prds/site-header.md` — header PRD (Services nav items link to these routes)
- `prds/site-footer.md` — footer PRD (Services column links to these routes)
- `.claude/skills/alphabyte-services/service-tracks.md` — source of truth for track content
- `.claude/skills/alphabyte-services/pricing.md` — source of truth for publishable pricing
- `.claude/skills/seo/page-checklist.md` — pre-ship gate

## Notes
- The `TrackTabs` refactor is the one piece of shared-component work in this PRD. The goal is minimal: extract the hardcoded `tracks` array into a prop, keep the component's internal structure (tab bar + panel) unchanged. The homepage passes the existing content as-is; the services page passes deeper content with investment lines and richer body copy.
- The services page ends after the active track content — there is no closing CTA section. The "Not Sure Where to Start" entry-bundles section (Strategy Sprint, Executive Quick Win, Sprawl Fix) will be added in a follow-up PRD.
- Track detail stubs are intentionally minimal. They exist to complete the routing chain and prevent dead links. Full track pages will ship in separate PRDs with richer content, possibly FAQs, and case study integrations.

---
*Created: 2026-04-27*
*Last updated: 2026-04-27 (Shipped)*
