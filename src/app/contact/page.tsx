'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

function ContactContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: 'Sample (100g - 1kg)',
    inquiryType: 'Quotation & COA',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (productParam) {
      setFormData((prev) => ({
        ...prev,
        product: productParam,
        message: `Hello, please provide the latest price quotation, COA, and lead time for ${productParam}.`,
      }));
    }
  }, [productParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instantaneous client-side success response
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded border border-brand-500/20">
            Global Trade & Technical Inquiries
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Connect with Our Engineering & Export Team
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Submit your RFQ, request analytical COA batches, or schedule a technical discussion for custom chemical synthesis. We guarantee response within 12 business hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Headquarters & Export Office</h3>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Factory & Office Address</strong>
                    <span className="text-xs text-slate-500">{COMPANY_INFO.headquarters}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Direct Export Emails</strong>
                    <a href={`mailto:${COMPANY_INFO.exportEmail}`} className="text-xs text-brand-600 hover:underline block font-mono">
                      {COMPANY_INFO.exportEmail}
                    </a>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-slate-500 hover:underline block font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Telephone & Hotline</strong>
                    <span className="text-xs text-slate-600 font-mono block">{COMPANY_INFO.phone} (Main Office)</span>
                    <span className="text-xs text-slate-500 font-mono block">{COMPANY_INFO.hotline} (WhatsApp / WeChat)</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Working Hours</strong>
                    <span className="text-xs text-slate-500">Mon - Fri: 8:30 AM - 6:00 PM (GMT+8)</span>
                    <span className="text-xs text-brand-600 block">24/7 Rapid email monitoring for global inquiries</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Export FAQ */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Export Policies & FAQ</h4>
              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <strong className="text-slate-800 block">What is the standard Sample Lead Time?</strong>
                  <p className="mt-0.5 text-slate-500">In-stock samples are dispatched within 24 to 48 hours via FedEx / DHL / air freight.</p>
                </div>
                <div>
                  <strong className="text-slate-800 block">Which Payment Terms are accepted?</strong>
                  <p className="mt-0.5 text-slate-500">T/T Wire Transfer, Irrevocable L/C at sight, and Western Union for sample testing.</p>
                </div>
                <div>
                  <strong className="text-slate-800 block">What documentation accompanies each shipment?</strong>
                  <p className="mt-0.5 text-slate-500">Certificate of Analysis (COA), Material Safety Data Sheet (MSDS/SDS), Packing List, and Commercial Invoice.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-lg relative">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Nanjing Liyang Biotech. Our overseas technical sales manager will review your specifications and contact you at{' '}
                    <strong className="text-slate-900">{formData.email}</strong> within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Request for Quotation (RFQ)</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below. For urgent bulk orders, you may also email directly to export@liyang-biotech.com.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Thomas Mueller"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Institution *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. BioPharm Labs Ltd."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Destination Country / Port *</label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Germany (Hamburg Port)"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Target Product / CAS No. *</label>
                      <input
                        type="text"
                        required
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        placeholder="e.g. Ectoine (96702-03-3)"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Quantity Required</label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none bg-white"
                      >
                        <option>Sample Testing (100g - 1kg)</option>
                        <option>Pilot Trial (5kg - 25kg)</option>
                        <option>Commercial Batch (100kg - 500kg)</option>
                        <option>Bulk Container / Metric Ton (1MT+)</option>
                        <option>Custom Synthesis / Toll Manufacturing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Detailed Requirements & Specifications</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify target purity, preferred pharmacopeia standard (USP/EP/CP), packaging requirements, or questions regarding our COA..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request for Quotation</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-slate-500">Loading form...</div>}>
      <ContactContent />
    </Suspense>
  );
}
