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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#011633]/70 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col bg-white text-[#2d435e]">
        {/* Header */}
        <div className="p-6 bg-[#012654] border-b border-white/10 flex items-center justify-between text-white">
          <div>
            <div className="text-xs font-bold text-sky-300 uppercase tracking-wider">
              {member.role}
            </div>
            <h3 className="text-xl font-black text-white mt-0.5">{member.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-sky-200 hover:text-white rounded-xl bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Member Hero Photo & Title */}
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
            <div className="w-28 h-32 rounded-2xl overflow-hidden border-2 border-[#013777]/30 flex-shrink-0 bg-slate-100 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-1.5">
              <div className="text-sm font-extrabold text-[#013777]">{member.title}</div>
              <div className="text-xs text-slate-700 flex items-center justify-center sm:justify-start gap-1.5 font-bold">
                <GraduationCap className="w-4 h-4 text-[#013777] flex-shrink-0" />
                <span>{member.education}</span>
              </div>
              <p className="text-xs text-[#0f172a] font-medium pt-1 leading-relaxed">
                {member.fullBio}
              </p>
            </div>
          </div>

          {/* Qualifications & Board Certifications */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-[#013777] uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#0b5599]" />
              <span>Credentials & Memberships</span>
            </h4>
            <div className="space-y-2">
              {member.qualifications.map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-[#013777] font-semibold"
                >
                  <CheckCircle className="w-4 h-4 text-[#0b5599] flex-shrink-0 mt-0.5" />
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-black text-teal-800 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-teal-600" />
              <span>Key Career Highlights & Leadership</span>
            </h4>
            <div className="space-y-2">
              {member.careerHighlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-900 font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            Close Profile
          </button>

          <button
            onClick={() => {
              const name = member.name;
              onClose();
              onOpenWhatsAppBooking(name);
            }}
            className="glass-button-whatsapp px-5 py-2.5 rounded-xl text-white font-extrabold text-xs inline-flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Book Consultation with {member.name.split(' ')[0]}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
