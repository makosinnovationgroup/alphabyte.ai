# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build → static HTML in out/
pnpm typecheck    # tsc --noEmit
pnpm lint         # ESLint
```

No test suite exists. Validate changes with `pnpm typecheck` and `pnpm build`.

## Architecture

**Next.js 14 App Router, static HTML export to Cloudflare Pages.** No SSR, no API routes, no middleware. Every page must work with `output: 'export'` and `trailingSlash: true`.

### Content model

Content lives in `content/`, not in page files:

- **Blog posts**: `content/blog/<slug>.mdx` — frontmatter + MDX body. See `content/README.md` for the full schema.
- **Team members**: `content/team/<slug>.json` — structured JSON. See `content/team/adam-nameh.json` for the canonical shape.

Page wrappers at `src/app/blog/[slug]/page.tsx` and `src/app/team/[slug]/page.tsx` read these files at build time and pass data to pure layout components (`<BlogPostPage>`, `<TeamMemberPage>`). This separation keeps layouts content-source-agnostic.

### Page template pattern

Every content-driven page follows the same split:

1. **Layout component** (`src/components/<type>-page.tsx`) — pure props, no I/O, exports TypeScript types. Examples: `ServicePage`, `ToolPage`, `CaseStudyPage`, `BlogPostPage`, `TeamMemberPage`.
2. **Page wrapper** (`src/app/<route>/page.tsx`) — reads content, builds metadata, emits JSON-LD, passes props to the layout component.

Components that use `<DiscoveryCallButton>` need `"use client"` because it depends on `useDiscoveryCall` context.

### Design tokens

`tailwind.config.ts` is the single source of truth for brand tokens. Use Tailwind utilities, not raw values:

- Colors: `bg-alphabyte-blue`, `text-foreground`, `text-muted-foreground`, `bg-canvas`, `border-border-default`
- Type scale: `text-display`, `text-headline`, `text-body`, `text-body-sm`, `text-quote`
- Tracking: `tracking-brand-tight`, `tracking-brand-snug`, `tracking-brand-wide`
- Gradients: `bg-alphabyte-gradient`, `bg-alphabyte-gradient-linear`

If a token doesn't exist, add it to `tailwind.config.ts` rather than inlining arbitrary values.

### Discovery Call modal

Global modal managed by `DiscoveryCallProvider` in the root layout. Any component can trigger it via `<DiscoveryCallButton>` (which calls `useDiscoveryCall().open()`). The modal itself renders once in `layout.tsx`.

### Utility: `cn()`

`src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge, extended for custom text sizes). Use it for all className composition.

### Navigation

`src/lib/navigation.ts` defines the site nav structure. The `Header` and `Footer` both consume this.

### Button variants

`src/components/ui/button.tsx` uses `cva` for variants. In Option C (the current design direction), the primary CTA is `variant="dark"` (black fill, white text). `variant="default"` is Alphabyte Blue.

## Design source of truth

`design/Alphabyte_AI_Site_V8.pdf` is the current visual spec. `design/INDEX.md` maps each logical page to its PDF page number. When implementing from the PDF, rasterize the relevant page first:

```bash
pdftoppm -r 200 -f <page> -l <page> -png design/Alphabyte_AI_Site_V8.pdf /tmp/ref
```

Then view the resulting PNG before writing code. The image takes precedence over PRD text when they conflict.

## Skills

Three skills in `.claude/skills/` govern how work is produced:

- **`alphabyte-brand`** — voice, color, typography, component patterns, motion. `voice-and-tone.md` has a forbidden vocabulary list (no "unlock", "leverage", "transform", etc.).
- **`seo`** — metadata patterns, structured data, page checklist. Every new page must pass `page-checklist.md`.
- **`alphabyte-services`** — Alphabyte's offerings and pricing. Contains confidential data (rate cards, hours) that must never appear in public-facing code or copy.

## Workflow commands

PRDs live in `prds/`. The standard workflow is:

1. `/feature` — produces a PRD
2. `/implement <prd-path>` — builds from the PRD
3. `/qa <logical-name>` — visual QA against the PDF

The `/page` command orchestrates all three via a state machine with stop hooks (see `.claude/SETUP.md`).

## Key constraints

- **Static export only.** No `getServerSideProps`, no API routes, no middleware. Dynamic routes need `generateStaticParams`.
- **All URLs end with trailing slash.** Enforced by `trailingSlash: true` in `next.config.mjs`.
- **Images are unoptimized.** `images.unoptimized: true` in next config (static export limitation). Use plain `<img>` tags; `next/image` works but doesn't optimize.
- **New routes must be registered in `src/app/sitemap.ts`.**
- **Wrap new Radix primitives** following the pattern in `src/components/ui/dialog.tsx` — re-export unstyled parts, forwardRef + `cn()` on styled parts.
