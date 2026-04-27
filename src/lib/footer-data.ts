export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocialLink extends FooterLink {
  icon: "linkedin" | "bluesky";
}

export const companyLinks: FooterLink[] = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const socialLinks: FooterSocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/alphabyte-solutions-inc",
    icon: "linkedin",
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/alphabytesolutions.bsky.social",
    icon: "bluesky",
  },
];

export const legalLinks: FooterLink[] = [
  { label: "Terms of Service", href: "/terms/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Cookies Policy", href: "/cookies/" },
];

export const address = {
  street: "155 Winges Road",
  city: "Vaughan, ON",
};
