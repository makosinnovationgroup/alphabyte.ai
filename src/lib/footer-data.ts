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
  email: "hello@alphabyte.ai",
  phone: "+1 (647) 204-4581",
  linkedin: {
    label: "Alphabyte AI on LinkedIn",
    href: "https://www.linkedin.com/company/alphabyte-solutions-inc",
  },
};
