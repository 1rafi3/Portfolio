"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { NAVIGATION } from "@/config/navigation";
import { SITE } from "@/config/site";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn, isActiveRoute } from "@/lib/utils";
import type { INavLink } from "@/types/common";

function NavLink({ label, href, pathname }: INavLink & { pathname: string }) {
  const isActive = isActiveRoute(pathname, href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative px-3 py-1.5 text-sm font-medium transition-all duration-200",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="active-nav-indicator"
          className="absolute inset-0 -z-10 rounded-md bg-accent"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-lg"
          : "border-b border-transparent bg-background/50 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group/link text-lg font-bold tracking-tight text-foreground transition-all duration-200 hover:opacity-80 hover:scale-[1.02]"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {SITE.name.split(" ").slice(0, -1).join(" ")}
          </span>{" "}
          <span className="text-primary">{SITE.name.split(" ").pop()}</span>
        </Link>

        <nav className="relative hidden items-center gap-6 md:flex">
          {NAVIGATION.map((link) => (
            <NavLink key={link.href} pathname={pathname} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
