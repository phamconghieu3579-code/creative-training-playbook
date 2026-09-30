import React from 'react';
import { ConceptDetail } from '../../data/playbook';

interface Chapter2Props {
  pageKey: '2.1' | '2.2' | '2.3' | '2.4' | '2.5' | '2.6' | '2.7';
  activeDetailId?: string | null;
  onSelectConcept: (detail: ConceptDetail) => void;
  details?: Record<string, ConceptDetail>;
}

export const Chapter2Understand: React.FC<Chapter2Props> = ({
  pageKey,
  activeDetailId,
  onSelectConcept,
  details = {},
}) => {
  // ----------------------------------------------------
  // 2.1: CREATIVE SYSTEM (SEMANTIC ARCHITECTURE)
  // ----------------------------------------------------
  if (pageKey === '2.1') {
    const isStrategySelected = activeDetailId === 'strategy';
    const isAngleSelected = activeDetailId === 'angle';
    const isProductSelected = activeDetailId === 'product';
    const isContentStorySelected = activeDetailId === 'content-storytelling';
    const isProductionSelected = activeDetailId === 'production';

    return (
      <div className="w-full max-w-5xl mx-auto py-2 flex flex-col items-center space-y-4">
        {/* OVERARCHING: STRATEGY */}
        <div
          onClick={() => details.strategy && onSelectConcept(details.strategy)}
          className={`w-full max-w-3xl p-5 border-2 transition-all cursor-pointer text-left ${
            isStrategySelected
              ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
              : 'border-blue-300 bg-blue-50/70 hover:border-blue-500 hover:bg-blue-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
              Overarching Direction · Goal · Audience · Hypothesis
            </span>
            <span className="text-xs font-semibold text-blue-700">Guides the whole system →</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-blue-950 uppercase">
            STRATEGY
          </h3>
          <p className="text-sm md:text-base text-slate-700 mt-1 leading-relaxed">
            Guides decisions across the whole creative.
          </p>
        </div>

        {/* CONNECTOR LINES FROM STRATEGY TO 3 BRANCHES */}
        <div className="w-full max-w-3xl flex flex-col items-center py-0.5" aria-hidden="true">
          <div className="w-0.5 h-4 bg-slate-300" />
          <div className="w-[78%] h-0.5 bg-slate-300" />
          <div className="w-[78%] flex justify-between">
            <div className="w-0.5 h-3 bg-slate-300" />
            <div className="w-0.5 h-3 bg-slate-300" />
            <div className="w-0.5 h-3 bg-slate-300" />
          </div>
          <svg className="w-full max-w-[80%] h-3 text-slate-400" viewBox="0 0 300 12" fill="none">
            <path d="M5 2 L5 10 M150 2 L150 10 M295 2 L295 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <polygon points="2,8 5,12 8,8" fill="currentColor" />
            <polygon points="147,8 150,12 153,8" fill="currentColor" />
            <polygon points="292,8 295,12 298,8" fill="currentColor" />
          </svg>
        </div>

        {/* THREE BRANCHES: ANGLE, CONTENT & STORYTELLING, PRODUCTION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* 1. ANGLE */}
          <div
            onClick={() => details.angle && onSelectConcept(details.angle)}
            className={`p-5 border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
              isAngleSelected
                ? 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600 shadow-xs'
                : 'border-amber-300 bg-amber-50/50 hover:border-amber-500 hover:bg-amber-50'
            }`}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                Audience Perspective
              </span>
              <h4 className="text-xl font-bold tracking-tight text-amber-950 uppercase">
                ANGLE
              </h4>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                Defines why this audience should care.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/80 text-xs font-semibold text-amber-900">
              User Relevance
            </div>
          </div>

          {/* 2. CONTENT & STORYTELLING */}
          <div
            onClick={() => details['content-storytelling'] && onSelectConcept(details['content-storytelling'])}
            className={`p-5 border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
              isContentStorySelected
                ? 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs'
                : 'border-purple-300 bg-purple-50/50 hover:border-purple-500 hover:bg-purple-50'
            }`}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-800 block mb-1">
                The Bridge
              </span>
              <h4 className="text-xl font-bold tracking-tight text-purple-950 uppercase">
                CONTENT & STORYTELLING
              </h4>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                Connects audience relevance with product truth.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-200/80 text-xs font-semibold text-purple-900">
              Relevance + Product Truth
            </div>
          </div>

          {/* 3. PRODUCTION */}
          <div
            onClick={() => details.production && onSelectConcept(details.production)}
            className={`p-5 border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
              isProductionSelected
                ? 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs'
                : 'border-emerald-300 bg-emerald-50/50 hover:border-emerald-500 hover:bg-emerald-50'
            }`}
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Visual & Audio Delivery
              </span>
              <h4 className="text-xl font-bold tracking-tight text-emerald-950 uppercase">
                PRODUCTION
              </h4>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                Makes the communication visible, audible and clear.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200/80 text-xs font-semibold text-emerald-900">
              Clear Presentation
            </div>
          </div>
        </div>

        {/* CONNECTOR: PRODUCT INPUT TO CONTENT & STORYTELLING */}
        <div className="w-full max-w-md flex flex-col items-center pt-1" aria-hidden="true">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            <span>↑ Supplies story material & sets truth boundary ↑</span>
          </div>
          <div className="w-0.5 h-3 bg-slate-400" />
        </div>

        {/* SEPARATE INPUT: PRODUCT (TRUTH & CAPABILITY) */}
        <div
          onClick={() => details.product && onSelectConcept(details.product)}
          className={`w-full max-w-xl p-4 sm:p-5 border-2 transition-all cursor-pointer text-left ${
            isProductSelected
              ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
              : 'border-slate-300 bg-slate-50/80 hover:border-slate-500 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Separate Product Input · Product Truth
            </span>
            <span className="text-xs font-semibold text-slate-600">Features · UX/UI · Proof</span>
          </div>
          <h4 className="text-xl font-bold tracking-tight text-slate-900 uppercase">
            PRODUCT (TRUTH & CAPABILITY)
          </h4>
          <p className="text-sm text-slate-700 mt-1 leading-relaxed">
            Supplies truthful capabilities, proof and boundaries.
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2.2: STRATEGY & PRODUCT
  // ----------------------------------------------------
  if (pageKey === '2.2') {
    const strategyItems = [
      { id: 'goal', label: 'Goal', question: 'What commercial or learning target do we want this creative to achieve?' },
      { id: 'audience', label: 'Audience', question: 'Who will see it, what matters to them, and in what context?' },
      { id: 'hypothesis', label: 'Hypothesis', question: 'What do we believe could work better for these users, and why?' },
    ];

    const productItems = [
      { id: 'features', label: 'Features', question: 'What users can actually do with the app.' },
      { id: 'ux-ui', label: 'UX / UI', question: 'The real screens, interactions, and controls used to do it.' },
      { id: 'product-proof', label: 'Product Proof', question: 'Real outputs or demonstrations that verify the capability.' },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-5">
        {/* HYPOTHESIS BANNER */}
        <div className="p-4 bg-blue-50/70 border-2 border-blue-200 text-blue-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="font-bold uppercase tracking-wider text-xs text-blue-700 mr-2 block sm:inline">
              Hypothesis Formula:
            </span>
            <span className="text-sm md:text-base font-medium">
              “For [audience], we believe [change] may improve [outcome], because [reason].”
            </span>
          </div>
          <span className="text-xs text-blue-800 font-bold shrink-0">Product defines truth</span>
        </div>

        {/* TWO-COLUMN MODEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* STRATEGY */}
          <div className="border-2 border-blue-200 p-6 bg-blue-50/30">
            <div className="mb-4 pb-2 border-b border-blue-200">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Intent & Target
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-blue-950 uppercase mt-0.5">
                STRATEGY
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Defines the goal and guides downstream choices.
              </p>
            </div>

            <div className="space-y-3">
              {strategyItems.map((item) => {
                const isSelected = activeDetailId === item.id;
                const detail = details[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => detail && onSelectConcept(detail)}
                    className={`p-4 border transition-all text-left flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 bg-blue-100/90 text-blue-950 ring-2 ring-blue-600'
                        : 'border-slate-200 bg-white text-slate-900 hover:border-blue-400'
                    }`}
                  >
                    <div>
                      <h4 className="text-lg font-bold">{item.label}</h4>
                      <p className="text-sm text-slate-700 mt-0.5 leading-snug">{item.question}</p>
                    </div>
                    {detail && (
                      <svg
                        className={`w-4 h-4 shrink-0 transition-transform ml-2 ${
                          isSelected ? 'text-blue-900 translate-x-0.5' : 'text-slate-400'
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

          {/* PRODUCT */}
          <div className="border-2 border-slate-200 p-6 bg-slate-50/40">
            <div className="mb-4 pb-2 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                Truth & Limits
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 uppercase mt-0.5">
                PRODUCT
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Supplies material for story and sets truthful boundaries.
              </p>
            </div>

            <div className="space-y-3">
              {productItems.map((item) => {
                const isSelected = activeDetailId === item.id;
                const detail = details[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => detail && onSelectConcept(detail)}
                    className={`p-4 border transition-all text-left flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-slate-600 bg-slate-100 text-slate-950 ring-2 ring-slate-600'
                        : 'border-slate-200 bg-white text-slate-900 hover:border-slate-400'
                    }`}
                  >
                    <div>
                      <h4 className="text-lg font-bold">{item.label}</h4>
                      <p className="text-sm text-slate-700 mt-0.5 leading-snug">{item.question}</p>
                    </div>
                    {detail && (
                      <svg
                        className={`w-4 h-4 shrink-0 transition-transform ml-2 ${
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2.3: ANGLE
  // ----------------------------------------------------
  if (pageKey === '2.3') {
    const angleComponents = [
      { id: 'need-motivation', title: 'Need or Motivation', question: 'What does the user want to achieve, feel, express, or solve?' },
      { id: 'use-situation', title: 'Use Situation', question: 'When does that motivation become relevant?' },
      { id: 'benefit-highlight', title: 'Benefit to Highlight', question: 'Which value of the app connects to that motivation?' },
    ];

    const distinctionCards = [
      {
        id: 'feature',
        term: 'FEATURE',
        answers: 'What can the app do?',
        explanation: 'A functional capability or tool inside the app.',
        example: 'e.g. Generate a kissing video from photos (AI Kiss).',
        color: 'border-slate-300 bg-white',
        activeColor: 'border-slate-700 bg-slate-100 ring-2 ring-slate-700',
      },
      {
        id: 'benefit',
        term: 'BENEFIT',
        answers: 'What does this let the user do?',
        explanation: 'The tangible result, personal relief, or positive outcome experienced.',
        example: 'e.g. See a heartwarming moment with someone far away or celebrate an anniversary.',
        color: 'border-blue-300 bg-blue-50/50',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600',
      },
      {
        id: 'angle',
        term: 'ANGLE',
        answers: 'Why does this user care right now?',
        explanation: 'The combination of Need + Situation + Benefit that forms the reason to care.',
        example: 'e.g. Long-distance couples missing each other on Valentine’s Day creating a shared memory.',
        color: 'border-amber-300 bg-amber-50/60 ring-1 ring-amber-300',
        activeColor: 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        {/* 3 ANGLE COMPONENTS */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three Components That Form an Angle
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {angleComponents.map((c, i) => {
              const isSelected = activeDetailId === c.id;
              const detail = details[c.id];
              return (
                <div
                  key={c.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-4 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600'
                      : 'border-slate-200 bg-white hover:border-amber-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                        Component 0{i + 1}
                      </span>
                      {detail && (
                        <svg
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isSelected ? 'text-amber-900 translate-x-0.5' : 'text-slate-400'
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
                    <h4 className="text-lg font-bold text-slate-900">{c.title}</h4>
                    <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">{c.question}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FEATURE != BENEFIT != ANGLE */}
        <div className="pt-2 border-t border-slate-200">
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Core Distinction: Feature ≠ Benefit ≠ Angle
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {distinctionCards.map((d) => {
              const isSelected = activeDetailId === d.id;
              const detail = details[d.id];
              return (
                <div
                  key={d.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? d.activeColor : `${d.color} hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-slate-900 tracking-tight">{d.term}</h4>
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
                    <div className="text-xs font-bold text-slate-600 uppercase mt-1">{d.answers}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2.4: CONTENT COMPONENTS (EXACT 6 SOURCE COMPONENTS)
  // ----------------------------------------------------
  if (pageKey === '2.4') {
    const contentComponents = [
      {
        id: 'message',
        num: '01',
        name: 'Message',
        icon: (
          <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        ),
      },
      {
        id: 'character',
        num: '02',
        name: 'Character',
        icon: (
          <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
      },
      {
        id: 'situation-action',
        num: '03',
        name: 'Situation and Action',
        icon: (
          <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
      {
        id: 'proof',
        num: '04',
        name: 'Proof',
        icon: (
          <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        id: 'copy-dialogue',
        num: '05',
        name: 'Copy and Dialogue',
        icon: (
          <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        ),
      },
      {
        id: 'emotion',
        num: '06',
        name: 'Emotion',
        icon: (
          <svg className="w-5 h-5 text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              The 6 Content Components (Section 2)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentComponents.map((comp) => {
              const isSelected = activeDetailId === comp.id;
              const detail = details ? details[comp.id] : undefined;

              return (
                <div
                  key={comp.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${
                    isSelected
                      ? 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs'
                      : 'border-purple-200 bg-white hover:border-purple-400 hover:bg-purple-50/30'
                  }`}
                >
                  <div className="p-3 bg-purple-100/60 border border-purple-200 shrink-0">
                    {comp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-purple-800 uppercase tracking-wider block mb-0.5">
                      {comp.num}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight truncate">
                      {comp.name}
                    </h4>
                  </div>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-purple-700 translate-x-0.5' : 'text-slate-400'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING GUIDANCE */}
        <div className="pt-2 border-t border-slate-200">
          <div className="p-4 border-2 border-slate-200 bg-slate-50/70 text-sm md:text-base text-slate-700 leading-relaxed">
            • <strong className="text-slate-900">Connecting Relevance to Capability:</strong> Content components supply the tangible story material and evidence that connect user motivation with product truth.
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2.5: STORYTELLING COMPONENTS (EXACT 4 SOURCE COMPONENTS)
  // ----------------------------------------------------
  if (pageKey === '2.5') {
    const storytellingComponents = [
      {
        id: 'opening',
        num: '01',
        name: 'Opening',
        icon: (
          <svg className="w-5 h-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ),
      },
      {
        id: 'sequence-connection',
        num: '02',
        name: 'Sequence and Connection',
        icon: (
          <svg className="w-5 h-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ),
      },
      {
        id: 'payoff',
        num: '03',
        name: 'Payoff',
        icon: (
          <svg className="w-5 h-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
      },
      {
        id: 'next-action',
        num: '04',
        name: 'Next Action',
        icon: (
          <svg className="w-5 h-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        ),
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              The 4 Storytelling Components (Section 2)
            </span>
          </div>

          {/* 3-COLUMN CANONICAL GRID: 01 02 03 / 04 (LEFT-ALIGNED) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {storytellingComponents.map((comp) => {
              const isSelected = activeDetailId === comp.id;
              const detail = details ? details[comp.id] : undefined;

              return (
                <div
                  key={comp.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-100/90 ring-2 ring-indigo-600 shadow-xs'
                      : 'border-indigo-200 bg-white hover:border-indigo-400 hover:bg-indigo-50/30'
                  }`}
                >
                  <div className="p-3 bg-indigo-100/60 border border-indigo-200 shrink-0">
                    {comp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-indigo-800 uppercase tracking-wider block mb-0.5">
                      {comp.num}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight truncate">
                      {comp.name}
                    </h4>
                  </div>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-indigo-700 translate-x-0.5' : 'text-slate-400'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING GUIDANCE */}
        <div className="pt-2 border-t border-slate-200 space-y-3">
          <div className="p-4 border-2 border-slate-200 bg-slate-50/70 text-sm md:text-base text-slate-700 leading-relaxed">
            • <strong className="text-slate-900">Order of Attention:</strong> Storytelling establishes the sequence of revelation—video guides attention over time, while ASO guides attention across screenshots.
          </div>

          {/* PRESERVED: COPY CHANGE → VISUAL CHECK FRAMEWORK */}
          <div
            onClick={() => details['copy-visual-check'] && onSelectConcept(details['copy-visual-check'])}
            className={`p-4 border-2 transition-all cursor-pointer text-left ${
              activeDetailId === 'copy-visual-check'
                ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-600'
                : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50/60'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-wider">
                Supporting Framework
              </span>
              {details['copy-visual-check'] && (
                <svg
                  className="w-4 h-4 text-slate-400 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Copy Change → Visual Check
            </h4>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              When copy changes, always check whether the visual still supports the intended message and fits the layout.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2.6: ASO DESIGN COMPONENTS (CANONICAL 9 COMPONENTS)
  // ----------------------------------------------------
  if (pageKey === '2.6') {
    const asoComponents = [
      {
        id: 'character',
        num: '01',
        name: 'Character',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
      },
      {
        id: 'app-proof-visuals',
        num: '02',
        name: 'App and Proof Visuals',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        id: 'text-treatment',
        num: '03',
        name: 'Text Treatment',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        ),
      },
      {
        id: 'layout',
        num: '04',
        name: 'Layout',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
          </svg>
        ),
      },
      {
        id: 'visual-hierarchy',
        num: '05',
        name: 'Visual Hierarchy',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 10h12M3 16h6" />
          </svg>
        ),
      },
      {
        id: 'color-contrast',
        num: '06',
        name: 'Color and Contrast',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        ),
      },
      {
        id: 'setting-background',
        num: '07',
        name: 'Setting and Background',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        id: 'graphics-effects',
        num: '08',
        name: 'Graphics and Effects',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
      },
      {
        id: 'visual-style',
        num: '09',
        name: 'Visual Style',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              The 9 Visual Components of ASO Design (Section 2)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {asoComponents.map((comp) => {
              const isSelected = activeDetailId === comp.id;
              const detail = details ? details[comp.id] : undefined;

              return (
                <div
                  key={comp.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs'
                      : 'border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/30'
                  }`}
                >
                  <div className="p-3 bg-emerald-100/60 border border-emerald-200 shrink-0">
                    {comp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">
                      {comp.num}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight truncate">
                      {comp.name}
                    </h4>
                  </div>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-emerald-700 translate-x-0.5' : 'text-slate-400'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING NOTE */}
        <div className="pt-2 border-t border-slate-200">
          <div className="p-4 border-2 border-slate-200 bg-slate-50/70 text-sm md:text-base text-slate-700 leading-relaxed">
            • <strong className="text-slate-900">Evaluate at Store Scale:</strong> Always evaluate screenshots at actual phone viewing size to ensure reading hierarchy, typography, and proof remain clear.
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 2.7: VIDEO PRODUCTION COMPONENTS (NORMALIZED 3-COL GRID: 3 / 3 / 3 / 1)
  // ----------------------------------------------------
  if (pageKey === '2.7') {
    const videoComponents = [
      {
        id: 'character-performance',
        num: '01',
        name: 'Character and Performance',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        id: 'setting-props',
        num: '02',
        name: 'Setting and Props',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
      },
      {
        id: 'app-proof-footage',
        num: '03',
        name: 'App and Proof Footage',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        id: 'shots-framing',
        num: '04',
        name: 'Shots and Framing',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
      {
        id: 'text-graphics',
        num: '05',
        name: 'Text and Graphics',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        ),
      },
      {
        id: 'editing-pacing',
        num: '06',
        name: 'Editing and Pacing',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        id: 'motion-transitions',
        num: '07',
        name: 'Motion and Transitions',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ),
      },
      {
        id: 'voice',
        num: '08',
        name: 'Voice',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        ),
      },
      {
        id: 'music-sound-effects',
        num: '09',
        name: 'Music and Sound Effects',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        ),
      },
      {
        id: 'visual-style',
        num: '10',
        name: 'Visual Style',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        ),
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              The 10 Components of Video Ads Production (Section 2)
            </span>
          </div>

          {/* NORMALIZED 3-COL CANONICAL GRID: 01-03 / 04-06 / 07-09 / 10 (LEFT-ALIGNED) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoComponents.map((comp) => {
              const isSelected = activeDetailId === comp.id;
              const detail = details ? details[comp.id] : undefined;

              return (
                <div
                  key={comp.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${
                    isSelected
                      ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                      : 'border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50/30'
                  }`}
                >
                  <div className="p-3 bg-blue-100/60 border border-blue-200 shrink-0">
                    {comp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-0.5">
                      {comp.num}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight truncate">
                      {comp.name}
                    </h4>
                  </div>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-blue-700 translate-x-0.5' : 'text-slate-400'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING NOTE */}
        <div className="pt-2 border-t border-slate-200">
          <div className="p-4 border-2 border-slate-200 bg-slate-50/70 text-sm md:text-base text-slate-700 leading-relaxed">
            • <strong className="text-slate-900">Execution Discipline:</strong> Video production makes communication visible, audible, and clear over time. Proof needs sufficient screen time to register.
          </div>
        </div>
      </div>
    );
  }

  return null;
};
