import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Alphabyte AI & Data Consulting",
  description:
    "An AI and data consultancy for companies with real data problems. Small, senior, and deliberate about the work we take on.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About — Alphabyte AI & Data Consulting",
    description:
      "An AI and data consultancy for companies with real data problems. Small, senior, and deliberate about the work we take on.",
    url: "/about/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — About: AI & Data Consulting",
      },
    ],
  },
  twitter: {
    title: "About — Alphabyte AI & Data Consulting",
    description:
      "An AI and data consultancy for companies with real data problems. Small, senior, and deliberate about the work we take on.",
    images: ["/og/default.png"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-canvas px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
              About
            </p>
            <h1 className="text-display font-sans tracking-brand-tight mb-6">
              About Alphabyte.
            </h1>
            <p className="text-body text-muted-foreground max-w-[55ch]">
              We&rsquo;re an AI and data consultancy. We work with companies
              that have real data problems and want to solve them properly. More
              here soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
