# Alphabyte AI - V8 Migration

Routing and IA decision record for the V8 design (Option C, approved copy). Source: `design/Alphabyte_AI_Site_V8.pdf` (21 pages).

V8 supersedes V7. The change is purely additive: pages 1–19 are identical to V7. V8 adds two new pages at the end (page 20: Tools index; page 21: Blog post detail). These resolve OQ3 and OQ4 from V7.

## 1. Page inventory

Every PDF page captured: top-of-page design label, breadcrumb (where shown), H1, and a one-sentence description.

| # | Design label | Breadcrumb | H1 | Description |
|---|---|---|---|---|
| 1 | OPTION C · APPROVED COPY › HOME | (none) | "AI that compounds. Not pilots that stall." | Homepage. Unchanged from V7. |
| 2 | OPTION C · APPROVED COPY › SERVICES | (none) | "AI that compounds. Not pilots that stall." | Services index. Unchanged from V7. |
| 3 | OPTION C · APPROVED COPY › SERVICES · EXECUTIVE ENABLEMENT | Home / Services / Executive Enablement | "Executive Enablement" | Standalone Executive Enablement page. Unchanged from V7. |
| 4 | OPTION C · APPROVED COPY › SERVICES · CITIZEN DEV | Home / Services / Citizen Development | "Citizen Development" | Standalone Citizen Development page. Unchanged from V7. |
| 5 | OPTION C · APPROVED COPY › SERVICES · DISCOVERY | Home / Services / Discovery | "Discovery" | Discovery service page. Unchanged from V7. |
| 6 | OPTION C · APPROVED COPY › SERVICES · DATA READINESS | Home / Services / Data Readiness | "Data Readiness" | Data Readiness service page. Unchanged from V7. |
| 7 | OPTION C · APPROVED COPY › SERVICES · INFRASTRUCTURE | Home / Services / Infrastructure | "Infrastructure" | Infrastructure service page. Unchanged from V7. |
| 8 | OPTION C · APPROVED COPY › TOOLS · CLAUDE | Home / Tools / Claude | "Claude" | Claude tool page. Unchanged from V7. |
| 9 | OPTION C · APPROVED COPY › TOOLS · MCP | Home / Tools / MCP | "MCP" | MCP tool page. Unchanged from V7. |
| 10 | OPTION C · APPROVED COPY › TOOLS · CUSTOM AI AGENTS | Home / Tools / Custom AI Agents | "Custom AI Agents" | Custom AI Agents tool page. Unchanged from V7. |
| 11 | OPTION C · APPROVED COPY › TOOLS · ON-PREMISE LLM | Home / Tools / On-Premise LLM | "On-Premise LLM" | On-Premise LLM tool page. Unchanged from V7. |
| 12 | OPTION C · APPROVED COPY › BLOG | (none) | "Blog" | Blog index. Unchanged from V7. |
| 13 | OPTION C · APPROVED COPY › ABOUT | (none) | "Practitioner-led. Claude-native. Bottom-up by design." | About page. Unchanged from V7. |
| 14 | OPTION C · APPROVED COPY › OUR WORK | (none) | "The most credible proof is the work we are shipping today." | Our Work index. Unchanged from V7. |
| 15 | OPTION C · APPROVED COPY › CASE STUDY · SPRINKLERMATIC | Home / Our Work / Sprinklermatic / EJ Capital | "AI-Powered Compliance Intelligence Agent" | Sprinklermatic case study. Unchanged from V7. |
| 16 | OPTION C · APPROVED COPY › CASE STUDY · RECIRQ | Home / Our Work / RecirQ / Reventory | "AI-Powered Executive Productivity & Auction Analytics" | RecirQ case study. Unchanged from V7. |
| 17 | OPTION C · APPROVED COPY › TEAM · ADAM NAMEH | Home / Team / Adam Nameh | "Adam Nameh" | Adam Nameh profile. Unchanged from V7. |
| 18 | OPTION C · APPROVED COPY › TEAM | Home / Team | "The practitioners behind every engagement." | Team index. Unchanged from V7. |
| 19 | OPTION C · APPROVED COPY › CONTACT US | Home / Contact Us | "A discovery conversation takes 45 minutes." | Contact page. Unchanged from V7. |
| 20 | OPTION C · APPROVED COPY › TOOLS | Home / Tools | "We don't sell platforms. We build with what actually works." | **NEW V8** — Tools index page. Eyebrow "OUR TOOLS", body, dark three-stat bar (Anthropic Claude Partner / Every engagement / Production-grade), "THE FULL STACK" section with 2x2 grid of tool cards (Claude, MCP, Custom AI Agents, On-Premise LLM each with title, subhead, body, bullet list, "Learn more →" link), "HOW THE STACK FITS TOGETHER" section with 4-column layer breakdown (Layer 1 Claude, Layer 2 MCP, Layer 3 Agents, Layer 4 On-Premise LLM), bottom CTA section. Resolves OQ3. |
| 21 | OPTION C · APPROVED COPY › BLOG · SAMPLE POST | Home / Blog / The window is open | "The window is open. Here is how to move before it closes." | **NEW V8** — Blog post detail template. Tag pills above title, h1, excerpt, author byline (avatar, name, date, read time), two-column body: left column is long-form post content (headings, paragraphs, callout pull-quote, embedded "What the first 30 days look like" box), right sidebar contains "IN THIS ARTICLE" table of contents, "RELATED SERVICE" card, "Ready to move?" Discovery Call CTA card, "TOPICS" tag list. Below the body: author bio block. Below that: "MORE FROM THE BLOG" 3-card grid linking to other posts. Resolves OQ4. |

## 2. Top navigation - 7 items

Order taken verbatim from PDF (every page displays this order):

1. Services
2. Tools
3. Our Work
4. Team
5. About
6. Blog
7. Contact Us

Unchanged from V7.

## 3. Route decisions

### 3.1 Existing routes (unchanged from V7)

All routes from V7 carry forward identically. See V7 MIGRATION.md or commits for the full table — pages 1-19 ship from V7 unchanged in V8.

### 3.2 New routes added in V8

| Route | Source PDF page | Notes |
|---|---|---|
| `/tools` | 20 | **NEW V8 content** — was previously a placeholder/missing in V6 and V7. Resolves OQ3. |
| `/blog/[slug]` | 21 | **NEW V8 template** — blog post detail layout. Resolves OQ4. Individual posts populate the template; the layout itself is canonical from page 21. |

### 3.3 Redirects (`public/_redirects`, Cloudflare Pages format)

Same as V7. No new redirects required for V8.

## 4. Discovery Call modal - site-wide pattern

Unchanged from V7. The blog post sidebar's "Ready to move?" card and the tools index bottom CTA both use the standard `<DiscoveryCallButton>` to open the modal.

## 5. Open Questions

### OQ1. Nav order: user brief vs PDF — RESOLVED in V6/V7

PDF order is authoritative.

### OQ2. Page 3 vs page 4 — Citizen Dev / Enablement collision — RESOLVED in V7

V7+ page 3 is standalone Executive Enablement. V7+ page 4 is standalone Citizen Development.

### OQ3. Tools index page — RESOLVED in V8

V8 page 20 is the Tools index at `/tools`. Eyebrow "OUR TOOLS", h1 "We don't sell platforms. We build with what actually works.", three-stat bar, "THE FULL STACK" 2x2 grid of tool cards, "HOW THE STACK FITS TOGETHER" 4-layer breakdown, bottom CTA.

### OQ4. Blog post detail page — RESOLVED in V8

V8 page 21 is the canonical blog post detail layout at `/blog/[slug]`. Two-column with sidebar ToC, related service, ready-to-move CTA, topic tags. Author bio at bottom. "More from the blog" 3-card grid.

### OQ5. Housing Services Corp case study — STILL OPEN

Our Work index references Housing Services Corp but no case study detail page is in the PDF. Resolve before invoking `/page case-study-housing-services-corp`.

### OQ6. Legacy redirects — STILL OPEN (partial)

Same as V7. No new redirects in V8.

### OQ7. Footer detail — STILL OPEN

Same as V7. The PDF crops the footer on every page.

### OQ8. Service tab section on homepage vs Services index page — STILL OPEN (intentional?)

Same as V7. Confirm this duplication is intentional.

## 6. Phase order

1. **Phase 1 foundation** — already shipped.
2. **Per-page builds** — pages 1-19 already shipped from V7. Re-running unaffected.
3. **V7 → V8 migration** — dispatch the two new pages:
   - `/page tools-index` — uses page 20
   - `/page blog-post-template` — uses page 21
4. **Open Question resolution** still blocking: only OQ5 remaining.

## 7. Reusable component candidates from V8

**`<BlogPostPage>`** — page 21 establishes the canonical blog post detail layout. Even though only one example exists in the PDF, every future blog post will use this exact layout. Build the component before dispatching `/page blog-post-template` so the implementer renders the template via the component, not as a one-off.

**Tools index (page 20)** — one instance only, no reuse opportunity. Build it as a one-off page directly.

**Blog post page sub-patterns worth noting** (extract later if reuse signals emerge):
- The "MORE FROM THE BLOG" 3-card grid duplicates the proof-cards pattern already present on multiple pages.
- The "Ready to move?" sidebar CTA card is a smaller variant of the bottom closing CTA used on tool pages and elsewhere.
- The embedded "What the first 30 days look like" box inside the post body is the same component used on service pages.

Don't preemptively extract these — let the second usage signal whether the abstraction earns its keep.
