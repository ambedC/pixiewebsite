"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe, Zap, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Pixie Webs
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#work" className="hover:text-white transition-colors">Our Work</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-purple-400 mb-8 inline-block">
              Websites That Work. Magic That Connects.
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              We build digital <br /> 
              <span className="italic font-serif">masterpieces</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 leading-relaxed">
              Pixie Web Solutions blends cutting-edge technology with creative magic to deliver web experiences that don't just look good—they convert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#contact" className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#work" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-colors">
                View Showcase
              </Link>
            </div>
          </motion.div>

          {/* Floating Element Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-24 relative max-w-5xl mx-auto"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4 md:p-8 backdrop-blur-3xl animate-float">
               <div className="w-full h-full rounded-xl bg-[#0a0a0a] border border-white/5 overflow-hidden flex flex-col shadow-2xl">
                  {/* Mock Browser Header */}
                  <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  {/* Mock Content */}
                  <div className="flex-1 p-8 text-left space-y-6">
                    <div className="h-4 w-1/3 bg-white/10 rounded" />
                    <div className="h-12 w-2/3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 bg-white/5 rounded-lg border border-white/5" />
                      <div className="h-32 bg-white/5 rounded-lg border border-white/5" />
                      <div className="h-32 bg-white/5 rounded-lg border border-white/5" />
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                title: "Blazing Performance",
                description: "Optimized for speed and SEO. Our websites load in the blink of an eye."
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-400" />,
                title: "Global Scalability",
                description: "Built on modern frameworks like Next.js to handle traffic spikes effortlessly."
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "Rock-Solid Security",
                description: "Industry-leading security practices to keep your data and users safe."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-purple-500/50 transition-colors group"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center p-12 md:p-24 rounded-[3rem] magic-gradient relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to cast a spell?</h2>
            <p className="text-xl text-white/80 mb-12">
              Let's create something extraordinary together.
            </p>
            <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="font-bold text-white">Pixie Webs</span>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="/privacy" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10">Privacy Policy</Link>
          </div>
          <p className="text-sm">
            © 2024 Pixie Web Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
