import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import {
  Chevron,
  EyebrowChip,
  HardRule,
  HexgridSection,
  SectionLabel,
  StatCard,
  TypedHero,
} from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export const metadata: Metadata = {
  title: "Our Team - Practitioners Behind Every Engagement",
  description:
    "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads — no junior bench.",
  alternates: {
    canonical: "/team/",
  },
  openGraph: {
    title: "Our Team - Practitioners Behind Every Engagement",
    description:
      "Meet the practitioners behind every Alphabyte engagement. Senior engineers, Claude specialists, and delivery leads.",
    url: "/team/",
    images: [
      {
        url: "/og/team.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Our Team - Practitioners Behind Every Engagement",
      },
    ],
  },
  twitter: {
    title: "Our Team - Practitioners Behind Every Engagement",
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
  "ahmad-nameh",
  "ibrahim-nameh",
  "rugved-ambekar",
  "mitch-makos",
  "rabia-arabaci",
  "kevin-seto",
  "alfaz-khan",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabyte.ai/" },
    { "@type": "ListItem", position: 2, name: "Team", item: "https://alphabyte.ai/team/" },
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

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Team" },
        ]}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / INDEX / TEAM" />

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div>
              <div className="mb-7">
                <EyebrowChip>Team · No Junior Bench</EyebrowChip>
              </div>

              <TypedHero
                pre="The practitioners behind "
                word="every engagement"
                post="."
              />

              <HardRule className="mb-7" />

              <div className="max-w-[60ch] space-y-4">
                <p className="text-[17px] leading-[1.55] text-ink">
                  No junior bench. The senior engineer who designs your
                  solution builds it. The consultant who runs your discovery
                  workshop delivers your sprints. Two dedicated Claude
                  engineers backed by a twenty-person delivery organization
                  &mdash; but the people who show up for your engagement are
                  the people who own it.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {stats.map((s, i) => (
                <StatCard key={i} num={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </HexgridSection>

      {/* 02 TEAM GRID */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / TEAM / EIGHT PRACTITIONERS" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            Click any profile for credentials, career, and recent work.
          </p>

          <div className="grid gap-px bg-border-default border border-border-default lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}/`}
                className="group bg-white block transition-colors hover:bg-alphabyte-blue/[0.04]"
              >
                <div className="aspect-[4/5] bg-canvas border-b border-border-default overflow-hidden">
                  {member.avatarSrc ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={member.avatarSrc}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-ink text-white text-[64px] font-bold">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-[18px] font-bold text-ink tracking-[-0.01em]">
                    {member.name}
                  </p>
                  <p className="font-mono text-[12px] text-alphabyte-blue tracking-[0.02em] mt-1">
                    {member.role}
                  </p>
                  <p className="text-[14px] leading-[1.55] text-ink/80 mt-3 line-clamp-3">
                    {member.bio[0]}
                  </p>

                  {member.pills && member.pills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {member.pills.slice(0, 3).map((pill) => (
                        <span
                          key={pill}
                          className="font-mono text-[10.5px] px-2 py-1 bg-canvas border border-border-default text-ink flex items-center gap-1.5 before:content-[''] before:w-[5px] before:h-[5px] before:bg-brand-live before:shrink-0"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="font-mono text-[11.5px] text-alphabyte-blue mt-4 flex items-center gap-1.5 group-hover:text-ink transition-colors">
                    View profile
                    <span className="text-brand-live">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="03 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[24ch]">
              Want to meet the team?
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
              Book a discovery call and you&rsquo;ll talk directly with the
              people who would work on your engagement.
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

function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border-default bg-canvas"
    >
      <ol className="mx-auto max-w-[1400px] flex items-center gap-2 px-8 py-3 font-mono text-[11px] tracking-[0.04em] uppercase">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-muted-foreground">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-alphabyte-blue transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
