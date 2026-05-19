"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative px-6 pt-24 pb-16"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.08), transparent)",
      }}
    >
      <div className="max-w-275 mx-auto w-full">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-2xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs text-accent tracking-widest uppercase mb-6"
          >
            01 — Hello
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EDEDED] dark:text-[#EDEDED] leading-[1.1] mb-6"
          >
            Swarnim{" "}
            <span className="text-accent">Kanwal</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-[#8A8A93] dark:text-[#8A8A93] leading-relaxed mb-4 max-w-xl"
          >
            Frontend developer building clean, responsive web products — with
            code, design sense, and AI as a daily tool.
          </motion.p>

          <motion.p
            variants={item}
            className="font-mono text-sm text-[#8A8A93] dark:text-[#8A8A93] mb-10"
          >
            Currently shipping features on a US healthcare platform.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll("projects")}
              className="px-6 py-3 bg-accent hover:bg-[#2563EB] text-white text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer"
            >
              View Work
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="px-6 py-3 border border-[#1F1F23] dark:border-[#1F1F23] hover:border-accent text-[#EDEDED] dark:text-[#EDEDED] text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => handleScroll("about")}
          aria-label="Scroll to about section"
          className="text-[#8A8A93] hover:text-accent transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </button>
      </motion.div>
    </section>
  );
}
