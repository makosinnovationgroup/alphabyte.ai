# Team Index Page

## Status
Shipped

## Type
New page

## Summary
The Team index page at `/team` introduces Alphabyte's practitioners. A six-person card grid with names, roles, bios, and skill pills — one card links to a full profile, the rest show "Bio page coming soon." A three-stat bar and a closing CTA round out the page.

## Decided
- Route: `/team/`
- Breadcrumb: Home / Team
- Eyebrow: "OUR TEAM"
- H1: "The practitioners behind every engagement." with "every engagement." in Alphabyte Blue
- Six team member cards in a 3-column grid (2 rows)
- Adam Nameh card links to `/team/adam-nameh/` via "View full profile →"; all others show "Bio page coming soon" in muted text
- Adam Nameh card has a real photo (greyscale + Alphabyte Blue multiply overlay per §6.0); other cards use an Alphabyte Blue placeholder with the person's first initial in white
- Three-stat bar: 20+ / 10 yrs / 100+
- Bottom CTA uses `DiscoveryCallButton` with standard pattern

## Open Questions
None

## Scope

### In scope
- New route at `/team/` with full metadata and structured data
- Breadcrumb (visible + BreadcrumbList JSON-LD)
- Hero section: eyebrow, h1 with blue accent, body paragraph
- 3-column team card grid (6 cards, 2 rows)
- Each card: photo/placeholder, name, role (blue), bio paragraph, skill pills, profile link or "coming soon"
- Three-stat bar below the grid
- Closing CTA section
- Sitemap entry

### Out of scope
- Individual team member profile pages (only `/team/adam-nameh/` exists; this page links to it but does not build new profile routes)
- Team member photos beyond Adam Nameh (placeholders are intentional)
- Dynamic data source — all content is hardcoded in the page file

## Pages & Components

### Modifying
- `src/app/sitemap.ts` — add `/team/` entry

### Creating
- `src/app/team/page.tsx` — Team index page

## Content

### Verbatim copy
- Eyebrow: "OUR TEAM"
- H1: "The practitioners behind every engagement."
- H1 accent span: "every engagement."
- Body: "No junior bench. The senior engineer who designs your solution builds it. The consultant who runs your discovery workshop delivers your sprints. Two dedicated Claude engineers backed by a twenty-person delivery organization — but the people who show up for your engagement are the people who own it."

**Card 1 — Adam Nameh:**
- Name: "Adam Nameh"
- Role: "Co-Founder & Data Platform Architect"
- Bio: "Client relationships, practice strategy, and AI programme design. 10+ years in data architecture and platform design. Formerly Data Architect at BMO Financial Group. Co-founder of Fantastik AI and MadSavi."
- Pills: "AI Strategy", "Data Architecture", "Client Engagement", "Programme Design"
- Link: "View full profile →"

**Card 2 — Mitch:**
- Name: "Mitch"
- Role: "Website & Technical Lead"
- Bio: "Leads technical delivery and website architecture for Alphabyte AI. Responsible for the build, deployment, and ongoing development of the Alphabyte AI platform."
- Pills: "Web Development", "Technical Architecture", "Deployment"
- Note: "Bio page coming soon"

**Card 3 — Rugved:**
- Name: "Rugved"
- Role: "Claude Specialist"
- Bio: "Dedicated Claude engineer. MCP server development, context engineering, agentic system design, and Claude Code delivery. Trained through Anthropic Academy."
- Pills: "Claude Engineering", "MCP Servers", "Context Engineering", "Agentic Systems"
- Note: "Bio page coming soon"

**Card 4 — Ahmad:**
- Name: "Ahmad"
- Role: "Content & Project Manager"
- Bio: "Content strategy, project management, and GTM execution for Alphabyte AI. Owns the content calendar, project tracking, and cross-functional coordination."
- Pills: "Content Strategy", "Project Management", "GTM Execution"
- Note: "Bio page coming soon"

**Card 5 — Rabia:**
- Name: "Rabia"
- Role: "Marketing & Content"
- Bio: "Marketing strategy and content production. Owns the Alphabyte AI brand voice, LinkedIn presence, and consent marketing programme."
- Pills: "Marketing Strategy", "Content Production", "Social Media", "Brand"
- Note: "Bio page coming soon"

**Card 6 — Carrie:**
- Name: "Carrie"
- Role: "Outbound Operations"
- Bio: "Outbound sales operations. Manages prospecting, outreach sequencing, and pipeline coordination for the Alphabyte AI practice."
- Pills: "Outbound Operations", "Sales Development", "Pipeline Management"
- Note: "Bio page coming soon"

**Stats bar:**
- Stat 1: "20+" / "Delivery specialists across data, cloud, and AI"
- Stat 2: "10 yrs" / "Data and digital consulting heritage"
- Stat 3: "100+" / "Enterprise clients served across North America"

**Bottom CTA:**
- Heading: "Want to meet the team?"
- Body: "Book a discovery call and you'll talk directly with the people who would work on your engagement."
- Button: "Book a Discovery Call"

### Drafted at implement-time
None — all copy is verbatim from the PDF.

## Search Intent & SEO
- **Target query:** "Alphabyte AI team", "Alphabyte consultants"
- **URL slug:** `/team/`
- **Meta title:** "Our Team" (renders as "Our Team — Alphabyte")
- **Meta description:** "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads — no junior bench." (143 chars)
- **Structured data:** BreadcrumbList, WebPage
- **OG image:** `/og/default.png` (use existing default)

## Design Notes
- Hero uses `bg-canvas` with the standard eyebrow + display h1 + body paragraph pattern (same as About page)
- Team cards: `bg-white` with `border border-border-default`, `rounded-lg`, comfortable padding (`p-6` to `p-8`)
- Card photo area: square aspect ratio at top of card. Adam Nameh has a greyscale photo with Alphabyte Blue multiply overlay. Other cards use a solid `bg-alphabyte-blue` rectangle with the person's initial centered in white, large text
- Role text in `text-alphabyte-blue` below the name
- Skill pills: outlined, `rounded-full`, `border border-border-default`, `text-body-sm`, `text-muted-foreground`, horizontal wrap
- "View full profile →" link in `text-foreground` for Adam; "Bio page coming soon" in `text-muted-foreground` italic for others
- Stats bar: three columns, each with a large stat number and a small descriptor below. Separated visually. Uses the same pattern as About/Homepage stat bars
- Bottom CTA: centered text, `DiscoveryCallButton variant="dark" size="lg"`

## Motion & Interactivity
- Card hover: subtle lift (translate-y -2px, slight shadow increase), 200ms ease-out
- "View full profile →" link: underline on hover
- All motion respects `prefers-reduced-motion`

## Acceptance Criteria
- [ ] Page renders at `/team/` without console errors
- [ ] Exactly one `<h1>` — "The practitioners behind every engagement."
- [ ] "every engagement." is rendered in Alphabyte Blue
- [ ] Breadcrumb visible: Home / Team
- [ ] BreadcrumbList JSON-LD present and valid
- [ ] Six team member cards in 3-column grid (desktop), stacking to 2-col (tablet), 1-col (mobile)
- [ ] Adam Nameh card links to `/team/adam-nameh/` via "View full profile →"
- [ ] Five other cards show "Bio page coming soon" with no link
- [ ] All six cards display name, role (blue), bio, and skill pills exactly as specified
- [ ] Adam Nameh card has a photo placeholder area (greyscale + blue overlay); others have blue initial placeholders
- [ ] Three-stat bar displays 20+ / 10 yrs / 100+ with descriptors
- [ ] Bottom CTA section with "Want to meet the team?" heading and Discovery Call button
- [ ] Sitemap entry added for `/team/`
- [ ] Passes `seo/page-checklist.md`
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean

## Related
- `design/Alphabyte_AI_Site_V8.pdf` page 18
- `design/MIGRATION.md` — nav order, Team at position 4
- `prds/about-page.md` — similar page structure (hero + content sections + CTA)
- `/tmp/page-team-index-18.png` — rasterized source of truth

## Notes
- Adam Nameh's photo is not available as a file in the repo. The implementation should use a placeholder `<div>` with greyscale styling. When the actual photo is added to `/public/`, it can be swapped in.
- The page does not use the `ServicePage` or `ToolPage` reusable components — it is a one-off page like About.
- The team data is hardcoded. If the team grows significantly, a data file (`src/lib/team-data.ts`) could be extracted, but do not create this abstraction now — six cards don't justify it.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29 (shipped)*
