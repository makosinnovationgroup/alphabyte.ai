import type { Metadata } from "next";

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

const featuredPost = {
  category: "CITIZEN DEVELOPMENT",
  title: "The window is open. Here is how to move before it closes.",
  excerpt:
    "Claude hit a threshold this year. Any employee who can describe their work can now build applications and automate workflows against live operational data. The mid-market organizations that move in the next six months will have a compounding capability advantage that takes years to close.",
  attribution: "Alphabyte AI \u00b7 April 2026",
};

const gridPosts = [
  {
    category: "AI STRATEGY",
    title: "Why we start with the people, not the process.",
    excerpt:
      "Every organization has someone who has quietly built something extraordinary with Claude. We find th\u2026",
    attribution: "Alphabyte AI \u00b7 April 2026",
  },
  {
    category: "DATA & INFRASTRUCTURE",
    title:
      "MCP servers: what they are, what they do, and why they matter.",
    excerpt:
      "Model Context Protocol is the architecture that connects Claude to the systems that run your busine\u2026",
    attribution: "Alphabyte AI \u00b7 April 2026",
  },
  {
    category: "CASE STUDIES",
    title:
      "How Sprinklermatic eliminated 40 hours per week of manual NFPA lookup.",
    excerpt:
      "A live NFPA fire codes compliance agent, built on a custom MCP server, in production for a $200M+ fi\u2026",
    attribution: "Alphabyte AI \u00b7 March 2026",
  },
  {
    category: "AI STRATEGY",
    title:
      "The data-first discipline: why we never build before we validate.",
    excerpt:
      "Most AI projects fail because of the data underneath them. Here is how we prevent that \u2014 and what we\u2026",
    attribution: "Alphabyte AI \u00b7 March 2026",
  },
  {
    category: "CITIZEN DEVELOPMENT",
    title: "What a Claude SDLC plugin actually does.",
    excerpt:
      "The single piece of infrastructure that turns informal AI usage into a governed, replicable capabili\u2026",
    attribution: "Alphabyte AI \u00b7 February 2026",
  },
];

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />

      {/* Hero */}
      <section className="border-b border-border-default bg-white px-6 pb-12 pt-10 md:px-10 md:pb-16 md:pt-14 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
            Alphabyte AI &middot; Perspectives
          </p>
          <h1 className="mt-3 text-display tracking-brand-tight">Blog</h1>
          <p className="mt-4 max-w-[60ch] text-body text-muted-foreground">
            Practical writing on AI deployment, citizen development, and the
            operational reality of making AI work inside a real mid-market
            business.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-canvas px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="overflow-hidden rounded-lg border border-border-default bg-white transition-shadow duration-200 motion-safe:hover:shadow-md md:grid md:grid-cols-2">
            {/* Image placeholder */}
            <div className="flex aspect-[4/3] items-center justify-center bg-foreground md:aspect-auto">
              <span className="text-body-sm text-muted-foreground">
                [Featured image]
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-10">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                {featuredPost.category}
              </p>
              <h2 className="mt-3 text-headline tracking-brand-snug text-foreground">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-body text-foreground">
                {featuredPost.excerpt}
              </p>
              <p className="mt-6 text-body-sm text-muted-foreground">
                {featuredPost.attribution}
              </p>
              <a
                href="#"
                className="mt-4 self-end text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
              >
                Read more &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-canvas px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg border border-border-default bg-white transition-shadow duration-200 motion-safe:hover:shadow-md"
              >
                {/* Image placeholder */}
                <div className="flex aspect-[16/9] items-center justify-center bg-foreground">
                  <span className="text-body-sm text-muted-foreground">
                    [Post image]
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue">
                    {post.category}
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-body-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-body-sm text-muted-foreground">
                      {post.attribution}
                    </p>
                    <a
                      href="#"
                      className="text-body-sm font-medium text-alphabyte-blue transition-colors hover:text-foreground"
                    >
                      Read more &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more button */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="rounded-md border border-border-default px-8 py-3 text-body-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
            >
              Load more posts
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
