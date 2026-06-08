import type { Metadata } from "next";
import { Wrench, Lock, Cloud, ClipboardList } from "lucide-react";
import { ToolPage } from "@/components/tool-page";

export const metadata: Metadata = {
  title: "MCP Servers - Model Context Protocol Integration",
  description:
    "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured. You own the connection, we build the server.",
  alternates: {
    canonical: "/tools/mcp/",
  },
  openGraph: {
    type: "website",
    title: "MCP Servers - Model Context Protocol Integration",
    description:
      "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured.",
    url: "/tools/mcp/",
    images: [
      {
        url: "/og/tools-mcp.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - MCP Servers - Model Context Protocol Integration",
      },
    ],
  },
  twitter: {
    title: "MCP Servers - Model Context Protocol Integration",
    description:
      "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured.",
    images: ["/og/tools-mcp.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom MCP Servers",
  provider: {
    "@id": "https://alphabyte.ai/#organization",
  },
  serviceType: "MCP Server Development",
  description:
    "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured. You own the connection, we build the server.",
  areaServed: {
    "@type": "Place",
    name: "North America",
  },
  url: "https://alphabyte.ai/tools/mcp/",
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
      name: "Tools",
      item: "https://alphabyte.ai/tools/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "MCP",
      item: "https://alphabyte.ai/tools/mcp/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What systems can MCP connect Claude to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any system with an API or database connection. Common integrations include Salesforce, HubSpot, Microsoft Dynamics, SAP, JIRA, Google BigQuery, Google Drive, Slack, Power BI, and custom REST APIs.",
      },
    },
    {
      "@type": "Question",
      name: "Does our data leave our environment when Claude uses MCP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The MCP server runs inside your infrastructure. Claude sends a tool invocation request, the server executes the query locally, and returns the result to Claude. Your data is never transmitted to a third-party service.",
      },
    },
    {
      "@type": "Question",
      name: "How is MCP different from giving Claude a file upload?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "File uploads are static snapshots. MCP gives Claude live, governed, real-time access to the current state of your systems, with audit logging, role-based access, and tool-level permissions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a custom MCP server?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single-system MCP server typically takes two to four weeks from scoping to production. Multi-system integrations with complex access controls take four to eight weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Who maintains the MCP server after deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You own the server and its infrastructure. We provide full documentation, a knowledge transfer session, and the CI/CD pipeline for future updates.",
      },
    },
  ],
};

export default function McpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ToolPage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools/" },
          { label: "MCP" },
        ]}
        eyebrow="Tools · MCP"
        h1="MCP"
        subhead="Connect models to your tools."
        body={[
          "Model Context Protocol (MCP) is an open standard from Anthropic that defines how AI models communicate securely with external systems. A custom MCP server gives Claude governed, auditable, real-time access to your CRM, ERP, data warehouse, databases, and APIs — without any data leaving your environment through a third-party intermediary.",
          "Before MCP: your team copies and pastes data into Claude conversations. After MCP: Claude retrieves it directly, reasons over it, and produces output in real time — all inside your governed environment, all with a full audit trail.",
          "Each MCP server is purpose-built for your systems. We define the tools Claude can invoke, the data it can access, and the operations it can perform. Role-based access controls determine which users can invoke which tools. Every invocation is logged. The architecture is explicit about what Claude can and cannot do — there are no implicit permissions.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all tools", href: "/tools/" }}
        deliverablesSectionTitle="What we build"
        deliverablesLayout="list"
        deliverables={[
          {
            icon: <Wrench className="h-5 w-5" />,
            title: "Custom MCP server development",
            body: "MCP servers built from scratch for your specific data sources and use cases. Each exposes purpose-built tools Claude can invoke to query, retrieve, and where appropriate write to your systems. The architecture defines exactly what Claude can access \u2014 nothing more.",
          },
          {
            icon: <Lock className="h-5 w-5" />,
            title: "Identity and security",
            body: "OAuth 2.0 authentication, role-based access controls, audit logging for every tool invocation, secure credential management. Every server, every time.",
          },
          {
            icon: <Cloud className="h-5 w-5" />,
            title: "Cloud infrastructure",
            body: "We provision and configure the infrastructure \u2014 typically Azure Container Apps \u2014 with monitoring, alerting, and deployment pipelines appropriate to a production workload.",
          },
          {
            icon: <ClipboardList className="h-5 w-5" />,
            title: "Context and tool definitions",
            body: "Organizational context, system definitions, available tools, and resource configurations baked into the server. Claude understands what it has access to and how to navigate it accurately before any conversation begins.",
          },
        ]}
        rightForYou={[
          "Your team is using Claude but still copying data in and out of conversations manually",
          "You have business-critical data in systems that Claude needs to reason over in real time",
          "You need an audit trail for every interaction between AI and your operational data",
        ]}
        notRightForYou={[
          "You are not yet clear on your use cases — MCP is an integration layer, not a discovery exercise. Start with Discovery.",
          "Your team is not yet using Claude consistently — connect systems after people are enabled, not before",
        ]}
        inActiveUseSectionTitle="In active use today"
        inActiveUse={[
          {
            eyebrow: "Construction Firm",
            title: "Regulatory code library connection",
            body: "Full regulatory code library accessible to Claude through a custom MCP server integrated into Claude Desktop. Powers the live compliance intelligence agent in production.",
            href: "/our-work/fire-protection-compliance/",
          },
          {
            eyebrow: "Major Supplier · Reverse Logistics",
            title: "Multi-system integration",
            body: "Custom Claude plugin connecting GSuite, Slack, Power BI, Fireflies, and more through purpose-built agents. Automated briefs and on-demand workflows.",
            href: "/our-work/circular-economy-platform/",
          },
          {
            eyebrow: "Multi-Client \u00b7 Various Industries",
            title: "Common integrations",
            body: "Salesforce \u00b7 HubSpot \u00b7 Microsoft Dynamics \u00b7 SAP \u00b7 JIRA \u00b7 Google BigQuery \u00b7 Google Drive \u00b7 Custom REST APIs \u00b7 Slack",
          },
        ]}
        faq={[
          {
            question: "What systems can MCP connect Claude to?",
            answer: "Any system with an API or database connection. Common integrations include Salesforce, HubSpot, Microsoft Dynamics, SAP, JIRA, Google BigQuery, Google Drive, Slack, Power BI, and custom REST APIs. If your system exposes data through an API, a query interface, or a database connection, we can build an MCP server for it.",
          },
          {
            question: "Does our data leave our environment when Claude uses MCP?",
            answer: "No. The MCP server runs inside your infrastructure. Claude sends a tool invocation request, the server executes the query locally, and returns the result to Claude. Your data is never transmitted to a third-party service. For the most restrictive environments, we pair MCP with on-premise LLMs so the entire pipeline stays inside your network.",
          },
          {
            question: "How is MCP different from giving Claude a file upload?",
            answer: "File uploads are static snapshots — stale the moment the source changes. MCP gives Claude live, governed, real-time access to the current state of your systems. The difference is between someone reading last month's report and someone querying the database directly. MCP also provides audit logging, role-based access, and tool-level permissions that file uploads do not.",
          },
          {
            question: "How long does it take to build a custom MCP server?",
            answer: "A single-system MCP server (e.g., connecting Claude to your CRM) typically takes two to four weeks from scoping to production. Multi-system integrations with complex access controls take four to eight weeks. Each server ships with OAuth 2.0 authentication, audit logging, and monitoring from day one.",
          },
          {
            question: "Who maintains the MCP server after deployment?",
            answer: "You own the server and its infrastructure. We provide full documentation, a knowledge transfer session, and the CI/CD pipeline for future updates. Your engineering team can modify tool definitions, add new data sources, and update access controls independently. Most clients bring us back for quarterly capability sprints to add new integrations.",
          },
        ]}
        closingCta={{
          heading: "Want to see what this looks like for your business?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
      />
    </>
  );
}
