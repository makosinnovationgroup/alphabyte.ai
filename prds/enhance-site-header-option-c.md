# Site Header: Option C Light Theme

## Status
Shipped

## Type
Refinement

## Enhances
- `prds/site-header.md`

## Motivation
The site header was built against the dark Ventures aesthetic decided on 2026-04-24. The CEO has since chosen Option C — a light theme with tab navigation and structured layout — as the visual direction for alphabyte.ai. The header is the most visible expression of brand direction, so it needs to move first. This also introduces two navigation changes (Blog added, Contact removed from nav) and replaces the conversion CTA to point at the productized Strategy Sprint entry point rather than a generic contact page.

## Summary
Re-theme the site header from dark to light per Option C. Replace the SVG logo with an inline "Alphabyte" wordmark and blue "AI" suffix. Update nav items to Services, Tools, Case Studies, Blog, About. Replace the "Get started" CTA with a black "Book a Sprint" button pointing at `/services/discovery/`. Remove dropdown chevrons. Tighten spacing and typography for a more editorial density.

## Changing
- Original: dark surface (`bg-black`) header with white text. Updated: light surface (`bg-white`) header with `text-foreground` text on a `bg-canvas` page.
- Original: `alphabyte-logo-white.svg` as the logo. Updated: inline typographic wordmark — "Alphabyte" in `text-foreground` + interpunct + "AI" in `text-alphabyte-blue`, rendered with Geist `font-sans`.
- Original: nav items are Services, Tools, Case Studies, About, Contact. Updated: Services, Tools, Case Studies, Blog, About.
- Original: CTA label "Get started" linking to `/contact/`. Updated: CTA label "Book a Sprint" linking to `/services/discovery/`.
- Original: CTA uses `bg-alphabyte-blue text-white` primary button style. Updated: black filled button (`bg-black text-white` or equivalent) per Option C CTA spec in `tokens.md`.
- Original: dropdown triggers show a `ChevronDown` icon. Updated: no chevron icon on dropdown triggers.
- Original: header vertical padding `py-4`. Updated: tighter padding (`py-3` or equivalent) for editorial density.
- Original: brand direction "dark Ventures aesthetic" (from the original PRD's Decided section). Updated: Option C — light theme, structured layout.

## Decided
- **Wordmark implementation:** Inline text, not a new SVG asset. Size: `text-xl` (1.25rem). Weight: `font-medium` (500). Tracking: `tracking-brand-snug` (-0.01em). Line height: default (no override). "Alphabyte" in `text-foreground`, interpunct `·` (middle dot, U+00B7) wrapped in a `<span>` with `mx-1.5` horizontal spacing and `text-muted-foreground`, "AI" in `text-alphabyte-blue`. All three segments share the same size/weight/tracking. The whole wordmark is wrapped in `<Link href="/">` with an `aria-label="Alphabyte AI"` for accessible labeling. Render these exact values; adjust later via `/enhancement` if proportions need refinement.
- **Blog nav item:** Links to `/blog/`. The route does not exist yet and will 404. This is an accepted known state — the blog page will be shipped in a future PRD. Do not create stub pages.
- **Discovery CTA destination:** `/services/discovery/` does not exist yet and will 404. Same accepted known state — the Discovery track page will be shipped in a future PRD.
- **Contact page:** Still exists at `/contact/` and is reachable via the footer and direct URL. It is removed from the primary header nav only, not from the site.
- **Dropdown trigger behavior:** Keep the existing hover-open + click-toggle behavior on desktop. The dropdown panels themselves remain; only the visual chevron indicator is removed. No functional change to dropdown interaction.
- **Sticky-on-scroll:** Header scrolls with the page (static positioning). Same decision as the original PRD. Option C's structured editorial feel suits a non-sticky header — content gets full viewport.
- **Mobile menu:** Light-themed slide-in sheet from the right. Same interaction pattern as the current dark implementation (Radix Dialog, motion slide, focus trap, body scroll lock) but re-themed: `bg-white` panel, `text-foreground` text, `text-alphabyte-blue` for active routes. Overlay shifts from `bg-black/60` to `bg-black/40` for a lighter feel.
- **Mobile CTA:** Same "Book a Sprint" label and `/services/discovery/` destination as desktop. Black filled button, full-width in the mobile panel.
- **Dropdown panel theme:** Light-themed to match the header. White or canvas background, `text-foreground` text, `border-border-default` border, `hover:bg-canvas` or `hover:bg-alphabyte-grey/30` for item hover states. Alphabyte Blue for active/hover text color.
- **Active route indicator:** `text-alphabyte-blue` on the active nav item. Same token as the original, works on both light and dark surfaces. No underline or bar — color alone per the original decision.
- **Nav text weight:** `font-medium` (500) per `tokens.md` guidance that Medium is appropriate for nav items and labels.
- **Skip-to-content link:** Restyle for light theme — `focus:bg-alphabyte-blue focus:text-white` remains high-contrast and visible.
- **Border separator:** Add a subtle bottom border (`border-b border-border-default`) to the header to separate it from page content on the off-white canvas.

## Open Questions
None

## Scope

### In scope
- Header background and text color shift (dark to light)
- Logo replacement: SVG asset to inline typographic wordmark with blue "AI" suffix
- Nav item list update: add Blog, remove Contact
- CTA label, destination, and button style update
- Dropdown chevron removal
- Dropdown panel re-theme (dark to light)
- Mobile menu re-theme (dark to light)
- Spacing and typography tightening
- Skip-to-content link restyle
- `src/lib/navigation.ts` update (add Blog item, remove Contact item)
- Header bottom border addition

### Out of scope
- Creating the `/blog/` page or any blog infrastructure
- Creating the `/services/discovery/` page
- Footer changes (footer retains its current dark treatment until a separate enhancement)
- Changes to the dropdown content (same items, same slugs, same descriptions)
- A full button system overhaul beyond the `dark` variant (e.g., updating the default primary, adding text+arrow secondary) is a separate task
- Homepage or page-level background changes (the page already uses `bg-canvas` or can be updated independently)
- Mobile breakpoint changes (same `lg` threshold)

## Pages & Components

### Modifying
- `src/components/header.tsx` — full re-theme: background, text colors, logo, nav items, CTA, dropdown panels, mobile menu, spacing
- `src/lib/navigation.ts` — add Blog nav item, remove Contact nav item
- `src/components/ui/button.tsx` — add `dark` variant per Option C CTA spec

### Creating
None

## Content

### Verbatim copy
- CTA button label: "Book a Sprint"
- Nav labels in order: "Services", "Tools", "Case Studies", "Blog", "About"
- Wordmark text: "Alphabyte" + interpunct + "AI"

### Drafted at implement-time
None — all copy is specified above. Dropdown sub-descriptions for Services, Tools, and Case Studies remain unchanged from the original implementation.

## Search Intent & SEO
N/A (no SEO impact — enhancement does not touch metadata, URLs, or indexable content. The header is a component, not a page. New nav links to `/blog/` and `/services/discovery/` do not create those routes.)

## Design Notes
- **Surface:** `bg-white` header on a `bg-canvas` page. The header is an elevated surface that sits on the canvas, differentiated by its white background and bottom border.
- **Wordmark:** Geist `font-medium` at `text-xl` (1.25rem), `tracking-brand-snug`. "Alphabyte" in `text-foreground`, interpunct `·` in `text-muted-foreground` with `mx-1.5`, "AI" in `text-alphabyte-blue`. The wordmark replaces the SVG logo and must still meet the logo-as-home-link pattern (wrapped in `<Link href="/">` with `aria-label="Alphabyte AI"`).
- **Nav text:** `text-body-sm font-medium text-foreground` for inactive items, `text-alphabyte-blue` for active/hover. No chevrons. No uppercase. Sentence case labels.
- **CTA button:** Uses the new `dark` variant on `Button` (`<Button variant="dark" size="sm">`). Spec: `bg-foreground` (`#171717`) or `bg-black` (implementer's call between those two — no other options), `text-white`, `hover:bg-foreground/90`, `rounded-sm` (2px), focus ring same as other variants (Alphabyte Blue with offset). Size `sm` maps to the existing `h-9 px-4` (tight, editorial). This variant is reusable for any future Option C CTA placement.
- **Dropdown panels:** `bg-white` with `border border-border-default`, `shadow-sm` or `shadow-md` for lift. Item text in `text-foreground`, descriptions in `text-muted-foreground`. Hover: `bg-canvas` background shift.
- **Mobile menu panel:** `bg-white`, full slide-in sheet. Nav items in `text-foreground`, active in `text-alphabyte-blue`. Divider between nav and CTA uses `border-border-default`.
- **Spacing:** Header container padding reduced from `py-4` to `py-3`. Nav item padding stays comfortable for touch (`min-h-[44px]` preserved). Overall density increases slightly for an editorial feel without sacrificing accessibility.
- **Bottom border:** `border-b border-border-default` on the `<header>` element.

## Motion & Interactivity
Unchanged from original. All existing motion (dropdown fade, mobile slide, hover transitions, reduced-motion support) carries over. The re-theme is visual only — no new animations, no changes to timing or easing.

## Impact

### Affected pages or components
- `src/components/footer.tsx` — the footer still uses `navigation` from `src/lib/navigation.ts`. Removing Contact from nav and adding Blog will affect the footer's rendering of nav columns. The footer should continue to work (it filters by label for Services/Tools/Case Studies columns, and the Company column comes from `footer-data.ts`), but verify that the Blog item doesn't appear in an unexpected footer column.
- `src/app/layout.tsx` — no code changes needed, but the visual relationship between header and page content shifts (light header on light page vs. dark header providing contrast). Verify the layout still reads well.

### URL or routing changes
None. No URLs are added, removed, or redirected. `/contact/` remains a valid route.

### Content backfill
- The footer's Company column still links to Contact — this is correct and intentional. No backfill needed.
- If/when the broader button system gets an Option C overhaul affecting all variants, the `dark` variant should be reviewed for consistency with the new defaults.

## Acceptance Criteria
- [ ] Header background is `bg-white` with `border-b border-border-default`
- [ ] Wordmark renders as inline text: "Alphabyte" in `text-foreground`, interpunct, "AI" in `text-alphabyte-blue`
- [ ] Wordmark links to `/` (home)
- [ ] No SVG logo in the header (replaced by wordmark)
- [ ] Nav items render in order: Services, Tools, Case Studies, Blog, About
- [ ] Blog links to `/blog/`
- [ ] Contact is not present in the header nav
- [ ] CTA button reads "Book a Sprint" and links to `/services/discovery/`
- [ ] CTA button is black with white text, not Alphabyte Blue
- [ ] No dropdown chevrons visible on any nav item
- [ ] Dropdowns still open on hover and toggle on click (desktop)
- [ ] Dropdown panels use light theme (white/canvas background, foreground text, border)
- [ ] Mobile menu uses light theme (white background, foreground text)
- [ ] Mobile menu CTA reads "Book a Sprint" and links to `/services/discovery/`
- [ ] Active route indicated by `text-alphabyte-blue` on the matching nav item
- [ ] Skip-to-content link present and functional
- [ ] All touch targets meet 44x44px minimum on mobile
- [ ] All motion respects `prefers-reduced-motion`
- [ ] Focus trapping works in mobile menu
- [ ] Keyboard navigation works for all interactive elements
- [ ] `aria-expanded` and `aria-haspopup` attributes present on dropdown triggers
- [ ] Header scrolls with the page (not fixed/sticky)
- [ ] No horizontal overflow or content clipping at any viewport width
- [ ] Colors use Tailwind brand tokens — no hardcoded hex values
- [ ] No forbidden vocabulary in any copy
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review — Option C surface system, `dark` CTA variant matches CTA button spec in `tokens.md`, wordmark treatment honors the typographic-rendering pattern documented in the skill
- [ ] Parts of the feature not covered by this enhancement (dropdown content, URL slugs, accessibility patterns) behave identically to before
- [ ] Builds without TypeScript errors or console warnings

## Related
- `prds/site-header.md` (the feature being enhanced)
- `prds/enhance-v6-foundation.md` — enhancement: V6 foundation (header to 7 items, discovery call modal, footer IA update)
- `prds/backlog/followup-ceo-brand-direction.md` — brand direction decision (resolved: Option C)
- `.claude/skills/alphabyte-brand/component-rules.md` — Option C surface system, button hierarchy, motion tiers
- `.claude/skills/alphabyte-brand/tokens.md` — surface tokens, CTA button colors, type hierarchy
- `.claude/skills/alphabyte-brand/voice-and-tone.md` — copy guidelines

## Notes
- The wordmark treatment ("Alphabyte + interpunct + AI") is a typographic rendering, not a replacement for the official logo. The official logo (icon + wordmark SVG) remains the canonical brand mark per the brand guide. This header treatment is specific to the Option C web direction. Print materials, OG images, and the footer should continue using the SVG logo assets.
- The `navigation.ts` change (adding Blog, removing Contact) affects any consumer of that data. Currently that's the header and footer. The footer filters nav items by label to populate its columns, so Blog won't appear in an unintended column — but this should be verified during implementation.
- The Option C CTA spec (black fill, white text, structured rounding) is implemented as a new `dark` variant on the shared Button component. This makes the variant available for any future Option C CTA placement (homepage hero, services page CTAs, footer CTA when it's enhanced) without per-instance restyling. If the broader button system later gets an Option C overhaul that affects all variants, this `dark` variant should be reviewed for consistency with whatever new defaults emerge.
- Both new nav destinations (`/blog/` and `/services/discovery/`) will 404 until their respective pages ship. This is the accepted state per Mitchell. No stub pages should be created.

---
*Created: 2026-04-27*
*Last updated: 2026-04-27 (shipped)*
*Decisions locked: 2026-04-27 — wordmark sizing (text-xl/font-medium/tracking-brand-snug), CTA implementation (dark variant on Button component)*
