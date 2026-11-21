import React, { useState } from 'react';
import { 
  Truck, 
  Cpu, 
  Gauge, 
  Weight, 
  SlidersHorizontal, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { machineryData, machineryCategories } from '../data/machineryData';
import EquipmentDetailModal from './EquipmentDetailModal';

export default function MachinerySection({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMachine, setSelectedMachine] = useState(null);

  const filteredMachinery = activeCategory === 'all'
    ? machineryData
    : machineryData.filter((item) => item.category === activeCategory);

  return (
    <section id="machinery" className="py-20 sm:py-28 bg-industrial-950 relative border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-caterpillar/10 border border-caterpillar/30 rounded-sm mb-3">
              <Truck className="w-4 h-4 text-caterpillar" />
              <span className="text-xs font-mono uppercase tracking-widest text-caterpillar font-bold">
                Owned Heavy Iron Fleet
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
              Modern Machinery & <span className="text-caterpillar">Equipment Fleet</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              We own and maintain over 85 late-model Tier-4 heavy production machines. 100% equipped with Trimble 3D GPS guidance, on-board payload weighing, and digital fleet telematics.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 px-3 py-2 bg-industrial-900 border border-industrial-800 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Average Fleet Age &lt; 3.2 Years
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {machineryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold font-heading uppercase tracking-wider rounded-sm transition-all whitespace-nowrap border ${
                activeCategory === cat.id
                  ? 'bg-caterpillar text-black border-caterpillar shadow-lg shadow-caterpillar/20'
                  : 'bg-industrial-900 text-slate-300 border-industrial-800 hover:border-caterpillar/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachinery.map((machine) => (
            <div
              key={machine.id}
              className="bg-industrial-900 border border-industrial-800 hover:border-caterpillar/60 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Machine Photo */}
                <div className="relative h-56 w-full overflow-hidden bg-industrial-950">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/40 to-transparent"></div>

                  {/* Top Badge: Category & Status */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-industrial-950/90 border border-caterpillar/40 text-caterpillar px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-bold rounded-sm backdrop-blur-sm">
                      {machine.categoryLabel}
                    </span>
                    <span className="bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 px-2 py-0.5 text-[10px] font-mono font-bold flex items-center gap-1 rounded-sm backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {machine.status}
                    </span>
                  </div>

                  {/* Highlight Bar */}
                  <div className="absolute bottom-3 left-3 right-3 bg-industrial-950/90 border border-industrial-800 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-400">Technology:</span>
                      <span className="text-caterpillar font-bold">{machine.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Machine Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black font-heading uppercase text-white group-hover:text-caterpillar transition-colors">
                    {machine.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4 mt-0.5">
                    {machine.tagline}
                  </p>

                  {/* Technical Specs List */}
                  <div className="p-3 bg-industrial-950 border border-industrial-800/80 rounded-sm space-y-2 mb-4 text-xs">
                    {machine.specs.operatingWeight && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-mono">Operating Weight:</span>
                        <span className="font-bold text-white">{machine.specs.operatingWeight}</span>
                      </div>
                    )}
                    {machine.specs.enginePower && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-mono">Engine Horsepower:</span>
                        <span className="font-bold text-caterpillar">{machine.specs.enginePower}</span>
                      </div>
                    )}
                    {(machine.specs.bucketCapacity || machine.specs.bladeCapacity || machine.specs.payloadCapacity) && (
                      <div className="flex justify-between items-center text-slate-300">
                        <span className="text-slate-400 font-mono">Rated Capacity:</span>
                        <span className="font-bold text-white">
                          {machine.specs.bucketCapacity || machine.specs.bladeCapacity || machine.specs.payloadCapacity}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {machine.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedMachine(machine)}
                  className="w-1/2 py-2.5 bg-industrial-800 hover:bg-industrial-700 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Full Specs</span>
                  <ExternalLink className="w-3.5 h-3.5 text-caterpillar" />
                </button>
                <button
                  onClick={() => onOpenQuote()}
                  className="w-1/2 py-2.5 bg-caterpillar hover:bg-caterpillar-light text-black text-xs font-black font-heading uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1 shadow-md"
                >
                  <span>Mobilize</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Maintenance & Telematics Guarantee Strip */}
        <div className="mt-16 p-6 sm:p-8 bg-industrial-900 border border-industrial-800 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-industrial-800">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-caterpillar/10 rounded-sm flex items-center justify-center text-caterpillar shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase text-white font-heading">Digital Fleet Telematics</h4>
                <p className="text-xs text-slate-400 mt-0.5">Real-time oil pressure, hydraulic temp, and payload sensors prevent field breakdown.</p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-caterpillar/10 rounded-sm flex items-center justify-center text-caterpillar shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase text-white font-heading">24/7 Mobile Service Trucks</h4>
                <p className="text-xs text-slate-400 mt-0.5">Dedicated mobile lube-and-repair rigs with master mechanics deployed directly to job sites.</p>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-caterpillar/10 rounded-sm flex items-center justify-center text-caterpillar shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase text-white font-heading">Tier 4 Final Low-Emission</h4>
                <p className="text-xs text-slate-400 mt-0.5">Meets EPA strict urban air quality criteria, qualified for LEED certified civil sites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Detail Modal */}
      {selectedMachine && (
        <EquipmentDetailModal
          machine={selectedMachine}
          onClose={() => setSelectedMachine(null)}
          onOpenQuote={onOpenQuote}
        />
      )}
    </section>
  );
}
