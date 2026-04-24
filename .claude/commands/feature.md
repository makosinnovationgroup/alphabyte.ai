# Plan a feature — produce a PRD

Turn a feature description into a PRD that `/implement` can consume. The PRD is the handoff document; once it's written, implementation should be able to proceed without needing to re-litigate decisions.

PRDs live in `prds/` and use a strict, repeatable format. Every PRD has the same sections in the same order. When a section genuinely has no content, write `None` or `N/A` — do not omit sections. Consistency across PRDs is the point; a predictable empty section is better than an unpredictable missing one.

## Input

`$ARGUMENTS` — a feature description (inline text), or a path to a note/doc describing the feature. May be terse. May also be the path to a promoted backlog item (e.g., `prds/backlog/gap-homepage-placeholder-copy.md`), in which case use its Context and Desired outcome as the starting point.

## Instructions

### 1. Read and understand the request

Read `$ARGUMENTS`. If it's a file path, read the file. If it's inline prose, work with that. If it's a backlog item being promoted, note its current path in the Related section of the PRD you'll create and update the backlog item's Status to `Promoted` after the PRD is written (add a Related entry in the backlog item pointing at the new PRD).

### 2. Load the skills

This project uses two skills that govern how work is produced. Load both at the start so their rules are in context before drafting any PRD content:

- **`alphabyte-brand`** (at `.claude/skills/alphabyte-brand/`) — governs voice, color, typography, component patterns, photography, gradient construction, logo usage, motion. `voice-and-tone.md` is authoritative for draft copy; `component-rules.md` governs visual and motion direction; `tokens.md` is the design token reference.
- **`seo`** (at `.claude/skills/seo/`) — governs metadata, structured data, URL conventions, and what makes a page findable. `metadata-patterns.md` covers metadata; `structured-data.md` covers JSON-LD; `page-checklist.md` is the pre-ship gate.

### 3. Classify the feature

Decide the feature type. This affects which sections are mandatory vs. "N/A":

- **New page** — introduces one or more new routes. All sections mandatory, including Search Intent & SEO.
- **New section on an existing page** — modifies an existing route. Search Intent & SEO is `N/A (no new routes)` unless the section meaningfully changes the page's search intent.
- **New component or UI primitive** — reusable thing not tied to a single page. Search Intent & SEO is `N/A`.
- **Content change** — copy, images, or metadata updates without structural changes. Search Intent & SEO applies only if metadata is changing.
- **Cross-cutting** — affects multiple pages or components (e.g., new navigation, footer redesign, site-wide banner). Mark pages individually in Pages & Components.

If the feature spans more than one type (e.g., a new page that also introduces a reusable component), it's a New page — classify by the broadest scope.

### 4. Ask clarifying questions if needed

If the feature description is under-specified, **do not guess** — ask. Ask all questions in one batch; do not interrogate turn by turn.

Questions worth surfacing depend on the feature type. Cover at minimum:

- **Scope boundaries** — what's in, what's explicitly out?
- **Audience and goal** — who is this for and what action do we want them to take?
- **Copy** — is copy specified verbatim, or to be drafted at implement-time?
- **Visual direction** — any specific treatment, or defer to the brand skill?
- **Behavior** — interactivity, form handling, routing, animations?

For **New page** features, additionally:
- **Search intent** — what query would someone type into Google to find this page?
- **URL slug** — preferred slug, or should the PRD propose one?

For features that depend on external decisions (brand direction, CEO input, pending answers):
- Either list the dependencies as Open Questions in the PRD and flag that it's not Ready-to-implement, or stop and tell Mitchell the PRD can't be completed until those are resolved.

### 5. Write the PRD

Write to `prds/<kebab-case-slug>.md`. Create `prds/` if it doesn't exist. Slug derived from the feature name: "Pricing Page" → `prds/pricing-page.md`. If the file already exists, ask before overwriting.

Use **exactly** this structure. Every section is mandatory. If a section genuinely has no content, write `None` or `N/A (<short reason>)` — do not omit sections.

```markdown
# <Feature Title>

## Status
<Draft | Ready to implement | In progress | Shipped>

## Type
<New page | New section | New component | Content change | Cross-cutting>

## Summary
<One paragraph: what this feature is, why it exists, what problem it solves. Two to four sentences. Written in the Alphabyte voice — plain, direct, no hype vocabulary.>

## Decided
<Bullet list of decisions that are locked in. The implementer MUST use these values verbatim. If the CEO has signed off on specific copy, list it here. If a URL slug is final, list it here. If a visual direction is committed, list it here. This is the counterpart to Open Questions — everything in Decided is settled; everything unsettled goes in Open Questions.>
- <bullet>
- <bullet>

## Open Questions
<Bullet list of things still TBD, or "None". Each open question must have an owner and a blocking status. If an open question blocks implementation, the PRD's Status must be "Draft", not "Ready to implement".>
- <question> (owner: <who>, blocks implementation: <yes|no>)
- <bullet or "None">

## Scope

### In scope
<Bullet list. Be specific. "Homepage hero section with headline, sub-head, primary CTA, and gradient background" is specific; "homepage work" is not.>
- <bullet>

### Out of scope
<Bullet list. Explicit non-goals that might otherwise leak in. At least one bullet — there is always something out of scope.>
- <bullet>

## Pages & Components

### Modifying
<Bullet list of existing files that will be edited. Use project-relative paths. Or "None".>
- `<path>` — <brief note on what changes>

### Creating
<Bullet list of new files that will be created. Or "None".>
- `<path>` — <brief note on what it is>

## Content
<All copy that must appear in the feature. Headlines, sub-heads, body, CTAs, microcopy. Be explicit about what's verbatim vs. drafted at implement-time.>

### Verbatim copy
<Copy that is locked in and must be used exactly. Include every string — headline, sub-head, body paragraphs, button labels, form placeholders, error messages.>
- <label>: "<exact string>"

### Drafted at implement-time
<Copy to be drafted during /implement using the alphabyte-brand voice-and-tone rules. List each piece that needs drafting with any constraints — word count, tone notes, required phrases to include, or "None".>
- <label>: <constraints or "none">

## Search Intent & SEO
<Mandatory for New page type. For all other types, either fill in what applies or write "N/A (no new routes)" or "N/A (metadata unchanged)".>

- **Target query:** <what someone would type into Google, or "N/A">
- **URL slug:** <e.g. /services/ml-deployment/, or "N/A">
- **Meta title:** <under 60 chars, Title Case, or "draft at implement-time", or "N/A">
- **Meta description:** <140–160 chars, brand voice, or "draft at implement-time", or "N/A">
- **Structured data:** <which JSON-LD schemas apply — Service, FAQPage, BreadcrumbList, Article, etc., or "None">
- **OG image:** <path to existing /public/og/ image, or "create new: <one-line treatment description>", or "N/A">

## Design Notes
<Feature-specific visual guidance that goes beyond the brand skill defaults. Things like "hero uses bg-alphabyte-gradient-linear", "include one greyscale-with-blue-overlay image per §6.0", "three-column grid desktop, stacked mobile". Defer to the brand skill for anything not called out here — do not restate brand rules.

If there are no feature-specific visual notes and the brand skill defaults suffice, write "Defer to alphabyte-brand skill defaults.">

## Motion & Interactivity
<Any animation, scroll behavior, hover states, form interactions, routing behavior, or state management. Reference alphabyte-brand/component-rules.md motion tiers when specifying. Or "None" for purely static content.>

## Acceptance Criteria
<Checkbox list of what "done" looks like. Include:
- Positive criteria (what must work)
- Any negative criteria worth guardrailing (what must NOT happen)
- For New page type, always: "Passes seo/page-checklist.md"
- For any feature with copy: "Copy passes alphabyte-brand/voice-and-tone.md checks"
- For any feature with visuals: "Visuals pass alphabyte-brand/component-rules.md review">
- [ ] <criterion>
- [ ] <criterion>

## Related
<Bullet list of related PRDs, backlog items, skill sections, brand-guide sections, external references. Or "None".>
- <reference or "None">

## Notes
<Freeform. Rough effort estimate, alternative approaches considered, things NOT to do, historical context. Or "None".>

---
*Created: YYYY-MM-DD*
*Last updated: YYYY-MM-DD*
```

### 6. Field rules

- **Status** — exactly one of: `Draft`, `Ready to implement`, `In progress`, `Shipped`. On first write, Status is `Draft` if there are Open Questions that block implementation, or `Ready to implement` otherwise. Do not invent new values.
- **Type** — exactly one of the five values listed in step 3.
- **Summary** — must be in the Alphabyte voice. Check against `voice-and-tone.md` forbidden vocabulary before finalizing. No "unlock," "leverage," "transform," "ignite," etc.
- **Decided** — at least one bullet if Status is `Ready to implement`. If everything is TBD, it's a Draft, not a Ready-to-implement PRD.
- **Open Questions** — every entry has an owner (who answers it) and a blocks-implementation flag (yes/no). A PRD with any blocking Open Question cannot have Status `Ready to implement`.
- **In scope / Out of scope** — both subsections mandatory. Out of scope must have at least one bullet — there is always a non-goal worth guardrailing.
- **Pages & Components** — `Modifying` and `Creating` subsections both mandatory. One or both may be "None" but both sections must appear.
- **Verbatim copy** — if copy is in Decided, it must also appear here. Decided and Verbatim should not contradict each other.
- **Search Intent & SEO** — for New page, every subfield must have a concrete value or "draft at implement-time". "N/A" is only valid for non-new-route features.
- **Acceptance Criteria** — checkbox list (`- [ ]`), each criterion observable. Good: "Page renders at /services/ml-deployment/ without console errors." Bad: "The page should be good."
- **Dates** — today's date in YYYY-MM-DD format. Created and Last updated match on first write.

### 7. Report

Output in this order:

1. The PRD path: `prds/<slug>.md`
2. Status: `<Draft | Ready to implement>`
3. One-line summary of the feature
4. If there are blocking Open Questions, list them with owners — this is what Mitchell needs to chase before implementation can start
5. If promoted from a backlog item, confirm the backlog item was updated (Status → Promoted, Related pointing to new PRD)
6. The exact command to run next when ready:
   - If Status is `Ready to implement`: `/implement prds/<slug>.md`
   - If Status is `Draft`: "Resolve blocking Open Questions, then re-run /feature or edit the PRD directly and change Status to Ready to implement."

## Constraints

- **Every section is mandatory.** Repeatable output requires a consistent shape. `None` or `N/A` is valid; omission is not.
- **Do not implement anything.** This command produces a document, not code.
- **Do not restate the brand guide or SEO rules** in the PRD. Both skills are always loaded during implementation; the PRD only needs to call out feature-specific decisions.
- **Do not pad.** A two-sentence Summary is fine. A one-bullet Decided is fine. The mandatory structure produces consistency; volume is not a virtue.
- **Do not guess at blocking unknowns.** If something critical is undecided, list it in Open Questions with an owner and keep the Status as Draft. A guessed decision in a PRD will be implemented faithfully — guess wrong and you've shipped wrong.
- **Respect verbatim copy.** Copy listed under Verbatim copy is a contract with the implementer. If the CEO signs off on a headline, it doesn't get "improved" at implement-time.
- **Voice checks apply to the PRD itself.** The Summary and any drafted copy must pass `voice-and-tone.md` forbidden-vocabulary checks. The PRD is not exempt from its own brand rules.

## Lifecycle notes

- When a PRD is `Draft` with blocking Open Questions, Mitchell is expected to resolve those externally (CEO conversation, designer handoff, etc.), then either re-run `/feature` with the updated context or edit the PRD directly to fill in Decided, clear the Open Questions, and change Status to `Ready to implement`.
- When `/implement` starts on a Ready-to-implement PRD, it should update Status to `In progress` and bump Last updated.
- When `/implement` finishes, it updates Status to `Shipped` and bumps Last updated.
- PRDs are never deleted after shipping — they remain as historical record. If a feature is meaningfully revised later, write a new PRD and cross-reference the old one in Related.