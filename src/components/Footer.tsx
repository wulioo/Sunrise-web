import React from 'react';
import Link from 'next/link';
import { Beaker, ShieldCheck, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Strict Quality Control</h4>
              <p className="text-xs text-slate-400">Full COA & HPLC / GC Data</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Global Export Logistics</h4>
              <p className="text-xs text-slate-400">DDP / FOB / CIF Worldwide</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-accent-emerald/10 flex items-center justify-center text-accent-emerald">
              <Beaker className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Custom Synthesis R&D</h4>
              <p className="text-xs text-slate-400">Gram to Multi-Ton Scale-Up</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold">Regulatory Compliance</h4>
              <p className="text-xs text-slate-400">REACH, ISO9001, Halal & Kosher</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-cyan p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Beaker className="w-5 h-5 text-brand-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">LIYANG BIOTECH</span>
                <p className="text-xs text-slate-400">南京立阳生物科技有限公司</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              A trusted Chinese manufacturer and exporter dedicated to high-purity chemical raw materials, active pharmaceutical intermediates, and functional cosmetic bio-ingredients.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {COMPANY_INFO.certifications.map((c) => (
                <span key={c.name} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-brand-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products/" className="hover:text-brand-300 transition-colors">Product Catalog</Link>
              </li>
              <li>
                <Link href="/factory/" className="hover:text-brand-300 transition-colors">Factory & Quality</Link>
              </li>
              <li>
                <Link href="/news/" className="hover:text-brand-300 transition-colors">News & Insights</Link>
              </li>
              <li>
                <Link href="/jobs/" className="hover:text-brand-300 transition-colors">Careers & Jobs</Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-brand-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Core Lines</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products/?category=cosmetic" className="hover:text-brand-300 transition-colors">Cosmetic Active Ingredients</Link>
              </li>
              <li>
                <Link href="/products/?category=pharmaceutical" className="hover:text-brand-300 transition-colors">Pharmaceutical Intermediates</Link>
              </li>
              <li>
                <Link href="/products/?category=chemical" className="hover:text-brand-300 transition-colors">Chemical Raw Materials</Link>
              </li>
              <li>
                <Link href="/products/" className="hover:text-brand-300 transition-colors">Chiral Building Blocks</Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-brand-300 transition-colors">Custom Synthesis (CDMO)</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Jiangbei New Area High-Tech Industrial Park, Nanjing, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:export@liyang-biotech.com" className="hover:text-white transition-colors">
                  export@liyang-biotech.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>+86 25 8699 3820</span>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-block px-4 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-brand-900 border border-slate-700 text-brand-300 transition-colors"
                >
                  Send Inquiry Form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nanjing Liyang Biotech Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Quality Manual</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
