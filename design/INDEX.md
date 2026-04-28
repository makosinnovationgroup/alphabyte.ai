# Alphabyte AI - V7 Page Index

One row per logical page. The `/page` command reads this file to dispatch downstream to `/feature` or `/enhancement`.

Action types:
- `enhance` - existing route, replace content with V7
- `new` - new route, build from scratch
- `replace` - existing route at a different slug, repoint and rewrite
- `retire` - remove route, add redirect

Source: `design/Alphabyte_AI_Site_V7.pdf` (19 pages). Open Questions referenced below are documented in `design/MIGRATION.md`.

| Logical name | Action | PDF page | Route | Original PRD path | Notes |
|---|---|---|---|---|---|
| `homepage` | enhance | 1 | `/` | `/` | Already shipped from V6. V7 unchanged. |
| `services-index` | enhance | 2 | `/services` | `/services` | Replace existing index with the "Where do you start?" decision table. V7 unchanged from V6. |
| `service-executive-enablement` | enhance | 3 | `/services/executive-enablement` | `/services/executive-enablement` | Standalone Executive Enablement page. **NEW V7 content** — three-stat bar, six deliverables, 30-days timeline. Resolves OQ2. |
| `service-citizen-development` | replace | 4 | `/services/citizen-development` | `/citizen-dev` (top-nav, retired) | Standalone Citizen Development page. Add redirect from old top-nav slug per `_redirects`. Content unchanged from V6. |
| `service-discovery` | enhance | 5 | `/services/discovery` | `/services/discovery` | Replace stub with PDF page 5. **V7 adds a three-stat bar** (4 weeks / 3 / No decks). |
| `service-data-readiness` | enhance | 6 | `/services/data-readiness` | `/services/data-readiness` | Replace stub with PDF page 6. **V7 adds a three-stat bar** (Week 2 / 5 dimensions / Zero). |
| `service-infrastructure` | enhance | 7 | `/services/infrastructure` | `/services/infrastructure` | Replace stub with PDF page 7. **V7 adds a three-stat bar** (OAuth 2.0 / Full audit / Production). |
| `tools-index` | enhance | (missing) | `/tools` | `/tools` | No PDF page. See OQ3. Do not dispatch until resolved. |
| `tool-claude` | enhance | 8 | `/tools/claude` | `/tools/claude` | Replace stub with PDF page 8. V7 unchanged. |
| `tool-mcp` | enhance | 9 | `/tools/mcp` | `/tools/mcp` | Replace stub with PDF page 9. V7 unchanged. |
| `tool-custom-ai-agents` | enhance | 10 | `/tools/custom-ai-agents` | `/tools/custom-ai-agents` (?) | Replace stub. V7 unchanged. |
| `tool-on-premise-llm` | enhance | 11 | `/tools/on-premise-llm` | `/tools/on-premise-llm` (?) | Replace stub. V7 unchanged. |
| `blog-index` | new | 12 | `/blog` | (none) | New route. V7 unchanged. |
| `blog-post-template` | new | (missing) | `/blog/[slug]` | (none) | No PDF page. See OQ4. Do not dispatch until resolved. |
| `about` | new | 13 | `/about` | (none) | New route. V7 unchanged. |
| `our-work-index` | new | 14 | `/our-work` | (none) | New route. V7 unchanged. |
| `case-study-sprinklermatic` | new | 15 | `/our-work/sprinklermatic` | (none) | New route. V7 unchanged. |
| `case-study-recirq` | new | 16 | `/our-work/recirq` | (none) | New route. V7 unchanged. |
| `case-study-housing-services-corp` | new | (missing) | `/our-work/housing-services-corp` | (none) | No PDF page. See OQ5. Do not dispatch until resolved. |
| `team-index` | new | 18 | `/team` | (none) | New route. V7 unchanged. |
| `team-adam-nameh` | new | 17 | `/team/adam-nameh` | (none) | New route. V7 unchanged. |
| `contact` | new | 19 | `/contact` | (none) | New route. V7 unchanged. |

## V6 → V7 migration priority

If you've already built service pages from V6, re-run these to pick up V7 changes:

1. `/page service-discovery` — adds three-stat bar
2. `/page service-data-readiness` — adds three-stat bar
3. `/page service-infrastructure` — adds three-stat bar
4. `/page service-executive-enablement` — new V7 page (replaces V6 ambiguous combined Enablement page)
5. `/page service-citizen-development` — content unchanged but unblocked by OQ2 resolution

## Dispatch order recommendation

1. Open Question resolution where blocking (OQ3 for Tools index, OQ5 for Housing Services Corp, OQ4 for blog post template).
2. `homepage` (already shipped).
3. `services-index`, then each service detail (5 services).
4. `tools-index` (after OQ3), then each tool detail.
5. `our-work-index`, then case studies.
6. `team-index`, then `team-adam-nameh`.
7. `about`.
8. `blog-index` (then `blog-post-template` after OQ4).
9. `contact`.

This is a recommendation; the `/page` command does not enforce ordering.
