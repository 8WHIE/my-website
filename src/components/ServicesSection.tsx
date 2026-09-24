import React, { useState } from 'react';
import { 
  Globe, 
  LayoutGrid, 
  Film, 
  Layers, 
  Palette, 
  Code2, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-red-500" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-red-500" />,
  Film: <Film className="w-6 h-6 text-red-500" />,
  Layers: <Layers className="w-6 h-6 text-red-500" />,
  Palette: <Palette className="w-6 h-6 text-red-500" />,
  Code2: <Code2 className="w-6 h-6 text-red-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-red-500" />,
  Cpu: <Cpu className="w-6 h-6 text-red-500" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEnquiry,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleSelectService = (serviceTitle: string) => {
    onSelectServiceForEnquiry(serviceTitle);
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 mb-3 font-mono">
          <span>Digital Services</span>
          <span aria-hidden="true">·</span>
          <span>Crafted for Scale</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Syne'] mb-4 text-balance">
          Tailored Digital & Creative Capabilities
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-balance">
          Professional technology and content creation solutions built with modern standards, precision execution, and transparent pricing.
        </p>
      </div>

      {/* Services Grid (8 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group relative bg-[#0e1017] hover:bg-[#12141f] border border-zinc-800/80 hover:border-red-900/50 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-red-950/20"
          >
            <div>
              {/* Card Top: Icon & Category */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-red-900/40 group-hover:bg-red-950/20 transition-colors">
                  {iconMap[service.iconName] || <Sparkles className="w-6 h-6 text-red-500" />}
                </div>
                <span className="text-[11px] font-semibold text-zinc-400 font-mono tracking-wider">
                  {service.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2 font-['Syne']">
                {service.title}
              </h3>

              {/* Short Description */}
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {service.shortDescription}
              </p>

              {/* Key Highlights list */}
              <ul className="space-y-1.5 mb-6 text-xs text-zinc-400">
                {service.features.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-500" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Bar: Price & View Details */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between mt-auto">
              <div>
                <span className="block text-[10px] text-zinc-400 uppercase tracking-wider font-mono">
                  Starting Price
                </span>
                <span className="text-sm font-bold text-zinc-200 font-mono">
                  {service.startingPrice}
                </span>
              </div>

              <button
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-red-600 rounded-lg border border-zinc-800 hover:border-red-600 transition-all duration-150 cursor-pointer"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectService={handleSelectService}
      />
    </section>
  );
};
