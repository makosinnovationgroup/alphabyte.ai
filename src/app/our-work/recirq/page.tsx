import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "RecirQ — AI Productivity & Auction Analytics",
  description:
    "How Alphabyte built two parallel AI programmes for RecirQ — an executive productivity suite and an auction analytics platform with predictive bid models.",
  alternates: {
    canonical: "/our-work/recirq/",
  },
  openGraph: {
    title: "RecirQ — AI Productivity & Auction Analytics",
    description:
      "Two parallel AI programmes — executive intelligence and auction analytics — built for a circular economy company.",
    url: "/our-work/recirq/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — RecirQ: AI Productivity & Auction Analytics",
      },
    ],
  },
  twitter: {
    title: "RecirQ — AI Productivity & Auction Analytics",
    description:
      "Two parallel AI programmes — executive intelligence and auction analytics — built for a circular economy company.",
    images: ["/og/default.png"],
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
      name: "RecirQ",
      item: "https://alphabyte.ai/our-work/recirq/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Reventory",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "RecirQ Global is a fast-moving technology and operations company specializing in the purchase and resale of used smartphones through weekly vendor auctions. The company acquires devices, grades them in-house, and resells them \u2014 a model that demands real-time visibility across supply, bidding performance, and sell-through at every level of the operation.",
  },
  {
    type: "paragraph",
    text: "RecirQ had already built a solid analytics foundation and leadership was leveraging AI tools day-to-day. The foundation was there. What was missing was the intelligence layer at the executive level and within the auction operation to make all of it work together and drive faster, more confident decisions.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "RecirQ operates in a market where conditions shift week to week. A new device launch, a trade-in cycle, or a sudden shift in vendor supply can change auction dynamics overnight. The company\u2019s existing tooling was strong at estimating the internal value of a device after re-grading and resale. What it could not do was answer the questions that drive auction outcomes: Is the market flooded or scarce for a specific model this week? At what bid price does the company maximize expected margin while controlling cash outlay?",
  },
  {
    type: "paragraph",
    indent: true,
    text: "At the same time, leadership was managing a high volume of daily decisions across multiple teams and platforms. Critical signals \u2014 credit alerts, operations updates, open commitments, financial spend \u2014 were scattered across Slack, Monday.com, Fireflies, QuickBooks, and calendar systems. There was no unified intelligence layer that surfaced what mattered, when it mattered.",
  },
  { type: "heading", text: "AI-Powered Executive Productivity Suite" },
  {
    type: "paragraph",
    text: "Alphabyte designed and delivered a custom Claude plugin built around how RecirQ\u2019s leadership actually operates. Deployed as a Claude Cworks project, the solution combines a structured knowledge layer with purpose-built agents and on-demand workflows.",
  },
  {
    type: "paragraph",
    text: "Scheduled intelligence runs autonomously: a Daily Brief reads 12+ Slack channels and the day\u2019s calendar to deliver a morning summary, delivering a prioritized summary covering credit live alerts, prepack holds, team activity, and a curated \u201cNeeds Your Attention\u201d list. A Weekly Digest provides a full-work-week rollup. An Ops Report generates every Monday morning from four Monday.com boards. A Call Update monitors new recordings, generates a summary for each, and routes it to the appropriate Slack channel.",
  },
  {
    type: "paragraph",
    text: "On-demand workflows handle high-value commands: Call Prep delivers a one-page pre-meeting brief with talking points pulled from Slack History, transcripts, and calendar records. Meeting Summary produces post-call debriefs with decisions and action items by owner. The Spend Report generates a four-tab Excel workbook from the General Ledger, Amex, and Capital One data. Four isolated agents handle execution, each scoped strictly to the tools it requires.",
  },
  { type: "heading", text: "AI-Driven Auction Analytics Platform" },
  {
    type: "paragraph",
    text: "The second engagement brought AI-powered supply-side intelligence and bid decisioning directly into RecirQ\u2019s auction workflow.",
  },
  {
    type: "paragraph",
    text: "Phase 1 delivered operational visibility through a structured Bronze, Silver, and Gold data environment ingesting over a year of vendor auction data. Two core KPI systems were delivered: the Market Supply Index (MSI), a statistical signal that detects how this week\u2019s listed supply for any given device model, grade, and storage combination compares to the 52-week norm; and the Auction and Bid Performance Suite, a single view per auction showing coverage, win rates, cost per unit, and realization metrics.",
  },
  {
    type: "paragraph",
    text: "Phase 2 extends the platform into machine learning. Three predictive models are in development: a censored quantile model estimating the distribution of winning prices for a given device cohort, a lot-to-win probability curve estimating the probability of winning at any given price, and an optimal bid price band that combines the pricing calculator with the probability model to recommend conservative, base, and aggressive bid levels with associated expected margin, units captured, and cash outlay.",
  },
];

export default function RecirqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <CaseStudyPage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work/" },
          { label: "RecirQ / Reventory" },
        ]}
        eyebrow="CASE STUDY · CIRCULAR ECONOMY · LIVE SMARTWATCH · RETAIL"
        h1="AI-Powered Executive Productivity & Auction Analytics"
        subhead="RecirQ / Reventory"
        tagPills={[
          "Executive Enablement",
          "Citizen Development",
          "Anomaly Analytics",
          "Predictive Bid Station",
          "Citizen Command",
        ]}
        stats={[
          {
            value: "2",
            label: "Parallel AI programmes delivered simultaneously",
          },
          {
            value: "12+",
            label:
              "Slack channels read daily by the executive intelligence agent",
          },
          {
            value: "52-week",
            label:
              "Market supply baseline powering the auction analytics platform",
          },
          {
            value: "Phase 2",
            label:
              "Predictive bid decomposition models in active R&D",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "RecirQ / Reventory",
            meta: "Circular economy \u00b7 Used smartphones \u00b7 Retail",
          },
          servicesDelivered: [
            "Executive Productivity Suite",
            "Citizen Dev Enablement",
            "Data Architecture (Bronze/Silver/Gold)",
            "Auction Analytics Platform",
            "Market Supply Index (MSI)",
            "Predictive Bid Decisioning (Phase 2)",
          ],
          technology: [
            "Claude (Anthropic)",
            "Claude Cworks",
            "Google BigQuery",
            "Slack API",
            "Monday.com",
            "Fireflies",
          ],
          pullQuote:
            "Two parallel AI programmes \u2014 executive intelligence and auction analytics \u2014 each communicating on a shared data architecture.",
        }}
        closingCta={{
          heading:
            "Want to explore what we could build for your operations?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
      />
    </>
  );
}
