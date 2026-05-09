'use client'; 

import * as React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

export interface InteractivePricingCardProps {
  planName: string;
  planSubtitle?: string;
  basePrice: number;
  pricePerPage: number;
  minPages: number;
  maxPages: number;
  initialPages: number;
  features: string[];
  ctaText: string;
  currency?: string;
  className?: string;
  themeColor?: 'blue' | 'red' | 'gold';
}

export function InteractivePricingCard({
  planName,
  planSubtitle,
  basePrice,
  pricePerPage,
  minPages,
  maxPages,
  initialPages,
  features,
  ctaText,
  currency = '₹',
  className,
  themeColor = 'blue',
}: InteractivePricingCardProps) {
  const [pages, setPages] = React.useState(initialPages);

  // Calculate the total price based on base price + cost of extra pages
  const extraPages = Math.max(0, pages - minPages);
  const totalPrice = basePrice + (extraPages * pricePerPage);

  const themeClasses = {
    blue: 'bg-[#3176d1] text-white',
    red: 'bg-[#8c1c04] text-white',
    gold: 'bg-[#b68205] text-white'
  };

  return (
    <Card
      className={cn(
        'flex w-full flex-col border-none shadow-xl rounded-3xl overflow-hidden',
        themeClasses[themeColor],
        className
      )}
    >
      <CardHeader className="pb-6 pt-8 px-8 border-b border-white/10">
        <div className="flex flex-col gap-2">
          <div className="flex items-end gap-2">
            <CardTitle className="text-3xl font-normal tracking-wide">{planName}</CardTitle>
            <span className="text-4xl font-light mb-[-2px]">
              {currency}{totalPrice}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 px-8 py-8">
        <div className="space-y-6">
          {/* Interactive Slider for Pages */}
          <div className="space-y-3 p-4 bg-black/10 rounded-2xl backdrop-blur-sm">
            <div className="flex justify-between font-medium text-sm text-white/90">
              <span>{`${pages} Page${pages > 1 ? 's' : ''}`}</span>
              <span>{currency}{pricePerPage} / extra page</span>
            </div>
            <Slider
              value={[pages]}
              onValueChange={(value) => setPages(value[0])}
              min={minPages}
              max={maxPages}
              step={1}
              aria-label={`Select number of pages`}
              className="py-2"
            />
          </div>

          {/* Features List */}
          <ul className="space-y-4 text-sm md:text-base">
            {features.map((feature, index) => {
              // Replace the dynamic number of pages in the feature string if it contains "pages"
              // e.g. "5 professionally designed pages" -> "{pages} professionally designed pages"
              let displayText = feature;
              if (index === 0 && feature.includes('pages')) {
                displayText = feature.replace(/^\d+|Up to \d+/, pages.toString());
              }

              return (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-white/80 shrink-0" />
                  <span className="text-white/90 leading-snug">{displayText}</span>
                </li>
              );
            })}
          </ul>
          
          {planSubtitle && (
            <div className="pt-4 mt-6 border-t border-white/10">
              <p className="text-sm italic text-white/80 leading-relaxed">
                {planSubtitle}
              </p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="px-8 pb-8 pt-0">
        <Button 
          className="group w-full bg-white text-black hover:bg-white/90 rounded-full h-12 font-medium text-[15px] flex justify-start items-center px-6 overflow-hidden" 
          size="lg"
        >
          <span className="mr-3 shrink-0">{ctaText}</span>
          <div className="flex-1 flex items-center h-full">
            <div className="h-[1.5px] bg-black w-8 group-hover:w-full transition-all duration-500 ease-in-out" />
            <svg 
              width="12" 
              height="24" 
              viewBox="0 0 12 24" 
              fill="none" 
              className="text-black shrink-0 -ml-[1px]"
            >
              <path 
                d="M1 7L6 12L1 17" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
}
