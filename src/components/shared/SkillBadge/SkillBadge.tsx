"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { ISkill } from "@/types/skill";

interface ISkillBadgeProps {
  skill: ISkill;
}

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "oklch(0.55 0.2 260)",
  Languages: "oklch(0.6 0.15 200)",
  "Tools & Platforms": "oklch(0.7 0.15 80)",
};

export function SkillBadge({ skill }: ISkillBadgeProps) {
  const shouldReduceMotion = useReducedMotion();
  const accentColor = CATEGORY_COLORS[skill.category ?? ""] ?? "oklch(0.55 0.2 260)";

  const content = (
    <div
      className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/50"
      style={{
        transitionProperty: "transform, border-color, background-color, box-shadow",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `color-mix(in oklch, ${accentColor}, transparent 50%)`;
        e.currentTarget.style.boxShadow = `0 1px 3px 0 color-mix(in oklch, ${accentColor}, transparent 80%)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `var(--border)`;
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 group-hover:scale-110"
        style={{
          backgroundColor: `color-mix(in oklch, ${accentColor}, transparent 85%)`,
          color: accentColor,
        }}
      >
        {skill.name.charAt(0)}
      </div>
      <div>
        <p className="text-base font-semibold text-foreground">{skill.name}</p>
        {skill.yearsOfExperience && (
          <p className="text-xs text-muted-foreground/70">
            {skill.yearsOfExperience} yr
            {skill.yearsOfExperience > 1 ? "s" : ""}
          </p>
        )}
      </div>
    </div>
  );

  if (shouldReduceMotion) return content;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {content}
    </motion.div>
  );
}
