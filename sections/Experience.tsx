import { FadeIn } from "@/components/FadeIn";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Healthcare Product Team",
    project: "Aztute — Waystar integration",
    period: "2024 — Present",
    bullets: [
      "Integrated and shipped production frontend features on a US healthcare platform (Waystar) as part of the Aztute client project, under senior mentorship.",
      "Build reusable, responsive UI components from Figma handoffs with cross-browser consistency and accessibility in mind.",
      "Participate in code reviews, debugging sessions, and iterative releases — improving delivery speed and code quality continuously.",
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
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-275 mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            03 — Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] dark:text-[#EDEDED] mb-12">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-[#1F1F23] dark:bg-[#1F1F23] ml-1.75 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.role} delay={i * 0.1}>
                <div className="sm:pl-10 relative">
                  <div
                    className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-2 border-accent bg-[#0A0A0B] dark:bg-[#0A0A0B] hidden sm:block"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#EDEDED] dark:text-[#EDEDED]">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[#8A8A93] dark:text-[#8A8A93]">
                        {exp.company}
                        {exp.project && (
                          <span className="font-mono"> — {exp.project}</span>
                        )}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#8A8A93] dark:text-[#8A8A93] whitespace-nowrap mt-1">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5" role="list">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm text-[#8A8A93] dark:text-[#8A8A93] leading-relaxed"
                      >
                        <span
                          className="text-accent mt-1.5 shrink-0 text-xs"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
