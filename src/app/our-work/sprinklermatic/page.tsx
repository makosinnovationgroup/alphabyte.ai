import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Sprinklermatic — Compliance Intelligence Agent",
  description:
    "How Alphabyte built a compliance intelligence agent for Sprinklermatic — 40+ hours per week eliminated in manual NFPA code lookup, citation-grade accuracy, live in production.",
  alternates: {
    canonical: "/our-work/sprinklermatic/",
  },
  openGraph: {
    title: "Sprinklermatic — Compliance Intelligence Agent",
    description:
      "40+ hours per week eliminated in manual NFPA code lookup. Citation-grade accuracy. Live in production.",
    url: "/our-work/sprinklermatic/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Sprinklermatic: Compliance Intelligence Agent",
      },
    ],
  },
  twitter: {
    title: "Sprinklermatic — Compliance Intelligence Agent",
    description:
      "40+ hours per week eliminated in manual NFPA code lookup. Citation-grade accuracy. Live in production.",
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
    {
      "@type": "ListItem",
      position: 4,
      name: "EJ Capital",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "Sprinklermatic is a fire protection company operating across multiple entities, specialising in the design, installation, and servicing of fire suppression systems. The company works against one of the most demanding compliance environments in any industry: the National Fire Protection Association (NFPA) fire code library.",
  },
  {
    type: "paragraph",
    text: "With a growing portfolio of projects and a technical team that depends on precise, code-level guidance daily, Sprinklermatic engaged Alphabyte to explore how AI could solve a compliance knowledge problem that no off-the-shelf tool had addressed.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "Fire protection work is code-driven at every level. Every system design, installation decision, and inspection outcome traces back to specific passages within the NFPA code library \u2014 dozens of large PDF documents totaling hundreds of pages of dense regulatory content.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "Technical staff had to manually search through large, cross-referenced PDFs to locate the exact passage applicable to each project scenario. The volume and complexity made consistent, accurate lookups time-consuming and prone to human error. General-purpose AI tools could not solve this \u2014 context window limitations produce incomplete or unreliable outputs at this document scale.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "For a company where a missed or incorrect code reference carries real safety and liability consequences, an answer that is approximately right is not acceptable.",
  },
  { type: "heading", text: "Building the Knowledge Foundation" },
  {
    type: "paragraph",
    text: "The core technical challenge was designing a system that routes an AI agent to the exact page of the exact document required to answer any compliance query. Alphabyte built a custom processing pipeline that ingested Sprinklermatic\u2019s full NFPA code library and transformed it into a structured knowledge graph.",
  },
  {
    type: "paragraph",
    text: "The knowledge graph maps every code standard, chapter, section, and cross-reference in the library. It generates a master manifest that serves as a navigation index: when a compliance question is submitted, the agent consults the manifest, identifies the applicable code family, routes to the correct chapters, and retrieves the specific page required. The agent follows a structured, documented path to every answer and does not generate responses from memory.",
  },
  {
    type: "paragraph",
    text: "This architecture was necessary given the nature of the source material. Without a routing and indexing mechanism, a language model will either hallucinate or fail to surface the correct passage. In fire code compliance, neither outcome is operationally acceptable.",
  },
  { type: "heading", text: "The Compliance Intelligence Agent" },
  {
    type: "paragraph",
    text: "With the knowledge foundation in place, Alphabyte built the agent layer as part of a Claude Cworks project. A team member describes a project scenario \u2014 building type, system configuration, or specific installation condition \u2014 and the agent returns the applicable code standard, the relevant passage, and the source page it was retrieved from. Every response is grounded in the actual document, not inferred.",
  },
  {
    type: "paragraph",
    text: "The agent is modular by design. Code editions are updated on a cycle and jurisdictional requirements vary by project. New or updated code sets can be processed through the same pipeline and incorporated into the knowledge graph without rebuilding the system architecture.",
  },
  { type: "heading", text: "A Platform Built for Expansion" },
  {
    type: "paragraph",
    text: "The compliance agent is one component of a broader nine-initiative AI programme currently being developed for Sprinklermatic\u2019s operations. The agent sits within an orchestration layer that routes queries across multiple specialized agents as the programme scales. Compliance Intelligence is one domain. Estimating, operations management, and executive productivity are others in active development.",
  },
  {
    type: "paragraph",
    text: "A proprietary AI-powered fire protection estimating and design tool is under active development, with commercialization planned for 2026 and into 2027.",
  },
];

export default function SprinklermaticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <CaseStudyPage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work/" },
          { label: "Sprinklermatic / EJ Capital" },
        ]}
        eyebrow="CASE STUDY · FIRE PROTECTION · PE-BACKED · NORTH AMERICA"
        h1="AI-Powered Compliance Intelligence Agent"
        subhead="Sprinklermatic / EJ Capital"
        tagPills={[
          "Claude AI Agent",
          "Custom MCP Server",
          "NFPA Compliance",
          "Knowledge Graph",
          "Human-in-the-Loop",
        ]}
        stats={[
          {
            value: "40+ hrs",
            label: "Per week eliminated in manual NFPA code lookup",
          },
          {
            value: "9",
            label:
              "Parallel AI initiatives across the Sprinklermatic programme",
          },
          {
            value: "Citation-grade",
            label:
              "Accuracy \u2014 every answer grounded in the actual document",
          },
          {
            value: "Live",
            label: "NFPA compliance agent in active production use",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "Sprinklermatic / EJ Capital",
            meta: "Fire protection · PE-Backed · North America",
          },
          servicesDelivered: [
            "AI Solutions Discovery",
            "Custom MCP Server Development",
            "Knowledge Graph Architecture",
            "Claude Agent Development",
            "Human-in-the-Loop Governance",
            "Agent Command Centre",
          ],
          technology: [
            "Claude (Anthropic)",
            "Claude Cworks",
            "Custom MCP Server",
            "Airtop Connector",
            "Knowledge Graph + Manifest Index",
          ],
          pullQuote:
            "Every response is grounded in the actual document, not inferred. The agent follows a structured, documented path to every answer.",
        }}
        closingCta={{
          heading:
            "Want to explore what we could build for your compliance environment?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
      />
    </>
  );
}
