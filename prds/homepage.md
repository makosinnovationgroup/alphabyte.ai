# Homepage

## Status
Shipped

## Type
New page

## Summary
Replace the placeholder homepage at `/` with the production homepage for alphabyte.ai. The page is the highest-stakes brand expression for the CEO/CTO review: eight sections that introduce Alphabyte's four-track AI consulting model, show three active proof points, and drive visitors toward a Strategy Sprint booking. The design follows Option C — light theme, editorial typography, structured tab navigation, and restrained motion.

## Decided
- Visual direction: Option C light theme. Off-white canvas, white elevated surfaces, blue accents, black CTA buttons. No gradient hero, no photography.
- Hero headline: "AI that compounds. Not pilots that stall." — "compounds" in Alphabyte Blue, rest in foreground. Verbatim, no edits.
- Hero sub-head: "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada. Four tracks. Real deployments. No junior bench." Verbatim.
- Eyebrow badge: pill-shaped outlined badge in Alphabyte Blue — "★ Claude Partner · Canadian mid-market AI". Unicode star glyph, interpunct separator.
- Primary CTA: "Book a Strategy Sprint" using the `dark` Button variant. Links to `/services/discovery/`.
- Secondary CTA: "See our services →" text link in Alphabyte Blue. Links to `/services/`.
- Track tabs: four tabs on a dark bar spanning full viewport width. Discovery (active by default), Data Readiness, Enablement ★, Infrastructure. Numbered 01–04. Active tab has top-edge Alphabyte Blue accent and blue text. Tabs switch content below via client-side state; no page navigation.
- Track tab mobile pattern: implementer's call. Horizontal scroll is the recommended default; refinable via `/enhancement`.
- Proof point cards: three cards with verbatim copy from `alphabyte-services/proof-points.md`. Cards are visual references, not links.
- Closing CTA section: centered, quiet — "Not sure where you fit?" heading, sub-text, and "Book a Strategy Sprint →" button.
- No pricing on this page. Homepage is positioning, not a quote.
- Client parent associations (EJ Capital, Reventory) treated as approved — they appear publicly on alphabytesolutions.com already. Tracked as non-blocking open question for Mitchell to confirm.
- OG image: `/og/default.png` (doesn't exist yet). Acceptable for `*.pages.dev` review; must be created before custom domain cutover.
- Structured data: WebPage JSON-LD on the homepage (Organization schema already in root layout).
- Tab switching: instant or near-instant. No crossfade, no slide animation. Motion must respect `prefers-reduced-motion`.
- All copy on this page has been voice-checked against `voice-and-tone.md`. No forbidden vocabulary.

## Open Questions
- Client parent associations: are Sprinklermatic / EJ Capital and RecirQ / Reventory associations confirmed for public marketing? (owner: Mitchell, blocks implementation: no — treated as approved per current public presence)
- OG image: `/public/og/default.png` doesn't exist. Needs creation before custom domain cutover. (owner: Mitchell, blocks implementation: no)
- `/services/` index page: "See our services" secondary CTA links to `/services/`, which doesn't exist yet. Same accepted-state as other 404 link targets. (owner: Mitchell, blocks implementation: no)

## Scope

### In scope
- Wholesale rewrite of `src/app/page.tsx` with eight sections: hero, trusted-by row, track tabs, active track detail, proof points, closing CTA
- Full responsive behavior (375px and up) for all sections
- Page-level metadata (title, description, canonical, OG, Twitter)
- WebPage structured data (JSON-LD)
- `src/app/sitemap.ts` lastModified bump
- New homepage section components as needed (likely under `src/components/home/`)
- Track tab interactivity (client-side state, `"use client"` component)

### Out of scope
- Individual service track pages (`/services/discovery/`, `/services/data/`, etc.) — separate PRDs
- Case study detail pages (`/case-studies/*`) — separate PRDs
- OG image creation — separate concern
- Header or footer changes — already shipped
- Pricing display — homepage doesn't show prices
- Blog page — separate PRD
- About page — separate PRD

## Pages & Components

### Modifying
- `src/app/page.tsx` — wholesale rewrite from placeholder to production homepage
- `src/app/sitemap.ts` — bump `lastModified` date

### Creating
- `src/components/home/hero.tsx` — hero section with eyebrow badge, headline, sub-head, CTA pair
- `src/components/home/trusted-by.tsx` — client name pills row
- `src/components/home/track-tabs.tsx` — full-width dark tab bar (client component)
- `src/components/home/track-detail.tsx` — active track content area with two-column layout
- `src/components/home/proof-points.tsx` — three case study cards
- `src/components/home/closing-cta.tsx` — centered closing CTA section

## Content

### Verbatim copy

**Hero eyebrow badge:** "★ Claude Partner · Canadian mid-market AI"

**Hero headline (h1):** "AI that compounds. Not pilots that stall." — "compounds" rendered in Alphabyte Blue.

**Hero sub-head:** "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada. Four tracks. Real deployments. No junior bench."

**Hero primary CTA:** "Book a Strategy Sprint"

**Hero secondary CTA:** "See our services →"

**Trusted-by eyebrow:** "TRUSTED BY"

**Trusted-by pills:** "Sprinklermatic", "RecirQ", "Housing Services Corp."

**Track tab labels:**
- "01" / "Discovery"
- "02" / "Data Readiness"
- "03" / "Enablement ★"
- "04" / "Infrastructure"

**Track detail — Discovery (01):**
- Question: *"What should our AI strategy be?"*
- Heading (h2): "Discovery"
- Body: "Stakeholder workshops, use case prioritization, gap analysis, and a roadmap you leave with. The right starting point when clarity is what's missing."
- CTA: "Get started →" → `/services/discovery/`
- What's included eyebrow: "WHAT'S INCLUDED"
- Pills: "Up to 10 workshops", "Use case development ×3", "Gap analysis", "Findings & roadmap"

**Track detail — Data Readiness (02):**
- Question: *"Is our data ready for AI?"*
- Heading (h2): "Data Readiness"
- Body: "Data quality audit, governance assessment, AI readiness scorecard, and a remediation pathway. Protects everything downstream."
- CTA: "Get started →" → `/services/data/`
- Pills: "Data quality audit", "Governance assessment", "AI readiness scorecard", "Remediation pathway"

**Track detail — Enablement (03):**
- Question: *"How do our people use AI?"*
- Heading (h2): "Enablement"
- Body: "Custom Claude environment for leadership, plus citizen-dev enablement for teams. The fastest path to visible ROI."
- CTA: "Get started →" → `/services/enablement/`
- Pills: "Executive Productivity Suite", "Team Citizen Dev", "Custom skills", "Hypercare"

**Track detail — Infrastructure (04):**
- Question: *"How do our systems use AI?"*
- Heading (h2): "Infrastructure"
- Body: "Custom MCP servers, autonomous agents, on-premise LLMs, fine-tuned models. Where AI stops being a productivity tool and becomes operational infrastructure."
- CTA: "Get started →" → `/services/infrastructure/`
- Pills: "Custom MCP servers", "AI agents", "On-premise LLM", "Fine-tuned LLMs"

**Proof points eyebrow:** "PROOF POINTS"

**Proof point card 1:**
- Eyebrow: "SPRINKLERMATIC / EJ CAPITAL"
- Title (h3): "Nine-initiative AI Command System"
- Body: "Azure warehouse, custom MCP server (OAuth 2.0), Claude Desktop plugin, HITL gate for five autonomous agents. NFPA compliance agent live."

**Proof point card 2:**
- Eyebrow: "RECIRQ / REVENTORY"
- Title (h3): "WhatsApp Sales Command Center"
- Body: "Claude-powered semantic analysis feeding real-time BigQuery dashboard. Citizen dev SDLC plugin deployed org-wide."

**Proof point card 3:**
- Eyebrow: "HOUSING SERVICES CORP."
- Title (h3): "Data Strategy & AI Roadmap"
- Body: "AI enablement roadmap delivered. Claude-based agents recommended for cross-program reporting and anomaly detection."

**Closing CTA heading (h2):** "Not sure where you fit?"

**Closing CTA sub-text:** "A Strategy Sprint answers that in three to five weeks. No ongoing commitment."

**Closing CTA button:** "Book a Strategy Sprint →"

### Drafted at implement-time
None — all copy is verbatim.

## Search Intent & SEO

- **Target query:** "AI consulting Canada", "AI consultancy mid-market", "Alphabyte AI"
- **URL slug:** `/` (existing route, content replacement)
- **Meta title:** "AI Consulting for Canadian Mid-Market Organizations" (renders as "AI Consulting for Canadian Mid-Market Organizations — Alphabyte" via template — 59 chars with suffix)
- **Meta description:** "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada. Four tracks. Real deployments. No junior bench." (140 chars)
- **Structured data:** WebPage (page-level) + Organization (already in root layout). Consider ProfessionalService alongside Organization.
- **OG image:** `/og/default.png` — does not exist yet. Acceptable for preview deploy; must be created before custom domain cutover.

## Design Notes

- Hero: left-aligned content block, generous vertical padding (`py-24` or larger), content max-width roughly half the desktop viewport (right side is intentional whitespace). No gradient background — sits on `bg-canvas` or `bg-white`.
- Eyebrow badge: pill-shaped with thin `border-alphabyte-blue`, `text-alphabyte-blue`, transparent background, `rounded-full`, comfortable `px-4 py-1.5` padding. Unicode ★ glyph, not an icon component.
- Headline: `text-display tracking-brand-tight`. "compounds" wrapped in a `<span>` with `text-alphabyte-blue`.
- Sub-head: `text-body`, `max-w-[60ch]`, `text-foreground`.
- Track tabs bar: breaks out of `max-w-7xl` to span full viewport width. Background: `bg-foreground` (near-black `#171717`). Four equal-width grid columns. Thin vertical dividers between tabs (low-contrast on dark). Active tab: 2–3px top-edge line in Alphabyte Blue. Tab numbers: small, muted text. Tab labels: `text-body-sm` or slightly larger.
- Track detail: returns to `max-w-7xl` content container. `bg-canvas` surface. Two-column grid on desktop (`lg:grid-cols-2`), stacked on mobile.
- Proof points: eyebrow label with thin horizontal hairline rule extending right across column width. Three cards in `lg:grid-cols-3`, stacking on mobile. Cards: `bg-white`, `border border-border-default`, comfortable padding.
- Closing CTA: centered, `py-24` or larger, sits directly on canvas. Heading is large but regular weight (not bold). Button centered below text.

## Motion & Interactivity

- **Tab switching:** instant content swap via React state. No crossfade, no slide animation. If the implementer wants a very short opacity transition (100–150ms ease-out), that's acceptable per `component-rules.md` Option C motion guidance — but not required.
- **Hover states:** 200ms color transitions on all interactive elements (buttons, links, tab items). Per Option C motion tier.
- **Scroll-triggered reveals:** none on this page. Content renders statically.
- **`prefers-reduced-motion`:** all animations (including any tab transition) must be disabled when the user prefers reduced motion. Use `useReducedMotion` from `motion/react` or CSS media query.

## Acceptance Criteria
- [ ] Homepage renders at `/` without console errors
- [ ] Exactly one `<h1>` on the page ("AI that compounds. Not pilots that stall.")
- [ ] Heading levels are sequential (h1 → h2 → h3, no skips)
- [ ] All eight sections render: hero, trusted-by, track tabs, track detail, proof points, closing CTA
- [ ] Track tabs switch content without page navigation
- [ ] All four track variants display correct question, heading, body, pills, and CTA destination
- [ ] Default active tab is Discovery (01)
- [ ] Enablement tab shows ★ indicator
- [ ] Track tab bar spans full viewport width on desktop
- [ ] Responsive: all sections collapse cleanly at 375px width
- [ ] Track tabs have a usable mobile treatment (horizontal scroll or equivalent)
- [ ] Track detail section stacks to single column on mobile
- [ ] Proof point cards stack vertically on mobile
- [ ] Page exports metadata with page-specific title, description, canonical
- [ ] Meta title under 60 chars after template suffix
- [ ] Meta description 140–160 chars
- [ ] WebPage JSON-LD schema present
- [ ] `src/app/sitemap.ts` includes `/` with current `lastModified`
- [ ] All internal links use Next.js `<Link>` component
- [ ] All button/link CTA targets are correct (`/services/discovery/`, `/services/`, etc.)
- [ ] Interactive elements have visible focus states
- [ ] `prefers-reduced-motion` respected — no animation when preference is set
- [ ] No forbidden vocabulary from `voice-and-tone.md` in any rendered copy
- [ ] All colors, fonts, and tracking use brand tokens from `tailwind.config.ts`
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes
- [ ] Passes `seo/page-checklist.md`
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review
- [ ] No rate card, no competitor names, no hours-as-effort in any rendered content

## Related
- `prds/enhance-homepage-v6.md` — V6 approved copy enhancement (hero rewrite, 5 tabs, qualification grid, updated proof cards)
- `prds/backlog/gap-homepage-placeholder-copy.md` — promoted by this PRD (placeholder copy replacement)
- `prds/enhance-site-header-option-c.md` — header already re-themed to Option C
- `prds/enhance-site-footer-option-c.md` — footer already re-themed to Option C
- `.claude/skills/alphabyte-brand/voice-and-tone.md` — reference copy section contains the hero headline as an exemplar
- `.claude/skills/alphabyte-services/service-tracks.md` — source for track content
- `.claude/skills/alphabyte-services/proof-points.md` — source for case study cards

## Notes
- The hero headline "AI that compounds. Not pilots that stall." is listed as exemplar copy in `voice-and-tone.md` reference copy section. It must be used exactly verbatim.
- All four track detail link targets (`/services/discovery/`, `/services/data/`, `/services/enablement/`, `/services/infrastructure/`) currently 404. This is accepted state — those pages are separate PRDs.
- Proof point cards are intentionally non-interactive (no links, no hover lift). They may become linked in a future enhancement when case study pages exist.
- The "Up to 10 workshops" and "Use case development ×3" pills are illustrative scoping examples, not guaranteed deliverables — this framing is acceptable per `pricing.md` guidance on deliverable counts.
- The track tab component will need `"use client"` for state management. Keep the page-level component as a server component and isolate the interactive track section.
- Component file structure under `src/components/home/` is a recommendation. The implementer may consolidate if the component boundaries feel artificial — the acceptance criteria are section-level, not file-level.

---
*Created: 2026-04-27*
*Last updated: 2026-04-27*
