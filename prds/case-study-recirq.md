# RecirQ Case Study Page

## Status
Shipped

## Type
New page

## Summary
Full case study page for the RecirQ / Reventory engagement at `/our-work/recirq/`. Replaces the current stub with a data-driven implementation using the existing `CaseStudyPage` component. The page covers two parallel AI programmes — an executive productivity suite and an auction analytics platform — delivered for a circular economy company specializing in used smartphone resale.

## Decided
- Route: `/our-work/recirq/`
- Layout component: `CaseStudyPage` (`src/components/case-study-page.tsx`) — same component used by Sprinklermatic
- All copy is verbatim from PDF page 16 (see Content section below)
- Breadcrumb: Home / Our Work / RecirQ / Reventory (matches PDF)
- Four stats cards in the stats grid
- Six tag pills in the dark hero
- Sidebar includes Client, Services Delivered, Technology, and pull quote
- Closing CTA matches site-wide pattern: "Want to explore what we could build for your operations?" / "45 minutes. No cost. No obligation." / "Book a Discovery Call" (modal)

## Open Questions
None

## Scope

### In scope
- Replace the existing stub at `/our-work/recirq/page.tsx` with a full case study page using the `CaseStudyPage` component
- Dark hero band with eyebrow, H1, subhead, and six tag pills
- Four-card stats grid
- Two-column body with headings, paragraphs, and indented "The Challenge" section
- Right sidebar with Client, Services Delivered, Technology, and pull quote
- Closing CTA section with Discovery Call modal trigger
- Page metadata (title, description, canonical, OG, Twitter)
- BreadcrumbList JSON-LD structured data
- Sitemap entry update

### Out of scope
- Custom OG image (uses `/og/default.png` like Sprinklermatic)
- Changes to the `CaseStudyPage` component itself
- Our Work index page updates (handled separately)
- Any content not visible on PDF page 16

## Pages & Components

### Modifying
- `src/app/our-work/recirq/page.tsx` — replace stub with full case study implementation using `CaseStudyPage`
- `src/app/sitemap.ts` — ensure RecirQ case study is included with appropriate priority

### Creating
None

## Content

### Verbatim copy

**Breadcrumb:** "Home" (linked) / "Our Work" (linked) / "RecirQ / Reventory" (current, unlinked)

**Eyebrow:** "CASE STUDY · CIRCULAR ECONOMY · LIVE SMARTWATCH · RETAIL"

**H1:** "AI-Powered Executive Productivity & Auction Analytics"

**Subhead:** "RecirQ / Reventory"

**Tag pills (6):**
1. "Executive Enablement"
2. "Citizen Development"
3. "Anomaly Analytics"
4. "Predictive Bid Station"
5. "Citizen Command"

**Stats (4 cards):**
1. Value: "2" / Label: "Parallel AI programmes delivered simultaneously"
2. Value: "12+" / Label: "Slack channels read daily by the executive intelligence agent"
3. Value: "52-week" / Label: "Market supply baseline powering the auction analytics platform"
4. Value: "Phase 2" / Label: "Predictive bid decomposition models in active R&D"

**Body — Background (heading):** "Background"

**Body — Background paragraph 1:** "RecirQ Global is a fast-moving technology and operations company specializing in the purchase and resale of used smartphones through weekly vendor auctions. The company acquires devices, grades them in-house, and resells them — a model that demands real-time visibility across supply, bidding performance, and sell-through at every level of the operation."

**Body — Background paragraph 2:** "RecirQ had already built a solid analytics foundation and leadership was leveraging AI tools day-to-day. The foundation was there. What was missing was the intelligence layer at the executive level and within the auction operation to make all of it work together and drive faster, more confident decisions."

**Body — The Challenge (heading, indented):** "The Challenge"

**Body — The Challenge paragraph 1 (indented):** "RecirQ operates in a market where conditions shift week to week. A new device launch, a trade-in cycle, or a sudden shift in vendor supply can change auction dynamics overnight. The company's existing tooling was strong at estimating the internal value of a device after re-grading and resale. What it could not do was answer the questions that drive auction outcomes: Is the market flooded or scarce for a specific model this week? At what bid price does the company maximize expected margin while controlling cash outlay?"

**Body — The Challenge paragraph 2 (indented):** "At the same time, leadership was managing a high volume of daily decisions across multiple teams and platforms. Critical signals — credit alerts, operations updates, open commitments, financial spend — were scattered across Slack, Monday.com, Fireflies, QuickBooks, and calendar systems. There was no unified intelligence layer that surfaced what mattered, when it mattered."

**Body — AI-Powered Executive Productivity Suite (heading):** "AI-Powered Executive Productivity Suite"

**Body — Executive Suite paragraph 1:** "Alphabyte designed and delivered a custom Claude plugin built around how RecirQ's leadership actually operates. Deployed as a Claude Cworks project, the solution combines a structured knowledge layer with purpose-built agents and on-demand workflows."

**Body — Executive Suite paragraph 2:** "Scheduled intelligence runs autonomously: a Daily Brief reads 12+ Slack channels and the day's calendar to deliver a morning summary, delivering a prioritized summary covering credit live alerts, prepack holds, team activity, and a curated \"Needs Your Attention\" list. A Weekly Digest provides a full-work-week rollup. An Ops Report generates every Monday morning from four Monday.com boards. A Call Update monitors new recordings, generates a summary for each, and routes it to the appropriate Slack channel."

**Body — Executive Suite paragraph 3:** "On-demand workflows handle high-value commands: Call Prep delivers a one-page pre-meeting brief with talking points pulled from Slack History, transcripts, and calendar records. Meeting Summary produces post-call debriefs with decisions and action items by owner. The Spend Report generates a four-tab Excel workbook from the General Ledger, Amex, and Capital One data. Four isolated agents handle execution, each scoped strictly to the tools it requires."

**Body — AI-Driven Auction Analytics Platform (heading):** "AI-Driven Auction Analytics Platform"

**Body — Auction Analytics paragraph 1:** "The second engagement brought AI-powered supply-side intelligence and bid decisioning directly into RecirQ's auction workflow."

**Body — Auction Analytics paragraph 2:** "Phase 1 delivered operational visibility through a structured Bronze, Silver, and Gold data environment ingesting over a year of vendor auction data. Two core KPI systems were delivered: the Market Supply Index (MSI), a statistical signal that detects how this week's listed supply for any given device model, grade, and storage combination compares to the 52-week norm; and the Auction and Bid Performance Suite, a single view per auction showing coverage, win rates, cost per unit, and realization metrics."

**Body — Auction Analytics paragraph 3:** "Phase 2 extends the platform into machine learning. Three predictive models are in development: a censored quantile model estimating the distribution of winning prices for a given device cohort, a lot-to-win probability curve estimating the probability of winning at any given price, and an optimal bid price band that combines the pricing calculator with the probability model to recommend conservative, base, and aggressive bid levels with associated expected margin, units captured, and cash outlay."

**Sidebar — Client name:** "RecirQ / Reventory"
**Sidebar — Client meta:** "Circular economy · Used smartphones · Retail"

**Sidebar — Services Delivered:**
1. "Executive Productivity Suite"
2. "Citizen Dev Enablement"
3. "Data Architecture (Bronze/Silver/Gold)"
4. "Auction Analytics Platform"
5. "Market Supply Index (MSI)"
6. "Predictive Bid Decisioning (Phase 2)"

**Sidebar — Technology:**
1. "Claude (Anthropic)"
2. "Claude Cworks"
3. "Google BigQuery"
4. "Slack API"
5. "Monday.com"
6. "Fireflies"

**Sidebar — Pull quote:** "Two parallel AI programmes — executive intelligence and auction analytics — each communicating on a shared data architecture."

**Closing CTA heading:** "Want to explore what we could build for your operations?"
**Closing CTA subhead:** "45 minutes. No cost. No obligation."
**Closing CTA button:** "Book a Discovery Call" (opens modal)

### Drafted at implement-time
- Meta title: draft at implement-time (under 60 chars before " — Alphabyte" suffix)
- Meta description: draft at implement-time (140–160 chars, brand voice)
- OG/Twitter description: draft at implement-time (shorter variant)

## Search Intent & SEO
- **Target query:** "RecirQ AI case study", "AI auction analytics case study", "executive productivity AI consulting"
- **URL slug:** `/our-work/recirq/`
- **Meta title:** draft at implement-time (e.g. "RecirQ — Executive Productivity & Auction Analytics")
- **Meta description:** draft at implement-time (140–160 chars)
- **Structured data:** BreadcrumbList (Home > Our Work > RecirQ > Reventory)
- **OG image:** `/og/default.png` (existing default)

## Design Notes
Defer to `CaseStudyPage` component layout — identical structure to Sprinklermatic. Dark hero band, stats grid, two-column body with sidebar, closing CTA. The "The Challenge" section uses the indented layout (blue left border) matching Sprinklermatic's implementation.

## Motion & Interactivity
None — static content page. Discovery Call button triggers the site-wide modal via `DiscoveryCallButton`.

## Acceptance Criteria
- [ ] Page renders at `/our-work/recirq/` without console errors
- [ ] Uses `CaseStudyPage` component — no rebuilt layout
- [ ] All verbatim copy from PDF page 16 appears exactly as specified
- [ ] Dark hero displays eyebrow, H1, subhead, and six tag pills
- [ ] Stats grid shows four cards with correct values and labels
- [ ] Body sections render with correct heading hierarchy and indented "The Challenge" section
- [ ] Sidebar displays Client, Services Delivered (6 items), Technology (6 items), and pull quote
- [ ] Breadcrumb shows Home > Our Work > RecirQ / Reventory with correct links
- [ ] Closing CTA triggers Discovery Call modal
- [ ] BreadcrumbList JSON-LD structured data is valid
- [ ] Page metadata includes title, description, canonical, OG, and Twitter fields
- [ ] Sitemap includes the route with appropriate priority
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` clean
- [ ] Passes seo/page-checklist.md
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks (metadata descriptions)

## Related
- `prds/case-study-sprinklermatic.md` — sibling case study, same component
- `prds/case-study-page-component.md` — PRD for the shared CaseStudyPage component
- `src/components/case-study-page.tsx` — the layout component to use
- `.claude/skills/alphabyte-services/proof-points.md` — RecirQ proof point framing

## Notes
The existing stub at `/our-work/recirq/page.tsx` is replaced entirely. The stub's metadata (WhatsApp Sales Command Center framing) is outdated relative to the PDF, which frames the engagement as two parallel programmes: Executive Productivity Suite and Auction Analytics Platform.

The PDF shows six tag pills but only five are clearly legible. The sixth may be "Citizen Command" — confirm against the rasterized image during implementation. If unclear, the implementer should use the five that are clearly visible and flag the sixth.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29 (shipped)*
