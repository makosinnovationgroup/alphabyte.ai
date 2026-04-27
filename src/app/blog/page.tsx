import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Deployment & Data Strategy Writing",
  description:
    "Thinking on AI deployment, data strategy, and the work of building production AI systems. From the Alphabyte team.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Blog — AI Deployment & Data Strategy Writing",
    description:
      "Thinking on AI deployment, data strategy, and the work of building production AI systems.",
    url: "/blog/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Blog: AI Deployment & Data Strategy Writing",
      },
    ],
  },
  twitter: {
    title: "Blog — AI Deployment & Data Strategy Writing",
    description:
      "Thinking on AI deployment, data strategy, and the work of building production AI systems.",
    images: ["/og/default.png"],
  },
};

export default function BlogPage() {
  return (
    <main>
      <section className="bg-canvas px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
              Blog
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-6">
              Writing.
            </h1>
            <p className="text-body text-muted-foreground max-w-[55ch]">
              Thinking on AI deployment, data strategy, and the work itself.
              Coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
