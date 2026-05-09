"use client";

import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WorksSection } from "@/components/WorksSection";
import { WhyPixieSection } from "@/components/WhyPixieSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQ1 } from "@/components/ui/faq-monochrome";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Pinned Hero Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Hero />
      </div>

      {/* Content that scrolls over the Hero */}
      <AboutSection />
      <WorksSection />
      <WhyPixieSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQ1 />
      <ContactSection />
    </div>
  );
}
