import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alphabyte.ai/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://alphabyte.ai/services/",
      lastModified: new Date("2026-04-27"),
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
      url: "https://alphabyte.ai/services/data/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/services/enablement/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://alphabyte.ai/services/infrastructure/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
