# Tools Index Page

## Status
Shipped

## Type
New page

## Summary
The Tools index page at `/tools` presents Alphabyte's deliberate technology stack — Claude, MCP, Custom AI Agents, and On-Premise LLM — as a unified, production-grade system. The page replaces an existing placeholder with the canonical V8 design: hero with eyebrow and body copy, a dark three-stat credential bar, a "Full Stack" 2×2 tool card grid with bullet lists and learn-more links, a four-column "How the Stack Fits Together" layer breakdown, and a bottom Discovery Call CTA.

## Decided
- Route: `/tools/`
- Source of truth: `design/Alphabyte_AI_Site_V8.pdf` page 20, rasterized at `/tmp/page-tools-index-20.png`
- All visible copy is verbatim from the PDF — listed in full below
- Breadcrumb: Home / Tools (visible in the PDF)
- Eyebrow: "OUR TOOLS" (uppercase, Alphabyte Blue)
- H1: "We don't sell platforms. We build with what actually works."
- Three-stat bar uses a dark (near-black) background with white stat headlines and muted descriptions
- "THE FULL STACK" section uses a 2×2 card grid (desktop), stacking on mobile
- "HOW THE STACK FITS TOGETHER" section uses a 4-column layout (desktop), stacking on mobile
- Bottom CTA uses the standard `<DiscoveryCallButton>` pattern
- Existing placeholder at `src/app/tools/page.tsx` is replaced entirely

## Open Questions
None

## Scope

### In scope
- Full page build from PDF page 20: hero, three-stat bar, 2×2 tool card grid, four-layer stack breakdown, bottom CTA
- Breadcrumb navigation (Home / Tools)
- All copy verbatim from the PDF
- Each tool card links to its detail page via "Learn more →"
- BreadcrumbList JSON-LD structured data
- Update sitemap `lastModified` date
- Responsive layout (mobile stacking for grid and columns)

### Out of scope
- Changes to individual tool detail pages (`/tools/claude/`, `/tools/mcp/`, etc.)
- New OG image (use existing `/og/default.png`)
- Changes to header or footer
- Changes to navigation data

## Pages & Components

### Modifying
- `src/app/tools/page.tsx` — replace existing placeholder with full V8 implementation
- `src/app/sitemap.ts` — update `lastModified` for `/tools/`

### Creating
None

## Content

### Verbatim copy

All strings below are taken directly from PDF page 20 and must appear exactly as written.

**Breadcrumb:**
- "Home" (links to `/`)
- "Tools" (current page, no link)

**Hero section:**
- Eyebrow: "OUR TOOLS"
- H1: "We don't sell platforms. We build with what actually works."
- Body paragraph 1: "A deliberate stack. Claude as the intelligence layer. MCP is the connective tissue between Claude and your internal systems. Custom agents as the operational layer. On-premise LLMs for clients where cloud AI is not an option."
- Body paragraph 2: "Not because we are obligated to use them — because they are the best tools available for what we are building."

**Three-stat bar:**
- Stat 1 headline: "Anthropic Claude Partner"
- Stat 1 description: "Certified delivery team — exclusively Claude"
- Stat 2 headline: "Every engagement"
- Stat 2 description: "Uses Claude as the primary intelligence layer"
- Stat 3 headline: "Production-grade"
- Stat 3 description: "Every agent and MCP server built to ship, not demo"

**Section eyebrow:** "THE FULL STACK"

**Claude card:**
- Title: "Claude"
- Subtitle: "Reasoning, writing, and analysis."
- Body: "The intelligence layer across every engagement we deliver. Not a generic assistant — a purpose-configured system built around your organizational data, your team's workflows, and your operational context."
- Bullets: "Custom knowledgebases", "Custom skills", "Prompt libraries", "SDLC plugins", "Agent development"
- Footer left: "Used across all five services"
- Footer right: "Learn more" (links to `/tools/claude/`)

**MCP card:**
- Title: "MCP"
- Subtitle: "Connect models to your tools."
- Body: "Model Context Protocol is the open standard from Anthropic that defines how AI models communicate securely with external systems. A custom MCP server gives Claude governed, auditable, real-time access to your CRM, ERP, data warehouses, and APIs — without data leaving your environment."
- Bullets: "Custom MCP servers", "OAuth 2.0 security", "Cloud infrastructure", "Full audit logging", "Tool and API integration"
- Footer left: "Required for any live data connectivity"
- Footer right: "Learn more" (links to `/tools/mcp/`)

**Custom AI Agents card:**
- Title: "Custom AI Agents"
- Subtitle: "Purpose-built task automation."
- Body: "Production systems that execute defined operational workflows end-to-end without continuous human intervention. Each agent connects to your data through MCP, operates in an isolated cloud sandbox, and routes through human-in-the-loop approval gates at the decision points you define."
- Bullets: "Agent sandbox + runtime", "CI/CD pipelines", "Agent Command Centre", "HITL approval workflows", "Self-improvement feedback"
- Footer left: "Built to production engineering standards"
- Footer right: "Learn more" (links to `/tools/custom-ai-agents/`)

**On-Premise LLM card:**
- Title: "On-Premise LLM"
- Subtitle: "Private, self-hosted models."
- Body: "For organizations that cannot send their data to a cloud AI provider. We deploy capable open-source language models — Llama, Mistral — on your own infrastructure. The model runs inside your environment. Your data never leaves your control."
- Bullets: "Model selection", "Infrastructure provisioning", "Installation + validation", "API access", "MLOps and governance"
- Footer left: "For data sovereignty requirements"
- Footer right: "Learn more" (links to `/tools/on-premise-llm/`)

**Section eyebrow:** "HOW THE STACK FITS TOGETHER"

**Layer breakdown (4 columns):**
- Column 1 label: "LAYER 1"
- Column 1 title: "Claude"
- Column 1 body: "Intelligence — reasons, writes, analyzes, and builds against your operational context"
- Column 2 label: "LAYER 2"
- Column 2 title: "MCP"
- Column 2 body: "Connectivity — governs secure real-time access between Claude and your internal systems"
- Column 3 label: "LAYER 3"
- Column 3 title: "Agents"
- Column 3 body: "Automation — executes defined workflows end-to-end with human oversight gates"
- Column 4 label: "LAYER 4"
- Column 4 title: "On-premise LLM"
- Column 4 body: "Sovereignty — runs the full stack inside your own infrastructure when cloud AI is not an option"

**Bottom CTA section:**
- Headline: "Want to see how the stack applies to your situation?"
- Subtext: "45 minutes. No cost. No obligation."
- Button: "Book a Discovery Call"

### Drafted at implement-time
None — all copy is verbatim from the PDF.

## Search Intent & SEO

- **Target query:** "AI tools consulting", "Claude MCP consulting", "AI technology stack consulting"
- **URL slug:** `/tools/` (existing)
- **Meta title:** "AI Tools — Claude, MCP, Agents, On-Premise LLM" (under 60 chars with suffix)
- **Meta description:** "A deliberate stack. Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty. Built to ship, not demo." (159 chars)
- **Structured data:** BreadcrumbList (Home → Tools)
- **OG image:** `/og/default.png` (existing)

## Design Notes

- **Hero**: off-white `bg-canvas` background, left-aligned content, max-width constrained. Eyebrow is uppercase, Alphabyte Blue, `text-body-sm`, `tracking-brand-wide`, `font-bold`. H1 uses `text-display` or `text-headline` scale appropriate to the PDF rendering.
- **Three-stat bar**: dark/near-black background (`bg-foreground` or equivalent), full-width. Three items in a row (desktop), stacked (mobile). Headlines in white, descriptions in muted/grey text. Thin vertical separators between items on desktop.
- **Tool card grid**: 2×2 on desktop (`grid-cols-2`), single column on mobile. Each card is white (`bg-white`) with thin border (`border-border-default`). Internal structure: title (bold), subtitle (muted), body paragraph, bullet list (unordered, simple dots), footer row with left-aligned context text (muted) and right-aligned "Learn more" link (Alphabyte Blue).
- **Layer breakdown**: 4-column grid on desktop, stacking on mobile. Each column has a "LAYER N" label (uppercase, muted, small), a title, and a short description. Thin top border or visual separator above the section.
- **Bottom CTA**: dark background section (matches the three-stat bar treatment). Centered text, centered button using `<DiscoveryCallButton>`.
- Breadcrumb appears between the header and the hero, matching the pattern used on tool detail pages (e.g., `/tools/claude/`).

## Motion & Interactivity
None — static content page. Hover states on cards and links per brand defaults.

## Acceptance Criteria
- [ ] Page renders at `/tools/` with all sections from PDF page 20
- [ ] All copy matches PDF verbatim — no paraphrasing, no truncation
- [ ] Breadcrumb shows "Home / Tools" with Home linking to `/`
- [ ] Three-stat bar renders on dark background with three items
- [ ] 2×2 tool card grid displays all four tools with title, subtitle, body, bullets, footer
- [ ] Each "Learn more" link navigates to the correct tool detail page
- [ ] "HOW THE STACK FITS TOGETHER" renders as 4-column layout on desktop
- [ ] Bottom CTA button opens the Discovery Call modal
- [ ] BreadcrumbList JSON-LD is present and valid
- [ ] Page is responsive — grids stack on mobile, no horizontal scroll
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes
- [ ] Passes `seo/page-checklist.md`
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review
- [ ] Sitemap `lastModified` updated for `/tools/`

## Related
- Source of truth: `design/Alphabyte_AI_Site_V8.pdf` page 20
- `design/INDEX.md` — row for `tools-index`
- `design/MIGRATION.md` — OQ3 resolution
- Existing placeholder: `src/app/tools/page.tsx`
- Tool detail pages: `prds/tools.md` (original tools PRD)

## Notes
- The existing `src/app/tools/page.tsx` is a placeholder built before the V8 design existed. The entire file content is replaced — no need to preserve anything from the current implementation.
- The metadata object can be largely preserved or refined to match the SEO section above.
- MIGRATION.md §7 confirms this is a one-off page with no reuse opportunity — build directly in the page file, no component extraction needed.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29*
*Shipped: 2026-04-29*
