import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";

export function ProjectsSection() {
  return (
    <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading variant="page" label="Portfolio Archive" subtitle="Full-stack web applications, e-commerce platforms, and AI tools I have built.">
          All Projects
        </SectionHeading>

        <StaggerContainer className="mt-14">
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
