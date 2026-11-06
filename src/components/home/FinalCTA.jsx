import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { analytics } from '../../services/analytics';

export function FinalCTA({ onNavigate, onOpenBooking }) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-50/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-elevated">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-300" />
              <span>Instant Interactive Sandbox</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Experience Autonomous Sales Intelligence?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              See how LeadHive AI turns conversations into qualified opportunities. No registration, credentials or integrations required to run the simulation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  analytics.track('experience_started', { source: 'final_cta_primary' });
                  onNavigate('experience');
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-brand-400 hover:bg-brand-300 transition-all shadow-brand flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-slate-900" />
                <span>Experience the Magic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  analytics.track('book_demo_clicked', { source: 'final_cta_secondary' });
                  onOpenBooking('Final CTA Demo');
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-brand-400" />
                <span>Book a Personalized Demo</span>
              </button>
            </div>

            {/* Micro assurances */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                Zero setup time
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                Simulated real-world scenarios
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                Compliant sandbox environment
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

