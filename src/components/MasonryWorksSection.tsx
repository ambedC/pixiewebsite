"use client";

import React from 'react';
import Image from 'next/image';

const galleryData = [
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

export function MasonryWorksSection() {
  return (
    <section className="relative z-20 w-full bg-[#fafafa] text-[#1a1a1a] py-16 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* CSS Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryData.map((item, i) => (
            <div 
              key={i}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-auto overflow-hidden">
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  className="w-full h-full object-cover sm:relative sm:h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold tracking-tight">{item.common}</h3>
                    <p className="text-sm text-gray-300 font-medium">{item.binomial}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
