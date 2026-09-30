import { useState, useEffect, useCallback } from 'react';
import { ALL_PAGES, ConceptDetail, PlaybookPage } from './data/playbook';
import { Navigation } from './components/Navigation';
import { LearningPage } from './components/LearningPage';
import { DetailPanel } from './components/DetailPanel';

export default function App() {
  // Start on 2.1 (Creative System) to showcase the prototyped interactive learning UX
  const [currentPage, setCurrentPage] = useState<PlaybookPage>(() => {
    return ALL_PAGES.find((p) => p.id === '2.1') || ALL_PAGES[0];
  });

  const [activeDetail, setActiveDetail] = useState<ConceptDetail | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Navigate to another page
  const handleNavigate = useCallback((page: PlaybookPage) => {
    setCurrentPage(page);
    setActiveDetail(null);
    setIsMobileNavOpen(false);
  }, []);

  // Keyboard navigation for presentation feel (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is interacting with an input or if detail panel is open and user presses escape
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowLeft' && !activeDetail) {
        const currentIndex = ALL_PAGES.findIndex((p) => p.id === currentPage.id);
        if (currentIndex > 0) {
          handleNavigate(ALL_PAGES[currentIndex - 1]);
        }
      } else if (e.key === 'ArrowRight' && !activeDetail) {
        const currentIndex = ALL_PAGES.findIndex((p) => p.id === currentPage.id);
        if (currentIndex < ALL_PAGES.length - 1) {
          handleNavigate(ALL_PAGES[currentIndex + 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, activeDetail, handleNavigate]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-slate-900 select-none">
      {/* LEFT: Navigation */}
      <Navigation
        currentPage={currentPage}
        onSelectPage={handleNavigate}
        isOpenMobile={isMobileNavOpen}
        onCloseMobile={() => setIsMobileNavOpen(false)}
      />

      {/* RIGHT: Learning Page */}
      <LearningPage
        page={currentPage}
        onNavigate={handleNavigate}
        activeDetail={activeDetail}
        onSelectConcept={(detail) => setActiveDetail(detail)}
        onToggleMobileNav={() => setIsMobileNavOpen((prev) => !prev)}
      />

      {/* Detail Panel */}
      <DetailPanel
        detail={activeDetail}
        onClose={() => setActiveDetail(null)}
      />
    </div>
  );
}
