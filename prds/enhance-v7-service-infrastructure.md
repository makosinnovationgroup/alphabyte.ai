# V7 Infrastructure Service Page — ServicePage Migration + Stats Bar

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/services-pages.md`

## Motivation
The Infrastructure page at `/services/infrastructure` currently ships as a stub — a hero with placeholder copy and a "Coming Soon" section. V7 of the approved design (PDF page 7) specifies a full service detail page with body copy, a dark three-stat bar (OAuth 2.0 / Full audit / Production), a "What the first 30 days look like" timeline, a five-item deliverables section, right/not-right qualification panels, and a timeline footer. The `ServicePage` reusable component already exists and is used by Discovery, Executive Enablement, Citizen Development, and Data Readiness. This enhancement replaces the stub with full V7 content via `ServicePage`, bringing Infrastructure into parity with its siblings.

## Summary
Replace the stub layout in `src/app/services/infrastructure/page.tsx` with the `ServicePage` component, passing all V7 content as data props. Add the three-stat dark bar, 30-days timeline, five deliverables, qualification panels, and timeline footer. The visual output matches the V7 PDF (page 7) and is structurally consistent with sibling service pages.

## Changing
- Original: Page renders a hero section with placeholder copy and a "Coming Soon" stub section using inline JSX. Updated: Page uses the `ServicePage` component and passes all V7 content as props — no inline layout markup beyond metadata and JSON-LD.
- Original: No stat bar, no 30-days timeline, no deliverables, no qualification panels, no timeline footer. Updated: Full V7 content via ServicePage props.
- Original: Primary CTA reads "Book a Discovery Call" as a `DiscoveryCallButton`. Updated: Primary CTA still reads "Book a Discovery Call" but is rendered through ServicePage's `primaryCta` prop with `action: "modal"`.
- Original: Secondary CTA styled with `text-alphabyte-blue`. Updated: Same styling, now rendered through ServicePage's `secondaryCta` prop.
- Original: Eyebrow reads "Track 04 · Infrastructure" with a midpoint. Updated: Eyebrow reads "Services · Infrastructure" to match the PDF and sibling pages.
- Original: Body paragraph is a single condensed sentence. Updated: Three body paragraphs matching the PDF verbatim.

## Decided
- The `ServicePage` component is the canonical layout. No structural divergence.
- Stat bar values from the PDF verbatim: "OAuth 2.0" / "Security standard on every MCP server we deploy", "Full audit" / "Every tool invocation logged and traceable", "Production" / "All agents built to production engineering standards — not demos".
- 30-days timeline has three week rows (Week 1, Weeks 2 to 3, Week 4) plus the "Day 30 — what you have" row, matching the PDF.
- Five deliverables: Custom MCP servers, Custom AI agents, Agent Command Centre, On-premise LLM deployment, Fine-tuned custom LLMs — all with verbatim copy from the PDF.
- Deliverable icons use emoji matching each subject, consistent with the Discovery and Data Readiness pattern.
- Three "Right for you if" items and two "Not right for you if" items, verbatim from the PDF.
- Timeline footer reads "4 to 36 weeks depending on scope".
- Existing metadata, structured data (Service + BreadcrumbList JSON-LD), and SEO fields are preserved — they already pass the page checklist.
- The page file remains a server component exporting metadata; `ServicePage` is already a client component.

## Open Questions
None

## Scope

### In scope
- Replace `src/app/services/infrastructure/page.tsx` stub with `ServicePage` component usage
- Add three-stat dark bar with V7 content
- Add full 30-days timeline, deliverables, qualification panels, and timeline footer
- Preserve all existing metadata and structured data

### Out of scope
- Changes to the `ServicePage` component itself
- Changes to metadata, title, description, or structured data (already correct from the stub build)
- OG image generation
- Changes to any other service page

## Pages & Components

### Modifying
- `src/app/services/infrastructure/page.tsx` — replace stub with `ServicePage` props; add all V7 content

### Creating
None

## Content

### Verbatim copy

**Eyebrow:** "Services · Infrastructure"

**H1:** "Infrastructure"

**Subhead:** "How do our systems use AI?"

**Body paragraphs (three, in order):**
1. "Your team is enabled. Your data is validated. The question now is how your systems work with AI — not just your people."
2. "Infrastructure is where Claude stops being a productivity tool on someone's laptop and starts being an operational capability connected to the systems that actually run your business."
3. "Custom MCP servers — the connective tissue between Claude and your internal systems. Autonomous agents. On-premise LLMs. Fine-tuned models. Built in production, not in demos."

**Primary CTA:** "Book a Discovery Call" (opens modal)

**Secondary CTA:** "Back to all services" (links to `/services/`)

**Stat bar:**
- Stat 1 value: "OAuth 2.0"
- Stat 1 label: "Security standard on every MCP server we deploy"
- Stat 2 value: "Full audit"
- Stat 2 label: "Every tool invocation logged and traceable"
- Stat 3 value: "Production"
- Stat 3 label: "All agents built to production engineering standards — not demos"

**30-days timeline:**
- Week 1: "Requirements and architecture — we define the systems Claude needs to connect to, the data access patterns, the security and governance requirements, and the right build sequence."
- Weeks 2 to 3: "Build — custom MCP server development, security configuration, tool and API integration. Agent development begins in parallel for clients pursuing that track."
- Week 4: "Integration testing, production deployment, knowledge transfer. Your team leaves with full technical documentation and the capability to extend what we built."
- Day 30 — what you have: "Claude connected to your live operational systems through a production-grade MCP server. Full audit logging, OAuth 2.0 security, governed access. Your team using Claude against real data, not exports."

**Deliverables:**
1. Title: "Custom MCP servers" — Body: "Model Context Protocol servers connecting Claude to your internal databases, APIs, CRM, ERP, data warehouses, and proprietary systems. Governed, auditable, real-time access — with OAuth 2.0, role-based access controls, and full audit logging."
2. Title: "Custom AI agents" — Body: "Purpose-built systems executing defined operational workflows end-to-end. Each agent connects through MCP, operates in an isolated cloud sandbox, and routes through human-in-the-loop approval gates at the decision points your team has defined."
3. Title: "Agent Command Centre" — Body: "Our observatory dashboard for the full agent estate. Real-time visibility into what every agent is doing, waiting on, completing, and flagging. Your team stays in control without inspecting logs."
4. Title: "On-premise LLM deployment" — Body: "Llama, Mistral, and other capable open-source models deployed on your own infrastructure. For clients where cloud AI is ruled out by data sovereignty requirements, security classifications, or regulatory mandate."
5. Title: "Fine-tuned custom LLMs" — Body: "A domain-specific model trained on your proprietary data — your terminology, your document structure, your institutional knowledge — for use cases that require depth a general-purpose model cannot provide."

**Right for you if:**
1. "Your team is enabled and data is validated — ready to connect AI to live operational systems."
2. "You have validated workflows through enablement that are worth automating end-to-end."
3. "Data sovereignty or security policy rules out cloud AI for your environment."

**Not right for you if:**
1. "Your team is not yet using Claude consistently — infrastructure built before enablement produces systems nobody uses."
2. "Your data foundation has not been validated — we enforce Data Readiness before any integration or agent work begins."

**Timeline footer:** "4 to 36 weeks depending on scope"

### Drafted at implement-time
- Deliverable emoji icons: select appropriate emoji for each of the five deliverables, following the Discovery page pattern

## Search Intent & SEO
N/A (no SEO impact — enhancement does not touch metadata, URLs, or indexable content). Existing metadata passes the page checklist from the stub build.

## Design Notes
The page must visually match PDF page 7 (rasterized at `/tmp/page-service-infrastructure-07.png`). The `ServicePage` component already implements the canonical layout for all service detail pages — breadcrumb, hero with eyebrow/h1/subhead/body/CTAs, dark stat bar, bordered 30-days box, deliverables with dividers, green/red qualification panels on grey background, and timeline footer. No custom layout code needed.

## Motion & Interactivity
Unchanged from original. ServicePage handles any hover/focus states.

## Impact

### Affected pages or components
None beyond the modifying list above. The `ServicePage` component is consumed, not modified.

### URL or routing changes
None

### Content backfill
None

## Acceptance Criteria
- [ ] Page renders using `ServicePage` component — no inline layout JSX in the page file
- [ ] Three-stat dark bar appears between CTA row and 30-days box with verbatim V7 content
- [ ] All body copy, timeline entries, deliverables, and qualification panel items match PDF page 7 verbatim
- [ ] Page visually matches `/tmp/page-service-infrastructure-07.png`
- [ ] Page is visually consistent with `/services/discovery/` (same component, same spacing, same section rhythm)
- [ ] Existing metadata, structured data, and canonical URL preserved
- [ ] Passes alphabyte-brand/voice-and-tone.md checks — no forbidden vocabulary
- [ ] Passes seo/page-checklist.md for `/services/infrastructure/`
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean
- [ ] Parts of the feature not covered by this enhancement behave identically to before

## Related
- `prds/services-pages.md` (the feature being enhanced)
- `prds/service-page-component.md` (ServicePage component PRD)
- `prds/enhance-v7-service-discovery.md` (sibling V7 service page — reference implementation)
- `prds/enhance-v7-service-data-readiness.md` (sibling V7 service page)
- `prds/enhance-v7-service-citizen-development.md` (sibling V7 service page)

## Notes
The Discovery page (`src/app/services/discovery/page.tsx`) is the reference for how to structure this file — it uses `ServicePage` with the exact same prop shape. The implementation is a data-mapping exercise, not a layout task. Infrastructure has five deliverables (vs. four for Discovery), three right-for-you items (vs. three), and two not-right-for-you items (vs. two).

---
*Created: 2026-04-28*
*Last updated: 2026-04-28 (Shipped)*
