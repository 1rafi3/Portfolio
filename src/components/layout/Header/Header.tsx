"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { NAVIGATION } from "@/config/navigation";
import { SITE } from "@/config/site";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import type { INavLink } from "@/types/common";

function NavLink({ label, href, active }: INavLink) {
  const pathname = usePathname();
  const isActive = active.exact
    ? pathname === href
    : active.pattern
      ? pathname.startsWith(active.pattern)
      : false;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative px-1 py-1 text-sm font-medium transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary" />
      )}
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {SITE.name.split(" ").slice(0, -1).join(" ")}
          </span>{" "}
          <span className="text-primary">{SITE.name.split(" ").pop()}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAVIGATION.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
