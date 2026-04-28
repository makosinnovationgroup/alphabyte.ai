# Alphabyte AI - V6 Page Index

One row per logical page. The `/page` command reads this file to dispatch downstream to `/feature` or `/enhancement`.

Action types:
- `enhance` - existing route, replace content with V6
- `new` - new route, build from scratch
- `replace` - existing route at a different slug, repoint and rewrite
- `retire` - remove route, add redirect

Source: `design/Alphabyte_AI_Site_V6.pdf` (19 pages). Open Questions referenced below are documented in `design/MIGRATION.md`.

| Logical name | Action | PDF page | Route | Original PRD path | Notes |
|---|---|---|---|---|---|
| `homepage` | enhance | 1 | `/` | `/` | New tabs, "Currently in active delivery for" strip, "Is this you?" grid, three proof cards, closing CTA. |
| `services-index` | enhance | 2 | `/services` | `/services` | Replace existing index with the "Where do you start?" decision table. |
| `service-enablement` | new | 3 | `/services/enablement` | (none) | Combined Citizen Developer Enablement + Executive Enablement page. Two-column layout per PDF page 3. |
| `service-citizen-development` | replace | 4 | `/services/citizen-development` | `/citizen-dev` (top-nav, retired) | Standalone Citizen Development page. Add redirect from old top-nav slug per `_redirects`. |
| `service-discovery` | enhance | 5 | `/services/discovery` | `/services/discovery` | Replace stub with PDF page 5. |
| `service-data-readiness` | enhance | 6 | `/services/data-readiness` | `/services/data-readiness` | Replace stub with PDF page 6. |
| `service-infrastructure` | enhance | 7 | `/services/infrastructure` | `/services/infrastructure` | Replace stub with PDF page 7. |
| `tools-index` | enhance | (missing) | `/tools` | `/tools` | No PDF page. See OQ3. Do not dispatch until resolved. |
| `tool-claude` | enhance | 8 | `/tools/claude` | `/tools/claude` | Replace stub with PDF page 8. |
| `tool-mcp` | enhance | 9 | `/tools/mcp` | `/tools/mcp` | Replace stub with PDF page 9. |
| `tool-custom-ai-agents` | enhance | 10 | `/tools/custom-ai-agents` | `/tools/custom-ai-agents` (?) | Replace stub. Confirm prior slug; if different, treat as `replace` and add redirect. |
| `tool-on-premise-llm` | enhance | 11 | `/tools/on-premise-llm` | `/tools/on-premise-llm` (?) | Replace stub. Confirm prior slug; if different, treat as `replace` and add redirect. |
| `blog-index` | new | 12 | `/blog` | (none) | New route. |
| `blog-post-template` | new | (missing) | `/blog/[slug]` | (none) | No PDF page. See OQ4. Do not dispatch until resolved. |
| `about` | new | 13 | `/about` | (none) | New route per the brief (existing site listed only homepage, services, tools). |
| `our-work-index` | new | 14 | `/our-work` | (none) | New route. |
| `case-study-sprinklermatic` | new | 15 | `/our-work/sprinklermatic` | (none) | New route. |
| `case-study-recirq` | new | 16 | `/our-work/recirq` | (none) | New route. |
| `case-study-housing-services-corp` | new | (missing) | `/our-work/housing-services-corp` | (none) | No PDF page. See OQ5. Do not dispatch until resolved. |
| `team-index` | new | 18 | `/team` | (none) | New route. Six member cards, only Adam links to a profile this round. |
| `team-adam-nameh` | new | 17 | `/team/adam-nameh` | (none) | New route. Other five members display "Bio page coming soon" and do not get profiles this round. |
| `contact` | new | 19 | `/contact` | (none) | New route. Renders the same form as the Discovery Call modal plus a contact info sidebar. Coexists with the modal. |

## Dispatch order recommendation

After Phase 1 foundation lands (see `phase-1-foundation-prompt.md`), invoke pages roughly in this order:

1. Open Question resolution where blocking (OQ3 for Tools index, OQ5 for Housing Services Corp, OQ4 for blog post template).
2. `homepage` (everything routes from here).
3. `services-index`, then each service detail (5 services: Enablement, Citizen Development, Discovery, Data Readiness, Infrastructure).
4. `tools-index` (after OQ3), then each tool detail.
5. `our-work-index`, then case studies.
6. `team-index`, then `team-adam-nameh`.
7. `about`.
8. `blog-index` (then `blog-post-template` after OQ4).
9. `contact`.

This is a recommendation; the `/page` command does not enforce ordering.