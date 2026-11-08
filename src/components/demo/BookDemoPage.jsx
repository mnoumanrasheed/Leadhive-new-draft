import React, { useState } from 'react';
import { Calendar, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Clock, Users, Building, MessageSquare } from 'lucide-react';
import { analytics } from '../../services/analytics';
import { ChannelIcon } from '../common/ChannelIcon';

export function BookDemoPage({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Real Estate',
    volume: '500 - 2,500 conversations/mo',
    primaryChannel: 'WhatsApp + Socials (All Channels)',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    analytics.track('book_demo_clicked', {
      source: 'dedicated_book_demo_page',
      industry: formData.industry,
      company: formData.company,
      volume: formData.volume
    });
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Value Proposition & What to Expect (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-brand-600" />
                <span>Personalized Live Demonstration</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                See LeadHive AI in Action with Your Real Channels.
              </h1>

              <p className="text-base text-slate-600 leading-relaxed">
                Discover how autonomous sales intelligence captures, qualifies, and prioritizes customer inquiries across WhatsApp, Facebook, Instagram, YouTube, TikTok, and Web Chat, so your team focuses only on closing.
              </p>

              {/* Pillars of the demo */}
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-subtle flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Configured to Your Vertical</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      We model qualification criteria, budgets, and scoring rules specific to your industry (Real Estate, Healthcare, Education, Automotive, E-commerce, or Services).
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-subtle flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">20-Minute Focus Session</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Concise, high-impact walkthrough. No generic slide decks, just a live simulation of your prospective customer conversations converting into hot leads.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-subtle flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Zero Obligation, Confidential</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Deterministic business guardrails, enterprise SOC-2 architecture, and complete data privacy guaranteed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Supported Channels Preview ribbon */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Supported Inbound Channels</p>
                <div className="flex items-center gap-2">
                  <ChannelIcon channel="facebook" className="w-6 h-6 rounded" />
                  <ChannelIcon channel="instagram" className="w-6 h-6 rounded" />
                  <ChannelIcon channel="youtube" className="w-6 h-6 rounded" />
                  <ChannelIcon channel="whatsapp" className="w-6 h-6 rounded" />
                  <ChannelIcon channel="tiktok" className="w-6 h-6 rounded" />
                  <ChannelIcon channel="website" className="w-6 h-6 rounded" />
                  <span className="text-xs text-slate-500 font-medium ml-1">Unified Omnichannel Feed</span>
                </div>
              </div>

            </div>

            {/* Right Column: Dedicated Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-card">
                
                <div className="border-b border-slate-100 pb-5 mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Schedule Your Personalized Demo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill in your organization details to reserve a private 1-on-1 walkthrough with our solutions team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left text-xs">
                  
                  {/* Full Name & Corporate Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5 text-xs">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Mehmood"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5 text-xs">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5 text-xs">Phone / WhatsApp Number *</label>
                      <input
                        type="text"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5 text-xs">Company / Business Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Holdings"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Industry & Monthly Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5 text-xs">Industry Vertical *</label>
                      <select
                        value={formData.industry}
                        onChange={e => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-slate-50/50"
                      >
                        <option value="Real Estate">Real Estate & Developers</option>
                        <option value="Healthcare">Healthcare & Specialized Clinics</option>
                        <option value="Education">Higher Education & EdTech</option>
                        <option value="Automotive">Automotive Dealerships</option>
                        <option value="E-commerce">B2B & E-commerce</option>
                        <option value="Professional Services">Professional Services & Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1.5 text-xs">Monthly Inbound Volume</label>
                      <select
                        value={formData.volume}
                        onChange={e => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-slate-50/50"
                      >
                        <option value="< 500 conversations/mo">&lt; 500 conversations / month</option>
                        <option value="500 - 2,500 conversations/mo">500 - 2,500 conversations / month</option>
                        <option value="2,500 - 10,000 conversations/mo">2,500 - 10,000 conversations / month</option>
                        <option value="10,000+ conversations/mo">10,000+ conversations / month</option>
                      </select>
                    </div>
                  </div>

                  {/* Primary Channels */}
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 text-xs">Primary Focus Channels</label>
                    <select
                      value={formData.primaryChannel}
                      onChange={e => setFormData({ ...formData, primaryChannel: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-slate-50/50"
                    >
                      <option value="WhatsApp + Socials (All Channels)">All 6 Channels (WhatsApp, Socials, Website)</option>
                      <option value="WhatsApp Business Primary">WhatsApp Business Primary</option>
                      <option value="Facebook & Instagram Inquiries">Facebook & Instagram Inquiries</option>
                      <option value="Website Conversational Concierge">Website Conversational Concierge</option>
                      <option value="Social Comments (YouTube & TikTok)">Social Comments (YouTube & TikTok)</option>
                    </select>
                  </div>

                  {/* Notes / Special Requirements */}
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5 text-xs">What specific challenge would you like to solve? (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We have high inbound message volume on WhatsApp and struggle to qualify buyers before our reps call."
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-slate-50/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-brand text-sm transition-all flex items-center justify-center gap-2 group"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Demo Request</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Footer reassurance */}
                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                    <span>Your contact information is strictly protected. No unsolicited outreach.</span>
                  </div>

                </form>

              </div>
            </div>

          </div>
        ) : (
          /* Confirmation Screen */
          <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-card text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Demo Request Received
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Thank You, {formData.name}!
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your personalized demonstration request for <span className="font-bold text-slate-900">{formData.company}</span> has been confirmed.
              </p>
            </div>

            {/* Details Summary Card */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-2.5 max-w-lg mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Industry:</span>
                <span className="font-bold text-slate-900">{formData.industry}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Corporate Email:</span>
                <span className="font-semibold text-slate-800">{formData.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Channels:</span>
                <span className="font-semibold text-slate-800">{formData.primaryChannel}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Response Window:</span>
                <span className="font-bold text-emerald-700">Within 2 business hours</span>
              </div>
            </div>

            {/* Next Action Options */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('experience')}
                className="w-full sm:w-auto px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold shadow-brand flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Test in Interactive AI Experience Centre</span>
              </button>

              <button
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto px-5 py-3 border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

