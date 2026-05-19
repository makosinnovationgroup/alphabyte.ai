import type { ReactNode } from "react";
import Link from "next/link";
import {
  Chevron,
  CommitRow,
  EyebrowChip,
  HardRule,
  HexgridSection,
  QAGrid,
  SectionLabel,
  TableOfContents,
} from "@/components/operator";
import { DiscoveryCallButton } from "@/components/discovery-call-button";

export interface BlogBreadcrumbItem {
  label: string;
  href?: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  avatarSrc: string;
  bio: string;
  profileHref: string;
  dateAndReadTime: string;
}

export interface BlogTocEntry {
  label: string;
  anchorId: string;
}

export interface BlogRelatedService {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface BlogReadyToMoveCard {
  heading: string;
  body: string;
  ctaLabel: string;
}

export interface BlogMorePost {
  tags: string[];
  title: string;
  excerpt: string;
  href: string;
  heroImage?: string;
}

export interface BlogFaqEntry {
  question: string;
  answer: string;
}

export interface BlogPostPageProps {
  breadcrumb: { items: BlogBreadcrumbItem[] };
  tags: string[];
  h1: string;
  excerpt: string;
  author: BlogAuthor;
  bodyContent: ReactNode;
  tableOfContents: BlogTocEntry[];
  relatedService: BlogRelatedService;
  readyToMoveCard: BlogReadyToMoveCard;
  topics: string[];
  moreFromBlog: BlogMorePost[];
  heroImage?: string;
  faq?: BlogFaqEntry[];
}

export function BlogPostPage({
  breadcrumb,
  tags,
  h1,
  excerpt,
  author,
  bodyContent,
  tableOfContents,
  relatedService,
  readyToMoveCard,
  topics,
  moreFromBlog,
  heroImage,
  faq,
}: BlogPostPageProps) {
  const primaryTag = tags[0] ?? "Blog";

  return (
    <main>
      <Breadcrumb items={breadcrumb.items} />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[64px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text={`01 / BLOG / ${primaryTag.toUpperCase()}`} />

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div>
              <div className="mb-7 flex flex-wrap items-center gap-2">
                {tags.map((tag, i) => (
                  <EyebrowChip key={i} star={i === 0}>
                    {tag}
                  </EyebrowChip>
                ))}
              </div>

              <h1 className="font-sans font-black text-display text-ink mb-7 min-h-[1.95em] text-balance tracking-[-0.02em] leading-[0.98]">
                {h1}
                <span className="text-alphabyte-blue">.</span>
              </h1>

              <HardRule className="mb-7" />

              <p className="mb-7 max-w-[60ch] text-[22px] leading-[1.4] tracking-[-0.005em] text-ink/85">
                {excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-5 border-t border-ink pt-6 max-w-[60ch]">
                <Link
                  href={author.profileHref}
                  className="font-mono text-[12.5px] text-alphabyte-blue hover:text-ink transition-colors"
                >
                  {author.name}
                </Link>
                <span className="font-mono text-[12.5px] text-muted-foreground tracking-[0.02em]">
                  {author.role}
                </span>
                <span className="font-mono text-[12.5px] text-muted-foreground tracking-[0.04em] uppercase ml-auto">
                  {author.dateAndReadTime}
                </span>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <TableOfContents items={tableOfContents} />
            </div>
          </div>
        </div>
      </HexgridSection>

      {/* 02 HERO IMAGE (optional) */}
      {heroImage && (
        <section className="bg-canvas border-y border-border-default py-10">
          <div className="mx-auto max-w-[1400px] px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt={h1}
              className="w-full border border-border-default block bg-white"
              loading="lazy"
            />
          </div>
        </section>
      )}

      {/* 03 BODY */}
      <section className="bg-white pt-16 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <article className="blog-prose">{bodyContent}</article>

            <aside className="lg:sticky lg:top-24 space-y-6">
              {/* Related service */}
              <div className="border border-ink bg-canvas p-5">
                <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-alphabyte-blue mb-2 flex items-center">
                  <Chevron />
                  {relatedService.eyebrow}
                </div>
                <p className="text-[15px] font-bold text-ink mb-2 leading-[1.3]">
                  {relatedService.title}
                </p>
                <p className="text-[13.5px] leading-[1.55] text-ink/80 mb-4">
                  {relatedService.body}
                </p>
                <Link
                  href={relatedService.ctaHref}
                  className="font-mono text-[12px] text-alphabyte-blue hover:text-ink transition-colors flex items-center gap-1.5"
                >
                  {relatedService.ctaLabel}
                  <span className="text-brand-live">→</span>
                </Link>
              </div>

              {/* Ready to move */}
              <div className="border border-ink bg-ink text-white p-5">
                <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-brand-live mb-2 flex items-center">
                  <span className="mr-2">›</span>
                  Next step
                </div>
                <p className="text-[15px] font-bold mb-2 leading-[1.3]">
                  {readyToMoveCard.heading}
                </p>
                <p className="text-[13.5px] leading-[1.55] text-white/75 mb-4">
                  {readyToMoveCard.body}
                </p>
                <DiscoveryCallButton variant="default" size="sm">
                  {readyToMoveCard.ctaLabel}
                </DiscoveryCallButton>
              </div>

              {/* Topics */}
              {topics && topics.length > 0 && (
                <div className="border border-border-default bg-white p-5">
                  <div className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground mb-3 flex items-center">
                    <Chevron />
                    Topics
                  </div>
                  <ul className="flex flex-wrap gap-2 font-mono text-[11.5px]">
                    {topics.map((t, i) => (
                      <li
                        key={i}
                        className="bg-canvas border border-border-default px-2 py-1 text-ink flex items-center gap-1.5 before:content-[''] before:w-[5px] before:h-[5px] before:bg-brand-live before:shrink-0"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* 04 Q&A */}
      {faq && faq.length > 0 && (
        <section className="bg-canvas border-y border-border-default pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="04 / Q&A / READER QUESTIONS" />

            <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
              <Chevron />
              Direct answers.
            </p>

            <QAGrid items={faq} />
          </div>
        </section>
      )}

      {/* 05 RELATED */}
      {moreFromBlog && moreFromBlog.length > 0 && (
        <section className="bg-white border-b border-border-default pt-20 pb-20">
          <div className="mx-auto max-w-[1400px] px-8">
            <SectionLabel text="05 / RELATED / MORE FROM THE BLOG" />

            <div className="border-t border-ink">
              {moreFromBlog.slice(0, 3).map((post) => (
                <CommitRow
                  key={post.href}
                  author={post.tags[0]}
                  title={post.title}
                  body={post.excerpt}
                  tag="→ READ"
                  href={post.href}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 06 CTA */}
      <HexgridSection className="bg-white border-t border-border-default pt-[100px] pb-[90px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="06 / CTA / DISCOVERY CALL" />

          <div className="max-w-[60ch]">
            <h2 className="text-[clamp(2.5rem,4.4vw,4rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5 max-w-[24ch]">
              Talk to us about what we just covered.
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
              The discovery call is where we apply this to your specific
              situation. 45 minutes, no cost, no obligation.
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

function Breadcrumb({ items }: { items: BlogBreadcrumbItem[] }) {
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
