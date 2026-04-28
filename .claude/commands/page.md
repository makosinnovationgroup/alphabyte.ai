---
description: Build a single page from V7 PDF design end-to-end (PRD → implement → QA → fix loop). Enforced by Stop hook + state machine.
argument-hint: <logical-name>
---

# /page

End-to-end page build with hook-enforced continuation. Generates a PRD, implements it, runs QA against the PDF, and loops once on findings before halting. The Stop hook blocks turn-end until the pipeline state is `inactive`, so you cannot accidentally stop after an intermediate step.

## How this works

State lives at `.claude/state/page-pipeline.json`. The `/page` command initializes it. Each step finishes by calling `bash .claude/hooks/advance-pipeline.sh <event>` to mutate state. The Stop hook reads state on every stop attempt and forces continuation if `active == true`.

This means: **after the user confirms at step 5, the pipeline runs to completion automatically.** You cannot stop in the middle. If you try, the hook blocks and tells you the next step.

If you genuinely need to abort, run: `bash .claude/hooks/abort-pipeline.sh`

## Usage

```
/page <logical-name>
```

Example: `/page service-discovery`

## Required files and tools

- `design/INDEX.md`, `design/MIGRATION.md`, `design/Alphabyte_AI_Site_V7.pdf`
- `pdftoppm` (poppler-utils)
- `jq` (JSON CLI)
- Dev server reachable on `localhost:3000` (for QA)
- Playwright installed in the project
- `.claude/hooks/page-stop-hook.sh` and `.claude/hooks/advance-pipeline.sh` present and executable
- `.claude/settings.json` registers the Stop hook

If any are missing, abort and tell the user.

## Steps

### 1. Validate input

`$ARGUMENTS` must be a single non-empty logical name. If empty or unmatched in INDEX.md, list available names from INDEX.md and exit.

### 2. Look up the row in INDEX.md

Read `design/INDEX.md`. Find the row where the first column matches `$ARGUMENTS`. Capture: action, pdf-page, route, original PRD path, notes.

If no row matches, list available names and exit. If pdf-page is `(missing)`, halt and surface the relevant Open Question.

### 3. Read MIGRATION.md context

Read `design/MIGRATION.md`. Pull the 7-item nav order, the Discovery Call modal pattern, and any Open Question that mentions this logical name or its route. If an unresolved OQ applies, surface it verbatim and ask for resolution. Do not pick an interpretation silently.

### 4. Rasterize the PDF page

Run:

```
pdftoppm -r 200 -f <PDF_PAGE> -l <PDF_PAGE> -png design/Alphabyte_AI_Site_V7.pdf /tmp/page-<logical-name>
```

Confirm `/tmp/page-<logical-name>-1.png` (or `-01.png`) exists.

### 5. Confirm full pipeline with the user

Compose the framing string for the downstream PRD command (per step 6). Print:

```
Page: <logical-name>
Action: <action>
PDF page: <pdf-page>
Route: <route>
Original PRD path: <original-prd-path>
Rasterized to: /tmp/page-<logical-name>-1.png
Open Questions referenced: <list, or "none">

Pipeline (hook-enforced — runs to completion after confirmation):
  6. Generate PRD via <command>
  7. Run /implement
  8. Run /qa
  9. Evaluate findings
  10-12. (Conditional) Fix PRD → /implement → /qa pass 2
  13. Final summary

Framing to be passed to <command>:
---
<full framing string from step 6>
---

Proceed? (y/n)
```

Wait for explicit `y`. On `y`, initialize state:

```
bash .claude/hooks/advance-pipeline.sh init <logical-name> <pdf-page> <route> <action>
```

State is now active. The Stop hook will block any attempt to end the turn until the pipeline completes or is explicitly aborted.

### 6. Generate the PRD

The framing strings below are mandatory. Do not soften, paraphrase, or shorten them.

#### Shared preamble (prepended to every framing)

```
SOURCE OF TRUTH: /tmp/page-<logical-name>-1.png

This image is rasterized from design/Alphabyte_AI_Site_V7.pdf page <pdf-page>, stamped APPROVED COPY. It is the canonical specification for this page. Before writing any code:

1. View the image with the view tool.
2. Read every visible string. Every visible string appears verbatim in the implementation. No paraphrase. No "improvement". No truncation.
3. Match every visible layout decision: section order, column structure, spacing rhythm, hairline rules, eyebrow labels, badge placement, CTA position, card grids, tab bars.
4. Match every visible typographic decision: heading hierarchy, weights, tracking, the teal accent on words like "compounds", the all-caps eyebrow treatments.

REUSABLE LAYOUT COMPONENTS — CHECK BEFORE WRITING LAYOUT CODE:

Before writing any layout markup, check src/components/ for existing layout primitives that match this page's shape. Component candidates to look for include but are not limited to:

- ServicePage — for service detail pages (eyebrow, h1, subhead, body, three-stat dark bar, "What the first 30 days" box, "What we deliver" deliverables, right/not-right panels, timeline footer)
- CaseStudyPage — for case study detail pages (dark hero with tag pills, stats grid, two-column body with sidebar)
- TeamMemberPage — for team member profile pages
- Other layout primitives the project has accumulated

If a layout component matches the page being built: USE the component and pass data props. Do NOT rebuild the layout from scratch. The component is the canonical implementation; rebuilding creates drift, fails QA against sibling pages, and forces every future design change to be applied N times instead of once.

The implementation report must explicitly state which layout component (if any) was used. If you chose to rebuild rather than reuse a candidate component, the report must justify why — usually because the PDF page genuinely differs in structure, not because rebuilding seemed easier.

If no matching layout component exists, build the page directly. The next page that needs this layout will be the one that extracts it into a component.

Where the PRD and the PDF conflict, the PDF wins. The PRD describes intent and scope; the PDF defines the artifact. If you find a conflict, flag it in the implementation report rather than silently choosing.

Where the PDF does not show something (e.g. inactive tab content, footer detail cropped from view, hover states), the PRD and the brand skill cover it. Mark such content clearly in the implementation report as "drafted, not from PDF" so it can be reviewed.

Reference design/MIGRATION.md for cross-page context. Reference design/INDEX.md for route conventions.
```

#### Action-specific framing (appended after the preamble)

| Action | Downstream | Action-specific framing |
|---|---|---|
| `new` | `/feature` | "ACTION: Build a new route at `<route>`. There is no existing implementation to preserve." |
| `enhance` | `/enhancement` | "ACTION: Replace existing content at `<route>` with the V7 design. Preserve existing route plumbing (metadata helpers, route handlers, layout wrapping) unless the PDF clearly requires changes." |
| `replace` | `/enhancement` | "ACTION: Replace existing content at `<route>`. Original PRD path was `<original-prd-path>`. If the route slug differs from the original, add a 301 redirect entry in `public/_redirects`. Move file content rather than duplicating." |
| `retire` | `/enhancement` | "ACTION: Remove route `<original-prd-path>` and add a redirect to `<route>` (or to `/` if no replacement). Update `navigation.ts` and any sitemap references. Do not leave orphan files." |

Invoke the downstream command. Capture the path to the PRD file the command produces.

After the downstream command returns, immediately run:

```
bash .claude/hooks/advance-pipeline.sh prd-generated <prd-path>
```

This advances state to step 7. Then proceed to step 7.

### 7. Run /implement

Invoke `/implement` against the PRD path captured in step 6. Pass the same shared preamble in the implement context.

If `/implement` fails or reports `pnpm build` / `pnpm typecheck` errors: do NOT advance state. Surface the failure and stop. The pipeline state remains active so the user knows where it failed; they can fix and resume by re-running step 7 manually.

After `/implement` completes successfully, run:

```
bash .claude/hooks/advance-pipeline.sh implement-done
```

State advances to step 8. Proceed to step 8.

### 8. Run /qa

Invoke `/qa <logical-name>`.

If `localhost:3000` is unreachable: do NOT advance state. Print a message telling the user to start the dev server and re-run `/qa <logical-name>` manually. The pipeline state remains active.

`/qa` writes a report at `qa-reports/qa-<logical-name>-<timestamp>.md` and prints the path.

After `/qa` completes, capture the report path it printed and run:

```
bash .claude/hooks/advance-pipeline.sh qa-done <qa-report-path>
```

The advance script reads the report, counts Blockers and Significant findings, and decides:

- If Blockers == 0 and Significant == 0: state is set to `active: false`. Pipeline complete. Print the script's output and stop.
- If findings exist: state advances to step 10.

### 9. (Built into advance-pipeline.sh)

Step 9 is the QA evaluation, performed inside the advance script. No model action needed beyond reading the script output to know which path to take next.

### 10. Generate fix PRD

Construct a fix PRD prompt for `/enhancement`:

```
PRD path: prds/enhance-v7-fix-<logical-name>.md

Type: Evolution
Enhances: <PRD path from state>

Motivation: QA against design/Alphabyte_AI_Site_V7.pdf page <pdf-page> identified blockers and significant gaps in the implementation at <route>. This enhancement closes those gaps.

Reference:
- QA report: <pass_1_qa_report from state>
- Source of truth: /tmp/page-<logical-name>-1.png (PDF page <pdf-page>)
- design/MIGRATION.md, design/INDEX.md

Scope (in scope):
<list every Blocker finding from the QA report verbatim, with section and expected vs actual>
<list every Significant finding from the QA report verbatim>

Out of scope:
- Cosmetic findings from the QA report (logged but not addressed in this pass)
- Any change not covered by a finding

Constraint: Use the rasterized image at /tmp/page-<logical-name>-1.png as source of truth for every fix. Do not interpret findings — match the PDF. If the page should have been built using a reusable layout component (ServicePage, CaseStudyPage, etc.) but was rebuilt instead, this fix pass is the right time to refactor onto the component.
```

Invoke `/enhancement` with this prompt. Capture the new PRD path.

After the fix PRD is generated, run:

```
bash .claude/hooks/advance-pipeline.sh fix-prd-generated <fix-prd-path>
```

State advances to step 11.

### 11. Run /implement on the fix PRD

Invoke `/implement` against the fix PRD path. Wait for completion.

If implement fails: do not advance. Surface error. (Same recovery rule as step 7.)

After `/implement` completes, run:

```
bash .claude/hooks/advance-pipeline.sh fix-implement-done
```

State advances to step 12.

### 12. Re-run /qa

Invoke `/qa <logical-name>` for the second pass. Capture the new report path.

After `/qa` completes, run:

```
bash .claude/hooks/advance-pipeline.sh qa-pass-2-done <qa-report-path>
```

The advance script writes the final summary, sets `active: false`, and the Stop hook will allow normal turn-end.

### 13. (Built into advance-pipeline.sh)

The final summary is printed by the advance script when `qa-pass-2-done` runs. No further model action needed.

## Rules

- Never produce page code from inside `/page`. Always dispatch.
- Never weaken the SOURCE OF TRUTH preamble.
- Never weaken the REUSABLE LAYOUT COMPONENTS check. The implementer must consider existing components before rebuilding.
- Never skip OQ checks at step 3.
- Never skip user confirmation at step 5.
- Never skip the advance-pipeline.sh call after each step. The Stop hook depends on state being current.
- Never loop more than twice. The state machine enforces this.
- If a step fails recoverably (build error, dev server down), do NOT call advance-pipeline.sh. Leave state where it is. The Stop hook will block further stops; the user fixes the underlying issue and resumes by re-running the failed step.
- To bail out, the user runs `bash .claude/hooks/abort-pipeline.sh`.

## Examples

### Clean build (no QA findings)

```
/page service-discovery
```

State init → /enhancement (PRD checks for ServicePage, finds it, uses it) → advance prd-generated → /implement (passes data props to ServicePage) → advance implement-done → /qa → advance qa-done (script sees 0/0, marks complete). Pipeline ends.

### Fix loop runs once

```
/page homepage
```

State init → /enhancement → advance → /implement → advance → /qa → advance qa-done (script sees findings, advances to step 10) → /enhancement (fix PRD) → advance fix-prd-generated → /implement → advance fix-implement-done → /qa → advance qa-pass-2-done (final summary, marks complete).

### Fix loop hits cap

```
/page service-infrastructure
```

Same as above but pass 2 still has findings. The advance script accepts this and marks the pipeline complete with a "Findings remain. Review manually." message. No third loop.

### Build failure mid-pipeline

```
/page about
```

`/implement` fails on `pnpm typecheck`. State is NOT advanced. Surface the error. The Stop hook will block any stop attempt and tell the user to either fix the issue and re-run step 7 manually, or run `bash .claude/hooks/abort-pipeline.sh` to bail.

### Dev server not running at QA time

```
/page contact
```

PRD and implement complete, state is at step 8. `/qa` cannot reach `localhost:3000`. State is NOT advanced. User starts dev server, runs `/qa contact` manually, then runs `bash .claude/hooks/advance-pipeline.sh qa-done <report-path>` to advance.