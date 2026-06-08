import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "DTC E-Commerce Brand - Media Buy Analytics Agent",
  description:
    "AI media buy analytics agent for a DTC e-commerce brand. Power BI MCP server connecting Claude to Microsoft Fabric for self-service analytics.",
  alternates: {
    canonical: "/our-work/media-buy-analytics/",
  },
  openGraph: {
    type: "article",
    title: "DTC E-Commerce Brand - Media Buy Analytics Agent",
    description:
      "AI analytics agent that gives media buyers plain-English access to live Power BI data with auditable, DAX-grounded answers.",
    url: "/our-work/media-buy-analytics/",
    images: [
      {
        url: "/og/our-work-media-buy-analytics.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - DTC E-Commerce Brand - Media Buy Analytics Agent",
      },
    ],
  },
  twitter: {
    title: "DTC E-Commerce Brand - Media Buy Analytics Agent",
    description:
      "AI analytics agent that gives media buyers plain-English access to live Power BI data with auditable, DAX-grounded answers.",
    images: ["/og/our-work-media-buy-analytics.png"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "DTC E-Commerce Brand - Media Buy Analytics Agent",
  description:
    "How Alphabyte built an AI-powered media buy analytics agent using a custom Power BI MCP server, connecting Claude directly to Microsoft Fabric for self-service media spend analytics.",
  url: "https://alphabyte.ai/our-work/media-buy-analytics/",
  author: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  about: {
    "@type": "Service",
    name: "AI Media Buy Analytics",
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
      name: "DTC E-Commerce Brand — Media Buy Analytics Agent",
      item: "https://alphabyte.ai/our-work/media-buy-analytics/",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "A direct-to-consumer e-commerce brand operating across multiple product lines and paid channels had invested heavily in their reporting stack. A Power BI semantic model unified attribution data from Meta, Google, TikTok, AppLovin, YouTube, Microsoft, affiliate, and organic sources into a single Media Buy Report covering hundreds of thousands of orders and tens of thousands of ads. Dashboards were in place, refreshes were running, and the marketing team had visibility into the headline metrics every morning.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "Dashboards answer the questions the team already knew to ask. Media buying does not work that way. With hundreds of campaigns and ads in flight at any given time, the questions that actually move spend are open-ended: which creatives are profitable on a contribution-margin basis, where did the budget shift between channels last week, why did this month's ROAS drop, which ads should be killed and which scaled.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "Each of those questions required a media buyer to pull an analyst, wait for someone to write the DAX, validate the result, and reformat it into something they could act on. By the time the answer came back, the spend decision had already been made.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "The dashboards showed the what. They did not show the why. Generic AI tools could not bridge the gap because they cannot reach into a governed Fabric workspace, cannot reason about a tabular model's measures and relationships, and cannot validate a query against live data. Pasting screenshots into a chat returned plausible-sounding answers that could not be trusted for a multi-million-dollar spend decision.",
  },
  { type: "heading", text: "Solution" },
  {
    type: "paragraph",
    text: "Alphabyte built a Power BI MCP server that connects Claude directly to the client's Microsoft Fabric workspaces and semantic models. The result is a self-service analytics agent that sits next to every media buyer. They ask a plain-English question and receive an auditable, source-grounded answer with the underlying measures and filters surfaced inline so the result can be trusted and explained.",
  },
  {
    type: "paragraph",
    text: "Media buyers now interrogate the data the same way they think about it: which ads are profitable on a contribution basis after factoring in cost of goods, which creative attributes are driving winners, where spend is concentrated and whether that concentration is paying off, why a specific campaign's net ROAS dropped between weeks, and which channels are quietly losing money behind a healthy-looking gross ROAS. The agent runs the queries live against the model, returns the result in seconds, and shows the DAX so the team can verify and learn.",
  },
  {
    type: "callout",
    text: "Decisions that previously required an analyst loop now happen inside the buyer's own working session, and the questions the team can ask have expanded to match the depth of the data.",
  },
  { type: "heading", text: "BI Model Health as a Secondary Benefit", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "The same MCP server gives BI developers a structured way to audit the semantic model end-to-end, surfacing design issues such as auto date/time bloat, missing sort-by columns, mislabelled measures, redundant logic, fragile averaging patterns, and suboptimal relationships, with concrete remediation steps.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "As the analytics agent flushes out edge cases and exposes places where measures behave unexpectedly, those findings flow back into a healthier, more trustworthy model over time.",
  },
  { type: "heading", text: "Built for Any Semantic Model" },
  {
    type: "paragraph",
    text: "Built on Claude and Claude Cowork, the MCP server is model-agnostic and applies to any Power BI or Fabric semantic model in the client's tenant. Once connected, the same agent can be pointed at finance models, operations cubes, and sales pipelines without any additional development. New workflows can be layered on top, including scheduled performance briefs, anomaly alerts, and creative-level pacing reports, with no rebuild required.",
  },
];

export default function MediaBuyAnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([caseStudySchema, breadcrumbSchema]),
        }}
      />
      <CaseStudyPage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work/" },
          { label: "DTC E-Commerce Brand — Media Buy Analytics Agent" },
        ]}
        eyebrow="CASE STUDY · DTC E-COMMERCE · PAID MEDIA · NORTH AMERICA"
        h1="AI-Powered Media Buy Analytics Agent"
        subhead="DTC E-Commerce Brand"
        tagPills={[
          "Claude AI Agent",
          "Custom MCP Server",
          "Power BI",
          "Microsoft Fabric",
          "Claude Cowork",
        ]}
        stats={[
          {
            value: "Self-service",
            label: "Media buyers ask plain-English questions against live data",
          },
          {
            value: "Auditable",
            label: "Every answer shows the underlying DAX for verification",
          },
          {
            value: "Model-agnostic",
            label: "Same agent works across any Power BI semantic model",
          },
          {
            value: "Live",
            label: "Analytics agent in active production use",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "DTC E-Commerce Brand",
            meta: "E-Commerce · Paid Media · North America",
          },
          servicesDelivered: [
            "Custom MCP Server Development",
            "Power BI Semantic Model Integration",
            "Claude Agent Development",
            "BI Model Audit Tooling",
            "Team Deployment",
          ],
          technology: [
            "Anthropic Claude",
            "Claude Cowork",
            "Custom Power BI MCP Server",
            "Microsoft Fabric",
            "Power BI Semantic Models",
            "DAX",
          ],
          pullQuote:
            "They ask a plain-English question and receive an auditable, source-grounded answer in seconds. The questions the team can ask have expanded to match the depth of the data.",
        }}
        figure={{
          src: "/our-work/media-buy-analytics-hero.webp",
          alt: "AI-powered media buy analytics agent returning a ranked profitability table with underlying DAX from a plain-English query",
          caption: "Figure 1 — A media buyer asks a plain-English question and receives an auditable, DAX-grounded answer in seconds.",
        }}
        closingCta={{
          heading:
            "Want to explore what we could build for your analytics environment?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
      />
    </>
  );
}
