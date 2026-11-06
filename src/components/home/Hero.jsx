import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, Pause, RotateCcw, CheckCircle2, Flame, AlertCircle, Clock, Zap, ShieldCheck } from 'lucide-react';
import { ChannelIcon } from '../common/ChannelIcon';
import { analytics } from '../../services/analytics';

export function Hero({ onNavigate, onOpenBooking }) {
  const [animationStep, setAnimationStep] = useState(0); // 0: Ingesting, 1: Processing, 2: Prioritizing
  const [isPaused, setIsPaused] = useState(false);

  // 9-second looping sequence (3s per stage)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  const stages = [
    { title: 'Understand', desc: 'NLP intent parsing' },
    { title: 'Engage', desc: 'Contextual responses' },
    { title: 'Identify Intent', desc: 'Commercial signals' },
    { title: 'Qualify', desc: 'Budget & timeline' },
    { title: 'Score', desc: 'Algorithmic weighting' },
    { title: 'Prioritize', desc: 'Next best action' },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background subtle radial ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Messaging */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Position tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
              <span>Autonomous Sales Intelligence</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Every Conversation.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-sky-600">
                An Opportunity.
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight">
              Autonomous Sales Intelligence Across Every Channel.
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              LeadHive AI understands customer conversations, identifies buying intent, qualifies prospects and prioritizes opportunities, giving your sales team the intelligence to focus on closing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  analytics.track('experience_started', { trigger: 'hero_primary_cta' });
                  onNavigate('experience');
                }}
                className="px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-brand-500 hover:bg-brand-600 active:bg-brand-700 shadow-brand transition-all flex items-center justify-center gap-2.5 group"
              >
                <Sparkles className="w-5 h-5 fill-white/20 group-hover:rotate-12 transition-transform" />
                <span>Experience the Magic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#operating-model"
                className="px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center text-center"
              >
                Discover How It Works
              </a>
            </div>

            {/* Brand Promise & Trust markers */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">Brand Promise</p>
              <p className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                <span>Your Team Acts on the Opportunities That Matter.</span>
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 mt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  Deterministic & Compliant
                </span>
                <span>•</span>
                <span>No Account Connection Required for Demo</span>
              </div>
            </div>

          </div>

          {/* Right Side: Product Visualization (3 Interconnected Zones + Photographic Inset) */}
          <div className="lg:col-span-7 relative">
            
            {/* Split Composition: Authentic Photographic Inset in Secondary Position */}
            <div className="absolute -top-7 -right-2 z-20 hidden md:flex items-center gap-3 p-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-elevated border border-slate-200/80 max-w-xs animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" 
                alt="Sales Consultant Reviewing Prioritized Opportunities" 
                className="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-100"
              />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <p className="text-xs font-semibold text-slate-800">Sales Executive In Action</p>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Acting on AI-qualified hot leads in real-time</p>
              </div>
            </div>

            {/* Main Interactive Product Canvas */}
            <div className="relative bg-slate-50/70 border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-card overflow-hidden">
              
              {/* Header bar of visualization */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-mono text-[11px] bg-white border border-slate-200 text-slate-700 font-medium">
                    Simulated activity
                  </span>
                  <span className="text-[11px] text-slate-400 hidden sm:inline">
                    Illustrative product visualization
                  </span>
                </div>

                {/* Looping Controls */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="p-1 hover:text-slate-900 text-slate-600 transition-colors"
                      title={isPaused ? "Resume animation" : "Pause animation"}
                    >
                      {isPaused ? <Play className="w-3.5 h-3.5 text-brand-600" /> : <Pause className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => setAnimationStep(0)}
                      className="p-1 hover:text-slate-900 text-slate-600 transition-colors"
                      title="Reset loop"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 font-medium">
                    Stage {animationStep + 1}/3
                  </span>
                </div>
              </div>

              {/* Three Interconnected Zones (Desktop 3-column / Tablet layout) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center relative">
                
                {/* SVG Connecting Flow Lines (Desktop only) */}
                <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2BBFDD" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2BBFDD" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  {/* Left to Center paths */}
                  <path d="M 120 70 C 180 70, 200 150, 240 150" fill="none" stroke="url(#flowGrad1)" strokeWidth="2" strokeDasharray="4 4" className={animationStep === 0 ? "animate-pulse" : ""} />
                  <path d="M 120 150 C 180 150, 200 150, 240 150" fill="none" stroke="url(#flowGrad1)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 120 230 C 180 230, 200 150, 240 150" fill="none" stroke="url(#flowGrad1)" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Center to Right paths */}
                  <path d="M 330 150 C 370 150, 390 70, 440 70" fill="none" stroke="url(#flowGrad2)" strokeWidth="2" strokeDasharray="4 4" className={animationStep === 2 ? "animate-pulse" : ""} />
                  <path d="M 330 150 C 370 150, 390 150, 440 150" fill="none" stroke="url(#flowGrad2)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 330 150 C 370 150, 390 230, 440 230" fill="none" stroke="url(#flowGrad2)" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* ZONE A: Customer Conversations (Left 4 cols) */}
                <div className="md:col-span-4 space-y-2 z-10">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      A. Customer Conversations
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${animationStep === 0 ? 'bg-brand-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      Ingesting
                    </span>
                  </div>

                  {/* Channel Sample Cards */}
                  <div className={`p-2.5 rounded-xl border transition-all ${animationStep === 0 ? 'bg-white border-brand-300 shadow-md translate-x-1' : 'bg-white/80 border-slate-200/90'}`}>
                    <div className="flex items-center gap-2">
                      <ChannelIcon channel="whatsapp" className="w-5 h-5 rounded-md" />
                      <span className="text-xs font-semibold text-slate-800">WhatsApp Business</span>
                      <span className="text-[10px] text-slate-400 ml-auto">Just now</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-1 italic">
                      "Looking to buy 5-marla house in DHA Islamabad. Budget PKR 30M."
                    </p>
                  </div>

                  <div className={`p-2.5 rounded-xl border transition-all ${animationStep === 0 ? 'bg-white border-brand-300 shadow-md translate-x-1' : 'bg-white/80 border-slate-200/90'}`}>
                    <div className="flex items-center gap-2">
                      <ChannelIcon channel="facebook" className="w-5 h-5 rounded-md" />
                      <span className="text-xs font-semibold text-slate-800">Facebook Messenger</span>
                      <span className="text-[10px] text-slate-400 ml-auto">3m ago</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-1 italic">
                      "What is guaranteed rental yield on 2-bed Downtown units?"
                    </p>
                  </div>

                  <div className={`p-2.5 rounded-xl border transition-all ${animationStep === 0 ? 'bg-white border-brand-300 shadow-md translate-x-1' : 'bg-white/80 border-slate-200/90'}`}>
                    <div className="flex items-center gap-2">
                      <ChannelIcon channel="youtube" className="w-5 h-5 rounded-md" />
                      <span className="text-xs font-semibold text-slate-800">YouTube Comment</span>
                      <span className="text-[10px] text-slate-400 ml-auto">8m ago</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1 line-clamp-1 italic">
                      "Commercial corner plot available in Sector A? Budget PKR 50M."
                    </p>
                  </div>

                  {/* Icon ribbon */}
                  <div className="flex items-center justify-around pt-1 px-1 opacity-70">
                    <ChannelIcon channel="instagram" className="w-4 h-4 rounded" />
                    <ChannelIcon channel="tiktok" className="w-4 h-4 rounded" />
                    <ChannelIcon channel="website" className="w-4 h-4 rounded" />
                    <span className="text-[10px] text-slate-400 font-medium">+ 3 channels</span>
                  </div>
                </div>

                {/* ZONE B: LeadHive AI Intelligence Engine (Center 4 cols) */}
                <div className="md:col-span-4 z-10">
                  <div className={`p-3.5 rounded-2xl border transition-all duration-500 ${
                    animationStep === 1 
                      ? 'bg-gradient-to-b from-white to-brand-50/50 border-brand-400 shadow-brand ring-2 ring-brand-300' 
                      : 'bg-white border-slate-200 shadow-subtle'
                  }`}>
                    
                    {/* Central Brand Hub Header */}
                    <div className="text-center pb-2.5 border-b border-slate-100">
                      <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-brand-500/10 mb-1.5 relative">
                        <img 
                          src="/leadhive-icon.png" 
                          alt="LeadHive Engine Symbol" 
                          className="w-8 h-8 object-contain"
                        />
                        {animationStep === 1 && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-500 rounded-full animate-ping" />
                        )}
                      </div>
                      <p className="text-xs font-bold text-slate-900">LeadHive AI Engine</p>
                      <p className="text-[10px] text-slate-500">Autonomous Reasoning Hub</p>
                    </div>

                    {/* Six Processing Stages */}
                    <div className="grid grid-cols-2 gap-1.5 pt-2.5">
                      {stages.map((st, idx) => {
                        const isActive = animationStep === 1 || (animationStep === 0 && idx < 3) || (animationStep === 2 && idx >= 3);
                        return (
                          <div 
                            key={st.title} 
                            className={`p-1.5 rounded-lg text-left transition-all ${
                              isActive 
                                ? 'bg-brand-500 text-white shadow-xs scale-[1.02]' 
                                : 'bg-slate-50 text-slate-600 border border-slate-100'
                            }`}
                          >
                            <p className="text-[10px] font-bold leading-tight flex items-center justify-between">
                              <span>{st.title}</span>
                              {isActive && <Zap className="w-2.5 h-2.5 text-white shrink-0" />}
                            </p>
                            <p className={`text-[9px] truncate ${isActive ? 'text-brand-100' : 'text-slate-400'}`}>
                              {st.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-2.5 text-center">
                      <span className="text-[10px] font-mono text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full inline-block">
                        {animationStep === 1 ? '⚡ Extracting intent & scoring...' : 'Continuous ingestion active'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ZONE C: Qualified Opportunities (Right 4 cols) */}
                <div className="md:col-span-4 space-y-2 z-10">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      C. Qualified Opportunities
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${animationStep === 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      Actionable
                    </span>
                  </div>

                  {/* Hot Lead Card */}
                  <div className={`p-2.5 rounded-xl border transition-all ${animationStep === 2 ? 'bg-white border-emerald-400 shadow-md translate-x-1' : 'bg-white/90 border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                        <Flame className="w-3 h-3 text-rose-600" />
                        Hot Lead (92/100)
                      </span>
                      <span className="text-[10px] font-medium text-slate-400">DHA Islamabad</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 mt-1">5-Marla House • PKR 30M</p>
                    <p className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded mt-1 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      Action: Schedule VIP Property Tour Sat 11:30 AM
                    </p>
                  </div>

                  {/* Warm Lead Card */}
                  <div className={`p-2.5 rounded-xl border transition-all ${animationStep === 2 ? 'bg-white border-amber-300 shadow-sm' : 'bg-white/80 border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        <Clock className="w-3 h-3 text-amber-600" />
                        Warm Lead (78/100)
                      </span>
                      <span className="text-[10px] font-medium text-slate-400">Downtown</span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 mt-1">2-Bed Luxury Rental Yield</p>
                    <p className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded mt-1">
                      Action: Dispatch Overseas Investor Prospectus
                    </p>
                  </div>

                  {/* Follow-up Required Card */}
                  <div className="p-2.5 rounded-xl border bg-white/70 border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        <AlertCircle className="w-3 h-3 text-blue-600" />
                        Follow-up (64/100)
                      </span>
                      <span className="text-[10px] font-medium text-slate-400">Smart Villa</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800 mt-0.5 truncate">Installment Breakdown Query</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Action: Trigger 36-Month Financing Calculator</p>
                  </div>

                </div>

              </div>

              {/* Bottom Visual Timeline Bar */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-slate-700">Autonomous Flow:</span>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className={animationStep === 0 ? 'text-brand-600 font-bold' : ''}>1. Conversations</span>
                    <span>→</span>
                    <span className={animationStep === 1 ? 'text-brand-600 font-bold' : ''}>2. Intelligence</span>
                    <span>→</span>
                    <span className={animationStep === 2 ? 'text-brand-600 font-bold' : ''}>3. Qualified Opportunities</span>
                    <span>→</span>
                    <span className="text-slate-700 font-bold">4. Sales Action</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('experience')}
                  className="text-brand-600 hover:text-brand-700 font-semibold text-xs flex items-center gap-1"
                >
                  Interactive Simulation
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

