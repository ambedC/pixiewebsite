"use client";

import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';
import worksData from '@/data/works.json';

const galleryData: GalleryItem[] = worksData.map((w) => ({
  common: w.title,
  binomial: w.tech,
  photo: {
    url: w.image,
    text: w.imageAlt,
    by: w.category,
  },
}));


export function WorksSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [galleryHeight, setGalleryHeight] = React.useState(420);
  const [galleryRadius, setGalleryRadius] = React.useState(480);
  const [translateX, setTranslateX] = React.useState(0);

  // Desktop gallery sizing
  React.useEffect(() => {
    const compute = () => {
      const vh = window.innerHeight;
      const w = window.innerWidth;
      const headerH = headerRef.current?.offsetHeight ?? 0;
      const available = vh - headerH - 40;

      if (w < 1049) {
        setGalleryRadius(340);
        setGalleryHeight(Math.max(380, Math.min(available, 440)));
      } else {
        setGalleryRadius(480);
        setGalleryHeight(Math.max(420, Math.min(available, 500)));
      }
    };
    const id = requestAnimationFrame(compute);
    window.addEventListener('resize', compute);
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', compute); };
  }, []);

  // Scroll-driven horizontal translation for mobile/tablet
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1049) return;
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const sectionTop = section.offsetTop;
      const sectionScrollLength = section.offsetHeight - window.innerHeight;
      
      // Prevent division by zero if height is too small
      if (sectionScrollLength <= 0) return;

      const scrolled = window.scrollY - sectionTop;
      const progress = Math.max(0, Math.min(1, scrolled / sectionScrollLength));

      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = -(trackWidth - viewportWidth + 32); // 32px = end padding
      setTranslateX(progress * maxTranslate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-[#fafafa] text-[#1a1a1a] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] h-[300vh] min-[1049px]:h-[400vh]"
    >
      {/* Sticky viewport */}
      <div className="w-full h-auto min-h-[50vh] pb-12 min-[1049px]:pb-0 min-[1049px]:h-screen sticky top-0 flex flex-col overflow-hidden">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center w-full p-4 pt-20 sm:pt-20 sm:pb-8 shrink-0"
        >
          <h2 className="text-3xl sm:text-4xl min-[1049px]:text-5xl font-semibold mb-6 md:mb-12 tracking-tight max-w-5xl mx-auto leading-tight">
            Our mission is building impactful digital experiences.
          </h2>
        </div>

        {/* MOBILE/TABLET (<1049px): Scroll-driven horizontal strip */}
        <div className="min-[1049px]:hidden w-full overflow-hidden px-4 pb-16 pt-4 flex-1">
          <div
            ref={trackRef}
            className="flex gap-5 w-max px-4 will-change-transform"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.05s linear',
            }}
          >
            {galleryData.map((item) => (
              <div
                key={item.photo.url}
                className="shrink-0 w-[92vw] max-w-[440px] h-[75vw] max-h-[380px] rounded-3xl overflow-hidden shadow-xl relative"
              >
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                  <p className="text-base font-bold leading-tight">{item.common}</p>
                  <p className="text-[13px] opacity-70 mt-1">{item.binomial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP (≥1049px): 3D Circular Gallery */}
        <div
          className="hidden min-[1049px]:flex w-full items-center justify-center shrink-0"
          style={{ height: `${galleryHeight}px` }}
        >
          <CircularGallery
            items={galleryData}
            radius={galleryRadius}
            height={galleryHeight}
            autoRotateSpeed={0.05}
          />
        </div>
      </div>
    </section>
  );
}
