"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "default" | "hover" | "click";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(true);
  const [variant, setVariant] = useState<Variant>("default");
  const variantRef = useRef<Variant>("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot: tight spring — nearly instant
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 900, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 900, mass: 0.1 });

  // Ring: looser spring — trails behind
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch || !mounted) return;

    const setV = (v: Variant) => {
      variantRef.current = v;
      setVariant(v);
    };

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onDown = () => setV("click");
    const onUp = () => setV("default");

    const attachHover = () => {
      document.querySelectorAll<HTMLElement>(
        "a, button, [role='button'], input, textarea, select, [data-hover]"
      ).forEach((el) => {
        el.addEventListener("mouseenter", () => setV("hover"));
        el.addEventListener("mouseleave", () => setV("default"));
      });
    };
    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      observer.disconnect();
    };
  }, [mounted, isTouch, mouseX, mouseY]);

  if (!mounted || isTouch) return null;

  const isHover = variant === "hover";
  const isClick = variant === "click";

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-accent"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isClick ? 5 : isHover ? 10 : 7,
          height: isClick ? 5 : isHover ? 10 : 7,
          opacity: isClick ? 0.4 : 1,
          boxShadow: isHover
            ? "0 0 14px rgba(139,92,246,1)"
            : "0 0 6px rgba(139,92,246,0.7)",
        }}
        transition={{ duration: 0.12 }}
      />

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isClick ? 22 : isHover ? 52 : 34,
          height: isClick ? 22 : isHover ? 52 : 34,
          borderColor: isHover
            ? "rgba(139,92,246,0.9)"
            : "rgba(139,92,246,0.45)",
          opacity: isClick ? 0.25 : isHover ? 0.9 : 0.55,
          boxShadow: isHover
            ? "0 0 20px rgba(139,92,246,0.3), inset 0 0 20px rgba(139,92,246,0.05)"
            : "none",
        }}
        transition={{ duration: 0.22 }}
      />

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none fixed z-[9997] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
        animate={{
          width: isHover ? 120 : 70,
          height: isHover ? 120 : 70,
          opacity: isHover ? 1 : 0.7,
        }}
        transition={{ duration: 0.35 }}
      />
    </>
  );
}
