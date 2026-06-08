export interface FooterLink {
  label: string;
  href: string;
}

export const companyLinks: FooterLink[] = [
  { label: "About", href: "/about/" },
  { label: "Team", href: "/team/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];

export const legalLinks: FooterLink[] = [
  { label: "Terms of Service", href: "/terms/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Cookies Policy", href: "/cookies/" },
];

export const contact = {
  address: {
    line1: "155 Winges Road, Unit 1",
    line2: "Vaughan, Ontario, Canada L4L 6C7",
  },
  // Split into user + domain so the full address never appears as a single
  // string in client-rendered HTML — keeps Cloudflare Email Address Obfuscation
  // from rewriting it to /cdn-cgi/l/email-protection (which 404s for crawlers).
  // The full address is still declared in JSON-LD via layout.tsx for SEO/schema.
  emailUser: "contact",
  emailDomain: "alphabyte.ai",
  email: "contact@alphabyte.ai",
  phone: "+1 (647) 204-4581",
  linkedin: {
    label: "Alphabyte AI on LinkedIn",
    href: "https://www.linkedin.com/company/alphabyte-solutions-inc",
  },
};
