import type { Metadata } from "next";
import {
  Chevron,
  EyebrowChip,
  HardRule,
  HexgridSection,
  MonoIsh,
  SectionLabel,
  TrackTable,
  TypedHero,
  type Track,
} from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

const tracks: Track[] = [
  {
    label: "Citizen Dev",
    flagship: true,
    question: "How do our people use AI?",
    heading: "Citizen Dev",
    body: "Governed Claude environment, SDLC tooling, and guardrails \u2014 deployed against the workflows your team already owns. From informal usage to a managed, compounding capability. Most clients have something running in week three.",
    rightForYou:
      "Your team is using Claude informally, or you want every employee operating as an AI developer.",
    cta: { label: "Get started \u2192", href: "/services/citizen-development/" },
    pills: [
      "Custom SDLC Plugin",
      "Knowledgebases & Skills",
      "Guardrails Framework",
      "Governed Data via MCP",
    ],
    timeline: "3 to 12 weeks",
  },
  {
    label: "Executive Enablement",
    question: "How do our people use AI?",
    heading: "Executive Enablement",
    body: "A custom Claude environment built from your actual operational data \u2014 knowledgebases, skills, prompt toolkit. Most executives see measurable time savings in the first sprint. The internal proof point that makes the broader programme easy to resource.",
    rightForYou:
      "Leadership wants a concrete AI win before a board meeting or a broader rollout.",
    cta: { label: "Get started \u2192", href: "/services/executive-enablement/" },
    pills: [
      "Custom Knowledgebases",
      "Custom Skills Library",
      "Prompt Toolkit",
      "Claude Teams Configuration",
      "Knowledge Transfer Session",
    ],
    timeline: "2 to 4 weeks",
  },
  {
    label: "Discovery",
    question: "What should our AI strategy be?",
    heading: "Discovery",
    body: "Four weeks, not six months. We come in with a point of view, not a blank whiteboard. Stakeholder workshops, use case prioritization, gap analysis, and a roadmap you leave with.",
    rightForYou:
      "You have not made a meaningful AI investment yet and want to know where to start without wasting the next six months.",
    cta: { label: "Get started \u2192", href: "/services/discovery/" },
    pills: [
      "Stakeholder Sessions",
      "Use Case Development \u00d73",
      "Gap Analysis",
      "Findings & Roadmap",
    ],
    timeline: "3 to 5 weeks",
  },
  {
    label: "Data Readiness",
    question: "Is our data ready for AI?",
    heading: "Data Readiness",
    body: "Most AI projects fail because nobody validated the data underneath before the build started. Data quality audit, governance assessment, AI readiness scorecard, and a remediation pathway.",
    rightForYou:
      "You are in a regulated industry and data compliance is a hard prerequisite to any AI deployment.",
    cta: { label: "Get started \u2192", href: "/services/data-readiness/" },
    pills: [
      "Data Quality Audit",
      "Governance Assessment",
      "AI Readiness Scorecard",
      "Remediation Pathway",
    ],
    timeline: "4 to 8 weeks",
  },
  {
    label: "Infrastructure",
    question: "How do our systems use AI?",
    heading: "Infrastructure",
    body: "Where Claude stops being a productivity tool and starts being an operational capability connected to your systems. Custom MCP servers, autonomous agents, on-premise LLMs, fine-tuned models.",
    rightForYou:
      "Your team is enabled and data is validated \u2014 ready to connect AI to live operational systems.",
    cta: { label: "Get started \u2192", href: "/services/infrastructure/" },
    pills: [
      "Custom MCP Servers",
      "Custom AI Agents",
      "Agent Command Centre",
      "On-Premise LLM",
      "Fine-Tuned LLMs",
    ],
    timeline: "4 to 36 weeks",
  },
];

export const metadata: Metadata = {
  title: "Services - AI & Data Consulting",
  description:
    "Five AI consulting services for mid-market organizations. Start where your situation actually is — citizen dev, executive enablement, discovery, and more.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Services - AI & Data Consulting",
    description:
      "Five AI consulting services for mid-market organizations. Start where your situation actually is.",
    url: "/services/",
    images: [
      {
        url: "/og/services.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Services - AI & Data Consulting",
      },
    ],
  },
  twitter: {
    title: "Services - AI & Data Consulting",
    description:
      "Five AI consulting services for mid-market organizations. Start where your situation actually is.",
    images: ["/og/services.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Consulting Services for Mid-Market Organizations",
  description:
    "Five AI consulting services for mid-market organizations. Start where your situation actually is.",
  url: "https://alphabyte.ai/services/",
  isPartOf: { "@id": "https://alphabyte.ai/#website" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabyte.ai/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://alphabyte.ai/services/" },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, breadcrumbSchema]),
        }}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / INDEX / SERVICES" />

          <div className="max-w-[60ch]">
            <div className="mb-7">
              <EyebrowChip>Services &middot; 5 Tracks</EyebrowChip>
            </div>

            <TypedHero
              pre="Five tracks. One "
              word="methodology"
              post=". Start where you are."
            />

            <HardRule className="mb-7" />

            <div className="space-y-4">
              <p className="text-[17px] leading-[1.55] text-ink">
                We are not a generalist AI consultancy.{" "}
                <MonoIsh>Claude</MonoIsh> is our entire practice &mdash; every
                engagement, every engineer, every methodology built specifically
                for Claude deployment in mid-market organizations.
              </p>
              <p className="text-[17px] leading-[1.55] text-ink">
                Citizen Developer Enablement is our flagship. Everything else is
                either preparation for it or what comes after it.
              </p>
            </div>
          </div>
        </div>
      </HexgridSection>

      {/* 02 TRACKS */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / TRACKS / FIVE PATHS" />

          <p className="font-mono text-[12px] text-muted-foreground mb-7 flex items-center">
            <Chevron />
            All tracks deploy on the same governed Claude substrate. Pick the
            entry point that matches the question on your desk.
          </p>
          <div className="h-px bg-ink mb-9" />

          <TrackTable tracks={tracks} />
        </div>
      </section>

      {/* 03 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="03 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[22ch]">
              Not sure which fits?
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7 max-w-[60ch]">
              The discovery call is where we work that out. 45 minutes, no cost,
              no obligation.
            </p>
            <DiscoveryCallButton variant="dark" size="lg">
              Book a Discovery Call
            </DiscoveryCallButton>
          </div>
        </div>
      </HexgridSection>
    </main>
  );
}
