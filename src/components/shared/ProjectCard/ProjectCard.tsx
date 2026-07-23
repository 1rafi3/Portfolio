import Link from "next/link";
import { ArrowRight, FolderCode } from "lucide-react";

import type { IProject } from "@/types/project";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TProjectCardProps {
  project: IProject;
}

const PLACEHOLDER_COLORS = [
  "from-blue-600/20 to-blue-900/20",
  "from-emerald-600/20 to-emerald-900/20",
  "from-violet-600/20 to-violet-900/20",
];

export function ProjectCard({ project }: TProjectCardProps) {
  const colorClass =
    PLACEHOLDER_COLORS[(project.order ?? 0) % PLACEHOLDER_COLORS.length];

  return (
    <Card className="group/card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg">
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <div
          className={`flex aspect-video items-center justify-center bg-gradient-to-br transition-colors duration-300 group-hover/card:from-primary/15 group-hover/card:to-primary/5 ${colorClass}`}
          aria-hidden="true"
        >
          <FolderCode className="h-12 w-12 text-foreground/15 transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-foreground/25" />
        </div>

        <div className="flex flex-1 flex-col gap-3 px-5 py-5">
          <div className="flex flex-wrap gap-1.5" aria-hidden="true">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="pointer-events-none rounded-md text-[11px]"
              >
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge
                variant="outline"
                className="pointer-events-none rounded-md text-[11px]"
              >
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>

          <h3 className="text-base font-semibold text-foreground transition-colors duration-200 group-hover/card:text-primary">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>

          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground/70">
              {project.category}
            </span>
            <span
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-200 group-hover/card:gap-1.5"
              aria-hidden="true"
            >
              View Details
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/card:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
