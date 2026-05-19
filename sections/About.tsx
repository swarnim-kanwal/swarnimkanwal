import { FadeIn } from "@/components/FadeIn";
import { MapPin, Briefcase, Activity, BookOpen } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Bahadurgarh, India" },
  { icon: Briefcase, label: "Frontend Developer" },
  { icon: Activity, label: "Currently building on Waystar (healthcare)" },
  { icon: BookOpen, label: "Currently learning: React patterns, TypeScript, system design" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase mb-4">
            02 — About
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] dark:text-[#EDEDED] mb-6 leading-tight">
              I build things for the web.
            </h2>
            <div className="space-y-4 text-[#8A8A93] dark:text-[#8A8A93] leading-relaxed">
              <p>
                I&apos;m a frontend developer based in India, currently studying
                Computer Science at MDU Rohtak and working on a US healthcare
                product called Waystar. I started as a fresher with almost no
                hands-on experience and grew into someone who ships production
                features, talks to clients, and owns work end-to-end.
              </p>
              <p>
                I care about clean code, thoughtful interfaces, and using AI to
                move faster without losing the craft. I&apos;m equally happy
                debugging a CSS edge case or jumping on a client call.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#111114] dark:bg-[#111114] rounded-xl border border-[#1F1F23] dark:border-[#1F1F23] p-6">
              <p className="font-mono text-xs text-[#8A8A93] dark:text-[#8A8A93] tracking-widest uppercase mb-5">
                Quick Facts
              </p>
              <ul className="space-y-4" role="list">
                {facts.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon
                      size={16}
                      className="text-[#3B82F6] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#8A8A93] dark:text-[#8A8A93]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
