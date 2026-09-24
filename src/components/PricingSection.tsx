import React from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { PRICING_PLANS, BRAND } from '../data/siteData';

interface PricingSectionProps {
  onSelectPlan: (planTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-900">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-3 font-mono">
          <span>Honest & Transparent</span>
          <span aria-hidden="true">·</span>
          <span>Starting Rates</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Syne'] mb-4 text-balance">
          Simple Starting Pricing
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-balance">
          No hidden fees or bloated enterprise tiers. Accessible starting rates for creators, growing businesses, and modern builders.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {PRICING_PLANS.map((plan) => {
          const isDiscuss = plan.startingPrice.toLowerCase().includes('discuss');

          return (
            <div
              key={plan.id}
              className={`relative bg-[#0d0f16] rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 border ${
                plan.highlight
                  ? 'border-red-600/60 shadow-xl shadow-red-950/20'
                  : 'border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider font-mono shadow-md">
                  Popular Choice
                </div>
              )}

              <div>
                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white font-['Syne'] mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                  <span className="block text-[11px] text-zinc-400 uppercase tracking-wider font-mono">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                      {plan.startingPrice}
                    </span>
                    {!isDiscuss && (
                      <span className="text-xs text-zinc-400 font-mono">
                        / base
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Key features */}
                <div className="mb-6">
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2 font-mono">
                    Included in starting tier:
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {plan.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Get Started CTA */}
              <div className="pt-4 border-t border-zinc-800/80 mt-auto">
                <button
                  onClick={() => onSelectPlan(plan.title)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.highlight
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-950/40'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Note on pricing */}
      <div className="max-w-2xl mx-auto text-center p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
        <p className="text-xs sm:text-sm text-zinc-300 font-medium">
          Final pricing depends on project requirements, complexity and delivery timeline.
        </p>
        <p className="text-[11px] text-zinc-400 mt-1">
          Have custom specifications? Message us directly on Telegram{' '}
          <a
            href={BRAND.telegramDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:underline font-semibold"
          >
            {BRAND.telegramUsername}
          </a>{' '}
          for a zero-obligation, instant quote.
        </p>
      </div>
    </section>
  );
};
