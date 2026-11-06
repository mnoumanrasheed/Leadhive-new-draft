import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Calendar, ShieldCheck } from 'lucide-react';
import { analytics } from '../../services/analytics';

export function BookingModal({ isOpen, onClose, topic = 'Personalized Demo' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: 'Real Estate',
    channels: 'WhatsApp + Socials',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    analytics.track('consultation_requested', {
      topic,
      industry: formData.industry,
      hasPhone: !!formData.phone
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-elevated border border-slate-200 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1.5 rounded-lg bg-brand-50 text-brand-600">
                <Calendar className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                Direct Sales Intelligence Access
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              {topic}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Connect with our enterprise solution architects to see LeadHive AI configured for your actual customer channels.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5 text-left text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Corporate Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">WhatsApp / Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="+92 300 •••••••"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Target Industry</label>
                  <select
                    value={formData.industry}
                    onChange={e => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-white"
                  >
                    <option value="Real Estate">Real Estate</option>
                    <option value="Healthcare">Healthcare & Clinics</option>
                    <option value="Education">Higher Education & EdTech</option>
                    <option value="Automotive">Automotive Dealerships</option>
                    <option value="E-commerce">B2B & E-commerce</option>
                    <option value="Professional Services">Professional Services</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Primary Channels</label>
                  <select
                    value={formData.channels}
                    onChange={e => setFormData({ ...formData, channels: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs bg-white"
                  >
                    <option value="WhatsApp + Socials">WhatsApp + Socials (All 6)</option>
                    <option value="WhatsApp Business Only">WhatsApp Business Primary</option>
                    <option value="Social Comments & Messenger">Facebook + Instagram + TikTok</option>
                    <option value="Website Live Chat">Website Chat + Omnichannel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Specific Requirements or Question (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Inquiring about lead scoring rules and CRM sync."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-brand transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Demonstration Access</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Strict privacy guaranteed. No third-party data sharing.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Request Confirmed!</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our enterprise solutions team has received your request for <span className="font-semibold text-slate-800">{formData.industry}</span> consultation.
            </p>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 text-left font-mono">
              <p>✓ Event: consultation_requested</p>
              <p>✓ Response window: Within 4 business hours</p>
              <p>✓ Priority queue: Executive Demonstration</p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
            >
              Back to Platform
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

