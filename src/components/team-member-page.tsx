"use client";

import Link from "next/link";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

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
  footerBio: TeamMemberFooterBio;
}

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                    */
/* ------------------------------------------------------------------ */

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3L1 11l15 8 15-8L16 3z" fill="#1e3a5f" />
      <path d="M7 14v7c0 2 4 4.5 9 4.5s9-2.5 9-4.5v-7l-9 5-9-5z" fill="#2b4d7a" />
      <path d="M28 11v10" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
      <circle cx="28" cy="22" r="1.5" fill="#c9a84c" />
      <path d="M16 19l-9-5v7c0 2 4 4.5 9 4.5" fill="#2b4d7a" opacity="0.3" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M4 28h24v-2H4v2z" fill="#1e3a5f" />
      <path d="M6 26V12h20v14" fill="#2b4d7a" />
      <path d="M14 8h4v4h-4z" fill="#1e3a5f" />
      <path d="M16 4l-12 8h24L16 4z" fill="#1e3a5f" />
      <rect x="9" y="15" width="3" height="5" rx="0.5" fill="white" opacity="0.6" />
      <rect x="14.5" y="15" width="3" height="5" rx="0.5" fill="white" opacity="0.6" />
      <rect x="20" y="15" width="3" height="5" rx="0.5" fill="white" opacity="0.6" />
      <rect x="13" y="22" width="6" height="4" rx="0.5" fill="#1e3a5f" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect x="4" y="18" width="24" height="5" rx="1" fill="#00abf0" />
      <rect x="5" y="12" width="22" height="5" rx="1" fill="#e05a47" />
      <rect x="6" y="6" width="20" height="5" rx="1" fill="#00abf0" opacity="0.7" />
      <path d="M4 23h24v1H4z" fill="#008ac0" />
      <path d="M5 17h22v1H5z" fill="#c04a3a" />
      <path d="M6 11h20v1H6z" fill="#0090c8" opacity="0.7" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="12" />
      <path d="M7.5 12.5l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

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
  footerBio,
}: TeamMemberPageProps) {
  const firstName = name.split(" ")[0];

  return (
    <main>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border-default px-6 py-4 md:px-10 lg:px-16"
      >
        <ol className="mx-auto flex max-w-[1600px] items-center gap-2 text-body-sm">
          {breadcrumb.items.map((item, i) => {
            const isLast = i === breadcrumb.items.length - 1;
            return (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-muted-foreground">
                    /
                  </span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-alphabyte-blue transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Hero */}
      <section className="border-b border-border-default px-6 pb-10 pt-10 md:px-10 md:pb-12 md:pt-14 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Avatar */}
            <div className="shrink-0">
              <img
                src={avatarSrc}
                alt={name}
                className="h-36 w-36 rounded-lg bg-alphabyte-grey object-cover md:h-40 md:w-40"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                {eyebrow}
              </p>
              <h1 className="mt-2 text-display tracking-brand-tight">{name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {role} &middot; {company}
              </p>
              <p className="text-body-sm text-muted-foreground">{location}</p>

              <div className="mt-6 max-w-3xl space-y-4">
                {bio.map((paragraph, i) => (
                  <p key={i} className="text-body text-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Contact row */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                {contact.linkedin && (
                  <a
                    href={contact.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-body-sm text-alphabyte-blue transition-colors hover:text-foreground"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    <span>{contact.linkedin.label}</span>
                  </a>
                )}
                {contact.email && (
                  <a
                    href={contact.email.href}
                    className="flex items-center gap-2 text-body-sm text-alphabyte-blue transition-colors hover:text-foreground"
                  >
                    <EmailIcon className="h-4 w-4" />
                    <span>{contact.email.label}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Education */}
      <section className="bg-alphabyte-grey/30 px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-center gap-4">
            <p className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
              Credentials &amp; Education
            </p>
            <div className="h-px flex-1 bg-border-default" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Degree */}
            <div className="rounded-md border border-border-default bg-white p-6">
              <GraduationCapIcon className="mb-3 h-8 w-8" />
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                Degree
              </p>
              <p className="mt-2 font-bold text-foreground">
                {credentials.degree.title}
              </p>
              <p className="text-body-sm text-muted-foreground">
                {credentials.degree.subtitle}
              </p>
            </div>

            {/* Institution */}
            <div className="rounded-md border border-border-default bg-white p-6">
              <BuildingIcon className="mb-3 h-8 w-8" />
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                Institution
              </p>
              <p className="mt-2 font-bold text-foreground">
                {credentials.institution.title}
              </p>
              <p className="text-body-sm text-muted-foreground">
                {credentials.institution.subtitle}
              </p>
            </div>

            {/* Key Coursework */}
            <div className="rounded-md border border-border-default bg-white p-6">
              <BookIcon className="mb-3 h-8 w-8" />
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                Key Coursework
              </p>
              <p className="mt-2 text-body-sm text-foreground">
                {credentials.keyCoursework}
              </p>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="mt-4 rounded-md border border-border-default bg-white p-6 md:p-8">
            <p className="mb-6 font-bold text-foreground">Career Timeline</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {careerTimeline.map((entry, i) => (
                <div
                  key={i}
                  className="border-l-[3px] border-alphabyte-blue pl-4"
                >
                  <p className="text-body-sm font-bold text-alphabyte-blue">
                    {entry.period}
                  </p>
                  <p className="mt-1 font-bold text-foreground">
                    {entry.role}
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    {entry.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-center gap-4">
            <p className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
              Areas of Expertise
            </p>
            <div className="h-px flex-1 bg-border-default" />
          </div>

          {(() => {
            const half = Math.ceil(expertise.length / 2);
            const left = expertise.slice(0, half);
            const right = expertise.slice(half);
            const renderColumn = (items: string[]) =>
              items.map((item, i) => (
                <li key={item}>
                  <div className="flex items-center gap-3 px-5 py-4">
                    <CheckCircleIcon className="h-5 w-5 shrink-0 text-alphabyte-blue" />
                    <span className="text-body text-foreground">{item}</span>
                  </div>
                  {i < items.length - 1 && (
                    <div className="mx-5 h-px bg-border-default" />
                  )}
                </li>
              ));
            return (
              <div className="grid grid-cols-1 rounded-md border border-border-default sm:grid-cols-[1fr_1px_1fr]">
                <ul className="list-none">{renderColumn(left)}</ul>
                <div className="my-4 hidden bg-border-default sm:block" />
                <ul className="list-none border-t border-border-default sm:border-t-0">
                  {renderColumn(right)}
                </ul>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Notable Achievements & Recognition */}
      <section className="bg-foreground px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-8 flex items-center gap-4">
            <p className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-green">
              Notable Achievements &amp; Recognition
            </p>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
            {achievements.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <ArrowRightIcon className="mt-0.5 h-5 w-5 shrink-0 text-alphabyte-green" />
                <span className="text-body-sm text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership & Published Content */}
      {thoughtLeadership.length > 0 && (
        <section className="bg-[#faf7f2] px-6 py-12 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-8 flex items-center gap-4">
              <p className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                Thought Leadership &amp; Published Content
              </p>
              <div className="h-px flex-1 bg-border-default" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {thoughtLeadership.map((item, i) => {
                const cardContent = (
                  <>
                    <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                      {item.type}
                    </p>
                    <p className="mt-2 font-bold text-foreground">
                      &ldquo;{item.title}&rdquo;
                    </p>
                    <p className="mt-1 text-body-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </>
                );

                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border-default bg-white p-5 transition-colors hover:border-alphabyte-blue/40"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    key={i}
                    className="rounded-md border border-border-default bg-white p-5"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Articles by [Name] */}
      {articles.length > 0 && (
        <section className="px-6 py-12 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-8 flex items-center gap-4">
              <p className="shrink-0 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                Articles by {firstName}
              </p>
              <div className="h-px flex-1 bg-border-default" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}/`}
                  className="group rounded-md border border-border-default bg-white transition-colors hover:border-alphabyte-blue/40"
                >
                  <div className="h-40 rounded-t-md bg-foreground" />
                  <div className="p-6">
                    <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                      {article.category}
                    </p>
                    <p className="mt-3 text-body font-bold text-foreground">
                      {article.title}
                    </p>
                    <p className="mt-2 text-body-sm text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mx-0 mt-4 h-px bg-border-default" />
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-body-sm text-muted-foreground">
                        {article.date}
                      </p>
                      <p className="text-body-sm font-medium text-alphabyte-blue">
                        Read more &rarr;
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer bio */}
      <section className="border-t border-border-default bg-[#faf7f2] px-6 py-10 md:px-10 md:py-12 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-start gap-4">
            <img
              src="/logos/alphabyte-icon-blue.svg"
              alt="Alphabyte"
              className="h-10 w-10 shrink-0"
            />
            <div>
              <p className="font-bold text-foreground">{footerBio.name}</p>
              <p className="text-body-sm text-muted-foreground">
                {footerBio.description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <DiscoveryCallButton variant="dark" size="sm" />
            <Link
              href="/team/"
              className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
            >
              &larr; Back to Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
