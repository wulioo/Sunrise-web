'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  ArrowRight,
  Download,
  CheckCircle,
  Beaker,
  FileText,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  Layers,
  ChevronDown
} from 'lucide-react';
import { PRODUCTS, Product } from '@/data/company';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedSidebarGroup, setSelectedSidebarGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  // Sidebar Category Definition (Grouping products by chemical classification/family)
  const SIDEBAR_GROUPS = useMemo(() => {
    return [
      { id: 'all', label: 'All Categories' },
      { id: 'cosmetic', label: 'Cosmetic Actives & Extremolytes' },
      { id: 'pharmaceutical', label: 'Pharmaceutical Intermediates & APIs' },
      { id: 'chemical', label: 'Fine Chemical Raw Materials' },
    ];
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Filter 1: Top bar category
      const matchesTopCategory =
        activeCategory === 'all' || product.category === activeCategory;

      // Filter 2: Left sidebar directory category
      const matchesSidebarCategory =
        selectedSidebarGroup === 'all' || product.category === selectedSidebarGroup;

      // Search Filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.casNo.includes(query) ||
        product.formula.toLowerCase().includes(query) ||
        product.application.toLowerCase().includes(query);

      return matchesTopCategory && matchesSidebarCategory && matchesSearch;
    });
  }, [activeCategory, selectedSidebarGroup, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / pageSize) || 1;
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage]);

  const handleTopCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const handleSidebarCategoryChange = (groupId: string) => {
    setSelectedSidebarGroup(groupId);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8 pb-20 bg-slate-50/50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span className="text-brand-400">Products Catalog</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Product Catalog & Technical Index
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Search and order high-purity pharmaceutical intermediates, active cosmetic ingredients, and fine chemicals. Batch COA and technical documentation available for all catalog items.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Filter & Search Bar (Preserved as requested in Green Box) */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by Product, CAS No. or Formula..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
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

          {/* Top Category Tabs (Directory 1) */}
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
                  onClick={() => handleTopCategoryChange(cat.id)}
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

        {/* 2-Column Layout (Matching Image 2): Left Directory Sidebar + Right Products Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Category Directory (Directory 2) */}
          <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
            {/* Header with Blue Styling like Image 2 */}
            <div className="bg-brand-700 p-4 text-white text-center">
              <h2 className="text-base font-bold uppercase tracking-wider">PRODUCTS</h2>
              <p className="text-[11px] text-brand-200 mt-0.5">Directory by Category</p>
            </div>

            {/* Directory Navigation Items */}
            <div className="p-4 space-y-4">
              {SIDEBAR_GROUPS.map((group) => {
                const isSelected = selectedSidebarGroup === group.id;
                const count =
                  group.id === 'all'
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === group.id).length;

                return (
                  <div key={group.id} className="space-y-1">
                    <button
                      onClick={() => handleSidebarCategoryChange(group.id)}
                      className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-brand-50 text-brand-700 border border-brand-200'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-brand-600' : 'bg-slate-400'}`} />
                        {group.label}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">({count})</span>
                    </button>

                    {/* Quick Product Links under this category */}
                    {group.id !== 'all' && (
                      <ul className="pl-5 pr-2 py-1 space-y-1 text-[11px] text-slate-500 border-l border-slate-100 ml-2">
                        {PRODUCTS.filter((p) => p.category === group.id).map((p) => (
                          <li key={p.id}>
                            <button
                              onClick={() => {
                                handleSidebarCategoryChange(group.id);
                                setSelectedProduct(p);
                              }}
                              className="text-left hover:text-brand-600 hover:underline block truncate w-full py-0.5"
                            >
                              • {p.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Right Column: Table Layout with Pagination */}
          <main className="lg:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-brand-700 text-white font-semibold">
                    <th className="py-3.5 px-4 w-16 text-center border-r border-brand-600/60">No.</th>
                    <th className="py-3.5 px-5 border-r border-brand-600/60">Product Name</th>
                    <th className="py-3.5 px-4 font-mono border-r border-brand-600/60">CAS No.</th>
                    <th className="py-3.5 px-4 hidden md:table-cell border-r border-brand-600/60">Specification</th>
                    <th className="py-3.5 px-4 text-center w-28">Order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {currentProducts.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-16 text-center text-slate-400">
                        <Beaker className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                        <p className="font-medium text-slate-600">No matching products found</p>
                        <p className="text-xs text-slate-400 mt-1">Try selecting another category or clearing search</p>
                      </td>
                    </tr>
                  ) : (
                    currentProducts.map((p, index) => {
                      const rowNumber = (currentPage - 1) * pageSize + index + 1;
                      return (
                        <tr
                          key={p.id}
                          className="hover:bg-brand-50/40 transition-colors group cursor-pointer"
                          onClick={() => setSelectedProduct(p)}
                        >
                          <td className="py-3.5 px-4 text-center font-mono text-slate-400 border-r border-slate-100 group-hover:text-slate-600">
                            {rowNumber}
                          </td>
                          <td className="py-3.5 px-5 font-medium text-slate-900 border-r border-slate-100">
                            <div className="flex items-center gap-2">
                              <span className="group-hover:text-brand-700 transition-colors font-semibold">
                                {p.name}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-normal">
                                {p.categoryLabel}
                              </span>
                            </div>
                            <span className="text-xs text-slate-400 font-mono block mt-0.5">
                              {p.formula}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-mono font-medium text-slate-700 border-r border-slate-100 whitespace-nowrap">
                            {p.casNo}
                          </td>
                          <td className="py-3.5 px-4 hidden md:table-cell border-r border-slate-100">
                            <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-semibold bg-brand-50 text-brand-700 border border-brand-200/60">
                              {p.purity}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                            <Link
                              href={`/contact/?product=${encodeURIComponent(p.name)}`}
                              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full border border-brand-500 text-brand-600 hover:bg-brand-600 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                            >
                              Order
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls Footer */}
            <div className="p-4 border-t border-slate-200 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-slate-500 font-mono">
                Showing{' '}
                <strong className="text-slate-800">
                  {filteredProducts.length === 0 ? 0 : (currentPage - 1) * pageSize + 1}
                </strong>{' '}
                to{' '}
                <strong className="text-slate-800">
                  {Math.min(currentPage * pageSize, filteredProducts.length)}
                </strong>{' '}
                of <strong className="text-slate-800">{filteredProducts.length}</strong> items
              </span>

              {totalPages > 1 && (
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-7 h-7 rounded-lg text-xs font-mono font-semibold transition-all ${
                        currentPage === page
                          ? 'bg-brand-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Quick Spec Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                    Technical Specifications
                  </span>
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
                  <span className="text-slate-500">Physical Appearance:</span>
                  <span className="text-slate-800">{selectedProduct.appearance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicable Standard:</span>
                  <span className="text-slate-800">{selectedProduct.grade}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Application Scope & Properties
                </h4>
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
                  <span>Inquire / Request Quotation</span>
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
