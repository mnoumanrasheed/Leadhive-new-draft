import React from 'react';
import { HeartHandshake, CheckCircle2, Clock, Users, Shield, ArrowRight } from 'lucide-react';

export function HumanCenteredOutcome({ onNavigate, onOpenBooking }) {
  return (
    <section id="human-outcome" className="py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Outcomes (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-brand-600" />
              <span>Human-Centred Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let AI Handle the Intelligence.<br />
              <span className="text-brand-600">Let Your Team Focus on Relationships.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              LeadHive AI does not replace your sales team — it empowers them. By autonomously handling repetitive inquiries, qualification questions and scoring in the background, your closers step in at the moment of highest intent, armed with complete context.
            </p>

            {/* Benefit pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-white border border-slate-200 text-brand-600 shadow-xs shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Zero Unqualified Churn</h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Your sales executives never waste hours chasing unverified phone numbers or casual window shoppers. Every handover contains verified budget and timeline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-white border border-slate-200 text-brand-600 shadow-xs shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Instant Response, Human Finality</h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Leads receive instant engagement within seconds across Facebook, WhatsApp, or Web Chat, keeping their buying momentum warm until your rep connects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-white border border-slate-200 text-brand-600 shadow-xs shrink-0 mt-0.5">
                  <Users className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Trust-Based Consultative Selling</h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Armed with structured dossiers, your team conducts high-value advisory conversations that close deals faster and build lasting customer trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onNavigate('experience')}
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-sm font-semibold shadow-brand flex items-center justify-center gap-2 transition-all"
              >
                <span>Simulate Sales Handover</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenBooking('Closing Relationships Consultation')}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-sm font-semibold transition-colors"
              >
                Schedule Team Demo
              </button>
            </div>

          </div>

          {/* Right Visual: Authentic Professional & Dashboard (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Sales Consultant Reviewing Prioritized Opportunity Dashboard with Prospective Client"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Live Handover Inset */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-elevated">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-xs font-bold text-slate-900">Simulated Sales Rep Handover Dossier</p>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                    READY TO CALL
                  </span>
                </div>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-600">
                  <div>
                    <p className="font-semibold text-slate-900">Tariq Mehmood • DHA Islamabad</p>
                    <p className="text-[11px] text-slate-500">Budget: PKR 30M • Timeline: &lt;30 days</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded">Score: 92/100</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Micro-Badge */}
            <div className="mt-3 text-center">
              <p className="text-xs text-slate-400 italic">
                Simulated business interaction — Demonstrating human decision-making and consultative sales enablement.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

