import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Our Work — AI Consulting Case Studies",
  description:
    "Active AI engagements with mid-market organizations. Sprinklermatic, RecirQ, Housing Services Corp. Real deployments, not proofs-of-concept.",
  alternates: {
    canonical: "/our-work/",
  },
  openGraph: {
    title: "Our Work — AI Consulting Case Studies",
    description:
      "Active AI engagements with mid-market organizations. Sprinklermatic, RecirQ, Housing Services Corp.",
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
      "Active AI engagements with mid-market organizations. Sprinklermatic, RecirQ, Housing Services Corp.",
    images: ["/og/default.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Work — AI Consulting Case Studies",
  description:
    "Active AI engagements with mid-market organizations. Sprinklermatic, RecirQ, Housing Services Corp. Real deployments, not proofs-of-concept.",
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
    clientName: "Sprinklermatic / EJ Capital",
    projectTitle: "AI-Powered Compliance Intelligence Agent",
    pills: ["Citizen Development", "Infrastructure", "Custom AI Agents"],
    body: "Purpose-built AI agent that navigates the full NFPA fire codes library with citation-grade accuracy \u2014 eliminating 40+ hours per week of manual code lookup across Sprinklermatic\u2019s technical teams.",
    href: "/our-work/sprinklermatic/",
  },
  {
    headerTags: "CIRCULAR ECONOMY \u00b7 USED SMARTPHONES \u00b7 GLOBAL",
    clientName: "RecirQ / Reventory",
    projectTitle:
      "AI-Powered Executive Productivity & Auction Analytics",
    pills: ["Citizen Development", "Executive Enablement", "Data Readiness"],
    body: "Executive productivity suite with automated daily intelligence and a full AI-driven auction analytics platform \u2014 including a market supply index and predictive bid decisioning engine.",
    href: "/our-work/recirq/",
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
              <div
                key={study.clientName}
                className="flex flex-col overflow-hidden rounded-lg border border-border-default bg-white transition-shadow duration-200 motion-safe:hover:shadow-md"
              >
                {/* Dark header band */}
                <div className="bg-foreground px-6 pb-6 pt-8">
                  <p className="text-[11px] font-bold uppercase tracking-brand-wide text-alphabyte-green">
                    {study.headerTags}
                  </p>
                  <h2 className="mt-3 text-lg font-bold text-white">
                    {study.clientName}
                  </h2>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <p className="text-body font-bold text-foreground">
                    {study.projectTitle}
                  </p>

                  {/* Service pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-border-default px-3 py-1 text-body-sm text-muted-foreground"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 flex-1 text-body-sm text-foreground">
                    {study.body}
                  </p>

                  <Link
                    href={study.href}
                    className="mt-6 text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
                  >
                    Read case study &rarr;
                  </Link>
                </div>
              </div>
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
