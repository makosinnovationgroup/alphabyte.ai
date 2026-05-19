import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Major Supplier - Executive Productivity Suite",
  description:
    "How Alphabyte built a custom Claude plugin that gives leadership a single command surface across GSuite, Slack, Power BI, Fireflies, and more. Priority alerts and briefs delivered automatically.",
  alternates: {
    canonical: "/our-work/circular-economy-platform/",
  },
  openGraph: {
    title: "Major Supplier - Executive Productivity Suite",
    description:
      "Custom Claude plugin giving leadership a single command surface across every system they use. Priority alerts and briefs delivered automatically.",
    url: "/our-work/circular-economy-platform/",
    images: [
      {
        url: "/our-work/circular-economy-platform-msi-concept.webp",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Major Supplier - Executive Productivity Suite",
      },
    ],
  },
  twitter: {
    title: "Major Supplier - Executive Productivity Suite",
    description:
      "Custom Claude plugin giving leadership a single command surface across every system they use. Priority alerts and briefs delivered automatically.",
    images: ["/our-work/circular-economy-platform-msi-concept.webp"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Major Supplier — AI-Powered Executive Productivity Suite",
  description:
    "How Alphabyte built a custom Claude plugin for a major supplier in electronic reverse logistics, giving leadership a single command surface across GSuite, Slack, Power BI, and Fireflies.",
  url: "https://alphabyte.ai/our-work/circular-economy-platform/",
  author: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  about: {
    "@type": "Service",
    name: "Executive AI Productivity Suite",
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
      name: "Major Supplier — Executive Productivity",
      item: "https://alphabyte.ai/our-work/circular-economy-platform/",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "A major supplier in the electronic reverse logistics space had strong business intelligence in place. Dashboards gave the team visibility into operational data, and leadership had begun building out a knowledge environment in Claude. The foundation was there. What was missing was the layer that connected executive workflows to operational data in real time.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "BI tools are not designed to reach across communication, calendar, and financial systems and surface what needs attention right now. That layer did not exist. Leadership was spending time they did not have pulling context from multiple platforms before every decision.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "The gap was not in the data. It was in the effort required to use it.",
  },
  { type: "heading", text: "Solution" },
  {
    type: "paragraph",
    text: "We built a custom Claude plugin that gives leadership a single command surface across every system they use: GSuite (email, calendar), Slack, Power BI, Fireflies, and more. Priority alerts, meeting briefs, spend reports, and post-call summaries are delivered automatically every morning or triggered on demand, without switching tools or assembling context manually.",
  },
  {
    type: "paragraph",
    text: "The system knows the business: the people, the accounts, the processes, and the guardrails.",
  },
  { type: "heading", text: "Modular Agent Architecture", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "Built on Claude and Claude Cowork, the solution uses purpose-built agents each scoped strictly to the tools they require, keeping the system fast, accurate, and secure. New workflows and agents can be added as the business grows with no rebuild required.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "Several skills were published across the organisation to give context and functionality to all domains and employees in teams.",
  },
  { type: "heading", text: "Technologies" },
  {
    type: "paragraph",
    text: "Anthropic Claude, Claude Cowork, Slack, GSuite, Microsoft 365, Monday, QBO, and Fireflies.",
  },
];

export default function CircularEconomyPlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([caseStudySchema, breadcrumbSchema]),
        }}
      />
      <CaseStudyPage
        slug="circular-economy-platform"
        caseLabel="Circular Economy"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work/" },
          { label: "Major Supplier — Executive Productivity" },
        ]}
        eyebrow="CASE STUDY · REVERSE LOGISTICS · ELECTRONICS · GLOBAL"
        h1="AI-Powered Executive Productivity Suite"
        subhead="Major Supplier in Electronic Reverse Logistics"
        tagPills={[
          "Executive Enablement",
          "Claude Cowork",
          "Custom Plugin",
          "Multi-System Integration",
        ]}
        stats={[
          {
            value: "6+",
            label: "Systems connected into a single command surface",
          },
          {
            value: "Automated",
            label: "Morning briefs, spend reports, and post-call summaries",
          },
          {
            value: "Modular",
            label: "Purpose-built agents scoped to specific tools",
          },
          {
            value: "Org-wide",
            label: "Skills published across all domains and teams",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "Major Supplier",
            meta: "Electronic reverse logistics · Global",
          },
          servicesDelivered: [
            "Executive Productivity Suite",
            "Custom Claude Plugin",
            "Multi-System Integration",
            "Org-Wide Skill Deployment",
          ],
          technology: [
            "Anthropic Claude",
            "Claude Cowork",
            "Slack",
            "GSuite",
            "Microsoft 365",
            "Monday",
            "QBO",
            "Fireflies",
            "Power BI",
          ],
          pullQuote:
            "The gap was not in the data. It was in the effort required to use it. One command surface, every system, every morning.",
        }}
        closingCta={{
          heading:
            "Want to explore what we could build for your leadership team?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
        figure={{
          src: "/our-work/circular-economy-platform-msi-concept.webp",
          alt: "Architecture diagram showing the custom Claude plugin connecting isolated agents to business tools",
          caption: "Figure 1 — Plugin architecture: isolated agents connected to business systems (illustrative).",
        }}
      />
    </>
  );
}
