import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Discovery — AI Strategy & Roadmap Consulting",
  description:
    "A four-week engagement that produces three prioritized use cases, a gap analysis, and a Findings & Recommendations document you can act on immediately.",
  alternates: {
    canonical: "/services/discovery/",
  },
  openGraph: {
    title: "Discovery — AI Strategy & Roadmap Consulting",
    description:
      "Four weeks from kickoff to a clear AI strategy. Three use cases, gap analysis, and a plan you can execute immediately.",
    url: "/services/discovery/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Discovery: AI Strategy & Roadmap Consulting",
      },
    ],
  },
  twitter: {
    title: "Discovery — AI Strategy & Roadmap Consulting",
    description:
      "Four weeks from kickoff to a clear AI strategy. Three use cases, gap analysis, and a plan you can execute immediately.",
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
    "A four-week engagement that produces three prioritized use cases, a gap analysis, and a Findings & Recommendations document you can act on immediately.",
  areaServed: {
    "@type": "Place",
    name: "North America",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
        }}
      />

      <ServicePage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Discovery" },
        ]}
        eyebrow="Services · Discovery"
        h1="Discovery"
        subhead="What should our AI strategy be?"
        body={[
          "You have probably already been through this. The workshops. The use case prioritization exercise. The roadmap document that took eight weeks to produce and was obsolete before anyone acted on it.",
          "We are not that. Discovery at Alphabyte is four weeks, not six months. We come in with a point of view, not a blank whiteboard. We find out what your team is already building, identify the three workflows worth automating right now, and hand you an architecture and a plan you can execute immediately.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all services", href: "/services/" }}
        stats={[
          {
            value: "4 weeks",
            label:
              "From kickoff to Findings & Recommendations document",
          },
          {
            value: "3",
            label:
              "Prioritized use cases with preliminary architectures",
          },
          {
            value: "No decks",
            label:
              "A plan you can execute immediately",
          },
        ]}
        thirtyDays={{
          weeks: [
            {
              label: "Week 1",
              body: "Stakeholder and technical sessions \u2014 we talk to the people doing the actual work and find out what is genuinely painful, genuinely automatable, and what has already been built informally.",
            },
            {
              label: "Week 2",
              body: "Use case development \u2014 three defined use cases, each with a feasibility assessment, a preliminary architecture, and a concrete statement of what it will produce for your business.",
            },
            {
              label: "Week 3",
              body: "Gap analysis \u2014 what is in your environment, what is missing, what must be fixed before any build starts. No surprises six months in.",
            },
          ],
          dayThirty: {
            label: "Day 30 \u2014 what you have",
            body: "A Findings and Recommendations document. Three use cases with architectures. A prioritized gap list. A staging pathway. Everything you need to go into a budget conversation.",
          },
        }}
        deliverables={[
          {
            icon: "\ud83d\udde3\ufe0f",
            title: "Stakeholder sessions that surface real problems",
            body: "We talk to the people doing the actual work \u2014 operations, finance, sales, product. We are finding the workflows that are genuinely painful and the people who have already started solving them.",
          },
          {
            icon: "\ud83d\udccc",
            title: "Three use cases worth building",
            body: "Not a list of twenty ideas. Three, each with a feasibility assessment, a preliminary architecture, and a concrete outcome statement. Prioritized by impact and buildability.",
          },
          {
            icon: "\ud83d\udd0d",
            title: "Current state and gap analysis",
            body: "What is in your environment, and what is missing, and what must be fixed before any build starts. Infrastructure, data quality, governance, security posture.",
          },
          {
            icon: "\ud83d\udcdd",
            title: "Findings and Recommendations document",
            body: "Not a slide deck. Exactly what to build, in what order, with what dependencies, against what timeline. You leave with a plan, not a process.",
          },
        ]}
        rightForYou={[
          "You have not made a meaningful AI investment yet and want to know where to start without wasting the next six months",
          "Leadership wants a credible business case before committing budget",
          "You are in a regulated industry or the Canadian public sector and need governance in the roadmap from day one",
        ]}
        notRightForYou={[
          "You already have a clear roadmap and just need someone to execute \u2014 skip to Citizen Dev, Executive Enablement, or Infrastructure",
          "You want a strategic document to satisfy a stakeholder without a real intent to execute \u2014 we scope for execution, not for optics",
        ]}
        timeline="3 to 5 weeks from kickoff"
      />
    </>
  );
}
