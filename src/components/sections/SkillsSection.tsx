import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SkillBadge } from "@/components/shared/SkillBadge";

export function SkillsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading variant="page" subtitle="Technologies and tools I work with">
          Skills
        </SectionHeading>

        <div className="mt-12 space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={category.categoryName}>
              <div className="flex items-center gap-4">
                <h3 className="shrink-0 text-lg font-semibold text-foreground">
                  {category.categoryName}
                </h3>
                {idx < skillCategories.length - 1 && (
                  <hr className="section-divider flex-1" />
                )}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
