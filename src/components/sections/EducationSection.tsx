import { education } from "@/data/education";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { StaggerItem } from "@/components/shared/StaggerItem";
import { TimelineItem } from "@/components/shared/TimelineItem";
import type { ITimelineEntry } from "@/components/shared/TimelineItem";

function formatDuration(start: string, end: string | "present"): string {
  return `${start} — ${end === "Present" ? "Present" : end}`;
}

export function EducationSection() {
  const entries: ITimelineEntry[] = education.map((e) => ({
    title: e.degree,
    subtitle: e.institution,
    date: formatDuration(e.duration.start, e.duration.end === "present" ? "Present" : e.duration.end),
    achievements: e.achievements,
    description: e.cgpa ? `CGPA: ${e.cgpa}` : undefined,
  }));

  return (
    <ScrollReveal>
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl">
          <SectionHeading variant="page" label="Academic Background" subtitle="Formal education, degrees, and academic milestones.">
            Education
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
