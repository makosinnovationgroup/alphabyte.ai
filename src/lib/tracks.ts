import type { Track } from "@/components/operator";

export const tracks: Track[] = [
  {
    slug: "citizen-development",
    label: "Citizen Dev",
    flagship: true,
    question: "How do our people use AI?",
    heading: "Citizen Dev",
    body: "Governed Claude environment, SDLC tooling, and guardrails — deployed against the workflows your team already owns. From informal usage to a managed, compounding capability. Most clients have something running in week three.",
    rightForYou:
      "Your team is using Claude informally, or you want every employee operating as an AI developer.",
    cta: { label: "Get started →", href: "/services/citizen-development/" },
    pills: [
      "Custom SDLC Plugin",
      "Knowledgebases & Skills",
      "Guardrails Framework",
      "Governed Data via MCP",
    ],
    timeline: "3 to 12 weeks",
  },
  {
    slug: "executive-enablement",
    label: "Executive Enablement",
    question: "How do our people use AI?",
    heading: "Executive Enablement",
    body: "A custom Claude environment built from your actual operational data — knowledgebases, skills, prompt toolkit. Most executives see measurable time savings in the first sprint. The internal proof point that makes the broader programme easy to resource.",
    rightForYou:
      "Leadership wants a concrete AI win before a board meeting or a broader rollout.",
    cta: { label: "Get started →", href: "/services/executive-enablement/" },
    pills: [
      "Custom Knowledgebases",
      "Custom Skills Library",
      "Prompt Toolkit",
      "Claude Teams Configuration",
      "Knowledge Transfer Session",
    ],
    timeline: "2 to 4 weeks",
  },
  {
    slug: "discovery",
    label: "Discovery",
    question: "What should our AI strategy be?",
    heading: "Discovery",
    body: "Four weeks, not six months. We come in with a point of view, not a blank whiteboard. Stakeholder workshops, use case prioritization, gap analysis, and a roadmap you leave with.",
    rightForYou:
      "You have not made a meaningful AI investment yet and want to know where to start without wasting the next six months.",
    cta: { label: "Get started →", href: "/services/discovery/" },
    pills: [
      "Stakeholder Sessions",
      "Use Case Development ×3",
      "Gap Analysis",
      "Findings & Roadmap",
    ],
    timeline: "3 to 5 weeks",
  },
  {
    slug: "data-readiness",
    label: "Data Readiness",
    question: "Is our data ready for AI?",
    heading: "Data Readiness",
    body: "Most AI projects fail because nobody validated the data underneath before the build started. Data quality audit, governance assessment, AI readiness scorecard, and a remediation pathway.",
    rightForYou:
      "You are in a regulated industry and data compliance is a hard prerequisite to any AI deployment.",
    cta: { label: "Get started →", href: "/services/data-readiness/" },
    pills: [
      "Data Quality Audit",
      "Governance Assessment",
      "AI Readiness Scorecard",
      "Remediation Pathway",
    ],
    timeline: "4 to 8 weeks",
  },
  {
    slug: "infrastructure",
    label: "Infrastructure",
    question: "How do our systems use AI?",
    heading: "Infrastructure",
    body: "Where Claude stops being a productivity tool and starts being an operational capability connected to your systems. Custom MCP servers, autonomous agents, on-premise LLMs, fine-tuned models.",
    rightForYou:
      "Your team is enabled and data is validated — ready to connect AI to live operational systems.",
    cta: { label: "Get started →", href: "/services/infrastructure/" },
    pills: [
      "Custom MCP Servers",
      "Custom AI Agents",
      "Agent Command Centre",
      "On-Premise LLM",
      "Fine-Tuned LLMs",
    ],
    timeline: "4 to 36 weeks",
  },
];
