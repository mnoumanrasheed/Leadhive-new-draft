import React from 'react';
import { Sparkles, Activity, ArrowRight, Menu, X } from 'lucide-react';
import { analytics } from '../../services/analytics';

export function Navbar({ activeRoute, onNavigate, onOpenBooking, onToggleAnalytics, analyticsCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleNavClick = (route, anchorId = null) => {
    setMobileMenuOpen(false);
    onNavigate(route);
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
            >
              <img 
                src="/leadhive-logo.png" 
                alt="LeadHive AI - Autonomous Sales Intelligence" 
                className="h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </button>
            <span className="hidden xl:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-50 text-brand-800 border border-brand-200">
              Autonomous Sales Intelligence
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg transition-colors ${activeRoute === 'home' ? 'text-brand-700 bg-brand-50 font-semibold' : 'hover:text-slate-900 hover:bg-slate-50'}`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNavClick('home', 'channels-section')}
              className="px-3 py-2 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-50"
            >
              Multi-Channel
            </button>
            <button
              onClick={() => handleNavClick('home', 'operating-model')}
              className="px-3 py-2 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-50"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('home', 'industries-section')}
              className="px-3 py-2 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-50"
            >
              Industries
            </button>
            <button
              onClick={() => {
                analytics.track('experience_opened', { trigger: 'navbar_link' });
                handleNavClick('experience');
              }}
              className={`px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeRoute === 'experience'
                  ? 'text-brand-700 bg-brand-100 font-semibold ring-1 ring-brand-300'
                  : 'text-brand-600 hover:bg-brand-50 font-medium'
              }`}
            >
              <Sparkles className="w-4 h-4 text-brand-500 fill-brand-200" />
              AI Experience Centre
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Analytics Telemetry Pill */}
            <button
              onClick={onToggleAnalytics}
              title="View live analytics engagement events log"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
            >
              <Activity className="w-3.5 h-3.5 text-brand-600 animate-pulse" />
              <span className="hidden lg:inline">Telemetry</span>
              <span className="bg-white px-1.5 py-0.2 rounded text-[11px] font-mono text-slate-600">{analyticsCount}</span>
            </button>

            <button
              onClick={() => {
                analytics.track('book_demo_clicked', { source: 'navbar_button' });
                onOpenBooking('Personalized Demo');
              }}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200"
            >
              Book Demo
            </button>

            <button
              onClick={() => {
                analytics.track('experience_started', { source: 'navbar_primary_cta' });
                onNavigate('experience');
              }}
              className="px-4 py-2 text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 active:bg-brand-700 rounded-lg shadow-sm hover:shadow-brand transition-all flex items-center gap-2 group"
            >
              <span>Experience the Magic</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleAnalytics}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 text-xs flex items-center gap-1"
            >
              <Activity className="w-4 h-4 text-brand-600" />
              <span>{analyticsCount}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="px-3 py-2 text-left rounded-lg text-slate-700 font-medium hover:bg-slate-50"
            >
              Platform Overview
            </button>
            <button
              onClick={() => handleNavClick('home', 'channels-section')}
              className="px-3 py-2 text-left rounded-lg text-slate-700 font-medium hover:bg-slate-50"
            >
              One Intelligence. Every Channel.
            </button>
            <button
              onClick={() => handleNavClick('home', 'operating-model')}
              className="px-3 py-2 text-left rounded-lg text-slate-700 font-medium hover:bg-slate-50"
            >
              From Conversation to Conversion
            </button>
            <button
              onClick={() => handleNavClick('home', 'industries-section')}
              className="px-3 py-2 text-left rounded-lg text-slate-700 font-medium hover:bg-slate-50"
            >
              Intelligence Across Industries
            </button>
            <button
              onClick={() => {
                analytics.track('experience_opened', { trigger: 'mobile_nav' });
                handleNavClick('experience');
              }}
              className="px-3 py-2.5 text-left rounded-lg bg-brand-50 text-brand-700 font-semibold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-500" />
                AI Experience Centre
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Mobile Menu Demo');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg"
            >
              Book a Personalized Demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('experience');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-brand-500 rounded-lg shadow-sm"
            >
              Experience the Magic
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

