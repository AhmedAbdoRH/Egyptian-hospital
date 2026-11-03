import React from 'react';
import { PhoneCall, Ambulance, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';
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
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-100 font-extrabold text-xs tracking-wider uppercase">
                  <Ambulance className="w-3.5 h-3.5" />
                  Emergency Department & Ambulance
                </span>
                <span className="text-sky-300/60 hidden sm:inline">|</span>
                <span className="text-xs text-sky-100 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  Listed in the supplied profile
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Call to Confirm Current Availability
              </h3>

              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-medium">
                Cairo Hospital’s profile lists an Emergency Department and Ambulance Service. Call the hospital directly to confirm current access and arrangements. For a life-threatening emergency, do not wait for a WhatsApp reply.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href={`tel:${HOSPITAL_CONTACT.phone1}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-sm shadow-lg shadow-rose-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hospital: {HOSPITAL_CONTACT.phone1}</span>
              </a>

              <button
                onClick={onOpenWhatsAppBooking}
                className="flex-1 sm:flex-none glass-button-whatsapp inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp for General Inquiries</span>
              </button>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between text-xs text-sky-100 gap-2 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
              <span>16 Oke Agbe Street, Garki 2, Abuja, FCTA</span>
            </div>
            <span className="text-[11px] text-amber-200 font-bold">Call to confirm service access and arrangements</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
