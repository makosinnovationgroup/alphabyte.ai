# V7 → V8 update

This bundle updates the project from V7 to V8 design. V8 is **purely additive** — pages 1–19 are unchanged. Two new pages added at the end:

- **Page 20** — Tools index at `/tools` (resolves OQ3)
- **Page 21** — Blog post detail template at `/blog/[slug]` (resolves OQ4)

If you've already shipped pages 1–19, you don't need to re-run any of them. Only the two new pages need dispatching.

## What's in this bundle

```
design/
  Alphabyte_AI_Site_V8.pdf       ← new PDF
  MIGRATION.md                    ← updated (page inventory rows 20-21 added, OQ3 + OQ4 marked resolved)
  INDEX.md                        ← updated (tools-index and blog-post-template rows now have PDF pages)
.claude/
  commands/
    page.md                       ← V7 → V8 references swapped
    qa.md                         ← V7 → V8 references swapped
V8-UPDATE.md                      ← this file
```

## What to do after dropping in

1. **Drop bundle at project root** (overwriting matching files).

2. **Delete the old PDF**:
   ```
   rm design/Alphabyte_AI_Site_V7.pdf
   ```

3. **Clear stale rasterizations**:
   ```
   rm -f /tmp/page-*.png
   ```

4. **No new redirects required** for V8.

5. **Build `<BlogPostPage>` component first.** Every future blog post will use the layout from page 21. Build the component before dispatching `/page blog-post-template`. The prompt for it is below.

6. **Dispatch the two new pages:**
   ```
   /page tools-index
   /page blog-post-template
   ```

   `/page tools-index` is a one-off page (no reusable component needed — only one tools index will ever exist).

   `/page blog-post-template` should pick up the `<BlogPostPage>` component you just built.

## BlogPostPage component prompt

Run with `/feature` before dispatching `/page blog-post-template`:

```
--- BEGIN PROMPT ---

/feature BlogPostPage component — reusable layout primitive for blog post detail pages

Build a reusable React component <BlogPostPage> that renders the canonical blog post detail layout from V8 page 21. Every blog post on the site will use this layout. This component is the data-driven primitive that all post pages consume.

SOURCE OF TRUTH: design/Alphabyte_AI_Site_V8.pdf page 21. Before writing any code, rasterize the page and view it.

Run this before reading the rest of this prompt:

  pdftoppm -r 200 -f 21 -l 21 -png design/Alphabyte_AI_Site_V8.pdf /tmp/blog-post-ref

This produces /tmp/blog-post-ref-21.png. View it with the view tool. Confirm the structure matches the spec below.

REUSABLE LAYOUT COMPONENTS — CHECK BEFORE BUILDING:

Before writing layout markup, check src/components/ for existing layout primitives. <ServicePage>, <ToolPage>, <CaseStudyPage> already exist. Look for sub-components that BlogPostPage can reuse:

- The "MORE FROM THE BLOG" 3-card grid at the bottom is the same shape as the proof-cards pattern used elsewhere on the site. If a shared <ProofCards> or <PostCards> sub-component exists, reuse it.
- The "Ready to move?" sidebar CTA card is a smaller variant of the bottom closing CTA pattern. If it can share styling tokens or a sub-component, do so.
- The embedded "What the first 30 days look like" box inside the post body is the SAME component used inside <ServicePage>. Reuse it if it's exposed as a standalone component, or note it as a follow-up extraction.

If sharing requires refactoring an existing component, do not refactor in this PRD — note as a follow-up. Build BlogPostPage with whatever it needs internally.

Page structure (verify against rasterized image):

Top section:
- Breadcrumb: Home / Blog / [post title]
- Tag pills above the title (e.g. "CITIZEN DEVELOPMENT", "AI STRATEGY") — multiple tags allowed
- H1: post title (large, multi-line allowed)
- Subhead/excerpt: one paragraph below the title
- Author byline: small avatar (round) + author name + date + read time (e.g. "Adam Nameh · April 28, 2026 · 8 min read")
- Hairline rule below byline

Two-column body:
- Left column (~65% width): post content rendered as a sequence of body sections. Sections include:
  - h2 headings (e.g. "What changed this year", "The compounding advantage", "Why mid-market specifically")
  - Paragraphs of body text
  - Pull-quote callout (left-bordered teal accent, italic body, larger size)
  - Embedded "What the first 30 days look like" box (same component used in ServicePage — light card, week labels in left column, body text in right column, "Day 30" row with teal accent)
- Right sidebar (~30% width):
  - "IN THIS ARTICLE" section: small eyebrow heading + linked table of contents (each entry is a teal link to a section anchor)
  - "RELATED SERVICE" card: small eyebrow + service title + body description + "Learn more →" link
  - "Ready to move?" CTA card: dark background, small heading, body text, prominent "Book a Discovery Call" button (wires through DiscoveryCallButton)
  - "TOPICS" section: small eyebrow + tag pills (same style as top pills)

Author bio section (full-width, below the two-column body):
- Avatar (small, round) + author name + role/title + body bio + "View full profile →" link

"MORE FROM THE BLOG" section (full-width, hairline rule above):
- Small eyebrow heading
- 3-card grid showing other posts (each card: dark thumbnail placeholder + tag pills + title + excerpt + "Read more →" link)

Component contract:

Props:
- breadcrumb: { items: { label: string, href?: string }[] }
- tags: string[]  (tag pills above the title)
- h1: string
- excerpt: string
- author: { name: string, avatarSrc: string, date: string, readTime: string, role?: string, bio?: string, profileHref?: string }
- body: BodySection[]  where BodySection is one of:
    - { type: 'heading', text: string, id?: string }  (h2; id used for ToC anchors)
    - { type: 'paragraph', text: string }
    - { type: 'pullquote', text: string }
    - { type: 'thirtyDays', weeks: { label: string, body: string }[], dayThirty: { label: string, body: string } }  (matches ServicePage shape)
- tableOfContents: { label: string, anchorId: string }[]  (sidebar ToC; entries link to body heading anchors)
- relatedService: { eyebrow: string, title: string, body: string, href: string }
- readyToMoveCard: { heading: string, body: string, cta: { label: string, action: 'modal' } }
- topics: string[]  (sidebar tag pills, often same as `tags` but separate prop for flexibility)
- moreFromBlog: { tags: string[], title: string, excerpt: string, href: string, thumbnailSrc?: string }[]  (3 cards)

Visual fidelity requirements:
- Tag pills above the title use teal-outlined treatment matching case study tag pills.
- Author byline is small, muted, single line.
- Body section spacing matches V8: generous gap between paragraphs, larger gap between section headings.
- Pull-quote: left teal border, italic body, larger font, indented from main column.
- Sidebar sticks below the byline area but does not need to be sticky on scroll (don't build sticky behavior unless the PDF shows it).
- Sidebar eyebrows ("IN THIS ARTICLE", "RELATED SERVICE", "TOPICS") use the all-caps tracking-wide treatment consistent with the rest of the site.
- "Ready to move?" card uses a dark background to draw the eye — match V8 page 21 exactly.
- "MORE FROM THE BLOG" cards mirror the homepage proof-cards / Our Work card pattern.

Component composition:
- Wraps in <main> with appropriate spacing/padding.
- Uses existing tokens from tailwind.config.ts. No inline arbitrary values.
- "Ready to move?" CTA wires through DiscoveryCallButton + DiscoveryCallContext.
- File location: src/components/blog-post-page.tsx (match the convention used for ServicePage, ToolPage, CaseStudyPage).

Out of scope:
- Building actual blog post pages (those come later — each post is data passed to this component)
- Markdown / MDX parsing — the body[] array is structured already
- Mobile-specific tweaks beyond what V8 implies
- Sticky sidebar behavior on scroll
- Refactoring existing components to share sub-patterns. If sharing is obvious and cheap, do it; otherwise note as follow-up.

Acceptance criteria:
- Component renders the V8 page 21 layout correctly when given the right data
- Visual match against PDF page 21 holds for breadcrumb, tags, byline, two-column body, sidebar cards, author bio, more-from-blog grid
- Body[] supports all four section types and renders them in order
- ToC entries link to body heading anchors via id attribute
- "Ready to move?" CTA opens the Discovery Call modal
- All copy is data-driven; no hardcoded strings in the component itself
- TypeScript types exported alongside the component
- pnpm build and pnpm typecheck pass
- Implementation report explicitly states whether existing sub-components were reused, or if duplication was chosen (with reason)

--- END PROMPT ---
```

## Open Questions still unresolved

- **OQ5** — no Housing Services Corp case study PDF. `/page case-study-housing-services-corp` will halt until resolved.

That's the only remaining blocker.

## Resolved by V8

- **OQ3** (Tools index) — V8 page 20 is the canonical Tools index.
- **OQ4** (Blog post template) — V8 page 21 is the canonical blog post detail layout.
