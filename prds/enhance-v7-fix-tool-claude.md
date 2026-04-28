# Fix Tool Claude — Content Width and Em Dash Rendering

## Status
Shipped

## Type
Refinement

## Enhances
- `prds/enhance-v7-tool-claude.md`

## Motivation
QA against design/Alphabyte_AI_Site_V7.pdf page 8 identified blockers and significant gaps in the implementation at /tools/claude. The most visible issue: the ToolPage component uses `max-w-7xl` (1280px) content containers while the service pages (and the PDF reference) use `max-w-[1600px]`. This makes the tool page noticeably narrower than sibling pages. Additionally, the "In active use today" section title renders a literal `\u2014` instead of an em dash.

## Summary
Widen the ToolPage component's content containers from `max-w-7xl` to `max-w-[1600px]` to match the service pages. Fix the em dash rendering in the section title.

## Changing
- Original: ToolPage uses `max-w-7xl` (1280px) for all content containers. Updated: `max-w-[1600px]` to match ServicePage and the PDF reference.

## Decided
- Replace every `max-w-7xl` in `src/components/tool-page.tsx` with `max-w-[1600px]`
- Replace the literal `\u2014` in the `inActiveUseSectionTitle` prop with the actual em dash character `—`

## Open Questions
None

## Scope

### In scope
- Update `max-w-7xl` → `max-w-[1600px]` in `src/components/tool-page.tsx` (all occurrences)
- Fix em dash in `inActiveUseSectionTitle` prop in `src/app/tools/claude/page.tsx`

### Out of scope
- Any other content or layout changes beyond width and the em dash fix
- Changes to other tool detail pages (they inherit the width fix via the shared component)

## Pages & Components

### Modifying
- `src/components/tool-page.tsx` — widen all `max-w-7xl` containers to `max-w-[1600px]`
- `src/app/tools/claude/page.tsx` — fix em dash character in `inActiveUseSectionTitle` prop

### Creating
None

## Content

### Verbatim copy
- In active use section title: "In active use today — what we built, what it produced"

### Drafted at implement-time
None

## Search Intent & SEO
N/A (no SEO impact — enhancement does not touch metadata, URLs, or indexable content)

## Design Notes
The `max-w-[1600px]` value matches the service pages, header, and footer — established in recent commits as the site-wide content constraint.

## Motion & Interactivity
Unchanged from original.

## Impact

### Affected pages or components
- All four tool detail pages (`/tools/claude/`, `/tools/mcp/`, `/tools/custom-ai-agents/`, `/tools/on-premise-llm/`) inherit the width change via the shared `ToolPage` component

### URL or routing changes
None.

### Content backfill
None.

## Acceptance Criteria
- [ ] ToolPage content containers use `max-w-[1600px]`, matching ServicePage
- [ ] Page content width visually matches the PDF reference and service pages
- [ ] "In active use today" section heading renders with an em dash, not literal `\u2014`
- [ ] All other page content unchanged
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes

## Related
- `prds/enhance-v7-tool-claude.md` (the feature being enhanced)
- `qa-reports/qa-tool-claude-20260428T1502.md` (QA report)

## Notes
- The width fix applies to the shared component, so all four tool pages benefit.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28*
