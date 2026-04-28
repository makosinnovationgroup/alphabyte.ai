import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Sprinklermatic — AI Command System for Fire Protection",
  description:
    "Nine-initiative AI Command System. Custom MCP server, NFPA compliance agent, human-in-the-loop gates. A Canadian fire protection AI deployment.",
  alternates: {
    canonical: "/our-work/sprinklermatic/",
  },
  openGraph: {
    title: "Sprinklermatic — AI Command System for Fire Protection",
    description:
      "Nine-initiative AI Command System. Custom MCP server, NFPA compliance agent, human-in-the-loop gates.",
    url: "/our-work/sprinklermatic/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Sprinklermatic: AI Command System for Fire Protection",
      },
    ],
  },
  twitter: {
    title: "Sprinklermatic — AI Command System for Fire Protection",
    description:
      "Nine-initiative AI Command System. Custom MCP server, NFPA compliance agent, human-in-the-loop gates.",
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
      name: "Sprinklermatic",
      item: "https://alphabyte.ai/our-work/sprinklermatic/",
    },
  ],
};

export default function SprinklermaticPage() {
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
          <li className="text-foreground">Sprinklermatic</li>
        </ol>
      </nav>

      <section className="bg-canvas px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-6">
              Case Studies &middot; Sprinklermatic
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-4">
              Sprinklermatic
            </h1>
            <p className="text-headline tracking-brand-snug text-muted-foreground mb-6">
              Nine-initiative AI Command System for a Canadian fire protection
              firm.
            </p>
            <p className="text-body text-foreground max-w-[55ch] mb-10">
              Custom MCP server with OAuth 2.0, Claude Desktop plugin with
              chained skills, human-in-the-loop approval gates, and an NFPA
              compliance intelligence agent live in production.
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
              built the Sprinklermatic AI Command System, book a Discovery Call
              or get in touch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
