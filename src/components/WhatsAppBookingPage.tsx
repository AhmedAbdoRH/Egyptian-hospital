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
import { Reveal } from './ScrollReveal';

interface WhatsAppBookingPageProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  preselectedSpecialty?: string;
  preselectedDoctor?: string;
  isDarkBg?: boolean;
}

export const WhatsAppBookingPage: React.FC<WhatsAppBookingPageProps> = ({
  isOpenModal = false,
  onCloseModal,
  preselectedSpecialty,
  preselectedDoctor,
  isDarkBg = true,
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

  const headerBlock = (
    <div className="text-center max-w-2xl mx-auto space-y-3">
      <div
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
          isDarkBg
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 shadow-xs'
            : 'bg-emerald-50 border border-emerald-300 text-emerald-800'
        }`}
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>Direct WhatsApp Patient Scheduling</span>
      </div>
      <h2
        className={`text-2xl sm:text-4xl font-black tracking-tight ${
          isDarkBg ? 'text-white' : 'text-[#061a33]'
        }`}
      >
        Instant WhatsApp Appointment Booking
      </h2>
      <p
        className={`text-xs sm:text-sm leading-relaxed ${
          isDarkBg ? 'text-sky-100 font-medium' : 'text-[#1e293b]'
        }`}
      >
        Book directly with Cairo Hospital's clinical coordination desk in Abuja. Your message is formatted professionally and sent directly to our on-duty patient coordinator on WhatsApp.
      </p>
    </div>
  );

  const formOrConfirmedBlock = !bookingConfirmed ? (
    <form
          onSubmit={handleSubmit}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl max-w-3xl mx-auto space-y-6 bg-white/95"
        >
          {/* Patient Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5">
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
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5">
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
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
                />
              </div>
            </div>
          </div>

          {/* Specialty & Doctor Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5">
                Specialty / Department
              </label>
              <select
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
              >
                {MEDICAL_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.title} className="text-[#092545]">
                    {srv.title}
                  </option>
                ))}
                <option value="Orthobiologics & Stem Cell Therapy" className="text-[#092545]">
                  Orthobiologics & Stem Cell Therapy
                </option>
                <option value="Medical Tourism Overseas Referral" className="text-[#092545]">
                  Medical Tourism Overseas Referral
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5">
                Doctor Preference
              </label>
              <select
                value={formData.doctorPreference}
                onChange={(e) => setFormData({ ...formData, doctorPreference: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
              >
                <option value="First Available Consultant" className="text-[#092545]">
                  First Available Consultant
                </option>
                <option value="Dr. Ahmed Shaker (Chairman - Obstetrics & Gyn)" className="text-[#092545]">
                  Dr. Ahmed Shaker (Chairman - Obstetrics & Gyn)
                </option>
                <option value="Dr. Mohammed Hesham (CMD - Orthopedic Surgery)" className="text-[#092545]">
                  Dr. Mohammed Hesham (CMD - Orthopedic Surgery)
                </option>
                <option value="Dr. Bassam Makhlouf (Physiotherapy)" className="text-[#092545]">
                  Dr. Bassam Makhlouf (Physiotherapy)
                </option>
                <option value="Dr. Wael (General Surgery)" className="text-[#092545]">
                  Dr. Wael (General Surgery)
                </option>
                <option value="Chief Medical Director Clinical Team" className="text-[#092545]">
                  Chief Medical Director Clinical Team
                </option>
                <option value="Alexandria Pharmacy Consultation" className="text-[#092545]">
                  Alexandria Pharmacy Consultation
                </option>
              </select>
            </div>
          </div>

          {/* Date & Time Slot & Visit Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5">
                Preferred Time
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
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
              <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5">
                Visit Category
              </label>
              <select
                value={formData.visitType}
                onChange={(e) => setFormData({ ...formData, visitType: e.target.value as any })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
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
            <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1.5">
              Brief Symptoms or Reason for Visit
            </label>
            <textarea
              rows={3}
              value={formData.complaint}
              onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
              placeholder="Describe your medical condition, duration of symptoms, or previous diagnosis..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white transition-all font-medium"
            />
          </div>

          {/* Submission Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full glass-button-whatsapp py-4 rounded-2xl text-white font-black text-base flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xl"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Send Booking Request to WhatsApp Coordinator</span>
              <Send className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2 pt-3 text-[11px] text-[#2d435e]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct communication with Cairo Hospital WhatsApp line: +234 909 865 6437</span>
            </div>
          </div>
        </form>
      ) : (
        /* Confirmed View with Copy & Direct Open */
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-emerald-400/80 shadow-2xl max-w-2xl mx-auto space-y-6 bg-white text-[#2d435e]">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-[#092545]">
              WhatsApp Booking Initiated!
            </h3>
            <p className="text-xs sm:text-sm text-[#2d435e]">
              Your appointment request was compiled into the official template below and dispatched to our hospital coordination desk.
            </p>
          </div>

          {/* Pre-formatted message preview */}
          <div className="p-4.5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs whitespace-pre-line text-emerald-300 leading-relaxed overflow-x-auto shadow-inner">
            {generatedMessage}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#013777] font-bold text-xs inline-flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Request'}</span>
            </button>

            <a
              href={`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(generatedMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 glass-button-whatsapp py-3 px-4 rounded-xl text-white font-black text-xs inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-md"
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
              className="text-xs font-bold text-[#013777] hover:underline cursor-pointer"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      );

  const content = isOpenModal ? (
    <div className="space-y-8">
      {headerBlock}
      {formOrConfirmedBlock}
    </div>
  ) : (
    <div className="space-y-8">
      <Reveal variant="up">{headerBlock}</Reveal>
      <Reveal variant="scale" delay={100}>
        {formOrConfirmedBlock}
      </Reveal>
    </div>
  );

  // If rendered as a standalone modal
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#011633]/70 backdrop-blur-md overflow-y-auto">
        <div className="relative w-full max-w-4xl rounded-3xl border border-slate-200 p-6 sm:p-8 my-auto max-h-[92vh] overflow-y-auto shadow-2xl bg-white text-[#2d435e]">
          <button
            onClick={onCloseModal}
            className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
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
    <section id="booking" className="py-8 sm:py-14 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 right-20 pointer-events-none" />
      <div className="ambient-glow-cyan bottom-10 left-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {content}
      </div>
    </section>
  );
};
