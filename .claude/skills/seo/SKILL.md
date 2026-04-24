---
name: seo
description: SEO standards for the Alphabyte marketing site. Use whenever (1) creating a new page or route, (2) modifying a page's metadata, title, or description, (3) adding structured data or JSON-LD, (4) working on sitemap, robots, or canonical URLs, (5) auditing an existing page for search performance, (6) writing or editing copy that appears in H1/H2 headings. This skill covers on-page SEO, metadata via Next.js App Router conventions, structured data for an AI/data consulting firm, and the page-level checklist that every new route must satisfy before shipping.
---

# SEO for Alphabyte

Alphabyte is an AI and data consulting firm. The SEO job is to help people who are actively looking for AI consulting — to solve a specific problem, to evaluate vendors, to find specialized expertise — find us. Not to chase volume, not to rank for "AI" generally.

## How this skill is organized

- **`metadata-patterns.md`** — how to set titles, descriptions, OG, Twitter, canonical via Next.js App Router's metadata API. Read when creating or modifying a page.
- **`structured-data.md`** — JSON-LD recipes for Organization, Service, Article, FAQ, Breadcrumb. Read when adding rich results.
- **`page-checklist.md`** — the pre-ship checklist every new page must pass. Read before calling a page done.

## Hard rules (never violate)

1. **Every page has a unique `<title>`.** Not inherited from the root layout, not duplicated across pages. If you don't have a page-specific title, stop and write one.
2. **Every page has a unique meta description, 140–160 characters.** Shorter is fine if the page is narrow; longer gets truncated in SERPs.
3. **Every page has a canonical URL.** Matches the final deployed URL with trailing slash convention (per `next.config.mjs`).
4. **Every page has Open Graph tags** (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`). LinkedIn shares and Slack previews use these.
5. **Every page has exactly one `<h1>`,** and it closely matches the `<title>`. Not identical, but semantically aligned.
6. **Every image has meaningful `alt` text.** Decorative images use `alt=""` explicitly, not a missing attribute.
7. **Internal links use descriptive anchor text.** "Our approach to AI deployment" not "click here" or "learn more."
8. **URLs are short, lowercase, hyphen-separated.** `/services/ml-deployment` not `/services/ML_Deployment` or `/services/machine-learning-deployment-services`.
9. **`sitemap.ts` and `robots.ts` exist in `src/app/`** and are kept current. Every indexable page must be in the sitemap.
10. **No accidental `noindex`.** Staging/preview environments should `noindex`; production never should.

## Static export constraints

This project uses Next.js static export (`output: 'export'`). Implications:

- **OG images must be pre-built,** not generated at request time. Either create them manually in `/public/og/` or use a build-time generation approach. Runtime `@vercel/og` won't work.
- **`sitemap.ts`** runs at build time — it produces a static `sitemap.xml` in `out/`. Dynamic sitemaps that update without rebuilding aren't possible in this mode.
- **`generateMetadata`** runs at build time, not per-request. You can't personalize metadata based on the user. For a marketing site this is fine.

## Voice for meta content

Meta descriptions, OG descriptions, and headings all follow the Alphabyte brand voice. Load the `alphabyte-brand` skill's `voice-and-tone.md` when drafting any of this copy. Forbidden vocabulary (unlock, leverage, transform, revolutionize, cutting-edge, etc.) applies in meta tags too — search result snippets are customer-facing copy.

## Workflow: every new page

When implementing a new page or route:

1. **Before writing components** — identify the target search intent. What would someone type into Google to find this page? Write that down; it shapes the title and H1.
2. **Write metadata first** — export a `metadata` object (or `generateMetadata` function) at the top of the page file. Use the patterns in `metadata-patterns.md`.
3. **Build the page** — H1 first, then supporting structure. H1 should align with the title.
4. **Add structured data** if the page type warrants it (Service, FAQ, Article). See `structured-data.md`.
5. **Register in `sitemap.ts`** — add the new route to the sitemap export.
6. **Run the pre-ship checklist** in `page-checklist.md`. Every box must be checked before calling it done.

## Keyword strategy (light)

Alphabyte competes for specific, intent-bearing queries. Don't try to rank for "AI" — try to rank for:

- Problem-shaped queries: "how to deploy ML models to production," "AI consulting for healthcare data," "ML infrastructure audit"
- Vendor-evaluation queries: "AI consulting firms [location]," "boutique AI consultancy," "senior ML engineers on contract"
- Specific-stack queries: "[framework] consulting," "[industry] AI consulting"

The site should have pages that answer specific questions, not one page that tries to rank for everything. Resist the urge to stuff every service into one `/services` page — split them so each one can own its search intent.

## Red flags — stop if you catch yourself

- Setting `<title>{process.env.SITE_NAME}</title>` or any other placeholder / templated title without actual page-specific content
- Copying the meta description from the H1 verbatim (they should complement, not duplicate)
- Using `<h1>` for visual styling — if you need a big headline that isn't the page's primary heading, use `<p className="text-display">`
- Multiple H1s on a page (use `<h2>` for secondary sections)
- Images with `alt="image"` or `alt="logo"` — that's not alt text, it's noise
- Shipping a page without adding it to `sitemap.ts`
- Introducing `noindex` to a production page "temporarily"
- Writing a meta description longer than 160 characters (it'll be truncated)
- Writing a `<title>` longer than 60 characters (same reason)

## When in doubt

Pages exist to answer a specific search intent. If you can't articulate what query a page is meant to rank for, either (a) you don't need the page, or (b) the page needs to be sharpened until you can. Bring it back to Mitchell rather than shipping vague pages that won't rank for anything.
