import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-headline font-sans tracking-brand-snug mb-6">
        Cookies Policy
      </h1>
      <p className="text-body text-brand-ink/70">
        This page is under development. A full cookies policy will be published
        before the site goes live.
      </p>
    </main>
  );
}
