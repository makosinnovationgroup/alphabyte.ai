# Sprinklermatic Case Study Page

## Status
Shipped

## Type
New page

## Summary
Full case study page for the Sprinklermatic / EJ Capital engagement at `/our-work/sprinklermatic`. Replaces the existing stub with the V7 approved design (PDF page 15) using the `CaseStudyPage` layout component. The page tells the story of the Compliance Intelligence Agent — from NFPA code challenge through knowledge graph architecture to production agent deployment.

## Decided
- Route: `/our-work/sprinklermatic/`
- Layout component: `CaseStudyPage` from `src/components/case-study-page.tsx` — all content passed as props, no custom layout code
- H1: "AI-Powered Compliance Intelligence Agent" (note: "AI-Powered" appears in the approved PDF despite being on the voice-and-tone forbidden list — PDF wins)
- Breadcrumb: Home / Our Work / Sprinklermatic / EJ Capital (four items, per PDF)
- Eyebrow: "CASE STUDY · FIRE PROTECTION · EJ BACKED · NORTH AMERICA"
- Subhead: "Sprinklermatic / EJ Capital"
- Five tag pills: Claude AI Agent, Custom MCP Server, NFPA Compliance, Knowledge Graph, Human-in-the-Loop
- Four stats in the stats grid (see Verbatim copy)
- Body sections: five headings with paragraphs (Background, The Challenge, Building the Knowledge Foundation, The Compliance Intelligence Agent, A Platform Built for Expansion)
- No callout-type body sections — all content is heading or paragraph
- Sidebar: CLIENT + SERVICES DELIVERED + TECHNOLOGY + pull quote
- Closing CTA wired to discovery call modal
- Existing stub at `src/app/our-work/sprinklermatic/page.tsx` is replaced — preserve/update metadata and breadcrumb structured data
- Content is from the approved V7 PDF (stamped APPROVED COPY) and is cleared for publication

## Open Questions
None

## Scope

### In scope
- Replace stub page content with `CaseStudyPage` component usage, passing all V7 content as props
- Update metadata (title, description, OG, Twitter) to reflect V7 case study content
- Update breadcrumb JSON-LD schema to include "EJ Capital" as fourth breadcrumb item
- All verbatim copy from PDF page 15 rendered via CaseStudyPage props

### Out of scope
- Changes to the `CaseStudyPage` component itself (it's already built)
- OG image creation (use existing `/og/default.png` — a custom OG image is a follow-up)
- Mobile-specific layout adjustments beyond what CaseStudyPage already handles
- Photography or inline images within the body content
- RecirQ or Housing Services Corp case study pages (separate `/page` invocations)

## Pages & Components

### Modifying
- `src/app/our-work/sprinklermatic/page.tsx` — replace stub content with CaseStudyPage usage, update metadata

### Creating
None

## Content

### Verbatim copy

All copy below is from PDF page 15 (APPROVED COPY). Use exactly as written.

**Breadcrumb items:**
1. "Home" (links to `/`)
2. "Our Work" (links to `/our-work/`)
3. "Sprinklermatic" (links to `/our-work/sprinklermatic/`)
4. "EJ Capital" (current page, no link)

**Eyebrow:** "CASE STUDY · FIRE PROTECTION · EJ BACKED · NORTH AMERICA"

**H1:** "AI-Powered Compliance Intelligence Agent"

**Subhead:** "Sprinklermatic / EJ Capital"

**Tag pills (in order):**
1. "Claude AI Agent"
2. "Custom MCP Server"
3. "NFPA Compliance"
4. "Knowledge Graph"
5. "Human-in-the-Loop"

**Stats grid (four stats, in order):**
1. Value: "40+ hrs" / Label: "Per week eliminated in manual NFPA code lookup"
2. Value: "9" / Label: "Parallel AI initiatives across the Sprinklermatic programme"
3. Value: "Citation-grade" / Label: "Accuracy — every answer grounded in the actual document"
4. Value: "Live" / Label: "NFPA compliance agent in active production use"

**Body sections (in order, as BodySection[] props):**

- type: "heading", text: "Background"
- type: "paragraph", text: "Sprinklermatic is a fire protection company operating across multiple entities, specialising in the design, installation, and servicing of fire suppression systems. The company works against one of the most demanding compliance environments in any industry: the National Fire Protection Association (NFPA) fire code library."
- type: "paragraph", text: "With a growing portfolio of projects and a technical team that depends on precise, code-level guidance daily, Sprinklermatic engaged Alphabyte to explore how AI could solve a compliance knowledge problem that no off-the-shelf tool had addressed."
- type: "heading", text: "The Challenge"
- type: "paragraph", text: "Fire protection work is code-driven at every level. Every system design, installation decision, and inspection outcome traces back to specific passages within the NFPA code library — dozens of large PDF documents totaling hundreds of pages of dense regulatory content."
- type: "paragraph", text: "Technical staff had to manually search through large, cross-referenced PDFs to locate the exact passage applicable to each project scenario. The volume and complexity made consistent, accurate lookups time-consuming and prone to human error. General-purpose AI tools could not solve this — context window limitations produce incomplete or unreliable outputs at this document scale."
- type: "paragraph", text: "For a company where a missed or incorrect code reference carries real safety and liability consequences, an answer that is approximately right is not acceptable."
- type: "heading", text: "Building the Knowledge Foundation"
- type: "paragraph", text: "The core technical challenge was designing a system that routes an AI agent to the exact page of the exact document required to answer any compliance query. Alphabyte built a custom processing pipeline that ingested Sprinklermatic's full NFPA code library and transformed it into a structured knowledge graph."
- type: "paragraph", text: "The knowledge graph maps every code standard, chapter, section, and cross-reference in the library. It generates a master manifest that serves as a navigation index: when a compliance question is submitted, the agent consults the manifest, identifies the applicable code family, routes to the correct chapters, and retrieves the specific page required. The agent follows a structured, documented path to every answer and does not generate responses from memory."
- type: "paragraph", text: "This architecture was necessary given the nature of the source material. Without a routing and indexing mechanism, a language model will either hallucinate or fail to surface the correct passage. In fire code compliance, neither outcome is operationally acceptable."
- type: "heading", text: "The Compliance Intelligence Agent"
- type: "paragraph", text: "With the knowledge foundation in place, Alphabyte built the agent layer as part of a Claude Cworks project. A team member describes a project scenario — building type, system configuration, or specific installation condition — and the agent returns the applicable code standard, the relevant passage, and the source page it was retrieved from. Every response is grounded in the actual document, not inferred."
- type: "paragraph", text: "The agent is modular by design. Code editions are updated on a cycle and jurisdictional requirements vary by project. New or updated code sets can be processed through the same pipeline and incorporated into the knowledge graph without rebuilding the system architecture."
- type: "heading", text: "A Platform Built for Expansion"
- type: "paragraph", text: "The compliance agent is one component of a broader nine-initiative AI programme currently being developed for Sprinklermatic's operations. The agent sits within an orchestration layer that routes queries across multiple specialized agents as the programme scales. Compliance Intelligence is one domain. Estimating, operations management, and executive productivity are others in active development."
- type: "paragraph", text: "A proprietary AI-powered fire protection estimating and design tool is under active development, with commercialization planned for 2026 and into 2027."

**Sidebar:**

- Client name: "Sprinklermatic / EJ Capital"
- Client meta: "Fire protection · EJ Backed · North America"
- Services Delivered:
  1. "AI Solutions Discovery"
  2. "Custom MCP Server Development"
  3. "Knowledge Graph Architecture"
  4. "Claude Agent Development"
  5. "Human-in-the-Loop Governance"
  6. "Agent Command Centre"
- Technology:
  1. "Claude (Anthropic)"
  2. "Claude Cworks"
  3. "Custom MCP Server"
  4. "Airtop Connector"
  5. "Knowledge Graph + Manifest Index"
- Pull quote: "Every response is grounded in the actual document, not inferred. The agent follows a structured, documented path to every answer."

**Closing CTA:**
- Heading: "Want to explore what we could build for your compliance environment?"
- Subhead: "45 minutes. No cost. No obligation."
- Button label: "Book a Discovery Call"

**Implementation note on uncertain text:** The PDF renders "Claude Cworks" in both the body text and the Technology sidebar. At 200 DPI rasterization this text is difficult to read with certainty — it may say "Claude Desktop", "Claude Code", or another product name. The implementer should verify against the PDF at higher zoom before coding. If unresolvable, use what is written here and flag in the implementation report.

### Drafted at implement-time
None — all copy is from the approved PDF.

## Search Intent & SEO

- **Target query:** "Sprinklermatic AI case study", "NFPA compliance AI agent", "fire protection AI automation"
- **URL slug:** `/our-work/sprinklermatic/` (existing)
- **Meta title:** "Sprinklermatic — Compliance Intelligence Agent" (renders as "Sprinklermatic — Compliance Intelligence Agent — Alphabyte", 59 chars)
- **Meta description:** "How Alphabyte built a compliance intelligence agent for Sprinklermatic — 40+ hours per week eliminated in manual NFPA code lookup, citation-grade accuracy, live in production." (160 chars)
- **Structured data:** BreadcrumbList (already present, update to include EJ Capital as fourth item)
- **OG image:** `/og/default.png` (existing default — custom OG image is a follow-up)

## Design Notes

The CaseStudyPage component handles the full layout: dark hero band, tag pills, stats grid, two-column body + sidebar, and closing CTA. This page passes data props — no custom layout code needed. Defer to alphabyte-brand skill defaults for all visual decisions not covered by the component.

The hero is dark (`bg-foreground`) with white text — this is the only page type in V7 with a dark hero. Breadcrumb renders inside the dark hero (different from ServicePage/ToolPage light heroes).

## Motion & Interactivity
None — purely static content rendering. Button hover states handled by DiscoveryCallButton.

## Acceptance Criteria
- [ ] Page renders at `/our-work/sprinklermatic/` using the `CaseStudyPage` component
- [ ] All content from PDF page 15 appears verbatim — no paraphrase, no truncation
- [ ] Dark hero band: breadcrumb (4 items), eyebrow, h1, subhead, 5 tag pills
- [ ] Stats grid: 4 stats with teal values and muted labels, hairline separators
- [ ] Body: 5 headings with paragraphs rendered in correct order
- [ ] Sidebar: CLIENT, SERVICES DELIVERED, TECHNOLOGY, pull quote — all in correct order
- [ ] Closing CTA: heading, subhead, and "Book a Discovery Call" button opens the discovery call modal
- [ ] Metadata updated: title, description, OG, Twitter fields reflect V7 content
- [ ] BreadcrumbList JSON-LD updated to include EJ Capital as fourth item
- [ ] `alternates.canonical` set to `/our-work/sprinklermatic/`
- [ ] Passes seo/page-checklist.md
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks (note: "AI-Powered" in H1 is from approved PDF)
- [ ] Passes alphabyte-services hard rules — no rate card, no competitor names, no hours-as-effort, exact track and offering names
- [ ] `pnpm build` passes
- [ ] `pnpm typecheck` passes
- [ ] Implementation report states that CaseStudyPage layout component was used

## Related
- `prds/case-study-page-component.md` — the reusable CaseStudyPage component PRD (shipped)
- `src/components/case-study-page.tsx` — the layout component this page consumes
- `design/Alphabyte_AI_Site_V7.pdf` page 15 — source of truth
- `/tmp/page-case-study-sprinklermatic-1.png` — rasterized source of truth
- `.claude/skills/alphabyte-services/proof-points.md` — Sprinklermatic public framing rules
- `design/MIGRATION.md` — route and IA decisions
- `design/INDEX.md` — dispatch table

## Notes

The existing stub at `src/app/our-work/sprinklermatic/page.tsx` already has valid metadata and a BreadcrumbList schema — these should be updated rather than rewritten from scratch. The metadata `title` and `description` need updating to match V7 content; the breadcrumb schema needs a fourth item for "EJ Capital".

The body content is substantial (five sections, ~12 paragraphs). All of it comes from the approved PDF and must appear verbatim. The CaseStudyPage component's `BodySection[]` prop type (heading | paragraph | callout) maps cleanly — this page uses only heading and paragraph types.

The "Claude Cworks" text in the body and sidebar Technology list is flagged as uncertain due to PDF rendering resolution. The implementer should verify this against the PDF before finalizing.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29 (shipped)*
