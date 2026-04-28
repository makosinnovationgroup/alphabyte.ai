# Data Readiness — V7 ServicePage Migration + Stats Bar

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/enhance-v6-fix-service-data-readiness.md`

## Motivation
The Data Readiness page was built as a hand-coded layout in V6 before the `ServicePage` component existed. Every other service detail page now uses `ServicePage` for layout consistency. V7 also adds a three-stat dark bar (Week 2 / 5 dimensions / Zero) between the hero CTA row and the 30-days box. This enhancement refactors the page onto the `ServicePage` component and adds the V7 stat bar, bringing Data Readiness into parity with Discovery, Executive Enablement, and Citizen Development.

## Summary
Replace the hand-built layout in `src/app/services/data-readiness/page.tsx` with the `ServicePage` component, passing all existing content as data props. Add the V7 three-stat dark bar. The visual output should be identical to the V7 PDF (page 6) and consistent with sibling service pages.

## Changing
- Original: Page renders its own breadcrumb, hero, 30-days box, deliverables, qualification panels, and timeline bar using inline JSX. Updated: Page uses the `ServicePage` component and passes all content as props — no inline layout markup.
- Original: No stat bar between hero and 30-days box. Updated: Three-stat dark bar with "Week 2", "5 dimensions", "Zero" values and their sub-labels.
- Original: Secondary CTA text is "Back to all services" with `text-muted-foreground` styling. Updated: Secondary CTA uses `← Back to all services` with `text-alphabyte-blue` styling (matching ServicePage and PDF).
- Original: Deliverables rendered with a small grey square icon placeholder. Updated: Deliverables rendered with emoji icons through ServicePage's icon prop, matching the pattern used by Discovery and other sibling pages.
- Original: CTA button uses `size="lg"`. Updated: Uses `size="md"` to match ServicePage's implementation.

## Decided
- The `ServicePage` component is the canonical layout. No structural divergence from it.
- Stat bar values from the PDF verbatim: "Week 2" / "When we find data problems — not month six", "5 dimensions" / "AI readiness scorecard: quality, governance, infrastructure, security, integration", "Zero" / "Surprises after your build begins".
- Deliverable icons will use emoji matching the subject matter, consistent with the pattern used on the Discovery page (emoji icons rendered via the `icon` ReactNode prop).
- Existing metadata, structured data (Service + BreadcrumbList JSON-LD), and SEO fields are preserved — they already pass the page checklist.
- The `"use client"` directive is not needed on the page file itself since `ServicePage` is already a client component; the page file remains a server component exporting metadata.

## Open Questions
None

## Scope

### In scope
- Refactor `src/app/services/data-readiness/page.tsx` to use `ServicePage` component
- Add three-stat dark bar with V7 content
- Align secondary CTA styling, deliverable icons, and button size to match ServicePage
- Preserve all existing verbatim copy, metadata, and structured data

### Out of scope
- Changes to the `ServicePage` component itself
- Changes to metadata, title, description, or structured data (already correct from V6 fix pass)
- OG image generation
- Changes to any other service page

## Pages & Components

### Modifying
- `src/app/services/data-readiness/page.tsx` — refactor from inline layout to `ServicePage` props; add stats bar data

### Creating
None

## Content

### Verbatim copy
New content from V7 PDF (stat bar only — all other copy unchanged from V6):
- Stat 1 value: "Week 2"
- Stat 1 label: "When we find data problems — not month six"
- Stat 2 value: "5 dimensions"
- Stat 2 label: "AI readiness scorecard: quality, governance, infrastructure, security, integration"
- Stat 3 value: "Zero"
- Stat 3 label: "Surprises after your build begins"

### Drafted at implement-time
- Deliverable emoji icons: select appropriate emoji for each of the five deliverables, following the Discovery page pattern

## Search Intent & SEO
N/A (no SEO impact — enhancement does not touch metadata, URLs, or indexable content). Existing metadata passes the page checklist from the V6 fix pass.

## Design Notes
The page must visually match PDF page 6 (rasterized at `/tmp/page-service-data-readiness-06.png`). The `ServicePage` component already implements the canonical layout for all service detail pages — breadcrumb, hero with eyebrow/h1/subhead/body/CTAs, dark stat bar, bordered 30-days box, deliverables with dividers, green/red qualification panels on grey background, and timeline footer. No custom layout code needed.

## Motion & Interactivity
Unchanged from original. ServicePage handles any hover/focus states.

## Impact

### Affected pages or components
None beyond the modifying list above. The `ServicePage` component is consumed, not modified.

### URL or routing changes
None

### Content backfill
None

## Acceptance Criteria
- [ ] Page renders using `ServicePage` component — no inline layout JSX in the page file
- [ ] Three-stat dark bar appears between CTA row and 30-days box with verbatim V7 content
- [ ] All body copy, timeline entries, deliverables, and qualification panel items match PDF page 6 verbatim
- [ ] Page visually matches `/tmp/page-service-data-readiness-06.png`
- [ ] Page is visually consistent with `/services/discovery/` (same component, same spacing, same section rhythm)
- [ ] Existing metadata, structured data, and canonical URL preserved
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean
- [ ] Parts of the feature not covered by this enhancement behave identically to before

## Related
- `prds/enhance-v6-fix-service-data-readiness.md` (the feature being enhanced)
- `prds/enhance-v6-service-data-readiness.md` (original V6 full build)
- `prds/service-page-component.md` (ServicePage component PRD)
- `prds/enhance-v7-service-discovery.md` (sibling V7 service page — reference implementation)

## Notes
The Discovery page (`src/app/services/discovery/page.tsx`) is the best reference for how to structure this file — it uses `ServicePage` with the exact same prop shape. The implementation is a data-mapping exercise, not a layout task.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*

