"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "C++ Programming (Beginner to Advanced)",
  "Python Crash Course (Google)",
  "Java Programming",
  "Configuration Management in Cloud",
];

export function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-275 mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            06 — Education
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] mb-8 sm:mb-12">
            Education &amp; <span className="shine-text">certifications</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal variant="left" delay={0.1}>
            <motion.div
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.3 }}
              style={{ transformPerspective: 1000 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden border border-accent/15 hover:border-accent/40 transition-colors duration-500"
            >
              <span className="sweep-bar" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: -8 }}
                  className="p-3 bg-accent/10 border border-accent/30 rounded-xl shrink-0 group-hover:glow-accent transition-shadow duration-500"
                >
                  <GraduationCap
                    size={20}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-[#EDEDED] mb-1 group-hover:text-accent transition-colors">
                    B.Tech, Computer Science Engineering
                  </h3>
                  <p className="text-sm text-[#B8B0CC] mb-1">
                    Maharshi Dayanand University, Rohtak
                  </p>
                  <p className="font-mono text-xs text-accent/80 px-2 py-0.5 inline-block bg-accent/5 border border-accent/15 rounded">
                    2021 — Present
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal variant="right" delay={0.2}>
            <motion.div
              whileHover={{ y: -6, rotateX: 2, rotateY: 2 }}
              transition={{ duration: 0.3 }}
              style={{ transformPerspective: 1000 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden border border-accent/15 hover:border-accent/40 transition-colors duration-500"
            >
              <span className="sweep-bar" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 8 }}
                  className="p-3 bg-accent/10 border border-accent/30 rounded-xl shrink-0 group-hover:glow-accent transition-shadow duration-500"
                >
                  <Award size={20} className="text-accent" aria-hidden="true" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#EDEDED] mb-3 group-hover:text-accent transition-colors">
                    Certifications
                  </h3>
                  <ul className="space-y-2" role="list">
                    {certifications.map((cert, i) => (
                      <motion.li
                        key={cert}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                        className="text-sm text-[#B8B0CC] flex items-start gap-2 hover:text-[#EDEDED] transition-colors"
                      >
                        <span
                          className="text-accent mt-1 text-xs shrink-0"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {cert}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
