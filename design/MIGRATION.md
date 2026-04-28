# Alphabyte AI - V6 Migration

Routing and IA decision record for the V6 design (Option C, approved copy). Source: `design/Alphabyte_AI_Site_V6.pdf` (19 pages).

## 1. Page inventory

Every PDF page captured: top-of-page design label, breadcrumb (where shown), H1, and a one-sentence description.

| # | Design label | Breadcrumb | H1 | Description |
|---|---|---|---|---|
| 1 | OPTION C · APPROVED COPY › HOME | (none) | "AI that compounds. Not pilots that stall." | Homepage with hero, "Currently in active delivery for" client list, "Is this you?" qualification grid, five-tab service selector, three-card proof section, closing CTA. |
| 2 | OPTION C · APPROVED COPY › SERVICES | (none) | "AI that compounds. Not pilots that stall." | Services index with the "Where do you start?" decision table mapping situations to entry-point services. |
| 3 | OPTION C · APPROVED COPY › SERVICES · CITIZEN DEV | Home / Services / Enablement | "Enablement" | Combined Citizen Developer Enablement and Executive Enablement page rendered as two side-by-side columns, with shared "Right for you if / Not right for you if" framing. |
| 4 | OPTION C · APPROVED COPY › SERVICES · CITIZEN DEVELOPMENT | Home / Services / Citizen Development | "Citizen Development" | Standalone Citizen Development service page with "What the first 30 days look like" timeline, "What we deliver" deliverables list, and qualification panels. URL stamp: `alphabyte-ai.pages.dev/services/citizen-development`. |
| 5 | OPTION C · APPROVED COPY › SERVICES · DISCOVERY | Home / Services / Discovery | "Discovery" | Discovery service page covering the four-week strategy formation engagement with weekly cadence, deliverables, and qualification panels. |
| 6 | OPTION C · APPROVED COPY › SERVICES · DATA READINESS | Home / Services / Data Readiness | "Data Readiness" | Data Readiness service page covering data quality audit, governance review, AI readiness scorecard, and remediation pathway. |
| 7 | OPTION C · APPROVED COPY › SERVICES · INFRASTRUCTURE | Home / Services / Infrastructure | "Infrastructure" | Infrastructure service page covering custom MCP servers, custom AI agents, on-premise LLM, fine-tuned LLMs. |
| 8 | OPTION C · APPROVED COPY › TOOLS · CLAUDE | Home / Tools / Claude | "Claude" | Claude tool page asserting Anthropic Claude Partner status, listing the configuration approach across services, with three production deployment cards. |
| 9 | OPTION C · APPROVED COPY › TOOLS · MCP | Home / Tools / MCP | "MCP" | MCP tool page covering custom server development, identity and security, cloud infrastructure, and three active production deployments. |
| 10 | OPTION C · APPROVED COPY › TOOLS · CUSTOM AI AGENTS | Home / Tools / Custom AI Agents | "Custom AI Agents" | Custom AI Agents tool page covering sandbox runtime, CI/CD, command centre, human-in-the-loop, and three active production deployments. |
| 11 | OPTION C · APPROVED COPY › TOOLS · ON-PREMISE LLM | Home / Tools / On-Premise LLM | "On-Premise LLM" | On-Premise LLM tool page covering model selection, infrastructure provisioning, validation, API connectivity, and MLOps. |
| 12 | OPTION C · APPROVED COPY › BLOG | (none) | "Blog" | Blog index with one featured post and a five-card grid across Citizen Development, AI Strategy, Data & Infrastructure, and Case Studies. |
| 13 | OPTION C · APPROVED COPY › ABOUT | (none) | "Practitioner-led. Claude-native. Bottom-up by design." | About page covering the practice positioning, team structure, parent practice heritage, three active delivery cards, and certifications. |
| 14 | OPTION C · APPROVED COPY › OUR WORK | (none) | "The most credible proof is the work we are shipping today." | Our Work index with three active engagement cards (Sprinklermatic / EJ Capital, RecirQ / Reventory, Housing Services Corp) and "Read case study" links. |
| 15 | OPTION C · APPROVED COPY › CASE STUDY · SPRINKLERMATIC | Home / Our Work / Sprinklermatic / EJ Capital | "AI-Powered Compliance Intelligence Agent" | Sprinklermatic case study covering the NFPA compliance intelligence agent with metrics, technology sidebar, and pull-quote. |
| 16 | OPTION C · APPROVED COPY › CASE STUDY · RECIRQ | Home / Our Work / RecirQ / Reventory | "AI-Powered Executive Productivity & Auction Analytics" | RecirQ case study covering the executive productivity suite and auction analytics platform with Phase 1 / Phase 2 narrative. |
| 17 | OPTION C · APPROVED COPY › TEAM · ADAM NAMEH | Home / Team / Adam Nameh | "Adam Nameh" | Individual team member profile for Adam Nameh with credentials, expertise, achievements, thought leadership, and authored articles. |
| 18 | OPTION C · APPROVED COPY › TEAM | Home / Team | "The practitioners behind every engagement." | Team index showing six members (Adam Nameh, Mitch, Rugved, Ahmad, Rabia, Carrie) with role tags and capability badges. |
| 19 | OPTION C · APPROVED COPY › CONTACT US | Home / Contact Us | "A discovery conversation takes 45 minutes." | Contact page with discovery call form (name, email, company, job title, service interest selector, situation textarea) and contact info sidebar. |

## 2. Top navigation - 7 items

Order taken verbatim from PDF (every page displays this order):

1. Services
2. Tools
3. Our Work
4. Team
5. About
6. Blog
7. Contact Us

Wordmark "Alphabyte · AI" sits left. "Book a Discovery Call" CTA button sits right of nav. The CTA opens the Discovery Call modal site-wide, not a route navigation. Active-link state is teal underline (Option C theme).

See Open Question 1 below: the user brief specifies a different order; this document treats the PDF as authoritative until that is resolved.

## 3. Route decisions

### 3.1 Existing routes that change

| Route | Action | Notes |
|---|---|---|
| `/` | enhance | New tabbed services section, "Currently in active delivery for" strip, "Is this you?" qualification grid, three proof cards, closing CTA. |
| `/services` | enhance | Replace existing index content with the "Where do you start?" decision table from PDF page 2. |
| `/services/citizen-development` | enhance or new | Existing stub may have been at a different slug or absent. Replace with PDF page 4 content. See Open Question 2. |
| `/services/executive-enablement` | enhance or replace | Existing stub. PDF only delivers Executive Enablement content as the right column of page 3 (combined Enablement page). See Open Question 2. |
| `/services/discovery` | enhance | Replace stub with PDF page 5 content. |
| `/services/data-readiness` | enhance | Replace stub with PDF page 6 content. |
| `/services/infrastructure` | enhance | Replace stub with PDF page 7 content. |
| `/tools` | enhance | No tools index page exists in the PDF. See Open Question 3 for what `/tools` should render. |
| `/tools/claude` | enhance | Replace stub with PDF page 8 content. |
| `/tools/mcp` | enhance | Replace stub with PDF page 9 content. |
| `/tools/custom-ai-agents` | enhance | Replace stub with PDF page 10 content. Confirm prior slug (may have been `/tools/agents` or similar). |
| `/tools/on-premise-llm` | enhance | Replace stub with PDF page 11 content. Confirm prior slug. |

### 3.2 New routes

| Route | Source PDF page | Notes |
|---|---|---|
| `/about` | 13 | New. About page with practitioner-led positioning. |
| `/blog` | 12 | New. Blog index. Individual post detail page is not in PDF (Open Question 4). |
| `/our-work` | 14 | New. Our Work index referencing three case studies. |
| `/our-work/sprinklermatic` | 15 | New. Sprinklermatic / EJ Capital case study. |
| `/our-work/recirq` | 16 | New. RecirQ / Reventory case study. |
| `/our-work/housing-services-corp` | (missing) | Referenced from Our Work index but no PDF page exists. See Open Question 5. |
| `/team` | 18 | New. Team index. |
| `/team/adam-nameh` | 17 | New. Adam Nameh profile. Other members on page 18 show "Bio page coming soon" and do not get pages this round. |
| `/contact` | 19 | New. Contact page with discovery call form. Coexists with the Discovery Call modal as a fallback for direct navigation. |
| `/services/enablement` | 3 | Conditional. Only created if Open Question 2 resolves toward keeping the combined Enablement page. |

### 3.3 Redirects (`public/_redirects`, Cloudflare Pages format)

Confirmed:

```
/citizen-dev          /services/citizen-development   302
```

(Citizen Dev was previously top-nav per the brief; now nested under Services.)

Conditional, pending prior route audit:

- Any prior `/tools/*` slugs that differ from V6 slugs (e.g. `/tools/agents` to `/tools/custom-ai-agents`)
- Any prior alias for the about, contact, or services pages that no longer match

See Open Question 6.

### 3.4 Routes to retire

None confirmed in this round. The Tools section was previously slated for retirement and is now staying, so any "tools is being retired" infra (banner copy, redirect entries, sitemap exclusions) needs to be unwound. Audit during Phase 1 foundation work.

## 4. Discovery Call modal - site-wide pattern

A single `<DiscoveryCallModal />` component, rendered once at the app shell level, opened by every "Book a Discovery Call" trigger across the site.

- **Triggers.** Every CTA labeled "Book a Discovery Call" (header, hero, service pages, tool pages, case studies, blog, about, team, footer). Each CTA dispatches the same open event; none navigate.
- **Form fields (verbatim from PDF page 19).** First name, Last name, Work email, Company, Job title, "What are you most interested in?" radio group with options Citizen Development, Executive Enablement, Discovery, Data Readiness, Infrastructure, Not sure yet. "Tell us about your situation" textarea labeled `(optional)`.
- **Submit label.** "Book a Discovery Call →"
- **Below submit.** "We typically respond within one business day. Your information is never shared with third parties."
- **Close behavior.** Esc key, backdrop click, and explicit close button all dismiss. Focus returns to the trigger.
- **Accessibility.** Focus trap, `role="dialog"`, `aria-labelledby` pointed at the modal heading, body scroll lock while open.

The `/contact` route renders the same form on a dedicated page so direct links and search-engine landings still work. The modal is the preferred path from CTAs; the route is the fallback.

## 5. Contact page - new route

Standalone route at `/contact`. Renders the same form as the modal plus a left-column block with email, phone, office address, and a LinkedIn follow link. Source: PDF page 19. Breadcrumb shows `Home / Contact Us`.

Contact details verbatim from page 19:
- Email: `hello@alphabyte.ai`
- Phone: `+1 (647) 204-4581`
- Office: `155 Winges Road, Unit 1, Vaughan, Ontario, Canada L4L 6C7`
- LinkedIn: `Alphabyte AI on LinkedIn`

## 6. Team page - new route

Index at `/team` (PDF page 18). Six member cards. Only Adam Nameh has a profile page this round (`/team/adam-nameh`, PDF page 17); the other five cards display "Bio page coming soon" and do not link to detail pages.

When future team detail pages are added, dispatch them via `/page team-<slug>` and add rows to `design/INDEX.md`.

## 7. Open Questions

These are surfaced rather than silently resolved per the migration brief. None block Phase 1 foundation, but several block specific `/page` invocations.

### OQ1. Nav order: user brief vs PDF

The brief specifies `Services, Tools, Our Work, About, Blog, Team, Contact`. Every PDF page shows `Services, Tools, Our Work, Team, About, Blog, Contact Us`. PDF is stamped APPROVED COPY and is consistent across all 19 pages. This document and the Phase 1 foundation prompt use the PDF order. Confirm or instruct flip.

### OQ2. Page 3 vs page 4 - the Citizen Dev / Enablement collision

PDF page 3 has the design label `SERVICES · CITIZEN DEV`, the breadcrumb `Home / Services / Enablement`, the H1 `Enablement`, and content split into two columns: "CITIZEN DEVELOPER ENABLEMENT" and "EXECUTIVE ENABLEMENT". PDF page 4 has the design label `SERVICES · CITIZEN DEVELOPMENT`, breadcrumb `Home / Services / Citizen Development`, H1 `Citizen Development`, URL stamp `alphabyte-ai.pages.dev/services/citizen-development`, and standalone Citizen Development content.

Three plausible interpretations:

1. Page 3 is a combined Enablement landing at `/services/enablement` and page 4 is the Citizen Development detail at `/services/citizen-development`. Executive Enablement gets pulled out of page 3's right column into a `/services/executive-enablement` page.
2. Page 3 is an alternate / earlier draft superseded by page 4. Only build page 4. Build a separate Executive Enablement page from copy elsewhere or skip.
3. Page 3 is the canonical Citizen Dev page (matching its label) and page 4 is the alternate. The H1 mismatch on page 3 is a layout artifact.

This document assumes interpretation 1 in the route table but does not commit. Resolve before invoking `/page service-citizen-development` or `/page service-executive-enablement`.

### OQ3. Tools index page

`/tools` is in the top nav and exists in the prior site, but no Tools index page is in the PDF. Options: keep current index unchanged, build a fresh index from V6 brand patterns mirroring the four tool cards, or redirect `/tools` to the first tool page. Resolve before `/page tools-index`.

### OQ4. Blog post detail page

Blog index exists (page 12) but no individual post detail page is in the PDF. Resolve before any `/page blog-post-*` invocation. Most likely: build a templated detail page using the brand patterns from existing pages and the blog index card structure as guidance.

### OQ5. Housing Services Corp case study

Our Work index (page 14) and About page (page 13) reference Housing Services Corp as an active engagement. No case study detail page is in the PDF. The Our Work index card has a "Read case study →" link. Either build the page from copy in the index card and About page bullet, or remove the link until the case study is approved.

### OQ6. Legacy redirects beyond `/citizen-dev`

The brief confirms Citizen Dev was top-nav and is now nested. Other potential legacy paths (alternate tool slugs, an old `/work` or `/portfolio` route, an alternate contact path) need an audit of the prior route inventory. Phase 1 foundation lists this as a step but cannot enumerate redirects without that audit.

### OQ7. Footer detail

The PDF crops the footer on every page. Footer link list, secondary CTA, and legal lines need to be confirmed against the existing footer or against a separate footer spec if one exists.

### OQ8. Service tab section on homepage vs Services index page

Page 1 (homepage) renders the five services as tabs with "What's included" content. Page 2 (Services) renders them as a "Where do you start?" decision table. These are different presentations of the same five offerings. Confirm this is intentional duplication (homepage shows depth, services index shows entry-point selection) and not a copy-paste artifact.

## 8. Phase order

1. **Phase 1 foundation.** Header, footer, navigation.ts, Discovery Call modal, `_redirects`. Cross-cutting; lands first. See `phase-1-foundation-prompt.md`.
2. **Per-page builds.** Each page dispatched via `/page <logical-name>`, which reads `design/INDEX.md`, rasterizes the right PDF page, and dispatches to `/feature` or `/enhancement`.
3. **Open Question resolution.** Several `/page` invocations are blocked on Open Questions above. Resolve those before dispatch.
