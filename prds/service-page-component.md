# ServicePage Component

## Status
Shipped

## Type
New component

## Summary
A reusable `<ServicePage>` layout component that renders the canonical service detail page structure from the V7 design. Five service pages (Executive Enablement, Citizen Development, Discovery, Data Readiness, Infrastructure) share this exact layout with different data. This component is the data-driven primitive they all consume.

## Decided
- File location: `src/components/service-page.tsx`
- Component name: `ServicePage`
- All content is passed via props; no hardcoded strings in the component
- Primary CTA wires through existing `DiscoveryCallButton` when `action === 'modal'`
- Uses existing Tailwind tokens from `tailwind.config.ts` only
- Icons in the deliverables section are emoji rendered inline, not SVG
- Section order matches V7 PDF pages 3-7 exactly (see Section Order below)
- The `"dark"` button variant from `button.tsx` is used for primary CTAs (black fill, white text)
- The stat bar uses `bg-foreground` (dark background, `#171717`) with Alphabyte Blue stat values and white descriptors
- "Day 30" label in the 30-days box uses Alphabyte Blue color treatment
- Right-for-you panel has a light green-tinted background; Not-right-for-you has a light red-tinted background
- Breadcrumb is NOT part of this component (it's a page-level concern handled in each page's `page.tsx`)

## Open Questions
None

## Scope

### In scope
- `ServicePage` React component with typed props covering all seven sections
- Exported TypeScript types (`ServicePageProps` and sub-types)
- Visual fidelity to V7 PDF pages 3-7: spacing, color, hierarchy, component placement
- Responsive behavior implied by the layout (single-column stacking on mobile for two-column sections)
- Wiring `primaryCta` with `action: 'modal'` to the existing `DiscoveryCallButton` / `DiscoveryCallContext`

### Out of scope
- Building the actual five service detail pages (those come via `/page` invocations)
- Data files or content for any specific service
- Page-level concerns: routing, metadata, structured data, breadcrumbs, OG images
- Mobile-specific tweaks beyond reasonable responsive stacking
- Storybook setup or test infrastructure
- Any new Tailwind tokens (use what exists in `tailwind.config.ts`)

## Pages & Components

### Modifying
None

### Creating
- `src/components/service-page.tsx` — the reusable service detail page layout component

## Content

### Verbatim copy
- Section heading for 30-days box: "What the first 30 days look like"
- Section heading for deliverables: "What we deliver"
- Left panel heading: "Right for you if"
- Right panel heading: "Not right for you if"
- Timeline label: "Timeline"

### Drafted at implement-time
None — all variable copy is data-driven via props.

## Search Intent & SEO
N/A (component, not a page)

## Design Notes

### Section order (matching V7 layout)

1. **Hero** — Eyebrow (uppercase, small, muted) + H1 (`text-display`) + Subhead (one line below H1, `text-headline` size) + Body paragraphs (`text-body`, separated as individual `<p>` elements)
2. **CTA row** — Primary CTA (black button, `variant="dark"`) on the left + optional secondary CTA (text link with left arrow, e.g. "← Back to all services") inline to the right
3. **Stat bar** — Full-width dark band (`bg-foreground`). Three stat columns evenly spaced. Stat values in Alphabyte Blue (`text-alphabyte-blue`), large-ish size. Descriptors below each value in small white/muted text (`text-body-sm text-white/70` or similar). Generous vertical padding (`py-10` to `py-12`).
4. **30-days box** — White card on canvas background, bordered (`border-border-default`). Heading: "What the first 30 days look like" as uppercase eyebrow. Two-column layout per row: left column has the week label (`font-bold`), right column has the body text. Rows separated by subtle horizontal rules. The final "Day 30 — what you have" row: label in Alphabyte Blue, body text standard. Generous internal padding.
5. **Deliverables section** — Heading: "What we deliver" as uppercase eyebrow. Each deliverable is a row: emoji icon on the left, title (`font-bold`) + body text on the right. Rows separated by hairline horizontal rules (`border-border-default`). Variable count (4-8 items across services).
6. **Right/Not-right panels** — Two-column grid. Left panel: light green tint background (`bg-green-50` or `bg-emerald-50`), heading "Right for you if", bullet list with green checkmark icons. Right panel: light red tint background (`bg-red-50`), heading "Not right for you if", bullet list with red X icons. Check and X icons use Lucide or simple SVG (the PDF shows small filled icons).
7. **Timeline footer** — Full-width strip. "Timeline" label on the left with the timeline value below it. "Book a Discovery Call" CTA button (dark variant) on the right. Separated from above by spacing.

### Spacing rhythm (from PDF observation)
- Hero section: generous top padding (`pt-12 md:pt-16`)
- Between hero and CTA row: `mt-8`
- Between CTA row and stat bar: `mt-12 md:mt-16`
- Between stat bar and 30-days box: `py-16 md:py-24` (section padding)
- Between 30-days and deliverables: `py-16 md:py-24`
- Between deliverables and right/not-right: `py-16 md:py-24`
- Timeline footer: `py-8 md:py-12` with top border

### Color specifics
- Stat bar background: `bg-foreground` (`#171717`)
- Stat values: `text-alphabyte-blue`
- Stat descriptors: white with reduced opacity
- Day 30 label: `text-alphabyte-blue`
- Right-for-you background: a very light green tint (use Tailwind's `bg-green-50` or an arbitrary `bg-[#f0fdf4]`)
- Not-right-for-you background: a very light red tint (use Tailwind's `bg-red-50` or an arbitrary `bg-[#fef2f2]`)
- Check icon: green (`text-green-600`)
- X icon: red (`text-red-500`)

### Eyebrow treatment
- Uppercase, `text-body-sm`, `tracking-brand-wide`, `text-muted-foreground`
- Section eyebrows ("What the first 30 days look like", "What we deliver") use same treatment

## Motion & Interactivity
- Primary CTA with `action: 'modal'` opens the Discovery Call modal via `DiscoveryCallContext`
- Primary CTA with `action: 'link'` renders as a `<Link>` wrapping the button (use `asChild`)
- Secondary CTA is a plain Next.js `<Link>`
- No scroll animations on this component (page-level decision)
- Button hover states per existing `button.tsx` variants (200ms transition)

## Acceptance Criteria
- [ ] Component renders correctly when given props matching any of the five V7 service pages (3-7)
- [ ] Visual match against PDF pages 3-7 holds for spacing, color, hierarchy, and placement
- [ ] Stat bar renders three stats on a dark background with blue values and white descriptors
- [ ] 30-days box renders variable-length week rows with the "Day 30" row using blue label treatment
- [ ] Deliverables section renders variable-count items with emoji icons and hairline separators
- [ ] Right-for-you panel has green-tinted background with check icons; Not-right-for-you has red-tinted background with X icons
- [ ] Primary CTA opens the Discovery Call modal when `action === 'modal'`
- [ ] Primary CTA renders as a link when `action === 'link'`
- [ ] All copy is data-driven; no hardcoded content strings in the component
- [ ] TypeScript types (`ServicePageProps`) are exported alongside the component
- [ ] `pnpm build` passes
- [ ] `pnpm typecheck` passes
- [ ] Component wraps content in `<main>` with appropriate semantic structure
- [ ] Exactly one `<h1>` rendered (from the `h1` prop)
- [ ] Heading hierarchy is sequential (h1 > h2 for section headings)

## Related
- `design/Alphabyte_AI_Site_V7.pdf` pages 3-7 — source of truth for layout
- `prds/services-pages.md` — the original services pages PRD (will consume this component)
- `src/components/discovery-call-button.tsx` — existing CTA component this wires into
- `.claude/skills/alphabyte-brand/component-rules.md` — visual rules
- `.claude/skills/alphabyte-services/service-tracks.md` — service content reference

## Notes

### Props contract

```typescript
export interface ServicePageProps {
  eyebrow: string;
  h1: string;
  subhead: string;
  body: string[];
  primaryCta: {
    label: string;
    action: "modal" | "link";
    href?: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  stats: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
  ];
  thirtyDays: {
    weeks: { label: string; body: string }[];
    dayThirty: { label: string; body: string };
  };
  deliverables: {
    icon: string;
    title: string;
    body: string;
  }[];
  rightForYou: string[];
  notRightForYou: string[];
  timeline: string;
}
```

### Stat bar values across services (for reference, not hardcoded)
- Executive Enablement: "2 to 4 weeks" / "Day 1" / "Fast win"
- Citizen Development: "Week 3" / "2 to 12 weeks" / "Flagship"
- Discovery: "4 weeks" / "3" / "No decks"
- Data Readiness: "Week 2" / "5 dimensions" / "Zero"
- Infrastructure: "OAuth 2.0" / "Full audit" / "Production"

### Green/red tint colors
The PDF shows very subtle tinted backgrounds. Tailwind's `bg-green-50` (`#f0fdf4`) and `bg-red-50` (`#fef2f2`) are close matches. These are standard Tailwind colors, not custom tokens, which is acceptable for semantic fit/not-fit panels that don't map to the brand palette.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*

