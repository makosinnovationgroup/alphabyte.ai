# Anonymize Case Studies

## Status
Shipped

## Type
Cross-cutting

## Summary
Sprinklermatic and RecirQ have indicated they don't want their company names on the Alphabyte site. This feature replaces all client-identifying names (Sprinklermatic, EJ Capital, RecirQ, Reventory) with industry-based descriptions across the entire codebase. The work narratives, outcomes, and architecture descriptions stay intact — only the names change. Routes move from client-named slugs to industry-descriptive slugs, with redirects from the old URLs.

## Decided
- Sprinklermatic / EJ Capital → "A $200M+ fire protection contractor" (short form: "Fire Protection Contractor")
- RecirQ / Reventory → "A circular economy startup" (short form: "Circular Economy Startup")
- Housing Services Corp. stays named — no removal request received
- Case study routes change:
  - `/our-work/sprinklermatic/` → `/our-work/fire-protection-compliance/`
  - `/our-work/recirq/` → `/our-work/circular-economy-platform/`
  - `/our-work/housing-services-corp/` — unchanged
- Old routes get 301 redirects in `public/_redirects`
- Navigation updates to match new route slugs
- All outcomes, architecture, and problem-solution copy stays — only client names are removed
- Blog post internal links pointing to the old deleted Sprinklermatic blog post (`/blog/sprinklermatic-nfpa-compliance/`) should be removed or rewritten since that post was already deleted

## Open Questions
None

## Scope

### In scope
- Replace all Sprinklermatic / EJ Capital references in site code (`src/app/`, `src/components/`, `src/lib/`, `content/`)
- Replace all RecirQ / Reventory references in site code
- Rename case study page files and update routes
- Update `src/lib/navigation.ts` with new slugs and labels
- Update `src/app/sitemap.ts` with new routes
- Update `src/components/home/trusted-by.tsx` — replace named clients with industry descriptors
- Update `src/components/home/proof-points.tsx` — replace named clients in eyebrows and any body copy
- Update `src/app/our-work/page.tsx` — index cards, metadata, structured data
- Update `src/app/about/page.tsx` — active delivery section
- Update tool pages (`claude`, `mcp`, `custom-ai-agents`) — proof point eyebrows and links
- Update `content/team/adam-nameh.json` — articles referencing the old Sprinklermatic blog post
- Update blog posts referencing Sprinklermatic (`citizen-developer-enablement-playbook.mdx`, `how-to-build-a-custom-mcp-server.mdx`) — remove client name, keep the work description
- Add 301 redirects in `public/_redirects` for old routes
- Update `src/app/our-work/page.tsx` metadata/description to remove client names

### Out of scope
- Removing or anonymizing Housing Services Corp. (no removal request)
- Modifying PRD files, skill files, or design documents (internal reference, not public-facing)
- Rewriting the case study narratives themselves — only names change, not the story
- Creating new OG images

## Pages & Components

### Modifying
- `src/lib/navigation.ts` — update Our Work children labels and hrefs
- `src/app/sitemap.ts` — update case study URLs
- `src/components/home/trusted-by.tsx` — replace client names with industry descriptors
- `src/components/home/proof-points.tsx` — replace client names in eyebrows
- `src/app/our-work/page.tsx` — metadata, structured data, case study card data
- `src/app/about/page.tsx` — active delivery section tags
- `src/app/tools/claude/page.tsx` — proof point eyebrows and hrefs
- `src/app/tools/mcp/page.tsx` — proof point eyebrows and hrefs
- `src/app/tools/custom-ai-agents/page.tsx` — proof point eyebrows and hrefs
- `src/app/our-work/sprinklermatic/page.tsx` — rename file, replace all client names in copy
- `src/app/our-work/recirq/page.tsx` — rename file, replace all client names in copy
- `content/team/adam-nameh.json` — update or remove article reference to deleted blog post
- `content/blog/citizen-developer-enablement-playbook.mdx` — remove Sprinklermatic name from body
- `content/blog/how-to-build-a-custom-mcp-server.mdx` — remove Sprinklermatic name from body
- `public/_redirects` — add redirects for old routes

### Creating
- `src/app/our-work/fire-protection-compliance/page.tsx` — renamed from sprinklermatic
- `src/app/our-work/circular-economy-platform/page.tsx` — renamed from recirq

## Content

### Verbatim copy
- Trusted By bar label for Sprinklermatic: "Fire Protection Contractor"
- Trusted By bar label for RecirQ: "Circular Economy Startup"
- Our Work card clientName for Sprinklermatic: "Fire Protection Contractor"
- Our Work card clientName for RecirQ: "Circular Economy Startup"
- Our Work card headerTags for Sprinklermatic: "FIRE PROTECTION · PE-BACKED · NORTH AMERICA"
- Our Work card headerTags for RecirQ: "CIRCULAR ECONOMY · USED SMARTPHONES · GLOBAL"

### Drafted at implement-time
- Updated metadata descriptions for `/our-work/` that remove client names — keep the same structure, replace names with industry descriptors
- Updated eyebrow text on tool pages — replace client names with industry descriptors, keep the industry/geography qualifiers
- Updated proof point eyebrows on homepage — replace names with industry descriptors
- Updated about page active delivery tags — replace names with industry descriptors
- Blog post body text where Sprinklermatic is mentioned — rewrite sentences to describe "a mid-market fire protection contractor" or similar without naming the client
- Case study page copy — global find-replace of client names with industry descriptor, then review for readability

## Search Intent & SEO
- **Target query:** N/A (no new routes — renamed routes with redirects)
- **URL slugs:** `/our-work/fire-protection-compliance/`, `/our-work/circular-economy-platform/`
- **Meta title:** Draft at implement-time — replace client names with industry descriptors
- **Meta description:** Draft at implement-time — replace client names with industry descriptors
- **Structured data:** Update any JSON-LD on case study pages and `/our-work/` index that contains client names
- **OG image:** N/A

## Design Notes
Defer to alphabyte-brand skill defaults. No visual changes — this is a copy and routing change only.

## Motion & Interactivity
None

## Acceptance Criteria
- [ ] Zero instances of "Sprinklermatic" in any file under `src/` or `content/` (excluding PRDs, skills, and design docs)
- [ ] Zero instances of "EJ Capital" in any file under `src/` or `content/`
- [ ] Zero instances of "RecirQ" in any file under `src/` or `content/`
- [ ] Zero instances of "Reventory" in any file under `src/` or `content/`
- [ ] `/our-work/sprinklermatic/` returns 301 redirect to `/our-work/fire-protection-compliance/`
- [ ] `/our-work/recirq/` returns 301 redirect to `/our-work/circular-economy-platform/`
- [ ] `/case-studies/sprinklermatic/` redirect chain updated to point to new route
- [ ] `/case-studies/recirq/` redirect chain updated to point to new route
- [ ] Navigation shows updated labels and hrefs for case studies
- [ ] Housing Services Corp. references are unchanged
- [ ] All case study outcomes, architecture descriptions, and deliverable narratives remain intact
- [ ] `pnpm typecheck` passes
- [ ] `pnpm build` succeeds with all routes generating
- [ ] No broken internal links (all hrefs point to valid routes)
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Passes alphabyte-services hard rules — no rate card, no competitor names, no hours-as-effort

## Related
- `prds/case-study-sprinklermatic.md` — original Sprinklermatic case study PRD
- `prds/case-study-recirq.md` — original RecirQ case study PRD
- `.claude/skills/alphabyte-services/proof-points.md` — public-safe framings (will need updating separately as an internal doc)

## Notes
- The `content/blog/alphabyte-blog-research.html` file also contains references but is an untracked research artifact, not published content — leave it as-is.
- Adam Nameh's team JSON references a deleted blog post (`sprinklermatic-nfpa-compliance`). The article entry should be removed since the post no longer exists.
- After this ships, the `proof-points.md` skill file should be updated to reflect the anonymization policy, but that's internal documentation and out of scope for this implementation.

---
*Created: 2026-05-04*
*Last updated: 2026-05-04*
*Shipped: 2026-05-04*
