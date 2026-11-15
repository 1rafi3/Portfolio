"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Download, GraduationCap, Briefcase, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { hero } from "@/data/hero";
import { BRAND } from "@/data/brand";
import { SITE } from "@/config/site";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn, isActiveRoute } from "@/lib/utils";

const PRIMARY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
];

const SECONDARY_LINKS = [
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSecondaryActive = SECONDARY_LINKS.some((link) => isActiveRoute(pathname, link.href));

  return (
    <header className="sticky top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 transition-all duration-300">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "w-full max-w-5xl rounded-full px-4 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between transition-all duration-300",
          scrolled
            ? "glass-pill shadow-2xl"
            : "bg-[#030712]/50 backdrop-blur-md border border-white/5 shadow-lg light:bg-white/50 light:border-slate-200/40"
        )}
      >
        {/* Brand / Logo with Profile Avatar */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight transition-all duration-200 hover:scale-[1.02]"
        >
          {/* Avatar Image */}
          <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-[#00E5FF]/60 shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(0,229,255,0.6)] light:border-cyan-500/60 light:shadow-sm">
            {!avatarError && hero.professionalPhoto?.src ? (
              <Image
                src={hero.professionalPhoto.src}
                alt={hero.name}
                width={36}
                height={36}
                className="h-full w-full object-cover"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#00E5FF] to-blue-600 text-xs font-mono font-bold text-[#030712]">
                {BRAND.initial}
              </div>
            )}
          </div>

          <span className="font-extrabold text-white light:text-slate-900 text-sm sm:text-base">
            {BRAND.shortName}
          </span>
          <span className="text-[#00E5FF] font-mono text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/10 light:text-cyan-600 light:border-cyan-500/30 light:bg-cyan-50">
            Dev
          </span>
        </Link>

        {/* Primary Desktop Navigation */}
        <nav className="relative hidden items-center gap-0.5 sm:gap-1 md:flex">
          {PRIMARY_LINKS.map((link) => {
            const active = isActiveRoute(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ease-out rounded-full",
                  active
                    ? "text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] font-semibold light:text-cyan-600 light:drop-shadow-none"
                    : "text-slate-300 hover:text-[#00E5FF] hover:bg-white/5 light:text-slate-700 light:hover:text-cyan-600 light:hover:bg-slate-100/50",
                )}
              >
                <span>{link.label}</span>
                {active && (
                  <motion.span
                    layoutId="active-nav-underline"
                    className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)] light:bg-cyan-500 light:shadow-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Secondary Links "More ▼" Dropdown */}
          <div className="relative ml-0.5" ref={dropdownRef}>
            <button
              onClick={() => setMoreOpen((prev) => !prev)}
              aria-expanded={moreOpen}
              className={cn(
                "group inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ease-out",
                isSecondaryActive || moreOpen
                  ? "text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.6)] font-semibold light:text-cyan-600 light:drop-shadow-none"
                  : "text-slate-300 hover:text-[#00E5FF] hover:bg-white/5 light:text-slate-700 light:hover:text-cyan-600",
              )}
            >
              <span>More</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  moreOpen ? "rotate-180 text-[#00E5FF] light:text-cyan-600" : "text-slate-400 group-hover:text-[#00E5FF] light:text-slate-500 light:group-hover:text-cyan-600"
                )}
              />
              {isSecondaryActive && (
                <motion.span
                  layoutId="active-nav-underline"
                  className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.8)] light:bg-cyan-500 light:shadow-none"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            {/* Dropdown Popover */}
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-3 w-48 rounded-2xl glass-panel p-1.5 z-50"
                >
                  {SECONDARY_LINKS.map((link) => {
                    const active = isActiveRoute(pathname, link.href);
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "group/item flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                          active
                            ? "bg-[#00E5FF]/10 text-[#00E5FF] light:bg-cyan-50 light:text-cyan-600 font-semibold"
                            : "text-slate-300 hover:bg-[#00E5FF]/10 hover:text-[#00E5FF] light:text-slate-700 light:hover:bg-cyan-50/80 light:hover:text-cyan-600"
                        )}
                      >
                        <Icon className={cn("h-4 w-4 transition-transform group-hover/item:scale-110", active ? "text-[#00E5FF] light:text-cyan-600" : "text-slate-400 group-hover/item:text-[#00E5FF] light:text-slate-500 light:group-hover/item:text-cyan-600")} />
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right Section: Resume CTA + Theme Toggle + Mobile Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/resume"
            className="group relative inline-flex items-center gap-1.5 rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-3 py-1.5 text-[10px] sm:text-xs font-mono font-semibold text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all duration-300 hover:scale-105 hover:border-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#030712] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] light:border-cyan-500/40 light:bg-cyan-500/10 light:text-cyan-700 light:hover:bg-cyan-600 light:hover:text-white light:hover:border-cyan-600 light:shadow-sm"
          >
            <Download className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </Link>

          <ThemeToggle />

          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-300 transition-colors hover:border-[#00E5FF]/40 hover:text-[#00E5FF] light:border-slate-200 light:bg-slate-100 light:text-slate-700 light:hover:text-cyan-600 md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </motion.nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
