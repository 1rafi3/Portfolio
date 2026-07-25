import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { SkillBadge } from "@/components/shared/SkillBadge";

export function FeaturedSkillsSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading variant="page" subtitle="Technologies and tools I work with">
            Featured Skills
          </SectionHeading>

          {skillCategories.map((category) => (
            <div key={category.categoryName} className="mt-10 first:mt-12">
              <h3 className="mb-5 text-lg font-semibold text-foreground">
                {category.categoryName}
              </h3>
              <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
