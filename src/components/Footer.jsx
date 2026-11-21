import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  HardHat, 
  ArrowUp, 
  FileText, 
  ExternalLink,
  Award,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { companyInfo, certifications } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-industrial-950 text-slate-300 border-t-2 border-industrial-800 relative">
      {/* Top Hazard Accent Bar */}
      <div className="h-2 w-full hazard-border"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-industrial-800/80">
          
          {/* Column 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-caterpillar flex items-center justify-center rounded-sm text-black font-black font-heading text-2xl shadow-lg">
                TE
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-heading text-white tracking-wider flex items-center gap-1.5">
                  TITAN <span className="text-caterpillar">EARTHWORKS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 -mt-1">
                  Heavy Civil & Excavation Contractors
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              Building the groundwork for commercial distribution parks, interstate highways, deep foundation pits, and master-planned communities across regional corridors. Over 85 Tier-4 GPS-guided machines ready for rapid mobilization.
            </p>

            {/* License & Bonding Box */}
            <div className="p-3 bg-industrial-900 border border-industrial-800 rounded-sm space-y-1 text-xs font-mono">
              <div className="text-caterpillar font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>License: {companyInfo.licenseNumber}</span>
              </div>
              <div className="text-slate-400">
                Safety EMR: <strong className="text-white">0.71</strong> • OSHA 30 Certified
              </div>
            </div>

            {/* Rapid Dispatch Banner */}
            <div className="pt-2">
              <a 
                href={`tel:${companyInfo.directPhone}`}
                className="inline-flex items-center space-x-2 text-caterpillar hover:text-caterpillar-light font-bold text-xs uppercase font-mono tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>24/7 Heavy Mobilization Desk: {companyInfo.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black font-heading uppercase text-white tracking-wider border-b border-industrial-800 pb-2">
              Civil Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-caterpillar transition-colors flex items-center space-x-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-caterpillar transition-colors" />
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Machine Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black font-heading uppercase text-white tracking-wider border-b border-industrial-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="text-slate-400 hover:text-caterpillar transition-colors">Home Page</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-caterpillar transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-caterpillar transition-colors">Our Services</a></li>
              <li><a href="#machinery" className="text-slate-400 hover:text-caterpillar transition-colors">Machinery Fleet</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-caterpillar transition-colors">Projects Archive</a></li>
              <li><a href="#why-choose-us" className="text-slate-400 hover:text-caterpillar transition-colors">Why Choose Us</a></li>
              <li><a href="#estimator" className="text-slate-400 hover:text-caterpillar transition-colors">Cost Estimator</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-caterpillar transition-colors">Contact & Dispatch</a></li>
            </ul>
          </div>

          {/* Column 4: Operational Terminal & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black font-heading uppercase text-white tracking-wider border-b border-industrial-800 pb-2">
              Operational Terminal
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-caterpillar shrink-0 mt-0.5" />
                <span>
                  {companyInfo.address.street}<br />
                  {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-caterpillar shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-300">Office: Mon–Fri 06:00 - 18:00</span>
                  <span className="block text-emerald-400 font-mono font-bold mt-0.5">
                    Field Dispatch: 24/7 / 365
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-caterpillar shrink-0 mt-0.5" />
                <a href={`mailto:${companyInfo.quotesEmail}`} className="text-slate-200 hover:text-caterpillar font-mono">
                  {companyInfo.quotesEmail}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenQuote()}
                className="w-full py-2.5 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-xs uppercase tracking-wider rounded-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <span>Request Project Proposal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, SVARIO Credit & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved. Registered Heavy Civil General Contractor.
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Strictly compliant with OSHA, EPA, and DOT safety guidelines.
            </p>
          </div>

          {/* SVARIO Digital Solutions Developer Credit */}
          <div className="flex items-center space-x-3">
            <div className="px-3.5 py-1.5 bg-industrial-900 border border-caterpillar/40 rounded-sm text-[11px] font-mono flex items-center space-x-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-caterpillar animate-pulse"></span>
              <span className="text-slate-300">Crafted with Precision by</span>
              <span className="text-white font-bold tracking-wider hover:text-caterpillar transition-colors cursor-pointer">
                SVARIO Digital Solutions
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-industrial-900 hover:bg-caterpillar hover:text-black text-slate-300 rounded-sm border border-industrial-800 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
