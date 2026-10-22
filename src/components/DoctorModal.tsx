import React from 'react';
import {
  X,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle,
  MessageCircle,
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
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl border border-white/20 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col bg-slate-900/95 text-white">
        {/* Header */}
        <div className="p-6 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              {member.role}
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">{member.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Member Hero Photo & Title */}
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
            <div className="w-28 h-32 rounded-2xl overflow-hidden border-2 border-sky-400/30 flex-shrink-0 bg-slate-950 shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-1.5">
              <div className="text-sm font-semibold text-sky-300">{member.title}</div>
              <div className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1.5">
                <GraduationCap className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{member.education}</span>
              </div>
              <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                {member.fullBio}
              </p>
            </div>
          </div>

          {/* Qualifications & Board Certifications */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Credentials & Memberships</span>
            </h4>
            <div className="space-y-1.5">
              {member.qualifications.map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Key Career Highlights</span>
            </h4>
            <div className="space-y-1.5">
              {member.careerHighlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs text-teal-200"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950/80 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
          >
            Close Profile
          </button>

          <button
            onClick={() => {
              const name = member.name;
              onClose();
              onOpenWhatsAppBooking(name);
            }}
            className="glass-button-whatsapp px-5 py-2.5 rounded-xl text-white font-bold text-xs inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book Consultation with {member.name.split(' ')[0]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
