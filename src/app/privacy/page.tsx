import type { Metadata } from "next";
import Link from "next/link";
import {
  EyebrowChip,
  HardRule,
  HexgridSection,
  SectionLabel,
} from "@/components/operator";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/privacy/",
  },
  robots: { index: false, follow: true },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  url: "https://alphabyte.ai/privacy/",
  description:
    "How Alphabyte collects, uses, and protects your personal information.",
  isPartOf: {
    "@id": "https://alphabyte.ai/#website",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />

      {/* 01 HERO */}
      <HexgridSection className="relative pt-14 pb-[64px]">
        <div className="mx-auto max-w-[1400px] px-8">
          <SectionLabel text="01 / LEGAL / PRIVACY POLICY" />

          <div className="mb-7">
            <EyebrowChip>Legal · Privacy</EyebrowChip>
          </div>

          <h1 className="font-sans font-black text-display text-ink mb-7 text-balance tracking-[-0.02em] leading-[0.98]">
            Privacy Policy<span className="text-alphabyte-blue">.</span>
          </h1>

          <HardRule className="mb-7" />
        </div>
      </HexgridSection>

      {/* 02 BODY */}
      <section className="bg-white border-y border-border-default pt-16 pb-20">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="blog-prose">
            <h2>Your Privacy Is Important to Alphabyte</h2>
            <p>
              In the course of serving you as an individual client or as
              someone associated with a corporate client, Alphabyte may obtain
              personal information about you. Obtaining this information is
              important to our ability to deliver the highest level of service
              to you, but we also recognize that you expect us to treat this
              information appropriately.
            </p>
            <p>
              This policy describes the types of personal information we may
              collect about you, the purposes for which we use the
              information, the circumstances in which we may share the
              information and the steps that we take to safeguard the
              information to protect your privacy. As used throughout this
              policy, the term &ldquo;Alphabyte&rdquo; refers to Alphabyte
              Solutions, Inc.
            </p>

            <h2>Information Security: How We Protect Your Data and Privacy</h2>
            <p>
              Alphabyte is committed to protecting the privacy and
              confidentiality of your personal information. We limit access to
              your personal information to authorized Alphabyte employees, our
              service providers are held to stringent standards of privacy. We
              also maintain physical, electronic and procedural safeguards to
              protect the information against loss, misuse, damage or
              modification and unauthorized access or disclosure. Some of the
              other central features of our information security program are:
            </p>
            <ul>
              <li>
                A dedicated agent that designs, implements and provides
                oversight to our information security;
              </li>
              <li>The use of specialized technology such as firewalls;</li>
              <li>
                Testing of the security and operability of products and
                services before they are introduced to the Internet, as well as
                ongoing scanning for publicly known vulnerabilities in the
                technology;
              </li>
              <li>
                Internal and external reviews of our Internet sites and
                services;
              </li>
              <li>
                Monitoring of our systems infrastructure to detect weaknesses
                and potential intrusions;
              </li>
              <li>
                Implementing controls to identify, authenticate and authorize
                access to various systems or sites;
              </li>
              <li>
                Protecting information during transmission through various
                means including, where appropriate, encryption; and
              </li>
              <li>
                Providing Alphabyte personnel with relevant training and
                continually updating our security practices in light of new
                risks and developments in technology.
              </li>
            </ul>

            <h2>The Sources of Information</h2>
            <p>
              In the course of using the Service, we may ask you to provide us
              with, or grant us access to, or permission to obtain, certain
              personally identifiable information that can be used to contact
              or identify you; personally identifiable information may include,
              but is not limited to, your name, company name, email address,
              postal address and phone number (&ldquo;Personal
              Information&rdquo;).
            </p>

            <h2>Our Use of Your Personal Information</h2>
            <ul>
              <li>
                Administer, operate, facilitate and manage your relationship
                and/or account with Alphabyte. This may include sharing such
                information internally, as described in the following two
                sections, respectively;
              </li>
              <li>
                Contact you or, if applicable, your designated
                representative(s) by post, telephone, electronic mail, etc., in
                connection with your relationship and/or account;
              </li>
              <li>
                Provide you with information (such as new technology),
                recommendations, or advice concerning products and services
                offered by Alphabyte; and
              </li>
              <li>
                Facilitate our internal business operations, including
                assessing and managing technical requirements and fulfilling
                our legal and regulatory requirements.
              </li>
            </ul>

            <h2>Disclosures of Your Personal Information to Third Parties</h2>
            <p>
              Alphabyte does not under any circumstances disclose your personal
              information to third parties, except as under limited
              circumstances, your personal information may be disclosed to
              third parties as permitted by, or to comply with, applicable laws
              and regulations; for instance, when responding to a subpoena or
              similar legal process, to protect against fraud and to otherwise
              cooperate with law enforcement or regulatory authorities.
            </p>
            <p>You should know that Alphabyte will not sell your personal information.</p>

            <h2>Privacy and the Internet</h2>
            <p>
              The following additional information will be of interest to you
              as a visitor to this site:
            </p>
            <p>
              &ldquo;
              <Link href="/cookies/">Cookies</Link>
              &rdquo; are small text files that may be placed on your Web
              browser when you visit our Web sites or when you view
              advertisements we have placed on other Web sites.
            </p>

            <h2>Other Privacy Policies or Statements; Changes to Policy</h2>
            <p>
              This policy provides a general statement of the ways in which
              Alphabyte protects your personal information. You may, however,
              in connection with specific products or services offered by
              Alphabyte, be provided with privacy policies or statements that
              supplement this policy. This policy may be changed from time to
              time to reflect changes in our practices concerning the
              collection and use of personal information. The revised policy
              will be effective immediately upon posting to our Web site. This
              version of the Policy is effective January 5, 2016.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border-default bg-canvas"
    >
      <ol className="mx-auto max-w-[1400px] flex items-center gap-2 px-8 py-3 font-mono text-[11px] tracking-[0.04em] uppercase">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-muted-foreground">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-alphabyte-blue transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-ink">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
