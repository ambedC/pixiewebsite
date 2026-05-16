"use client";

import React, { useRef, useState } from 'react';
import { AnimatedTestimonials, Testimonial } from '@/components/ui/testimonial';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import testimonialsData from '@/data/testimonials.json';

const testimonials: Testimonial[] = testimonialsData.map((t) => ({
  quote: t.quote,
  name: t.name,
  designation: t.designation,
  src: t.src,
}));


export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const title = containerRef.current?.querySelector('.reveal-title');
    const content = containerRef.current?.querySelector('.reveal-content');

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

    if (content) {
      gsap.from(content, {
        scrollTrigger: {
          trigger: content,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${testimonials.length * 100}%`,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * testimonials.length),
          testimonials.length - 1
        );
        setActiveIndex(newIndex);
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative z-30 w-full min-h-screen bg-white text-[#1a1a1a] py-8 md:py-20 px-6 lg:px-12 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] -mt-10 overflow-hidden flex flex-col justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }} 
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111] reveal-title">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="reveal-content flex-1 items-start flex flex-col justify-center">
          <AnimatedTestimonials 
            testimonials={testimonials} 
            autoplay={false} 
            controlledActiveIndex={activeIndex} 
            hideControls={true} 
          />
        </div>
      </div>
    </section>
  );
}
