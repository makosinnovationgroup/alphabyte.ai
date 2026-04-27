# Site Header & Primary Navigation

## Status
Shipped

## Type
Cross-cutting

## Summary
The site header is the persistent navigation component rendered on every page of alphabyte.ai. It provides the logo (linked home), primary navigation with dropdown menus for Services, Tools, and Case Studies, direct links to About and Contact, and a primary CTA. Desktop and mobile layouts are both in scope. This component establishes the information architecture for the entire site — the URL slugs decided here become canonical paths consumed by all downstream page PRDs.

## Decided
- Brand direction: dark Ventures aesthetic (dark backgrounds, moody palette). alphabyte.ai follows the alphabyte.com visual language, not the 2021 light/clean guide.
- Logo: `alphabyte-logo-white.svg` on dark surface, links to `/`
- Nav items in order: Services, Tools, Case Studies, About, Contact
- Services dropdown contains four tracks: Discovery, Data, Enablement, Infrastructure
- Tools dropdown contains four items: Claude, MCP, Custom AI Agents, On-Premise LLM
- Case Studies renders as a dropdown with three items plus a "View all" link to the index
- About and Contact are direct links (no dropdowns)
- CTA button positioned right-aligned after nav items
- URL slugs (canonical, trailing slash):
  - `/services/` — services index
  - `/services/discovery/` — Discovery track
  - `/services/data/` — Data track
  - `/services/enablement/` — Enablement track
  - `/services/infrastructure/` — Infrastructure track
  - `/tools/` — tools index
  - `/tools/claude/` — Claude platform
  - `/tools/mcp/` — MCP platform
  - `/tools/custom-ai-agents/` — Custom AI Agents platform
  - `/tools/on-premise-llm/` — On-Premise LLM platform
  - `/case-studies/` — case studies index
  - `/case-studies/sprinklermatic/` — Sprinklermatic
  - `/case-studies/recirq/` — RecirQ
  - `/case-studies/hsc/` — HSC
  - `/about/` — About page
  - `/contact/` — Contact page
- Motion tier: Tier 1 (on-brand defaults) — fade, slide, hover lift only. No decorative or attention-seeking animations.
- `prefers-reduced-motion` must disable all header animations
- Scroll behavior: header scrolls away with the page (static positioning, not fixed/sticky)
- CTA button label: "Get started"
- Mobile-first: the site must be completely mobile friendly. Header is designed mobile-first, then scaled up for desktop.

## Open Questions
None

## Scope

### In scope
- Desktop header layout: logo left, horizontal nav center, CTA button right
- Mobile header layout: logo left, hamburger icon right, expandable menu
- Dropdown menus for Services, Tools, and Case Studies with hover/click-open behavior
- Active-route highlighting for the current page
- Logo as home link
- Responsive breakpoints (mobile, tablet, desktop)
- Hover and focus states for all interactive elements
- Keyboard navigation and accessibility (focus trapping in mobile menu, `aria-expanded`, `aria-haspopup`)
- Skip-to-content link

### Out of scope
- Footer (separate PRD)
- Content inside any linked pages (separate PRDs per page)
- SEO metadata for linked pages (handled in each page's PRD)
- Search functionality in the header
- Authentication or user-account UI
- Notification badges or dynamic content in the nav

## Pages & Components

### Modifying
- `src/app/layout.tsx` — wrap `{children}` with the header component

### Creating
- `src/components/header.tsx` — main header component (desktop + mobile, dropdowns, CTA)
- `src/lib/navigation.ts` — navigation data structure (labels, hrefs, dropdown items) consumed by the header

## Content

### Verbatim copy
- Nav labels: "Services", "Tools", "Case Studies", "About", "Contact"
- Services dropdown items: "Discovery", "Data", "Enablement", "Infrastructure"
- Tools dropdown items: "Claude", "MCP", "Custom AI Agents", "On-Premise LLM"
- Case Studies dropdown items: "Sprinklermatic", "RecirQ", "HSC"
- Case Studies dropdown footer link: "View all case studies"
- CTA button label: "Get started"
- Logo alt text: "Alphabyte"

### Drafted at implement-time
- Services dropdown sub-descriptions (one line per track, e.g., "Scoping, requirements, and recommendations" under Discovery): draft short descriptors at implement-time following voice-and-tone.md. Keep each under 8 words.
- Tools dropdown sub-descriptions: same treatment as Services.

## Search Intent & SEO
N/A (no new routes — the header is a component, not a page. URL slugs are decided here but the pages themselves are separate PRDs.)

## Design Notes
- Dark surface: black or near-black background (`bg-black` or equivalent dark token) following the Ventures aesthetic.
- Logo uses `alphabyte-logo-white.svg` at minimum 120px width per brand rules.
- CTA button uses primary style: `bg-alphabyte-blue text-white` with hover state per component-rules.md button spec. Stands out against the dark header surface.
- Nav text: white/light text (`text-white` or light grey) at `text-body` weight (Regular 400), Sentence case. Active route indicated by `text-alphabyte-blue` color — not bold.
- Dropdowns: dark panel consistent with header surface, subtle border or shadow to delineate. Items use consistent padding. No gradient backgrounds in dropdowns.
- Mobile-first breakpoint strategy: mobile is the base layout (hamburger menu). Nav items expand to horizontal at `lg` (1024px) and up.
- Maximum content width should match the site's global container (likely `max-w-7xl` or equivalent — align with whatever the homepage establishes).
- Touch targets: all interactive elements meet minimum 44x44px tap target on mobile per WCAG guidelines.

## Motion & Interactivity
- **Dropdown open/close**: fade-in with `duration-150 ease-out` on open, `duration-100 ease-in` on close. Tier 1 per component-rules.md.
- **Hover states**: nav items get `text-alphabyte-blue` on hover with no transition delay. CTA button gets subtle lift or brightness shift.
- **Mobile menu**: slide-in from right with `duration-200 ease-out`. Focus trapped inside when open. Body scroll locked.
- **Scroll behavior**: header scrolls away with the page (no fixed/sticky positioning). Simple static flow.
- **Active route**: no animation — static color change only.
- All animations respect `prefers-reduced-motion: reduce` by disabling transitions.

## Acceptance Criteria
- [ ] Header renders on every page via `layout.tsx`
- [ ] Logo links to `/` and meets 120px minimum width
- [ ] All five nav items render in correct order: Services, Tools, Case Studies, About, Contact
- [ ] Services dropdown shows four tracks with correct labels and links to decided slugs
- [ ] Tools dropdown shows four items with correct labels and links to decided slugs
- [ ] Case Studies dropdown shows three items plus "View all case studies" link
- [ ] About links to `/about/`, Contact links to `/contact/`
- [ ] CTA button renders with label "Get started" and primary button styling
- [ ] Desktop layout: logo left, nav center, CTA right — at `lg` breakpoint and above
- [ ] Mobile layout: logo left, hamburger right — below `lg` breakpoint
- [ ] Mobile menu opens/closes, contains all nav items and CTA
- [ ] Active route is visually indicated for the current page
- [ ] Keyboard navigation works for all interactive elements (Tab, Enter, Escape to close dropdowns)
- [ ] `aria-expanded`, `aria-haspopup` attributes present on dropdown triggers
- [ ] Skip-to-content link present and functional
- [ ] Focus trapped inside mobile menu when open
- [ ] All motion respects `prefers-reduced-motion`
- [ ] No forbidden vocabulary in any copy (voice-and-tone.md check)
- [ ] Colors, typography, and spacing use Tailwind brand tokens — no hardcoded hex values
- [ ] Logo usage follows component-rules.md (clearspace, no modifications)
- [ ] Header uses dark surface with white logo variant
- [ ] Header scrolls away with the page (not fixed/sticky)
- [ ] All touch targets meet 44x44px minimum on mobile
- [ ] Mobile layout is fully usable and tested at common breakpoints (375px, 390px, 414px)
- [ ] No horizontal overflow or content clipping at any viewport width
- [ ] Builds without TypeScript errors or console warnings

## Related
- `prds/enhance-site-header-option-c.md` — enhancement: re-theme header to Option C light direction
- `prds/backlog/followup-ceo-brand-direction.md` — brand direction decision (resolved: dark Ventures aesthetic → Option C)
- `.claude/skills/alphabyte-brand/component-rules.md` — button styles, motion tiers, logo rules
- `.claude/skills/alphabyte-brand/tokens.md` — color tokens, type hierarchy, spacing
- `.claude/skills/alphabyte-brand/voice-and-tone.md` — copy guidelines
- `.claude/skills/seo/page-checklist.md` — URL slug conventions referenced for slug decisions

## Notes
- The navigation data structure (`src/lib/navigation.ts`) should be a single source of truth for labels, hrefs, and dropdown children. Both the header and future footer can consume it.
- Case Studies as a dropdown (rather than a direct link to an index page) gives immediate access to each study. With only three items, the dropdown stays lightweight. The "View all" link still provides a path to the index for discoverability and SEO.
- "Get started" was chosen over "Book Demo" (old site) and "Build with us" (Ventures site) — plain, action-oriented, no sales framing.
- Implementation should use Next.js `Link` component for all internal navigation and `usePathname()` for active-route detection.

---
*Created: 2026-04-24*
*Last updated: 2026-04-24*
*Decisions resolved: 2026-04-24 — brand direction (dark Ventures), scroll behavior (scroll away), CTA copy ("Get started")*
