'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Beaker, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about/' },
  { name: 'Products', href: '/products/' },
  { name: 'Factory & R&D', href: '/factory/' },
  // { name: 'News', href: '/news/' },
  // { name: 'Jobs', href: '/jobs/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname?.startsWith(href.replace(/\/$/, ''));
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 text-white ${
      scrolled
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl shadow-black/40'
        : 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900'
    }`}>
      {/* Top Banner Bar (Hidden) */}
      {/* 
      <div className="bg-gradient-to-r from-brand-950 via-slate-950 to-brand-950 border-b border-brand-900/40 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-brand-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              ISO 9001:2015 & GMP Compliant Supplier
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              High-Purity Pharma Intermediates & Cosmetic Actives
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href={`mailto:${COMPANY_INFO.exportEmail}`} className="hover:text-brand-300 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3 text-brand-400" /> {COMPANY_INFO.exportEmail}
            </a>
            <span className="hidden sm:inline text-slate-600">/</span>
            <span className="hidden sm:inline text-slate-400">Nanjing, China</span>
          </div>
        </div>
      </div>
      */}

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Glow */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-500 to-accent-cyan opacity-40 group-hover:opacity-80 blur transition-all" />
            <div className="relative w-11 h-11 rounded-xl bg-slate-950 border border-brand-500/40 flex items-center justify-center">
              <Beaker className="w-6 h-6 text-brand-400 group-hover:scale-110 group-hover:rotate-6 transition-all" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-brand-300 transition-colors">
                SUNRISE
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                BIOTECH
              </span>
            </div>
            <p className="text-[11px] text-slate-400 tracking-wider">Nanjing Sunrise Biotech Co., Ltd.</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'text-brand-300 bg-brand-950/80 border border-brand-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Action with Shimmer Border */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact/"
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-lg shadow-brand-600/25 hover:shadow-brand-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <span>Inquire Quote</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium ${
                  active
                    ? 'text-brand-300 bg-brand-950 border border-brand-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3">
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white text-center shadow-md"
            >
              <span>Get Immediate Quote / COA</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
