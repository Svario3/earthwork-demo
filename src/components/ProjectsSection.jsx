import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  Calendar, 
  ArrowRight, 
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import { projectsData, projectCategories } from '../data/projectsData';
import BeforeAfterSlider from './BeforeAfterSlider';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectsSection({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-industrial-950 relative border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-caterpillar/10 border border-caterpillar/30 rounded-sm mb-3">
            <Building2 className="w-4 h-4 text-caterpillar" />
            <span className="text-xs font-mono uppercase tracking-widest text-caterpillar font-bold">
              Proven Project Execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Featured <span className="text-caterpillar">Civil & Earthmoving</span> Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Explore our track record of mega distribution centers, interstate highways, deep subterranean building pits, and master-planned terrain terracing.
          </p>
        </div>

        {/* 1. Interactive Before and After Comparison Slider */}
        <BeforeAfterSlider />

        {/* 2. Gallery Header & Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h3 className="text-xl sm:text-2xl font-black font-heading uppercase text-white">
            Project Archive & Portfolio
          </h3>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-bold font-heading uppercase tracking-wider rounded-sm transition-all whitespace-nowrap border ${
                  activeCategory === cat.id
                    ? 'bg-caterpillar text-black border-caterpillar shadow-md'
                    : 'bg-industrial-900 text-slate-300 border-industrial-800 hover:border-caterpillar/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-industrial-900 border border-industrial-800 hover:border-caterpillar/60 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Photo & Overlays */}
                <div className="relative h-60 w-full overflow-hidden bg-industrial-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/40 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-industrial-950/90 border border-caterpillar/40 text-caterpillar px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-bold rounded-sm backdrop-blur-sm">
                    {project.categoryLabel}
                  </div>

                  {/* Volume Shifted Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-industrial-950/90 border border-industrial-800 px-3 py-1.5 rounded-sm backdrop-blur-sm flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Volume:</span>
                    <span className="text-caterpillar font-bold">{project.volumeMoved}</span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-caterpillar" />
                    <span>{project.location}</span>
                  </div>

                  <h4 className="text-xl font-black font-heading uppercase text-white group-hover:text-caterpillar transition-colors mb-2">
                    {project.title}
                  </h4>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="text-[11px] font-mono text-slate-400 border-t border-industrial-800/80 pt-3 flex justify-between items-center">
                    <span>Client: <strong className="text-slate-200">{project.client}</strong></span>
                    <span className="text-emerald-400 font-bold">{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 bg-industrial-950 hover:bg-caterpillar hover:text-black text-slate-200 text-xs font-black font-heading uppercase tracking-wider border border-industrial-800 hover:border-caterpillar rounded-sm transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>View Full Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5 text-caterpillar group-hover/btn:text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
            Need references or geotechnical records for a specific commercial sector?
          </p>
          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3 bg-industrial-900 hover:bg-industrial-850 text-caterpillar hover:text-white border border-caterpillar/40 font-bold font-heading text-xs uppercase tracking-wider rounded-sm transition-all shadow-md inline-flex items-center space-x-2"
          >
            <span>Request Full Project Reference Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuote={onOpenQuote}
        />
      )}
    </section>
  );
}
