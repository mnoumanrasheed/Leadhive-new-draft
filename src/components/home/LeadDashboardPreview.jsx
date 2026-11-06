import React, { useState } from 'react';
import { Flame, Clock, AlertCircle, CheckCircle2, TrendingUp, Users, Target, ArrowRight, Sparkles } from 'lucide-react';
import { ChannelIcon } from '../common/ChannelIcon';

export function LeadDashboardPreview({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('hot');

  const sampleCards = {
    hot: {
      prospect: 'Tariq Mehmood',
      channel: 'whatsapp',
      time: '12m ago',
      requirement: '5-marla house in DHA Islamabad',
      intent: 'Strong Buying Interest (Property Purchase)',
      leadScore: 92,
      qualificationStatus: 'High (95% Completeness)',
      temperature: 'Hot',
      temperatureColor: 'rose',
      budget: 'PKR 30 Million',
      timeline: 'Within 30 days',
      recommendedAction: 'Arrange VIP property consultation and share matching DHA Sector F listings.',
      tags: ['Pre-approved', 'Immediate Possession', 'High Urgency']
    },
    warm: {
      prospect: 'Sarah Jenkins',
      channel: 'facebook',
      time: '34m ago',
      requirement: '2x 1-Bed Downtown Luxury Rental Apartments',
      intent: 'Commercial Portfolio Expansion',
      leadScore: 89,
      qualificationStatus: 'Verified (88% Completeness)',
      temperature: 'Hot',
      temperatureColor: 'rose',
      budget: '$280,000 USD',
      timeline: 'Q1 Investment Phase',
      recommendedAction: 'Dispatch overseas investor prospectus & schedule Zoom with investment partner.',
      tags: ['Overseas Buyer', 'Guaranteed Yield', 'Multi-unit']
    },
    followup: {
      prospect: 'Zainab Qureshi',
      channel: 'tiktok',
      time: '1h ago',
      requirement: 'Smart Home Villa 3-Bed (Installment Plan)',
      intent: 'Exploratory Financing & Payment Terms',
      leadScore: 64,
      qualificationStatus: 'Partial (60% Completeness)',
      temperature: 'Follow-up Required',
      temperatureColor: 'blue',
      budget: 'PKR 22 Million',
      timeline: '6–12 Months Planning',
      recommendedAction: 'Trigger automated 36-month installment calculator and schedule nurturing cadence.',
      tags: ['Nurture Cadence', 'Payment Calculator Sent']
    }
  };

  const current = sampleCards[activeTab];

  return (
    <section id="lead-dashboard-preview" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <span>Sales Intelligence Dashboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Know Which Leads Matter
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate guesswork. LeadHive AI scores and categorizes incoming opportunities so your sales team immediately attacks high-intent prospects first.
          </p>
          <div className="inline-block bg-amber-50 text-amber-800 text-xs font-mono px-3 py-1 rounded-full border border-amber-200">
            ⚠️ Illustrative demonstration data • Simulated metrics
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="mt-14 bg-slate-50/80 border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-card">
          
          {/* KPI Metrics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle">
              <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                <span>Total Conversations</span>
                <Users className="w-4 h-4 text-slate-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">1,428</p>
              <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" /> +18.4% this week
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle">
              <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                <span>Qualified Opportunities</span>
                <Target className="w-4 h-4 text-brand-500" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-700 mt-2">384</p>
              <p className="text-[11px] text-slate-500 mt-1">26.8% qualification rate</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle ring-1 ring-rose-200">
              <div className="flex items-center justify-between text-rose-700 text-xs font-semibold">
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-rose-600" />
                  High-Intent Leads
                </span>
                <span className="text-[10px] bg-rose-100 text-rose-800 px-1.5 py-0.2 rounded font-mono">HOT</span>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-rose-600 mt-2">142</p>
              <p className="text-[11px] text-rose-700 font-medium mt-1">Ready for closing action</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle">
              <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
                <span>Follow-ups Required</span>
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">68</p>
              <p className="text-[11px] text-slate-500 mt-1">Automated nurturing active</p>
            </div>
          </div>

          {/* Interactive Opportunity Card Preview */}
          <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-subtle">
            
            {/* Header + Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Sample Opportunity Dossier</p>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Automated Intelligence Breakdown</h3>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start sm:self-auto text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('hot')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'hot' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Hot Lead (92/100)
                </button>
                <button
                  onClick={() => setActiveTab('warm')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'warm' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Investor (89/100)
                </button>
                <button
                  onClick={() => setActiveTab('followup')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === 'followup' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Follow-up (64/100)
                </button>
              </div>
            </div>

            {/* Dossier Grid Details */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Profile & Scores (4 cols) */}
              <div className="lg:col-span-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-3">
                  <ChannelIcon channel={current.channel} className="w-9 h-9 rounded-xl" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{current.prospect}</h4>
                    <p className="text-xs text-slate-500 capitalize">{current.channel} • {current.time}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-medium text-slate-600">Lead Score</span>
                    <span className="font-extrabold text-slate-900">{current.leadScore} / 100</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        current.leadScore > 85 ? 'bg-rose-500' : current.leadScore > 70 ? 'bg-amber-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${current.leadScore}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500">Classification</span>
                  <span className={`px-2.5 py-0.5 rounded-full font-bold text-[11px] ${
                    current.temperature === 'Hot' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {current.temperature}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Qualification Status</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                    {current.qualificationStatus}
                  </span>
                </div>
              </div>

              {/* Right Extracted Requirement & Action (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl border border-slate-100 bg-white shadow-xs">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Budget</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">{current.budget}</p>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-100 bg-white shadow-xs">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Timeline</p>
                    <p className="text-sm font-bold text-slate-900 mt-1">{current.timeline}</p>
                  </div>
                  <div className="p-3 rounded-xl border border-slate-100 bg-white shadow-xs">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Intent Signal</p>
                    <p className="text-sm font-bold text-slate-900 mt-1 truncate">{current.intent}</p>
                  </div>
                </div>

                {/* Requirement statement */}
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500">Extracted Customer Requirement:</p>
                  <p className="text-sm font-bold text-slate-800 mt-1">"{current.requirement}"</p>
                </div>

                {/* Recommended Next Action */}
                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-emerald-950 uppercase tracking-wide">Recommended Sales Action</p>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-900 mt-0.5">
                        {current.recommendedAction}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('experience')}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold whitespace-nowrap shadow-xs transition-colors self-end sm:self-auto"
                  >
                    Simulate Handover
                  </button>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] text-slate-400">Flags:</span>
                  {current.tags.map(t => (
                    <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

