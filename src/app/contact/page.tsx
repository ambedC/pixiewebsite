"use client";

import React, { useRef } from "react";
import { FAQ1 } from "@/components/ui/faq-monochrome";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Premium entrance animation
    const tl = gsap.timeline();
    tl.fromTo(".contact-reveal", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
    );
    
    tl.fromTo(".form-reveal",
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#fafafa] font-sans text-[#1a1a1a]">
      {/* Premium Hero / Split Section */}
      <section className="relative pt-40 pb-32 px-6 sm:px-12 lg:px-24 max-w-[1600px] mx-auto min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start mt-0">
          
          {/* Left Column: Info */}
          <div className="max-w-xl pr-0 lg:pr-12">
            <div className="contact-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Available for new projects</span>
            </div>
            
            <h1 className="contact-reveal text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] font-bold tracking-[-0.04em] mb-6">
              Let's build <br/><span className="text-gray-400">something</span><br/>amazing.
            </h1>
            
            <p className="contact-reveal text-xl text-gray-600 leading-relaxed mb-16">
              Whether you have a specific project in mind or just want to explore possibilities, we're here to help you navigate the digital landscape.
            </p>

            <div className="space-y-10 mt-12">
              <div className="contact-reveal flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.05] flex items-center justify-center text-black group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <Mail strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-1">Email us</h3>
                  <a href="mailto:hello@pixiewebs.com" className="text-xl font-medium hover:text-blue-600 transition-colors">hello@pixiewebs.com</a>
                </div>
              </div>

              <div className="contact-reveal flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.05] flex items-center justify-center text-black group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <Phone strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-1">Call us</h3>
                  <a href="tel:+15550000000" className="text-xl font-medium hover:text-blue-600 transition-colors">+1 (555) 000-0000</a>
                </div>
              </div>

              <div className="contact-reveal flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.05] flex items-center justify-center text-black group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500">
                  <MapPin strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-1">Visit us</h3>
                  <p className="text-xl font-medium text-gray-800 leading-tight">123 Design Avenue<br/>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="form-reveal relative">
            {/* Soft backdrop glow behind the form */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[3rem] transform translate-x-4 translate-y-4 -z-10" />
            
            <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-black/[0.03]">
              <h2 className="text-3xl font-semibold mb-8 text-[#111]">Send a message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstname" className="text-sm font-medium text-gray-700 ml-1">First Name</Label>
                    <Input id="firstname" placeholder="John" className="h-14 rounded-2xl bg-[#f8f9fa] border-transparent focus:bg-white focus:border-black/10 focus:ring-2 focus:ring-black/5 transition-all text-base px-5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname" className="text-sm font-medium text-gray-700 ml-1">Last Name</Label>
                    <Input id="lastname" placeholder="Doe" className="h-14 rounded-2xl bg-[#f8f9fa] border-transparent focus:bg-white focus:border-black/10 focus:ring-2 focus:ring-black/5 transition-all text-base px-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email Address</Label>
                  <Input type="email" id="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-[#f8f9fa] border-transparent focus:bg-white focus:border-black/10 focus:ring-2 focus:ring-black/5 transition-all text-base px-5" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700 ml-1">Subject</Label>
                  <Input type="text" id="subject" placeholder="How can we help?" className="h-14 rounded-2xl bg-[#f8f9fa] border-transparent focus:bg-white focus:border-black/10 focus:ring-2 focus:ring-black/5 transition-all text-base px-5" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[160px] rounded-2xl bg-[#f8f9fa] border-transparent focus:bg-white focus:border-black/10 focus:ring-2 focus:ring-black/5 transition-all text-base p-5 resize-none" />
                </div>

                <Button className="w-full h-16 rounded-2xl bg-[#111] hover:bg-black text-white text-lg font-medium mt-4 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 group">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <FAQ1 />
      
    </div>
  );
}
