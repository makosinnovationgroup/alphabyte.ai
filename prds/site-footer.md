# Site Footer

## Status
Ready to implement

## Type
Cross-cutting

## Summary
The site footer is the persistent component rendered beneath main content on every page of alphabyte.ai. It provides the brand logo, navigational link columns mirroring the header's information architecture, company and social links, and a legal row with copyright. The footer follows the dark Ventures aesthetic established by the header — black surface, white text, Alphabyte Blue accents on interaction.

## Decided
- Surface: black background (`bg-black`), consistent with header and Ventures aesthetic direction
- Logo: `alphabyte-logo-white.svg` on black surface, links to `/`
- Nav columns inherit all slugs and labels verbatim from `src/lib/navigation.ts` and the header PRD — no new slugs invented
- Services column: Discovery (`/services/discovery/`), Data (`/services/data/`), Enablement (`/services/enablement/`), Infrastructure (`/services/infrastructure/`)
- Tools column: Claude (`/tools/claude/`), MCP (`/tools/mcp/`), Custom AI Agents (`/tools/custom-ai-agents/`), On-Premise LLM (`/tools/on-premise-llm/`)
- Case Studies column: Sprinklermatic (`/case-studies/sprinklermatic/`), RecirQ (`/case-studies/recirq/`), HSC (`/case-studies/hsc/`)
- Company column: About (`/about/`), Contact (`/contact/`). Careers and Blog omitted until those pages have PRDs — the footer should not link to routes that don't exist and have no plan to exist
- Address: 155 Winges Road, Vaughan, ON (same as consulting practice)
- Socials: LinkedIn (`https://www.linkedin.com/company/alphabyte-solutions-inc`) and Bluesky (`https://bsky.app/profile/alphabytesolutions.bsky.social`)
- Legal row: copyright with dynamic year (`new Date().getFullYear()`), plus Terms of Service, Privacy Policy, and Cookies Policy links
- Legal pages link to `/terms/`, `/privacy/`, `/cookies/` as placeholder routes with `noindex` until real content exists — these are standard expectations for any live site and can ship as stubs
- No newsletter signup for v1. The site has no backend and no email list provider. Adding one later is a separate PRD
- Footer CTA: yes, a single "Get started" button linking to `/contact/`, matching the header CTA. The footer is a secondary conversion surface — visitors who scroll to the bottom without converting deserve one more low-pressure opportunity
- Motion: Tier 1 only. Hover color transitions on links (`transition-colors`, 200ms). No reveal animations, no scroll-triggered effects, no decorative motion
- Mobile layout: columns stack vertically. Link columns collapse to a single-column list. Logo and CTA remain prominent
- Footer consumes the same `navigation` data from `src/lib/navigation.ts` where possible to stay in sync with the header

## Open Questions
None

## Scope

### In scope
- Desktop footer layout: logo/brand statement area at top, link columns in a grid below, legal row at bottom
- Mobile footer layout: columns stacked vertically, responsive breakpoints
- Six link columns: Address, Services, Tools, Case Studies, Company, Socials
- Address block: 155 Winges Road, Vaughan, ON
- Legal row: copyright with auto-updating year, links to Terms / Privacy / Cookies
- Footer CTA: "Get started" button linking to `/contact/`
- Hover states on all links per component-rules.md Tier 1
- Working links to all referenced routes (including placeholder legal pages)
- Logo with clearspace rules per component-rules.md
- `prefers-reduced-motion` compliance for any transitions

### Out of scope
- Content of any linked pages (separate PRDs)
- Legal page content (separate PRDs for Terms, Privacy, Cookies)
- Newsletter signup or email capture
- Backend integration of any kind
- Social media brand-specific logo assets (use Lucide icons from the existing dependency where available; for Bluesky, use an inline SVG icon)
- Sitemap or robots.txt changes (the footer is a component, not a new route)
- Sticky or fixed-position footer behavior

## Pages & Components

### Modifying
- `src/app/layout.tsx` — add Footer component below `{children}`

### Creating
- `src/components/footer.tsx` — main footer component (logo area, link columns, legal row, CTA)
- `src/lib/footer-data.ts` — footer-specific data (company links, social links, legal links, address) that supplement the shared `navigation.ts` data. Navigation columns (Services, Tools, Case Studies) should import from `navigation.ts` directly rather than duplicating
- Social links open in new tabs with `rel="noopener noreferrer"` and `target="_blank"`

## Content

### Verbatim copy
- Column heading "Services": "Services"
- Column heading "Tools": "Tools"
- Column heading "Case Studies": "Case Studies"
- Column heading "Company": "Company"
- Column heading "Socials": "Socials" (or "Connect" — see Drafted section)
- Address: "155 Winges Road", "Vaughan, ON"
- Social links: "LinkedIn" → `https://www.linkedin.com/company/alphabyte-solutions-inc`, "Bluesky" → `https://bsky.app/profile/alphabytesolutions.bsky.social`
- Services items: "Discovery", "Data", "Enablement", "Infrastructure"
- Tools items: "Claude", "MCP", "Custom AI Agents", "On-Premise LLM"
- Case Studies items: "Sprinklermatic", "RecirQ", "HSC"
- Company items: "About", "Contact"
- CTA button label: "Get started"
- Copyright: "© Alphabyte {currentYear}"
- Legal links: "Terms of Service", "Privacy Policy", "Cookies Policy"
- Logo alt text: "Alphabyte"

### Drafted at implement-time
- Socials column heading: choose between "Socials" and "Connect" — whichever reads more naturally in the layout. Both are plain and on-brand
- Address block formatting: format the confirmed address naturally (street, city, province/state, postal code on separate lines). No label like "Head Office" unless Mitchell specifies one

## Search Intent & SEO
N/A (no new routes — the footer is a component, not a page)

## Design Notes
- Black surface, white text, Alphabyte Blue on hover — consistent with header treatment
- Logo: prominent but not the reference site's oversized treatment. The Ventures aesthetic is quieter than the 2021 blue-band footer. Use the standard `alphabyte-logo-white.svg` at a comfortable size (larger than the header logo, but not dominating half the footer). Roughly 160–200px width as a starting point — the implementer should use visual judgment
- Link columns: use a responsive grid. Desktop (`lg`+): all columns in a single row. Tablet (`md`): 2–3 columns per row. Mobile: single column stack
- Column headings: `text-body-sm`, `font-bold`, `uppercase`, `tracking-brand-wide`, `text-white` — matching the eyebrow treatment pattern from the placeholder homepage
- Column links: `text-body-sm`, `text-white/60` default, `text-alphabyte-blue` on hover
- Legal row: separated from link columns by a subtle border (`border-t border-white/10`). Copyright left-aligned, legal links right-aligned on desktop. Stacked on mobile
- CTA button: `variant="inverse"` (white bg, blue text) to stand out against the dark footer. Positioned between the logo area and the link columns, or at the end of the link columns — implementer's judgment on which reads better
- Generous vertical padding: `py-16 md:py-24` per brand spacing guidance
- Maximum content width: `max-w-7xl` matching the header

## Motion & Interactivity
- Link hover: `text-white/60` to `text-alphabyte-blue`, using `transition-colors` (200ms default). Tier 1
- CTA button hover: per `button.tsx` inverse variant hover state. Tier 1
- No scroll-reveal animations
- No scroll-triggered effects
- No decorative motion
- All transitions respect `prefers-reduced-motion` via the global CSS rule in `globals.css`

## Acceptance Criteria
- [ ] Footer renders on every page via `layout.tsx`, below main content
- [ ] Footer uses black background with white text
- [ ] Logo renders as `alphabyte-logo-white.svg`, links to `/`, meets 120px minimum width
- [ ] Services column lists four items with correct labels and links matching header PRD slugs
- [ ] Tools column lists four items with correct labels and links matching header PRD slugs
- [ ] Case Studies column lists three items with correct labels and links matching header PRD slugs
- [ ] Company column lists About and Contact with correct links
- [ ] Socials column lists LinkedIn and Bluesky with appropriate icons, linking to correct profile URLs
- [ ] Address block displays 155 Winges Road, Vaughan, ON
- [ ] CTA button renders with label "Get started", links to `/contact/`, uses inverse variant
- [ ] Legal row displays "© Alphabyte {currentYear}" with dynamically computed year
- [ ] Legal row links to `/terms/`, `/privacy/`, `/cookies/`
- [ ] Desktop layout: logo area, CTA, link columns in grid, legal row — all at `max-w-7xl`
- [ ] Mobile layout: columns stack vertically, no horizontal overflow
- [ ] All link hover states transition to `text-alphabyte-blue`
- [ ] Colors, typography, and spacing use Tailwind brand tokens — no hardcoded hex values
- [ ] Logo usage follows component-rules.md (clearspace, correct variant on dark surface)
- [ ] All transitions respect `prefers-reduced-motion`
- [ ] No forbidden vocabulary in any copy (voice-and-tone.md check)
- [ ] Footer navigation data stays in sync with `src/lib/navigation.ts` for shared columns
- [ ] Builds without TypeScript errors or console warnings
- [ ] Responsive and usable at common mobile widths (375px, 390px, 414px)

## Related
- `prds/site-header.md` — header PRD; source of truth for nav IA and URL slugs
- `src/lib/navigation.ts` — shared navigation data consumed by both header and footer
- `.claude/skills/alphabyte-brand/component-rules.md` — button styles, motion tiers, logo rules
- `.claude/skills/alphabyte-brand/tokens.md` — color tokens, type hierarchy, spacing
- `.claude/skills/alphabyte-brand/voice-and-tone.md` — copy guidelines
- `prds/backlog/followup-ceo-brand-direction.md` — brand direction decision (resolved: dark Ventures aesthetic)

## Notes
- The footer imports from `navigation.ts` for Services, Tools, and Case Studies columns rather than duplicating that data. Footer-specific items (Company links, social links, legal links, address) live in a separate `footer-data.ts` file. This keeps the header and footer in sync on shared nav items while allowing footer-only content to evolve independently.
- Careers and Blog are intentionally omitted from the Company column. Linking to routes with no content and no PRD creates dead ends that hurt both UX and SEO. When those pages get PRDs, the footer data file is the one place to add them.
- The reference site (alphabytesolutions.com) uses a saturated Alphabyte Blue background for the footer. That treatment belongs to the 2021 brand guide aesthetic. The Ventures direction calls for dark/black surfaces. The footer follows the Ventures direction, consistent with the header.
- Legal placeholder pages (`/terms/`, `/privacy/`, `/cookies/`) should be created as minimal stub pages with `noindex` robots directive. They need real content before the custom domain goes live — a separate effort, flagged here for tracking.

---
*Created: 2026-04-27*
*Last updated: 2026-04-27*
*Open questions resolved: 2026-04-27 — address (same as consulting practice), socials (LinkedIn + Bluesky)*
