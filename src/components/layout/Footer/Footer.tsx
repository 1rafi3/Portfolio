"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, BriefcaseBusiness, Mail, ArrowUpRight, Terminal } from "lucide-react";

import { BRAND } from "@/data/brand";
import { SOCIAL_LINKS } from "@/config/social";
import { FOOTER } from "@/config/footer";
import { cn, isActiveRoute } from "@/lib/utils";
import { useTheme } from "@/components/layout/ThemeProvider";

const NAV_COL = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills",   href: "/skills" },
];

const RESOURCE_COL = [
  { label: "Resume",     href: "/resume" },
  { label: "Education",  href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Contact",    href: "/contact" },
];

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  github:   Code2,
  linkedin: BriefcaseBusiness,
  mail:     Mail,
};

export function Footer() {
  const pathname  = usePathname();
  const { theme } = useTheme();
  const isLight   = theme === "light";

  /* ─── Derived theme tokens (JS-side, mirrors the CSS vars in globals.css) ─── */
  const tok = {
    footerBg:           isLight ? "#f8fafc"                      : "#030712",
    borderTop:          isLight ? "rgba(0,0,0,0.06)"             : "rgba(0,229,255,0.15)",
    text:               isLight ? "rgb(51 65 85)"                : "rgb(203 213 225)",
    muted:              isLight ? "rgb(71 85 105)"               : "rgb(148 163 184)",
    subtle:             isLight ? "rgb(100 116 139)"             : "rgb(100 116 139)",
    cardBg:             isLight ? "rgba(255,255,255,0.9)"        : "rgba(15,23,42,0.4)",
    cardBorder:         isLight ? "rgba(226,232,240,0.9)"        : "rgba(30,41,59,0.8)",
    cardHoverBg:        isLight ? "rgba(207,250,254,0.5)"        : "rgba(0,229,255,0.1)",
    cardHoverBorder:    isLight ? "rgba(6,182,212,0.4)"          : "rgba(0,229,255,0.4)",
    divider:            isLight ? "rgb(226 232 240)"             : "rgba(30,41,59,0.8)",
    statusBg:           isLight ? "rgb(241 245 249)"             : "rgba(15,23,42,0.7)",
    statusBorder:       isLight ? "rgb(226 232 240)"             : "#1e293b",
    brandText:          isLight ? "rgb(15 23 42)"                : "#ffffff",
    glowLine:           isLight ? "rgba(8,145,178,0.35)"         : "rgba(0,229,255,0.45)",
    glowBlob:           isLight ? "rgba(8,145,178,0.04)"         : "rgba(0,229,255,0.05)",
    linkDefault:        isLight ? "rgb(71 85 105)"               : "rgb(148 163 184)",
    linkHover:          isLight ? "var(--cyan-accent-muted)"     : "var(--cyan-accent)",
    cyan:               isLight ? "#0891b2"                      : "#00E5FF",
    cyanActive:         isLight ? "#0e7490"                      : "#00E5FF",
    activeShadow:       isLight ? "none"                         : "drop-shadow(0 0 8px rgba(0,229,255,0.5))",
    iconMuted:          isLight ? "rgb(100 116 139)"             : "rgb(148 163 184)",
    tagBg:              isLight ? "rgb(236 254 255)"             : "rgba(0,229,255,0.08)",
    tagBorder:          isLight ? "rgba(8,145,178,0.3)"          : "rgba(0,229,255,0.3)",
    builtWithCyan:      isLight ? "#0e7490"                      : "#00E5FF",
    copyright:          isLight ? "rgb(100 116 139)"             : "rgb(100 116 139)",
  };

  const linkDot = (
    <span
      className="h-1 w-1 rounded-full opacity-0 transition-all duration-200 group-hover:opacity-100"
      style={{ backgroundColor: tok.cyan }}
    />
  );

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundColor: tok.footerBg,
        color: tok.text,
        borderTop: `1px solid ${tok.borderTop}`,
        transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* ─── Top glow accent line ─── */}
      <div
        className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2"
        style={{
          background: `linear-gradient(to right, transparent, ${tok.glowLine}, transparent)`,
          boxShadow: isLight ? "none" : `0 0 15px rgba(0,229,255,0.4)`,
        }}
      />
      {/* Blob glow behind top border */}
      <div
        className="absolute left-1/2 -top-24 h-48 w-96 -translate-x-1/2 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: tok.glowBlob }}
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 relative z-10">
        {/* ─── 4-column grid ─── */}
        <div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 pb-12"
          style={{ borderBottom: `1px solid ${tok.divider}` }}
        >

          {/* ── Column 1: Branding ── */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight transition-opacity hover:opacity-90"
              style={{ color: tok.brandText }}
            >
              <div
                className="flex h-7 w-7 items-center justify-center rounded-md font-mono text-xs font-bold"
                style={{
                  background: `linear-gradient(to bottom right, ${tok.cyan}, #2563eb)`,
                  color: isLight ? "#ffffff" : "#030712",
                  boxShadow: isLight ? "0 1px 4px rgba(0,0,0,0.1)" : `0 0 10px rgba(0,229,255,0.4)`,
                }}
              >
                {BRAND.initial}
              </div>
              <span className="font-extrabold" style={{ color: tok.brandText }}>{BRAND.shortName}</span>
              <span
                className="font-mono text-xs px-2 py-0.5 rounded-full"
                style={{
                  color: tok.cyan,
                  border: `1px solid ${tok.tagBorder}`,
                  backgroundColor: tok.tagBg,
                }}
              >
                Full-Stack
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: tok.muted }}>
              {BRAND.tagline}
            </p>

            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono"
              style={{
                backgroundColor: tok.statusBg,
                border: `1px solid ${tok.statusBorder}`,
                color: tok.muted,
              }}
            >
              <Terminal className="h-3 w-3" style={{ color: tok.cyan }} />
              <span style={{ color: tok.subtle }}>Status:</span>
              <span className="font-semibold" style={{ color: tok.cyan }}>Building &amp; Exploring</span>
            </div>
          </div>

          {/* ── Column 2: Navigation ── */}
          <div>
            <h3
              className="text-xs font-mono font-semibold uppercase tracking-wider mb-4"
              style={{ color: tok.cyan }}
            >
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_COL.map((item) => {
                const active = isActiveRoute(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn("group inline-flex items-center gap-1.5 text-sm transition-all duration-200 ease-out hover:translate-x-1")}
                      style={{
                        color: active ? tok.cyanActive : tok.linkDefault,
                        fontWeight: active ? 600 : 400,
                        filter: active ? tok.activeShadow : "none",
                      }}
                    >
                      {linkDot}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── Column 3: Resources ── */}
          <div>
            <h3
              className="text-xs font-mono font-semibold uppercase tracking-wider mb-4"
              style={{ color: tok.cyan }}
            >
              Resources
            </h3>
            <ul className="space-y-2.5">
              {RESOURCE_COL.map((item) => {
                const active = isActiveRoute(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn("group inline-flex items-center gap-1.5 text-sm transition-all duration-200 ease-out hover:translate-x-1")}
                      style={{
                        color: active ? tok.cyanActive : tok.linkDefault,
                        fontWeight: active ? 600 : 400,
                        filter: active ? tok.activeShadow : "none",
                      }}
                    >
                      {linkDot}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── Column 4: Connect ── */}
          <div>
            <h3
              className="text-xs font-mono font-semibold uppercase tracking-wider mb-4"
              style={{ color: tok.cyan }}
            >
              Connect
            </h3>
            <div className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.filter((s) => s.active !== false).map((social) => {
                const Icon = ICON_MAP[social.icon] ?? ArrowUpRight;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group inline-flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200"
                    style={{
                      color: tok.text,
                      backgroundColor: tok.cardBg,
                      border: `1px solid ${tok.cardBorder}`,
                      boxShadow: isLight ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = tok.cardHoverBg;
                      el.style.borderColor = tok.cardHoverBorder;
                      el.style.color = tok.cyan;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = tok.cardBg;
                      el.style.borderColor = tok.cardBorder;
                      el.style.color = tok.text;
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ color: tok.iconMuted }} className="transition-colors">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{social.platform}</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div
          className="pt-8 flex flex-col items-center justify-between gap-4 text-xs sm:flex-row"
          style={{ color: tok.copyright }}
        >
          <p>{FOOTER.copyright}</p>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span style={{ color: tok.subtle }}>Built with</span>
            <span className="font-semibold" style={{ color: tok.builtWithCyan }}>Next.js</span>
            <span style={{ color: tok.subtle }}>•</span>
            <span className="font-semibold" style={{ color: tok.builtWithCyan }}>TypeScript</span>
            <span style={{ color: tok.subtle }}>•</span>
            <span className="font-semibold" style={{ color: tok.builtWithCyan }}>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
