# Add an item to the backlog

Capture a known gap, idea, bug, or follow-up task as a lightweight backlog item so it doesn't get lost between sessions. Backlog items live in `prds/backlog/` and are intentionally shorter than full PRDs — enough context to pick up later, not enough to block writing it down.

## Input

`$ARGUMENTS` — a description of the thing to capture. Can be terse or a fuller paragraph.

## Instructions

### 1. Classify the item

Decide exactly one type. Walk this decision tree in order — stop at the first match:

1. **Is something broken or behaving incorrectly right now?** (error thrown, wrong behavior under real use, regression, accessibility failure, security issue) → **Bug**
2. **Is this work-in-flight that's waiting on external input?** (CEO decision, designer deliverable, third-party answer, another team's deliverable) → **Follow-up**
3. **Is something missing, incomplete, or a known TODO?** (placeholder content, unfinished scaffolding, an asset that hasn't been created, a feature that was cut from a previous scope) → **Gap**
4. **Is this a new capability, improvement, or exploration not yet decided?** (future feature ideas, potential improvements, things to consider later) → **Idea**

Common misclassifications to avoid:
- Placeholder content → **Gap**, not Bug. Nothing is broken; the content simply hasn't been written yet.
- "We should consider adding X" → **Idea**, not Gap. A Gap is a known missing thing; an Idea is an open question.
- "Waiting on Mitchell to decide X" → **Follow-up**, not Gap. The work is in flight, just paused.
- A real error in production behavior → **Bug**, not Gap, even if the fix is to add something that was missing.

### 2. Generate the slug and filename

Kebab-case slug, 2–5 words, derived from the core item. Prefix with the type:

- `gap-<slug>.md`
- `idea-<slug>.md`
- `bug-<slug>.md`
- `followup-<slug>.md`

Examples: `gap-default-og-image.md`, `idea-case-study-filtering.md`, `bug-mobile-nav-overflow.md`, `followup-ceo-brand-direction.md`.

If a file with that exact name already exists, check whether it's the same item. If same, update it (bump "Last updated" in the footer, add context if materially new); don't write a duplicate. If different, append a disambiguator: `gap-default-og-image-2.md`.

### 3. Write the file — strict format

Write to `prds/backlog/<slug>.md`. Create `prds/backlog/` if it doesn't exist. Use **exactly** this structure. Every section is mandatory. If a section genuinely has no content, write `None` or `N/A` — **do not omit sections**. Consistency across backlog items is the point; a predictable empty section is better than an unpredictable missing one.

```markdown
# <Title — one sentence, task-shaped>

## Type
<Gap | Idea | Bug | Follow-up>

## Status
Open

## Context
<One paragraph. Where did this come up? What's the background? Why does it matter? Include enough detail that future-you can re-engage without scrolling through chat history. Mention specific files, sessions, or commands if relevant. This is the most important section — do not shortcut it even for simple items.>

## Desired outcome
<Bullet list. What does "done" look like? Describe the outcome, not the implementation. Be concrete enough that you'd know it when you see it.>
- <bullet>
- <bullet>

## Blocks
<Bullet list of things this item blocks, or "None". Be specific — "blocks custom domain cutover to alphabyte.ai" is useful; "blocks progress" is not.>
- <bullet or "None">

## Blocked by
<Bullet list of things this item is waiting on, or "None". External dependencies (CEO decision, designer deliverable, third-party answer), other backlog items, or PRDs.>
- <bullet or "None">

## Related
<Bullet list of related files, PRDs, other backlog items, or external links, or "None". This is where you point to the alphabyte-brand skill section, the relevant source file, the Slack thread, etc.>
- <bullet or "None">

## Notes
<Freeform. Anything else worth preserving: rough effort estimate, alternative approaches considered, things NOT to do, links to external references. Or "None".>

---
*Captured: YYYY-MM-DD*
*Last updated: YYYY-MM-DD*
```

### 4. Field rules

- **Title** — one sentence, starts with a verb or noun phrase, no period at the end. Good: "Design default OG image for social share previews". Bad: "We need to figure out what to do about the OG image situation."
- **Type** — exactly one of the four values, matching the filename prefix.
- **Status** — always `Open` when first captured. Other valid values (for later updates) are `Blocked`, `Promoted` (sent to `/feature` as a PRD), and `Closed`. Do not invent new status values.
- **Context** — at least two sentences. A one-sentence Context means the item isn't captured thoroughly enough.
- **Desired outcome** — at least one bullet. Phrase each bullet as a completed state, not an action. Good: "default.png exists at public/og/default.png, 1200×630, brand-compliant." Bad: "Create an OG image."
- **Blocks / Blocked by / Related / Notes** — use `None` when empty, not a dash, not an empty section.
- **Dates** — today's date in `YYYY-MM-DD` format. On first capture, `Captured` and `Last updated` are the same.

### 5. Report

Output in this order:

1. The file path written
2. One-line summary: `<Type>: <title>`
3. If the `Blocks` section is non-empty, surface it as a one-liner: `Blocks: <list>` — so Mitchell sees production-critical items immediately
4. If an existing item was updated instead of a new one created, say so explicitly

## Constraints

- **Every section is mandatory.** Repeatable output requires a consistent shape. `None` is a valid entry; omission is not.
- **Do not write PRDs.** If the item needs Decided/Open Questions/Scope/Acceptance Criteria, it's a feature — use `/feature` instead. The test: if capturing this in 30 seconds feels impossible, it's graduated beyond a backlog item.
- **Do not start work on the item.** This command captures. It does not design, build, research, or solve.
- **Do not duplicate.** Before writing, check `prds/backlog/` for an existing item on the same topic. If found, update rather than duplicate.
- **Do not pad.** Two-sentence Context is fine. One-bullet Desired outcome is fine. Do not stretch to fill sections — brevity is acceptable; the mandatory structure is what produces consistency, not volume.

## Lifecycle notes

- When a backlog item is ready for real work, copy its Context and Desired outcome into a `/feature` invocation rather than rewriting from scratch. Update the backlog item's Status to `Promoted` and add a Related entry pointing to the new PRD. Keep the backlog file — don't delete — so the lineage is preserved.
- When an item is blocked externally (e.g., waiting on a CEO answer), update Status to `Blocked` and make the reason explicit in `Blocked by`.
- When an item becomes obsolete or is resolved without promotion, update Status to `Closed` and add a Notes entry explaining why.