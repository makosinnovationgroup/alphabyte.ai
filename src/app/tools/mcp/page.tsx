import type { Metadata } from "next";
import { ToolPage } from "@/components/tool-page";

export const metadata: Metadata = {
  title: "MCP Servers — Model Context Protocol Integration",
  description:
    "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured. You own the connection, we build the server.",
  alternates: {
    canonical: "/tools/mcp/",
  },
  openGraph: {
    title: "MCP Servers — Model Context Protocol Integration",
    description:
      "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured.",
    url: "/tools/mcp/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — MCP Servers: Model Context Protocol Integration",
      },
    ],
  },
  twitter: {
    title: "MCP Servers — Model Context Protocol Integration",
    description:
      "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom MCP Servers",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "MCP Server Development",
  description:
    "Custom MCP servers connect Claude to your databases, APIs, CRM, and ERP. OAuth 2.0 secured. You own the connection, we build the server.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
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

export default function McpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
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
          "Model Context Protocol (MCP) is an open standard from Anthropic that defines how AI models communicate securely with external systems. A custom MCP server gives Claude governed, auditable, real-time access to your CRM, ERP, data warehouse, databases, and APIs \u2014 without any data leaving your environment through a third-party intermediary.",
          "Before MCP: your team copies and pastes data into Claude conversations. After MCP: Claude retrieves it directly, reasons over it, and produces output in real time \u2014 all inside your governed environment, all with a full audit trail.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all tools", href: "/tools/" }}
        deliverablesSectionTitle="What we build"
        deliverablesLayout="list"
        deliverables={[
          {
            icon: "\ud83d\udd27",
            title: "Custom MCP server development",
            body: "MCP servers built from scratch for your specific data sources and use cases. Each exposes purpose-built tools Claude can invoke to query, retrieve, and where appropriate write to your systems. The architecture defines exactly what Claude can access \u2014 nothing more.",
          },
          {
            icon: "\ud83d\udd10",
            title: "Identity and security",
            body: "OAuth 2.0 authentication, role-based access controls, audit logging for every tool invocation, secure credential management. Every server, every time.",
          },
          {
            icon: "\u2601\ufe0f",
            title: "Cloud infrastructure",
            body: "We provision and configure the infrastructure \u2014 typically Azure Container Apps \u2014 with monitoring, alerting, and deployment pipelines appropriate to a production workload.",
          },
          {
            icon: "\ud83d\udccb",
            title: "Context and tool definitions",
            body: "Organizational context, system definitions, available tools, and resource configurations baked into the server. Claude understands what it has access to and how to navigate it accurately before any conversation begins.",
          },
        ]}
        inActiveUseSectionTitle="In active use today"
        inActiveUse={[
          {
            eyebrow: "Sprinklermatic \u00b7 Fire Protection",
            title: "NFPA codes library connection",
            body: "Full NFPA codes library accessible to Claude through a custom MCP server with OAuth 2.0 security. Powers the live NFPA compliance agent in production.",
          },
          {
            eyebrow: "RecirQ | Reventory \u00b7 Circular Economy",
            title: "Google BigQuery connection",
            body: "Claude reads and writes to live BigQuery data marts through a custom MCP server \u2014 powering the real-time sales intelligence dashboard.",
          },
          {
            eyebrow: "Multi-Client \u00b7 Various Industries",
            title: "Common integrations",
            body: "Salesforce \u00b7 HubSpot \u00b7 Microsoft Dynamics \u00b7 SAP \u00b7 JIRA \u00b7 Google BigQuery \u00b7 Google Drive \u00b7 Custom REST APIs \u00b7 Slack",
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
