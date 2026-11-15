import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { SkillBadge } from "@/components/shared/SkillBadge";

export function FeaturedSkillsSection() {
  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient radial glow */}
        <div
          className="ambient-glow w-[550px] h-[550px] -right-40 top-1/3 opacity-10"
          style={{ backgroundColor: "var(--cyan-accent)" }}
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <SectionHeading
            variant="page"
            label="Tech Stack"
            subtitle="Core technologies, frameworks, and tools powering my software engineering."
          >
            Featured Skills
          </SectionHeading>

          {skillCategories.map((category) => (
            <div key={category.categoryName} className="mt-12 first:mt-14">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--cyan-accent)" }}
                />
                <h3 className="text-sm font-mono font-semibold uppercase tracking-widest text-[#00E5FF] light:text-cyan-600">
                  {category.categoryName}
                </h3>
                <div className="h-px flex-1 bg-border/40" />
              </div>
              <StaggerContainer className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <SkillBadge skill={skill} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
