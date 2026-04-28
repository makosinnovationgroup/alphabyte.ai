# Services Index V6 Redesign

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/services-pages.md`

## Motivation
The V6 design (Option C, approved copy, PDF page 2) replaces the services index page entirely. The current page uses a four-track tabbed layout with investment ranges and pills. The V6 design replaces this with a hero section, a "Where do you start?" decision table mapping buyer situations to entry-point services, and a closing CTA. The CEO has approved this version. The tab-based services explorer moves to the homepage only; the services index becomes a routing page that helps visitors self-select the right service.

## Summary
Replace the services index page content with the V6 approved design: a hero with the "AI that compounds" headline, a five-row decision table under "Where do you start?", and a "Not sure which fits?" closing CTA section that opens the Discovery Call modal.

## Changing
- Original: Services index used `TrackTabs` component with four tracks, investment lines, pills, and "Get started" CTAs. Updated: Remove `TrackTabs` entirely from the services index. Replace with a static hero, a decision table, and a closing CTA section.
- Original: Hero eyebrow was "SERVICES" and headline was "Most organizations don't have an AI problem. They have a clarity problem." Updated: Eyebrow becomes "OUR SERVICES" and headline becomes "AI that compounds. Not pilots that stall." with "compounds." in Alphabyte Blue.
- Original: Hero sub-head was "We work across four tracks..." Updated: Two body paragraphs replace the sub-head (see Verbatim copy below).
- Original: Page had a "Not Sure Where to Start" entry bundles section with three cards (Strategy Sprint, Executive Quick Win, Sprawl Fix). Updated: Remove entry bundles section. Replace with "Not sure which fits?" CTA section.
- Original: Meta title was "Services — AI Consulting Across Four Tracks". Updated: "Services — AI & Data Consulting" (aligns with V6 framing of five services, not four tracks).
- Original: Meta description referenced "Four AI consulting tracks". Updated: References five services and the decision-table framing.

## Decided
- The decision table is a standard HTML `<table>` with three columns: "Your situation", "Start here", "What comes next". Five rows, one per service.
- "Start here" column entries are links in Alphabyte Blue pointing to the respective service page. Citizen Development gets a star indicator (★).
- "What comes next" column entries are plain text with arrow separators (→).
- The footnote below the table is italic, muted text.
- The closing CTA section uses a dark background (`bg-foreground` with white text), centered layout, and a "Book a Discovery Call" button that opens the Discovery Call modal (not a route navigation).
- The "Book a Discovery Call" button in the closing section uses the light/inverse variant (white outline or white fill on dark background) to contrast against the dark section.
- No `TrackTabs` import or usage on this page. The services page no longer needs the track data array.
- Service links in the decision table use the V6 route structure: `/services/citizen-development/`, `/services/executive-enablement/`, `/services/discovery/`, `/services/data-readiness/`, `/services/infrastructure/`.
- The "WHERE DO YOU START?" section header follows the same pattern as other section headers on the site: blue uppercase text with a horizontal rule extending to the right.

## Open Questions
None

## Scope

### In scope
- Replace services index page content (`src/app/services/page.tsx`) with V6 design
- Hero section with V6 copy
- "Where do you start?" decision table
- "Not sure which fits?" closing CTA section with Discovery Call modal trigger
- Updated metadata (title, description, OG)
- Updated sitemap entry if lastModified needs refreshing

### Out of scope
- Changes to individual service detail pages (those are separate `/page` invocations)
- Changes to `TrackTabs` component (still used on the homepage)
- Changes to header, footer, or navigation
- OG image specific to services (continue using `/og/default.png`)
- Any track detail content or investment ranges on this page

## Pages & Components

### Modifying
- `src/app/services/page.tsx` — complete content replacement

### Creating
None

## Content

### Verbatim copy
All copy below is from PDF page 2, stamped APPROVED COPY. Use exactly as written.

**Hero:**
- Eyebrow: "OUR SERVICES"
- H1: "AI that compounds. Not pilots that stall." — the word "compounds." rendered in Alphabyte Blue
- Body paragraph 1: "We are not a generalist AI consultancy. Claude is our entire practice — every engagement, every engineer, every methodology built specifically for Claude deployment in mid-market organizations."
- Body paragraph 2: "Citizen Developer Enablement is our flagship. Everything else is either preparation for it or what comes after it."

**Decision table section:**
- Section header: "WHERE DO YOU START?"
- Intro: "All five services are available at any time. This is where you enter, based on where you actually are."
- Table column headers: "Your situation" | "Start here" | "What comes next"
- Row 1: "Team using Claude informally — Slack prompts, personal workflows, unreviewed data access" | "Citizen Development ★" | "Data Readiness → Infrastructure"
- Row 2: "Leadership needs a visible AI win before committing to a broader programme" | "Executive Enablement" | "Citizen Development → Infrastructure"
- Row 3: "No AI investment yet — want a plan you can execute, not a deck" | "Discovery" | "Data Readiness or Citizen Development"
- Row 4: "Regulated industry or uncertain data quality" | "Data Readiness" | "Citizen Development or Infrastructure"
- Row 5: "Team enabled, data validated — ready to connect AI to live systems" | "Infrastructure" | "Ongoing agent expansion"
- Footnote (italic): "These are entry points, not a mandatory sequence. Most clients start with Citizen Dev or Executive Enablement, see the return, and expand."

**Closing CTA section:**
- Heading: "Not sure which fits?"
- Body: "The discovery call is where we work that out. 45 minutes, no cost, no obligation."
- CTA button: "Book a Discovery Call"

### Drafted at implement-time
None — all copy is from the approved PDF.

## Search Intent & SEO
- **Target query:** "AI consulting services Canada", "AI strategy consulting mid-market"
- **URL slug:** Unchanged (`/services/`)
- **Meta title:** "Services — AI & Data Consulting"
- **Meta description:** "Five AI consulting services for mid-market organizations. Start where your situation actually is — citizen development, executive enablement, discovery, data readiness, or infrastructure."
- **Structured data:** Unchanged (no page-specific structured data; Organization schema covers from root layout)
- **OG image:** Unchanged (`/og/default.png`)

## Design Notes
- **Hero:** off-white canvas background (`bg-canvas`), editorial typography. Eyebrow "OUR SERVICES" in Alphabyte Blue, uppercase, `tracking-brand-wide`. H1 at `text-display`, `tracking-brand-tight`. "compounds." span in `text-alphabyte-blue`. Two body paragraphs below in `text-body text-foreground`, max-width constrained.
- **Decision table section:** "WHERE DO YOU START?" header in blue uppercase with hr line extending right (same pattern as "IS THIS YOU?" and "PROOF" sections on homepage). Table uses standard HTML `<table>` with clean borders. Header row has slightly different background or bold treatment. "Start here" column entries are `text-alphabyte-blue` links. Table sits on `bg-canvas` or `bg-white` surface.
- **Closing CTA:** full-width dark section (`bg-foreground`, `text-white`). Heading centered, `text-headline` or `text-display` size. Body text centered below. "Book a Discovery Call" button uses a variant that works on dark backgrounds (outlined white or filled white with dark text). Section provides clear visual contrast against the light decision table above.
- **Spacing:** tighter than the current page — follow the V6 rhythm visible in the PDF. Hero padding similar to the homepage hero (reduced padding we already shipped).

## Motion & Interactivity
- "Book a Discovery Call" button opens the Discovery Call modal via the existing `DiscoveryCallProvider` context. No route navigation.
- No scroll animations, no tab switching, no interactive elements beyond the modal trigger and table links.

## Impact

### Affected pages or components
- None beyond the modifying list above. The `TrackTabs` component is unchanged (still used on homepage).

### URL or routing changes
None

### Content backfill
None

## Acceptance Criteria
- [ ] `/services/` renders the V6 design: hero, decision table, closing CTA
- [ ] Hero eyebrow reads "OUR SERVICES", headline reads "AI that compounds. Not pilots that stall." with "compounds." in blue
- [ ] Decision table has five rows with correct copy from PDF page 2
- [ ] "Start here" column entries are links to the correct service routes
- [ ] Citizen Development entry has the star indicator (★)
- [ ] Footnote below table is italic and muted
- [ ] "Not sure which fits?" section has dark background with centered content
- [ ] "Book a Discovery Call" button opens the Discovery Call modal
- [ ] Old `TrackTabs` usage and entry bundles section are removed from this page
- [ ] Metadata updated (title, description, canonical, OG)
- [ ] Copy is verbatim from PDF page 2 — no paraphrase, no truncation
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review — Option C surface system
- [ ] Passes `seo/page-checklist.md` for `/services/`
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean
- [ ] Page is responsive (mobile through desktop, no horizontal scroll)
- [ ] Parts of the site not covered by this enhancement behave identically to before

## Related
- `prds/services-pages.md` (the feature being enhanced)
- `prds/enhance-homepage-v6.md` — homepage V6 enhancement (shares the "AI that compounds" headline)
- `design/Alphabyte_AI_Site_V6.pdf` page 2 — source of truth
- `design/MIGRATION.md` — routing and IA context
- `.claude/skills/alphabyte-brand/component-rules.md` — Option C surface system
- `.claude/skills/alphabyte-brand/voice-and-tone.md` — copy checks
- `.claude/skills/seo/page-checklist.md` — pre-ship gate

## Notes
- SOURCE OF TRUTH: `/tmp/page-services-index-02.png` (rasterized from `design/Alphabyte_AI_Site_V6.pdf` page 2). The implementer must view this image and match every visible string and layout decision.
- The current services page imports `TrackTabs` and `Link` from next — the V6 version drops `TrackTabs` but may still need `Link` for the decision table service links.
- The closing CTA section pattern (dark background, centered heading, modal trigger) will likely recur on other V6 pages. Consider whether the existing `ClosingCta` component can be reused or if this needs its own variant.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28 (Shipped)*
