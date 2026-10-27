import React from 'react';
import {
  Pill,
  Sparkles,
  ExternalLink,
  CheckCircle,
  Building2,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { PARTNERS_DATA } from '../data/cairoHospitalData';
import { Reveal } from './ScrollReveal';

interface PartnersSectionProps {
  onOpenWhatsAppBooking: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onOpenWhatsAppBooking,
}) => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 left-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-16">
        {/* Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#013777]" />
              <span>Institutional Alliances & Specialized Clinics</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              Strategic Affiliations & Clinical Partners
            </h2>
            <p className="text-sm sm:text-base text-[#2d435e] leading-relaxed">
              Collaborating with leading pharmaceutical distributors and specialized aesthetic dermatology clinics to provide holistic medical support in Nigeria.
            </p>
          </div>
        </Reveal>

        {/* 2 Partner Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Alexandria Pharmacy Ltd. */}
          <Reveal variant="left" className="h-full">
            <div className="h-full glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-6 flex flex-col justify-between bg-white/90 shadow-sm">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#013777] border border-sky-100 flex items-center justify-center">
                    <Pill className="w-5 h-5 text-[#013777]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#092545]">Alexandria Pharmacy Ltd.</h3>
                    <div className="text-xs text-[#013777] font-bold">Affiliated Pharmaceutical Partner</div>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#013777] font-semibold">
                  Egypt · Nigeria
                </span>
              </div>

              {/* Partner Photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src="/images/partners/alexandria-pharmacy.png"
                    alt="Alexandria Pharmacy Products"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src="/images/partners/alexandria-pharmacy-shelves.png"
                    alt="Pharmacy Distribution Shelves"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#2d435e] leading-relaxed">
                We resource and distribute pharmaceutical products from Egypt to Nigeria, as well as collaborating with prominent international pharmaceutical manufacturers. This partnership secures certified genuine therapeutics for our hospital patients.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {PARTNERS_DATA[0].badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-sky-50 border border-sky-200 text-[11px] font-bold text-[#013777]"
                  >
                    • {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">On-Site Hospital Dispensary</span>
              <button
                onClick={onOpenWhatsAppBooking}
                className="text-xs font-bold text-[#013777] hover:text-[#0b5599] inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Inquire About Medications</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>
            </div>
          </Reveal>

          {/* 2. Skinic Dermatology Clinic */}
          <Reveal variant="right" delay={120} className="h-full">
            <div className="h-full glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-6 flex flex-col justify-between bg-white/90 shadow-sm">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#092545]">Skinic Dermatology Clinic</h3>
                    <div className="text-xs text-rose-700 font-bold">Clinical & Cosmetic Dermatology</div>
                  </div>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#013777] font-semibold">
                  Nigeria Partner
                </span>
              </div>

              {/* Partner Photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src="/images/partners/skinic-dermatology.png"
                    alt="Skinic Dermatology Centre"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src="/images/partners/skinic-treatment.png"
                    alt="Mesotherapy Rejuvenation Treatments"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#2d435e] leading-relaxed">
                Cairo Hospital is in active partnership with Skinic Dermatology Clinic in Nigeria. Recognized as leading experts in clinical and cosmetic dermatology, offering natural skin rejuvenation, Mesotherapy, acne scar reduction, fine line treatments, and advanced aesthetic care.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {PARTNERS_DATA[1].badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-rose-50 border border-rose-200 text-[11px] font-bold text-rose-800"
                  >
                    • {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Clinical & Cosmetic Services</span>
              <button
                onClick={onOpenWhatsAppBooking}
                className="text-xs font-bold text-rose-700 hover:text-rose-900 inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Book Dermatology via WhatsApp</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
