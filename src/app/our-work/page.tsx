import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Our Work — AI Consulting Case Studies",
  description:
    "Active AI engagements with mid-market organizations across fire protection, circular economy, and public sector housing. Real deployments, not proofs-of-concept.",
  alternates: {
    canonical: "/our-work/",
  },
  openGraph: {
    title: "Our Work — AI Consulting Case Studies",
    description:
      "Active AI engagements with mid-market organizations across fire protection, circular economy, and public sector housing.",
    url: "/our-work/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Our Work: AI Consulting Case Studies",
      },
    ],
  },
  twitter: {
    title: "Our Work — AI Consulting Case Studies",
    description:
      "Active AI engagements with mid-market organizations across fire protection, circular economy, and public sector housing.",
    images: ["/og/default.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Work — AI Consulting Case Studies",
  description:
    "Active AI engagements with mid-market organizations across fire protection, circular economy, and public sector housing. Real deployments, not proofs-of-concept.",
  url: "https://alphabyte.ai/our-work/",
  isPartOf: {
    "@type": "WebSite",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
};

const caseStudies = [
  {
    headerTags: "FIRE PROTECTION \u00b7 PE-BACKED \u00b7 NORTH AMERICA",
    clientName: "Fire Protection Contractor",
    projectTitle: "AI-Powered Compliance Intelligence Agent",
    pills: ["Citizen Development", "Infrastructure", "Custom AI Agents"],
    body: "Purpose-built AI agent that navigates the full NFPA fire codes library with citation-grade accuracy \u2014 eliminating 40+ hours per week of manual code lookup across the client\u2019s technical teams.",
    href: "/our-work/fire-protection-compliance/",
  },
  {
    headerTags: "CIRCULAR ECONOMY \u00b7 USED SMARTPHONES \u00b7 GLOBAL",
    clientName: "Circular Economy Startup",
    projectTitle:
      "AI-Powered Executive Productivity & Auction Analytics",
    pills: ["Citizen Development", "Executive Enablement", "Data Readiness"],
    body: "Executive productivity suite with automated daily intelligence and a full AI-driven auction analytics platform \u2014 including a market supply index and predictive bid decisioning engine.",
    href: "/our-work/circular-economy-platform/",
  },
  {
    headerTags:
      "PUBLIC SECTOR \u00b7 HOUSING \u00b7 NATIONAL \u00b7 CANADA",
    clientName: "Housing Services Corp.",
    projectTitle: "AI Enablement Roadmap",
    pills: ["Discovery", "Data Readiness"],
    body: "Full current state assessment and AI enablement roadmap for a national housing organization \u2014 six strategic recommendations delivered within federal data governance requirements.",
    href: "/our-work/housing-services-corp/",
  },
];

export default function OurWorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
