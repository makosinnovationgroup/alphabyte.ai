# Fix RecirQ Case Study SEO Metadata and Eyebrow Encoding

## Status
Shipped

## Type
Refinement

## Enhances
- `prds/case-study-recirq.md`

## Motivation
QA pass against PDF page 16 found the page visually and structurally correct but flagged two SEO metadata length violations: the title exceeds 60 characters and the meta description exceeds 160 characters. A separate code quality issue was identified where the eyebrow string uses `\u00b7` unicode escapes instead of literal `·` characters, inconsistent with the Sprinklermatic sibling page. These are quick fixes that bring the page into compliance with the SEO checklist.

## Summary
Shorten the meta title and description to meet SEO length limits, and replace unicode escapes in the eyebrow prop with literal middot characters for consistency.

## Changing
- Original: Meta title "RecirQ — Executive Productivity & Auction Analytics" (67 chars with suffix). Updated: shortened title under 60 chars with suffix.
- Original: Meta description at 191 chars. Updated: shortened description between 140–160 chars.
- Original: Eyebrow uses `\u00b7` unicode escapes. Updated: literal `·` characters matching Sprinklermatic pattern.

## Decided
- Title shortened to fit under 60 characters including the " — Alphabyte" template suffix (max 46 chars for the page-specific part)
- Description rewritten to 140–160 characters while preserving the key message (two parallel AI programmes, RecirQ)
- OG and Twitter title/description updated to match the new values
- Eyebrow string uses literal `·` characters: `"CASE STUDY · CIRCULAR ECONOMY · LIVE SMARTWATCH · RETAIL"`

## Open Questions
None

## Scope

### In scope
- Shorten `title` in the metadata export to under 60 chars (with suffix)
- Shorten `description` to 140–160 chars
- Update `openGraph.title`, `openGraph.description`, `twitter.title`, `twitter.description` to match
- Replace `\u00b7` escapes with literal `·` in the eyebrow prop

### Out of scope
- Any visual or structural changes to the page
- Body copy changes
- Sidebar content changes
- Component modifications
- Any change not identified in the QA report

## Pages & Components

### Modifying
- `src/app/our-work/recirq/page.tsx` — metadata fields and eyebrow prop

### Creating
None

## Content

### Verbatim copy
- Eyebrow: "CASE STUDY · CIRCULAR ECONOMY · LIVE SMARTWATCH · RETAIL" (with literal middot characters)

### Drafted at implement-time
- Meta title: draft at implement-time (must be under 46 chars so total with " — Alphabyte" suffix stays under 60)
- Meta description: draft at implement-time (140–160 chars, brand voice)
- OG/Twitter description: draft at implement-time (match or shorten the meta description)

## Search Intent & SEO
- **Target query:** Inherits from original
- **URL slug:** Unchanged
- **Meta title:** Shortened to under 60 chars (with suffix)
- **Meta description:** Shortened to 140–160 chars
- **Structured data:** Unchanged
- **OG image:** Unchanged

## Design Notes
No visual changes. Defer to alphabyte-brand skill defaults.

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
- [ ] Title renders under 60 characters (including " — Alphabyte" suffix)
- [ ] Meta description is 140–160 characters
- [ ] OG and Twitter metadata updated to match new title and description
- [ ] Eyebrow uses literal `·` characters, not unicode escapes
- [ ] All other page content unchanged from original implementation
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean
- [ ] Passes seo/page-checklist.md for the title and description length rules

## Related
- `prds/case-study-recirq.md` (the feature being enhanced)
- `qa-reports/qa-case-study-recirq-20260429T0930.md` (QA report that identified these findings)

## Notes
Minimal change — metadata string edits and one prop encoding fix. No structural or visual impact.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29*
