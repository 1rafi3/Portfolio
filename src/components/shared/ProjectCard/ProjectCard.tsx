"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FolderCode } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [thumbnailError, setThumbnailError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const colorClass =
    PLACEHOLDER_COLORS[(project.order ?? 0) % PLACEHOLDER_COLORS.length];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -6, y: x * 6 });
  }

  function handleMouseLeave() {
    setRotate({ x: 0, y: 0 });
  }

  const cardContent = (
    <>
      <div
        className={`flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br transition-all duration-500 group-hover/card:scale-105 ${colorClass}`}
        aria-hidden="true"
      >
        {project.thumbnail && !thumbnailError ? (
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            className="h-full w-full object-cover"
            onError={() => setThumbnailError(true)}
          />
        ) : (
          <FolderCode className="h-12 w-12 text-foreground/15 transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-foreground/25" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-1.5" aria-hidden="true">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="pointer-events-none rounded-md text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge
              variant="outline"
              className="pointer-events-none rounded-md text-xs"
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
    </>
  );

  if (shouldReduceMotion) {
    return (
      <Card className="group/card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
        <Link
          href={`/projects/${project.slug}`}
          className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {cardContent}
        </Link>
      </Card>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className="group/card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
        <Link
          href={`/projects/${project.slug}`}
          className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {cardContent}
        </Link>
      </Card>
    </motion.div>
  );
}
