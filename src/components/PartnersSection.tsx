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

interface PartnersSectionProps {
  onOpenWhatsAppBooking: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onOpenWhatsAppBooking,
}) => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-sky-400" />
            <span>Institutional Alliances</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Strategic Affiliations & Clinics
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Collaborating with leading pharmaceutical distributors and specialized aesthetic dermatology clinics to provide holistic medical support in Nigeria.
          </p>
        </div>

        {/* 2 Partner Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Alexandria Pharmacy Ltd. */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Alexandria Pharmacy Ltd.</h3>
                    <div className="text-xs text-sky-400 font-semibold">Affiliated Pharmaceutical Partner</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  Egypt · Nigeria
                </span>
              </div>

              {/* Partner Photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="h-44 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/images/partners/alexandria-pharmacy.png"
                    alt="Alexandria Pharmacy Products"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-44 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/images/partners/alexandria-pharmacy-shelves.png"
                    alt="Pharmacy Distribution Shelves"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We resource and distribute pharmaceutical products from Egypt to Nigeria, as well as collaborating with prominent international pharmaceutical manufacturers. Led by Mrs. Elizabeth Blomqvist, this partnership secures certified genuine therapeutics for our hospital patients.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {PARTNERS_DATA[0].badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-400/20 text-[11px] font-semibold text-sky-300"
                  >
                    • {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">On-Site Hospital Dispensary</span>
              <button
                onClick={onOpenWhatsAppBooking}
                className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Inquire About Medications</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 2. Skinic Dermatology Clinic */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Skinic Dermatology Clinic</h3>
                    <div className="text-xs text-pink-400 font-semibold">Clinical & Cosmetic Dermatology</div>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  Nigeria Partner
                </span>
              </div>

              {/* Partner Photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="h-44 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/images/partners/skinic-dermatology.png"
                    alt="Skinic Dermatology Centre"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-44 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/images/partners/skinic-treatment.png"
                    alt="Mesotherapy Rejuvenation Treatments"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cairo Hospital is in active partnership with Skinic Dermatology Clinic in Nigeria. Recognized as leading experts in clinical and cosmetic dermatology, offering natural skin rejuvenation, Mesotherapy, acne scar reduction, fine line treatments, and advanced aesthetic care.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {PARTNERS_DATA[1].badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-400/20 text-[11px] font-semibold text-pink-300"
                  >
                    • {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Clinical & Cosmetic Services</span>
              <button
                onClick={onOpenWhatsAppBooking}
                className="text-xs font-bold text-pink-400 hover:text-pink-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Book Dermatology via WhatsApp</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
