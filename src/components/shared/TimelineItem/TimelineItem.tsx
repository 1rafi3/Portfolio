import { Calendar } from "lucide-react";
import type { ITimelineEntry } from "./types";

interface ITimelineItemProps {
  entry: ITimelineEntry;
}

export function TimelineItem({ entry }: ITimelineItemProps) {
  return (
    <div className="relative pl-9 pb-10 last:pb-0">
      <div className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center">
        <div className="h-3 w-3 rounded-full border-2 border-primary bg-background ring-2 ring-background" />
      </div>
      <div className="absolute left-2.5 top-6 bottom-0 w-px bg-gradient-to-b from-border to-transparent last:hidden" />

      <div className="space-y-2.5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold text-foreground">
            {entry.title}
          </h3>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
            <Calendar className="h-3.5 w-3.5" />
            {entry.date}
          </span>
        </div>
        <p className="text-sm font-medium text-primary">{entry.subtitle}</p>
        {entry.description && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {entry.description}
          </p>
        )}
        {entry.achievements && entry.achievements.length > 0 && (
          <ul className="space-y-1.5 pt-1">
            {entry.achievements.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                {a}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
