"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/data/hero";
import { skillCategories } from "@/data/skills";
import { SOCIAL_LINKS } from "@/config/social";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/shared/SocialLink";
import { HeroBanner } from "@/components/shared/HeroBanner";
import { InteractiveBadge } from "@/components/shared/InteractiveBadge";
import { useTheme } from "@/components/layout/ThemeProvider";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// Extract top techs from skill data for the tech badges
const TECH_BADGES = [
  { label: "React · Next.js", short: "Re", colorClass: "from-cyan-600/30 to-cyan-500/10 text-cyan-400 border-cyan-500/30" },
  { label: "TypeScript", short: "TS", colorClass: "from-blue-600/30 to-blue-500/10 text-blue-400 border-blue-500/30" },
  { label: "Node · Express", short: "Nd", colorClass: "from-emerald-600/30 to-emerald-500/10 text-emerald-400 border-emerald-500/30" },
  { label: "MongoDB", short: "Db", colorClass: "from-amber-600/30 to-amber-500/10 text-amber-400 border-amber-500/30" },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-x-clip px-4 py-12 lg:py-20 sm:px-6 lg:px-8">
      {/* Background visual layer */}
      {shouldReduceMotion ? (
        <HeroBanner reducedMotion />
      ) : (
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HeroBanner />
          </motion.div>
        </div>
      )}

      {/* Focal content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        {/* ─── LEFT: Text content ─── */}
        <motion.div
          className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge pill — green availability indicator */}
          <motion.div variants={itemVariants} className="mb-5">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono backdrop-blur-md transition-all duration-300"
              style={{
                border: `1px solid color-mix(in srgb, var(--cyan-accent) 30%, transparent)`,
                backgroundColor: `color-mix(in srgb, var(--cyan-accent) 8%, transparent)`,
                color: "var(--cyan-accent)",
                boxShadow: isLight
                  ? "0 1px 6px rgba(0,0,0,0.06)"
                  : "0 0 15px color-mix(in srgb, var(--cyan-accent) 15%, transparent)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: "#10b981" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#10b981" }}
                />
              </span>
              <span className="flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" />
                Available for new projects &amp; roles
              </span>
            </div>
          </motion.div>

          {/* Name — massive bold display */}
          <motion.h1
            variants={itemVariants}
            className="bg-clip-text text-4xl font-extrabold leading-[1.08] tracking-tight text-transparent sm:text-5xl lg:text-7xl"
            style={{
              backgroundImage: isLight
                ? "linear-gradient(to right, #0f172a, #1e293b, #334155)"
                : "linear-gradient(to right, #ffffff, #f1f5f9, #cbd5e1)",
            }}
          >
            {hero.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: isLight
                  ? "linear-gradient(to right, #1e293b, #475569, #64748b)"
                  : "linear-gradient(to right, #f1f5f9, #cbd5e1, #94a3b8)",
              }}
            >
              {hero.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          {/* Professional title */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg font-semibold sm:text-xl tracking-wide"
            style={{ color: "var(--cyan-accent)" }}
          >
            {hero.professionalTitle}
          </motion.p>

          {/* Short intro */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: isLight ? "rgb(71 85 105)" : "rgba(203,213,225,0.9)" }}
          >
            {hero.professionalSummary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start"
          >
            <Button
              className="font-semibold border-none transition-all duration-200"
              style={{
                backgroundColor: "var(--cyan-accent)",
                color: isLight ? "#ffffff" : "#030712",
              } as React.CSSProperties}
              render={<Link href="/projects" />}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              className="backdrop-blur-sm transition-all duration-200"
              style={{
                backgroundColor: isLight ? "rgb(241 245 249)" : "rgba(15,23,42,0.8)",
                color: isLight ? "rgb(30 41 59)" : "rgb(226 232 240)",
                border: `1px solid ${isLight ? "rgb(203 213 225)" : "rgba(51,65,85,0.6)"}`,
              } as React.CSSProperties}
              render={<Link href="/resume" />}
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex justify-center gap-2 lg:justify-start"
          >
            {SOCIAL_LINKS.filter((s) => s.active !== false).map((social) => (
              <SocialLink
                key={social.platform}
                href={social.url}
                label={social.label}
                icon={social.icon}
              />
            ))}
          </motion.div>

          {/* Tech Stack Badges — inspired by the reel */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 w-full flex flex-wrap items-center gap-2 sm:gap-2.5"
            style={{
              borderTop: `1px solid ${isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"}`,
            }}
          >
            {TECH_BADGES.map((tech) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 hover:scale-[1.03]"
                style={{
                  backgroundColor: isLight ? "rgb(241 245 249)" : "rgba(15,23,42,0.8)",
                  border: `1px solid ${isLight ? "rgb(226 232 240)" : "rgba(51,65,85,0.6)"}`,
                  color: isLight ? "rgb(71 85 105)" : "rgb(203 213 225)",
                }}
              >
                <span
                  className="w-5 h-5 rounded font-bold flex items-center justify-center text-[10px]"
                  style={{
                    background: isLight
                      ? "rgba(8,145,178,0.1)"
                      : "rgba(0,229,255,0.15)",
                    color: "var(--cyan-accent)",
                    border: `1px solid color-mix(in srgb, var(--cyan-accent) 30%, transparent)`,
                  }}
                >
                  {tech.short}
                </span>
                <span>{tech.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── RIGHT: Interactive Hanging ID Badge ─── */}
        <motion.div
          className="order-first lg:order-2 shrink-0 w-full max-w-[360px]"
          initial={{ opacity: 0, y: -20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <InteractiveBadge />
        </motion.div>
      </div>
    </section>
  );
}
