import type { Metadata } from "next";
import {
  CaseStudyPage,
  type BodySection,
} from "@/components/case-study-page";

export const metadata: Metadata = {
  title: "Restaurant Group - AI Scheduling Agent",
  description:
    "AI scheduling agent for a multi-location restaurant group. Full shift schedules with employee constraints baked in, WhatsApp-native distribution, and mid-week cancellation logic.",
  alternates: {
    canonical: "/our-work/restaurant-scheduling-agent/",
  },
  openGraph: {
    type: "article",
    title: "Restaurant Group - AI Scheduling Agent",
    description:
      "AI scheduling agent that returns manager hours every week. Constraints baked in at ship time, WhatsApp distribution, and same-day replacement fills.",
    url: "/our-work/restaurant-scheduling-agent/",
    images: [
      {
        url: "/og/our-work-restaurant-scheduling-agent.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Restaurant Group - AI Scheduling Agent",
      },
    ],
  },
  twitter: {
    title: "Restaurant Group - AI Scheduling Agent",
    description:
      "AI scheduling agent that returns manager hours every week. Constraints baked in at ship time, WhatsApp distribution, and same-day replacement fills.",
    images: ["/og/our-work-restaurant-scheduling-agent.png"],
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Restaurant Group - AI Scheduling Agent",
  description:
    "How Alphabyte built an AI scheduling agent for a multi-location restaurant group, generating full shift schedules with employee constraints baked in, WhatsApp-native distribution, and mid-week replacement logic across three shipped iterations.",
  url: "https://alphabyte.ai/our-work/restaurant-scheduling-agent/",
  image: "https://alphabyte.ai/our-work/restaurant-scheduling-agent-hero.webp",
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
  articleSection: "Case Studies",
  keywords: [
    "AI scheduling agent",
    "restaurant scheduling",
    "workforce automation",
    "WhatsApp integration",
    "Claude agent",
    "multi-location operations",
    "hospitality AI",
  ],
  author: {
    "@id": "https://alphabyte.ai/#organization",
  },
  publisher: {
    "@id": "https://alphabyte.ai/#organization",
  },
  about: {
    "@type": "Service",
    name: "AI Scheduling Agent Development",
    provider: { "@id": "https://alphabyte.ai/#organization" },
  },
  isPartOf: {
    "@id": "https://alphabyte.ai/#website",
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
      name: "Restaurant Group: AI Scheduling Agent",
      item: "https://alphabyte.ai/our-work/restaurant-scheduling-agent/",
    },
  ],
};

const bodySections: BodySection[] = [
  { type: "heading", text: "Background" },
  {
    type: "paragraph",
    text: "A restaurant group operating four locations with 20 to 30 floor staff per location came to Alphabyte with a straightforward problem: scheduling was eating manager time every single week. High churn, frequent callouts, and shifting availability meant every scheduling cycle started close to scratch. Constraints had to be re-entered, conflicts resolved manually, and replacements found by phone when someone dropped a shift mid-week.",
  },
  {
    type: "paragraph",
    text: "The operator had the data. They had the staff profiles. What they lacked was a system that could put it together without a manager spending hours on it.",
  },
  { type: "heading", text: "The Challenge", indent: true },
  {
    type: "paragraph",
    indent: true,
    text: "Restaurant scheduling looks simple from the outside. In practice, it sits at the intersection of labor law, employee preferences, availability windows, role certifications, seniority, and last-minute changes. A manager juggling all of that across 20 to 30 people per location, four days out, for four locations is doing a job that compounds quickly.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "The cost showed up in two ways. First, manager time: hours each week spent building schedules that could have been spent on the floor. Second, replacement quality: when someone cancelled mid-week, the replacement call went to whoever picked up, not necessarily the right fit for that shift.",
  },
  {
    type: "paragraph",
    indent: true,
    text: "Generic scheduling tools could automate the output but not the reasoning. They could not weigh employee history, account for mid-week disruptions automatically, or communicate directly with staff. Every exception still landed in a manager's inbox.",
  },
  { type: "heading", text: "Solution" },
  {
    type: "paragraph",
    text: "Alphabyte built a scheduling agent that generates complete shift schedules with every employee constraint baked in from the start. The manager triggers the schedule, the agent runs, and a full draft comes back with conflicts already resolved.",
  },
  {
    type: "paragraph",
    text: "The system was designed to improve across three iterations, each one closing a gap the previous version left open.",
  },
  {
    type: "paragraph",
    text: "v1 gave managers a generated schedule on demand. Constraints were applied automatically. Staff feedback came back manually, and the manager handled it from there.",
  },
  {
    type: "paragraph",
    text: "v2 closed the feedback loop. The agent handled incoming responses from staff directly, flagging only genuine exceptions for the manager. The manager stopped being the communication hub.",
  },
  {
    type: "paragraph",
    text: "v3 added mid-week cancellation logic. When a staff member dropped a shift, the agent identified the right replacement based on enriched employee profiles such as availability, role fit, and history, and filled the gap on the first try. The distribution happened through WhatsApp, where staff already communicated.",
  },
  {
    type: "callout",
    text: "The result: managers approve exceptions. The agent handles everything else.",
  },
];

export default function RestaurantSchedulingAgentPage() {
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
          { label: "Restaurant Group: AI Scheduling Agent" },
        ]}
        eyebrow="CASE STUDY · RESTAURANT · MULTI-LOCATION · NORTH AMERICA"
        h1="AI-Powered Scheduling Agent"
        subhead="Multi-Location Restaurant Group"
        tagPills={[
          "Claude AI Agent",
          "Scheduling",
          "Workforce Automation",
          "WhatsApp Integration",
        ]}
        stats={[
          {
            value: "Manager hours",
            label: "Returned to the floor every week",
          },
          {
            value: "4 locations",
            label: "80 to 120 floor staff covered",
          },
          {
            value: "3 iterations",
            label: "Each shipped tighter than the last",
          },
          {
            value: "Same staff",
            label: "Scaled to more locations without hiring schedulers",
          },
        ]}
        body={bodySections}
        sidebar={{
          client: {
            name: "Multi-Location Restaurant Group",
            meta: "Restaurant · Hospitality · North America",
          },
          servicesDelivered: [
            "AI Solutions Discovery",
            "Scheduling Agent Development",
            "WhatsApp Integration",
            "Employee Profile Architecture",
            "Iterative Deployment (v1 to v3)",
          ],
          technology: [
            "Anthropic Claude",
            "Custom Scheduling Agent",
            "WhatsApp API",
            "Employee Profile System",
          ],
          pullQuote:
            "Manager hours returned every week. Same staff scaled to more locations without hiring schedulers. Employee constraints accounted for at ship time.",
        }}
        figure={{
          src: "/our-work/restaurant-scheduling-agent-hero.webp",
          alt: "AI scheduling agent flow: WhatsApp messages, employee profiles, and shift rules feed the engine that returns a distributed schedule with an automatic feedback loop",
          caption: "Figure 1. The scheduling agent flow: WhatsApp messages, employee profiles, and shift rules feed the engine. The output is a distributed schedule with feedback captured automatically.",
        }}
        closingCta={{
          heading: "Want to explore what we could build for your operations?",
          subhead: "45 minutes. No cost. No obligation.",
          cta: { label: "Book a Discovery Call", action: "modal" },
        }}
      />
    </>
  );
}
