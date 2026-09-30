import React from 'react';
import { ALL_PAGES, ConceptDetail, PlaybookPage } from '../data/playbook';
import { Chapter1WhySession } from './chapters/Chapter1WhySession';
import { Chapter2Understand } from './chapters/Chapter2Understand';
import { Chapter3DefineChange } from './chapters/Chapter3DefineChange';
import { Chapter4HowToBrief } from './chapters/Chapter4HowToBrief';
import { Chapter5ReviewFeedback } from './chapters/Chapter5ReviewFeedback';
import { Chapter6Aesthetics } from './chapters/Chapter6Aesthetics';

interface LearningPageProps {
  page: PlaybookPage;
  onNavigate: (page: PlaybookPage) => void;
  activeDetail: ConceptDetail | null;
  onSelectConcept: (detail: ConceptDetail) => void;
  onToggleMobileNav: () => void;
}

export const LearningPage: React.FC<LearningPageProps> = ({
  page,
  onNavigate,
  activeDetail,
  onSelectConcept,
  onToggleMobileNav,
}) => {
  const currentIndex = ALL_PAGES.findIndex((p) => p.id === page.id);
  const prevPage = currentIndex > 0 ? ALL_PAGES[currentIndex - 1] : null;
  const nextPage =
    currentIndex < ALL_PAGES.length - 1 ? ALL_PAGES[currentIndex + 1] : null;

  return (
    <main className="flex-1 flex flex-col justify-between min-h-screen max-h-screen overflow-y-auto bg-white p-6 sm:p-8 md:px-12 md:py-8 lg:px-16 lg:py-8">
      {/* 01: LOCATION & MOBILE NAV TRIGGER & CONCEPT HEADER (Comfortable readable width - TOP ZONE) */}
      <div className="w-full max-w-4xl shrink-0">
        <div className="flex items-center justify-between gap-4 mb-4 md:mb-5">
          {/* LOCATION: Combined single line */}
          <div className="text-xs md:text-sm font-medium tracking-wider text-slate-600 uppercase">
            {page.chapterNumber} / {page.chapterLocationTitle} · {page.sectionNumber}
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={onToggleMobileNav}
            className="md:hidden inline-flex items-center gap-1.5 py-1.5 px-3 border border-slate-300 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
            aria-label="Open chapters navigation"
          >
            <svg
              className="w-4 h-4 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>Chapters</span>
          </button>
        </div>

        {/* 02: CONCEPT TITLE (Large + Bold 40-48px) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 uppercase">
          {page.conceptTitle}
        </h2>

        {/* 03: CORE QUESTION (Medium + Regular 20-24px) */}
        {page.coreQuestion && (
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-normal text-slate-700 leading-relaxed">
            {page.coreQuestion}
          </p>
        )}

        {/* 04: MEMORY LINE (Bold 18-20px) */}
        {page.memoryLine && (
          <div className="mt-3 pt-2.5 border-t border-slate-200">
            <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-slate-900 uppercase">
              {page.memoryLine}
            </p>
          </div>
        )}
      </div>

      {/* 05: WIDE PRESENTATION VISUAL STAGE (CENTER ZONE: Adapts cleanly to available height) */}
      <div className="my-auto py-3 md:py-4 w-full flex flex-col items-center justify-center md:-translate-x-6 lg:-translate-x-12 transition-transform duration-150">
        {page.chapterNumber === '01' && (
          <Chapter1WhySession
            activeDetailId={activeDetail?.id}
            onSelectConcept={onSelectConcept}
            details={page.details}
          />
        )}

        {page.chapterNumber === '02' && (
          <Chapter2Understand
            pageKey={page.pageKey as any}
            activeDetailId={activeDetail?.id}
            onSelectConcept={onSelectConcept}
            details={page.details}
          />
        )}

        {page.chapterNumber === '03' && (
          <Chapter3DefineChange
            pageKey={page.pageKey as any}
            activeDetailId={activeDetail?.id}
            onSelectConcept={onSelectConcept}
            details={page.details}
          />
        )}

        {page.chapterNumber === '04' && (
          <Chapter4HowToBrief
            pageKey={page.pageKey as any}
            activeDetailId={activeDetail?.id}
            onSelectConcept={onSelectConcept}
            details={page.details}
          />
        )}

        {page.chapterNumber === '05' && (
          <Chapter5ReviewFeedback
            pageKey={page.pageKey as any}
            activeDetailId={activeDetail?.id}
            onSelectConcept={onSelectConcept}
            details={page.details}
          />
        )}

        {page.chapterNumber === '06' && (
          <Chapter6Aesthetics
            pageKey={page.pageKey as any}
            activeDetailId={activeDetail?.id}
            onSelectConcept={onSelectConcept}
            details={page.details}
          />
        )}
      </div>

      {/* 06: PREVIOUS / NEXT (BOTTOM ZONE: Reserved visible area) */}
      <footer className="shrink-0 pt-4 md:pt-5 border-t border-slate-200 mt-auto flex items-center justify-between text-sm sm:text-base font-medium">
        <div>
          {prevPage ? (
            <button
              type="button"
              onClick={() => onNavigate(prevPage)}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors py-2 group cursor-pointer"
              aria-label={`Go to previous lesson: ${prevPage.conceptTitle}`}
            >
              <span className="transition-transform group-hover:-translate-x-1">
                ←
              </span>
              <span>{prevPage.conceptTitle}</span>
            </button>
          ) : (
            <span />
          )}
        </div>

        <div>
          {nextPage ? (
            <button
              type="button"
              onClick={() => onNavigate(nextPage)}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors py-2 group cursor-pointer"
              aria-label={`Go to next lesson: ${nextPage.conceptTitle}`}
            >
              <span>{nextPage.conceptTitle}</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          ) : (
            <span />
          )}
        </div>
      </footer>
    </main>
  );
};
