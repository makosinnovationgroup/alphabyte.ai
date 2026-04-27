# Site Footer: Option C Light Theme

## Status
Shipped

## Type
Refinement

## Enhances
- `prds/site-footer.md`

## Motivation
The site footer was built against the dark Ventures aesthetic decided on 2026-04-24. The CEO has since chosen Option C — a light theme with structured layout — as the visual direction for alphabyte.ai. The header has already been re-themed to Option C (see `prds/enhance-site-header-option-c.md`). The footer now looks out of place: a black-surfaced component on a light-themed site. This enhancement brings the footer into alignment with the rest of the page so the site reads as one coherent visual system.

## Summary
Re-theme the site footer from dark to light per Option C. Replace the SVG logo with the same inline "Alphabyte · AI" wordmark used in the header. Shift all text from white-on-black to the Option C surface palette (foreground text on an off-white canvas surface). Remove the "Get started" CTA button — page-level CTAs handle conversion in Option C; the footer is a navigation surface, not a sales surface. The copyright year already uses `new Date().getFullYear()` and stays as-is.

## Changing
- Original: dark surface (`bg-black`) footer with white text. Updated: light surface (`bg-canvas`) footer with `text-foreground` text, separated from page content by `border-t border-border-default`.
- Original: `alphabyte-logo-white.svg` rendered as an `<img>` element, linking to `/`. Updated: inline typographic wordmark — "Alphabyte" in `text-foreground` + interpunct + "AI" in `text-alphabyte-blue`, matching the header's wordmark treatment exactly.
- Original: footer CTA "Get started" button (`variant="inverse"`) linking to `/contact/`. Updated: removed entirely. Page-level CTAs handle conversion in Option C; a footer CTA would be duplicative.
- Original: column heading style `text-white`, link style `text-white/60` with `hover:text-alphabyte-blue`. Updated: column headings use `text-foreground`, links use `text-foreground` with `hover:text-alphabyte-blue`.
- Original: legal row border `border-white/10`, copyright `text-white/40`, legal links `text-white/40` with `hover:text-alphabyte-blue`. Updated: legal row border `border-border-default`, copyright `text-muted-foreground`, legal links `text-muted-foreground` with `hover:text-alphabyte-blue`.
- Original: address text `text-white/60`. Updated: address text `text-muted-foreground`.
- Original: social link style `text-white/60` with `hover:text-alphabyte-blue`. Updated: social links `text-foreground` with `hover:text-alphabyte-blue`, matching the nav column links.

## Decided
- **Footer surface:** `bg-canvas` with `border-t border-border-default` top separator. The off-white surface matches the page background; the top border provides the visual break that the dark-to-light contrast previously handled.
- **Wordmark implementation:** Same exact treatment as the header — `text-xl font-medium tracking-brand-snug`, "Alphabyte" in `text-foreground`, interpunct `·` (U+00B7) in `text-muted-foreground` with `mx-1.5`, "AI" in `text-alphabyte-blue`. Wrapped in `<Link href="/">` with `aria-label="Alphabyte AI"`. Matching the header for consistency.
- **Footer CTA: removed.** Page-level CTAs already handle conversion in Option C (e.g., "Not sure where you fit? Book a Strategy Sprint" sections at the end of pages). A footer CTA would make the footer feel like a sales surface rather than navigation. This is a deliberate exclusion, revisitable via a future `/enhancement` if needed.
- **Newsletter signup: NOT included.** Alphabyte has no newsletter program and no email service configured. Adding a non-functional signup form would damage credibility. Revisit via a future `/enhancement` once a newsletter program exists.
- **Copyright year:** already uses `new Date().getFullYear()` — no change needed. Verified in the shipped code.
- **Address:** renders on two lines ("155 Winges Road" / "Vaughan, ON") as it does currently. Two lines reads cleanest in the column width.
- **Socials:** LinkedIn + Bluesky with parent company URLs, unchanged.
- **Legal links:** Terms, Privacy, Cookies routes unchanged. Will 404 until those pages ship — accepted state.
- **Column visual distinction:** Column headings use `font-bold uppercase tracking-brand-wide` to differentiate from items beneath. Items use normal weight. The distinction is set by font weight and case, not color — both use `text-foreground`.
- **Blog in footer:** The header enhancement added Blog to `navigation.ts`. The footer filters nav items by label (Services, Tools, Case Studies) for its columns, so Blog does not appear in an unexpected column. Verify during implementation; if Blog leaks into the footer grid, scope a small fix.

## Open Questions
None

## Scope

### In scope
- Footer background shift: `bg-black` to `bg-canvas` with top border
- Logo replacement: SVG `<img>` to inline typographic wordmark matching header
- All text color shifts: white-on-dark to Option C surface palette
- Hover state updates: existing dark-theme hover to `text-foreground` → `text-alphabyte-blue`
- Legal row re-theme: border, copyright, and link colors
- Address block re-theme: text colors
- Social links re-theme: text and icon colors
- CTA button removal (the "Get started" `variant="inverse"` button and its `<Link>`)
- Import cleanup: remove unused `Button` import and `alphabyte-logo-white.svg` reference

### Out of scope
- Newsletter signup (deliberate non-addition — no email service exists)
- Footer CTA replacement (deliberate removal — page-level CTAs handle conversion)
- Column structure changes (Address / Services / Tools / Case Studies / Company / Connect stays as-is)
- Link items, slugs, or labels (all unchanged)
- Footer data file changes (`src/lib/footer-data.ts` content stays as-is)
- New routes or pages
- Mobile layout changes beyond the color re-theme (column stacking behavior stays as-is)

## Pages & Components

### Modifying
- `src/components/footer.tsx` — full re-theme: background, text colors, logo replacement, CTA removal, hover states, legal row

### Creating
None

## Content

### Verbatim copy
- Wordmark text: "Alphabyte" + interpunct + "AI" (same as header)
- All other copy unchanged from original — column headings, link labels, address, social labels, copyright format, legal link labels all inherit.

### Drafted at implement-time
None — no copy changes beyond the wordmark, which is specified above.

## Search Intent & SEO
N/A (no SEO impact — enhancement does not touch metadata, URLs, or indexable content. The footer is a component, not a page.)

## Design Notes
- **Surface:** `bg-canvas` footer on a `bg-canvas` page. The `border-t border-border-default` top border provides the visual separation that the dark/light contrast previously handled. This is the same pattern used by the header's bottom border.
- **Wordmark:** Identical to the header. Geist `font-medium` at `text-xl` (1.25rem), `tracking-brand-snug`. "Alphabyte" in `text-foreground`, interpunct `·` in `text-muted-foreground` with `mx-1.5`, "AI" in `text-alphabyte-blue`. Wrapped in `<Link href="/">` with `aria-label="Alphabyte AI"`. Consistency between header and footer is more valuable than visual variety in this context.
- **Column headings:** `text-body-sm font-bold uppercase tracking-brand-wide text-foreground`. Same structural pattern as the dark version, just shifted from `text-white` to `text-foreground`.
- **Column links:** `text-body-sm text-foreground transition-colors hover:text-alphabyte-blue`. The white/60 opacity treatment is replaced by full `text-foreground` — on a light surface, the weight distinction (bold heading vs. regular link) provides sufficient hierarchy without dimming the link color.
- **Social links:** Same color treatment as column links (`text-foreground hover:text-alphabyte-blue`). Icons inherit `currentColor`.
- **Address block:** `text-body-sm text-muted-foreground`. Address is secondary content — muted foreground is appropriate.
- **Legal row:** `border-t border-border-default` divider. Copyright in `text-muted-foreground`. Legal links in `text-muted-foreground` with `hover:text-alphabyte-blue`. The legal row is the most subdued element in the footer.
- **Spacing:** `py-16 md:py-24` vertical padding unchanged. `max-w-7xl` container unchanged. The generous breathing room matches the calm, composed brand tone.
- **No CTA button area:** The logo + CTA row at the top of the current footer simplifies to just the wordmark. The `flex justify-between` layout can be simplified or the wordmark can anchor the top-left of the footer. Implementer's judgment on whether to keep the row structure (wordmark left-aligned, empty right side) or collapse it.

## Motion & Interactivity
Unchanged from original. Link hover transitions use `transition-colors` (200ms default). No new animations. All transitions respect `prefers-reduced-motion` via the global CSS rule in `globals.css`.

## Impact

### Affected pages or components
- `src/app/layout.tsx` — no code changes needed, but the visual relationship shifts. With a light footer on a light page, the border separator becomes the key visual break. Verify the layout reads well end-to-end (header → content → footer all on light surfaces).

### URL or routing changes
None

### Content backfill
None

## Acceptance Criteria
- [ ] Footer background is `bg-canvas` with `border-t border-border-default` top separator
- [ ] Wordmark renders as inline text: "Alphabyte" in `text-foreground`, interpunct in `text-muted-foreground`, "AI" in `text-alphabyte-blue`
- [ ] Wordmark links to `/` (home) with `aria-label="Alphabyte AI"`
- [ ] No SVG logo in the footer (replaced by wordmark)
- [ ] No CTA button in the footer ("Get started" removed, `Button` import removed)
- [ ] Column headings render in `text-foreground` with `font-bold uppercase tracking-brand-wide`
- [ ] Column links render in `text-foreground` with `hover:text-alphabyte-blue`
- [ ] Social links render in `text-foreground` with `hover:text-alphabyte-blue`
- [ ] Address block renders in `text-muted-foreground`
- [ ] Legal row border is `border-border-default`
- [ ] Copyright text is `text-muted-foreground`
- [ ] Legal links are `text-muted-foreground` with `hover:text-alphabyte-blue`
- [ ] Copyright year still uses `new Date().getFullYear()` (not hardcoded)
- [ ] Six link columns remain: Address, Services, Tools, Case Studies, Company, Connect
- [ ] All link items, slugs, and labels unchanged from original
- [ ] Blog nav item (added by header enhancement) does not appear in an unexpected footer column
- [ ] Desktop layout: wordmark top, link columns in grid, legal row at bottom — all at `max-w-7xl`
- [ ] Mobile layout: columns stack vertically, no horizontal overflow
- [ ] All hover transitions use `transition-colors` (200ms)
- [ ] Colors use Tailwind brand tokens — no hardcoded hex values
- [ ] All transitions respect `prefers-reduced-motion`
- [ ] No forbidden vocabulary in any copy (voice-and-tone.md check)
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review — Option C surface system
- [ ] Parts of the feature not covered by this enhancement (column structure, link destinations, footer-data.ts content, mobile stacking) behave identically to before
- [ ] Builds without TypeScript errors or console warnings
- [ ] Responsive and usable at common mobile widths (375px, 390px, 414px)

## Related
- `prds/site-footer.md` (the feature being enhanced)
- `prds/enhance-site-header-option-c.md` — header enhancement to Option C; this footer enhancement mirrors its visual decisions
- `prds/site-header.md` — original header PRD; source of truth for nav IA
- `src/lib/navigation.ts` — shared navigation data consumed by both header and footer
- `.claude/skills/alphabyte-brand/component-rules.md` — Option C surface system, motion tiers
- `.claude/skills/alphabyte-brand/tokens.md` — surface tokens, type hierarchy
- `.claude/skills/alphabyte-brand/voice-and-tone.md` — copy guidelines

## Notes
- The copyright year is already dynamic (`new Date().getFullYear()`) in the shipped footer. The enhancement description flagged this as a functional change, but reading the code confirms it's already implemented. No change needed.
- The `Button` component import and the `variant="inverse"` CTA can be fully removed from `footer.tsx`. The `alphabyte-logo-white.svg` `<img>` element is also removed. This simplifies the footer's dependency surface.
- The wordmark treatment in the footer mirrors the header exactly. If the header wordmark sizing is later refined via a separate enhancement, the footer should be updated to match — the two should stay in sync.
- The current footer renders a `<Link href="/contact/">` "Get started" button between the logo and the link columns. Removing this simplifies the top section of the footer to just the wordmark. The implementer should decide whether to keep the existing row layout (with the right side empty) or tighten the structure now that the CTA is gone.
- Effort: small. One file changes (`footer.tsx`), and the changes are almost entirely class-name swaps plus removing the logo `<img>` and CTA button.

---
*Created: 2026-04-27*
*Last updated: 2026-04-27 (shipped)*
