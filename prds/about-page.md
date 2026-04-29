# About Page

## Status
Shipped

## Type
New page

## Summary
Build the About page at `/about` from PDF page 13. The page positions Alphabyte AI as the Claude-focused practice of Alphabyte Solutions — practitioner-led, Claude-native, with no junior bench. It combines company positioning, team credentials, active delivery proof points, and certifications into a single narrative page.

## Decided
- Route: `/about`
- H1: "Practitioner-led. Claude-native. Bottom-up by design." with "Claude-native." in Alphabyte Blue
- Eyebrow: "ABOUT ALPHABYTE AI"
- No reusable layout component applies — the About page has a unique structure (hero → three-column dark section → two-column practice/team → active delivery cards → certifications → dark closing CTA). Build directly.
- An existing stub page exists at `src/app/about/page.tsx` — replace its content entirely
- The route is already in the sitemap at priority 0.7

## Open Questions
None

## Scope

### In scope
- Hero section with eyebrow, three-line headline, and two body paragraphs
- Three-column dark section ("Bottom-up by design", "Claude is the entire practice", "No junior bench")
- "Our Practice and Team" two-column section (parent practice narrative + team credentials)
- "Active Delivery" three-card section with client engagement summaries and "See all active work →" link
- "Certifications and Partnerships" section with three badge pills and tagline
- Dark closing CTA section ("A discovery conversation takes 45 minutes.") with Book a Discovery Call button and contact info
- Page metadata and sitemap entry (already exists, update lastModified)

### Out of scope
- OG image creation (use existing `/og/default.png`)
- Footer (rendered by layout, not this page)
- Team member profile pages (separate `/page team-*` builds)
- Case study detail pages (separate `/page case-study-*` builds)

## Pages & Components

### Modifying
- `src/app/about/page.tsx` — replace stub content with full About page
- `src/app/sitemap.ts` — update `lastModified` for `/about/`

### Creating
None

## Content

### Verbatim copy

All strings below are from PDF page 13, the canonical source.

**Hero:**
- Eyebrow: "ABOUT ALPHABYTE AI"
- H1 line 1: "Practitioner-led."
- H1 line 2: "Claude-native." (in Alphabyte Blue)
- H1 line 3: "Bottom-up by design."
- Body paragraph 1: "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions, operating across North America since 2016."
- Body paragraph 2: "We are not a generalist AI consultancy with a Claude competency. Claude is the entire practice — every engagement, every engineer, every methodology built specifically for Claude deployment in mid-market organizations."

**Three-column dark section:**

- Column 1 heading: "Bottom-up by design"
- Column 1 body: "Every mid-market organization has someone who has quietly built something extraordinary with Claude. We find that person, understand what was built, and install the infrastructure that makes her capability visible, scalable, and available to the entire team. Then the next person. Until AI is compounding across the organization."

- Column 2 heading: "Claude is the entire practice"
- Column 2 body: "Not a tool we use alongside others. The foundation every engagement is built on. Every engineer works exclusively with Claude. That focus is what makes us faster, more consistent, and more capable than a firm dividing its attention across ten platforms."

- Column 3 heading: "No junior bench"
- Column 3 body: "The senior engineer who designs your solution builds it. The consultant who runs your initial discovery personally delivers your sprint. Two dedicated Claude engineers backed by a twenty-person delivery organization — but the people who show up for your engagement own it."

**Our Practice and Team section:**
- Eyebrow: "OUR PRACTICE AND TEAM"
- Left body paragraph 1: "Our parent practice has delivered data warehousing, reporting and analytics, business intelligence, and custom application development to Canada's largest mechanical contractor, a provincial government, a professional regulatory body, a national public sector housing organization, multiple Canadian municipalities, and a substantial roster of mid-market operators across e-commerce, manufacturing, industrial services, and financial services."
- Left body paragraph 2: "That heritage is what allows us to engage credibility on the full technology stack beneath an AI deployment. The AI practice is built on that foundation — not grafted onto it."

- Right item 1 heading: "Two dedicated Claude engineers"
- Right item 1 body: "Full-time, exclusively Claude — MCP server development, context engineering, agentic system design, and Claude Code delivery. Both trained through Anthropic Academy."

- Right item 2 heading: "Backed by a twenty-person delivery organization"
- Right item 2 body: "Senior data engineers, solutions architects, technical consultants, project managers, and adoption specialists from ten years of mid-market and public sector delivery."

**Active Delivery section:**
- Eyebrow: "ACTIVE DELIVERY"

- Card 1 tag: "SPRINKLERMATIC / EJ CAPITAL · FIRE PROTECTION"
- Card 1 title: "Nine-initiative AI Command System"
- Card 1 body: "Estimated 40+ hours/week of manual NFPA lookup eliminated. Custom MCP server, Claude Desktop plugin, HITL gates for five autonomous agents. Proprietary estimating tool in development."

- Card 2 tag: "RECIRQ / REVENTORY · CIRCULAR ECONOMY"
- Card 2 title: "Claude Ops + Sales Intelligence"
- Card 2 body: "WhatsApp Sales Command Centre — Claude semantic analysis of live sales conversations feeding real-time BigQuery dashboard. Citizen dev SDLC plugin and governed data marts deployed."

- Card 3 tag: "HOUSING SERVICES CORP · PUBLIC SECTOR"
- Card 3 title: "AI Enablement Roadmap"
- Card 3 body: "Six strategic recommendations including automated cross-program reporting delivered within federal data governance requirements."

- Link: "See all active work →"

**Certifications and Partnerships section:**
- Eyebrow: "CERTIFICATIONS AND PARTNERSHIPS"
- Badge 1: "Microsoft Solutions Partner · Data & AI"
- Badge 2: "Anthropic Academy · Claude Partner Network"
- Badge 3: "SOC 2 Type II · In progress"
- Tagline: "We are one of the only Claude delivery partners explicitly focused on mid-market — not enterprise, not startups."

**Dark closing CTA:**
- Headline: "A discovery conversation takes 45 minutes."
- Body: "No cost, no obligation. You describe your situation. We tell you candidly whether there is an engagement worth having and what you would have at day 30."
- CTA button: "Book a Discovery Call →"
- Contact line: "hello@alphabyte.ai · 155 Wintges Road, Unit 1, Vaughan, Ontario"

### Drafted at implement-time
None — all copy is verbatim from the PDF.

## Search Intent & SEO

- **Target query:** "Alphabyte AI consulting", "Claude AI consulting firm", "AI consulting Canada mid-market"
- **URL slug:** `/about/`
- **Meta title:** "About" (renders as "About — Alphabyte" via template, 20 chars)
- **Meta description:** "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions. Practitioner-led, Claude-native, no junior bench. Operating across North America since 2016." (160 chars)
- **Structured data:** None — per seo/structured-data.md, the About page doesn't need its own schema; the Organization schema lives in the root layout.
- **OG image:** `/og/default.png` (existing default; no custom OG image for this page)

## Design Notes

- **Hero:** off-white `bg-canvas` background. Eyebrow is uppercase, `tracking-brand-wide`, Alphabyte Blue. H1 uses `text-display tracking-brand-tight`, with "Claude-native." line rendered in `text-alphabyte-blue`. Body paragraphs in `text-body text-muted-foreground`.
- **Three-column dark section:** dark background (near-black, e.g. `bg-foreground` or `bg-neutral-900`), white text. Three equal columns on desktop, stacked on mobile. Column headings are bold/medium weight, white. Body text is muted/lighter.
- **Our Practice and Team:** white or off-white background. Two-column layout on desktop (roughly 55/45 or 60/40 split). Left column is body text. Right column has two items, each with a bold heading and body description. Separated by a thin hairline or spacing.
- **Active Delivery cards:** three cards in a row on desktop, stacked on mobile. Each card has a small uppercase tag line (client name · industry), a title, and body text. White card surface on off-white canvas. "See all active work →" is a text+arrow secondary CTA linking to `/our-work`.
- **Certifications:** three outlined pills/badges in a horizontal row, followed by a tagline sentence. White surface, outlined pills with `border-border-default`.
- **Dark closing CTA:** dark/black background, white text, centered layout. "Book a Discovery Call →" uses the DiscoveryCallButton component. Contact info line below the button in muted text.

## Motion & Interactivity

- Scroll fade-in for each section (200–300ms ease-out, respects `prefers-reduced-motion`)
- "Book a Discovery Call →" opens the Discovery Call modal (use existing `DiscoveryCallButton` component)
- "See all active work →" links to `/our-work`

## Acceptance Criteria
- [ ] Page renders at `/about/` without console errors
- [ ] Exactly one `<h1>` containing "Practitioner-led. Claude-native. Bottom-up by design."
- [ ] "Claude-native." is rendered in Alphabyte Blue (`text-alphabyte-blue`)
- [ ] All verbatim copy from the PDF appears on the page without paraphrasing
- [ ] Three-column dark section renders three columns on desktop, stacks on mobile
- [ ] "Our Practice and Team" renders two columns on desktop, stacks on mobile
- [ ] Three active delivery cards render in a row on desktop, stack on mobile
- [ ] Three certification badges render as outlined pills
- [ ] "See all active work →" links to `/our-work`
- [ ] "Book a Discovery Call →" opens the Discovery Call modal
- [ ] Dark closing CTA section has dark background with white text
- [ ] Contact info (hello@alphabyte.ai, address) appears in the closing CTA section
- [ ] Page is responsive across mobile, tablet, and desktop breakpoints
- [ ] `pnpm build` and `pnpm typecheck` pass
- [ ] Sitemap entry for `/about/` has updated `lastModified`
- [ ] Passes seo/page-checklist.md
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Visuals pass alphabyte-brand/component-rules.md review

## Related
- `design/Alphabyte_AI_Site_V7.pdf` page 13
- `design/MIGRATION.md` — route decisions §3.2
- `design/INDEX.md` — logical name `about`
- `src/components/discovery-call-button.tsx` — reuse for CTA
- `src/components/home/closing-cta.tsx` — similar pattern but different copy and dark background treatment
- `prds/case-study-sprinklermatic.md` — Sprinklermatic proof point referenced in Active Delivery
- `prds/case-study-recirq.md` — RecirQ proof point referenced in Active Delivery

## Notes
- The About page has a unique layout that doesn't match ServicePage, CaseStudyPage, or ToolPage. It's a bespoke narrative page. No layout component extraction is warranted yet — extract a component if a second page needs this shape.
- The existing stub at `src/app/about/page.tsx` already has metadata and route plumbing. Replace the content; the metadata values will be updated to match the PRD's SEO section.
- The dark closing CTA section on this page differs from the existing `ClosingCta` component (which uses `bg-canvas` and different copy). The PDF shows a dark-background variant with "A discovery conversation takes 45 minutes." Consider building this as a variant or a standalone section within the page. If a dark closing CTA recurs on other pages (Contact, Team), extracting a shared component at that point makes sense.
- The "scalable" mention in the three-column body copy ("makes her capability visible, scalable, and available") is permissible — it describes a specific technical property of infrastructure, not generic marketing hype.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29*

