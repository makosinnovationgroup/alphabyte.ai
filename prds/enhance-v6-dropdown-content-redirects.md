# V6 Dropdown Content and Redirect Verification

## Status
Shipped

## Type
Evolution

## Enhances
- `prds/enhance-v6-foundation.md`

## Motivation
The V6 foundation shipped the 7-item header nav, but the Services dropdown still carries pre-V6 labels, descriptions, and hrefs (Discovery, Data, Enablement, Infrastructure — four items with old slugs and invented descriptions). V6 introduces five services with new slugs and specific copy pulled directly from the approved PDF. The Tools dropdown happens to already match V6, but that hasn't been verified against the PDF as an explicit decision. Meanwhile, the Our Work dropdown children still point to `/case-studies/*` routes — a pragmatic shortcut the foundation PRD accepted as intermediate state. With per-page builds coming next, it's cleaner to align the nav data and routing now so that `/page` invocations land into the correct URL structure from the start.

## Summary
Update the Services dropdown in `navigation.ts` to V6's five-item taxonomy with PDF-sourced descriptions and V6 hrefs. Confirm the Tools dropdown already matches V6 and lock it in. Move case study routes from `/case-studies/*` to `/our-work/*` and add redirects for the old paths. Verify that `public/_redirects` deploys correctly on Cloudflare Pages.

## Changing
- Original: Services dropdown has 4 children — Discovery (`/services/discovery/`), Data (`/services/data/`), Enablement (`/services/enablement/`), Infrastructure (`/services/infrastructure/`) — with descriptions "Scoping, strategy, and roadmaps", "Pipelines, warehousing, and governance", "Training, workshops, and adoption", "MLOps, deployment, and scaling". Updated: 5 children in V6 order — Citizen Development (`/services/citizen-development/`), Executive Enablement (`/services/executive-enablement/`), Discovery (`/services/discovery/`), Data Readiness (`/services/data-readiness/`), Infrastructure (`/services/infrastructure/`) — with descriptions pulled from PDF (see Verbatim copy below).
- Original: Our Work dropdown children point to `/case-studies/sprinklermatic/`, `/case-studies/recirq/`, `/case-studies/hsc/` (pragmatic routing per foundation PRD). Updated: children point to `/our-work/sprinklermatic/`, `/our-work/recirq/`, `/our-work/housing-services-corp/`. Case study page files move to `src/app/our-work/*`. Old `/case-studies/*` URLs redirect to `/our-work/*` equivalents.
- Original: `public/_redirects` contains only `/citizen-dev /services/citizen-development 302`. Updated: extended with `/case-studies/*` → `/our-work/*` redirect rules.

## Decided
- **Services dropdown order and count:** Five items matching V6 PDF page 2 "Where do you start?" table, top to bottom: Citizen Development, Executive Enablement, Discovery, Data Readiness, Infrastructure. If OQ2 resolves to Interpretation 2 (page 3 superseded by page 4), remove Executive Enablement, leaving four items.
- **Services dropdown descriptions — sourced from PDF.** The page 2 table's "Start here" and "What comes next" columns contain service names and pathways, not descriptions. Per the task instruction's fallback rule, descriptions come from each service page's H1 subtitle:
  - Citizen Development: "Every employee, now an AI developer." (PDF page 4)
  - Executive Enablement: "For leadership teams that need a fast, visible win." (PDF page 3, right-column section heading — no standalone page exists; this is the closest verbatim text)
  - Discovery: "What should our AI strategy be?" (PDF page 5)
  - Data Readiness: "Is our data ready for AI?" (PDF page 6)
  - Infrastructure: "How do our systems use AI?" (PDF page 7)
- **Services dropdown hrefs use V6 slugs.** Three of five hrefs (`/services/citizen-development/`, `/services/executive-enablement/`, `/services/data-readiness/`) will 404 until those pages are built via `/page`. This is accepted intermediate state, consistent with the foundation PRD's precedent for `/our-work/`, `/team/`, and `/contact/`. The old pages at `/services/data/` and `/services/enablement/` remain on disk and reachable by direct URL; they are just no longer linked from the dropdown.
- **Tools dropdown: no changes.** Current children already match V6 PDF pages 8–11 exactly — Claude ("Reasoning, writing, and analysis"), MCP ("Connect models to your tools"), Custom AI Agents ("Purpose-built task automation"), On-Premise LLM ("Private, self-hosted models"). Same labels, same hrefs, same order. Verified against the PDF; locking in.
- **Our Work routing: move to `/our-work/*`.** PDF breadcrumbs on pages 15 and 16 use `Home / Our Work / Sprinklermatic` and `Home / Our Work / RecirQ`. INDEX.md routes use `/our-work/*`. Moving the files now means per-page builds via `/page` land at the correct V6 URLs from the start, and the nav dropdown, sitemap, and canonical URLs are all consistent.
- **HSC slug change.** The current stub is at `/case-studies/hsc/`. V6 calls this "Housing Services Corp" at `/our-work/housing-services-corp/`. The file moves and the slug changes. Redirect covers the old URL.
- **Case study page content unchanged.** The file moves are structural only. Page content (metadata, copy, components) stays as-is. Content updates happen when those pages are dispatched via `/page`.
- **Metadata updates in moved pages.** Canonical URLs, OG URLs, and structured data URLs in the moved case study pages must be updated to reflect the new `/our-work/*` paths. This is a mechanical find-and-replace within each file, not a content change.
- **Sitemap updates.** Replace `/case-studies/*` entries with `/our-work/*` entries in `src/app/sitemap.ts`.
- **Redirect format.** `public/_redirects`, Cloudflare Pages plain-text format. All case study redirects use 301 (permanent) since V6 is the final IA. The existing `/citizen-dev` rule stays as 302 (temporary, pending page build).
- **`_redirects` only activates on Cloudflare Pages.** During local development (`pnpm dev`), `_redirects` is not processed by Next.js — old URLs will 404 locally. This is expected and does not need a workaround. Document in the Notes section for developer awareness. Testing redirects requires `wrangler pages dev` or a Cloudflare Pages preview deploy.
- **Trailing slashes.** All hrefs in `navigation.ts` use trailing slashes, consistent with `trailingSlash: true` in `next.config.mjs`. Redirect rules in `_redirects` omit trailing slashes on the source path (Cloudflare normalizes them) but include them on the target.

## Open Questions
- OQ2 (inherited from MIGRATION.md): Citizen Development vs combined Enablement page. If Interpretation 2 is chosen, drop Executive Enablement from the Services dropdown, leaving 4 items. Default implementation includes all 5 items per Interpretation 1. (owner: Mitchell, blocks implementation: no)

## Scope

### In scope
- `navigation.ts` Services dropdown: 4 children → 5 children, new labels, new hrefs, new descriptions
- `navigation.ts` Tools dropdown: confirm already matches V6, no edit needed
- `navigation.ts` Our Work dropdown: children hrefs updated from `/case-studies/*` to `/our-work/*`
- Move case study page files from `src/app/case-studies/` to `src/app/our-work/`
- Update canonical URLs, OG URLs, and structured data URLs in moved pages
- Update `src/app/sitemap.ts` to reflect new `/our-work/*` routes
- Extend `public/_redirects` with `/case-studies/*` → `/our-work/*` rules
- Remove `src/app/case-studies/` directory after move

### Out of scope
- Page-level content changes on any service, tool, or case study page (deferred to `/page`)
- Creating new page files at `/services/citizen-development/`, `/services/executive-enablement/`, or `/services/data-readiness/`
- Updating homepage track tab hrefs (currently point to `/services/data/`, `/services/enablement/` — updated when homepage is rebuilt via `/page`)
- Updating services index page "Get started →" hrefs (same — deferred to `/page services-index`)
- Footer link updates (footer already uses `navigation.ts` for Services/Tools/Our Work columns)
- Adding redirects from old service slugs (`/services/data/`, `/services/enablement/`) to new ones — those redirects should only be added when the new pages exist, to avoid redirecting working pages to 404s
- OG image changes
- Form or modal changes

## Pages & Components

### Modifying
- `src/lib/navigation.ts` — Services children updated (labels, hrefs, descriptions, count), Our Work children hrefs updated
- `src/app/our-work/page.tsx` (moved from `src/app/case-studies/page.tsx`) — canonical URL, OG URL, structured data URL updated to `/our-work/`
- `src/app/our-work/sprinklermatic/page.tsx` (moved from `src/app/case-studies/sprinklermatic/page.tsx`) — canonical/OG/structured data URLs updated
- `src/app/our-work/recirq/page.tsx` (moved from `src/app/case-studies/recirq/page.tsx`) — canonical/OG/structured data URLs updated
- `src/app/our-work/housing-services-corp/page.tsx` (moved from `src/app/case-studies/hsc/page.tsx`) — canonical/OG/structured data URLs updated, slug changed
- `src/app/sitemap.ts` — `/case-studies/*` entries replaced with `/our-work/*` entries
- `public/_redirects` — new redirect rules appended

### Creating
None — all files are moves or edits of existing files. The `src/app/our-work/` directory is created as part of the file move.

## Content

### Verbatim copy
- Services dropdown child 1 label: "Citizen Development"
- Services dropdown child 1 description: "Every employee, now an AI developer."
- Services dropdown child 2 label: "Executive Enablement"
- Services dropdown child 2 description: "For leadership teams that need a fast, visible win."
- Services dropdown child 3 label: "Discovery"
- Services dropdown child 3 description: "What should our AI strategy be?"
- Services dropdown child 4 label: "Data Readiness"
- Services dropdown child 4 description: "Is our data ready for AI?"
- Services dropdown child 5 label: "Infrastructure"
- Services dropdown child 5 description: "How do our systems use AI?"
- Our Work dropdown child labels unchanged: "Sprinklermatic", "RecirQ", "HSC"
- Our Work dropdown footer link unchanged: "View all work"
- Redirect rules (appended to `public/_redirects`):
  ```
  /case-studies/              /our-work/                        301
  /case-studies/sprinklermatic/  /our-work/sprinklermatic/     301
  /case-studies/recirq/       /our-work/recirq/                301
  /case-studies/hsc/          /our-work/housing-services-corp/  301
  ```

### Drafted at implement-time
None — no copy changes.

## Search Intent & SEO
- **Target query:** Inherits from original
- **URL slug:** Case study pages move from `/case-studies/*` to `/our-work/*`. Service dropdown hrefs change but no new pages are created.
- **Meta title:** Unchanged for case study pages (content stays the same)
- **Meta description:** Unchanged for case study pages
- **Structured data:** BreadcrumbList URLs in case study pages update from `/case-studies/*` to `/our-work/*`
- **OG image:** Unchanged

The `/case-studies/*` → `/our-work/*` 301 redirects preserve any existing search equity on the old URLs. The sitemap update ensures crawlers find the new canonical locations. No new pages are indexed.

## Design Notes
Defer to alphabyte-brand skill defaults; no enhancement-specific visual direction. This enhancement changes data and routing, not UI.

One UX note: three Services dropdown items (`/services/citizen-development/`, `/services/executive-enablement/`, `/services/data-readiness/`) will land on 404 pages until those service pages are built via `/page`. The old pages at `/services/data/` and `/services/enablement/` remain live but are no longer linked from the nav. This is the same trade-off the foundation PRD accepted for `/our-work/`, `/team/`, and `/contact/`. If this is unacceptable, an alternative is to keep the old hrefs until each page is rebuilt — but that delays IA alignment and means per-page builds need to handle the href switch as well.

## Motion & Interactivity
None — unchanged from original.

## Impact

### Affected pages or components
- `src/components/header.tsx` — renders `navigation.ts` data; no code change needed, but the dropdown will now show 5 Services items instead of 4, which may affect dropdown width. Implementer should verify the 5-item dropdown fits within the `w-64` container.
- `src/components/footer.tsx` — if the footer dynamically derives service/tool links from `navigation.ts`, the footer Services column will reflect the new 5-item list automatically. Verify.
- Homepage track tabs (`src/app/page.tsx` lines 33, 49) — still reference `/services/data/` and `/services/enablement/`. These are NOT updated in this enhancement (out of scope, deferred to `/page homepage`). Temporary inconsistency between nav dropdown hrefs and homepage track CTA hrefs.
- Services index page (`src/app/services/page.tsx` line 61, 78, 167) — still references old slugs. NOT updated here. Deferred to `/page services-index`.

### URL or routing changes
- `/case-studies/` → `/our-work/` (301 redirect)
- `/case-studies/sprinklermatic/` → `/our-work/sprinklermatic/` (301 redirect)
- `/case-studies/recirq/` → `/our-work/recirq/` (301 redirect)
- `/case-studies/hsc/` → `/our-work/housing-services-corp/` (301 redirect, slug change)
- Services dropdown hrefs change but no old-to-new service redirects are added (old pages remain at old URLs)

### Content backfill
- When `/services/citizen-development/` is built via `/page`, the 404 state resolves.
- When `/services/executive-enablement/` is built via `/page`, the 404 state resolves (if OQ2 keeps this item).
- When `/services/data-readiness/` is built via `/page`, the 404 state resolves. At that point, add a `/services/data/ → /services/data-readiness/` 301 redirect and remove the old `/services/data/` page.
- When `/services/enablement/` is rebuilt or retired via `/page`, decide its relationship to the new Citizen Development and/or Executive Enablement pages. May become a redirect target.
- When the homepage is rebuilt via `/page homepage`, update track tab hrefs from `/services/data/` and `/services/enablement/` to the new V6 slugs.

## Acceptance Criteria
- [ ] Services dropdown shows 5 children in order: Citizen Development, Executive Enablement, Discovery, Data Readiness, Infrastructure
- [ ] Services dropdown child hrefs match V6: `/services/citizen-development/`, `/services/executive-enablement/`, `/services/discovery/`, `/services/data-readiness/`, `/services/infrastructure/`
- [ ] Services dropdown descriptions match PDF verbatim (see Verbatim copy above)
- [ ] Tools dropdown is unchanged: Claude, MCP, Custom AI Agents, On-Premise LLM with existing descriptions
- [ ] Our Work dropdown children point to `/our-work/sprinklermatic/`, `/our-work/recirq/`, `/our-work/hsc/`
- [ ] Our Work dropdown footer link "View all work" points to `/our-work/`
- [ ] Case study pages serve correctly at `/our-work/sprinklermatic/`, `/our-work/recirq/`, `/our-work/housing-services-corp/`
- [ ] `src/app/case-studies/` directory is removed (no orphaned files)
- [ ] Canonical URLs in moved pages reference `/our-work/*` paths
- [ ] OG URLs in moved pages reference `/our-work/*` paths
- [ ] Structured data URLs in moved pages reference `/our-work/*` paths
- [ ] `src/app/sitemap.ts` lists `/our-work/*` entries, not `/case-studies/*`
- [ ] `public/_redirects` contains all redirect rules (citizen-dev + 4 case study redirects)
- [ ] 5-item Services dropdown fits within the desktop dropdown container without overflow or wrapping
- [ ] Mobile menu renders all 5 Services children correctly
- [ ] Footer Services column reflects the updated 5-item list (if derived from navigation.ts)
- [ ] No forbidden vocabulary in any new copy
- [ ] `pnpm build` succeeds without errors
- [ ] `pnpm typecheck` passes
- [ ] Homepage track tab CTAs are NOT changed (still point to old service slugs — out of scope)
- [ ] Services index page CTAs are NOT changed (out of scope)
- [ ] Parts of the site not covered by this enhancement behave identically to before

## Related
- `prds/enhance-v6-foundation.md` (the feature being enhanced)
- `prds/enhance-site-header-option-c.md` (shipped header PRD — header renders the dropdown)
- `prds/nav-clickthrough-and-stub-pages.md` (shipped — established case study stubs at `/case-studies/*`)
- `prds/services-pages.md` (shipped — created the service pages at `/services/data/`, `/services/enablement/`)
- `design/Alphabyte_AI_Site_V6.pdf` — approved design, pages 2–11 for service/tool content, pages 14–16 for Our Work routing
- `design/MIGRATION.md` — OQ2 (Citizen Dev / Enablement collision), OQ6 (legacy redirects)
- `design/INDEX.md` — authoritative route table for V6

## Notes
- The Executive Enablement description ("For leadership teams that need a fast, visible win.") is sourced from the right-column section heading on PDF page 3. Unlike the other four services, Executive Enablement does not have a standalone PDF page with an H1 subtitle. This is the closest verbatim text the PDF provides. If a different description is preferred, it should come from Mitchell or from the reference-doc.
- The three 404-state service dropdown items are a temporary cost of aligning the nav IA early. The alternative — keeping old hrefs until pages are built — would mean every `/page` invocation for a service page also needs to update `navigation.ts`, creating coupling between page builds and nav data. Aligning now keeps those concerns separate.
- The footer dynamically renders navigation data. Verify during implementation whether the footer's Services column pulls from `navigation.ts` children or from a separate list in `footer-data.ts`. If separate, update both.
- `_redirects` redirect rules are processed by Cloudflare Pages at the CDN layer before the static site is served. They do not affect `pnpm dev` — old URLs will 404 locally. To test redirects locally, use `npx wrangler pages dev out` after `pnpm build`.

---
*Created: 2026-04-28*
*Last updated: 2026-04-28 (shipped)*
