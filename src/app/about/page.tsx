import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions. Practitioner-led, Claude-native, no junior bench. Operating across North America since 2016.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About",
    description:
      "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions. Practitioner-led, Claude-native, no junior bench.",
    url: "/about/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — About",
      },
    ],
  },
  twitter: {
    title: "About",
    description:
      "Alphabyte AI is the Claude-focused practice of Alphabyte Solutions. Practitioner-led, Claude-native, no junior bench.",
    images: ["/og/default.png"],
  },
};

const pillars = [
  {
    heading: "Bottom-up by design",
    body: "Every mid-market organization has someone who has quietly built something extraordinary with Claude. We find that person, understand what was built, and install the infrastructure that makes her capability visible, scalable, and available to the entire team. Then the next person. Until AI is compounding across the organization.",
  },
  {
    heading: "Claude is the entire practice",
    body: "Not a tool we use alongside others. The foundation every engagement is built on. Every engineer works exclusively with Claude. That focus is what makes us faster, more consistent, and more capable than a firm dividing its attention across ten platforms.",
  },
  {
    heading: "No junior bench",
    body: "The senior engineer who designs your solution builds it. The consultant who runs your initial discovery personally delivers your sprint. Two dedicated Claude engineers backed by a twenty-person delivery organization \u2014 but the people who show up for your engagement own it.",
  },
];

const activeDelivery = [
  {
    tag: "SPRINKLERMATIC / EJ CAPITAL \u00b7 FIRE PROTECTION \u00b7 $200M+ \u00b7 PE-BACKED \u00b7 NORTH AMERICA",
    title: "Nine-initiative AI Command System",
    body: "Estimated 40+ hours/week of manual NFPA lookup eliminated. Custom MCP server, Claude Desktop plugin, HITL gates for five autonomous agents. Proprietary estimating tool in development.",
  },
  {
    tag: "RECIRQ / REVENTORY \u00b7 CIRCULAR ECONOMY \u00b7 GLOBAL",
    title: "Claude Ops + Sales Intelligence",
    body: "WhatsApp Sales Command Centre \u2014 Claude semantic analysis of live sales conversations feeding real-time BigQuery dashboard. Citizen dev SDLC plugin and governed data marts deployed.",
  },
  {
    tag: "HOUSING SERVICES CORP. \u00b7 PUBLIC SECTOR \u00b7 HOUSING \u00b7 NATIONAL \u00b7 CANADA",
    title: "AI Enablement Roadmap",
    body: "Six strategic recommendations including automated cross-program reporting delivered within federal data governance requirements.",
  },
];

const certifications = [
  "Microsoft Solutions Partner \u00b7 Data & AI",
  "Anthropic Academy \u00b7 Claude Partner Network",
  "SOC 2 Type II \u00b7 In progress",
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-canvas px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
            About Alphabyte AI
          </p>
          <h1 className="text-display font-sans tracking-brand-tight mb-8">
            Practitioner-led.
            <br />
            <span className="text-alphabyte-blue">Claude-native.</span>
            <br />
            Bottom-up by design.
          </h1>
          <div className="max-w-[55ch]">
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Alphabyte AI is the Claude-focused practice of Alphabyte
              Solutions, operating across North America since 2016.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are not a generalist AI consultancy with a Claude competency.
              Claude is the entire practice &mdash; every engagement, every
              engineer, every methodology built specifically for Claude
              deployment in mid-market organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars — dark section */}
      <section className="bg-foreground px-6 pt-0 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="h-px bg-alphabyte-green mb-16 md:mb-24" />
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {pillars.map((p, i) => (
              <div
                key={p.heading}
                className={`${i < pillars.length - 1 ? "md:border-r md:border-white/15" : ""} md:px-8 lg:px-12 first:md:pl-0 last:md:pr-0`}
              >
                <h2 className="text-body font-bold text-alphabyte-green mb-6">
                  {p.heading}
                </h2>
                <p className="text-body-sm text-white/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Practice and Team */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-center gap-3 mb-10">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue whitespace-nowrap">
              Our Practice and Team
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[55fr_45fr] lg:gap-16">
            <div>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Our parent practice has delivered data warehousing, reporting and
                analytics, business intelligence, and custom application
                development to Canada&rsquo;s largest mechanical contractor, a
                provincial government, a professional regulatory body, a
                national public sector housing organization, multiple Canadian
                municipalities, and a substantial roster of mid-market operators
                across e-commerce, manufacturing, industrial services, and
                financial services.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                That heritage is what allows us to engage credibility on the
                full technology stack beneath an AI deployment. The AI practice
                is built on that foundation &mdash; not grafted onto it.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border border-border-default bg-alphabyte-grey p-6">
                <h2 className="text-body font-bold text-foreground mb-2">
                  Two dedicated Claude engineers
                </h2>
                <p className="text-body-sm text-muted-foreground">
                  Full-time, exclusively Claude &mdash; MCP server development,
                  context engineering, agentic system design, and Claude Code
                  delivery. Both trained through Anthropic Academy.
                </p>
              </div>
              <div className="rounded-lg border border-border-default bg-alphabyte-grey p-6">
                <h2 className="text-body font-bold text-foreground mb-2">
                  Backed by a twenty-person delivery organization
                </h2>
                <p className="text-body-sm text-muted-foreground">
                  Senior data engineers, solutions architects, technical
                  consultants, project managers, and adoption specialists from
                  ten years of mid-market and public sector delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Delivery */}
      <section className="bg-canvas px-6 py-16 md:py-24 border-t border-border-default">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-center gap-3 mb-10">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue whitespace-nowrap">
              Active Delivery
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeDelivery.map((d) => (
              <div
                key={d.title}
                className="rounded-lg border border-border-default bg-white p-6 md:p-8 shadow-sm"
              >
                <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-4">
                  {d.tag}
                </p>
                <h3 className="text-body font-bold text-foreground mb-3">
                  {d.title}
                </h3>
                <p className="text-body-sm text-muted-foreground">{d.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/our-work"
              className="text-body-sm font-bold text-alphabyte-blue hover:underline underline-offset-4"
            >
              See all active work &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications and Partnerships */}
      <section className="bg-white px-6 py-16 md:py-24 border-t border-border-default">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-center gap-3 mb-8">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue whitespace-nowrap">
              Certifications and Partnerships
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center rounded-md border border-border-default bg-canvas px-5 py-3 text-body-sm font-medium text-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-body-sm text-muted-foreground">
            We are one of the only Claude delivery partners explicitly focused
            on mid-market &mdash; not enterprise, not startups.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-canvas px-6 py-24 md:py-32 border-t border-border-default">
        <div className="mx-auto max-w-[1600px] text-center">
          <h2 className="text-headline tracking-brand-snug text-foreground mb-4 mx-auto max-w-[40ch]">
            A discovery conversation takes 45 minutes.
          </h2>
          <p className="text-body text-muted-foreground mb-10 mx-auto max-w-[55ch]">
            No cost, no obligation. You describe your situation. We tell you
            candidly whether there is an engagement worth having and what you
            would have at day 30.
          </p>
          <DiscoveryCallButton variant="dark" size="lg">
            Book a Discovery Call &rarr;
          </DiscoveryCallButton>
          <p className="text-body-sm text-muted-foreground mt-8">
            hello@alphabyte.ai &middot; 155 Wintges Road, Unit 1, Vaughan,
            Ontario
          </p>
        </div>
      </section>
    </main>
  );
}
