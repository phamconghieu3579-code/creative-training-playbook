import React, { useEffect } from 'react';
import { ConceptDetail } from '../data/playbook';

interface DetailPanelProps {
  detail: ConceptDetail | null;
  onClose: () => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({ detail, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!detail) return null;

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Detail Panel */}
      <aside
        className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[350px] md:w-[360px] bg-white border-l border-slate-200 shadow-xl flex flex-col justify-between transition-transform duration-200 ease-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
      >
        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-7">
          {/* Header with Close */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
              Concept Detail
            </span>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors p-1 -mr-1 cursor-pointer"
              aria-label="Close detail panel"
            >
              <span>×</span>
              <span>Close</span>
            </button>
          </div>

          {/* Main Body */}
          <div className="mt-5 space-y-4">
            {detail.category && (
              <span className="inline-block px-2.5 py-0.5 text-xs font-bold tracking-wider uppercase bg-slate-100 text-slate-700 border border-slate-200">
                {detail.category}
              </span>
            )}

            <h3
              id="detail-title"
              className="text-2xl font-bold tracking-tight text-slate-900 leading-tight uppercase"
            >
              {detail.title}
            </h3>

            {detail.focusQuestion && (
              <div className="p-3.5 bg-slate-50 border-l-2 border-slate-400">
                <p className="text-sm md:text-base font-medium text-slate-700 leading-relaxed">
                  {detail.focusQuestion}
                </p>
              </div>
            )}

            {/* WHAT IT INCLUDES */}
            {detail.whatItIncludes && (
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  WHAT IT INCLUDES
                </span>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {detail.whatItIncludes}
                </p>
              </div>
            )}

            {/* WHAT IT HELPS USERS DO */}
            {detail.whatItHelpsUsersDo && (
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  WHAT IT HELPS USERS DO
                </span>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {detail.whatItHelpsUsersDo}
                </p>
              </div>
            )}

            {/* WHAT IT HELPS VIEWERS DO */}
            {detail.whatItHelpsViewersDo && (
              <div className="p-3.5 bg-blue-50/70 border border-blue-200">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1">
                  WHAT IT HELPS VIEWERS DO
                </span>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {detail.whatItHelpsViewersDo}
                </p>
              </div>
            )}

            {/* VIDEO ADS CONTEXT */}
            {detail.videoAdsContext && (
              <div className="p-3.5 bg-blue-50/70 border border-blue-200">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1">
                  VIDEO ADS
                </span>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {detail.videoAdsContext}
                </p>
              </div>
            )}

            {/* ASO CONTEXT */}
            {detail.asoContext && (
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  ASO
                </span>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {detail.asoContext}
                </p>
              </div>
            )}

            {/* PRIORITY AND WORTHWHILE CHANGE */}
            {detail.priorityChange && (
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-300">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-1">
                  {detail.priorityLabel || 'PRIORITY AND WORTHWHILE CHANGE'}
                </span>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {detail.priorityChange}
                </p>
              </div>
            )}

            {/* DO NOT TEST SEPARATELY */}
            {detail.doNotTestSeparately && (
              <div className="p-3.5 bg-rose-50/70 border border-rose-300">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-900 block mb-1">
                  {detail.doNotTestLabel || 'DO NOT TEST SEPARATELY'}
                </span>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {detail.doNotTestSeparately}
                </p>
              </div>
            )}

            {/* Supporting Note */}
            {detail.supportingNote && (
              <div className="p-3.5 bg-slate-50 border border-slate-200 text-sm md:text-base text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block mb-1 uppercase tracking-wide text-xs">
                  Supporting Note:
                </strong>
                {detail.supportingNote}
              </div>
            )}

            {/* Formatted Explanation */}
            {detail.explanation && (
              <div className="pt-1 text-base font-normal text-slate-700 leading-relaxed whitespace-pre-line space-y-2">
                {detail.explanation}
              </div>
            )}

            {/* Optional Takeaway Box */}
            {detail.takeaway && (
              <div className="mt-4 p-3.5 bg-blue-50/70 border border-blue-200 text-sm md:text-base text-blue-900 leading-relaxed">
                <span className="font-bold block uppercase tracking-wider text-xs text-blue-700 mb-1">
                  Key Takeaway
                </span>
                {detail.takeaway}
              </div>
            )}

            {/* Optional Example Box */}
            {detail.example && (
              <div className="mt-4 p-3.5 bg-amber-50/70 border border-amber-200 text-sm md:text-base text-amber-950 leading-relaxed">
                <span className="font-bold block uppercase tracking-wider text-xs text-amber-800 mb-1">
                  Example from Source
                </span>
                {detail.example}
              </div>
            )}
          </div>
        </div>

        {/* Footer info note */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium shrink-0 bg-slate-50/50">
          <span>Press Esc or click Close</span>
        </div>
      </aside>
    </>
  );
};
