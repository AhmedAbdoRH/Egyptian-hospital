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
} from 'lucide-react';
import { PILLARS_OF_CARE, HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface AboutUsProps {
  onOpenWhatsAppBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenWhatsAppBooking }) => {
  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
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
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 bg-white shadow-sm">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#013777] border border-sky-200 flex items-center justify-center font-black text-lg">
                  2019
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#092545]">Our Founding & Inception</h3>
                  <div className="text-xs text-[#013777] font-black">Under the umbrella of Cairo Rehabilitation Centre (CRC)</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed">
                Cairo Hospital is the first Egyptian-led hospital founded in Abuja in 2019, emerging from the shared vision of dedicated Egyptian medical professionals and administrators. Commencing operations as an outpatient orthopedic and physical rehabilitation clinic, our center has continually expanded into a comprehensive multi-specialties hospital equipped with diagnostic radiology and clinical laboratories.
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 bg-white shadow-sm">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 border border-teal-200 flex items-center justify-center font-black text-lg">
                  1971
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#092545]">Over 5 Decades of Medical Presence</h3>
                  <div className="text-xs text-teal-800 font-black">Deep heritage across Nigerian healthcare systems</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed">
                Our founders have provided medical stewardship in Nigeria since 1971. In 2021, Cairo Hospital underwent a major upgrade, adding a fully sterile operating theater, inpatient suites, an automated laboratory, digital X-ray, and pharmaceutical distribution through Alexandria Pharmacy Ltd.
              </p>
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
