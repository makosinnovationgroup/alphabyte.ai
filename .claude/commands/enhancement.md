# Enhance a shipped feature — produce an enhancement PRD

Evolve, refine, or add to a feature that has already shipped. Enhancement PRDs live in `prds/` alongside feature PRDs, with an `enhance-` filename prefix to distinguish them at a glance. They use the same strict repeatable format as `/feature`, with additional sections for tracking what changes vs. what stays and assessing downstream impact.

An enhancement is for *shipped* work. If the original feature's Status is still `Draft`, `Ready to implement`, or `In progress`, changes go in that PRD, not here.

## Input

`$ARGUMENTS` must contain **both** of these, in this order:

1. **A path to a shipped PRD** (e.g., `prds/site-header.md`). Mandatory.
2. **A description of the enhancement** — what's changing and why. Mandatory.

Expected shape:

```
/enhancement <prd-path> <description of the change>
```

Examples:

- `/enhancement prds/site-header.md mobile menu feels cramped — tighten spacing and add a backdrop blur`
- `/enhancement prds/homepage.md replace the hero CTA with a clearer two-button pattern (primary + secondary)`
- `/enhancement prds/services-discovery.md add a pricing range callout beneath the engagement scope section`

If `$ARGUMENTS` is missing either piece, stop and ask for what's missing. Do not proceed with one input. Specifically:

- **If only a PRD path is provided:** stop and respond with: "This command needs both a PRD path and a description of the enhancement. What change do you want to make to `<prd-path>`?"
- **If only a description is provided (no PRD path):** stop and respond with: "This command needs both a PRD path and a description. Which shipped PRD in `prds/` are you enhancing?"
- **If neither is clearly present:** stop and respond with the usage pattern and both examples.

Do not guess. Do not pick a PRD that seems plausible. Do not proceed on a description alone, even if it's detailed.

## Instructions

### 1. Validate the inputs

Before any other work:

- **Parse `$ARGUMENTS`** into the two parts. The first token should be a path starting with `prds/` and ending in `.md`. Everything after it is the description.
- **If the first token is not a valid-looking PRD path**, stop and respond with the usage pattern. The path must point into `prds/` specifically — paths like `prds/backlog/*.md` are backlog items, not shipped PRDs, and cannot be enhanced directly (promote them to a PRD via `/feature` first).
- **Confirm the PRD file exists at that path.** If it doesn't, stop and report: "No file at `<path>`. Check the path and try again."
- **Read the PRD and confirm Status is `Shipped`.** If Status is anything else (`Draft`, `Ready to implement`, `In progress`), stop and report: "`<path>` has Status `<current status>`. Enhancements are for shipped work — mid-flight changes go in the original PRD. Either finish shipping it or update that PRD directly."
- **Confirm the description is substantive** — at least a short sentence. If the description is effectively empty ("update header", "change stuff"), stop and ask for specifics.

Only proceed when all four checks pass.

### 2. Read and understand the inputs

Read the shipped PRD completely — you need to know what decisions are in force so you can identify what's being overridden. Then parse the description to understand the scope of the change.

### 3. Classify the enhancement type

Decide exactly one type. This is a deliberate choice — it affects how Impact is assessed:

- **Evolution** — adds new capability, scope, or behavior to an existing feature. Example: "add a search filter to the case studies page." Higher downstream impact; Impact section is substantive.
- **Refinement** — polishes or improves what's already there without expanding scope. Example: "tighten the hero headline copy and improve mobile spacing." Lower downstream impact; Impact section may be trivial.

If it's genuinely ambiguous (the change both adds capability and refines existing behavior), pick **Evolution** — the higher-impact classification forces more careful thinking, which is the safer failure mode.

### 4. Load the skills

Load all three project skills at the start:

- **`alphabyte-brand`** (at `.claude/skills/alphabyte-brand/`) — governs voice, color, typography, component patterns, photography, gradient construction, logo usage, motion.
- **`seo`** (at `.claude/skills/seo/`) — governs metadata, structured data, URL conventions, page checklist.
- **`alphabyte-services`** (at `.claude/skills/alphabyte-services/`) — authoritative reference for Alphabyte's offerings, pricing, and case studies. Required when the enhancement touches services content. Note especially: rate card, after-hours multipliers, and effort-in-hours are confidential and never publishable.

### 5. Ask clarifying questions if needed

Even with both inputs provided, the description may not cover everything the PRD needs. If so, ask — in a batch, not turn-by-turn.

Questions specific to enhancements that are often worth surfacing:

- **What's the trigger?** What happened that motivates this change now? (Design feedback, user data, CEO direction, new requirement.)
- **What's NOT changing?** Clarifying that specific pieces of the original remain intact is sometimes as important as naming what changes.
- **Scope of impact** — does this affect other pages that consume the enhanced feature? Does it change URLs that other content links to?
- **Copy changes** — if copy is being updated, is the new copy verbatim or to be drafted?
- **Pricing or services content** — if the enhancement touches pricing or case studies, does the change comply with the public/private boundary in `alphabyte-services/pricing.md`? If a new claim is being made about a client, has it been approved?

### 6. Write the enhancement PRD

Write to `prds/enhance-<kebab-case-slug>.md`. The slug should describe the *enhancement*, not just name the feature — good slugs read like task names. Examples: `enhance-site-header-mobile-menu.md`, `enhance-homepage-hero-two-button-cta.md`, `enhance-pricing-annual-toggle.md`.

If the file already exists, ask before overwriting.

Use **exactly** this structure. Every section is mandatory. If a section genuinely has no content, write `None` or `N/A (<short reason>)` — do not omit sections.

```markdown
# <Enhancement Title>

## Status
<Draft | Ready to implement | In progress | Shipped>

## Type
<Evolution | Refinement>

## Enhances
<Mandatory. Path to the original shipped feature PRD. Must exist and must have Status "Shipped".>
- `prds/<original-feature>.md`

## Motivation
<One paragraph: why this change, why now? What triggered it — design feedback, usage learnings, new requirement, CEO direction? This is the most important context for future readers — it answers "why didn't the original PRD cover this?">

## Summary
<One paragraph: what's changing at a high level. Written in the Alphabyte voice — plain, direct, no hype vocabulary.>

## Changing
<Bullet list of specific decisions from the original PRD that this enhancement overrides. Each bullet references what was decided originally and what it's being replaced with. Format: "Original: <decision>. Updated: <new decision>." If no original decisions are being overridden (pure addition), write "None — this enhancement only adds; it does not override original decisions.">
- Original: <decision>. Updated: <new decision>.
- <or "None — this enhancement only adds; it does not override original decisions.">

## Decided
<Bullet list of net-new decisions specific to this enhancement that weren't in the original PRD. These are the implementer's contract for the new work. Anything not listed here or in Changing inherits from the original PRD.>
- <bullet>

## Open Questions
<Bullet list of things still TBD, or "None". Each open question has an owner and a blocks-implementation flag. A PRD with any blocking Open Question cannot have Status "Ready to implement".>
- <question> (owner: <who>, blocks implementation: <yes|no>)
- <bullet or "None">

## Scope

### In scope
<Bullet list. Be specific about what this enhancement changes.>
- <bullet>

### Out of scope
<Bullet list. Explicit non-goals — particularly things adjacent to the enhancement that might seem in-scope but aren't. At least one bullet.>
- <bullet>

## Pages & Components

### Modifying
<Bullet list of existing files being edited. Use project-relative paths. Or "None".>
- `<path>` — <brief note on what changes>

### Creating
<Bullet list of new files being created. Or "None". Enhancements often create nothing net-new, but sometimes introduce helper components.>
- `<path>` — <brief note on what it is>

## Content

### Verbatim copy
<Copy that is locked in and must be used exactly. Only list NEW or CHANGED copy — inherited copy from the original stays in force and doesn't need to be restated.>
- <label>: "<exact string>"
- <or "None — no copy changes.">

### Drafted at implement-time
<Copy to be drafted during /implement using voice-and-tone rules. Or "None".>
- <label>: <constraints or "None">

## Search Intent & SEO
<If the enhancement doesn't affect metadata, URLs, structured data, or indexable content, write "N/A (no SEO impact — enhancement does not touch metadata, URLs, or indexable content)".

If it DOES affect SEO, fill in only the subfields that are changing. Explicitly note what's changing vs. inheriting.>
- **Target query:** <or "Inherits from original">
- **URL slug:** <or "Unchanged">
- **Meta title:** <or "Unchanged">
- **Meta description:** <or "Unchanged">
- **Structured data:** <changes, additions, or "Unchanged">
- **OG image:** <or "Unchanged">

## Design Notes
<Feature-specific visual guidance. For Refinement-type enhancements, this is often the primary substance. Defer to brand skill defaults for anything not called out. Or "Defer to alphabyte-brand skill defaults; no enhancement-specific visual direction.">

## Motion & Interactivity
<Any new or changed interactivity, animations, scroll behavior. Reference alphabyte-brand/component-rules.md motion tiers. Or "None" / "Unchanged from original".>

## Impact
<Mandatory. Assess downstream effects of this enhancement. What else changes because of this? Even refinements can have impact (e.g., a copy change affects OG image, sitemap lastModified, etc.).>

### Affected pages or components
<Bullet list of other files/pages impacted by this change, or "None beyond the modifying list above". Be specific.>
- <bullet or "None">

### URL or routing changes
<If URLs change, list old → new mapping and whether redirects are needed. Or "None".>
- <bullet or "None">

### Content backfill
<If this enhancement implies content updates elsewhere (e.g., changing a CTA label site-wide, updating an OG image), list what needs to be backfilled. Or "None".>
- <bullet or "None">

## Acceptance Criteria
<Checkbox list of what "done" looks like. Include:
- Positive criteria specific to the enhancement
- Negative criteria / guardrails (e.g., "original feature behavior preserved for cases not covered by this enhancement")
- For any enhancement that touches metadata or adds routes: "Passes seo/page-checklist.md for affected pages"
- For any enhancement with copy: "Copy passes alphabyte-brand/voice-and-tone.md checks"
- For any enhancement with visual changes: "Visuals pass alphabyte-brand/component-rules.md review"
- For any enhancement touching services/pricing/case studies: "Passes alphabyte-services hard rules — no rate card, no competitor names, no hours-as-effort, exact track and offering names">
- [ ] <criterion>
- [ ] <criterion>

## Related
<Bullet list of related PRDs, backlog items, skill sections, external references. Must include the original PRD (same reference as Enhances). Or "None" if literally nothing else is related.>
- `prds/<original-feature>.md` (the feature being enhanced)
- <other references or "None">

## Notes
<Freeform. Rough effort estimate, alternative approaches considered, things NOT to do, historical context. Or "None".>

---
*Created: YYYY-MM-DD*
*Last updated: YYYY-MM-DD*
```

### 7. Field rules

- **Status** — exactly one of: `Draft`, `Ready to implement`, `In progress`, `Shipped`. On first write, Status is `Draft` if there are blocking Open Questions, or `Ready to implement` otherwise.
- **Type** — exactly one of: `Evolution`, `Refinement`. If ambiguous, pick Evolution.
- **Enhances** — mandatory, non-empty, must be a valid path to a shipped PRD. If the referenced PRD doesn't have Status `Shipped`, this command should have stopped at step 1.
- **Motivation** — at least two sentences. "Why now?" is the critical question; a one-sentence motivation usually isn't substantive enough.
- **Summary** — must pass voice-and-tone.md forbidden-vocabulary check. No "unlock," "leverage," "transform," "ignite," etc.
- **Changing** — if no decisions are overridden (pure addition), write the explicit "None — this enhancement only adds" bullet. Don't leave ambiguous.
- **Decided** — at least one bullet if Status is `Ready to implement`. If everything is TBD or inherited, either the enhancement is trivial (question whether it needs a PRD at all) or it's a Draft.
- **In scope / Out of scope** — both subsections mandatory. Out of scope must have at least one bullet.
- **Pages & Components** — both subsections mandatory; one or both may be "None" but both sections must appear.
- **Pricing in copy** — any price referenced in Verbatim copy must be a range or "starting at" anchor (per `alphabyte-services/pricing.md`). Never a per-hour rate. Never effort in hours.
- **Track and offering names** — must be exact: Discovery, Data Readiness, Enablement, Infrastructure (the four tracks); Executive Productivity Suite, Team Citizen Dev Enablement, Strategy Sprint, Executive Quick Win, Sprawl Fix, Intelligent Enterprise (signature offerings). No paraphrasing in Decided or Verbatim copy.
- **Impact** — all three subsections (Affected pages, URL/routing changes, Content backfill) mandatory. `None` is valid; omission is not. Even Refinements deserve explicit impact assessment.
- **Acceptance Criteria** — checkbox list, each criterion observable. Include preservation-of-unchanged-behavior as a guardrail: "Parts of the feature not covered by this enhancement behave identically to before."
- **Dates** — today's date in YYYY-MM-DD format. Created and Last updated match on first write.

### 8. Report

Output in this order:

1. The enhancement PRD path: `prds/enhance-<slug>.md`
2. The original PRD it enhances: `prds/<original>.md`
3. Status: `<Draft | Ready to implement>`
4. Type: `<Evolution | Refinement>`
5. One-line summary of the change
6. If there are blocking Open Questions, list them with owners
7. If Impact identified backfill work, surface it as a one-liner so Mitchell sees what else needs attention
8. The exact command to run next:
   - If Status is `Ready to implement`: `/implement prds/enhance-<slug>.md`
   - If Status is `Draft`: "Resolve blocking Open Questions, then re-run /enhancement or edit the PRD directly and change Status to Ready to implement."

## Constraints

- **Both inputs are mandatory.** If either the PRD path or the description is missing, the command stops and asks. Do not proceed on partial input.
- **Every section is mandatory.** Repeatable output requires a consistent shape. `None` or `N/A` is valid; omission is not.
- **Do not implement anything.** This command produces a document, not code.
- **Do not duplicate content from the original PRD.** Anything not listed in Changing or Decided inherits from the original. The enhancement PRD is a delta document, not a replacement.
- **Do not promote this to a new feature PRD.** If the "enhancement" is actually a full rewrite or a net-new capability unrelated to the original, use `/feature` instead. The test: if most of the original PRD's decisions are being overridden, it's not an enhancement.
- **Do not skip Impact assessment.** Even Refinements have impact (at minimum: sitemap lastModified updates, potential OG image regeneration). The section can say "None" in its subsections but must appear.
- **Voice checks apply to the PRD itself.** Motivation, Summary, and any drafted copy must pass voice-and-tone.md forbidden-vocabulary checks.
- **Confidentiality applies to the PRD itself.** Do not list per-role hourly rates, after-hours multipliers, or effort-in-hours in any section. The PRD is checked into the repo and reviewed; treat its content as if it could become public. Use weeks for timelines, ranges for prices.

## Lifecycle notes

- The original feature PRD's Status remains `Shipped` when it's enhanced. The original shipped — that fact doesn't change. Add a Related entry in the original PRD pointing to the enhancement PRD so the lineage is traceable.
- When `/implement` starts on a Ready-to-implement enhancement PRD, it updates the enhancement's Status to `In progress`.
- When `/implement` finishes, it updates the enhancement's Status to `Shipped`. The original feature PRD is not modified further.
- Chained enhancements are allowed — an enhancement can itself be enhanced later. Each subsequent enhancement references the most recent shipped PRD in the chain (original → enhance-1 → enhance-2, where enhance-2's Enhances field points to enhance-1). This preserves the decision lineage.
- Enhancements are never deleted after shipping — they remain as historical record alongside the original PRD.
