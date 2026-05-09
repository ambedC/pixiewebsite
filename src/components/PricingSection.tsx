"use client";

import React, { useRef } from 'react';
import { InteractivePricingCard } from '@/components/ui/pricing';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const starterFeatures = [
  '5 professionally designed pages',
  'Responsive design for all devices',
  'Modern UI/UX layout',
  'Basic SEO optimization',
  'Contact form integration',
  'Fast-loading website structure'
];

const businessFeatures = [
  'Up to 8 professionally designed pages',
  'Advanced responsive design',
  'Custom UI/UX design',
  'Enhanced SEO optimization',
  'Contact forms & WhatsApp integration',
  'Performance optimization',
  'Basic animations/interactions',
  'Social media integration'
];

const premiumFeatures = [
  'Up to 12 custom-designed pages',
  'Premium modern UI/UX experience',
  'Fully responsive across all devices',
  'Advanced SEO optimization',
  'Custom sections & interactive elements',
  'Speed and performance optimization',
  'Multiple forms/integrations',
  'Admin/dashboard features (if required)',
  'Priority support after delivery'
];

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const title = containerRef.current?.querySelector('.reveal-title');
    const cards = containerRef.current?.querySelectorAll('.reveal-card');

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
    <section ref={containerRef} className="relative z-30 w-full bg-[#fafafa] text-[#1a1a1a] py-32 px-6 lg:px-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] -mt-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] reveal-title">
            Choose the Ideal Package for Your Business
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="reveal-card">
            <InteractivePricingCard
              planName="Starter Package"
              planSubtitle="Ideal for Small businesses, portfolios, and startups looking for a clean online presence."
              basePrice={5000}
              pricePerPage={1000}
              minPages={5}
              maxPages={10}
              initialPages={5}
              features={starterFeatures}
              ctaText="Get a quote"
              themeColor="blue"
            />
          </div>
          
          <div className="reveal-card">
            <InteractivePricingCard
              planName="Business Package"
              planSubtitle="Growing businesses needing a stronger and more professional digital presence."
              basePrice={9000}
              pricePerPage={1100}
              minPages={8}
              maxPages={15}
              initialPages={8}
              features={businessFeatures}
              ctaText="Get a quote"
              themeColor="red"
            />
          </div>
          
          <div className="reveal-card">
            <InteractivePricingCard
              planName="Premium Package"
              planSubtitle="Growing businesses needing a stronger and more professional digital presence."
              basePrice={15000}
              pricePerPage={1200}
              minPages={12}
              maxPages={25}
              initialPages={12}
              features={premiumFeatures}
              ctaText="Get a quote"
              themeColor="gold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
