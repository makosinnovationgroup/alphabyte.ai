import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a 45-minute discovery conversation with Alphabyte. No cost, no obligation. Describe your situation and we tell you candidly whether there is an engagement worth having.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Contact Us",
    description:
      "Book a 45-minute discovery conversation with Alphabyte. No cost, no obligation.",
    url: "/contact/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Contact Us",
      },
    ],
  },
  twitter: {
    title: "Contact Us",
    description:
      "Book a 45-minute discovery conversation with Alphabyte. No cost, no obligation.",
    images: ["/og/default.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Contact Us",
                item: "https://alphabyte.ai/contact/",
              },
            ],
          }),
        }}
      />
      <main>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-border-default bg-canvas px-6"
        >
          <div className="mx-auto max-w-[1600px] py-4">
            <ol className="flex items-center gap-2 text-body-sm">
              <li>
                <Link
                  href="/"
                  className="text-alphabyte-blue hover:underline underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground">Contact Us</li>
            </ol>
          </div>
        </nav>

        {/* Two-column layout — full-bleed dark left, light right */}
        <section className="relative">
          {/* Background split: dark left, light right */}
          <div className="absolute inset-0 md:grid md:grid-cols-[45fr_55fr]" aria-hidden="true">
            <div className="bg-foreground" />
            <div className="bg-canvas" />
          </div>

          <div className="relative mx-auto max-w-[1600px] px-6">
            <div className="grid md:grid-cols-[45fr_55fr]">
              {/* Left column — dark */}
              <div className="bg-foreground md:bg-transparent py-16 md:py-24 md:pr-12 lg:pr-16 -mx-6 px-6 md:mx-0 md:px-0">
                <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-green mb-8">
                  Get In Touch
                </p>
                <h1 className="text-display font-sans tracking-brand-tight text-white mb-8">
                  A discovery
                  <br />
                  conversation
                  <br />
                  takes{" "}
                  <span className="text-alphabyte-blue">45 minutes.</span>
                </h1>
                <p className="text-body text-white/60 mb-12 max-w-[45ch]">
                  No cost. No obligation. You describe your situation. We tell
                  you candidly whether there is an engagement worth having,
                  which service is the right entry point, and what you would
                  have in your hands at day 30.
                </p>

                {/* Contact details */}
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-5 w-5 text-white/70" />
                    </span>
                    <div>
                      <p className="text-body font-bold text-white">Email</p>
                      <a
                        href="mailto:hello@alphabyte.ai"
                        className="text-body-sm text-white/60 hover:text-alphabyte-blue"
                      >
                        hello@alphabyte.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                      <MapPin className="h-5 w-5 text-red-400" />
                    </span>
                    <div>
                      <p className="text-body font-bold text-white">Office</p>
                      <p className="text-body-sm text-white/60">
                        155 Winges Road, Unit 1, Vaughan, Ontario, Canada L4L
                        6C7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hairline rule + Follow Us */}
                <div className="border-t border-white/15 pt-8">
                  <p className="text-body-sm font-bold uppercase tracking-brand-wide text-white/40 mb-4">
                    Follow Us
                  </p>
                  <a
                    href="https://www.linkedin.com/company/alphabyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm text-alphabyte-blue hover:underline underline-offset-4"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-[3px] bg-alphabyte-blue">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3.5 w-3.5 text-white"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </span>
                    Alphabyte AI on LinkedIn
                  </a>
                </div>
              </div>

              {/* Right column — light */}
              <div className="py-16 md:py-24 md:pl-12 lg:pl-16">
                <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
                  Book a Discovery Call
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
