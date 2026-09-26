'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, Download, CheckCircle, Beaker, FileText, Sparkles, X } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/company';
import SpotlightCard from '@/components/ui/SpotlightCard';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.casNo.includes(query) ||
        product.formula.toLowerCase().includes(query) ||
        product.application.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-12 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Catalog & Technical Specifications</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            High-Purity pharmaceutical intermediates and cosmetic raw materials
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Search our active inventory by product name, CAS number, or molecular formula. Complete batch COA and technical dossiers available upon request.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Category Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Product, CAS No. or Formula..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Status Counter */}
            <div className="text-xs text-slate-500 font-mono self-end md:self-center">
              Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> of {PRODUCTS.length} standard products
            </div>
          </div>

          {/* Category Tabs with Animated Pill indicator */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'cosmetic', label: 'Cosmetic Active Ingredients' },
              { id: 'pharmaceutical', label: 'Pharmaceutical Intermediates' },
              { id: 'chemical', label: 'Chemical Raw Materials' },
            ].map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    active ? 'text-white' : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-slate-950 rounded-xl shadow-sm z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid with Layout Animations */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <Beaker className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We also undertake custom synthesis for novel intermediates and specialty actives. Contact our R&D chemists with your target molecular structure.
            </p>
            <Link
              href="/contact/"
              className="inline-block px-6 py-2.5 rounded-lg bg-brand-600 text-white text-xs font-semibold hover:bg-brand-500"
            >
              Request Custom Synthesis Quote
            </Link>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((p) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={p.id}
                >
                  <SpotlightCard className="bg-white rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-xl transition-all h-full">
                    <div className="p-6 flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold text-slate-600 px-2.5 py-0.5 rounded bg-slate-100">
                            {p.categoryLabel}
                          </span>
                          <span className="text-xs font-mono font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded">
                            {p.purity}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-600 transition-colors">
                          {p.name}
                        </h3>

                        <div className="space-y-1.5 text-xs font-mono bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <div className="flex justify-between">
                            <span className="text-slate-400">CAS Number:</span>
                            <span className="font-semibold text-slate-800">{p.casNo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Formula:</span>
                            <span className="font-semibold text-slate-800">{p.formula}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Grade:</span>
                            <span className="text-slate-700">{p.grade}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Appearance:</span>
                            <span className="text-slate-700 truncate max-w-[160px]">{p.appearance}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{p.application}</p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedProduct(p)}
                          className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 group/btn"
                        >
                          <FileText className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-brand-600" />
                          <span>Quick Spec</span>
                        </button>
                        <Link
                          href={`/contact/?product=${encodeURIComponent(p.name)}`}
                          className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm hover:shadow-brand-500/25"
                        >
                          <span>Inquire / COA</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Spring Animated Quick Spec Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Technical Data Sheet</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">{selectedProduct.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs font-mono bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between pb-1.5 border-b border-slate-200">
                  <span className="text-slate-500">CAS Number:</span>
                  <span className="font-bold text-slate-900">{selectedProduct.casNo}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Purity (HPLC/GC):</span>
                  <span className="font-bold text-brand-700">{selectedProduct.purity}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Molecular Formula:</span>
                  <span className="font-bold text-slate-900">{selectedProduct.formula}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-200">
                  <span className="text-slate-500">Physical State:</span>
                  <span className="text-slate-800">{selectedProduct.appearance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicable Standard:</span>
                  <span className="text-slate-800">{selectedProduct.grade}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Application Scope</h4>
                <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200">
                  {selectedProduct.application}
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <Link
                  href={`/contact/?product=${encodeURIComponent(selectedProduct.name)}`}
                  className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-brand-500/20"
                >
                  <span>Request Price & Samples</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-slate-500">Loading catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
