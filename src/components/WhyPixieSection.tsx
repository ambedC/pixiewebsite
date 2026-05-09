import React, { useRef } from 'react';
import { FeatureCard } from './FeatureCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WhyPixieSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll('.reveal-card');
    const title = containerRef.current?.querySelector('.reveal-title');

    if (title) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }

    if (cards) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative z-30 w-full bg-white text-[#1a1a1a] py-32 px-8 lg:px-16 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] -mt-10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 text-[#111] reveal-title">
          Why Pixie?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Left Card */}
          <div className="md:col-span-5 h-[400px] md:h-[500px] reveal-card">
            <FeatureCard
              title="SEO Friendly"
              description="Optimized structure and best practices to improve visibility on search engines."
              imageUrl="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&auto=format&fit=crop&q=80"
              className="w-full h-full"
            />
          </div>

          {/* Right Column Stack */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              <div className="h-[400px] md:h-auto reveal-card">
                <FeatureCard
                  title="Fast & Responsive"
                  description="Smooth performance across all devices for a seamless user experience."
                  imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80"
                  className="w-full h-full"
                />
              </div>
              <div className="h-[400px] md:h-auto reveal-card">
                <FeatureCard
                  title="Modern UI/UX"
                  description="Clean, intuitive, and visually engaging designs tailored for modern audiences."
                  imageUrl="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=80"
                  className="w-full h-full"
                />
              </div>
            </div>
            
            {/* Bottom Text Block */}
            <div className="mt-auto reveal-card">
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                We build high-performing digital solutions focused on speed, visibility, user experience, and scalable growth for modern businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
