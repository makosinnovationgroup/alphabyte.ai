import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Our Team — Practitioners Behind Every Engagement",
  description:
    "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads — no junior bench.",
  alternates: {
    canonical: "/team/",
  },
  openGraph: {
    title: "Our Team — Practitioners Behind Every Engagement",
    description:
      "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads.",
    url: "/team/",
    images: [
      {
        url: "/og/team.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Our Team — Practitioners Behind Every Engagement",
      },
    ],
  },
  twitter: {
    title: "Our Team — Practitioners Behind Every Engagement",
    description:
      "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads.",
    images: ["/og/team.png"],
  },
};

interface TeamMemberSummary {
  slug: string;
  name: string;
  role: string;
  bio: string[];
  avatarSrc: string;
  pills?: string[];
}

const TEAM_DIR = path.join(process.cwd(), "content/team");

const MEMBER_ORDER = [
  "adam-nameh",
  "ibrahim-nameh",
  "ahmad-nameh",
  "kevin-seto",
  "rugved-ambekar",
  "mitch-makos",
  "rabia-arabaci",
];

function getAllTeamMembers(): TeamMemberSummary[] {
  if (!fs.existsSync(TEAM_DIR)) return [];
  const files = fs
    .readdirSync(TEAM_DIR)
    .filter((f) => f.endsWith(".json"));

  const members = files.map((f) => {
    const data = JSON.parse(
      fs.readFileSync(path.join(TEAM_DIR, f), "utf-8"),
    ) as TeamMemberSummary;
    return data;
  });

  return members.sort((a, b) => {
    const ai = MEMBER_ORDER.indexOf(a.slug);
    const bi = MEMBER_ORDER.indexOf(b.slug);
    const aIdx = ai === -1 ? MEMBER_ORDER.length : ai;
    const bIdx = bi === -1 ? MEMBER_ORDER.length : bi;
    return aIdx - bIdx;
  });
}

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
  const teamMembers = getAllTeamMembers();

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
        className="bg-white px-6 pt-6 pb-0"
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
      <section className="bg-white px-6 pt-12 pb-16 md:pt-16 md:pb-24">
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
              <Link
                key={member.slug}
                href={`/team/${member.slug}/`}
                className="block rounded-lg border border-border-default bg-white overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Photo / placeholder */}
                {member.avatarSrc ? (
                  <span className="block aspect-[4/3] bg-alphabyte-grey overflow-hidden">
                    <img
                      src={member.avatarSrc}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : (
                  <span className="flex items-center justify-center aspect-[4/3] bg-alphabyte-blue">
                    <span className="text-5xl font-medium text-white">
                      {member.name.charAt(0)}
                    </span>
                  </span>
                )}

                {/* Content */}
                <span className="block p-6">
                  <span className="block text-body font-bold text-foreground">
                    {member.name}
                  </span>
                  <span className="block text-body-sm font-medium text-alphabyte-blue mt-1">
                    {member.role}
                  </span>
                  <span className="block text-body-sm text-muted-foreground mt-4 leading-relaxed">
                    {member.bio[0]}
                  </span>

                  {/* Pills */}
                  {member.pills && member.pills.length > 0 && (
                    <span className="flex flex-wrap gap-2 mt-4">
                      {member.pills.map((pill) => (
                        <span
                          key={pill}
                          className="inline-flex items-center rounded-full border border-border-default bg-alphabyte-grey px-3 py-1 text-body-sm text-muted-foreground"
                        >
                          {pill}
                        </span>
                      ))}
                    </span>
                  )}

                  {/* Profile link */}
                  <span className="block mt-4 text-body-sm font-medium text-alphabyte-blue">
                    View full profile &rarr;
                  </span>
                </span>
              </Link>
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
