"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FOOTER } from "@/config/footer";
import { NAVIGATION } from "@/config/navigation";
import { SOCIAL_LINKS } from "@/config/social";
import { SocialLink } from "@/components/shared/SocialLink";
import { cn, isActiveRoute } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();

  function isActive(link: (typeof NAVIGATION)[number]) {
    return isActiveRoute(pathname, link.href);
  }

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {FOOTER.showNavigation && (
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {NAVIGATION.map((link) => {
                const linkActive = isActive(link);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={linkActive ? "page" : undefined}
                    className={cn(
                      "group/footlink relative text-sm transition-colors",
                      linkActive
                        ? "font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {linkActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full bg-primary" />
                    )}
                    {!linkActive && (
                      <span className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 rounded-full bg-foreground/30 transition-all duration-300 group-hover/footlink:w-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          )}

          {FOOTER.showSocialLinks && (
            <div className="flex gap-1.5">
              {SOCIAL_LINKS.filter((s) => s.active !== false).map(
                (social) => (
                  <SocialLink
                    key={social.platform}
                    href={social.url}
                    label={social.label}
                    icon={social.icon}
                  />
                ),
              )}
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-border/30 pt-6">
          <p className="text-center text-xs text-muted-foreground/60">
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
