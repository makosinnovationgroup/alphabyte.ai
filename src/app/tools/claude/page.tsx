import type { Metadata } from "next";
import { BookOpen, Plug, Settings, Bot, FileText, Link2 } from "lucide-react";
import { ToolPage } from "@/components/tool-page";

export const metadata: Metadata = {
  title: "Claude - The Intelligence Layer for AI Engagements",
  description:
    "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits — purpose-built for your team.",
  alternates: {
    canonical: "/tools/claude/",
  },
  openGraph: {
    type: "website",
    title: "Claude - The Intelligence Layer for AI Engagements",
    description:
      "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits.",
    url: "/tools/claude/",
    images: [
      {
        url: "/og/tools-claude.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Claude - The Intelligence Layer for AI Engagements",
      },
    ],
  },
  twitter: {
    title: "Claude - The Intelligence Layer for AI Engagements",
    description:
      "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits.",
    images: ["/og/tools-claude.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude Configuration & Integration",
  provider: {
    "@id": "https://alphabyte.ai/#organization",
  },
  serviceType: "AI Implementation",
  description:
    "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits — purpose-built for your team.",
  areaServed: {
    "@type": "Place",
    name: "North America",
  },
  url: "https://alphabyte.ai/tools/claude/",
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
      name: "Claude",
      item: "https://alphabyte.ai/tools/claude/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between Claude Teams and Claude Enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude Teams provides a governed shared workspace with usage controls, conversation history, and team-level administration. Claude Enterprise adds SSO/SAML, domain verification, expanded context windows, higher rate limits, and enterprise-grade admin controls. Most mid-market clients start with Teams and move to Enterprise when they reach 50+ active users or need SSO integration.",
      },
    },
    {
      "@type": "Question",
      name: "Can Claude access our internal data without sending it to Anthropic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Claude Teams and Enterprise conversations are not used to train models. For clients who need data to remain entirely on-premise, we connect Claude to your systems through custom MCP servers — Claude queries the data in real time without it leaving your environment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a Claude environment configured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A basic Claude Teams environment with knowledgebases, an SDLC plugin, and a prompt library is typically running within three weeks. Enterprise deployments with SSO, custom MCP integrations, and a full skills library take six to twelve weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Alphabyte only work with Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Focus produces depth. Every engineer on our team configures Claude full-time. That means faster delivery, fewer configuration errors, and architectural patterns that compound across clients.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the engagement ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You own everything we build — the knowledgebases, skills, plugins, and MCP servers. We provide documentation and a knowledge transfer session so your team can maintain and extend the environment independently.",
      },
    },
  ],
};

export default function ClaudePage() {
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
          { label: "Claude" },
        ]}
        eyebrow="Tools · Claude"
        h1="Claude"
        subhead="Reasoning, writing, and analysis."
        body={[
          "Claude is the intelligence layer across every engagement we deliver — configured around your organizational data, your team\u2019s workflows, and your operational context.",
          "We are Anthropic Claude Certified. Every engineer in our practice works exclusively with Claude — not evaluating which model to use on each engagement. That focus means faster configuration, deeper expertise, and a coherent architectural point of view that a firm evaluating ten different models cannot match.",
          "Claude ships in three tiers: Claude Teams for governed team environments, Claude Enterprise for organization-wide deployment with SSO and admin controls, and Claude API for custom integrations and agent development. We configure whichever tier fits your scale, security posture, and use cases — most mid-market clients start with Teams and expand as their programme grows.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        partnerCard={{
          eyebrow: "Claude Certified",
          body: "Anthropic-certified delivery team. Every engagement, every engineer, exclusively Claude.",
        }}
        usedAcrossServices={[
          { label: "Citizen Development", href: "/services/citizen-development/" },
          { label: "Executive Enablement", href: "/services/executive-enablement/" },
          { label: "Discovery", href: "/services/discovery/" },
          { label: "Data Readiness", href: "/services/data-readiness/" },
          { label: "Infrastructure", href: "/services/infrastructure/" },
        ]}
        deliverablesSectionTitle="How we configure Claude for your organization"
        deliverablesLayout="grid"
        deliverables={[
          {
            icon: <BookOpen className="h-5 w-5" />,
            title: "Custom knowledgebases",
            body: "Claude Projects populated with your policies, SOPs, strategic documents, and regulatory frameworks. Your team works from an environment that understands your business \u2014 not a blank canvas.",
          },
          {
            icon: <Plug className="h-5 w-5" />,
            title: "SDLC plugins",
            body: "The custom Claude software development lifecycle plugin standardizing how any employee begins a new project. Published once, available to every authorized user.",
          },
          {
            icon: <Settings className="h-5 w-5" />,
            title: "Custom skills",
            body: "Built around how your team actually works. Report generation, data parsing, strategic analysis \u2014 specific to your workflows, not recycled from another client.",
          },
          {
            icon: <Bot className="h-5 w-5" />,
            title: "Agent development",
            body: "Claude Code is the engineering substrate for all integration and custom solutions work. Every agent, every MCP connector, every automated workflow.",
          },
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Prompt libraries",
            body: "Structured around the patterns of thought your team uses when working through real business problems. Tested against your actual data.",
          },
          {
            icon: <Link2 className="h-5 w-5" />,
            title: "MCP connectivity",
            body: "Custom MCP servers connecting Claude to your databases, APIs, CRM, and ERP \u2014 secure, governed access, full audit logging.",
          },
        ]}
        rightForYou={[
          "Your team is already using Claude informally and you want to govern it, scale it, and connect it to real data",
          "Leadership wants a concrete proof point before resourcing a broader AI programme",
          "You want one AI platform across the organization — not a different tool per team",
        ]}
        notRightForYou={[
          "You need a model comparison exercise — we only work with Claude, and that focus is the point",
          "You want a chatbot on your website — Claude is an operational tool, not a customer-facing widget",
        ]}
        inActiveUseSectionTitle="In active use today — what we built, what it produced"
        inActiveUse={[
          {
            eyebrow: "Construction Firm · North America",
            title: "Compliance intelligence agent",
            body: "Custom AI agent navigating a full regulatory code library via knowledge graph and MCP server. Citation-grade accuracy. Live in production.",
            href: "/our-work/fire-protection-compliance/",
          },
          {
            eyebrow: "Major Supplier · Reverse Logistics",
            title: "Executive productivity suite",
            body: "Custom Claude plugin giving leadership a single command surface across GSuite, Slack, Power BI, and Fireflies. Automated briefs delivered daily.",
            href: "/our-work/circular-economy-platform/",
          },
          {
            eyebrow: "Construction Firm · Multi-Entity",
            title: "Executive Claude environment",
            body: "Custom knowledgebases, skills library, and prompt toolkit deployed to the full executive team. Used daily across multiple functional leaders.",
            href: "/our-work/fire-protection-compliance/",
          },
        ]}
        faq={[
          {
            question: "What is the difference between Claude Teams and Claude Enterprise?",
            answer: "Claude Teams provides a governed shared workspace with usage controls, conversation history, and team-level administration. Claude Enterprise adds SSO/SAML, domain verification, expanded context windows, higher rate limits, and enterprise-grade admin controls. Most mid-market clients start with Teams and move to Enterprise when they reach 50+ active users or need SSO integration.",
          },
          {
            question: "Can Claude access our internal data without sending it to Anthropic?",
            answer: "Yes. Claude Teams and Enterprise conversations are not used to train models. For clients who need data to remain entirely on-premise, we connect Claude to your systems through custom MCP servers — Claude queries the data in real time without it leaving your environment. For the most restrictive requirements, we deploy on-premise LLMs that run entirely inside your infrastructure.",
          },
          {
            question: "How long does it take to get a Claude environment configured?",
            answer: "A basic Claude Teams environment with knowledgebases, an SDLC plugin, and a prompt library is typically running within three weeks. Enterprise deployments with SSO, custom MCP integrations, and a full skills library take six to twelve weeks depending on the number of source systems involved.",
          },
          {
            question: "Why does Alphabyte only work with Claude?",
            answer: "Focus produces depth. Every engineer on our team configures Claude full-time — not switching between GPT, Gemini, and Claude depending on the engagement. That means faster delivery, fewer configuration errors, and architectural patterns that compound across clients. Firms that evaluate ten models on every engagement spread expertise thin.",
          },
          {
            question: "What happens after the engagement ends?",
            answer: "You own everything we build — the knowledgebases, skills, plugins, and MCP servers. We provide documentation and a knowledge transfer session so your team can maintain and extend the environment independently. Most clients bring us back for quarterly reviews or new capability sprints, but there is no lock-in.",
          },
        ]}
        closingCta={{
          heading: "Want to see what Claude looks like configured for your team?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
      />
    </>
  );
}
