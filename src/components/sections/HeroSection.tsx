"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/data/hero";
import { SOCIAL_LINKS } from "@/config/social";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/shared/SocialLink";
import { HeroBanner } from "@/components/shared/HeroBanner";
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

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [imgError, setImgError] = useState(false);
  const img = hero.professionalPhoto;

  const initials = hero.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  /* ─── Profile image frame — adapts to theme ─── */
  const profileImage = (
    <div className="relative shrink-0 group">
      {/* Outer gradient ring */}
      <div
        className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-72 lg:w-72 p-1.5 rounded-full transition-all duration-500"
        style={{
          background: isLight
            ? "linear-gradient(to bottom, rgba(8,145,178,0.4), rgba(8,145,178,0.1), rgba(8,145,178,0.3))"
            : "linear-gradient(to bottom, rgba(0,229,255,0.4), rgba(0,229,255,0.1), rgba(0,229,255,0.3))",
          boxShadow: isLight
            ? "0 10px 30px rgba(0,0,0,0.08)"
            : "0 0 25px rgba(0,229,255,0.2), 0 10px 30px rgba(0,0,0,0.5)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = isLight
            ? "linear-gradient(to bottom, rgba(8,145,178,0.6), rgba(8,145,178,0.2), rgba(8,145,178,0.4))"
            : "linear-gradient(to bottom, rgba(0,229,255,0.7), rgba(0,229,255,0.2), rgba(0,229,255,0.5))";
          el.style.boxShadow = isLight
            ? "0 12px 35px rgba(8,145,178,0.18)"
            : "0 0 35px rgba(0,229,255,0.35), 0 15px 40px rgba(0,0,0,0.6)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = isLight
            ? "linear-gradient(to bottom, rgba(8,145,178,0.4), rgba(8,145,178,0.1), rgba(8,145,178,0.3))"
            : "linear-gradient(to bottom, rgba(0,229,255,0.4), rgba(0,229,255,0.1), rgba(0,229,255,0.3))";
          el.style.boxShadow = isLight
            ? "0 10px 30px rgba(0,0,0,0.08)"
            : "0 0 25px rgba(0,229,255,0.2), 0 10px 30px rgba(0,0,0,0.5)";
        }}
      >
        {/* Inner circle */}
        <div
          className="flex h-full w-full items-center justify-center overflow-hidden rounded-full relative z-10 transition-all duration-300"
          style={{
            backgroundColor: isLight ? "#ffffff" : "#030712",
            border: `1.5px solid ${isLight ? "rgba(8,145,178,0.6)" : "rgba(0,229,255,0.6)"}`,
          }}
        >
          {img && !imgError ? (
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <span
              className="font-mono text-3xl font-bold sm:text-4xl tracking-wider"
              style={{ color: "var(--cyan-accent)" }}
            >
              {initials}
            </span>
          )}
        </div>

        {/* Corner tech accent brackets */}
        <div
          className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 rounded-tl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
          style={{ borderColor: "var(--cyan-accent)" }}
        />
        <div
          className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 rounded-br pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
          style={{ borderColor: "var(--cyan-accent)" }}
        />
      </div>
    </div>
  );

  /* ─── Status badge pill — adapts to theme ─── */
  const statusBadge = (
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
          style={{ backgroundColor: "var(--cyan-accent)" }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ backgroundColor: "var(--cyan-accent)" }}
        />
      </span>
      <span className="flex items-center gap-1.5">
        <Terminal className="h-3.5 w-3.5" />
        Available for Opportunities
      </span>
    </div>
  );

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-12 lg:py-20 sm:px-6 lg:px-8">
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
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Profile photo */}
        <motion.div
          className="order-first lg:order-2 shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
          >
            {profileImage}
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-4">
            {statusBadge}
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="bg-clip-text text-4xl font-extrabold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl"
            style={{
              backgroundImage: isLight
                ? "linear-gradient(to right, #0f172a, #1e293b, #334155)"
                : "linear-gradient(to right, #ffffff, #f1f5f9, #cbd5e1)",
            }}
          >
            {hero.name}
          </motion.h1>

          {/* Professional title */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl font-semibold sm:text-2xl tracking-wide"
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
            {hero.shortIntroduction}
          </motion.p>

          {/* CTA buttons */}
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
            className="mt-8 flex justify-center gap-2 lg:justify-start"
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
        </motion.div>
      </div>
    </section>
  );
}
