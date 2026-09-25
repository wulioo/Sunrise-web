import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Award, Heart, Sparkles, Mail } from 'lucide-react';
import { JOB_OPENINGS } from '@/data/company';

export default function JobsPage() {
  const PERKS = [
    { title: 'Competitive Compensation', desc: 'Attractive base salary plus performance bonuses and project milestone incentives.' },
    { title: 'Global Exposure', desc: 'Opportunities to travel to major international exhibitions across Europe, America, and Asia.' },
    { title: 'Advanced Lab Environment', desc: 'Equipped with Agilent/Shimadzu instrumentation and DCS automated pilot facilities.' },
    { title: 'Comprehensive Benefits', desc: 'Full social insurance, annual health screening, paid annual leave, and subsidized lunch.' },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded border border-brand-500/20">
            Careers at Liyang Biotech
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Build the Future of Bio-Chemical Science
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Join our multidisciplinary team of synthetic chemists, formulation scientists, and international business professionals in Nanjing.
          </p>
        </div>
      </section>

      {/* Perks and Culture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Why Join Us</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Growth, Innovation & Wellbeing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PERKS.map((perk, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all">
              <Sparkles className="w-6 h-6 text-brand-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">{perk.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Current Openings</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Featured Career Opportunities</h2>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Applications reviewed on a rolling basis
          </div>
        </div>

        <div className="space-y-6">
          {JOB_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded border border-brand-200">
                    {job.department}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1.5">{job.title}</h3>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-500" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-500" /> {job.type}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs text-slate-600">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Key Responsibilities</h4>
                  <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Requirements & Qualifications</h4>
                  <ul className="space-y-1.5 list-disc pl-4 leading-relaxed">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <span className="text-xs text-slate-500">
                  Required Experience: <strong className="text-slate-800">{job.experience}</strong>
                </span>
                <a
                  href={`mailto:hr@liyang-biotech.com?subject=Job Application: ${encodeURIComponent(job.title)}`}
                  className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Apply via Email (hr@liyang-biotech.com)</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spontaneous Application Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 text-center space-y-4">
          <h3 className="text-xl font-bold">Don&apos;t see an exact match for your skills?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            We are always eager to meet talented synthetic chemists, regulatory specialists, and foreign trade professionals. Send your CV directly to our HR team.
          </p>
          <a
            href="mailto:hr@liyang-biotech.com"
            className="inline-block px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition-colors"
          >
            Submit Open Application →
          </a>
        </div>
      </section>
    </div>
  );
}
