"use client";

import React from 'react';
import worksData from '@/data/works.json';

export function MasonryWorksSection() {
  return (
    <section className="relative z-20 w-full bg-[#fafafa] text-[#1a1a1a] py-16 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* CSS Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {worksData.map((item, i) => (
            <div
              key={item.id}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                    <p className="text-sm text-gray-300 font-medium">{item.tech}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/15 text-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>
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
