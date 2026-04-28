import type { Metadata } from "next";
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
        alt: "Alphabyte — Claude: The Intelligence Layer for AI Engagements",
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
    "@type": "Country",
    name: "Canada",
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
          "We are an Anthropic Claude Partner. Every engineer in our practice works exclusively with Claude — not evaluating which model to use on each engagement. That focus means faster configuration, deeper expertise, and a coherent architectural point of view that a firm evaluating ten different models cannot match.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        partnerCard={{
          eyebrow: "Claude Partner",
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
            icon: "\ud83d\udcda",
            title: "Custom knowledgebases",
            body: "Claude Projects populated with your policies, SOPs, strategic documents, and regulatory frameworks. Your team works from an environment that understands your business \u2014 not a blank canvas.",
          },
          {
            icon: "\ud83d\udd0c",
            title: "SDLC plugins",
            body: "The custom Claude software development lifecycle plugin standardizing how any employee begins a new project. Published once, available to every authorized user.",
          },
          {
            icon: "\u2699\ufe0f",
            title: "Custom skills",
            body: "Built around how your team actually works. Report generation, data parsing, strategic analysis \u2014 specific to your workflows, not recycled from another client.",
          },
          {
            icon: "\ud83e\udd16",
            title: "Agent development",
            body: "Claude Code is the engineering substrate for all integration and custom solutions work. Every agent, every MCP connector, every automated workflow.",
          },
          {
            icon: "\ud83d\udcdd",
            title: "Prompt libraries",
            body: "Structured around the patterns of thought your team uses when working through real business problems. Tested against your actual data.",
          },
          {
            icon: "\ud83d\udd17",
            title: "MCP connectivity",
            body: "Custom MCP servers connecting Claude to your databases, APIs, CRM, and ERP \u2014 secure, governed access, full audit logging.",
          },
        ]}
        inActiveUseSectionTitle="In active use today — what we built, what it produced"
        inActiveUse={[
          {
            eyebrow: "Sprinklermatic \u00b7 Fire Protection \u00b7 North America",
            title: "Automated NFPA compliance review",
            body: "Eliminated 40+ hours per week of manual fire codes lookup. Custom MCP server connected to full NFPA library. Live in production.",
          },
          {
            eyebrow: "RecirQ / Reventory \u00b7 Circular Economy \u00b7 Global",
            title: "Real-time sales intelligence",
            body: "Claude analyses every WhatsApp sales conversation and feeds structured output into a live BigQuery dashboard.",
          },
          {
            eyebrow: "Sprinklermatic / EJ Capital \u00b7 Industrial PE-Backed",
            title: "Executive Claude environment",
            body: "Custom knowledgebases, skills library, and prompt toolkit deployed to the full executive team. Used daily across five functional leaders.",
          },
        ]}
      />
    </>
  );
}
