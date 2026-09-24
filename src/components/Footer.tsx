import React from 'react';
import { Youtube, Instagram, Send, Github, MessageSquare, ArrowUp, Heart } from 'lucide-react';
import { BRAND, SOCIAL_LINKS } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#enquiry' },
  ];

  return (
    <footer className="bg-[#060709] border-t border-zinc-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-zinc-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-['Syne']">
                {BRAND.name}
              </span>
            </div>

            <p className="text-lg font-semibold text-zinc-200 font-['Syne']">
              "{BRAND.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Professional digital solutions for creators, businesses and modern brands. Modern websites, software applications, video editing and creative engineering from India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-colors"
                  aria-label={s.name}
                  title={s.label}
                >
                  {s.name === 'YouTube' && <Youtube className="w-4 h-4" />}
                  {s.name === 'Instagram' && <Instagram className="w-4 h-4" />}
                  {s.name === 'Telegram Channel' && <Send className="w-4 h-4" />}
                  {s.name === 'Contact on Telegram' && <MessageSquare className="w-4 h-4" />}
                  {s.name === 'GitHub' && <Github className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 font-mono mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact / Social details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 font-mono mb-4">
              Direct Communication
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
              <li>
                <span className="block text-zinc-400 text-[11px]">Direct Telegram:</span>
                <a
                  href={BRAND.telegramDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-red-400 transition-colors font-semibold"
                >
                  {BRAND.telegramUsername}
                </a>
              </li>
              <li>
                <span className="block text-zinc-400 text-[11px]">Telegram Updates:</span>
                <a
                  href="https://t.me/whiee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-sky-400 transition-colors font-semibold"
                >
                  @whiee
                </a>
              </li>
              <li>
                <span className="block text-zinc-400 text-[11px]">GitHub Repo:</span>
                <a
                  href="https://github.com/8WHIE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-white transition-colors font-semibold"
                >
                  github.com/8WHIE
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-[11px] cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>{BRAND.copyright}</p>
          <div className="flex items-center gap-4">
            <span>Built with modern React & Tailwind</span>
            <span aria-hidden="true">·</span>
            <span>Independent Indian Technology Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
