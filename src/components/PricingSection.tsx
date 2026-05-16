"use client";

import React, { useRef } from 'react';
import { InteractivePricingCard } from '@/components/ui/pricing';
import servicesData from '@/data/services.json';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const title = containerRef.current?.querySelector('.reveal-title');
    const cards = containerRef.current?.querySelectorAll('.reveal-card');

    if (title) {
      gsap.from(title, {
        scrollTrigger: { trigger: title, start: 'top 85%' },
        y: 30, opacity: 0, duration: 1, ease: 'power3.out',
      });
    }

    if (cards) {
      gsap.from(cards, {
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
        y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative z-30 w-full bg-[#fafafa] text-[#1a1a1a] py-32 px-6 lg:px-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] -mt-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] reveal-title">
            Choose the Ideal Package for Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((plan) => (
            <div key={plan.id} className="reveal-card">
              <InteractivePricingCard
                planName={plan.planName}
                planSubtitle={plan.planSubtitle}
                basePrice={plan.basePrice}
                pricePerPage={plan.pricePerPage}
                minPages={plan.minPages}
                maxPages={plan.maxPages}
                initialPages={plan.initialPages}
                features={plan.features}
                ctaText={plan.ctaText}
                themeColor={plan.themeColor as "blue" | "red" | "gold"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
