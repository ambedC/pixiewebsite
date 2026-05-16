"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlassFilter } from "./ui/liquid-glass";
import { X, Menu, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <GlassFilter />

      {/* ── Backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Slide-in Drawer ── */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80vw] max-w-[320px] z-50 bg-white flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden shadow-2xl ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/[0.05]">
          <Link href="/" onClick={handleLogoClick}>
            <img src="/images/logo.png" alt="Pixie Webs" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (isHome && link.href === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setMenuOpen(false);
                }}
                className={`group flex items-center justify-between px-4 py-4 rounded-2xl text-[17px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#111] text-white"
                    : "text-[#1a1a1a] hover:bg-gray-50"
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span>{link.name}</span>
                <ArrowRight
                  size={16}
                  className={`transition-transform duration-200 group-hover:translate-x-1 ${
                    isActive ? "text-white/70" : "text-gray-400"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 py-6 border-t border-black/[0.05]">
          <p className="text-xs text-gray-400 font-medium tracking-wide">hello@pixiewebs.com</p>
          <p className="text-xs text-gray-400 mt-1">© {new Date().getFullYear()} Pixie Web Solutions</p>
        </div>
      </aside>

      {/* ── Top Nav Bar ── */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 flex items-center justify-between transition-all duration-300 pointer-events-none">

        {/* Left: Logo */}
        <div className={`flex items-center p-2 rounded-2xl transition-all duration-500 pointer-events-auto ${
          scrolled ? "bg-white/70 backdrop-blur-xl shadow-sm border border-black/[0.03]" : "bg-transparent"
        }`}>
          <Link href="/" onClick={handleLogoClick}>
            <img
              src="/images/logo.png"
              alt="Pixie Webs"
              className="h-10 sm:h-16 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
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
              <li><Link href="/" className="hover:opacity-60 transition-opacity">Home</Link></li>
              <li><Link href="/services" className="hover:opacity-60 transition-opacity">Services</Link></li>
              <li><Link href="/works" className="hover:opacity-60 transition-opacity">Work</Link></li>
              <li><Link href="/about" className="hover:opacity-60 transition-opacity">About</Link></li>
            </ul>
          </div>
        </div>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Contact CTA (always visible) */}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all text-sm sm:text-[15px] font-medium"
          >
            Contact
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 relative z-[60] ${
              scrolled || menuOpen
                ? "bg-white/70 backdrop-blur-xl shadow-sm border border-black/[0.03]"
                : "bg-white/60 backdrop-blur-md shadow-sm"
            } hover:scale-105`}
          >
            {menuOpen ? (
              <X size={18} strokeWidth={2} />
            ) : (
              <Menu size={18} strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
