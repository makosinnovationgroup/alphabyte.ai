# Structured Data (JSON-LD)

Structured data helps search engines understand what a page is *about* — not just what words it contains. Google uses it for rich results (review stars, FAQs, breadcrumbs, etc.), and LLM-powered search (ChatGPT search, Perplexity, Google AI Overviews) increasingly relies on it to extract facts about a business.

For an AI consulting firm, the meaningful schemas are: **Organization**, **Service**, **Article** (if blogging), **FAQPage**, and **BreadcrumbList**. Skip the rest — overuse of structured data on irrelevant pages looks spammy and Google discounts it.

## How to embed JSON-LD in Next.js

Use a `<script type="application/ld+json">` tag with `dangerouslySetInnerHTML`. Place site-wide schemas (like Organization) in `src/app/layout.tsx`. Place page-specific schemas in the page component itself.

```tsx
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    // ...
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>{/* page content */}</main>
    </>
  );
}
```

For multiple schemas on one page, use an array — search engines handle either a single object or an array of schema objects.

## Organization — site-wide

Placed in `src/app/layout.tsx`. This is the canonical definition of Alphabyte as an entity.

```tsx
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alphabyte",
  "legalName": "Alphabyte", // or full legal entity name if different
  "url": "https://alphabyte.ai",
  "logo": "https://alphabyte.ai/logo.png",
  "description":
    "Alphabyte is an AI and data consultancy. We work with companies that have real data problems and want production systems, not prototypes.",
  "sameAs": [
    // Fill in actual profile URLs when available
    "https://www.linkedin.com/company/alphabyte",
    "https://github.com/alphabyte",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "hello@alphabyte.ai", // update with actual address
    "availableLanguage": ["English"],
  },
};
```

**Fields to customize before shipping:**

- `legalName` — if the trading name differs from the legal entity
- `sameAs` — only include profiles that actually exist and are maintained. Don't pad with aspirational links.
- `contactPoint.email` — use a real, monitored address
- `address` — if Alphabyte has a registered office, add a `PostalAddress` object (see schema.org/Organization)

## ProfessionalService — the whole business

Use `ProfessionalService` (a subtype of `Organization` and `LocalBusiness`) on the homepage to describe what Alphabyte *does* as a service business. Don't duplicate the `Organization` schema — do this instead of, or alongside.

```tsx
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Alphabyte",
  "url": "https://alphabyte.ai",
  "description": "AI and data consulting for companies with real data problems.",
  "serviceType": "AI and Data Consulting",
  "areaServed": {
    "@type": "Country",
    "name": "United States", // adjust to actual service geography
  },
  "priceRange": "$$$", // "$$" or "$$$" are reasonable for boutique consulting
};
```

## Service — per service page

Use on each `/services/*` page. Each service gets its own schema with its own description.

```tsx
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ML Deployment Consulting",
  "provider": {
    "@type": "Organization",
    "name": "Alphabyte",
    "url": "https://alphabyte.ai",
  },
  "serviceType": "ML Deployment Consulting",
  "description":
    "We help engineering teams take ML models from notebook to production. Infrastructure, monitoring, rollout strategy — handed off fully documented.",
  "areaServed": {
    "@type": "Country",
    "name": "United States",
  },
  "url": "https://alphabyte.ai/services/ml-deployment/",
};
```

If services have tiers or defined offerings, `hasOfferCatalog` can list them, but don't force it — only add if the structure maps cleanly to what's actually on the page.

## FAQPage — for pages with Q&A

If a page has a genuine FAQ section (not marketing copy dressed up as questions), mark it up. Google can surface these as expandable results in SERPs.

```tsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do Alphabyte engagements typically work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We run three-to-six month engagements with a senior team of two to four engineers. You end with a production system, full documentation, and your team trained to run it.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you work with pre-trained models or build custom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Both — but we start with the question of what actually needs to be built. Most teams don't need custom models; they need production-grade infrastructure around off-the-shelf ones.",
      },
    },
  ],
};
```

**Rules:**

- Questions must actually appear on the page in readable form — don't use FAQ schema to hide content.
- Answers should be concise (one short paragraph). Longer answers go on the page; the schema holds a summary.
- Don't mark up questions that are purely sales-y ("Why choose Alphabyte?") — Google downgrades this.

## Article / BlogPosting — for blog content

When/if Alphabyte adds a blog or writing section, each post uses `BlogPosting`.

```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Why Most ML Projects Fail in Production",
  "description": "A short summary, matches the meta description.",
  "image": "https://alphabyte.ai/og/ml-projects-fail.png",
  "datePublished": "2026-05-12T09:00:00-04:00",
  "dateModified": "2026-05-14T14:30:00-04:00",
  "author": {
    "@type": "Person",
    "name": "Author Full Name",
    "url": "https://alphabyte.ai/team/author-slug/",
  },
  "publisher": {
    "@type": "Organization",
    "name": "Alphabyte",
    "logo": {
      "@type": "ImageObject",
      "url": "https://alphabyte.ai/logo.png",
    },
  },
};
```

## BreadcrumbList — for nested pages

Breadcrumbs help search engines and users understand site hierarchy. Add to pages more than one level deep.

```tsx
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://alphabyte.ai/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://alphabyte.ai/services/",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "ML Deployment",
      "item": "https://alphabyte.ai/services/ml-deployment/",
    },
  ],
};
```

The breadcrumbs should also appear visually on the page — don't add the schema without the visible element.

## Validating structured data

Before shipping a page with structured data, validate it:

- **Schema Markup Validator:** <https://validator.schema.org/> — catches syntax errors and invalid property values.
- **Google Rich Results Test:** <https://search.google.com/test/rich-results> — tests whether Google will use it for rich results.

Both accept a URL (after deployment) or pasted HTML. Use both — they catch different issues.

## What NOT to mark up

- **Marketing copy disguised as facts.** Don't wrap sales claims in `Product` or `Offer` schema.
- **Fake reviews or ratings.** Aggregate rating schema requires real, verifiable reviews. Faking this will get the site penalized.
- **Generic pages with no real structure.** Don't add schema to `/about` or `/contact` unless it genuinely describes an entity or process.
- **Duplicate entities.** One `Organization` schema per site, not one per page.
- **Every page.** Structured data is a tool for specific page types, not a universal markup pass.

## AI search specifically

LLM-powered search (Perplexity, ChatGPT search, Google AI Overviews) heavily weights structured data when extracting facts about a business. For Alphabyte, that means:

- The `Organization` / `ProfessionalService` schema on the homepage is *more* important than it used to be — it's what AI search uses to describe what you do.
- `Service` schemas on service pages help AI search route specific queries to the right service.
- `FAQPage` schemas get quoted directly in AI-generated answers.

This is a reason to do structured data well, not a reason to overdo it. Quality over volume.
