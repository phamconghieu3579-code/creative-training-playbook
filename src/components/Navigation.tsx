import React from 'react';
import { PLAYBOOK_CHAPTERS, PlaybookPage } from '../data/playbook';

interface NavigationProps {
  currentPage: PlaybookPage;
  onSelectPage: (page: PlaybookPage) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onSelectPage,
  isOpenMobile,
  onCloseMobile,
}) => {
  const currentChapterId = currentPage.chapterNumber;

  return (
    <>
      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden backdrop-blur-xs"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <nav
        aria-label="Playbook Navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 md:w-[230px] md:min-w-[230px] bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 ease-out md:static md:translate-x-0 ${
          isOpenMobile ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 md:px-4 md:py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h1 className="text-sm md:text-base font-bold tracking-tight text-slate-900">
              CREATIVE PLAYBOOK
            </h1>
            <p className="text-[11px] font-medium text-slate-600 mt-0.5">
              Interactive Guide
            </p>
          </div>
          {/* Close button on mobile */}
          <button
            onClick={onCloseMobile}
            className="md:hidden text-slate-600 hover:text-slate-900 text-lg p-1 cursor-pointer"
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        {/* Chapters List */}
        <div className="flex-1 overflow-y-auto px-2.5 py-4 space-y-2">
          {PLAYBOOK_CHAPTERS.map((chapter) => {
            const isCurrentChapter = chapter.number === currentChapterId;
            const hasMultiplePages = chapter.pages.length > 1;

            return (
              <div key={chapter.id} className="space-y-1">
                {/* Chapter Heading Button */}
                <button
                  type="button"
                  onClick={() => {
                    // Navigate to the first page of this chapter
                    onSelectPage(chapter.pages[0]);
                    onCloseMobile();
                  }}
                  className={`w-full text-left px-2 py-2 text-xs md:text-[13px] font-medium tracking-normal transition-colors flex items-center justify-between cursor-pointer ${
                    isCurrentChapter
                      ? 'text-slate-900 font-bold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate">
                    <span className="text-slate-500 font-medium mr-1.5">
                      {chapter.number}
                    </span>
                    {chapter.title}
                  </span>
                </button>

                {/* Subsections: ONLY visible when this chapter is the CURRENT chapter */}
                {isCurrentChapter && hasMultiplePages && (
                  <div className="pl-3 pr-1 py-0.5 space-y-0.5 border-l border-slate-200 ml-2.5 my-1">
                    {chapter.pages.map((page) => {
                      const isCurrentPage = page.id === currentPage.id;
                      return (
                        <button
                          key={page.id}
                          type="button"
                          onClick={() => {
                            onSelectPage(page);
                            onCloseMobile();
                          }}
                          className={`w-full text-left px-2 py-1.5 text-xs md:text-[12.5px] transition-colors rounded-none flex items-center justify-between cursor-pointer ${
                            isCurrentPage
                              ? 'text-blue-700 font-bold bg-blue-50/70 border-l-2 border-blue-600 -ml-[13px] pl-2.5'
                              : 'text-slate-700 font-normal hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate">{page.conceptTitle}</span>
                          {isCurrentPage && (
                            <span className="text-[10px] text-blue-600 font-bold ml-1">
                              ●
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
          Phase 2 · Complete Playbook
        </div>
      </nav>
    </>
  );
};
