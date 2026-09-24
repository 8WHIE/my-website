import React, { useState } from 'react';
import { Layers, ArrowRight, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_SAMPLES } from '../data/siteData';
import { PortfolioCategory, PortfolioItem } from '../types';
import { PortfolioModal } from './PortfolioModal';

interface PortfolioSectionProps {
  onRequestProject: (categoryHint: string) => void;
}

const CATEGORIES: { id: PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'All Samples' },
  { id: 'websites', label: 'Websites' },
  { id: 'web-apps', label: 'Web Apps' },
  { id: 'video-editing', label: 'Video Editing' },
  { id: 'graphics', label: 'Graphics' },
  { id: 'ui-ux', label: 'UI/UX' },
  { id: 'coding', label: 'Coding' },
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredSamples = activeCategory === 'all'
    ? PORTFOLIO_SAMPLES
    : PORTFOLIO_SAMPLES.filter((item) => item.category === activeCategory);

  const handleEnquireSimilar = (categoryName: string) => {
    onRequestProject(categoryName);
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-3 font-mono">
          <span>Curated Demonstrations</span>
          <span aria-hidden="true">·</span>
          <span>Sample Output</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Syne'] mb-4 text-balance">
          Featured Sample Projects
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-balance">
          Explore realistic demo builds and architectural prototypes representing the craft, code standard, and aesthetic fidelity delivered by 8WHIE.
        </p>
      </div>

      {/* Filter Tabs (Functional segmented buttons) */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-150 cursor-pointer whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-red-600 text-white shadow-md shadow-red-950/50'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800/80'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSamples.map((item) => (
          <div
            key={item.id}
            className="group bg-[#0d0f16] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-black/60"
          >
            {/* Visual Header / Thumbnail */}
            <div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950">
                  <Layers className="w-10 h-10 text-zinc-700 group-hover:text-red-500 transition-colors" />
                </div>
              )}
              {/* Unboxed Demo Tag Overlay */}
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-mono font-bold text-red-400 tracking-wider">
                {item.badge}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Category & separator */}
                <div className="text-[11px] font-semibold text-zinc-400 font-mono uppercase tracking-wider mb-2">
                  <span>{item.categoryLabel}</span>
                  <span aria-hidden="true" className="mx-2 text-zinc-600">·</span>
                  <span>Architecture</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2 font-['Syne']">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.techStack.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                  {item.techStack.length > 3 && (
                    <span className="text-[11px] font-mono text-zinc-400 self-center">
                      +{item.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full py-2 px-3 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Demo & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onEnquireSimilar={handleEnquireSimilar}
      />
    </section>
  );
};
