import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Blog",
    description:
      "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business.",
    url: "/blog/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Blog",
      },
    ],
  },
  twitter: {
    title: "Blog",
    description:
      "Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business.",
    images: ["/og/default.png"],
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
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime(),
    );
}

function formatDate(isoDate: string): string {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />

      {/* Hero */}
      <section className="border-b border-border-default bg-white px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
            Alphabyte AI &middot; Perspectives
          </p>
          <h1 className="mt-4 text-display tracking-brand-tight">Blog</h1>
          <p className="mt-6 max-w-[42ch] text-body text-muted-foreground">
            Practical writing on AI deployment, citizen development, and the
            operational reality of making AI work inside a real mid-market
            business.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="bg-canvas px-6 pt-12 md:px-10 md:pt-16 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <Link
              href={`/blog/${featured.slug}/`}
              className="group overflow-hidden rounded-lg border border-border-default bg-white transition-shadow duration-200 motion-safe:hover:shadow-md md:grid md:grid-cols-2"
            >
              {/* Image placeholder */}
              <div className="flex aspect-[4/3] items-center justify-center bg-foreground md:aspect-auto">
                <span className="text-body-sm text-muted-foreground">
                  [Featured image]
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-10">
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-3 text-headline tracking-brand-snug text-foreground">
                  {featured.title}
                </h2>
                <p className="mt-4 text-body text-foreground">
                  {featured.excerpt}
                </p>
                <p className="mt-6 text-body-sm text-muted-foreground">
                  Alphabyte AI &middot; {formatDate(featured.publishedDate)}
                </p>
                <span className="mt-4 self-end text-body-sm font-medium text-alphabyte-blue transition-colors group-hover:text-foreground">
                  Read more &rarr;
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      {gridPosts.length > 0 && (
        <section className="bg-canvas px-6 py-12 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-border-default bg-white transition-shadow duration-200 motion-safe:hover:shadow-md"
                >
                  {/* Image placeholder */}
                  <div className="flex aspect-[16/9] items-center justify-center bg-foreground">
                    <span className="text-body-sm text-muted-foreground">
                      [Post image]
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-2 text-lg font-bold text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-body-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-body-sm text-muted-foreground">
                        Alphabyte AI &middot; {formatDate(post.publishedDate)}
                      </p>
                      <span className="text-body-sm font-medium text-alphabyte-blue transition-colors group-hover:text-foreground">
                        Read more &rarr;
                      </span>
                    </div>
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
