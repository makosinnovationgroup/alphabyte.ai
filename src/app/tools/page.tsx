import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tools — Claude, MCP, Custom AI Agents, On-Premise LLMs",
  description:
    "Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty. The deliberate stack we build with.",
  alternates: {
    canonical: "/tools/",
  },
  openGraph: {
    title: "Tools — Claude, MCP, Custom AI Agents, On-Premise LLMs",
    description:
      "Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty.",
    url: "/tools/",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Alphabyte — Tools: Claude, MCP, Custom AI Agents, On-Premise LLMs",
      },
    ],
  },
  twitter: {
    title: "Tools — Claude, MCP, Custom AI Agents, On-Premise LLMs",
    description:
      "Claude as the intelligence layer. MCP for connectivity. Custom agents for autonomy. On-premise LLMs for sovereignty.",
    images: ["/og/default.png"],
  },
};

const infrastructureTools = [
  {
    emoji: "⚡",
    bg: "bg-alphabyte-blue/10",
    title: "MCP Servers",
    body: "Governed, secure Claude access to your CRM, ERP, databases, and APIs. We build the server. You own the connection.",
  },
  {
    emoji: "🤖",
    bg: "bg-alphabyte-blue/10",
    title: "Custom AI Agents",
    body: "Autonomous agents with a Command Centre dashboard and human-in-the-loop approval gates.",
  },
  {
    emoji: "🖥️",
    bg: "bg-alphabyte-blue/10",
    title: "On-Premise LLMs",
    body: "Llama, Mistral on your infrastructure. For clients where cloud AI is ruled out by data sovereignty policy.",
  },
];

export default function ToolsPage() {
  return (
    <main>
      {/* Hero + Stat callouts */}
      <section className="bg-canvas px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-alphabyte-blue mb-8">
              Tools
            </p>
            <h1 className="text-headline font-sans tracking-brand-snug mb-6">
              We build with<br />
              <span className="text-alphabyte-blue">what actually works</span>.
            </h1>
            <p className="text-body text-foreground max-w-[60ch] mb-6">
              A deliberate stack &mdash; Claude as the intelligence layer, MCP
              as the connective tissue, custom agents as the operational layer.
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-alphabyte-blue/10 px-4 py-1.5 text-body-sm font-medium text-alphabyte-blue">
              &#9733; Anthropic Claude Partner &mdash; certified delivery team
            </span>
          </div>
        </div>
      </section>

      {/* Claude featured section */}
      <section className="bg-canvas px-6 border-t border-border-default">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr,1px,1fr] lg:gap-0">
            <div className="py-16 md:py-24 lg:pr-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-alphabyte-blue/10 text-2xl mb-6">
                🤖
              </div>
              <h2 className="text-headline font-sans tracking-brand-snug mb-2">
                Claude
              </h2>
              <span className="inline-flex items-center gap-1 rounded-md bg-alphabyte-blue/10 px-3 py-1 text-body-sm font-medium text-alphabyte-blue mb-6">
                &#9733; Claude Partner
              </span>
              <p className="text-body text-foreground max-w-[55ch]">
                Claude is the intelligence layer across every Alphabyte AI
                engagement. Custom knowledgebases, skills libraries, prompt
                toolkits &mdash; configured for how your team actually works.
                Connected to your data via MCP.
              </p>
            </div>

            <div className="hidden lg:block bg-border-default" />

            <div className="lg:py-24 lg:pl-16">
              <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground mb-6">
                How We Use It
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Executive knowledgebases",
                  "Custom skills & prompt libraries",
                  "SDLC plugins for dev teams",
                  "Compliance intelligence agents",
                  "Data intelligence agents",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-border-default px-4 py-2 text-body-sm text-foreground"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Connectivity */}
      <section className="bg-alphabyte-grey/50 px-6 py-16 md:py-24 border-t border-border-default">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <p className="text-body-sm font-bold uppercase tracking-brand-wide text-muted-foreground">
              Infrastructure &amp; Connectivity
            </p>
            <span className="flex-1 border-t border-border-default" />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {infrastructureTools.map((tool) => (
              <div
                key={tool.title}
                className="rounded-lg border border-dashed border-border-default bg-white p-6 md:p-8"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-xl mb-4 ${tool.bg}`}>
                  {tool.emoji}
                </div>
                <h3 className="text-body font-bold mb-3">{tool.title}</h3>
                <p className="text-body-sm text-muted-foreground">
                  {tool.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
