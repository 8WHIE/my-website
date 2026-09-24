import React from 'react';
import { 
  Code, 
  Terminal, 
  Layers, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Send
} from 'lucide-react';
import { BRAND } from '../data/siteData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const principles = [
    {
      title: 'Real Engineering, No Bloat',
      desc: 'We write clean, semantic TypeScript, React, and modern CSS without relying on clumsy page-builder templates or heavyweight abandonware.',
      icon: <Terminal className="w-5 h-5 text-red-500" />,
    },
    {
      title: 'Creator-Grade Visual Craft',
      desc: 'Whether editing YouTube long-form content or designing bespoke digital products, our aesthetic standards prioritize high viewer retention and visual clarity.',
      icon: <Layers className="w-5 h-5 text-red-500" />,
    },
    {
      title: 'Transparent Collaboration',
      desc: 'No vague agency bureaucracy. You communicate directly with the builder on Telegram or Email with clear milestone updates and upfront pricing.',
      icon: <Zap className="w-5 h-5 text-red-500" />,
    },
  ];

  const workflow = [
    {
      step: '01',
      name: 'Discovery & Consultation',
      detail: 'We evaluate your goal, discuss reference aesthetics, and outline a fixed milestone plan.',
    },
    {
      step: '02',
      name: 'Design & Architecture',
      detail: 'Interactive Figma wireframes, component structure, or video narrative pacing blueprints.',
    },
    {
      step: '03',
      name: 'Build & Production',
      detail: 'Production-ready code execution, asset rendering, responsive testing, and revision refinement.',
    },
    {
      step: '04',
      name: 'Deployment & Delivery',
      detail: 'Live web hosting setup, clean repository handover, or 4K/FHD master exports.',
    },
  ];

  const tools = [
    'React 19',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'Figma',
    'Premiere Pro',
    'After Effects',
    'Vite',
    'Git / GitHub',
    'Docker',
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-3 font-mono">
          <span>Brand Identity</span>
          <span aria-hidden="true">·</span>
          <span>Engineering Philosophy</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Syne'] mb-6 text-balance">
          About {BRAND.name}
        </h2>
        <p className="text-lg sm:text-xl text-zinc-200 font-medium leading-relaxed mb-4">
          "{BRAND.aboutSummary}"
        </p>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Founded as an independent technology studio and creator brand in India, 8WHIE bridges the gap between deep technical coding expertise and high-impact digital storytelling. We build products, edit high-retention video content, design digital interfaces, and solve technical hurdles for founders, creators, and ambitious businesses worldwide.
        </p>
      </div>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {principles.map((principle, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0d0f16] border border-zinc-800/80 flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="p-3 w-fit rounded-xl bg-zinc-900 border border-zinc-800 mb-4">
                {principle.icon}
              </div>
              <h3 className="text-lg font-bold text-white font-['Syne'] mb-2">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {principle.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 4-Step Process Section */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0d0f16] border border-zinc-800/80 mb-16">
        <div className="max-w-xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-red-500 font-mono block mb-1">
            Execution Roadmap
          </span>
          <h3 className="text-2xl font-bold text-white font-['Syne']">
            How Every Project Moves from Concept to Production
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflow.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-3xl font-extrabold text-red-500/80 font-mono mb-2">
                {item.step}
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-['Syne']">
                {item.name}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack & Creative Suite */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2">
            Standard Technology & Tool Suite
          </h4>
          <p className="text-xs text-zinc-400 max-w-xl">
            Modern, industry-tested technologies powering high performance, SEO discoverability, and rapid iteration.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <button
            onClick={onContactClick}
            className="px-6 py-3 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-red-950/40 whitespace-nowrap"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
