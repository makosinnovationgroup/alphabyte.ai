import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Construction Firm - Compliance Intelligence Agent",
  description:
    "How Alphabyte built an AI compliance agent for a multi-entity construction firm. Knowledge graph navigation across regulatory code libraries with citation-grade accuracy.",
  alternates: {
    canonical: "/our-work/fire-protection-compliance/",
  },
  openGraph: {
    title: "Construction Firm - Compliance Intelligence Agent",
    description:
      "AI compliance agent that navigates a full regulatory code library with citation-grade accuracy. Every response is traceable and citable.",
    url: "/our-work/fire-protection-compliance/",
    images: [
      {
        url: "/our-work/fire-protection-compliance-knowledge-graph.webp",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Construction Firm - Compliance Intelligence Agent",
      },
    ],
  },
  twitter: {
    title: "Construction Firm - Compliance Intelligence Agent",
    description:
      "AI compliance agent that navigates a full regulatory code library with citation-grade accuracy. Every response is traceable and citable.",
    images: ["/our-work/fire-protection-compliance-knowledge-graph.webp"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Construction Firm - Compliance Intelligence Agent",
  description:
    "How Alphabyte built a custom AI compliance agent for a multi-entity construction firm, navigating regulatory code libraries with knowledge graph architecture and citation-grade accuracy.",
  url: "https://alphabyte.ai/our-work/fire-protection-compliance/",
  author: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  about: {
    "@type": "Service",
    name: "AI Compliance Intelligence",
    provider: { "@type": "Organization", name: "Alphabyte" },
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
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
      name: "Construction Firm — Compliance Agent",
      item: "https://alphabyte.ai/our-work/fire-protection-compliance/",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "A multi-entity construction firm operating across specialised trades is subject to mandatory national and state building codes across multiple jurisdictions. Project teams depend on precise, code-level guidance daily and had accumulated a large regulatory library spanning dozens of dense code-books with no scalable way to navigate it.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "Every design decision and installation specification traces back to a specific passage in a specific code document. Searching manually across hundreds of pages of cross-referential regulatory content was slow, inconsistent, and error-prone.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "General-purpose AI tools made it worse: fed a large document, they hit context limits and return answers that sound authoritative but cannot be verified. In a compliance environment where a missed reference carries safety and liability consequences, that is not good enough.",
  },
  { type: "heading", text: "Solution" },
  {
    type: "paragraph",
    text: "Alphabyte built a custom AI compliance agent that navigates the firm's full regulatory library with precision. A team member describes a project scenario and the agent returns the applicable standard, the relevant passage, and the exact source page in seconds. Every response is traceable and citable.",
  },
  {
    type: "paragraph",
    text: "At the core is a knowledge graph: a structured map of how every section, chapter, and standard in the library connects. Instead of scanning documents blindly, the agent follows a documented path to the exact page it needs. When code editions are updated, new documents are processed through the same pipeline and added without rebuilding the architecture.",
  },
  { type: "heading", text: "MCP Integration and Org-Wide Access", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "The final solution integrated the raw compliance corpus and navigation knowledge graph into a custom MCP server for the organisation. Integrated into Claude Desktop, it enabled org-wide access so all departments have direct compliance context within their existing workflows.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "The MCP server also powers custom AI agentic workflows for automated compliance review of project blueprints and architecture plans.",
  },
  { type: "heading", text: "Built for Any Regulatory Domain" },
  {
    type: "paragraph",
    text: "Built on Claude and Claude Cowork, the agent is modular by design and applies to any regulatory domain. AI agents like this one have further use cases in estimating, operations management, and project documentation.",
  },
];

export default function FireProtectionCompliancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([caseStudySchema, breadcrumbSchema]),
        }}
      />
      <CaseStudyPage
        slug="fire-protection-compliance"
        caseLabel="Fire Protection"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work/" },
          { label: "Construction Firm — Compliance Agent" },
        ]}
        eyebrow="CASE STUDY · CONSTRUCTION · MULTI-ENTITY · NORTH AMERICA"
        h1="AI-Powered Compliance Intelligence Agent"
        subhead="Multi-Entity Construction Firm"
        tagPills={[
          "Claude AI Agent",
          "Custom MCP Server",
          "Knowledge Graph",
          "Compliance",
          "Claude Cowork",
        ]}
        stats={[
          {
            value: "Citation-grade",
            label: "Every answer grounded in the actual document and page",
          },
          {
            value: "Org-wide",
            label: "Access via Claude Desktop and custom MCP server",
          },
          {
            value: "Modular",
            label: "Architecture applies to any regulatory domain",
          },
          {
            value: "Live",
            label: "Compliance agent in active production use",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "Construction Firm",
            meta: "Construction · Multi-entity · North America",
          },
          servicesDelivered: [
            "AI Solutions Discovery",
            "Custom MCP Server Development",
            "Knowledge Graph Architecture",
            "Claude Agent Development",
            "Org-Wide Deployment",
          ],
          technology: [
            "Anthropic Claude",
            "Claude Cowork",
            "Custom Knowledge Graph Pipeline",
            "Custom MCP Server",
          ],
          pullQuote:
            "Every response is traceable and citable. The agent follows a documented path to the exact page it needs.",
        }}
        closingCta={{
          heading:
            "Want to explore what we could build for your compliance environment?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
        figure={{
          src: "/our-work/fire-protection-compliance-knowledge-graph.webp",
          alt: "A query being routed through a knowledge graph to a cited page-level response",
          caption: "Figure 1 — Knowledge graph routing a compliance query to the exact source page.",
        }}
      />
    </>
  );
}
