import React from 'react';
import { ArrowRight, Sparkles, Building2, Stethoscope, GraduationCap, Car, ShoppingBag, Briefcase } from 'lucide-react';
import { INDUSTRIES } from '../../data/scenarios';
import { analytics } from '../../services/analytics';

const ICON_MAP = {
  Building2,
  Stethoscope,
  GraduationCap,
  Car,
  ShoppingBag,
  Briefcase
};

export function IndustryShowcase({ onSelectIndustry }) {
  return (
    <section id="industries-section" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <span>Specialized Knowledge Engines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Intelligence Across Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            LeadHive AI comes pre-trained with domain qualification frameworks, vocabulary, and lead evaluation rules specific to your vertical.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = ICON_MAP[ind.icon] || Building2;
            return (
              <div
                key={ind.id}
                className="group bg-white border border-slate-200 hover:border-brand-300 rounded-3xl overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Authentic Photography Header */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    {/* Badge on photo */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="flex items-center gap-1.5 text-xs font-bold drop-shadow">
                        <Icon className="w-4 h-4 text-brand-300" />
                        {ind.name}
                      </span>
                      <span className="text-[10px] font-mono bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                        Configured
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-700">
                      {ind.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Default Qualification Showcase */}
                    <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 p-3 rounded-xl space-y-1.5 text-xs">
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Sample Prospect:</span>
                        <span className="font-semibold text-slate-800">{ind.defaultLead.prospect}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Lead Score:</span>
                        <span className="font-bold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded">
                          {ind.defaultLead.score}/100 ({ind.defaultLead.temperature})
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 italic truncate pt-1">
                        Requirement: "{ind.defaultLead.requirement}"
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      analytics.track('industry_selected', { industry: ind.id, source: 'industry_showcase' });
                      onSelectIndustry(ind.id);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-all flex items-center justify-center gap-2 group-hover:bg-brand-500 group-hover:text-white"
                  >
                    <span>Launch {ind.name} Scenario</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

