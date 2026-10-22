import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Calendar,
  Clock,
  User,
  Phone,
  Stethoscope,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  X,
} from 'lucide-react';
import { HOSPITAL_CONTACT, MEDICAL_SERVICES, TEAM_MEMBERS } from '../data/cairoHospitalData';
import { WhatsAppBookingPayload } from '../types/hospital';

interface WhatsAppBookingPageProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  preselectedSpecialty?: string;
  preselectedDoctor?: string;
}

export const WhatsAppBookingPage: React.FC<WhatsAppBookingPageProps> = ({
  isOpenModal = false,
  onCloseModal,
  preselectedSpecialty,
  preselectedDoctor,
}) => {
  const [formData, setFormData] = useState<WhatsAppBookingPayload>({
    patientName: '',
    patientPhone: '',
    specialty: preselectedSpecialty || 'Orthopedic Surgery & Arthroplasty',
    doctorPreference: preselectedDoctor || 'Dr. Mohammed Hesham (CMD - Orthopedic Surgery)',
    preferredDate: '',
    preferredTime: '10:00 AM',
    visitType: 'consultation',
    complaint: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedSpecialty) {
      setFormData((prev) => ({ ...prev, specialty: preselectedSpecialty }));
    }
    if (preselectedDoctor) {
      setFormData((prev) => ({ ...prev, doctorPreference: preselectedDoctor }));
    }
  }, [preselectedSpecialty, preselectedDoctor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.patientPhone) return;

    const message = `🏥 *Cairo Hospital Abuja - Medical Appointment Request*
━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Patient Name:* ${formData.patientName}
📱 *Contact:* ${formData.patientPhone}
🩺 *Specialty:* ${formData.specialty}
👨‍⚕️ *Doctor Preference:* ${formData.doctorPreference}
📅 *Preferred Date:* ${formData.preferredDate || 'Earliest Available'}
⏰ *Preferred Time:* ${formData.preferredTime}
🎯 *Visit Type:* ${formData.visitType.toUpperCase()}
📝 *Symptoms / Medical Notes:* ${formData.complaint || 'General consultation request'}
━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Facility:* 16 Oke Agbe Street, Garki 2, Abuja
_Sent via Cairo Hospital Official Website_`;

    setGeneratedMessage(message);
    setBookingConfirmed(true);

    // Open WhatsApp directly in new window
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 uppercase tracking-wider">
          <MessageCircle className="w-4 h-4" />
          <span>Direct WhatsApp Patient Scheduling</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Instant WhatsApp Appointment Booking
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Book directly with Cairo Hospital's clinical coordination desk. Your message is formatted professionally and sent directly to our on-duty patient coordinator on WhatsApp.
        </p>
      </div>

      {!bookingConfirmed ? (
        <form
          onSubmit={handleSubmit}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl max-w-3xl mx-auto space-y-6"
        >
          {/* Patient Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Patient Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  placeholder="e.g. Adebayo Ibrahim"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                WhatsApp Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={formData.patientPhone}
                  onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                  placeholder="+234 800 000 0000"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
            </div>
          </div>

          {/* Specialty & Doctor Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Specialty / Department
              </label>
              <select
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {MEDICAL_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.title} className="bg-slate-900 text-white">
                    {srv.title}
                  </option>
                ))}
                <option value="Orthobiologics & Stem Cell Therapy" className="bg-slate-900 text-white">
                  Orthobiologics & Stem Cell Therapy
                </option>
                <option value="Medical Tourism Overseas Referral" className="bg-slate-900 text-white">
                  Medical Tourism Overseas Referral
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Doctor Preference
              </label>
              <select
                value={formData.doctorPreference}
                onChange={(e) => setFormData({ ...formData, doctorPreference: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <option value="First Available Consultant" className="bg-slate-900 text-white">
                  First Available Consultant
                </option>
                <option value="Dr. Ahmed Shaker (Chairman - Obstetrics & Gyn)" className="bg-slate-900 text-white">
                  Dr. Ahmed Shaker (Chairman - Obstetrics & Gyn)
                </option>
                <option value="Dr. Mohammed Hesham (CMD - Orthopedic Surgery)" className="bg-slate-900 text-white">
                  Dr. Mohammed Hesham (CMD - Orthopedic Surgery)
                </option>
                <option value="Chief Medical Director Clinical Team" className="bg-slate-900 text-white">
                  Chief Medical Director Clinical Team
                </option>
                <option value="Alexandria Pharmacy Consultation" className="bg-slate-900 text-white">
                  Alexandria Pharmacy Consultation
                </option>
              </select>
            </div>
          </div>

          {/* Date & Time Slot & Visit Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Preferred Time
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <option value="09:00 AM - Morning">09:00 AM - Morning</option>
                <option value="11:00 AM - Morning">11:00 AM - Morning</option>
                <option value="01:00 PM - Afternoon">01:00 PM - Afternoon</option>
                <option value="03:30 PM - Afternoon">03:30 PM - Afternoon</option>
                <option value="05:30 PM - Evening">05:30 PM - Evening</option>
                <option value="07:30 PM - Evening">07:30 PM - Evening</option>
                <option value="Urgent - Today">Urgent - Today</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Visit Category
              </label>
              <select
                value={formData.visitType}
                onChange={(e) => setFormData({ ...formData, visitType: e.target.value as any })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <option value="consultation">In-Hospital Consultation</option>
                <option value="surgery">Surgery / Arthroplasty Review</option>
                <option value="rehabilitation">Physiotherapy & Rehab</option>
                <option value="medical-tourism">Medical Tourism Overseas</option>
              </select>
            </div>
          </div>

          {/* Chief Complaint */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
              Brief Symptoms or Reason for Visit
            </label>
            <textarea
              rows={3}
              value={formData.complaint}
              onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
              placeholder="Describe your medical condition, duration of symptoms, or previous diagnosis..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Submission Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full glass-button-whatsapp py-4 rounded-2xl text-white font-extrabold text-base flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Send Booking Request to WhatsApp Coordinator</span>
              <Send className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 pt-3 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct communication with Cairo Hospital WhatsApp line: +234 909 865 6437</span>
            </div>
          </div>
        </form>
      ) : (
        /* Confirmed View with Copy & Direct Open */
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-500/40 shadow-2xl max-w-2xl mx-auto space-y-6 bg-slate-900/90 text-white">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white">
              WhatsApp Booking Initiated!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Your appointment request was compiled into the official template below and dispatched to our hospital coordination desk.
            </p>
          </div>

          {/* Pre-formatted message preview */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 font-mono text-xs whitespace-pre-line text-emerald-300 leading-relaxed overflow-x-auto">
            {generatedMessage}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs inline-flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Request'}</span>
            </button>

            <a
              href={`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(generatedMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass-button-whatsapp py-3 px-4 rounded-xl text-white font-extrabold text-xs inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Re-open WhatsApp Chat</span>
            </a>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => {
                setBookingConfirmed(false);
                if (onCloseModal) onCloseModal();
              }}
              className="text-xs font-semibold text-slate-400 hover:text-white underline cursor-pointer"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );

  // If rendered as a standalone modal
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 p-6 sm:p-8 my-auto max-h-[92vh] overflow-y-auto shadow-2xl bg-slate-900/95">
          <button
            onClick={onCloseModal}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          {content}
        </div>
      </div>
    );
  }

  // If rendered as an inline page section
  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/10">
      <div className="ambient-glow-navy top-20 right-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {content}
      </div>
    </section>
  );
};
