'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import {
  Beaker,
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowRight,
  FileCheck,
  Cpu,
  Layers,
  CheckCircle,
  FlaskConical,
  Award,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, NEWS_LIST, FACTORY_FEATURES } from '@/data/company';
import ParticleBackground from '@/components/ui/ParticleBackground';
import SpotlightCard from '@/components/ui/SpotlightCard';
import InteractiveMolecule from '@/components/ui/InteractiveMolecule';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  // Stagger animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      {/* Hero Section with Interactive Particle Canvas & Spotlight Dynamics */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-20 lg:py-28">
        {/* Dynamic Bio-Particle Background Canvas */}
        <ParticleBackground />

        {/* Ambient Radial Lights */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent-cyan/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <motion.div
              variants={containerVariants}
              initial={false}
              animate="visible"
              className="lg:col-span-7 space-y-6"
            >
              {/* Shimmer Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
                <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0d9488_0%,#2dd4bf_50%,#0d9488_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3.5 py-1.5 text-xs font-medium text-brand-300 backdrop-blur-3xl gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
                    <span>Nanjing High-Tech Bio-Chemical Innovation</span>
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white"
              >
                We specialize in providing overseas clients with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-accent-cyan">
                  high-purity pharmaceutical intermediates and cosmetic raw materials.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
              >
                Nanjing Sunrise Biotech delivers certified pharmaceutical intermediates, high-efficacy cosmetic actives, and industrial specialty chemicals with validated COA testing and REACH/GMP compliance.
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/products/"
                  className="relative group overflow-hidden px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-brand-500 to-accent-cyan text-white shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="relative z-10">Explore Product Catalog</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>

                <Link
                  href="/contact/"
                  className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-brand-500/50 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <span>Request Technical Dossier</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </motion.div>

              {/* Verified Trust Badges */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400"
              >
                <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
                  <CheckCircle className="w-4 h-4 text-brand-400" /> Door-to-Door Worldwide Export
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column: 3D Interactive Molecule & Live Spectrum Panel */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <InteractiveMolecule />
            </motion.div>
          </div>
        </div>

        {/* Global Statistics Counter Banner */}
        <div className="mt-16 border-t border-slate-800/80 bg-slate-900/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-cyan font-mono">
                  <AnimatedCounter end={45} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Global Export Markets</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-cyan font-mono">
                  <AnimatedCounter end={8000} suffix="L" />
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Standard Reactor Capacity</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-cyan font-mono">
                  <AnimatedCounter end={320} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Active Catalog Products</div>
              </div>

              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-cyan font-mono">
                  <span className="font-mono">99.8%</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Quality Acceptance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Business Pillars with Spotlight Effect */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-200">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Chemical & Bio-Manufacturing
          </h2>
          <p className="text-slate-600 text-base">
            Providing tailored chemical solutions across life science sectors from custom synthetic routes to industrial bulk shipments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Cosmetic Actives */}
          <SpotlightCard className="rounded-2xl border border-slate-200 bg-white hover:border-brand-500/50 hover:shadow-2xl transition-all group">
            <div className="p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-500/10 to-brand-500/20 border border-brand-500/20 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  Cosmetic Active Ingredients
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Bio-fermentation and functional active compounds including Ectoine, Ergothioneine, Alpha-Arbutin, and Oligo Hyaluronic Acid for advanced skincare formulas.
                </p>
                <ul className="space-y-2 text-xs text-slate-500 pt-2 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Efficacy data & stability reports available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Non-irritating and dermatologically tested
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" /> Compliant with EU & US cosmetic regulations
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/products/?category=cosmetic"
                  className="text-sm font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Browse Cosmetic Actives</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </SpotlightCard>

          {/* Pillar 2: Pharma Intermediates */}
          <SpotlightCard className="rounded-2xl border border-slate-200 bg-white hover:border-cyan-500/50 hover:shadow-2xl transition-all group">
            <div className="p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/10 to-cyan-500/20 border border-cyan-500/20 flex items-center justify-center text-cyan-600 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <FlaskConical className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  Pharmaceutical Intermediates
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  High-purity key intermediates, chiral synthesis building blocks, and API precursors produced under strict quality management for global drug innovators.
                </p>
                <ul className="space-y-2 text-xs text-slate-500 pt-2 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Full analytical dossier (HPLC, NMR, GC, MS)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Impurity profile control below 0.1%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Complete traceability and audit support
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/products/?category=pharmaceutical"
                  className="text-sm font-semibold text-cyan-600 hover:text-cyan-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Browse Pharma Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </SpotlightCard>

          {/* Pillar 3: Chemical Raw Materials */}
          <SpotlightCard className="rounded-2xl border border-slate-200 bg-white hover:border-emerald-500/50 hover:shadow-2xl transition-all group">
            <div className="p-8 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Fine Chemical Raw Materials
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Specialty organic synthesis reagents, reaction media, functional solvents, and polymer additives with reliable batch-to-batch consistency.
                </p>
                <ul className="space-y-2 text-xs text-slate-500 pt-2 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Reliable bulk vessel and ISO tank shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Customized packaging & labeling options
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> REACH registration support for EU clients
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/products/?category=chemical"
                  className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                >
                  <span>Browse Chemical Lines</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Featured Star Products with Modern Hover Tilt */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Inventory Catalog</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Featured High-Purity Compounds</h2>
              <p className="text-slate-600 text-sm mt-1">Ready for worldwide shipping with comprehensive batch Certificates of Analysis.</p>
            </div>
            <Link
              href="/products/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 group"
            >
              <span>View All 320+ Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <SpotlightCard
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-xl transition-all"
              >
                <div className="p-6 flex flex-col justify-between h-full space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-slate-100 text-slate-600">
                        {product.categoryLabel}
                      </span>
                      <span className="font-mono text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded border border-brand-200">
                        {product.purity}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">CAS No.</span>
                        <span className="font-semibold text-slate-800">{product.casNo}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Formula</span>
                        <span className="font-semibold text-slate-800">{product.formula}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{product.application}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{product.grade}</span>
                    <Link
                      href={`/contact/?product=${encodeURIComponent(product.name)}`}
                      className="font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1 group/btn"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Corporate News & Exhibitions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Company Bulletin</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">News & Industry Insights</h2>
          </div>
          <Link href="/news/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 group">
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_LIST.map((news) => (
            <SpotlightCard
              key={news.id}
              className="bg-white rounded-2xl border border-slate-200 hover:shadow-xl transition-all"
            >
              <article className="p-6 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="px-2.5 py-0.5 rounded-md bg-brand-50 text-brand-700 font-semibold border border-brand-100">
                      {news.category}
                    </span>
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug hover:text-brand-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{news.summary}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">{news.readTime}</span>
                  <Link href="/news/" className="font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* Bottom Global Inquiry CTA Banner with Shimmer Flare */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-brand-950 to-slate-950 border border-brand-800/40 p-8 sm:p-14 text-center text-white overflow-hidden shadow-2xl">
          {/* Subtle Glow Burst */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Accelerate Your Formulation or API Synthesis?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Contact our international technical trade specialists today for batch inquiries, custom synthesis quotes, and full compliance dossiers.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Link
                href="/contact/"
                className="px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-500 to-accent-cyan text-white shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:opacity-95 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit RFQ / Inquiry
              </Link>
              <a
                href={`mailto:${COMPANY_INFO.exportEmail}`}
                className="px-8 py-3.5 rounded-xl font-bold text-sm bg-slate-900/90 border border-slate-700 hover:bg-slate-800 text-slate-200 transition-colors"
              >
                Email Export Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
