import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Award, TrendingUp, ShieldAlert, ArrowRight } from "lucide-react";
import { CASE_RESULTS, CaseResult } from "../types";

export default function CaseResults() {
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);

  const activeCase = CASE_RESULTS[activeCaseIdx];

  return (
    <section className="py-24 bg-[#FDFCFB] border-b border-[#AF9462]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
              Proven Litigation Track Record
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Compelling case stories. <br />
              Concrete outcomes.
            </h2>
            <p className="text-[#111111]/65 text-sm sm:text-base leading-relaxed">
              We translate abstract legal frameworks into life-changing, successful resolutions for individuals and corporate entities.
            </p>
          </div>

          {/* Bullet Case Selector controls */}
          <div className="flex gap-2">
            {CASE_RESULTS.map((cs, idx) => (
              <button
                key={cs.id}
                onClick={() => setActiveCaseIdx(idx)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                  idx === activeCaseIdx
                    ? "bg-[#111111] text-[#AF9462] font-bold shadow-md"
                    : "bg-white hover:bg-[#AF9462]/10 text-[#111111]/60 border border-[#AF9462]/15"
                }`}
              >
                Case 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Big Interactive Editorial Slide */}
        <div className="bg-white border border-[#AF9462]/15 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Big Stat sidebar / Left Block (4cols lg) */}
          <div className="lg:col-span-4 bg-[#111111] text-white p-8 flex flex-col justify-between border-r border-[#AF9462]/15 relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#AF9462]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6 z-10">
              <span className="inline-block bg-[#AF9462]/10 border border-[#AF9462]/30 text-[#AF9462] px-3 py-1 rounded text-[9px] font-mono uppercase tracking-widest font-bold">
                Litigation Chronicle
              </span>
              <p className="text-xs font-mono text-white/50">
                Category: <strong className="text-white">{activeCase.category}</strong>
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                {activeCase.title}
              </h3>
            </div>

            {/* Large Highlighted resolved amount if present */}
            <div className="pt-10 z-10 space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                Compensation / Solution Yield
              </p>
              <p className="text-4xl sm:text-5xl font-serif font-bold text-[#AF9462]">
                {activeCase.amountSolved || "Successfully Dismissed"}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 font-mono">
                <span>Client Initials: <strong>{activeCase.clientInitials}</strong></span>
                <span>•</span>
                <span>NSW Courts</span>
              </div>
            </div>
          </div>

          {/* Chronicle Dossier Details / Right Block (8cols lg) */}
          <div className="lg:col-span-8 p-6 sm:p-10 space-y-8 bg-[#FDFCFB]/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* 1. Challenge Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-rose-700 font-bold flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      The Challenge
                    </h4>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed font-medium">
                      {activeCase.challenge}
                    </p>
                  </div>
                </div>

                {/* 2. Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-t border-[#AF9462]/10 pt-6">
                  <div className="md:col-span-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#8E754C] font-bold flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      Legal Strategy
                    </h4>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-xs sm:text-sm text-[#111111]/75 leading-relaxed">
                      {activeCase.strategy}
                    </p>
                  </div>
                </div>

                {/* 3. Outcome & Client Impact */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-t border-[#AF9462]/10 pt-6">
                  <div className="md:col-span-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Outcome Yield
                    </h4>
                  </div>
                  <div className="md:col-span-9 space-y-3">
                    <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-100">
                      <p className="text-xs font-bold text-emerald-900">
                        {activeCase.outcome}
                      </p>
                    </div>
                    <p className="text-xs text-[#111111]/60 leading-relaxed italic">
                      "Impact: {activeCase.impact}"
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
