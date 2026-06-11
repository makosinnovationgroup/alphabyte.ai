import type { Metadata } from "next";
import { Search, Monitor, GraduationCap, ClipboardList, Shield, Link2, Wrench } from "lucide-react";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Citizen Development - AI for Every Employee",
  description:
    "Turn informal Claude usage into governed capability. SDLC plugin, guardrails, enablement workshop, and MCP connectivity deployed in three to twelve weeks.",
  alternates: {
    canonical: "/services/citizen-development/",
  },
  openGraph: {
    type: "website",
    title: "Citizen Development - AI for Every Employee",
    description:
      "Turn informal Claude usage into governed capability. SDLC plugin, guardrails, and MCP connectivity deployed in weeks.",
    url: "/services/citizen-development/",
    images: [
      {
        url: "/og/services-citizen-development.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Citizen Development - AI for Every Employee",
      },
    ],
  },
  twitter: {
    title: "Citizen Development - AI for Every Employee",
    description:
      "Turn informal Claude usage into governed capability. SDLC plugin, guardrails, and MCP connectivity deployed in weeks.",
    images: ["/og/services-citizen-development.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Citizen Development",
  provider: {
    "@id": "https://alphabyte.ai/#organization",
  },
  serviceType: "AI Citizen Development Consulting",
  description:
    "Custom SDLC plugin, guardrails scaffolding, enablement workshop, and governed MCP data connectivity. Every employee building with Claude from a standardized, governed starting point.",
  areaServed: {
    "@type": "Place",
    name: "North America",
  },
  url: "https://alphabyte.ai/services/citizen-development/",
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
      name: "Services",
      item: "https://alphabyte.ai/services/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Citizen Development",
      item: "https://alphabyte.ai/services/citizen-development/",
    },
  ],
};

const faq = [
  {
    question: "What is citizen developer enablement with Claude?",
    answer: "A governed path for non-engineers to build working tools using natural language against live operational data. Claude provides the reasoning layer, MCP servers connect to your systems, and an SDLC plugin enforces governance. It is not low-code drag-and-drop. There is no ceiling on what your team can build.",
  },
  {
    question: "How long does it take to get the first tool into production?",
    answer: "Most clients have something running by week three. The governed environment is configured in week two, and the enablement workshop in week three gets your team building immediately. Full programme deployment is three to twelve weeks depending on scope and team size.",
  },
  {
    question: "What governance is built into the environment?",
    answer: "Every environment ships with an SDLC plugin enforcing review and versioning, branch protection on Claude-generated code, per-project sandbox environments, least-privilege data access via MCP, and full audit logging on every tool invocation.",
  },
  {
    question: "Do employees need technical skills to use this?",
    answer: "No. Employees describe their work in plain English. Claude builds the tool. The governed environment catches mistakes. The people who know the work build the tools. They do not need to write code.",
  },
  {
    question: "What happens after the engagement ends?",
    answer: "You receive a graduation playbook with a documented path to production, hypercare support with a dedicated channel and weekly syncs, and your team runs the environment independently. We stay on until it is running reliably.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: { "@type": "Answer", text: entry.answer },
  })),
};

export default function CitizenDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <ServicePage
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Citizen Development" },
        ]}
        eyebrow="Services · Flagship Offering"
        h1="Citizen Development"
        subhead="Every employee, now a developer."
        body={[
          "Modern AI tools, including Claude, Projects, Skills, Model Context Protocol, and Claude Code, mean any employee who can describe their work can now build applications, automate workflows, and query live operational data against real systems. Without a software engineering background.",
          "Your team is already building. Someone automated a workflow on her laptop that saves three hours a week. A sales coordinator built a tool nobody else can use. None of it is governed. None of it scales. Citizen Development installs the infrastructure that changes that and connects it to your live operational data.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all services", href: "/services/" }}
        stats={[
          {
            value: "Week 3",
            label:
              "Most clients have something running in production",
          },
          {
            value: "2 to 12 weeks",
            label:
              "Depending on scope and team size",
          },
          {
            value: "Flagship",
            label:
              "Our most-delivered, highest-return offering",
          },
        ]}
        thirtyDays={{
          weeks: [
            {
              label: "Week 1",
              body: "Discovery and design. We talk to the people doing the actual work, find out what they have already built, and design the SDLC plugin and guardrails architecture around what we find. Not a template.",
            },
            {
              label: "Week 2",
              body: "Build and configure. We build the custom SDLC plugin with four to five purpose-built skills, configure the guardrails scaffolding, and connect the governed data layer through MCP.",
            },
            {
              label: "Week 3",
              body: "Deploy and enable. The plugin goes live in your AI environment. We run the hands-on enablement workshop. Every participant builds something on their own laptop. Recorded for future team members.",
            },
          ],
          dayThirty: {
            label: "Day 30: what you have",
            body: "A governed AI environment deployed across your team. Every authorized employee working from the same standardized starting point. Live data connectivity through MCP. A graduation path for moving proven applications into production. Your team actually using it.",
          },
        }}
        deliverables={[
          {
            icon: <Search className="h-5 w-5" />,
            title: "Workflow and capability discovery",
            body: "Direct conversations with the people doing the real work, finding what each person owns, what they have already built, and where the highest-value automation opportunities are.",
          },
          {
            icon: <Monitor className="h-5 w-5" />,
            title: "Custom SDLC plugin",
            body: "Four to five purpose-built skills standardizing how any employee begins a new project. Published once to your AI environment, available to every authorized user.",
          },
          {
            icon: <GraduationCap className="h-5 w-5" />,
            title: "Enablement workshop",
            body: "Hands-on session where every participant builds something on their own laptop. Recorded for future team members and onboarding.",
          },
          {
            icon: <ClipboardList className="h-5 w-5" />,
            title: "Context engineering templates",
            body: "Project context files, structure patterns, and proven approaches to instructing AI effectively. Every citizen developer builds on a shared foundation.",
          },
          {
            icon: <Shield className="h-5 w-5" />,
            title: "Guardrails scaffolding",
            body: "Branch protection, required review on AI-generated pull requests, per-project sandbox environments, and least-privilege data access. Built before anyone starts building.",
          },
          {
            icon: <Link2 className="h-5 w-5" />,
            title: "Governed data connectivity via MCP",
            body: "Your team builds against real operational data, not exports. Custom MCP servers with governed access, role-based permissions, and full audit logging.",
          },
          {
            icon: <GraduationCap className="h-5 w-5" />,
            title: "Graduation playbook",
            body: "A documented path for moving a proven citizen developer application from the R&D stack into full production on GCR, AWS, or Azure.",
          },
          {
            icon: <Wrench className="h-5 w-5" />,
            title: "Hypercare support",
            body: "Dedicated channel, weekly sync calls, prompt bug resolution, and skills iteration based on observed usage. We stay on until it is running reliably.",
          },
        ]}
        rightForYou={[
          "Your team is already using AI informally and you need governance before the sprawl becomes a liability",
          "You want every employee operating at the level of your best AI user, not just the ones who figured it out themselves",
          "You want to multiply workforce output without waiting six months for a top-down deployment",
          "You are ready to connect your team\u2019s AI capability to live operational data through MCP",
        ]}
        notRightForYou={[
          "Your organization has fewer than five people who could realistically use an AI development environment",
          "Your data environment has not been stabilized. We will find the gaps in week one, and the engagement requires addressing them.",
          "You are looking for a pilot with no defined governance or production path. We build proofs of concept that are designed to ship.",
        ]}
        timeline="3 to 12 weeks from kickoff depending on delivery tier"
        faq={faq}
      />
    </>
  );
}
