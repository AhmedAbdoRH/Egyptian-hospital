import React from 'react';
import {
  History,
  Target,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Activity,
  Award,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Building2,
  Microscope,
  BadgeCheck,
} from 'lucide-react';
import { PILLARS_OF_CARE, HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface AboutUsProps {
  onOpenWhatsAppBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenWhatsAppBooking }) => {
  return (
    <section id="about" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#013777]" />
            <span>About Cairo Hospital Abuja</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
            A Beacon of Quality Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#013777] via-[#0b5599] to-[#0284c7]">
              In Nigeria & West Africa
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
            Founded in 2019 by visionary Egyptian medical professionals with deep roots in Nigerian healthcare dating back to 1971, Cairo Hospital unites international surgical excellence, advanced orthobiologics, and compassionate care in the Federal Capital Territory.
          </p>
        </div>

        {/* Narrative & History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Narrative Cards */}
          <div className="lg:col-span-7 space-y-7">
            {/* Card 1: 2019 - Founding & Inception */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white via-white/95 to-sky-50/25 p-7 sm:p-9 shadow-md hover:shadow-2xl hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-1.5">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#013777] via-[#0b5599] to-[#0284c7]" />
              
              {/* Subtle Luminous Ambient Glow */}
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-sky-200/40 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              <div className="relative z-10 space-y-5">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#013777] via-[#0b5599] to-[#0284c7] text-white flex flex-col items-center justify-center font-black shadow-lg shadow-[#013777]/25 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-[10px] font-bold text-sky-200 tracking-widest leading-none">EST.</span>
                      <span className="text-xl leading-none mt-0.5">2019</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-50 text-[11px] font-bold text-[#013777] border border-sky-200/80 mb-1">
                        <Building2 className="w-3.5 h-3.5 text-[#0284c7]" />
                        <span>Abuja Tertiary Inception</span>
                      </div>
                      <h3 className="text-2xl sm:text-[1.7rem] font-black text-[#061a33] tracking-tight leading-tight">
                        Our Founding & Inception
                      </h3>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-xl bg-sky-50 text-xs font-bold text-[#013777] border border-sky-200/80 shadow-xs">
                    Garki 2 · Abuja FCT
                  </span>
                </div>

                {/* Subtitle with emblem */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#013777]">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] ring-4 ring-sky-100 shrink-0" />
                  <span>Established under the umbrella of Cairo Rehabilitation Centre (CRC)</span>
                </div>

                {/* Highlighted Quote Callout */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-sky-50/60 border-l-4 border-[#013777] border-y border-r border-sky-100/80">
                  <p className="text-xs sm:text-sm font-semibold text-[#092545] leading-relaxed italic">
                    "The first Egyptian-led hospital founded in Abuja, bridging renowned surgical heritage with comprehensive multidisciplinary clinical care."
                  </p>
                </div>

                {/* Narrative Paragraph */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                  Cairo Hospital was founded in 2019 by dedicated Egyptian medical professionals and administrators. Commencing operations as an outpatient orthopedic and physical rehabilitation clinic, the center continuously expanded into an advanced tertiary facility equipped with fully digital radiology, sterile theaters, and pathology diagnostics.
                </p>

                {/* 3 Executive Pillar Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#013777] flex items-center justify-center mb-2">
                      <Activity className="w-4 h-4 text-[#0284c7]" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">Outpatient to Tertiary</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Full-spectrum orthopedic & rehabilitation hospital</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#013777] flex items-center justify-center mb-2">
                      <Microscope className="w-4 h-4 text-[#0284c7]" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">Diagnostic Radiology</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">High-resolution digital X-ray & automated lab</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#013777] flex items-center justify-center mb-2">
                      <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">CRC Heritage</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Specialist physician and orthopedic team in Abuja</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: 1971 - Over 5 Decades */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white via-white/95 to-teal-50/25 p-7 sm:p-9 shadow-md hover:shadow-2xl hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-1.5">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-800 via-emerald-600 to-teal-500" />
              
              {/* Subtle Luminous Ambient Glow */}
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-teal-200/40 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              <div className="relative z-10 space-y-5">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-700 text-white flex flex-col items-center justify-center font-black shadow-lg shadow-teal-900/25 shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-[10px] font-bold text-teal-200 tracking-widest leading-none">SINCE</span>
                      <span className="text-xl leading-none mt-0.5">1971</span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#fdc33e]/15 text-[11px] font-bold text-[#8c6000] border border-[#fdc33e]/40 mb-1">
                        <Award className="w-3.5 h-3.5 text-[#b87c08]" />
                        <span>Half-Century Clinical Heritage</span>
                      </div>
                      <h3 className="text-2xl sm:text-[1.7rem] font-black text-[#061a33] tracking-tight leading-tight">
                        Over 5 Decades of Medical Presence
                      </h3>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-xl bg-[#fdc33e]/15 text-xs font-bold text-[#8c6000] border border-[#fdc33e]/40 shadow-xs">
                    50+ Years Legacy
                  </span>
                </div>

                {/* Subtitle with emblem */}
                <div className="flex items-center gap-2 text-xs font-bold text-teal-800">
                  <span className="w-2 h-2 rounded-full bg-teal-600 ring-4 ring-teal-100 shrink-0" />
                  <span>Deep heritage across Nigerian healthcare and specialized clinical systems</span>
                </div>

                {/* Highlighted Quote Callout */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-teal-50/60 border-l-4 border-teal-700 border-y border-r border-teal-100/80">
                  <p className="text-xs sm:text-sm font-semibold text-teal-950 leading-relaxed italic">
                    "Over 50 years of clinical stewardship in Nigeria, culminating in major hospital expansions and cutting-edge surgical facilities in 2021."
                  </p>
                </div>

                {/* Narrative Paragraph */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                  Our founders have provided exemplary medical stewardship in Nigeria since 1971. In 2021, Cairo Hospital completed a major expansion, commissioning a state-of-the-art sterile operating theater with laminar flow, luxury inpatient suites, an automated laboratory, and pharmaceutical integration via Alexandria Pharmacy Ltd.
                </p>

                {/* 3 Executive Pillar Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-2">
                      <History className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">50+ Years Stewardship</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Egyptian surgical leaders serving in Nigeria since 1971</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-2">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">2021 Major Expansion</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Sterile HEPA operating theaters & private inpatient suites</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-300 transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-2">
                      <BadgeCheck className="w-4 h-4 text-teal-600" />
                    </div>
                    <div className="text-xs font-bold text-[#092545]">Alexandria Pharmacy</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">Guaranteed genuine medications & clinical supply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Photographic Mosaic of Leadership & Facilities */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-4 rounded-3xl border border-white/80 overflow-hidden space-y-4 bg-white/90">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <img
                  src="/images/delegation/meeting-1.png"
                  alt="Egyptian and Nigerian Medical Leadership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012654] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">Hospital Governance</div>
                  <div className="text-sm font-bold text-white">Executive Medical Board in Abuja</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src="/images/delegation/meeting-2.png"
                    alt="Cairo Hospital Clinical Review"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/30" />
                  <div className="absolute bottom-2 left-2 text-[10px] text-white font-bold bg-slate-950/60 px-2 py-0.5 rounded-md">
                    Clinical Review
                  </div>
                </div>

                <div className="relative h-36 rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src="/images/delegation/meeting-3.png"
                    alt="Executive Delegation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/30" />
                  <div className="absolute bottom-2 left-2 text-[10px] text-white font-bold bg-slate-950/60 px-2 py-0.5 rounded-md">
                    Medical Mission
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Core Pillars of Aim */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-[#013777] uppercase tracking-wider">
              Our Fundamental Aim
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#092545]">
              Patient Compliance, Accurate Diagnosis & Effective Treatment
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS_OF_CARE.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#013777]/10 border border-[#013777]/20 text-[#013777] flex items-center justify-center">
                    {pillar.title === 'HYGIENE' && <ShieldCheck className="w-6 h-6" />}
                    {pillar.title === 'COMFORT' && <HeartHandshake className="w-6 h-6" />}
                    {pillar.title === 'CARE' && <Stethoscope className="w-6 h-6" />}
                    {pillar.title === 'REASSURANCE' && <Activity className="w-6 h-6" />}
                  </div>

                  <h4 className="text-lg font-black text-[#092545] tracking-wide">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-[#1e293b] font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[10px] font-black text-[#013777] tracking-wider">
                  PILLAR 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Motive Comparison Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass-panel p-8 rounded-3xl border border-sky-300 space-y-5 bg-white shadow-lg">
            <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
              <div className="w-10 h-10 rounded-xl bg-[#013777] text-white flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#092545]">Our Mission</h3>
                <div className="text-xs text-[#013777] font-black">Guiding daily clinical excellence</div>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#1e293b] font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#013777] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#092545]">International Standard Multi-Specialties:</strong> Implementing evidence-based clinical protocols in Abuja.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#013777] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#092545]">Referral Hospital in Nigeria & West Africa:</strong> Serving as the preferred destination for complex surgical and orthobiologic cases.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#013777] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[#092545]">Cutting-Edge Technology:</strong> Integrating digital radiography, BEMER vascular therapy, and minimally invasive surgeries.</span>
              </li>
            </ul>
          </div>

          {/* Motive */}
          <div className="glass-panel p-8 rounded-3xl border border-teal-300/60 space-y-5 bg-gradient-to-br from-white via-teal-50/40 to-white shadow-lg">
            <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
              <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#092545]">Our Motive</h3>
                <div className="text-xs text-teal-800 font-bold">Dedicated to regional patient well-being</div>
              </div>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#2d435e]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                <span><strong>Solving Health Challenges Across West Africa:</strong> Elevating access to specialized medicine without overseas barriers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                <span><strong>Prompt & Accurate Treatment:</strong> Delivering rapid laboratory testing and prompt interventions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                <span><strong>Healthcare Optimization:</strong> Continuously expanding clinical specialties and academic partnerships.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
