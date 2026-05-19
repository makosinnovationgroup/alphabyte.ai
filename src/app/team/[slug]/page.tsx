import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { TeamMemberPage } from "@/components/team-member-page";

const TEAM_DIR = path.join(process.cwd(), "content/team");
const BLOG_DIR = path.join(process.cwd(), "content/blog");

interface TeamMemberData {
  slug: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatarSrc: string;
  eyebrow: string;
  bio: string[];
  contact: {
    linkedin?: { label: string; href: string };
    email?: { label: string; href: string };
  };
  credentials: {
    degree: { title: string; subtitle: string };
    institution: { title: string; subtitle: string };
    keyCoursework: string;
  };
  careerTimeline: { period: string; role: string; organization: string }[];
  expertise: string[];
  achievements: string[];
  thoughtLeadership: {
    type: string;
    title: string;
    description: string;
    href: string | null;
  }[];
  articles: {
    category: string;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
  }[];
  pills?: string[];
  footerBio: { name: string; description: string };
}

function getTeamMemberSlugs(): string[] {
  if (!fs.existsSync(TEAM_DIR)) return [];
  return fs
    .readdirSync(TEAM_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

function getTeamMember(slug: string): TeamMemberData | null {
  const filePath = path.join(TEAM_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function getArticlesByAuthor(authorSlug: string) {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
      const { data } = matter(raw);
      return data;
    })
    .filter((d) => d.author === authorSlug)
    .sort((a, b) => new Date(b.publishedDate as string).getTime() - new Date(a.publishedDate as string).getTime())
    .map((d) => ({
      category: ((d.tags as string[]) || [])[0] || "Blog",
      title: d.title as string,
      excerpt: d.excerpt as string,
      date: new Date(d.publishedDate as string + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      slug: d.slug as string,
    }));
}

export function generateStaticParams() {
  return getTeamMemberSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};

  const title = `${member.name}, ${member.role}`;
  const description =
    member.bio[0].length > 160
      ? member.bio[0].slice(0, 157) + "..."
      : member.bio[0];

  const ogImage = fs.existsSync(path.join(process.cwd(), `public/og/team-${slug}.png`))
    ? `/og/team-${slug}.png`
    : "/og/default.png";

  return {
    title,
    description,
    alternates: {
      canonical: `/team/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `/team/${slug}/`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Alphabyte - ${member.name}, ${member.role}`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function TeamMemberSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio[0] || "",
    image: `https://alphabyte.ai${member.avatarSrc}`,
    worksFor: {
      "@type": "Organization",
      name: member.company,
      url: "https://alphabyte.ai",
    },
    url: `https://alphabyte.ai/team/${slug}/`,
    knowsAbout: member.expertise,
    ...(member.contact.linkedin
      ? { sameAs: [member.contact.linkedin.href] }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://alphabyte.ai/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Team",
        item: "https://alphabyte.ai/team/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: member.name,
        item: `https://alphabyte.ai/team/${slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema, breadcrumbSchema]),
        }}
      />
      <TeamMemberPage
        slug={slug}
        breadcrumb={{
          items: [
            { label: "Home", href: "/" },
            { label: "Team", href: "/team/" },
            { label: member.name },
          ],
        }}
        avatarSrc={member.avatarSrc}
        eyebrow={member.eyebrow}
        name={member.name}
        role={member.role}
        company={member.company}
        location={member.location}
        bio={member.bio}
        contact={member.contact}
        credentials={member.credentials}
        careerTimeline={member.careerTimeline}
        expertise={member.expertise}
        achievements={member.achievements}
        thoughtLeadership={member.thoughtLeadership}
        articles={getArticlesByAuthor(slug)}
        pills={member.pills}
        footerBio={member.footerBio}
      />
    </>
  );
}
