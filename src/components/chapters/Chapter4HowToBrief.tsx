import React from 'react';
import { ConceptDetail } from '../../data/playbook';

interface Chapter4Props {
  pageKey: '4.1' | '4.2' | '4.3';
  activeDetailId?: string | null;
  onSelectConcept: (detail: ConceptDetail) => void;
  details?: Record<string, ConceptDetail>;
}

export const Chapter4HowToBrief: React.FC<Chapter4Props> = ({
  pageKey,
  activeDetailId,
  onSelectConcept,
  details = {},
}) => {
  // ----------------------------------------------------
  // 4.1: ASO BRIEF
  // ----------------------------------------------------
  if (pageKey === '4.1') {
    const uaFields = [
      { id: 'strategic-context', num: '01', name: 'Strategic Context', desc: 'Goal, Audience & Hypothesis' },
      { id: 'planned-change', num: '02', name: 'Planned Change', desc: 'Discover, Iteration, or Multiply mode' },
      { id: 'angle-product', num: '03', name: 'Angle & Product', desc: 'Truth boundaries and verified capabilities' },
      { id: 'job-of-set', num: '04', name: 'Job of the Set', desc: 'Order of benefits across screenshots' },
      { id: 'delivery-boundaries', num: '05', name: 'Boundaries & Freedom', desc: 'Delivery deadline & creative freedom to explore' },
    ];

    const cpcFields = [
      { id: 'message-place', num: '01', name: 'Message & Place in Set', desc: 'One single takeaway per screenshot' },
      { id: 'words', num: '02', name: 'Words (Headline & Copy)', desc: 'Headline and supporting copy fitted to mobile size' },
      { id: 'visual-content', num: '03', name: 'Visual Content', desc: 'Character, action, proof, and emotion' },
      { id: 'first-attention', num: '04', name: 'First Attention', desc: 'What user notices first at mobile thumbnail scale' },
      { id: 'design-freedom', num: '05', name: 'Design Freedom', desc: 'Room for Production craft to create and polish' },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* UA DIRECTION */}
          <div className="border-2 border-blue-200 p-5 bg-blue-50/20">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
              UA Brief Responsibility
            </span>
            <h4 className="text-xl font-bold text-blue-950 uppercase mb-3">
              UA DIRECTION (STRATEGY & CONSTRAINTS)
            </h4>
            <div className="space-y-2.5">
              {uaFields.map((f) => {
                const isSelected = activeDetailId === f.id;
                const detail = details[f.id];
                return (
                  <div
                    key={f.id}
                    onClick={() => detail && onSelectConcept(detail)}
                    className={`p-3.5 border transition-all cursor-pointer flex items-center justify-between text-left ${
                      isSelected
                        ? 'border-blue-600 bg-blue-100/90 text-blue-950 ring-2 ring-blue-600 shadow-xs'
                        : 'border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-blue-800">{f.num}</span>
                        <span className="font-bold text-sm md:text-base text-slate-900">{f.name}</span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 mt-0.5 ml-5">{f.desc}</p>
                    </div>
                    {detail && (
                      <svg
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? 'text-blue-950 translate-x-0.5' : 'text-slate-400'
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
                );
              })}
            </div>
          </div>

          {/* CPC SPECIFICATION */}
          <div className="border-2 border-purple-200 p-5 bg-purple-50/20">
            <span className="text-xs font-bold text-purple-800 uppercase tracking-wider block mb-1">
              CPC Creative Responsibility
            </span>
            <h4 className="text-xl font-bold text-purple-950 uppercase mb-3">
              CPC SCREENSHOT PLAN (PER SCREENSHOT)
            </h4>
            <div className="space-y-2.5">
              {cpcFields.map((f) => {
                const isSelected = activeDetailId === f.id;
                const detail = details[f.id];
                return (
                  <div
                    key={f.id}
                    onClick={() => detail && onSelectConcept(detail)}
                    className={`p-3.5 border transition-all cursor-pointer flex items-center justify-between text-left ${
                      isSelected
                        ? 'border-purple-600 bg-purple-100/90 text-purple-950 ring-2 ring-purple-600 shadow-xs'
                        : 'border-purple-200 bg-white hover:border-purple-400 hover:bg-purple-50/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-purple-800">{f.num}</span>
                        <span className="font-bold text-sm md:text-base text-slate-900">{f.name}</span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 mt-0.5 ml-5">{f.desc}</p>
                    </div>
                    {detail && (
                      <svg
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? 'text-purple-950 translate-x-0.5' : 'text-slate-400'
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
                );
              })}
            </div>
          </div>
        </div>

        {/* SUPPORTING RULES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => details['set-readability'] && onSelectConcept(details['set-readability'])}
            className={`p-4 border-2 transition-all cursor-pointer text-left ${
              activeDetailId === 'set-readability'
                ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600'
                : 'border-slate-200 bg-white hover:border-slate-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-slate-900 uppercase">
                Supporting Rule: Read the Full Set Together
              </span>
              {details['set-readability'] && (
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Read opening screenshots together: can users tell what the app offers and why they want it? If copy changes, check the visual again.
            </p>
          </div>

          <div
            onClick={() => details['plan-set-first'] && onSelectConcept(details['plan-set-first'])}
            className={`p-4 border-2 transition-all cursor-pointer text-left ${
              activeDetailId === 'plan-set-first'
                ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600'
                : 'border-slate-200 bg-white hover:border-slate-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-slate-900 uppercase">
                Plan Set First (Avoid Feature Lists)
              </span>
              {details['plan-set-first'] && (
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Plan the sequence of benefits across the entire set before detailing individual frames. A feature list is not a screenshot plan.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 4.2: VIDEO ADS BRIEF (INTERACTION ARCHITECTURE REBUILD)
  // ----------------------------------------------------
  if (pageKey === '4.2') {
    const beats = [
      {
        id: 'hook-beat',
        num: '01',
        name: 'HOOK',
        role: 'Create expectation',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ),
        color: 'border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50/20',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs',
        iconBg: 'bg-blue-100 border-blue-200',
        badgeColor: 'text-blue-800',
      },
      {
        id: 'connection-beat',
        num: '02',
        name: 'CONNECTION TO APP',
        role: 'Introduce product',
        icon: (
          <svg className="w-5 h-5 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        color: 'border-amber-200 bg-white hover:border-amber-400 hover:bg-amber-50/20',
        activeColor: 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600 shadow-xs',
        iconBg: 'bg-amber-100 border-amber-200',
        badgeColor: 'text-amber-800',
      },
      {
        id: 'demo-payoff-beat',
        num: '03',
        name: 'DEMONSTRATION / PAYOFF',
        role: 'Deliver proof',
        icon: (
          <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        color: 'border-purple-200 bg-white hover:border-purple-400 hover:bg-purple-50/20',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs',
        iconBg: 'bg-purple-100 border-purple-200',
        badgeColor: 'text-purple-800',
      },
      {
        id: 'close-beat',
        num: '04',
        name: 'CLOSE / NEXT ACTION',
        role: 'Clear action',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ),
        color: 'border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/20',
        activeColor: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs',
        iconBg: 'bg-emerald-100 border-emerald-200',
        badgeColor: 'text-emerald-800',
      },
    ];

    const isBuildableSelected = activeDetailId === 'buildable-scenes';
    const isFlexibilitySelected = activeDetailId === 'beat-flexibility';

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        {/* PRIMARY: FOUR CORE STORY BEATS */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Four Core Story Beats
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {beats.map((b) => {
              const isSelected = activeDetailId === b.id;
              const detail = details[b.id];
              return (
                <div
                  key={b.num}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? b.activeColor : b.color
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 border shrink-0 ${b.iconBg}`}>
                        {b.icon}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${b.badgeColor}`}>
                        Beat {b.num}
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {b.name}
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 mt-1.5 leading-snug">
                      {b.role}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-end">
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
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING OBJECTS */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Supporting Specifications
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* MAKE EACH SCENE BUILDABLE */}
            <div
              onClick={() => details['buildable-scenes'] && onSelectConcept(details['buildable-scenes'])}
              className={`p-4 border-2 transition-all cursor-pointer text-left flex items-center justify-between ${
                isBuildableSelected
                  ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/20'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Scene Specification
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  MAKE EACH SCENE BUILDABLE
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Define See, Hear/Read, and Purpose for Production.
                </p>
              </div>
              {details['buildable-scenes'] && (
                <svg
                  className={`w-4 h-4 shrink-0 transition-transform ml-3 ${
                    isBuildableSelected ? 'text-blue-900 translate-x-0.5' : 'text-slate-400'
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

            {/* BEATS ARE NOT A RIGID 4-SCENE FORMAT */}
            <div
              onClick={() => details['beat-flexibility'] && onSelectConcept(details['beat-flexibility'])}
              className={`p-4 border-2 transition-all cursor-pointer text-left flex items-center justify-between ${
                isFlexibilitySelected
                  ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/20'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Structural Flexibility
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  BEATS ARE NOT A RIGID 4-SCENE FORMAT
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Beats can combine or reorder when the idea calls for it.
                </p>
              </div>
              {details['beat-flexibility'] && (
                <svg
                  className={`w-4 h-4 shrink-0 transition-transform ml-3 ${
                    isFlexibilitySelected ? 'text-blue-900 translate-x-0.5' : 'text-slate-400'
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
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 4.3: IDEAS & REFERENCES
  // ----------------------------------------------------
  if (pageKey === '4.3') {
    const cycle = [
      { id: 'step-explore', step: '01', title: 'Explore Widely', desc: 'Collect ads, memes, films, trends, and real user behavior.' },
      { id: 'step-understand', step: '02', title: 'Understand Why', desc: 'Identify what makes it work (structure, emotion, surprise).' },
      { id: 'step-create', step: '03', title: 'Create Options', desc: 'Apply the underlying structure to our audience & app.' },
      { id: 'step-refine', step: '04', title: 'Refine Ideas', desc: 'Test against Section 3 criteria and product truth limits.' },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        {/* PRIMARY: 4-STEP REFERENCE CYCLE */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Reference Cycle (Borrow Structure, Not Just Surface)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cycle.map((c, idx) => {
              const isSelected = activeDetailId === c.id;
              const detail = details[c.id];
              return (
                <div
                  key={c.step}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-4 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-blue-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-400">STEP {c.step}</span>
                      <div className="flex items-center gap-1">
                        {idx < cycle.length - 1 && (
                          <span className="text-xs text-blue-500 font-bold hidden lg:inline mr-1">→</span>
                        )}
                        {detail && (
                          <svg
                            className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                              isSelected ? 'text-blue-950 translate-x-0.5' : 'text-slate-400'
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
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{c.title}</h4>
                  </div>
                  <p className="text-sm text-slate-700 mt-2 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING: SEARCH FORMULA & INSTRUCTION BESIDE REFERENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => details['search-formula'] && onSelectConcept(details['search-formula'])}
            className={`p-4 border-2 transition-all cursor-pointer text-left ${
              activeDetailId === 'search-formula'
                ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600'
                : 'border-slate-200 bg-white hover:border-slate-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-slate-900 uppercase">
                Search Formula (Name Before Searching)
              </span>
              {details['search-formula'] && (
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
            <p className="text-sm font-mono bg-slate-50 p-2.5 border border-slate-200 text-slate-900 my-2">
              [component] + [communication job] + [context / style]
            </p>
            <p className="text-xs md:text-sm text-slate-600">
              e.g. “before after comparison layout”, “reaction reveal video hook”, “step by step proof demo”.
            </p>
          </div>

          <div
            onClick={() => details['reference-instruction'] && onSelectConcept(details['reference-instruction'])}
            className={`p-4 border-2 transition-all cursor-pointer text-left ${
              activeDetailId === 'reference-instruction'
                ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600'
                : 'border-slate-200 bg-white hover:border-slate-400'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-slate-900 uppercase">
                Instruction Beside Every Reference
              </span>
              {details['reference-instruction'] && (
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
            <div className="text-sm text-slate-700 space-y-1">
              <div>• <strong className="text-slate-900">Use for:</strong> which component</div>
              <div>• <strong className="text-slate-900">Borrow:</strong> specific structure or pacing</div>
              <div>• <strong className="text-slate-900">Adapt:</strong> what changes for our app & user</div>
              <div>• <strong className="text-slate-900">Keep:</strong> elements fixed by hypothesis</div>
            </div>
            <p className="text-xs text-rose-700 font-semibold mt-2">
              Avoid saying “make something like this” without explaining the choice!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
