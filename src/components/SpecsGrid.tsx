'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { specsData } from '@/data/bmwData';
import { soundEngine } from '@/utils/audio';

const specCategories = [
  { id: 'HOMOLOGATION', label: 'HOMOLOGATION SPECS' },
  { id: 'PERFORMANCE', label: 'PERFORMANCE & TELEMETRY' },
  { id: 'DIMENSIONS', label: 'CHASSIS & GEOMETRY' },
];

export default function SpecsGrid() {
  const [activeCategory, setActiveCategory] = useState<'HOMOLOGATION' | 'PERFORMANCE' | 'DIMENSIONS'>('HOMOLOGATION');

  const filteredSpecs =
    activeCategory === 'HOMOLOGATION'
      ? specsData
      : activeCategory === 'PERFORMANCE'
      ? [
          { label: '0-100 KM/H', value: '2.8 SEC', detail: 'Endurance Clutch Launch Control' },
          { label: 'TOP SPEED', value: '295+ KM/H', detail: 'Low-Drag Aerodynamic Package' },
          { label: 'DOWNFORCE', value: '650 KG', detail: '@ 240 KM/H High-Speed Cornering' },
          { label: 'LATERAL G', value: '2.45 G', detail: 'Slick Tire Maximum Grip' },
          { label: 'BRAKING (200-0)', value: '4.1 SEC', detail: 'AP Racing 6-Piston Calipers' },
          { label: 'FUEL CAPACITY', value: '120 LITRES', detail: 'FT3 Endurance Fuel Cell' },
          { label: 'WEIGHT DISTR.', value: '50 : 50', detail: 'Ideal Front/Rear Balance' },
          { label: 'ECU SOFTWARE', value: 'BOSCH MS 7.4', detail: 'Motorsport Telemetry Rec' },
        ]
      : [
          { label: 'LENGTH', value: '5,020 MM', detail: 'Extended GT3 Wheelbase' },
          { label: 'WIDTH', value: '2,040 MM', detail: 'Widebody Carbon Fenders' },
          { label: 'HEIGHT', value: '1,308 MM', detail: 'Ultra-Low GT3 Center of Gravity' },
          { label: 'WHEELBASE', value: '2,917 MM', detail: 'High-Speed Stability Layout' },
          { label: 'WHEEL SIZE', value: '18" FORGED', detail: 'Center-Lock Magnesium Alloy' },
          { label: 'TIRE SIZE FRONT', value: '300 / 680-18', detail: 'Michelin GT3 Slick Spec' },
          { label: 'TIRE SIZE REAR', value: '310 / 710-18', detail: 'Michelin GT3 Slick Spec' },
          { label: 'HOMOLOGATION', value: 'FIA GT3-059', detail: 'Valid 2025 – 2030' },
        ];

  return (
    <section id="specs-section" className="py-24 px-6 bg-white text-[#111111] relative z-20 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E5E5] pb-8 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#0066FF]" />
              <span className="font-orbitron text-xs font-bold tracking-[0.2em] text-[#0066FF] uppercase">
                TECHNICAL BENCHMARK
              </span>
            </div>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl tracking-tight text-[#111111] uppercase">
              SPECS & TELEMETRY
            </h2>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F5F5F5] p-1.5 border border-[#E5E5E5]">
            {specCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundEngine.playClick();
                  setActiveCategory(cat.id as typeof activeCategory);
                }}
                onMouseEnter={() => soundEngine.playHover()}
                className={`px-4 py-2 font-orbitron text-xs font-bold tracking-wider transition-all duration-200 uppercase ${
                  activeCategory === cat.id
                    ? 'bg-[#0066FF] text-white shadow-sm'
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8-Grid Specs Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredSpecs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative p-6 bg-[#F5F5F5] border border-[#E5E5E5] hover:border-[#0066FF] hover:bg-white transition-all duration-300 flex flex-col justify-between h-48 overflow-hidden shadow-xs hover:shadow-md"
              >
                {/* Top Accent Lines */}
                <div className="flex justify-between items-center text-xs font-orbitron text-[#666666]">
                  <span className="tracking-widest font-semibold">{spec.label}</span>
                  <span className="text-[#AAAAAA] group-hover:text-[#0066FF] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Main Spec Value */}
                <div className="my-auto">
                  <div className="font-orbitron font-black text-2xl lg:text-3xl text-[#111111] group-hover:text-[#0066FF] transition-colors duration-300 tracking-tight">
                    {spec.value}
                  </div>
                  <div className="font-rajdhani text-xs md:text-sm text-[#666666] font-medium mt-1">
                    {spec.detail}
                  </div>
                </div>

                {/* Bottom Animated Blue/Red Underline */}
                <div className="w-full bg-[#E5E5E5] h-1 relative overflow-hidden mt-4">
                  <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#0066FF] via-[#0048C9] to-[#CC0000] group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
