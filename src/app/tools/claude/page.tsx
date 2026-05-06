import type { Metadata } from "next";
import { BookOpen, Plug, Settings, Bot, FileText, Link2 } from "lucide-react";
import { ToolPage } from "@/components/tool-page";

export const metadata: Metadata = {
  title: "Claude — The Intelligence Layer for AI Engagements",
  description:
    "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits — purpose-built for your team.",
  alternates: {
    canonical: "/tools/claude/",
  },
  openGraph: {
    title: "Claude — The Intelligence Layer for AI Engagements",
    description:
      "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits.",
    url: "/tools/claude/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Claude — The Intelligence Layer for AI Engagements",
      },
    ],
  },
  twitter: {
    title: "Claude — The Intelligence Layer for AI Engagements",
    description:
      "Claude is the intelligence layer across every Alphabyte engagement. Custom knowledgebases, skills libraries, prompt toolkits.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Claude Configuration & Integration",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
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

export default function ClaudePage() {
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
          { label: "Claude" },
        ]}
        eyebrow="Tools · Claude"
        h1="Claude"
        subhead="Reasoning, writing, and analysis."
        body={[
          "Claude is the intelligence layer across every engagement we deliver — configured around your organizational data, your team\u2019s workflows, and your operational context.",
          "We are Anthropic Claude Certified. Every engineer in our practice works exclusively with Claude — not evaluating which model to use on each engagement. That focus means faster configuration, deeper expertise, and a coherent architectural point of view that a firm evaluating ten different models cannot match.",
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
      />
    </>
  );
}
