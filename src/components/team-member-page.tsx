import Link from "next/link";
import {
  Chevron,
  CommitRow,
  EyebrowChip,
  HardRule,
  HexgridSection,
  SectionLabel,
  TypedHero,
} from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export interface TeamMemberBreadcrumbItem {
  label: string;
  href?: string;
}

export interface TeamMemberContact {
  linkedin?: { label: string; href: string };
  email?: { label: string; href: string };
}

export interface TeamMemberCredentials {
  degree: { title: string; subtitle: string };
  institution: { title: string; subtitle: string };
  keyCoursework: string;
}

export interface TeamMemberTimelineEntry {
  period: string;
  role: string;
  organization: string;
}

export interface TeamMemberThoughtLeadership {
  type: string;
  title: string;
  description: string;
  href: string | null;
}

export interface TeamMemberArticle {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export interface TeamMemberFooterBio {
  name: string;
  description: string;
}

export interface TeamMemberPageProps {
  slug: string;
  breadcrumb: { items: TeamMemberBreadcrumbItem[] };
  avatarSrc: string;
  eyebrow: string;
  name: string;
  role: string;
  company: string;
  location: string;
  bio: string[];
  contact: TeamMemberContact;
  credentials: TeamMemberCredentials;
  careerTimeline: TeamMemberTimelineEntry[];
  expertise: string[];
  achievements: string[];
  thoughtLeadership: TeamMemberThoughtLeadership[];
  articles: TeamMemberArticle[];
  pills?: string[];
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  footerBio: TeamMemberFooterBio;
}

export function TeamMemberPage({
  breadcrumb,
  avatarSrc,
  eyebrow,
  name,
  role,
  company,
  location,
  bio,
  contact,
  credentials,
  careerTimeline,
  expertise,
  achievements,
  thoughtLeadership,
  articles,
  pills,
}: TeamMemberPageProps) {
  const hasOutput =
    (thoughtLeadership && thoughtLeadership.length > 0) ||
    (articles && articles.length > 0);

  return (
    <main>
      <Breadcrumb items={breadcrumb.items} />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text={`01 / TEAM / ${name.toUpperCase()}`} />

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div>
              <div className="mb-7 flex flex-wrap items-center gap-2">
                <EyebrowChip star>{eyebrow}</EyebrowChip>
                {pills?.map((p, i) => (
                  <EyebrowChip key={i}>{p}</EyebrowChip>
                ))}
              </div>

              <TypedHero pre="" word={name} post="." />

              <HardRule className="mb-7" />

              <p className="mb-6 max-w-[60ch] text-[22px] leading-[1.35] tracking-[-0.01em] text-ink font-medium">
                {role} · {company}
              </p>
              <p className="mb-7 max-w-[60ch] font-mono text-[12.5px] text-muted-foreground tracking-[0.02em]">
                {location}
              </p>

              <div className="mb-9 max-w-[60ch] space-y-4">
                {bio.map((p, i) => (
                  <p
                    key={i}
                    className="text-[17px] leading-[1.55] text-ink"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                {contact.linkedin && (
                  <a
                    href={contact.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[13px] text-alphabyte-blue transition-colors hover:text-ink flex items-center gap-1.5"
                  >
                    LinkedIn
                    <span className="text-brand-live">→</span>
                  </a>
                )}
                {contact.email && (
                  <a
                    href={contact.email.href}
                    className="font-mono text-[13px] text-alphabyte-blue transition-colors hover:text-ink flex items-center gap-1.5"
                  >
                    Email
                    <span className="text-brand-live">→</span>
                  </a>
                )}
              </div>
            </div>

            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatarSrc}
                alt={name}
                className="w-full aspect-[4/5] object-cover border border-border-default bg-canvas block"
              />
            </div>
          </div>
        </div>
      </HexgridSection>

      {/* 02 CREDENTIALS */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="02 / CREDENTIALS / EDUCATION" />

          <div className="grid gap-px bg-border-default border border-border-default lg:grid-cols-2">
            <div className="bg-white p-7">
              <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2 flex items-center">
                <Chevron />
                Degree
              </div>
              <p className="text-[18px] font-bold text-ink mb-1">
                {credentials.degree.title}
              </p>
              <p className="font-mono text-[12px] text-muted-foreground">
                {credentials.degree.subtitle}
              </p>
            </div>
            <div className="bg-white p-7">
              <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2 flex items-center">
                <Chevron />
                Institution
              </div>
              <p className="text-[18px] font-bold text-ink mb-1">
                {credentials.institution.title}
              </p>
              <p className="font-mono text-[12px] text-muted-foreground">
                {credentials.institution.subtitle}
              </p>
            </div>
            <div className="bg-white p-7 lg:col-span-2">
              <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-2 flex items-center">
                <Chevron />
                Key coursework
              </div>
              <p className="font-mono text-[13px] text-ink leading-[1.6]">
                {credentials.keyCoursework}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 EXPERIENCE */}
      <section className="bg-canvas pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="03 / EXPERIENCE / CAREER" />

          <div className="border-t border-ink">
            {careerTimeline.map((entry, i) => (
              <div
                key={i}
                className="grid gap-6 py-7 border-b border-border-default items-baseline grid-cols-[200px_1fr_180px] max-lg:grid-cols-1 max-lg:gap-1"
              >
                <div className="font-mono text-[12px] tracking-[0.04em] uppercase text-alphabyte-blue">
                  {entry.period}
                </div>
                <div className="text-[18px] font-bold text-ink tracking-[-0.01em]">
                  {entry.role}
                </div>
                <div className="font-mono text-[12.5px] text-muted-foreground text-right max-lg:text-left">
                  {entry.organization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 EXPERTISE */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="04 / EXPERTISE / FOCUS AREAS" />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            What this engineer ships against.
          </p>

          <ul className="grid gap-3 grid-cols-2 max-lg:grid-cols-1">
            {expertise.map((item, i) => (
              <li
                key={i}
                className="font-mono text-[13px] text-ink bg-canvas border border-border-default px-3.5 py-2.5 flex items-center gap-2.5 before:content-[''] before:w-[7px] before:h-[7px] before:bg-brand-live before:shrink-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05 ACHIEVEMENTS */}
      {achievements && achievements.length > 0 && (
        <section className="bg-canvas pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="05 / RECOGNITION / ACHIEVEMENTS" />

            <ul className="space-y-5 border-t border-ink pt-9 max-w-[80ch]">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className="text-[16px] leading-[1.55] text-ink flex items-start gap-3"
                >
                  <span className="mt-[8px] inline-block w-[8px] h-[8px] bg-brand-live shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 06 OUTPUT — thought leadership + articles */}
      {hasOutput && (
        <section className="bg-white border-y border-border-default pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="06 / OUTPUT / WRITING & ARTICLES" />

            <div className="border-t border-ink">
              {thoughtLeadership.map((entry, i) => (
                <CommitRow
                  key={`tl-${i}`}
                  author={entry.type}
                  title={entry.title}
                  body={entry.description}
                  tag={entry.href ? "→ READ" : "REFERENCE"}
                  href={entry.href ?? undefined}
                />
              ))}
              {articles.map((a) => (
                <CommitRow
                  key={`a-${a.slug}`}
                  author={a.category}
                  title={a.title}
                  body={a.excerpt}
                  tag={a.date}
                  href={`/blog/${a.slug}/`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 07 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="07 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[24ch]">
              Want to work with {name.split(" ")[0]}?
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
              The discovery call is where we work out fit and scope. 45
              minutes, no cost, no obligation.
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

function Breadcrumb({ items }: { items: TeamMemberBreadcrumbItem[] }) {
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
