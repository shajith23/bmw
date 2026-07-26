'use client';

import React, { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Navbar from '@/components/Navbar';
import BMWScrollCanvas from '@/components/BMWScrollCanvas';
import BMWExperience from '@/components/BMWExperience';
import SpecsGrid from '@/components/SpecsGrid';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import InquireModal from '@/components/InquireModal';
import TechDataModal from '@/components/TechDataModal';
import Preloader from '@/components/Preloader';
import { soundEngine } from '@/utils/audio';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // MASTER SCROLL ARCHITECTURE: One shared useScroll attached to 600vh container
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end'],
  });

  const [showPreloader, setShowPreloader] = useState<boolean>(true);
  const [isInquireOpen, setIsInquireOpen] = useState<boolean>(false);
  const [isTechDataOpen, setIsTechDataOpen] = useState<boolean>(false);
  const [driveMode, setDriveMode] = useState<'QUALIFYING' | 'ENDURANCE' | 'WET'>('QUALIFYING');
  const [isAudioMuted, setIsAudioMuted] = useState<boolean>(true);
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest < 0.25) {
      setActivePhaseIndex(0);
    } else if (latest < 0.5) {
      setActivePhaseIndex(1);
    } else if (latest < 0.75) {
      setActivePhaseIndex(2);
    } else {
      setActivePhaseIndex(3);
    }
  });

  const handleToggleAudio = () => {
    const muted = soundEngine.toggleMute();
    setIsAudioMuted(muted);
  };

  return (
    <main className="relative bg-white text-[#111111] min-h-screen">
      {/* Interactive Motorsport Preloader */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Fixed Navigation Bar with Unified Telemetry Header */}
      <Navbar
        scrollYProgress={scrollYProgress}
        driveMode={driveMode}
        onSelectDriveMode={(mode) => setDriveMode(mode)}
        isAudioMuted={isAudioMuted}
        onToggleAudio={handleToggleAudio}
        activePhaseIndex={activePhaseIndex}
        onOpenInquire={() => setIsInquireOpen(true)}
      />

      {/* 600vh Master Scroll Sequence */}
      <div ref={scrollContainerRef} className="relative h-[600vh] bg-white">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
          <BMWScrollCanvas scrollYProgress={scrollYProgress} totalFrames={192} />
          <BMWExperience
            scrollYProgress={scrollYProgress}
            driveMode={driveMode}
            onOpenTechData={() => setIsTechDataOpen(true)}
          />
        </div>
      </div>

      {/* Specifications Grid */}
      <SpecsGrid />

      {/* Evolutionary Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer onOpenInquire={() => setIsInquireOpen(true)} />

      {/* Interactive Modals */}
      <InquireModal isOpen={isInquireOpen} onClose={() => setIsInquireOpen(false)} />
      <TechDataModal isOpen={isTechDataOpen} onClose={() => setIsTechDataOpen(false)} />
    </main>
  );
}
