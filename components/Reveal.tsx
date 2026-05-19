"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "up" | "down" | "left" | "right" | "fade" | "scale";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const offsetFor = (v: Variant) => {
  switch (v) {
    case "up":    return { y: 40, x: 0,   opacity: 0, scale: 1 };
    case "down":  return { y: -40, x: 0,  opacity: 0, scale: 1 };
    case "left":  return { x: -40, y: 0,  opacity: 0, scale: 1 };
    case "right": return { x: 40, y: 0,   opacity: 0, scale: 1 };
    case "scale": return { x: 0, y: 0,    opacity: 0, scale: 0.92 };
    case "fade":  return { x: 0, y: 0,    opacity: 0, scale: 1 };
  }
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.7,
  className,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span" | "p";
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 0 } : offsetFor(variant);
  const animate = { x: 0, y: 0, opacity: 1, scale: 1 };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger container — children inherit timing automatically */
export function RevealStagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: gap, delayChildren: delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
