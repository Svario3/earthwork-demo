import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  HardHat, 
  Wrench, 
  Users, 
  FileCheck,
  ChevronRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { companyInfo, leadershipTeam, certifications, coreValues } from '../data/companyData';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="about" className="py-20 sm:py-28 bg-industrial-950 relative border-b border-industrial-800">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caterpillar/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-caterpillar/10 border border-caterpillar/30 rounded-sm mb-3">
            <HardHat className="w-4 h-4 text-caterpillar" />
            <span className="text-xs font-mono uppercase tracking-widest text-caterpillar font-bold">
              About Titan Earthworks
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Engineering Ground Stability With <span className="text-caterpillar">Uncompromising Precision.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Since 1998, Titan Earthworks has established itself as an elite heavy civil, earthmoving, and deep excavation contractor. We operate an owned fleet of over 85 Tier-4 heavy machinery units, tackling challenging topographies, strict geotechnical specifications, and aggressive commercial schedules with zero compromise on safety.
          </p>
        </div>

        {/* 2-Column Story & Key Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-sm overflow-hidden border-2 border-industrial-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
                alt="Earthmoving Excavator and GPS Grade Control Operator"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent opacity-80"></div>
              
              {/* Overlay Stat Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-industrial-900/95 border border-caterpillar/40 backdrop-blur-md rounded-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Total Volume Excavated</span>
                    <span className="text-2xl font-black font-heading text-caterpillar">4.8+ Million Cubic Yards</span>
                  </div>
                  <div className="w-12 h-12 bg-caterpillar/10 rounded-full flex items-center justify-center border border-caterpillar/30">
                    <TrendingUp className="w-6 h-6 text-caterpillar" />
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Accent Badge on Left Corner */}
            <div className="absolute -top-4 -left-4 bg-caterpillar text-black px-4 py-2 font-black font-heading text-sm uppercase tracking-wider shadow-xl z-20">
              26+ Years Proven Record
            </div>
            {/* Subtle Hazard Outline Box Behind */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-caterpillar/30 -z-0 hidden sm:block"></div>
          </div>

          {/* Right Column: Mission, Vision & Core Strengths */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mission Card */}
              <div className="p-5 bg-industrial-900/80 border border-industrial-800 rounded-sm hover:border-caterpillar/40 transition-colors">
                <div className="w-10 h-10 bg-caterpillar/10 flex items-center justify-center rounded-sm text-caterpillar mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black font-heading uppercase text-white mb-2">Our Mission</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To deliver rock-solid ground stability, millimetric grading accuracy, and sustainable mass earth balancing through cutting-edge telematics and seasoned field masters.
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-5 bg-industrial-900/80 border border-industrial-800 rounded-sm hover:border-caterpillar/40 transition-colors">
                <div className="w-10 h-10 bg-caterpillar/10 flex items-center justify-center rounded-sm text-caterpillar mb-3">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black font-heading uppercase text-white mb-2">Our Vision</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To be the civil engineering contractor of first choice across commercial and municipal corridors, setting benchmark standards for safety, technology, and execution speed.
                </p>
              </div>
            </div>

            {/* Safety & Expertise Narrative */}
            <div className="p-6 bg-industrial-900/60 border-l-4 border-caterpillar rounded-r-sm space-y-3">
              <h4 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-caterpillar" />
                Experience, Reliability & Safety First
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Earthmoving is high-stakes engineering. A slight grading deviation or sub-par soil compaction can compromise multimillion-dollar structures. That is why Titan enforces strict ASTM geotechnical testing, real-time drone LiDAR surface surveys, and a mandatory zero-incident safety program with an industry-leading EMR score of 0.71.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Licensed General Contractor</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>$50M Single-Project Bonding</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Trimble 3D Machine Control</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>In-House Geotechnical Team</span>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center space-x-2 text-sm font-bold font-heading uppercase tracking-wider text-caterpillar hover:text-caterpillar-light transition-colors group"
              >
                <span>Request Comprehensive Company Prequalification Package</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Operational Integrity */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase text-white">
              The Four Pillars of <span className="text-caterpillar">Field Excellence</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every cubic yard shifted on your job site is governed by our strict operational standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 bg-industrial-900 border border-industrial-800 hover:border-caterpillar/50 transition-all rounded-sm group relative"
              >
                <div className="w-12 h-12 bg-industrial-800 flex items-center justify-center rounded-sm text-caterpillar mb-4 group-hover:bg-caterpillar group-hover:text-black transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black font-heading uppercase text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Equipment Management Overview */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-industrial-900 border border-industrial-800 text-caterpillar text-xs font-mono uppercase tracking-widest font-bold mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Executive Command</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black font-heading uppercase text-white">
                Seasoned Field Command & <span className="text-caterpillar">Fleet Engineers</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-2 md:mt-0">
              Over 90 combined years of heavy civil engineering, massive volumetric modeling, and on-site superintendence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, idx) => (
              <div 
                key={idx}
                className="bg-industrial-900 border border-industrial-800 rounded-sm overflow-hidden group hover:border-caterpillar/60 transition-all shadow-xl"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-caterpillar text-black px-2 py-0.5 text-[10px] font-black uppercase font-heading">
                    {leader.experience}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-black font-heading uppercase text-white">{leader.name}</h4>
                  <div className="text-xs font-bold text-caterpillar uppercase tracking-wider mb-2">{leader.role}</div>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Compliance Banner Strip */}
        <div className="bg-industrial-900/90 border border-industrial-800 p-6 sm:p-8 rounded-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
              National Safety Accreditations & Regulatory Compliance
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="p-3 bg-industrial-950/80 border border-industrial-800/80 rounded-sm flex flex-col items-center text-center justify-center hover:border-caterpillar/40 transition-colors"
              >
                <FileCheck className="w-5 h-5 text-caterpillar mb-1.5" />
                <span className="text-xs font-bold text-slate-200 uppercase leading-snug line-clamp-2">
                  {cert.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
                  {cert.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
