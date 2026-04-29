import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ActiveDelivery } from "@/components/home/trusted-by";
import { IsThisYou } from "@/components/home/is-this-you";
import { TrackTabs, type Track } from "@/components/track-tabs";
import { ProofPoints } from "@/components/home/proof-points";
import { ClosingCta } from "@/components/home/closing-cta";

const homeTracks: Track[] = [
  {
    label: "Citizen Dev \u2605",
    question: "How do our people use AI?",
    heading: "Citizen Dev \u2605",
    body: "Governed Claude environment, SDLC tooling, and guardrails \u2014 deployed against the workflows your team already owns. From informal usage to a managed, compounding capability. Most clients have something running in week three.",
    rightForYou:
      "Your team is using Claude informally, or you want every employee operating as an AI developer.",
    cta: { label: "Get started \u2192", href: "/services/citizen-development/" },
    pills: [
      "Custom SDLC plugin",
      "Knowledgebases & skills",
      "Guardrails framework",
      "Governed data via MCP",
    ],
    timeline: "3 to 12 weeks",
  },
  {
    label: "Executive Enablement",
    question: "How do our people use AI?",
    heading: "Executive Enablement",
    body: "A custom Claude environment built from your actual operational data \u2014 knowledgebases, skills, prompt toolkit. Most executives see measurable time savings in the first sprint. The internal proof point that makes the broader programme easy to resource.",
    rightForYou:
      "Leadership wants a concrete AI win before a board meeting or a broader rollout.",
    cta: { label: "Get started \u2192", href: "/services/executive-enablement/" },
    pills: [
      "Custom knowledgebases",
      "Custom skills library",
      "Prompt toolkit",
      "Claude Teams configuration",
      "Knowledge transfer session",
    ],
    timeline: "2 to 4 weeks",
  },
  {
    label: "Discovery",
    question: "What should our AI strategy be?",
    heading: "Discovery",
    body: "Four weeks, not six months. We come in with a point of view, not a blank whiteboard. Stakeholder workshops, use case prioritization, gap analysis, and a roadmap you leave with.",
    rightForYou:
      "You have not made a meaningful AI investment yet and want to know where to start without wasting the next six months.",
    cta: { label: "Get started \u2192", href: "/services/discovery/" },
    pills: [
      "Stakeholder sessions",
      "Use case development \u00d73",
      "Gap analysis",
      "Findings & roadmap",
    ],
    timeline: "3 to 5 weeks",
  },
  {
    label: "Data Readiness",
    question: "Is our data ready for AI?",
    heading: "Data Readiness",
    body: "Most AI projects fail because nobody validated the data underneath before the build started. Data quality audit, governance assessment, AI readiness scorecard, and a remediation pathway.",
    rightForYou:
      "You are in a regulated industry and data compliance is a hard prerequisite to any AI deployment.",
    cta: { label: "Get started \u2192", href: "/services/data-readiness/" },
    pills: [
      "Data quality audit",
      "Governance assessment",
      "AI readiness scorecard",
      "Remediation pathway",
    ],
    timeline: "4 to 8 weeks",
  },
  {
    label: "Infrastructure",
    question: "How do our systems use AI?",
    heading: "Infrastructure",
    body: "Where Claude stops being a productivity tool and starts being an operational capability connected to your systems. Custom MCP servers, autonomous agents, on-premise LLMs, fine-tuned models.",
    rightForYou:
      "Your team is enabled and data is validated \u2014 ready to connect AI to live operational systems.",
    cta: { label: "Get started \u2192", href: "/services/infrastructure/" },
    pills: [
      "Custom MCP servers",
      "Custom AI agents",
      "Agent Command Centre",
      "On-premise LLM",
      "Fine-tuned LLMs",
    ],
    timeline: "4 to 36 weeks",
  },
];

export const metadata: Metadata = {
  title: "AI Consulting for Mid-Market Organizations",
  description:
    "Alphabyte AI designs and delivers working AI for mid-market organizations. Four tracks. Real deployments. No junior bench.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Consulting for Mid-Market Organizations",
    description:
      "Alphabyte AI designs and delivers working AI for mid-market organizations.",
    url: "/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 AI Consulting for Mid-Market Organizations",
      },
    ],
  },
  twitter: {
    title: "AI Consulting for Mid-Market Organizations",
    description:
      "Alphabyte AI designs and delivers working AI for mid-market organizations.",
    images: ["/og/default.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Consulting for Mid-Market Organizations",
  description:
    "Alphabyte AI designs and delivers working AI for mid-market organizations. Four tracks. Real deployments. No junior bench.",
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
    "AI and data consulting for mid-market organizations.",
  serviceType: "AI and Data Consulting",
  areaServed: {
    "@type": "Place",
    name: "North America",
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
      <ActiveDelivery />
      <IsThisYou />
      <TrackTabs tracks={homeTracks} />
      <ProofPoints />
      <ClosingCta />
    </main>
  );
}
