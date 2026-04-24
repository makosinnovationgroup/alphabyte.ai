# Metadata Patterns

Next.js App Router metadata API recipes for Alphabyte pages.

## Canonical base

The production URL is `https://alphabyte.ai`. Use this as the base for all canonical and OG URLs. Define it once in `src/app/layout.tsx` metadata and extend per-page.

## Root layout metadata

The root layout at `src/app/layout.tsx` sets site-wide defaults. Page-level metadata extends or overrides these. Never rely on root metadata to serve as a page's actual title.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://alphabyte.ai"),
  title: {
    default: "Alphabyte — AI & Data Consulting",
    template: "%s — Alphabyte",
  },
  description:
    "Alphabyte is an AI and data consultancy. We work with companies that have real data problems and want production systems, not prototypes.",
  openGraph: {
    type: "website",
    siteName: "Alphabyte",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

**Key points:**

- `metadataBase` means relative URLs in child metadata (like `/og/pricing.png`) resolve correctly to absolute URLs.
- The `template` pattern means a page that sets `title: "Pricing"` becomes `"Pricing — Alphabyte"` — clean and consistent.
- The `default` title only shows on pages that don't set their own. In practice, every page should set its own, but the default is a safety net.

## Static page metadata

For a page with fixed content (most marketing pages), export a static `metadata` object at the top of the page file:

```tsx
// src/app/services/ml-deployment/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ML Deployment Consulting",
  description:
    "We help engineering teams take ML models from notebook to production. Infrastructure, monitoring, rollout strategy — handed off fully documented.",
  alternates: {
    canonical: "/services/ml-deployment/",
  },
  openGraph: {
    title: "ML Deployment Consulting",
    description:
      "We help engineering teams take ML models from notebook to production.",
    url: "/services/ml-deployment/",
    images: [
      {
        url: "/og/ml-deployment.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — ML Deployment Consulting",
      },
    ],
  },
  twitter: {
    title: "ML Deployment Consulting",
    description:
      "We help engineering teams take ML models from notebook to production.",
    images: ["/og/ml-deployment.png"],
  },
};

export default function Page() {
  return (
    // ...
  );
}
```

**Key points:**

- `title` uses just the page-specific part; the root `template` wraps it.
- `alternates.canonical` ends with a trailing slash to match `trailingSlash: true` in `next.config.mjs`.
- OG and Twitter descriptions can be shorter than the meta description — they display in card previews where brevity lands better.
- OG images are 1200×630 (standard Facebook/LinkedIn) and live in `/public/og/`.

## Dynamic page metadata (generateMetadata)

For pages whose metadata depends on build-time data (CMS content, MDX posts, generated routes), use `generateMetadata`:

```tsx
// src/app/case-studies/[slug]/page.tsx
import type { Metadata } from "next";
import { getCaseStudy, getAllCaseStudySlugs } from "@/lib/case-studies";

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = await getCaseStudy(params.slug);

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${study.slug}/`,
    },
    openGraph: {
      title: study.title,
      description: study.summary,
      url: `/case-studies/${study.slug}/`,
      images: [
        {
          url: study.ogImage ?? "/og/default-case-study.png",
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
  };
}
```

**Key points:**

- With static export, `generateMetadata` runs at build time, alongside `generateStaticParams`. No per-request work.
- Always provide a fallback OG image if the content source might not have one.

## Meta description guidelines

- **Length:** 140–160 characters. Shorter is fine for narrow pages. Google truncates around 160.
- **Voice:** follows the Alphabyte brand voice — direct, plain, specific. See the `alphabyte-brand` skill's `voice-and-tone.md`.
- **Include the primary intent phrase** naturally (the thing someone would search for) — but don't keyword-stuff.
- **Don't duplicate the title.** Title and description complement each other; duplicating wastes the snippet space.
- **Include a reason to click.** What's on the page? Who's it for? What will they learn?

**Good:**
> "We help engineering teams take ML models from notebook to production. Infrastructure, monitoring, rollout strategy — handed off fully documented."

**Bad (too vague):**
> "Alphabyte offers ML deployment consulting services to help your business leverage AI."

**Bad (keyword-stuffed):**
> "ML deployment, machine learning deployment, AI deployment, MLOps consulting, deployment services — Alphabyte does it all."

## Title guidelines

- **Length:** under 60 characters (including the " — Alphabyte" suffix from the template). Leaves room before Google truncates.
- **Lead with the specific thing**, not the brand. The brand is appended by the template.
- **Title Case** per the brand guide typography spec (§4.0 headers are Title Case).
- **No filler words.** "Services," "Solutions," "Offerings" are usually cuttable.

**Good:** `"ML Deployment Consulting"` → renders as `"ML Deployment Consulting — Alphabyte"`

**Bad:** `"Our Professional ML Deployment Consulting Services at Alphabyte"` — too long, duplicates brand name, adds filler.

## Canonical URL strategy

- Every page sets `alternates.canonical` to the page's own URL (with trailing slash).
- For paginated or filtered routes, canonical points to the primary/unfiltered version.
- For duplicate content across locations (e.g. a blog post republished from elsewhere), canonical points to the original.
- Never set canonical to a different page just to consolidate link equity — that's cloaking-adjacent and Google will ignore it.

## Open Graph image conventions

- **Dimensions:** 1200 × 630 pixels. This is the Facebook/LinkedIn standard and works for most platforms.
- **Location:** `/public/og/` — named after the page (`/og/pricing.png`, `/og/case-study-acme.png`).
- **Visual treatment:** follow brand guide §3.0 and §6.0. Typical patterns:
  - Dark background with brand gradient (hero style)
  - Alphabyte Blue flat with white logo lockup and page title
  - Greyscale photo with Alphabyte Blue multiply overlay + title
- **Text rules:**
  - Title in Aeonik (or Arial if unavailable locally during image creation), tight tracking
  - Keep text to a single short headline; don't pack in body copy
  - Ensure contrast — white on blue, black on white/grey, white on gradient
- **Logo:** primary logo in approved color for the background (see brand skill `component-rules.md` for pairings)

## Robots metadata

The site is indexable by default via the root layout's `robots: { index: true, follow: true }`. Override on specific pages only when you have a reason:

- **Legal/utility pages** (privacy policy, terms) — leave indexable; they build trust signals
- **Thank-you pages** (form confirmations) — `noindex` via page-level metadata
- **Search result pages** (if you add site search) — `noindex`
- **Preview/staging deployments** — `noindex` globally, handled via environment variable at build time

```tsx
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};
```

## Verification codes (Google Search Console, etc.)

When you're ready to verify the site with Google Search Console, Bing Webmaster Tools, or similar, use the `verification` field in root metadata:

```tsx
verification: {
  google: "google-site-verification-code-here",
  other: {
    "msvalidate.01": "bing-code",
  },
},
```

Don't commit these codes until after the domain is live and you're ready to submit — they're essentially public anyway but committing placeholder values clutters history.
