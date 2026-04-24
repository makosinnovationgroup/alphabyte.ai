# Page Pre-Ship Checklist

Every new page must pass this checklist before being considered done. Run it at the end of `/implement`, before reporting. Treat failures as blocking.

## 1. Metadata

- [ ] Page exports a `metadata` object (or `generateMetadata` function) with a page-specific `title`
- [ ] `title` is under 60 characters (after the " — Alphabyte" suffix is applied)
- [ ] `title` is in Title Case per brand guide §4.0
- [ ] `description` is 140–160 characters
- [ ] `description` follows brand voice — no forbidden vocabulary (unlock, leverage, transform, etc.)
- [ ] `description` includes the primary search intent phrase naturally
- [ ] `description` is distinct from the title, not a paraphrase
- [ ] `alternates.canonical` is set to the page's own URL with trailing slash

## 2. Open Graph & Twitter

- [ ] `openGraph.title` is set (can differ from `title` if needed for social phrasing)
- [ ] `openGraph.description` is set
- [ ] `openGraph.url` matches the canonical URL
- [ ] `openGraph.images` references a real 1200×630 image in `/public/og/`
- [ ] OG image alt text is set and descriptive
- [ ] OG image follows brand guide §3.0 / §6.0 (approved colors, logo placement, contrast)
- [ ] `twitter.card`, `twitter.title`, `twitter.description`, `twitter.images` are set

## 3. Page structure

- [ ] Exactly one `<h1>` on the page
- [ ] `<h1>` semantically aligns with the `<title>` (same topic, not identical wording)
- [ ] Heading levels are sequential (no jumping from `<h1>` to `<h3>`)
- [ ] Main content is wrapped in `<main>`
- [ ] Navigation uses `<nav>`
- [ ] Page has at least one internal link out (to a related service, case study, or page)

## 4. Links

- [ ] Internal links use descriptive anchor text (not "click here," "learn more" alone, or URLs)
- [ ] Internal links use Next.js `<Link>` component, not raw `<a>` tags
- [ ] External links have `rel="noopener noreferrer"` if they open in a new tab
- [ ] No broken links (paths match actual routes)

## 5. Images

- [ ] Every `<img>` and `next/image` has an `alt` attribute
- [ ] Decorative images use `alt=""` explicitly (not a missing attribute)
- [ ] Content images have descriptive alt text (not "image" or "photo")
- [ ] Image files have reasonable dimensions and compression (no 5MB hero images)
- [ ] Photography follows brand guide §6.0 (human element or abstract; overlays are Alphabyte Blue only)

## 6. URL & routing

- [ ] URL is short, lowercase, hyphen-separated
- [ ] URL describes the page content (no `/page-1` or `/new-service`)
- [ ] URL ends with trailing slash (matches `trailingSlash: true` in `next.config.mjs`)
- [ ] Dynamic routes use `generateStaticParams` so they're included in the static build

## 7. Sitemap & robots

- [ ] New route is included in `src/app/sitemap.ts`
- [ ] `lastModified` in sitemap reflects a reasonable date
- [ ] `priority` and `changeFrequency` in sitemap are set appropriately:
  - Home: priority 1.0, changeFrequency 'weekly'
  - Main sections (services, about): priority 0.8, changeFrequency 'monthly'
  - Individual case studies / blog posts: priority 0.6, changeFrequency 'yearly'
- [ ] Page is not accidentally `noindex` (unless it's a thank-you or utility page)

## 8. Structured data (when applicable)

- [ ] Service pages have `Service` JSON-LD
- [ ] Home page has `Organization` and/or `ProfessionalService` JSON-LD (set in root layout)
- [ ] Pages with Q&A sections have `FAQPage` JSON-LD, and the questions appear visibly on the page
- [ ] Blog posts have `BlogPosting` JSON-LD
- [ ] Nested pages have `BreadcrumbList` JSON-LD, with visible breadcrumb UI
- [ ] All structured data validates on <https://validator.schema.org/> (spot-check the shape; full validation happens post-deploy)

## 9. Brand compliance

- [ ] Colors, fonts, tracking use brand tokens (see `alphabyte-brand` skill)
- [ ] Logo usage correct (see `alphabyte-brand/component-rules.md`)
- [ ] Copy follows the Alphabyte voice (see `alphabyte-brand/voice-and-tone.md`)

## 10. Basic quality

- [ ] Page builds without errors (`pnpm build` succeeds)
- [ ] No TypeScript errors (`pnpm typecheck` clean)
- [ ] No console errors in the browser on load
- [ ] Page is responsive (mobile → desktop, no horizontal scroll, no broken layouts at common widths)
- [ ] Interactive elements have visible focus states (keyboard navigation works)

## Failing this checklist

If any box can't be checked:

- **Fix it** before reporting done if the fix is within scope
- **Surface it** to Mitchell explicitly if it represents a question the PRD didn't answer (e.g. "No OG image exists for this page — should I generate one or is a default acceptable?")

Do not silently ship with missing metadata or skipped structured data. Silent gaps compound — three pages shipped without canonical URLs become a migration project six months later.
