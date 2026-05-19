import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Skills } from "@/sections/Skills";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills — Swarnim Kanwal",
  description:
    "Frontend, integration, design tools, and AI-assisted development — skills and toolset.",
};

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-20">
        <PageTransition>
          <Skills />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
