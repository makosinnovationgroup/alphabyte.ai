export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  footerLink?: { label: string; href: string };
}

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Citizen Development", href: "/services/citizen-development/", description: "Every employee, now an AI developer." },
      { label: "Executive Enablement", href: "/services/executive-enablement/", description: "For leadership teams that need a fast, visible win." },
      { label: "Discovery", href: "/services/discovery/", description: "What should our AI strategy be?" },
      { label: "Data Readiness", href: "/services/data-readiness/", description: "Is our data ready for AI?" },
      { label: "Infrastructure", href: "/services/infrastructure/", description: "How do our systems use AI?" },
    ],
  },
  {
    label: "Tools",
    href: "/tools/",
    children: [
      { label: "Claude", href: "/tools/claude/", description: "Reasoning, writing, and analysis" },
      { label: "MCP", href: "/tools/mcp/", description: "Connect models to your tools" },
      { label: "Custom AI Agents", href: "/tools/custom-ai-agents/", description: "Purpose-built task automation" },
      { label: "On-Premise LLM", href: "/tools/on-premise-llm/", description: "Private, self-hosted models" },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work/",
    children: [
      { label: "Sprinklermatic", href: "/our-work/sprinklermatic/" },
      { label: "RecirQ", href: "/our-work/recirq/" },
      { label: "HSC", href: "/our-work/housing-services-corp/" },
    ],
    footerLink: { label: "View all work", href: "/our-work/" },
  },
  { label: "Team", href: "/team/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];
