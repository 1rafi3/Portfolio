"use client";

import { useRef, useState, useCallback, useId } from "react";
import { motion, useReducedMotion, type Transition } from "framer-motion";

interface IHeroBannerProps {
  reducedMotion?: boolean;
}

interface IMousePos {
  x: number;
  y: number;
}

/* ─── Cyan accent tokens ─── */
const CYAN = "#00E5FF";
const CYAN_DIM = "rgba(0, 229, 255, 0.04)";
const CYAN_MID = "rgba(0, 229, 255, 0.08)";
const CYAN_GLOW = "rgba(0, 229, 255, 0.15)";

/* ─── Particles ─── */
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: `${(i * 4.2 + 7) % 100}%`,
  y: `${(i * 7.3 + 3) % 100}%`,
  size: (i % 3 + 1) * 1.5,
  driftX: (Math.sin(i * 1.7) * 12).toFixed(1),
  driftY: (Math.cos(i * 2.3) * 12).toFixed(1),
  duration: 5 + (i % 5) * 2,
  delay: (i * 0.3) % 4,
}));

/* ─── Wireframe cubes (SVG path data) ─── */
const CUBES = [
  // Cube 1 — large, top-right
  {
    id: "cube1",
    x: "72%",
    y: "8%",
    size: 56,
    depth: 24,
    opacity: 0.06,
    class: "hidden lg:block",
  },
  // Cube 2 — medium, bottom-right
  {
    id: "cube2",
    x: "80%",
    y: "65%",
    size: 40,
    depth: 18,
    opacity: 0.05,
    class: "hidden md:block",
  },
  // Cube 3 — small, mid-right
  {
    id: "cube3",
    x: "60%",
    y: "45%",
    size: 28,
    depth: 12,
    opacity: 0.04,
    class: "hidden lg:block",
  },
];

function cubePath(s: number, d: number): string {
  const f = s; // front face size
  const b = s * 0.6; // back face size
  const ox = d * 0.5; // offset x
  const oy = d * 0.3; // offset y
  // front face
  const f1 = `M 0,0 l ${f},0 l 0,${f} l -${f},0 Z`;
  // back face
  const b1 = `M ${ox},${oy} l ${b},0 l 0,${b} l -${b},0 Z`;
  // connectors
  const c = [
    `M 0,0 L ${ox},${oy}`,
    `M ${f},0 L ${ox + b},${oy}`,
    `M ${f},${f} L ${ox + b},${oy + b}`,
    `M 0,${f} L ${ox},${oy + b}`,
  ].join(" ");
  return `${f1} ${b1} ${c}`;
}

/* ─── Circuit-board trace paths ─── */
const CIRCUIT_TRACES = [
  // Right-side dense traces
  "M 0,20 L 30,20 L 45,35 L 45,60",
  "M 0,50 L 20,50 L 35,35 L 60,35",
  "M 10,0 L 10,15 L 25,30 L 55,30",
  "M 0,70 L 15,70 L 30,55 L 55,55",
  "M 5,85 L 5,80 L 15,70 L 40,70",
  // Additional thin branching traces
  "M 20,20 L 20,28",
  "M 40,60 L 40,68",
  "M 15,35 L 15,42",
];

/* ─── Components ─── */

function ParticleField({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {PARTICLES.map((p) => {
        const dot = (
          <div
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              backgroundColor: CYAN,
              opacity: 0.15 + (p.id % 5) * 0.04,
              boxShadow: `0 0 ${p.size * 2}px ${CYAN}`,
            }}
          />
        );
        if (reducedMotion) return dot;
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              backgroundColor: CYAN,
              opacity: 0.15 + (p.id % 5) * 0.04,
              boxShadow: `0 0 ${p.size * 2}px ${CYAN}`,
            }}
            animate={{
              x: [0, Number(p.driftX), 0],
              y: [0, Number(p.driftY), 0],
              opacity: [0.12 + (p.id % 5) * 0.04, 0.25 + (p.id % 5) * 0.05, 0.12 + (p.id % 5) * 0.04],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            } as Transition}
          />
        );
      })}
    </div>
  );
}

function WireframeCubes({ reducedMotion, mousePos, isDesktop }: {
  reducedMotion: boolean;
  mousePos: IMousePos;
  isDesktop: boolean;
}) {
  const px = isDesktop ? mousePos.x * 5 : 0;
  const py = isDesktop ? mousePos.y * 5 : 0;

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: reducedMotion ? undefined : `translate(${px}px, ${py}px)`,
      }}
      aria-hidden="true"
    >
      {CUBES.map((cube) => {
        const svg = (
          <svg
            key={cube.id}
            className={`absolute ${cube.class}`}
            style={{
              left: cube.x,
              top: cube.y,
              width: cube.size + cube.depth,
              height: cube.size + cube.depth,
              opacity: cube.opacity,
            }}
            viewBox={`0 0 ${cube.size + cube.depth} ${cube.size + cube.depth}`}
            fill="none"
            stroke={CYAN}
            strokeWidth="0.8"
          >
            <path d={cubePath(cube.size, cube.depth)} />
          </svg>
        );
        if (reducedMotion) return svg;
        return (
          <motion.svg
            key={cube.id}
            className={`absolute ${cube.class}`}
            style={{
              left: cube.x,
              top: cube.y,
              width: cube.size + cube.depth,
              height: cube.size + cube.depth,
              opacity: cube.opacity,
            }}
            viewBox={`0 0 ${cube.size + cube.depth} ${cube.size + cube.depth}`}
            fill="none"
            stroke={CYAN}
            strokeWidth="0.8"
            animate={{ rotate: [0, 5, 0, -3, 0] }}
            transition={{
              duration: 12 + (CUBES.indexOf(cube) * 3),
              repeat: Infinity,
              ease: "easeInOut",
            } as Transition}
          />
        );
      })}
    </div>
  );
}

function CircuitTraces({ reducedMotion, mousePos, isDesktop }: {
  reducedMotion: boolean;
  mousePos: IMousePos;
  isDesktop: boolean;
}) {
  const id = useId();
  const px = isDesktop ? mousePos.x * 4 : 0;
  const py = isDesktop ? mousePos.y * 4 : 0;

  return (
    <div
      className="absolute right-0 top-0 h-full w-1/2 overflow-visible"
      style={{
        transform: reducedMotion ? undefined : `translate(${px}px, ${py}px)`,
      }}
      aria-hidden="true"
    >
      <svg
        className="absolute right-[5%] top-[5%] h-[90%] w-[80%]"
        viewBox="0 0 70 100"
        fill="none"
        stroke={CYAN}
        strokeWidth="0.5"
        opacity="0.08"
        preserveAspectRatio="none"
      >
        {/* Via pads */}
        {CIRCUIT_TRACES.map((_, i) => (
          <circle
            key={`via-${i}`}
            cx={5 + (i * 8) % 60}
            cy={10 + (i * 12) % 80}
            r="1.2"
            fill={CYAN}
            stroke="none"
            opacity="0.6"
          />
        ))}
        {/* Trace lines */}
        {CIRCUIT_TRACES.map((d, i) => (
          <path
            key={`trace-${i}`}
            d={d}
            opacity={0.4 + (i % 3) * 0.2}
          />
        ))}
        {/* Additional right-side nodes */}
        <circle cx="55" cy="30" r="1.5" fill={CYAN} stroke="none" opacity="0.5" />
        <circle cx="60" cy="55" r="1" fill={CYAN} stroke="none" opacity="0.4" />
        <circle cx="50" cy="70" r="1.2" fill={CYAN} stroke="none" opacity="0.5" />
      </svg>
    </div>
  );
}

function BackgroundLayers({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* Layer 1: Near-black base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Layer 2: Very subtle dark blue-black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1118]/60 via-transparent to-[#0B1118]/40" />

      {/* Layer 3: Radial cyan lighting — top center */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]" style={{ backgroundColor: CYAN_DIM }} />

      {/* Layer 4: Secondary cyan glow — right side (behind photo) */}
      <div className="absolute right-[12%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full opacity-25 blur-[100px]" style={{ backgroundColor: CYAN_MID }} />

      {/* Layer 5: Bottom-right vignette */}
      <div className="absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full opacity-20 blur-[90px]" style={{ backgroundColor: CYAN_DIM }} />

      {/* Layer 6: Dark vignette edges — top */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505] to-transparent" />

      {/* Layer 7: Dark vignette edges — bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}

/* ─── Main export ─── */

export function HeroBanner({ reducedMotion }: IHeroBannerProps) {
  const shouldReduceMotion = useReducedMotion();
  const isReduced = reducedMotion ?? shouldReduceMotion ?? false;
  const bannerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<IMousePos>({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!bannerRef.current) return;
    const rect = bannerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  return (
    <div
      ref={bannerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Layers 1–7: Background, gradients, cyan glow */}
      <BackgroundLayers reducedMotion={isReduced} />

      {/* Wireframe cubes — top-right, bottom-right */}
      <WireframeCubes
        reducedMotion={isReduced}
        mousePos={mousePos}
        isDesktop={isDesktop}
      />

      {/* Circuit-board traces — right side */}
      <CircuitTraces
        reducedMotion={isReduced}
        mousePos={mousePos}
        isDesktop={isDesktop}
      />

      {/* Glowing particles */}
      <ParticleField reducedMotion={isReduced} />

      {/* Subtle ambient glow behind profile photo area */}
      <div
        className="absolute lg:right-[12%] lg:top-1/2 lg:-translate-y-1/2
                       left-1/2 top-[15%] -translate-x-1/2 lg:left-auto lg:translate-x-0"
      >
        <div
          className="h-56 w-56 rounded-full sm:h-64 sm:w-64"
          style={{
            backgroundColor: CYAN_DIM,
            boxShadow: `0 0 40px ${CYAN_GLOW}`,
            transform: isReduced ? undefined : `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          }}
        />
      </div>

      {/* Additional floating particles (larger, more visible) */}
      <div
        style={{
          transform: isReduced ? undefined : `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
        }}
      >
        <FloatingDot
          className="absolute left-[8%] top-[25%]"
          size={3}
          reducedMotion={isReduced}
        />
        <FloatingDot
          className="absolute bottom-[30%] right-[8%]"
          size={2.5}
          reducedMotion={isReduced}
        />
        <FloatingDot
          className="absolute left-[20%] top-[60%]"
          size={2}
          reducedMotion={isReduced}
        />
        <FloatingDot
          className="absolute right-[25%] top-[20%]"
          size={3}
          reducedMotion={isReduced}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}

function FloatingDot({ className, size, reducedMotion }: {
  className: string;
  size: number;
  reducedMotion: boolean;
}) {
  const dot = (
    <div
      className={`${className} rounded-full`}
      style={{
        width: size,
        height: size,
        backgroundColor: CYAN,
        opacity: 0.12,
        boxShadow: `0 0 ${size * 3}px ${CYAN}`,
      }}
    />
  );
  if (reducedMotion) return dot;
  return (
    <motion.div
      className={`${className} rounded-full`}
      style={{
        width: size,
        height: size,
        backgroundColor: CYAN,
        opacity: 0.12,
        boxShadow: `0 0 ${size * 3}px ${CYAN}`,
      }}
      animate={{ y: [0, -8, 0], opacity: [0.12, 0.25, 0.12] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      } as Transition}
    />
  );
}
