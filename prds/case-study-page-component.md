# CaseStudyPage Component

## Status
Shipped

## Type
New component

## Summary
A reusable `<CaseStudyPage>` component that renders the canonical case study detail page layout from the V7 design. Two case study pages (Sprinklermatic, RecirQ) share this structure with different data, and Housing Services Corp will become a third instance once OQ5 resolves. The component is data-driven: all copy, stats, sidebar content, and CTA text are passed as props.

## Decided
- File location: `src/components/case-study-page.tsx`
- Component name: `CaseStudyPage`, with all prop types exported
- Dark hero band uses `bg-foreground` (black) with white text — this differs from ServicePage/ToolPage which use light hero bands
- Breadcrumb renders inside the dark hero band (not above it like ServicePage/ToolPage)
- Stats grid renders on a light background below the hero, with teal (`text-alphabyte-blue`) values, hairline vertical separators between the four columns
- Two-column body layout: left ~65%, right ~35%
- Callout sections (e.g. "The Challenge") use a 4px left border in `border-alphabyte-blue` with increased left padding
- Sidebar eyebrows use uppercase `tracking-brand-wide` treatment
- Pull-quote renders in a subtle bordered container with italic text
- Closing CTA section wires through `DiscoveryCallButton` from `src/components/discovery-call-button.tsx`
- Tag pills: `rounded-full`, thin `border-alphabyte-blue` border, transparent background, small white text on dark hero
- Body array supports three section types: `heading`, `paragraph`, `callout`
- No hardcoded strings in the component — all copy comes from props
- No shared sub-component extraction from ServicePage/ToolPage in this PRD (see Notes for rationale)

## Open Questions
None

## Scope

### In scope
- `CaseStudyPage` component with full TypeScript prop types
- Dark hero band: breadcrumb, eyebrow, h1, subhead, tag pills
- Stats grid: 4-stat row with teal values, hairline separators
- Two-column body: left column renders `BodySection[]` (heading/paragraph/callout), right column renders sidebar (client info, services delivered, technology, pull-quote)
- Closing CTA section: centered heading, subhead, "Book a Discovery Call" button wired to the discovery call modal
- Visual fidelity against PDF pages 15 and 16

### Out of scope
- Building the actual Sprinklermatic, RecirQ, or Housing Services Corp detail pages (those come via `/page` invocations)
- Mobile-specific tweaks beyond basic responsive stacking
- Data files or content for any specific case study
- Routing, metadata, structured data, OG images (page-level concerns)
- Refactoring ServicePage or ToolPage to share sub-components with CaseStudyPage
- Sticky sidebar behavior on scroll
- Photography or image support within the body content

## Pages & Components

### Modifying
None

### Creating
- `src/components/case-study-page.tsx` — reusable case study detail layout component

## Content

### Verbatim copy
None — all copy is passed as props by consuming pages.

### Drafted at implement-time
None — this is a data-driven component with no internal copy.

## Search Intent & SEO
N/A (new component, not a new route)

## Design Notes

The case study layout is structurally distinct from ServicePage and ToolPage:

**Dark hero band:** Full-width `bg-foreground` (black) section containing breadcrumb, eyebrow, h1, subhead, and tag pills. Text is white. Eyebrow text uses `text-alphabyte-blue` and uppercase `tracking-brand-wide`. This is the only page type with a dark hero in the V7 design.

**Tag pills in hero:** `rounded-full`, thin `border-alphabyte-blue` border, transparent background, `text-body-sm text-white`. Horizontal wrap. Renders regardless of pill count (both case studies use 5).

**Stats grid:** Light background, four columns separated by hairline vertical borders (`border-border-default`). Each stat has a large teal value (`text-alphabyte-blue`, `text-headline` or similar display weight) and a smaller muted descriptor below (`text-muted-foreground`, `text-body-sm`).

**Two-column body:** Left column ~65% width contains the `body[]` array rendered in order. Right column ~35% contains the sidebar. On mobile, columns stack (sidebar below body content).

**Callout treatment:** Left-bordered block with 4px `border-l-4 border-alphabyte-blue`, increased left padding, rendered as a `<blockquote>`. Used for "The Challenge" sections.

**Sidebar structure:** Four blocks stacked vertically:
1. CLIENT — eyebrow + client name (bold) + meta line (muted)
2. SERVICES DELIVERED — eyebrow + bullet list
3. TECHNOLOGY — eyebrow + bullet list
4. Pull-quote — italic text in a bordered container (`border border-border-default rounded-md p-6`), with quotation marks

All sidebar eyebrows: uppercase, `text-body-sm`, `tracking-brand-wide`, `text-muted-foreground`.

**Closing CTA:** Centered below the body, separated by a top hairline. Heading uses `text-headline tracking-brand-snug`. Subhead in muted text. Button is `DiscoveryCallButton variant="dark" size="md"`.

## Motion & Interactivity
None — purely static content rendering. Button hover states come from the existing `DiscoveryCallButton` component.

## Acceptance Criteria
- [ ] Component renders the Sprinklermatic layout correctly when given page 15 data
- [ ] Component renders the RecirQ layout correctly when given page 16 data
- [ ] Dark hero band: breadcrumb, eyebrow, h1, subhead, and tag pills render on `bg-foreground` with white text
- [ ] Tag pills render with teal borders and transparent background, wrapping horizontally for any pill count
- [ ] Stats grid renders 4 stats in a row with teal values and hairline vertical separators
- [ ] Body array renders heading, paragraph, and callout types in order with correct styling
- [ ] Callout sections render with a left teal border and increased left padding
- [ ] Sidebar renders client, services delivered, technology, and pull-quote in fixed order
- [ ] Sidebar eyebrows use uppercase tracking-wide treatment
- [ ] Pull-quote renders in a bordered container with italic text
- [ ] Closing CTA heading and subhead are data-driven (not hardcoded)
- [ ] "Book a Discovery Call" button opens the Discovery Call modal
- [ ] No hardcoded strings in the component
- [ ] All TypeScript types are exported alongside the component
- [ ] `pnpm build` passes
- [ ] `pnpm typecheck` passes
- [ ] Visuals pass alphabyte-brand/component-rules.md review
- [ ] Implementation report states whether any ServicePage or ToolPage sub-components were reused, or if duplication was chosen (with reason)

## Related
- `prds/tool-page-component.md` — analogous reusable component for tool detail pages
- `prds/service-page-component.md` — analogous reusable component for service detail pages
- `src/components/service-page.tsx` — existing ServicePage component (shares breadcrumb pattern, CTA pattern)
- `src/components/tool-page.tsx` — existing ToolPage component (shares closingCta pattern)
- `design/Alphabyte_AI_Site_V7.pdf` pages 15–16 — source of truth
- `.claude/skills/alphabyte-services/proof-points.md` — public-safe framing rules for case study content (applies to consuming pages, not this component)

## Notes

**Sub-component reuse decision:** ServicePage and ToolPage both implement their own breadcrumb rendering and CTA patterns inline. The breadcrumb in CaseStudyPage differs visually (light text on dark background vs. dark text on light background), so sharing isn't a direct extract. The closingCta pattern from ToolPage is structurally identical to what CaseStudyPage needs, but it's ~10 lines of JSX — extracting a shared component for that saves nothing and adds indirection. The right follow-up is a single shared `<Breadcrumb>` component that accepts a `variant` prop ("light" | "dark"), and possibly a shared `<ClosingCta>` section — but that refactor touches three files and belongs in its own PRD.

**Prop design:** The `body` array uses a discriminated union (`type: 'heading' | 'paragraph' | 'callout'`) rather than accepting `ReactNode` children. This keeps the component data-driven and makes it possible for consuming pages to define their content as plain data objects rather than JSX trees. If richer content is needed later (e.g. inline links, bold text within paragraphs), the `text` field can be changed to `ReactNode` without breaking the type discriminator.

**Stats count:** Both case studies have exactly 4 stats. The component should render whatever is passed but the visual grid is optimized for 4 columns. Other counts are out of scope.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29 (shipped)*
