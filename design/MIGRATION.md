# Alphabyte AI - V7 Migration

Routing and IA decision record for the V7 design (Option C, approved copy). Source: `design/Alphabyte_AI_Site_V7.pdf` (19 pages).

V7 supersedes V6. The major change is on the service pages: page 3 is now a clean standalone Executive Enablement page (resolving OQ2 from V6), and pages 5, 6, 7 each gain a three-stat dark bar between the body copy and the 30-days timeline. All other pages are unchanged from V6.

## 1. Page inventory

Every PDF page captured: top-of-page design label, breadcrumb (where shown), H1, and a one-sentence description.

| # | Design label | Breadcrumb | H1 | Description |
|---|---|---|---|---|
| 1 | OPTION C · APPROVED COPY › HOME | (none) | "AI that compounds. Not pilots that stall." | Homepage with hero, "Currently in active delivery for" client list, "Is this you?" qualification grid, five-tab service selector, three-card proof section, closing CTA. Unchanged from V6. |
| 2 | OPTION C · APPROVED COPY › SERVICES | (none) | "AI that compounds. Not pilots that stall." | Services index with the "Where do you start?" decision table mapping situations to entry-point services. Unchanged from V6. |
| 3 | OPTION C · APPROVED COPY › SERVICES · EXECUTIVE ENABLEMENT | Home / Services / Executive Enablement | "Executive Enablement" | Standalone Executive Enablement service page with subhead "A fast, visible AI win for your leadership team.", dark three-stat bar (2 to 4 weeks / Day 1 / Fast win), "What the first 30 days look like" timeline, six deliverables, qualification panels, and timeline footer "2 to 4 weeks from kickoff". URL stamp: `alphabyte-ai.pages.dev/services/executive-enablement`. **NEW in V7** — replaces V6's combined Enablement page, resolves OQ2. |
| 4 | OPTION C · APPROVED COPY › SERVICES · CITIZEN DEV | Home / Services / Citizen Development | "Citizen Development" | Standalone Citizen Development service page with eyebrow "SERVICES · FLAGSHIP OFFERING", subhead "Every employee, now an AI developer.", dark three-stat bar (Week 3 / 2 to 12 weeks / Flagship), 30-days timeline, eight deliverables, and qualification panels. Content unchanged from V6 page 4. |
| 5 | OPTION C · APPROVED COPY › SERVICES · DISCOVERY | Home / Services / Discovery | "Discovery" | Discovery service page covering the four-week strategy formation engagement. **V7 adds a dark three-stat bar** (4 weeks / 3 / No decks) between the body and the 30-days timeline. All other content unchanged from V6. |
| 6 | OPTION C · APPROVED COPY › SERVICES · DATA READINESS | Home / Services / Data Readiness | "Data Readiness" | Data Readiness service page covering data quality audit, governance review, AI readiness scorecard, and remediation pathway. **V7 adds a dark three-stat bar** (Week 2 / 5 dimensions / Zero). All other content unchanged from V6. |
| 7 | OPTION C · APPROVED COPY › SERVICES · INFRASTRUCTURE | Home / Services / Infrastructure | "Infrastructure" | Infrastructure service page covering custom MCP servers, custom AI agents, on-premise LLM, fine-tuned LLMs. **V7 adds a dark three-stat bar** (OAuth 2.0 / Full audit / Production). All other content unchanged from V6. |
| 8 | OPTION C · APPROVED COPY › TOOLS · CLAUDE | Home / Tools / Claude | "Claude" | Claude tool page asserting Anthropic Claude Partner status. Unchanged from V6. |
| 9 | OPTION C · APPROVED COPY › TOOLS · MCP | Home / Tools / MCP | "MCP" | MCP tool page covering custom server development. Unchanged from V6. |
| 10 | OPTION C · APPROVED COPY › TOOLS · CUSTOM AI AGENTS | Home / Tools / Custom AI Agents | "Custom AI Agents" | Custom AI Agents tool page. Unchanged from V6. |
| 11 | OPTION C · APPROVED COPY › TOOLS · ON-PREMISE LLM | Home / Tools / On-Premise LLM | "On-Premise LLM" | On-Premise LLM tool page. Unchanged from V6. |
| 12 | OPTION C · APPROVED COPY › BLOG | (none) | "Blog" | Blog index with featured post and grid. Unchanged from V6. |
| 13 | OPTION C · APPROVED COPY › ABOUT | (none) | "Practitioner-led. Claude-native. Bottom-up by design." | About page. Unchanged from V6. |
| 14 | OPTION C · APPROVED COPY › OUR WORK | (none) | "The most credible proof is the work we are shipping today." | Our Work index. Unchanged from V6. |
| 15 | OPTION C · APPROVED COPY › CASE STUDY · SPRINKLERMATIC | Home / Our Work / Sprinklermatic / EJ Capital | "AI-Powered Compliance Intelligence Agent" | Sprinklermatic case study. Unchanged from V6. |
| 16 | OPTION C · APPROVED COPY › CASE STUDY · RECIRQ | Home / Our Work / RecirQ / Reventory | "AI-Powered Executive Productivity & Auction Analytics" | RecirQ case study. Unchanged from V6. |
| 17 | OPTION C · APPROVED COPY › TEAM · ADAM NAMEH | Home / Team / Adam Nameh | "Adam Nameh" | Adam Nameh profile. Unchanged from V6. |
| 18 | OPTION C · APPROVED COPY › TEAM | Home / Team | "The practitioners behind every engagement." | Team index with six members. Unchanged from V6. |
| 19 | OPTION C · APPROVED COPY › CONTACT US | Home / Contact Us | "A discovery conversation takes 45 minutes." | Contact page. Unchanged from V6. |

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

Unchanged from V6.

## 3. Route decisions

### 3.1 Existing routes that change

| Route | Action | Notes |
|---|---|---|
| `/` | enhance | Homepage tabs, "Currently in active delivery for" strip, qualification grid, proof cards, closing CTA. (Already shipped from V6 — V7 unchanged.) |
| `/services` | enhance | Services index with the "Where do you start?" decision table. (V7 unchanged from V6.) |
| `/services/executive-enablement` | enhance | Standalone Executive Enablement page from PDF page 3. **NEW page content in V7.** Three-stat bar, six deliverables, 30-days timeline. |
| `/services/citizen-development` | replace | Standalone Citizen Development page from PDF page 4. Add redirect from old `/citizen-dev` top-nav slug per `_redirects`. (V7 content unchanged from V6.) |
| `/services/discovery` | enhance | Replace stub with PDF page 5 content. **V7 adds a three-stat bar** to the existing layout. |
| `/services/data-readiness` | enhance | Replace stub with PDF page 6 content. **V7 adds a three-stat bar.** |
| `/services/infrastructure` | enhance | Replace stub with PDF page 7 content. **V7 adds a three-stat bar.** |
| `/tools` | enhance | No PDF page exists. See OQ3. |
| `/tools/claude` | enhance | Replace stub with PDF page 8 content. (V7 unchanged.) |
| `/tools/mcp` | enhance | Replace stub with PDF page 9 content. (V7 unchanged.) |
| `/tools/custom-ai-agents` | enhance | Replace stub with PDF page 10 content. (V7 unchanged.) |
| `/tools/on-premise-llm` | enhance | Replace stub with PDF page 11 content. (V7 unchanged.) |

### 3.2 New routes

| Route | Source PDF page | Notes |
|---|---|---|
| `/about` | 13 | New. Unchanged from V6 spec. |
| `/blog` | 12 | New. Unchanged from V6 spec. |
| `/our-work` | 14 | New. Unchanged from V6 spec. |
| `/our-work/sprinklermatic` | 15 | New. Unchanged from V6 spec. |
| `/our-work/recirq` | 16 | New. Unchanged from V6 spec. |
| `/our-work/housing-services-corp` | (missing) | No PDF page. See OQ5. |
| `/team` | 18 | New. Unchanged from V6 spec. |
| `/team/adam-nameh` | 17 | New. Unchanged from V6 spec. |
| `/contact` | 19 | New. Unchanged from V6 spec. |

### 3.3 Routes removed in V7

V6 included a conditional `/services/enablement` route for the combined Enablement page on V6 page 3. **V7 eliminates this route entirely.** Page 3 in V7 is standalone Executive Enablement. If `/services/enablement` exists in your codebase from a prior partial build, retire it (delete and add a 301 redirect to `/services/executive-enablement`).

### 3.4 Redirects (`public/_redirects`, Cloudflare Pages format)

Confirmed:

```
/citizen-dev          /services/citizen-development          302
/services/enablement  /services/executive-enablement         301
```

(The second line is V7-specific: if a partial build at `/services/enablement` exists, redirect it to the V7 destination.)

Conditional, pending prior route audit: see OQ6.

## 4. Discovery Call modal - site-wide pattern

Unchanged from V6. See V6 MIGRATION.md or `phase-1-foundation-prompt.md` for the full spec.

## 5. Contact page - new route

Unchanged from V6. PDF page 19.

## 6. Team page - new route

Unchanged from V6. PDF pages 17 and 18.

## 7. Open Questions

### OQ1. Nav order: user brief vs PDF — RESOLVED

PDF order is authoritative: Services, Tools, Our Work, Team, About, Blog, Contact Us. Phase 1 foundation already shipped with this order.

### OQ2. Page 3 vs page 4 — the Citizen Dev / Enablement collision — RESOLVED in V7

V7 page 3 is a clean standalone Executive Enablement page at `/services/executive-enablement`. V7 page 4 is the standalone Citizen Development page at `/services/citizen-development`. There is no combined Enablement page in V7. The ambiguity from V6 is gone.

### OQ3. Tools index page — STILL OPEN

`/tools` is in the top nav, but no Tools index page is in the PDF. Resolve before invoking `/page tools-index`.

### OQ4. Blog post detail page — STILL OPEN

Blog index exists (PDF page 12) but no individual post detail page is in the PDF. Resolve before any `/page blog-post-*` invocation.

### OQ5. Housing Services Corp case study — STILL OPEN

Our Work index references Housing Services Corp but no case study detail page is in the PDF. Resolve before invoking `/page case-study-housing-services-corp`.

### OQ6. Legacy redirects — STILL OPEN (partial)

V7 adds the `/services/enablement → /services/executive-enablement` redirect rule. Other potential legacy paths (alternate tool slugs, prior alias for About or Contact) still need a route audit.

### OQ7. Footer detail — STILL OPEN

The PDF crops the footer on every page. Footer link list and legal lines need to be confirmed against the existing footer.

### OQ8. Service tab section on homepage vs Services index page — STILL OPEN (intentional?)

PDF page 1 renders the five services as tabs; PDF page 2 renders them as the "Where do you start?" decision table. Confirm this duplication is intentional.

## 8. Phase order

1. **Phase 1 foundation** — already shipped.
2. **Per-page builds** — each page dispatched via `/page <logical-name>`. The hook-enforced pipeline in `.claude/commands/page.md` runs PRD generation, implementation, QA, and the fix loop.
3. **V6 → V7 migration** — re-run any service page already built from V6 to pick up V7 changes:
   - `/page service-discovery` (adds stats bar)
   - `/page service-data-readiness` (adds stats bar)
   - `/page service-infrastructure` (adds stats bar)
   - `/page service-executive-enablement` (new V7 page)
   - `/page service-citizen-development` (no V7 changes, but build now that OQ2 is resolved)
4. **Open Question resolution** where blocking: OQ3, OQ4, OQ5.
