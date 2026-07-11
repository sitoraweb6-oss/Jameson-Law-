import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Scale, Star, Award, ShieldAlert, Phone, Mail, Clock, MapPin, 
  ChevronDown, HelpCircle, ArrowRight, CheckCircle, ChevronUp,
  Landmark, User, Calendar, BookOpen, Clock3, FileWarning, AlertCircle
} from "lucide-react";

// Modular Component Imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import WhyChooseUs from "./components/WhyChooseUs";
import TeamExperience from "./components/TeamExperience";
import CaseResults from "./components/CaseResults";
import NewsCenter from "./components/NewsCenter";
import ContactAndOffices from "./components/ContactAndOffices";
import ConsultationForm from "./components/ConsultationForm";
import { CoreAttribution } from "./components/CoreAttribution";

// Types & Mock Data
import { 
  PRACTICE_AREAS, ATTORNEYS, TESTIMONIALS, LAW_SHORTS, COURT_HOUSES, OFFICE_LOCATIONS 
} from "./types";

export default function App() {
  const [currentView, setView] = useState<string>("home");
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const [selectedShortId, setSelectedShortId] = useState<string | null>(null);

  // Trigger scroll to the consultation form
  const handleBookConsultation = () => {
    setView("home");
    setTimeout(() => {
      const el = document.getElementById("consultation-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // State for active testimonials carousel
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[activeTestimonialIdx];

  const faqsList = [
    {
      q: "What areas of law does Jameson Law specialise in?",
      a: "Jameson Law is a multi-disciplinary practice. We specialize heavily in Personal Injury (Workers Compensation, Motor Vehicle CTP, Public Liability, and Medical Negligence under 'No Win No Fee' terms), Criminal Defense & AVO prosecution/defense, Traffic Offences & license appeals, Family Law (complex superannuation splits, child custody, property divisions), and high-end PEXA-verified Conveyancing."
    },
    {
      q: "How do I book a consultation with a lawyer?",
      a: "Booking is seamless. You can fill out our encrypted secured Intake Application Form at the bottom of our homepage, select your preferred practice area and office location, or call our toll-free hotline 1800 826 895. An intake officer will connect you with a specialist partner within 2 hours."
    },
    {
      q: "What are the fees for your services?",
      a: "For all Personal Injury and Workers Compensation claims, we operate strictly on a 'No Win No Fee' guarantee. For Criminal Law, Family Law, and Conveyancing, we provide absolute cost transparency with flat-rate fixed fees or stage-by-stage deposit programs so you never receive surprise bills."
    },
    {
      q: "Can I get legal advice over the phone or via email?",
      a: "Yes. While we have 5 physical CBD locations for face-to-face counsel, we conduct secure tele-consultations and encrypted virtual conferences across New South Wales to expedite your file."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FDFCFB] text-[#1A1A1A]">
      
      {/* GLOBAL NAVBAR & ACCLAIMS */}
      <Header 
        currentView={currentView} 
        setView={setView} 
        onBookClick={handleBookConsultation} 
      />

      {/* RENDER VIEW STATE MACHINE */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          
          {/* ================= VIEW: HOMEPAGE (STORYTELLING FLOW) ================= */}
          {currentView === "home" && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* HERO (Authority & cinematic introduction) */}
              <Hero onBookClick={handleBookConsultation} setView={setView} />

              {/* PRACTICE AREAS EXPLORER PREVIEW */}
              <PracticeAreas onBookClick={handleBookConsultation} />

              {/* WHY CHOOSE US (Bento Grid) */}
              <WhyChooseUs onBookClick={handleBookConsultation} />

              {/* TEAM BIOGRAPHIES DOSSIER */}
              <TeamExperience onBookClick={handleBookConsultation} />

              {/* CASE RESULTS CHRONICLES */}
              <CaseResults />

              {/* LAW SHORTS ... IN SHORT (Screenshots inspired segment) */}
              <section className="py-24 bg-white border-b border-[#AF9462]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl space-y-4">
                      <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
                        Legal Answers ... In Short
                      </p>
                      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
                        Bite-sized legal updates.
                      </h2>
                      <p className="text-[#111111]/60 text-sm">
                        NSW laws evolve rapidly. Review our high-end short form visual dossiers addressing common workplace terminations, PR pathways, and drink driving defenses.
                      </p>
                    </div>

                    <button
                      onClick={() => { setView("shorts"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className="px-6 py-3 border border-[#AF9462]/30 hover:border-[#AF9462] hover:bg-[#AF9462]/5 rounded-full text-xs font-bold uppercase tracking-wider text-[#111111] transition-all"
                    >
                      See All Shorts
                    </button>
                  </div>

                  {/* Horizontal short-form cards container */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {LAW_SHORTS.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedShortId(item.id)}
                        className="bg-[#FDFCFB] rounded-2xl overflow-hidden border border-[#AF9462]/15 hover:border-[#AF9462] transition-all duration-300 shadow-sm cursor-pointer group"
                      >
                        <div className="aspect-[9/13] relative overflow-hidden bg-black">
                          <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                          {/* Premium shadow mask */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                          
                          {/* Category badge */}
                          <span className="absolute top-4 left-4 bg-white/95 text-[9px] font-mono uppercase tracking-widest text-[#111111] font-bold px-2.5 py-1 rounded">
                            {item.category}
                          </span>

                          {/* Text overlay bottom */}
                          <div className="absolute bottom-5 left-5 right-5 space-y-2 z-10">
                            <h3 className="font-serif text-lg font-bold text-white tracking-tight leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-[10px] font-mono text-[#AF9462] uppercase">
                              Jameson Law • {item.timeAgo}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* SOCIAL PROOF (Google Verified Reviews Carousel) */}
              <section className="py-24 bg-[#FDFCFB] border-b border-[#AF9462]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto text-center space-y-8">
                    <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
                      Client Endorsements & Proof
                    </p>
                    
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#AF9462] text-[#AF9462]" />
                      ))}
                    </div>

                    {/* Animated Testimonial Card */}
                    <div className="min-h-[160px] flex items-center justify-center">
                      <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#111111] font-medium italic">
                        "{currentTestimonial.content}"
                      </p>
                    </div>

                    <div className="border-t border-[#AF9462]/20 pt-6 max-w-sm mx-auto">
                      <h4 className="text-sm font-bold text-[#111111]">{currentTestimonial.author}</h4>
                      <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#111111]/50 mt-1">
                        <span>Verified Client</span>
                        <span>•</span>
                        <span>{currentTestimonial.source}</span>
                      </div>
                    </div>

                    {/* Slider controls */}
                    <div className="flex justify-center gap-4 pt-4">
                      <button 
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full border border-[#AF9462]/30 hover:border-[#AF9462] hover:bg-[#AF9462]/5 flex items-center justify-center transition-colors text-[#111111]"
                        aria-label="Previous testimonial"
                      >
                        ←
                      </button>
                      <button 
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full border border-[#AF9462]/30 hover:border-[#AF9462] hover:bg-[#AF9462]/5 flex items-center justify-center transition-colors text-[#111111]"
                        aria-label="Next testimonial"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* FREQUENTLY ASKED QUESTIONS */}
              <section className="py-24 bg-white border-b border-[#AF9462]/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                  
                  <div className="text-center space-y-4 mb-16">
                    <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
                      Common Enquiries
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                      Frequently Asked Questions.
                    </h2>
                  </div>

                  {/* Accordion container */}
                  <div className="space-y-4">
                    {faqsList.map((faq, idx) => {
                      const isOpen = idx === activeFaqIdx;
                      return (
                        <div 
                          key={idx}
                          className="border border-[#AF9462]/15 rounded-2xl overflow-hidden bg-[#FDFCFB]/30"
                        >
                          <button
                            onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                            className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-[#AF9462]/5 transition-colors focus:outline-none"
                            id={`faq-btn-${idx}`}
                          >
                            <span className="font-serif font-bold text-sm sm:text-base text-[#111111]">
                              {faq.q}
                            </span>
                            <span className={`text-[#AF9462] text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                              <ChevronDown className="w-5 h-5" />
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-6 pb-6 pt-2 border-t border-[#AF9462]/10 text-xs sm:text-sm text-[#111111]/70 leading-relaxed">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* CONTACT & MAP PREVIEW */}
              <ContactAndOffices />

              {/* SECURED INTAKE FORM (Consultation Experience) */}
              <ConsultationForm />
            </motion.div>
          )}


          {/* ================= STANDALONE VIEW: ABOUT FIRM ================= */}
          {currentView === "about" && (
            <motion.div
              key="about-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-16 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* About Editorial Hero */}
              <div className="max-w-4xl space-y-6">
                <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
                  Establishment, Story, & Integrity
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
                  Protecting families, rights, <br />
                  and livelihoods since 2010.
                </h1>
                <p className="text-[#111111]/70 text-base sm:text-lg md:text-xl leading-relaxed">
                  Jameson Law was founded on a simple, uncompromising premise: legal representation should never feel clinical, template-based, or corporate. We combine the litigious horsepower of top-tier firms with the meticulous care and empathy of specialized boutiques.
                </p>
              </div>

              {/* Timeline Section */}
              <div className="space-y-12">
                <div className="max-w-2xl">
                  <span className="text-xs font-mono text-[#AF9462] uppercase tracking-wider font-semibold">Our Journey</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mt-1">Operational Milestones</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {[
                    { year: "2010", title: "Firm Inception", desc: "First Sydney office established, specializing in workers compensation and family mediation." },
                    { year: "2015", title: "Milestone Payouts", desc: "Recovered over $15M for injured workers, establishing client trust and physical office presence." },
                    { year: "2018", title: "Criminal Defense Expansion", desc: "Principal Solicitor Conchita de Souza joins, establishing a strong defense team." },
                    { year: "2022", title: "Voted Client Favorite", desc: "Ranked as Sydney's highest-reviewed boutique law firm with 1,000+ verified ratings." },
                    { year: "2025", title: "Parramatta HQ Open", desc: "Upgraded to Suite 301 on Philip St, doubling technical capabilities and consultation rooms." }
                  ].map((milestone, i) => (
                    <div key={i} className="bg-white border border-[#AF9462]/15 p-6 rounded-2xl space-y-3 shadow-sm hover:border-[#AF9462] transition-colors">
                      <span className="text-2xl font-serif font-bold text-[#AF9462]">{milestone.year}</span>
                      <h4 className="text-sm font-bold text-[#111111]">{milestone.title}</h4>
                      <p className="text-xs text-[#111111]/60 leading-relaxed">{milestone.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Court Houses We Frequent (From Screenshots) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#111111] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#AF9462]/20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#AF9462]/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs font-mono text-[#AF9462] uppercase tracking-widest font-bold">NSW Jurisdiction Presence</span>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    Court Houses <br />
                    We Frequent.
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    Our solicitors represent clients daily in key regional, local, and district courts. This continuous presence fosters solid rapport with magistrates and registry staff across New South Wales.
                  </p>
                  
                  <div className="pt-4">
                    <button
                      onClick={handleBookConsultation}
                      className="bg-[#AF9462] hover:bg-white text-[#111111] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Schedule Representation
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  {COURT_HOUSES.map((ch, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <h4 className="text-xs font-bold font-mono text-[#AF9462] uppercase">{ch.name}</h4>
                      <p className="text-xs text-white/70 leading-relaxed">{ch.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}


          {/* ================= STANDALONE VIEW: PRACTICE AREAS ================= */}
          {currentView === "practices" && (
            <motion.div
              key="practices-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-3xl space-y-4 mb-8">
                <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
                  Accredited Specializations
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
                  Our Practice Areas
                </h1>
                <p className="text-[#111111]/70 text-sm sm:text-base leading-relaxed">
                  Jameson Law is fully accredited by the NSW Law Society to prosecute, defend, and resolve matters across multiple jurisdictions. Select an item below to begin an obligation-free review.
                </p>
              </div>

              {/* Complete Practice Matrix layout */}
              <div className="space-y-16">
                {PRACTICE_AREAS.map((area, i) => (
                  <div 
                    key={area.id} 
                    id={area.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#AF9462]/15 pb-16 last:border-0 ${
                      i % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Summary */}
                    <div className="lg:col-span-4 space-y-4">
                      <span className="text-[10px] font-mono text-[#AF9462] uppercase tracking-wider font-bold bg-[#AF9462]/10 px-3 py-1 rounded-full inline-block">
                        Division 0{i + 1}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">{area.name}</h2>
                      <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed">{area.longDesc}</p>
                      
                      <div className="pt-4">
                        <button
                          onClick={handleBookConsultation}
                          className="px-5 py-3 rounded-xl bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                        >
                          Book {area.name} Consult
                        </button>
                      </div>
                    </div>

                    {/* Specialties listed */}
                    <div className="lg:col-span-8 bg-white border border-[#AF9462]/15 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {area.specialties.map((spec, index) => (
                        <div key={index} className="p-4 bg-[#FDFCFB] rounded-xl space-y-1 border border-[#AF9462]/10">
                          <h4 className="text-xs font-bold text-[#111111] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#AF9462]" />
                            {spec.title}
                          </h4>
                          <p className="text-xs text-[#111111]/60 leading-relaxed pl-3.5">
                            {spec.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}


          {/* ================= STANDALONE VIEW: CASE RESULTS ================= */}
          {currentView === "results" && (
            <motion.div
              key="results-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Standalone case studies index */}
              <CaseResults />

              <div className="bg-white border border-[#AF9462]/15 rounded-3xl p-8 sm:p-12 space-y-6 text-center max-w-4xl mx-auto">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                  Are you facing a similar legal challenge?
                </h3>
                <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed max-w-xl mx-auto">
                  Our defense and personal injury teams construct aggressive brief strategies to resolve your disputes favorably. Do not delay receiving qualified legal counsel.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleBookConsultation}
                    className="bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                  >
                    Submit Secured Case Review File
                  </button>
                </div>
              </div>
            </motion.div>
          )}


          {/* ================= STANDALONE VIEW: LAW SHORTS ================= */}
          {currentView === "shorts" && (
            <motion.div
              key="shorts-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-3xl space-y-4">
                <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
                  Legal Answers ... In Short
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
                  Dossier Shorts Library
                </h1>
                <p className="text-[#111111]/70 text-sm">
                  Click on any card to slide open the complete analysis, legal references, and actionable advice.
                </p>
              </div>

              {/* Complete catalog of shorts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {LAW_SHORTS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedShortId(item.id)}
                    className="bg-[#FDFCFB] rounded-2xl overflow-hidden border border-[#AF9462]/15 hover:border-[#AF9462] transition-all duration-300 shadow-sm cursor-pointer group"
                  >
                    <div className="aspect-[9/13] relative overflow-hidden bg-black">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale opacity-75 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      
                      <span className="absolute top-4 left-4 bg-white/95 text-[9px] font-mono uppercase tracking-widest text-[#111111] font-bold px-2.5 py-1 rounded">
                        {item.category}
                      </span>

                      <div className="absolute bottom-5 left-5 right-5 space-y-2 z-10">
                        <h3 className="font-serif text-lg font-bold text-white tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[10px] font-mono text-[#AF9462] uppercase">
                          Jameson Law • {item.timeAgo}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}


          {/* ================= STANDALONE VIEW: NEWS ================= */}
          {currentView === "news" && (
            <motion.div
              key="news-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <NewsCenter />
            </motion.div>
          )}


          {/* ================= STANDALONE VIEW: CONTACT & OFFICES ================= */}
          {currentView === "contact" && (
            <motion.div
              key="contact-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ContactAndOffices />
              <ConsultationForm />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* PERSISTENT FLOATING INTAKE CALL TO ACTION FOOTER BANNER */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#111111] text-white py-3.5 px-4 shadow-xl border-t border-[#AF9462]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <p className="text-[11px] sm:text-xs font-mono text-white/90">
            Need to speak to a lawyer?
          </p>
        </div>
        
        <div className="flex items-center gap-5">
          <a href="tel:1800826895" className="hidden md:flex items-center gap-1.5 text-xs font-mono font-bold text-[#AF9462] hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" />
            1800 826 895
          </a>
          
          <button
            onClick={handleBookConsultation}
            className="bg-[#AF9462] hover:bg-white text-[#111111] px-5 py-2 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors shadow-md border border-white/10"
            id="floating-consultation-trigger"
          >
            BOOK CONSULTATION
          </button>
        </div>
      </div>

      {/* SHORTS POPUP MODAL (For immersive visual stories readout) */}
      <AnimatePresence>
        {selectedShortId && (() => {
          const matchedShort = LAW_SHORTS.find(s => s.id === selectedShortId);
          if (!matchedShort) return null;
          return (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedShortId(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#FDFCFB] border border-[#AF9462]/30 rounded-2xl p-6 sm:p-8 max-w-md w-full space-y-6 text-left relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image top banner */}
                <div className="aspect-video rounded-xl overflow-hidden bg-black">
                  <img 
                    src={matchedShort.imageUrl} 
                    alt={matchedShort.title} 
                    className="w-full h-full object-cover opacity-80 grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#AF9462] font-bold bg-[#AF9462]/10 px-3 py-1 rounded-full">
                    {matchedShort.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] leading-snug">
                    {matchedShort.title}
                  </h3>
                  <p className="text-[10px] font-mono text-[#111111]/40 uppercase">
                    Chronicle • Jameson Law
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed font-normal">
                  {matchedShort.summary}
                </p>

                <p className="text-[11px] text-[#111111]/60 leading-relaxed italic border-l-2 border-[#AF9462] pl-4">
                  For advice about how this specific legal update impacts your active contract or pending application, secure a complete case intake analysis with our specialists today.
                </p>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      setSelectedShortId(null);
                      handleBookConsultation();
                    }}
                    className="flex-1 bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-200 text-center"
                  >
                    Discuss Case File
                  </button>
                  <button
                    onClick={() => setSelectedShortId(null)}
                    className="px-4 py-3 border border-[#111111]/20 rounded-xl text-xs font-semibold text-[#111111]"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* MASTER FOOTER ACCORDING TO BRAND SPECS */}
      <footer className="bg-[#111111] text-white pt-24 pb-16 border-t border-[#AF9462]/20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            
            {/* Logo and disclosure (4cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-[#AF9462]/30 flex items-center justify-center text-[#AF9462]">
                  <Scale className="w-5.5 h-5.5" />
                </div>
                <div>
                  <div className="flex items-baseline text-white">
                    <span className="font-serif text-xl font-bold">Jameson</span>
                    <span className="font-serif text-xl font-light text-[#AF9462] ml-1">Law</span>
                  </div>
                  <div className="text-[9px] font-mono tracking-widest text-white/50 uppercase">
                    WE GET IT
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-xs leading-relaxed max-w-sm">
                Jameson Law® is an award-winning, state-accredited private legal practice operating under the professional regulations of New South Wales. We protect the rights, financial payouts, and marital asset distributions of individuals and corporate entities with absolute confidentiality.
              </p>

              <div className="flex gap-4 text-xs font-mono text-white/40">
                <a href="mailto:info@jamesonlaw.com.au" className="hover:text-[#AF9462]">info@jamesonlaw.com.au</a>
                <span>•</span>
                <span>Toll Free: 1800 826 895</span>
              </div>
            </div>

            {/* Quick Navigation link list (3cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#AF9462] font-bold">
                Firm Operations
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70">
                {[
                  { id: "home", label: "Homepage Journey" },
                  { id: "about", label: "About Our Mission" },
                  { id: "practices", label: "Accredited Practices" },
                  { id: "results", label: "Chronicle Results" },
                  { id: "shorts", label: "Video shorts center" },
                  { id: "news", label: "Legal Insights Center" },
                  { id: "contact", label: "Contact Offices" }
                ].map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => {
                        setView(link.id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="hover:text-[#AF9462] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas Links quick list (3cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#AF9462] font-bold">
                Specializations
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70">
                {PRACTICE_AREAS.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => {
                        setView("practices");
                        setTimeout(() => {
                          const el = document.getElementById(p.id);
                          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 100);
                      }}
                      className="hover:text-[#AF9462] transition-colors text-left"
                    >
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Central head office contact card (2cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#AF9462] font-bold">
                Central HQ Location
              </h4>
              <div className="text-xs text-white/70 space-y-2.5">
                <p className="font-semibold text-white">Parramatta Head Office</p>
                <p className="leading-relaxed text-white/60 text-[11px]">
                  Suite 301, 67-69 Philip St,<br />
                  Parramatta NSW 2150
                </p>
                <p className="font-mono text-[10px] text-white/50">
                  Ph: 1800 826 895<br />
                  Mob: 0488 817 882
                </p>
              </div>
            </div>

          </div>

          {/* Sub footer disclosures / copyrights / Back to top */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-white/40">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-center md:justify-start">
                <p>© 2026 Jameson Law Private Practice. All rights reserved.</p>
                <CoreAttribution variant="footer" />
              </div>
              <p className="max-w-2xl text-[9px] leading-relaxed">
                Disclaimer: The informational content displayed across this website and the Dossier Shorts library does not constitute binding legal representation or official counsel under the Legal Profession Uniform Law (NSW). Standard professional fee parameters and client privilege rules apply exclusively upon formal, written legal retainer agreements.
              </p>
            </div>

            <button
              onClick={handleBackToTop}
              className="flex items-center gap-1 hover:text-[#AF9462] transition-colors uppercase tracking-wider text-[11px] font-bold shrink-0 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/5"
            >
              Back to top
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>

      {/* Reusable Core Floating Attribution */}
      <CoreAttribution variant="floating" />

    </div>
  );
}
