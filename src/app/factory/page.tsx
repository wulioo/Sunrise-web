'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Camera,
  ImageIcon,
  Maximize2,
  Building2,
  FlaskConical,
  Layers,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  X,
} from 'lucide-react';

interface FacilityPhoto {
  id: string;
  title: string;
  titleEn: string;
  category: 'all' | 'rd' | 'workshop' | 'qc' | 'cleanroom';
  categoryLabel: string;
  tag: string;
  image?: string; // Real image path when available (e.g. /images/factory/rd-1.jpg)
}

const CATEGORIES = [
  { key: 'all', label: 'All Photos / 全部实拍' },
  { key: 'rd', label: 'R&D Center / 研发中心' },
  { key: 'workshop', label: 'Synthesis Workshop / 生产车间' },
  { key: 'qc', label: 'QC & Analytical / 质检中心' },
  { key: 'cleanroom', label: 'Cleanroom / 洁净车间' },
];

const FACILITY_PHOTOS: FacilityPhoto[] = [
  {
    id: 'rd-1',
    title: '研发中心 · 色谱分析仪器室',
    titleEn: 'R&D Analytical Chromatography Room',
    category: 'rd',
    categoryLabel: '研发中心',
    tag: 'Agilent 1260 HPLC / Workstation',
    image: '',
  },
  {
    id: 'rd-2',
    title: '研发中心 · 合成实验室全景',
    titleEn: 'Organic Synthesis Formulation Lab',
    category: 'rd',
    categoryLabel: '研发中心',
    tag: 'Fume Hoods & Reaction Stations',
    image: '',
  },
  {
    id: 'rd-3',
    title: '研发中心 · 液相色谱检测台',
    titleEn: 'High Performance Liquid Chromatography',
    category: 'rd',
    categoryLabel: '研发中心',
    tag: 'Method Validation & Assay Profile',
    image: '',
  },
  {
    id: 'workshop-1',
    title: '生产车间 · 自动化反应釜阵列',
    titleEn: 'Automated Synthesis Reactor Array',
    category: 'workshop',
    categoryLabel: '生产车间',
    tag: '500L – 8,000L Glass-Lined & SS316',
    image: '',
  },
  {
    id: 'workshop-2',
    title: '生产车间 · 高压加氢与温控系统',
    titleEn: 'High-Pressure Reaction & Thermal Loop',
    category: 'workshop',
    categoryLabel: '生产车间',
    tag: 'DCS Automated Control / -80°C~250°C',
    image: '',
  },
  {
    id: 'workshop-3',
    title: '生产车间 · 离心分离与结晶工段',
    titleEn: 'Centrifugation & Crystallization Section',
    category: 'workshop',
    categoryLabel: '生产车间',
    tag: 'High-Efficiency Solids Separation',
    image: '',
  },
  {
    id: 'qc-1',
    title: '质检中心 · 精密仪器光谱分析室',
    titleEn: 'Precision Spectroscopy & QC Center',
    category: 'qc',
    categoryLabel: '质检中心',
    tag: 'FTIR, GC-MS & Polarimeter',
    image: '',
  },
  {
    id: 'qc-2',
    title: '质检中心 · 留样室与理化实验室',
    titleEn: 'Physical & Chemical Sample Retention Room',
    category: 'qc',
    categoryLabel: '质检中心',
    tag: 'Batch Traceability & Retention Files',
    image: '',
  },
  {
    id: 'cleanroom-1',
    title: '洁净车间 · 十万级无菌烘干包装区',
    titleEn: 'Class 100k Sterile Drying & Packing Suite',
    category: 'cleanroom',
    categoryLabel: '洁净车间',
    tag: 'Cosmetic Actives & Pharma Grade Packaging',
    image: '',
  },
];

export default function FactoryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<FacilityPhoto | null>(null);

  const filteredPhotos =
    activeCategory === 'all'
      ? FACILITY_PHOTOS
      : FACILITY_PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <div className="space-y-16 pb-24 bg-slate-50/60 min-h-screen">
      {/* Hero Header Section */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-950/80 border border-brand-500/30 text-xs font-medium text-brand-300">
            <Building2 className="w-3.5 h-3.5 text-brand-400" />
            <span>Nanjing Production Base & R&D Center</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Factory Tour & Research Facility Showcase
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our certified synthesis workshops, analytical chromatography laboratories, and aseptic cleanrooms in Nanjing, China.
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-400" /> 12,000 m² Modern Workshops
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Class 100k Cleanroom
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" /> Agilent / Waters QC Systems
            </span>
          </div>
        </div>
      </section>

      {/* Main Gallery Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 ring-2 ring-brand-500/30'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3x3 Photo Grid (Referencing Image 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-brand-500/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Image Container with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden flex items-center justify-center">
                {photo.image ? (
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Aesthetic Modern Placeholder State */
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200/80 border-b border-slate-200/60 relative group-hover:bg-slate-100/90 transition-colors">
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                    {/* Camera Icon Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-brand-500 group-hover:scale-110 group-hover:border-brand-300 transition-all duration-300 mb-3">
                      <Camera className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-semibold text-slate-700 tracking-wide">
                      {photo.title}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 mt-1">
                      实拍图片待补充 · 建议比例 4:3
                    </span>

                    {/* Corner Tag */}
                    <span className="absolute top-3 right-3 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-md bg-white/90 border border-slate-200 text-slate-500 shadow-xs">
                      {photo.categoryLabel}
                    </span>
                  </div>
                )}

                {/* Hover Quick Overlay with Expand Icon */}
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4 text-brand-600" />
                  </div>
                </div>
              </div>

              {/* Card Caption / Label Bottom Section (Matching Image 1) */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow border-t border-slate-100 bg-white">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {photo.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono tracking-tight">
                    {photo.titleEn}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-mono text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200/60 font-medium">
                    {photo.tag}
                  </span>
                  <span className="text-brand-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                    查看详情 →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Detail Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-500 font-mono">{selectedPhoto.titleEn}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="aspect-[4/3] bg-slate-100 flex flex-col items-center justify-center p-8 text-center border-b border-slate-100">
              {selectedPhoto.image ? (
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center mx-auto text-brand-600">
                    <Camera className="w-8 h-8" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">{selectedPhoto.title}</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    此区域用于展示实际工厂/实验室实拍照片。您只需将对应的高清图片放入项目中即可直接渲染。
                  </p>
                  <span className="inline-block px-3 py-1 rounded bg-slate-200 text-slate-700 text-xs font-mono font-medium">
                    图片路径: /public/images/factory/{selectedPhoto.id}.jpg
                  </span>
                </div>
              )}
            </div>

            {/* Modal Footer Info */}
            <div className="p-5 bg-slate-50 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-600">
                配置规格: <strong className="text-slate-900">{selectedPhoto.tag}</strong>
              </span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
