"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, FolderCode, Lightbulb, Target, Sparkles, ListChecks } from "lucide-react";

import { projects } from "@/data/projects";
import type { IProject } from "@/types/project";
import { Badge } from "@/components/ui/badge";
import { ProjectActions } from "@/components/shared/ProjectActions";

interface IProjectDetailSectionProps {
  slug: string;
}

function DetailBlock({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="rounded-lg border border-border/50 bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectDetailSection({ slug }: IProjectDetailSectionProps) {
  const [heroError, setHeroError] = useState(false);
  const [galleryErrors, setGalleryErrors] = useState<Record<number, boolean>>({});
  const project: IProject | undefined = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
          {project.heroImage && !heroError ? (
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              width={project.heroImage.width}
              height={project.heroImage.height}
              className="h-full w-full object-cover"
              priority
              onError={() => setHeroError(true)}
            />
          ) : (
            <FolderCode className="h-12 w-12 text-foreground/20" />
          )}
        </div>

        <div className="mt-8 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
              {project.category}
            </span>
            <span className="text-xs capitalize text-muted-foreground">
              {project.status.replace("-", " ")}
            </span>
            {project.role && (
              <span className="text-xs text-muted-foreground">
                Role: {project.role}
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        {project.links && (
          <div className="mt-8">
            <ProjectActions links={project.links} />
          </div>
        )}

        <div className="mt-12 space-y-10">
          {project.fullDescription && (
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                About This Project
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.fullDescription}
              </p>
            </div>
          )}

          <DetailBlock
            icon={ListChecks}
            title="Features"
            items={project.features ?? []}
          />

          <DetailBlock
            icon={Target}
            title="Challenges"
            items={project.challenges ?? []}
          />

          <DetailBlock
            icon={Lightbulb}
            title="Lessons Learned"
            items={project.lessonsLearned ?? []}
          />

          <DetailBlock
            icon={Sparkles}
            title="Future Plans"
            items={project.futureImprovements ?? []}
          />
        </div>

        <div className="mt-12 rounded-lg border border-border/50 bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Gallery
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery && project.gallery.length > 0
              ? project.gallery.map((img, i) => (
                  galleryErrors[i] ? (
                    <div
                      key={i}
                      className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-border/50 bg-muted/30 transition-colors hover:border-primary/20"
                    >
                      <p className="text-xs text-muted-foreground/60">
                        Screenshot {i + 1}
                      </p>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={() => setGalleryErrors((prev) => ({ ...prev, [i]: true }))}
                      />
                    </div>
                  )
                ))
              : [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-border/50 bg-muted/30 transition-colors hover:border-primary/20"
                  >
                    <p className="text-xs text-muted-foreground/60">
                      Screenshot {i}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </article>
  );
}
