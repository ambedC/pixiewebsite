"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GlassFilter } from "./ui/liquid-glass";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GlassFilter />
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 flex items-center justify-between transition-all duration-300 pointer-events-none">
        {/* Left: Logo */}
        <div className={`flex items-center p-2 rounded-2xl transition-all duration-500 pointer-events-auto ${
          scrolled ? "bg-white/70 backdrop-blur-xl shadow-sm border border-black/[0.03]" : "bg-transparent"
        }`}>
          <Link href="/">
            <img 
              src="/images/logo.png" 
              alt="Pixie Webs" 
              className="h-10 sm:h-16 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform" 
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:block pointer-events-auto">
          <div 
            className="rounded-[2rem] px-8 py-3 flex items-center shadow-sm"
            style={{
              background: "rgba(230, 230, 230, 0.45)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
            }}
          >
            <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-900">
              <li>
                <Link href="/" className="hover:opacity-60 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-60 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:opacity-60 transition-opacity">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-60 transition-opacity">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: CTA Button */}
        <div className="pointer-events-auto">
          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all text-sm sm:text-[15px] font-medium"
          >
            Contact
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          </Link>
        </div>
      </nav>
    </>
  );
}
