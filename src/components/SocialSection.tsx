import React from 'react';
import { Youtube, Instagram, Send, MessageSquare, Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS, BRAND } from '../data/siteData';

export const SocialSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'YouTube':
        return <Youtube className="w-8 h-8 text-red-500" />;
      case 'Instagram':
        return <Instagram className="w-8 h-8 text-pink-500" />;
      case 'Telegram Channel':
        return <Send className="w-8 h-8 text-sky-400" />;
      case 'Contact on Telegram':
        return <MessageSquare className="w-8 h-8 text-cyan-400" />;
      case 'GitHub':
        return <Github className="w-8 h-8 text-slate-200" />;
      default:
        return <ExternalLink className="w-8 h-8 text-red-500" />;
    }
  };

  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-3 font-mono">
          <span>Creator & Community Hub</span>
          <span aria-hidden="true">·</span>
          <span>Stay Connected</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Syne'] mb-4 text-balance">
          Follow 8WHIE
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-balance">
          Join our active channels for video releases, coding experiments, design breakdowns, and direct project consultations.
        </p>
      </div>

      {/* Large Professional Social Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#0d0f16] hover:bg-[#121520] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-7 transition-all duration-200 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/70 cursor-pointer"
          >
            <div>
              {/* Card Top: Icon & Arrow */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                  {getIcon(item.name)}
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Handle */}
              <div className="mb-3">
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider font-mono block mb-1">
                  {item.label}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors font-['Syne'] flex items-center gap-2">
                  <span>{item.name}</span>
                </h3>
                <span className="text-xs font-mono text-red-400 font-semibold mt-0.5 block">
                  {item.handle}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Launch link bar */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-300 group-hover:text-white">
                Visit Official {item.name}
              </span>
              <span className="text-xs text-zinc-400 font-mono flex items-center gap-1 group-hover:text-red-400">
                <span>Open Link</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Direct Telegram Chat Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 border border-red-900/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-xl bg-sky-950/60 border border-sky-800/50 text-sky-400 shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white font-['Syne']">
              Need immediate project discussion or custom quote?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Ping Aryan directly on Telegram ({BRAND.telegramUsername}) for quick responses within a few hours.
            </p>
          </div>
        </div>

        <a
          href={BRAND.telegramDirect}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-3 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-sky-950/40"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Chat on Telegram</span>
        </a>
      </div>
    </section>
  );
};
