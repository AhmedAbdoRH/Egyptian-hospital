import React, { useEffect } from 'react';
import {
  X,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  MessageCircle,
  Stethoscope,
  ShieldCheck,
} from 'lucide-react';
import { TeamMember } from '../types/hospital';

interface DoctorModalProps {
  member: TeamMember | null;
  onClose: () => void;
  onOpenWhatsAppBooking: (doctorName?: string) => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  member,
  onClose,
  onOpenWhatsAppBooking,
}) => {
  useEffect(() => {
    if (!member) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [member, onClose]);

  if (!member) return null;

  const isChairman = member.id === 'dr-ahmed-shaker';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#041226]/75 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-dossier-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col bg-white text-[#1e293b]"
      >
        {/* Top Architectural Hairline Accent */}
        <div
          className={`h-1 w-full shrink-0 ${
            isChairman
              ? 'bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-[#013777]'
              : 'bg-gradient-to-r from-[#013777] via-[#0284c7] to-[#38bdf8]'
          }`}
        />

        {/* Modal Header */}
        <div className="contrast-dark relative p-6 sm:p-8 bg-gradient-to-br from-[#041830] via-[#012654] to-[#013777] border-b border-white/15 shrink-0">
          <button
            onClick={onClose}
            aria-label="Close profile dialog"
            className="absolute top-5 right-5 p-2.5 text-sky-200 hover:text-white rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left pr-0 sm:pr-10">
            {/* Portrait Frame */}
            <div
              className={`w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shrink-0 bg-[#061a33] shadow-xl ${
                isChairman
                  ? 'border-2 border-[#fdc33e]/65'
                  : 'border-2 border-white/25'
              }`}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#092545] to-[#013777] text-white"
                  aria-label={`${member.name} profile image unavailable`}
                >
                  <Stethoscope className="w-12 h-12" />
                </div>
              )}
            </div>

            {/* Identity & Pedigree */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-bold tracking-wide">
                <span className={isChairman ? '!text-[#fdc33e]' : '!text-[#bae6fd]'}>
                  {isChairman ? 'Founder & Chairman of the Board' : member.role}
                </span>
                {isChairman && (
                  <>
                    <span className="text-white/40" aria-hidden="true">
                      ·
                    </span>
                    <span className="inline-flex items-center gap-1 !text-[#bae6fd]">
                      <ShieldCheck className="w-3.5 h-3.5 !text-[#fdc33e]" />
                      <span>50+ Years Healthcare Stewardship</span>
                    </span>
                  </>
                )}
              </div>

              <h3
                id="doctor-dossier-title"
                className="text-2xl sm:text-3xl font-black !text-white tracking-tight leading-tight"
              >
                {member.name}
              </h3>

              <div className="text-sm font-semibold !text-white/95">
                {member.title}
              </div>

              {member.education && (
                <div className="text-xs !text-[#bae6fd] flex items-center justify-center sm:justify-start gap-1.5 font-medium pt-0.5">
                  <GraduationCap
                    className={`w-4 h-4 shrink-0 ${
                      isChairman ? '!text-[#fdc33e]' : '!text-[#bae6fd]'
                    }`}
                  />
                  <span>{member.education}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Dossier Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7">
          {/* Executive / Clinical Biography */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-[#013777] tracking-wide">
              {member.isDoctor ? 'Clinical Mandate & Biography' : 'Executive Mandate & Biography'}
            </div>
            <p className="text-sm text-[#1e293b] font-medium leading-relaxed">
              {member.fullBio}
            </p>
          </div>

          {/* Credentials & Board Certifications */}
          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-sm font-black text-[#061a33] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#b87c08] shrink-0" />
                <span>Credentials & Fellowships</span>
              </h4>
              <ul className="space-y-2.5">
                {member.qualifications.map((q, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#0f172a] font-medium leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#013777] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Highlights */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-[#061a33] flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Leadership & Clinical Milestones</span>
              </h4>
              <ul className="space-y-2.5">
                {member.careerHighlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#0f172a] font-medium leading-snug"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-[#061a33] hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            Close Dossier
          </button>

          {member.isDoctor && (
            <button
              onClick={() => {
                const name = member.name;
                onClose();
                onOpenWhatsAppBooking(name);
              }}
              className="glass-button-whatsapp px-5 py-2.5 rounded-xl text-white font-extrabold text-xs inline-flex items-center gap-2 hover:scale-102 active:scale-98 transition-all cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Schedule Consultation with {member.name}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
