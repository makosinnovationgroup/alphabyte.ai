# Our Work Index Page

## Status
Shipped

## Type
New page

## Summary
The Our Work index page at `/our-work` showcases Alphabyte's three active client engagements as a portfolio. Each engagement is presented as a card with a dark header band (industry tags), client name, project title, service pills, body description, and a "Read case study →" link. The page replaces the existing stub with the full V7 design from PDF page 14.

## Decided
- Route: `/our-work/`
- Eyebrow: "OUR WORK" (all-caps, Alphabyte Blue)
- H1: "The most credible proof is the work we are shipping today." — with "shipping today." rendered in Alphabyte Blue
- Sub-head: "The following engagements are in active delivery. References can be arranged on request, subject to client approval."
- Three case study cards in a three-column grid (desktop), stacking on mobile
- Each card has: dark header band with uppercase industry/sector tags, client name as H2, project title as bold text, service tag pills (outlined), body paragraph, "Read case study →" link in Alphabyte Blue
- Closing CTA section: "Want to talk through what we could build for you?" / "45 minutes. No cost. No obligation." / "Book a Discovery Call" button (dark variant, opens modal)
- No reusable layout component matches this page shape — ServicePage, CaseStudyPage, and ToolPage are all detail-page layouts. Build directly in the page file.

## Open Questions
None

## Scope

### In scope
- Replace existing `/our-work/page.tsx` stub with full V7 design
- Hero section with eyebrow, H1 (with blue-accented "shipping today."), and sub-head
- Three case study cards matching PDF layout: dark header band with industry tags, client name, project title, service pills, body copy, "Read case study →" link
- Closing CTA section centered below cards
- Update metadata to match V7 content
- WebPage JSON-LD structured data
- Sitemap entry already exists — update `lastModified` date

### Out of scope
- Individual case study detail pages (already built)
- Creating a reusable "OurWorkCard" component — three cards on one page does not justify an abstraction
- OG image creation (use default)
- New photography or imagery (page is text-only per PDF)

## Pages & Components

### Modifying
- `src/app/our-work/page.tsx` — replace stub content with full V7 design
- `src/app/sitemap.ts` — update `lastModified` for `/our-work/`

### Creating
None

## Content

### Verbatim copy
All strings below are read directly from the PDF page 14 rasterization.

- Eyebrow: "OUR WORK"
- H1: "The most credible proof is the work we are shipping today." (with "shipping today." in Alphabyte Blue)
- Sub-head: "The following engagements are in active delivery. References can be arranged on request, subject to client approval."

**Card 1 — Sprinklermatic:**
- Header tags: "FIRE PROTECTION · PE-BACKED · NORTH AMERICA"
- Client name: "Sprinklermatic / EJ Capital"
- Project title: "AI-Powered Compliance Intelligence Agent"
- Pills: "Citizen Development", "Infrastructure", "Custom AI Agents"
- Body: "Purpose-built AI agent that navigates the full NFPA fire codes library with citation-grade accuracy — eliminating 40+ hours per week of manual code lookup across Sprinklermatic's technical teams."
- CTA: "Read case study →"
- Link: `/our-work/sprinklermatic/`

**Card 2 — RecirQ:**
- Header tags: "CIRCULAR ECONOMY · USED SMARTPHONES · GLOBAL"
- Client name: "RecirQ / Reventory"
- Project title: "AI-Powered Executive Productivity & Auction Analytics"
- Pills: "Citizen Development", "Executive Enablement", "Data Readiness"
- Body: "Executive productivity suite with automated daily intelligence and a full AI-driven auction analytics platform — including a market supply index and predictive bid decisioning engine."
- CTA: "Read case study →"
- Link: `/our-work/recirq/`

**Card 3 — Housing Services Corp.:**
- Header tags: "PUBLIC SECTOR · HOUSING · NATIONAL · CANADA"
- Client name: "Housing Services Corp."
- Project title: "AI Enablement Roadmap"
- Pills: "Discovery", "Data Readiness"
- Body: "Full current state assessment and AI enablement roadmap for a national Canadian housing organization — six strategic recommendations delivered within federal data governance requirements."
- CTA: "Read case study →"
- Link: `/our-work/housing-services-corp/`

**Closing CTA:**
- Heading: "Want to talk through what we could build for you?"
- Sub-head: "45 minutes. No cost. No obligation."
- Button: "Book a Discovery Call"

### Drafted at implement-time
- Meta title: draft at implement-time, under 60 chars, Title Case
- Meta description: draft at implement-time, 140–160 chars, include "AI consulting" and "case studies" naturally

## Search Intent & SEO
- **Target query:** "Alphabyte AI case studies", "AI consulting portfolio Canada"
- **URL slug:** `/our-work/`
- **Meta title:** draft at implement-time (e.g. "Our Work — AI Case Studies")
- **Meta description:** draft at implement-time, 140–160 chars
- **Structured data:** WebPage JSON-LD
- **OG image:** `/og/default.png` (existing default)

## Design Notes
- Hero section: off-white canvas background, left-aligned text. "shipping today." in `text-alphabyte-blue`. Display-size H1 with `tracking-brand-tight`.
- Cards: three-column grid on desktop (`lg:grid-cols-3`), single-column on mobile. Each card is white (`bg-white`) with `border-border-default` and rounded corners.
- Card dark header: dark band at top of each card (`bg-foreground`) with uppercase industry tags in Alphabyte Blue (`text-alphabyte-blue`), separated by ` · `. Client name in white, bold.
- Card body area: white background. Project title in bold. Service pills are outlined chips with `border-border-default`, `text-body-sm`, `rounded-full`. Body text in `text-muted-foreground` or `text-foreground`.
- "Read case study →" link in Alphabyte Blue at bottom of each card.
- Closing CTA section: centered text on off-white canvas. "Book a Discovery Call" button uses dark variant, triggers discovery call modal.
- Card grid sits on a light grey/canvas band — the PDF shows the card section has a slightly different background than the hero.

## Motion & Interactivity
- Cards: subtle hover shadow lift (`motion-safe:hover:shadow-md`), matching existing card pattern in the codebase
- "Book a Discovery Call" button opens the global DiscoveryCallModal via context
- No scroll animations — static content per Option C restraint

## Acceptance Criteria
- [ ] Page renders at `/our-work/` without console errors
- [ ] H1 matches PDF verbatim: "The most credible proof is the work we are shipping today." with "shipping today." in Alphabyte Blue
- [ ] All three case study cards render with correct dark header bands, client names, project titles, pills, body copy, and links
- [ ] Card header tags match PDF exactly (uppercase, dot-separated)
- [ ] Service pills on each card match PDF exactly
- [ ] Body copy on each card matches PDF verbatim
- [ ] "Read case study →" links navigate to correct case study pages
- [ ] Closing CTA renders centered with "Book a Discovery Call" button that opens the discovery call modal
- [ ] Three-column grid on desktop, single-column stack on mobile
- [ ] Metadata: page-specific title, description, canonical, OG, Twitter
- [ ] WebPage JSON-LD structured data present
- [ ] Sitemap `lastModified` updated
- [ ] Passes seo/page-checklist.md
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Visuals pass alphabyte-brand/component-rules.md review
- [ ] `pnpm build` and `pnpm typecheck` pass

## Related
- `design/Alphabyte_AI_Site_V7.pdf` page 14
- `design/INDEX.md` — `our-work-index` row
- `design/MIGRATION.md` — §3.2 new routes
- `prds/case-study-sprinklermatic.md`
- `prds/case-study-recirq.md`
- `src/components/case-study-page.tsx` — detail page component (not used here; cards are unique to the index)

## Notes
- The existing stub at `/our-work/page.tsx` has different copy, card structure, and metadata. The V7 design is significantly different — the cards now have dark header bands with industry tags, service pills, and longer body copy. A full replacement is warranted rather than an incremental edit.
- No reusable layout component matches. ServicePage is for service detail pages. CaseStudyPage is for case study detail pages. This is an index/portfolio page with its own card grid layout.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29*

