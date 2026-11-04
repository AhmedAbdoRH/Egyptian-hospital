import React from 'react';
import {
  Plane,
  CheckCircle,
  ArrowRight,
  Globe2,
} from 'lucide-react';
import { Reveal } from './ScrollReveal';

interface MedicalTourismProps {
  onOpenWhatsAppBooking: () => void;
  onNavigateTourism?: () => void;
}

export const MedicalTourism: React.FC<MedicalTourismProps> = ({
  onOpenWhatsAppBooking,
  onNavigateTourism,
}) => {
  const destinations = [
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'Dubai', flag: '🇦🇪' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Turkey', flag: '🇹🇷' },
  ];
  
  const keyFeatures = [
    'Visa provision and travel tickets coordination',
    'Accommodation and transport arrangements',
    'Comprehensive medical plan with dedicated representative follow-up',
    'Continued care at Cairo Hospital after return to Nigeria',
  ];

  return (
    <section id="medical-tourism" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden bg-gradient-to-b from-[#001d40] via-[#012654] to-[#001d40]">
      <div className="ambient-glow-cyan top-10 right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdc33e]/20 border border-[#fdc33e]/40 text-xs font-bold text-[#fdc33e] uppercase tracking-wider">
              <Plane className="w-4 h-4 text-[#fdc33e]" />
              <span>International Patient Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Medical Tourism Hub
            </h2>
            <p className="text-base sm:text-lg text-white font-bold leading-relaxed">
              The listed support includes visa provision, tickets, accommodation, transport, and a medical plan. A representative follows up until the patient returns to Nigeria, with follow-up at Cairo Hospital after return.
            </p>
          </div>
        </Reveal>

        {/* Highlight Card */}
        <Reveal variant="scale">
          <div className="contrast-dark glass-panel-dark p-8 sm:p-10 rounded-3xl border border-[#38bdf8]/40 shadow-2xl bg-gradient-to-br from-[#012f66]/80 via-[#013777]/80 to-[#08284d]/80 backdrop-blur-sm space-y-6">
            {/* Destinations Pills */}
            <div>
              <h3 className="text-base font-black !text-white mb-3 flex items-center gap-2">
                <Globe2 className="w-5 h-5 !text-[#fdc33e]" />
                <span>Available Destinations</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {destinations.map((dest) => (
                  <span
                    key={dest.name}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm font-bold !text-white backdrop-blur-sm hover:bg-white/15 transition-colors"
                  >
                    <span>{dest.flag}</span>
                    <span>{dest.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-sm font-black !text-white">What We Offer</h4>
              {keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 !text-[#38bdf8] flex-shrink-0 mt-0.5" />
                  <span className="text-sm !text-white/90 font-medium leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              {onNavigateTourism && (
                <button
                  onClick={onNavigateTourism}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fdc33e] hover:bg-[#e5b12f] !text-[#092545] font-bold text-sm transition-all shadow-lg shadow-[#fdc33e]/30 group cursor-pointer"
                >
                  <span>Explore Medical Tourism Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              <button
                onClick={onOpenWhatsAppBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 !text-white font-bold text-sm transition-all cursor-pointer"
              >
                <Plane className="w-4 h-4" />
                <span>Inquire Now</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
