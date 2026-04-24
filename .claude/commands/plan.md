# Plan a feature — produce a PRD

Turn a feature description into a PRD that `/implement` can consume. The PRD is the handoff document; once it's written, implementation should be able to proceed without needing to re-litigate decisions.

## Input

`$ARGUMENTS` — a feature description (inline text), or a path to a note/doc describing the feature. May be terse.

## Instructions

### 1. Read and understand the request

Read `$ARGUMENTS`. If it's a file path, read the file. If it's inline prose, work with that.

### 2. Load the brand skill

This project uses the `alphabyte-brand` skill (at `.claude/skills/alphabyte-brand/`). Load it before drafting any content so the PRD's copy suggestions and design notes align with brand standards. In particular, `voice-and-tone.md` is authoritative for any draft copy, and `component-rules.md` governs visual direction.

### 3. Ask clarifying questions if needed

If the feature description is under-specified, **do not guess** — ask. Common gaps worth surfacing:

- **Pages/sections affected** — is this a new page, a new section on an existing page, or a change to an existing component?
- **Audience and goal** — who is this for and what do we want them to do?
- **Copy** — are headlines/body/CTAs specified verbatim, or should the PRD draft them? (If drafting, use the brand voice.)
- **Visual direction** — any specific treatment (gradient hero, photography, pattern, plain), or defer to the brand skill?
- **Behavior** — interactivity, form submission targets, links, routing.
- **Scope boundaries** — what's explicitly out of scope so it doesn't leak in later.

Ask these up front as a batch. Don't interrogate the user turn by turn.

### 4. Write the PRD

Once the feature is specified enough, write the PRD to `prds/<kebab-case-slug>.md`. Create the `prds/` directory if it doesn't exist. The slug should be derived from the feature name — e.g. "Pricing Page" → `prds/pricing-page.md`.

Use this structure. Omit sections that genuinely don't apply; don't pad with empty ones.

- **`# <Feature Title>`**
- **`## Overview`** — one paragraph: what this feature is, why it exists, what problem it solves.
- **`## Scope`** — bullet lists for *In scope* and *Out of scope*. Be explicit about non-goals.
- **`## Pages & Components`** — list the files/paths affected: existing files being modified, new files being created. Use project-relative paths (`src/app/pricing/page.tsx`, `src/components/ui/pricing-card.tsx`).
- **`## Content`** — the copy that must appear in the feature. Headlines, sub-heads, body, CTAs. Be explicit — if copy is specified here, the implementer should use it verbatim. If copy is meant to be drafted during implementation, note that.
- **`## Design Notes`** — any specific visual guidance beyond the defaults in the brand skill. (E.g. "hero uses `bg-alphabyte-gradient-linear`", "include one greyscale-with-blue-overlay image per §6.0", "three-column grid on desktop, stacked on mobile".) Defer to the brand skill for anything not called out here — don't re-state brand rules.
- **`## Behavior`** — any interactivity, routing, state management, animations, form handling, external links.
- **`## Acceptance Criteria`** — checkbox list of what "done" looks like. Include both positive criteria ("the pricing page loads at `/pricing` and shows three tiers") and any explicit non-goals worth calling out as guardrails.

### 5. Report

After writing the PRD, output:

- The path to the PRD
- A one-line summary of what was specified
- Any open questions that remain (if the user chose to proceed despite ambiguity)
- The exact command to run next: `/implement prds/<slug>.md`

## Constraints

- **Do not implement anything.** This command produces a document, not code.
- **Do not restate the brand guide** in the PRD. The brand skill is always loaded during implementation; the PRD only needs to call out feature-specific deviations or emphases.
- **Do not pad.** A good PRD for a small feature is short. A one-section change doesn't need a Behavior section.
- **Be decisive about copy.** Vague copy ("something about our expertise") produces vague implementations. Either specify it or explicitly delegate drafting to implement-time with the voice constraints the brand skill provides.
