import React from 'react';
import { ConceptDetail } from '../../data/playbook';

interface Chapter6Props {
  pageKey: '6.1' | '6.2' | '6.3' | '6.4' | '6.5';
  activeDetailId?: string | null;
  onSelectConcept: (detail: ConceptDetail) => void;
  details?: Record<string, ConceptDetail>;
}

export const Chapter6Aesthetics: React.FC<Chapter6Props> = ({
  pageKey,
  activeDetailId,
  onSelectConcept,
  details = {},
}) => {
  // ----------------------------------------------------
  // 6.1: SAME IMAGE, DIFFERENT EYES
  // ----------------------------------------------------
  if (pageKey === '6.1') {
    const filters = [
      {
        id: 'familiarity',
        num: '01',
        title: 'FAMILIARITY',
        subtitle: 'What we see meets what we know',
        desc: 'A style we enjoyed before feels comfortable. What feels fresh to one cohort can feel generic to another.',
        color: 'border-blue-300 bg-blue-50/50',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs',
      },
      {
        id: 'experience',
        num: '02',
        title: 'EXPERIENCE',
        subtitle: 'Trained sensitivity to composition',
        desc: 'A designer notices awkward spacing, conflicting light angles, or an uneasy crop that others unconsciously feel.',
        color: 'border-purple-300 bg-purple-50/50',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs',
      },
      {
        id: 'association',
        num: '03',
        title: 'ASSOCIATION',
        subtitle: 'Personal memories & cultural triggers',
        desc: 'Colors, settings, and styles remind people of personal experiences. The same image can feel nostalgic or dated.',
        color: 'border-amber-300 bg-amber-50/50',
        activeColor: 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600 shadow-xs',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three Lenses of Aesthetic Perception (Our Taste Has a History)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filters.map((f) => {
              const isSelected = activeDetailId === f.id;
              const detail = details[f.id];
              return (
                <div
                  key={f.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? f.activeColor : `${f.color} bg-white hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Perception Lens 0{f.num}
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
                      {f.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 mt-2 leading-snug">
                      {f.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          onClick={() => details['taste-history'] && onSelectConcept(details['taste-history'])}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            activeDetailId === 'taste-history'
              ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600'
              : 'border-slate-200 bg-slate-50/80 hover:border-slate-400'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-slate-900 uppercase">
              Core Team Takeaway: Our Taste Has a History
            </span>
            {details['taste-history'] && (
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            When debating creative feedback, never assume your subjective reaction is universal. State whether a critique comes from user familiarity, craft experience, or personal association.
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 6.2: NOVELTY & DISCOVERY
  // ----------------------------------------------------
  if (pageKey === '6.2') {
    const techniques = [
      { id: 'eye-level', num: '01', name: 'Eye Level', role: 'Baseline human familiarity' },
      { id: 'overhead', num: '02', name: 'Overhead', role: 'Bird’s eye / geometric pattern' },
      { id: 'low-angle', num: '03', name: 'Low Angle', role: 'Heroic stature / monumental scale' },
      { id: 'extreme-close-up', num: '04', name: 'Extreme Close-Up', role: 'Tactile texture & intimate detail' },
      { id: 'unexpected-scale', num: '05', name: 'Unexpected Scale', role: 'Surprising proportion differences' },
      { id: 'reflection', num: '06', name: 'Reflection', role: 'Layered worlds & dual surfaces' },
      { id: 'surprising-crop', num: '07', name: 'Surprising Crop', role: 'Deliberate tension & curiosity' },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div
          onClick={() => details['seeing-principle'] && onSelectConcept(details['seeing-principle'])}
          className={`p-5 border-2 text-left transition-all cursor-pointer ${
            activeDetailId === 'seeing-principle'
              ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-600 shadow-xs'
              : 'border-slate-900 bg-white hover:border-blue-500'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
              Core Aesthetic Insight
            </span>
            {details['seeing-principle'] && (
              <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">
            UNFAMILIAR WAYS OF SEEING ORDINARY SUBJECTS
          </h4>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Photographing the exact same subject from eye level, directly above, or near the floor does not change the subject, but completely transforms depth, proportion, and background relationships. Freshness comes from how we look, not only what we look at.
          </p>
        </div>

        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Seven Techniques to Create Discovery
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {techniques.map((t) => {
              const isSelected = activeDetailId === t.id;
              const detail = details[t.id];
              return (
                <div
                  key={t.num}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-3.5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-blue-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-400">{t.num}</span>
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
                    <h5 className="font-bold text-slate-900 text-sm md:text-base leading-tight">{t.name}</h5>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 pt-2 border-t border-slate-100 leading-snug">{t.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 6.3: CLARITY & INTENTION
  // ----------------------------------------------------
  if (pageKey === '6.3') {
    const choices = [
      {
        id: 'placement',
        num: '01',
        title: 'PLACEMENT',
        decision: 'Centered, off-center, or deliberate bleed',
        detail: 'A centered subject feels settled. Deliberate off-center creates dynamic energy. Bleed creates intimacy. Accidental almost-centered placement creates hesitation.',
        color: 'border-blue-300 bg-blue-50/50',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs',
      },
      {
        id: 'edges',
        num: '02',
        title: 'EDGES',
        decision: 'Separate clearly or overlap boldly',
        detail: 'When shapes barely touch (a tangent), they look awkwardly stuck together. A clear gap or an intentional bold overlap makes spatial depth unmistakable.',
        color: 'border-purple-300 bg-purple-50/50',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs',
      },
      {
        id: 'cuts',
        num: '03',
        title: 'CUTS',
        decision: 'Decisive change or continuous flow',
        detail: 'Two shots with slight shifts feel like editing glitches. Decisively change angle/scale, or carry motion smoothly across cuts. Do not hide hesitation in dissolves.',
        color: 'border-emerald-300 bg-emerald-50/50',
        activeColor: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three Definite Choices That Remove Hesitation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {choices.map((c) => {
              const isSelected = activeDetailId === c.id;
              const detail = details[c.id];
              return (
                <div
                  key={c.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? c.activeColor : `${c.color} bg-white hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Choice 0{c.num}
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
                      {c.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 mt-2 leading-snug">
                      {c.decision}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          onClick={() => details['smoothness-rule'] && onSelectConcept(details['smoothness-rule'])}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            activeDetailId === 'smoothness-rule'
              ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-600'
              : 'border-slate-200 bg-slate-50/80 hover:border-emerald-400'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-bold text-slate-900 uppercase">
              Supporting Principle: Smoothness is the Feeling of Flow
            </span>
            {details['smoothness-rule'] && (
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Smoothness refers to the feeling of uninterrupted cognitive flow, not necessarily a soft dissolve transition. Decisive cuts with continuous eye-trace feel more confident.
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // 6.4: BALANCE / HARMONY / RHYTHM
  // ----------------------------------------------------
  if (pageKey === '6.4') {
    const qualities = [
      {
        id: 'balance',
        num: '01',
        name: 'BALANCE',
        focus: 'The frame feels supported',
        desc: 'Visual weight is distributed harmoniously. Space, contrasting objects, or another focal point balance weight. Asymmetry can be just as balanced as symmetry.',
        color: 'border-blue-300 bg-blue-50/50',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs',
      },
      {
        id: 'harmony',
        num: '02',
        name: 'HARMONY',
        focus: 'The pieces share something',
        desc: 'Elements look like they belong to the same world through consistent lighting, shared palette, or texture. Repeating selected qualities creates unity.',
        color: 'border-purple-300 bg-purple-50/50',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs',
      },
      {
        id: 'rhythm',
        num: '03',
        name: 'RHYTHM',
        focus: 'Repetition gives a pattern',
        desc: 'Repeated intervals, spacing, or sound create satisfying flow. Intentional variation adds delightful surprise. Synchronous sound and motion feel deeply satisfying.',
        color: 'border-amber-300 bg-amber-50/50',
        activeColor: 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600 shadow-xs',
      },
      {
        id: 'breathing-room',
        num: '04',
        name: 'BREATHING ROOM',
        focus: 'Detail has space around it',
        desc: 'When every area is busy, the image feels crowded. Quieter areas give detailed focal points room to be appreciated without visual fatigue.',
        color: 'border-emerald-300 bg-emerald-50/50',
        activeColor: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs',
      },
    ];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Four Qualities of Cohesive Composition
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualities.map((q) => {
              const isSelected = activeDetailId === q.id;
              const detail = details[q.id];
              return (
                <div
                  key={q.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? q.activeColor : `${q.color} bg-white hover:border-slate-400`
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Quality 0{q.num}
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
                      {q.name}
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 mt-2 leading-snug">
                      {q.focus}
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
  // 6.5: WHY CORRECT CAN STILL FEEL ORDINARY (INTERACTION ARCHITECTURE REBUILD)
  // ----------------------------------------------------
  if (pageKey === '6.5') {
    const diagnosticFramework = [
      {
        id: 'feeling-fresh',
        num: '01',
        title: 'NOVELTY & DISCOVERY',
        quote: '“There is something fresh here.”',
        badge: 'Diagnostic 01',
        color: 'border-blue-200 bg-white hover:border-blue-400 hover:bg-blue-50/20',
        activeColor: 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs',
        badgeColor: 'text-blue-800 bg-blue-50 border-blue-200',
        // Visual abstraction: unexpected viewpoint / perspective shift
        illustration: (
          <div className="w-full h-20 bg-blue-50/70 border border-blue-200/80 rounded-none mb-3.5 flex items-center justify-center p-2 overflow-hidden relative">
            <svg className="w-full h-full text-blue-700" viewBox="0 0 160 64" fill="none">
              {/* Isometric grid lines representing unusual viewing angle */}
              <path d="M10 54 L80 14 L150 54" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <path d="M80 14 L80 58" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              {/* Fresh dynamic focal object */}
              <polygon points="80,18 120,38 80,58 40,38" fill="#dbeafe" stroke="currentColor" strokeWidth="2" />
              <circle cx="80" cy="18" r="3.5" fill="#1d4ed8" />
              <circle cx="120" cy="38" r="2.5" fill="#1d4ed8" />
              <circle cx="40" cy="38" r="2.5" fill="#1d4ed8" />
            </svg>
            <span className="absolute bottom-1 right-2 text-[10px] font-bold text-blue-800 uppercase tracking-widest opacity-75">
              Perspective Angle
            </span>
          </div>
        ),
      },
      {
        id: 'feeling-awkward',
        num: '02',
        title: 'CLARITY & INTENTION',
        quote: '“Nothing feels accidentally awkward.”',
        badge: 'Diagnostic 02',
        color: 'border-purple-200 bg-white hover:border-purple-400 hover:bg-purple-50/20',
        activeColor: 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs',
        badgeColor: 'text-purple-800 bg-purple-50 border-purple-200',
        // Visual abstraction: deliberate alignment and clean edges (no tangents)
        illustration: (
          <div className="w-full h-20 bg-purple-50/70 border border-purple-200/80 rounded-none mb-3.5 flex items-center justify-center p-2 overflow-hidden relative">
            <svg className="w-full h-full text-purple-700" viewBox="0 0 160 64" fill="none">
              {/* Clean alignment baseline */}
              <line x1="20" y1="52" x2="140" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
              {/* First decisive shape */}
              <rect x="30" y="16" width="44" height="36" fill="#f3e8ff" stroke="currentColor" strokeWidth="2" />
              {/* Intentional breathing space and decisive second shape */}
              <rect x="88" y="24" width="42" height="28" fill="#e9d5ff" stroke="currentColor" strokeWidth="2" />
              {/* Measured gap indicator */}
              <line x1="74" y1="34" x2="88" y2="34" stroke="#7e22ce" strokeWidth="1.5" />
              <circle cx="74" cy="34" r="1.5" fill="#7e22ce" />
              <circle cx="88" cy="34" r="1.5" fill="#7e22ce" />
            </svg>
            <span className="absolute bottom-1 right-2 text-[10px] font-bold text-purple-800 uppercase tracking-widest opacity-75">
              Decisive Edge
            </span>
          </div>
        ),
      },
      {
        id: 'feeling-together',
        num: '03',
        title: 'BALANCE, HARMONY & RHYTHM',
        quote: '“The parts feel good together.”',
        badge: 'Diagnostic 03',
        color: 'border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/20',
        activeColor: 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs',
        badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
        // Visual abstraction: rhythmic harmonic weight and balance
        illustration: (
          <div className="w-full h-20 bg-emerald-50/70 border border-emerald-200/80 rounded-none mb-3.5 flex items-center justify-center p-2 overflow-hidden relative">
            <svg className="w-full h-full text-emerald-700" viewBox="0 0 160 64" fill="none">
              {/* Balanced rhythmic columns */}
              <rect x="25" y="28" width="16" height="24" fill="#d1fae5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="49" y="18" width="22" height="34" fill="#a7f3d0" stroke="currentColor" strokeWidth="2" />
              <rect x="79" y="32" width="14" height="20" fill="#d1fae5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="101" y="22" width="18" height="30" fill="#6ee7b7" stroke="currentColor" strokeWidth="2" />
              <rect x="127" y="36" width="10" height="16" fill="#d1fae5" stroke="currentColor" strokeWidth="1.5" />
              {/* Base balance beam */}
              <line x1="20" y1="56" x2="142" y2="56" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="absolute bottom-1 right-2 text-[10px] font-bold text-emerald-800 uppercase tracking-widest opacity-75">
              Harmonic Rhythm
            </span>
          </div>
        ),
      },
    ];

    const isCraftSelected = activeDetailId === 'craft-vs-judgment';
    const craftDetail = details['craft-vs-judgment'];

    return (
      <div className="w-full max-w-5xl mx-auto py-2 space-y-6">
        {/* PRIMARY: THREE AESTHETIC DIAGNOSTIC OBJECTS */}
        <div>
          <div className="mb-3">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Three Feelings of Aesthetic Resonance (The Final Diagnostic)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {diagnosticFramework.map((f) => {
              const isSelected = activeDetailId === f.id;
              const detail = details[f.id];
              return (
                <div
                  key={f.id}
                  onClick={() => detail && onSelectConcept(detail)}
                  className={`p-5 border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected ? f.activeColor : f.color
                  }`}
                >
                  <div>
                    {/* Visual Abstraction Header */}
                    {f.illustration}

                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 border ${f.badgeColor}`}>
                        {f.badge}
                      </span>
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {f.title}
                    </h4>

                    <p className="text-sm sm:text-base font-semibold text-slate-800 italic mt-2 leading-snug">
                      {f.quote}
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

        {/* SUPPORTING: CRAFT VS. CREATIVE JUDGMENT */}
        <div>
          <div className="mb-2">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              Aesthetic Foundation
            </span>
          </div>

          <div
            onClick={() => craftDetail && onSelectConcept(craftDetail)}
            className={`p-5 border-2 text-left transition-all cursor-pointer flex items-center justify-between ${
              isCraftSelected
                ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
                : 'border-slate-300 bg-slate-50/70 hover:border-slate-500 hover:bg-slate-100/60'
            }`}
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3 bg-white border border-slate-300 shrink-0 mt-0.5 sm:mt-0">
                <svg className="w-6 h-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-0.5">
                  Core Diagnostic Tension
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight uppercase">
                  CRAFT VS. CREATIVE JUDGMENT
                </h4>
                <p className="text-sm text-slate-700 mt-0.5 font-medium">
                  Why can technically correct work still feel ordinary?
                </p>
              </div>
            </div>

            {craftDetail && (
              <svg
                className={`w-5 h-5 shrink-0 transition-transform ml-4 ${
                  isCraftSelected ? 'text-slate-900 translate-x-1' : 'text-slate-400'
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
    );
  }

  return null;
};
