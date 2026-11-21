import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Truck, 
  HardHat, 
  Layers, 
  MapPin, 
  PhoneCall,
  Compass,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { companyInfo, companyStats } from '../data/companyData';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-industrial-950">
      {/* Background Image with Cinematic Industrial Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=2000&q=85"
          alt="Heavy Earthmoving Excavator on Construction Site"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Dark Industrial Gradients & Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-950/90 to-industrial-950/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-industrial-950/60"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-10 sm:pt-16 pb-12">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 bg-industrial-900/90 border border-caterpillar/40 rounded-sm mb-6 backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-caterpillar animate-ping"></span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-caterpillar font-mono">
              LICENSED & BONDED HEAVY CIVIL CONTRACTORS • EST. 1998
            </span>
          </div>

          {/* Headline (Exact User Request) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white leading-[0.95] mb-5 uppercase">
            Building the Groundwork for a <span className="text-caterpillar text-glow-yellow">Better Future.</span>
          </h1>

          {/* Subtitle (Exact User Request + Extended Value Proposition) */}
          <p className="text-lg sm:text-xl sm:leading-relaxed text-slate-300 font-medium mb-8 max-w-2xl border-l-2 border-caterpillar pl-4">
            <strong className="text-white block font-semibold mb-1">
              Reliable Earthmoving, Excavation & Construction Solutions.
            </strong>
            Deploying high-tonnage GPS-guided excavators, heavy crawler dozers, and mass hauling fleets to execute complex commercial, infrastructure, and industrial earthworks on schedule and to millimeter tolerance.
          </p>

          {/* Core Feature Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-9">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-industrial-900/80 border border-industrial-800 text-slate-200 text-xs font-semibold rounded-sm">
              <Compass className="w-4 h-4 text-caterpillar" />
              <span>Trimble 3D GPS Laser Guidance</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-industrial-900/80 border border-industrial-800 text-slate-200 text-xs font-semibold rounded-sm">
              <ShieldCheck className="w-4 h-4 text-caterpillar" />
              <span>OSHA 30 Certified Operators</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-industrial-900/80 border border-industrial-800 text-slate-200 text-xs font-semibold rounded-sm">
              <Truck className="w-4 h-4 text-caterpillar" />
              <span>48-Hour Rapid Site Mobilization</span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-4 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-base sm:text-lg uppercase tracking-wider rounded-sm shadow-xl shadow-caterpillar/25 hover:shadow-caterpillar/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-3 group"
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href="#services"
              className="px-8 py-4 bg-industrial-900/90 hover:bg-industrial-850 text-white hover:text-caterpillar font-bold font-heading text-base sm:text-lg uppercase tracking-wider rounded-sm border border-industrial-700 hover:border-caterpillar/60 transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Explore Our Services</span>
            </a>

            <a
              href="#estimator"
              className="px-5 py-4 text-xs uppercase tracking-wider font-bold text-slate-300 hover:text-white flex items-center justify-center space-x-2 transition-colors sm:ml-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Try Cost Estimator</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Key Statistics Counter Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <div className="bg-industrial-900/95 border-y-2 sm:border-2 border-industrial-800 sm:border-caterpillar/40 rounded-none sm:rounded-sm shadow-2xl backdrop-blur-md p-4 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-industrial-800">
            {companyStats.map((stat, idx) => (
              <div key={idx} className={`pt-3 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}>
                <div className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-caterpillar">{stat.value}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 hidden sm:block mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#about"
            className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-caterpillar transition-colors"
          >
            <span>Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-caterpillar" />
          </a>
        </div>
      </div>
    </section>
  );
}
