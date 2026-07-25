"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Home, User, Folder, Wrench, GraduationCap, Briefcase, Mail } from "lucide-react";

import { hero } from "@/data/hero";
import { BRAND } from "@/data/brand";
import { cn, isActiveRoute } from "@/lib/utils";

interface IMobileNavProps {
  open: boolean;
  onClose: () => void;
}

const PRIMARY_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Skills", href: "/skills", icon: Wrench },
];

const SECONDARY_LINKS = [
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function MobileNav({ open, onClose }: IMobileNavProps) {
  const pathname = usePathname();
  const [avatarError, setAvatarError] = useState(false);

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
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md light:bg-black/50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Mobile Navigation Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-80 flex-col border-l border-[#00E5FF]/20 bg-[#030712]/95 p-6 shadow-2xl backdrop-blur-2xl light:border-slate-200 light:bg-white/95 light:text-slate-900"
          >
            {/* Header / Close */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 light:border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-[#00E5FF]/60 light:border-cyan-500/60">
                  {!avatarError && hero.professionalPhoto?.src ? (
                    <Image
                      src={hero.professionalPhoto.src}
                      alt={hero.name}
                      width={28}
                      height={28}
                      className="h-full w-full object-cover"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#00E5FF] to-blue-600 font-mono text-xs font-bold text-[#030712]">
                      {BRAND.initial}
                    </div>
                  )}
                </div>
                <span className="font-mono text-sm font-semibold text-slate-200 light:text-slate-900">
                  Navigation
                </span>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-400 transition-colors hover:border-[#00E5FF]/40 hover:text-[#00E5FF] light:border-slate-200 light:bg-slate-100 light:text-slate-700 light:hover:text-cyan-600"
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation Body */}
            <div className="mt-6 flex-1 overflow-y-auto space-y-6">
              {/* Primary Pages */}
              <div>
                <p className="px-2 pb-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#00E5FF] light:text-cyan-600">
                  Main Menu
                </p>
                <nav className="flex flex-col gap-1">
                  {PRIMARY_LINKS.map((link) => {
                    const active = isActiveRoute(pathname, link.href);
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200",
                          active
                            ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold light:bg-cyan-50 light:text-cyan-600 light:border-cyan-500/30"
                            : "text-slate-300 hover:bg-slate-900/80 hover:text-[#00E5FF] light:text-slate-700 light:hover:bg-slate-100 light:hover:text-cyan-600"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={cn("h-4 w-4", active ? "text-[#00E5FF] light:text-cyan-600" : "text-slate-400 group-hover:text-[#00E5FF] light:text-slate-500 light:group-hover:text-cyan-600")} />
                          <span>{link.label}</span>
                        </div>
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.8)] light:bg-cyan-600 light:shadow-none" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Secondary Pages */}
              <div>
                <p className="px-2 pb-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#00E5FF] light:text-cyan-600">
                  More Details
                </p>
                <nav className="flex flex-col gap-1">
                  {SECONDARY_LINKS.map((link) => {
                    const active = isActiveRoute(pathname, link.href);
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200",
                          active
                            ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold light:bg-cyan-50 light:text-cyan-600 light:border-cyan-500/30"
                            : "text-slate-300 hover:bg-slate-900/80 hover:text-[#00E5FF] light:text-slate-700 light:hover:bg-slate-100 light:hover:text-cyan-600"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={cn("h-4 w-4", active ? "text-[#00E5FF] light:text-cyan-600" : "text-slate-400 group-hover:text-[#00E5FF] light:text-slate-500 light:group-hover:text-cyan-600")} />
                          <span>{link.label}</span>
                        </div>
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.8)] light:bg-cyan-600 light:shadow-none" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Standalone Resume CTA Button at bottom */}
            <div className="pt-4 border-t border-slate-800/80 light:border-slate-200">
              <Link
                href="/resume"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#00E5FF]/50 bg-[#00E5FF]/15 px-4 py-3 font-mono text-sm font-semibold text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300 hover:bg-[#00E5FF] hover:text-[#030712] light:border-cyan-500/40 light:bg-cyan-500/10 light:text-cyan-700 light:hover:bg-cyan-600 light:hover:text-white light:shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
