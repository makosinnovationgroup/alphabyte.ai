import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Community Housing Organisation — AI Enablement",
  description:
    "AI enablement assessment and seven-recommendation roadmap for a community housing infrastructure organisation. Data readiness first, then five purpose-built Claude agents.",
  alternates: {
    canonical: "/our-work/community-housing-organisation/",
  },
  openGraph: {
    title: "Community Housing Organisation — AI Enablement",
    description:
      "AI enablement assessment and seven-recommendation roadmap for a community housing infrastructure organisation.",
    url: "/our-work/community-housing-organisation/",
    images: [
      {
        url: "/og/our-work-community-housing-organisation.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Community Housing Organisation — AI Enablement",
      },
    ],
  },
  twitter: {
    title: "Community Housing Organisation — AI Enablement",
    description:
      "AI enablement assessment and seven-recommendation roadmap for a community housing infrastructure organisation.",
    images: ["/og/our-work-community-housing-organisation.png"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Community Housing Organisation — AI Enablement",
  description:
    "How Alphabyte delivered an AI enablement roadmap for a community housing infrastructure organisation, including a seven-recommendation roadmap from data governance to purpose-built Claude agents.",
  url: "https://alphabyte.ai/our-work/community-housing-organisation/",
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
      name: "Community Housing Organisation",
      item: "https://alphabyte.ai/our-work/community-housing-organisation/",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "A central infrastructure organisation for community housing delivers programmes across insurance, energy management, asset planning, financial services, and performance reporting to a large network of housing providers. The organisation engaged Alphabyte for an end-to-end Data and AI readiness assessment.",
  },
  {
    type: "paragraph",
    text: "What the assessment revealed was that before AI could be responsibly deployed, a foundational layer had to be built first.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "AI cannot operate reliably where data is ungoverned and workflows are undocumented. Deploying AI without foundational work produces outputs that sound confident but cannot be verified or trusted. For an organisation accountable to hundreds of housing providers, that is unacceptable.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "Without this foundation, AI amplifies existing problems rather than solving them. The decision to invest was not about whether AI was worth pursuing. It was about ensuring the investment would actually work.",
  },
  { type: "heading", text: "Solution" },
  {
    type: "paragraph",
    text: "Alphabyte conducted a two-phase assessment and delivered a seven-recommendation roadmap built on one principle: AI enablement is the destination, and data readiness is the path.",
  },
  {
    type: "paragraph",
    text: "The first five recommendations address governance, workflow documentation, a common data model, a shared analytical foundation, and automation. Each is a prerequisite for the next. Together they create the conditions under which AI outputs are trustworthy, auditable, and scalable.",
  },
  {
    type: "paragraph",
    text: "Near-term work is executable within 90 days at low cost and delivers immediate operational value independent of AI.",
  },
  { type: "heading", text: "AI Agent Deployment", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "The final recommendation deploys five purpose-built agents staged by risk and readiness, beginning with knowledge retrieval and expanding into reporting, data preparation, intake validation, and classification.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "Each agent operates within the access controls established in the foundation layer. The staging approach means the organisation can validate each agent against real data before expanding scope.",
  },
];

export default function HousingServicesCorpPage() {
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
          { label: "Community Housing Organisation" },
        ]}
        eyebrow="CASE STUDY · COMMUNITY HOUSING · PUBLIC SECTOR · CANADA"
        h1="AI Enablement: Building the Foundation for an Intelligent Organisation"
        subhead="Community Housing Infrastructure Organisation"
        tagPills={[
          "Data Readiness",
          "AI Enablement",
          "Claude Agents",
          "Governance",
          "Roadmap",
        ]}
        stats={[
          {
            value: "7",
            label: "Recommendations delivered in the roadmap",
          },
          {
            value: "5",
            label: "Purpose-built agents planned, staged by risk and readiness",
          },
          {
            value: "90 days",
            label: "Near-term execution window for foundational work",
          },
          {
            value: "2-phase",
            label: "Assessment covering data, workflows, and AI readiness",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "Community Housing Organisation",
            meta: "Housing infrastructure · Public sector · Canada",
          },
          servicesDelivered: [
            "Data & AI Readiness Assessment",
            "Data Governance Strategy",
            "Workflow Documentation",
            "Common Data Model Design",
            "AI Agent Roadmap",
          ],
          technology: [
            "Anthropic Claude",
            "Data Governance Platform",
            "Shared Analytical Foundation",
            "Automation Tools",
            "Governed Connectors",
          ],
          pullQuote:
            "AI enablement is the destination. Data readiness is the path. Each recommendation is a prerequisite for the next.",
        }}
        closingCta={{
          heading:
            "Want to understand your organisation's AI readiness?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
        figure={{
          src: "/our-work/community-housing-organisation-roadmap-concept.webp",
          alt: "Seven-recommendation AI enablement roadmap from data governance to purpose-built agents",
          caption:
            "Figure 1 — Seven-recommendation roadmap: data readiness as the path to AI enablement.",
        }}
      />
    </>
  );
}
