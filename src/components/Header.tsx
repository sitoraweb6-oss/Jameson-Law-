import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Calendar, Menu, X, Scale, ChevronDown, Award } from "lucide-react";
import { PRACTICE_AREAS } from "../types";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  onBookClick: () => void;
}

export default function Header({ currentView, setView, onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Firm" },
    { id: "practices", label: "Practice Areas" },
    { id: "results", label: "Case Results" },
    { id: "shorts", label: "Law Shorts" },
    { id: "news", label: "Legal Insights" },
    { id: "contact", label: "Contact & Offices" },
  ];

  const handleNavClick = (viewId: string) => {
    setView(viewId);
    setIsOpen(false);
    setShowServicesMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Banner with Trust Indicator */}
      <div className="bg-[#111111] text-[#AF9462] py-2 px-4 text-xs font-mono tracking-wider text-center flex items-center justify-center gap-4 z-50 relative border-b border-white/5">
        <span className="flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5" />
          NSW Law Society Accredited Specialists
        </span>
        <span className="hidden md:inline text-white/30">|</span>
        <span className="hidden md:inline">
          ★ 4.9 Google Rating (1,000+ Verified Client Reviews)
        </span>
        <span className="hidden md:inline text-white/30">|</span>
        <span className="bg-[#AF9462]/10 text-[#AF9462] px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest animate-pulse">
          24/7 Emergency Line
        </span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FDFCFB]/90 backdrop-blur-md shadow-sm border-b border-[#AF9462]/10 py-3"
            : "bg-[#FDFCFB] border-b border-[#AF9462]/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => handleNavClick("home")} 
              className="flex items-center gap-3 cursor-pointer group"
              id="header-logo-container"
            >
              <div className="w-10 h-10 rounded-lg bg-[#111111] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-[#AF9462]/30">
                <Scale className="w-5.5 h-5.5 text-[#AF9462]" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                    Jameson
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-light tracking-tight text-[#AF9462] ml-1">
                    Law
                  </span>
                  <span className="text-[10px] text-[#AF9462] font-bold ml-0.5 select-none">®</span>
                </div>
                <div className="text-[9px] font-mono tracking-widest text-[#111111]/60 uppercase leading-none mt-0.5 group-hover:text-[#AF9462] transition-colors duration-300">
                  WE GET IT
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                
                if (item.id === "practices") {
                  return (
                    <div 
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => setShowServicesMenu(true)}
                      onMouseLeave={() => setShowServicesMenu(false)}
                    >
                      <button
                        onClick={() => handleNavClick("practices")}
                        className={`flex items-center gap-1 font-medium text-sm tracking-wide transition-colors duration-200 py-2 ${
                          isActive 
                            ? "text-[#AF9462] font-semibold" 
                            : "text-[#111111]/80 hover:text-[#AF9462]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showServicesMenu ? "rotate-180" : ""}`} />
                      </button>

                      {/* Mega Dropdown */}
                      <AnimatePresence>
                        {showServicesMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-1/2 -translate-x-1/2 top-full w-72 bg-[#FDFCFB] shadow-xl border border-[#AF9462]/20 rounded-xl p-4 z-50"
                          >
                            <div className="space-y-1">
                              <p className="text-[10px] font-mono tracking-widest text-[#AF9462] uppercase border-b border-[#AF9462]/10 pb-2 mb-2">
                                Specializations
                              </p>
                              {PRACTICE_AREAS.map((practice) => (
                                <button
                                  key={practice.id}
                                  onClick={() => {
                                    setView("practices");
                                    // Custom scroll logic can be implemented
                                    setTimeout(() => {
                                      const el = document.getElementById(practice.id);
                                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                                    }, 100);
                                    setShowServicesMenu(false);
                                  }}
                                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-[#111111]/80 hover:bg-[#AF9462]/5 hover:text-[#AF9462] transition-colors flex justify-between items-center group"
                                >
                                  {practice.name}
                                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono">→</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative font-medium text-sm tracking-wide transition-colors duration-200 py-2 ${
                      isActive 
                        ? "text-[#AF9462] font-semibold" 
                        : "text-[#111111]/80 hover:text-[#AF9462]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div 
                        layoutId="activeNavLine" 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#AF9462]" 
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Premium CTA Button Actions */}
            <div className="hidden lg:flex items-center gap-5">
              <a 
                href="tel:1800826895" 
                className="flex items-center gap-2 text-xs font-mono font-medium text-[#111111] hover:text-[#AF9462] transition-colors"
                id="header-phone-link"
              >
                <div className="w-8 h-8 rounded-full border border-[#AF9462]/20 flex items-center justify-center bg-[#AF9462]/5">
                  <Phone className="w-3.5 h-3.5 text-[#AF9462]" />
                </div>
                <span>1800 826 895</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookClick}
                className="flex items-center gap-2 bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-[#AF9462]/30 hover_gold_glow"
                id="header-book-button"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Consult
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <a href="tel:1800826895" className="p-2 border border-[#AF9462]/10 rounded-full bg-[#AF9462]/5">
                <Phone className="w-4 h-4 text-[#AF9462]" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#111111] hover:text-[#AF9462] hover:bg-[#AF9462]/5 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
                id="header-mobile-menu-button"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FDFCFB] border-t border-[#AF9462]/10 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      currentView === item.id
                        ? "bg-[#AF9462]/10 text-[#AF9462] font-semibold"
                        : "text-[#111111]/80 hover:bg-[#AF9462]/5 hover:text-[#AF9462]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-4 border-t border-[#AF9462]/10 flex flex-col gap-3">
                  <a
                    href="tel:1800826895"
                    className="flex items-center justify-center gap-2 py-3 border border-[#AF9462]/20 rounded-xl bg-[#AF9462]/5 text-sm font-semibold text-[#111111]"
                  >
                    <Phone className="w-4 h-4 text-[#AF9462]" />
                    Call 1800 826 895 (Free consultation)
                  </a>
                  
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onBookClick();
                    }}
                    className="flex items-center justify-center gap-2 py-3.5 bg-[#111111] text-white rounded-xl text-sm font-bold tracking-wider uppercase border border-[#AF9462]/30"
                  >
                    <Calendar className="w-4 h-4 text-[#AF9462]" />
                    Book Free Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
