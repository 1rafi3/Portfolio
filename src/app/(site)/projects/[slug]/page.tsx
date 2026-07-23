import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SEO } from "@/config/seo";
import { projects } from "@/data/projects";
import { ProjectDetailSection } from "@/components/sections/ProjectDetailSection";

interface IProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: IProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — ${SEO.openGraph.title}`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: IProjectPageProps) {
  const { slug } = await params;

  return <ProjectDetailSection slug={slug} />;
}
