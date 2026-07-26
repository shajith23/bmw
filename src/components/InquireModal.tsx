'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface InquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquireModal({ isOpen, onClose }: InquireModalProps) {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    team: '',
    email: '',
    series: 'GT World Challenge',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm">
          {/* Backdrop click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white border border-[#E5E5E5] p-6 md:p-10 shadow-2xl z-10 space-y-6"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <span className="w-2 h-4 bg-[#0066FF] -skew-x-12 inline-block" />
                  <span className="w-2 h-4 bg-[#0048C9] -skew-x-12 inline-block" />
                  <span className="w-2 h-4 bg-[#CC0000] -skew-x-12 inline-block" />
                </div>
                <span className="font-orbitron font-bold text-sm tracking-wider text-[#111111] uppercase">
                  BMW M CUSTOMER RACING
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-[#666666] hover:text-[#111111] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-[#0066FF] text-white flex items-center justify-center rounded-full">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-orbitron font-bold text-2xl text-[#111111] uppercase">
                  INQUIRY TRANSMITTED
                </h3>
                <p className="font-rajdhani text-sm text-[#666666] max-w-md mx-auto">
                  Thank you for your interest in the BMW M4 GT3 EVO. A BMW M Motorsport customer racing specialist will review your team application and respond shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0066FF] text-white font-orbitron text-xs font-bold tracking-widest uppercase"
                >
                  CLOSE WINDOW
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-orbitron font-extrabold text-xl text-[#111111] uppercase">
                    ACQUIRE M4 GT3 EVO
                  </h3>
                  <p className="font-rajdhani text-xs text-[#666666] mt-1">
                    Submit inquiry for 2025–2026 GT3 chassis allocations, spare packages, and technical support.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="font-orbitron text-[10px] font-bold text-[#666666] uppercase block mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Weber"
                      className="w-full px-3 py-2 bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#0066FF] focus:bg-white text-xs font-rajdhani font-medium outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-orbitron text-[10px] font-bold text-[#666666] uppercase block mb-1">
                      RACING TEAM / ORGANIZATION *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.team}
                      onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                      placeholder="e.g. BMW Team Schubert"
                      className="w-full px-3 py-2 bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#0066FF] focus:bg-white text-xs font-rajdhani font-medium outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-orbitron text-[10px] font-bold text-[#666666] uppercase block mb-1">
                      BUSINESS EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="racing@team.com"
                      className="w-full px-3 py-2 bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#0066FF] focus:bg-white text-xs font-rajdhani font-medium outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-orbitron text-[10px] font-bold text-[#666666] uppercase block mb-1">
                      PLANNED CHAMPIONSHIP
                    </label>
                    <select
                      value={formData.series}
                      onChange={(e) => setFormData({ ...formData, series: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#0066FF] focus:bg-white text-xs font-rajdhani font-medium outline-none transition-colors"
                    >
                      <option>GT World Challenge Europe / America</option>
                      <option>IMSA WeatherTech SportsCar Championship</option>
                      <option>Nürburgring Endurance Series (NLS/24h)</option>
                      <option>Super GT / Asian Le Mans</option>
                      <option>Customer Racing / Collector</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-orbitron text-[10px] font-bold text-[#666666] uppercase block mb-1">
                    SPECIFICATION NOTES / ALLOCATION REQUIREMENTS
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide details regarding target delivery date, required telemetry packages, or spare parts..."
                    className="w-full px-3 py-2 bg-[#F5F5F5] border border-[#E5E5E5] focus:border-[#0066FF] focus:bg-white text-xs font-rajdhani font-medium outline-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#111111] font-orbitron text-xs font-bold uppercase transition-colors"
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#0066FF] hover:bg-[#0048C9] text-white font-orbitron text-xs font-bold tracking-widest uppercase transition-colors shadow-md"
                  >
                    SUBMIT INQUIRY
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
