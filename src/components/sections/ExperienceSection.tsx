import { Briefcase } from "lucide-react";

import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { TimelineItem } from "@/components/shared/TimelineItem";
import type { ITimelineEntry } from "@/components/shared/TimelineItem";

function formatDuration(start: string, end: string | "present"): string {
  return `${start} — ${end === "present" ? "Present" : end}`;
}

export function ExperienceSection() {
  const entries: ITimelineEntry[] = experiences.map((e) => ({
    title: e.role,
    subtitle: e.company,
    date: formatDuration(e.duration.start, e.duration.end),
    description: e.description,
    achievements: e.achievements,
  }));

  if (entries.length === 0) {
    return (
      <ScrollReveal>
        <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-4xl">
            <SectionHeading variant="page" label="Career Track" subtitle="Professional software engineering and development roles.">
              Experience
            </SectionHeading>
            <div className="mt-14 rounded-3xl glass-panel p-12 sm:p-16 text-center border border-white/10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                Seeking Full-Stack Opportunities
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-md mx-auto">
                Currently focusing on high-impact projects, AI application engineering, and open for internships or junior full-stack developer roles.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl">
          <SectionHeading variant="page" label="Career Track" subtitle="Professional software engineering and development roles.">
            Experience
          </SectionHeading>
          <div className="mt-14 rounded-3xl glass-panel p-7 sm:p-10 border border-white/10">
            <StaggerContainer staggerDelay={0.1}>
              {entries.map((entry) => (
                <StaggerItem key={entry.title}>
                  <TimelineItem entry={entry} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
