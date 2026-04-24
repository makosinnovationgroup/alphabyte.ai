# Implement a PRD

Build the feature specified in a PRD. The PRD is authoritative — it drives what gets built. The `alphabyte-brand` and `seo` skills are authoritative for *how* it looks, sounds, and ranks.

## Input

`$ARGUMENTS` — path to a PRD file, typically under `prds/`.

## Instructions

### 1. Read the PRD

Read the file at `$ARGUMENTS` completely before writing any code. Understand:

- Which pages and components are affected
- What copy must appear verbatim vs. what's to be drafted
- The search intent and SEO specifications (for any new page)
- The acceptance criteria (this is your definition of done)
- What's explicitly out of scope

If the PRD is ambiguous or self-contradicting, stop and ask before proceeding. Do not guess.

### 2. Load the skills

Load both project skills and work through their files as needed:

**`alphabyte-brand`** (at `.claude/skills/alphabyte-brand/`):
- **`SKILL.md`** — hard rules and red flags (always)
- **`tokens.md`** — when you need color, type, or gradient values
- **`voice-and-tone.md`** — when drafting any copy the PRD didn't specify verbatim
- **`component-rules.md`** — when making logo, gradient, photography, or layout decisions

**`seo`** (at `.claude/skills/seo/`) — required when creating or modifying any page or route:
- **`SKILL.md`** — hard rules and red flags (always)
- **`metadata-patterns.md`** — when writing `metadata` exports or `generateMetadata` functions
- **`structured-data.md`** — when adding JSON-LD for Service, FAQ, BreadcrumbList, Article, etc.
- **`page-checklist.md`** — used at step 6 below as a blocking pre-ship gate

### 3. Read the token source of truth

Before writing styles, read `tailwind.config.ts`. This is the code-level token source. Consume tokens via Tailwind utilities:

- ✅ `bg-alphabyte-blue`, `text-display`, `tracking-brand-tight`, `bg-alphabyte-gradient-linear`
- ❌ `bg-[#00abf0]`, `text-6xl font-bold`, `tracking-[-0.02em]`

If a needed token doesn't exist in the config, add it to `tailwind.config.ts` rather than inlining an arbitrary value. That keeps the token system coherent and the change auditable.

### 4. Implement

Build the feature. Complete **all** work specified in the PRD — all pages, all components, all copy, all behavior, all metadata, all structured data, all acceptance criteria. Do not stop early. Do not leave "TODO for later" placeholders unless the PRD explicitly defers something.

If you hit a blocker you genuinely cannot resolve, stop and surface it explicitly — do not silently skip a step.

For new pages specifically, the metadata and structured data are part of the build, not an afterthought:

- Export a page-specific `metadata` object (or `generateMetadata`) using the patterns in `seo/metadata-patterns.md`
- Add applicable JSON-LD per `seo/structured-data.md`
- Register the new route in `src/app/sitemap.ts`
- Ensure the page has exactly one `<h1>` that aligns with the `<title>`

### 5. Code quality

- **Minimal comments.** Only comment where the logic is truly non-obvious. Do not add comments that restate what the code does, name the feature, or explain intent that the code already conveys. Self-documenting code is the default.
- **Component patterns.** Wrap new Radix primitives using the pattern in `src/components/ui/dialog.tsx` (re-export unstyled parts, forwardRef + `cn()` on styled parts). Use `cva` for variant-based components like `button.tsx`.
- **File placement.** Pages go under `src/app/`. Reusable UI goes under `src/components/ui/`. Feature-specific components go under `src/components/<feature>/`. Utilities go in `src/lib/`.
- **Imports.** Use the `@/` path alias, not relative paths.
- **Copy.** Copy specified in the PRD is used verbatim. Copy drafted at implement-time must pass the `voice-and-tone.md` checks — no forbidden vocabulary, no hype, Title Case for headers, Sentence case elsewhere.
- **URLs.** Short, lowercase, hyphen-separated, trailing slash (per `trailingSlash: true` in `next.config.mjs`).

### 6. Compliance passes

Run these two checklists before reporting done. Treat failures as blocking — fix before reporting, or if a fix is out of scope, surface it explicitly.

**Brand compliance** — from `alphabyte-brand/component-rules.md`:

1. All colors from the brand palette (no stray blues/greens/greys)
2. Font is Aeonik via `font-sans` (Arial fallback is fine while Aeonik isn't loaded)
3. Logo usage correct (size, clearspace, approved background pairing)
4. Gradients compliant (three colors, blue-dominant, brand-only)
5. Photography handling correct (human or abstract; overlays are Alphabyte Blue only, on greyscale sources)
6. Buttons/links use defined variants
7. Type hierarchy uses brand tracking values
8. Copy in Alphabyte voice

**SEO compliance** — from `seo/page-checklist.md`. Run for every page touched, not just new ones. The checklist covers metadata, OG, heading structure, links, images, URL, sitemap/robots, structured data, brand, and basic quality. Every box must be checked before shipping.

### 7. Report

Output, in this order:

- A concise bullet list of what was implemented — not a novel, just the shipping notes
- `git diff --stat` output showing files and line counts touched
- Acceptance criteria checklist from the PRD, marked off with what was satisfied
- Any deviations from the PRD and why (should be rare; if there are any, explain)
- Brand compliance summary — "passed" or flag specific issues
- SEO compliance summary — "passed `page-checklist.md`" or flag specific issues

## Constraints

- **Do not modify the PRD.** If you believe the PRD is wrong, surface it to the user — don't quietly change the spec.
- **Do not introduce new dependencies** without calling them out explicitly in the report.
- **Do not add tests.** Testing is out of scope for this project at this stage.
- **Do not regenerate the project or scaffolding.** Work within the existing structure.
- **Do not skip the SEO checklist.** Silent metadata gaps compound — three pages shipped without canonical URLs become a migration project six months later.
