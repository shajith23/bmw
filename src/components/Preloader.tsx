'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundEngine } from '@/utils/audio';
import { Shield, Zap, Play } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const telemetryLogs = [
  'INITIALIZING BMW M TELEMETRY BUS...',
  'PRELOADING 192 HIGH-DPI FRAME SEQUENCES...',
  'CALIBRATING FIA GT3 CARBON AERODYNAMICS...',
  'SYNCHRONIZING BMW P58 3.0L TWIN-TURBO ENGINE...',
  'TELEMETRY VERIFIED — SYSTEM READY',
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState<number>(0);
  const [logIndex, setLogIndex] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Smooth progress counter simulation synchronized with frame preloading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return Math.min(100, next);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle telemetry logs based on progress
    const index = Math.min(
      telemetryLogs.length - 1,
      Math.floor((progress / 100) * telemetryLogs.length)
    );
    setLogIndex(index);
  }, [progress]);

  const handleStartExperience = () => {
    soundEngine.playPhaseBeep();
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-white text-[#111111] flex flex-col justify-between p-6 md:p-16 select-none overflow-hidden"
        >
          {/* Top Motorsport Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <motion.span
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-3 h-7 bg-[#0066FF] -skew-x-12 inline-block"
                />
                <motion.span
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.15 }}
                  className="w-3 h-7 bg-[#0048C9] -skew-x-12 inline-block"
                />
                <motion.span
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
                  className="w-3 h-7 bg-[#CC0000] -skew-x-12 inline-block"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-orbitron font-extrabold text-base md:text-lg tracking-wider text-[#111111] uppercase">
                  BMW M MOTORSPORT
                </span>
                <span className="font-rajdhani text-xs tracking-widest text-[#666666] font-semibold uppercase">
                  PRE-FLIGHT SYSTEM CHECK
                </span>
              </div>
            </div>

            <div className="font-orbitron text-xs text-[#666666] font-bold tracking-widest hidden sm:block">
              MUNICH, GERMANY // 2025
            </div>
          </div>

          {/* Center Main Loading Hero Display */}
          <div className="my-auto max-w-4xl mx-auto w-full space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <span className="font-orbitron text-xs font-bold tracking-[0.3em] text-[#0066FF] uppercase block">
                BMW M4 GT3 EVO // SHOWCASE
              </span>
              <h1 className="font-orbitron font-black text-4xl md:text-7xl tracking-tight text-[#111111] uppercase leading-none">
                EVOLUTION OF PERFORMANCE
              </h1>
            </div>

            {/* Progress Telemetry Bar */}
            <div className="space-y-3">
              <div className="relative w-full h-2 bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden rounded-none">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0066FF] via-[#0048C9] to-[#CC0000]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-orbitron text-[#666666] gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-ping" />
                  <span className="text-[#111111] font-semibold">
                    {telemetryLogs[logIndex]}
                  </span>
                </div>

                <div className="font-black text-2xl text-[#0066FF]">
                  {progress}%
                </div>
              </div>
            </div>

            {/* Launch Button when Ready */}
            {isReady && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="pt-4 flex justify-center md:justify-start"
              >
                <button
                  onClick={handleStartExperience}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="group relative px-8 py-4 bg-[#0066FF] hover:bg-[#0048C9] text-white font-orbitron text-xs md:text-sm font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>ENTER EXPERIENCE</span>
                  <span className="text-[#CC0000] font-black">[START ENGINE]</span>
                </button>
              </motion.div>
            )}
          </div>

          {/* Bottom Motorsport Footer Specs */}
          <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-4 text-[10px] md:text-xs font-orbitron text-[#666666]">
            <div>HOMOLOGATED FIA GT3 // EVO EDITION</div>
            <div className="hidden md:block">3.0L TWIN-TURBO INLINE SIX // 540 HP</div>
            <div>BMW M CUSTOMER RACING</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
