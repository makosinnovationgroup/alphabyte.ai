# Build Full MCP Tool Page from V7 Design

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/tools.md`

## Motivation
The MCP tool page at `/tools/mcp` currently renders a stub with placeholder "Coming Soon" content, created during the initial tools build. The V7 design (PDF page 9, APPROVED COPY) specifies a full tool detail page with hero copy, a four-item "What we build" deliverables list, three "In active use today" client cards, and a closing CTA. This enhancement replaces the stub with the complete page, using the shipped `ToolPage` component (`src/components/tool-page.tsx`) to maintain consistency with the Claude tool page.

## Summary
Replace the MCP stub page with the full V7 design. The page uses the `ToolPage` layout component, passing data props for the hero, deliverables (list layout), "In active use today" cards, and closing CTA. No sidebar or partner card. No right-for-you / not-right-for-you panels. All copy is verbatim from the PDF.

## Changing
- Original: MCP page renders a hand-built stub layout with "Coming Soon" section. Updated: MCP page uses the `ToolPage` component with full content from V7 PDF page 9.
- Original: H1 is "MCP Servers". Updated: H1 is "MCP" (per PDF).
- Original: Subhead is "Governed, secure access to your systems via Model Context Protocol." Updated: Subhead is "Connect models to your tools." (per PDF).
- Original: Body copy is a single paragraph about connecting Claude to databases. Updated: Two body paragraphs — the MCP definition paragraph and the before/after comparison paragraph (per PDF).

## Decided
- Use the `ToolPage` component from `src/components/tool-page.tsx` — the page structure matches exactly (breadcrumb, eyebrow, h1, subhead, body, CTA row, deliverables list, "In active use today" cards, closing CTA).
- `deliverablesLayout` prop set to `"list"` — the PDF shows a single-column stacked list with icons, not a two-column grid.
- No `partnerCard` prop — the MCP page has no sidebar or partner badge (unlike Claude).
- No `usedAcrossServices` prop — no sidebar service links.
- No `rightForYou` / `notRightForYou` props — the PDF does not show qualification panels for MCP.
- Deliverable icons use emoji: 🔧 (Custom MCP server development), 🔐 (Identity and security), ☁️ (Cloud infrastructure), 📋 (Context and tool definitions). Icons are interpretive — the PDF shows small icons that are not perfectly discernible at raster resolution; these emoji approximate intent.
- Preserve existing metadata, structured data schemas, and JSON-LD from the stub — these are already well-formed and SEO-compliant. Update `title` if needed to align with the new H1.
- `inActiveUseSectionTitle` prop set to `"In active use today"` (per PDF section heading).
- `deliverablesSectionTitle` prop set to `"What we build"` (per PDF section heading).

## Open Questions
None

## Scope

### In scope
- Replace the MCP stub page content with `ToolPage` component usage
- Pass all verbatim copy from PDF page 9 as data props
- Preserve existing metadata, canonical URL, structured data, and breadcrumb schema

### Out of scope
- Changes to the `ToolPage` component itself
- Changes to other tool pages (Claude, Custom AI Agents, On-Premise LLM)
- Changes to the tools index page
- New OG images
- Header or footer changes

## Pages & Components

### Modifying
- `src/app/tools/mcp/page.tsx` — replace stub layout with `ToolPage` component usage, update content props

### Creating
None

## Content

### Verbatim copy
All copy below is from PDF page 9, APPROVED COPY. Use exactly as written.

- Eyebrow: "TOOLS · MCP"
- H1: "MCP"
- Subhead: "Connect models to your tools."
- Body paragraph 1: "Model Context Protocol (MCP) is an open standard from Anthropic that defines how AI models communicate securely with external systems. A custom MCP server gives Claude governed, auditable, real-time access to your CRM, ERP, data warehouse, databases, and APIs — without any data leaving your environment through a third-party intermediary."
- Body paragraph 2: "Before MCP: your team copies and pastes data into Claude conversations. After MCP: Claude retrieves it directly, reasons over it, and produces output in real time — all inside your governed environment, all with a full audit trail."
- Primary CTA label: "Book a Discovery Call"
- Secondary CTA label: "Back to all tools" (with ← arrow prefix)
- Deliverables section title: "WHAT WE BUILD"
- Deliverable 1 title: "Custom MCP server development"
- Deliverable 1 body: "MCP servers built from scratch for your specific data sources and use cases. Each exposes purpose-built tools Claude can invoke to query, retrieve, and where appropriate write to your systems. The architecture defines exactly what Claude can access — nothing more."
- Deliverable 2 title: "Identity and security"
- Deliverable 2 body: "OAuth 2.0 authentication, role-based access controls, audit logging for every tool invocation, secure credential management. Every server, every time."
- Deliverable 3 title: "Cloud infrastructure"
- Deliverable 3 body: "We provision and configure the infrastructure — typically Azure Container Apps — with monitoring, alerting, and deployment pipelines appropriate to a production workload."
- Deliverable 4 title: "Context and tool definitions"
- Deliverable 4 body: "Organizational context, system definitions, available tools, and resource configurations baked into the server. Claude understands what it has access to and how to navigate it accurately before any conversation begins."
- In active use section title: "IN ACTIVE USE TODAY"
- Card 1 eyebrow: "SPRINKLERMATIC · FIRE PROTECTION"
- Card 1 title: "NFPA codes library connection"
- Card 1 body: "Full NFPA codes library accessible to Claude through a custom MCP server with OAuth 2.0 security. Powers the live NFPA compliance agent in production."
- Card 2 eyebrow: "RECIRQ | REVENTORY · CIRCULAR ECONOMY"
- Card 2 title: "Google BigQuery connection"
- Card 2 body: "Claude reads and writes to live BigQuery data marts through a custom MCP server — powering the real-time sales intelligence dashboard."
- Card 3 eyebrow: "MULTI-CLIENT · VARIOUS INDUSTRIES"
- Card 3 title: "Common integrations"
- Card 3 body: "Salesforce · HubSpot · Microsoft Dynamics · SAP · JIRA · Google BigQuery · Google Drive · Custom REST APIs · Slack"
- Closing CTA heading: "Want to see what this looks like for your business?"
- Closing CTA subhead: "45 minutes. No cost. No obligation."
- Closing CTA button: "Book a Discovery Call"

### Drafted at implement-time
None — all copy is verbatim from PDF.

## Search Intent & SEO
- **Target query:** Inherits from original
- **URL slug:** Unchanged
- **Meta title:** Unchanged — "MCP Servers — Model Context Protocol Integration" remains appropriate
- **Meta description:** Unchanged
- **Structured data:** Unchanged
- **OG image:** Unchanged

## Design Notes
The page follows the standard ToolPage layout without a sidebar (no `partnerCard`). This means the hero section renders full-width, matching the PDF. The deliverables use the `"list"` layout (single-column with hairline separators), not the `"grid"` layout used on the Claude page. The "In active use today" section uses the three-card grid on the standard grey background. Defer to alphabyte-brand skill defaults for all other visual decisions.

## Motion & Interactivity
Unchanged from original. No new interactivity beyond what `ToolPage` provides.

## Impact

### Affected pages or components
None beyond the modifying list above.

### URL or routing changes
None.

### Content backfill
None.

## Acceptance Criteria
- [ ] MCP page at `/tools/mcp` renders using the `ToolPage` component
- [ ] All verbatim copy from PDF page 9 appears exactly as specified — no paraphrase, no truncation
- [ ] Deliverables section uses list layout (single column) with four items
- [ ] "In active use today" section renders three cards with correct eyebrows, titles, and body text
- [ ] Closing CTA section renders with heading, subhead, and "Book a Discovery Call" button
- [ ] No sidebar, no partner card, no right-for-you / not-right-for-you panels
- [ ] "Book a Discovery Call" buttons open the Discovery Call modal (not a route navigation)
- [ ] "← Back to all tools" links to `/tools/`
- [ ] Breadcrumb shows Home / Tools / MCP with correct links
- [ ] Existing metadata, canonical URL, structured data, and JSON-LD schemas are preserved
- [ ] Page builds without errors (`pnpm build` succeeds)
- [ ] No TypeScript errors (`pnpm typecheck` clean)
- [ ] Passes seo/page-checklist.md for the MCP page
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Visuals pass alphabyte-brand/component-rules.md review
- [ ] Parts of the feature not covered by this enhancement behave identically to before

## Related
- `prds/tools.md` (the feature being enhanced)
- `prds/tool-page-component.md` (the ToolPage component PRD)
- `prds/enhance-v7-tool-claude.md` (sibling tool page enhancement — reference for ToolPage usage pattern)

## Notes
The implementation is straightforward: import `ToolPage`, pass the verbatim copy as props, preserve the existing metadata and structured data blocks. The Claude tool page at `src/app/tools/claude/page.tsx` serves as an exact reference for the pattern.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*

