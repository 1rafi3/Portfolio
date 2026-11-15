"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { ISkill } from "@/types/skill";
import { TechIcon } from "@/components/shared/TechIcon";

interface ISkillBadgeProps {
  skill: ISkill;
}

export function SkillBadge({ skill }: ISkillBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  const content = (
    <div className="group relative flex items-center gap-3.5 rounded-xl glass-panel p-3.5 transition-all duration-300 hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.4),0_0_18px_rgba(0,229,255,0.2)] light:hover:border-cyan-500/50 light:hover:bg-cyan-50/50 light:hover:shadow-[0_4px_20px_rgba(0,229,255,0.18)]">
      {/* Icon Container */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-surface/80 p-2 text-foreground transition-all duration-300 group-hover:scale-110 group-hover:border-[#00E5FF]/40 group-hover:shadow-[0_0_12px_rgba(0,229,255,0.3)]">
        <TechIcon name={skill.name} className="h-5 w-5" />
      </div>

      {/* Content Label */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-[#00E5FF] light:group-hover:text-cyan-600">
          {skill.name}
        </span>
        {skill.category && (
          <span className="text-[11px] font-mono text-muted-foreground">
            {skill.category}
          </span>
        )}
      </div>
    </div>
  );

  if (shouldReduceMotion) return content;

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
    >
      {content}
    </motion.div>
  );
}
