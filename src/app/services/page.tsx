"use client";

import { WhyPixieSection } from "@/components/WhyPixieSection";
import { PricingSection } from "@/components/PricingSection";

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] mb-6">
          Our Services & Pricing
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          We offer comprehensive digital solutions tailored to help your business grow.
        </p>
      </div>
      <WhyPixieSection />
      <PricingSection />
    </div>
  );
}
