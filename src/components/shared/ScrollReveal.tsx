"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface IScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
}: IScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.05 });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1] as const,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
