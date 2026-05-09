import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export function FeatureCard({ title, description, imageUrl, className = '' }: FeatureCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl group ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
        <h3 className="text-3xl font-bold tracking-tight mb-3">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}
