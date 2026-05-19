import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Contact } from "@/sections/Contact";
import { PageTransition } from "@/components/PageTransition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Swarnim Kanwal",
  description:
    "Open to internships, freelance, and junior frontend roles. Drop a message.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content" className="pt-20">
        <PageTransition>
          <Contact />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
