import React from 'react';
import { ConceptDetail } from '../../data/playbook';

interface Chapter1Props {
  activeDetailId?: string | null;
  onSelectConcept: (detail: ConceptDetail) => void;
  details?: Record<string, ConceptDetail>;
}

export const Chapter1WhySession: React.FC<Chapter1Props> = ({
  activeDetailId,
  onSelectConcept,
  details = {},
}) => {
  const pillars = [
    {
      id: 'understand',
      number: '01',
      title: 'Understand a Creative',
      action: 'Identify components',
      summary: 'Explain how they communicate a tangible benefit to users.',
      pastelBg: 'bg-blue-50/60 border-blue-200 hover:border-blue-400',
      activeBg: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600',
      tagColor: 'text-blue-700 bg-blue-100',
    },
    {
      id: 'choose',
      number: '02',
      title: 'Choose What to Test',
      action: 'Name the change',
      summary: 'Explain why, and explicitly identify what must stay the same.',
      pastelBg: 'bg-amber-50/60 border-amber-200 hover:border-amber-400',
      activeBg: 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600',
      tagColor: 'text-amber-800 bg-amber-100',
    },
    {
      id: 'brief',
      number: '03',
      title: 'Write a Clear Brief',
      action: 'Communicate hypothesis',
      summary: 'Direction for CPC, room for Production craft to create.',
      pastelBg: 'bg-purple-50/60 border-purple-200 hover:border-purple-400',
      activeBg: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600',
      tagColor: 'text-purple-800 bg-purple-100',
    },
    {
      id: 'feedback',
      number: '04',
      title: 'Review & Give Feedback',
      action: 'Verify delivery',
      summary: 'Check against brief and explain what needs improvement.',
      pastelBg: 'bg-emerald-50/60 border-emerald-200 hover:border-emerald-400',
      activeBg: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600',
      tagColor: 'text-emerald-800 bg-emerald-100',
    },
  ];

  const roles = [
    {
      id: 'ua-role',
      role: 'UA CONTRIBUTION',
      brings: 'Commercial target, audience context, and performance evidence from previous iterations.',
      color: 'border-l-4 border-l-blue-600 bg-blue-50/30 border border-slate-200',
    },
    {
      id: 'cpc-role',
      role: 'CPC CONTRIBUTION',
      brings: 'Angle, content components, and storytelling sequence that turn hypothesis into persuasive message.',
      color: 'border-l-4 border-l-purple-600 bg-purple-50/30 border border-slate-200',
    },
    {
      id: 'production-role',
      role: 'PRODUCTION CONTRIBUTION',
      brings: 'Visual asset execution through typography, pacing, layout, UI fidelity, and audio polish.',
      color: 'border-l-4 border-l-emerald-600 bg-emerald-50/30 border border-slate-200',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-2 md:py-3 space-y-6">
      {/* PRIMARY: WHAT SUCCESS LOOKS LIKE */}
      <div>
        <div className="mb-3">
          <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
            Four Core Success Outcomes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => {
            const isSelected = activeDetailId === p.id;
            const detail = details[p.id];
            return (
              <div
                key={p.id}
                onClick={() => detail && onSelectConcept(detail)}
                className={`text-left p-5 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected ? p.activeBg : `${p.pastelBg} bg-white`
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 ${p.tagColor}`}>
                      {p.number}
                    </span>
                    {detail && (
                      <svg
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? 'text-slate-900 translate-x-0.5' : 'text-slate-400'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {p.title}
                  </h4>
                  <div className="mt-1.5 text-sm font-semibold text-slate-800">
                    {p.action}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SUPPORTING: 3 CONTRIBUTIONS & SHARED LANGUAGE */}
      <div className="pt-3 border-t border-slate-200">
        <span className="text-sm font-bold tracking-wider text-slate-500 uppercase block mb-3">
          Shared Language Across Roles
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((r) => {
            const isSelected = activeDetailId === r.id;
            const detail = details[r.id];
            return (
              <div
                key={r.id}
                onClick={() => detail && onSelectConcept(detail)}
                className={`p-4 text-left transition-all cursor-pointer ${r.color} ${
                  isSelected ? 'ring-2 ring-blue-600 bg-white' : 'hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                    {r.role}
                  </span>
                  {detail && (
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-slate-900 translate-x-0.5' : 'text-slate-400'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
                <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed">
                  {r.brings}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
