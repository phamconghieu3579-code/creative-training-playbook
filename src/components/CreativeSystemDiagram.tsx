import React from 'react';
import { ConceptDetail } from '../data/playbook';

interface CreativeSystemDiagramProps {
  activeDetailId?: string | null;
  onSelectConcept: (detail: ConceptDetail) => void;
  details?: Record<string, ConceptDetail>;
}

export const CreativeSystemDiagram: React.FC<CreativeSystemDiagramProps> = ({
  activeDetailId,
  onSelectConcept,
  details = {},
}) => {
  const isStrategySelected = activeDetailId === 'strategy';
  const isAngleSelected = activeDetailId === 'angle';
  const isProductSelected = activeDetailId === 'product';
  const isContentStorySelected = activeDetailId === 'content-storytelling';
  const isProductionSelected = activeDetailId === 'production';

  return (
    <div className="w-full max-w-4xl mx-auto py-2 flex flex-col items-center space-y-4">
      {/* STRATEGY */}
      <div
        onClick={() => details.strategy && onSelectConcept(details.strategy)}
        className={`w-full max-w-2xl p-4 sm:p-5 border-2 transition-all cursor-pointer text-left ${
          isStrategySelected
            ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
            : 'border-blue-300 bg-blue-50/70 hover:border-blue-500'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1">
          Strategy · Guides decisions across the creative
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-blue-950 uppercase">
          STRATEGY
        </h3>
        <p className="text-sm text-slate-700 mt-1">
          Goal · Audience · Hypothesis
        </p>
      </div>

      {/* BRANCHING CONNECTOR */}
      <div className="w-full max-w-2xl flex flex-col items-center py-0.5" aria-hidden="true">
        <div className="w-0.5 h-3 bg-slate-300" />
        <div className="w-[78%] h-0.5 bg-slate-300" />
        <div className="w-[78%] flex justify-between">
          <div className="w-0.5 h-3 bg-slate-300" />
          <div className="w-0.5 h-3 bg-slate-300" />
          <div className="w-0.5 h-3 bg-slate-300" />
        </div>
      </div>

      {/* 3 BRANCHES: ANGLE, CONTENT & STORYTELLING, PRODUCTION */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
        <div
          onClick={() => details.angle && onSelectConcept(details.angle)}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            isAngleSelected
              ? 'border-amber-600 bg-amber-100/90 ring-2 ring-amber-600 shadow-xs'
              : 'border-amber-300 bg-amber-50/50 hover:border-amber-500'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
            Audience Perspective
          </span>
          <h4 className="text-lg font-bold text-amber-950 uppercase">
            ANGLE
          </h4>
          <p className="text-xs text-slate-700 mt-1">
            Why users should care (Need + Situation + Benefit)
          </p>
        </div>

        <div
          onClick={() => details['content-storytelling'] && onSelectConcept(details['content-storytelling'])}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            isContentStorySelected
              ? 'border-purple-600 bg-purple-100/90 ring-2 ring-purple-600 shadow-xs'
              : 'border-purple-300 bg-purple-50/50 hover:border-purple-500'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 block mb-1">
            The Bridge
          </span>
          <h4 className="text-lg font-bold text-purple-950 uppercase">
            CONTENT & STORYTELLING
          </h4>
          <p className="text-xs text-slate-700 mt-1">
            Connects user relevance with product capability
          </p>
        </div>

        <div
          onClick={() => details.production && onSelectConcept(details.production)}
          className={`p-4 border-2 transition-all cursor-pointer text-left ${
            isProductionSelected
              ? 'border-emerald-600 bg-emerald-100/90 ring-2 ring-emerald-600 shadow-xs'
              : 'border-emerald-300 bg-emerald-50/50 hover:border-emerald-500'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
            Presentation
          </span>
          <h4 className="text-lg font-bold text-emerald-950 uppercase">
            PRODUCTION
          </h4>
          <p className="text-xs text-slate-700 mt-1">
            Visible & audible presentation (ASO & Video)
          </p>
        </div>
      </div>

      {/* PRODUCT INPUT ARROW */}
      <div className="w-full max-w-sm flex flex-col items-center pt-0.5" aria-hidden="true">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
          ↑ Supplies proof & sets truth boundary ↑
        </span>
        <div className="w-0.5 h-3 bg-slate-400" />
      </div>

      {/* SEPARATE PRODUCT INPUT */}
      <div
        onClick={() => details.product && onSelectConcept(details.product)}
        className={`w-full max-w-md p-4 border-2 transition-all cursor-pointer text-left ${
          isProductSelected
            ? 'border-blue-600 bg-blue-100/90 ring-2 ring-blue-600 shadow-xs'
            : 'border-slate-300 bg-slate-50/80 hover:border-slate-500'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-0.5">
          Product-Side Truth
        </span>
        <h4 className="text-lg font-bold text-slate-900 uppercase">
          PRODUCT (TRUTH & CAPABILITY)
        </h4>
        <p className="text-xs text-slate-700 mt-1">
          Features · UX/UI · Product Proof
        </p>
      </div>
    </div>
  );
};
