import type { ISkill } from "@/types/skill";

interface ISkillBadgeProps {
  skill: ISkill;
}

export function SkillBadge({ skill }: ISkillBadgeProps) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/[0.02] hover:shadow-sm">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary transition-colors duration-200 group-hover:bg-primary/15">
        {skill.name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{skill.name}</p>
        {skill.yearsOfExperience && (
          <p className="text-xs text-muted-foreground/70">
            {skill.yearsOfExperience} yr
            {skill.yearsOfExperience > 1 ? "s" : ""}
          </p>
        )}
      </div>
    </div>
  );
}
