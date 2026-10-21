import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MarketingServices } from "@/components/site/MarketingServices";
import { BillingServices } from "@/components/site/BillingServices";
import { Portfolio } from "@/components/site/Portfolio";
import { Skills } from "@/components/site/Skills";
import { Experience } from "@/components/site/Experience";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact, Footer } from "@/components/site/Contact";
import { useScrollReveal } from "@/components/site/primitives";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <MarketingServices />
        <BillingServices />
        <Portfolio />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
