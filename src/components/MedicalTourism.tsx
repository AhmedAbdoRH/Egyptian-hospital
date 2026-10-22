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
        return <Car className="w-5 h-5 text-indigo-400" />;
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5 text-pink-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Globe2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="tourism" className="py-24 relative overflow-hidden bg-slate-900/80 border-t border-white/10">
      <div className="ambient-glow-navy top-1/4 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Globe2 className="w-4 h-4 text-sky-400" />
            <span>International Patient Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {MEDICAL_TOURISM_DETAILS.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {MEDICAL_TOURISM_DETAILS.description}
          </p>
        </div>

        {/* Global Destinations Grid */}
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
            Key International Medical Destinations
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {MEDICAL_TOURISM_DETAILS.destinations.map((dest, i) => (
              <div
                key={i}
                className="glass-panel p-4 rounded-2xl border border-white/10 text-center space-y-1 glass-panel-hover"
              >
                <div className="text-2xl">{dest.flag}</div>
                <div className="text-sm font-bold text-white">{dest.country}</div>
                <div className="text-[11px] text-slate-400">{dest.cities}</div>
              </div>
            ))}
          </div>
        </div>

        {/* The 6 Turnkey Medical Tourism Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDICAL_TOURISM_DETAILS.services.map((srv, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                  {getIcon(srv.icon)}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-mono font-bold text-sky-400">
                SERVICE 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Post-Care Reassurance Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-teal-500/30 bg-gradient-to-r from-teal-950/40 via-slate-900 to-slate-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-300 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Continuity of Care</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Dedicated Medical Representatives Follow Your Journey
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our commitment does not end when you board the plane. We coordinate your medical records before departure and manage your post-operative rehabilitation right here at Cairo Hospital in Abuja.
            </p>
          </div>

          <button
            onClick={onOpenWhatsAppBooking}
            className="glass-button-whatsapp px-6 py-3.5 rounded-xl text-white font-extrabold text-sm inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xl flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Consult Tourism Desk on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
