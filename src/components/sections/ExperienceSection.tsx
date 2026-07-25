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
        <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading variant="page" subtitle="My professional background">
              Experience
            </SectionHeading>
            <div className="mt-12 rounded-lg border border-border/50 bg-card p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Briefcase className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                No experience listed yet
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I&apos;m currently building my professional experience. Check back
                later for updates.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading variant="page" subtitle="My professional background">
            Experience
          </SectionHeading>
          <StaggerContainer className="mt-12" staggerDelay={0.1}>
            {entries.map((entry) => (
              <StaggerItem key={entry.title}>
                <TimelineItem entry={entry} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </ScrollReveal>
  );
}
