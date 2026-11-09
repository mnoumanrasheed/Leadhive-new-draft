import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  MessageCircleMore,
  Pause,
  Play,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import { ChannelIcon } from '../common/ChannelIcon';
import { analytics } from '../../services/analytics';

const intelligenceSteps = [
  { label: 'Intent detected', detail: 'Buying within 30 days', icon: Target },
  { label: 'Lead qualified', detail: 'Budget and location matched', icon: CheckCircle2 },
  { label: 'Action prepared', detail: 'VIP consultation recommended', icon: Zap },
];

export function Hero({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const interval = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % intelligenceSteps.length);
    }, 2400);
    return () => window.clearInterval(interval);
  }, [isPaused]);

  const openExperience = () => {
    analytics.track('experience_started', { trigger: 'hero_primary_cta' });
    onNavigate('experience');
  };

  return (
    <section className="hero-premium relative isolate overflow-hidden border-b border-slate-100 bg-white">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -left-48 top-24 h-[32rem] w-[32rem] rounded-full bg-cyan-50 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-sky-50 blur-[130px]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16 xl:gap-10">
        <div className="lg:col-span-5">
          <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-800 shadow-[0_8px_28px_-20px_rgba(8,145,178,0.55)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Autonomous Sales Intelligence
          </div>

          <h1 className="hero-reveal hero-reveal-delay-1 mt-7 text-4xl font-extrabold leading-none tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Every<br />
            Conversation.<br />
            <span className="text-brand-500">An Opportunity.</span>
          </h1>

          <h2 className="hero-reveal hero-reveal-delay-2 mt-7 max-w-xl text-xl font-bold leading-tight tracking-[-0.025em] text-slate-800 sm:text-2xl">
            Autonomous Sales Intelligence Across Every Channel.
          </h2>

          <p className="hero-reveal hero-reveal-delay-2 mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            LeadHive AI understands customer conversations, identifies buying intent, qualifies prospects and prioritizes opportunities, giving your sales team the intelligence to focus on closing.
          </p>

          <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openExperience}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 text-sm font-bold text-white shadow-[0_18px_42px_-18px_rgba(6,182,212,0.62)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
            >
              <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              Experience the Magic
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#operating-model"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 text-sm font-bold text-slate-700 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.3)] transition-all duration-300 hover:border-cyan-200 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
            >
              Discover How It Works
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="hero-reveal hero-reveal-delay-2 relative lg:col-span-7">
          <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-cyan-100/55 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_38px_90px_-45px_rgba(15,23,42,0.3)] sm:p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(34,211,238,0.11),transparent_32%),radial-gradient(circle_at_3%_100%,rgba(14,165,233,0.07),transparent_30%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3.5 sm:px-5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-200" />
                    <span className="h-2 w-2 rounded-full bg-slate-100" />
                  </div>
                  <span className="hidden h-4 w-px bg-slate-200 sm:block" />
                  <div className="hidden items-center gap-2 sm:flex">
                    <img src="/leadhive-icon.png" alt="" className="h-5 w-5 object-contain" />
                    <span className="text-[11px] font-semibold tracking-wide text-slate-600">LeadHive Intelligence</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-700 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 motion-reduce:animate-none" />
                    Live
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPaused((paused) => !paused)}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label={isPaused ? 'Resume intelligence demo' : 'Pause intelligence demo'}
                  >
                    {isPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              <div className="relative p-4 sm:p-5 lg:p-6">
                <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    ['Live conversations', '1,428', '+18%'],
                    ['Qualified today', '384', '26.8%'],
                    ['Ready to act', '142', 'High intent'],
                  ].map(([label, value, detail], index) => (
                    <div key={label} className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_12px_30px_-26px_rgba(15,23,42,0.32)] sm:rounded-2xl sm:p-4">
                      <p className="truncate text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px]">{label}</p>
                      <div className="mt-2 flex items-end justify-between gap-1">
                        <span className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">{value}</span>
                        <span className={`hidden pb-0.5 text-[9px] font-semibold sm:block ${index === 2 ? 'text-rose-500' : 'text-cyan-600'}`}>{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_36px_-30px_rgba(15,23,42,0.3)] sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-700">Incoming signal</p>
                        <p className="mt-1 text-xs font-semibold text-slate-600">Customer conversation</p>
                      </div>
                      <span className="rounded-md bg-slate-50 px-2 py-1 font-mono text-[9px] text-slate-400">NOW</span>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <div className="relative">
                        <ChannelIcon channel="whatsapp" className="h-10 w-10 rounded-xl" />
                        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">WhatsApp Business</p>
                        <p className="mt-0.5 text-[10px] text-slate-400">DHA Islamabad • Just now</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl rounded-tl-md border border-slate-200 bg-white p-4 shadow-[0_10px_24px_-22px_rgba(15,23,42,0.3)]">
                      <p className="text-[12px] leading-5 text-slate-600 sm:text-[13px]">
                        “I’m looking for a 5-marla house in DHA. My budget is around PKR 30M and I want to buy this month.”
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-[10px] font-medium text-slate-400">
                      <MessageCircleMore className="h-3.5 w-3.5 text-cyan-500" />
                      Analysing conversation context
                      <span className="flex gap-0.5" aria-hidden="true">
                        <i className="h-1 w-1 animate-bounce rounded-full bg-cyan-400 [animation-delay:-.3s] motion-reduce:animate-none" />
                        <i className="h-1 w-1 animate-bounce rounded-full bg-cyan-400 [animation-delay:-.15s] motion-reduce:animate-none" />
                        <i className="h-1 w-1 animate-bounce rounded-full bg-cyan-400 motion-reduce:animate-none" />
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-200 bg-white p-4 shadow-[0_16px_38px_-30px_rgba(6,182,212,0.36)] sm:p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-[0_8px_24px_rgba(34,211,238,0.24)]">
                          <Sparkles className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs font-bold text-slate-900">AI opportunity brief</p>
                          <p className="mt-0.5 text-[9px] text-slate-400">Updated in real time</p>
                        </div>
                      </div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-200 bg-cyan-50 text-sm font-black text-cyan-700">
                        92
                      </div>
                    </div>

                    <div className="mt-5 space-y-2">
                      {intelligenceSteps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === index;
                        const isComplete = index <= activeStep;
                        return (
                          <button
                            type="button"
                            key={step.label}
                            onClick={() => setActiveStep(index)}
                            className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                              isActive
                                ? 'translate-x-1 border-cyan-200 bg-white shadow-[0_10px_28px_-20px_rgba(6,182,212,0.45)]'
                                : 'border-slate-100 bg-white'
                            }`}
                          >
                            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${isComplete ? 'bg-cyan-500 text-white' : 'bg-slate-50 text-slate-400'}`}>
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="min-w-0">
                              <span className={`block text-[11px] font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{step.label}</span>
                              <span className="mt-0.5 block truncate text-[9px] text-slate-400 sm:text-[10px]">{step.detail}</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-white p-4 shadow-[0_14px_34px_-28px_rgba(16,185,129,0.35)] sm:flex-row sm:items-center sm:justify-between sm:p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Flame className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-bold text-slate-900">High-intent opportunity</p>
                        <span className="rounded-full border border-rose-200 bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-rose-600">Hot lead</span>
                      </div>
                      <p className="mt-1.5 text-[11px] leading-4 text-slate-500">Next best action: Schedule a VIP property consultation.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={openExperience}
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-200 bg-white px-4 py-2.5 text-[11px] font-bold text-cyan-700 transition-all hover:bg-cyan-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Open opportunity
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
