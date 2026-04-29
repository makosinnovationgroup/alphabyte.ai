# Fix Contact Page Icon Treatments

## Status
Shipped

## Type
Refinement

## Enhances
- `prds/contact-page.md`

## Motivation
QA against the V8 PDF (page 19) identified two significant visual gaps in the contact info icon treatments. The circular icon containers use a near-invisible 10% opacity tint instead of the solid filled circles shown in the PDF, and the Office map pin uses blue instead of the red shown in the PDF. These are straightforward visual fidelity fixes that bring the implementation in line with the approved design.

## Summary
Update the three contact info icon containers on the Contact Us page to use solid filled backgrounds with white icons, matching the PDF. The Email and Phone icons get solid Alphabyte Blue backgrounds; the Office map pin gets a red background matching the PDF's distinct treatment.

## Changing
- Original: "Contact info icons use Alphabyte Blue circular icon treatments (email icon, phone icon, map pin icon)" with `bg-alphabyte-blue/10` and `text-alphabyte-blue`. Updated: Email and Phone icons use solid `bg-alphabyte-blue` with white icons; Office icon uses a red background (`bg-red-500` or equivalent) with a white icon, matching the PDF's distinct red pin treatment.

## Decided
- Email icon container: `bg-alphabyte-blue` background, white Mail icon
- Phone icon container: `bg-alphabyte-blue` background, white Phone icon
- Office icon container: red background (use `bg-red-500` as the closest match to the PDF's red pin — this is a one-off UI accent, not a brand color addition), white MapPin icon
- Icon containers remain 40px (h-10 w-10) rounded-full

## Open Questions
None

## Scope

### In scope
- Update the three contact info icon container styles in `src/app/contact/page.tsx`
- Change background from `bg-alphabyte-blue/10` to solid fills
- Change icon color from `text-alphabyte-blue` to `text-white` for all three
- Use red background for the Office/MapPin icon per PDF

### Out of scope
- Any other changes to the contact page layout, copy, form, or metadata
- Adding red as a brand token in `tailwind.config.ts` (this is a one-off UI treatment matching the PDF, not a new brand color)

## Pages & Components

### Modifying
- `src/app/contact/page.tsx` — update the three contact info icon container class strings

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
- The PDF shows three distinct circular icon containers at roughly 40px diameter
- Email and Phone use a solid Alphabyte Blue fill with white stroke icons inside
- Office uses a solid red fill with a white map pin icon — this matches a standard "location pin" color convention and is clearly intentional in the PDF
- The red is not a brand color; use Tailwind's built-in `bg-red-500` as a one-off. Do not add it to the brand token system.

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
- [ ] Email icon container uses solid `bg-alphabyte-blue` with white icon
- [ ] Phone icon container uses solid `bg-alphabyte-blue` with white icon
- [ ] Office icon container uses solid red background with white icon
- [ ] Icon containers are 40px circles (h-10 w-10 rounded-full)
- [ ] Visual match against PDF page 19 for the contact details section
- [ ] Parts of the feature not covered by this enhancement behave identically to before
- [ ] `pnpm build` and `pnpm typecheck` pass

## Related
- `prds/contact-page.md` (the feature being enhanced)
- `qa-reports/qa-contact-20260429T1200.md` (QA report that identified these findings)
- `design/Alphabyte_AI_Site_V8.pdf` page 19

## Notes
- The red map pin is a one-off design decision visible in the PDF. It follows a common UI convention (Google Maps, Apple Maps) where location pins are red. Since it's not a brand color, it's applied directly via Tailwind's default palette rather than being added to the brand token system.
- Minimal change — three class string updates in one file.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29*
