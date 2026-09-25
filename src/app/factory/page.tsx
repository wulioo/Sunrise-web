import React from 'react';
import Link from 'next/link';
import {
  Factory,
  Beaker,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Activity,
  Wind,
} from 'lucide-react';
import { FACTORY_FEATURES, COMPANY_INFO } from '@/data/company';

export default function FactoryPage() {
  const EQUIPMENT_LIST = [
    { name: 'Agilent 1260 Infinity II HPLC System', qty: '4 sets', purpose: 'Assay purity & related substance trace profiling' },
    { name: 'Shimadzu GC-2010 Plus Gas Chromatograph', qty: '2 sets', purpose: 'Residual solvent determination (ICH Q3C compliant)' },
    { name: 'Thermo Nicolet iS5 FTIR Spectrometer', qty: '1 set', purpose: 'Compound functional group molecular confirmation' },
    { name: 'PerkinElmer Polarimeter & Melting Point App.', qty: '2 sets', purpose: 'Optical rotation for chiral intermediate evaluation' },
    { name: 'Metrohm Karl Fischer Volumetric Titrator', qty: '2 sets', purpose: 'Ultra-accurate moisture & water content testing' },
    { name: 'Microbiological Testing Incubators', qty: '3 sets', purpose: 'Total viable count & bioburden monitoring for cosmetic grades' },
  ];

  const QA_WORKFLOW = [
    { step: '01', title: 'IQC (Incoming Raw Materials)', desc: 'Stringent testing of base reagents, solvents, and starting materials against internal pharmacopeia standards.' },
    { step: '02', title: 'IPQC (In-Process Reaction Control)', desc: 'Real-time TLC, HPLC, and temperature/pressure recording during intermediate synthesis and crystallization.' },
    { step: '03', title: 'Class 100k Aseptic Processing', desc: 'Controlled atmosphere drying, centrifugal separation, and micronization inside cleanroom suites.' },
    { step: '04', title: 'FQC & Release (Certificate of Analysis)', desc: 'Complete testing of finished product batches with full spectral data before authorized QA manager sign-off.' },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded border border-brand-500/20">
            Intelligent Manufacturing & QC Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Nanjing Production Facility & R&D Hub
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed">
            Our modernized industrial synthesis park features automated DCS monitoring, advanced cleanrooms, and world-class testing laboratories to guarantee uncompromising batch consistency.
          </p>
        </div>
      </section>

      {/* Production Capacities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
            Scale & Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Versatile Reaction Capabilities
          </h2>
          <p className="text-slate-600 text-base">
            Equipped to handle diverse reaction categories including cryogenic synthesis, high-pressure hydrogenations, halogenations, and bio-enzymatic transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACTORY_FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-brand-600 mb-2">Module 0{idx + 1}</div>
                <div className="text-2xl font-extrabold text-slate-900 font-mono mb-2">{feature.metric}</div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance Workflow */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Standard Operating Protocol</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">End-to-End Quality Validation</h2>
            <p className="text-xs text-slate-500 mt-2">Every step is tracked in our computerized batch manufacturing records (BMR).</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {QA_WORKFLOW.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl border border-slate-200 relative">
                <div className="text-3xl font-extrabold text-brand-600/30 font-mono mb-2">{step.step}</div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Instrumentation Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Testing Infrastructure</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Analytical Center Equipment Matrix</h2>
            <p className="text-slate-600 text-sm mt-1">Calibrated routinely under ISO/IEC 17025 compliant standards.</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-900 text-white text-xs uppercase font-mono tracking-wider">
              <tr>
                <th className="px-6 py-4">Instrument & Model</th>
                <th className="px-6 py-4">Deployed Units</th>
                <th className="px-6 py-4">Analytical Function & Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs">
              {EQUIPMENT_LIST.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 font-mono text-brand-700 font-bold">{item.qty}</td>
                  <td className="px-6 py-4 text-slate-600">{item.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* EHS & Green Chemistry Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/30">
              Responsible Manufacturing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">Environmental Safety & Zero-Pollution Chemistry</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We operate an on-site dual-chamber Regenerative Thermal Oxidizer (RTO) with VOC destruction efficiency over 99.5%, combined with advanced bio-contact oxidation for effluent water neutralization.
            </p>
            <div className="flex gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> ISO 14001 Certified</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> ISO 45001 Occupational Safety</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Link
              href="/contact/"
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-brand-500 hover:bg-brand-400 text-slate-950 transition-colors shadow-lg shadow-brand-500/20"
            >
              Request Plant Audit / Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
