import type { Metadata } from "next";
import { Container, Settings, BarChart3, UserCheck, ThumbsUp } from "lucide-react";
import { ToolPage } from "@/components/tool-page";

export const metadata: Metadata = {
  title: "Custom AI Agents - Task Automation",
  description:
    "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates where stakes require it.",
  alternates: {
    canonical: "/tools/custom-ai-agents/",
  },
  openGraph: {
    type: "website",
    title: "Custom AI Agents - Task Automation",
    description:
      "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates.",
    url: "/tools/custom-ai-agents/",
    images: [
      {
        url: "/og/tools-custom-ai-agents.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Custom AI Agents - Task Automation",
      },
    ],
  },
  twitter: {
    title: "Custom AI Agents - Task Automation",
    description:
      "Autonomous AI agents that handle workflows end-to-end. Command Centre dashboard. Human-in-the-loop approval gates.",
    images: ["/og/tools-custom-ai-agents.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom AI Agents & Systems",
  provider: {
    "@id": "https://alphabyte.ai/#organization",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a Claude environment and a custom AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Claude environment is a configured workspace where people interact with Claude directly. A custom AI agent operates autonomously against a defined workflow, connecting to systems through MCP and routing to humans only at specified decision points.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Agent Command Centre show?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real-time visibility into every agent in your estate: what each agent is doing, waiting on, completing, and flagging for human review.",
      },
    },
    {
      "@type": "Question",
      name: "How do human-in-the-loop approval workflows work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You define decision points where a human must approve before the agent continues. The agent pauses at approval gates and notifies the assigned reviewer. This is an architectural requirement built in from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Can agents be updated after deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every agent ships with a CI/CD pipeline, automated testing, and rollback mechanisms for production updates.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when an agent makes a mistake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The self-improvement feedback system lets your team flag incorrect outputs in real time. That feedback refines agent behaviour during hypercare and subsequent iterations. Human-in-the-loop gates catch errors before they reach downstream systems.",
      },
    },
  ],
};

export default function CustomAiAgentsPage() {
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
          { label: "Custom AI Agents" },
        ]}
        eyebrow="Tools · Custom AI Agents"
        h1="Custom AI Agents"
        subhead="Purpose-built task automation."
        body={[
          "A custom AI agent executes a defined operational workflow end-to-end without someone manually running it. It connects to your data through MCP. It operates in an isolated cloud sandbox. It routes to a human at the decision points you define as requiring oversight. It runs in production, not in a demo environment that never ships.",
          "Production systems with CI/CD pipelines, monitoring, and rollback capability. Built to the same engineering standards as any other production software in your organization.",
          "Agents sit at the top of the stack. They depend on the AI reasoning layer for intelligence, MCP for data access, and your governance framework for guardrails. That is why we build agents after enablement and data connectivity are in place. An agent built before the team is using AI and data is connected produces a system nobody trusts and nobody uses.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all tools", href: "/tools/" }}
        deliverablesSectionTitle="What we build"
        deliverablesLayout="list"
        deliverables={[
          {
            icon: <Container className="h-5 w-5" />,
            title: "Agent sandbox and production runtime",
            body: "Each agent developed and tested in an isolated cloud sandbox before production. A separate, stable production runtime provisioned for live agents with monitoring, alerting, and rollback from day one.",
          },
          {
            icon: <Settings className="h-5 w-5" />,
            title: "CI/CD pipelines for agentic workloads",
            body: "Automated testing, deployment pipelines for agent code updates, rollback mechanisms for production incidents. Agentic development has specific requirements that generic CI/CD patterns do not address.",
          },
          {
            icon: <BarChart3 className="h-5 w-5" />,
            title: "Agent Command Centre",
            body: "Our observatory dashboard for the full agent estate. Real-time visibility into what every agent is doing, waiting on, completing, and flagging. Your team stays in control without inspecting logs.",
          },
          {
            icon: <UserCheck className="h-5 w-5" />,
            title: "Human-in-the-loop approval workflows",
            body: "Every agent routes through approval workflows at the decision points your team has defined. The agent waits. The reviewer decides. Architectural requirement, not retrofitted governance.",
          },
          {
            icon: <ThumbsUp className="h-5 w-5" />,
            title: "Self-improvement feedback",
            body: "Thumbs-up and thumbs-down correction flows that let your team flag incorrect outputs in real time. That feedback refines agent behaviour through hypercare and subsequent iteration.",
          },
        ]}
        inActiveUseSectionTitle="In active use today"
        inActiveUse={[
          {
            eyebrow: "Construction Firm · North America",
            title: "Compliance intelligence agent, live in production",
            body: "Custom AI agent navigating a full regulatory code library via knowledge graph. Operates against a custom MCP server. Citation-grade accuracy with traceable source pages.",
            href: "/our-work/construction-compliance-agent/",
          },
          {
            eyebrow: "Construction Firm · Multi-Entity",
            title: "Modular agent architecture",
            body: "Agent architecture built for expansion across estimating, operations management, and project documentation. Each agent operates within established access controls.",
            href: "/our-work/construction-compliance-agent/",
          },
          {
            eyebrow: "Major Supplier · Reverse Logistics",
            title: "Executive productivity suite",
            body: "Purpose-built agents delivering automated morning briefs, spend reports, and post-call summaries across GSuite, Slack, Power BI, and Fireflies.",
            href: "/our-work/circular-economy-platform/",
          },
        ]}
        rightForYou={[
          "You have enabled your team and validated your data, and are now ready to automate workflows end-to-end",
          "You have clearly defined operational workflows that are high-volume and rule-governed",
          "You want AI that runs in production, not a perpetual pilot",
        ]}
        notRightForYou={[
          "Your team is not yet using AI consistently. Agents built before enablement produce systems nobody uses.",
          "Your workflows are not yet well-defined enough to automate. Discovery or Citizen Dev comes first.",
        ]}
        faq={[
          {
            question: "What is the difference between a Claude environment and a custom AI agent?",
            answer: "A Claude environment is a configured workspace where people interact with Claude directly, knowledgebases, skills, and prompt libraries. A custom AI agent operates autonomously against a defined workflow, connecting to systems through MCP, executing tasks, and routing to humans only at the decision points you specify. People use Claude environments. Agents run on their own.",
          },
          {
            question: "What does the Agent Command Centre show?",
            answer: "Real-time visibility into every agent in your estate: what each agent is doing right now, what it is waiting on, what it has completed, and what it has flagged for human review. Your team stays in control without reading logs or checking dashboards across multiple systems.",
          },
          {
            question: "How do human-in-the-loop approval workflows work?",
            answer: "You define the decision points where a human must approve before the agent continues. The agent executes its workflow, reaches an approval gate, pauses, and notifies the assigned reviewer. The reviewer approves or rejects. The agent continues or stops. This is an architectural requirement built into the agent from day one, not a feature added after something goes wrong.",
          },
          {
            question: "Can agents be updated after deployment?",
            answer: "Yes. Every agent ships with a CI/CD pipeline, automated testing, and rollback mechanisms. Your team can update agent logic, modify approval workflows, and add new tool integrations through the same deployment process used for any other production software.",
          },
          {
            question: "What happens when an agent makes a mistake?",
            answer: "The self-improvement feedback system lets your team flag incorrect outputs with a thumbs-up or thumbs-down in real time. That feedback is used to refine agent behaviour during the hypercare period and in subsequent iterations. For high-stakes workflows, the human-in-the-loop gates catch errors before they reach downstream systems.",
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
