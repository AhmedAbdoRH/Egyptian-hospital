import React from 'react';
import { Stethoscope, Activity, Sparkles, Plane, ShieldCheck, HeartPulse, Microscope } from 'lucide-react';
import { Reveal } from './ScrollReveal';

interface CairoProfileUpdatesProps {
  onOpenWhatsAppBooking?: () => void;
  onNavigateTourism?: () => void;
}

export const CairoProfileUpdates: React.FC<CairoProfileUpdatesProps> = ({
  onOpenWhatsAppBooking,
  onNavigateTourism,
}) => {
  return (
    <section id="cairo-profile-updates" className="py-16 sm:py-20 bg-gradient-to-b from-[#f0f8ff] via-white to-[#eefcf9] border-t border-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <Reveal variant="up" className="space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#0879b8]">
            Hospital Profile · Listed Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight">
            Expanded Multispecialty Care
          </h2>
          <p className="text-sm sm:text-base text-[#38516b] font-medium leading-relaxed max-w-3xl">
            Cairo Hospital began in Abuja as an outpatient orthopedics and physiotherapy centre, supported by a fully equipped laboratory and digital X-ray. Its current profile also lists an inpatient department, surgery room, pharmacy, outpatient clinics, and expanded specialties.
          </p>
        </Reveal>

        {/* Featured Doctors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal variant="up" delay={50}>
            <article className="glass-panel p-5 rounded-2xl border border-sky-100 bg-white shadow-sm flex items-center gap-4">
              <img
                src="/images/team/dr-wael-khalil.jpg"
                alt="Dr. Wael Khalil, Bariatric Surgeon"
                className="w-24 h-32 object-cover rounded-xl bg-sky-50 shrink-0 border border-sky-200"
                loading="lazy"
              />
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#0b5d8d]">Surgical Team</span>
                <h3 className="text-lg font-black text-[#092545]">Dr. Wael Khalil</h3>
                <p className="text-xs font-bold text-[#0879b8]">Bariatric Surgeon</p>
                <p className="text-xs text-[#38516b] leading-relaxed">
                  Clinical scope listed in the profile: laparoscopic, bariatric, and oncology surgeries.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <article className="glass-panel p-5 rounded-2xl border border-sky-100 bg-white shadow-sm flex items-center gap-4">
              <img
                src="/images/team/dr-bassam-physical-therapy.jpg"
                alt="Dr. Bassam providing physical therapy"
                className="w-24 h-32 object-cover rounded-xl bg-teal-50 shrink-0 border border-teal-200"
                loading="lazy"
              />
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#0b5d8d]">Physical Therapy</span>
                <h3 className="text-lg font-black text-[#092545]">Dr. Bassam</h3>
                <p className="text-xs font-bold text-[#0879b8]">Physical Therapy</p>
                <p className="text-xs text-[#38516b] leading-relaxed">
                  Myofascial therapy, cupping, acupuncture, and physical therapy for neurological and musculoskeletal disorders.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal variant="up" delay={120}>
            <article className="glass-panel p-6 rounded-2xl border border-sky-100 bg-white shadow-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-[#dff5f2] text-[#007b78] flex items-center justify-center font-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0879b8]">Orthobiologics</span>
              <h3 className="text-base font-black text-[#092545]">Regenerative Therapy Options</h3>
              <p className="text-xs text-[#38516b] leading-relaxed">
                The profile lists stem-cell regenerative therapy, prolotherapy, PRP, BMAC, and BEMER therapy, including orthobiologic applications in the orthopedic service scope.
              </p>
            </article>
          </Reveal>

          <Reveal variant="up" delay={160}>
            <article className="glass-panel p-6 rounded-2xl border border-sky-100 bg-white shadow-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#013777] flex items-center justify-center font-black">
                <Microscope className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0879b8]">Hospital Services</span>
              <h3 className="text-base font-black text-[#092545]">Diagnostics, Surgery & Support</h3>
              <p className="text-xs text-[#38516b] leading-relaxed">
                Inpatient admissions, surgery room, diabetic foot clinic, laboratory, X-ray, ultrasound, and on-site Cairo Pharmacy are listed in the profile.
              </p>
            </article>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <article className="glass-panel p-6 rounded-2xl border border-sky-100 bg-white shadow-sm space-y-3 h-full">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0879b8]">Specialist Clinics</span>
              <h3 className="text-base font-black text-[#092545]">Outpatient Specialist Access</h3>
              <p className="text-xs text-[#38516b] leading-relaxed">
                Cardiology, neurology, nephrology, gastroenterology, endocrinology, family medicine, and tropical medicine are among the listed clinic services.
              </p>
            </article>
          </Reveal>
        </div>

        {/* Tourism Banner */}
        <Reveal variant="up" delay={220}>
          <div className="bg-[#06284a] text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8]">Medical Tourism</span>
              <h3 className="text-xl sm:text-2xl font-black text-white">Coordinated Care and Follow-up</h3>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                The listed support includes visa provision, tickets, accommodation, transport, and a medical plan. A representative follows up until the patient returns to Nigeria, with follow-up at Cairo Hospital after return.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-2 justify-start lg:justify-end">
              {['Dubai', 'United Kingdom', 'Nigeria', 'Egypt', 'United States', 'Turkey'].map((country) => (
                <span
                  key={country}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-sky-100"
                >
                  {country}
                </span>
              ))}
              {onNavigateTourism && (
                <button
                  type="button"
                  onClick={onNavigateTourism}
                  className="w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-white font-bold text-xs transition-all cursor-pointer text-center"
                >
                  Explore Medical Tourism Hub →
                </button>
              )}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
