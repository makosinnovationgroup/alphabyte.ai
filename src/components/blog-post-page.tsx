import type { ReactNode } from "react";
import Link from "next/link";
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
  return (
    <main>
      {/* Hero: breadcrumb + two-column — left: tags/title/excerpt/byline, right: ToC */}
      <section className="border-b border-border-default">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-border-default px-6 py-4 md:px-10 lg:px-16"
        >
          <ol className="mx-auto max-w-[1600px] flex items-center gap-2 text-body-sm">
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

        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-[1fr_420px]">
          {/* Left — hero content */}
          <div className="px-6 pb-10 pt-10 md:pb-12 md:pl-10 md:pr-12 md:pt-14 lg:pl-16">
            {/* Tag pills */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className={
                    i === 0
                      ? "rounded-full bg-alphabyte-blue/10 px-4 py-1.5 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue"
                      : "rounded-full bg-alphabyte-grey px-4 py-1.5 text-body-sm font-bold uppercase tracking-brand-wide text-foreground"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-4 text-display tracking-brand-tight">{h1}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{excerpt}</p>

            {/* Author byline */}
            <div className="mt-8 flex items-center gap-3">
              <img
                src={author.avatarSrc}
                alt={author.name}
                className="h-9 w-9 rounded-full bg-foreground object-cover"
              />
              <div>
                <p className="text-body-sm font-medium text-foreground">
                  {author.name}
                </p>
                <p className="text-body-sm text-muted-foreground">
                  {author.dateAndReadTime}
                </p>
              </div>
            </div>
          </div>

          {/* Right — IN THIS ARTICLE */}
          <div className="hidden items-center px-8 md:flex md:pr-10 lg:pr-16">
            <div className="w-full rounded-md border border-border-default bg-canvas p-5">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                In This Article
              </p>
              <ul className="mt-3 divide-y divide-border-default">
                {tableOfContents.map((entry) => (
                  <li key={entry.anchorId} className="py-2.5 first:pt-0 last:pb-0">
                    <a
                      href={`#${entry.anchorId}`}
                      className="text-body-sm text-alphabyte-blue transition-colors hover:text-foreground"
                    >
                      {entry.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image (optional) */}
      {heroImage && (
        <section className="border-b border-border-default bg-white">
          <div className="mx-auto max-w-[1600px] px-6 py-8 md:px-10 md:py-10 lg:px-16">
            <img
              src={heroImage}
              alt={h1}
              className="w-full rounded-md"
              width={1200}
              height={785}
              fetchPriority="high"
            />
          </div>
        </section>
      )}

      {/* Two-column body */}
      <section>
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-[1fr_420px]">
          {/* Left column — MDX content + author bio */}
          <div className="py-12 pl-6 pr-6 md:py-16 md:pl-10 md:pr-12 lg:pl-16">
            <div className="blog-body space-y-5">
              {bodyContent}
            </div>

            {faq && faq.length > 0 && (
              <div className="mt-12 space-y-6">
                <h2 className="text-lg font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
                {faq.map((entry) => (
                  <div key={entry.question} className="space-y-2">
                    <h3 className="text-body font-bold text-foreground">
                      {entry.question}
                    </h3>
                    <p className="text-body text-foreground">{entry.answer}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Author bio */}
            <div className="mt-12 rounded-md border border-border-default bg-canvas p-6 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-5">
                <img
                  src={author.avatarSrc}
                  alt={author.name}
                  className="h-12 w-12 shrink-0 rounded-full bg-foreground object-cover"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div>
                  <p className="text-body font-bold text-foreground">{author.name}</p>
                  <p className="mt-0.5 text-body-sm text-muted-foreground">
                    {author.role}. {author.bio}
                  </p>
                  <Link
                    href={author.profileHref}
                    className="mt-3 inline-block text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
                  >
                    View full profile &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — sidebar */}
          <aside className="relative border-t border-border-default py-12 pl-8 pr-6 md:border-t-0 md:py-16 md:pr-10 lg:pr-16">
            {/* RELATED SERVICE */}
            <div className="pb-6">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                {relatedService.eyebrow}
              </p>
              <div className="mt-3 rounded-md border border-border-default bg-white p-5">
                <p className="text-body font-bold text-foreground">
                  {relatedService.title}
                </p>
                <p className="mt-2 text-body-sm text-muted-foreground">
                  {relatedService.body}
                </p>
                <Link
                  href={relatedService.ctaHref}
                  className="mt-3 inline-block text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
                >
                  {relatedService.ctaLabel}
                </Link>
              </div>
            </div>

            {/* READY TO MOVE? CTA */}
            <div className="border-t border-border-default py-6">
              <div className="rounded-md bg-foreground p-5">
                <p className="text-body font-bold text-white">
                  {readyToMoveCard.heading}
                </p>
                <p className="mt-2 text-body-sm text-white/70">
                  {readyToMoveCard.body}
                </p>
                <div className="mt-4">
                  <DiscoveryCallButton variant="default" size="sm" className="w-full">
                    {readyToMoveCard.ctaLabel}
                  </DiscoveryCallButton>
                </div>
              </div>
            </div>

            {/* TOPICS */}
            <div className="border-t border-border-default pt-6">
              <div className="rounded-md border border-border-default bg-white p-5">
                <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
                  Topics
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-alphabyte-grey px-4 py-1.5 text-body-sm font-medium text-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MORE FROM THE BLOG */}
      {moreFromBlog.length > 0 && (
        <section className="bg-alphabyte-grey/50 px-6 py-12 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
            More from the blog
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {moreFromBlog.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-md border border-border-default bg-white transition-colors hover:border-alphabyte-blue/40"
              >
                {/* Thumbnail */}
                <img
                  src={post.heroImage ?? "/og/default.png"}
                  alt={post.title}
                  className="w-full rounded-t-md"
                  width={1200}
                  height={785}
                  loading="lazy"
                />

                <div className="p-6">
                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-alphabyte-blue bg-alphabyte-blue/10 px-3 py-1 text-xs font-medium text-alphabyte-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-body font-bold text-foreground">
                    {post.title}
                  </p>
                  <p className="mt-2 text-body-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-body-sm font-medium text-alphabyte-blue">
                    Read more &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
          </div>
        </section>
      )}
    </main>
  );
}
