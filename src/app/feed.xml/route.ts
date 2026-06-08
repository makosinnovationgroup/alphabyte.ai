import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE = "https://alphabyte.ai";
const BLOG_DIR = path.join(process.cwd(), "content/blog");

// Static export: pre-render this route at build time.
export const dynamic = "force-static";

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
}

function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug: data.slug as string,
        title: data.title as string,
        excerpt: data.excerpt as string,
        publishedDate: data.publishedDate as string,
        modifiedDate: data.modifiedDate as string | undefined,
        author: data.author as string | undefined,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime(),
    );
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(isoDate: string): string {
  return new Date(isoDate + "T00:00:00Z").toUTCString();
}

export function GET() {
  const posts = getAllPosts();
  const lastBuildDate = posts[0]
    ? rfc822(posts[0].modifiedDate || posts[0].publishedDate)
    : new Date().toUTCString();

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE}/blog/${p.slug}/</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}/</guid>
      <description>${escapeXml(p.excerpt)}</description>
      <pubDate>${rfc822(p.publishedDate)}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alphabyte Blog</title>
    <link>${SITE}/blog/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Practical writing on AI deployment, citizen development, and the operational reality of making AI work inside a real mid-market business.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
