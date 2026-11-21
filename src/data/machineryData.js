export const machineryCategories = [
  { id: "all", label: "Entire Heavy Fleet" },
  { id: "excavators", label: "Excavators" },
  { id: "bulldozers", label: "Bulldozers" },
  { id: "wheel-loaders", label: "Wheel Loaders" },
  { id: "dump-trucks", label: "Dump Trucks" },
  { id: "backhoe-loaders", label: "Backhoe Loaders" },
  { id: "motor-graders", label: "Motor Graders" },
];

export const machineryData = [
  // 1. Excavators
  {
    id: "cat-349-next-gen",
    category: "excavators",
    categoryLabel: "Excavators",
    name: "Caterpillar 349 Next Gen",
    tagline: "50-Ton Mass Production Hydraulic Excavator",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "Cat 2D/3D Grade Assist with Payload",
    specs: {
      operatingWeight: "49,400 kg (108,900 lbs)",
      enginePower: "424 HP (316 kW) Cat C13 Engine",
      bucketCapacity: "3.2 – 3.8 m³ (4.2 – 5.0 yd³)",
      maxDigDepth: "8,140 mm (26 ft 8 in)",
      maxReach: "12,100 mm (39 ft 8 in)",
      techFeatures: "Trimble 3D Earthworks, Cat Payload Weighing, E-Fence Safety Boundary"
    },
    description: "The workhorse of heavy infrastructure mass excavation. Designed for rapid haul truck cycle loading, deep sewer and storm main trenches, and massive cut-and-fill operations with factory-integrated 3D guidance.",
    applications: ["Highway mass cut & fill", "Deep commercial foundation excavation", "Quarry overburden removal", "Rail corridor development"],
    fleetUnits: "14 Units Available"
  },
  {
    id: "komatsu-pc390lc-11",
    category: "excavators",
    categoryLabel: "Excavators",
    name: "Komatsu PC390LC-11 Super",
    tagline: "40-Ton High-Stability Track Excavator",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "Variable Gauge Undercarriage",
    specs: {
      operatingWeight: "39,800 kg (87,744 lbs)",
      enginePower: "275 HP (205 kW) Komatsu SAA6D114E-6",
      bucketCapacity: "2.6 m³ (3.4 yd³)",
      maxDigDepth: "7,350 mm (24 ft 1 in)",
      maxReach: "11,100 mm (36 ft 5 in)",
      techFeatures: "KOMTRAX Telematics, Hydraulic quick coupler, High-flow auxiliary hydraulics"
    },
    description: "Engineered with a heavy-duty wide gauge undercarriage for unmatched stability in rocky terrain, heavy pipelaying, and severe deep foundation dig-outs.",
    applications: ["Commercial building basements", "Heavy rock breaking with 8,000 ft-lb hammer", "Retention basin excavation"],
    fleetUnits: "10 Units Available"
  },

  // 2. Bulldozers
  {
    id: "cat-d8t-crawler-dozer",
    category: "bulldozers",
    categoryLabel: "Bulldozers",
    name: "Caterpillar D8T Heavy Crawler",
    tagline: "High-Drawbar Earthmoving Bulldozer with Semi-U Blade",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "Trimble 3D Dual GNSS Blade Control",
    specs: {
      operatingWeight: "39,795 kg (87,733 lbs)",
      enginePower: "354 HP (264 kW) Cat C15 ACERT",
      bladeCapacity: "8.6 m³ (11.2 yd³) Semi-U Blade",
      groundPressure: "9.2 psi (high flotation track shoes)",
      ripper: "Single-shank hydraulic deep ripper with pitch control",
      techFeatures: "Cat Grade with 3D, AutoCarry, Traction Control"
    },
    description: "Dominates large civil earthmoving projects. Pushes massive volumes of overburden, rips through dense limestone and shale, and shapes rough topography with automated grade control to exact design elevation.",
    applications: ["Mass cut-and-fill", "Subgrade leveling for 100+ acre industrial logistics pads", "Rock and frost ripping", "Mine tailings contouring"],
    fleetUnits: "8 Units Available"
  },
  {
    id: "komatsu-d65pxi-18",
    category: "bulldozers",
    categoryLabel: "Bulldozers",
    name: "Komatsu D65PXi-18 Intelligent",
    tagline: "Factory Integrated Intelligent Machine Control (iMC)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "Mastless 3D GPS Machine Control",
    specs: {
      operatingWeight: "22,960 kg (50,618 lbs)",
      enginePower: "217 HP (162 kW) Komatsu SAA6D114E-6",
      bladeCapacity: "5.6 m³ (7.3 yd³) Power-Angle-Tilt (PAT)",
      groundPressure: "5.3 psi low ground pressure",
      ripper: "Multi-shank parallel ripper",
      techFeatures: "Antenna-on-cab iMC 2.0, Automated proactive dozing, Lift-control"
    },
    description: "Mastless intelligent machine control allows rough-to-finish grading with zero GNSS mast antennas on the blade. Perfect for tight tolerances, roadway subgrade, and delicate wetland buffer zones.",
    applications: ["Precision finish grading", "Road sub-base spreading", "Industrial pad finish trimming", "Slope battering"],
    fleetUnits: "12 Units Available"
  },

  // 3. Wheel Loaders
  {
    id: "cat-980m-wheel-loader",
    category: "wheel-loaders",
    categoryLabel: "Wheel Loaders",
    name: "Caterpillar 980M Wheel Loader",
    tagline: "High-Capacity 30-Ton Aggregate & Dirt Loader",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "Cat Production Measurement (CPM) Scale",
    specs: {
      operatingWeight: "30,090 kg (66,337 lbs)",
      enginePower: "393 HP (293 kW) Cat C13",
      bucketCapacity: "5.4 m³ (7.0 yd³) Performance Series Bucket",
      dumpClearance: "3,300 mm (10 ft 10 in)",
      breakoutForce: "224 kN (50,357 lbf)",
      techFeatures: "Ride Control System, On-the-fly weigh scale, Electro-hydraulic joysticks"
    },
    description: "Built for extreme quarry, bulk material loading, and aggregate staging. Passes maximum payload into 40-ton articulated haulers in just 3 to 4 fast cycles with real-time weighing accuracy.",
    applications: ["Tri-axle & articulated hauler high-speed loading", "Crushed stone base staging", "Borrow pit bulk material handling"],
    fleetUnits: "9 Units Available"
  },

  // 4. Dump Trucks
  {
    id: "volvo-a45g-articulated-hauler",
    category: "dump-trucks",
    categoryLabel: "Dump Trucks",
    name: "Volvo A45G Articulated Hauler",
    tagline: "45-Ton All-Terrain Heavy Off-Highway Haul Truck",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "6x6 Automatic Traction & On-Board Weighing",
    specs: {
      payloadCapacity: "41,000 kg (45.2 Short Tons / 90,400 lbs)",
      bodyVolume: "25.1 m³ (32.8 yd³) SAE 2:1 Heaped",
      enginePower: "482 HP (355 kW) Volvo D16J",
      topSpeed: "57 km/h (35 mph)",
      driveSystem: "6x6 with 100% differential dog-clutch locks",
      techFeatures: "Haul Assist, Real-time telematics payload, Hill Assist retarder"
    },
    description: "The undisputed industry standard for shifting earth across muddy, steep, and treacherous job site terrains where standard dump trucks sink. Keeps high-production cut-and-fill operations moving regardless of weather.",
    applications: ["Off-highway mass earth transport", "Muddy wetland cut-and-fill", "Quarry rock hauling", "Dam & levee construction"],
    fleetUnits: "18 Units Available"
  },
  {
    id: "mack-granite-tri-axle",
    category: "dump-trucks",
    categoryLabel: "Dump Trucks",
    name: "Mack Granite Tri-Axle Heavy Dump",
    tagline: "On-Highway Certified 22-Ton Clean Fill & Aggregate Hauler",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "Hardox 450 Steel Body with Electric Tarp",
    specs: {
      payloadCapacity: "22,000 kg (24 Tons)",
      bodyVolume: "16.0 m³ (20.9 yd³)",
      enginePower: "505 HP Mack MP8 13-Liter",
      transmission: "mDRIVE HD 14-Speed Automated Manual with Creeper Gears",
      certifications: "DOT Compliant, Low-Emission Clean Diesel",
      techFeatures: "GPS Fleet Route Optimizer, In-Cab Scale, Air-ride suspension"
    },
    description: "Rapid delivery of certified clean fill, gravel, topsoil, and engineered aggregates from regional quarries directly to city construction sites, along with permitted waste haulage.",
    applications: ["On-highway aggregate delivery", "Export of excavated basement spoils", "Utility backfill logistics", "Demolition debris transport"],
    fleetUnits: "24 Units Available"
  },

  // 5. Backhoe Loaders
  {
    id: "cat-450-backhoe-loader",
    category: "backhoe-loaders",
    categoryLabel: "Backhoe Loaders",
    name: "Caterpillar 450 Center-Pivot Backhoe",
    tagline: "Heavy-Duty Utility Excavator & Loader Combination",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "Extendahoe 17-Foot Dig Depth",
    specs: {
      operatingWeight: "13,380 kg (29,500 lbs)",
      enginePower: "131 HP (98 kW) Cat C4.4 ACERT",
      loaderBucket: "1.5 m³ (2.0 yd³) Multi-Purpose 4-in-1 Clam",
      backhoeDigDepth: "5,280 mm (17 ft 4 in) extended",
      hydraulicFlow: "187 L/min high flow auxiliary",
      techFeatures: "Seat mounted pilot controls, Electronic Torque Limiter, Return-to-dig"
    },
    description: "Unrivaled versatility on congested urban sites. Combines deep utility trenching, crane lift capability, concrete breaking, and front-bucket material spreading in a single highly maneuverable machine.",
    applications: ["Urban utility trenching (gas, water, electric)", "Footing preparation in confined spaces", "Concrete removal & site dressing", "Emergency pipe repair"],
    fleetUnits: "8 Units Available"
  },

  // 6. Motor Graders
  {
    id: "cat-16m3-motor-grader",
    category: "motor-graders",
    categoryLabel: "Motor Graders",
    name: "Caterpillar 16M3 Heavy Motor Grader",
    tagline: "16-Foot Blade High-Precision Haul Road & Highway Grader",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    status: "Active / Field Ready",
    statusColor: "emerald",
    highlight: "Cat Grade with 3D & Cross Slope Assist",
    specs: {
      operatingWeight: "32,411 kg (71,454 lbs)",
      moldboardBladeWidth: "4,900 mm (16 ft)",
      enginePower: "362 HP (270 kW) Cat C13",
      circleDrive: "Slip clutch protected circle drive with 360° rotation",
      bladePull: "22,500 kg (49,604 lbs)",
      techFeatures: "Dual joystick electro-hydraulics, Cat GRADE Cross Slope, Laser mast interface"
    },
    description: "The gold standard for creating razor-straight highway subgrades, commercial airport runways, and maintaining smooth high-speed mine haul roads to maximize haul truck fuel efficiency and cycle times.",
    applications: ["State DOT highway sub-base final trim", "Airport runway grading", "High-tonnage haul road maintenance", "Sub-centimeter commercial building pads"],
    fleetUnits: "7 Units Available"
  }
];
