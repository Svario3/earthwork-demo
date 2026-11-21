import React from 'react';
import { 
  HardHat, 
  Cpu, 
  ShieldAlert, 
  Zap, 
  CheckCircle, 
  DollarSign, 
  Quote, 
  ArrowRight,
  ShieldCheck,
  Star,
  Clock
} from 'lucide-react';
import { whyChooseUsPillars, testimonials, faqs } from '../data/companyData';

export default function WhyChooseUs({ onOpenQuote }) {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'HardHat': return <HardHat className="w-7 h-7 text-caterpillar" />;
      case 'Cpu': return <Cpu className="w-7 h-7 text-caterpillar" />;
      case 'ShieldAlert': return <ShieldAlert className="w-7 h-7 text-caterpillar" />;
      case 'Zap': return <Zap className="w-7 h-7 text-caterpillar" />;
      case 'CheckCircle': return <CheckCircle className="w-7 h-7 text-caterpillar" />;
      case 'DollarSign': return <DollarSign className="w-7 h-7 text-caterpillar" />;
      default: return <ShieldCheck className="w-7 h-7 text-caterpillar" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-industrial-900 relative border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-caterpillar/10 border border-caterpillar/30 rounded-sm mb-3">
            <ShieldCheck className="w-4 h-4 text-caterpillar" />
            <span className="text-xs font-mono uppercase tracking-widest text-caterpillar font-bold">
              The Titan Advantage
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Why Top Developers & General Contractors <span className="text-caterpillar">Trust Titan</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Ground conditions are unpredictable; our field execution is not. Here is why the industry's premier commercial builders rely on our operators and machine guidance.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {whyChooseUsPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-7 bg-industrial-950 border border-industrial-800 hover:border-caterpillar/60 rounded-sm group transition-all duration-300 shadow-xl relative flex flex-col justify-between"
            >
              <div>
                {/* Icon & Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-industrial-900 border border-industrial-800 group-hover:border-caterpillar/50 rounded-sm flex items-center justify-center transition-colors">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-caterpillar px-2.5 py-1 bg-caterpillar/10 border border-caterpillar/20 rounded-sm">
                    {pillar.short}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black font-heading uppercase text-white group-hover:text-caterpillar transition-colors mb-2">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="pt-4 border-t border-industrial-800/80">
                <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  {pillar.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Carousel/Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase text-white">
              Endorsed by Field <span className="text-caterpillar">Leaders & Engineers</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Read direct feedback from the project executives and senior superintendents who partner with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="p-7 bg-industrial-950 border border-industrial-800 rounded-sm flex flex-col justify-between shadow-xl relative"
              >
                <div>
                  <div className="flex items-center space-x-1 text-caterpillar mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-caterpillar text-caterpillar" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-industrial-800">
                  <div className="font-bold text-white text-sm uppercase font-heading">{t.author}</div>
                  <div className="text-xs text-caterpillar font-mono">{t.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{t.company} • <span className="text-slate-300">{t.project}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Strip */}
        <div className="bg-industrial-950 border border-industrial-800 p-8 rounded-sm">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-black font-heading uppercase text-white">
              Frequently Asked <span className="text-caterpillar">Contractor Questions</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Clear answers regarding our mobilization protocols, GPS technology, and bidding procedures.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 bg-industrial-900 border border-industrial-800/80 rounded-sm">
                <h4 className="text-sm font-bold uppercase text-white font-heading flex items-center gap-2 mb-2">
                  <span className="text-caterpillar font-mono">Q{idx + 1}.</span>
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
