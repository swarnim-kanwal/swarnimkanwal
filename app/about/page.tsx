import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { About } from "@/sections/About";
import { Education } from "@/sections/Education";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Swarnim Kanwal",
  description:
    "Frontend developer based in India, working on healthcare system integration and clean web UIs.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-20">
        <PageTransition>
          <About />
          <Education />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
