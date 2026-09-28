'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Activity, ShieldCheck, ArrowUpRight, Cpu } from 'lucide-react';

export default function InteractiveMolecule() {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative group">
      {/* Outer Glowing Ring */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-500 via-accent-cyan to-brand-400 opacity-30 group-hover:opacity-60 blur-xl transition-all duration-700 animate-glow" />

      {/* Main Glassmorphic Card */}
      <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-brand-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-brand-400">Bio-Fermentation Lab</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Active Molecular Blueprint</h3>
            </div>
          </div>
          <span className="font-mono text-xs font-bold text-brand-300 bg-brand-950/80 px-2.5 py-1 rounded-full border border-brand-500/40">
            HPLC: 99.8%
          </span>
        </div>

        {/* 3D-Like Molecular Visual Node Display */}
        <div className="relative h-44 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center overflow-hidden mb-5">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />

          {/* Central Rotating/Floating Molecular Core */}
          <div className="relative flex items-center justify-center animate-float">
            {/* Center Atom */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-cyan p-0.5 shadow-lg shadow-brand-500/50">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-mono text-brand-300 font-bold">C6H10</span>
                <span className="text-[9px] font-mono text-slate-400">N2O2</span>
              </div>
            </div>

            {/* Orbiting Orbital Nodes */}
            <div className="absolute -top-7 -left-9 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-brand-500/30 text-[10px] font-mono text-emerald-300 shadow-md">
              -COOH (Active)
            </div>
            <div className="absolute -bottom-6 -right-9 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 shadow-md">
              -NH2 (Binding)
            </div>
            <div className="absolute -bottom-7 -left-6 px-2 py-0.5 rounded-lg bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-slate-300 shadow-md">
              ee &gt; 99%
            </div>
          </div>

          {/* Real-time Spectrum Waveform at bottom of box */}
          <div className="absolute bottom-2 left-4 right-4 flex items-end justify-between h-8 gap-1 opacity-70">
            {[20, 35, 18, 50, 85, 100, 45, 25, 60, 30, 15, 40, 75, 90, 30, 20].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`w-full rounded-t transition-all duration-500 ${
                  i === 5 || i === 13 ? 'bg-accent-cyan shadow-[0_0_8px_#06b6d4]' : 'bg-brand-500/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technical Data Columns */}
        <div className="grid grid-cols-2 gap-3 text-xs font-mono mb-5">
          <div className="min-w-0 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase">Compound</span>
            <span className="block break-words text-slate-200 font-bold">2,6-Pyridinedicarboxylic acid</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase">CAS Number</span>
            <span className="text-brand-300 font-bold">499-83-2</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase">QC Standard</span>
            <span className="text-slate-200">Enterprise Standard</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase">Batch Status</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Released
            </span>
          </div>
        </div>

        {/* Bottom CTA Link */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">Export Packing: 1kg / 25kg Drum</span>
          <Link
            href={`/contact/?product=${encodeURIComponent('2,6-Pyridinedicarboxylic acid')}`}
            className="text-brand-300 hover:text-white font-semibold flex items-center gap-1 group/link"
          >
            <span>Request Full COA</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
