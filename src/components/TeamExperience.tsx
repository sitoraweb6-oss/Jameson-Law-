import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Award, Calendar, BookOpen, Briefcase, GraduationCap, Languages } from "lucide-react";
import { ATTORNEYS, Attorney } from "../types";

interface TeamExperienceProps {
  onBookClick: () => void;
}

export default function TeamExperience({ onBookClick }: TeamExperienceProps) {
  const [activeAttorneyId, setActiveAttorneyId] = useState<string>("maryanne-fares");

  const activeAttorney = ATTORNEYS.find(att => att.id === activeAttorneyId) || ATTORNEYS[0];

  return (
    <section className="py-24 bg-white border-b border-[#AF9462]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
            Senior Counsel & Solicitors
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Expert Sydney lawyers who treat <br />
            your matter as their absolute priority.
          </h2>
          <p className="text-[#111111]/65 text-sm sm:text-base leading-relaxed">
            Our firm is driven by accomplished, specialized advocates who have spent years navigating the complex legal landscape of New South Wales.
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: List with interactive hover/click profiles (5cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#111111]/50 border-b border-[#AF9462]/15 pb-2">
              Select an Advocate to inspect credentials
            </p>
            
            <div className="space-y-4">
              {ATTORNEYS.map((att) => {
                const isActive = att.id === activeAttorneyId;
                return (
                  <button
                    key={att.id}
                    onClick={() => setActiveAttorneyId(att.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${
                      isActive
                        ? "bg-[#111111] text-white border-transparent shadow-lg scale-[1.02]"
                        : "bg-[#FDFCFB] text-[#111111] border-[#AF9462]/15 hover:border-[#AF9462]/40"
                    }`}
                    id={`team-item-${att.id}`}
                  >
                    {/* Circle Portrait */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#AF9462]/30 shrink-0">
                      <img 
                        src={att.image} 
                        alt={att.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-mono tracking-wider ${isActive ? "text-[#AF9462]" : "text-[#111111]/50"}`}>
                        {att.role.split(" - ")[0]}
                      </p>
                      <h3 className={`text-base font-bold truncate ${isActive ? "text-white" : "text-[#111111]"}`}>
                        {att.name}
                      </h3>
                      <p className={`text-xs truncate ${isActive ? "text-white/60" : "text-[#111111]/60"}`}>
                        Specialty: {att.specialties.join(", ")}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick trust signal card */}
            <div className="bg-[#FDFCFB] p-6 rounded-2xl border border-[#AF9462]/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider font-mono">
                  100% Accredited Team
                </h4>
                <p className="text-xs text-[#111111]/60 leading-relaxed mt-0.5">
                  Every solicitor is an active member of the NSW Law Society and undergoes bi-annual professional updates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Animated Profile dossier (7cols) */}
          <div className="lg:col-span-7 bg-[#FDFCFB] border border-[#AF9462]/15 rounded-3xl overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAttorney.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 space-y-6"
              >
                {/* Dossier Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-[#AF9462]/10 pb-6">
                  {/* High Quality Portrait Photo */}
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#AF9462]/30 shadow-md shrink-0">
                    <img 
                      src={activeAttorney.image} 
                      alt={activeAttorney.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="text-center sm:text-left space-y-2 flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#AF9462] font-bold bg-[#AF9462]/10 px-3 py-1 rounded-full">
                      Professional Dossier
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                      {activeAttorney.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#AF9462]">
                      {activeAttorney.role}
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs text-[#111111]/60 font-mono mt-2">
                      <span>Cases Handled: <strong>{activeAttorney.casesHandled}+</strong></span>
                      <span>•</span>
                      <span>Languages: <strong>{activeAttorney.languages.join(", ")}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Dossier Body */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#111111]/50 flex items-center gap-2">
                      <User className="w-3.5 h-3.5" />
                      Biography
                    </h4>
                    <p className="text-sm text-[#111111]/75 leading-relaxed">
                      {activeAttorney.bio}
                    </p>
                  </div>

                  {/* Academic & Professional Track */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#AF9462]/10">
                    <div className="space-y-3">
                      <h5 className="text-xs font-mono uppercase tracking-widest text-[#111111]/50 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#AF9462]" />
                        Education
                      </h5>
                      <ul className="space-y-2">
                        {activeAttorney.education.map((edu, idx) => (
                          <li key={idx} className="text-xs text-[#111111]/80 font-medium list-none pl-0">
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-xs font-mono uppercase tracking-widest text-[#111111]/50 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#AF9462]" />
                        Experience
                      </h5>
                      <ul className="space-y-2">
                        {activeAttorney.experience.map((exp, idx) => (
                          <li key={idx} className="text-xs text-[#111111]/80 font-medium list-none pl-0">
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA inside the dossier */}
                <div className="border-t border-[#AF9462]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#111111]/60 text-center sm:text-left">
                    Want to consult directly with <strong>{activeAttorney.name}</strong>? <br />
                    Select them in our upcoming consultation request form.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onBookClick}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    Book with {activeAttorney.name.split(" ")[0]}
                  </motion.button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
