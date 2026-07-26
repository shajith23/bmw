'use client';

import React from 'react';
import { soundEngine } from '@/utils/audio';

interface FooterProps {
  onOpenInquire: () => void;
}

export default function Footer({ onOpenInquire }: FooterProps) {
  return (
    <footer id="footer-section" className="bg-white border-t-2 border-[#0066FF] text-[#111111] py-16 px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Brand & Tagline */}
        <div className="space-y-3 max-w-md">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <span className="w-2.5 h-5 bg-[#0066FF] -skew-x-12 inline-block" />
              <span className="w-2.5 h-5 bg-[#0048C9] -skew-x-12 inline-block" />
              <span className="w-2.5 h-5 bg-[#CC0000] -skew-x-12 inline-block" />
            </div>
            <span className="font-orbitron font-extrabold text-lg tracking-wider text-[#111111] uppercase">
              BMW M MOTORSPORT
            </span>
          </div>

          <p className="font-orbitron text-xs tracking-widest text-[#0066FF] font-bold uppercase">
            "THE ULTIMATE DRIVING MACHINE."
          </p>

          <p className="font-rajdhani text-xs text-[#666666] leading-relaxed">
            © {new Date().getFullYear()} BMW AG. All rights reserved. BMW M, M4 GT3 EVO, and the BMW logo are registered trademarks of BMW AG.
          </p>
        </div>

        {/* Center Divider: Crisp Vertical Motorsport Line */}
        <div className="hidden md:block h-16 w-px bg-[#E5E5E5]" />

        {/* Right Side: Customer Racing CTA */}
        <div className="flex flex-col md:items-end space-y-4 text-center md:text-right">
          <div className="font-orbitron text-xs font-bold tracking-[0.2em] text-[#0066FF] uppercase">
            CONTACT BMW M CUSTOMER RACING
          </div>

          <p className="font-rajdhani text-sm text-[#666666] max-w-sm font-medium leading-relaxed">
            Interested in competing with the BMW M4 GT3 EVO in global GT championships? Connect with our customer racing sales engineers.
          </p>

          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenInquire();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="px-8 py-3.5 bg-[#0066FF] hover:bg-[#0048C9] text-white font-orbitron text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 flex items-center space-x-2"
          >
            <span>INQUIRE GT3 ALLOCATION</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
