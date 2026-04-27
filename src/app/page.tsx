import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { TrackTabs, type Track } from "@/components/track-tabs";
import { ProofPoints } from "@/components/home/proof-points";
import { ClosingCta } from "@/components/home/closing-cta";

const homeTracks: Track[] = [
  {
    number: "01",
    label: "Discovery",
    question: "What should our AI strategy be?",
    heading: "Discovery",
    body: "Before you invest in AI, you need to know what\u2019s worth investing in. Stakeholder workshops, use case prioritization, and a roadmap you leave with. No vague recommendations. No padded slide decks.",
    rightForYou:
      "No prior AI investment. Leadership is curious but wants to see the case before committing budget.",
    cta: { label: "Get started \u2192", href: "/services/discovery/" },
    pills: [
      "Up to 10 stakeholder workshops",
      "Use case development \u00d73",
      "Feasibility & gap analysis",
      "Findings & roadmap",
    ],
  },
  {
    number: "02",
    label: "Data Readiness",
    question: "Is our data ready for AI?",
    heading: "Data Readiness",
    body: "AI projects fail more often because of data than because of models. Data quality audit, governance assessment, AI readiness scorecard, and a remediation pathway. Protects everything downstream.",
    rightForYou:
      "Data quality is unknown or suspect. Regulated industry with compliance requirements. About to begin agent or integration work.",
    cta: { label: "Get started \u2192", href: "/services/data/" },
    pills: [
      "Data quality audit",
      "Governance assessment",
      "AI readiness scorecard",
      "Remediation pathway",
    ],
  },
  {
    number: "03",
    label: "Enablement \u2605",
    question: "How do our people use AI?",
    heading: "Enablement",
    body: "Custom Claude environment for leadership, plus citizen-dev enablement for teams. Deployed in weeks, not quarters. The fastest path to visible ROI.",
    rightForYou:
      "Leadership wants a fast, visible AI win. Teams already using Claude in scattered or ungoverned ways.",
    cta: { label: "Get started \u2192", href: "/services/enablement/" },
    pills: [
      "Executive Productivity Suite",
      "Team Citizen Dev",
      "Custom skills",
      "Hypercare",
    ],
  },
  {
    number: "04",
    label: "Infrastructure",
    question: "How do our systems use AI?",
    heading: "Infrastructure",
    body: "Custom MCP servers, autonomous agents, on-premise LLMs, fine-tuned models. Where AI stops being a productivity tool and becomes operational infrastructure.",
    rightForYou:
      "Ready to connect AI to live internal systems. Operations that need autonomous workflow handling. Data sovereignty rules out cloud AI.",
    cta: { label: "Get started \u2192", href: "/services/infrastructure/" },
    pills: [
      "Custom MCP servers",
      "AI agents",
      "On-premise LLM",
      "Fine-tuned LLMs",
    ],
  },
];

export const metadata: Metadata = {
  title: "AI Consulting for Canadian Mid-Market Organizations",
  description:
    "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada. Four tracks. Real deployments. No junior bench.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Consulting for Canadian Mid-Market Organizations",
    description:
      "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada.",
    url: "/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 AI Consulting for Canadian Mid-Market Organizations",
      },
    ],
  },
  twitter: {
    title: "AI Consulting for Canadian Mid-Market Organizations",
    description:
      "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada.",
    images: ["/og/default.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Consulting for Canadian Mid-Market Organizations",
  description:
    "Alphabyte AI designs and delivers working AI for mid-market organizations across Canada. Four tracks. Real deployments. No junior bench.",
  url: "https://alphabyte.ai/",
  isPartOf: {
    "@type": "WebSite",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Alphabyte",
  url: "https://alphabyte.ai",
  description:
    "AI and data consulting for mid-market organizations across Canada.",
  serviceType: "AI and Data Consulting",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  priceRange: "$$$",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, professionalServiceSchema]),
        }}
      />
      <Hero />
      <TrustedBy />
      <TrackTabs tracks={homeTracks} />
      <ProofPoints />
      <ClosingCta />
    </main>
  );
}
