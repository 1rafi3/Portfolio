"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { NAVIGATION } from "@/config/navigation";
import { cn } from "@/lib/utils";
import type { INavLink } from "@/types/common";

interface IMobileNavProps {
  open: boolean;
  onClose: () => void;
}

function MobileNavLink({
  label,
  href,
  active,
  onClose,
}: INavLink & { onClose: () => void }) {
  const pathname = usePathname();
  const isActive = active.exact
    ? pathname === href
    : active.pattern
      ? pathname.startsWith(active.pattern)
      : false;

  return (
    <Link
      href={href}
      onClick={onClose}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex h-11 items-center rounded-lg px-4 text-sm font-medium transition-colors",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
      )}
    >
      {label}
    </Link>
  );
}

export function MobileNav({ open, onClose }: IMobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-border/50 bg-background p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-foreground">
                Menu
              </span>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-1">
              {NAVIGATION.map((link) => (
                <MobileNavLink
                  key={link.href}
                  onClose={onClose}
                  {...link}
                />
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
