# V6 → V7 update

This bundle updates the project from V6 to V7 design. Drop the contents into the project root, overwriting matching files.

## What's in this bundle

```
design/
  Alphabyte_AI_Site_V7.pdf      ← new PDF
  MIGRATION.md                   ← updated for V7
  INDEX.md                       ← updated for V7
.claude/
  commands/
    page.md                      ← V6 → V7 references swapped
    qa.md                        ← V6 → V7 references swapped
```

## What to do after dropping in

1. **Delete the old PDF.** From your project root:
   ```
   rm design/Alphabyte_AI_Site_V6.pdf
   ```

2. **Clear stale rasterizations** so nothing references V6 page content:
   ```
   rm -f /tmp/page-*.png
   ```

3. **Add the new redirect rule** to `public/_redirects` (in addition to whatever's already there):
   ```
   /services/enablement  /services/executive-enablement  301
   ```
   (Only needed if a partial `/services/enablement` page exists from a prior V6 build.)

4. **Re-run the affected service pages.** V7 changes:
   - **Page 3 → standalone Executive Enablement** (was V6's ambiguous combined Enablement page; OQ2 now resolved).
   - **Pages 5, 6, 7 (Discovery / Data Readiness / Infrastructure)** each gain a three-stat dark bar between body and 30-days timeline. All other content unchanged.
   - **Page 4 (Citizen Development)** content unchanged but unblocked by OQ2 resolution.

   Dispatch in this order:
   ```
   /page service-executive-enablement   # NEW V7 page
   /page service-citizen-development    # unchanged content, just builds it
   /page service-discovery              # adds stats bar
   /page service-data-readiness         # adds stats bar
   /page service-infrastructure         # adds stats bar
   ```

5. **Continue with everything else** that was pending:
   ```
   /page tool-claude
   /page tool-mcp
   /page tool-custom-ai-agents
   /page tool-on-premise-llm
   /page our-work-index
   /page case-study-sprinklermatic
   /page case-study-recirq
   /page team-index
   /page team-adam-nameh
   /page about
   /page blog-index
   /page contact
   ```

## What didn't change

Pages 1, 2, 8 through 19. Homepage and services index already shipped from V6 and are unchanged in V7. Tools, Our Work, Team, About, Blog, Contact pages are unchanged from the V6 spec — anything not yet built can be dispatched as-is.

The hooks setup (`.claude/hooks/*.sh`, `.claude/settings.json`, `.claude/state/`) doesn't need updating — none of those files reference the PDF filename directly.

## Open Questions still unresolved

- **OQ3** — no Tools index PDF page. `/page tools-index` will halt until resolved.
- **OQ4** — no blog post template PDF. `/page blog-post-template` will halt.
- **OQ5** — no Housing Services Corp case study PDF. `/page case-study-housing-services-corp` will halt.

## Resolved by V7

- **OQ2** (Citizen Dev / Enablement collision) — V7 page 3 is now standalone Executive Enablement at `/services/executive-enablement`. No combined Enablement page. Unambiguous.
