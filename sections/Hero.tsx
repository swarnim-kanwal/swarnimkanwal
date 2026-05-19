"use client";

import { useState, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

/* ── Letter-by-letter shatter entrance ───────────────────────── */

const FIRST_NAME = "Swarnim";
const LAST_NAME = "Kanwal";

// Seeded deterministic random — same value on server and client for the same seed.
function sr(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function ShatterText({
  text,
  accent = false,
  delayStart = 0,
  seedOffset = 0,
}: {
  text: string;
  accent?: boolean;
  delayStart?: number;
  seedOffset?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className="inline-block">
      {text.split("").map((ch, i) => {
        const s = seedOffset + i;
        const rx = (sr(s * 3) - 0.5) * 80;
        const ry = (sr(s * 3 + 1) - 0.5) * 60 - 20;
        const rr = (sr(s * 3 + 2) - 0.5) * 30;
        return (
          <motion.span
            key={`${ch}-${i}`}
            className={`inline-block ${accent ? "text-accent" : ""}`}
            initial={
              reduce
                ? { opacity: 0 }
                : { opacity: 0, x: rx, y: ry, rotate: rr, scale: 0.4, filter: "blur(10px)" }
            }
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.85,
              ease: EASE,
              delay: delayStart + i * 0.04,
            }}
            style={{ willChange: "transform, filter, opacity" }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        );
      })}
    </span>
  );
}

/* ── Avatar with subtle mouse parallax ───────────────────────── */

function AvatarParallax() {
  const [imgError, setImgError] = useState(false);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 20, stiffness: 90 });
  const sy = useSpring(my, { damping: 20, stiffness: 90 });
  const rotY = useTransform(sx, [-100, 100], [-8, 8]);
  const rotX = useTransform(sy, [-100, 100], [6, -6]);
  const tx = useTransform(sx, [-100, 100], [-12, 12]);
  const ty = useTransform(sy, [-100, 100], [-10, 10]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative avatar-float w-52 h-64 sm:w-75 sm:h-95 lg:w-110 lg:h-135"
      style={{
        perspective: 1000,
        rotateX: rotX,
        rotateY: rotY,
        x: tx,
        y: ty,
      }}
    >
      {/* Soft radial glow behind */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: -40,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.35), transparent 65%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* Image */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        {imgError ? (
          <span className="flex items-center justify-center w-full h-full text-6xl font-bold text-accent font-mono">
            SK
          </span>
        ) : (
          <Image
            src="/images/swarnim.png"
            alt="Swarnim Kanwal"
            fill
            className="object-contain object-center drop-shadow-[0_20px_40px_rgba(139,92,246,0.35)]"
            priority
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Grounding shadow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 220,
          height: 22,
          borderRadius: "50%",
          background: "rgba(139,92,246,0.4)",
          filter: "blur(18px)",
          zIndex: 0,
        }}
      />
    </motion.div>
  );
}

/* ── Hero section ────────────────────────────────────────────── */

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxText = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const parallaxAvatar = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 pt-24 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Aurora layer specific to hero */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 10%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(109,40,217,0.14), transparent 60%)",
        }}
      />

      <div className="max-w-275 mx-auto w-full relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div style={{ y: parallaxText, opacity: fade }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-accent" />
              01 — Hello
            </motion.p>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#EDEDED] leading-[1.05] mb-4 sm:mb-6">
              <ShatterText text={FIRST_NAME} delayStart={0.25} seedOffset={0} />
              <br />
              <ShatterText text={LAST_NAME} accent delayStart={0.55} seedOffset={100} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
              className="text-base sm:text-lg md:text-xl text-[#B8B0CC] leading-relaxed mb-4 max-w-xl"
            >
              Frontend developer building clean, responsive web products — with
              code, design sense, and AI as a daily tool.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
              className="font-mono text-xs sm:text-sm text-[#8A8A93] mb-8 sm:mb-10"
            >
              Currently integrating Waystar into Aztute — EDI, APIs, and Mirth Connect.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4, ease: EASE }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="group relative overflow-hidden px-6 py-3 bg-accent text-white text-sm font-medium rounded-md transition-all duration-300 hover:scale-[1.03] glow-accent hover:glow-accent-strong"
              >
                <span className="relative z-10">View Work</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{
                    background:
                      "linear-gradient(100deg, transparent, rgba(255,255,255,0.3), transparent)",
                  }}
                />
              </Link>
              <Link
                href="/contact"
                className="group relative px-6 py-3 border border-accent/30 hover:border-accent text-[#EDEDED] text-sm font-medium rounded-md transition-all duration-300 hover:scale-[1.03] hover:bg-accent/10"
              >
                <span className="relative z-10">Get in Touch</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            style={{ y: parallaxAvatar }}
            className="flex justify-center md:justify-end"
          >
            <AvatarParallax />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8A8A93]"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
