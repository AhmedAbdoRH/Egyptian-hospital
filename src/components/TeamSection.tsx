import React, { useState } from 'react';
import {
  Users,
  Award,
  GraduationCap,
  MessageCircle,
  ExternalLink,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/cairoHospitalData';
import { TeamMember } from '../types/hospital';
import { DoctorModal } from './DoctorModal';
import { Reveal } from './ScrollReveal';

interface TeamSectionProps {
  onOpenWhatsAppBooking: (doctorName?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  onOpenWhatsAppBooking,
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const chairman =
    TEAM_MEMBERS.find((m) => m.id === 'dr-ahmed-shaker') || TEAM_MEMBERS[0];
  const teamMembers = TEAM_MEMBERS.filter((m) => m.id !== chairman.id);

  const chairmanMetrics = [
    { value: '1970', label: 'Healthcare Legacy in Nigeria' },
    { value: '130+', label: 'National Hospitals Directed' },
    { value: '2019', label: 'Founded Cairo Hospital Abuja' },
    { value: 'MRCOG', label: 'Royal College Fellow · Dublin' },
  ];

  return (
    <section id="team" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      <div className="ambient-glow-navy top-40 left-10 pointer-events-none" />
      <div className="ambient-glow-cyan bottom-20 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-[#013777] tracking-wide flex items-center justify-center gap-2">
              <Users className="w-4 h-4 text-[#013777]" />
              <span>Clinical Leadership & Medical Team</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#061a33] tracking-tight [text-wrap:balance]">
              Meet Our Founder & Medical Team
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Founded and led by Chairman Dr. Ahmed Shaker with over five decades of distinguished medical stewardship in Nigeria, alongside our multidisciplinary clinical and administrative specialists.
            </p>
          </div>
        </Reveal>

        {/* Exclusive Flagship Spotlight #1: Dr. Ahmed Shaker (Founder & Chairman) */}
        <Reveal variant="scale">
          <article className="glass-panel-dark contrast-dark relative rounded-[2rem] overflow-hidden border border-[#fdc33e]/40 shadow-2xl bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777]">
            {/* Top Gold & Sky Architectural Rule */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />

            <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Chairman Editorial Portrait Column */}
              <div className="lg:col-span-4">
                <div className="relative mx-auto max-w-[300px] sm:max-w-[330px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#fdc33e]/60 bg-[#061a33] shadow-2xl group">
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#031124] via-[#031124]/75 to-transparent" />

                  <div className="photo-caption absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-bold !text-[#fdc33e] tracking-wide">
                        Founder & {chairman.role}
                      </div>
                      <div className="text-lg sm:text-xl font-black !text-white leading-snug">
                        {chairman.name}
                      </div>
                    </div>
                    <ShieldCheck className="w-5 h-5 !text-[#fdc33e] shrink-0" />
                  </div>
                </div>
              </div>

              {/* Chairman Executive Dossier Column */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide !text-[#fdc33e]">
                    <span>Office of the Founder & Chairman of the Board</span>
                    <span className="text-white/40" aria-hidden="true">
                      ·
                    </span>
                    <span className="!text-[#bae6fd]">Five Decades of Healthcare Stewardship</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black !text-white tracking-tight leading-tight">
                    {chairman.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-semibold !text-[#bae6fd]">
                    <span>{chairman.title}</span>
                    {chairman.education && (
                      <>
                        <span className="text-white/40" aria-hidden="true">
                          ·
                        </span>
                        <span className="inline-flex items-center gap-1.5 !text-white/95">
                          <GraduationCap className="w-4 h-4 !text-[#fdc33e] shrink-0" />
                          <span>{chairman.education}</span>
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Chairman Bio & Vision */}
                <p className="text-xs sm:text-sm !text-sky-100 leading-relaxed">
                  {chairman.fullBio}
                </p>

                {/* 4-Column Tabular Legacy Strip */}
                <div className="py-4 border-y border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/15">
                  {chairmanMetrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className={`${
                        mIdx === 0
                          ? 'sm:pr-4'
                          : mIdx === chairmanMetrics.length - 1
                          ? 'sm:pl-4'
                          : 'sm:px-4'
                      }`}
                    >
                      <div className="text-lg sm:text-xl font-black !text-[#fdc33e] tabular-nums tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[11px] sm:text-xs font-medium !text-sky-100 mt-0.5 leading-snug">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complete Royal College & Institutional Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {chairman.qualifications.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="flex items-start gap-2 text-xs !text-sky-100 leading-snug"
                    >
                      <Award className="w-3.5 h-3.5 !text-[#fdc33e] shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </div>
                  ))}
                </div>

                {/* Chairman Executive Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={() => onOpenWhatsAppBooking(chairman.name)}
                    className="glass-button-whatsapp px-6 py-3 rounded-xl text-white font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Consult Dr. Ahmed Shaker on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setSelectedMember(chairman)}
                    className="px-5 py-3 rounded-xl bg-white/12 hover:bg-white/20 border border-white/25 !text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <span>Open Chairman’s Official Dossier</span>
                    <ExternalLink className="w-3.5 h-3.5 !text-[#fdc33e]" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Regular Medical & Executive Team Grid (Includes Dr. Mohammed Hesham normally) */}
        <div className="space-y-6 pt-2">
          <Reveal variant="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-slate-200/90">
              <div>
                <div className="text-xs font-bold text-[#013777] tracking-wide">
                  Medical & Administrative Specialists
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#061a33] mt-0.5">
                  Our Specialist & Departmental Team
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                Select any team member to view credentials and clinical scope.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <Reveal
                key={member.id}
                variant="up"
                delay={(idx % 3) * 85}
                className="h-full"
              >
                <div className="h-full glass-panel p-5 rounded-3xl border border-slate-200/90 glass-panel-hover flex flex-col justify-between space-y-4 bg-white shadow-sm">
                  <div className="space-y-3.5">
                    {/* Photo */}
                    <div className="relative h-60 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#e6f0fa] to-[#c9dced] text-[#013777]"
                          aria-label={`${member.name} profile image unavailable`}
                        >
                          <Stethoscope className="w-12 h-12" />
                          <span className="text-3xl font-black">
                            {member.name.split(' ').slice(-1)[0].charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#012654]/85 via-transparent to-transparent" />
                      <div className="photo-caption absolute bottom-2.5 left-3 right-3 text-white">
                        <span className="text-[10px] font-bold !text-white/90 uppercase tracking-wider block">
                          {member.role}
                        </span>
                        <h4 className="text-base font-black !text-white leading-tight mt-0.5">
                          {member.name}
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="text-[#013777] font-extrabold line-clamp-2 leading-snug">
                        {member.title}
                      </div>
                      {member.education && (
                        <div className="text-[#334155] flex items-center gap-1.5 font-semibold">
                          <GraduationCap className="w-3.5 h-3.5 text-[#013777] shrink-0" />
                          <span className="truncate">{member.education}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-slate-100 space-y-1">
                        {member.qualifications.slice(0, 3).map((q, qIdx) => (
                          <div
                            key={qIdx}
                            className="flex items-start gap-1.5 text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{q}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#013777] font-bold text-xs text-center transition-colors cursor-pointer"
                    >
                      Read Credentials
                    </button>
                    {member.isDoctor && (
                      <button
                        onClick={() => onOpenWhatsAppBooking(member.name)}
                        className="w-full glass-button-whatsapp py-2.5 rounded-xl text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Chat on WhatsApp</span>
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <DoctorModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
        onOpenWhatsAppBooking={onOpenWhatsAppBooking}
      />
    </section>
  );
};
