import React from 'react';
import { 
  X, 
  Cpu, 
  Gauge, 
  Weight, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Truck
} from 'lucide-react';

export default function EquipmentDetailModal({ machine, onClose, onOpenQuote }) {
  if (!machine) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-industrial-900 border-2 border-caterpillar/60 rounded-sm shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Machine Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-industrial-950">
          <img
            src={machine.image}
            alt={machine.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/60 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-industrial-950/80 hover:bg-caterpillar hover:text-black text-white rounded-sm border border-industrial-700 transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Info Overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-2.5 py-1 bg-caterpillar text-black font-black font-heading text-xs uppercase tracking-wider">
                {machine.categoryLabel}
              </span>
              <span className="px-2 py-0.5 bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {machine.status}
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-heading uppercase text-white tracking-tight">
              {machine.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-mono mt-0.5">
              {machine.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Machine Narrative */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-caterpillar mb-1.5 font-bold">
              Engineering Profile & Field Duty
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {machine.description}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-3 font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-caterpillar" />
              Verified Factory & Telematics Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-industrial-950 border border-industrial-800 rounded-sm text-xs">
              {machine.specs.operatingWeight && (
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-slate-400 font-mono">Operating Weight:</span>
                  <span className="text-white font-bold">{machine.specs.operatingWeight}</span>
                </div>
              )}
              {machine.specs.enginePower && (
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-slate-400 font-mono">Flywheel Engine Power:</span>
                  <span className="text-caterpillar font-bold">{machine.specs.enginePower}</span>
                </div>
              )}
              {machine.specs.bucketCapacity && (
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-slate-400 font-mono">Bucket Capacity:</span>
                  <span className="text-white font-bold">{machine.specs.bucketCapacity}</span>
                </div>
              )}
              {machine.specs.bladeCapacity && (
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-slate-400 font-mono">Blade Capacity:</span>
                  <span className="text-white font-bold">{machine.specs.bladeCapacity}</span>
                </div>
              )}
              {machine.specs.payloadCapacity && (
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-slate-400 font-mono">Rated Payload:</span>
                  <span className="text-white font-bold">{machine.specs.payloadCapacity}</span>
                </div>
              )}
              {machine.specs.maxDigDepth && (
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-slate-400 font-mono">Max Dig Depth:</span>
                  <span className="text-white font-bold">{machine.specs.maxDigDepth}</span>
                </div>
              )}
              {machine.specs.moldboardBladeWidth && (
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-slate-400 font-mono">Moldboard Width:</span>
                  <span className="text-white font-bold">{machine.specs.moldboardBladeWidth}</span>
                </div>
              )}
              {machine.specs.techFeatures && (
                <div className="sm:col-span-2 pt-1">
                  <span className="text-slate-400 font-mono block mb-1">On-Board Guidance & Telematics:</span>
                  <span className="text-caterpillar font-bold">{machine.specs.techFeatures}</span>
                </div>
              )}
            </div>
          </div>

          {/* Typical Site Applications */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-2 font-bold">
              Site Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {machine.applications.map((app, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-caterpillar shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-industrial-950 border-t border-industrial-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Available for direct project dispatch or dedicated equipment charter
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase text-slate-300 hover:text-white bg-industrial-800 rounded-sm"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="px-5 py-2 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-xs uppercase tracking-wider rounded-sm flex items-center space-x-1.5 shadow-lg"
            >
              <span>Reserve / Mobilize Machine</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
