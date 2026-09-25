'use client';

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = '', duration = 1800 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out expo
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}
