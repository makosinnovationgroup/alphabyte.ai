import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Discovery \u2014 AI Strategy & Roadmap Consulting",
  description:
    "Discovery is a focused 3-5 week engagement that produces a clear AI strategy and roadmap. No vague recommendations.",
  alternates: {
    canonical: "/services/discovery/",
  },
  openGraph: {
    title: "Discovery \u2014 AI Strategy & Roadmap Consulting",
    description:
      "A focused 3-5 week engagement that produces a clear AI strategy and roadmap.",
    url: "/services/discovery/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 Discovery: AI Strategy & Roadmap Consulting",
      },
    ],
  },
  twitter: {
    title: "Discovery \u2014 AI Strategy & Roadmap Consulting",
    description:
      "A focused 3-5 week engagement that produces a clear AI strategy and roadmap.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Discovery",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Strategy Consulting",
  description:
    "Discovery is a focused 3-5 week engagement that produces a clear AI strategy and roadmap. No vague recommendations.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/services/discovery/",
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
      name: "Discovery",
      item: "https://alphabyte.ai/services/discovery/",
    },
  ],
};

export default function DiscoveryPage() {
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
          <li className="text-foreground">Discovery</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Track 01 &middot; Discovery
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Discovery
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              What should our AI strategy be?
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              Stakeholder workshops, use case identification, feasibility
              analysis, and an AI roadmap. A focused, time-boxed engagement that
              produces a clear path forward &mdash; not a pile of
              recommendations.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <DiscoveryCallButton variant="dark" size="lg">
                Book a Discovery Call
              </DiscoveryCallButton>
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
              The full Discovery page is in development. It will cover the
              Strategy Sprint format, what the workshops look like, and how the
              roadmap deliverable works. To talk through whether Discovery fits
              your situation, book a Discovery Call or get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
