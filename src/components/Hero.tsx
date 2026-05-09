"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-[-3]"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Soft gradient overlay — preserves background, adds depth */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-white/60 via-white/30 to-transparent" />

      {/* Bottom fade to white so the section blends into the page below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[-1] bg-gradient-to-t from-[#fafafa] to-transparent" />


      {/* Content */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 pt-36 sm:pt-24 pb-24">
        <div className="max-w-2xl">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="text-xs font-medium text-gray-600 tracking-wide">Premium Web Design & Development</span>
          </div>

          {/* Main Title with gradient */}
          <h1
            className="text-5xl sm:text-7xl lg:text-[96px] text-[#1a1a1a] font-bold tracking-[-0.04em] sm:tracking-[-0.06em] leading-[1.05] sm:leading-[0.95] mb-6 pb-2"
          >
            Pixie Webs
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl leading-relaxed text-gray-500 font-light mb-10 max-w-[520px]">
            Elegant digital solutions for businesses that want to{" "}
            <span className="text-gray-700 font-normal">grow, scale, and stand out.</span>
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-full pl-6 pr-2 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300 group"
            >
              <span className="font-medium text-[15px]">Start your project</span>
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>

            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-[15px] transition-colors duration-200 group"
            >
              <span>See our work</span>
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="mt-14 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-violet-400", "bg-indigo-400", "bg-pink-400", "bg-sky-400"].map((color, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${color} border-2 border-white ring-1 ring-white/50`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Trusted by <span className="font-semibold text-gray-800">50+ businesses</span> worldwide
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1) translateY(0px); opacity: 0.25; }
          50% { transform: scale(1.08) translateY(-20px); opacity: 0.35; }
        }
      `}</style>
    </div>
  );
}
