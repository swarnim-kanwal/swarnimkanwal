"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, Link2, GitFork, CheckCircle2 } from "lucide-react";
import { Reveal, RevealStagger, staggerItem } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "swarnimkanwal@gmail.com",
    href: "mailto:swarnimkanwal@gmail.com",
    external: false,
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/swarnimkanwal",
    href: "#",
    external: false,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/swarnimkanwal",
    href: "https://www.linkedin.com/in/swarnimkanwal/",
    external: true,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log("Form submission:", data);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-275 mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            07 — Contact
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDED] mb-4">
            Let&apos;s <span className="shine-text">build</span> something.
          </h2>
          <p className="text-[#B8B0CC] leading-relaxed max-w-xl mb-8 sm:mb-12">
            I&apos;m open to internships, freelance projects, and junior frontend
            roles. Drop a message — I usually reply within a day.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Reveal variant="left" delay={0.1}>
            <RevealStagger className="space-y-4" gap={0.1}>
              {contacts.map(({ icon: Icon, label, value, href, external }) => (
                <motion.a
                  key={label}
                  variants={staggerItem}
                  href={href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  aria-label={`${label}: ${value}`}
                  className="group flex items-center gap-4 p-4 rounded-xl glass border border-accent/15 hover:border-accent/40 transition-all duration-300 hover:translate-x-1"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="p-3 bg-accent/10 border border-accent/30 rounded-lg group-hover:glow-accent transition-shadow"
                  >
                    <Icon size={18} className="text-accent" aria-hidden="true" />
                  </motion.div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-[#8A8A93] mb-0.5 uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="text-sm text-[#EDEDED] group-hover:text-accent transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </RevealStagger>
          </Reveal>

          <Reveal variant="right" delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-70 border border-accent/30 glow-accent"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.15,
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                    }}
                    className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center mb-4 glow-accent"
                  >
                    <CheckCircle2 size={26} className="text-accent" aria-hidden="true" />
                  </motion.div>
                  <h3 className="font-semibold text-[#EDEDED] mb-2 text-lg">
                    Message sent!
                  </h3>
                  <p className="text-sm text-[#B8B0CC]">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-accent hover:underline transition-all"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  {(["name", "email", "message"] as const).map((field, i) => {
                    const labelMap = { name: "Name", email: "Email", message: "Message" };
                    const placeholder = {
                      name: "Your name",
                      email: "your@email.com",
                      message: "What's on your mind?",
                    }[field];
                    const type = field === "email" ? "email" : "text";

                    return (
                      <motion.div
                        key={field}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                      >
                        <label
                          htmlFor={field}
                          className="block text-xs font-mono text-[#8A8A93] mb-1.5 uppercase tracking-widest"
                        >
                          {labelMap[field]}
                        </label>
                        {field === "message" ? (
                          <textarea
                            id={field}
                            rows={4}
                            {...register(field)}
                            placeholder={placeholder}
                            className="w-full bg-[#0E0720]/60 border border-accent/15 rounded-md px-4 py-3 text-sm text-[#EDEDED] placeholder-[#6B5E8A] focus:border-accent focus:bg-[#0E0720]/90 focus:shadow-[0_0_20px_rgba(139,92,246,0.25)] outline-none transition-all resize-none"
                          />
                        ) : (
                          <input
                            id={field}
                            type={type}
                            autoComplete={field}
                            {...register(field)}
                            placeholder={placeholder}
                            className="w-full bg-[#0E0720]/60 border border-accent/15 rounded-md px-4 py-3 text-sm text-[#EDEDED] placeholder-[#6B5E8A] focus:border-accent focus:bg-[#0E0720]/90 focus:shadow-[0_0_20px_rgba(139,92,246,0.25)] outline-none transition-all"
                          />
                        )}
                        <AnimatePresence>
                          {errors[field] && (
                            <motion.p
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="mt-1.5 text-xs text-red-400"
                            >
                              {errors[field]?.message as string}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-accent hover:bg-[#7C3AED] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center gap-2 relative overflow-hidden group glow-accent hover:glow-accent-strong"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Send size={15} aria-hidden="true" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      style={{
                        background:
                          "linear-gradient(100deg, transparent, rgba(255,255,255,0.25), transparent)",
                      }}
                    />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
