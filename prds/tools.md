# Tools Index Page & Tool Detail Stubs

## Status
Shipped

## Type
New page

## Summary
Five new routes under `/tools/`: an index page showcasing Alphabyte's deliberate technology stack, plus four stub detail pages for Claude, MCP, Custom AI Agents, and On-Premise LLMs. The index page uses a featured "Primary Tool" card for Claude and a three-card grid for the infrastructure tools. The four detail stubs exist as routable destinations with placeholder content; full pages ship in future PRDs.

## Decided
- All copy in the Verbatim section below is locked in and must be used exactly as written
- Stat callout count is **"4"** not "5" — overriding the Option C design to match the actual four-tool nav structure. Sub-text updated to "Core tools across every engagement."
- Tool card icons use lucide-react placeholders: `Sparkles` for Claude, `Zap` for MCP, `Bot` for Custom AI Agents, `Server` for On-Premise LLMs. No new SVG asset creation.
- "Claude Partner" tag on the featured card: Alphabyte Blue background (`bg-alphabyte-blue`) with white text (`text-white`) for contrast. Not blue-on-transparent, which risks low contrast.
- Tool detail pages are stubs; full pages deferred to future PRDs
- Each stub's "Back to all tools" link recovers visitors from deep-link landings
- No pricing displayed anywhere on tools pages — tools are sold inside Services engagements per `alphabyte-services/pricing.md`
- Card hover: subtle border-color or shadow lift on hover, 200ms transition. Cards are not link targets; the "Learn more →" inside each card is the click target.
- All four stubs follow the same template structure as the services track stubs

## Open Questions
None

## Scope

### In scope
- New route at `/tools/` rendering the tools index page
- Four new routes: `/tools/claude/`, `/tools/mcp/`, `/tools/custom-ai-agents/`, `/tools/on-premise-llm/` rendering minimal stub pages
- Sitemap entries for all five new routes
- Per-page metadata (title, description, canonical, OG, Twitter) for all five pages
- Service JSON-LD on each tool stub page
- BreadcrumbList JSON-LD on each tool stub page

### Out of scope
- "Fine-Tuned LLMs" as a fifth tool — stay aligned with the four-tool nav structure
- Full tool detail content on the four sub-pages (future PRDs)
- Pricing display on any tools page
- Header/footer changes
- Case study integration on tool pages
- New OG images — use `/og/default.png` until tools-specific images are created

## Pages & Components

### Modifying
- `src/app/sitemap.ts` — add five new route entries

### Creating
- `src/app/tools/page.tsx` — tools index page
- `src/app/tools/claude/page.tsx` — Claude stub page
- `src/app/tools/mcp/page.tsx` — MCP stub page
- `src/app/tools/custom-ai-agents/page.tsx` — Custom AI Agents stub page
- `src/app/tools/on-premise-llm/page.tsx` — On-Premise LLM stub page

## Content

### Verbatim copy

**Tools index — Hero**
- Eyebrow: "TOOLS"
- Headline (h1): "We build with what actually works." — "what actually works" in Alphabyte Blue, rest in foreground
- Sub-head: "A deliberate stack — Claude as the intelligence layer, MCP as the connective tissue, custom agents as the operational layer."
- Badge: "★ Anthropic Claude Partner — certified delivery team"

**Tools index — Stat callouts**
- Stat 1 value: "4" / label: "Core tools across every engagement"
- Stat 2 value: "OAuth 2.0" / label: "Security on all MCP servers"
- Stat 3 value: "HITL" / label: "Human-in-the-loop on all agents"

**Tools index — Claude featured card**
- Title (h2): "Claude"
- Tag: "Claude Partner"
- Body: "Claude is the intelligence layer across every Alphabyte AI engagement. We configure it with custom knowledgebases, build skills libraries tuned to how your team works, and connect it to your internal systems via MCP. Not out-of-the-box. Purpose-built for each client."
- "HOW WE USE IT" eyebrow
- Pills: "Executive knowledgebases", "Custom skills & prompt libraries", "SDLC plugins for dev teams", "Compliance intelligence agents", "Data intelligence agents"
- CTA: "Learn more →" → /tools/claude/

**Tools index — Infrastructure & Connectivity section**
- Section eyebrow: "INFRASTRUCTURE & CONNECTIVITY"

**MCP card:**
- Title (h3): "MCP Servers"
- Body: "Model Context Protocol gives Claude governed, secure access to your CRM, ERP, databases, and APIs. We build the servers. You own the connection."
- Pills: "SQL databases", "CRM & ERP", "REST APIs", "Internal tools"
- CTA: "Learn more →" → /tools/mcp/

**Custom AI Agents card:**
- Title (h3): "Custom AI Agents"
- Body: "Autonomous agents that handle defined workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates where the stakes require it."
- Pills: "Workflow automation", "Command Centre", "HITL gates", "CI/CD pipelines"
- CTA: "Learn more →" → /tools/custom-ai-agents/

**On-Premise LLMs card:**
- Title (h3): "On-Premise LLMs"
- Body: "Llama, Mistral, and other open-source models on your infrastructure. For clients where cloud AI is ruled out by data sovereignty or security policy."
- Pills: "Llama & Mistral", "MLOps", "Data sovereignty", "API access"
- CTA: "Learn more →" → /tools/on-premise-llm/

**Tool stub — Claude (/tools/claude/):**
- Eyebrow: "TOOLS · CLAUDE"
- Headline (h1): "Claude"
- Sub-head: "The intelligence layer across every Alphabyte AI engagement."
- Body: "We configure Claude with custom knowledgebases, build skills libraries tuned to how your team works, and connect it to your internal systems via MCP. Not out-of-the-box. Purpose-built for each client."
- Primary CTA: "Book a Strategy Sprint" → /services/discovery/
- Secondary CTA: "← Back to all tools" → /tools/
- Coming soon eyebrow: "COMING SOON"
- Coming soon body: "This tool has a fuller page in development. Executive knowledgebases, custom skills and prompt libraries, SDLC plugins, compliance intelligence agents, and data intelligence agents — all covered in depth. To talk through how Claude fits your engagement, book a Strategy Sprint or get in touch."

**Tool stub — MCP (/tools/mcp/):**
- Eyebrow: "TOOLS · MCP"
- Headline (h1): "MCP Servers"
- Sub-head: "Governed, secure access to your systems via Model Context Protocol."
- Body: "We build custom MCP servers that connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured on every connection. You own the server."
- Primary CTA: "Book a Strategy Sprint" → /services/discovery/
- Secondary CTA: "← Back to all tools" → /tools/
- Coming soon eyebrow: "COMING SOON"
- Coming soon body: "This tool has a fuller page in development. SQL databases, CRM and ERP integrations, REST APIs, internal tools — all covered with architecture patterns and security detail. To talk through how MCP fits your engagement, book a Strategy Sprint or get in touch."

**Tool stub — Custom AI Agents (/tools/custom-ai-agents/):**
- Eyebrow: "TOOLS · CUSTOM AI AGENTS"
- Headline (h1): "Custom AI Agents"
- Sub-head: "Autonomous workflows with human-in-the-loop approval gates."
- Body: "Agents that handle defined workflows end-to-end. Command Centre dashboard for visibility. Human-in-the-loop gates where the stakes require it."
- Primary CTA: "Book a Strategy Sprint" → /services/discovery/
- Secondary CTA: "← Back to all tools" → /tools/
- Coming soon eyebrow: "COMING SOON"
- Coming soon body: "This tool has a fuller page in development. Workflow automation, the Command Centre dashboard, HITL gate architecture, and CI/CD pipeline integration — all covered in depth. To talk through how custom agents fit your engagement, book a Strategy Sprint or get in touch."

**Tool stub — On-Premise LLM (/tools/on-premise-llm/):**
- Eyebrow: "TOOLS · ON-PREMISE LLM"
- Headline (h1): "On-Premise LLMs"
- Sub-head: "Self-hosted AI for data sovereignty and security policy."
- Body: "Llama, Mistral, and other open-source models deployed on your infrastructure. For clients where cloud AI is ruled out by data sovereignty or security requirements."
- Primary CTA: "Book a Strategy Sprint" → /services/discovery/
- Secondary CTA: "← Back to all tools" → /tools/
- Coming soon eyebrow: "COMING SOON"
- Coming soon body: "This tool has a fuller page in development. Model selection, MLOps, data sovereignty architecture, and API access patterns — all covered in depth. To talk through how on-premise LLMs fit your engagement, book a Strategy Sprint or get in touch."

### Drafted at implement-time
None — all copy is verbatim above.

## Search Intent & SEO

**Tools index — /tools/**
- **Target query:** "AI consulting tools", "Claude consulting partner", "MCP server development"
- **URL slug:** /tools/
- **Meta title:** "Tools — Claude, MCP, Custom AI Agents, On-Premise LLMs"
- **Meta description:** "Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty. The deliberate stack we build with."
- **Structured data:** None page-specific beyond root Organization schema
- **OG image:** /og/default.png
- **Sitemap:** priority 0.8, changeFrequency monthly

**/tools/claude/**
- **Target query:** "Claude AI consulting", "Claude implementation partner", "Claude for enterprise"
- **URL slug:** /tools/claude/
- **Meta title:** "Claude — The Intelligence Layer for AI Engagements"
- **Meta description:** "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits — purpose-built for your team."
- **Structured data:** Service JSON-LD (serviceType "AI Implementation", name "Claude Configuration & Integration"), BreadcrumbList (Home > Tools > Claude)
- **OG image:** /og/default.png
- **Sitemap:** priority 0.6, changeFrequency monthly

**/tools/mcp/**
- **Target query:** "MCP server development", "Model Context Protocol consulting", "MCP integration"
- **URL slug:** /tools/mcp/
- **Meta title:** "MCP Servers — Model Context Protocol Integration"
- **Meta description:** "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured. You own the connection, we build the server."
- **Structured data:** Service JSON-LD (serviceType "MCP Server Development", name "Custom MCP Servers"), BreadcrumbList (Home > Tools > MCP)
- **OG image:** /og/default.png
- **Sitemap:** priority 0.6, changeFrequency monthly

**/tools/custom-ai-agents/**
- **Target query:** "custom AI agents", "autonomous AI workflows", "AI agent development"
- **URL slug:** /tools/custom-ai-agents/
- **Meta title:** "Custom AI Agents — Autonomous Workflows with HITL Gates"
- **Meta description:** "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates where stakes require it."
- **Structured data:** Service JSON-LD (serviceType "AI Agent Development", name "Custom AI Agents & Systems"), BreadcrumbList (Home > Tools > Custom AI Agents)
- **OG image:** /og/default.png
- **Sitemap:** priority 0.6, changeFrequency monthly

**/tools/on-premise-llm/**
- **Target query:** "on-premise LLM deployment", "self-hosted AI", "data sovereignty LLM"
- **URL slug:** /tools/on-premise-llm/
- **Meta title:** "On-Premise LLMs — Self-Hosted AI for Data Sovereignty"
- **Meta description:** "Llama, Mistral, and other open-source LLMs deployed on your infrastructure. For clients where cloud AI is ruled out by data sovereignty or security policy."
- **Structured data:** Service JSON-LD (serviceType "On-Premise LLM Deployment", name "On-Premise LLM Deployment"), BreadcrumbList (Home > Tools > On-Premise LLM)
- **OG image:** /og/default.png
- **Sitemap:** priority 0.6, changeFrequency monthly

## Design Notes

**Tools index layout (top to bottom):**

1. **Hero** — two-column on desktop (text left, stat cards right), stacked on mobile. Off-white canvas background (`bg-canvas`). Headline at `text-display`, tight tracking. Badge styled identically to homepage hero badge (pill with Alphabyte Blue border).
2. **Stat cards** — three cards stacked vertically in the right column on desktop. Each: thin border (`border-border-default`), white surface (`bg-white`), comfortable padding. Big number/text at `text-headline` or larger, label at `text-body-sm text-muted-foreground`. On mobile: stack below hero text, full-width.
3. **Claude featured card** — full-width, white surface, thin border. Generous internal padding (`p-8` or `p-10`). Icon placeholder: small rounded square with `bg-alphabyte-blue` containing a white `Sparkles` icon from lucide-react. "Claude Partner" tag: small pill, `bg-alphabyte-blue text-white`, top-right corner. CTA at bottom-right.
4. **Infrastructure & Connectivity** — section eyebrow with hairline rule extending to the right. Three-column grid on desktop (`lg:grid-cols-3`), stacks on mobile. Each card matches the "card with pills" pattern from `component-rules.md`.
5. **Tool stub pages** — hero section on `bg-canvas`, CTA pair (dark primary button + blue text secondary link). Coming soon section below with muted styling.

All surfaces use the Option C palette: `bg-canvas` page background, `bg-white` elevated cards, `border-border-default` borders, `text-foreground` primary text, `text-muted-foreground` secondary text, `text-alphabyte-blue` accents.

## Motion & Interactivity

- Card hover: `transition-shadow duration-200` or `transition-colors duration-200` — slight shadow lift or border-color shift on hover. Subtle, not dramatic.
- All hover/transition effects respect `prefers-reduced-motion` (use Tailwind `motion-safe:` prefix or `motion` library's `useReducedMotion`).
- No scroll-triggered animations. No entrance animations on the tool cards.
- Tab switching: N/A (no tabs on these pages).
- Cards are NOT link targets. The "Learn more →" link inside each card is the interactive element. No cursor-pointer on the card itself.

## Acceptance Criteria
- [ ] `/tools/` renders without console errors and displays hero, stat callouts, Claude featured card, and three-card infrastructure grid
- [ ] `/tools/claude/`, `/tools/mcp/`, `/tools/custom-ai-agents/`, `/tools/on-premise-llm/` each render without console errors with hero and coming soon sections
- [ ] All five pages have correct metadata (title, description, canonical, OG, Twitter)
- [ ] Tools index hero headline renders "what actually works" in Alphabyte Blue
- [ ] Stat callout shows "4" (not "5")
- [ ] Claude featured card has Claude Partner tag, HOW WE USE IT pills, and Learn more CTA
- [ ] Infrastructure grid is three columns on desktop, stacks on mobile
- [ ] Each tool stub has BreadcrumbList and Service JSON-LD
- [ ] All five routes added to `src/app/sitemap.ts` with correct priority values (0.8 for index, 0.6 for stubs)
- [ ] Card hover effects are subtle (shadow or border) and respect `prefers-reduced-motion`
- [ ] "Learn more →" links on tool cards navigate to the correct stub pages
- [ ] "← Back to all tools" links on stubs navigate to `/tools/`
- [ ] "Book a Strategy Sprint" CTAs on stubs link to `/services/discovery/`
- [ ] No pricing displayed on any tools page
- [ ] All copy matches verbatim copy section exactly
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks (no forbidden vocabulary)
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review (Option C surfaces, brand tokens only)
- [ ] Passes `seo/page-checklist.md` on all five pages
- [ ] Pages are responsive — no horizontal scroll, no broken layouts at common widths
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes

## Related
- `prds/homepage.md` — homepage PRD (proof points, hero pattern)
- `.claude/skills/alphabyte-services/service-tracks.md` — Track 4 detail (source for tool descriptions)
- `.claude/skills/alphabyte-services/pricing.md` — confirms no pricing on tools pages
- `.claude/skills/alphabyte-brand/component-rules.md` — card with pills pattern, motion tiers
- `.claude/skills/seo/structured-data.md` — Service and BreadcrumbList schema patterns

## Notes
- The five routes are bundled into one PRD because they're tightly coupled — the index page's CTAs depend on the stubs existing. Same pattern as the services PRD.
- The "5 → 4" stat override is intentional. The Option C design counted Fine-Tuned LLMs as a fifth tool, but the nav structure and this PRD scope to four. Honest over inflated.
- Tool stub pages are deliberately minimal. They exist to satisfy nav links and card CTAs. Full tool detail pages are separate future PRDs.
- lucide-react icon choices (Sparkles, Zap, Bot, Server) are implementer-resolvable — swap if a better icon fits, but don't create custom SVG assets.

---
*Created: 2026-04-27*
*Last updated: 2026-04-27 (shipped)*
