import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Citizen Development — AI for Every Employee",
  description:
    "Turn informal Claude usage into governed capability. Custom SDLC plugin, guardrails scaffolding, enablement workshop, and MCP data connectivity deployed in three to twelve weeks.",
  alternates: {
    canonical: "/services/citizen-development/",
  },
  openGraph: {
    title: "Citizen Development — AI for Every Employee",
    description:
      "Turn informal Claude usage into governed capability. SDLC plugin, guardrails, and MCP connectivity deployed in weeks.",
    url: "/services/citizen-development/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Citizen Development: AI for Every Employee",
      },
    ],
  },
  twitter: {
    title: "Citizen Development — AI for Every Employee",
    description:
      "Turn informal Claude usage into governed capability. SDLC plugin, guardrails, and MCP connectivity deployed in weeks.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Citizen Development",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
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

export default function CitizenDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema]),
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
        subhead="Every employee, now an AI developer."
        body={[
          "The technology is finally ready. Claude \u2014 combined with Projects, Skills, Model Context Protocol, and Claude Code \u2014 means any employee who can describe their work can now build applications, automate workflows, and query live operational data against real systems. Without a software engineering background.",
          "Your team is already building. Someone automated a workflow on her laptop that saves three hours a week. A sales coordinator built a tool nobody else can use. None of it is governed. None of it scales. Citizen Development installs the infrastructure that changes that \u2014 and connects it to your live operational data.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all services", href: "/services/" }}
        stats={[
          {
            value: "Week 3",
            label:
              "Most clients have something running by production.",
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
              body: "Discovery and design \u2014 we talk to the people doing the actual work, find out what they have already built, and design the SDLC plugin and guardrails architecture around what we find. Not a template.",
            },
            {
              label: "Week 2",
              body: "Build and configure \u2014 we build the custom SDLC plugin with four to five purpose-built skills, configure the guardrails scaffolding, and connect the governed data layer through MCP.",
            },
            {
              label: "Week 3",
              body: "Deploy and enable \u2014 the plugin goes live in your Claude Teams environment. We run the hands-on enablement workshop. Every participant builds something on their own laptop. Recorded for future team members.",
            },
          ],
          dayThirty: {
            label: "Day 30 \u2014 what you have",
            body: "A governed Claude environment deployed across your team. Every authorized employee working from the same standardized starting point. Live data connectivity through MCP. A graduation path for moving proven applications into production. Your team actually using it.",
          },
        }}
        deliverables={[
          {
            icon: "\ud83d\udd0d",
            title: "Workflow and capability discovery",
            body: "Direct conversations with the people doing the real work \u2014 finding what each person owns, what they have already built, and where the highest-value automation opportunities are.",
          },
          {
            icon: "\ud83d\udcbb",
            title: "Custom SDLC plugin",
            body: "Four to five purpose-built Claude skills standardizing how any employee begins a new project. Published once to your Claude Teams environment, available to every authorized user.",
          },
          {
            icon: "\ud83c\udf93",
            title: "Enablement workshop",
            body: "Hands-on session \u2014 every participant builds something on their own laptop. Not a slide presentation about AI potential. Recorded for future team members and onboarding.",
          },
          {
            icon: "\ud83d\udccb",
            title: "Context engineering templates",
            body: "CLAUDE.md files, project-level context structure patterns, and proven approaches to instructing Claude effectively. Every citizen developer builds on a shared foundation.",
          },
          {
            icon: "\ud83d\udee1\ufe0f",
            title: "Guardrails scaffolding",
            body: "Branch protection, required review on Claude-generated pull requests, per-project sandbox environments, and least-privilege data access. Built before anyone starts building.",
          },
          {
            icon: "\ud83d\udd17",
            title: "Governed data connectivity via MCP",
            body: "Your team builds against real operational data, not exports. Custom MCP servers with governed access, role-based permissions, and full audit logging.",
          },
          {
            icon: "\ud83c\udf93",
            title: "Graduation playbook",
            body: "A documented path for moving a proven citizen developer application from the R&D stack into full production on GCR, AWS, or Azure.",
          },
          {
            icon: "\ud83d\udd27",
            title: "Hypercare support",
            body: "Dedicated channel, weekly sync calls, prompt bug resolution, and skills iteration based on observed usage. We stay on until it\u2019s running reliably.",
          },
        ]}
        rightForYou={[
          "Your team is already using Claude informally and you need governance before the sprawl becomes a liability",
          "You want every employee operating at the level of your best AI user \u2014 not just the ones who figured it out themselves",
          "You want to multiply workforce output without waiting six months for a top-down deployment",
          "You are ready to connect your team\u2019s AI capability to live operational data through MCP",
        ]}
        notRightForYou={[
          "Your organization has fewer than five people who could realistically use a Claude-based development environment",
          "Your data environment has not been stabilized \u2014 we will find the gaps in week one, and the engagement requires addressing them",
          "You are looking for a pilot with no defined governance or production path \u2014 we do not deliver proofs of concept that are not designed to ship",
        ]}
        timeline="3 to 12 weeks from kickoff depending on delivery tier"
      />
    </>
  );
}
