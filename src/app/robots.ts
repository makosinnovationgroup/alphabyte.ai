// Robots configuration for alphabyte.ai.
// If a staging deployment is added, override this to disallow: "/" so crawlers
// don't index preview builds.

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://alphabyte.ai/sitemap.xml",
  };
}
