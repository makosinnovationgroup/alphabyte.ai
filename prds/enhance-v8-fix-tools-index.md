# Fix Tools Index Visual Gaps

## Status
Shipped

## Type
Refinement

## Enhances
- `prds/tools-index.md`

## Motivation
QA against the V8 PDF (page 20) and direct user comparison of live screenshots vs the design identified six visual discrepancies in the tools index page. The h1 was rendered at display scale instead of headline scale, the green accent color on the second headline line was missing, spacing was too generous throughout, and the three-stat bar had wrong headline colors and overly prominent dividers. These are all cases where the implementation diverged from the approved design.

## Summary
Six visual fixes to the tools index hero, stat bar, and section spacing to match the V8 PDF and user-provided comparison screenshots.

## Changing
- Original: H1 uses `text-display tracking-brand-tight`. Updated: H1 uses `text-headline tracking-brand-snug` with `max-w-2xl` so "We don't sell platforms." fits on one line at desktop width.
- Original: "We build with what actually works." rendered in default foreground color. Updated: wrapped in `text-alphabyte-green` span per PDF.
- Original: Hero section padding `pt-16 pb-16 md:pt-24 md:pb-20`. Updated: `pt-10 pb-10 md:pt-14 md:pb-12` to match tighter PDF rhythm.
- Original: Stat bar headlines in `text-white`. Updated: `text-alphabyte-blue` per PDF.
- Original: Stat bar dividers using `md:divide-x md:divide-white/20` on grid. Updated: flex layout with `border-l border-white/[0.08]` for full-height, subtle dividers.
- Original: Section padding `py-16 md:py-24` on card grid and layer sections. Updated: `py-12 md:py-16` across all content sections.

## Decided
- Body text container uses `max-w-[55ch]` (widened slightly from original `max-w-[52ch]` interim value)
- Stat bar uses flex layout instead of grid so border-l spans full item height
- Stat bar description text uses `text-white/50` (reduced from `text-white/60`)
- Bottom CTA section padding reduced to `py-12 md:py-16`

## Open Questions
None

## Scope

### In scope
- H1 font size reduction from display to headline scale
- Green accent on "We build with what actually works."
- Hero vertical padding reduction
- Stat bar headline color change to Alphabyte Blue
- Stat bar divider opacity reduction and full-height rendering
- Section padding reduction across card grid, layer breakdown, and bottom CTA

### Out of scope
- Cosmetic QA finding (og:type meta tag missing — site-wide Next.js behavior)
- Any changes to tool card content, layout, or styling
- Any changes to the layer breakdown section styling
- Changes to metadata or structured data

## Pages & Components

### Modifying
- `src/app/tools/page.tsx` — all six visual fixes applied to hero, stat bar, and section containers

### Creating
None

## Content

### Verbatim copy
None — no copy changes.

### Drafted at implement-time
None

## Search Intent & SEO
N/A (no SEO impact — enhancement does not touch metadata, URLs, or indexable content)

## Design Notes
- H1 at `text-headline tracking-brand-snug` matches the PDF where the headline is moderate-sized, not the massive display scale
- The green accent on the second line of the h1 matches the PDF's teal/green treatment on "We build with what actually works."
- Stat bar dividers at `border-white/[0.08]` are barely visible — matching the PDF where dividers are extremely subtle, nearly invisible separating lines
- Using flex instead of grid for the stat bar ensures `border-l` spans the full height of each item, matching the PDF where dividers touch top and bottom edges of the dark bar

## Motion & Interactivity
Unchanged from original.

## Impact

### Affected pages or components
None beyond the modifying list above.

### URL or routing changes
None.

### Content backfill
None.

## Acceptance Criteria
- [ ] H1 renders at headline scale with "We don't sell platforms." on one line at desktop
- [ ] "We build with what actually works." renders in `text-alphabyte-green`
- [ ] Hero spacing is visibly tighter than before, matching PDF density
- [ ] Stat bar headlines render in Alphabyte Blue, not white
- [ ] Stat bar dividers are subtle (near-invisible) and span full section height
- [ ] Section spacing is tighter across all sections
- [ ] Parts of the feature not covered by this enhancement behave identically to before
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` passes
- [ ] Visuals pass alphabyte-brand/component-rules.md review

## Related
- `prds/tools-index.md` (the feature being enhanced)
- `qa-reports/qa-tools-index-20260429-1442.md` (QA report identifying the gaps)
- `design/Alphabyte_AI_Site_V8.pdf` page 20 (source of truth)

## Notes
All six fixes are CSS/className changes in a single file. No structural or content changes.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29*
