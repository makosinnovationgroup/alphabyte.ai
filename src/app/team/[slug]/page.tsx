import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { TeamMemberPage } from "@/components/team-member-page";

const TEAM_DIR = path.join(process.cwd(), "content/team");

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
          url: "/og/default.png",
          width: 1200,
          height: 630,
          alt: `${member.name} — Alphabyte`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: ["/og/default.png"],
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
    worksFor: {
      "@type": "Organization",
      name: member.company,
      url: "https://alphabyte.ai",
    },
    url: `https://alphabyte.ai/team/${slug}/`,
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
        articles={member.articles}
        footerBio={member.footerBio}
      />
    </>
  );
}
