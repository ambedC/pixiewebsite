"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const text = "At Pixie, we craft modern websites, mobile applications, and digital experiences that help businesses build a strong online presence, connect with their audience, and grow with confidence through clean design, seamless performance, and thoughtful development.";

  useGSAP(() => {
    const words = textRef.current?.querySelectorAll(".word");
    if (!words) return;

    gsap.fromTo(
      words,
      { opacity: 0.1, filter: "blur(12px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 70%",
          scrub: 1.5,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative z-10 bg-white w-full min-h-screen rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center px-8 lg:px-24 py-32 mt-[100vh]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-200 rounded-full mt-6" />
      
      <h2 
        ref={textRef}
        className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.3] tracking-[-0.02em] text-[#1a1a1a] max-w-6xl mx-auto flex flex-wrap gap-x-3 gap-y-3 justify-center text-center"
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="word inline-block will-change-[filter,opacity]">
            {word}
          </span>
        ))}
      </h2>
    </section>
  );
}
