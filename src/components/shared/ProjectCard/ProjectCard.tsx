"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FolderCode } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { IProject } from "@/types/project";
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
    <div className="flex h-full flex-col">
      <div
        className={`relative flex aspect-video items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br transition-all duration-500 group-hover/card:scale-102 ${colorClass}`}
        aria-hidden="true"
      >
        {project.thumbnail && !thumbnailError ? (
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
            onError={() => setThumbnailError(true)}
          />
        ) : (
          <FolderCode className="h-12 w-12 text-foreground/15 transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-foreground/25" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-6">
        <div className="flex flex-wrap gap-1.5" aria-hidden="true">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="pointer-events-none rounded-md text-[11px] font-mono border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge
              variant="outline"
              className="pointer-events-none rounded-md text-[11px] font-mono border-white/10 bg-white/5"
            >
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-bold text-foreground transition-colors duration-200 group-hover/card:text-[color:var(--cyan-accent)]">
          {project.title}
        </h3>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/40">
          <span className="text-xs font-mono text-muted-foreground/80">
            {project.category}
          </span>
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--cyan-accent)] transition-all duration-200 group-hover/card:gap-2"
            aria-hidden="true"
          >
            View Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/card:translate-x-0.5" />
          </span>
        </div>
      </div>
    </div>
  );

  const containerClasses =
    "group/card flex flex-col overflow-hidden rounded-2xl glass-panel transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--cyan-accent)]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,229,255,0.15)]";

  if (shouldReduceMotion) {
    return (
      <div className={containerClasses}>
        <Link
          href={`/projects/${project.slug}`}
          className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {cardContent}
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={containerClasses}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-1 flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {cardContent}
      </Link>
    </motion.div>
  );
}
