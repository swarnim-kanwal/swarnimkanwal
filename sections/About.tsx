"use client";

import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Activity, BookOpen } from "lucide-react";

const facts = [
  { icon: MapPin,   label: "Bahadurgarh, India" },
  { icon: Briefcase, label: "Frontend Developer" },
  { icon: Activity,  label: "Currently integrating Waystar into Aztute (healthcare)" },
  { icon: BookOpen,  label: "Currently learning: React patterns, TypeScript, system design" },
];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-275 mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            02 — About
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          <Reveal variant="left" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#EDEDED] mb-4 sm:mb-6 leading-tight">
              I build things <span className="shine-text">for the web</span>.
            </h2>
            <div className="space-y-4 text-[#B8B0CC] leading-relaxed">
              <p>
                I&apos;m a developer based in India, currently studying Computer
                Science at MDU Rohtak. I work on integrating healthcare systems
                — specifically connecting Aztute, a healthcare platform, with
                Waystar (a US clearinghouse) using Mirth Connect middleware, EDI
                processing, and API automation. I started as a fresher and grew
                into someone who owns complex integration work end-to-end.
              </p>
              <p>
                Outside of integration work, I build websites and UIs — clean
                code, thoughtful interfaces, and AI as a daily accelerator. I&apos;m
                equally happy designing a data pipeline or shipping a responsive
                component.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <span className="sweep-bar" aria-hidden="true" />
              <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6 relative">
                Quick Facts
              </p>
              <RevealStagger as="ul" className="space-y-4" gap={0.07}>
                {facts.map(({ icon: Icon, label }) => (
                  <motion.li
                    key={label}
                    variants={staggerItem}
                    className="flex items-start gap-3 group/item"
                  >
                    <span className="relative shrink-0 mt-0.5">
                      <Icon
                        size={16}
                        className="text-accent transition-transform duration-300 group-hover/item:scale-125"
                        aria-hidden="true"
                      />
                      <span
                        className="absolute inset-0 blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                        style={{ background: "rgba(139,92,246,0.6)", borderRadius: "50%" }}
                      />
                    </span>
                    <span className="text-sm text-[#B8B0CC] group-hover/item:text-[#EDEDED] transition-colors">
                      {label}
                    </span>
                  </motion.li>
                ))}
              </RevealStagger>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
