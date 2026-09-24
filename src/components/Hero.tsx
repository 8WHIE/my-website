import React from 'react';
import { ArrowRight, Sparkles, Youtube, Instagram, Send, Github, CheckCircle2 } from 'lucide-react';
import { BRAND, SOCIAL_LINKS } from '../data/siteData';

interface HeroProps {
  onExploreServices: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onContactClick }) => {
  const youtubeLink = SOCIAL_LINKS.find((s) => s.name === 'YouTube')?.url || 'https://youtube.com/@8whie?si=dW7R_kxKPEtsx8gi';
  const instaLink = SOCIAL_LINKS.find((s) => s.name === 'Instagram')?.url || 'https://www.instagram.com/aaynkt?stkn=MWdldHM5c3Njc2U5MQ==';
  const telegramChannel = SOCIAL_LINKS.find((s) => s.name === 'Telegram Channel')?.url || 'https://t.me/whiee';
  const githubLink = SOCIAL_LINKS.find((s) => s.name === 'GitHub')?.url || 'https://github.com/8WHIE';

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/src/assets/images/hero_workspace_tech_1790219217296.jpg"
          alt="8WHIE Technology Studio"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrim for WCAG AA compliance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090c] via-[#08090c]/85 to-[#08090c]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c] via-transparent to-[#08090c]" />
        {/* Subtle red accent glow in background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Quiet Brand Kicker - Zero Pill discipline */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span>Indian Technology & Creator Brand</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        </div>

        {/* Brand Name */}
        <h2 className="text-sm sm:text-base font-bold tracking-[0.25em] text-zinc-400 uppercase mb-3 font-mono">
          {BRAND.name}
        </h2>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-['Syne'] text-balance">
          {BRAND.tagline}
        </h1>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 text-balance font-normal">
          {BRAND.heroSubtitle}
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl transition-all duration-200 shadow-lg shadow-red-950/60 hover:shadow-red-600/30 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 hover:text-white rounded-xl border border-zinc-700/80 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Contact 8WHIE</span>
          </button>
        </div>

        {/* Social Buttons Bar */}
        <div className="pt-6 border-t border-zinc-800/80 max-w-xl mx-auto">
          <p className="text-xs font-medium text-zinc-400 mb-3 tracking-wide">
            Connect & Follow Official Channels
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-red-600/40 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>YouTube</span>
            </a>

            <a
              href={instaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-pink-500/40 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>Instagram</span>
            </a>

            <a
              href={telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-sky-500/40 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Send className="w-4 h-4 text-sky-400" />
              <span>Telegram</span>
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-500 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-zinc-300" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Trust Badges - Unboxed quiet text with separators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
            Direct Creator-to-Client Delivery
          </span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
            Transparent Starting Rates
          </span>
          <span aria-hidden="true" className="text-zinc-600">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
            Clean Hand-Crafted Code & Assets
          </span>
        </div>
      </div>
    </section>
  );
};
