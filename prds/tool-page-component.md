# ToolPage Component

## Status
Shipped

## Type
New component

## Summary
A reusable React component that renders the canonical tool detail page layout from the V7 design. Four tool pages (Claude, MCP, Custom AI Agents, On-Premise LLM) share a core structure with different combinations of optional sections. This component is the data-driven primitive they all consume — no hardcoded strings, every section conditionally rendered based on props.

## Decided
- File location: `src/components/tool-page.tsx` (matches `service-page.tsx` convention)
- Component name: `ToolPage`, exported alongside `ToolPageProps` interface
- Uses `"use client"` directive (same as ServicePage — uses DiscoveryCallButton which requires client context)
- Primary CTA uses `DiscoveryCallButton` with `variant="dark"` and `size="md"` (same pattern as ServicePage)
- Closing CTA section's "Book a Discovery Call" button also wires through `DiscoveryCallButton`
- Breadcrumb included as a required prop — all four PDF pages show breadcrumbs (Home / Tools / \<name\>)
- Right-for-you / Not-right-for-you panels replicate ServicePage styling inline (green check / red x, emerald-50 / red-50 backgrounds, lucide-react `Check` and `X` icons). No sub-component extraction in this PRD.
- Icons in deliverables are emoji strings rendered inline, not React nodes — simpler than ServicePage's `ReactNode` approach since the PDFs show only emoji
- Partner card uses `bg-foreground` (dark) background with white text and a teal star prefix on the eyebrow
- "In active use today" section title is a configurable string prop (page 8 uses a longer variant than pages 9-10)
- Deliverables grid layout (Claude) uses `md:grid-cols-2` with horizontal hairline separators between rows, no vertical separators
- Deliverables list layout (others) uses single column with hairline separators between items
- Secondary CTA renders as a plain text link with left arrow entity (`&larr;`), matching ServicePage pattern

## Open Questions
None

## Scope

### In scope
- `ToolPage` component with full TypeScript props interface
- Breadcrumb navigation band (matching ServicePage breadcrumb pattern)
- Hero section: eyebrow, h1, subhead, body paragraphs — full-width when no sidebar, two-column when `partnerCard` is present
- Primary CTA + optional secondary CTA row
- Optional right sidebar: partner card + "Used across all services" link list
- Deliverables section with configurable title and `grid` or `list` layout
- Optional "In active use today" cards section (3-card grid with eyebrow + title + body)
- Optional right-for-you / not-right-for-you qualification panels
- Optional bottom closing CTA section (centered heading + subhead + discovery call button)
- All sections conditionally rendered based on prop presence
- `pnpm build` and `pnpm typecheck` pass after implementation

### Out of scope
- Building the four tool detail pages (those come via `/page` invocations)
- Content or data files for any specific tool
- Routing, metadata, structured data, sitemap entries — page-level concerns
- Mobile-specific tweaks beyond natural responsive behavior of the grid/flex patterns
- Refactoring ServicePage to share sub-components with ToolPage (noted as follow-up)
- OG images or SEO metadata
- Breadcrumb JSON-LD structured data (page-level concern, not component-level)

## Pages & Components

### Modifying
None

### Creating
- `src/components/tool-page.tsx` — the reusable ToolPage component and ToolPageProps type export

## Content

### Verbatim copy
None — all copy is data-driven via props. No strings are hardcoded in the component.

### Drafted at implement-time
N/A — this is a layout component with no content of its own.

## Search Intent & SEO
N/A (new component, no new routes)

## Design Notes

**Source of truth:** `design/Alphabyte_AI_Site_V7.pdf` pages 8, 9, 10, 11. Rasterize with `pdftoppm -r 200 -f 8 -l 11 -png design/Alphabyte_AI_Site_V7.pdf /tmp/tool-page-ref` and view all four before coding.

**Section presence matrix (verified against rasterized PDFs):**

| Section | Claude (p8) | MCP (p9) | Custom AI Agents (p10) | On-Premise LLM (p11) |
|---|---|---|---|---|
| partnerCard | yes | no | no | no |
| usedAcrossServices | yes | no | no | no |
| deliverables (grid) | yes | no | no | no |
| deliverables (list) | no | yes | yes | yes |
| inActiveUse | yes | yes | yes | no |
| rightForYou panels | no | no | yes | yes |
| closingCTA | no | yes | yes | yes |

**Breadcrumb:** Same pattern as ServicePage — `border-b border-border-default bg-canvas` band with the breadcrumb trail. All four pages show it.

**Two-column hero (Claude only):** When `partnerCard` is present, hero content (eyebrow through CTAs) sits in the left column (~60% width) and the partner card + service list sits in the right column (~40% width). On pages without `partnerCard`, hero is full-width single-column. Use `md:grid-cols-[3fr_2fr]` or similar for the two-column split, collapsing to single column on mobile.

**Partner card (page 8):** Dark background (`bg-foreground`), rounded corners. Eyebrow in teal with star prefix ("★ CLAUDE PARTNER"). Body text in white. Below the card, a "USED ACROSS ALL SERVICES" label (uppercase, `text-body-sm`, `tracking-brand-wide`) followed by a vertical link list — each link in `text-alphabyte-blue`.

**Deliverables grid (page 8):** Two columns, three rows. Each cell has an emoji icon, bold title, and body text. Horizontal hairline separators between rows (`border-border-default`). No vertical separators. Section title uses the eyebrow heading pattern: uppercase, `text-body-sm`, `font-bold`, `tracking-brand-wide`, `text-alphabyte-blue`, with a horizontal rule extending to the right.

**Deliverables list (pages 9-11):** Single column, vertical stack. Each item has an emoji icon (left), bold title + body text (right). Hairline separators between items. Same eyebrow heading pattern as grid.

**"In active use today" cards (pages 8-10):** Three cards in a row (`md:grid-cols-3`). Each card has a multi-segment eyebrow (uppercase, `text-body-sm`, `tracking-brand-wide`, `text-muted-foreground`), bold title, and body text. Cards sit on a dark background band (`bg-foreground`), with white text. The eyebrow text is in `text-alphabyte-blue`.

**Right-for-you / Not-right-for-you (pages 10-11):** Match ServicePage styling exactly — two-column grid on `bg-alphabyte-grey/50`, green check icons in emerald-50 boxes, red X icons in red-50 boxes, with the same eyebrow heading + horizontal rule pattern.

**Closing CTA (pages 9-11):** Centered section with `border-t border-border-default` above. Heading in `text-headline`, subhead in `text-body text-muted-foreground`, and a `DiscoveryCallButton variant="dark" size="md"` centered below.

**Spacing rhythm:** Match ServicePage's spacing tokens: `px-6 md:px-10 lg:px-16` for horizontal padding, `py-12 md:py-16` for standard sections, `pb-16 md:pb-24` for larger sections. Max content width `max-w-7xl mx-auto`.

## Motion & Interactivity
None — static layout component. CTA buttons use existing `DiscoveryCallButton` click behavior (opens modal). No scroll animations, no hover effects beyond what buttons and links already provide.

## Acceptance Criteria
- [ ] Component renders all four tool page layouts correctly when given the appropriate props (verified by visual comparison against PDF pages 8-11)
- [ ] Two-column hero layout activates only when `partnerCard` is present; otherwise single-column
- [ ] Partner card renders dark background with teal star eyebrow and white body text
- [ ] "Used across all services" link list renders only when `usedAcrossServices` is present
- [ ] Deliverables render as 2-column grid when `deliverablesLayout === 'grid'`
- [ ] Deliverables render as single-column list when `deliverablesLayout === 'list'`
- [ ] "In active use today" section renders only when `inActiveUse` prop is passed
- [ ] Right-for-you / Not-right-for-you panels render only when those props are passed
- [ ] Closing CTA section renders only when `closingCTA` prop is passed
- [ ] Primary CTA (hero) opens the Discovery Call modal when `action === 'modal'`
- [ ] Closing CTA button opens the Discovery Call modal
- [ ] All copy is data-driven; no hardcoded strings in the component
- [ ] TypeScript types (`ToolPageProps`) exported alongside the component
- [ ] `pnpm build` passes without errors
- [ ] `pnpm typecheck` passes without errors
- [ ] Implementation report states whether any ServicePage sub-components were reused, or if duplication was chosen (with reason)
- [ ] Visuals pass alphabyte-brand/component-rules.md review (brand tokens only, no inline hex, correct button variants)

## Related
- `src/components/service-page.tsx` — existing layout component with similar patterns (breadcrumb, right-for-you panels, CTA row). Follow-up: extract shared sub-components if both components stabilize with the same markup.
- `prds/service-page-component.md` — PRD for the ServicePage component
- `design/Alphabyte_AI_Site_V7.pdf` pages 8-11 — source of truth for layout and content structure

## Notes
- The "In active use today" section on page 8 has a longer title ("IN ACTIVE USE TODAY — WHAT WE BUILT, WHAT IT PRODUCED") than pages 9-10 ("IN ACTIVE USE TODAY"). The section title is therefore a configurable prop (`inActiveUseSectionTitle`), not hardcoded.
- Page 8 (Claude) does not show a secondary CTA ("Back to all tools") — the `secondaryCta` prop is optional and absent for Claude.
- The deliverables `icon` prop is typed as `string` (emoji) rather than `ReactNode` (which ServicePage uses). The PDFs show only emoji icons for tool pages. If a future tool page needs a custom icon component, the type can be widened then.
- ServicePage sub-component extraction is a natural follow-up once both components are stable. The right-for-you/not-right-for-you panels, breadcrumb band, and CTA row are near-identical between the two. This PRD deliberately duplicates rather than refactors to keep scope bounded.

## Props Reference

```typescript
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ToolPageProps {
  breadcrumb: BreadcrumbItem[];
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
  partnerCard?: {
    eyebrow: string;
    body: string;
  };
  usedAcrossServices?: {
    label: string;
    href: string;
  }[];
  deliverablesSectionTitle: string;
  deliverablesLayout: "grid" | "list";
  deliverables: {
    icon: string;
    title: string;
    body: string;
  }[];
  inActiveUseSectionTitle?: string;
  inActiveUse?: {
    eyebrow: string;
    title: string;
    body: string;
  }[];
  rightForYou?: string[];
  notRightForYou?: string[];
  closingCta?: {
    heading: string;
    subhead: string;
    cta: { label: string; action: "modal" };
  };
}
```

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*
*Shipped: 2026-04-28*
