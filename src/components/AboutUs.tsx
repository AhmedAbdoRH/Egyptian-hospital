import React from 'react';
import {
  Compass,
  Target,
  Sparkles,
  Building2,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from './ScrollReveal';

interface AboutUsProps {
  onOpenWhatsAppBooking: () => void;
  onNavigateAbout: () => void;
}

interface AboutCard {
  Icon: LucideIcon;
  tile: string;
  accent: string;
  title: string;
  description: string;
  meta: string;
}

export const AboutUs: React.FC<AboutUsProps> = ({
  onOpenWhatsAppBooking,
  onNavigateAbout
}) => {
  const aboutCards: AboutCard[] = [
    {
      Icon: Building2,
      tile: 'from-[#013777] to-[#0b5599]',
      accent: 'from-[#013777] via-[#0284c7] to-sky-300',
      title: 'Founded in Abuja',
      description:
        'The first Egyptian-led hospital in Abuja, established under Cairo Rehabilitation Centre (CRC), expanded from outpatient clinic to advanced tertiary facility.',
      meta: 'Established 2019',
    },
    {
      Icon: Target,
      tile: 'from-[#0f766e] to-[#14b8a6]',
      accent: 'from-[#0f766e] via-teal-500 to-teal-300',
      title: 'Our Vision',
      description:
        'International-standard multispecialty hospital and regional referral destination for patients across Nigeria & West Africa.',
      meta: 'Regional referral hub',
    },
    {
      Icon: Sparkles,
      tile: 'from-[#0284c7] to-[#38bdf8]',
      accent: 'from-[#0284c7] via-sky-500 to-sky-300',
      title: 'Our Motive',
      description:
        'Solving health challenges across Nigeria & West Africa with cutting-edge technology and compassionate patient-centered care.',
      meta: 'Technology & compassion',
    },
  ];

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

        {/* 3 Cards: Founded · Vision · Motive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {aboutCards.map(({ Icon, tile, accent, title, description, meta }, idx) => (
            <Reveal key={title} variant="up" delay={80 + idx * 70}>
              <div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
                className="group relative overflow-hidden h-full flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(9,37,69,0.04),0_14px_30px_-22px_rgba(9,37,69,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#013777]/20 hover:shadow-[0_26px_50px_-26px_rgba(1,55,119,0.45)]"
              >
                {/* Accent bar — grows across the top edge on hover */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-[3px] w-2/5 bg-gradient-to-r ${accent} transition-[width] duration-700 ease-out group-hover:w-full`}
                />

                {/* Spotlight — a soft glow that follows the cursor inside the card */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(260px circle at var(--mx, 50%) var(--my, 0%), rgba(2,132,199,0.14), transparent 68%)',
                  }}
                />

                {/* Icon tile + index */}
                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tile} text-white flex items-center justify-center shadow-lg shadow-slate-900/10 ring-1 ring-white/40 transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-3`}
                  >
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <span className="font-black text-3xl leading-none tracking-tight text-slate-200/90 transition-colors duration-500 group-hover:text-[#013777]/25">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Copy */}
                <h3 className="relative z-10 mt-5 text-xl font-black text-[#092545] leading-snug">
                  {title}
                </h3>
                <p className="relative z-10 mt-2 text-[13px] text-slate-600 leading-relaxed font-medium flex-1">
                  {description}
                </p>

                {/* Meta footer */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${accent}`}
                  />
                  <span className="text-[10.5px] font-black uppercase tracking-[0.14em] text-slate-500">
                    {meta}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA: See More Button */}
        <Reveal variant="up" delay={260}>
          <div className="text-center pt-2">
            <button
              onClick={onNavigateAbout}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0284c7] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#013777]/30 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
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
