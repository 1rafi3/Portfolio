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
      <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading variant="page" subtitle="My academic background">
            Education
          </SectionHeading>

          <div className="mt-12 rounded-lg border border-border/50 bg-card p-6">
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
