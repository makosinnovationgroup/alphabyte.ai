import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE = "https://alphabyte.ai";
const APP_DIR = path.join(process.cwd(), "src/app");

/**
 * Return file mtime for a route's page.tsx (or fall back to NOW for missing
 * files — should not happen for routes registered in this sitemap). This makes
 * the sitemap automatically reflect actual page changes in git so Googlebot
 * gets accurate recrawl signals.
 */
function pageMtime(route: string): Date {
  const candidates = [
    path.join(APP_DIR, route, "page.tsx"),
    path.join(APP_DIR, route, "page.mdx"),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return fs.statSync(c).mtime;
  }
  return new Date();
}

function newestMtime(...dates: Date[]): Date {
  return dates.reduce((acc, d) => (d > acc ? d : acc), new Date(0));
}

function getTeamMemberEntries(): MetadataRoute.Sitemap {
  const teamDir = path.join(process.cwd(), "content/team");
  if (!fs.existsSync(teamDir)) return [];
  return fs
    .readdirSync(teamDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({
      url: `${SITE}/team/${f.replace(/\.json$/, "")}/`,
      lastModified: fs.statSync(path.join(teamDir, f)).mtime,
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
      // Prefer frontmatter publishedDate; fall back to file mtime so posts
      // edited after publish still surface the update to crawlers.
      const fmDate = data.publishedDate
        ? new Date(data.publishedDate as string)
        : null;
      const fileMtime = fs.statSync(path.join(blogDir, f)).mtime;
      return {
        url: `${SITE}/blog/${f.replace(/\.mdx$/, "")}/`,
        lastModified: fmDate && fmDate > fileMtime ? fmDate : fileMtime,
      };
    });
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Service children
  const services = [
    "services/discovery",
    "services/data-readiness",
    "services/citizen-development",
    "services/executive-enablement",
    "services/infrastructure",
  ];
  // Tool children
  const tools = [
    "tools/claude",
    "tools/mcp",
    "tools/custom-ai-agents",
    "tools/on-premise-llm",
  ];
  // Case study children (construction-compliance-agent intentionally omitted from
  // discovery here too — its sitemap presence is decided in its own page meta)
  const caseStudies = [
    "our-work/circular-economy-platform",
    "our-work/media-buy-analytics",
    "our-work/community-housing-organisation",
  ];

  const teamEntries = getTeamMemberEntries();
  const blogEntries = getBlogPostEntries();

  // Hub lastmod = newest mtime of their children
  const servicesHubMtime = newestMtime(...services.map(pageMtime));
  const toolsHubMtime = newestMtime(...tools.map(pageMtime));
  const ourWorkHubMtime = newestMtime(...caseStudies.map(pageMtime));
  const teamHubMtime = newestMtime(
    ...teamEntries.map((e) => new Date(e.lastModified as Date)),
  );
  const blogHubMtime = newestMtime(
    ...blogEntries.map((e) => new Date(e.lastModified as Date)),
  );

  return [
    { url: `${SITE}/`, lastModified: pageMtime("") },
    { url: `${SITE}/services/`, lastModified: servicesHubMtime },
    ...services.map((r) => ({
      url: `${SITE}/${r}/`,
      lastModified: pageMtime(r),
    })),
    { url: `${SITE}/tools/`, lastModified: toolsHubMtime },
    ...tools.map((r) => ({
      url: `${SITE}/${r}/`,
      lastModified: pageMtime(r),
    })),
    { url: `${SITE}/our-work/`, lastModified: ourWorkHubMtime },
    ...caseStudies.map((r) => ({
      url: `${SITE}/${r}/`,
      lastModified: pageMtime(r),
    })),
    { url: `${SITE}/blog/`, lastModified: blogHubMtime },
    { url: `${SITE}/team/`, lastModified: teamHubMtime },
    { url: `${SITE}/about/`, lastModified: pageMtime("about") },
    { url: `${SITE}/contact/`, lastModified: pageMtime("contact") },
    // /terms/, /privacy/, /cookies/ intentionally excluded — they carry
    // noindex meta tags; including them was a self-contradictory signal.
    ...teamEntries,
    ...blogEntries,
  ];
}
