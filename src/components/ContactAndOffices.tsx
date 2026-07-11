import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Landmark, Phone, Mail, Clock, ShieldAlert, ChevronRight, MapPin, Printer } from "lucide-react";
import { OFFICE_LOCATIONS, OfficeLocation } from "../types";

export default function ContactAndOffices() {
  const [selectedOfficeName, setSelectedOfficeName] = useState<string>("Parramatta CBD (Head Office)");

  const selectedOffice = OFFICE_LOCATIONS.find(loc => loc.name === selectedOfficeName) || OFFICE_LOCATIONS[0];

  return (
    <section id="contact" className="py-24 bg-[#FDFCFB] border-b border-[#AF9462]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-[#AF9462] text-xs font-mono font-semibold tracking-widest uppercase">
            NSW Office Locations
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Speak with us in person. <br />
            Our Sydney offices.
          </h2>
          <p className="text-[#111111]/65 text-sm sm:text-base leading-relaxed">
            Jameson Law maintains extensive physical facilities in key business centers across Sydney. Select a district location to retrieve specific parking details, contact phone lines, and business hours.
          </p>
        </div>

        {/* Interactive Layout Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Selector and Details (5cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#111111]/50 pb-2 border-b border-[#AF9462]/15">
                Select office location
              </p>
              
              <div className="space-y-3">
                {OFFICE_LOCATIONS.map((loc) => {
                  const isSelected = loc.name === selectedOfficeName;
                  return (
                    <button
                      key={loc.name}
                      onClick={() => setSelectedOfficeName(loc.name)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                        isSelected
                          ? "bg-[#111111] text-white border-transparent shadow-md"
                          : "bg-white text-[#111111] border-[#AF9462]/15 hover:border-[#AF9462]/45"
                      }`}
                      id={`office-tab-${loc.name.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold flex items-center gap-2">
                          <MapPin className={`w-4 h-4 ${isSelected ? "text-[#AF9462]" : "text-[#111111]/30"}`} />
                          {loc.name}
                        </h4>
                        <p className={`text-[10px] font-mono uppercase ${isSelected ? "text-white/60" : "text-[#111111]/50"}`}>
                          {loc.type}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-[#AF9462]" : "text-[#111111]/30 group-hover:translate-x-1"
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Office Contact Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedOffice.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white rounded-2xl border border-[#AF9462]/20 p-6 space-y-4 shadow-sm"
              >
                <div className="border-b border-[#AF9462]/10 pb-4">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#AF9462] font-bold">
                    Official Logistics
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#111111] mt-1">
                    {selectedOffice.name} Details
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs text-[#111111]/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#AF9462] mt-0.5 shrink-0" />
                    <p className="font-medium leading-relaxed">
                      {selectedOffice.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-[#AF9462]/5 pt-3">
                    <Phone className="w-4 h-4 text-[#AF9462] shrink-0" />
                    <div>
                      <p className="text-[10px] text-[#111111]/45 font-mono uppercase leading-none mb-1">Toll Free Phone</p>
                      <a href={`tel:${selectedOffice.phone}`} className="font-bold hover:text-[#AF9462] transition-colors">
                        {selectedOffice.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-[#AF9462]/5 pt-3">
                    <Phone className="w-4 h-4 text-[#AF9462] shrink-0" />
                    <div>
                      <p className="text-[10px] text-[#111111]/45 font-mono uppercase leading-none mb-1">Direct Mobile</p>
                      <a href={`tel:${selectedOffice.mobile}`} className="font-bold hover:text-[#AF9462] transition-colors">
                        {selectedOffice.mobile}
                      </a>
                    </div>
                  </div>

                  {selectedOffice.fax && (
                    <div className="flex items-center gap-3 border-t border-[#AF9462]/5 pt-3">
                      <Printer className="w-4 h-4 text-[#AF9462] shrink-0" />
                      <div>
                        <p className="text-[10px] text-[#111111]/45 font-mono uppercase leading-none mb-1">Fax Transmission</p>
                        <p className="font-medium">{selectedOffice.fax}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 border-t border-[#AF9462]/5 pt-3">
                    <Mail className="w-4 h-4 text-[#AF9462] shrink-0" />
                    <div>
                      <p className="text-[10px] text-[#111111]/45 font-mono uppercase leading-none mb-1">Official Email</p>
                      <a href={`mailto:${selectedOffice.email}`} className="font-bold hover:text-[#AF9462] transition-colors">
                        {selectedOffice.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t border-[#AF9462]/5 pt-3">
                    <Clock className="w-4 h-4 text-[#AF9462] shrink-0" />
                    <div>
                      <p className="text-[10px] text-[#111111]/45 font-mono uppercase leading-none mb-1">Standard Hours</p>
                      <p className="font-medium">{selectedOffice.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Premium High-Fidelity Location Map Display (7cols) */}
          <div className="lg:col-span-7 bg-white border border-[#AF9462]/15 rounded-3xl overflow-hidden shadow-md aspect-[16/11] flex flex-col justify-between">
            {selectedOffice.googleMapEmbedUrl ? (
              /* High fidelity iframe if embed url exists (Parramatta CBD) */
              <iframe
                title={`Jameson Law Map - ${selectedOffice.name}`}
                src={selectedOffice.googleMapEmbedUrl}
                className="w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              /* Gorgeous, high-fidelity premium stylized vector map simulator for alternative satellite offices */
              <div className="w-full h-full p-8 flex flex-col justify-between relative overflow-hidden bg-[#111111] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(#AF9462_0.7px,transparent_0.7px)] [background-size:16px_16px] opacity-15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-[#AF9462]/10 animate-ping pointer-events-none" />

                <div className="space-y-2 z-10">
                  <span className="text-[9px] font-mono text-[#AF9462] uppercase tracking-widest font-bold bg-[#AF9462]/10 px-3 py-1 rounded-full border border-[#AF9462]/20 inline-block">
                    Map Saturation Map
                  </span>
                  <h3 className="font-serif text-xl font-bold">
                    Satellite Practice Location Active
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed max-w-sm">
                    This location operates as an active, private, highly confidential meeting space by appointment. Our centralized Sydney barristers and solicitors will commute directly to meet you.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 z-10 space-y-3 backdrop-blur-md max-w-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#AF9462] shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold font-mono uppercase text-white">Meeting Venue Location</h4>
                      <p className="text-xs text-white/70 leading-relaxed mt-1">
                        {selectedOffice.address}
                      </p>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-500 font-mono flex items-center gap-1.5 pt-1 border-t border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Secured booking slot calendar connected
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
