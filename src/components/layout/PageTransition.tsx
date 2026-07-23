"use client";

import { motion } from "framer-motion";

interface IPageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: IPageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
