"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const experiences = [
  {
    role: "Integration Developer",
    company: "Aztute Healthcare Platform",
    project: "Waystar integration via Mirth Connect",
    period: "2024 — Present",
    bullets: [
      "Integrated Waystar (a US healthcare clearinghouse) into the Aztute platform using Mirth Connect as middleware — building the full data pipeline from trigger to response.",
      "Designed and exposed APIs in Mirth Connect that receive requests from Aztute, process incoming data and files, and transform them into valid EDI healthcare transaction files (837, 835, 270/271, etc.).",
      "Implemented secure outbound communication to Waystar via API and SFTP, and handled inbound Waystar responses — parsing acknowledgements and pushing processed data back into the Aztute database.",
      "Owned the end-to-end healthcare data flow: middleware logic, EDI generation, system interoperability, and automated transaction processing across platforms.",
    ],
  },
  {
    role: "Web Developer & Designer",
    company: "Client Websites & Internal Projects",
    project: "Freelance-style delivery",
    period: "2023 — 2024",
    bullets: [
      "Built multiple websites end-to-end using WordPress and AI-assisted workflows — from Figma design to live deployment.",
      "Designed and shipped UI/UX improvements across internal company sites, raising visual quality and consistency.",
      "Worked directly with clients on requirements, demos, and iterations — including in-person client meetings.",
      "Owned operational responsibilities (vendor coordination, equipment/inventory management) alongside delivery.",
    ],
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-275 mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            03 — Experience
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] mb-8 sm:mb-12">
            Where I&apos;ve <span className="shine-text">worked</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative">
          {/* Static track */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-accent/15 ml-1.75 hidden sm:block"
            aria-hidden="true"
          />
          {/* Filling progress line synced to scroll */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px ml-1.75 hidden sm:block origin-top"
            style={{
              scaleY: lineScale,
              background:
                "linear-gradient(to bottom, #8B5CF6, #A78BFA, transparent)",
              boxShadow: "0 0 10px rgba(139,92,246,0.6)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role} variant="up" delay={i * 0.1}>
                <div className="sm:pl-10 relative group">
                  {/* Pulsing dot */}
                  <div
                    className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-2 border-accent bg-[#06000F] hidden sm:block z-10"
                    aria-hidden="true"
                  >
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{ animation: "pulse-ring 2.4s ease-in-out infinite" }}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#EDEDED] group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[#B8B0CC]">
                        {exp.company}
                        {exp.project && (
                          <span className="font-mono text-[#8A8A93]"> — {exp.project}</span>
                        )}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-accent/80 whitespace-nowrap mt-1 px-2.5 py-1 rounded-full border border-accent/20 bg-accent/5">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5" role="list">
                    {exp.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: bi * 0.07 }}
                        className="flex items-start gap-3 text-sm text-[#B8B0CC] leading-relaxed"
                      >
                        <span
                          className="text-accent mt-1.5 shrink-0 text-xs"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
