import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/home/Hero';
import { ChannelGrid } from './components/home/ChannelGrid';
import { OperatingModel } from './components/home/OperatingModel';
import { LeadDashboardPreview } from './components/home/LeadDashboardPreview';
import { HumanCenteredOutcome } from './components/home/HumanCenteredOutcome';
import { IndustryShowcase } from './components/home/IndustryShowcase';
import { FinalCTA } from './components/home/FinalCTA';
import { ExperienceCentre } from './components/experience/ExperienceCentre';
import { BookingModal } from './components/experience/BookingModal';
import { AnalyticsDrawer } from './components/experience/AnalyticsDrawer';
import { analytics } from './services/analytics';

export function App() {
  const [activeRoute, setActiveRoute] = useState('home'); // 'home' | 'experience'
  const [selectedIndustryForExp, setSelectedIndustryForExp] = useState('real-estate');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState('Personalized Demo');
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [eventCount, setEventCount] = useState(0);

  // Sync route with URL hash or pathname
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/experience' || hash === '#experience') {
        setActiveRoute('experience');
      } else {
        setActiveRoute('home');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Update document title and URL when route changes
  const handleNavigate = (route) => {
    setActiveRoute(route);
    if (route === 'experience') {
      window.history.pushState(null, '', '#experience');
      document.title = 'LeadHive AI — Interactive AI Experience Centre';
    } else {
      window.history.pushState(null, '', '#');
      document.title = 'LeadHive AI — Autonomous Sales Intelligence Platform';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Subscribe to live telemetry count
  useEffect(() => {
    const unsub = analytics.subscribe(() => {
      setEventCount(analytics.getRecentEvents().length);
    });
    return unsub;
  }, []);

  const handleOpenBooking = (topic = 'Personalized Demo') => {
    setBookingTopic(topic);
    setIsBookingOpen(true);
  };

  const handleSelectIndustryFromHome = (industryId) => {
    setSelectedIndustryForExp(industryId);
    handleNavigate('experience');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onToggleAnalytics={() => setIsAnalyticsOpen(!isAnalyticsOpen)}
        analyticsCount={eventCount}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {activeRoute === 'home' ? (
          <div>
            {/* Section 01: Hero */}
            <Hero
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />

            {/* Section 02: One Intelligence. Every Channel. */}
            <ChannelGrid
              onNavigate={handleNavigate}
            />

            {/* Section 03: From Conversation to Conversion */}
            <OperatingModel
              onNavigate={handleNavigate}
            />

            {/* Section 04: Know Which Leads Matter */}
            <LeadDashboardPreview
              onNavigate={handleNavigate}
            />

            {/* Section 05: Your Team Focuses on Closing */}
            <HumanCenteredOutcome
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />

            {/* Section 06: Intelligence Across Industries */}
            <IndustryShowcase
              onSelectIndustry={handleSelectIndustryFromHome}
            />

            {/* Section 07: Final CTA */}
            <FinalCTA
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
            />
          </div>
        ) : (
          /* Dedicated AI Experience Centre (/experience) */
          <ExperienceCentre
            initialIndustryId={selectedIndustryForExp}
            onOpenBooking={handleOpenBooking}
            onBackToHome={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Booking / Demo Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        topic={bookingTopic}
      />

      {/* Real-time Analytics Telemetry Drawer */}
      <AnalyticsDrawer
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
      />
    </div>
  );
}

export default App;

