import React from 'react';
import { Eye, MessageCircle, FileCheck2, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';

export function OperatingModel({ onNavigate }) {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      icon: Eye,
      description: 'Interpret customer conversations and identify intent.',
      details: [
        'Multi-lingual semantic comprehension',
        'Buying signal & commercial interest detection',
        'Channel-aware message classification'
      ],
      badge: 'Intent Recognition'
    },
    {
      number: '02',
      title: 'Engage',
      icon: MessageCircle,
      description: 'Generate relevant, context-aware responses through supported channels.',
      details: [
        'Brand-compliant business knowledge retrieval',
        'Natural channel-native dialogue progression',
        'Continuous context preservation'
      ],
      badge: 'Active Engagement'
    },
    {
      number: '03',
      title: 'Qualify',
      icon: FileCheck2,
      description: 'Extract customer requirements, budget, location, preferences and purchase timeline.',
      details: [
        'Structured parameter validation',
        'Readiness & purchasing power extraction',
        'Qualification gap detection'
      ],
      badge: 'BANT+ Alignment'
    },
    {
      number: '04',
      title: 'Prioritize',
      icon: Trophy,
      description: 'Score opportunities and recommend the next best sales action.',
      details: [
        'Multi-factor lead score (0–100)',
        'Hot, Warm, Follow-up classification',
        'Dossier prepared for sales team handover'
      ],
      badge: 'Actionable Intelligence'
    }
  ];

  return (
    <section id="operating-model" className="py-20 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider">
            <span>Operating Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            From Conversation to Conversion
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The four-stage operating model powering LeadHive AI turns unstructured customer messages into structured, prioritized sales opportunities.
          </p>
        </div>

        {/* Clean Horizontal Workflow on Desktop / Vertical on Mobile */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-emerald-300 z-0" />

          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={st.title}
                className="relative bg-white border border-slate-200/90 rounded-2xl p-6 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number + Icon Hub */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-xl bg-brand-500 text-white font-mono font-bold text-sm flex items-center justify-center shadow-sm">
                      {st.number}
                    </span>
                    <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100">
                      {st.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Icon className="w-5 h-5 text-brand-500" />
                    <span>{st.title}</span>
                  </h3>
                  <p className="text-sm font-medium text-slate-700 mt-2 leading-relaxed">
                    {st.description}
                  </p>

                  {/* Bullet details */}
                  <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                    {st.details.map((d) => (
                      <li key={d} className="flex items-start gap-1.5">
                        <span className="text-brand-500 font-bold">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Phase {i + 1} of 4</span>
                  <span className="font-mono text-brand-600">Autonomous</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operating Model Summary Pill */}
        <div className="mt-12 p-4 bg-white border border-slate-200 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Deterministic Business Guardrails</p>
              <p className="text-xs text-slate-500">AI executes within verified enterprise knowledge and rules.</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('experience')}
            className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1.5 whitespace-nowrap bg-brand-50 px-3.5 py-2 rounded-lg"
          >
            See Live Processing
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

