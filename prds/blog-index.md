# Blog Index Page

## Status
Shipped

## Type
New page

## Summary
Build the blog index page at `/blog` from the V7 design (PDF page 12). The page shows a hero with eyebrow, heading, and subhead, a featured post card, a grid of post cards organized by category, and a "Load more posts" button. Since no blog post detail route exists yet (OQ4 is still open), this page renders hardcoded sample posts from the PDF as static content with placeholder links.

## Decided
- Route: `/blog`
- Eyebrow: "ALPHABYTE AI · PERSPECTIVES"
- H1: "Blog"
- Subhead is verbatim from PDF (see Verbatim copy)
- Featured post renders as a wide card: dark image placeholder left, content right
- Grid posts render as white cards with image placeholder, category tag, title, excerpt, attribution, and "Read more" link
- Grid layout: 3 columns on desktop, responsive down to 1 column
- Six sample posts hardcoded from PDF content (one featured + five grid)
- Category tags are uppercase, teal (Alphabyte Blue), small text with wide tracking
- "Read more" links use teal text with arrow (→), matching the secondary CTA pattern
- "Load more posts" button is outlined/ghost style, centered below the grid
- Post data is defined in a local data array within the page file (not a separate data file), since the blog content system is not yet designed (OQ4)
- "Read more" links and "Load more posts" button are non-functional for now (href="#") — they become functional when blog post detail pages are built (OQ4)
- No reusable layout component applies — the blog index has a unique layout (hero + featured card + card grid) that doesn't match ServicePage, CaseStudyPage, or TeamMemberPage

## Open Questions
- None that block this page. OQ4 (blog post detail page) blocks the `/blog/[slug]` route but not the index itself.

## Scope

### In scope
- Hero section: eyebrow "ALPHABYTE AI · PERSPECTIVES", H1 "Blog", subhead paragraph
- Featured post card: full-width, two-column layout with dark image placeholder left and content (category tag, title, excerpt, attribution, "Read more →") right
- Post card grid: 3-column desktop grid of white cards, each with image placeholder, category tag, title, excerpt, attribution, "Read more →"
- Second row of cards: 2 cards, left-aligned (not centered)
- "Load more posts" button: outlined/ghost, centered below grid
- Six hardcoded sample posts from the PDF
- Page metadata, OG tags, canonical URL
- Sitemap entry (already exists)
- CollectionPage structured data

### Out of scope
- Blog post detail pages (`/blog/[slug]`) — blocked by OQ4
- Actual blog content, MDX pipeline, or CMS integration
- Search or filter functionality
- Pagination logic (the "Load more posts" button is a placeholder)
- RSS feed
- Author profile links

## Pages & Components

### Modifying
- `src/app/blog/page.tsx` — replace stub with full blog index implementation
- `src/app/sitemap.ts` — update `lastModified` date for `/blog/`

### Creating
- None

## Content

### Verbatim copy
- Eyebrow: "ALPHABYTE AI · PERSPECTIVES"
- H1: "Blog"
- Subhead: "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business."
- Load more button: "Load more posts"

**Featured post:**
- Category: "CITIZEN DEVELOPMENT"
- Title: "The window is open. Here is how to move before it closes."
- Excerpt: "Claude hit a threshold this year. Any employee who can describe their work can now build applications and automate workflows against live operational data. The mid-market organizations that move in the next six months will have a compounding capability advantage that takes years to close."
- Attribution: "Alphabyte AI · April 2026"
- CTA: "Read more →"

**Grid post 1:**
- Category: "AI STRATEGY"
- Title: "Why we start with the people, not the process."
- Excerpt: "Every organization has someone who has quietly built something extraordinary with Claude. We find th..."
- Attribution: "Alphabyte AI · April 2026"
- CTA: "Read more →"

**Grid post 2:**
- Category: "DATA & INFRASTRUCTURE"
- Title: "MCP servers: what they are, what they do, and why they matter."
- Excerpt: "Model Context Protocol is the architecture that connects Claude to the systems that run your busine..."
- Attribution: "Alphabyte AI · April 2026"
- CTA: "Read more →"

**Grid post 3:**
- Category: "CASE STUDIES"
- Title: "How Sprinklermatic eliminated 40 hours per week of manual NFPA lookup."
- Excerpt: "A live NFPA fire codes compliance agent, built on a custom MCP server, in production for a $200M+ fi..."
- Attribution: "Alphabyte AI · March 2026"
- CTA: "Read more →"

**Grid post 4:**
- Category: "AI STRATEGY"
- Title: "The data-first discipline: why we never build before we validate."
- Excerpt: "Most AI projects fail because of the data underneath them. Here is how we prevent that — and what we..."
- Attribution: "Alphabyte AI · March 2026"
- CTA: "Read more →"

**Grid post 5:**
- Category: "CITIZEN DEVELOPMENT"
- Title: "What a Claude SDLC plugin actually does."
- Excerpt: "The single piece of infrastructure that turns informal AI usage into a governed, replicable capabili..."
- Attribution: "Alphabyte AI · February 2026"
- CTA: "Read more →"

### Drafted at implement-time
- None — all visible copy is from the PDF

## Search Intent & SEO
- **Target query:** "alphabyte AI blog", "AI consulting blog", "AI deployment articles"
- **URL slug:** `/blog/`
- **Meta title:** "Blog" (renders as "Blog — Alphabyte" via template)
- **Meta description:** "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business."
- **Structured data:** CollectionPage (for the blog index listing posts)
- **OG image:** use existing `/og/default.png` until a blog-specific OG image is created

## Design Notes
- Hero uses `bg-canvas` background, consistent with other pages
- Featured post card: full-width white card with thin border. Left half is a dark placeholder area labeled "[Featured image]". Right half has content with generous padding.
- Grid post cards: white `bg-white` surface with `border-border-default`, each containing a dark image placeholder area at top, then content below
- Category tags: uppercase, `text-body-sm`, `tracking-brand-wide`, `text-alphabyte-blue`
- Post titles: `text-headline` weight
- Excerpts: `text-body` or `text-body-sm`, `text-muted-foreground`, truncated with ellipsis where the PDF shows truncation
- Attribution line: `text-body-sm`, `text-muted-foreground`, format "Alphabyte AI · Month YYYY"
- "Read more →" links: `text-alphabyte-blue`, `text-body-sm`, right-aligned or inline, with arrow character
- "Load more posts" button: outlined/ghost style with border, centered, matching Option C button hierarchy
- Image placeholders: dark grey rectangles labeled "[Post image]" or "[Featured image]" in muted text, matching the PDF mockup treatment
- Grid gap and card padding should match the visual rhythm in the PDF — comfortable white space between cards

## Motion & Interactivity
- Cards: subtle hover lift (Tier 1, on-brand)
- "Read more →" links: color transition on hover (200ms)
- "Load more posts" button: standard hover state per Option C button rules
- All motion respects `prefers-reduced-motion`

## Acceptance Criteria
- [ ] Page renders at `/blog/` without console errors
- [ ] Eyebrow reads "ALPHABYTE AI · PERSPECTIVES" in uppercase, teal
- [ ] H1 reads "Blog"
- [ ] Subhead matches verbatim copy from PDF
- [ ] Featured post renders as a two-column card: image placeholder left, content right
- [ ] Five grid posts render in a 3-column layout (row 1: 3 cards, row 2: 2 cards left-aligned)
- [ ] Each card shows category tag, title, excerpt, attribution, and "Read more →" link
- [ ] Category tags are uppercase, Alphabyte Blue, wide tracking
- [ ] "Load more posts" button is centered below the grid, outlined/ghost style
- [ ] Page is responsive: cards stack to 1 column on mobile
- [ ] Metadata exports correct title, description, canonical, OG, and Twitter tags
- [ ] CollectionPage structured data is present
- [ ] Passes seo/page-checklist.md
- [ ] Copy passes alphabyte-brand/voice-and-tone.md checks
- [ ] Visuals pass alphabyte-brand/component-rules.md review
- [ ] `pnpm build` succeeds
- [ ] `pnpm typecheck` succeeds

## Related
- design/INDEX.md — blog-index row (PDF page 12, action: new)
- design/MIGRATION.md — OQ4 (blog post detail page, still open)
- design/Alphabyte_AI_Site_V7.pdf page 12

## Notes
- The blog index is intentionally self-contained with hardcoded sample data. When OQ4 is resolved and the blog content system is designed, this page will be refactored to read from whatever content source is chosen (MDX, CMS, etc.).
- The six sample posts from the PDF represent the content direction: AI strategy, citizen development, data infrastructure, and case study write-ups. These are placeholder titles, not committed editorial content.
- No existing layout component matches this page. If a future "index with featured card + card grid" pattern recurs (e.g., a resources page), this page's structure could be extracted into a component at that time.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29 (shipped)*
