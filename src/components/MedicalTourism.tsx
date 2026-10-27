import React from 'react';
import {
  Globe2,
  Plane,
  FileCheck,
  Building,
  Car,
  ClipboardList,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { MEDICAL_TOURISM_DETAILS } from '../data/cairoHospitalData';
import { Reveal } from './ScrollReveal';

interface MedicalTourismProps {
  onOpenWhatsAppBooking: () => void;
}

export const MedicalTourism: React.FC<MedicalTourismProps> = ({
  onOpenWhatsAppBooking,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-sky-400" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-teal-300" />;
      case 'Building':
        return <Building className="w-5 h-5 text-amber-400" />;
      case 'Car':
        return <Car className="w-5 h-5 text-indigo-300" />;
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5 text-rose-300" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Globe2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="tourism" className="scroll-mt-28 py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-1/4 -right-20 pointer-events-none" />
      <div className="ambient-glow-cyan bottom-10 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-16">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Globe2 className="w-4 h-4 text-[#013777]" />
              <span>International Patient Services & Overseas Referral</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              {MEDICAL_TOURISM_DETAILS.title}
            </h2>
            <p className="text-sm sm:text-base text-[#2d435e] leading-relaxed">
              {MEDICAL_TOURISM_DETAILS.description}
            </p>
          </div>
        </Reveal>

        {/* Global Destinations Grid */}
        <div className="space-y-4">
          <Reveal variant="up">
            <div className="text-xs font-bold uppercase tracking-wider text-[#013777] text-center flex items-center justify-center gap-2">
              <Plane className="w-4 h-4 text-[#0b5599]" />
              <span>Key International Medical Destinations & Partner Hospitals</span>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {MEDICAL_TOURISM_DETAILS.destinations.map((dest, i) => (
              <Reveal key={i} variant="scale" delay={i * 70} className="h-full">
                <div className="h-full glass-panel p-4 rounded-2xl border border-slate-200/90 text-center space-y-1.5 glass-panel-hover bg-white/90 shadow-xs">
                  <div className="text-3xl">{dest.flag}</div>
                  <div className="text-sm font-black text-[#013777]">{dest.country}</div>
                  <div className="text-[11px] text-[#2d435e] font-semibold">{dest.cities}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* The 6 Turnkey Medical Tourism Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDICAL_TOURISM_DETAILS.services.map((srv, idx) => (
            <Reveal key={idx} variant="up" delay={(idx % 3) * 90} className="h-full">
              <div className="h-full glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/90 glass-panel-hover flex flex-col justify-between space-y-5 shadow-sm bg-white/90">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-inner">
                      {getIcon(srv.icon)}
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#013777]/10 text-[#013777] border border-[#013777]/20">
                      STAGE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#092545]">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#2d435e] leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Handled by Tourism Desk</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Direct Support
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Post-Care Reassurance Banner */}
        <Reveal variant="scale">
          <div className="glass-panel-dark p-8 sm:p-10 rounded-3xl border border-sky-400/40 bg-gradient-to-r from-[#012654] via-[#013777] to-[#041d3d] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-white">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold !text-[#fdc33e] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 !text-[#fdc33e]" />
                <span>Full Continuity of Care (Pre & Post Travel)</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Dedicated Medical Representatives Follow Your Entire Journey
              </h4>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Our clinical commitment does not conclude when you board the plane. We coordinate your medical history before departure, liaise with overseas surgeons, and direct your post-operative rehabilitation at Cairo Rehabilitation Centre (CRC) in Abuja.
              </p>
            </div>

            <button
              onClick={onOpenWhatsAppBooking}
              className="glass-button-whatsapp px-7 py-4 rounded-2xl text-white font-extrabold text-sm inline-flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xl flex-shrink-0"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Consult Tourism Desk on WhatsApp</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
