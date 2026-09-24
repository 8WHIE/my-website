import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, Layers, Terminal, Film, CheckCircle2, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onEnquireSimilar: (category: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onEnquireSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0d0f16] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/90 text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 font-mono uppercase tracking-wider mb-2">
            <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-red-400 text-[11px] font-bold">
              {item.badge}
            </span>
            <span aria-hidden="true">·</span>
            <span>{item.categoryLabel}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Syne']">
            {item.title}
          </h3>
        </div>

        {/* Image / Simulated Visual slot */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 mb-6">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 text-center">
              <Layers className="w-10 h-10 text-red-500 mb-3" />
              <p className="text-sm font-semibold text-zinc-200">{item.title}</p>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm">{item.summary}</p>
            </div>
          )}
          {/* Subtle label overlay */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
            {item.badge} Showcase
          </div>
        </div>

        {/* Summary and description */}
        <div className="space-y-4 mb-6">
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {item.fullDescription}
          </p>

          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
              Demonstrated Outcome & Performance
            </span>
            <p className="text-xs sm:text-sm font-semibold text-zinc-200">
              {item.metricsOrOutcome}
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 font-mono">
            Key Architectural Highlights
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
            {item.keyHighlights.map((hl, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack tags */}
        <div className="mb-8">
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
            Tools & Technology Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {item.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onEnquireSimilar(item.categoryLabel);
              onClose();
            }}
            className="w-full sm:flex-1 py-3 px-5 rounded-xl text-xs font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-950/50"
          >
            <span>Request a Project Like This</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
