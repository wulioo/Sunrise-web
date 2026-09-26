import React from 'react';
import Link from 'next/link';
import { Shield, Target, Award, Users, CheckCircle2, ArrowRight, Building, Beaker } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function AboutPage() {
  const MILESTONES = [
    {
      year: '2016',
      title: 'Company Foundation',
      desc: 'Established in Nanjing Jiangbei High-Tech Zone, launching our primary fine chemical raw material trading and synthesis lab.',
    },
    {
      year: '2018',
      title: 'ISO 9001 & First Cleanroom',
      desc: 'Achieved ISO 9001:2015 certification and commissioned a 1,000 m² cleanroom for pharma intermediate drying and packing.',
    },
    {
      year: '2021',
      title: 'Bio-Fermentation & Cosmetic Expansion',
      desc: 'Expanded into premium cosmetic active ingredients including high-purity Ectoine, Ergothioneine, and bio-fermented peptides.',
    },
    {
      year: '2024',
      title: 'Global Export Milestone',
      desc: 'Surpassed exports to over 40 countries across Europe, North America, Japan, Korea, and Southeast Asia.',
    },
    {
      year: '2026',
      title: 'New Smart Reactor Facility',
      desc: 'Operationalized computerized 8,000L reaction lines with dedicated Class 100k aseptic processing suites.',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded border border-brand-500/20">
            About Nanjing Sunrise Biotech
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Pioneering Precision in Bio-Chemical Synthesis
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Headquartered in Nanjing, China, Nanjing Sunrise Biotech Co., Ltd. is committed to bridging green bio-manufacturing with rigorous industrial chemical scalability.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              A Reliable Global Partner for Active Ingredients & Intermediate Supply
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Since our establishment in 2016, Nanjing Sunrise Biotech has evolved from a specialized regional supplier into an internationally recognized manufacturer and exporter. We serve top-tier pharmaceutical manufacturers, personal care formulation laboratories, and industrial fine chemical synthesizers worldwide.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our multidisciplinary team integrates organic synthesis experts, fermentation bio-technologists, and veteran QA auditors to guarantee that every kilogram of material complies strictly with international pharmacopeia standards and customer technical dossiers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Target className="w-6 h-6 text-brand-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Our Mission</h4>
                <p className="text-xs text-slate-500 mt-1">To empower global healthcare and personal care with uncompromised purity and sustainable chemistry.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Shield className="w-6 h-6 text-brand-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Quality First</h4>
                <p className="text-xs text-slate-500 mt-1">Zero-defect philosophy with comprehensive batch testing and full regulatory documentation.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 text-white border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-brand-400" />
                Our Quality & Compliance Commitments
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>ISO 9001:2015 certified</strong> quality control across raw material procurement, process execution, and shipping.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>Class 100,000 cleanroom facilities</strong> for aseptic post-synthesis processing, crystallization, and vacuum packing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>EU REACH & Global Regulatory Support</strong>, including full SDS/MSDS, DMF filing documentation, and third-party audit facilitation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>Kosher & Halal certified</strong> grades for cosmetic actives and dietary functional intermediates.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Milestones */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Growth Journey</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Our Milestones of Innovation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {MILESTONES.map((item, idx) => (
              <div key={item.year} className="bg-white p-6 rounded-xl border border-slate-200 relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-brand-600 font-mono">{item.year}</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  Step 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Supply Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Worldwide Supply & Export Logistics</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            With direct logistics lanes via Shanghai Port, Ningbo Port, and Nanjing Lukou Airport, we guarantee swift customs clearance and temperature-controlled shipping under Incoterms (EXW, FOB, CIF, DDP).
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-brand-600 text-white hover:bg-brand-500 shadow-md"
          >
            <span>Discuss Global Partnership</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
