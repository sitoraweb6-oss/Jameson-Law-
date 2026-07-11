import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Shield, CheckCircle, Clock, AlertCircle, Phone, Lock, Sparkles, Scale } from "lucide-react";
import { OFFICE_LOCATIONS, PRACTICE_AREAS, ATTORNEYS } from "../types";

export default function ConsultationForm() {
  const [formStep, setFormStep] = useState<"fill" | "submitting" | "success">("fill");
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceId: "personal-injury",
    officePreference: "Parramatta CBD (Head Office)",
    attorneyPreference: "any",
    urgency: "as-soon-as-possible",
    whatHappened: "",
    termsAccepted: true
  });

  // Validation Error Boundary State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "A valid email is required";
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = "A valid telephone number is required";
    if (!formData.whatHappened.trim()) newErrors.whatHappened = "Please briefly share what happened so we can route you to the correct lawyer";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStep("submitting");
    setTimeout(() => {
      setFormStep("success");
    }, 1500);
  };

  return (
    <section id="consultation-form" className="py-24 bg-white border-b border-[#AF9462]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Trust signals and callouts (5cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#AF9462] uppercase tracking-widest bg-[#AF9462]/10 px-3 py-1 rounded-full">
                Secure Intake Portal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                Secure your free, private case valuation.
              </h2>
              <p className="text-[#111111]/70 text-sm sm:text-base leading-relaxed">
                Take the single most critical step in safeguarding your personal compensation, parenting arrangements, or criminal defense strategy. Submit your encrypted information directly to our Sydney intake team.
              </p>
            </div>

            {/* Quick response badge card */}
            <div className="p-5 rounded-2xl bg-[#FDFCFB] border border-[#AF9462]/15 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111] uppercase font-mono tracking-wider">
                    2-Hour SLA Active
                  </h4>
                  <p className="text-xs text-[#111111]/60">
                    A certified senior solicitor will contact you today.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-[#AF9462]/10 pt-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111111] uppercase font-mono tracking-wider">
                    100% Client Privilege
                  </h4>
                  <p className="text-xs text-[#111111]/60">
                    Protected by absolute NSW solicitor-client confidentiality laws.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#111111]/50 space-y-1.5 pl-2 border-l border-[#AF9462]">
              <p>✔ Zero Obligation consultation reviews</p>
              <p>✔ 'No Win No Fee' personal injury terms explained upfront</p>
              <p>✔ Directly supervised by the NSW Law Society Code</p>
            </div>
          </div>

          {/* Right Column: Dynamic Form Container (7cols) */}
          <div className="lg:col-span-7 bg-[#FDFCFB] border border-[#AF9462]/15 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#AF9462]/5 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {formStep === "fill" && (
                <motion.form
                  key="fill-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="border-b border-[#AF9462]/10 pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                      Intake Application
                    </h3>
                    <p className="text-xs text-[#111111]/50 font-mono mt-1">
                      ENCRYPTED CHANNEL • NSW JURISDICTION ONLY
                    </p>
                  </div>

                  {/* Name and email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/70 font-semibold">
                        Full Legal Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="Johnathan Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full p-3 bg-white border rounded-xl text-xs text-[#111111] focus:outline-none transition-colors ${
                          errors.name ? "border-rose-500 bg-rose-50/10 focus:border-rose-500" : "border-[#AF9462]/20 focus:border-[#AF9462]"
                        }`}
                        id="consult-input-name"
                      />
                      {errors.name && (
                        <p className="text-[10px] font-mono text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/70 font-semibold">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        placeholder="johndoe@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full p-3 bg-white border rounded-xl text-xs text-[#111111] focus:outline-none transition-colors ${
                          errors.email ? "border-rose-500 bg-rose-50/10 focus:border-rose-500" : "border-[#AF9462]/20 focus:border-[#AF9462]"
                        }`}
                        id="consult-input-email"
                      />
                      {errors.email && (
                        <p className="text-[10px] font-mono text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Urgency Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/70 font-semibold">
                        Telephone Number
                      </label>
                      <input 
                        type="tel" 
                        placeholder="0488 817 882"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full p-3 bg-white border rounded-xl text-xs text-[#111111] focus:outline-none transition-colors ${
                          errors.phone ? "border-rose-500 bg-rose-50/10 focus:border-rose-500" : "border-[#AF9462]/20 focus:border-[#AF9462]"
                        }`}
                        id="consult-input-phone"
                      />
                      {errors.phone && (
                        <p className="text-[10px] font-mono text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/70 font-semibold">
                        Urgency Standard
                      </label>
                      <select 
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full p-3 bg-white border border-[#AF9462]/20 rounded-xl text-xs text-[#111111] focus:outline-none focus:border-[#AF9462]"
                        id="consult-select-urgency"
                      >
                        <option value="as-soon-as-possible">As soon as possible (High Priority)</option>
                        <option value="within-2-3-days">Within 2-3 Days</option>
                        <option value="within-a-week">Within a week</option>
                        <option value="general-enquiry">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Area, Location & Lawyer Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/50">
                        Practice Sector
                      </label>
                      <select 
                        value={formData.practiceId}
                        onChange={(e) => setFormData({ ...formData, practiceId: e.target.value })}
                        className="w-full p-2.5 bg-white border border-[#AF9462]/10 rounded-lg text-[11px] text-[#111111] focus:outline-none focus:border-[#AF9462]"
                        id="consult-select-practice"
                      >
                        {PRACTICE_AREAS.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/50">
                        Venue Preference
                      </label>
                      <select 
                        value={formData.officePreference}
                        onChange={(e) => setFormData({ ...formData, officePreference: e.target.value })}
                        className="w-full p-2.5 bg-white border border-[#AF9462]/10 rounded-lg text-[11px] text-[#111111] focus:outline-none focus:border-[#AF9462]"
                        id="consult-select-office"
                      >
                        {OFFICE_LOCATIONS.map(loc => (
                          <option key={loc.name} value={loc.name}>{loc.name.split(" (")[0]}</option>
                        ))}
                        <option value="Telephone">Telephone / Remote Call</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/50">
                        Lawyer Preference
                      </label>
                      <select 
                        value={formData.attorneyPreference}
                        onChange={(e) => setFormData({ ...formData, attorneyPreference: e.target.value })}
                        className="w-full p-2.5 bg-white border border-[#AF9462]/10 rounded-lg text-[11px] text-[#111111] focus:outline-none focus:border-[#AF9462]"
                        id="consult-select-attorney"
                      >
                        <option value="any">First Available Partner</option>
                        {ATTORNEYS.map(att => (
                          <option key={att.id} value={att.id}>{att.name.split(" ")[0]} (Partner)</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* What happened details text */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-[#111111]/70 font-semibold">
                      Brief Case Description
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Please summarize the dates, incident, injuries, or legal charges (e.g. Workers compensation claim, immediate traffic suspension served...)"
                      value={formData.whatHappened}
                      onChange={(e) => setFormData({ ...formData, whatHappened: e.target.value })}
                      className={`w-full p-3 bg-white border rounded-xl text-xs text-[#111111] focus:outline-none transition-colors ${
                        errors.whatHappened ? "border-rose-500 bg-rose-50/10 focus:border-rose-500" : "border-[#AF9462]/20 focus:border-[#AF9462]"
                      }`}
                      id="consult-input-description"
                    />
                    {errors.whatHappened ? (
                      <p className="text-[10px] font-mono text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.whatHappened}
                      </p>
                    ) : (
                      <p className="text-[10px] text-[#111111]/50 font-mono">
                        Do not worry about legal terminology. Just share what happened in simple plain English.
                      </p>
                    )}
                  </div>

                  {/* Submission and privilege guarantee */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#AF9462] text-white hover:text-[#111111] py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-[#AF9462]/30 shadow-md cursor-pointer"
                      id="consult-submit-button"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Secured Intake Request
                    </motion.button>
                  </div>
                </motion.form>
              )}

              {/* Form step: Submitting Loading Animation */}
              {formStep === "submitting" && (
                <motion.div
                  key="submitting-spinner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="py-24 text-center space-y-4"
                >
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 rounded-full border-4 border-[#AF9462]/20" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-[#AF9462] animate-spin" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#111111]">Encrypting Transmission...</h3>
                  <p className="text-xs text-[#111111]/60 font-mono">
                    Establishing client-solicitor privilege parameters securely
                  </p>
                </motion.div>
              )}

              {/* Form step: Success Confirmation screen */}
              {formStep === "success" && (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-500/20">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-emerald-600 font-bold tracking-widest uppercase">
                      SECURED TRANSMISSION COMPLETE
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                      Intake Application Received
                    </h3>
                    <p className="text-sm text-[#111111]/70 leading-relaxed max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your dossier is safely locked in our system under client privilege. Our intake officer is already aligning your details with our senior partners.
                    </p>
                  </div>

                  <div className="bg-[#FDFCFB] border border-[#AF9462]/15 rounded-2xl p-4 max-w-sm mx-auto space-y-2 text-left">
                    <p className="text-[11px] font-mono text-[#111111]/70 flex items-center justify-between">
                      <span>Response Guarantee:</span>
                      <strong className="text-[#AF9462]">2 Hours or Less</strong>
                    </p>
                    <p className="text-[11px] font-mono text-[#111111]/70 flex items-center justify-between border-t border-[#AF9462]/5 pt-2">
                      <span>Assigned Sector:</span>
                      <strong className="text-[#111111]">{PRACTICE_AREAS.find(p => p.id === formData.practiceId)?.name}</strong>
                    </p>
                    <p className="text-[11px] font-mono text-[#111111]/70 flex items-center justify-between border-t border-[#AF9462]/5 pt-2">
                      <span>Office Preference:</span>
                      <strong className="text-[#111111]">{formData.officePreference.split(" (")[0]}</strong>
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        practiceId: "personal-injury",
                        officePreference: "Parramatta CBD (Head Office)",
                        attorneyPreference: "any",
                        urgency: "as-soon-as-possible",
                        whatHappened: "",
                        termsAccepted: true
                      });
                      setFormStep("fill");
                    }}
                    className="text-xs font-mono uppercase text-[#AF9462] font-bold border-b border-[#AF9462] pb-0.5"
                    id="consult-reset-button"
                  >
                    Submit another legal dossier
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
