import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Housing Services Corp. — AI Enablement Roadmap",
  description:
    "AI enablement roadmap and data strategy for a national housing services organization. Claude-based agent recommendations for reporting and anomaly detection.",
  alternates: {
    canonical: "/our-work/housing-services-corp/",
  },
  openGraph: {
    title: "Housing Services Corp. — AI Enablement Roadmap",
    description:
      "AI enablement roadmap and data strategy for a national housing services organization.",
    url: "/our-work/housing-services-corp/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Housing Services Corp.: AI Enablement Roadmap",
      },
    ],
  },
  twitter: {
    title: "Housing Services Corp. — AI Enablement Roadmap",
    description:
      "AI enablement roadmap and data strategy for a national housing services organization.",
    images: ["/og/default.png"],
  },
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
      name: "Our Work",
      item: "https://alphabyte.ai/our-work/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Housing Services Corp.",
      item: "https://alphabyte.ai/our-work/housing-services-corp/",
    },
  ],
};

export default function HousingServicesCorpPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
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
              href="/our-work/"
              className="transition-colors hover:text-alphabyte-blue"
            >
              Our Work
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-foreground">Housing Services Corp.</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Case Studies &middot; Housing Services Corp.
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Housing Services Corp.
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              AI enablement roadmap for a Canadian housing services
              organization.
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              Data strategy and AI enablement roadmap delivered. Recommendations
              for Claude-based agents covering cross-program reporting, anomaly
              detection, and workflow automation.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <DiscoveryCallButton variant="dark" size="lg">
                Book a Discovery Call
              </DiscoveryCallButton>
              <Link
                href="/our-work/"
                className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                &larr; Back to all work
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
              The full case study is in development. To talk through how we
              built the HSC roadmap, book a Discovery Call or get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
