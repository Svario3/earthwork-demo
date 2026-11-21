import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MachinerySection from './components/MachinerySection';
import ProjectsSection from './components/ProjectsSection';
import WhyChooseUs from './components/WhyChooseUs';
import CostEstimator from './components/CostEstimator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState('');
  const [contactPrefillData, setContactPrefillData] = useState(null);

  // Open modal with specific service
  const handleOpenQuote = (serviceName = '') => {
    setQuoteInitialService(serviceName);
    setIsQuoteModalOpen(true);
  };

  // When a service card "Get Quote" is clicked
  const handleSelectServiceForQuote = (serviceTitle) => {
    setContactPrefillData({
      service: serviceTitle
    });
    // Scroll down to contact section smoothly
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Apply Estimate to Formal Quote Form" in CostEstimator
  const handleApplyEstimateToQuote = (estimateData) => {
    setContactPrefillData(estimateData);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col selection:bg-caterpillar selection:text-black">
      {/* Fixed Navigation Header */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* 2. About Us Section */}
        <AboutSection 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* 3. Our Services Section (8 Core Services) */}
        <ServicesSection 
          onOpenQuote={() => handleOpenQuote()}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* 4. Machinery & Equipment Fleet (6 Machine Classes) */}
        <MachinerySection 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* 5. Projects Showcase with Interactive Before/After Slider */}
        <ProjectsSection 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* 6. Why Choose Us (6 Pillars & Testimonials) */}
        <WhyChooseUs 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* 7. Interactive Earthworks Cost & Volume Estimator */}
        <CostEstimator 
          onApplyEstimateToQuote={handleApplyEstimateToQuote} 
        />

        {/* 8. Contact & Formal Bid Request Hub */}
        <ContactSection 
          prefillData={contactPrefillData}
          onClearPrefill={() => setContactPrefillData(null)}
        />
      </main>

      {/* Footer & Accreditations */}
      <Footer 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        initialService={quoteInitialService}
      />

      {/* WhatsApp Floating Contact Action */}
      <WhatsAppFloatingButton />
    </div>
  );
}
