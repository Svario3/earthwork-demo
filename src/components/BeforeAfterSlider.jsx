import React, { useState, useRef, useCallback } from 'react';
import { Sliders, ArrowLeftRight, CheckCircle2, MapPin, Calendar, Clock, Layers } from 'lucide-react';
import { beforeAfterShowcase } from '../data/projectsData';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const handleStop = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-industrial-900 border-2 border-industrial-800 rounded-sm p-6 sm:p-8 mb-20 shadow-2xl">
      {/* Header Info */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-caterpillar/10 border border-caterpillar/30 rounded-sm mb-2">
            <ArrowLeftRight className="w-3.5 h-3.5 text-caterpillar" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-caterpillar font-bold">
              Interactive Site Transformation Showcase
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black font-heading uppercase text-white">
            {beforeAfterShowcase.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-caterpillar" />
            <span>{beforeAfterShowcase.location}</span>
            <span>•</span>
            <span className="text-caterpillar font-bold">{beforeAfterShowcase.category}</span>
          </p>
        </div>

        {/* Quick Stats Pill Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-2.5 bg-industrial-950 border border-industrial-800 rounded-sm text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Mass Earth Moved</span>
            <span className="text-sm font-black font-heading text-caterpillar">{beforeAfterShowcase.stats.volumeMoved}</span>
          </div>
          <div className="p-2.5 bg-industrial-950 border border-industrial-800 rounded-sm text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Execution Window</span>
            <span className="text-sm font-black font-heading text-white">{beforeAfterShowcase.stats.timeline}</span>
          </div>
          <div className="p-2.5 bg-industrial-950 border border-industrial-800 rounded-sm text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Fleet Deployed</span>
            <span className="text-sm font-black font-heading text-white">{beforeAfterShowcase.stats.equipmentDeployed}</span>
          </div>
          <div className="p-2.5 bg-industrial-950 border border-industrial-800 rounded-sm text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">Density Tested</span>
            <span className="text-sm font-black font-heading text-emerald-400">{beforeAfterShowcase.stats.compactionAchieved}</span>
          </div>
        </div>
      </div>

      {/* Interactive Dragging Container */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleStop}
        onMouseLeave={handleStop}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleStop}
        onTouchMove={handleTouchMove}
        className="relative h-[320px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden select-none cursor-ew-resize rounded-sm border-2 border-industrial-700 shadow-2xl"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={beforeAfterShowcase.afterImage}
          alt="After: Precision Laser Graded Commercial Pad"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* AFTER Label Tag (Top Right) */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-industrial-950/90 border border-caterpillar/60 rounded-sm backdrop-blur-md">
          <span className="text-xs font-black font-heading uppercase text-caterpillar tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            AFTER: Finished Laser Subgrade
          </span>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div 
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none z-10"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeAfterShowcase.beforeImage}
            alt="Before: Raw Overgrown Uneven Terrain"
            className="absolute inset-y-0 left-0 h-full object-cover max-w-none pointer-events-none"
            style={{ 
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              height: '100%'
            }}
          />

          {/* BEFORE Label Tag (Top Left) */}
          <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-industrial-950/90 border border-industrial-700 rounded-sm backdrop-blur-md">
            <span className="text-xs font-black font-heading uppercase text-slate-300 tracking-wider">
              BEFORE: Raw Rough Terrain
            </span>
          </div>
        </div>

        {/* Draggable Vertical Divider Line */}
        <div
          className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Vertical Yellow Hazard Bar */}
          <div className="w-1 h-full bg-caterpillar shadow-[0_0_12px_rgba(245,158,11,0.8)]"></div>

          {/* Handle Badge with Arrows */}
          <div className="absolute w-11 h-11 bg-caterpillar text-black rounded-full flex items-center justify-center shadow-2xl border-2 border-black transform active:scale-95 transition-transform">
            <ArrowLeftRight className="w-5 h-5 font-bold" />
          </div>
        </div>

        {/* Bottom Helper Instruction Pill */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 px-4 py-1 bg-black/80 border border-industrial-700 rounded-full backdrop-blur-sm pointer-events-none">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-caterpillar" />
            Drag slider left or right to compare site transformation
          </span>
        </div>
      </div>

      {/* Case Description Narrative */}
      <div className="mt-6 p-4 bg-industrial-950 border border-industrial-800 rounded-sm">
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong className="text-white font-bold">Project Summary: </strong>
          {beforeAfterShowcase.description}
        </p>
      </div>
    </div>
  );
}
