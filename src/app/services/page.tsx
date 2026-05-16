"use client";

import React, { useRef } from "react";
import { PricingSection } from "@/components/PricingSection";
import { FAQ1 } from "@/components/ui/faq-monochrome";
import servicesData from "@/data/services.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, Shield, Star, Users, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const capabilities = [
  { icon: Zap, label: "Performance-First", desc: "Built for speed with Core Web Vitals in mind." },
  { icon: Shield, label: "SEO Optimised", desc: "Structured for maximum search engine visibility." },
  { icon: Users, label: "User-Centered", desc: "Designs that connect, engage, and convert." },
  { icon: Star, label: "Premium Quality", desc: "Every detail crafted to the highest standard." },
  { icon: Clock, label: "On-Time Delivery", desc: "Structured milestones so you always know what's next." },
  { icon: CheckCircle2, label: "Post-Launch Support", desc: "30 days of support included with every project." },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".svc-hero-line",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: "power4.out", delay: 0.2 }
    );
    gsap.fromTo(
      ".svc-hero-sub",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.7 }
    );
    gsap.fromTo(
      ".cap-card",
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".cap-grid", start: "top 80%" }
      }
    );
  }, { scope: heroRef });

  return (
    <div ref={heroRef} className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 px-6 sm:px-12 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-0" />
        <div className="pointer-events-none absolute top-40 left-1/3 w-[300px] h-[300px] bg-indigo-100/30 rounded-full blur-3xl -z-0" />

        <div className="relative z-10 max-w-4xl">
          <div className="svc-hero-sub inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-10">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium tracking-wide">What we offer</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-[-0.04em] leading-[1.05] mb-8">
            <div className="overflow-hidden"><div className="svc-hero-line">Services built</div></div>
            <div className="overflow-hidden"><div className="svc-hero-line">for <span className="text-gray-400">real</span></div></div>
            <div className="overflow-hidden"><div className="svc-hero-line">business growth.</div></div>
          </h1>

          <p className="svc-hero-sub text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
            From lean startups to growing enterprises, we craft premium digital experiences that don't just look great — they perform, scale, and convert.
          </p>

          <div className="svc-hero-sub flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#111] text-white px-8 py-4 rounded-full font-medium text-[15px] hover:bg-black hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
            >
              Start a project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 bg-white border border-black/10 text-[#111] px-8 py-4 rounded-full font-medium text-[15px] hover:shadow-md hover:scale-105 transition-all duration-300 group"
            >
              View our work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-gray-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.03)] relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold mb-4">Our capabilities</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Why clients choose us</h2>
          </div>
          <div className="cap-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="cap-card group p-8 rounded-3xl border border-black/[0.04] bg-[#fafafa] hover:bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.05] shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <cap.icon size={22} strokeWidth={1.5} className="text-[#111]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cap.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Package Comparison Strip ── */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold mb-4">Packages at a glance</p>
            <h2 className="text-4xl font-bold tracking-tight">Find the right fit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.05] border border-black/[0.05] rounded-3xl overflow-hidden bg-white shadow-sm">
            {servicesData.map((plan, i) => (
              <div key={plan.id} className={`p-8 lg:p-10 flex flex-col gap-6 ${i === 1 ? "bg-[#111] text-white" : ""}`}>
                <div>
                  <p className={`text-xs uppercase tracking-widest font-bold mb-3 ${i === 1 ? "text-gray-400" : "text-gray-400"}`}>{plan.planName}</p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`text-4xl font-bold tracking-tight ${i === 1 ? "text-white" : "text-[#111]"}`}>
                      ₹{plan.basePrice.toLocaleString()}
                    </span>
                    <span className={`text-sm mb-1 ${i === 1 ? "text-gray-400" : "text-gray-400"}`}>starting</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${i === 1 ? "text-gray-400" : "text-gray-500"}`}>{plan.planSubtitle}</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${i === 1 ? "text-green-400" : "text-green-500"}`} />
                      <span className={i === 1 ? "text-gray-300" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 group ${
                    i === 1
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-[#111] text-white hover:bg-black"
                  }`}
                >
                  {plan.ctaText} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ1 />
    </div>
  );
}
