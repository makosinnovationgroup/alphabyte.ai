# Team Member Page

## Status
Shipped

## Type
New page

## Summary
A reusable `<TeamMemberPage>` component and `/team/[slug]` page wrapper that renders individual team member profiles. The component consumes props and handles layout; the wrapper reads JSON content files from `content/team/` and passes data through. This matches the existing BlogPostPage / blog wrapper split so the layout is content-source-agnostic.

## Decided
- Component file: `src/components/team-member-page.tsx`
- Wrapper file: `src/app/team/[slug]/page.tsx`
- Visual layout: V8 PDF page 17 (rasterized reference at `/tmp/team-member-ref-17.png`)
- Data shape: canonical fields from `content/team/adam-nameh.json` (slug, name, role, company, location, avatarSrc, eyebrow, bio, contact, credentials, careerTimeline, expertise, achievements, thoughtLeadership, articles, footerBio)
- URL pattern: `/team/<slug>/` with trailing slash
- The "MORE FROM THE BLOG" cards in `<BlogPostPage>` are inline JSX, not a factored-out component. The articles cards here have a slightly different shape (single category string + date vs. tags array + no date). Duplicate the card markup internally in `<TeamMemberPage>` rather than refactoring `<BlogPostPage>` in this PRD.
- The breadcrumb pattern is also inline across existing page components (ServicePage, BlogPostPage). Duplicate the breadcrumb markup internally. Follow-up PRD can factor out a shared `<Breadcrumb>` component.
- Footer bio section uses `<DiscoveryCallButton>` for the CTA, which requires `"use client"` — add the directive to the component file (same pattern as `service-page.tsx`)
- Structured data: `Person` + `BreadcrumbList` JSON-LD
- `avatarSrc` rendered via a plain `<img>` tag (matching existing avatar patterns in BlogPostPage); next/image optimization is out of scope

## Open Questions
None

## Scope

### In scope
- `<TeamMemberPage>` component rendering the full V8 page 17 layout: hero with avatar/bio/contact, credentials & education card, career timeline, areas of expertise grid, notable achievements dark band, thought leadership cards, articles grid, footer bio with discovery call CTA
- `/team/[slug]/page.tsx` wrapper with `generateStaticParams`, `generateMetadata`, `notFound()` handling
- `Person` and `BreadcrumbList` JSON-LD structured data in the wrapper
- Sitemap registration: dynamic entries for each `content/team/*.json` file in `src/app/sitemap.ts`
- TypeScript types exported from the component file

### Out of scope
- New team member content files beyond what exists at `content/team/adam-nameh.json`
- Updates to the team index page (`/team`) to link cards to `/team/[slug]` — separate follow-up PRD
- Avatar image optimization or CDN setup
- Blog post linking validation (articles cards may link to `/blog/<slug>/` URLs that 404 if matching MDX doesn't exist — content concern, not template concern)
- Mobile-specific layout tweaks beyond what V8 page 17 implies (PDF is desktop-only; use standard responsive patterns)
- Refactoring `<BlogPostPage>` to extract shared card or breadcrumb sub-components — follow-up PRD
- OG image creation for team member pages (use `/og/default.png` fallback)

## Pages & Components

### Modifying
- `src/app/sitemap.ts` — add dynamic team member entries by reading `content/team/` directory

### Creating
- `src/components/team-member-page.tsx` — reusable layout component for team member profiles
- `src/app/team/[slug]/page.tsx` — Next.js page wrapper with static generation and metadata

## Content

### Verbatim copy
None — all copy comes from the JSON content files. No hardcoded strings in the component.

### Drafted at implement-time
- Section eyebrow labels are data-driven from the JSON (e.g. `eyebrow` field for the hero). The section headings visible in V8 page 17 ("CREDENTIALS & EDUCATION", "AREAS OF EXPERTISE", "NOTABLE ACHIEVEMENTS & RECOGNITION", "THOUGHT LEADERSHIP & PUBLISHED CONTENT", "ARTICLES BY [NAME]") should be derived from the design. Use these exact strings as constants in the component, with the member's first name interpolated where needed.
- "Book a Discovery Call" button label — use the `<DiscoveryCallButton>` default label
- "Back to Blog" link text — match V8 page 17 exactly

## Search Intent & SEO

- **Target query:** "[person name] Alphabyte", "[person name] AI consultant Toronto"
- **URL slug:** `/team/<slug>/` (slug derived from JSON filename, e.g. `/team/adam-nameh/`)
- **Meta title:** `"[Name], [Role]"` — e.g. `"Adam Nameh, Co-Founder & Data Platform Architect"` (rendered as `"Adam Nameh, Co-Founder & Data Platform Architect — Alphabyte"` via template). Draft at implement-time if the full title exceeds 60 chars — truncate role.
- **Meta description:** First paragraph of `bio` array, truncated to 160 chars if needed. Draft at implement-time.
- **Structured data:** `Person` (name, jobTitle, worksFor, url, sameAs with LinkedIn), `BreadcrumbList` (Home / Team / [name])
- **OG image:** use existing `/og/default.png` fallback

## Design Notes

Verified against V8 page 17 rasterized image:

- **Hero**: two-column layout. Left column: square avatar with `rounded-lg` corners, approximately 150px. Right column: uppercase eyebrow in Alphabyte Blue, H1 name in display size, role + company on one line, location on next line in muted text, multi-paragraph bio, contact row with inline icon+label links (LinkedIn, email, phone), hairline border below the contact row.
- **Credentials & Education**: light gray background card (`bg-canvas` or `bg-alphabyte-grey/30`). Three-column grid for degree, institution, key coursework — each with a small icon above. Below that, a "Career Timeline" sub-card with three-column layout. Each timeline entry has a teal left border accent, period in Alphabyte Blue, role in bold, organization in muted gray.
- **Areas of Expertise**: white/light background. Two-column grid of items, each with a teal filled-circle checkmark icon and label text.
- **Notable Achievements & Recognition**: full-width dark background band (`bg-foreground`). Teal eyebrow. Two-column list with teal arrow icons and white text — same dark-band treatment as stat bars on service pages.
- **Thought Leadership & Published Content**: light gray background. Four-column grid of cards with white backgrounds. Each card: teal eyebrow for type, black title, muted description. If `href` is non-null, whole card is a link.
- **Articles by [Name]**: white background. Three-column card grid. Each card: dark thumbnail placeholder area, category tag pill (border + blue bg), bold title, excerpt, muted date, "Read more" link in Alphabyte Blue. Similar to BlogPostPage's "MORE FROM THE BLOG" cards but with date and single category string.
- **Footer bio**: light gray background. Row layout: small Alphabyte logo/avatar, "Alphabyte AI" name + description, "Book a Discovery Call" button, "Back to Blog" teal text link.

## Motion & Interactivity

- Thought leadership cards with `href`: hover state — subtle border color shift (`hover:border-alphabyte-blue/40`), matching the BlogPostPage card hover pattern
- Articles cards: same hover treatment as thought leadership cards
- Contact links in hero: color transition on hover (`transition-colors hover:text-foreground`)
- "Book a Discovery Call" button: opens discovery call modal via `<DiscoveryCallButton>` (existing behavior)
- No scroll animations or entrance transitions — static content page

## Acceptance Criteria
- [ ] `<TeamMemberPage>` renders V8 page 17 layout when given correct props
- [ ] Visual match against PDF page 17 holds for: hero, credentials card, career timeline, expertise grid, achievements dark band, thought leadership cards, articles grid, footer bio
- [ ] `/team/adam-nameh` route renders correctly using `content/team/adam-nameh.json`
- [ ] `/team/<slug>/` generates statically at build time (`generateStaticParams` works)
- [ ] `generateMetadata` produces correct title, description, canonical URL, OG tags
- [ ] `Person` and `BreadcrumbList` JSON-LD structured data is present in the page HTML
- [ ] Route registered in `sitemap.ts` with each team member URL
- [ ] Articles cards link to `/blog/<slug>/` correctly
- [ ] "Book a Discovery Call" button in footer bio opens the discovery call modal
- [ ] "Back to Blog" link points to `/blog/`
- [ ] All visible copy comes from the JSON file; no hardcoded member-specific strings in the component
- [ ] Section heading constants ("CREDENTIALS & EDUCATION", etc.) match V8 page 17 exactly
- [ ] 404 handling works when a slug has no matching JSON file (`notFound()`)
- [ ] TypeScript types for props are exported from the component file
- [ ] `pnpm build` passes
- [ ] `pnpm typecheck` passes
- [ ] Passes `seo/page-checklist.md`
- [ ] Copy passes `alphabyte-brand/voice-and-tone.md` checks (meta description, any drafted text)
- [ ] Visuals pass `alphabyte-brand/component-rules.md` review (colors, tokens, spacing)
- [ ] Implementation report states whether existing sub-components were reused or duplicated, with reasons

## Related
- `content/team/adam-nameh.json` — canonical data shape
- `src/components/blog-post-page.tsx` — pattern reference for breadcrumb, article cards, footer bio
- `src/app/blog/[slug]/page.tsx` — pattern reference for wrapper (generateStaticParams, generateMetadata, file I/O)
- `prds/blog-post-page.md` — prior PRD for the BlogPostPage component
- `prds/team-index.md` — prior PRD for the team index page (follow-up needed to link cards to `/team/[slug]`)
- `design/Alphabyte_AI_Site_V8.pdf` page 17 — visual source of truth

## Notes
- The breadcrumb markup is duplicated across ServicePage, BlogPostPage, and now TeamMemberPage. A follow-up PRD should extract a shared `<Breadcrumb>` component.
- The article card grid is similarly duplicated. A follow-up could extract a `<PostCardGrid>` component shared between BlogPostPage and TeamMemberPage.
- The `<TeamMemberPage>` component needs `"use client"` because it renders `<DiscoveryCallButton>`, which uses the `useDiscoveryCall` hook. This matches the `service-page.tsx` pattern.

---
*Created: 2026-04-29*
*Last updated: 2026-04-29 (shipped)*
