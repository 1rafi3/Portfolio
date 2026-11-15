"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Sparkles, Radio } from "lucide-react";

import { hero } from "@/data/hero";
import { education } from "@/data/education";
import { useTheme } from "@/components/layout/ThemeProvider";

export function InteractiveBadge() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { theme } = useTheme();
  const isLight = theme === "light";

  // 3D tilt tracking from cursor hover on card (active only when not dragging)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const tiltSpring = { damping: 20, stiffness: 200, mass: 0.8 };
  const smoothTiltX = useSpring(mouseX, tiltSpring);
  const smoothTiltY = useSpring(mouseY, tiltSpring);

  const rotateX = useTransform(smoothTiltY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothTiltX, [-0.5, 0.5], [-10, 10]);
  const glareX = useTransform(smoothTiltX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothTiltY, [-0.5, 0.5], ["0%", "100%"]);

  // Physical Drag Coordinates
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);

  // Geometry: Vertical distance from ceiling anchor to card top slot at rest
  const REST_Y = 120;

  // ── MATHEMATICALLY EXACT LANYARD STRETCH & ROTATION ──
  // Anchor is fixed at (0, 0) relative to top center.
  // Card slot is at (cardX, REST_Y + cardY).
  // Distance from anchor to card slot:
  const strapLength = useTransform([cardX, cardY], ([x, y]: number[]) => {
    return Math.hypot(x, REST_Y + y);
  });

  // In CSS 2D screen coordinates (Y down), a point (0, L) rotated by angle θ
  // lands at X = -L * sin(θ), Y = L * cos(θ).
  // Therefore, to land at (x, REST_Y + y) where x = L * sin(α),
  // θ must be -α = -atan2(x, REST_Y + y) in radians!
  const strapAngle = useTransform([cardX, cardY], ([x, y]: number[]) => {
    return -Math.atan2(x, REST_Y + y) * (180 / Math.PI);
  });

  // Natural card rotation: The card aligns with the line of tension of the lanyard
  const cardAngle = useTransform([cardX, cardY], ([x, y]: number[]) => {
    return -Math.atan2(x, REST_Y + y) * (180 / Math.PI) * 0.85;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isDragging) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const initials = hero.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  // Education info
  const uni = education.find((e) => e.degree.toLowerCase().includes("bsc"));
  const uniName = uni?.institution ?? "Metropolitan University";
  const cgpa = uni?.cgpa ?? "3.92";

  return (
    <div
      className="relative flex flex-col items-center justify-start select-none w-full max-w-[320px] sm:max-w-[335px] mx-auto pt-1 pb-4"
      style={{ perspective: "1000px" }}
    >
      {/* ── Fixed Top Ceiling Anchor Bracket ── */}
      <div className="absolute top-0 z-30 flex flex-col items-center pointer-events-none">
        <div
          className="w-16 h-3 rounded-t-sm shadow-md"
          style={{
            background: "linear-gradient(to right, #450a0a, #991b1b, #ef4444, #991b1b, #450a0a)",
            borderBottom: "1px solid rgba(0,0,0,0.6)",
          }}
        />
        <div className="w-12 h-1.5 bg-zinc-800 rounded-b-xs shadow-xs" />
      </div>

      {/* ── Dynamic Elastic Lanyard Strap (Mathematically Locked to Card) ── */}
      <motion.div
        style={{
          top: "10px",
          left: "50%",
          x: "-50%",
          height: strapLength,
          rotate: strapAngle,
          transformOrigin: "top center",
        }}
        className="absolute w-7 sm:w-8 shadow-2xl flex flex-col items-center justify-between pointer-events-none z-10 overflow-hidden"
      >
        {/* Ribbon Gradient Body */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #450a0a 0%, #7f1d1d 15%, #b91c1c 40%, #ef4444 50%, #b91c1c 60%, #7f1d1d 85%, #450a0a 100%)",
            borderLeft: "1px solid rgba(0,0,0,0.4)",
            borderRight: "1px solid rgba(0,0,0,0.4)",
          }}
        />

        {/* Woven Fabric Texture Overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
          }}
        />

        {/* Left & Right Stitched Border Lines */}
        <div className="absolute inset-y-0 left-1 w-px border-l border-dashed border-red-950/70" />
        <div className="absolute inset-y-0 right-1 w-px border-r border-dashed border-red-950/70" />

        {/* Vertical Branded Lanyard Typography */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full py-4 overflow-hidden">
          <span
            className="text-[9px] sm:text-[10px] font-mono font-extrabold tracking-[0.25em] text-red-100/90 whitespace-nowrap select-none drop-shadow-sm"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            DEV • RAFI • CSE • 2026
          </span>
        </div>

        {/* Metallic Clasp at ribbon bottom */}
        <div className="relative z-10 w-full h-3 bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 border-t border-zinc-500/60 shadow-sm" />
      </motion.div>

      {/* ── Draggable ID Badge Card with Pendulum Snap-To-Origin ── */}
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={1}
        dragSnapToOrigin={false}
        onDragStart={() => {
          setIsDragging(true);
          mouseX.set(0);
          mouseY.set(0);
        }}
        onDrag={(_event, info) => {
          // Continuously synchronize coordinates on every single drag frame
          cardX.set(info.offset.x);
          cardY.set(info.offset.y);
        }}
        onDragEnd={() => {
          setIsDragging(false);
          // Multi-swing pendulum spring return to neutral origin (0, 0)
          animate(cardX, 0, {
            type: "spring",
            stiffness: 130,
            damping: 7.5,
            mass: 0.85,
            restDelta: 0.001,
          });
          animate(cardY, 0, {
            type: "spring",
            stiffness: 130,
            damping: 7.5,
            mass: 0.85,
            restDelta: 0.001,
          });
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          x: cardX,
          y: cardY,
          rotate: cardAngle,
          rotateX: isDragging ? 0 : rotateX,
          rotateY: isDragging ? 0 : rotateY,
          transformOrigin: "top center", // Pivots naturally from the top attachment point
          transformStyle: "preserve-3d",
          marginTop: `${REST_Y}px`,
        }}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985, cursor: "grabbing" }}
        className="relative w-full cursor-grab group z-20"
      >
        {/* ── Metallic Clip Ring Hooked into Badge Slot ── */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 pointer-events-none">
          {/* Top Metal Loop */}
          <div className="w-5 h-3.5 rounded-full border-2 border-zinc-400 bg-gradient-to-b from-zinc-200 via-zinc-400 to-zinc-600 shadow-sm flex items-center justify-center">
            <div className="w-2.5 h-1.5 bg-zinc-900 rounded-full" />
          </div>
          {/* Metallic Clip Hook */}
          <div className="w-3.5 h-3 bg-gradient-to-b from-zinc-300 via-zinc-100 to-zinc-400 rounded-b-xs shadow-xs -mt-1 border border-zinc-500/70" />
        </div>

        {/* Ambient Glow behind card */}
        <div
          className="absolute -inset-2 rounded-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 blur-2xl pointer-events-none"
          style={{
            background: isLight
              ? "linear-gradient(to bottom, rgba(8,145,178,0.2), rgba(59,130,246,0.12), transparent)"
              : "linear-gradient(to bottom, rgba(0,229,255,0.2), rgba(59,130,246,0.12), transparent)",
          }}
        />

        {/* ── Card Body (Properly sized with ample padding so NO information is cut off) ── */}
        <div
          className="relative rounded-2xl shadow-2xl p-4 sm:p-5 pb-5 sm:pb-6 overflow-visible transition-all duration-300"
          style={{
            backgroundColor: "#ffffff",
            border: isLight ? "1px solid #e2e8f0" : "1px solid #d4d4d8",
          }}
        >
          {/* Holographic Glare overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-30 rounded-2xl overflow-hidden"
            style={{
              background: `radial-gradient(circle 240px at ${glareX} ${glareY}, rgba(255,255,255,0.95), rgba(130,200,255,0.3) 40%, transparent 80%)`,
            }}
          />

          {/* Badge Hole Slot at top center — receives the lanyard hook clip */}
          <div className="w-12 h-2 mx-auto -mt-1 mb-2.5 bg-zinc-200/90 rounded-full border border-zinc-300 flex items-center justify-center shadow-inner">
            <div className="w-8 h-1 bg-zinc-600 rounded-full" />
          </div>

          {/* Top Bar: DEVELOPER PASS & REC */}
          <div className="flex items-center justify-between text-[10px] font-mono font-semibold tracking-wider text-zinc-600 border-b border-zinc-100 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5 text-zinc-800">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--cyan-accent)" }}
              />
              <span>DEVELOPER PASS</span>
            </div>
            <div className="flex items-center gap-1 text-red-600">
              <Radio className="w-3 h-3 animate-pulse" />
              <span className="text-[9px]">REC</span>
            </div>
          </div>

          {/* ── Profile Photo: Perfectly Centered on Rafi's Body & Face ── */}
          <div className="relative p-0.5">
            <span className="absolute -top-0.5 -left-0.5 text-zinc-300 font-mono text-xs">┌</span>
            <span className="absolute -top-0.5 -right-0.5 text-zinc-300 font-mono text-xs">┐</span>
            <span className="absolute -bottom-0.5 -left-0.5 text-zinc-300 font-mono text-xs">└</span>
            <span className="absolute -bottom-0.5 -right-0.5 text-zinc-300 font-mono text-xs">┘</span>

            <div className="relative w-full h-38 sm:h-42 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-inner group-hover:shadow-md transition-shadow">
              {hero.professionalPhoto && !imgError ? (
                <Image
                  src={hero.professionalPhoto.src}
                  alt={hero.professionalPhoto.alt}
                  width={hero.professionalPhoto.width}
                  height={hero.professionalPhoto.height}
                  className="h-full w-full object-cover object-[center_80%] transition-transform duration-700 group-hover:scale-105"
                  priority
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-3xl font-mono font-bold">
                  {initials}
                </div>
              )}
              <div className="absolute top-2 right-2 bg-black/75 backdrop-blur-md text-[9px] text-white px-2 py-0.5 rounded-full font-mono flex items-center gap-1 shadow-sm">
                <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                <span>FULL-STACK</span>
              </div>
            </div>
          </div>

          {/* ── Details Section (Clean, compact, and completely visible) ── */}
          <div className="mt-2.5 text-left">
            <div
              className="text-[10px] font-mono uppercase tracking-widest font-bold"
              style={{ color: "#0891b2" }}
            >
              {hero.professionalTitle}
            </div>
            <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-zinc-900 mt-0.5 leading-snug">
              {hero.name}
            </h3>

            <p className="text-[11px] text-zinc-500 mt-0.5 font-medium leading-tight">
              {uniName}
            </p>

            {/* Metadata Pills */}
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-100 text-[9px] font-mono text-zinc-500">
              {cgpa && (
                <div>
                  <span className="text-zinc-400">CGPA:</span>{" "}
                  <span className="font-bold text-zinc-800">{cgpa}</span>
                </div>
              )}
              <div>
                <span className="text-zinc-400">STATUS:</span>{" "}
                <span className="font-semibold text-zinc-700">
                  {hero.status === "open" ? "Available" : "Busy"}
                </span>
              </div>
              <div className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold text-[8px]">
                ACTIVE
              </div>
            </div>

            {/* Barcode Graphic (Fully visible with bottom breathing room) */}
            <div className="mt-2 pt-2 border-t border-zinc-100/80 flex flex-col items-center justify-center">
              <div className="w-full h-5 flex items-center justify-between px-1 opacity-85">
                {[4, 2, 6, 2, 8, 3, 5, 2, 7, 3, 4, 2, 6, 4, 3, 5, 2, 7, 3, 4, 2, 8, 3, 5, 2, 6].map(
                  (w, idx) => (
                    <div
                      key={idx}
                      className="h-full bg-zinc-900 rounded-xs"
                      style={{ width: `${w}px` }}
                    />
                  )
                )}
              </div>
              <span className="text-[7px] font-mono tracking-[0.3em] text-zinc-400 mt-1">
                * PORTFOLIO-DEV-2026 *
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
