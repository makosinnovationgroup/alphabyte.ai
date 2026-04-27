import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-headline font-sans tracking-brand-snug mb-6">
        Privacy Policy
      </h1>
      <p className="text-body text-brand-ink/70">
        This page is under development. A full privacy policy will be published
        before the site goes live.
      </p>
    </main>
  );
}
