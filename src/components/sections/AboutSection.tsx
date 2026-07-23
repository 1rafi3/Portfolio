import { about } from "@/data/about";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading align="left" variant="page" subtitle="Get to know me">
          About Me
        </SectionHeading>

        {about.biography.length > 0 && (
          <div className="mt-10 space-y-4">
            {about.biography.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {about.personality && about.personality.length > 0 && (
          <div className="mt-12 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">Personality</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {about.personality.map((trait, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        )}

        {about.interests && about.interests.length > 0 && (
          <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">Interests</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.interests.map((interest, i) => (
                <span
                  key={i}
                  className="rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/20 hover:bg-primary/5"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        {about.programmingJourney && about.programmingJourney.length > 0 && (
          <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              My Journey
            </h3>
            <div className="mt-4 space-y-3">
              {about.programmingJourney.map((step, i) => (
                <div key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-sm text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {about.careerGoals && about.careerGoals.length > 0 && (
          <div className="mt-8 rounded-xl border border-border/50 bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Career Goals
            </h3>
            <ul className="mt-4 space-y-2">
              {about.careerGoals.map((goal, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
