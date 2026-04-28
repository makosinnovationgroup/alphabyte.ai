# Tool Claude — Full Page Build from V7 Design

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/tools.md`

## Motivation
The Claude tool page at `/tools/claude` shipped as a stub with a "Coming Soon" placeholder. The V7 design (PDF page 8, stamped APPROVED COPY) specifies the full page content: a two-column hero with partner card sidebar, a six-item deliverables grid, and a three-card "in active use today" dark section. This enhancement replaces the stub with the complete page, using the shipped `ToolPage` component (`src/components/tool-page.tsx`) as the layout primitive.

## Summary
Replace the Claude stub page with the full V7 design. The page uses the `ToolPage` component with data props — partner card sidebar, six deliverables in a two-column grid, and three case-study-style proof cards in the dark "in active use" section. No right-for-you/not-right-for-you panels. No closing CTA. No secondary "Back to all tools" link.

## Changing
- Original: Subhead was "The intelligence layer across every Alphabyte AI engagement." Updated: "Reasoning, writing, and analysis."
- Original: Body was a single paragraph about configuring Claude with knowledgebases, skills libraries, and MCP. Updated: Two paragraphs — one about Claude as the intelligence layer across engagements, one about Anthropic Claude Partner status and exclusive focus.
- Original: Primary CTA was "Book a Strategy Sprint" linking to `/services/discovery/`. Updated: "Book a Discovery Call" opening the Discovery Call modal.
- Original: Secondary CTA was "← Back to all tools" linking to `/tools/`. Updated: Removed — PDF page 8 does not show a secondary CTA.
- Original: Page had a "Coming Soon" section below the hero. Updated: Removed entirely.
- Original: Page was a hand-coded stub with inline layout. Updated: Uses the `ToolPage` component with data props.

## Decided
- Use the `ToolPage` component from `src/components/tool-page.tsx` — the page structure matches exactly (hero with partner card, deliverables grid, in-active-use cards, no right/not-right panels, no closing CTA)
- Partner card eyebrow: "Claude Partner" (the star prefix is rendered by the component)
- Partner card body: "Anthropic-certified delivery team. Every engagement, every engineer, exclusively Claude."
- "Used across all services" links: Citizen Development, Executive Enablement, Discovery, Data Readiness, Infrastructure — linking to their respective `/services/` routes
- Deliverables section title: "How we configure Claude for your organization"
- Deliverables layout: `grid` (two-column)
- Six deliverables with emoji icons: Custom knowledgebases, SDLC plugins, Custom skills, Agent development, Prompt libraries, MCP connectivity
- "In active use today" section title: "In active use today — what we built, what it produced"
- Three proof cards: Sprinklermatic NFPA compliance, RecirQ sales intelligence, Sprinklermatic/EJ Capital executive environment
- No `rightForYou`, `notRightForYou`, or `closingCta` props — PDF page 8 does not show these sections
- No `secondaryCta` prop — PDF page 8 does not show a "Back to all tools" link
- Preserve existing metadata, structured data (Service + BreadcrumbList JSON-LD), and sitemap entry — no SEO changes needed
- Eyebrow text: "Tools · Claude" (matches PDF)

## Open Questions
None

## Scope

### In scope
- Replace the inline stub markup in `src/app/tools/claude/page.tsx` with a `ToolPage` component render
- Pass all content as data props matching the PDF page 8 verbatim copy
- Wire primary CTA to Discovery Call modal via `action: "modal"`
- Remove the "Coming Soon" section

### Out of scope
- Changes to the `ToolPage` component itself — it already supports all required sections
- Metadata, structured data, or sitemap changes — existing values are correct
- OG image generation
- Changes to other tool pages (MCP, Custom AI Agents, On-Premise LLM)
- Header or footer changes
- Mobile-specific layout tweaks beyond what the component already handles

## Pages & Components

### Modifying
- `src/app/tools/claude/page.tsx` — replace stub markup with `ToolPage` component render and data props

### Creating
None

## Content

### Verbatim copy

**Hero:**
- Eyebrow: "Tools · Claude"
- H1: "Claude"
- Subhead: "Reasoning, writing, and analysis."
- Body paragraph 1: "Claude is the intelligence layer across every engagement we deliver — configured around your organizational data, your team's workflows, and your operational context."
- Body paragraph 2: "We are an Anthropic Claude Partner. Every engineer in our practice works exclusively with Claude — not evaluating which model to use on each engagement. That focus means faster configuration, deeper expertise, and a coherent architectural point of view that a firm evaluating ten different models cannot match."
- Primary CTA: "Book a Discovery Call"

**Partner card:**
- Eyebrow: "Claude Partner"
- Body: "Anthropic-certified delivery team. Every engagement, every engineer, exclusively Claude."

**Used across all services:**
- Citizen Development → /services/citizen-development/
- Executive Enablement → /services/executive-enablement/
- Discovery → /services/discovery/
- Data Readiness → /services/data-readiness/
- Infrastructure → /services/infrastructure/

**Deliverables section title:** "How we configure Claude for your organization"

**Deliverables (6 items, grid layout):**
1. Custom knowledgebases: "Claude Projects populated with your policies, SOPs, strategic documents, and regulatory frameworks. Your team works from an environment that understands your business — not a blank canvas."
2. SDLC plugins: "The custom Claude software development lifecycle plugin standardizing how any employee begins a new project. Published once, available to every authorized user."
3. Custom skills: "Built around how your team actually works. Report generation, data parsing, strategic analysis — specific to your workflows, not recycled from another client."
4. Agent development: "Claude Code is the engineering substrate for all integration and custom solutions work. Every agent, every MCP connector, every automated workflow."
5. Prompt libraries: "Structured around the patterns of thought your team uses when working through real business problems. Tested against your actual data."
6. MCP connectivity: "Custom MCP servers connecting Claude to your databases, APIs, CRM, and ERP — secure, governed access, full audit logging."

**In active use section title:** "In active use today — what we built, what it produced"

**In active use cards (3):**
1. Eyebrow: "Sprinklermatic · Fire Protection · North America" / Title: "Automated NFPA compliance review" / Body: "Eliminated 40+ hours per week of manual fire codes lookup. Custom MCP server connected to full NFPA library. Live in production."
2. Eyebrow: "RecirQ / Reventory · Circular Economy · Global" / Title: "Real-time sales intelligence" / Body: "Claude analyses every WhatsApp sales conversation and feeds structured output into a live BigQuery dashboard."
3. Eyebrow: "Sprinklermatic / EJ Capital · Industrial PE-Backed" / Title: "Executive Claude environment" / Body: "Custom knowledgebases, skills library, and prompt toolkit deployed to the full executive team. Used daily across five functional leaders."

### Drafted at implement-time
None — all copy is verbatim from the PDF.

## Search Intent & SEO
N/A (no SEO impact — enhancement does not touch metadata, URLs, or indexable content. Existing metadata, structured data, canonical, and sitemap entry are preserved unchanged.)

## Design Notes
Defer to the `ToolPage` component for all layout decisions. The component already implements the exact layout shown in PDF page 8: two-column hero with partner card sidebar, deliverables grid with hairline separators, dark "in active use" section with three-card grid. No custom styling needed beyond what the component provides.

Deliverable icons are emoji strings. The PDF shows small icons next to each deliverable — use contextually appropriate emoji: 📚 (knowledgebases), 🔌 (SDLC plugins), ⚙️ (custom skills), 🤖 (agent development), 📝 (prompt libraries), 🔗 (MCP connectivity).

## Motion & Interactivity
Unchanged from original. The `ToolPage` component handles CTA button behavior (Discovery Call modal). No new interactive elements.

## Impact

### Affected pages or components
None beyond the modifying list above.

### URL or routing changes
None.

### Content backfill
None.

## Acceptance Criteria
- [ ] `/tools/claude/` renders using the `ToolPage` component with no console errors
- [ ] Hero shows two-column layout: content left, partner card + service links right
- [ ] Partner card has dark background with teal star eyebrow "Claude Partner" and white body text
- [ ] "Used across all services" lists all five services with working links
- [ ] Subhead reads "Reasoning, writing, and analysis." (not the stub subhead)
- [ ] Both body paragraphs render verbatim from PDF
- [ ] "Book a Discovery Call" CTA opens the Discovery Call modal
- [ ] No secondary CTA ("Back to all tools") is shown
- [ ] No "Coming Soon" section is shown
- [ ] Deliverables section title reads "How we configure Claude for your organization"
- [ ] Six deliverables render in a two-column grid with hairline separators between rows
- [ ] All deliverable titles and bodies match PDF verbatim
- [ ] "In active use today" section has dark background with three cards
- [ ] Section title reads "In active use today — what we built, what it produced"
- [ ] All three card eyebrows, titles, and bodies match PDF verbatim
- [ ] No right-for-you / not-right-for-you panels are shown
- [ ] No closing CTA section is shown
- [ ] Existing metadata (title, description, canonical, OG, Twitter) preserved unchanged
- [ ] Existing structured data (Service + BreadcrumbList JSON-LD) preserved unchanged
- [ ] Parts of the feature not covered by this enhancement behave identically to before
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks (no forbidden vocabulary)
- [ ] Visuals pass alphabyte-brand/component-rules.md review (brand tokens only)
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes

## Related
- `prds/tools.md` (the feature being enhanced)
- `prds/tool-page-component.md` (the ToolPage component PRD)
- `src/components/tool-page.tsx` (the layout component to use)
- `design/Alphabyte_AI_Site_V7.pdf` page 8 (source of truth)
- `.claude/skills/alphabyte-services/proof-points.md` (source for "in active use" card content)

## Notes
- The page file remains a server component for metadata export — `ToolPage` is the client component. The page file imports `ToolPage` and passes data as props.
- The existing stub had "Book a Strategy Sprint" pointing to `/services/discovery/`. The PDF shows "Book a Discovery Call" opening the modal — this is a deliberate design change, not an error.
- The PDF does not show a secondary CTA or closing CTA for the Claude page, unlike some other tool pages (MCP, Custom AI Agents). This is consistent with the `ToolPage` component's section presence matrix in `prds/tool-page-component.md`.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28 (shipped)*
