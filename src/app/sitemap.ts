import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alphabyte.ai/",
      lastModified: new Date("2026-04-28"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://alphabyte.ai/services/",
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://alphabyte.ai/services/discovery/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/services/data-readiness/",
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/services/executive-enablement/",
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/services/infrastructure/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/tools/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://alphabyte.ai/tools/claude/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/tools/mcp/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/tools/custom-ai-agents/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/tools/on-premise-llm/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/our-work/",
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://alphabyte.ai/our-work/sprinklermatic/",
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/our-work/recirq/",
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/our-work/housing-services-corp/",
      lastModified: new Date("2026-04-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/blog/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/about/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
