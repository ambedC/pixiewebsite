"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Content */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 pt-32 sm:pt-20">
        <div className="max-w-xl">
          {/* Main Title */}
          <h1 
            className="text-5xl sm:text-7xl lg:text-[85px] font-semibold tracking-[-0.05em] sm:tracking-[-0.1em] text-[#2c2c2c] leading-[1.1] sm:leading-[0.9] mb-6 sm:mb-4"
            style={{
              textShadow: "0px 4px 20px rgba(0,0,0,0.1)"
            }}
          >
            Pixie Webs
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-[22px] leading-relaxed text-[#5c5c5c] font-light mb-10 max-w-[90%]">
            Elegant digital solutions for businesses that want to grow, scale, and stand out.
          </p>
          
          {/* CTA Button */}
          <Link 
            href="/contact"
            className="inline-flex items-center gap-4 bg-white hover:bg-gray-50 text-gray-900 rounded-full pl-6 pr-2 py-2 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300 group"
          >
            <span className="font-medium text-[15px]">Start your project</span>
            <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
              <ArrowUpRight className="w-5 h-5 text-gray-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
