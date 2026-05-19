"use client";

import { useEffect, useMemo, useState } from "react";

type Particle = {
  id: number;
  left: string;
  size: number;
  delay: string;
  duration: string;
  dx: string;
  dy: string;
  opacity: number;
};

export function BackgroundFX() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const particles = useMemo<Particle[]>(() => {
    if (!mounted) return [];
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 2.5,
      delay: `${Math.random() * 14}s`,
      duration: `${10 + Math.random() * 12}s`,
      dx: `${(Math.random() - 0.5) * 80}px`,
      dy: `${-80 - Math.random() * 180}px`,
      opacity: 0.25 + Math.random() * 0.5,
    }));
  }, [mounted]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Animated gradient mesh base */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(109,40,217,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 30%, rgba(139,92,246,0.14), transparent 60%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(76,29,149,0.18), transparent 60%)",
        }}
      />

      {/* Drifting orbs — slow parallax-style movement */}
      <div
        className="absolute rounded-full blur-3xl orb-drift-a"
        style={{
          width: 520,
          height: 520,
          top: "-10%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl orb-drift-b"
        style={{
          width: 600,
          height: 600,
          top: "40%",
          right: "-12%",
          background:
            "radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl orb-drift-c"
        style={{
          width: 480,
          height: 480,
          bottom: "-10%",
          left: "30%",
          background:
            "radial-gradient(circle, rgba(76,29,149,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Vertical scan line — slow cinematic sweep */}
      <div className="absolute inset-0">
        <div
          className="absolute left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(167,139,250,0.45), transparent)",
            animation: "scan-line 18s linear infinite",
            top: 0,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: "-10px",
              width: p.size,
              height: p.size,
              background: "rgba(167,139,250,0.85)",
              boxShadow: "0 0 8px rgba(139,92,246,0.7)",
              opacity: p.opacity,
              animation: `float-particle ${p.duration} ease-in ${p.delay} infinite`,
              ["--dx" as string]: p.dx,
              ["--dy" as string]: p.dy,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 80%)",
        }}
      />
    </div>
  );
}
