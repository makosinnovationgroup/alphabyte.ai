import type { Metadata } from "next";
import { ToolPage } from "@/components/tool-page";

export const metadata: Metadata = {
  title: "Custom AI Agents — Task Automation",
  description:
    "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates where stakes require it.",
  alternates: {
    canonical: "/tools/custom-ai-agents/",
  },
  openGraph: {
    title: "Custom AI Agents — Task Automation",
    description:
      "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates.",
    url: "/tools/custom-ai-agents/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Custom AI Agents: Task Automation",
      },
    ],
  },
  twitter: {
    title: "Custom AI Agents — Task Automation",
    description:
      "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom AI Agents & Systems",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "AI Agent Development",
  description:
    "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates where stakes require it.",
  areaServed: {
    "@type": "Place",
    name: "North America",
  },
  url: "https://alphabyte.ai/tools/custom-ai-agents/",
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
      name: "Custom AI Agents",
      item: "https://alphabyte.ai/tools/custom-ai-agents/",
    },
  ],
};

export default function CustomAiAgentsPage() {
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
          { label: "Custom AI Agents" },
        ]}
        eyebrow="Tools · Custom AI Agents"
        h1="Custom AI Agents"
        subhead="Purpose-built task automation."
        body={[
          "A custom AI agent executes a defined operational workflow end-to-end without someone manually running it. It connects to your data through MCP. It operates in an isolated cloud sandbox. It routes to a human at the decision points you define as requiring oversight. It runs in production \u2014 not in a demo environment that never ships.",
          "Production systems with CI/CD pipelines, monitoring, and rollback capability. Built to the same engineering standards as any other production software in your organization.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all tools", href: "/tools/" }}
        deliverablesSectionTitle="What we build"
        deliverablesLayout="list"
        deliverables={[
          {
            icon: "\ud83c\udfd7\ufe0f",
            title: "Agent sandbox and production runtime",
            body: "Each agent developed and tested in an isolated cloud sandbox before production. A separate, stable production runtime provisioned for live agents \u2014 monitoring, alerting, and rollback from day one.",
          },
          {
            icon: "\u2699\ufe0f",
            title: "CI/CD pipelines for agentic workloads",
            body: "Automated testing, deployment pipelines for agent code updates, rollback mechanisms for production incidents. Agentic development has specific requirements that generic CI/CD patterns do not address.",
          },
          {
            icon: "\ud83d\udcca",
            title: "Agent Command Centre",
            body: "Our observatory dashboard for the full agent estate. Real-time visibility into what every agent is doing, waiting on, completing, and flagging. Your team stays in control without inspecting logs.",
          },
          {
            icon: "\ud83d\udc64",
            title: "Human-in-the-loop approval workflows",
            body: "Every agent routes through approval workflows at the decision points your team has defined. The agent waits. The reviewer decides. Architectural requirement, not retrofitted governance.",
          },
          {
            icon: "\ud83d\udc4d",
            title: "Self-improvement feedback",
            body: "Thumbs-up and thumbs-down correction flows that let your team flag incorrect outputs in real time. That feedback refines agent behaviour through hypercare and subsequent iteration.",
          },
        ]}
        inActiveUseSectionTitle="In active use today"
        inActiveUse={[
          {
            eyebrow: "Sprinklermatic \u00b7 Fire Protection \u00b7 North",
            title: "NFPA compliance agent \u2014 live in production",
            body: "Eliminated 40+ hours per week of manual fire codes lookup. Operates against a custom MCP server. Citation-grade accuracy. Human review gate for edge cases.",
          },
          {
            eyebrow: "Sprinklermatic | EJ Capital \u00b7 RE-Backed",
            title: "Five-agent Command System",
            body: "Five specialized autonomous agents operating in isolated Azure sandboxes, controlled through a custom Slack plugin with a human approval gate.",
          },
          {
            eyebrow: "RecirQ / Reventory \u00b7 Circular Economy",
            title: "Sales Command Centre",
            body: "Claude conducts semantic analysis of live WhatsApp sales conversations and feeds structured output into a real-time BigQuery dashboard.",
          },
        ]}
        rightForYou={[
          "You have enabled your team and validated your data \u2014 now ready to automate workflows end-to-end",
          "You have clearly defined operational workflows that are high-volume and rule-governed",
          "You want AI that runs in production, not a perpetual pilot",
        ]}
        notRightForYou={[
          "Your team is not yet using Claude consistently \u2014 agents built before enablement produce systems nobody uses",
          "Your workflows are not yet well-defined enough to automate \u2014 Discovery or Citizen Dev first",
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
