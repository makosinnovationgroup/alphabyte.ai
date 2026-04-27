# Nav Clickthrough & Missing Stub Pages

## Status
Shipped

## Type
Cross-cutting

## Summary
The site header's dropdown parents (Services, Tools, Case Studies) don't navigate to their parent route on click — they only open a dropdown. All top-level nav items should be clickable links. Additionally, six routes referenced in the navigation have no pages: `/case-studies/`, `/case-studies/sprinklermatic/`, `/case-studies/recirq/`, `/case-studies/hsc/`, `/blog/`, and `/about/`. This PRD adds stub pages for all six and makes dropdown parents into navigable links so no nav click leads to a dead page.

## Decided
- Dropdown parent items (Services, Tools, Case Studies) become clickable links to their `href` on desktop. Hover still opens the dropdown menu. Click on the label text navigates. This is the split-button pattern: clicking the label navigates, hovering reveals children.
- On mobile, the parent label for sections with children becomes a link to the parent route. The accordion expand/collapse moves to a separate chevron icon on the right side of the row.
- Case study stubs follow the same template structure as the service track stubs and tool stubs: breadcrumb, eyebrow + h1 + sub-head + body + CTAs, coming soon section.
- Blog and About are simpler stubs: eyebrow + h1 + body paragraph + coming soon section. No breadcrumbs needed (top-level routes).
- Case study stub copy uses the public-safe framings from `alphabyte-services/proof-points.md`. No specific financial details, no unverified outcomes, no parent company names.
- All stubs use `/og/default.png` — no new OG images.

## Open Questions
None

## Scope

### In scope
- Modify `src/components/header.tsx`: make `DesktopDropdown` label a navigable link (click navigates, hover opens dropdown). Modify `MobileSection` so parent label is a link and expand/collapse is a separate chevron.
- New route `/case-studies/` — case studies index stub
- New route `/case-studies/sprinklermatic/` — Sprinklermatic stub
- New route `/case-studies/recirq/` — RecirQ stub
- New route `/case-studies/hsc/` — HSC stub
- New route `/blog/` — blog stub
- New route `/about/` — about stub
- Sitemap entries for all six new routes
- Per-page metadata (title, description, canonical, OG, Twitter) for all six pages
- BreadcrumbList JSON-LD on the three case study detail stubs

### Out of scope
- Full case study page content (future PRDs, requires client approval per `proof-points.md`)
- Full blog page content or blog post system
- Full about page content
- Footer changes
- Navigation data changes (`src/lib/navigation.ts` already has all these routes)
- New OG images
- Case study stubs showing outcome metrics or financial details

## Pages & Components

### Modifying
- `src/components/header.tsx` — make dropdown parents clickable links; add chevron toggle for mobile accordion
- `src/app/sitemap.ts` — add six new route entries

### Creating
- `src/app/case-studies/page.tsx` — case studies index stub
- `src/app/case-studies/sprinklermatic/page.tsx` — Sprinklermatic stub
- `src/app/case-studies/recirq/page.tsx` — RecirQ stub
- `src/app/case-studies/hsc/page.tsx` — HSC stub
- `src/app/blog/page.tsx` — blog stub
- `src/app/about/page.tsx` — about stub

## Content

### Verbatim copy

**Case studies index — /case-studies/**
- Eyebrow: "CASE STUDIES"
- Headline (h1): "Work that ships."
- Body: "Real engagements with Canadian mid-market organizations. Not mockups. Not proofs-of-concept."

**Case study cards on index page** (one card per case study, linking to the stub):

Sprinklermatic card:
- Industry tag: "Fire Protection"
- Title: "Sprinklermatic"
- Description: "Nine-initiative AI Command System. Custom MCP server with OAuth 2.0. NFPA compliance intelligence agent live in production."
- CTA: "Read more →" → /case-studies/sprinklermatic/

RecirQ card:
- Industry tag: "Commerce Intelligence"
- Title: "RecirQ"
- Description: "WhatsApp Sales Command Center with Claude-powered semantic analysis. Full Claude ops environment connected via MCP."
- CTA: "Read more →" → /case-studies/recirq/

HSC card:
- Industry tag: "Public Sector · Housing"
- Title: "Housing Services Corp."
- Description: "AI enablement roadmap and data strategy. Claude-based agent recommendations for cross-program reporting and anomaly detection."
- CTA: "Read more →" → /case-studies/hsc/

**Sprinklermatic stub — /case-studies/sprinklermatic/**
- Eyebrow: "CASE STUDIES · SPRINKLERMATIC"
- Headline (h1): "Sprinklermatic"
- Sub-head: "Nine-initiative AI Command System for a Canadian fire protection firm."
- Body: "Custom MCP server with OAuth 2.0, Claude Desktop plugin with chained skills, human-in-the-loop approval gates, and an NFPA compliance intelligence agent live in production."
- Primary CTA: "Book a Strategy Sprint" → /services/discovery/
- Secondary CTA: "← Back to all case studies" → /case-studies/
- Coming soon eyebrow: "COMING SOON"
- Coming soon body: "The full case study is in development. To talk through how we built the Sprinklermatic AI Command System, book a Strategy Sprint or get in touch."

**RecirQ stub — /case-studies/recirq/**
- Eyebrow: "CASE STUDIES · RECIRQ"
- Headline (h1): "RecirQ"
- Sub-head: "WhatsApp Sales Command Center with Claude-powered semantic analysis."
- Body: "Full Claude operations environment connected to Slack, BigQuery, Google Drive, WhatsApp, and Fireflies via MCP. Citizen dev enablement with custom SDLC plugin deployed org-wide."
- Primary CTA: "Book a Strategy Sprint" → /services/discovery/
- Secondary CTA: "← Back to all case studies" → /case-studies/
- Coming soon eyebrow: "COMING SOON"
- Coming soon body: "The full case study is in development. To talk through how we built the RecirQ Claude environment, book a Strategy Sprint or get in touch."

**HSC stub — /case-studies/hsc/**
- Eyebrow: "CASE STUDIES · HSC"
- Headline (h1): "Housing Services Corp."
- Sub-head: "AI enablement roadmap for a Canadian housing services organization."
- Body: "Data strategy and AI enablement roadmap delivered. Recommendations for Claude-based agents covering cross-program reporting, anomaly detection, and workflow automation."
- Primary CTA: "Book a Strategy Sprint" → /services/discovery/
- Secondary CTA: "← Back to all case studies" → /case-studies/
- Coming soon eyebrow: "COMING SOON"
- Coming soon body: "The full case study is in development. To talk through how we built the HSC roadmap, book a Strategy Sprint or get in touch."

**Blog stub — /blog/**
- Eyebrow: "BLOG"
- Headline (h1): "Writing."
- Body: "Thinking on AI deployment, data strategy, and the work itself. Coming soon."

**About stub — /about/**
- Eyebrow: "ABOUT"
- Headline (h1): "About Alphabyte."
- Body: "We're an AI and data consultancy. We work with companies that have real data problems and want to solve them properly. More here soon."

### Drafted at implement-time
None — all copy is verbatim above.

## Search Intent & SEO

**Case studies index — /case-studies/**
- **Target query:** "Alphabyte case studies", "AI consulting case studies Canada"
- **URL slug:** /case-studies/
- **Meta title:** "Case Studies — AI Deployments for Canadian Mid-Market"
- **Meta description:** "Real AI engagements with Canadian mid-market organizations. Sprinklermatic, RecirQ, Housing Services Corp. Not mockups. Not proofs-of-concept."
- **Structured data:** None page-specific beyond root Organization
- **OG image:** /og/default.png
- **Sitemap:** priority 0.8, changeFrequency monthly

**/case-studies/sprinklermatic/**
- **Target query:** "Sprinklermatic AI", "fire protection AI case study"
- **URL slug:** /case-studies/sprinklermatic/
- **Meta title:** "Sprinklermatic — AI Command System for Fire Protection"
- **Meta description:** "Nine-initiative AI Command System. Custom MCP server, NFPA compliance agent, human-in-the-loop gates. A Canadian fire protection AI deployment."
- **Structured data:** BreadcrumbList (Home > Case Studies > Sprinklermatic)
- **OG image:** /og/default.png
- **Sitemap:** priority 0.6, changeFrequency monthly

**/case-studies/recirq/**
- **Target query:** "RecirQ AI", "WhatsApp sales AI case study"
- **URL slug:** /case-studies/recirq/
- **Meta title:** "RecirQ — WhatsApp Sales Command Center"
- **Meta description:** "WhatsApp Sales Command Center with Claude-powered semantic analysis. Full Claude ops environment connected via MCP. A commerce intelligence deployment."
- **Structured data:** BreadcrumbList (Home > Case Studies > RecirQ)
- **OG image:** /og/default.png
- **Sitemap:** priority 0.6, changeFrequency monthly

**/case-studies/hsc/**
- **Target query:** "Housing Services Corp AI", "public sector AI roadmap"
- **URL slug:** /case-studies/hsc/
- **Meta title:** "Housing Services Corp. — AI Enablement Roadmap"
- **Meta description:** "AI enablement roadmap and data strategy for a Canadian housing services organization. Claude-based agent recommendations for reporting and anomaly detection."
- **Structured data:** BreadcrumbList (Home > Case Studies > HSC)
- **OG image:** /og/default.png
- **Sitemap:** priority 0.6, changeFrequency monthly

**/blog/**
- **Target query:** "Alphabyte blog", "AI consulting insights"
- **URL slug:** /blog/
- **Meta title:** "Blog — AI Deployment & Data Strategy Writing"
- **Meta description:** "Thinking on AI deployment, data strategy, and the work of building production AI systems. From the Alphabyte team."
- **Structured data:** None
- **OG image:** /og/default.png
- **Sitemap:** priority 0.6, changeFrequency weekly

**/about/**
- **Target query:** "Alphabyte about", "Alphabyte AI consulting team"
- **URL slug:** /about/
- **Meta title:** "About — Alphabyte AI & Data Consulting"
- **Meta description:** "An AI and data consultancy for companies with real data problems. Small, senior, and deliberate about the work we take on."
- **Structured data:** None
- **OG image:** /og/default.png
- **Sitemap:** priority 0.7, changeFrequency monthly

## Design Notes

- Case studies index: same layout pattern as the services "Not Sure Where to Start" entry bundles section — three-column card grid on desktop, stacking on mobile. Each card has an industry tag eyebrow, title, description, and "Read more →" CTA.
- Case study stubs: identical template to the service track stubs (breadcrumb, hero section on `bg-canvas`, CTA pair, coming soon section with border-top separator).
- Blog and About stubs: simpler — single hero section on `bg-canvas` with coming soon text inline. No separate coming soon section needed since the page *is* the coming soon.
- Card hover on case study index: `motion-safe:hover:shadow-md` with `transition-shadow duration-200`, same pattern as tools infrastructure cards.
- Desktop dropdown: the parent label becomes an `<a>` (via Next.js `<Link>`). Hover on the entire dropdown container still opens the flyout. The label is both a link and the hover trigger area — this is standard mega-menu behavior.
- Mobile section: parent label becomes a `<Link>`. A `ChevronDown` icon (from lucide-react) on the right side of the row toggles the accordion. This separates navigation from expand/collapse.

## Motion & Interactivity

- Desktop dropdown hover behavior unchanged (already animated with `motion`).
- Mobile accordion expand/collapse behavior unchanged.
- Card hover on case studies index: `transition-shadow duration-200`, respects `prefers-reduced-motion` via `motion-safe:` prefix.
- No new animations introduced.

## Acceptance Criteria
- [ ] Clicking "Services" label in desktop nav navigates to `/services/`
- [ ] Clicking "Tools" label in desktop nav navigates to `/tools/`
- [ ] Clicking "Case Studies" label in desktop nav navigates to `/case-studies/`
- [ ] Hovering over Services, Tools, or Case Studies still opens the dropdown menu
- [ ] On mobile, tapping "Services" / "Tools" / "Case Studies" label navigates to the parent route
- [ ] On mobile, tapping the chevron icon expands/collapses the accordion children
- [ ] `/case-studies/` renders with three case study cards
- [ ] `/case-studies/sprinklermatic/`, `/case-studies/recirq/`, `/case-studies/hsc/` each render with hero and coming soon sections
- [ ] `/blog/` renders with hero and coming soon content
- [ ] `/about/` renders with hero and coming soon content
- [ ] All six pages have correct metadata (title, description, canonical, OG, Twitter)
- [ ] Three case study detail stubs have BreadcrumbList JSON-LD with visible breadcrumb nav
- [ ] All six routes added to `src/app/sitemap.ts`
- [ ] "← Back to all case studies" links navigate to `/case-studies/`
- [ ] "Book a Strategy Sprint" CTAs link to `/services/discovery/`
- [ ] "Read more →" links on case study cards navigate to correct stubs
- [ ] No dead links from any nav item (desktop or mobile)
- [ ] Case study copy uses only public-safe framings from `proof-points.md`
- [ ] No pricing displayed on any stub page
- [ ] All copy matches verbatim copy section exactly
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review
- [ ] Passes `seo/page-checklist.md` on all six pages
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes

## Related
- `prds/services-pages.md` — services pages PRD (stub template pattern)
- `prds/tools.md` — tools pages PRD (stub template pattern)
- `.claude/skills/alphabyte-services/proof-points.md` — source of truth for case study framings
- `src/lib/navigation.ts` — navigation data (already has all routes defined)

## Notes
- The navigation data in `src/lib/navigation.ts` already defines all these routes and children. No changes needed there — the gap is pages and header behavior, not data.
- Case study stubs are deliberately thin. Full case study pages require client approval for specific narratives per `proof-points.md`. The stubs exist to prevent dead links and establish the URL structure.
- The "View all case studies" footer link in the Case Studies nav dropdown already points to `/case-studies/`, so the index page serves double duty as a dropdown-footer destination.
- Blog and About stubs are the simplest possible pages. They exist purely to prevent 404s from nav clicks. Future PRDs will flesh them out.
- The split-button pattern on desktop (click navigates, hover opens dropdown) is well-established UX. No accessibility concerns — the parent label is a real `<a>` tag, and the dropdown children remain discoverable via hover and keyboard.

---
*Created: 2026-04-27*
*Last updated: 2026-04-27 (shipped)*
