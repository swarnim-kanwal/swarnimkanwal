"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const featured = [
  {
    label: "01",
    title: "Aztute × Waystar Integration",
    tagline: "Healthcare data pipeline — API integration, EDI processing, middleware architecture",
    description:
      "Built the full integration layer between Aztute (a healthcare platform) and Waystar (a US clearinghouse) using Mirth Connect as middleware. Created and exposed APIs in Mirth that receive requests from Aztute, transform incoming data into valid EDI transaction files (837, 835, 270/271), send them to Waystar via API and SFTP, and route acknowledgement responses back into the Aztute database.",
    stack: ["Mirth Connect", "EDI / HL7", "REST APIs", "SFTP", "Healthcare data", "Middleware"],
    confidential: true,
    live: "",
  },
  {
    label: "02",
    title: "Raindrop",
    tagline: "Frontend development with Auth0 authentication and Stripe payment integration",
    description:
      "Worked as a frontend developer on the Raindrop client project. Integrated Auth0 for authentication flows (login, signup, session management) and Stripe for payment gateway functionality. Built and maintained UI components, handled responsive layout, and worked through iterative client feedback cycles.",
    stack: ["HTML", "CSS", "JavaScript", "Auth0", "Stripe", "Responsive design"],
    confidential: false,
    live: "",
  },
  {
    label: "03",
    title: "Deash Medical",
    tagline: "WordPress website built from scratch — first real client project",
    description:
      "Built the Deash Medical website entirely from scratch using WordPress — my first complete, real-world client project. Handled the full development workflow: server setup, theme selection and customisation, page layout design, content structure, and plugin configuration.",
    stack: ["WordPress", "CSS", "HTML", "Theme customisation", "Plugin config"],
    confidential: false,
    live: "https://deashmedical.com",
  },
  {
    label: "04",
    title: "Quanted",
    tagline: "Frontend development and practical UI delivery",
    description:
      "Worked on the Quanted website as a frontend developer, gaining practical experience building and maintaining web interfaces. Contributed to UI implementation, page structure, and responsive behaviour — applying frontend fundamentals in a real project environment.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive design"],
    confidential: false,
    live: "",
  },
];

const other = [
  {
    title: "Internal & AI-Assisted Projects",
    description:
      "Built 4–5 internal and exploratory web projects using AI tools — Claude, ChatGPT, and Cursor — for UI generation, code scaffolding, workflow acceleration, and rapid prototyping.",
    stack: ["HTML", "CSS", "JavaScript", "Claude AI", "ChatGPT", "Cursor"],
    live: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "This site. Built with Next.js App Router, Tailwind CSS v4, and Framer Motion. Semantic HTML, scroll-triggered animations, dark/light theme, accessible contact form.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    live: "",
  },
];

/* ── Tilt card wrapper ─────────────────────────────────────── */

function TiltCard({
  children,
  className = "",
  intensity = 8,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 18, stiffness: 150 });
  const sy = useSpring(my, { damping: 18, stiffness: 150 });
  const rotX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glowBg = useMotionTemplate`radial-gradient(circle 280px at ${glowX} ${glowY}, rgba(139,92,246,0.22), transparent 60%)`;

  return (
    <motion.div
      onPointerMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Cursor-following glow */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: glowBg }}
      />
      {children}
    </motion.div>
  );
}

/* ── Section ───────────────────────────────────────────────── */

export function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-275 mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            04 — Projects
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] mb-8 sm:mb-12">
            Things I&apos;ve <span className="shine-text">built</span>
          </h2>
        </Reveal>

        {/* Featured */}
        <div className="space-y-6 mb-16">
          {featured.map((project, i) => (
            <Reveal key={project.title} variant="up" delay={i * 0.08}>
              <TiltCard className="group" intensity={3}>
                <article className="relative glass rounded-2xl p-6 sm:p-8 overflow-hidden border border-accent/15 hover:border-accent/40 transition-colors duration-500">
                  <span className="sweep-bar" aria-hidden="true" />

                  {/* Corner gradient highlight */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(139,92,246,0.18), transparent 60%)",
                    }}
                  />

                  <p className="font-mono text-xs text-[#8A8A93] mb-2 tracking-widest">
                    {project.label} — Featured Project
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#EDEDED] mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent/90 mb-4">{project.tagline}</p>
                  <p className="text-sm text-[#B8B0CC] leading-relaxed mb-6 relative">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 bg-accent/8 border border-accent/15 text-[#B8B0CC] rounded-md transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.confidential && (
                      <span className="flex items-center gap-1.5 text-xs text-[#8A8A93]">
                        <Lock size={13} aria-hidden="true" />
                        Confidential
                      </span>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live site for ${project.title}`}
                        className="flex items-center gap-1.5 text-xs text-[#B8B0CC] hover:text-accent transition-colors group/link"
                      >
                        <ExternalLink
                          size={14}
                          aria-hidden="true"
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                        Live site
                      </a>
                    )}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Other work */}
        <Reveal>
          <p className="font-mono text-xs text-[#8A8A93] tracking-[0.3em] uppercase mb-6">
            Other work
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {other.map((project, i) => (
            <Reveal key={project.title} variant="up" delay={i * 0.1}>
              <TiltCard className="group h-full" intensity={5}>
                <article className="relative glass rounded-xl p-5 overflow-hidden border border-accent/15 hover:border-accent/40 transition-colors duration-500 h-full">
                  <span className="sweep-bar" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-[#EDEDED] mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#B8B0CC] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2 py-0.5 bg-accent/8 border border-accent/15 text-[#B8B0CC] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
