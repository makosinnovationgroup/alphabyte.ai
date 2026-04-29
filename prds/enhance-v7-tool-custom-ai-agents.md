# Build Full Custom AI Agents Tool Page from V7 Design

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/tools.md`

## Motivation
The Custom AI Agents tool page at `/tools/custom-ai-agents` currently renders a stub with placeholder "Coming Soon" content, created during the initial tools build. The V7 design (PDF page 10, APPROVED COPY) specifies a full tool detail page with hero copy, a five-item "What we build" deliverables list, three "In active use today" client cards, right-for-you / not-right-for-you qualification panels, and a closing CTA. This enhancement replaces the stub with the complete page, using the shipped `ToolPage` component (`src/components/tool-page.tsx`) to maintain consistency with the Claude and MCP tool pages.

## Summary
Replace the Custom AI Agents stub page with the full V7 design. The page uses the `ToolPage` layout component, passing data props for the hero, deliverables (list layout), "In active use today" cards, right-for-you / not-right-for-you panels, and closing CTA. No sidebar or partner card. All copy is verbatim from the PDF.

## Changing
- Original: Custom AI Agents page renders a hand-built stub layout with "Coming Soon" section. Updated: Custom AI Agents page uses the `ToolPage` component with full content from V7 PDF page 10.
- Original: Subhead is "Autonomous workflows with human-in-the-loop approval gates." Updated: Subhead is "Purpose-built task automation." (per PDF).
- Original: Body copy is a single paragraph about agents handling workflows. Updated: Two body paragraphs — the agent definition paragraph and the production systems paragraph (per PDF).

## Decided
- Use the `ToolPage` component from `src/components/tool-page.tsx` — the page structure matches exactly (breadcrumb, eyebrow, h1, subhead, body, CTA row, deliverables list, "In active use today" cards, right-for-you / not-right-for-you panels, closing CTA).
- `deliverablesLayout` prop set to `"list"` — the PDF shows a single-column stacked list with icons, not a two-column grid.
- No `partnerCard` prop — the Custom AI Agents page has no sidebar or partner badge (unlike Claude).
- No `usedAcrossServices` prop — no sidebar service links.
- Includes `rightForYou` and `notRightForYou` props — the PDF shows qualification panels for this page (three right-for-you items, two not-right-for-you items).
- Deliverable icons use emoji: 🏗️ (Agent sandbox and production runtime), ⚙️ (CI/CD pipelines for agentic workloads), 📊 (Agent Command Centre), 👤 (Human-in-the-loop approval workflows), 👍 (Self-improvement feedback). Icons are interpretive — the PDF shows small icons that are not perfectly discernible at raster resolution; these emoji approximate intent.
- Preserve existing metadata, structured data schemas, and JSON-LD from the stub — these are already well-formed and SEO-compliant.
- `inActiveUseSectionTitle` prop set to `"In active use today"` (per PDF section heading).
- `deliverablesSectionTitle` prop set to `"What we build"` (per PDF section heading).

## Open Questions
None

## Scope

### In scope
- Replace the Custom AI Agents stub page content with `ToolPage` component usage
- Pass all verbatim copy from PDF page 10 as data props
- Preserve existing metadata, canonical URL, structured data, and breadcrumb schema

### Out of scope
- Changes to the `ToolPage` component itself
- Changes to other tool pages (Claude, MCP, On-Premise LLM)
- Changes to the tools index page
- New OG images
- Header or footer changes

## Pages & Components

### Modifying
- `src/app/tools/custom-ai-agents/page.tsx` — replace stub layout with `ToolPage` component usage, update content props

### Creating
None

## Content

### Verbatim copy
All copy below is from PDF page 10, APPROVED COPY. Use exactly as written.

- Eyebrow: "TOOLS · CUSTOM AI AGENTS"
- H1: "Custom AI Agents"
- Subhead: "Purpose-built task automation."
- Body paragraph 1: "A custom AI agent executes a defined operational workflow end-to-end without someone manually running it. It connects to your data through MCP. It operates in an isolated cloud sandbox. It routes to a human at the decision points you define as requiring oversight. It runs in production — not in a demo environment that never ships."
- Body paragraph 2: "Production systems with CI/CD pipelines, monitoring, and rollback capability. Built to the same engineering standards as any other production software in your organization."
- Primary CTA label: "Book a Discovery Call"
- Secondary CTA label: "Back to all tools" (with ← arrow prefix)
- Deliverables section title: "WHAT WE BUILD"
- Deliverable 1 title: "Agent sandbox and production runtime"
- Deliverable 1 body: "Each agent developed and tested in an isolated cloud sandbox before production. A separate, stable production runtime provisioned for live agents — monitoring, alerting, and rollback from day one."
- Deliverable 2 title: "CI/CD pipelines for agentic workloads"
- Deliverable 2 body: "Automated testing, deployment pipelines for agent code updates, rollback mechanisms for production incidents. Agentic development has specific requirements that generic CI/CD patterns do not address."
- Deliverable 3 title: "Agent Command Centre"
- Deliverable 3 body: "Our observatory dashboard for the full agent estate. Real-time visibility into what every agent is doing, waiting on, completing, and flagging. Your team stays in control without inspecting logs."
- Deliverable 4 title: "Human-in-the-loop approval workflows"
- Deliverable 4 body: "Every agent routes through approval workflows at the decision points your team has defined. The agent waits. The reviewer decides. Architectural requirement, not retrofitted governance."
- Deliverable 5 title: "Self-improvement feedback"
- Deliverable 5 body: "Thumbs-up and thumbs-down correction flows that let your team flag incorrect outputs in real time. That feedback refines agent behaviour through hypercare and subsequent iteration."
- In active use section title: "IN ACTIVE USE TODAY"
- Card 1 eyebrow: "SPRINKLERMATIC · FIRE PROTECTION · NORTH"
- Card 1 title: "NFPA compliance agent — live in production"
- Card 1 body: "Eliminated 40+ hours per week of manual fire codes lookup. Operates against a custom MCP server. Citation-grade accuracy. Human review gate for edge cases."
- Card 2 eyebrow: "SPRINKLERMATIC | EJ CAPITAL · RE-BACKED"
- Card 2 title: "Five-agent Command System"
- Card 2 body: "Five specialized autonomous agents operating in isolated Azure sandboxes, controlled through a custom Slack plugin with a human approval gate."
- Card 3 eyebrow: "RECIRQ / REVENTORY · CIRCULAR ECONOMY"
- Card 3 title: "Sales Command Centre"
- Card 3 body: "Claude conducts semantic analysis of live WhatsApp sales conversations and feeds structured output into a real-time BigQuery dashboard."
- Right for you 1: "You have enabled your team and validated your data — now ready to automate workflows end-to-end"
- Right for you 2: "You have clearly defined operational workflows that are high-volume and rule-governed"
- Right for you 3: "You want AI that runs in production, not a perpetual pilot"
- Not right for you 1: "Your team is not yet using Claude consistently — agents built before enablement produce systems nobody uses"
- Not right for you 2: "Your workflows are not yet well-defined enough to automate — Discovery or Citizen Dev first"
- Closing CTA heading: "Want to see what this looks like for your business?"
- Closing CTA subhead: "45 minutes. No cost. No obligation."
- Closing CTA button: "Book a Discovery Call"

### Drafted at implement-time
None — all copy is verbatim from PDF.

## Search Intent & SEO
- **Target query:** Inherits from original
- **URL slug:** Unchanged
- **Meta title:** Unchanged — "Custom AI Agents — Autonomous Workflows with HITL Gates" remains appropriate
- **Meta description:** Unchanged
- **Structured data:** Unchanged
- **OG image:** Unchanged

## Design Notes
The page follows the standard ToolPage layout without a sidebar (no `partnerCard`). This means the hero section renders full-width, matching the PDF. The deliverables use the `"list"` layout (single-column with hairline separators), not the `"grid"` layout used on the Claude page. The "In active use today" section uses the three-card grid on the standard grey background. Right-for-you / not-right-for-you panels appear (unlike the MCP page, which omits them). Defer to alphabyte-brand skill defaults for all other visual decisions.

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
- [ ] Custom AI Agents page at `/tools/custom-ai-agents` renders using the `ToolPage` component
- [ ] All verbatim copy from PDF page 10 appears exactly as specified — no paraphrase, no truncation
- [ ] Deliverables section uses list layout (single column) with five items
- [ ] "In active use today" section renders three cards with correct eyebrows, titles, and body text
- [ ] Right-for-you panel renders three items with green check icons
- [ ] Not-right-for-you panel renders two items with red X icons
- [ ] Closing CTA section renders with heading, subhead, and "Book a Discovery Call" button
- [ ] No sidebar, no partner card
- [ ] "Book a Discovery Call" buttons open the Discovery Call modal (not a route navigation)
- [ ] "← Back to all tools" links to `/tools/`
- [ ] Breadcrumb shows Home / Tools / Custom AI Agents with correct links
- [ ] Existing metadata, canonical URL, structured data, and JSON-LD schemas are preserved
- [ ] Page builds without errors (`pnpm build` succeeds)
- [ ] No TypeScript errors (`pnpm typecheck` clean)
- [ ] Passes seo/page-checklist.md for the Custom AI Agents page
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Visuals pass alphabyte-brand/component-rules.md review
- [ ] Parts of the feature not covered by this enhancement behave identically to before

## Related
- `prds/tools.md` (the feature being enhanced)
- `prds/tool-page-component.md` (the ToolPage component PRD)
- `prds/enhance-v7-tool-claude.md` (sibling tool page enhancement — reference for ToolPage usage pattern)
- `prds/enhance-v7-tool-mcp.md` (sibling tool page enhancement — reference for ToolPage usage pattern)

## Notes
The implementation is straightforward: import `ToolPage`, pass the verbatim copy as props, preserve the existing metadata and structured data blocks. The MCP tool page at `src/app/tools/mcp/page.tsx` serves as the closest reference for the pattern — both use list layout, no sidebar, and "In active use today" cards. The key difference is this page also includes right-for-you / not-right-for-you panels and has five deliverables instead of four.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*

