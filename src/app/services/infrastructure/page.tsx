import type { Metadata } from "next";
import { Wrench, Bot, BarChart3, Building2, Brain } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
  description:
    "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models. AI as operational infrastructure, not a demo.",
  alternates: {
    canonical: "/services/infrastructure/",
  },
  openGraph: {
    type: "website",
    title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
    description:
      "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models.",
    url: "/services/infrastructure/",
    images: [
      {
        url: "/og/services-infrastructure.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte \u2014 Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
      },
    ],
  },
  twitter: {
    title: "Infrastructure \u2014 Custom MCP, AI Agents, On-Premise LLMs",
    description:
      "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models.",
    images: ["/og/services-infrastructure.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Infrastructure",
  provider: {
    "@id": "https://alphabyte.ai/#organization",
  },
  serviceType: "AI Infrastructure Consulting",
  description:
    "Custom MCP servers, autonomous AI agents, on-premise LLM deployments, fine-tuned models. AI as operational infrastructure, not a demo.",
  areaServed: {
    "@type": "Place",
    name: "North America",
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

const faq = [
  {
    question: "What is a custom MCP server?",
    answer: "A lightweight application that gives Claude structured access to your business systems \u2014 CRM, ERP, databases, file storage. Each server inherits your existing permissions, logs every interaction, and connects through OAuth 2.0 with role-based access controls.",
  },
  {
    question: "Do we need to complete enablement before infrastructure work?",
    answer: "Yes. Infrastructure built before enablement produces systems nobody uses. Your team needs to be using Claude consistently before we connect it to live operational systems. We enforce Data Readiness before any integration or agent work.",
  },
  {
    question: "Can we keep our data on-premise?",
    answer: "Yes. On-premise LLM deployment using Llama, Mistral, or other open-source models is available for environments where cloud AI is ruled out by regulation or policy. We deploy on your own infrastructure with full control.",
  },
  {
    question: "What security is built into MCP servers and agents?",
    answer: "OAuth 2.0 authentication, role-based access controls, and full audit logging on every tool invocation. Agents run in isolated cloud sandboxes with human-in-the-loop approval gates at decision points. Every action is traceable.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: { "@type": "Answer", text: entry.answer },
  })),
};

export default function InfrastructurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]),
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
          "Your team is enabled. Your data is validated. The question now is how your systems work with AI, not just your people.",
          "Infrastructure is where AI stops being a productivity tool on someone\u2019s laptop and starts being an operational capability connected to the systems that actually run your business.",
          "Custom MCP servers connect your AI environment to internal systems. Autonomous agents handle operational workflows. On-premise LLMs and fine-tuned models serve clients with sovereignty or domain-depth requirements. All built in production, not in demos.",
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
              "All agents built to production engineering standards, not demos",
          },
        ]}
        thirtyDays={{
          weeks: [
            {
              label: "Week 1",
              body: "Requirements and architecture. We define the systems that need to connect to your AI environment, the data access patterns, the security and governance requirements, and the right build sequence.",
            },
            {
              label: "Weeks 2 to 3",
              body: "Build. Custom MCP server development, security configuration, tool and API integration. Agent development begins in parallel for clients pursuing that track.",
            },
            {
              label: "Week 4",
              body: "Integration testing, production deployment, knowledge transfer. Your team leaves with full technical documentation and the capability to extend what we built.",
            },
          ],
          dayThirty: {
            label: "Day 30 \u2014 what you have",
            body: "Your AI environment connected to live operational systems through a production-grade MCP server. Full audit logging, OAuth 2.0 security, governed access. Your team working against real data, not exports.",
          },
        }}
        deliverables={[
          {
            icon: <Wrench className="h-5 w-5" />,
            title: "Custom MCP servers",
            body: "Model Context Protocol servers connecting your AI environment to internal databases, APIs, CRM, ERP, data warehouses, and proprietary systems. Governed, auditable, real-time access with OAuth 2.0, role-based access controls, and full audit logging.",
          },
          {
            icon: <Bot className="h-5 w-5" />,
            title: "Custom AI agents",
            body: "Purpose-built systems executing defined operational workflows end-to-end. Each agent connects through MCP, operates in an isolated cloud sandbox, and routes through human-in-the-loop approval gates at the decision points your team has defined.",
          },
          {
            icon: <BarChart3 className="h-5 w-5" />,
            title: "Agent Command Centre",
            body: "Our observatory dashboard for the full agent estate. Real-time visibility into what every agent is doing, waiting on, completing, and flagging. Your team stays in control without inspecting logs.",
          },
          {
            icon: <Building2 className="h-5 w-5" />,
            title: "On-premise LLM deployment",
            body: "Llama, Mistral, and other capable open-source models deployed on your own infrastructure. For clients where cloud AI is ruled out by data sovereignty requirements, security classifications, or regulatory mandate.",
          },
          {
            icon: <Brain className="h-5 w-5" />,
            title: "Fine-tuned custom LLMs",
            body: "A domain-specific model trained on your proprietary data, your terminology, your document structure, your institutional knowledge, for use cases that require depth a general-purpose model cannot provide.",
          },
        ]}
        rightForYou={[
          "Your team is enabled and data is validated, and you are ready to connect AI to live operational systems",
          "You have validated workflows through enablement that are worth automating end-to-end",
          "Data sovereignty or security policy rules out cloud AI for your environment",
        ]}
        notRightForYou={[
          "Your team is not yet using AI consistently. Infrastructure built before enablement produces systems nobody uses.",
          "Your data foundation has not been validated. We enforce Data Readiness before any integration or agent work begins.",
        ]}
        timeline="4 to 36 weeks depending on scope"
        faq={faq}
      />
    </>
  );
}
