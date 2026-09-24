import React, { useEffect } from 'react';
import { X, Check, Clock, IndianRupee, ArrowRight, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { BRAND } from '../data/siteData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectService,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleGetStarted = () => {
    onSelectService(service.title);
    onClose();
  };

  const telegramOrderMessage = encodeURIComponent(
    `Hello 8WHIE! I'm interested in your "${service.title}" service (Starting from ${service.startingPrice}). Can we discuss project details?`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e1017] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 text-left my-8"
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
          <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider mb-2 font-mono">
            <span>{service.category}</span>
            <span aria-hidden="true">·</span>
            <span>8WHIE Digital</span>
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white font-['Syne']">
            {service.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/40 border border-red-900/50 text-red-400 font-semibold font-mono">
              <span>Starting from {service.startingPrice}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Est. Delivery: {service.estimatedDelivery}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDescription}
        </p>

        {/* Two-column features and deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 py-5 border-y border-zinc-800/80">
          {/* What's Included */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span>What's Included</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
              <span>Deliverables & Handoff</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {service.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing disclaimer */}
        <p className="text-xs text-zinc-400 mb-6 italic">
          * Final pricing depends on project requirements, complexity and delivery timeline.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleGetStarted}
            className="w-full sm:flex-1 px-5 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 cursor-pointer"
          >
            <span>Get Started with {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://t.me/Arnxkt?text=${telegramOrderMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 hover:text-white rounded-xl border border-zinc-800 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5 text-sky-400" />
            <span>Chat on Telegram</span>
          </a>
        </div>
      </div>
    </div>
  );
};
