import React from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Clock, 
  Layers, 
  Truck, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-industrial-900 border-2 border-caterpillar/60 rounded-sm shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-industrial-950">
          <img
            src={project.image}
            alt={project.title}
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

          {/* Header Info */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-1 bg-caterpillar text-black font-black font-heading text-xs uppercase tracking-wider inline-block mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-heading uppercase text-white tracking-tight">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300 mt-1">
              <span className="flex items-center gap-1 text-caterpillar">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
              <span>•</span>
              <span>Client: {project.client}</span>
              <span>•</span>
              <span className="text-white font-bold">{project.completionDate}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Key Stat Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-industrial-950 border border-industrial-800 rounded-sm">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Total Volume Shifted</span>
              <span className="text-base font-black font-heading text-caterpillar">{project.volumeMoved}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Project Duration</span>
              <span className="text-base font-black font-heading text-white">{project.duration}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">Facility Scope</span>
              <span className="text-base font-black font-heading text-slate-200">{project.badge}</span>
            </div>
          </div>

          {/* Narrative Overview */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-caterpillar mb-1.5 font-bold">
              Engineering Scope & Execution
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights & Tolerances */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-2 font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Civil Engineering Achievements
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 bg-caterpillar rounded-full mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Machinery Fleet Deployed */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-white mb-2 font-bold flex items-center gap-2">
              <Truck className="w-4 h-4 text-caterpillar" />
              Heavy Machinery Fleet Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.machineryUsed.map((m, idx) => (
                <span key={idx} className="px-3 py-1 bg-industrial-950 border border-industrial-800 text-xs font-mono text-slate-200 rounded-sm">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-industrial-950 border-t border-industrial-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 hidden sm:block font-mono">
            Full geotechnical logs and as-built topography archived in our project registry.
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
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
              <span>Bid My Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
