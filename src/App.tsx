/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { SocialSection } from './components/SocialSection';
import { EnquirySection } from './components/EnquirySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [targetService, setTargetService] = useState<string>('Website Development');

  const scrollToEnquiry = (serviceName?: string) => {
    if (serviceName) {
      setTargetService(serviceName);
    }
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-zinc-100 flex flex-col selection:bg-red-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenEnquiry={() => scrollToEnquiry()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreServices={scrollToServices}
          onContactClick={() => scrollToEnquiry()}
        />

        {/* Services Section */}
        <ServicesSection
          onSelectServiceForEnquiry={(serviceTitle) => scrollToEnquiry(serviceTitle)}
        />

        {/* Pricing Section */}
        <PricingSection
          onSelectPlan={(planTitle) => scrollToEnquiry(planTitle)}
        />

        {/* Portfolio Section with Demo/Sample tag and filters */}
        <PortfolioSection
          onRequestProject={(categoryHint) => scrollToEnquiry(`${categoryHint} Project`)}
        />

        {/* About 8WHIE Section */}
        <AboutSection
          onContactClick={() => scrollToEnquiry()}
        />

        {/* Creator / Social Channels Section (Follow 8WHIE) */}
        <SocialSection />

        {/* Order / Project Enquiry Form */}
        <EnquirySection initialService={targetService} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
