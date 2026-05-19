"use client";

import { motion } from "framer-motion";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";

const skillGroups = [
  {
    label: "Languages",
    items: ["HTML5", "CSS3", "JavaScript", "C++", "Python (basics)"],
  },
  {
    label: "Frontend",
    items: [
      "React (familiar)",
      "Responsive design",
      "Semantic HTML",
      "Modern CSS",
      "Accessibility basics",
    ],
  },
  {
    label: "Design & CMS",
    items: ["Figma", "WordPress", "UI/UX implementation", "Design-to-code"],
  },
  {
    label: "AI-Assisted Dev",
    items: ["ChatGPT", "Claude", "Cursor", "GitHub Copilot"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "VS Code", "Chrome DevTools", "Basic CLI"],
  },
  {
    label: "Domain Exposure",
    items: ["US Healthcare (Waystar)", "Client-facing product delivery"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-275 mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            05 — Skills
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] mb-12">
            Skills &amp; <span className="shine-text">tools</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              variant={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.05}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="group relative glass rounded-xl p-5 overflow-hidden border border-accent/15 hover:border-accent/40 transition-colors duration-500 h-full"
              >
                <span className="sweep-bar" aria-hidden="true" />
                <p className="font-mono text-xs text-accent tracking-[0.25em] uppercase mb-4">
                  {group.label}
                </p>
                <RevealStagger as="ul" className="space-y-2" gap={0.05}>
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={staggerItem}
                      className="text-sm text-[#B8B0CC] flex items-center gap-2 group/item hover:text-[#EDEDED] transition-colors"
                    >
                      <motion.span
                        whileHover={{ scale: 2 }}
                        className="w-1 h-1 rounded-full bg-accent/60 shrink-0 group-hover/item:bg-accent group-hover/item:shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all"
                        aria-hidden="true"
                      />
                      {item}
                    </motion.li>
                  ))}
                </RevealStagger>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
