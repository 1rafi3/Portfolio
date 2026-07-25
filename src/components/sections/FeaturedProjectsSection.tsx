import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  if (featured.length === 0) return null;

  return (
    <ScrollReveal>
      <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading variant="page" subtitle="A selection of my recent work">
            Featured Projects
          </SectionHeading>

          <StaggerContainer className="mt-12">
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => (
                <StaggerItem key={project.slug}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="mt-10 text-center">
            <Button variant="outline" render={<Link href="/projects" />}>
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
