import React from 'react';
import {
  Compass,
  Target,
  Sparkles,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from './ScrollReveal';

interface AboutUsProps {
  onOpenWhatsAppBooking: () => void;
  onNavigateAbout: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ 
  onOpenWhatsAppBooking,
  onNavigateAbout 
}) => {
  return (
    <section id="about" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Compass className="w-4 h-4 text-[#013777]" />
              <span>About Cairo Hospital Abuja</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              A Beacon of Quality Healthcare
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Founded in 2019 by visionary Egyptian medical professionals with deep roots in Nigerian healthcare dating back to 1970, Cairo Hospital unites international surgical excellence and compassionate care in Abuja.
            </p>
          </div>
        </Reveal>

        {/* 3 Simple Cards: Mission · Vision · Est. 2019 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Established 2019 */}
          <Reveal variant="up" delay={80}>
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#013777] via-[#0b5599] to-[#0284c7] text-white flex flex-col items-center justify-center font-black shadow-lg">
                <span className="text-[9px] font-bold text-sky-200 tracking-widest">EST.</span>
                <span className="text-lg leading-none">2019</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-[#092545] mb-2">Founded in Abuja</h3>
                <p className="text-xs text-[#334155] leading-relaxed">
                  The first Egyptian-led hospital in Abuja, established under Cairo Rehabilitation Centre (CRC), expanded from outpatient clinic to advanced tertiary facility.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Our Vision */}
          <Reveal variant="up" delay={140}>
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-teal-200 bg-gradient-to-br from-white to-teal-50/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-teal-900 mb-2">Our Vision</h3>
                <p className="text-xs text-[#334155] leading-relaxed">
                  International-standard multispecialty hospital and regional referral destination for patients across Nigeria & West Africa.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Our Motive */}
          <Reveal variant="up" delay={200}>
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-teal-200 bg-gradient-to-br from-white to-teal-50/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-teal-900 mb-2">Our Motive</h3>
                <p className="text-xs text-[#334155] leading-relaxed">
                  Solving health challenges across Nigeria & West Africa with cutting-edge technology and compassionate patient-centered care.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA: See More Button */}
        <Reveal variant="up" delay={260}>
          <div className="text-center pt-2">
            <button
              onClick={onNavigateAbout}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0284c7] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#013777]/30 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Building2 className="w-5 h-5" />
              <span>Our Full Story</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
