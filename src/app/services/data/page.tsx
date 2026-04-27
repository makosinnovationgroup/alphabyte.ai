import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Data Readiness \u2014 AI Data Quality & Governance",
  description:
    "Data quality audits, governance assessments, and AI readiness scorecards. Make sure your data foundation supports the AI you want to build.",
  alternates: {
    canonical: "/services/data/",
  },
  openGraph: {
    title: "Data Readiness \u2014 AI Data Quality & Governance",
    description:
      "Data quality audits, governance assessments, and AI readiness scorecards for mid-market organizations.",
    url: "/services/data/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 Data Readiness: AI Data Quality & Governance",
      },
    ],
  },
  twitter: {
    title: "Data Readiness \u2014 AI Data Quality & Governance",
    description:
      "Data quality audits, governance assessments, and AI readiness scorecards for mid-market organizations.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Readiness",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Data Quality & Governance Consulting",
  description:
    "Data quality audits, governance assessments, and AI readiness scorecards. Make sure your data foundation supports the AI you want to build.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/services/data/",
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
      name: "Data Readiness",
      item: "https://alphabyte.ai/services/data/",
    },
  ],
};

export default function DataReadinessPage() {
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
          <li className="text-foreground">Data Readiness</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Track 02 &middot; Data Readiness
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Data Readiness
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              Is our data ready for AI?
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              Data quality audit, governance assessment, AI readiness scorecard,
              and a remediation pathway. AI projects fail more often because of
              data than because of models &mdash; this track makes that risk
              visible before you spend on infrastructure.
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
              The full Data Readiness page is in development. It will cover the
              audit process, governance assessment framework, and how the AI
              readiness scorecard works. To talk through whether this track fits
              your situation, book a Strategy Sprint or get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
