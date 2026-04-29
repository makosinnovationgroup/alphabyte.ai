# Alphabyte AI - V8 Page Index

One row per logical page. The `/page` command reads this file to dispatch downstream to `/feature` or `/enhancement`.

Action types:
- `enhance` - existing route, replace content with V8
- `new` - new route, build from scratch
- `replace` - existing route at a different slug, repoint and rewrite
- `retire` - remove route, add redirect

Source: `design/Alphabyte_AI_Site_V8.pdf` (21 pages). Open Questions referenced below are documented in `design/MIGRATION.md`.

| Logical name | Action | PDF page | Route | Original PRD path | Notes |
|---|---|---|---|---|---|
| `homepage` | enhance | 1 | `/` | `/` | Already shipped from V6/V7. V8 unchanged. |
| `services-index` | enhance | 2 | `/services` | `/services` | Already shipped. V8 unchanged. |
| `service-executive-enablement` | enhance | 3 | `/services/executive-enablement` | `/services/executive-enablement` | Already shipped from V7. V8 unchanged. |
| `service-citizen-development` | replace | 4 | `/services/citizen-development` | `/citizen-dev` (top-nav, retired) | Already shipped. V8 unchanged. |
| `service-discovery` | enhance | 5 | `/services/discovery` | `/services/discovery` | Already shipped. V8 unchanged. |
| `service-data-readiness` | enhance | 6 | `/services/data-readiness` | `/services/data-readiness` | Already shipped. V8 unchanged. |
| `service-infrastructure` | enhance | 7 | `/services/infrastructure` | `/services/infrastructure` | Already shipped. V8 unchanged. |
| `tools-index` | new | 20 | `/tools` | (none) | **NEW V8** — Tools index page at PDF page 20. Resolves OQ3. Eyebrow + h1 + body + 3-stat bar + 2x2 tool cards + 4-layer stack breakdown + bottom CTA. |
| `tool-claude` | enhance | 8 | `/tools/claude` | `/tools/claude` | Already shipped. V8 unchanged. |
| `tool-mcp` | enhance | 9 | `/tools/mcp` | `/tools/mcp` | Already shipped. V8 unchanged. |
| `tool-custom-ai-agents` | enhance | 10 | `/tools/custom-ai-agents` | `/tools/custom-ai-agents` (?) | Already shipped. V8 unchanged. |
| `tool-on-premise-llm` | enhance | 11 | `/tools/on-premise-llm` | `/tools/on-premise-llm` (?) | Already shipped. V8 unchanged. |
| `blog-index` | new | 12 | `/blog` | (none) | Blog index. V8 unchanged. |
| `blog-post-template` | new | 21 | `/blog/[slug]` | (none) | **NEW V8** — Blog post detail template at PDF page 21. Resolves OQ4. Build `<BlogPostPage>` component first per design/MIGRATION.md section 7. |
| `about` | new | 13 | `/about` | (none) | Already shipped from V7. V8 unchanged. |
| `our-work-index` | new | 14 | `/our-work` | (none) | Already shipped. V8 unchanged. |
| `case-study-sprinklermatic` | new | 15 | `/our-work/sprinklermatic` | (none) | Already shipped. V8 unchanged. |
| `case-study-recirq` | new | 16 | `/our-work/recirq` | (none) | Already shipped. V8 unchanged. |
| `case-study-housing-services-corp` | new | (missing) | `/our-work/housing-services-corp` | (none) | No PDF page. See OQ5. Do not dispatch until resolved. |
| `team-index` | new | 18 | `/team` | (none) | Team index. V8 unchanged. |
| `team-adam-nameh` | new | 17 | `/team/adam-nameh` | (none) | Adam profile. V8 unchanged. |
| `contact` | new | 19 | `/contact` | (none) | Contact page. V8 unchanged. |

## V7 → V8 dispatch (only two new pages)

V8 is purely additive over V7. Two new pages to dispatch:

1. **Build `<BlogPostPage>` component first** (separate `/feature` invocation, not `/page`). PDF page 21 is the canonical blog post layout. Every future post will use this template, so the abstraction earns its keep on day one.
2. `/page tools-index` — one-off Tools index page from PDF page 20.
3. `/page blog-post-template` — uses the `<BlogPostPage>` component built in step 1.

## Dispatch order recommendation (full project state)

1. `homepage` ✓ shipped
2. `services-index`, then each service detail (5 services) ✓ shipped
3. `tools-index` — **dispatch now** (after `<BlogPostPage>` component if running them in parallel sessions)
4. Each tool detail ✓ shipped
5. `our-work-index` ✓ shipped
6. Case studies ✓ shipped
7. `team-index`, `team-adam-nameh` — pending
8. `about` — pending
9. `blog-index`, then `blog-post-template` — pending
10. `contact` — pending

Outstanding Open Questions: OQ5 (Housing Services Corp) only. Everything else resolved.
