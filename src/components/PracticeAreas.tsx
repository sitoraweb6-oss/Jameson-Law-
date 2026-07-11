import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Scale, HeartHandshake, Home, CheckCircle2, AlertTriangle, HelpCircle, ChevronRight, MessageSquareCode } from "lucide-react";
import { PRACTICE_AREAS, PracticeArea } from "../types";

interface PracticeAreasProps {
  onBookClick: () => void;
}

export default function PracticeAreas({ onBookClick }: PracticeAreasProps) {
  const [selectedAreaId, setSelectedAreaId] = useState<string>("personal-injury");
  const [activeSubTab, setActiveSubTab] = useState<"specialties" | "problems" | "strategy" | "faqs">("specialties");

  const selectedArea = PRACTICE_AREAS.find(area => area.id === selectedAreaId) || PRACTICE_AREAS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return <Shield className="w-5 h-5" />;
      case "Scale": return <Scale className="w-5 h-5" />;
      case "HeartHandshake": return <HeartHandshake className="w-5 h-5" />;
      case "Home": return <Home className="w-5 h-5" />;
      default: return <Scale className="w-5 h-5" />;
    }
  };

  return (
    <section id="practices" className="py-24 bg-white border-b border-[#AF9462]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
            Specialized Practice Jurisdictions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            We provide absolute clarity <br />
            in complex litigation fields.
          </h2>
          <p className="text-[#111111]/60 text-sm sm:text-base leading-relaxed">
            Choose a legal sector to explore our specialized sub-disciplines, tactical strategy frameworks, common insurance loopholes, and related legal questions.
          </p>
        </div>

        {/* Dynamic Multi-Pane Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Practice Area Nav cards */}
          <div className="lg:col-span-4 space-y-4">
            {PRACTICE_AREAS.map((area) => {
              const isSelected = area.id === selectedAreaId;
              return (
                <button
                  key={area.id}
                  onClick={() => {
                    setSelectedAreaId(area.id);
                    setActiveSubTab("specialties");
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#111111] text-white border-transparent shadow-xl"
                      : "bg-[#FDFCFB] hover:bg-[#AF9462]/5 text-[#111111] border-[#AF9462]/15 hover:border-[#AF9462]/40"
                  }`}
                  id={`practice-card-${area.id}`}
                >
                  <div className={`p-3 rounded-xl transition-colors ${
                    isSelected ? "bg-[#AF9462] text-[#111111]" : "bg-white text-[#AF9462] border border-[#AF9462]/15"
                  }`}>
                    {getIcon(area.iconName)}
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-bold ${isSelected ? "text-white" : "text-[#111111]"}`}>
                        {area.name}
                      </h3>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? "text-[#AF9462]" : "text-[#111111]/30 group-hover:translate-x-1"
                      }`} />
                    </div>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${isSelected ? "text-white/70" : "text-[#111111]/60"}`}>
                      {area.shortDesc}
                    </p>
                  </div>

                  {/* Elegant decorative background label */}
                  <span className={`absolute bottom-2 right-4 text-[9px] font-mono select-none opacity-5 group-hover:opacity-10 transition-opacity ${
                    isSelected ? "text-white" : "text-[#111111]"
                  }`}>
                    JAMESON LAW
                  </span>
                </button>
              );
            })}

            {/* Quick Consultation Badge */}
            <div className="p-6 rounded-2xl bg-[#AF9462]/5 border border-[#AF9462]/20 space-y-3 mt-6">
              <h4 className="font-serif font-semibold text-sm text-[#111111] flex items-center gap-2">
                <MessageSquareCode className="w-4 h-4 text-[#AF9462]" />
                Unsure which category fits?
              </h4>
              <p className="text-xs text-[#111111]/75 leading-relaxed">
                Connect with our Sydney intake registrar immediately. We will direct you to the exact specialist attorney.
              </p>
              <button
                onClick={onBookClick}
                className="w-full py-2 px-4 rounded-lg bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] text-xs font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Inquire Directly
              </button>
            </div>
          </div>

          {/* Right Column: Immersive Detailed View Pane */}
          <div className="lg:col-span-8 bg-[#FDFCFB] border border-[#AF9462]/15 rounded-3xl p-6 sm:p-8 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedArea.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Title & Introduction */}
                <div className="border-b border-[#AF9462]/10 pb-6 space-y-2">
                  <span className="text-xs font-mono text-[#AF9462] uppercase tracking-wider font-semibold">
                    Practice Division
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                    {selectedArea.name} Specialties
                  </h3>
                  <p className="text-sm text-[#111111]/75 leading-relaxed">
                    {selectedArea.longDesc}
                  </p>
                </div>

                {/* Internal sub-tabs for beautiful editorial layout */}
                <div className="flex flex-wrap gap-2 border-b border-[#AF9462]/10 pb-4">
                  {[
                    { id: "specialties", label: "Specialties & Areas" },
                    { id: "problems", label: "Common Obstacles" },
                    { id: "strategy", label: "How We Win" },
                    { id: "faqs", label: "Sector FAQs" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSubTab(tab.id as any)}
                      className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-medium transition-all ${
                        activeSubTab === tab.id
                          ? "bg-[#AF9462] text-[#FDFCFB]"
                          : "bg-white hover:bg-[#AF9462]/10 text-[#111111]/70 border border-[#AF9462]/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Sub-tab Content Render */}
                <div className="min-h-[280px]">
                  {activeSubTab === "specialties" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedArea.specialties.map((spec, index) => (
                        <div key={index} className="p-4 rounded-xl bg-white border border-[#AF9462]/10 space-y-1">
                          <h4 className="text-sm font-bold text-[#111111] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AF9462]" />
                            {spec.title}
                          </h4>
                          <p className="text-xs text-[#111111]/60 leading-relaxed pl-3.5">
                            {spec.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSubTab === "problems" && (
                    <div className="space-y-4">
                      <p className="text-xs font-mono uppercase tracking-wider text-rose-700 font-bold flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        Critical challenges you are currently facing:
                      </p>
                      <div className="space-y-2">
                        {selectedArea.commonProblems.map((problem, index) => (
                          <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50/50 border border-rose-100">
                            <span className="text-xs text-rose-800 font-bold font-mono mt-0.5">0{index + 1}.</span>
                            <p className="text-xs text-[#111111]/80 font-medium">
                              {problem}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeSubTab === "strategy" && (
                    <div className="space-y-4">
                      <p className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Jameson Law Actionable Resolution Matrix:
                      </p>
                      <div className="space-y-3">
                        {selectedArea.howWeHelp.map((strategy, index) => (
                          <div key={index} className="p-4 rounded-xl bg-emerald-50/30 border border-emerald-100/50 space-y-1">
                            <h5 className="text-xs font-bold text-[#111111] flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-600" />
                              Core Strategy {index + 1}
                            </h5>
                            <p className="text-xs text-[#111111]/70 leading-relaxed pl-4">
                              {strategy}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeSubTab === "faqs" && (
                    <div className="space-y-4">
                      {selectedArea.faqs.map((faq, index) => (
                        <div key={index} className="p-4 rounded-xl bg-white border border-[#AF9462]/15 space-y-2">
                          <h4 className="text-xs font-bold text-[#111111] flex items-center gap-2">
                            <HelpCircle className="w-4 h-4 text-[#AF9462] shrink-0" />
                            {faq.question}
                          </h4>
                          <p className="text-xs text-[#111111]/65 leading-relaxed pl-6">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sub-view Footer CTA */}
                <div className="border-t border-[#AF9462]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-mono text-[#AF9462] uppercase tracking-wider font-semibold">
                      Private, Confidential, and Encrypted
                    </p>
                    <p className="text-xs text-[#111111]/60">
                      Book an obligation-free, fully protected case review.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onBookClick}
                    className="w-full sm:w-auto bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-[#AF9462]/20"
                  >
                    Discuss your {selectedArea.name} case
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
