"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { damping: 28, stiffness: 180, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 180, mass: 0.4 });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Disable on touch devices — pointer glow is for fine-pointer UX only
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] mix-blend-screen"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.06) 30%, transparent 70%)",
        filter: "blur(10px)",
      }}
    />
  );
}
