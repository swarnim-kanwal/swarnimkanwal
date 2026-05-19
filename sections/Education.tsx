import { FadeIn } from "@/components/FadeIn";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "C++ Programming (Beginner to Advanced)",
  "Python Crash Course (Google)",
  "Java Programming",
  "Configuration Management in Cloud",
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-275 mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            06 — Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] dark:text-[#EDEDED] mb-12">
            Education &amp; certifications
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-[#111114] dark:bg-[#111114] border border-[#1F1F23] dark:border-[#1F1F23] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#1F1F23] dark:bg-[#1F1F23] rounded-lg shrink-0">
                  <GraduationCap
                    size={18}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#EDEDED] dark:text-[#EDEDED] mb-1">
                    B.Tech, Computer Science Engineering
                  </h3>
                  <p className="text-sm text-[#8A8A93] dark:text-[#8A8A93] mb-1">
                    Maharshi Dayanand University, Rohtak
                  </p>
                  <p className="font-mono text-xs text-[#8A8A93] dark:text-[#8A8A93]">
                    2021 — Present
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#111114] dark:bg-[#111114] border border-[#1F1F23] dark:border-[#1F1F23] rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#1F1F23] dark:bg-[#1F1F23] rounded-lg shrink-0">
                  <Award
                    size={18}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#EDEDED] dark:text-[#EDEDED] mb-3">
                    Certifications
                  </h3>
                  <ul className="space-y-2" role="list">
                    {certifications.map((cert) => (
                      <li
                        key={cert}
                        className="text-sm text-[#8A8A93] dark:text-[#8A8A93] flex items-start gap-2"
                      >
                        <span
                          className="text-accent mt-1 text-xs shrink-0"
                          aria-hidden="true"
                        >
                          ▸
                        </span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
