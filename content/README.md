# content/

Static content for blog posts and team member profiles. Each file is a single piece of content. The Next.js page wrappers at `src/app/blog/[slug]/page.tsx` and `src/app/team/[slug]/page.tsx` read these files at build time and pass the data to `<BlogPostPage>` and `<TeamMemberPage>` components.

## Structure

```
content/
├── blog/
│   └── window-is-open.mdx       # one MDX file per post
└── team/
    └── adam-nameh.json           # one JSON file per team member
```

## Adding a new blog post

1. Create `content/blog/<slug>.mdx`.
2. Frontmatter fields (all required unless marked optional):
   - `slug` — string, must match filename
   - `title` — string
   - `excerpt` — string, displayed below the h1 and on blog index cards
   - `publishedDate` — ISO date string (e.g. `2026-04-28`)
   - `readTime` — string (e.g. `8 min read`)
   - `author` — string, must match a slug in `content/team/<slug>.json`
   - `tags` — array of strings, displayed as pills above the title
   - `topics` — array of strings, displayed in the sidebar topics list
   - `relatedService` — object: `eyebrow`, `title`, `body`, `ctaLabel`, `ctaHref`
   - `readyToMoveCard` — object: `heading`, `body`, `ctaLabel` (button always opens the Discovery Call modal)
   - `tableOfContents` — array of `{ label, anchorId }` objects matching `## Heading {#anchor-id}` syntax in the body
3. Body is MDX. Use `## Heading {#anchor-id}` to create anchors that match the table of contents.
4. Use `>` blockquote syntax for pull-quotes.
5. Use the `<ThirtyDays />` component for embedded "What the first 30 days look like" boxes.

## Adding a new team member

1. Create `content/team/<slug>.json`.
2. See `content/team/adam-nameh.json` for the full schema.
3. Required: `slug`, `name`, `role`, `avatarSrc`, `bio` (array of paragraphs).
4. Optional but recommended: `eyebrow`, `company`, `location`, `contact`, `credentials`, `careerTimeline`, `expertise`, `achievements`, `thoughtLeadership`, `articles`.
5. Avatar images live in `/public/team/<slug>.jpg` (referenced as `/team/<slug>.jpg` in the JSON).

## Listing posts and team members

The blog index (`/blog`) and team index (`/team`) iterate over their respective directories at build time and produce summary cards. Each post's `tags`, `excerpt`, `publishedDate`, and `author` (resolved against the team JSON) populate the index cards.

## Editing existing content

Edit the file, commit, push. Cloudflare Pages rebuilds and the changes go live. No CMS required — content lives with the code in git.

## Future migration

When content volume justifies it, migrating to a headless CMS is straightforward. The frontmatter fields here map directly to standard CMS field types. Until then, files-in-git is the simplest workflow with the smallest moving-parts surface area.
