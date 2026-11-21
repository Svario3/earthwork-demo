import React, { useState } from 'react';
import { 
  TreePine, 
  Shovel, 
  Ruler, 
  Route, 
  Layers, 
  Hammer, 
  Truck, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  Wrench,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import ServiceDetailModal from './ServiceDetailModal';

export default function ServicesSection({ onOpenQuote, onSelectServiceForQuote }) {
  const [selectedService, setSelectedService] = useState(null);

  // Helper to map icon string to Lucide icon
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'TreePine': return <TreePine className="w-6 h-6" />;
      case 'Shovel': return <Shovel className="w-6 h-6" />;
      case 'Ruler': return <Ruler className="w-6 h-6" />;
      case 'Route': return <Route className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      default: return <Wrench className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-industrial-900 relative border-b border-industrial-800">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f293f_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-caterpillar/10 border border-caterpillar/30 rounded-sm mb-3">
              <Wrench className="w-4 h-4 text-caterpillar" />
              <span className="text-xs font-mono uppercase tracking-widest text-caterpillar font-bold">
                Heavy Civil Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
              Comprehensive <span className="text-caterpillar">Earthmoving & Excavation</span> Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              From virgin acreage clearing to deep basement pits and precision subgrade leveling, our GPS-guided iron and certified teams execute every stage of ground readiness.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-3 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-xs uppercase tracking-wider rounded-sm shadow-md transition-all flex items-center space-x-2"
            >
              <span>Request Bid Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="bg-industrial-950 border border-industrial-800 hover:border-caterpillar/60 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* Card Image Header with Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-industrial-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/40 to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-industrial-950/90 border border-caterpillar/40 text-caterpillar px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-bold rounded-sm backdrop-blur-sm">
                  {service.badge}
                </div>

                {/* Floating Icon Box */}
                <div className="absolute bottom-3 right-3 w-11 h-11 bg-caterpillar text-black flex items-center justify-center rounded-sm shadow-lg group-hover:bg-caterpillar-light transition-colors">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black font-heading uppercase text-white group-hover:text-caterpillar transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Mini-List */}
                  <div className="space-y-1.5 mb-4 border-t border-industrial-800/80 pt-3">
                    <div className="text-[11px] font-mono text-caterpillar uppercase tracking-wider">
                      Target Tolerance: <span className="text-slate-200">{service.specs.tolerance}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Fleet: <span className="text-slate-300">{service.specs.equipment}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-industrial-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider flex items-center gap-1 group/btn"
                  >
                    <span>View Scope</span>
                    <ExternalLink className="w-3.5 h-3.5 text-caterpillar group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="px-3 py-1.5 bg-industrial-800 hover:bg-caterpillar hover:text-black text-caterpillar text-xs font-bold font-heading uppercase tracking-wider rounded-sm transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action Strip */}
        <div className="mt-14 p-6 bg-industrial-950 border border-caterpillar/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-caterpillar/10 border border-caterpillar/40 rounded-sm flex items-center justify-center text-caterpillar shrink-0">
              <Shovel className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-black font-heading uppercase text-white">
                Have a Complex or Multi-Phase Civil Project?
              </h4>
              <p className="text-xs text-slate-400">
                Upload your civil plan PDFs or CAD drawings directly for an in-depth 3D volumetric AGTEK takeoff within 24 hours.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-xs uppercase tracking-wider rounded-sm shrink-0 shadow-lg"
          >
            Submit Plans for Bidding
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectServiceForQuote={onSelectServiceForQuote}
        />
      )}
    </section>
  );
}
