---
description: Build a single page from V6 PDF design. Dispatches to /feature or /enhancement, runs /implement, runs /qa, and loops once on findings before halting.
argument-hint: <logical-name>
---

# /page

End-to-end page build. Reads `design/INDEX.md`, looks up the logical page name, rasterizes the right page from `design/Alphabyte_AI_Site_V6.pdf`, dispatches to `/feature` or `/enhancement` to produce the PRD, runs `/implement` to ship code, then runs `/qa` to compare the result against the PDF. If QA finds blockers or significant issues, generates a fix PRD and runs `/implement` once more. After the second pass, halts regardless of state and surfaces the final QA report.

Does not produce code itself. Always dispatches.

## Usage

```
/page <logical-name>
```

Example: `/page service-citizen-development`

## Required files

- `design/INDEX.md` - the page map
- `design/MIGRATION.md` - routing decisions and Open Questions
- `design/Alphabyte_AI_Site_V6.pdf` - approved-copy source
- `pdftoppm` available on the path (poppler-utils)
- Dev server reachable on `localhost:3000` (for QA step)
- Playwright installed in the project (for QA step)

If any are missing, abort and tell the user what is missing.

## Steps

### 1. Validate input

`$ARGUMENTS` must be a single non-empty logical name. If empty, list all logical names from `design/INDEX.md` and exit:

```
Usage: /page <logical-name>

Available logical names (from design/INDEX.md):
  homepage
  services-index
  service-citizen-development
  ...
```

### 2. Look up the row in INDEX.md

Read `design/INDEX.md`. Find the row where the first column matches `$ARGUMENTS`. Capture:

- action (`enhance` / `new` / `replace` / `retire`)
- pdf-page (integer, or `(missing)`)
- route
- original PRD path
- notes

If no row matches, list available names and exit.

If `pdf-page` is `(missing)`, halt and surface the relevant Open Question from `design/MIGRATION.md`. Do not dispatch until the Open Question is resolved by the user in this session.

### 3. Read MIGRATION.md context

Read `design/MIGRATION.md`. Pull:

- the 7-item nav order (Section 2)
- the Discovery Call modal pattern (Section 4)
- any Open Question that mentions this logical name or its route

If an Open Question is unresolved and applies to this page (the `notes` column says "see OQ N" or "Conditional on OQ N"), surface it to the user verbatim and ask for resolution before continuing. Do not silently pick an interpretation.

### 4. Rasterize the PDF page

Run:

```
pdftoppm -r 200 -f <PDF_PAGE> -l <PDF_PAGE> -png design/Alphabyte_AI_Site_V6.pdf /tmp/page-<logical-name>
```

Output filename will be `/tmp/page-<logical-name>-<n>.png` (poppler appends a sequence number; for a single page it is usually `-1` or `-01`). Confirm the file exists before proceeding. If `pdftoppm` is not installed, tell the user to `apt install poppler-utils` (or equivalent for their OS) and abort.

### 5. Confirm full pipeline with the user

Compose the full framing string that will be passed to the downstream PRD command (per the table in step 6) before printing the confirmation block. Print:

```
Page: <logical-name>
Action: <action>
PDF page: <pdf-page>
Route: <route>
Original PRD path: <original-prd-path>
Rasterized to: /tmp/page-<logical-name>-<n>.png
Open Questions referenced: <list, or "none">

Pipeline:
  1. Generate PRD via <command name>
  2. Implement via /implement
  3. QA via /qa
  4. If blockers or significant findings: generate fix PRD, re-implement once, then halt

Framing to be passed to <command name>:
---
<full framing string from step 6>
---

Proceed with full pipeline? (y/n)
```

Wait for an explicit `y` (or `yes`) before proceeding. Anything else aborts.

### 6. Generate the PRD

The framing strings below are mandatory. They establish the PDF as source of truth and require the downstream agent to view the rasterized image before writing any code. Do not soften, paraphrase, or shorten them.

#### Shared preamble (prepended to every framing)

```
SOURCE OF TRUTH: /tmp/page-<logical-name>-<n>.png

This image is rasterized from design/Alphabyte_AI_Site_V6.pdf page <pdf-page>, stamped APPROVED COPY. It is the canonical specification for this page. Before writing any code:

1. View the image with the view tool.
2. Read every visible string. Every visible string appears verbatim in the implementation. No paraphrase. No "improvement". No truncation.
3. Match every visible layout decision: section order, column structure, spacing rhythm, hairline rules, eyebrow labels, badge placement, CTA position, card grids, tab bars.
4. Match every visible typographic decision: heading hierarchy, weights, tracking, the teal accent on words like "compounds", the all-caps eyebrow treatments.

Where the PRD and the PDF conflict, the PDF wins. The PRD describes intent and scope; the PDF defines the artifact. If you find a conflict, flag it in the implementation report rather than silently choosing.

Where the PDF does not show something (e.g. inactive tab content, footer detail cropped from view, hover states), the PRD and the brand skill cover it. Mark such content clearly in the implementation report as "drafted, not from PDF" so it can be reviewed.

Reference design/MIGRATION.md for cross-page context (nav order, Discovery Call modal pattern, Open Questions). Reference design/INDEX.md for route conventions.
```

#### Action-specific framing (appended after the preamble)

| Action | Downstream | Action-specific framing |
|---|---|---|
| `new` | `/feature` | "ACTION: Build a new route at `<route>`. There is no existing implementation to preserve." |
| `enhance` | `/enhancement` | "ACTION: Replace existing content at `<route>` with the V6 design. Preserve existing route plumbing (metadata helpers, route handlers, layout wrapping) unless the PDF clearly requires changes." |
| `replace` | `/enhancement` | "ACTION: Replace existing content at `<route>`. Original PRD path was `<original-prd-path>`. If the route slug differs from the original, add a 301 redirect entry in `public/_redirects`. Move file content rather than duplicating." |
| `retire` | `/enhancement` | "ACTION: Remove route `<original-prd-path>` and add a redirect to `<route>` (or to `/` if no replacement). Update `navigation.ts` and any sitemap references. Do not leave orphan files." |

The full framing passed to the downstream command is: shared preamble + blank line + action-specific framing.

Invoke the downstream command exactly as the project conventions specify. Capture the path to the PRD file the command produces — `/implement` will need it.

### 7. Run /implement

Once the PRD is generated, invoke `/implement` against the new PRD path. Pass the same shared preamble from step 6 in the implement context so the implementing agent also treats the PDF as source of truth.

Wait for `/implement` to complete. Capture its implementation report. If `/implement` fails or reports `pnpm build` / `pnpm typecheck` errors, halt before QA and surface the failure.

### 8. Run /qa

Invoke `/qa <logical-name>`.

`/qa` requires `localhost:3000` reachable. If the dev server is not running, halt and tell the user to start it, then resume manually with `/qa <logical-name>`.

`/qa` writes a findings report at `qa-reports/qa-<logical-name>-<timestamp>.md` and prints counts of Blockers, Significant, and Cosmetic findings.

### 9. Decide loop

Read the QA report.

- If `Blockers == 0` and `Significant == 0`: pipeline complete. Print the QA summary and the report path. End.
- If `Blockers > 0` or `Significant > 0` and this is the **first pass**: continue to step 10.
- If `Blockers > 0` or `Significant > 0` and this is the **second pass**: halt. Print:

```
QA loop limit reached. Findings remain after one fix attempt.
Report: qa-reports/qa-<logical-name>-<timestamp>.md

Blockers:    <count>
Significant: <count>

Review manually. Run /implement against a new PRD if needed, or escalate.
```

End. Do not loop a third time.

### 10. Generate fix PRD

Construct a fix PRD prompt for `/enhancement`:

```
PRD path: prds/enhance-v6-fix-<logical-name>.md

Type: Evolution
Enhances: <PRD path from step 6>

Motivation: QA against design/Alphabyte_AI_Site_V6.pdf page <pdf-page> identified blockers and significant gaps in the implementation at <route>. This enhancement closes those gaps.

Reference:
- QA report: qa-reports/qa-<logical-name>-<timestamp>.md
- Source of truth: /tmp/page-<logical-name>-<n>.png (PDF page <pdf-page>)
- design/MIGRATION.md, design/INDEX.md

Scope (in scope):
<list every Blocker finding from the QA report verbatim, with section and expected vs actual>
<list every Significant finding from the QA report verbatim>

Out of scope:
- Cosmetic findings from the QA report (logged but not addressed in this pass)
- Any change not covered by a finding

Constraint: Use the rasterized image at /tmp/page-<logical-name>-<n>.png as source of truth for every fix. Do not interpret findings — match the PDF.
```

Invoke `/enhancement` with this prompt. Capture the new PRD path.

### 11. Run /implement on the fix PRD

Invoke `/implement` against the fix PRD. Wait for completion.

### 12. Re-run /qa

Invoke `/qa <logical-name>` a second time. This produces a second findings report.

### 13. Halt with final summary

Regardless of the second QA report's findings, halt. Print:

```
Pipeline complete: <logical-name>

Pass 1 QA: qa-reports/qa-<logical-name>-<timestamp-1>.md
  Blockers: <count> | Significant: <count> | Cosmetic: <count>

Fix PRD: prds/enhance-v6-fix-<logical-name>.md

Pass 2 QA: qa-reports/qa-<logical-name>-<timestamp-2>.md
  Blockers: <count> | Significant: <count> | Cosmetic: <count>

<if pass 2 still has blockers or significant findings>
  Findings remain. Review manually.
<else>
  Clean.
```

End.

## Rules

- Never produce page code from inside `/page`. Always dispatch.
- Never paraphrase PDF copy when constructing the downstream prompt. The framing instructs the downstream agent to read the PDF directly via the rasterized image.
- Never weaken the shared preamble. The PDF-as-source-of-truth posture is the entire point of this command.
- Never skip the Open Question check in step 3. If an OQ applies and is unresolved, halt.
- Never skip the user confirmation in step 5. Always print the full framing in the confirmation block so the user sees what the downstream agent will receive.
- Never loop more than twice. Hard cap. Surface findings to the user after the second pass instead of looping again.
- Never auto-fix Cosmetic findings. They are reported, not acted on.
- If `INDEX.md` lists `pdf-page` as `(missing)`, the page cannot be built from the PDF and `/page` must halt regardless of action type.
- If `localhost:3000` is unreachable when QA is due, halt cleanly. The user can start the dev server and resume by running `/qa <logical-name>` manually, then triggering a fix manually if findings exist.

## Examples

### Clean build (no QA findings)

```
/page service-discovery
```

Generates PRD, implements, runs QA, QA reports zero blockers and zero significant findings, pipeline ends. One PRD, one implementation, one QA pass.

### Fix loop runs once

```
/page homepage
```

Generates PRD, implements, runs QA. QA finds 2 blockers and 1 significant. Generates fix PRD, re-implements, re-runs QA. Second QA reports clean. Pipeline ends with two PRDs, two implementations, two QA reports.

### Fix loop hits cap

```
/page service-infrastructure
```

Generates PRD, implements, QA finds blockers. Fix PRD, re-implement, second QA still has blockers. Pipeline halts and surfaces both reports for human review. Does not loop a third time.

### Blocked on Open Question

```
/page service-citizen-development
```

INDEX.md notes "Conditional on OQ2." `/page` halts at step 3, prints OQ2, and asks the user to resolve before continuing. No PRD generated, no implementation, no QA.

### Dev server not running at QA time

```
/page about
```

PRD generates and implementation completes, but `localhost:3000` is unreachable. `/page` halts at step 8 and tells the user to run `pnpm dev` and resume manually with `/qa about`.
