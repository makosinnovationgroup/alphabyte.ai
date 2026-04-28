# Homepage V6 Approved Copy

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/homepage.md`

## Motivation
The V6 design (Option C, approved copy) introduces a significantly reworked homepage. The hero gains a three-paragraph narrative about Claude as the practice's core platform, a right-column stat block, and a repositioned CTA pair. A new "Is this you?" qualification grid gives visitors a reason to self-identify before reaching the track tabs. The track tabs expand from four to five — splitting Enablement into Citizen Dev and Executive Enablement — and reorder to lead with the flagship offering. Proof cards gain industry and geography tags plus updated copy. The closing CTA is fully rewritten. Source: `design/Alphabyte_AI_Site_V6.pdf` page 1, stamped APPROVED COPY.

## Summary
Replace the current homepage content with V6 approved copy. The page gains a hero stat block, an "Is this you?" qualification section, five service tabs (up from four), updated proof cards with industry tags, and a rewritten closing CTA. All copy is verbatim from the PDF. The page structure (hero → active delivery strip → qualification grid → tabs → proof → closing CTA) replaces the current structure (hero → trusted-by → tabs → proof → closing CTA).

## Changing
- Original: Hero body is a single paragraph ("Alphabyte AI designs and delivers working AI for mid-market organizations across Canada. Four tracks. Real deployments. No junior bench."). Updated: Hero body is three paragraphs focused on Claude as the practice platform, Citizen Developer Enablement as the flagship, and the anti-generalist positioning.
- Original: Hero primary CTA text is "Book a Discovery Call" linking via modal. Updated: same label, same modal behavior — no change to the CTA itself, but a new secondary CTA replaces "See our services →" with "See How it Works →".
- Original: "TRUSTED BY" strip with plain client names (Sprinklermatic, RecirQ, Housing Services Corp.). Updated: "CURRENTLY IN ACTIVE DELIVERY FOR" strip with parent-company associations (Sprinklermatic / EJ Capital, RecirQ / Reventory, Housing Services Corp.).
- Original: Four tabs — Discovery, Data Readiness, Enablement ★, Infrastructure. Updated: Five tabs — Citizen Dev ★, Executive Enablement, Discovery, Data Readiness, Infrastructure. Tab order changed; Enablement split into two tabs; flagship (Citizen Dev) moved to first position.
- Original: Tab detail shows question, heading, body, "Right for you if", CTA, pills. Updated: Tab detail adds a TIMELINE field in the right column. "Right for you if" copy updated. Tab body copy rewritten.
- Original: Proof section headed "PROOF POINTS" with three cards (eyebrow + title + body). Updated: Section headed "PROOF — WHAT WE BUILT. WHAT IT PRODUCED". Cards gain industry/geography tags in the eyebrow. Titles and body copy rewritten for all three cards.
- Original: Closing CTA heading "Not sure where you fit?" with sub-text "A Discovery Call answers that in 45 minutes. No cost. No obligation." Updated: Heading "The window is open. Let's find out if there is an engagement worth having." with expanded sub-text describing the call format.

## Decided
- Hero layout changes to two-column on desktop: left column holds badge, h1, body paragraphs, and CTAs; right column holds three stat items stacked vertically. Single-column stacked on mobile.
- Three hero stat items: "10×" / "Workforce output multiplier from governed citizen dev", "2 wks" / "Fastest time to a live Claude environment", "3" / "Active North American deployments in delivery today". Stats are display-weight numbers with small muted descriptors.
- "See How it Works →" secondary CTA is an anchor link scrolling to the track tabs section (`#tracks` or equivalent). Not a route navigation.
- New "IS THIS YOU?" section sits between the active-delivery strip and the track tabs. Contains a 2×2 card grid on desktop (stacked on mobile) with four qualification scenarios. Below the grid: a bridge sentence linking to the discovery call.
- Five tabs replace four. The `Track` interface adds a `timeline?: string` field. The tab bar grid changes from `lg:grid-cols-4` to `lg:grid-cols-5` (mobile: `grid-cols-2` wrapping to a third row, or horizontal scroll — implementer's call).
- Default active tab is Citizen Dev ★ (index 0), not Discovery.
- Proof card eyebrows gain a second segment after the client name: industry and geography (e.g., "FIRE PROTECTION · GLOBAL NATIONAL"). The eyebrow is a single line, segments separated by " · ".
- Closing CTA sub-text is two sentences, not one. The expanded copy describes the call format: 45 minutes, what the prospect does, what Alphabyte delivers.
- All "Book a Discovery Call" CTAs continue to open the Discovery Call modal (already wired).
- Tab content for the four non-visible tabs (Executive Enablement, Discovery, Data Readiness, Infrastructure) is not fully shown on PDF page 1. The implementer must reference the individual service PDF pages (pages 3, 5, 6, 7) and `alphabyte-services/service-tracks.md` to draft tab content matching V6 voice. This is explicitly deferred to implement-time rather than guessed in this PRD.

## Open Questions
- "See How it Works →" target: this PRD assumes an anchor link to the track tabs section. If a separate "How It Works" page or section is intended, confirm. (owner: Mitchell, blocks implementation: no)
- Tab content for Executive Enablement, Discovery, Data Readiness, Infrastructure tabs: only Citizen Dev tab content is visible on PDF page 1. Implementer will draft from individual service PDF pages and service-tracks.md. Confirm this approach is acceptable vs. waiting for explicit approved copy per tab. (owner: Mitchell, blocks implementation: no)
- Five-tab structure interacts with OQ2 (Citizen Dev / Enablement collision in MIGRATION.md). The homepage PDF clearly shows five tabs with Citizen Dev and Executive Enablement split. If OQ2 resolves to a combined Enablement page (interpretation 2 or 3), the homepage tabs would need to be revisited. This enhancement proceeds with the PDF-as-designed five-tab structure. (owner: Mitchell, blocks implementation: no)

## Scope

### In scope
- Rewrite hero section: three-paragraph body, two-column layout with stat block, updated secondary CTA
- Rename and update active-delivery strip (label, client names with parent associations)
- New "Is this you?" qualification grid section (2×2 cards + bridge text)
- Expand track tabs from four to five, reorder, update tab content and add timeline field
- Update proof section heading, card eyebrows (industry/geo tags), card titles, and card body copy
- Rewrite closing CTA heading, sub-text, and button label
- Update `homeTracks` data array in `page.tsx` (five entries, new fields)
- Update `Track` interface in `track-tabs.tsx` (add `timeline`)
- Update tab bar grid layout for five columns

### Out of scope
- Individual service pages (those are separate `/page` dispatches)
- Discovery Call modal form or behavior changes
- Header or footer changes
- OG image creation
- Metadata or structured data changes (title, description, and JSON-LD are acceptable as-is for V6)
- Blog, About, Team, Our Work, Contact pages
- Resolution of OQ2 (Citizen Dev / Enablement collision) — this enhancement uses the PDF as designed

## Pages & Components

### Modifying
- `src/app/page.tsx` — update `homeTracks` array (5 entries, new fields, new order), add "Is this you?" data
- `src/components/home/hero.tsx` — two-column layout, three-paragraph body, stat block, updated secondary CTA
- `src/components/home/trusted-by.tsx` — rename label, update client names with parent associations
- `src/components/track-tabs.tsx` — add `timeline` to Track interface, update grid to 5 columns, render timeline in detail panel
- `src/components/home/proof-points.tsx` — update section heading, card eyebrows with industry/geo tags, card titles and body copy
- `src/components/home/closing-cta.tsx` — rewrite heading, sub-text, and button

### Creating
- `src/components/home/is-this-you.tsx` — new "Is this you?" qualification grid section (2×2 cards + bridge text)

## Content

### Verbatim copy

**Hero badge:** "★ Claude Partner · Canadian mid-market" *(unchanged from original, confirm exact rendering matches PDF — original had "Canadian mid-market AI", PDF appears to drop "AI")*

**Hero headline (h1):** "AI that compounds. Not pilots that stall." *(unchanged)*

**Hero body paragraph 1:** "The models are ready. The tools are here. The window to get ahead of your competition is open right now — and it is not going to stay open."

**Hero body paragraph 2:** "Our flagship offering is Citizen Developer Enablement. Every employee, now an AI developer."

**Hero body paragraph 3:** "We are not a generalist AI consultancy. Claude is our entire practice — not a competency we added to a service menu."

**Hero primary CTA:** "Book a Discovery Call" *(unchanged)*

**Hero secondary CTA:** "See How it Works →"

**Hero stat 1:** "10×" / "Workforce output multiplier from governed citizen dev"

**Hero stat 2:** "2 wks" / "Fastest time to a live Claude environment"

**Hero stat 3:** "3" / "Active North American deployments in delivery today"

**Active delivery strip label:** "CURRENTLY IN ACTIVE DELIVERY FOR"

**Active delivery strip pills:** "Sprinklermatic / EJ Capital", "RecirQ / Reventory", "Housing Services Corp."

**Is this you? section heading:** "IS THIS YOU?"

**Is this you? card 1:** "Your team is already using Claude informally — prompts in Slack threads, personal workflows nobody else can replicate, data exports running through tools IT has not reviewed."

**Is this you? card 2:** "Leadership has been asked about AI strategy and the honest answer is: we do not have one yet. The board wants something. A competitor announced something."

**Is this you? card 3:** "You have already invested in AI. A pilot ran. Something was delivered. Not much is actually being used. You want to understand what went wrong before spending again."

**Is this you? card 4:** "You are in a regulated industry or the Canadian public sector. You need an AI programme that can survive a compliance conversation, not just a demo."

**Is this you? bridge:** "Whatever your situation — we have been here before. The discovery call is where we figure out which path fits."

**Tab labels (left to right):** "Citizen Dev ★", "Executive Enablement", "Discovery", "Data Readiness", "Infrastructure"

**Tab: Citizen Dev ★ (visible on PDF page 1):**
- Question: "How do our people use AI?"
- Heading: "Citizen Dev ★"
- Body: "Governed Claude environment, SDLC tooling, and guardrails — deployed against the workflows your team already owns. From informal usage to a managed, compounding capability. Most clients have something running in week three."
- Right for you if: "Your team is using Claude informally, or you want every employee operating as an AI developer."
- CTA: "Get started →"
- What's included pills: "Custom SDLC plugin", "Knowledgebases & skills", "Guardrails framework", "Governed data via MCP"
- Timeline: "3 to 12 weeks"

**Proof section heading:** "PROOF — WHAT WE BUILT. WHAT IT PRODUCED"

**Proof card 1 eyebrow:** "SPRINKLERMATIC / EJ CAPITAL · FIRE PROTECTION · GLOBAL NATIONAL"
**Proof card 1 title:** "Automated NFPA compliance review"
**Proof card 1 body:** "Eliminates 40+ hours per week of manual fire codes lookup. Live in production."

**Proof card 2 eyebrow:** "RECIRQ / REVENTORY · CIRCULAR ECONOMY · GLOBAL"
**Proof card 2 title:** "Real-time sales intelligence dashboard"
**Proof card 2 body:** "Claude analyses every WhatsApp sales conversation and feeds structured output into a live BigQuery dashboard."

**Proof card 3 eyebrow:** "HOUSING SERVICES CORP. · PUBLIC SECTOR HOUSING · CANADA"
**Proof card 3 title:** "AI enablement roadmap"
**Proof card 3 body:** "Six actionable recommendations including automated cross-program reporting previously requiring a team of analysts."

**Closing CTA heading (h2):** "The window is open. Let's find out if there is an engagement worth having."

**Closing CTA sub-text:** "45 minutes. No cost. No obligation. You describe your situation. We tell you what we would do, in what order, and what you would have at day 30."

**Closing CTA button:** "Book a Discovery Call"

### Drafted at implement-time
- Tab content for Executive Enablement, Discovery, Data Readiness, Infrastructure — draft from individual service PDF pages (3, 5, 6, 7) and `alphabyte-services/service-tracks.md`, matching the Citizen Dev tab structure (question, heading, body, right-for-you, CTA, pills, timeline).

## Search Intent & SEO
N/A — no SEO impact. Meta title, description, canonical, structured data, and OG image are all unchanged from the original PRD. The content update improves on-page relevance for existing target queries but does not change metadata.

## Design Notes
- **Hero two-column layout:** Left column (~60% width) holds badge, headline, body paragraphs, CTAs. Right column (~40%) holds three stat items stacked vertically with generous spacing. Stats use display-weight numbers (`text-display` or a large `text-headline` size) in `text-foreground` with small `text-body-sm text-muted-foreground` descriptors beneath each. On mobile, stats stack below the CTA pair.
- **"Is this you?" section:** `bg-canvas`, eyebrow heading "IS THIS YOU?" with hairline rule (same pattern as proof-points). 2×2 grid of white cards (`bg-white border border-border-default p-6`), each containing a single paragraph of body text in `text-muted-foreground`. Bridge text below the grid is italic `text-body text-muted-foreground`, centered or left-aligned to match the section rhythm.
- **Five-tab bar:** Same dark bar treatment as current four-tab bar. `lg:grid-cols-5`. Thin vertical dividers between tabs. Active tab (Citizen Dev ★) has top-edge blue accent. Tab numbers: no numbers shown in V6 — tabs display labels only (this differs from the current numbered tabs). Confirm from PDF: the V6 tabs do not appear to show 01/02/03/04/05 numbering.
- **Tab detail with timeline:** Right column adds "TIMELINE" eyebrow (same style as "WHAT'S INCLUDED") with the timeline value below. Timeline sits beneath the pills list.
- **Proof cards with tags:** Eyebrow line now contains client name, industry, and geography separated by " · ". All caps, `tracking-brand-wide`. The industry/geo segment uses same color as the client name (all `text-alphabyte-blue`).
- **Closing CTA:** Same centered layout, but the sub-text is longer (two sentences). Increase `max-w` on the sub-text container to accommodate the longer copy without awkward line breaks.

## Motion & Interactivity
Unchanged from original. Tab switching is instant via React state. Hover states at 200ms. No scroll-triggered reveals. `prefers-reduced-motion` respected. The "See How it Works →" link triggers a smooth scroll to the track tabs anchor (respecting reduced motion — jump instantly if preferred).

## Impact

### Affected pages or components
- `src/components/track-tabs.tsx` — the Track interface change (`timeline` field, removal of `number` display) affects any other page that imports `TrackTabs`. Currently only `page.tsx` uses it, but check for future consumers.
- Service page links in tab CTAs — the "Get started →" links likely point to updated V6 service routes (e.g., `/services/citizen-development/` instead of `/services/enablement/`). Confirm CTA destinations match the V6 route plan in `design/MIGRATION.md`.

### URL or routing changes
None. The homepage remains at `/`.

### Content backfill
- If the hero badge text changes from "Canadian mid-market AI" to "Canadian mid-market" (dropping "AI"), update any other page that renders the badge identically. Currently only the homepage renders it.
- Sitemap `lastModified` for `/` should be bumped to the implementation date.

## Acceptance Criteria
- [ ] Homepage renders at `/` without console errors
- [ ] Exactly one `<h1>` ("AI that compounds. Not pilots that stall.")
- [ ] Heading levels sequential (h1 → h2 → h3, no skips)
- [ ] Hero displays three body paragraphs matching verbatim copy
- [ ] Hero right column displays three stat items (10×, 2 wks, 3) with descriptors
- [ ] Hero stats stack below CTAs on mobile
- [ ] "See How it Works →" scrolls to the track tabs section
- [ ] Active delivery strip reads "CURRENTLY IN ACTIVE DELIVERY FOR" with parent-company associations
- [ ] "Is this you?" section renders 2×2 card grid with four verbatim qualification scenarios
- [ ] Bridge text below grid matches verbatim copy
- [ ] Five tabs render: Citizen Dev ★, Executive Enablement, Discovery, Data Readiness, Infrastructure
- [ ] Default active tab is Citizen Dev ★ (first tab)
- [ ] Each tab displays question, heading, body, right-for-you, CTA, pills, and timeline
- [ ] Tab bar spans full viewport width on desktop
- [ ] Five-tab bar has usable mobile treatment (wrap or scroll)
- [ ] Proof section heading reads "PROOF — WHAT WE BUILT. WHAT IT PRODUCED"
- [ ] Proof cards display industry/geography tags in eyebrow
- [ ] All three proof card titles and bodies match verbatim V6 copy
- [ ] Closing CTA heading and sub-text match verbatim V6 copy
- [ ] All "Book a Discovery Call" buttons open the Discovery Call modal
- [ ] All internal links use Next.js `<Link>` component
- [ ] Responsive: all sections collapse cleanly at 375px width
- [ ] `prefers-reduced-motion` respected
- [ ] No forbidden vocabulary from `voice-and-tone.md`
- [ ] All colors, fonts, tracking use brand tokens
- [ ] Parts of the page infrastructure not covered by this enhancement (metadata, structured data, OG) behave identically to before
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes
- [ ] Passes `seo/page-checklist.md` for affected page
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review
- [ ] No rate card, no competitor names, no hours-as-effort in any rendered content

## Related
- `prds/homepage.md` (the feature being enhanced)
- `design/Alphabyte_AI_Site_V6.pdf` page 1 (approved copy source)
- `design/MIGRATION.md` — nav order, Discovery Call modal pattern, OQ2 (Citizen Dev / Enablement collision), OQ8 (homepage tabs vs services index)
- `.claude/skills/alphabyte-brand/voice-and-tone.md`
- `.claude/skills/alphabyte-brand/component-rules.md`
- `.claude/skills/alphabyte-services/service-tracks.md`
- `.claude/skills/alphabyte-services/proof-points.md`

## Notes
- The V6 PDF shows tabs without numbered prefixes (01, 02, etc.). The current implementation renders numbers. If the PDF is intentionally unnumbered, remove the `number` field from the tab data. If this is a design omission, keep numbers. The implementer should compare against the rasterized image at `/tmp/page-homepage-01.png`.
- The five-tab layout on mobile needs care. Five tabs at `grid-cols-2` produce a 3-2 orphan row. Horizontal scroll may be cleaner. Implementer's call.
- "40+ hours per week" in the Sprinklermatic proof card is a specific outcome claim. The proof-points skill flags that outcomes need client confirmation. This copy comes from the approved PDF, so it's treated as confirmed — but surface if there's doubt.
- The hero now makes a strong positioning claim: "Claude is our entire practice." This is a brand statement that should remain exactly as written.
- Tab CTA destinations for the two new tabs (Citizen Dev, Executive Enablement) need to point to the correct V6 routes per MIGRATION.md: `/services/citizen-development/` and `/services/executive-enablement/` respectively. These routes may not exist yet — same accepted-404 state as the original PRD.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28 (shipped)*
