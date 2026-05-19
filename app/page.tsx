import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:text-sm"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <PageTransition>
          <Hero />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
