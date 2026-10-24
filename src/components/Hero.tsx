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
  Stethoscope,
  Heart,
  ChevronRight,
  Dna,
  Bone,
} from 'lucide-react';
import { HOSPITAL_CONTACT, HOSPITAL_STATS } from '../data/cairoHospitalData';

interface HeroProps {
  onOpenWhatsAppBooking: (doctorName?: string, specialtyName?: string) => void;
  onExploreServices: () => void;
  onExploreTourism: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsAppBooking,
  onExploreServices,
  onExploreTourism,
}) => {
  const quickPills = [
    { label: 'Orthopedic Surgery', icon: Bone, color: 'text-sky-600 bg-sky-50 border-sky-200' },
    { label: 'Stem Cells & Orthobiologics', icon: Dna, color: 'text-teal-700 bg-teal-50 border-teal-200' },
    { label: 'Diabetic Foot Clinic', icon: Activity, color: 'text-blue-700 bg-blue-50 border-blue-200' },
    { label: 'Obstetrics & Infertility', icon: Heart, color: 'text-rose-700 bg-rose-50 border-rose-200' },
    { label: 'Medical Tourism (Egypt / UK)', icon: Sparkles, color: 'text-amber-700 bg-amber-50 border-amber-200' },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Luminous Ambient Background Glows */}
      <div className="ambient-glow-navy top-0 left-0" />
      <div className="ambient-glow-cyan top-20 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Main Pitch & Trust Cues */}
          <div className="lg:col-span-7 space-y-6">
            {/* Accreditation Badge Strip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Founded 2019 in Abuja · Legacy in Nigeria Since 1971</span>
              <span className="text-slate-400">·</span>
              <span className="text-amber-700 font-extrabold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                NHIS & FCDA Accredited
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#092545] tracking-tight leading-[1.12]">
              Exemplary Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#013777] via-[#0b5599] to-[#0284c7]">
                From Cairo to Abuja
              </span>
            </h1>

            {/* Subtitle with deep crisp contrast */}
            <p className="text-sm sm:text-base lg:text-lg text-[#1e293b] font-medium max-w-2xl leading-relaxed">
              Cairo Hospital is Abuja’s premier multi-specialties referral medical center, established by dedicated Egyptian medical professionals. Delivering international clinical mastery across orthopedic surgery, orthobiologics, physical rehabilitation, and overseas medical tourism.
            </p>

            {/* Interactive Specialty Quick Pills */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-black text-slate-700 uppercase tracking-wider">
                Explore Clinical Centers of Excellence:
              </div>
              <div className="flex flex-wrap gap-2">
                {quickPills.map((pill, i) => {
                  const Icon = pill.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => onOpenWhatsAppBooking(undefined, pill.label)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs ${pill.color}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{pill.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenWhatsAppBooking()}
                className="glass-button-whatsapp inline-flex items-center gap-2.5 px-6 py-4 rounded-2xl text-white font-black text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Book Appointment via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="glass-panel glass-panel-hover inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-[#013777] font-black text-sm sm:text-base transition-all cursor-pointer border border-[#013777]/30 bg-white"
              >
                <Activity className="w-4 h-4 text-[#013777]" />
                <span>Explore 22 Specialties</span>
              </button>
            </div>

            {/* Key Clinical Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-[#0f172a] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Advanced Arthroplasty & Stem Cell Therapy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Affiliated with Alexandria Pharmacy Ltd.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Dedicated 24/7 Ambulance Fleet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Enrolled by UN, AU, UNICEF & NNPC</span>
              </div>
            </div>
          </div>

          {/* Right: Hospital Campus Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-2xl space-y-5 bg-white/90">
              {/* Photo Frame */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
                <img
                  src="/images/facility/building.png"
                  alt="Cairo Hospital Campus in Garki 2 Abuja"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012654] via-transparent to-transparent" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/30 shadow-md flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>24/7 Acute Admissions Active</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                    Garki 2 · Abuja · Nigeria
                  </div>
                  <h3 className="text-lg font-black text-white">
                    Cairo Hospital & Rehabilitation Centre
                  </h3>
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#2d435e] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-[#092545]">Emergency Dispatch:</span>
                  <a
                    href={`tel:${HOSPITAL_CONTACT.phone1}`}
                    className="font-mono font-black text-[#013777] hover:underline"
                  >
                    {HOSPITAL_CONTACT.phone1}
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onOpenWhatsAppBooking()}
                    className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-left transition-all cursor-pointer group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 mb-1 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-black text-[#092545]">WhatsApp Desk</div>
                    <div className="text-[11px] text-emerald-700 font-semibold">Immediate Response</div>
                  </button>

                  <button
                    onClick={onExploreTourism}
                    className="p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-left transition-all cursor-pointer group"
                  >
                    <Sparkles className="w-4 h-4 text-sky-600 mb-1 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-black text-[#092545]">Medical Tourism</div>
                    <div className="text-[11px] text-sky-700 font-semibold">Egypt · UK · UAE</div>
                  </button>
                </div>
              </div>

              {/* Accreditations Strip */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#64748b]">
                <span className="flex items-center gap-1.5 font-bold text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  NHIS Certified
                </span>
                <span>·</span>
                <span className="font-semibold text-slate-700">FCDA Licensed</span>
                <span>·</span>
                <span className="font-semibold text-slate-700">AU & UN Enrolled</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards Strip */}
        <div className="pt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HOSPITAL_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-3xl border border-white/80 space-y-1.5 bg-white/80"
            >
              <div className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#013777] to-[#0284c7]">
                {stat.value}
              </div>
              <div className="text-sm font-black text-[#092545]">{stat.label}</div>
              <div className="text-xs text-[#64748b] leading-relaxed">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
