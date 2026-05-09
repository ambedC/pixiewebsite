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
  return (
    <section className="relative z-20 w-full bg-[#fafafa] text-[#1a1a1a] shadow-[0_-20px_50px_rgba(0,0,0,0.05)]" style={{ height: '400vh' }}>
      <div className="w-full h-[150vh] sticky top-0 flex flex-col items-center justify-start overflow-hidden">
        {/* Header with responsive spacing and typography */}
        <div className="text-center mt-32 md:mt-40 mb-32 md:mb-72 z-10 w-full px-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-5xl mx-auto leading-tight">
            Our mission is building impactful digital experiences.
          </h2>
        </div>
        
        {/* Gallery with responsive scaling */}
        <div className="w-full flex items-center justify-center pb-32 md:pb-64">
          <CircularGallery items={galleryData} radius={500} autoRotateSpeed={0.05} />
        </div>
      </div>
    </section>
  );
}
