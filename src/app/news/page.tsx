import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, Share2 } from 'lucide-react';
import { NEWS_LIST } from '@/data/company';

export default function NewsPage() {
  const ADDITIONAL_NEWS = [
    ...NEWS_LIST,
    {
      id: '4',
      title: 'EU REACH Dossier Completed for High-Purity Piperazine Derivatives',
      date: 'May 12, 2026',
      category: 'Regulatory Compliance',
      summary: 'Liyang Biotech has submitted and verified complete safety data sheets and substance evaluations for European chemical distribution.',
      readTime: '3 min read',
    },
    {
      id: '5',
      title: 'Comparative Stability Analysis: Ectoine vs Classic Osmolytes in Skin Formulations',
      date: 'April 03, 2026',
      category: 'R&D Whitepaper',
      summary: 'Our formulation scientists published experimental findings showing superior anti-inflammatory cellular shielding when pairing Ectoine with low-molecular HA.',
      readTime: '6 min read',
    },
    {
      id: '6',
      title: 'Liyang Biotech Welcomed German Bio-Pharma Audit Delegation in Nanjing',
      date: 'March 19, 2026',
      category: 'Customer Audits',
      summary: 'The comprehensive 3-day on-site cGMP and analytical data integrity inspection concluded with zero critical observations.',
      readTime: '4 min read',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded border border-brand-500/20">
            Insights & Corporate Bulletins
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            News, Events & Industry Developments
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Stay updated with our technical breakthroughs, international trade fair participations, and global chemical market trends.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADDITIONAL_NEWS.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-brand-500/50 hover:shadow-xl transition-all p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 font-semibold border border-brand-100">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-slate-900 leading-snug hover:text-brand-600 transition-colors cursor-pointer">
                  {article.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed">{article.summary}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
                <Link
                  href="/contact/"
                  className="font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                >
                  <span>Request Whitepaper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Exhibition & Trade Shows Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Upcoming Global Expos 2026 - 2027</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Meet Liyang Biotech at Global Industry Events</h3>
          <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
            We regularly exhibit at CPHI Worldwide (Europe), in-cosmetics Global (Paris / Amsterdam), and Chemspec Europe. If you plan to attend, book an advance 1-on-1 technical meeting with our overseas engineering directors.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
            >
              <span>Schedule Booth Meeting</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
