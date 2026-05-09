"use client";

import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

const galleryData: GalleryItem[] = [
  {
    common: 'E-Commerce Platform',
    binomial: 'Next.js & Shopify',
    photo: {
      url: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=900&auto=format&fit=crop&q=80',
      text: 'Modern e-commerce interface',
      by: 'Unsplash'
    }
  },
  {
    common: 'Fintech Dashboard',
    binomial: 'React & Node.js',
    photo: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
      text: 'Data visualization dashboard',
      by: 'Luke Chesser'
    }
  },
  {
    common: 'Healthcare App',
    binomial: 'React Native & Firebase',
    photo: {
      url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80',
      text: 'Medical technology application',
      by: 'National Cancer Institute'
    }
  },
  {
    common: 'Real Estate Portal',
    binomial: 'Vue.js & Laravel',
    photo: {
      url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80',
      text: 'Modern real estate listing',
      by: 'Binyamin Mellish'
    }
  },
  {
    common: 'AI Analytics Tool',
    binomial: 'Python & React',
    photo: {
      url: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=900&auto=format&fit=crop&q=80',
      text: 'AI code and analytics',
      by: 'Ilya Pavlov'
    }
  },
  {
    common: 'Crypto Wallet',
    binomial: 'Web3 & TypeScript',
    photo: {
      url: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=900&auto=format&fit=crop&q=80',
      text: 'Cryptocurrency on digital device',
      by: 'Executium'
    }
  },
  {
    common: 'SaaS Platform',
    binomial: 'SvelteKit & Supabase',
    photo: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      text: 'Business analytics on laptop',
      by: 'Carlos Muza'
    }
  },
  {
    common: 'Social Network',
    binomial: 'GraphQL & Apollo',
    photo: {
      url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&auto=format&fit=crop&q=80',
      text: 'Social media application interface',
      by: 'Alexander Shatov'
    }
  },
  {
    common: 'EdTech LMS',
    binomial: 'Next.js & Prisma',
    photo: {
      url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&auto=format&fit=crop&q=80',
      text: 'Online learning interface',
      by: 'Desola Lanre-Ologun'
    }
  },
  {
    common: 'Travel Engine',
    binomial: 'Nuxt & MongoDB',
    photo: {
      url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&auto=format&fit=crop&q=80',
      text: 'Travel planning application',
      by: 'Anete Lūsiņa'
    }
  }
];

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
      className="relative z-20 w-full bg-[#fafafa] text-[#1a1a1a] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] h-[150vh] min-[1049px]:h-[400vh]"
    >
      {/* Sticky viewport */}
      <div className="w-full h-auto min-h-[50vh] pb-12 min-[1049px]:pb-0 min-[1049px]:h-screen sticky top-0 flex flex-col overflow-hidden">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center w-full p-4 sm:pt-20 sm:pb-8 shrink-0"
        >
          <h2 className="text-3xl sm:text-5xl min-[1049px]:text-5xl font-semibold tracking-tight max-w-5xl mx-auto leading-tight">
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
                className="shrink-0 w-[72vw] max-w-[300px] h-[56vw] max-h-[230px] rounded-2xl overflow-hidden shadow-xl relative"
              >
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-3 text-white">
                  <p className="text-sm font-bold leading-tight">{item.common}</p>
                  <p className="text-[11px] opacity-70 mt-0.5">{item.binomial}</p>
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
