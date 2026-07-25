"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { hero } from "@/data/hero";
import { SOCIAL_LINKS } from "@/config/social";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/shared/SocialLink";
import { HeroBanner } from "@/components/shared/HeroBanner";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
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
  const [imgError, setImgError] = useState(false);
  const img = hero.professionalPhoto;

  const initials = hero.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const profileImage = (
    <div className="relative shrink-0">
      <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-72 lg:w-72">
        <div
          className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-background"
          style={{
            border: "2px solid rgba(0, 229, 255, 0.6)",
            boxShadow: "0 0 20px rgba(0, 229, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          {img && !imgError ? (
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-full w-full rounded-full object-cover"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <span
              className="text-3xl font-bold sm:text-4xl"
              style={{ color: "#00E5FF" }}
            >
              {initials}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
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

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          className="order-first lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.03 }}
          >
            {profileImage}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-6xl"
          >
            {hero.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-xl font-medium text-primary sm:text-2xl"
          >
            {hero.professionalTitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {hero.shortIntroduction}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button render={<Link href="/projects" />}>
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" render={<Link href="/resume" />}>
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center gap-1.5 lg:justify-start"
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
