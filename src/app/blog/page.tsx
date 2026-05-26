import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
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

export const metadata: Metadata = {
  title: "Blog - AI Deployment for Mid-Market",
  description:
    "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Blog - AI Deployment for Mid-Market",
    description:
      "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business.",
    url: "/blog/",
    images: [
      {
        url: "/og/blog.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte - Blog - AI Deployment for Mid-Market",
      },
    ],
  },
  twitter: {
    title: "Blog - AI Deployment for Mid-Market",
    description:
      "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business.",
    images: ["/og/blog.png"],
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog",
  description:
    "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business.",
  url: "https://alphabyte.ai/blog/",
  isPartOf: {
    "@type": "WebSite",
    name: "Alphabyte",
    url: "https://alphabyte.ai",
  },
};

interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  sortOrder: number;
}

function getAllPosts(): BlogPostSummary[] {
  const blogDir = path.join(process.cwd(), "content/blog");
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(blogDir, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug: data.slug as string,
        title: data.title as string,
        excerpt: data.excerpt as string,
        publishedDate: data.publishedDate as string,
        readTime: data.readTime as string,
        tags: data.tags as string[],
        sortOrder: (data.sortOrder as number) ?? 999,
      };
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[84px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / INDEX / BLOG" />

          <div className="mb-7">
            <EyebrowChip>Alphabyte AI · Perspectives</EyebrowChip>
          </div>

          <TypedHero
            pre="AI Deployment for "
            word="Mid-Market."
            post=""
          />

          <HardRule className="mb-7" />

          <div className="max-w-[60ch] space-y-4">
            <p className="text-[17px] leading-[1.55] text-ink">
              Practical writing on AI deployment, citizen development, and the
              operational reality of making AI work inside a real mid-market
              business.
            </p>
          </div>
        </div>
      </HexgridSection>

      {/* 02 POSTS */}
      <section className="bg-white border-y border-border-default pt-20 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text={`02 / POSTS / ${posts.length} ARTICLES`} />

          <p className="font-mono text-[12px] text-muted-foreground mb-9 flex items-center">
            <Chevron />
            Most recent first.
          </p>

          <div className="border-t border-ink">
            {posts.map((post) => (
              <CommitRow
                key={post.slug}
                author={post.tags[0] ?? "Blog"}
                title={post.title}
                body={post.excerpt}
                tag={`${formatDate(post.publishedDate)} · ${post.readTime}`}
                href={`/blog/${post.slug}/`}
              />
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
              Want to talk through any of this in your context?
            </h2>
            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-7">
              45 minutes. No cost. No obligation.
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
