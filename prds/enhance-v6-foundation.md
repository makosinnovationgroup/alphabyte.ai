# V6 Foundation: Header, Footer, Navigation, Discovery Call Modal, Redirects

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/enhance-site-header-option-c.md`

## Motivation
The V6 design (`design/Alphabyte_AI_Site_V6.pdf`, 19 pages, stamped APPROVED COPY) establishes a new information architecture with seven top-nav items, a "Book a Discovery Call" modal as the primary conversion surface, and two new sections (Our Work, Team) replacing the old Case Studies section. Phase 1 lands the cross-cutting structural changes — header, footer, navigation data, modal component, and redirect rules — so that per-page builds dispatched via `/page` have a stable shell to land into. Without this foundation, every page build would need to independently handle nav items, CTA wiring, and route references. Shipping it first keeps the per-page work clean.

## Summary
Update the site shell from 5-item navigation to 7-item navigation per V6. Replace "Book a Sprint" with "Book a Discovery Call" and wire every instance site-wide to open a new modal instead of navigating. Add the discovery call form as a Radix Dialog rendered at the app shell level with React Context for open state. Update the footer to match the new IA and add contact details from PDF page 19. Create a Cloudflare Pages `_redirects` file for legacy route coverage.

## Changing
- Original: nav items are Services, Tools, Case Studies, Blog, About (5 items, per `enhance-site-header-option-c.md`). Updated: Services, Tools, Our Work, Team, About, Blog, Contact Us (7 items, per V6 PDF).
- Original: CTA button label "Book a Sprint" linking to `/services/discovery/`. Updated: CTA button label "Book a Discovery Call" opening `<DiscoveryCallModal />`. The button no longer navigates.
- Original: "Case Studies" nav item at `/case-studies/` with dropdown children (Sprinklermatic, RecirQ, HSC) and footer link "View all case studies". Updated: "Our Work" nav item at `/our-work/` with the same dropdown children temporarily pointing to existing `/case-studies/*` routes until Our Work pages are built.
- Original: footer has no CTA button (removed in `enhance-site-footer-option-c.md`). Updated: footer gets a "Book a Discovery Call" button wired to the modal.
- Original: footer address shows "155 Winges Road" / "Vaughan, ON" (2 lines). Updated: full address "155 Winges Road, Unit 1" / "Vaughan, Ontario, Canada L4L 6C7" plus email (`hello@alphabyte.ai`) and phone (`+1 (647) 204-4581`).
- Original: footer Company column links are About, Contact. Updated: About, Team, Blog, Contact Us — matching the full nav IA.
- Original: footer "Case Studies" column. Updated: "Our Work" column with same items.
- Original: footer Connect column shows LinkedIn and Bluesky. Updated: LinkedIn only (per PDF page 19: "Alphabyte AI on LinkedIn"). Bluesky removed from footer.
- Original: all "Book a Strategy Sprint" CTAs across service pages, tool pages, case study stubs, and homepage link to `/services/discovery/`. Updated: relabeled to "Book a Discovery Call" and wired to open the modal.

## Decided
- **Nav order:** PDF order is authoritative. Services, Tools, Our Work, Team, About, Blog, Contact Us. This matches all 19 pages of the approved PDF. See OQ1 for the brief-vs-PDF discrepancy — PDF wins unless Mitchell instructs otherwise.
- **Dropdowns preserved:** Services keeps its 4 children (Discovery, Data, Enablement, Infrastructure). Tools keeps its 4 children (Claude, MCP, Custom AI Agents, On-Premise LLM). Our Work inherits Case Studies' 3 children (Sprinklermatic, RecirQ, HSC). Team, About, Blog, and Contact Us are flat links (no dropdowns). The `footerLink` on Our Work becomes `{ label: "View all work", href: "/our-work/" }`.
- **Our Work children: pragmatic routing.** During Phase 1, Our Work dropdown children continue to point to existing `/case-studies/*` routes so the pages remain reachable. When Our Work pages are built via `/page`, the children update to `/our-work/*` routes. This is a deliberate intermediate state — the alternative (pointing to `/our-work/*` which all 404) orphans working content.
- **New nav destinations that will 404.** `/our-work/`, `/team/`, and `/contact/` do not have pages yet. This is accepted intermediate state, consistent with the precedent set when Blog and `/services/discovery/` were added to the nav before their pages existed (per `enhance-site-header-option-c.md`).
- **Modal state management: React Context.** No new dependencies. A `DiscoveryCallProvider` wraps the app in `layout.tsx`, exposing `openDiscoveryCall()` via `useDiscoveryCall()` hook. Any component can call `openDiscoveryCall()` to open the modal. This matches the project's zero-external-state-library pattern.
- **Modal implementation: Radix Dialog.** `@radix-ui/react-dialog` is already in the project and provides focus trapping, body scroll lock, `role="dialog"`, Esc/backdrop close, and focus-return-to-trigger. Same primitive used by the mobile menu.
- **Form submission: client-side stub.** The site uses static export (`output: 'export'`) — API routes are not available. The form handler logs the payload to console, shows a success state in the modal, and resets the form. Flag for follow-up: wire up a real submission target (Cloudflare Workers function, Formspree, or similar) before the site goes live on the custom domain. No `POST /api/discovery-call` route is created.
- **CTA relabeling is site-wide.** Every "Book a Sprint" and "Book a Strategy Sprint" across all pages changes to "Book a Discovery Call" and opens the modal. This includes: header CTA (desktop + mobile), homepage hero CTA, homepage closing CTA, all service page CTAs, all tool page CTAs, all case study stub CTAs. None navigate to `/services/discovery/` anymore.
- **Footer "Book a Discovery Call" CTA.** Add a "Book a Discovery Call" button (same `dark` variant, same sizing as header CTA) in the footer between the wordmark and the link columns. Wired to the modal.
- **Footer contact block.** Expand the Address column to include full contact details from PDF page 19: street address with unit and postal code, email as a `mailto:` link, phone as a `tel:` link, and "Alphabyte AI on LinkedIn" linking to the existing LinkedIn URL. Column heading changes from "Address" to "Contact".
- **Footer Bluesky removal.** PDF page 19 shows only LinkedIn under social/connect. Remove Bluesky from the footer Connect column. If a standalone Connect column becomes empty (LinkedIn moves to the Contact column), remove the Connect column entirely.
- **`navigation.ts` shape:** Preserve the existing `NavItem` / `NavChild` interfaces. Add no `order` field — array position is the order, adding an explicit field would be redundant and create a second source of truth that could drift. Update items and their `href`/`label`/`children` values only.
- **Redirects file format:** `public/_redirects`, Cloudflare Pages plain-text format, one rule per line: `<from> <to> <status-code>`.
- **Active-link detection:** `isRouteActive()` already handles prefix matching. "Our Work" at `/our-work/` will match any `/our-work/*` child route once those pages exist. No changes to the function.
- **Mobile menu:** Same 7 items in the same order. Team, About, Blog, and Contact Us render as flat links (no accordion). Our Work renders as an accordion section with its 3 children, same as Case Studies did.

## Open Questions
- OQ1: Nav order — the user brief specifies `Services, Tools, Our Work, About, Blog, Team, Contact` while the PDF shows `Services, Tools, Our Work, Team, About, Blog, Contact Us`. This PRD uses the PDF order. Confirm before merging if the brief order is preferred. (owner: Mitchell, blocks implementation: no)
- OQ6: Legacy redirects beyond `/citizen-dev` — are there external links or bookmarks pointing to old route slugs (e.g., a prior `/work` or `/portfolio` path, an alternate contact slug)? The `_redirects` file ships with the confirmed `/citizen-dev` rule and can be extended. (owner: Mitchell, blocks implementation: no)
- OQ7: Footer detail — the PDF crops the footer on every page. This PRD adds the contact block from page 19 and aligns columns to the new IA, but retains elements from the current footer not contradicted by V6 (wordmark, legal row, copyright). Confirm this approach or provide additional footer spec. (owner: Mitchell, blocks implementation: no)
- Form submission backend: the stub logs to console and shows a success state. Before the custom domain goes live, a real submission endpoint is needed (Cloudflare Workers, Formspree, or similar). (owner: Mitchell, blocks implementation: no)

## Scope

### In scope
- Header nav: 5 items to 7, in V6 PDF order
- Header CTA: "Book a Sprint" link → "Book a Discovery Call" modal trigger
- Footer: columns aligned to new 7-item IA, contact block with email/phone/full address, "Book a Discovery Call" CTA, Bluesky removed
- `src/lib/navigation.ts`: updated to 7-item structure with Our Work replacing Case Studies
- `src/lib/footer-data.ts`: updated company links, contact details, social links
- New `<DiscoveryCallModal />` component with form fields from PDF page 19
- New `DiscoveryCallProvider` React Context in `src/lib/discovery-call-context.tsx`
- Modal rendered once in `layout.tsx`
- All "Book a Strategy Sprint" / "Book a Sprint" CTAs site-wide relabeled and rewired to modal
- `public/_redirects` with confirmed redirect rules
- Mobile menu updated to 7 items

### Out of scope
- Page-level content changes (service pages, tool pages, case studies, blog, about, team, contact page content all stay as-is)
- Creating `/our-work/`, `/team/`, or `/contact/` route pages (those land via `/page`)
- Moving case study pages from `/case-studies/*` to `/our-work/*` (happens when Our Work pages are built)
- Blog post system or blog content
- Form submission backend (stubbed for follow-up)
- OG image changes
- Sitemap changes (no new routes are created)
- Service page slug changes (e.g., `/services/data` → `/services/data-readiness` happens per-page)
- Homepage content changes beyond CTA relabeling

## Pages & Components

### Modifying
- `src/lib/navigation.ts` — 5-item array to 7-item array, "Case Studies" → "Our Work", new items added
- `src/lib/footer-data.ts` — company links expanded (About, Team, Blog, Contact Us), address expanded to full V6 format, email and phone added, Bluesky removed from social links
- `src/components/header.tsx` — CTA label and behavior change (link → modal trigger via `useDiscoveryCall()`), nav renders 7 items
- `src/components/footer.tsx` — column structure updated (Case Studies → Our Work, Address → Contact, Connect column removed or merged), "Book a Discovery Call" CTA added, contact details rendered
- `src/app/layout.tsx` — wrap children with `<DiscoveryCallProvider>`, render `<DiscoveryCallModal />` at shell level
- `src/components/home/hero.tsx` — CTA relabeled and rewired to modal
- `src/components/home/closing-cta.tsx` — CTA relabeled and rewired to modal
- `src/app/services/discovery/page.tsx` — CTAs relabeled and rewired
- `src/app/services/data/page.tsx` — CTAs relabeled and rewired
- `src/app/services/enablement/page.tsx` — CTAs relabeled and rewired
- `src/app/services/infrastructure/page.tsx` — CTAs relabeled and rewired
- `src/app/tools/claude/page.tsx` — CTAs relabeled and rewired
- `src/app/tools/mcp/page.tsx` — CTAs relabeled and rewired
- `src/app/tools/custom-ai-agents/page.tsx` — CTAs relabeled and rewired
- `src/app/tools/on-premise-llm/page.tsx` — CTAs relabeled and rewired
- `src/app/case-studies/sprinklermatic/page.tsx` — CTAs relabeled and rewired
- `src/app/case-studies/recirq/page.tsx` — CTAs relabeled and rewired
- `src/app/case-studies/hsc/page.tsx` — CTAs relabeled and rewired
- `src/app/page.tsx` — homepage track tab CTAs stay as "Get started →" links (these are service-specific entry points, not discovery call triggers), but closing CTA section changes
- `src/app/services/page.tsx` — "Get started →" CTAs on track tabs and entry bundles stay as service-specific links (not discovery call triggers)

### Creating
- `src/lib/discovery-call-context.tsx` — React Context provider + `useDiscoveryCall()` hook
- `src/components/discovery-call-modal.tsx` — modal component with form
- `public/_redirects` — Cloudflare Pages redirect rules

## Content

### Verbatim copy
- Header CTA button label: "Book a Discovery Call"
- Nav labels in order: "Services", "Tools", "Our Work", "Team", "About", "Blog", "Contact Us"
- Our Work dropdown footer link: "View all work"
- Modal title: "Book a Discovery Call"
- Modal subhead: "45 minutes. No cost. No obligation. You describe your situation. We tell you what we would do, in what order, and what you would have at day 30."
- Form field labels: "First name", "Last name", "Work email", "Company", "Job title", "What are you most interested in?", "Tell us about your situation (optional)"
- Form field placeholders: "Jane", "Smith", "jane@company.com", "Acme Corp", "VP of Operations", "What are you trying to solve? What have you tried?"
- Radio group options: "Citizen Development", "Executive Enablement", "Discovery", "Data Readiness", "Infrastructure", "Not sure yet"
- Submit button label: "Book a Discovery Call \u2192"
- Below-submit helper: "We typically respond within one business day. Your information is never shared with third parties."
- Footer contact email: "hello@alphabyte.ai"
- Footer contact phone: "+1 (647) 204-4581"
- Footer contact address: "155 Winges Road, Unit 1, Vaughan, Ontario, Canada L4L 6C7"
- Footer LinkedIn label: "Alphabyte AI on LinkedIn"
- CTA label on all service/tool/case-study pages (replacing "Book a Strategy Sprint"): "Book a Discovery Call"

### Drafted at implement-time
- Modal success state copy (shown after form submission): draft at implement-time following voice-and-tone.md. Should confirm receipt and set expectation for next step.
- Footer column heading for the contact block (suggested: "Contact" — confirm during implementation)

## Search Intent & SEO
N/A (no SEO impact — this enhancement does not create new routes, change URLs, or modify page-level metadata. The header, footer, and modal are components, not pages. The `/contact/` page is created separately via `/page`. The `_redirects` file affects URL resolution at the platform level but does not change any indexed content.)

## Design Notes
- **Modal visual treatment:** Light theme consistent with Option C. White or canvas background. Brand tokens for all colors. The modal heading ("Book a Discovery Call") uses `text-headline` sizing. The subhead uses `text-body` in `text-muted-foreground`. Form fields use standard input styling — `border border-border-default`, `rounded-sm`, `focus:ring-2 focus:ring-alphabyte-blue`. Radio group uses custom radio buttons styled with Alphabyte Blue for the selected state.
- **Modal width:** `max-w-lg` (32rem) on desktop, full-width with horizontal padding on mobile. Vertically scrollable if content overflows viewport.
- **Modal backdrop:** `bg-black/40`, same as mobile menu overlay.
- **Modal close button:** Top-right corner, `X` icon from lucide-react, same 44x44px touch target as mobile menu close.
- **Footer CTA placement:** Between the wordmark and the link columns. Full-width on mobile, auto-width on desktop. Uses the `dark` variant (`bg-foreground text-white`), same as header CTA.
- **Footer Contact column:** Replaces the current Address column. Heading: "Contact". Contains: full street address on two lines, email as a `mailto:` link, phone as a `tel:` link, "Alphabyte AI on LinkedIn" as an external link. All in `text-muted-foreground` except the heading.
- **Nav item spacing:** With 7 items instead of 5, horizontal space is tighter. Reduce `px-4` to `px-3` on desktop nav items if needed to fit at the `lg` breakpoint without wrapping. If 7 items plus CTA don't fit, consider breaking to a hamburger at `xl` instead of `lg`. Implementer's judgment on the exact breakpoint.
- **CTA button on service/tool/case-study pages:** Changes from a `<Link>` to a `<button>` element (since it opens a modal, not a route). Uses `useDiscoveryCall()` to call `openDiscoveryCall()` on click. Visual styling unchanged (same `dark` variant).

## Motion & Interactivity
- **Modal open:** Backdrop fades in (`opacity 0 → 1`, 200ms ease-out). Modal panel fades in and slides up slightly (`opacity 0, y 8px → opacity 1, y 0`, 200ms ease-out). Tier 1.
- **Modal close:** Reverse of open (150ms ease-in). Tier 1.
- **All modal motion respects `prefers-reduced-motion`:** via `useReducedMotion()` from motion/react, same pattern as the header.
- **Focus management:** On open, focus moves to the first form field (First name input). On close, focus returns to the trigger element. Radix Dialog handles this natively.
- **Body scroll lock:** Radix Dialog handles this natively when the modal is open.
- **Form submit interaction:** Button shows a brief loading state (disabled + spinner or "Sending..." label) during the stub's simulated submission, then transitions to the success state.

## Impact

### Affected pages or components
- Every page with a "Book a Strategy Sprint" or "Book a Sprint" CTA is modified (see full list in Pages & Components > Modifying). The change is mechanical: relabel the CTA, swap the `<Link>` for a `<button>`, wire to `useDiscoveryCall()`.
- `src/app/layout.tsx` gains two new elements: `<DiscoveryCallProvider>` wrapper and `<DiscoveryCallModal />` render. All pages inherit these via the root layout.
- The homepage track tabs and services page entry bundles use "Get started →" CTAs that link to specific service routes. These are NOT relabeled — they are service-entry-point links, not discovery call triggers. No change.

### URL or routing changes
- No URLs are added, removed, or changed for existing pages.
- Nav links to `/our-work/`, `/team/`, and `/contact/` are added but those routes do not exist yet (accepted 404 state).
- `public/_redirects` adds platform-level redirect rules. These do not affect the Next.js router — they are processed by Cloudflare Pages before the request reaches the static site.

### Content backfill
- When `/our-work/` pages are built via `/page`, update `navigation.ts` children from `/case-studies/*` to `/our-work/*` routes and add corresponding `_redirects` entries for the old case-study URLs.
- When `/contact/` page is built via `/page`, it should render the same form as the modal (shared form component or shared field config). The modal is the preferred CTA path; the page is the fallback.
- When a real form submission backend is wired up, update the stub handler in `discovery-call-modal.tsx`.

## Acceptance Criteria
- [ ] Header renders 7 nav items in PDF order: Services, Tools, Our Work, Team, About, Blog, Contact Us
- [ ] Header CTA reads "Book a Discovery Call" and opens the modal (does not navigate)
- [ ] Mobile menu renders the same 7 items in the same order
- [ ] Mobile menu CTA reads "Book a Discovery Call" and opens the modal
- [ ] Our Work dropdown shows Sprinklermatic, RecirQ, HSC children (temporarily linking to `/case-studies/*`)
- [ ] Our Work dropdown footer link reads "View all work" and links to `/our-work/`
- [ ] Services and Tools dropdowns unchanged (same children, same routes)
- [ ] Team, About, Blog, Contact Us render as flat nav links (no dropdowns)
- [ ] `navigation.ts` is the single source of truth — header and footer both consume it
- [ ] `<DiscoveryCallModal />` renders once at the app shell level (in `layout.tsx`)
- [ ] Modal opens via React Context (`useDiscoveryCall()`) from any component
- [ ] Modal contains all form fields from PDF page 19 with correct labels and placeholders
- [ ] Radio group contains exactly: Citizen Development, Executive Enablement, Discovery, Data Readiness, Infrastructure, Not sure yet
- [ ] Submit button reads "Book a Discovery Call →"
- [ ] Helper text below submit reads "We typically respond within one business day. Your information is never shared with third parties."
- [ ] Modal title reads "Book a Discovery Call", subhead matches verbatim copy
- [ ] Esc key, backdrop click, and close button all dismiss the modal
- [ ] On open, focus moves to the first form field
- [ ] On close, focus returns to the trigger element
- [ ] Body scroll is locked while modal is open
- [ ] Modal has `role="dialog"` and `aria-labelledby` pointing at the title
- [ ] Form submission logs payload to console and shows a success state (stub)
- [ ] Every "Book a Strategy Sprint" CTA across the site is relabeled to "Book a Discovery Call" and opens the modal
- [ ] Every "Book a Sprint" CTA (header/mobile) is relabeled to "Book a Discovery Call" and opens the modal
- [ ] Homepage "Get started →" CTAs on track tabs are NOT changed (they remain service-specific links)
- [ ] Services page "Get started →" CTAs are NOT changed
- [ ] Footer columns match new IA: Contact (full address + email + phone + LinkedIn), Services, Tools, Our Work, Company (About, Team, Blog, Contact Us)
- [ ] Footer has a "Book a Discovery Call" CTA button wired to the modal
- [ ] Footer email renders as a `mailto:` link
- [ ] Footer phone renders as a `tel:` link
- [ ] Footer Bluesky link is removed
- [ ] Footer legal row unchanged (copyright, Terms, Privacy, Cookies)
- [ ] `public/_redirects` contains `/citizen-dev /services/citizen-development 302`
- [ ] All modal motion respects `prefers-reduced-motion`
- [ ] All touch targets meet 44x44px minimum
- [ ] Tab order through the modal is logical (fields in order, submit at the end)
- [ ] Colors use Tailwind brand tokens — no hardcoded hex values
- [ ] No forbidden vocabulary in any copy
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes
- [ ] No page-level content changes beyond CTA relabeling
- [ ] Parts of the site not covered by this enhancement behave identically to before

## Related
- `prds/enhance-site-header-option-c.md` (the feature being enhanced — most recent shipped header PRD)
- `prds/enhance-site-footer-option-c.md` (shipped footer PRD — footer changes override decisions from this PRD)
- `prds/site-header.md` (original header PRD — source of truth for URL slugs and nav IA)
- `prds/site-footer.md` (original footer PRD)
- `prds/nav-clickthrough-and-stub-pages.md` (shipped — established dropdown-as-link pattern and case study stubs)
- `design/Alphabyte_AI_Site_V6.pdf` — approved design, 19 pages
- `design/MIGRATION.md` — routing decisions and open questions
- `.claude/skills/alphabyte-brand/voice-and-tone.md` — copy guidelines
- `.claude/skills/alphabyte-brand/component-rules.md` — Option C surface system, motion tiers
- `.claude/skills/seo/page-checklist.md` — referenced for any future route work

- `prds/enhance-v6-dropdown-content-redirects.md` (enhancement — V6 dropdown content and redirect verification)

## Notes
- The CTA relabeling across ~15 files is mechanical but wide. Each file swaps "Book a Strategy Sprint" or "Book a Sprint" for "Book a Discovery Call" and changes the `<Link>` to a `<button>` with `onClick={() => openDiscoveryCall()}`. The `<Link>` import may become unused in some files — clean up imports.
- The "Get started →" CTAs on homepage track tabs and services page entry bundles are NOT discovery call triggers. They are service-specific entry points that link directly to the relevant service page. Changing them would break the service selection flow. Leave them as-is.
- The modal and `/contact` page should eventually share a form component or at minimum a shared field configuration to prevent drift. Phase 1 builds the modal; the `/contact` page lands via `/page` and should extract the shared form at that point.
- The `DiscoveryCallProvider` should be a client component. `layout.tsx` is currently a server component — wrapping children in a client context provider is a standard Next.js pattern (the provider is a client boundary; children can still be server components).
- Effort estimate: medium. The modal is the largest new piece (~150-200 lines). The nav/footer updates are data changes plus CTA rewiring. The site-wide CTA relabeling is repetitive but straightforward.
- The `_redirects` file may grow as more pages are built and slugs change. Keep it sorted alphabetically for maintainability.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28 (shipped)*
