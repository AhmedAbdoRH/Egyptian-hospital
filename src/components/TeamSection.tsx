import React from 'react';
import {
  Users,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/cairoHospitalData';
import { Reveal } from './ScrollReveal';

interface TeamSectionProps {
  onOpenWhatsAppBooking: (doctorName?: string) => void;
  onNavigateTeam: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  onOpenWhatsAppBooking,
  onNavigateTeam,
}) => {
  const chairman =
    TEAM_MEMBERS.find((m) => m.id === 'dr-ahmed-shaker') || TEAM_MEMBERS[0];
  
  // Show first 2 team members (excluding chairman)
  const featuredTeam = TEAM_MEMBERS.filter((m) => m.id !== chairman.id).slice(0, 2);

  return (
    <section id="team" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-40 left-10 pointer-events-none" />
      <div className="ambient-glow-cyan bottom-20 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-[#013777] tracking-wide flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-[#013777]" />
              <span>Clinical Leadership & Medical Team</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#061a33] tracking-tight">
              Meet Our Chairman & Medical Team
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              The supplied profile names Dr. Ahmed Shaker as Chairman and notes that he worked in Nigeria from 1970.
            </p>
          </div>
        </Reveal>

        {/* Chairman Compact Card */}
        <Reveal variant="scale">
          <div className="glass-panel-dark contrast-dark relative rounded-[2rem] overflow-hidden border border-[#fdc33e]/40 shadow-xl bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777]">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Chairman Photo */}
              <div className="md:col-span-3">
                <div className="relative mx-auto max-w-[200px] aspect-[4/5] rounded-xl overflow-hidden border-2 border-[#fdc33e]/60 bg-[#061a33] shadow-lg">
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#031124] to-transparent" />
                </div>
              </div>

              {/* Chairman Info */}
              <div className="md:col-span-9 space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdc33e]/20 text-[11px] font-bold !text-[#fdc33e] border border-[#fdc33e]/40 mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Office of the Chairman</span>
                  </div>
                  <h3 className="text-2xl font-black !text-white leading-tight">
                    {chairman.name}
                  </h3>
                  <p className="text-sm !text-[#bae6fd] font-semibold mt-1">{chairman.role}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs !text-[#fdc33e] font-bold">Work in Nigeria since</div>
                    <div className="text-lg font-black !text-white">1970</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs !text-[#fdc33e] font-bold">Cairo Hospital Est.</div>
                    <div className="text-lg font-black !text-white">2019</div>
                  </div>
                </div>

                <p className="text-xs !text-white/90 leading-relaxed">
                  {chairman.specialty}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Featured Team Members (2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredTeam.map((member, idx) => (
            <Reveal key={member.id} variant="up" delay={idx * 120}>
              <div className="glass-panel p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-[#013777]/20 bg-slate-100 shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-black text-[#092545] leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-xs text-[#013777] font-bold mt-1">{member.role}</p>
                    <p className="text-xs text-[#334155] mt-2 line-clamp-2">{member.specialty}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA: Meet the Full Team */}
        <Reveal variant="up" delay={240}>
          <div className="text-center pt-4">
            <button
              onClick={onNavigateTeam}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0284c7] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#013777]/30 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Users className="w-5 h-5" />
              <span>Meet the Full Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
