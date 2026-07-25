"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

interface IPageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: IPageTransitionProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
