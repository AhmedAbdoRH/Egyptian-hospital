import React, { useState } from 'react';
import {
  Users,
  Award,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Stethoscope,
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

  const chairman = TEAM_MEMBERS[0];
  const executiveMembers = TEAM_MEMBERS.slice(1);

  return (
    <section id="team" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-40 left-10 pointer-events-none" />
      <div className="ambient-glow-cyan bottom-20 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-16">
        {/* Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Users className="w-4 h-4 text-[#013777]" />
              <span>Clinical Leadership & Governance</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              Meet Our Executive Medical Team
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Distinguished Egyptian consultants and healthcare administrators guiding Cairo Hospital with international clinical acumen and deep Nigerian healthcare experience.
            </p>
          </div>
        </Reveal>

        {/* Chairman Feature Card (Dr. Ahmed Shaker) */}
        <Reveal variant="scale">
          <div className="glass-panel-dark p-6 sm:p-10 rounded-3xl border border-sky-400/40 shadow-2xl relative overflow-hidden bg-gradient-to-br from-[#012654] via-[#013777] to-[#041d3d] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-sky-400/50 shadow-xl bg-slate-900">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-3 text-xs font-black px-3.5 py-1 rounded-full bg-[#fdc33e]/20 text-[#fdc33e] border border-[#fdc33e]/40 shadow-xs">
                Five Decades in Healthcare Leadership
              </div>
            </div>

            {/* Information */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="text-xs font-extrabold !text-white uppercase tracking-widest">
                  {chairman.role}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {chairman.name}
                </h3>
                <div className="text-sm font-bold !text-white">
                  {chairman.title} · {chairman.education}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                {chairman.fullBio}
              </p>

              {/* Badges */}
              <div className="space-y-1.5 pt-2 text-xs text-sky-100">
                {chairman.qualifications.slice(0, 3).map((q, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#fdc33e] flex-shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-white/20">
                <button
                  onClick={() => setSelectedMember(chairman)}
                  className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs inline-flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>View Full Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sky-300" />
                </button>

                {chairman.isDoctor && (
                  <button
                    onClick={() => onOpenWhatsAppBooking(chairman.name)}
                    className="glass-button-whatsapp px-5 py-2.5 rounded-xl text-white font-extrabold text-xs inline-flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Consult Dr. Shaker on WhatsApp</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          </div>
        </Reveal>

        {/* Executive Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveMembers.map((member, idx) => (
            <Reveal
              key={member.id}
              variant="up"
              delay={(idx % 4) * 90}
              className="h-full"
            >
              <div className="h-full glass-panel p-5 rounded-3xl border border-slate-200 glass-panel-hover flex flex-col justify-between space-y-4 bg-white shadow-sm">
                <div>
                  {/* Photo */}
                  <div className="relative h-60 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-4 shadow-inner">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e6f0fa] to-[#c9dced] text-[#013777]" aria-label={`${member.name} profile image unavailable`}>
                        <Stethoscope className="w-12 h-12" />
                        <span className="text-3xl font-black">{member.name.split(' ').slice(-1)[0].charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012654]/85 via-transparent to-transparent" />
                    <div className="photo-caption absolute bottom-2.5 left-3 right-3 text-white">
                      <span className="text-[10px] font-black !text-white uppercase tracking-wider block">
                        {member.role}
                      </span>
                      <h4 className="text-base font-black text-white leading-tight">
                        {member.name}
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="text-[#013777] font-black line-clamp-1">
                      {member.title}
                    </div>
                    {member.education && (
                      <div className="text-[#0f172a] flex items-center gap-1.5 font-semibold">
                        <GraduationCap className="w-3.5 h-3.5 text-[#013777] flex-shrink-0" />
                        <span className="truncate">{member.education}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#013777] font-black text-xs text-center transition-colors cursor-pointer"
                  >
                    Read Credentials
                  </button>
                  {member.isDoctor && (
                    <button
                      onClick={() => onOpenWhatsAppBooking(member.name)}
                      className="w-full glass-button-whatsapp py-2.5 rounded-xl text-white font-black text-xs flex items-center justify-center gap-1.5 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-md"
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

      {/* Detail Modal */}
      <DoctorModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
        onOpenWhatsAppBooking={onOpenWhatsAppBooking}
      />
    </section>
  );
};
