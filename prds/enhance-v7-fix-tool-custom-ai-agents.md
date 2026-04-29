# Fix Custom AI Agents Title Length for SERP Compliance

## Status
Shipped

## Type
Refinement

## Enhances
- `prds/enhance-v7-tool-custom-ai-agents.md`

## Motivation
QA against the V7 design (PDF page 10) flagged that the full rendered `<title>` for the Custom AI Agents page is 68 characters — 8 over the 60-character SERP display limit specified in `seo/page-checklist.md` §1. The page-level title "Custom AI Agents — Autonomous Workflows with HITL Gates" is 55 characters, but the root layout template appends " — Alphabyte" (13 characters), pushing the total past 60. Shortening the page-level title keeps the full rendered title within SERP display limits and prevents truncation in search results.

## Summary
Shorten the page-level meta title (and its OG/Twitter variants) so the full rendered title including the " — Alphabyte" suffix stays under 60 characters.

## Changing
- Original: Meta title is "Custom AI Agents — Autonomous Workflows with HITL Gates" (55 chars, 68 with suffix). Updated: Meta title shortened to fit under 47 characters so the full title with " — Alphabyte" suffix stays under 60.

## Decided
- New page-level title: "Custom AI Agents — Task Automation" (34 chars; 47 with suffix). Retains the page subject and primary value prop while staying well under the 60-char limit.
- OG title updated to match the new page-level title for consistency.
- Twitter title updated to match.
- OG description and Twitter description unchanged — they are already within length limits.
- Meta description unchanged.

## Open Questions
None

## Scope

### In scope
- Shorten the `title` field in the page's `metadata` export
- Update `openGraph.title` and `twitter.title` to match

### Out of scope
- Changes to page content, layout, or the ToolPage component
- Changes to meta description or structured data
- Changes to other tool pages (even if they have the same title length issue)
- OG image changes

## Pages & Components

### Modifying
- `src/app/tools/custom-ai-agents/page.tsx` — update title in metadata, openGraph, and twitter fields

### Creating
None

## Content

### Verbatim copy
- Meta title: "Custom AI Agents — Task Automation"
- OG title: "Custom AI Agents — Task Automation"
- Twitter title: "Custom AI Agents — Task Automation"

### Drafted at implement-time
None

## Search Intent & SEO
- **Target query:** Inherits from original
- **URL slug:** Unchanged
- **Meta title:** "Custom AI Agents — Task Automation" (34 chars; 47 with " — Alphabyte" suffix)
- **Meta description:** Unchanged
- **Structured data:** Unchanged
- **OG image:** Unchanged

## Design Notes
Defer to alphabyte-brand skill defaults; no enhancement-specific visual direction. This is a metadata-only change.

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
- [ ] Full rendered title (including " — Alphabyte" suffix) is under 60 characters
- [ ] OG title and Twitter title match the new page-level title
- [ ] Meta description unchanged
- [ ] Structured data unchanged
- [ ] Page builds without errors (`pnpm build` succeeds)
- [ ] No TypeScript errors (`pnpm typecheck` clean)
- [ ] Passes seo/page-checklist.md for the Custom AI Agents page
- [ ] Parts of the feature not covered by this enhancement behave identically to before

## Related
- `prds/enhance-v7-tool-custom-ai-agents.md` (the feature being enhanced)
- `qa-reports/qa-tool-custom-ai-agents-20260428T2015.md` (QA report that identified the finding)

## Notes
The original title was inherited from the stub page shipped with `prds/tools.md`. The same title length pattern may apply to other tool pages — check Claude, MCP, and On-Premise LLM titles if doing a sweep, but those are out of scope for this fix PRD.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*
