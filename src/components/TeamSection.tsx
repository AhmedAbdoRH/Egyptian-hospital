import React, { useState } from 'react';
import {
  Users,
  Award,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/cairoHospitalData';
import { TeamMember } from '../types/hospital';
import { DoctorModal } from './DoctorModal';

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
    <section id="team" className="py-24 relative overflow-hidden bg-slate-900 border-t border-white/10">
      <div className="ambient-glow-navy top-40 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Users className="w-4 h-4 text-sky-400" />
            <span>Clinical Leadership & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Meet Our Executive Medical Team
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Distinguished Egyptian consultants and healthcare administrators guiding Cairo Hospital with international clinical acumen and deep Nigerian healthcare experience.
          </p>
        </div>

        {/* Chairman Feature Card (Dr. Ahmed Shaker) */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-950/40 via-slate-900/90 to-slate-950 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-sky-400/40 shadow-xl bg-slate-950">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-3 text-xs font-bold px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                Five Decades in Healthcare Leadership
              </div>
            </div>

            {/* Information */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="text-xs font-extrabold text-sky-400 uppercase tracking-widest">
                  {chairman.role}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {chairman.name}
                </h3>
                <div className="text-sm font-semibold text-teal-300">
                  {chairman.title} · {chairman.education}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {chairman.fullBio}
              </p>

              {/* Badges */}
              <div className="space-y-1.5 pt-2 text-xs text-slate-200">
                {chairman.qualifications.slice(0, 3).map((q, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-white/10">
                <button
                  onClick={() => setSelectedMember(chairman)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs inline-flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>View Full Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
                </button>

                <button
                  onClick={() => onOpenWhatsAppBooking(chairman.name)}
                  className="glass-button-whatsapp px-5 py-2.5 rounded-xl text-white font-bold text-xs inline-flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consult Dr. Shaker on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveMembers.map((member) => (
            <div
              key={member.id}
              className="glass-panel p-5 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-4"
            >
              <div>
                {/* Photo */}
                <div className="relative h-56 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                      {member.role}
                    </span>
                    <h4 className="text-base font-bold text-white leading-tight">
                      {member.name}
                    </h4>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-slate-300 font-semibold line-clamp-1">
                    {member.title}
                  </div>
                  <div className="text-slate-400 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span className="truncate">{member.education}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/15 text-white font-bold text-xs text-center transition-colors cursor-pointer"
                >
                  Read Credentials
                </button>
                <button
                  onClick={() => onOpenWhatsAppBooking(member.name)}
                  className="w-full glass-button-whatsapp py-2 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
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
