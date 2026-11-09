import React, { useEffect, useState } from 'react';

export function PageLoader({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIsLeaving(true), 900);
    const completeTimer = window.setTimeout(onComplete, 1250);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`page-loader fixed inset-0 z-[100] flex items-center justify-center bg-white transition-all duration-500 ${
        isLeaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading LeadHive AI"
    >
      <div className="relative flex flex-col items-center">
        <div className="loader-orbit relative flex h-24 w-24 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-cyan-100" />
          <span className="loader-ring absolute inset-1 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-200" />
          <span className="loader-ring-reverse absolute inset-3 rounded-full border border-transparent border-b-sky-400 border-l-sky-200" />
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-[0_16px_45px_-18px_rgba(8,145,178,0.38)]">
            <img src="/leadhive-icon.png" alt="" className="h-9 w-9 object-contain" />
          </span>
          <span className="loader-dot absolute right-[9px] top-[11px] h-2.5 w-2.5 rounded-full border-2 border-white bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
        </div>

        <img src="/leadhive-logo.png" alt="LeadHive AI" className="mt-5 h-8 w-auto object-contain" />
        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">Intelligence in motion</p>

        <div className="mt-6 h-0.5 w-32 overflow-hidden rounded-full bg-slate-100">
          <span className="loader-progress block h-full rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500" />
        </div>
      </div>
      <span className="sr-only">Preparing your experience…</span>
    </div>
  );
}
