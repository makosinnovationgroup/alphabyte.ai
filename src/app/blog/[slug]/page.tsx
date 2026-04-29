import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogPostPage } from "@/components/blog-post-page";
import { ThirtyDays } from "@/components/thirty-days";

/* ------------------------------------------------------------------ */
/*  Content helpers                                                     */
/* ------------------------------------------------------------------ */

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const TEAM_DIR = path.join(process.cwd(), "content/team");

function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

interface BlogFrontmatter {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  author: string;
  tags: string[];
  topics: string[];
  relatedService: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  readyToMoveCard: {
    heading: string;
    body: string;
    ctaLabel: string;
  };
  thirtyDays?: {
    weeks: { label: string; body: string }[];
    dayThirty: { label: string; body: string };
  };
  tableOfContents: { label: string; anchorId: string }[];
}

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  avatarSrc: string;
  bio: string[];
}

const HEADING_ID_RE = /^(## .+?)\s*\{#[a-z0-9-]+\}\s*$/gm;

function getPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const cleanContent = content.replace(HEADING_ID_RE, "$1");
  return { frontmatter: data as BlogFrontmatter, content: cleanContent };
}

function getTeamMember(authorSlug: string): TeamMember {
  const filePath = path.join(TEAM_DIR, `${authorSlug}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getOtherPosts(currentSlug: string, limit = 3) {
  return getBlogSlugs()
    .filter((s) => s !== currentSlug)
    .map((s) => {
      const { frontmatter } = getPost(s);
      return frontmatter;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime(),
    )
    .slice(0, limit);
}

/* ------------------------------------------------------------------ */
/*  Custom MDX components                                               */
/* ------------------------------------------------------------------ */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildMdxComponents(
  toc: { label: string; anchorId: string }[],
  thirtyDaysData?: { weeks: { label: string; body: string }[]; dayThirty: { label: string; body: string } },
) {
  const labelToId = new Map(toc.map((e) => [e.label.toLowerCase(), e.anchorId]));

  return {
    h2: (props: React.ComponentPropsWithoutRef<"h2">) => {
      const text =
        typeof props.children === "string" ? props.children : "";
      const id =
        labelToId.get(text.toLowerCase()) || slugify(text);
      return (
        <h2
          {...props}
          id={id}
          className="pt-4 text-lg font-bold text-foreground first:pt-0"
        />
      );
    },
    p: (props: React.ComponentPropsWithoutRef<"p">) => (
      <p {...props} className="text-body text-foreground" />
    ),
    blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        {...props}
        className="border-l-4 border-alphabyte-blue bg-alphabyte-blue/10 rounded-r-md py-4 pl-6 pr-4 text-lg italic text-foreground"
      />
    ),
    ThirtyDays: thirtyDaysData
      ? () => <ThirtyDays weeks={thirtyDaysData.weeks} dayThirty={thirtyDaysData.dayThirty} />
      : () => null,
  };
}

/* ------------------------------------------------------------------ */
/*  Static generation                                                   */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getPost(slug);

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    alternates: {
      canonical: `/blog/${slug}/`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      url: `/blog/${slug}/`,
      type: "article",
      publishedTime: frontmatter.publishedDate,
      images: [
        {
          url: "/og/default.png",
          width: 1200,
          height: 630,
          alt: `${frontmatter.title} — Alphabyte`,
        },
      ],
    },
    twitter: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: ["/og/default.png"],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, content } = getPost(slug);
  const author = getTeamMember(frontmatter.author);
  const otherPosts = getOtherPosts(slug);

  const dateAndReadTime = `${formatDate(frontmatter.publishedDate)} · ${frontmatter.readTime}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    image: "https://alphabyte.ai/og/default.png",
    datePublished: frontmatter.publishedDate,
    author: {
      "@type": "Person",
      name: author.name,
      url: `https://alphabyte.ai/team/${author.slug}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "Alphabyte",
      logo: {
        "@type": "ImageObject",
        url: "https://alphabyte.ai/logos/alphabyte-logo-blue.svg",
      },
    },
  };

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
        name: "Blog",
        item: "https://alphabyte.ai/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: frontmatter.title,
        item: `https://alphabyte.ai/blog/${slug}/`,
      },
    ],
  };

  const components = buildMdxComponents(frontmatter.tableOfContents, frontmatter.thirtyDays);

  const bodyContent = (
    <MDXRemote source={content} components={components} />
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([blogPostingSchema, breadcrumbSchema]),
        }}
      />
      <BlogPostPage
        breadcrumb={{
          items: [
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog/" },
            { label: frontmatter.title },
          ],
        }}
        tags={frontmatter.tags}
        h1={frontmatter.title}
        excerpt={frontmatter.excerpt}
        author={{
          name: author.name,
          role: author.role,
          avatarSrc: author.avatarSrc,
          bio: author.bio[0],
          profileHref: `/team/${author.slug}/`,
          dateAndReadTime,
        }}
        bodyContent={bodyContent}
        tableOfContents={frontmatter.tableOfContents}
        relatedService={frontmatter.relatedService}
        readyToMoveCard={frontmatter.readyToMoveCard}
        topics={frontmatter.topics}
        moreFromBlog={otherPosts.map((p) => ({
          tags: p.tags,
          title: p.title,
          excerpt: p.excerpt,
          href: `/blog/${p.slug}/`,
        }))}
      />
    </>
  );
}
