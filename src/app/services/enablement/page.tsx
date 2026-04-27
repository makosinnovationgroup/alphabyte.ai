import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Enablement \u2014 Executive AI & Citizen Dev Programs",
  description:
    "Custom Claude environments for leadership and citizen developer enablement for teams. The fastest path to visible AI ROI.",
  alternates: {
    canonical: "/services/enablement/",
  },
  openGraph: {
    title: "Enablement \u2014 Executive AI & Citizen Dev Programs",
    description:
      "Custom Claude environments for leadership and citizen developer enablement for teams.",
    url: "/services/enablement/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 Enablement: Executive AI & Citizen Dev Programs",
      },
    ],
  },
  twitter: {
    title: "Enablement \u2014 Executive AI & Citizen Dev Programs",
    description:
      "Custom Claude environments for leadership and citizen developer enablement for teams.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enablement",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Enablement Consulting",
  description:
    "Custom Claude environments for leadership and citizen developer enablement for teams. The fastest path to visible AI ROI.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/services/enablement/",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://alphabyte.ai/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://alphabyte.ai/services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Enablement",
      item: "https://alphabyte.ai/services/enablement/",
    },
  ],
};

export default function EnablementPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />

      <nav aria-label="Breadcrumb" className="bg-canvas px-6 pt-8">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 text-body-sm text-muted-foreground">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-alphabyte-blue"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/services/"
              className="transition-colors hover:text-alphabyte-blue"
            >
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Enablement</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Track 03 &middot; Enablement
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Enablement
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              How do our people use AI?
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              Two paths: an Executive Productivity Suite for leadership, and
              Citizen Dev Enablement for teams. The fastest path to visible ROI
              in most engagements.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button variant="dark" size="lg" asChild>
                <Link href="/services/discovery/">
                  Book a Strategy Sprint
                </Link>
              </Button>
              <Link
                href="/services/"
                className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                &larr; Back to all services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas px-6 py-16 md:py-24 border-t border-border-default">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-4">
              Coming Soon
            </p>
            <p className="text-body text-muted-foreground max-w-[55ch]">
              The full Enablement page is in development. It will cover the
              Executive Productivity Suite, Team Citizen Dev Enablement tiers,
              and what deployment looks like in practice. To talk through
              whether this track fits your situation, book a Strategy Sprint or
              get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
