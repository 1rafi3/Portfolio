import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SkillBadge } from "@/components/shared/SkillBadge";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";

export function SkillsSection() {
  return (
    <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading variant="page" label="Capabilities" subtitle="Technologies, frameworks, databases, and engineering tools I work with.">
          Skills &amp; Technologies
        </SectionHeading>

        <div className="mt-12 space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={category.categoryName}>
              <div className="flex items-center gap-4 mb-5">
                <h3 className="shrink-0 text-base font-mono font-semibold uppercase tracking-wider text-[#00E5FF] light:text-cyan-600">
                  {category.categoryName}
                </h3>
                {idx < skillCategories.length - 1 && (
                  <hr className="section-divider flex-1 border-slate-800 light:border-slate-200" />
                )}
              </div>
              <StaggerContainer staggerDelay={0.04}>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <SkillBadge skill={skill} />
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
