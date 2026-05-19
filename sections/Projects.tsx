"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const featured = [
  {
    label: "01",
    title: "Aztute × Waystar Integration",
    tagline: "Healthcare data pipeline — API integration, EDI processing, middleware architecture",
    description:
      "Built the full integration layer between Aztute (a healthcare platform) and Waystar (a US clearinghouse) using Mirth Connect as middleware. Created and exposed APIs in Mirth that receive requests from Aztute, transform incoming data into valid EDI transaction files (837, 835, 270/271), send them to Waystar via API and SFTP, and route acknowledgement responses back into the Aztute database. Covers middleware logic, EDI generation, healthcare data flow automation, and cross-system interoperability.",
    stack: ["Mirth Connect", "EDI / HL7", "REST APIs", "SFTP", "Healthcare data", "Middleware"],
    confidential: true,
    live: "",
  },
  {
    label: "02",
    title: "Raindrop",
    tagline: "Frontend development with Auth0 authentication and Stripe payment integration",
    description:
      "Worked as a frontend developer on the Raindrop client project. Integrated Auth0 for authentication flows (login, signup, session management) and Stripe for payment gateway functionality. Built and maintained UI components, handled responsive layout, and worked through iterative client feedback cycles. The project gave me hands-on experience with third-party API integrations alongside standard frontend delivery.",
    stack: ["HTML", "CSS", "JavaScript", "Auth0", "Stripe", "Responsive design"],
    confidential: false,
    live: "",
  },
  {
    label: "03",
    title: "Deash Medical",
    tagline: "WordPress website built from scratch — first real client project",
    description:
      "Built the Deash Medical website entirely from scratch using WordPress — my first complete, real-world client project. Handled the full development workflow: server setup, theme selection and customisation, page layout design, content structure, and plugin configuration. The project built a strong foundation in independent delivery, client communication, and end-to-end ownership of a live website.",
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
      "Built 4–5 internal and exploratory web projects using AI tools — Claude, ChatGPT, and Cursor — for UI generation, code scaffolding, workflow acceleration, and rapid prototyping. These projects sharpened my ability to direct AI tooling effectively while keeping quality and structure intact.",
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

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-275 mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            04 — Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] dark:text-[#EDEDED] mb-12">
            Things I&apos;ve built
          </h2>
        </FadeIn>

        {/* Featured */}
        <div className="space-y-6 mb-16">
          {featured.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group bg-[#111114] dark:bg-[#111114] rounded-xl border border-[#1F1F23] dark:border-[#1F1F23] p-6 sm:p-8 hover:border-accent/40 transition-colors duration-300"
              >
                <p className="font-mono text-xs text-[#8A8A93] dark:text-[#8A8A93] mb-2">
                  {project.label} — Featured Project
                </p>
                <h3 className="text-xl font-semibold text-[#EDEDED] dark:text-[#EDEDED] mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent mb-4">{project.tagline}</p>
                <p className="text-sm text-[#8A8A93] dark:text-[#8A8A93] leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 bg-[#1F1F23] dark:bg-[#1F1F23] text-[#8A8A93] dark:text-[#8A8A93] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.confidential && (
                    <span className="flex items-center gap-1.5 text-xs text-[#8A8A93] dark:text-[#8A8A93]">
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
                      className="flex items-center gap-1.5 text-xs text-[#8A8A93] hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      Live site
                    </a>
                  )}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        {/* Other work */}
        <FadeIn>
          <p className="font-mono text-xs text-[#8A8A93] dark:text-[#8A8A93] tracking-widest uppercase mb-6">
            Other work
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4">
          {other.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group bg-[#111114] dark:bg-[#111114] rounded-xl border border-[#1F1F23] dark:border-[#1F1F23] p-5 hover:border-accent/40 transition-colors duration-300 h-full"
              >
                <h3 className="text-base font-semibold text-[#EDEDED] dark:text-[#EDEDED] mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#8A8A93] dark:text-[#8A8A93] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-0.5 bg-[#1F1F23] dark:bg-[#1F1F23] text-[#8A8A93] dark:text-[#8A8A93] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
