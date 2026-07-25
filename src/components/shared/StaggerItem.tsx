"use client";

import { motion } from "framer-motion";

interface IStaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: IStaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { y: 12 },
        visible: { y: 0 },
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {children}
    </motion.div>
  );
}
