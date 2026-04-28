import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";

export const metadata: Metadata = {
  title: "Executive Enablement — AI for Leadership Teams",
  description:
    "Custom Claude environment for your leadership team in two to four weeks. Knowledgebases, skills libraries, and prompt toolkits built from your operational data.",
  alternates: {
    canonical: "/services/executive-enablement/",
  },
  openGraph: {
    title: "Executive Enablement — AI for Leadership Teams",
    description:
      "Custom Claude environment for your leadership team in two to four weeks. Built from your operational data.",
    url: "/services/executive-enablement/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Executive Enablement: AI for Leadership Teams",
      },
    ],
  },
  twitter: {
    title: "Executive Enablement — AI for Leadership Teams",
    description:
      "Custom Claude environment for your leadership team in two to four weeks. Built from your operational data.",
    images: ["/og/default.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Executive Enablement",
  provider: {
    "@type": "Organization",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
  serviceType: "Executive AI Enablement Consulting",
  description:
    "Custom Claude environment for your leadership team in two to four weeks. Knowledgebases, skills libraries, and prompt toolkits built from your operational data.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  url: "https://alphabyte.ai/services/executive-enablement/",
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
      name: "Executive Enablement",
      item: "https://alphabyte.ai/services/executive-enablement/",
    },
  ],
};

export default function ExecutiveEnablementPage() {
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
          { label: "Executive Enablement" },
        ]}
        eyebrow="Services · Executive Enablement"
        h1="Executive Enablement"
        subhead="A fast, visible AI win for your leadership team."
        body={[
          "Executives do not need a generic AI tool. They need a Claude environment that understands their business \u2014 populated with the operational data they actually work from, equipped with skills that automate the specific workflows on their leadership calendar, and configured so that each functional leader gets a differentiated experience.",
          "We deliver that in two to four weeks. Most clients see measurable time savings in the first sprint. And because the CFO and COO are actively using it, it becomes significantly easier to resource the broader programme that follows.",
        ]}
        primaryCta={{ label: "Book a Discovery Call", action: "modal" }}
        secondaryCta={{ label: "Back to all services", href: "/services/" }}
        stats={[
          {
            value: "2 to 4 weeks",
            label:
              "From kickoff to a live Claude environment for your leadership team",
          },
          {
            value: "Day 1",
            label:
              "Executives using Claude against their actual operational data",
          },
          {
            value: "Fast win",
            label:
              "The internal proof point that makes the broader programme easy to resource",
          },
        ]}
        thirtyDays={{
          weeks: [
            {
              label: "Week 1",
              body: "Executive workflow discovery \u2014 one-on-one sessions with each leader. We map the highest-frequency workflows on their calendar and identify the specific interventions most likely to produce measurable time savings.",
            },
            {
              label: "Week 2",
              body: "Build \u2014 we ingest your organizational data into structured Claude knowledgebases, build the custom skills surfaced during discovery, and configure the Claude Teams environment with domain-level context arbitration for each functional leader.",
            },
            {
              label: "Weeks 3 to 4",
              body: "Deploy and transfer \u2014 the environment goes live. We run a hands-on knowledge transfer session with the full executive cohort. Every participant leaves the session using what we built. Recorded for onboarding of future executives.",
            },
          ],
          dayThirty: {
            label: "Day 30",
            body: "A live Claude environment used by your entire leadership team, built from your actual operational data, with measurable productivity gains visible in the first sprint. The internal proof point that makes the broader programme significantly easier to resource.",
          },
        }}
        deliverables={[
          {
            icon: "\ud83d\udd0d",
            title: "Executive workflow discovery",
            body: "One-on-one sessions with each leader on the team \u2014 mapping the highest-frequency workflows on their calendar and identifying the specific interventions most likely to save measurable time.",
          },
          {
            icon: "\ud83d\udcda",
            title: "Custom knowledgebases",
            body: "Your policies, SOPs, strategic documents, board materials, and product data ingested into a structured Claude Project each executive works from daily. Claude understands your business before the conversation starts.",
          },
          {
            icon: "\u26a1",
            title: "Custom skills library",
            body: "Claude Skills that automate the workflows surfaced during discovery \u2014 report generation, data parsing, strategic analysis, board preparation. Built for your executives, not recycled from another client.",
          },
          {
            icon: "\ud83d\udcac",
            title: "Prompt toolkit",
            body: "A curated library structured around the patterns of thought your leadership team uses when working through real business problems. Tested against your actual data. Refined during knowledge transfer.",
          },
          {
            icon: "\ud83d\udd27",
            title: "Claude Teams configuration",
            body: "Domain-level context arbitration producing a differentiated experience for each functional leader. The CFO\u2019s environment and the COO\u2019s draw from the same foundation but surface different data and skills.",
          },
          {
            icon: "\ud83c\udf93",
            title: "Knowledge transfer session",
            body: "Hands-on session for the full executive cohort, recorded for future reference and for the onboarding of new executives. Your team leaves knowing how to use what we built \u2014 and how to extend it.",
          },
        ]}
        rightForYou={[
          "Leadership wants a concrete AI win they can point to while the broader programme gets resourced",
          "Your leadership team wants to understand AI by using it \u2014 not by sitting through presentations",
          "You want the executive team enabled before rolling out citizen development to the wider workforce",
          "Your board is asking what the return on AI investment looks like and you need something to show them",
        ]}
        notRightForYou={[
          "Your executive team is not prepared to engage with a new tool actively \u2014 the environment requires use to produce value",
          "You are expecting a one-size-fits-all environment \u2014 the value is in the customisation, which requires time from your executives in week one",
        ]}
        timeline="2 to 4 weeks from kickoff"
      />
    </>
  );
}
