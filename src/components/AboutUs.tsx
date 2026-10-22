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
} from 'lucide-react';
import { PILLARS_OF_CARE, HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface AboutUsProps {
  onOpenWhatsAppBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenWhatsAppBooking }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/10">
      {/* Background glow */}
      <div className="ambient-glow-navy top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Compass className="w-4 h-4 text-sky-400" />
            <span>About Cairo Hospital Abuja</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            A Beacon of Quality Healthcare <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
              In Nigeria & West Africa
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Founded in 2019 by visionary Egyptian medical professionals and administrators with a history dating back to 1971, Cairo Hospital brings international surgical precision and compassionate healing to the heart of Nigeria's Federal Capital Territory.
          </p>
        </div>

        {/* Narrative & History Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Narrative Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  2019
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Our Founding & Genesis</h3>
                  <div className="text-xs text-slate-400">Under the umbrella of Cairo Rehabilitation Centre (CRC)</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cairo Hospital is the first hospital in Abuja that was founded in 2019, emerging from the vision of a dedicated team of Egyptian medical professionals and administrators. Nestled in the heart of Nigeria's Federal territory, our institution began as an outpatient orthopedic and physical rehabilitation clinic, before rapidly expanding into a full-scale multi-specialties hospital with advanced surgical, inpatient, and diagnostic faculties.
              </p>
            </div>

            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                  1971
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Over Five Decades of Medical Presence</h3>
                  <div className="text-xs text-slate-400">Deep roots across Nigerian healthcare leadership</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our medical leadership has been actively present in Nigeria since 1971, directing hospital networks across the nation for decades. In 2021, Cairo Hospital underwent a monumental upgrade, adding a fully equipped laminar-flow surgical theater, dedicated inpatient suites, modern digital X-ray diagnostics, an automated clinical lab, and on-site pharmaceutical resourcing through Alexandria Pharmacy Ltd.
              </p>
            </div>
          </div>

          {/* Right Photographic Mosaic of Leadership & Facilities */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-4 rounded-3xl border border-white/15 overflow-hidden space-y-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="/images/delegation/meeting-1.png"
                  alt="Egyptian and Nigerian Medical Leadership"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-[11px] font-bold text-sky-400">Hospital Executive Leadership</div>
                  <div className="text-xs text-slate-300">Strategic Healthcare Alliances in Abuja</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-36 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/images/delegation/meeting-2.png"
                    alt="Cairo Hospital Medical Mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/30" />
                  <div className="absolute bottom-1.5 left-1.5 text-[10px] text-white font-semibold">
                    Clinical Review
                  </div>
                </div>

                <div className="relative h-36 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src="/images/delegation/meeting-3.png"
                    alt="Delegation Discussions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/30" />
                  <div className="absolute bottom-1.5 left-1.5 text-[10px] text-white font-semibold">
                    Executive Board
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Core Pillars of Aim */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Our Fundamental Aim
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Patient Compliance, Accurate Diagnosis & Effective Treatment
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS_OF_CARE.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400 flex items-center justify-center">
                    {pillar.title === 'HYGIENE' && <ShieldCheck className="w-6 h-6" />}
                    {pillar.title === 'COMFORT' && <HeartHandshake className="w-6 h-6" />}
                    {pillar.title === 'CARE' && <Stethoscope className="w-6 h-6" />}
                    {pillar.title === 'REASSURANCE' && <Activity className="w-6 h-6" />}
                  </div>

                  <h4 className="text-lg font-black text-white tracking-wide">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-bold text-sky-400 tracking-wider">
                  PILLAR 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Motive Comparison Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 space-y-5 bg-gradient-to-br from-sky-950/40 via-slate-900/60 to-slate-950/80">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
                <div className="text-xs text-slate-400">Guiding our daily clinical standards</div>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                <span><strong>International Standard Multi-Specialties Hospital:</strong> Delivering Egyptian-calibrated tertiary protocols in Nigeria.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                <span><strong>Referral Hospital in Nigeria and West Africa:</strong> Serving as the clinical destination of choice for complex surgical and regenerative cases.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                <span><strong>Cutting-Edge Technology:</strong> Integrating digital radiography, advanced endoscopy, orthobiologics, and modern surgical suites.</span>
              </li>
            </ul>
          </div>

          {/* Motive */}
          <div className="glass-panel p-8 rounded-3xl border border-teal-500/30 space-y-5 bg-gradient-to-br from-teal-950/40 via-slate-900/60 to-slate-950/80">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Our Motive</h3>
                <div className="text-xs text-slate-400">Driven by regional impact and patient dignity</div>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                <span><strong>Solving Health Challenges Across West Africa:</strong> Bridging the healthcare deficit with accessible high-end medicine.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                <span><strong>Prompt & Accurate Treatment:</strong> Eliminating diagnostic delays to commence targeted, evidence-based therapy immediately.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                <span><strong>Healthcare Optimization:</strong> Elevating regional clinical capabilities through medical education, research, and partnerships.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
