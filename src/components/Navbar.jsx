import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight, 
  HardHat, 
  Wrench,
  MessageCircle,
  Truck
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ onOpenQuote, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Machinery & Fleet', href: '#machinery' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Cost Estimator', href: '#estimator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Dispatch Notification Bar */}
      <div className="bg-industrial-950/95 border-b border-industrial-800 text-xs text-slate-300 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">
                Fleet Status: 85+ Active Heavy Units Ready
              </span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-caterpillar" />
              <span>Dallas-Fort Worth Hub & Regional Corridor</span>
            </div>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-caterpillar" />
              <span>OSHA 30 Certified • Bonded to $50M</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <a 
              href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(companyInfo.whatsappDefaultMsg)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
            <div className="h-3 w-px bg-industrial-800"></div>
            <a 
              href={`tel:${companyInfo.directPhone}`} 
              className="flex items-center space-x-1.5 font-bold text-caterpillar hover:text-caterpillar-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 Dispatch: {companyInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-industrial-950/95 backdrop-blur-md border-b border-caterpillar/30 shadow-2xl py-3' 
            : 'bg-industrial-900/90 backdrop-blur-sm border-b border-industrial-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Company Identity */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-11 h-11 bg-caterpillar flex items-center justify-center rounded-sm text-black font-black font-heading text-2xl shadow-lg shadow-caterpillar/20 group-hover:scale-105 transition-transform">
                  <span className="tracking-tighter">TE</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-industrial-950 border border-caterpillar rounded-none flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-caterpillar"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-heading text-white tracking-wider flex items-center gap-1.5">
                  TITAN <span className="text-caterpillar">EARTHWORKS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 -mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-caterpillar rounded-full inline-block"></span>
                  Heavy Civil & Precision Excavation
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs xl:text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-caterpillar transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-caterpillar transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => onOpenQuote()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs xl:text-sm font-black font-heading uppercase tracking-wider text-black bg-caterpillar hover:bg-caterpillar-light transition-all duration-200 shadow-lg shadow-caterpillar/25 hover:shadow-caterpillar/40 active:translate-y-0.5 group rounded-sm"
              >
                <span>Request A Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden space-x-2">
              <button
                onClick={() => onOpenQuote()}
                className="px-3 py-1.5 text-xs font-black font-heading uppercase text-black bg-caterpillar rounded-sm"
              >
                Quote
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-caterpillar bg-industrial-800 rounded-sm border border-industrial-700"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-industrial-950 border-b border-caterpillar/40 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-2xl animate-fadeIn">
            <div className="grid grid-cols-1 divide-y divide-industrial-800">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-caterpillar flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-industrial-800 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading uppercase tracking-wider flex items-center justify-center space-x-2 rounded-sm shadow-md"
              >
                <span>Request Free Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${companyInfo.directPhone}`}
                className="w-full py-2.5 bg-industrial-850 hover:bg-industrial-800 text-caterpillar font-bold text-xs uppercase tracking-wider border border-caterpillar/40 flex items-center justify-center space-x-2 rounded-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Emergency Dispatch: {companyInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
