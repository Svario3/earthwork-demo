import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Activity, 
  FileText 
} from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onSelectServiceForQuote }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-industrial-900 border-2 border-caterpillar/60 rounded-sm shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/60 to-transparent"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-industrial-950/80 hover:bg-caterpillar hover:text-black text-white rounded-sm border border-industrial-700 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-caterpillar text-black font-black font-heading text-xs uppercase tracking-wider mb-2">
              {service.badge}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-heading uppercase text-white tracking-tight">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-mono mt-1">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Scope Narrative */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-caterpillar mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Service Overview & Engineered Scope
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-industrial-950 border border-industrial-800 rounded-sm">
            <div>
              <span className="text-[11px] uppercase font-mono text-slate-400 block">Daily Production Throughput</span>
              <span className="text-sm font-bold text-white">{service.specs.capacity}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase font-mono text-slate-400 block">Grade & Depth Tolerance</span>
              <span className="text-sm font-bold text-caterpillar">{service.specs.tolerance}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase font-mono text-slate-400 block">Primary Fleet Deployed</span>
              <span className="text-sm font-bold text-white">{service.specs.equipment}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase font-mono text-slate-400 block">Ideal Applications</span>
              <span className="text-sm font-bold text-slate-200">{service.specs.idealFor}</span>
            </div>
          </div>

          {/* Key Deliverables & Operations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Activity className="w-4 h-4 text-caterpillar" />
              Engineered Execution Features
            </h4>
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-caterpillar shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Handover Quality Assurance */}
          <div className="p-4 bg-caterpillar/10 border-l-4 border-caterpillar rounded-r-sm">
            <span className="text-xs font-black uppercase tracking-wider text-caterpillar block mb-1">
              Guaranteed Handover Deliverable
            </span>
            <p className="text-xs sm:text-sm text-slate-200">
              {service.deliverables}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-industrial-950 border-t border-industrial-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Backed by $50M General Liability & Geotechnical Guarantee</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-industrial-800 hover:bg-industrial-700 rounded-sm"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectServiceForQuote(service.title);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-xs uppercase tracking-wider rounded-sm flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Quote This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
