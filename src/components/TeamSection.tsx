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
  const ceo =
    TEAM_MEMBERS.find((m) => m.id === 'dr-mohammed-hesham') || TEAM_MEMBERS[1];


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
              Executive Leadership & Medical Specialists
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Led by Dr. Ahmed Shaker (Chairman) and Dr. Mohammed Hesham Shaker (Founder, CEO & CMD), bringing decades of Egyptian and international clinical excellence to Abuja, Nigeria.
            </p>
          </div>
        </Reveal>

        {/* Executive Cards Grid: Chairman & CEO/CMD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Chairman Executive Card */}
          <Reveal variant="scale" className="h-full">
            <div className="glass-panel-dark contrast-dark h-full relative rounded-[2rem] overflow-hidden border border-[#fdc33e]/40 shadow-xl bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] flex flex-col justify-between">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />

              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-[#fdc33e]/60 bg-[#061a33] shadow-lg shrink-0">
                      <img
                        src={chairman.image}
                        alt={chairman.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#031124] to-transparent" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#fdc33e]/20 text-[10px] sm:text-[11px] font-bold !text-[#fdc33e] border border-[#fdc33e]/40 mb-1.5">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Office of the Chairman</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black !text-white leading-tight">
                        {chairman.name}
                      </h3>
                      <p className="text-xs sm:text-sm !text-[#bae6fd] font-semibold mt-0.5">
                        {chairman.role}
                      </p>
                      <p className="text-[11px] !text-[#fdc33e] font-medium mt-1">
                        MRCOG · Ain Shams University
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] !text-[#fdc33e] font-bold">Nigeria Leadership</div>
                      <div className="text-base font-black !text-white">Since 1970</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] !text-[#fdc33e] font-bold">Hospitals Managed</div>
                      <div className="text-base font-black !text-white">130+ Hospitals</div>
                    </div>
                  </div>

                  <p className="text-xs !text-sky-100/95 leading-relaxed line-clamp-3">
                    Former NEPA Medical Director (1970–1991), managed AGUDA Hospital in Lagos and Katameya Hospital until 2019. Established Cairo Hospital Abuja in 2019.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => onOpenWhatsAppBooking(chairman.name)}
                    className="glass-button-whatsapp flex-1 px-4 py-2.5 rounded-xl text-white font-extrabold text-xs inline-flex items-center justify-center gap-1.5 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-md"
                  >
                    <span>Book with Chairman</span>
                  </button>
                  <button
                    onClick={onNavigateTeam}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 !text-white font-bold text-xs inline-flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <span>View Dossier</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Dr. Mohammed Hesham Shaker Executive Card */}
          <Reveal variant="scale" delay={120} className="h-full">
            <div className="glass-panel-dark contrast-dark h-full relative rounded-[2rem] overflow-hidden border border-[#fdc33e]/40 shadow-xl bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] flex flex-col justify-between">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />

              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-[#fdc33e]/60 bg-[#061a33] shadow-lg shrink-0">
                      <img
                        src={ceo.image}
                        alt={ceo.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#031124] to-transparent" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#fdc33e]/20 text-[10px] sm:text-[11px] font-bold !text-[#fdc33e] border border-[#fdc33e]/40 mb-1.5">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Founder, CEO & CMD</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black !text-white leading-tight">
                        {ceo.name}
                      </h3>
                      <p className="text-xs sm:text-sm !text-[#bae6fd] font-semibold mt-0.5">
                        Orthopedic Consultant
                      </p>
                      <p className="text-[11px] !text-[#fdc33e] font-medium mt-1">
                        Ain Shams (1997) · Arthroplasty & Trauma Surgeries
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] !text-[#fdc33e] font-bold">Ain Shams Medical</div>
                      <div className="text-base font-black !text-white">Graduated 1997</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] !text-[#fdc33e] font-bold">Stuttgart Team (Kuwait)</div>
                      <div className="text-base font-black !text-white">10 Yrs Trauma</div>
                    </div>
                  </div>

                  <p className="text-xs !text-sky-100/95 leading-relaxed line-clamp-3">
                    Specialized in Arthroplasty, trauma surgeries, and stem cells regenerative therapy. 10 years at Nozha Int. Hospital Cairo & 10 years with Stuttgart German Orthopedic Team at Elrazi Center Kuwait.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => onOpenWhatsAppBooking(ceo.name)}
                    className="glass-button-whatsapp flex-1 px-4 py-2.5 rounded-xl text-white font-extrabold text-xs inline-flex items-center justify-center gap-1.5 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-md"
                  >
                    <span>Book with Dr. Mohammed Hesham</span>
                  </button>
                  <button
                    onClick={onNavigateTeam}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 !text-white font-bold text-xs inline-flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <span>View Dossier</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Authentic Team Photograph from Cairo Hospital Profile */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-xl max-w-4xl mx-auto">
          <img
            src="/images/team/care-team-2026.jpg"
            alt="Cairo Hospital Medical Team"
            className="w-full h-auto max-h-[500px] object-contain sm:object-cover sm:object-center"
          />
        </div>
      </div>
    </section>
  );
};
