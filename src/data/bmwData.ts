export interface BMWPhase {
  id: string;
  scrollRange: [number, number];
  label: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
}

export interface BMWData {
  brand: string;
  model: string;
  edition: string;
  tagline: string;
  year: string;
  power: string;
  origin: string;
  phases: BMWPhase[];
}

export const bmwData: BMWData = {
  brand: "BMW M",
  model: "M4 GT3 EVO",
  edition: "CUSTOMER RACING",
  tagline: "Evolution Of Performance",
  year: "2025",
  power: "540 HP",
  origin: "Munich, Germany",
  phases: [
    {
      id: "hero",
      scrollRange: [0, 0.25],
      label: "01 / LEGACY",
      title: "BMW M4 GT3 EVO",
      subtitle: "EVOLUTION OF PERFORMANCE",
      description:
        "The BMW M4 GT3 EVO refines every aspect of its championship-winning predecessor with improved aerodynamics, enhanced cooling efficiency, superior drivability, and race-proven endurance engineering developed by BMW M Motorsport.",
      accent: "BMW M MOTORSPORT",
    },
    {
      id: "design",
      scrollRange: [0.25, 0.5],
      label: "02 / AERODYNAMICS",
      title: "EVOLUTIONARY DESIGN",
      subtitle: "DOWNFORCE PERFECTED",
      description:
        "Every aerodynamic surface has been redesigned to improve stability, tire efficiency, airflow management, and cooling performance during long-distance GT racing.",
      accent: "BMW M AERODYNAMICS",
    },
    {
      id: "cockpit",
      scrollRange: [0.5, 0.75],
      label: "03 / COCKPIT",
      title: "PURE DRIVER MACHINE",
      subtitle: "DESIGNED FOR ENDURANCE",
      description:
        "The lightweight GT3 racing doors reveal a motorsport cockpit featuring FIA safety cell, carbon fiber controls, digital race display, quick-release steering wheel, and sequential transmission controls.",
      accent: "70° GT3 RACING DOORS",
    },
    {
      id: "engine",
      scrollRange: [0.75, 1.0],
      label: "04 / POWERTRAIN",
      title: "BMW P58 EVO",
      subtitle: "3.0L TWIN-TURBO INLINE SIX",
      description:
        "The latest BMW P58 race engine delivers relentless endurance performance with optimized reliability, cooling, and efficiency, fully exposed beneath the open carbon hood.",
      accent: "540 HP",
    },
  ],
};

export const specsData = [
  { label: "ENGINE", value: "BMW P58 EVO", detail: "3.0L Inline-6 TwinPower Turbo" },
  { label: "DISPLACEMENT", value: "3.0 Litres", detail: "2,993 cc Competition Specs" },
  { label: "POWER", value: "540 HP", detail: "Up to 590 PS depending on BoP" },
  { label: "TORQUE", value: "650 NM", detail: "Flat Torque Curve from 3,000 RPM" },
  { label: "WEIGHT", value: "Approx. 1,285 KG", detail: "Dry Weight (BoP Dependent)" },
  { label: "TRANSMISSION", value: "6 Speed Sequential", detail: "Xtrac Motorsport Gearbox" },
  { label: "DRIVE", value: "Rear Wheel Drive", detail: "Mechanical Limited-Slip Diff" },
  { label: "CATEGORY", value: "FIA GT3 EVO", detail: "Homologated 2025–2030" },
];

export const featuresData = [
  {
    id: "01",
    title: "Optimized Carbon Aerodynamics",
    description:
      "Redesigned front splitter, dive planes, rear wing, and airflow package developed for improved endurance racing performance and aero balance across all speed ranges.",
    tag: "AERO PKG EVO",
  },
  {
    id: "02",
    title: "Enhanced Cooling System",
    description:
      "New airflow management improves brake cooling, engine temperatures, and tire efficiency throughout long race stints in high ambient heat conditions.",
    tag: "THERMAL MGMT",
  },
  {
    id: "03",
    title: "Race Cockpit EVO",
    description:
      "Digital dashboard, FIA roll cage, lightweight carbon steering wheel, sequential gearbox, and ergonomic controls optimized for professional GT drivers during night stints.",
    tag: "COCKPIT SAFETY",
  },
  {
    id: "04",
    title: "Championship Proven Platform",
    description:
      "Developed for GT World Challenge, IMSA WeatherTech SportsCar Championship, Nürburgring 24 Hours, Spa 24 Hours, and global GT3 competition.",
    tag: "HOMOLOGATED GT3",
  },
];
