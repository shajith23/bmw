'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, MotionValue } from 'framer-motion';
import { useLenisScroll } from './LenisProvider';
import { soundEngine } from '@/utils/audio';
import { Volume2, VolumeX, Radio } from 'lucide-react';
import { bmwData } from '@/data/bmwData';

interface NavbarProps {
  scrollYProgress: MotionValue<number>;
  driveMode: 'QUALIFYING' | 'ENDURANCE' | 'WET';
  onSelectDriveMode: (mode: 'QUALIFYING' | 'ENDURANCE' | 'WET') => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
  activePhaseIndex: number;
  onOpenInquire: () => void;
}

export default function Navbar({
  scrollYProgress,
  driveMode,
  onSelectDriveMode,
  isAudioMuted,
  onToggleAudio,
  activePhaseIndex,
  onOpenInquire,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const { lenis } = useLenisScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setCurrentProgress(latest);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    soundEngine.playClick();
    if (!lenis) return;

    const vh = window.innerHeight;
    if (section === 'STORY') {
      lenis.scrollTo(0, { duration: 1.2 });
    } else if (section === 'AERO') {
      lenis.scrollTo(vh * 1.3, { duration: 1.2 });
    } else if (section === 'ENGINE') {
      lenis.scrollTo(vh * 4.0, { duration: 1.2 });
    } else if (section === 'SPECS') {
      lenis.scrollTo('#specs-section', { duration: 1.2 });
    } else if (section === 'CONTACT') {
      lenis.scrollTo('#footer-section', { duration: 1.2 });
    }
  };

  const modeColor =
    driveMode === 'QUALIFYING' ? '#CC0000' : driveMode === 'ENDURANCE' ? '#0066FF' : '#0048C9';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] shadow-sm py-2.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E5E5E5]/60 py-3.5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Left: BMW M Motorsport Branding */}
        <div
          className="flex items-center space-x-3 cursor-pointer shrink-0"
          onClick={() => handleNavClick('STORY')}
          onMouseEnter={() => soundEngine.playHover()}
        >
          <div className="flex items-center space-x-1">
            <span className="w-2.5 h-5 bg-[#0066FF] -skew-x-12 inline-block" />
            <span className="w-2.5 h-5 bg-[#0048C9] -skew-x-12 inline-block" />
            <span className="w-2.5 h-5 bg-[#CC0000] -skew-x-12 inline-block" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span className="font-orbitron font-extrabold text-xs md:text-sm tracking-wider text-[#111111] uppercase">
              BMW M MOTORSPORT
            </span>
            <span className="hidden sm:inline text-[#AAAAAA] text-xs">|</span>
            <span className="font-orbitron text-[11px] font-semibold tracking-wider text-[#666666] uppercase">
              M4 GT3 EVO
            </span>
          </div>
        </div>

        {/* Center: Navigation Links & Drive Mode Selector */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Section Navigation Links */}
          <nav className="flex items-center space-x-6">
            {[
              { label: 'STORY', target: 'STORY' },
              { label: 'AERO', target: 'AERO' },
              { label: 'ENGINE', target: 'ENGINE' },
              { label: 'SPECS', target: 'SPECS' },
              { label: 'CONTACT', target: 'CONTACT' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.target)}
                onMouseEnter={() => soundEngine.playHover()}
                className="font-orbitron text-xs font-semibold tracking-widest text-[#111111] hover:text-[#0066FF] transition-colors duration-200 uppercase relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0066FF] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <span className="h-4 w-px bg-[#E5E5E5]" />

          {/* Drive Mode Selector Pills */}
          <div className="flex items-center space-x-1 bg-[#F5F5F5] p-1 border border-[#E5E5E5]">
            <div className="flex items-center space-x-1 px-1.5 text-[9px] font-orbitron font-bold text-[#666666]">
              <Radio className="w-3 h-3 text-[#0066FF] animate-pulse" />
              <span className="hidden xl:inline">MODE</span>
            </div>
            {(['QUALIFYING', 'ENDURANCE', 'WET'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => onSelectDriveMode(mode)}
                onMouseEnter={() => soundEngine.playHover()}
                className={`px-2.5 py-0.5 font-orbitron text-[10px] font-bold tracking-wider transition-all duration-200 uppercase ${
                  driveMode === mode
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Audio Toggle, Telemetry Dots, and Inquire Button */}
        <div className="flex items-center space-x-4 shrink-0">
          {/* Sound Toggle Button */}
          <button
            onClick={onToggleAudio}
            onMouseEnter={() => soundEngine.playHover()}
            className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 bg-[#F5F5F5] hover:bg-[#E5E5E5] border border-[#E5E5E5] text-[#111111] transition-colors"
          >
            {isAudioMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-[#CC0000]" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-[#0066FF] animate-pulse" />
            )}
            <span className="font-orbitron text-[10px] font-bold uppercase">
              {isAudioMuted ? 'MUTE' : 'SOUND'}
            </span>
          </button>

          {/* Phase Dots & Mini Scroll Line */}
          <div className="hidden md:flex flex-col items-end space-y-1">
            <div className="flex items-center space-x-2">
              {bmwData.phases.map((phase, idx) => (
                <div
                  key={phase.id}
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => {
                    soundEngine.playClick();
                    if (lenis) {
                      const targetScroll = idx * 0.25 * window.innerHeight * 5;
                      lenis.scrollTo(targetScroll, { duration: 1.2 });
                    }
                  }}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activePhaseIndex
                        ? 'bg-[#0066FF] scale-125 ring-2 ring-[#0066FF]/20'
                        : 'bg-[#E5E5E5] hover:bg-[#AAAAAA]'
                    }`}
                  />
                  <span
                    className={`font-orbitron text-[9px] tracking-wider ${
                      idx === activePhaseIndex ? 'text-[#0066FF] font-bold' : 'text-[#AAAAAA]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
            {/* Progress Bar */}
            <div className="relative w-28 h-0.5 bg-[#E5E5E5] overflow-hidden rounded-full">
              <div
                className="h-full transition-all duration-75 ease-out"
                style={{
                  width: `${Math.min(100, Math.max(0, currentProgress * 100))}%`,
                  backgroundColor: modeColor,
                }}
              />
            </div>
          </div>

          {/* Solid BMW Blue Button INQUIRE */}
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenInquire();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="px-4 md:px-5 py-2 bg-[#0066FF] hover:bg-[#0048C9] text-white font-orbitron text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xs hover:shadow-md active:scale-95"
          >
            INQUIRE
          </button>
        </div>
      </div>
    </motion.header>
  );
}
