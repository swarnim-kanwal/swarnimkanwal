import { FadeIn } from "@/components/FadeIn";

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
    items: [
      "Figma",
      "WordPress",
      "UI/UX implementation",
      "Design-to-code",
    ],
  },
  {
    label: "AI-Assisted Dev",
    items: [
      "ChatGPT",
      "Claude",
      "Cursor",
      "GitHub Copilot",
    ],
  },
  {
    label: "Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Chrome DevTools",
      "Basic CLI",
    ],
  },
  {
    label: "Domain Exposure",
    items: [
      "US Healthcare (Waystar)",
      "Client-facing product delivery",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase mb-4">
            05 — Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] dark:text-[#EDEDED] mb-12">
            Skills &amp; tools
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.07}>
              <div>
                <p className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase mb-4">
                  {group.label}
                </p>
                <ul className="space-y-2" role="list">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#8A8A93] dark:text-[#8A8A93] flex items-center gap-2"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[#1F1F23] dark:bg-[#1F1F23] shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
