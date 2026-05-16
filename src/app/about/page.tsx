"use client";

import React, { useRef } from "react";
import { AboutSection } from "@/components/AboutSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animations
    const tl = gsap.timeline();
    tl.fromTo(".hero-title-line", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out", delay: 0.2 })
      .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .fromTo(".hero-image", { scale: 1.05, opacity: 0, filter: "blur(10px)" }, { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power3.out" }, "-=0.8");

    // Values Animations
    const valueCards = gsap.utils.toArray(".value-card");
    valueCards.forEach((card: any, i) => {
      gsap.fromTo(card, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#fafafa] min-h-screen w-full font-sans text-[#1a1a1a]">
      {/* Premium Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-24 max-w-[1600px] mx-auto min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Our Story</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.05] font-bold tracking-[-0.04em] mb-8">
              <div className="overflow-hidden pb-2"><div className="hero-title-line">Design with</div></div>
              <div className="overflow-hidden pb-2"><div className="hero-title-line text-gray-400">purpose.</div></div>
              <div className="overflow-hidden pb-2"><div className="hero-title-line">Build with</div></div>
              <div className="overflow-hidden pb-2"><div className="hero-title-line text-gray-400">passion.</div></div>
            </h1>
            
            <p className="hero-desc text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mb-10">
              We are a collective of designers, developers, and strategists dedicated to creating digital experiences that leave a lasting impression and drive real results.
            </p>
            
            <Link href="/contact" className="hero-desc inline-flex items-center gap-2 pb-1 border-b-2 border-black hover:pr-4 hover:gap-4 transition-all duration-300 font-medium text-lg group">
              Partner with us <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="relative h-[60vh] lg:h-[80vh] w-full rounded-[2rem] overflow-hidden bg-gray-200 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80" 
              alt="Our Team" 
              className="hero-image absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white p-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl">
              <p className="font-medium text-lg">"Great things in business are never done by one person. They're done by a team of people."</p>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section ref={valuesRef} className="py-32 px-6 sm:px-12 lg:px-24 bg-white rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.03)] relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-500 leading-relaxed">The principles that guide our work, our decisions, and our relationships. We don't just build websites; we build partnerships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                desc: "We don't settle for good enough. We push boundaries to deliver exceptional quality in every pixel and line of code.",
                icon: "✨"
              },
              {
                title: "Transparency",
                desc: "Honest communication, clear timelines, and open processes. We believe in building trust through radical transparency.",
                icon: "🔍"
              },
              {
                title: "Innovation",
                desc: "The digital landscape moves fast. We stay ahead of the curve, constantly exploring new technologies and methodologies.",
                icon: "💡"
              },
              {
                title: "Collaboration",
                desc: "We work with you, not just for you. The best results come from true partnerships and shared visions.",
                icon: "🤝"
              },
              {
                title: "Empathy",
                desc: "We design for real people. Understanding the end-user is at the heart of our entire development process.",
                icon: "❤️"
              },
              {
                title: "Impact",
                desc: "We measure our success by the success of our clients. We build solutions that drive tangible business results.",
                icon: "📈"
              }
            ].map((value, i) => (
              <div key={i} className="value-card p-10 rounded-3xl bg-[#fafafa] border border-black/[0.03] hover:bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.05] flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#111]">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="py-32 px-6 bg-[#111] text-white text-center rounded-t-[3rem] relative z-30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8">Ready to start?</h2>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 font-light">Let's build something extraordinary together.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] group">
            Get in touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
