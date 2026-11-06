import React, { useState, useEffect } from 'react';
import { Activity, X, Trash2, ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';
import { analytics } from '../../services/analytics';

export function AnalyticsDrawer({ isOpen, onClose }) {
  const [events, setEvents] = useState(analytics.getRecentEvents());

  useEffect(() => {
    const unsub = analytics.subscribe(() => {
      setEvents([...analytics.getRecentEvents()]);
    });
    return unsub;
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white border-l border-slate-200 shadow-2xl flex flex-col animate-slideLeft">
      
      {/* Header */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-brand-400 animate-pulse" />
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider">Live Telemetry & Events</h3>
            <p className="text-[10px] text-slate-400 font-mono">Section 09 Specification Tracker</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close telemetry drawer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Info Pill */}
      <div className="p-3 bg-brand-50 border-b border-brand-100 text-[11px] text-brand-900 flex items-center justify-between">
        <span>Active Event Stream:</span>
        <span className="font-mono font-bold bg-white px-2 py-0.5 rounded text-brand-700 border border-brand-200">
          {events.length} captured
        </span>
      </div>

      {/* Event list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
        {events.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">
            <Activity className="w-8 h-8 mx-auto text-slate-300 mb-2" />
            <p>No events recorded yet.</p>
            <p className="text-[11px] mt-1">Interact with the Experience Centre or Homepage to stream events.</p>
          </div>
        ) : (
          events.map((ev) => (
            <div
              key={ev.id}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 font-mono hover:bg-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  {ev.name}
                </span>
                <span className="text-[10px] text-slate-400">{ev.timestamp}</span>
              </div>
              {ev.payload && (
                <div className="p-2 rounded bg-slate-100/80 text-[10px] text-slate-600 overflow-x-auto whitespace-pre">
                  {JSON.stringify(ev.payload, null, 2)}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-200 bg-slate-50 text-[11px] text-slate-500 text-center flex items-center justify-between">
        <span>LeadHive Privacy First</span>
        <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Zero PII Storage
        </span>
      </div>

    </div>
  );
}

