"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork, Lock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    label: "01 — Featured Project",
    title: "Aztute × Waystar Integration",
    tagline: "Healthcare data pipeline — API integration, EDI processing, and middleware architecture",
    description:
      "Built the full integration layer between Aztute (a healthcare platform) and Waystar (a US clearinghouse) using Mirth Connect as middleware. Responsibilities included creating and exposing APIs in Mirth, transforming incoming data into valid EDI transaction files, sending them securely to Waystar via API and SFTP, and routing Waystar's responses back into the Aztute database. The work spans middleware logic, EDI generation (837, 835, 270/271), healthcare data flow automation, and cross-system interoperability.",
    stack: ["Mirth Connect", "EDI / HL7", "REST APIs", "SFTP", "Healthcare data", "Middleware"],
    confidential: true,
    links: [],
  },
  {
    label: "02 — Featured Project",
    title: "Raindrop — Client Website",
    tagline: "Frontend development for a client web project",
    description:
      "Built the frontend of the Raindrop client website, working directly as a frontend developer on the project. Responsible for translating designs into responsive, production-ready UI — handling layout, components, cross-browser consistency, and iterative delivery based on client feedback.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive design", "Figma"],
    confidential: false,
    links: [],
  },
  {
    label: "03 — Featured Project",
    title: "AI-Assisted Website Builds",
    tagline: "Multiple responsive sites shipped end-to-end with AI as a co-pilot",
    description:
      "Built several websites from scratch using WordPress combined with AI tools (ChatGPT, Claude, Cursor) for scaffolding, content, and rapid iteration. Mobile-first, faithful to Figma mockups, and shipped fast without sacrificing quality.",
    stack: ["WordPress", "HTML", "CSS", "JavaScript", "Figma", "AI tooling"],
    confidential: false,
    links: [{ type: "github", href: "#", label: "GitHub" }],
  },
  {
    label: "04 — Featured Project",
    title: "Personal Portfolio",
    tagline: "This site — designed and built from scratch",
    description:
      "A self-coded portfolio with semantic HTML, modern CSS, and a focus on clean typography, motion, and accessibility. Built to show, not tell. Next.js App Router, Tailwind CSS v4, Framer Motion — the whole stack, from scratch.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    confidential: false,
    links: [{ type: "github", href: "#", label: "Source" }],
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

        <div className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group bg-[#111114] dark:bg-[#111114] rounded-xl border border-[#1F1F23] dark:border-[#1F1F23] p-6 sm:p-8 hover:border-accent/40 transition-colors duration-300"
              >
                <div className="flex-1">
                  <p className="font-mono text-xs text-[#8A8A93] dark:text-[#8A8A93] mb-2">
                    {project.label}
                  </p>
                  <h3 className="text-xl font-semibold text-[#EDEDED] dark:text-[#EDEDED] mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent mb-4">{project.tagline}</p>
                  <p className="text-sm text-[#8A8A93] dark:text-[#8A8A93] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
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
                        NDA — confidential
                      </span>
                    )}
                    {project.links.map((link) => (
                      <a
                        key={link.type}
                        href={link.href}
                        aria-label={`${link.label} for ${project.title}`}
                        className="flex items-center gap-1.5 text-xs text-[#8A8A93] hover:text-accent dark:text-[#8A8A93] dark:hover:text-accent transition-colors"
                      >
                        {link.type === "github" ? (
                          <GitFork size={15} aria-hidden="true" />
                        ) : (
                          <ExternalLink size={15} aria-hidden="true" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
