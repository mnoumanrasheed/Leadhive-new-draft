import React from 'react';
import { Shield, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ChannelIcon } from './ChannelIcon';

export function Footer({ onNavigate, onOpenBooking }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Proposition */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/leadhive-logo.png" 
                alt="LeadHive AI" 
                className="h-9 w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Autonomous Sales Intelligence Platform. Turning multi-channel customer conversations into qualified, prioritized sales opportunities so your team acts on the leads that matter.
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-400">Brand Promise</p>
              <p className="text-sm font-medium text-white mt-1">Your Team Acts on the Opportunities That Matter.</p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-slate-400">Supported Channels:</span>
              <div className="flex items-center gap-1.5">
                <ChannelIcon channel="facebook" className="w-5 h-5 rounded" />
                <ChannelIcon channel="instagram" className="w-5 h-5 rounded" />
                <ChannelIcon channel="youtube" className="w-5 h-5 rounded" />
                <ChannelIcon channel="whatsapp" className="w-5 h-5 rounded" />
                <ChannelIcon channel="tiktok" className="w-5 h-5 rounded" />
                <ChannelIcon channel="website" className="w-5 h-5 rounded" />
              </div>
            </div>
          </div>

          {/* Platform Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('experience')} className="text-slate-400 hover:text-brand-300 flex items-center gap-1">
                  AI Experience Centre
                  <span className="text-[10px] bg-brand-500/20 text-brand-300 px-1.5 py-0.2 rounded font-mono">LIVE</span>
                </button>
              </li>
              <li>
                <a href="#channels-section" className="text-slate-400 hover:text-white transition-colors">Multi-Channel Ingestion</a>
              </li>
              <li>
                <a href="#operating-model" className="text-slate-400 hover:text-white transition-colors">4-Stage Operating Model</a>
              </li>
              <li>
                <a href="#lead-dashboard-preview" className="text-slate-400 hover:text-white transition-colors">Lead Intelligence Dashboard</a>
              </li>
              <li>
                <a href="#human-outcome" className="text-slate-400 hover:text-white transition-colors">Human + AI Sales Handover</a>
              </li>
            </ul>
          </div>

          {/* Industry Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Industries</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => { onNavigate('experience'); }} className="text-slate-400 hover:text-white">Real Estate & Developers</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('experience'); }} className="text-slate-400 hover:text-white">Healthcare & Clinics</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('experience'); }} className="text-slate-400 hover:text-white">Higher Education & EdTech</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('experience'); }} className="text-slate-400 hover:text-white">Automotive Dealerships</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('experience'); }} className="text-slate-400 hover:text-white">B2B & E-commerce</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('experience'); }} className="text-slate-400 hover:text-white">Professional Services</button>
              </li>
            </ul>
          </div>

          {/* Actions & Verification */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Direct Action</h4>
            <div className="space-y-3">
              <button
                onClick={() => onNavigate('experience')}
                className="w-full py-2.5 px-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Launch Experience Centre
              </button>
              <button
                onClick={() => onOpenBooking('Footer Consultation')}
                className="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-all"
              >
                Request Consultation
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                <span>Enterprise SOC-2 & GDPR Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-slate-500 gap-4">
          <p className="max-w-3xl leading-relaxed">
            <span className="font-semibold text-slate-400">Illustrative Demonstration Disclaimer:</span> The LeadHive AI Experience Centre and interactive product illustrations use simulated activity and sample datasets to demonstrate automated conversational qualification and prioritization workflows. Demonstration lead scores do not represent validated financial projections. Official social platform logos remain the property of their respective owners.
          </p>
          <div className="flex items-center gap-4 text-slate-400 whitespace-nowrap">
            <span>© {new Date().getFullYear()} LeadHive AI</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

