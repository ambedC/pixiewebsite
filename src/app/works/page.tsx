"use client";

import { MasonryWorksSection } from "@/components/MasonryWorksSection";

export default function WorksPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center pb-0">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] mb-6">
          Our Work
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Explore our portfolio of digital experiences crafted with precision.
        </p>
      </div>
      <MasonryWorksSection />
    </div>
  );
}
