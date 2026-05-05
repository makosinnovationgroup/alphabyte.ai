import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getTeamMemberEntries(): MetadataRoute.Sitemap {
  const teamDir = path.join(process.cwd(), "content/team");
  if (!fs.existsSync(teamDir)) return [];
  return fs
    .readdirSync(teamDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({
      url: `https://alphabyte.ai/team/${f.replace(/\.json$/, "")}/`,
      lastModified: new Date("2026-04-29"),
    }));
}

function getBlogPostEntries(): MetadataRoute.Sitemap {
  const blogDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(blogDir, f), "utf-8");
      const { data } = matter(raw);
      return {
        url: `https://alphabyte.ai/blog/${f.replace(/\.mdx$/, "")}/`,
        lastModified: new Date(data.publishedDate as string),
      };
    });
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alphabyte.ai/",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://alphabyte.ai/services/",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://alphabyte.ai/services/discovery/",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://alphabyte.ai/services/data-readiness/",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://alphabyte.ai/services/citizen-development/",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://alphabyte.ai/services/executive-enablement/",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://alphabyte.ai/services/infrastructure/",
      lastModified: new Date("2026-04-27"),
    },
    {
      url: "https://alphabyte.ai/tools/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/tools/claude/",
      lastModified: new Date("2026-04-27"),
    },
    {
      url: "https://alphabyte.ai/tools/mcp/",
      lastModified: new Date("2026-04-27"),
    },
    {
      url: "https://alphabyte.ai/tools/custom-ai-agents/",
      lastModified: new Date("2026-04-27"),
    },
    {
      url: "https://alphabyte.ai/tools/on-premise-llm/",
      lastModified: new Date("2026-04-27"),
    },
    {
      url: "https://alphabyte.ai/our-work/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/our-work/fire-protection-compliance/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/our-work/circular-economy-platform/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/our-work/community-housing-organisation/",
      lastModified: new Date("2026-04-28"),
    },
    {
      url: "https://alphabyte.ai/blog/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/team/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/about/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/contact/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/terms/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/privacy/",
      lastModified: new Date("2026-04-29"),
    },
    {
      url: "https://alphabyte.ai/cookies/",
      lastModified: new Date("2026-04-29"),
    },
    ...getTeamMemberEntries(),
    ...getBlogPostEntries(),
  ];
}
