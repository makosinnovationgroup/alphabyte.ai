import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Our Work - AI Consulting Case Studies",
  description:
    "Active AI engagements with mid-market organizations across construction, reverse logistics, e-commerce, and community housing. Real deployments, not POCs.",
  alternates: {
    canonical: "/our-work/",
  },
  openGraph: {
    type: "website",
    title: "Our Work - AI Consulting Case Studies",
    description:
      "Active AI engagements with mid-market organizations across construction, reverse logistics, e-commerce, and community housing.",
    url: "/our-work/",
    images: [
      {
        url: "/og/our-work.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Our Work - AI Consulting Case Studies",
      },
    ],
  },
  twitter: {
    title: "Our Work - AI Consulting Case Studies",
    description:
      "Active AI engagements with mid-market organizations across construction, reverse logistics, e-commerce, and community housing.",
    images: ["/og/our-work.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Work - AI Consulting Case Studies",
  description:
    "Active AI engagements with mid-market organizations across construction, reverse logistics, e-commerce, and community housing. Real deployments, not proofs-of-concept.",
  url: "https://alphabyte.ai/our-work/",
  isPartOf: { "@id": "https://alphabyte.ai/#website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabyte.ai/" },
    { "@type": "ListItem", position: 2, name: "Our Work", item: "https://alphabyte.ai/our-work/" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Alphabyte Case Studies",
  url: "https://alphabyte.ai/our-work/",
  numberOfItems: 4,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "DTC E-Commerce Brand: Media Buy Analytics Agent", url: "https://alphabyte.ai/our-work/media-buy-analytics/" },
    { "@type": "ListItem", position: 2, name: "Major Supplier: Executive Productivity Suite", url: "https://alphabyte.ai/our-work/circular-economy-platform/" },
    { "@type": "ListItem", position: 3, name: "Construction Firm: Compliance Intelligence Agent", url: "https://alphabyte.ai/our-work/construction-compliance-agent/" },
    { "@type": "ListItem", position: 4, name: "Community Housing Organisation: AI Enablement", url: "https://alphabyte.ai/our-work/community-housing-organisation/" },
  ],
};

const caseStudies = [
  {
    headerTags: "DTC E-COMMERCE \u00b7 PAID MEDIA \u00b7 NORTH AMERICA",
    clientName: "DTC E-Commerce Brand",
    projectTitle: "AI-Powered Media Buy Analytics Agent",
    pills: ["Custom MCP Server", "Power BI", "Microsoft Fabric"],
    body: "Custom Power BI MCP server connecting Claude to Microsoft Fabric semantic models. Media buyers ask plain-English questions and get auditable, DAX-grounded answers in seconds.",
    href: "/our-work/media-buy-analytics/",
  },
  {
    headerTags: "REVERSE LOGISTICS \u00b7 ELECTRONICS \u00b7 GLOBAL",
    clientName: "Major Supplier",
    projectTitle:
      "AI-Powered Executive Productivity Suite",
    pills: ["Executive Enablement", "Claude Cowork", "Multi-System Integration"],
    body: "Custom Claude plugin giving leadership a single command surface across GSuite, Slack, Power BI, Fireflies, and more. Purpose-built agents delivering automated morning briefs, spend reports, and post-call summaries.",
    href: "/our-work/circular-economy-platform/",
  },
  {
    headerTags: "CONSTRUCTION \u00b7 MULTI-ENTITY \u00b7 NORTH AMERICA",
    clientName: "Construction Firm",
    projectTitle: "AI-Powered Compliance Intelligence Agent",
    pills: ["Custom MCP Server", "Knowledge Graph", "Claude Cowork"],
    body: "Custom AI compliance agent that navigates the firm's full regulatory code library with citation-grade accuracy. Knowledge graph architecture integrated into a custom MCP server with org-wide Claude Desktop access.",
    href: "/our-work/construction-compliance-agent/",
  },
  {
    headerTags:
      "PUBLIC SECTOR \u00b7 COMMUNITY HOUSING \u00b7 CANADA",
    clientName: "Community Housing Organisation",
    projectTitle: "AI Enablement: Foundation for an Intelligent Organisation",
    pills: ["Discovery", "Data Readiness", "AI Enablement"],
    body: "End-to-end Data and AI readiness assessment with a seven-recommendation roadmap. Data governance, workflow documentation, and a shared analytical foundation leading to five purpose-built Claude agents.",
    href: "/our-work/community-housing-organisation/",
  },
];

export default function OurWorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([webPageSchema, breadcrumbSchema, itemListSchema]) }}
      />

      {/* Hero */}
      <section className="border-b border-border-default px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
            Our Work
          </p>
          <h1 className="mt-3 max-w-3xl text-display tracking-brand-tight">
            The most credible proof is the work{"\n"}we are{" "}
            <span className="text-alphabyte-blue">shipping today.</span>
          </h1>
          <p className="mt-4 text-body text-foreground max-w-[60ch]">
            The following engagements are in active delivery. References can be
            arranged on request, subject to client approval.
          </p>
        </div>
      </section>

      {/* Case study cards */}
      <section className="bg-canvas px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.clientName}
                href={study.href}
                className="flex flex-col overflow-hidden rounded-lg border border-border-default bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-alphabyte-blue"
              >
                {/* Dark header band */}
                <span className="block bg-foreground px-6 pb-6 pt-8">
                  <span className="block text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-green">
                    {study.headerTags}
                  </span>
                  <span className="block mt-3 text-lg font-bold text-white">
                    {study.clientName}
                  </span>
                </span>

                {/* Card body */}
                <span className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <span className="block text-body font-bold text-foreground">
                    {study.projectTitle}
                  </span>

                  {/* Service pills */}
                  <span className="mt-4 flex flex-wrap gap-2">
                    {study.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-border-default px-3 py-1 text-body-sm text-muted-foreground"
                      >
                        {pill}
                      </span>
                    ))}
                  </span>

                  <span className="block mt-4 flex-1 text-body-sm text-foreground">
                    {study.body}
                  </span>

                  <span className="block mt-6 text-body-sm font-medium text-alphabyte-blue">
                    Read case study &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1600px] text-center">
          <h2 className="text-headline tracking-brand-snug text-foreground">
            Want to talk through what we could build for you?
          </h2>
          <p className="mt-3 text-body text-muted-foreground">
            45 minutes. No cost. No obligation.
          </p>
          <div className="mt-8">
            <DiscoveryCallButton variant="dark" size="md">
              Book a Discovery Call
            </DiscoveryCallButton>
          </div>
        </div>
      </section>
    </main>
  );
}
