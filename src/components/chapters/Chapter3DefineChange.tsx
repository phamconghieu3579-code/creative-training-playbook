import React from 'react';
import { ConceptDetail } from '../../data/playbook';

interface Chapter3Props {
  pageKey: '3.1' | '3.2' | '3.3' | '3.4' | '3.5' | '3.6' | '3.7' | '3.8';
  activeDetailId?: string | null;
  onSelectConcept: (detail: ConceptDetail) => void;
  details?: Record<string, ConceptDetail>;
}

export const Chapter3DefineChange: React.FC<Chapter3Props> = ({
  pageKey,
  activeDetailId,
  onSelectConcept,
  details = {},
}) => {
  // ----------------------------------------------------
  // 3.1: REVIEW ORDER
  // ----------------------------------------------------
  if (pageKey === '3.1') {
    const reviewSteps = [
      {
        id: 'angle-review',
        step: '1',
        title: 'ANGLE REVIEW',
        question: 'Are we giving these users a relevant reason to care?',
        note: 'Check motivation, situation, and benefit first. If reason to care is wrong, surface styling cannot save the asset.',
        color: 'border-blue-300 bg-blue-50/60 hover:border-blue-500',
        active: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600',
        badge: 'Step 1 · Fundamental',
      },
      {
        id: 'content-review',
        step: '2',
        title: 'CONTENT & STORYTELLING REVIEW',
        question: 'Are we choosing a convincing message, story, and proof for that reason?',
        note: 'Verify message, character, situation, and proof connect directly to Angle and make promise believable.',
        color: 'border-purple-300 bg-purple-50/60 hover:border-purple-500',
        active: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600',
        badge: 'Step 2 · Meaning',
      },
      {
        id: 'production-review',
        step: '3',
        title: 'PRODUCTION REVIEW',
        question: 'Could a different visual or audio treatment communicate that story more effectively?',
        note: 'Inspect focal point, readability, rhythm, and clarity. Review order, not a mandate to test every layer.',
        color: 'border-emerald-300 bg-emerald-50/60 hover:border-emerald-500',
        active: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600',
        badge: 'Step 3 · Execution',
      },
    ];

    const priorityRules = [
      {
        id: 'prioritize',
        label: 'PRIORITIZE',
        desc: 'Meaningfully different reason to care, message, story, proof, or reading path.',
        tag: 'Test First',
        border: 'border-emerald-300 bg-emerald-50/40 text-emerald-950',
      },
      {
        id: 'test-selectively',
        label: 'TEST SELECTIVELY',
        desc: 'Same idea, different treatment. You must be able to explain why it matters to this audience.',
        tag: 'Selective',
        border: 'border-amber-300 bg-amber-50/40 text-amber-950',
      },
      {
        id: 'do-not-test',
        label: 'DO NOT TEST SEPARATELY',
        desc: 'Cosmetic decoration, minor tweaks, or quality problems. Fix quality directly before testing!',
        tag: 'Fix Directly',
        border: 'border-rose-300 bg-rose-50/40 text-rose-950',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        {/* PRIMARY: THE 3-STEP REVIEW ORDER */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Order of Creative Review (Angle → Content & Storytelling → Production)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviewSteps.map((item, idx) => {
              const isSelected = activeDetailId === item.id;
              const detail = details[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? item.active : `${item.color} bg-white`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {item.badge}
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
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base font-semibold text-slate-800 mt-2 leading-snug">
                      {item.question}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING: 3 TEST PRIORITY RULES */}
        <div className="pt-3 border-t border-slate-200">
          <span className="text-sm font-bold tracking-wider text-slate-500 uppercase block mb-3">
            Test Priority Framework (Fix Quality Problems Directly Before Testing)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {priorityRules.map((rule) => {
              const isSelected = activeDetailId === rule.id;
              const detail = details[rule.id];
              return (
                <div
                  key={rule.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-4 border-2 text-left transition-all cursor-pointer ${rule.border} ${
                    isSelected ? 'ring-2 ring-blue-600 shadow-xs' : 'hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold tracking-tight">{rule.label}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold uppercase px-2 py-0.5 bg-white/90 border border-current">
                        {rule.tag}
                      </span>
                      {detail && (
                        <svg
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isSelected ? 'translate-x-0.5' : 'text-slate-400'
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
                  <p className="text-sm text-slate-700 leading-relaxed">{rule.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3.2: CHANGE THE ANGLE
  // ----------------------------------------------------
  if (pageKey === '3.2') {
    const angleExplorations = [
      {
        id: 'change-motivation',
        num: '01',
        title: 'CHANGE MOTIVATION',
        focus: 'Explore a different desire, problem, or emotional need the app addresses.',
        color: 'border-amber-300 bg-amber-50/50',
      },
      {
        id: 'change-situation',
        num: '02',
        title: 'CHANGE SITUATION',
        focus: 'Explore a different moment or context in which the benefit becomes relevant.',
        color: 'border-amber-300 bg-amber-50/50',
      },
      {
        id: 'change-benefit',
        num: '03',
        title: 'CHANGE BENEFIT TO HIGHLIGHT',
        focus: 'Explore a different value or outcome users gain from the app capability.',
        color: 'border-amber-300 bg-amber-50/50',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three Ways to Explore a Different Reason to Care
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {angleExplorations.map((item) => {
              const isSelected = activeDetailId === item.id;
              const detail = details[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600'
                      : `${item.color} bg-white hover:border-amber-500`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                        Variable {item.num}
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
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm md:text-base text-slate-700 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING: ANGLE CHANGE AFFECTS DOWNSTREAM */}
        <div
          onClick={() => details['angle-change-scope'] && onSelectConcept(details['angle-change-scope'])}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            activeDetailId === 'angle-change-scope'
              ? 'border-amber-600 bg-amber-50 ring-2 ring-amber-600'
              : 'border-slate-200 bg-slate-50/70 hover:border-amber-400'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-slate-900 uppercase">
              Downstream Impact Rule
            </span>
            {details['angle-change-scope'] && (
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
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Changing an Angle usually requires changes to message, character, situation, or proof. Keeping old visuals is appropriate only when they still support the new meaning.
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3.3: CHANGE CONTENT (EXACT 6 SOURCE CATEGORIES)
  // ----------------------------------------------------
  if (pageKey === '3.3') {
    const contentCategories = [
      {
        id: 'main-message',
        num: '01',
        name: 'Main Message',
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
        id: 'product-demonstration-proof',
        num: '04',
        name: 'Product Demonstration or Proof',
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
              The 6 Content Change Categories (Section 3)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentCategories.map((cat) => {
              const isSelected = activeDetailId === cat.id;
              const detail = details ? details[cat.id] : undefined;

              return (
                <div
                  key={cat.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${
                    isSelected
                      ? 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs'
                      : 'border-purple-200 bg-white hover:border-purple-400 hover:bg-purple-50/30'
                  }`}
                >
                  <div className="p-3 bg-purple-100/60 border border-purple-200 shrink-0">
                    {cat.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-purple-800 uppercase tracking-wider block mb-0.5">
                      {cat.num}
                    </span>
                    <h4 className="text-base md:text-[17px] font-bold text-slate-900 tracking-tight leading-snug">
                      {cat.name}
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
          <div className="p-4 border-2 border-slate-200 bg-slate-50/70 text-sm md:text-base text-slate-700 leading-relaxed space-y-2">
            <div>
              • <strong className="text-slate-900">Prioritization Rule:</strong> Prioritize when the change creates a distinct message, story, or reason to believe the promise.
            </div>
            <div>
              • <strong className="text-slate-900">Check Angle Relationship:</strong> Check the Angle again when changing these components. If the new story gives users a different reason to want the app, the change also reaches the Angle.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3.4: CHANGE STORYTELLING (EXACT 3 SOURCE QUESTIONS)
  // ----------------------------------------------------
  if (pageKey === '3.4') {
    const storytellingQuestions = [
      {
        id: 'notice-first',
        num: '01',
        name: 'What do users notice first?',
        icon: (
          <svg className="w-5 h-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        ),
      },
      {
        id: 'understand-it',
        num: '02',
        name: 'How do they understand it?',
        icon: (
          <svg className="w-5 h-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ),
      },
      {
        id: 'promise-believable',
        num: '03',
        name: 'What makes the promise believable?',
        icon: (
          <svg className="w-5 h-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              The 3 Storytelling Questions (Section 3)
            </span>
          </div>

          {/* ONE ROW OF THREE CANONICAL COMPONENT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {storytellingQuestions.map((q) => {
              const isSelected = activeDetailId === q.id;
              const detail = details ? details[q.id] : undefined;

              return (
                <div
                  key={q.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-100/90 ring-2 ring-indigo-600 shadow-xs'
                      : 'border-indigo-200 bg-white hover:border-indigo-400 hover:bg-indigo-50/30'
                  }`}
                >
                  <div className="p-3 bg-indigo-100/60 border border-indigo-200 shrink-0">
                    {q.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-indigo-800 uppercase tracking-wider block mb-0.5">
                      {q.num}
                    </span>
                    <h4 className="text-base md:text-[17px] font-bold text-slate-900 tracking-tight leading-snug">
                      {q.name}
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

        {/* SUPPORTING: STORY SEQUENCE VS QUALITY REQUIREMENT */}
        <div className="pt-2 border-t border-slate-200">
          <div className="p-4 border-2 border-slate-200 bg-slate-50/70 text-sm md:text-base text-slate-700 leading-relaxed">
            • <strong className="text-slate-900">Story Sequence vs. Quality Fix:</strong> Moving proof earlier tests how the story unfolds. Ensuring proof is visible long enough to understand is a quality requirement to fix directly before testing.
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3.5: CHANGE ASO DESIGN (NORMALIZED 3-COL GRID: 3 / 3 / 2)
  // ----------------------------------------------------
  if (pageKey === '3.5') {
    const asoCategories = [
      {
        id: 'character-treatment',
        num: '01',
        name: 'Character Treatment',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
      },
      {
        id: 'layout-visual-hierarchy',
        num: '02',
        name: 'Layout and Visual Hierarchy',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
          </svg>
        ),
      },
      {
        id: 'app-result-presentation',
        num: '03',
        name: 'App and Result Presentation',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        id: 'color-contrast',
        num: '04',
        name: 'Color and Contrast',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        ),
      },
      {
        id: 'text-treatment',
        num: '05',
        name: 'Text Treatment',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        ),
      },
      {
        id: 'background-setting',
        num: '06',
        name: 'Background and Setting',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        id: 'supporting-graphics-effects',
        num: '07',
        name: 'Supporting Graphics and Effects',
        icon: (
          <svg className="w-5 h-5 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
      },
      {
        id: 'visual-style',
        num: '08',
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
              The 8 ASO Design Change Categories (Section 3)
            </span>
          </div>

          {/* NORMALIZED 3-COL CANONICAL GRID: 01-03 / 04-06 / 07-08 (LEFT-ALIGNED) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {asoCategories.map((cat) => {
              const isSelected = activeDetailId === cat.id;
              const detail = details ? details[cat.id] : undefined;

              return (
                <div
                  key={cat.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${
                    isSelected
                      ? 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs'
                      : 'border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/30'
                  }`}
                >
                  <div className="p-3 bg-emerald-100/60 border border-emerald-200 shrink-0">
                    {cat.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">
                      {cat.num}
                    </span>
                    <h4 className="text-base md:text-[17px] font-bold text-slate-900 tracking-tight leading-snug">
                      {cat.name}
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
            • <strong className="text-slate-900">Layout Shapes Visual Storytelling:</strong> Layout deserves attention because it shapes visual storytelling. The same words and images can communicate differently when the focal point or reading path changes.
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3.6: CHANGE VIDEO PRODUCTION (EXACT 9 SOURCE CATEGORIES)
  // ----------------------------------------------------
  if (pageKey === '3.6') {
    const videoCategories = [
      {
        id: 'character-treatment-performance',
        num: '01',
        name: 'Character Treatment and Performance',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        id: 'app-result-presentation',
        num: '02',
        name: 'App and Result Presentation',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        id: 'shots-framing',
        num: '03',
        name: 'Shots and Framing',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          </svg>
        ),
      },
      {
        id: 'editing-pacing',
        num: '04',
        name: 'Editing and Pacing',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
        id: 'background-setting-props',
        num: '06',
        name: 'Background, Setting and Props',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
      },
      {
        id: 'transitions-visual-effects',
        num: '07',
        name: 'Transitions and Visual Effects',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        ),
      },
      {
        id: 'voice-music-sound-effects',
        num: '08',
        name: 'Voice, Music and Sound Effects',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        ),
      },
      {
        id: 'visual-style',
        num: '09',
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
              The 9 Video Production Change Categories (Section 3)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoCategories.map((cat) => {
              const isSelected = activeDetailId === cat.id;
              const detail = details ? details[cat.id] : undefined;

              return (
                <div
                  key={cat.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${
                    isSelected
                      ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                      : 'border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50/30'
                  }`}
                >
                  <div className="p-3 bg-blue-100/60 border border-blue-200 shrink-0">
                    {cat.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-0.5">
                      {cat.num}
                    </span>
                    <h4 className="text-base md:text-[17px] font-bold text-slate-900 tracking-tight leading-snug">
                      {cat.name}
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
            • <strong className="text-slate-900">Output Effect is Proof:</strong> An effect that demonstrates an AI app's output is product proof, not merely decoration. Its role in the creative determines its test priority.
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3.7: DISCOVER / ITERATION / MULTIPLY
  // ----------------------------------------------------
  if (pageKey === '3.7') {
    const modes = [
      {
        id: 'discover',
        num: '01',
        title: 'DISCOVER',
        subtitle: 'Explore a new direction',
        summary: 'Explore a new creative direction around a different motivation, benefit, or capability.',
        color: 'border-blue-300 bg-blue-50/50',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600',
        tag: 'New Direction',
      },
      {
        id: 'iteration',
        num: '02',
        title: 'ITERATION',
        subtitle: 'Improve within the winning Angle',
        summary: 'Improve message, storytelling, or production treatment within the proven Angle.',
        color: 'border-purple-300 bg-purple-50/50',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600',
        tag: 'Optimize Winner',
      },
      {
        id: 'multiply',
        num: '03',
        title: 'MULTIPLY',
        subtitle: 'Scale a proven winner',
        summary: 'Create supporting variations of an approach with performance evidence to repeat.',
        color: 'border-emerald-300 bg-emerald-50/50',
        activeColor: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600',
        tag: 'Scale Winner',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three Test Modes (Classify the Meaning of the Change, Not Number of Edits)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modes.map((m) => {
              const isSelected = activeDetailId === m.id;
              const detail = details[m.id];
              return (
                <div
                  key={m.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? m.activeColor : `${m.color} bg-white hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {m.tag}
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
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {m.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                      {m.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MULTIPLY CAVEAT */}
        <div
          onClick={() => details['multiply-caveat'] && onSelectConcept(details['multiply-caveat'])}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            activeDetailId === 'multiply-caveat'
              ? 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600'
              : 'border-amber-200 bg-amber-50/50 hover:border-amber-400'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-amber-950 uppercase">
              Multiply Caution: State What Must Stay and Why
            </span>
            {details['multiply-caveat'] && (
              <svg
                className="w-4 h-4 text-amber-800 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <p className="text-sm md:text-base text-amber-900 leading-relaxed">
            A winning asset does not, by itself, prove which individual component caused the result. For Multiply, always state what must stay and why to prevent diluting the core driver of performance.
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 3.8: CHOOSE THE NEXT TEST (INTERACTION ARCHITECTURE REBUILD)
  // ----------------------------------------------------
  if (pageKey === '3.8') {
    const isStatementSelected = activeDetailId === 'structured-statement';
    const statementDetail = details['structured-statement'];

    const criteria = [
      {
        id: 'unanswered-question',
        num: '01',
        title: 'Most Unanswered Question',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        id: 'meaningful-change',
        num: '02',
        title: 'Meaningful Change',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        id: 'useful-learning',
        num: '03',
        title: 'Useful Learning',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ),
      },
      {
        id: 'match-scope',
        num: '04',
        title: 'Match Scope to Resources',
        icon: (
          <svg className="w-5 h-5 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        ),
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        {/* PRIMARY: THE FINAL STRUCTURED STATEMENT */}
        <div
          onClick={() => statementDetail && onSelectConcept(statementDetail)}
          className={`p-6 border-2 transition-all cursor-pointer flex items-center justify-between text-left ${
            isStatementSelected
              ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
              : 'border-blue-300 bg-blue-50/40 hover:border-blue-500 hover:bg-blue-50/70'
          }`}
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-blue-100/80 border border-blue-200 shrink-0 mt-0.5 sm:mt-0">
              <svg className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1">
                Brief Standard
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight uppercase">
                THE FINAL STRUCTURED STATEMENT
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-1 font-medium">
                Turn the test decision into a brief-ready statement.
              </p>
            </div>
          </div>
          {statementDetail && (
            <svg
              className={`w-6 h-6 shrink-0 transition-transform ml-4 ${
                isStatementSelected ? 'text-blue-900 translate-x-1' : 'text-slate-400'
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

        {/* SUPPORTING: FOUR DECISION CRITERIA */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Four Decision Criteria
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {criteria.map((c) => {
              const isSelected = activeDetailId === c.id;
              const detail = details[c.id];
              return (
                <div
                  key={c.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-4 border-2 transition-all cursor-pointer flex items-center gap-3 text-left ${
                    isSelected
                      ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/20'
                  }`}
                >
                  <div className="p-2.5 bg-slate-100 border border-slate-200 shrink-0">
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {c.num}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                      {c.title}
                    </h4>
                  </div>
                  {detail && (
                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform ${
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
      </div>
    );
  }

  return null;
};
