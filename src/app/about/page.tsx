import React from 'react';
import Link from 'next/link';
import { Shield, Target, Award, Users, CheckCircle2, ArrowRight, Building, Beaker } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function AboutPage() {
  const ORDER_STEPS = [
    {
      step: '01',
      title: 'Inquiry & Requirements',
      desc: 'Pls let us know your quantity, specification and end use.',
    },
    {
      step: '02',
      title: 'Quotation & Solution',
      desc: 'We quote according to your requirements.',
    },
    {
      step: '03',
      title: 'Order Confirmation',
      desc: 'Customer confirms price and places formal order.',
    },
    {
      step: '04',
      title: 'Payment Processing',
      desc: 'Receipt of payment.',
    },
    {
      step: '05',
      title: 'Delivery & Shipping',
      desc: 'We confirm delivery date and arrange delivery.',
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
            To become a preferred partner for supplying raw materials to the global pharmaceutical and cosmetic industries.
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
                <p className="text-xs text-slate-500 mt-1">We insist on excellence and provide customers with higher quality products.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <Shield className="w-6 h-6 text-brand-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Quality First</h4>
                <p className="text-xs text-slate-500 mt-1">We stick to the&lsquo;quantity first&rsquo;company culture, establish and maintain the quantity management system which contributes to the high reputation among all the customers home and abroad.</p>
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
                  <span><strong>Reliable Supply Chain Strength</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>Rigorous Quality Control System</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>Complete Export Compliance Qualifications</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>Custom R&amp;D &amp; Manufacturing Capability</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>Proven Foreign&#8209;Trade Logistics &amp; Delivery</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <span><strong>Professional Technical &amp; After&#8209;sales Support</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Ordering Process */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Ordering Process</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">How to place an order?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {ORDER_STEPS.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl border border-slate-200 relative flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-2xl font-extrabold text-brand-600 font-mono">{item.step}</span>
                  <h3 className="font-bold text-slate-900 text-sm mt-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  Step {item.step}
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
