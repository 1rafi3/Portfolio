"use client";

import { useRef, useState, useCallback, useId } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";

interface IHeroBannerProps {
  reducedMotion?: boolean;
}

interface IMousePos {
  x: number;
  y: number;
}

/* ─── Micro Particle System ─── */
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: `${(i * 3.7 + 5) % 94 + 3}%`,
  y: `${(i * 6.9 + 7) % 90 + 5}%`,
  size: i % 4 === 0 ? 2.5 : i % 2 === 0 ? 2 : 1.5,
  driftX: (Math.sin(i * 1.5) * 16).toFixed(1),
  driftY: (Math.cos(i * 2.1) * 16).toFixed(1),
  duration: 4.5 + (i % 6) * 1.5,
  delay: (i * 0.25) % 3,
  baseOpacity: 0.15 + (i % 5) * 0.05,
}));

/* ─── Wireframe Cubes ─── */
interface ICubeConfig {
  id: string;
  x: string;
  y: string;
  size: number;
  depth: number;
  darkOpacity: number;
  lightOpacity: number;
  className: string;
  duration: number;
}

const CUBES: ICubeConfig[] = [
  { id: "cube-top-right",  x: "75%", y: "12%", size: 54, depth: 22, darkOpacity: 0.07, lightOpacity: 0.04, className: "hidden lg:block",  duration: 14 },
  { id: "cube-mid-right",  x: "84%", y: "52%", size: 38, depth: 16, darkOpacity: 0.06, lightOpacity: 0.03, className: "hidden md:block",  duration: 18 },
  { id: "cube-bottom-left",x: "10%", y: "70%", size: 42, depth: 18, darkOpacity: 0.05, lightOpacity: 0.03, className: "hidden lg:block",  duration: 16 },
  { id: "cube-top-left",   x: "6%",  y: "15%", size: 32, depth: 14, darkOpacity: 0.04, lightOpacity: 0.02, className: "hidden xl:block",  duration: 20 },
];

function generateCubePath(s: number, d: number): string {
  const b = s * 0.62;
  const ox = d * 0.55;
  const oy = d * 0.35;
  const front = `M 0,0 L ${s},0 L ${s},${s} L 0,${s} Z`;
  const back = `M ${ox},${oy} L ${ox + b},${oy} L ${ox + b},${oy + b} L ${ox},${oy + b} Z`;
  const connectors = [
    `M 0,0 L ${ox},${oy}`,
    `M ${s},0 L ${ox + b},${oy}`,
    `M ${s},${s} L ${ox + b},${oy + b}`,
    `M 0,${s} L ${ox},${oy + b}`,
  ].join(" ");
  return `${front} ${back} ${connectors}`;
}

/* ─── Circuit Trace Paths ─── */
const CIRCUIT_TRACES_RIGHT = [
  "M 0,20 L 35,20 L 55,40 L 55,75",
  "M 10,0 L 10,25 L 30,45 L 70,45",
  "M 0,60 L 25,60 L 45,80 L 80,80",
  "M 25,0 L 25,15 L 40,30 L 85,30",
  "M 0,85 L 20,85 L 35,70 L 60,70",
  "M 45,40 L 45,55 L 65,75",
  "M 15,25 L 15,35 L 30,35",
];

const CIRCUIT_TRACES_LEFT = [
  "M 100,30 L 70,30 L 50,50 L 50,85",
  "M 90,0 L 90,20 L 65,45 L 20,45",
  "M 100,75 L 75,75 L 55,95 L 30,95",
  "M 80,10 L 80,30 L 60,50 L 10,50",
];

/* ─── Background Layers — driven by CSS variables ─── */
function BackgroundLayers() {
  const gridId = useId();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base background — CSS var switches on .light */}
      <div className="absolute inset-0" style={{ backgroundColor: "var(--hero-base)" }} />

      {/* Tech grid — same cyan stroke, just opacity scales via var */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: "calc(var(--hero-decoration-opacity) * 0.04)" }}
      >
        <defs>
          <pattern id={gridId} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="var(--cyan-accent)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gridId})`} />
      </svg>

      {/* Top radial spotlight */}
      <div
        className="absolute left-1/2 -top-24 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{
          backgroundColor: "var(--cyan-accent)",
          opacity: "calc(var(--hero-glow-opacity) * 0.15)",
        }}
      />

      {/* Right glow — behind profile photo */}
      <div
        className="absolute right-[10%] top-1/3 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-[110px] hidden md:block"
        style={{
          backgroundColor: "var(--cyan-accent)",
          opacity: "calc(var(--hero-glow-secondary-opacity) * 0.4)",
        }}
      />

      {/* Left ambient glow */}
      <div
        className="absolute left-[5%] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          backgroundColor: "var(--cyan-accent)",
          opacity: "calc(var(--hero-glow-opacity) * 0.25)",
        }}
      />

      {/* Bottom vignette — smoothly dissolves hero grid, particles, and circuits into base background */}
      <div
        className="absolute inset-x-0 bottom-0 h-56 sm:h-72 pointer-events-none z-10"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--hero-vignette-from) 20%, transparent) 25%, color-mix(in srgb, var(--hero-vignette-from) 70%, transparent) 60%, var(--hero-vignette-from) 100%)`,
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-28 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, var(--hero-vignette-from) 0%, color-mix(in srgb, var(--hero-vignette-from) 60%, transparent) 60%, transparent 100%)`,
        }}
      />
    </div>
  );
}

/* ─── Particle Field — opacity & color driven by CSS vars ─── */
function ParticleField({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {PARTICLES.map((p) => {
        const style: React.CSSProperties = {
          width: `${p.size}px`,
          height: `${p.size}px`,
          left: p.x,
          top: p.y,
          backgroundColor: "var(--cyan-accent)",
          opacity: `calc(var(--hero-particle-opacity) * ${p.baseOpacity})`,
          boxShadow: `0 0 ${p.size * 3}px color-mix(in srgb, var(--cyan-accent) 40%, transparent)`,
        };

        if (reducedMotion) {
          return <div key={p.id} className="absolute rounded-full" style={style} />;
        }

        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={style}
            animate={{
              x: [0, Number(p.driftX), 0],
              y: [0, Number(p.driftY), 0],
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay } as Transition}
          />
        );
      })}
    </div>
  );
}

/* ─── Wireframe Cubes — stroke from CSS var ─── */
function WireframeCubes({ reducedMotion, mousePos, isDesktop, isLight }: {
  reducedMotion: boolean;
  mousePos: IMousePos;
  isDesktop: boolean;
  isLight: boolean;
}) {
  const moveX = isDesktop ? mousePos.x * 6 : 0;
  const moveY = isDesktop ? mousePos.y * 6 : 0;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ transform: reducedMotion ? undefined : `translate(${moveX}px, ${moveY}px)` }}
      aria-hidden="true"
    >
      {CUBES.map((cube) => {
        const viewBox = `0 0 ${cube.size + cube.depth} ${cube.size + cube.depth}`;
        const pathData = generateCubePath(cube.size, cube.depth);
        const opacity = isLight ? cube.lightOpacity : cube.darkOpacity;

        if (reducedMotion) {
          return (
            <svg
              key={cube.id}
              className={`absolute ${cube.className}`}
              style={{ left: cube.x, top: cube.y, width: cube.size + cube.depth, height: cube.size + cube.depth, opacity }}
              viewBox={viewBox}
              fill="none"
              stroke="var(--hero-cube-stroke)"
              strokeWidth="0.8"
            >
              <path d={pathData} />
            </svg>
          );
        }

        return (
          <motion.svg
            key={cube.id}
            className={`absolute ${cube.className}`}
            style={{ left: cube.x, top: cube.y, width: cube.size + cube.depth, height: cube.size + cube.depth, opacity }}
            viewBox={viewBox}
            fill="none"
            stroke="var(--hero-cube-stroke)"
            strokeWidth="0.8"
            animate={{ rotate: [0, 6, 0, -4, 0] }}
            transition={{ duration: cube.duration, repeat: Infinity, ease: "easeInOut" } as Transition}
          >
            <path d={pathData} />
          </motion.svg>
        );
      })}
    </div>
  );
}

/* ─── Circuit Traces — stroke & via fill from CSS var ─── */
function CircuitTraces({ reducedMotion, mousePos, isDesktop }: {
  reducedMotion: boolean;
  mousePos: IMousePos;
  isDesktop: boolean;
}) {
  const moveX = isDesktop ? mousePos.x * 4 : 0;
  const moveY = isDesktop ? mousePos.y * 4 : 0;

  const vias = [
    { cx: 35, cy: 20 }, { cx: 55, cy: 40 }, { cx: 55, cy: 75 }, { cx: 30, cy: 45 },
    { cx: 70, cy: 45 }, { cx: 45, cy: 80 }, { cx: 80, cy: 80 }, { cx: 40, cy: 30 },
    { cx: 85, cy: 30 }, { cx: 35, cy: 70 }, { cx: 60, cy: 70 }, { cx: 65, cy: 75 },
  ];

  const leftVias = [
    { cx: 70, cy: 30 }, { cx: 50, cy: 50 }, { cx: 50, cy: 85 },
    { cx: 65, cy: 45 }, { cx: 20, cy: 45 }, { cx: 55, cy: 95 }, { cx: 60, cy: 50 },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ transform: reducedMotion ? undefined : `translate(${moveX}px, ${moveY}px)` }}
      aria-hidden="true"
    >
      {/* Right panel */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-visible hidden md:block">
        <svg
          className="absolute right-[4%] top-[8%] h-[84%] w-[85%]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--hero-cube-stroke)"
          strokeWidth="0.5"
          preserveAspectRatio="none"
        >
          {vias.map((v, i) => (
            <g key={`vr-${i}`}>
              <circle cx={v.cx} cy={v.cy} r="1.2" fill="var(--hero-cube-stroke)" stroke="none" opacity="0.55" />
              <circle cx={v.cx} cy={v.cy} r="2.5" fill="none" stroke="var(--hero-cube-stroke)" strokeWidth="0.3" opacity="0.3" />
            </g>
          ))}
          {CIRCUIT_TRACES_RIGHT.map((d, i) => (
            <path key={`tr-${i}`} d={d} opacity={0.12 + (i % 3) * 0.05} strokeDasharray={i % 2 === 1 ? "3 3" : undefined} />
          ))}
        </svg>
      </div>

      {/* Left panel */}
      <div className="absolute left-0 top-0 h-full w-1/3 overflow-visible hidden lg:block">
        <svg
          className="absolute left-[4%] top-[12%] h-[75%] w-[85%]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--hero-cube-stroke)"
          strokeWidth="0.4"
          preserveAspectRatio="none"
        >
          {leftVias.map((v, i) => (
            <circle key={`vl-${i}`} cx={v.cx} cy={v.cy} r="1.2" fill="var(--hero-cube-stroke)" stroke="none" opacity="0.5" />
          ))}
          {CIRCUIT_TRACES_LEFT.map((d, i) => (
            <path key={`tl-${i}`} d={d} opacity={0.09 + (i % 2) * 0.04} />
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export function HeroBanner({ reducedMotion }: IHeroBannerProps) {
  const shouldReduceMotion = useReducedMotion();
  const isReduced = reducedMotion ?? shouldReduceMotion ?? false;
  const { theme } = useTheme();
  const isLight = theme === "light";
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<IMousePos>({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <BackgroundLayers />
      <WireframeCubes reducedMotion={isReduced} mousePos={mousePos} isDesktop={isDesktop} isLight={isLight} />
      <CircuitTraces reducedMotion={isReduced} mousePos={mousePos} isDesktop={isDesktop} />
      <ParticleField reducedMotion={isReduced} />
    </div>
  );
}
