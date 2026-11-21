import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Layers, 
  Cpu, 
  Truck, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

export default function CostEstimator({ onApplyEstimateToQuote }) {
  const [projectType, setProjectType] = useState('site-prep');
  const [areaSize, setAreaSize] = useState(5); // acres
  const [cutDepth, setCutDepth] = useState(3); // feet
  const [soilType, setSoilType] = useState('clay'); // loam, clay, rock, ledge
  const [haulRequired, setHaulRequired] = useState(false);

  // Calculation logic
  const estimation = useMemo(() => {
    // 1 Acre = 43,560 sq ft
    // 1 Cu Yard = 27 cu ft
    const sqFt = areaSize * 43560;
    const totalCuFt = sqFt * cutDepth;
    const baseCuYards = Math.round(totalCuFt / 27);

    // Soil expansion factor & difficulty multiplier
    let difficultyMultiplier = 1.0;
    let soilLabel = "Sandy Loam / Standard Dirt";
    let machineRecommendation = "1x CAT D8T Dozer, 2x CAT 349 Excavators, 4x Haul Trucks";

    if (soilType === 'clay') {
      difficultyMultiplier = 1.25;
      soilLabel = "Dense / Saturated Fat Clay";
      machineRecommendation = "2x CAT D8T Dozers, 3x CAT 349 Excavators, 6x Volvo A45G Articulated Haulers";
    } else if (soilType === 'rock') {
      difficultyMultiplier = 1.85;
      soilLabel = "Fractured Shale & Rocky Soil";
      machineRecommendation = "Heavy Ripper Dozers, 4x High-Tonnage Excavators with Rock Buckets";
    } else if (soilType === 'ledge') {
      difficultyMultiplier = 2.6;
      soilLabel = "Solid Bedrock / Granite Ledge";
      machineRecommendation = "Hydraulic Rock Breakers, Drill Rigs, CAT 349 Excavators";
    }

    // Type multiplier
    let typeMultiplier = 1.0;
    if (projectType === 'foundation') typeMultiplier = 1.4; // deep precision shoring
    if (projectType === 'road') typeMultiplier = 1.15; // sub-base compaction
    if (projectType === 'clearing') typeMultiplier = 0.85; // vegetation & root removal

    // Volume calculation
    const adjustedCuYards = Math.round(baseCuYards * 0.9); // balanced cut/fill factor

    // Rough realistic commercial pricing
    // Base civil earthwork typically runs $7 to $18 per cu yard depending on soil and compaction
    const baseRatePerYard = 8.5 * difficultyMultiplier * typeMultiplier;
    const haulAddon = haulRequired ? 6.5 * adjustedCuYards : 0;
    
    const minCost = Math.round((adjustedCuYards * baseRatePerYard * 0.9) + haulAddon);
    const maxCost = Math.round((adjustedCuYards * baseRatePerYard * 1.25) + haulAddon);

    // Estimated duration
    const dailyOutput = soilType === 'ledge' ? 1800 : soilType === 'rock' ? 2500 : 4500;
    const estimatedWorkDays = Math.max(3, Math.ceil(adjustedCuYards / dailyOutput));

    return {
      cubicYards: adjustedCuYards.toLocaleString(),
      soilLabel,
      machineRecommendation,
      estimatedWorkDays,
      minCost: minCost.toLocaleString(),
      maxCost: maxCost.toLocaleString(),
      rawCuYards: adjustedCuYards
    };
  }, [projectType, areaSize, cutDepth, soilType, haulRequired]);

  const handleApply = () => {
    const data = {
      projectType,
      areaSize: `${areaSize} Acres`,
      cutDepth: `${cutDepth} ft average`,
      soilType: estimation.soilLabel,
      cubicYards: `${estimation.cubicYards} Cu. Yds.`,
      estimatedCost: `$${estimation.minCost} - $${estimation.maxCost}`,
      haulRequired: haulRequired ? "Yes (Off-site Haul)" : "No (Balanced on-site)"
    };
    onApplyEstimateToQuote(data);
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-industrial-950 relative border-b border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-caterpillar/10 border border-caterpillar/30 rounded-sm mb-3">
            <Calculator className="w-4 h-4 text-caterpillar" />
            <span className="text-xs font-mono uppercase tracking-widest text-caterpillar font-bold">
              Engineering Cost Calculator
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white uppercase">
            Interactive Earthworks <span className="text-caterpillar">& Volume Estimator</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Generate an instant volumetric takeoff estimate, machine fleet recommendation, and budgetary ballpark for your site.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="bg-industrial-900 border-2 border-industrial-800 hover:border-caterpillar/40 transition-colors rounded-sm shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Controls Column (Inputs) */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Project Type Selector */}
              <div>
                <label className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                  1. Project Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'site-prep', label: 'Commercial Site Prep' },
                    { id: 'foundation', label: 'Foundation Dig' },
                    { id: 'road', label: 'Roadbed / Sub-base' },
                    { id: 'clearing', label: 'Mass Land Clearing' },
                    { id: 'leveling', label: 'Laser Pad Leveling' },
                    { id: 'retention', label: 'Retention Pond' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id)}
                      className={`p-3 text-xs font-bold font-heading uppercase tracking-wider rounded-sm border transition-all text-left ${
                        projectType === item.id
                          ? 'bg-caterpillar text-black border-caterpillar shadow-md'
                          : 'bg-industrial-950 text-slate-300 border-industrial-800 hover:border-caterpillar/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Site Area Slider */}
              <div className="p-4 bg-industrial-950 border border-industrial-800 rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold">
                    2. Estimated Site Footprint
                  </label>
                  <span className="text-base font-black font-heading text-caterpillar">
                    {areaSize} {areaSize === 1 ? 'Acre' : 'Acres'} <span className="text-xs text-slate-400 font-normal">({(areaSize * 43560).toLocaleString()} sq ft)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="40"
                  step="0.5"
                  value={areaSize}
                  onChange={(e) => setAreaSize(parseFloat(e.target.value))}
                  className="w-full accent-caterpillar cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>0.5 Acre (Pad)</span>
                  <span>10 Acres</span>
                  <span>25 Acres</span>
                  <span>40+ Acres (Megapark)</span>
                </div>
              </div>

              {/* 3. Average Cut / Fill Depth Slider */}
              <div className="p-4 bg-industrial-950 border border-industrial-800 rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase text-slate-300 font-bold">
                    3. Average Cut / Fill Excavation Depth
                  </label>
                  <span className="text-base font-black font-heading text-caterpillar">
                    {cutDepth} Feet <span className="text-xs text-slate-400 font-normal">({(cutDepth * 0.3048).toFixed(1)} meters)</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={cutDepth}
                  onChange={(e) => setCutDepth(parseInt(e.target.value))}
                  className="w-full accent-caterpillar cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>1 ft (Topsoil strip)</span>
                  <span>5 ft (Standard pad cut)</span>
                  <span>12 ft (Deep trench)</span>
                  <span>20 ft (Multi-level basement)</span>
                </div>
              </div>

              {/* 4. Soil Classification */}
              <div>
                <label className="text-xs font-mono uppercase text-slate-400 font-bold block mb-2">
                  4. Soil & Geological Condition
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'loam', label: 'Topsoil & Sandy Loam', note: 'Standard excavation rate' },
                    { id: 'clay', label: 'Heavy Saturated Clay', note: 'Requires soil drying / lime prep' },
                    { id: 'rock', label: 'Shale & Fractured Rock', note: 'Requires heavy ripper teeth' },
                    { id: 'ledge', label: 'Solid Granite Bedrock', note: 'Requires hydraulic breakers' },
                  ].map((soil) => (
                    <button
                      key={soil.id}
                      type="button"
                      onClick={() => setSoilType(soil.id)}
                      className={`p-3 text-left rounded-sm border transition-all ${
                        soilType === soil.id
                          ? 'bg-industrial-800 border-caterpillar text-white ring-1 ring-caterpillar'
                          : 'bg-industrial-950 border-industrial-800 text-slate-300 hover:border-industrial-700'
                      }`}
                    >
                      <div className="text-xs font-bold font-heading uppercase text-white flex items-center justify-between">
                        <span>{soil.label}</span>
                        {soilType === soil.id && <span className="w-2 h-2 rounded-full bg-caterpillar"></span>}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{soil.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Haul Requirement Checkbox */}
              <div className="flex items-center space-x-3 p-3 bg-industrial-950 border border-industrial-800 rounded-sm">
                <input
                  type="checkbox"
                  id="haulCheck"
                  checked={haulRequired}
                  onChange={(e) => setHaulRequired(e.target.checked)}
                  className="w-4 h-4 accent-caterpillar rounded-sm cursor-pointer"
                />
                <label htmlFor="haulCheck" className="text-xs text-slate-200 cursor-pointer">
                  <strong className="text-white block">Requires Off-Site Haulage & Disposal</strong>
                  Check if soil cannot be balanced on-site and must be exported via articulated truck fleets.
                </label>
              </div>
            </div>

            {/* Right Output Column (Calculation Results) */}
            <div className="lg:col-span-5 bg-industrial-950 border-2 border-caterpillar/60 rounded-sm p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute top-0 right-0 bg-caterpillar text-black px-3 py-1 text-[10px] font-mono uppercase tracking-widest font-black">
                Estimated Volumetric Takeoff
              </div>

              <div className="space-y-6 pt-2">
                {/* 1. Volume Result */}
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Estimated Earthwork Volume
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-heading text-caterpillar">
                    {estimation.cubicYards} <span className="text-base text-slate-400 font-mono font-normal">Cu. Yds.</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                    Approx. {Math.round(estimation.rawCuYards * 1.35).toLocaleString()} Tons based on {estimation.soilLabel}
                  </span>
                </div>

                {/* 2. Budgetary Range */}
                <div className="p-4 bg-industrial-900 border border-industrial-800 rounded-sm">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Estimated Budgetary Range
                  </span>
                  <div className="text-2xl sm:text-3xl font-black font-heading text-white">
                    ${estimation.minCost} – ${estimation.maxCost}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono block mt-1">
                    Includes machinery, union operators, fuel & GPS grade controls
                  </span>
                </div>

                {/* 3. Duration & Machinery Specs */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-start space-x-2 text-slate-300">
                    <Clock className="w-4 h-4 text-caterpillar shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Estimated Project Timeline: </strong>
                      <span>Approximately {estimation.estimatedWorkDays} to {Math.round(estimation.estimatedWorkDays * 1.3)} Working Days</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-slate-300">
                    <Truck className="w-4 h-4 text-caterpillar shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Recommended Machine Fleet: </strong>
                      <span className="text-slate-300 block text-[11px] mt-0.5 font-mono">{estimation.machineRecommendation}</span>
                    </div>
                  </div>
                </div>

                {/* Legal disclaimer */}
                <div className="text-[10px] text-slate-400 font-mono leading-relaxed border-t border-industrial-800 pt-3">
                  *Preliminary estimate based on standard regional unit costs. Final binding proposal subject to geotechnical boring report and CAD topographic review.
                </div>
              </div>

              {/* Action: Transfer calculation to Quote */}
              <div className="pt-6 mt-6 border-t border-industrial-800">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-4 bg-caterpillar hover:bg-caterpillar-light text-black font-black font-heading text-sm uppercase tracking-wider rounded-sm shadow-xl flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Apply Estimate to Formal Quote Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
