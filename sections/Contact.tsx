"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, Link2, GitFork } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-275 mx-auto">
        <FadeIn>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            07 — Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EDEDED] dark:text-[#EDEDED] mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-[#8A8A93] dark:text-[#8A8A93] leading-relaxed max-w-xl mb-12">
            I&apos;m open to internships, freelance projects, and junior frontend
            roles. Drop a message — I usually reply within a day.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:swarnimk4@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="p-2.5 bg-[#111114] dark:bg-[#111114] border border-[#1F1F23] dark:border-[#1F1F23] rounded-lg group-hover:border-accent transition-colors">
                  <Mail size={18} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#8A8A93] dark:text-[#8A8A93] mb-0.5">
                    Email
                  </p>
                  <p className="text-sm text-[#EDEDED] dark:text-[#EDEDED] group-hover:text-accent transition-colors">
                    swarnimk4@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="#"
                aria-label="GitHub profile (placeholder)"
                className="flex items-center gap-3 group"
              >
                <div className="p-2.5 bg-[#111114] dark:bg-[#111114] border border-[#1F1F23] dark:border-[#1F1F23] rounded-lg group-hover:border-accent transition-colors">
                  <GitFork size={18} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#8A8A93] dark:text-[#8A8A93] mb-0.5">
                    GitHub
                  </p>
                  <p className="text-sm text-[#EDEDED] dark:text-[#EDEDED] group-hover:text-accent transition-colors">
                    github.com/swarnimkanwal
                  </p>
                </div>
              </a>

              <a
                href="#"
                aria-label="LinkedIn profile (placeholder)"
                className="flex items-center gap-3 group"
              >
                <div className="p-2.5 bg-[#111114] dark:bg-[#111114] border border-[#1F1F23] dark:border-[#1F1F23] rounded-lg group-hover:border-accent transition-colors">
                  <Link2 size={18} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[#8A8A93] dark:text-[#8A8A93] mb-0.5">
                    LinkedIn
                  </p>
                  <p className="text-sm text-[#EDEDED] dark:text-[#EDEDED] group-hover:text-accent transition-colors">
                    linkedin.com/in/swarnimkanwal
                  </p>
                </div>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {submitted ? (
              <div className="bg-[#111114] dark:bg-[#111114] border border-accent/30 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-70">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Send size={20} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-[#EDEDED] dark:text-[#EDEDED] mb-2">
                  Message sent!
                </h3>
                <p className="text-sm text-[#8A8A93] dark:text-[#8A8A93]">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-accent hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-[#8A8A93] dark:text-[#8A8A93] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    className="w-full bg-[#111114] dark:bg-[#111114] border border-[#1F1F23] dark:border-[#1F1F23] rounded-md px-4 py-2.5 text-sm text-[#EDEDED] dark:text-[#EDEDED] placeholder-[#8A8A93] focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-[#8A8A93] dark:text-[#8A8A93] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className="w-full bg-[#111114] dark:bg-[#111114] border border-[#1F1F23] dark:border-[#1F1F23] rounded-md px-4 py-2.5 text-sm text-[#EDEDED] dark:text-[#EDEDED] placeholder-[#8A8A93] focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-[#8A8A93] dark:text-[#8A8A93] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="w-full bg-[#111114] dark:bg-[#111114] border border-[#1F1F23] dark:border-[#1F1F23] rounded-md px-4 py-2.5 text-sm text-[#EDEDED] dark:text-[#EDEDED] placeholder-[#8A8A93] focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-accent hover:bg-[#2563EB] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} aria-hidden="true" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
