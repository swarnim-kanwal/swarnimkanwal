import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Projects } from "@/sections/Projects";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Swarnim Kanwal",
  description:
    "Healthcare integration, Raindrop, Deash Medical, Quanted — projects I've built and shipped.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-20">
        <PageTransition>
          <Projects />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
