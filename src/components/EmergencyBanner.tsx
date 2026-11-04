import React from 'react';
import { Clock, MapPin, ShieldCheck, MessageCircle, PhoneCall, Building2, Calendar, Pill } from 'lucide-react';
import { HOSPITAL_CONTACT, CLINIC_HOURS } from '../data/cairoHospitalData';
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
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 font-extrabold text-xs tracking-wider uppercase">
                  <Clock className="w-3.5 h-3.5" />
                  Official Hospital Working Hours
                </span>
                <span className="text-sky-300/60 hidden sm:inline">|</span>
                <span className="text-xs text-sky-100 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#fdc33e]" />
                  Trusted & Enrolled by NHIS · FCDA · African Union
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Outpatient Clinics by Appointment · Cairo Pharmacy
              </h3>

              {/* Working hours grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                  <div className="text-[11px] font-bold text-sky-200">Outpatient Clinics</div>
                  <div className="text-white font-extrabold">Mon – Sat: 10:00 AM – 6:00 PM</div>
                  <div className="text-[10px] text-[#fdc33e] font-semibold">(By Appointments only)</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                  <div className="text-[11px] font-bold text-emerald-200 flex items-center gap-1">
                    <Pill className="w-3 h-3 text-emerald-300" />
                    <span>Cairo Pharmacy</span>
                  </div>
                  <div className="text-white font-extrabold">Mon – Sat: 10 AM – 6 PM</div>
                  <div className="text-[10px] text-emerald-200">Genuine medicines on-site</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                  <div className="text-[11px] font-bold text-sky-200">Laboratory & Tourism</div>
                  <div className="text-white font-extrabold">Mon – Sat: 10:00 AM – 6:00 PM</div>
                  <div className="text-[10px] text-sky-200">Automated diagnostic testing</div>
                </div>
              </div>

              <p className="text-xs text-sky-100/90 leading-relaxed font-medium pt-1">
                <strong className="text-white">Note:</strong> Cairo Hospital operates scheduled outpatient clinics, inpatient admissions, and pharmacy services. We do not operate emergency resuscitation services. Ambulance transport is available strictly by advance scheduled arrangement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenWhatsAppBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-102 active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book Appointment (WhatsApp)</span>
              </button>

              <a
                href={`tel:${HOSPITAL_CONTACT.phone1}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-xs transition-all hover:scale-102 active:scale-98"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-300" />
                <span>Call Desk: {HOSPITAL_CONTACT.phone1}</span>
              </a>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between text-xs text-sky-100 gap-2 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-300 flex-shrink-0" />
              <span>16 Oke Agbe Street, Garki 2, Abuja, FCTA</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-sky-200">
              <Building2 className="w-3.5 h-3.5 text-teal-300" />
              <span>Inpatient admissions & recovery rooms available</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
