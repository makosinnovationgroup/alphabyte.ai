import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
  description:
    "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models. AI as operational infrastructure, not a demo.",
  alternates: {
    canonical: "/services/infrastructure/",
  },
  openGraph: {
    title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
    description:
      "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models.",
    url: "/services/infrastructure/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 Infrastructure: Custom MCP, AI Agents, On-Premise LLMs",
      },
    ],
  },
  twitter: {
    title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
    description:
      "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Infrastructure",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Infrastructure Consulting",
  description:
    "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models. AI as operational infrastructure, not a demo.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/services/infrastructure/",
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
      name: "Infrastructure",
      item: "https://alphabyte.ai/services/infrastructure/",
    },
  ],
};

export default function InfrastructurePage() {
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
          { label: "Infrastructure" },
        ]}
        eyebrow="Services \u00b7 Infrastructure"
        h1="Infrastructure"
        subhead="How do our systems use AI?"
        body={[
          "Your team is enabled. Your data is validated. The question now is how your systems work with AI \u2014 not just your people.",
          "Infrastructure is where Claude stops being a productivity tool on someone\u2019s laptop and starts being an operational capability connected to the systems that actually run your business.",
          "Custom MCP servers \u2014 the connective tissue between Claude and your internal systems. Autonomous agents. On-premise LLMs. Fine-tuned models. Built in production, not in demos.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all services", href: "/services/" }}
        stats={[
          {
            value: "OAuth 2.0",
            label: "Security standard on every MCP server we deploy",
          },
          {
            value: "Full audit",
            label: "Every tool invocation logged and traceable",
          },
          {
            value: "Production",
            label:
              "All agents built to production engineering standards \u2014 not demos",
          },
        ]}
        thirtyDays={{
          weeks: [
            {
              label: "Week 1",
              body: "Requirements and architecture \u2014 we define the systems Claude needs to connect to, the data access patterns, the security and governance requirements, and the right build sequence.",
            },
            {
              label: "Weeks 2 to 3",
              body: "Build \u2014 custom MCP server development, security configuration, tool and API integration. Agent development begins in parallel for clients pursuing that track.",
            },
            {
              label: "Week 4",
              body: "Integration testing, production deployment, knowledge transfer. Your team leaves with full technical documentation and the capability to extend what we built.",
            },
          ],
          dayThirty: {
            label: "Day 30 \u2014 what you have",
            body: "Claude connected to your live operational systems through a production-grade MCP server. Full audit logging, OAuth 2.0 security, governed access. Your team using Claude against real data, not exports.",
          },
        }}
        deliverables={[
          {
            icon: "\ud83d\udd27",
            title: "Custom MCP servers",
            body: "Model Context Protocol servers connecting Claude to your internal databases, APIs, CRM, ERP, data warehouses, and proprietary systems. Governed, auditable, real-time access \u2014 with OAuth 2.0, role-based access controls, and full audit logging.",
          },
          {
            icon: "\ud83e\udd16",
            title: "Custom AI agents",
            body: "Purpose-built systems executing defined operational workflows end-to-end. Each agent connects through MCP, operates in an isolated cloud sandbox, and routes through human-in-the-loop approval gates at the decision points your team has defined.",
          },
          {
            icon: "\ud83d\udcca",
            title: "Agent Command Centre",
            body: "Our observatory dashboard for the full agent estate. Real-time visibility into what every agent is doing, waiting on, completing, and flagging. Your team stays in control without inspecting logs.",
          },
          {
            icon: "\ud83c\udfe2",
            title: "On-premise LLM deployment",
            body: "Llama, Mistral, and other capable open-source models deployed on your own infrastructure. For clients where cloud AI is ruled out by data sovereignty requirements, security classifications, or regulatory mandate.",
          },
          {
            icon: "\ud83e\udde0",
            title: "Fine-tuned custom LLMs",
            body: "A domain-specific model trained on your proprietary data \u2014 your terminology, your document structure, your institutional knowledge \u2014 for use cases that require depth a general-purpose model cannot provide.",
          },
        ]}
        rightForYou={[
          "Your team is enabled and data is validated \u2014 ready to connect AI to live operational systems.",
          "You have validated workflows through enablement that are worth automating end-to-end.",
          "Data sovereignty or security policy rules out cloud AI for your environment.",
        ]}
        notRightForYou={[
          "Your team is not yet using Claude consistently \u2014 infrastructure built before enablement produces systems nobody uses.",
          "Your data foundation has not been validated \u2014 we enforce Data Readiness before any integration or agent work begins.",
        ]}
        timeline="4 to 36 weeks depending on scope"
      />
    </>
  );
}
