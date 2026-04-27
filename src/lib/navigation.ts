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
      { label: "Discovery", href: "/services/discovery/", description: "Scoping, strategy, and roadmaps" },
      { label: "Data", href: "/services/data/", description: "Pipelines, warehousing, and governance" },
      { label: "Enablement", href: "/services/enablement/", description: "Training, workshops, and adoption" },
      { label: "Infrastructure", href: "/services/infrastructure/", description: "MLOps, deployment, and scaling" },
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
    label: "Case Studies",
    href: "/case-studies/",
    children: [
      { label: "Sprinklermatic", href: "/case-studies/sprinklermatic/" },
      { label: "RecirQ", href: "/case-studies/recirq/" },
      { label: "HSC", href: "/case-studies/hsc/" },
    ],
    footerLink: { label: "View all case studies", href: "/case-studies/" },
  },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
];
