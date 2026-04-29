# Build Full On-Premise LLM Tool Page from V7 Design

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/tools.md`

## Motivation
The On-Premise LLM tool page at `/tools/on-premise-llm` currently renders a stub with placeholder "Coming Soon" content, created during the initial tools build. The V7 design (PDF page 11, APPROVED COPY) specifies a full tool detail page with hero copy, a five-item "What we build" deliverables list, right-for-you / not-right-for-you qualification panels, and a closing CTA. This enhancement replaces the stub with the complete page, using the shipped `ToolPage` component (`src/components/tool-page.tsx`) to maintain consistency with the Claude, MCP, and Custom AI Agents tool pages.

## Summary
Replace the On-Premise LLM stub page with the full V7 design. The page uses the `ToolPage` layout component, passing data props for the hero, deliverables (list layout), right-for-you / not-right-for-you panels, and closing CTA. No sidebar, no partner card, no "In active use today" section. All copy is verbatim from the PDF.

## Changing
- Original: On-Premise LLM page renders a hand-built stub layout with "Coming Soon" section. Updated: On-Premise LLM page uses the `ToolPage` component with full content from V7 PDF page 11.
- Original: H1 is "On-Premise LLMs" (plural). Updated: H1 is "On-Premise LLM" (singular, per PDF).
- Original: Subhead is "Self-hosted AI for data sovereignty and security policy." Updated: Subhead is "Private, self-hosted models." (per PDF).
- Original: Body copy is a single paragraph about Llama and Mistral. Updated: Two body paragraphs — the data sovereignty rationale paragraph and the production deployment paragraph (per PDF).
- Original: Meta title "On-Premise LLMs — Self-Hosted AI for Data Sovereignty" (53 chars, 66 with suffix — exceeds 60-char SERP limit). Updated: Shortened to "On-Premise LLM — Self-Hosted AI" (31 chars, 44 with suffix) to comply with seo/page-checklist.md §1.

## Decided
- Use the `ToolPage` component from `src/components/tool-page.tsx` — the page structure matches (breadcrumb, eyebrow, h1, subhead, body, CTA row, deliverables list, right-for-you / not-right-for-you panels, closing CTA).
- `deliverablesLayout` prop set to `"list"` — the PDF shows a single-column stacked list with icons.
- No `partnerCard` prop — no sidebar or partner badge.
- No `usedAcrossServices` prop — no sidebar service links.
- No `inActiveUse` prop — the PDF does not show an "In active use today" section for this page (unlike Claude, MCP, and Custom AI Agents).
- Includes `rightForYou` and `notRightForYou` props — the PDF shows qualification panels (three right-for-you items, two not-right-for-you items).
- Deliverable icons use emoji: 🎯 (Model selection), 🖥️ (Infrastructure provisioning), ✅ (Installation, configuration, and validation), 🔌 (API access and service connectivity), 🔧 (MLOps and governance). Icons are interpretive — the PDF shows small icons that are not perfectly discernible at raster resolution.
- Preserve existing structured data schemas and JSON-LD from the stub. Update meta title, OG title, and Twitter title to shortened version.
- `deliverablesSectionTitle` prop set to `"What we build"` (per PDF section heading).

## Open Questions
None

## Scope

### In scope
- Replace the On-Premise LLM stub page content with `ToolPage` component usage
- Pass all verbatim copy from PDF page 11 as data props
- Shorten meta title to comply with 60-char SERP limit
- Preserve existing canonical URL, structured data, and breadcrumb schema

### Out of scope
- Changes to the `ToolPage` component itself
- Changes to other tool pages (Claude, MCP, Custom AI Agents)
- Changes to the tools index page
- New OG images
- Header or footer changes

## Pages & Components

### Modifying
- `src/app/tools/on-premise-llm/page.tsx` — replace stub layout with `ToolPage` component usage, update content props, shorten meta title

### Creating
None

## Content

### Verbatim copy
All copy below is from PDF page 11, APPROVED COPY. Use exactly as written.

- Eyebrow: "TOOLS · ON-PREMISE LLM"
- H1: "On-Premise LLM"
- Subhead: "Private, self-hosted models."
- Body paragraph 1: "Some organizations cannot send their data to a cloud AI provider. Data sovereignty requirements. Security classifications. Regulatory mandates. Institutional risk posture. For those clients, we deploy capable open-source language models on their own infrastructure."
- Body paragraph 2: "The model runs inside your environment. Your team interacts with it through a standard API. Your data never leaves your control. Production deployment — compute, MLOps, observability, and governance from the start."
- Primary CTA label: "Book a Discovery Call"
- Secondary CTA label: "Back to all tools" (with ← arrow prefix)
- Deliverables section title: "WHAT WE BUILD"
- Deliverable 1 title: "Model selection"
- Deliverable 1 body: "Optimal model for your use cases, infrastructure, and compliance constraints. Llama and Mistral are our defaults. The decision depends on performance, memory, and regulatory requirements — not which model is trending."
- Deliverable 2 title: "Infrastructure provisioning"
- Deliverable 2 body: "Compute, storage, and networking for your workload requirements. GPU or high-memory CPU as required. Network segmentation appropriate to your security posture."
- Deliverable 3 title: "Installation, configuration, and validation"
- Deliverable 3 body: "Comprehensive validation before production traffic routes to the model. Performance benchmarks, accuracy tests against your actual use cases, latency measurements under representative load."
- Deliverable 4 title: "API access and service connectivity"
- Deliverable 4 body: "Standard API interface so your internal applications, agents, and MCP-connected systems communicate with the hosted model the same way they would a cloud-hosted model."
- Deliverable 5 title: "MLOps and governance"
- Deliverable 5 body: "Versioning, deployment, and retraining pipelines. Logs, monitoring, metrics, role-based access, audit logging, and data handling policies aligned to your regulatory environment."
- Right for you 1: "Data sovereignty requirements prohibit transmission to cloud AI providers"
- Right for you 2: "Security classifications require air-gapped or on-premise infrastructure"
- Right for you 3: "Regulatory environment mandates AI outputs be generated from within your own environment"
- Not right for you 1: "You are not yet clear on your use cases — on-premise deployment without a defined application is significant compute investment with no return"
- Not right for you 2: "Cloud AI is available to you — on-premise adds infrastructure overhead that cloud deployments do not carry"
- Closing CTA heading: "Want to see what this looks like for your business?"
- Closing CTA subhead: "45 minutes. No cost. No obligation."
- Closing CTA button: "Book a Discovery Call"

### Drafted at implement-time
None — all copy is verbatim from PDF.

## Search Intent & SEO
- **Target query:** Inherits from original
- **URL slug:** Unchanged
- **Meta title:** "On-Premise LLM — Self-Hosted AI" (31 chars; 44 with suffix — under 60)
- **Meta description:** Unchanged
- **Structured data:** Unchanged
- **OG image:** Unchanged

## Design Notes
The page follows the standard ToolPage layout without a sidebar (no `partnerCard`). This means the hero section renders full-width. The deliverables use the `"list"` layout (single-column with hairline separators). No "In active use today" section — this page omits that section entirely (unlike Claude, MCP, and Custom AI Agents). Right-for-you / not-right-for-you panels appear below the deliverables. Defer to alphabyte-brand skill defaults for all other visual decisions.

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
- [ ] On-Premise LLM page at `/tools/on-premise-llm` renders using the `ToolPage` component
- [ ] All verbatim copy from PDF page 11 appears exactly as specified — no paraphrase, no truncation
- [ ] Deliverables section uses list layout (single column) with five items
- [ ] No "In active use today" section rendered
- [ ] Right-for-you panel renders three items with green check icons
- [ ] Not-right-for-you panel renders two items with red X icons
- [ ] Closing CTA section renders with heading, subhead, and "Book a Discovery Call" button
- [ ] No sidebar, no partner card
- [ ] "Book a Discovery Call" buttons open the Discovery Call modal (not a route navigation)
- [ ] "← Back to all tools" links to `/tools/`
- [ ] Breadcrumb shows Home / Tools / On-Premise LLM with correct links
- [ ] Full rendered title (with suffix) is under 60 characters
- [ ] Existing canonical URL, structured data, and JSON-LD schemas are preserved
- [ ] Page builds without errors (`pnpm build` succeeds)
- [ ] No TypeScript errors (`pnpm typecheck` clean)
- [ ] Passes seo/page-checklist.md for the On-Premise LLM page
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Visuals pass alphabyte-brand/component-rules.md review
- [ ] Parts of the feature not covered by this enhancement behave identically to before

## Related
- `prds/tools.md` (the feature being enhanced)
- `prds/tool-page-component.md` (the ToolPage component PRD)
- `prds/enhance-v7-tool-claude.md` (sibling tool page enhancement)
- `prds/enhance-v7-tool-mcp.md` (sibling tool page enhancement)
- `prds/enhance-v7-tool-custom-ai-agents.md` (sibling tool page enhancement)

## Notes
The implementation follows the same pattern as the MCP and Custom AI Agents tool pages. The key difference is this page has no "In active use today" section — the `inActiveUse` prop is simply omitted. The meta title is proactively shortened to avoid the 60-char SERP limit issue caught in the Custom AI Agents QA pass.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*
