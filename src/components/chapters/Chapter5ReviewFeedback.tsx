import React from 'react';
import { ConceptDetail } from '../../data/playbook';

interface Chapter5Props {
  pageKey: '5.1' | '5.2' | '5.3' | '5.4';
  activeDetailId?: string | null;
  onSelectConcept: (detail: ConceptDetail) => void;
  details?: Record<string, ConceptDetail>;
}

export const Chapter5ReviewFeedback: React.FC<Chapter5Props> = ({
  pageKey,
  activeDetailId,
  onSelectConcept,
  details = {},
}) => {
  // ----------------------------------------------------
  // 5.1: REVIEW AGAINST THE BRIEF
  // ----------------------------------------------------
  if (pageKey === '5.1') {
    const checks = [
      {
        id: 'check-message',
        num: '01',
        title: 'CHECK MESSAGE',
        subtitle: 'Audience + Angle',
        desc: 'Confirm character, situation, and words support the agreed takeaway under normal mobile viewing conditions.',
        color: 'border-blue-300 bg-blue-50/50',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs',
      },
      {
        id: 'check-story-proof',
        num: '02',
        title: 'CHECK STORY & PROOF',
        subtitle: 'Content & Product Truth',
        desc: 'Confirm viewer can follow the connection and see clear evidence for the promise. The app’s role is undeniable.',
        color: 'border-purple-300 bg-purple-50/50',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs',
      },
      {
        id: 'check-planned-change',
        num: '03',
        title: 'CHECK PLANNED CHANGE',
        subtitle: 'Hypothesis + Change + Keep',
        desc: 'Confirm the planned difference is visible and required constants remain consistent to reliably answer the test.',
        color: 'border-emerald-300 bg-emerald-50/50',
        activeColor: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three Verification Gates (View as a User First, Then Verify Promise)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {checks.map((item) => {
              const isSelected = activeDetailId === item.id;
              const detail = details[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? item.activeColor : `${item.color} bg-white hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {item.subtitle}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          onClick={() => details['viewing-condition'] && onSelectConcept(details['viewing-condition'])}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            activeDetailId === 'viewing-condition'
              ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600'
              : 'border-slate-200 bg-slate-50/80 hover:border-slate-400'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-slate-900 uppercase">
              Core Review Protocol: Realistic Viewing Conditions
            </span>
            {details['viewing-condition'] && (
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Always test and view creative under realistic mobile viewing conditions (phone screen, standard brightness, intended sound state) before critiquing details on a large desktop monitor.
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 5.2: REVIEW ASO
  // ----------------------------------------------------
  if (pageKey === '5.2') {
    const asoFocus = [
      {
        id: 'first-attention',
        num: '01',
        title: 'FIRST ATTENTION',
        question: 'What does the user see at glance speed?',
        color: 'border-blue-300 bg-blue-50/50',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs',
      },
      {
        id: 'message-evidence',
        num: '02',
        title: 'MESSAGE & EVIDENCE',
        question: 'Do copy and visuals tell the same story?',
        color: 'border-purple-300 bg-purple-50/50',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs',
      },
      {
        id: 'across-set',
        num: '03',
        title: 'ACROSS THE SET',
        question: 'Does the sequence develop a narrative?',
        color: 'border-emerald-300 bg-emerald-50/50',
        activeColor: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three ASO Review Focus Areas (Do Not Audit Every Font; Check If Design Delivers Message)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {asoFocus.map((item) => {
              const isSelected = activeDetailId === item.id;
              const detail = details[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? item.activeColor : `${item.color} bg-white hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Store Review 0{item.num}
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
                    <p className="text-sm font-semibold text-slate-800 mt-2 leading-snug">
                      {item.question}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          onClick={() => details['aso-review-rule'] && onSelectConcept(details['aso-review-rule'])}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            activeDetailId === 'aso-review-rule'
              ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-600'
              : 'border-slate-200 bg-slate-50/80 hover:border-emerald-400'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-slate-900 uppercase">
              Supporting Guidance: Avoid Font & Craft Micromanagement
            </span>
            {details['aso-review-rule'] && (
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Compare against baseline where relevant. Verify the changed component and keep elements consistent. Do not turn review into an audit of every font, shadow, or micro-spacing detail.
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 5.3: REVIEW VIDEO ADS
  // ----------------------------------------------------
  if (pageKey === '5.3') {
    const videoChecks = [
      {
        id: 'hook-to-app',
        num: '01',
        title: 'HOOK → APP',
        question: 'Does the opening connect to the product?',
        color: 'border-blue-300 bg-blue-50/50',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs',
      },
      {
        id: 'promise-to-proof',
        num: '02',
        title: 'PROMISE → PROOF',
        question: 'Is the benefit actually proven?',
        color: 'border-purple-300 bg-purple-50/50',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs',
      },
      {
        id: 'words-picture-sound',
        num: '03',
        title: 'WORDS + PICTURE + SOUND',
        question: 'Do all tracks support the same meaning?',
        color: 'border-emerald-300 bg-emerald-50/50',
        activeColor: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three Video Connections (Check Hook → App and Promise → Proof at Normal Speed)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videoChecks.map((item) => {
              const isSelected = activeDetailId === item.id;
              const detail = details[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? item.activeColor : `${item.color} bg-white hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Connection 0{item.num}
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
                    <p className="text-sm font-semibold text-slate-800 mt-2 leading-snug">
                      {item.question}
                    </p>
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
  // 5.4: GIVE FEEDBACK
  // ----------------------------------------------------
  if (pageKey === '5.4') {
    const feedbackSteps = [
      { id: 'feedback-gap', step: '1', title: 'Point to the Gap', desc: 'Name the exact timestamp, visual element, or screenshot number.' },
      { id: 'feedback-impact', step: '2', title: 'Explain the Impact', desc: 'Explain what communication fails (e.g. proof unreadable, reason to care lost).' },
      { id: 'feedback-solution', step: '3', title: 'Keep Solution Open', desc: 'Let Production craftspeople propose the best visual or editing solution.' },
    ];

    const classifications = [
      {
        id: 'required-fix',
        type: 'REQUIRED FIX',
        rule: 'Misses agreed message, proof, test condition, or basic legibility. Mandatory before launching test.',
        color: 'border-rose-300 bg-rose-50/70 text-rose-950',
        activeColor: 'border-rose-600 bg-rose-100 ring-2 ring-rose-600',
      },
      {
        id: 'discuss-first',
        type: 'DISCUSS FIRST',
        rule: 'Changes Angle, story, or test scope. Requires returning to the brief together before changing assets.',
        color: 'border-amber-300 bg-amber-50/70 text-amber-950',
        activeColor: 'border-amber-600 bg-amber-100 ring-2 ring-amber-600',
      },
      {
        id: 'personal-preference',
        type: 'PERSONAL PREFERENCE',
        rule: 'Subjective taste. Name it explicitly as a preference; do not make it mandatory or block delivery.',
        color: 'border-slate-300 bg-slate-50/70 text-slate-900',
        activeColor: 'border-slate-600 bg-slate-100 ring-2 ring-slate-600',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        {/* PRIMARY: 3-STEP FEEDBACK FORMULA */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three-Part Feedback Formula (Point to Gap → Explain Impact → Keep Open)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {feedbackSteps.map((s, idx) => {
              const isSelected = activeDetailId === s.id;
              const detail = details[s.id];
              return (
                <div
                  key={s.step}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-blue-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-400">PART 0{s.step}</span>
                      <div className="flex items-center gap-1">
                        {idx < feedbackSteps.length - 1 && (
                          <span className="text-xs text-blue-500 font-bold hidden md:inline mr-1">→</span>
                        )}
                        {detail && (
                          <svg
                            className={`w-3.5 h-3.5 shrink-0 transition-transform ${
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
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1.5">{s.title}</h4>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mt-2 pt-2 border-t border-slate-100">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FEEDBACK TEMPLATE */}
        <div
          onClick={() => details['feedback-template'] && onSelectConcept(details['feedback-template'])}
          className={`p-5 border-2 transition-all cursor-pointer text-left ${
            activeDetailId === 'feedback-template'
              ? 'border-blue-600 bg-blue-100/80 ring-2 ring-blue-600 shadow-xs'
              : 'border-blue-200 bg-blue-50/40 hover:border-blue-400'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-blue-900 uppercase">
              Structured Feedback Template:
            </span>
            {details['feedback-template'] && (
              <svg className="w-4 h-4 text-blue-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <p className="text-sm md:text-base text-slate-800 italic leading-relaxed">
            “I notice [specific detail / timestamp]. The brief needs [intended understanding or test condition]. Right now, [gap]. Please make [required outcome] clear while keeping [fixed elements].”
          </p>
        </div>

        {/* SUPPORTING: FEEDBACK CLASSIFICATION */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Issue Classification (Triage Before Requesting Changes)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {classifications.map((c) => {
              const isSelected = activeDetailId === c.id;
              const detail = details[c.id];
              return (
                <div
                  key={c.type}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-4 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? c.activeColor : `${c.color} hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-base block">{c.type}</span>
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
                    <p className="text-xs md:text-sm leading-relaxed">{c.rule}</p>
                  </div>
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
