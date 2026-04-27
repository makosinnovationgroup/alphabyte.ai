import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alphabyte.ai/",
      lastModified: new Date("2026-04-27"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
