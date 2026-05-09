"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

const Instagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Twitter = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Github = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative bg-white border-t border-black/[0.03] pt-24 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <img 
                src="/images/logo.png" 
                alt="Pixie Webs" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            </Link>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs">
              Crafting premium digital experiences with precision and passion. We build websites that don't just look good, they perform.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-50 border border-black/[0.03] flex items-center justify-center text-gray-400 hover:text-black hover:bg-white hover:shadow-sm transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-500 hover:text-black transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-8">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-black/[0.03]">
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-500 mb-6">Subscribe to our newsletter for the latest design insights.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-white border border-black/[0.05] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                />
              </div>
              <button className="w-full bg-black text-white rounded-xl px-4 py-3 text-sm font-medium hover:bg-gray-800 transition-all active:scale-[0.98]">
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Large Brand Text Section */}
      <div className="relative mt-0 overflow-hidden select-none pointer-events-none">
        <div className="flex justify-center">
          <h2 className="text-[22vw] font-bold text-black leading-none tracking-tighter whitespace-nowrap translate-y-[30%]">
            Pixie Webs
          </h2>
        </div>
        
        {/* The Dark Section from the image */}
        <div className="bg-[#121212] w-full relative z-10 py-4 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-gray-500">
                © {currentYear} Pixie Web Solutions. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                 <Link href="mailto:hello@pixiewebs.com" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                   <Mail size={14} />
                   hello@pixiewebs.com
                 </Link>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
