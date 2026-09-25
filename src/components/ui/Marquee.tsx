'use client';

import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export default function Marquee({
  children,
  direction = 'left',
  speed = 'normal',
  className = '',
}: MarqueeProps) {
  const animClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';

  return (
    <div className={`relative overflow-hidden w-full group ${className}`}>
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max space-x-8 group-hover:[animation-play-state:paused]">
        <div className={`flex shrink-0 items-center space-x-8 ${animClass}`}>
          {children}
        </div>
        <div className={`flex shrink-0 items-center space-x-8 ${animClass}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
