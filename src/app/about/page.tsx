import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";
import { EmailAddress } from "@/components/email-address";

export const metadata: Metadata = {
  title: "About Alphabyte AI - Practitioner-Led AI Consulting",
  description:
    "Alphabyte AI is the AI practice of Alphabyte Solutions. Practitioner-led, ten years of delivery, bottom-up by design. Operating across North America since 2016.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    type: "website",
    title: "About Alphabyte AI - Practitioner-Led AI Consulting",
    description:
      "Alphabyte AI is the AI practice of Alphabyte Solutions. Practitioner-led, ten years of delivery, bottom-up by design.",
    url: "/about/",
    images: [
      {
        url: "/og/about.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - About Alphabyte AI - Practitioner-Led AI Consulting",
      },
    ],
  },
  twitter: {
    title: "About Alphabyte AI - Practitioner-Led AI Consulting",
    description:
      "Alphabyte AI is the AI practice of Alphabyte Solutions. Practitioner-led, ten years of delivery, bottom-up by design.",
    images: ["/og/about.png"],
  },
};

const pillars = [
  {
    heading: "Bottom-up by Design",
    body: "Every mid-market organization has someone who has quietly built something extraordinary with AI. We find that person, understand what was built, and install the infrastructure that makes her capability visible, shareable, and available to the entire team. Then the next person. Until AI is compounding across the organization.",
  },
  {
    heading: "Our Capability",
    body: "Ten years of mid-market and public sector delivery across data warehousing, analytics, business intelligence, and custom application development. The AI practice runs on top of that delivery experience. Claude is the primary AI platform we deploy, and our team\u2019s depth in Claude (backed by 10+ certified practitioners) means faster configuration and more consistent outputs than a generalist AI firm can offer.",
  },
  {
    heading: "No Junior Bench",
    body: "The senior engineer who designs your deployment builds it. The consultant who runs your initial discovery personally delivers your sprint. Two dedicated AI engineers backed by a twenty-person delivery organization, and the people who show up for your engagement own it from start to finish.",
  },
];

const activeDelivery = [
  {
    tag: "CONSTRUCTION FIRM · MULTI-ENTITY · NORTH AMERICA",
    title: "AI-Powered Compliance Intelligence Agent",
    body: "Custom MCP server and knowledge graph navigating a full regulatory code library with citation-grade accuracy. Integrated into Claude Desktop with org-wide access. Modular architecture for expansion into estimating and operations.",
  },
  {
    tag: "MAJOR SUPPLIER · REVERSE LOGISTICS · GLOBAL",
    title: "AI-Powered Executive Productivity Suite",
    body: "Custom AI plugin giving leadership a single command surface across GSuite, Slack, Power BI, and Fireflies. Purpose-built agents delivering automated briefs and on-demand workflows org-wide.",
  },
  {
    tag: "HOUSING SERVICES CORP. \u00b7 PUBLIC SECTOR \u00b7 HOUSING \u00b7 NATIONAL \u00b7 CANADA",
    title: "AI Enablement Roadmap",
    body: "Six strategic recommendations including automated cross-program reporting delivered within federal data governance requirements.",
  },
];

const certifications = [
  "Microsoft Solutions Partner \u00b7 Infrastructure (Azure)",
  "Microsoft Solutions Partner \u00b7 Data & AI (Azure)",
  "Microsoft Solutions Partner \u00b7 Digital & App Innovation (Azure)",
  "Anthropic \u00b7 Claude Certified",
  "Anthropic \u00b7 10+ Certified Practitioners",
  "Anthropic \u00b7 On the Path to Claude Partnership",
];

const inProgressCertifications = ["SOC 2 Type II"];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Alphabyte AI",
  description:
    "Alphabyte AI is the AI practice of Alphabyte Solutions. Practitioner-led, ten years of delivery, bottom-up by design. Operating across North America since 2016.",
  url: "https://alphabyte.ai/about/",
  isPartOf: {
    "@type": "WebSite",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      {/* Hero */}
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
            About Alphabyte AI
          </p>
          <h1 className="text-display font-sans tracking-brand-tight mb-8">
            Practitioner-led.
            <br />
            <span className="text-alphabyte-blue">Ten years of delivery.</span>
            <br />
            Bottom-up by design.
          </h1>
          <div className="max-w-[55ch]">
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Alphabyte AI is the AI practice of Alphabyte Solutions, operating
              across North America since 2016.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Our parent practice has spent ten years delivering data
              warehousing, reporting and analytics, business intelligence, and
              custom application development to mid-market and public sector
              organizations across Canada. That track record is what lets us
              engage credibly on the full technology stack beneath an AI
              deployment.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Alphabyte holds Microsoft Solutions Partner status with three
              Azure designations (Infrastructure, Data &amp; AI, and Digital
              &amp; App Innovation), and we have 10+
              Anthropic-certified practitioners on the path to Claude
              partnership.
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
              Our Team
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[55fr_45fr] lg:gap-16">
            <div>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Ten years of mid-market and public sector delivery across data
                warehousing, analytics, business intelligence, and custom
                application development. That history means we can look at your
                data infrastructure, your cloud environment, your governance
                posture, and your application layer and tell you what needs to
                change before an AI deployment will stick.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                The AI practice runs on top of that delivery experience. Claude
                is the primary AI platform we deploy. Our team&rsquo;s depth in
                Claude, backed by 10+ certified practitioners, means faster
                configuration and more consistent outputs than a generalist AI
                firm can offer.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border border-border-default bg-alphabyte-grey p-6">
                <h2 className="text-body font-bold text-foreground mb-2">
                  Two dedicated AI engineers
                </h2>
                <p className="text-body-sm text-muted-foreground">
                  Full-time focus covering MCP server development, context
                  engineering, agentic system design, and Claude Code delivery.
                  Both trained through Anthropic Academy.
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
          <div className="flex items-center gap-3 mb-3">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground whitespace-nowrap">
              In Progress
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {inProgressCertifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center rounded-md border border-dashed border-border-default bg-transparent px-5 py-3 text-body-sm font-medium text-muted-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
          <p className="text-body-sm text-muted-foreground">
            One of the few Claude Certified teams explicitly focused on
            mid-market, not enterprise, not startups.
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
            <EmailAddress
              user="info"
              domain="alphabyte.ai"
              className="text-body-sm text-muted-foreground hover:text-alphabyte-blue"
              fallbackHref="/contact/"
              fallbackLabel="Contact us"
            />{" "}
            &middot; 155 Winges Road, Unit 1, Vaughan, Ontario
          </p>
        </div>
      </section>
    </main>
  );
}
