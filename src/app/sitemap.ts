// Sitemap for alphabyte.ai — static export generates out/sitemap.xml at build time.
// When adding a new page, append its route here per seo/page-checklist.md item 7.

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alphabyte.ai/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
