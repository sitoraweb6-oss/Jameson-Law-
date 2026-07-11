import React from "react";
import { Award, Clock, Star, BrainCircuit, Heart, Landmark, CheckSquare, Zap } from "lucide-react";

interface WhyChooseUsProps {
  onBookClick: () => void;
}

export default function WhyChooseUs({ onBookClick }: WhyChooseUsProps) {
  return (
    <section className="py-24 bg-[#FDFCFB] border-b border-[#AF9462]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
            The Jameson Advantage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Why Sydney's leading corporate, family, and injury clients choose us.
          </h2>
          <p className="text-[#111111]/60 text-sm sm:text-base">
            We operate beyond standard legal templates. Every litigation track, communication standard, and evidence gathering protocol is custom crafted.
          </p>
        </div>

        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
          
          {/* Block 1: Awards Highlights (Large - 8cols md, 2rows) */}
          <div className="md:col-span-8 md:row-span-2 bg-[#111111] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-[#AF9462]/20 relative overflow-hidden group hover:border-[#AF9462] transition-colors duration-500 shadow-xl">
            {/* Absolute vector details */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#AF9462]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#AF9462]/10 transition-colors duration-500" />
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#AF9462]/10 border border-[#AF9462]/20 rounded-lg text-[#AF9462] text-[10px] font-mono uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                Industry Recognition Leader
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-xl leading-tight">
                Back-to-back winners of the Local Business Awards & Niche Legal Excellence Prizes
              </h3>
              
              <p className="text-white/70 text-xs sm:text-sm max-w-lg leading-relaxed">
                Jameson Law has been consistently recognized for unprecedented client satisfaction, high success ratios, and technical innovation in NSW legal processes from 2020 through 2025.
              </p>
            </div>

            {/* Badges timeline */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-6 border-t border-white/10 z-10">
              {[2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                <div key={year} className="bg-white/5 border border-white/10 p-2 rounded-xl text-center group-hover:border-[#AF9462]/30 transition-colors">
                  <p className="text-[10px] font-mono text-[#AF9462] font-bold">WINNER</p>
                  <p className="text-xs font-bold text-white mt-0.5">{year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Block 2: Response Time (Small - 4cols md, 1row) */}
          <div className="md:col-span-4 bg-white border border-[#AF9462]/15 rounded-3xl p-6 flex flex-col justify-between hover:border-[#AF9462] transition-colors duration-300 relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-[#AF9462]/10 flex items-center justify-center text-[#AF9462]">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-[#AF9462] font-bold uppercase bg-[#AF9462]/5 px-2 py-0.5 rounded">
                SLAs
              </span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider font-mono">
                2-Hour Callback
              </h4>
              <p className="text-xs text-[#111111]/60 leading-relaxed mt-1">
                We guarantee a qualified senior solicitor will review and respond to your inquiry within 120 minutes.
              </p>
            </div>
          </div>

          {/* Block 3: Experience Stat (Small - 4cols md, 1row) */}
          <div className="md:col-span-4 bg-white border border-[#AF9462]/15 rounded-3xl p-6 flex flex-col justify-between hover:border-[#AF9462] transition-colors duration-300 group">
            <div className="flex justify-between items-start">
              <span className="text-4xl font-serif font-bold text-[#111111] leading-none group-hover:text-[#AF9462] transition-colors">
                40+
              </span>
              <span className="text-[9px] font-mono text-[#AF9462] uppercase">Combined Years</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wider font-mono">
                NSW Advocacy Exp
              </h4>
              <p className="text-xs text-[#111111]/60 leading-relaxed mt-1">
                A massive catalog of successful trials in local, district, and high-court jurisdictions.
              </p>
            </div>
          </div>

          {/* Block 4: Win Strategy (Medium - 4cols md, 2rows) */}
          <div className="md:col-span-4 md:row-span-2 bg-[#FDFCFB] border-2 border-[#AF9462]/20 rounded-3xl p-6 flex flex-col justify-between hover:border-[#AF9462] transition-colors duration-500 relative group overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#AF9462]/5 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-[#AF9462]">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] leading-snug">
                "We're In It to Win It" — Forensic Brief Preparation
              </h3>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                Our defense strategy goes beyond simple negotiation. We dissect police briefs, compile counter-examinations, challenge evidence, and build winning trial strategies before entering court.
              </p>
            </div>
            <div className="border-t border-[#AF9462]/15 pt-4">
              <ul className="space-y-1.5">
                {[
                  "Witness cross-examinations",
                  "Forensic data extraction",
                  "CTP & Medical reconstructions",
                  "Supreme Court appeals"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[10px] font-mono text-[#111111]/70">
                    <CheckSquare className="w-3 h-3 text-[#AF9462]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Block 5: Client Care (Medium - 4cols md, 2rows) */}
          <div className="md:col-span-4 md:row-span-2 bg-white border border-[#AF9462]/15 rounded-3xl p-6 flex flex-col justify-between hover:border-[#AF9462] transition-colors duration-500 group relative">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] leading-snug">
                Absolute Safety with No Win No Fee Commitment
              </h3>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                If you have been injured or treated negligently, we remove all financial risk. You pay absolutely zero professional solicitor fees unless we successfully win your claim.
              </p>
            </div>
            <div className="bg-[#FDFCFB] rounded-xl p-3 border border-[#AF9462]/10">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#111111]/80">
                <span>Professional Legal Fee</span>
                <span className="font-bold text-emerald-600">$0 Upfront</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#111111]/80 mt-1">
                <span>Assessment Consultation</span>
                <span className="font-bold text-emerald-600">100% Free</span>
              </div>
            </div>
          </div>

          {/* Block 6: Physical Presence (Medium - 4cols md, 2rows) */}
          <div className="md:col-span-4 md:row-span-2 bg-white border border-[#AF9462]/15 rounded-3xl p-6 flex flex-col justify-between hover:border-[#AF9462] transition-colors duration-500 group">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FDFCFB] border border-[#AF9462]/15 flex items-center justify-center text-[#AF9462]">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] leading-snug">
                Sydney-wide Presence with Head Office in Parramatta
              </h3>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                We operate multiple physical consultation hubs across major metropolitan districts so you never have to travel far to consult your legal team.
              </p>
            </div>
            <div className="space-y-1">
              {[
                { name: "Parramatta CBD", role: "Head Office" },
                { name: "Sydney CBD", role: "Practice Office" },
                { name: "Blacktown CBD", role: "Practice Office" },
                { name: "Liverpool CBD", role: "Practice Office" },
                { name: "Bankstown CBD", role: "Practice Office" }
              ].map((loc, idx) => (
                <div key={idx} className="flex justify-between items-center text-[10px] font-mono border-b border-[#AF9462]/5 pb-1 last:border-b-0">
                  <span className="text-[#111111] font-bold">{loc.name}</span>
                  <span className="text-[#AF9462]">{loc.role}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
