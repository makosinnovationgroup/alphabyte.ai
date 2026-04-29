import type { Metadata } from "next";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads — no junior bench.",
  alternates: {
    canonical: "/team/",
  },
  openGraph: {
    title: "Our Team",
    description:
      "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads.",
    url: "/team/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Our Team",
      },
    ],
  },
  twitter: {
    title: "Our Team",
    description:
      "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads.",
    images: ["/og/default.png"],
  },
};

const teamMembers = [
  {
    name: "Adam Nameh",
    initial: "A",
    role: "Co-Founder & Data Platform Architect",
    bio: "Client relationships, practice strategy, and AI programme design. 10+ years in data architecture and platform design. Formerly Data Architect at BMO Financial Group. Co-founder of Fantastik AI and MadSavi.",
    pills: ["AI Strategy", "Data Architecture", "Client Engagement", "Programme Design"],
    profileHref: "/team/adam-nameh/",
    hasPhoto: true,
  },
  {
    name: "Mitch",
    initial: "M",
    role: "Website & Technical Lead",
    bio: "Leads technical delivery and website architecture for Alphabyte AI. Responsible for the build, deployment, and ongoing development of the Alphabyte AI platform.",
    pills: ["Web Development", "Technical Architecture", "Deployment"],
  },
  {
    name: "Rugved",
    initial: "R",
    role: "Claude Specialist",
    bio: "Dedicated Claude engineer. MCP server development, context engineering, agentic system design, and Claude Code delivery. Trained through Anthropic Academy.",
    pills: ["Claude Engineering", "MCP Servers", "Context Engineering", "Agentic Systems"],
  },
  {
    name: "Ahmad",
    initial: "A",
    role: "Content & Project Manager",
    bio: "Content strategy, project management, and GTM execution for Alphabyte AI. Owns the content calendar, project tracking, and cross-functional coordination.",
    pills: ["Content Strategy", "Project Management", "GTM Execution"],
  },
  {
    name: "Rabia",
    initial: "R",
    role: "Marketing & Content",
    bio: "Marketing strategy and content production. Owns the Alphabyte AI brand voice, LinkedIn presence, and consent marketing programme.",
    pills: ["Marketing Strategy", "Content Production", "Social Media", "Brand"],
  },
  {
    name: "Carrie",
    initial: "C",
    role: "Outbound Operations",
    bio: "Outbound sales operations. Manages prospecting, outreach sequencing, and pipeline coordination for the Alphabyte AI practice.",
    pills: ["Outbound Operations", "Sales Development", "Pipeline Management"],
  },
];

const stats = [
  { value: "20+", label: "Delivery specialists across data, cloud, and AI" },
  { value: "10 yrs", label: "Data and digital consulting heritage" },
  { value: "100+", label: "Enterprise clients served across North America" },
];

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
      name: "Team",
      item: "https://alphabyte.ai/team/",
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Our Team",
  description:
    "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads — no junior bench.",
  url: "https://alphabyte.ai/team/",
  isPartOf: {
    "@type": "WebSite",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
};

export default function TeamPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, webPageSchema]),
        }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-canvas px-6 pt-6 pb-0"
      >
        <div className="mx-auto max-w-[1600px]">
          <ol className="flex items-center gap-2 text-body-sm">
            <li>
              <Link
                href="/"
                className="text-alphabyte-blue hover:underline underline-offset-4"
              >
                Home
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="text-muted-foreground">Team</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-canvas px-6 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
            Our Team
          </p>
          <h1 className="text-display font-sans tracking-brand-tight mb-8">
            The practitioners behind
            <br />
            <span className="text-alphabyte-blue">every engagement.</span>
          </h1>
          <div className="max-w-[75ch]">
            <p className="text-lg leading-relaxed text-muted-foreground">
              No junior bench. The senior engineer who designs your solution
              builds it. The consultant who runs your discovery workshop delivers
              your sprints. Two dedicated Claude engineers backed by a
              twenty-person delivery organization &mdash; but the people who show
              up for your engagement are the people who own it.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-canvas px-6 py-16 md:py-24 border-t border-border-default">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-lg border border-border-default bg-white overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Photo / placeholder */}
                {member.hasPhoto ? (
                  <div className="relative aspect-[4/3] bg-neutral-800">
                    <div className="absolute inset-0 bg-alphabyte-blue/20 mix-blend-multiply" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center aspect-[4/3] bg-alphabyte-blue">
                    <span className="text-5xl font-medium text-white">
                      {member.initial}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-body font-bold text-foreground">
                    {member.name}
                  </h2>
                  <p className="text-body-sm font-medium text-alphabyte-blue mt-1">
                    {member.role}
                  </p>
                  <p className="text-body-sm text-muted-foreground mt-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.pills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center rounded-full border border-border-default bg-alphabyte-grey px-3 py-1 text-body-sm text-muted-foreground"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Profile link or coming soon */}
                  <div className="mt-4">
                    {member.profileHref ? (
                      <Link
                        href={member.profileHref}
                        className="text-body-sm font-medium text-alphabyte-blue hover:underline underline-offset-4"
                      >
                        View full profile &rarr;
                      </Link>
                    ) : (
                      <p className="text-body-sm italic text-muted-foreground">
                        Bio page coming soon
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-foreground px-6 py-16 md:py-20 border-t border-border-default">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.value}>
                <p className="text-headline tracking-brand-snug font-bold text-alphabyte-blue">
                  {stat.value}
                </p>
                <p className="text-body-sm text-white/70 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-6 py-24 md:py-32 border-t border-border-default">
        <div className="mx-auto max-w-[1600px] text-center">
          <h2 className="text-headline tracking-brand-snug text-foreground mb-4 mx-auto max-w-[40ch]">
            Want to meet the team?
          </h2>
          <p className="text-body text-muted-foreground mb-10 mx-auto max-w-[55ch]">
            Book a discovery call and you&rsquo;ll talk directly with the people
            who would work on your engagement.
          </p>
          <DiscoveryCallButton variant="dark" size="lg">
            Book a Discovery Call
          </DiscoveryCallButton>
        </div>
      </section>
    </main>
  );
}
