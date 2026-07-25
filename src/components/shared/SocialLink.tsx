"use client";

import { Code2, BriefcaseBusiness, Mail, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Code2,
  linkedin: BriefcaseBusiness,
  mail: Mail,
  globe: Globe,
};

interface ISocialLinkProps {
  href: string;
  label: string;
  icon: string;
}

export function SocialLink({ href, label, icon }: ISocialLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = ICON_MAP[icon] ?? Globe;

  const classes =
    "group flex h-11 w-11 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-primary hover:shadow-sm hover:shadow-primary/10";

  if (shouldReduceMotion) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={classes}
      >
        <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={classes}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
    </motion.a>
  );
}
