import React from "react";
import { motion } from "motion/react";
import { Star, Shield, ArrowRight, Award, CheckCircle } from "lucide-react";

interface HeroProps {
  onBookClick: () => void;
  setView: (view: string) => void;
}

export default function Hero({ onBookClick, setView }: HeroProps) {
  return (
    <section className="relative bg-[#FDFCFB] pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden border-b border-[#AF9462]/10">
      {/* Decorative background grid/gradients for luxury digital feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#AF9462_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#AF9462]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-white blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Area */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#AF9462]/10 border border-[#AF9462]/20 text-[#8E754C] text-xs font-mono font-medium uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 fill-[#AF9462] text-[#AF9462]" />
              Sydney's Highest-Rated Law Firm
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08]">
              We are in it to <br />
              <span className="serif-italics text-[#AF9462] font-normal font-serif">win it</span>. <br />
              For you.
            </h1>

            <p className="text-[#111111]/75 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl">
              When success is critical, you need highly experienced solicitors actively preparing, fighting, and winning your legal matters. Jameson Law protects your rights with a modern, aggressive, and highly transparent approach.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-[#AF9462]/15 py-6 max-w-lg">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">40+</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/60 mt-1">Years Combined Exp</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">1,000+</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/60 mt-1">5-Star Reviews</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#AF9462]">99%</p>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/60 mt-1">Win Commitment</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookClick}
                className="flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 border border-[#AF9462]/30 shadow-lg hover-gold-glow"
                id="hero-book-now-button"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <button
                onClick={() => setView("practices")}
                className="flex items-center justify-center gap-2 border border-[#111111]/20 hover:border-[#AF9462] hover:bg-[#AF9462]/5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-[#111111] transition-all duration-200"
                id="hero-view-practices-button"
              >
                Explore Specialties
              </button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-[#111111]/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                No Win No Fee Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Sydney-wide physical offices
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                24/7 client emergency response
              </span>
            </div>
          </div>

          {/* Cinematic Graphic / Portrait Montage Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#AF9462]/20 bg-[#111111]">
              
              {/* Premium overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10 opacity-70" />
              <div className="absolute inset-0 bg-[#AF9462]/10 mix-blend-color-burn" />

              {/* Real cinematic team illustration (Unsplash optimized placeholder) */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                alt="Jameson Law Sydney Team" 
                className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Floating review card inside the hero image */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FDFCFB]/95 backdrop-blur-md rounded-xl p-4 border border-[#AF9462]/30 z-20 shadow-xl">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#AF9462] text-[#AF9462]" />
                  ))}
                  <span className="text-xs font-bold text-[#111111] ml-2">4.9/5</span>
                </div>
                <p className="text-[11px] italic text-[#111111]/80 line-clamp-2">
                  "They worked tirelessly and got the best possible outcome. Exceptional communication throughout."
                </p>
                <div className="flex items-center justify-between mt-2 border-t border-[#AF9462]/15 pt-2">
                  <span className="text-[10px] font-mono text-[#AF9462] uppercase">Verified Google Reviewer</span>
                  <span className="text-[9px] text-[#111111]/50">Danielle G.</span>
                </div>
              </div>
            </div>

            {/* Absolute positioned custom gold emblem */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/95 border border-[#AF9462]/30 shadow-xl flex flex-col items-center justify-center p-2 z-20">
              <Award className="w-6 h-6 text-[#AF9462] mb-0.5" />
              <span className="text-[8px] font-mono font-bold tracking-wider text-center text-[#111111] uppercase leading-none">
                WINNER
              </span>
              <span className="text-[7px] text-[#AF9462] text-center font-bold">2020 - 2025</span>
            </div>
          </div>

        </div>

        {/* Brand Accolades / Logos Band */}
        <div className="mt-20 border-t border-[#AF9462]/10 pt-10">
          <p className="text-center text-[10px] font-mono uppercase tracking-widest text-[#111111]/50 mb-6">
            Featured In & Certified By
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center grayscale opacity-60">
            <div className="flex justify-center font-serif font-bold text-lg text-[#111111]">
              Channel 10
            </div>
            <div className="flex justify-center font-serif font-bold text-lg text-[#111111]">
              Channel 9
            </div>
            <div className="flex justify-center font-serif font-bold text-lg text-[#111111]">
              7 News
            </div>
            <div className="flex justify-center font-serif font-bold text-lg text-[#111111]">
              ABC NEWS
            </div>
            <div className="flex justify-center font-serif font-bold text-lg text-[#111111]">
              SBS Australia
            </div>
            <div className="flex justify-center font-mono font-bold text-xs text-[#111111] border border-[#111111]/30 px-2 py-1 rounded">
              NSW LAW SOC
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
