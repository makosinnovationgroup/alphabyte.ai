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

      <div className="space-y-8 text-body text-brand-ink/70">
        <div className="space-y-4">
          <p>
            Alphabyte&rsquo;s websites and online services may use
            &ldquo;cookies.&rdquo; Cookies enable you to use shopping carts and
            to personalize your experience on our sites, tell us which parts of
            our websites people have visited, help us measure the effectiveness
            of ads and web searches, and give us insights into user behavior so
            we can improve our communications and products.
          </p>
          <p>
            If you want to disable cookies, check with your web browser provider
            to find out how to disable cookies.
          </p>
          <p>
            Because cookies are used throughout our websites, disabling them may
            prevent you from using certain parts of the sites.
          </p>
          <p>
            The cookies used on our websites have been categorized based on the
            guidelines found in the ICC UK Cookie guide. We use the following
            categories on our websites and other online services:
          </p>
        </div>

        {/* Strictly Necessary Cookies */}
        <section className="space-y-4">
          <h2 className="text-headline font-sans tracking-brand-snug text-brand-ink">
            Strictly Necessary Cookies
          </h2>
          <p>
            These cookies are essential to enable you to browse around our
            websites and use their features. Without these cookies, services like
            shopping baskets and e-billing cannot be provided.
          </p>
        </section>

        {/* Performance Cookies */}
        <section className="space-y-4">
          <h2 className="text-headline font-sans tracking-brand-snug text-brand-ink">
            Performance Cookies
          </h2>
          <p>
            These cookies collect information about how you use our websites —
            for instance, which pages you go to most. This data may be used to
            help optimize our websites and make them easier for you to navigate.
            These cookies are also used to let affiliates know if you came to one
            of our websites from an affiliate and if your visit resulted in the
            use or purchase of a product or service from us, including details of
            the product or service purchased. These cookies don&rsquo;t collect
            information that identifies you. All information these cookies
            collect is aggregated and therefore anonymous.
          </p>
        </section>

        {/* Functionality Cookies */}
        <section className="space-y-4">
          <h2 className="text-headline font-sans tracking-brand-snug text-brand-ink">
            Functionality Cookies
          </h2>
          <p>
            These cookies allow our websites to remember choices you make while
            browsing. For instance, we may store your geographic location in a
            cookie to ensure that we show you our website localized for your
            area. We may also remember preferences such as text size, fonts, and
            other customizable site elements. They may also be used to keep track
            of what featured products or videos have been viewed to avoid
            repetition. The information these cookies collect will not personally
            identify you, and they cannot track your browsing activity on
            non-Alphabyte websites.
          </p>
        </section>
      </div>
    </main>
  );
}
