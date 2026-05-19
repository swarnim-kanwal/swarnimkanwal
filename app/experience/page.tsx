import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Experience } from "@/sections/Experience";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience — Swarnim Kanwal",
  description:
    "Integration Developer at Aztute Healthcare Platform — Waystar, Mirth Connect, EDI, APIs.",
};

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-20">
        <PageTransition>
          <Experience />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
