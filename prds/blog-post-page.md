# BlogPostPage Component & /blog/[slug] Wrapper

## Status
Shipped

## Type
New page

## Summary
A reusable `<BlogPostPage>` component and a Next.js page wrapper that together render blog post detail pages from MDX content files. The component is a pure layout primitive (props in, JSX out, no I/O). The wrapper at `/blog/[slug]/` handles file reading, frontmatter parsing, MDX compilation, author resolution, and "more posts" lookup. If we migrate from MDX to a CMS later, only the wrapper changes.

## Decided
- Component file: `src/components/blog-post-page.tsx`
- Wrapper file: `src/app/blog/[slug]/page.tsx`
- Content source: `content/blog/*.mdx` (frontmatter + MDX body)
- Author data source: `content/team/<author-slug>.json`
- MDX library: `next-mdx-remote` + `gray-matter` (neither is currently installed)
- Visual layout: V8 PDF page 21 is the source of truth
- Frontmatter shape: exactly as defined in `content/blog/window-is-open.mdx`
- Anchor syntax: `## Heading {#anchor-id}` in MDX body, parsed to match `tableOfContents` entries
- The `<ThirtyDays />` component is used inline in MDX posts; it will be extracted from `ServicePage` into a shared component at `src/components/thirty-days.tsx` (small refactor — the markup is self-contained and extraction is clean)
- Breadcrumb, tag pills, blockquote, and sidebar card patterns are duplicated inline (matching the existing pattern where `ServicePage`, `ToolPage`, and `CaseStudyPage` each contain their own breadcrumb and styling)
- "MORE FROM THE BLOG" card grid is built inline (the homepage `ProofPoints` component is hardcoded with specific data and a different shape)
- "Ready to move?" sidebar CTA wires through `DiscoveryCallButton` + `DiscoveryCallContext`
- Sidebar is NOT sticky on scroll
- URL pattern: `/blog/<slug>/` with trailing slash

## Open Questions
None

## Scope

### In scope
- `<BlogPostPage>` component rendering the full V8 page 21 layout: breadcrumb, tag pills, h1, excerpt, author byline, two-column body with sidebar (ToC, related service card, CTA card, topics), author bio section, "MORE FROM THE BLOG" 3-card grid
- `/blog/[slug]/page.tsx` wrapper with `generateStaticParams`, `generateMetadata`, MDX compilation, author resolution, and "more posts" lookup
- Extracting the ThirtyDays box from `ServicePage` into `src/components/thirty-days.tsx` (shared component) and updating `ServicePage` to import it
- Custom MDX components: `h2` (with anchor id support), `blockquote` (pull-quote styling), `<ThirtyDays />`
- `BlogPosting` + `BreadcrumbList` JSON-LD structured data
- Sitemap registration for each blog post URL
- New dependencies: `next-mdx-remote`, `gray-matter`

### Out of scope
- Blog index page (`/blog`) — already dispatched separately
- Additional blog post content beyond `content/blog/window-is-open.mdx`
- Pagination, search, or filtering on the blog index
- Image optimization for thumbnails (dark placeholder background is fine)
- Mobile-specific layout tweaks beyond what responsive defaults provide
- Sticky sidebar behavior on scroll
- RSS feed
- Comments system
- OG image generation (use default OG image; custom images are a follow-up)

## Pages & Components

### Modifying
- `src/components/service-page.tsx` — extract ThirtyDays section into shared component, replace inline markup with import
- `src/app/sitemap.ts` — add blog post URLs dynamically

### Creating
- `src/components/blog-post-page.tsx` — reusable blog post layout component
- `src/components/thirty-days.tsx` — extracted ThirtyDays box (shared between ServicePage and BlogPostPage MDX)
- `src/app/blog/[slug]/page.tsx` — page wrapper with generateStaticParams + generateMetadata

## Content

### Verbatim copy
All visible copy comes from the MDX frontmatter, MDX body, and team JSON. No hardcoded strings in the component beyond structural labels:

- Sidebar ToC eyebrow: "IN THIS ARTICLE"
- Sidebar topics eyebrow: "TOPICS"
- Author bio "View full profile" link: "View full profile →"
- "MORE FROM THE BLOG" section eyebrow: "MORE FROM THE BLOG"
- Card CTA text: "Read more →"
- ThirtyDays box heading: "What the first 30 days look like"

These structural labels match what appears in the V8 PDF page 21.

### Drafted at implement-time
None — all copy is data-driven or uses the structural labels above.

## Search Intent & SEO

- **Target query:** varies per post (e.g. "citizen development mid-market AI", "AI strategy for mid-market companies")
- **URL slug:** `/blog/<slug>/` — slug comes from the MDX filename
- **Meta title:** from frontmatter `title` field, rendered via `%s -- Alphabyte` template
- **Meta description:** from frontmatter `excerpt` field (must be 140-160 chars; this is a content authoring constraint, not a code constraint)
- **Structured data:** `BlogPosting` (headline, description, datePublished, author, publisher) + `BreadcrumbList` (Home > Blog > Post Title)
- **OG image:** use `/og/default.png` as fallback; per-post OG images are a follow-up

## Design Notes

Verified against V8 PDF page 21:

**Top section (full-width, light background):**
- Breadcrumb bar matches ServicePage/ToolPage pattern: `border-b border-border-default`, blue links, `/` separators
- Tag pills: teal-outlined treatment — `rounded-full border border-alphabyte-blue bg-alphabyte-blue/10 px-4 py-1.5 text-body-sm font-medium text-alphabyte-blue` (matching CaseStudyPage pills)
- H1: `text-display tracking-brand-tight` (large, multi-line allowed)
- Excerpt: `text-2xl text-muted-foreground` below title
- Byline: small round avatar (32-40px), author name + `·` + formatted date + `·` + read time, `text-body-sm text-muted-foreground`
- Hairline rule below byline: `border-b border-border-default`

**Two-column body:**
- Grid: `grid-cols-1 md:grid-cols-[1fr_340px]` (matching CaseStudyPage sidebar width)
- Left column: rendered MDX content with `prose`-like spacing — `space-y-5` between elements
- h2 headings: `text-lg font-bold text-foreground pt-4` with `id` attribute matching ToC anchor
- Blockquote/pull-quote: `border-l-4 border-alphabyte-blue py-2 pl-6 text-body italic text-foreground` (matching CaseStudyPage callout treatment)
- Right sidebar: `border-l border-border-default bg-canvas` with sections separated by `border-t border-border-default`
- Sidebar eyebrows: `text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground`
- ToC links: `text-alphabyte-blue` with anchor hrefs
- Related service card: white bg, border, eyebrow + title + body + "Learn more" link in blue
- "Ready to move?" card: `bg-foreground` (dark), white text, `DiscoveryCallButton` with light variant
- Topics section: same pill treatment as top tags

**Author bio section (full-width):**
- `border-t border-border-default` above
- Horizontal layout: avatar (48-56px round) + name (bold) + role (muted) + bio paragraph + "View full profile" link in blue

**"MORE FROM THE BLOG" section (full-width):**
- `border-t border-border-default` above
- Eyebrow heading: `text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue`
- 3-column grid: `grid-cols-1 md:grid-cols-3 gap-6`
- Each card: dark thumbnail placeholder area (bg-foreground, ~160px tall) + tag pills + title (bold) + excerpt (muted) + "Read more" link (blue)

## Motion & Interactivity
- ToC sidebar links scroll to matching `#anchor-id` in the post body (native browser anchor behavior, no JS scroll animation needed)
- "Book a Discovery Call" button opens the Discovery Call modal via `DiscoveryCallContext`
- Standard link hover transitions: `transition-colors hover:text-alphabyte-blue` or `hover:text-foreground` as appropriate
- No scroll-linked animations, no parallax, no sticky sidebar

## Acceptance Criteria
- [ ] `<BlogPostPage>` renders V8 page 21 layout correctly when given props
- [ ] Visual match against PDF page 21 holds for breadcrumb, tags, byline, two-column body, all sidebar sections, author bio, and more-from-blog grid
- [ ] Pull-quote (blockquote in MDX) renders with left teal border treatment
- [ ] `<ThirtyDays />` component renders inside the post body matching the visual treatment used in ServicePage
- [ ] `<ThirtyDays />` extracted to `src/components/thirty-days.tsx` and ServicePage updated to import from shared location
- [ ] Anchor links in sidebar ToC scroll to correct h2 sections (each h2 has matching `id` attribute)
- [ ] `/blog/window-is-open/` route renders correctly using `content/blog/window-is-open.mdx` and `content/team/adam-nameh.json`
- [ ] `/blog/<slug>/` generates statically at build time (`generateStaticParams` works with `output: 'export'`)
- [ ] `generateMetadata` produces correct title, description, canonical URL, OG tags
- [ ] `BlogPosting` and `BreadcrumbList` JSON-LD structured data present and valid
- [ ] Route registered in `src/app/sitemap.ts` with each blog post URL
- [ ] "Ready to move?" CTA opens the Discovery Call modal
- [ ] "View full profile" link resolves to `/team/adam-nameh/`
- [ ] All visible copy comes from MDX file or team JSON; no hardcoded content strings
- [ ] TypeScript types exported alongside the component
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` passes
- [ ] Passes `seo/page-checklist.md`
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks (structural labels only; post content is authored separately)
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review
- [ ] No forbidden vocabulary in structural labels or metadata

## Related
- `design/Alphabyte_AI_Site_V8.pdf` page 21 — canonical visual reference
- `content/blog/window-is-open.mdx` — canonical content/frontmatter reference
- `content/team/adam-nameh.json` — author data shape reference
- `content/README.md` — content authoring guide
- `design/INDEX.md` — dispatches `blog-post-template` as a V8 new page
- `src/components/service-page.tsx` — ThirtyDays extraction source
- `src/components/case-study-page.tsx` — tag pill and two-column sidebar patterns
- `prds/blog-index.md` — blog index page (separate)

## Notes
- **ThirtyDays extraction**: The ThirtyDays box in `ServicePage` (lines 158-186) is self-contained markup — a heading, a list of week rows, and a day-30 row. Extraction into `src/components/thirty-days.tsx` is a clean cut: export the component with the same `{ weeks, dayThirty }` props shape, import it in both `ServicePage` and as a custom MDX component in the blog wrapper. This is the smallest possible refactor that avoids markup drift.
- **No shared ProofCards component**: The homepage `ProofPoints` component is hardcoded with specific case study data and uses a different card shape (eyebrow/title/body, no tags, no links, no thumbnails). The "MORE FROM THE BLOG" cards need tags, excerpts, thumbnail placeholders, and "Read more" links. Building inline is the right call — a shared abstraction would be forced.
- **Breadcrumb duplication**: All three existing page shells (ServicePage, ToolPage, CaseStudyPage) duplicate the breadcrumb markup. This is a known pattern in the codebase. Extracting a shared `<Breadcrumb>` component would be a reasonable follow-up but is not in scope here.
- **MDX anchor syntax**: The `## Heading {#anchor-id}` syntax is a remark-directive-style convention. `next-mdx-remote` supports custom remark plugins. A lightweight plugin or regex-based transform to strip `{#id}` from heading text and set the `id` attribute is needed. Alternatively, `remark-heading-id` handles this.
- **Static export compatibility**: `next-mdx-remote` works with static export because MDX compilation happens at build time in `generateStaticParams` / the page component. No server runtime needed.
- **New dependencies**: `next-mdx-remote` (~40KB), `gray-matter` (~12KB). Both are mature, well-maintained, and standard for MDX-in-Next.js static sites.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29 (shipped)*
