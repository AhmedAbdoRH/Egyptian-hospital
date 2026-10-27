import React from 'react';
import {
  PhoneCall,
  Ambulance,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
  AlertCircle,
  Navigation,
} from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/cairoHospitalData';
import { Reveal } from './ScrollReveal';

interface EmergencyBannerProps {
  onOpenWhatsAppBooking: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({
  onOpenWhatsAppBooking,
}) => {
  return (
    <section className="relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <Reveal variant="scale">
        <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 border border-sky-400/30 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#012f66] via-[#013777] to-[#08284d]">
          {/* Subtle decorative glow */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            {/* Left: Emergency Status */}
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-200 font-extrabold text-xs tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                  24/7 Emergency & Acute Trauma
                </span>
                <span className="text-sky-300/60 hidden sm:inline">|</span>
                <span className="text-xs text-sky-100 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Zero Waiting Time Protocol
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Rapid Response Ambulance & Inpatient Admissions
              </h3>

              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-medium">
                Stationed in Garki 2, Abuja with a dedicated emergency ambulance fleet, on-call surgeons, and acute trauma resuscitation units available 24 hours every day.
              </p>
            </div>

            {/* Right: Emergency Hotline & Actions */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href={`tel:${HOSPITAL_CONTACT.phone1}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-sm shadow-lg shadow-rose-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>Call Emergency: {HOSPITAL_CONTACT.phone1}</span>
              </a>

              <button
                onClick={onOpenWhatsAppBooking}
                className="flex-1 sm:flex-none glass-button-whatsapp inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Triage</span>
              </button>
            </div>
          </div>

          {/* Bottom Location Indicator */}
          <div className="mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between text-xs text-sky-100 gap-2 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
              <span>16 Oke Agbe Street, Garki 2, Abuja, FCTA</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Ambulance Unit On Standby Now</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
