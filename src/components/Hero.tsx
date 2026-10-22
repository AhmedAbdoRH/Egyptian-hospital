import React from 'react';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  PhoneCall,
  Activity,
  CheckCircle,
} from 'lucide-react';
import { HOSPITAL_CONTACT, HOSPITAL_STATS } from '../data/cairoHospitalData';

interface HeroProps {
  onOpenWhatsAppBooking: () => void;
  onExploreServices: () => void;
  onExploreTourism: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsAppBooking,
  onExploreServices,
  onExploreTourism,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-18 lg:pb-32">
      {/* Background Ambient Glows */}
      <div className="ambient-glow-navy top-10 -left-20" />
      <div className="ambient-glow-cyan top-40 -right-20" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline & Description */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker with Glass pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-sky-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Founded 2019 · Healthcare Legacy in Nigeria Since 1971</span>
              <span className="text-slate-500">|</span>
              <span className="text-amber-400 font-bold">NHIS Accredited</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Exemplary Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-blue-400">
                From Cairo to Abuja
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Cairo Hospital is Abuja's premier multi-specialties referral center, founded by dedicated Egyptian medical professionals. Delivering international clinical excellence in advanced orthopedic surgery, orthobiologics, physiotherapy, and comprehensive medical tourism.
            </p>

            {/* Key Clinical Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Advanced Arthroplasty & Orthobiologics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Dedicated 24/7 Emergency & Ambulance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Affiliated with Alexandria Pharmacy Ltd.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Enrolled by UN, AU, UNICEF & NNPC</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenWhatsAppBooking}
                className="glass-button-whatsapp inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-white font-extrabold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Book via WhatsApp Instantly</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="glass-panel inline-flex items-center gap-2 px-5 py-4 rounded-xl text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-colors cursor-pointer border border-white/20"
              >
                <Activity className="w-4 h-4 text-sky-400" />
                <span>Explore Specialties</span>
              </button>
            </div>
          </div>

          {/* Right Visual Glassmorphic Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/20 shadow-2xl space-y-5">
              {/* Image banner with extracted building photo */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/facility/building.png"
                  alt="Cairo Hospital Abuja Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Acute Admissions</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                    Federal Capital Territory · Garki 2
                  </div>
                  <h3 className="text-base sm:text-lg font-bold">
                    Cairo Hospital & Rehabilitation Centre
                  </h3>
                </div>
              </div>

              {/* Direct Booking Fast-Box */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Emergency Direct Dispatch:</span>
                  <a
                    href={`tel:${HOSPITAL_CONTACT.phone1}`}
                    className="font-mono text-sky-400 font-bold hover:underline"
                  >
                    {HOSPITAL_CONTACT.phone1}
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={onOpenWhatsAppBooking}
                    className="p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-left transition-colors cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 mb-1 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-bold text-white">WhatsApp Booking</div>
                    <div className="text-[11px] text-slate-400">Direct Doctor Line</div>
                  </button>

                  <button
                    onClick={onExploreTourism}
                    className="p-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-left transition-colors cursor-pointer group"
                  >
                    <Sparkles className="w-4 h-4 text-sky-400 mb-1 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-bold text-white">Medical Tourism</div>
                    <div className="text-[11px] text-slate-400">Egypt · UK · UAE · USA</div>
                  </button>
                </div>
              </div>

              {/* Accreditations Strip */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  NHIS Certified
                </span>
                <span>·</span>
                <span>FCDA Licensed</span>
                <span>·</span>
                <span>African Union & UN Enrolled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Big Hospital Stats Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HOSPITAL_STATS.map((stat, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">{stat.label}</div>
              <div className="text-xs text-slate-400">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
