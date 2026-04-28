# Phase 1 Foundation - Enhancement Prompt

Run this with `/enhancement` before any `/page` invocation. It is the cross-cutting bundle that brings header, footer, navigation data, the site-wide Discovery Call modal, and legacy redirects up to V6 baseline. Page-level content is deferred to `/page`.

Copy everything from `--- BEGIN PROMPT ---` to `--- END PROMPT ---` and pass it to `/enhancement`.

--- BEGIN PROMPT ---

/enhancement Phase 1 V6 Foundation

## Reference

- `design/Alphabyte_AI_Site_V6.pdf` (19 pages, Option C, stamped APPROVED COPY)
- `design/MIGRATION.md` (routing decisions, Open Questions)
- Approved copy is verbatim from the PDF. No paraphrasing of any user-facing string.

## Scope

This enhancement covers five cross-cutting changes. No page-level work; those land via `/page` after this is in.

1. Header: 5 nav items to 7
2. Footer: align to new IA
3. `navigation.ts`: update data structure
4. Site-wide `<DiscoveryCallModal />` component
5. `public/_redirects` for legacy paths

## Task 1 - Header (top nav)

Replace existing 5-item nav with 7 items. Order taken verbatim from the PDF, which displays the same order on every page:

1. Services
2. Tools
3. Our Work
4. Team
5. About
6. Blog
7. Contact Us

Notes:
- Wordmark "Alphabyte · AI" stays on the left (teal "AI" suffix per Option C theme).
- "Book a Discovery Call" CTA button stays on the right of the nav, but rewire its onClick to open `<DiscoveryCallModal />` (Task 4) instead of navigating. Same applies to every other "Book a Discovery Call" link or button across the site.
- Active-link state is the teal underline / teal text pattern already established in Option C.
- Mobile breakpoint: collapse to a hamburger menu rendering the same 7 items in the same order.

If the existing nav uses different labels for any of these items (e.g. "Contact" instead of "Contact Us"), update to the PDF labels exactly.

## Task 2 - Footer

Audit the footer and update against V6:

- Footer nav links must match the new 7-item structure. If footer was previously a subset, expand it to match.
- Confirm contact block matches PDF page 19:
  - Email: `hello@alphabyte.ai`
  - Phone: `+1 (647) 204-4581`
  - Office: `155 Winges Road, Unit 1, Vaughan, Ontario, Canada L4L 6C7`
  - Social: `Alphabyte AI on LinkedIn`
- If footer references retired routes (e.g. a top-level `/citizen-dev`), remove or repoint.
- If footer has a "Book a Discovery Call" CTA, wire it to the modal (Task 4).

The PDF crops the footer on every page so the full footer spec is not in V6. If the existing footer has elements not contradicted by V6, keep them. Surface anything ambiguous as a question rather than guessing - this is captured as Open Question 7 in `design/MIGRATION.md`.

## Task 3 - `navigation.ts`

Update the nav data source to the new 7-item structure. Each entry should carry at minimum:

- `label` (verbatim, exactly as listed in Task 1)
- `href`
- `order`

Suggested href mapping (confirm against route conventions in the existing codebase):

| label | href |
|---|---|
| Services | `/services` |
| Tools | `/tools` |
| Our Work | `/our-work` |
| Team | `/team` |
| About | `/about` |
| Blog | `/blog` |
| Contact Us | `/contact` |

If the existing `navigation.ts` carries additional metadata per entry (icons, dropdowns, feature flags), preserve the shape and only update the items.

## Task 4 - `<DiscoveryCallModal />` component

New component. Renders once at the app shell level (top of `app/layout.tsx` or equivalent). Opened by every "Book a Discovery Call" trigger across the site via a shared open event (context, store, or zustand-style atom; match the project's existing state pattern).

### Form fields (verbatim from PDF page 19)

- First name (text, placeholder `Jane`)
- Last name (text, placeholder `Smith`)
- Work email (email, placeholder `jane@company.com`)
- Company (text, placeholder `Acme Corp`)
- Job title (text, placeholder `VP of Operations`)
- "What are you most interested in?" (radio group)
  - Citizen Development
  - Executive Enablement
  - Discovery
  - Data Readiness
  - Infrastructure
  - Not sure yet
- "Tell us about your situation" (textarea, label suffixed with `(optional)`, placeholder `What are you trying to solve? What have you tried?`)

### Submit and post-submit copy

- Submit button label: `Book a Discovery Call →`
- Below submit, helper line: `We typically respond within one business day. Your information is never shared with third parties.`

### Behavior

- Esc key, backdrop click, and explicit close button all dismiss.
- On open, focus moves to the first field. On close, focus returns to the trigger.
- `role="dialog"`, `aria-labelledby` pointed at the modal heading, body scroll lock while open.
- Form submission target: confirm against existing form-handling pattern in the project. If none exists, stub a `POST /api/discovery-call` handler that logs payload and returns 200, and flag for follow-up.

### Header / heading

Title inside the modal: `Book a Discovery Call`. Subhead: `45 minutes. No cost. No obligation. You describe your situation. We tell you what we would do, in what order, and what you would have at day 30.` (Verbatim from homepage CTA block.)

### Coexistence with `/contact`

The `/contact` route remains a separate page rendering the same form. The modal is the preferred path from CTA buttons; the route is the fallback for direct navigation, search-engine landings, and email-signature links.

## Task 5 - `public/_redirects`

Create `public/_redirects` (Cloudflare Pages format, plain text, one rule per line).

Confirmed entry:

```
/citizen-dev          /services/citizen-development          302
```

(Citizen Dev was previously top-nav per the brief; now nested under Services.)

Conditional entries pending a prior route audit:

- If any prior `/tools/*` slug differs from V6 (e.g. `/tools/agents` to `/tools/custom-ai-agents`), add a `302` for each.
- If a prior alias for About or Contact existed, add a `302`.
- Trailing-slash normalization if not already handled at the platform level.

Before finalizing this file, list the existing top-level routes in the codebase (anything under `app/` or `pages/` not nested under a known section) and ask which need redirects. This is captured as Open Question 6 in `design/MIGRATION.md`.

## Acceptance criteria

- Header renders 7 items in PDF order on every viewport.
- Footer matches new IA and contains contact block from page 19.
- `navigation.ts` carries the 7-item structure and is the single source of truth for header and footer nav.
- Every "Book a Discovery Call" trigger across the site opens `<DiscoveryCallModal />`. None navigate.
- `/contact` route still resolves directly and renders the form.
- `public/_redirects` covers `/citizen-dev` to `/services/citizen-development` and any prior route slugs identified during the audit.
- Tab order through the modal is sane; Esc closes it; focus returns to the trigger.
- No page-level content changes. Service, tool, case study, blog, about, team, and contact page content all remain whatever they currently are; those land via `/page`.

## Open Questions to surface during execution

See `design/MIGRATION.md` Open Questions:

- OQ1: nav order (user brief vs PDF). This prompt uses PDF order. Confirm before merging if the brief order is preferred.
- OQ6: which legacy routes need redirects beyond `/citizen-dev`.
- OQ7: footer detail not visible in PDF.

Surface these in the PR description and ask before guessing.

--- END PROMPT ---
