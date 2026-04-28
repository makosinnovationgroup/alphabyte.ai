import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — AI Deployments for Canadian Mid-Market",
  description:
    "Real AI engagements with Canadian mid-market organizations. Sprinklermatic, RecirQ, Housing Services Corp. Not mockups. Not proofs-of-concept.",
  alternates: {
    canonical: "/our-work/",
  },
  openGraph: {
    title: "Case Studies — AI Deployments for Canadian Mid-Market",
    description:
      "Real AI engagements with Canadian mid-market organizations. Sprinklermatic, RecirQ, Housing Services Corp.",
    url: "/our-work/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Case Studies: AI Deployments for Canadian Mid-Market",
      },
    ],
  },
  twitter: {
    title: "Case Studies — AI Deployments for Canadian Mid-Market",
    description:
      "Real AI engagements with Canadian mid-market organizations. Sprinklermatic, RecirQ, Housing Services Corp.",
    images: ["/og/default.png"],
  },
};

const caseStudies = [
  {
    tag: "Fire Protection",
    title: "Sprinklermatic",
    description:
      "Nine-initiative AI Command System. Custom MCP server with OAuth 2.0. NFPA compliance intelligence agent live in production.",
    href: "/our-work/sprinklermatic/",
  },
  {
    tag: "Commerce Intelligence",
    title: "RecirQ",
    description:
      "WhatsApp Sales Command Center with Claude-powered semantic analysis. Full Claude ops environment connected via MCP.",
    href: "/our-work/recirq/",
  },
  {
    tag: "Public Sector \u00b7 Housing",
    title: "Housing Services Corp.",
    description:
      "AI enablement roadmap and data strategy. Claude-based agent recommendations for cross-program reporting and anomaly detection.",
    href: "/our-work/housing-services-corp/",
  },
];

export default function OurWorkPage() {
  return (
    <main>
      <section className="bg-canvas px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
              Case Studies
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-6">
              Work that ships.
            </h1>
            <p className="text-body text-foreground max-w-[60ch]">
              Real engagements with Canadian mid-market organizations. Not
              mockups. Not proofs-of-concept.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="rounded-lg border border-border-default bg-white p-6 md:p-8 transition-shadow duration-200 motion-safe:hover:shadow-md"
              >
                <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-4">
                  {study.tag}
                </p>
                <h2 className="text-body font-bold mb-3">{study.title}</h2>
                <p className="text-body-sm text-muted-foreground mb-6">
                  {study.description}
                </p>
                <Link
                  href={study.href}
                  className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
                >
                  Read more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
