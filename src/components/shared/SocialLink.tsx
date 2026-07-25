"use client";

import { Code2, BriefcaseBusiness, Mail, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/components/layout/ThemeProvider";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  github:   Code2,
  linkedin: BriefcaseBusiness,
  mail:     Mail,
  globe:    Globe,
};

interface ISocialLinkProps {
  href: string;
  label: string;
  icon: string;
}

export function SocialLink({ href, label, icon }: ISocialLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [hovered, setHovered] = useState(false);
  const Icon = ICON_MAP[icon] ?? Globe;

  const baseStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "0.75rem",
    transition: "all 0.2s ease",
    border: hovered
      ? `1px solid ${isLight ? "rgba(8,145,178,0.5)" : "rgba(0,229,255,0.5)"}`
      : `1px solid ${isLight ? "rgb(226 232 240)" : "rgba(30,41,59,0.8)"}`,
    backgroundColor: hovered
      ? isLight ? "rgb(236 254 255)" : "rgba(0,229,255,0.1)"
      : isLight ? "#ffffff" : "rgba(15,23,42,0.6)",
    color: hovered
      ? isLight ? "#0891b2" : "#00E5FF"
      : isLight ? "rgb(71 85 105)" : "rgb(203 213 225)",
    boxShadow: hovered
      ? isLight
        ? "0 2px 8px rgba(8,145,178,0.15)"
        : "0 0 15px rgba(0,229,255,0.3)"
      : isLight
        ? "0 1px 3px rgba(0,0,0,0.05)"
        : "none",
  };

  const iconEl = (
    <Icon className="h-[1.125rem] w-[1.125rem] transition-transform duration-200 group-hover:scale-110" />
  );

  if (shouldReduceMotion) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group"
        style={baseStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {iconEl}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group"
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {iconEl}
    </motion.a>
  );
}
