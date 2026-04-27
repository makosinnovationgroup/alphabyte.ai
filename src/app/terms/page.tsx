import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-headline font-sans tracking-brand-snug mb-6">
        Terms of Service
      </h1>
      <p className="text-body text-brand-ink/70">
        This page is under development. Full terms of service will be published
        before the site goes live.
      </p>
    </main>
  );
}
