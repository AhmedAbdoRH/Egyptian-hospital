import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  FileText,
  Activity,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { SubpageHero } from './SubpageHero';
import { HOSPITAL_CONTACT, MEDICAL_SERVICES, TEAM_MEMBERS } from '../../data/cairoHospitalData';
import { WhatsAppBookingPayload } from '../../types/hospital';
import { Reveal } from '../ScrollReveal';

interface BookingSubpageProps {
  onNavigateHome: () => void;
  preselectedSpecialty?: string;
  preselectedDoctor?: string;
}

export const BookingSubpage: React.FC<BookingSubpageProps> = ({
  onNavigateHome,
  preselectedSpecialty,
  preselectedDoctor,
}) => {
  const [formData, setFormData] = useState<WhatsAppBookingPayload>({
    patientName: '',
    patientPhone: '',
    specialty: preselectedSpecialty || 'Orthopedic Surgery & Arthroplasty',
    doctorPreference: preselectedDoctor || 'Dr. Mohammed Hesham (CMD - Orthopedic Surgery)',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    visitType: 'consultation',
    complaint: '',
  });

  const [hasReports, setHasReports] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [bookingDispatched, setBookingDispatched] = useState(false);

  useEffect(() => {
    if (preselectedSpecialty) {
      setFormData((prev) => ({ ...prev, specialty: preselectedSpecialty }));
    }
    if (preselectedDoctor) {
      setFormData((prev) => ({ ...prev, doctorPreference: preselectedDoctor }));
    }
  }, [preselectedSpecialty, preselectedDoctor]);

  const generateWhatsAppMessage = () => {
    return `🏥 *CAIRO HOSPITAL ABUJA - PATIENT APPOINTMENT REQUEST*
━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Patient Name:* ${formData.patientName || '[Patient Name]'}
📱 *Phone / WhatsApp:* ${formData.patientPhone || '[Phone Number]'}
🩺 *Department / Specialty:* ${formData.specialty}
👨‍⚕️ *Consultant Preference:* ${formData.doctorPreference}
🎯 *Visit Purpose:* ${formData.visitType.toUpperCase()}
📅 *Preferred Date:* ${formData.preferredDate || 'Earliest Available Slot'}
⏰ *Preferred Window:* ${formData.preferredTime}
📁 *Prior MRI / X-Rays / Labs Available:* ${hasReports ? 'YES' : 'NO'}
📝 *Chief Complaint / Symptoms:* ${formData.complaint || 'General clinical review requested'}
━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Facility:* 16 Oke Agbe Street, Garki 2, Abuja
_Dispatched via Cairo Hospital Official Web Booking Portal_`;
  };

  const handleDispatchWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.patientName || !formData.patientPhone) return;

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setBookingDispatched(true);
  };

  const handleCopyClipboard = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const bookingFaqs = [
    {
      q: 'How rapidly will the hospital coordinator reply on WhatsApp?',
      a: 'Our patient coordination desk is active 24/7. During outpatient clinic hours (8:00 AM – 9:00 PM), response time is typically under 15 minutes to confirm consultant calendar slots.',
    },
    {
      q: 'Can I send my previous MRI, CT scans, or laboratory reports via WhatsApp?',
      a: 'Yes, absolutely! Once you initiate the chat using this button, you can directly upload your PDF reports, DICOM imaging summaries, or photos of your prior prescriptions for preliminary review.',
    },
    {
      q: 'What if I need immediate emergency medical attention?',
      a: 'If you or your family member are experiencing acute chest pain, severe trauma, shortness of breath, or heavy bleeding, do not wait for chat replies. Call our 24/7 Emergency Line immediately at +234 909 865 6437 or proceed directly to our Emergency Bay at 16 Oke Agbe Street, Garki 2.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Subpage Hero */}
      <SubpageHero
        badge="Direct WhatsApp Patient Scheduling"
        badgeIcon={<MessageCircle className="w-4 h-4 text-emerald-600" />}
        title="Direct Appointment Booking,"
        highlightedText="Straight to WhatsApp."
        description="Schedule your consultation with Dr. Mohammed Hesham, Dr. Ahmed Shaker, or any of our 22 specialized hospital centers. Your request generates a structured clinical ticket dispatched directly to our on-duty patient coordinator in Abuja."
        breadcrumbs={[{ label: 'Direct WhatsApp Booking' }]}
        onNavigateHome={onNavigateHome}
        stats={[
          { label: 'Coordination', value: 'Instant' },
          { label: 'Consultant Choice', value: 'Direct' },
          { label: 'Booking Fee', value: '₦0' },
          { label: 'Confidentiality', value: '100%' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Main Booking Interface: Split Form & Live Preview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Intake Form */}
          <Reveal variant="left" className="lg:col-span-7">
            <form
              onSubmit={handleDispatchWhatsApp}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/90 bg-white/95 shadow-lg space-y-6"
            >
              <div className="pb-4 border-b border-slate-200">
                <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
                  Step-by-Step Clinical Intake
                </span>
                <h2 className="text-2xl font-black text-[#092545]">
                  Patient Details & Appointment Preferences
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in the details below. They will automatically format into your official WhatsApp appointment message.
                </p>
              </div>

              {/* Section 1: Patient Credentials */}
              <div className="space-y-4">
                <div className="text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>1. Patient Identification</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#092545] mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      placeholder="e.g., Hajia Amina Bello"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#092545] mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.patientPhone}
                      onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                      placeholder="e.g., +234 803 000 0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Clinical Selection */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4" />
                  <span>2. Clinical Service & Doctor Preference</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#092545] mb-1">
                      Medical Specialty *
                    </label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none bg-white cursor-pointer"
                    >
                      {MEDICAL_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#092545] mb-1">
                      Consultant Preference
                    </label>
                    <select
                      value={formData.doctorPreference}
                      onChange={(e) => setFormData({ ...formData, doctorPreference: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none bg-white cursor-pointer"
                    >
                      <option value="Dr. Mohammed Hesham (CMD - Orthopedic Surgery)">
                        Dr. Mohammed Hesham (CMD - Orthopedics & Arthroplasty)
                      </option>
                      <option value="Dr. Ahmed Shaker (Chairman - MRCOG Obs & Gyn)">
                        Dr. Ahmed Shaker (Chairman - MRCOG Obs & Gyn)
                      </option>
                      <option value="Dr. Bassam Makhlouf (Physiotherapy)">
                        Dr. Bassam Makhlouf (Physiotherapy)
                      </option>
                      <option value="Dr. Wael (General Surgery)">
                        Dr. Wael (General Surgery)
                      </option>
                      <option value="First Available Senior Consultant">
                        First Available Senior Consultant
                      </option>
                      <option value="Cairo Rehabilitation Centre Physical Therapist">
                        Cairo Rehabilitation Centre Physical Therapist
                      </option>
                      <option value="Medical Tourism Overseas Coordination Desk">
                        Medical Tourism Overseas Coordination Desk
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#092545] mb-1">
                    Visit Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'consultation', label: 'Consultation' },
                      { id: 'surgery', label: 'Surgery / Arthroplasty' },
                      { id: 'rehabilitation', label: 'Stem Cell / Rehab' },
                      { id: 'medical-tourism', label: 'Overseas Referral' },
                    ].map((type) => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setFormData({ ...formData, visitType: type.id as any })}
                        className={`p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                          formData.visitType === type.id
                            ? 'bg-[#013777] text-white shadow-xs'
                            : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 3: Scheduling Preference */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>3. Preferred Schedule</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#092545] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#092545] mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none bg-white cursor-pointer"
                    >
                      <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                      <option value="Evening (3:00 PM - 7:00 PM)">Evening (3:00 PM - 7:00 PM)</option>
                      <option value="Emergency / Immediate Triage">Emergency / Immediate Triage</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 4: Clinical Complaint & Medical Notes */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>4. Medical History / Symptoms</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#092545] mb-1">
                    Describe Your Symptoms or Medical Needs
                  </label>
                  <textarea
                    rows={3}
                    value={formData.complaint}
                    onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
                    placeholder="e.g., Chronic knee stiffness for 6 months, looking for non-surgical orthobiologics or total knee evaluation..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] font-medium placeholder:text-slate-500 focus:ring-2 focus:ring-[#013777] outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="reportsCheck"
                    checked={hasReports}
                    onChange={(e) => setHasReports(e.target.checked)}
                    className="w-4 h-4 rounded text-[#013777] border-slate-300 focus:ring-[#013777]"
                  />
                  <label htmlFor="reportsCheck" className="text-xs text-[#0f172a] font-bold cursor-pointer">
                    I have recent MRI scans, X-rays, or laboratory reports to share on WhatsApp
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm sm:text-base shadow-lg shadow-[#25D366]/30 transition-all transform active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Launch WhatsApp & Send Appointment Ticket</span>
                </button>

                <div className="flex items-center justify-between text-xs text-slate-700 font-bold pt-1">
                  <button
                    type="button"
                    onClick={handleCopyClipboard}
                    className="inline-flex items-center gap-1.5 hover:text-[#013777] font-bold cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#013777]" />
                    <span>{isCopied ? 'Message Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                  </button>
                  <span className="flex items-center gap-1 text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Encrypted & Confidential</span>
                  </span>
                </div>
              </div>
            </form>
          </Reveal>

          {/* Right Column: Live Formatted WhatsApp Smartphone Preview */}
          <Reveal variant="right" delay={120} className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-sky-400/40 bg-[#071324] text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                    Live Message Preview
                  </span>
                </div>
                <span className="text-xs text-sky-200 font-bold">WhatsApp Dispatch Format</span>
              </div>

              {/* Smartphone Chat Bubble Mockup */}
              <div className="p-4 rounded-2xl bg-[#142236] border border-white/20 font-mono text-xs text-sky-50 font-semibold space-y-2 leading-relaxed whitespace-pre-wrap select-all shadow-inner">
                {generateWhatsAppMessage()}
              </div>

              <div className="text-xs text-sky-100 leading-normal flex items-start gap-2 pt-1 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  When you tap the green button, WhatsApp opens with this message already typed. Simply press send inside WhatsApp.
                </span>
              </div>
            </div>

            {/* Quick Emergency Notice */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Need Emergency Medical Assistance?</span>
              </div>
              <p className="text-xs text-amber-700 leading-relaxed">
                For life-threatening trauma or emergency resuscitation, call our 24/7 hotline directly at{' '}
                <a href={`tel:${HOSPITAL_CONTACT.phone1}`} className="font-bold underline text-amber-950">
                  {HOSPITAL_CONTACT.phone1}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </section>

        {/* Booking FAQs Accordion */}
        <section className="space-y-6 max-w-4xl mx-auto">
          <Reveal variant="up" className="text-center space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Help & Information
            </span>
            <h2 className="text-2xl font-black text-[#092545]">
              Frequently Asked Questions About Booking
            </h2>
          </Reveal>

          <div className="space-y-3">
            {bookingFaqs.map((faq, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 70}>
                <div className="glass-panel p-5 rounded-2xl border border-slate-200/90 bg-white/95 shadow-xs space-y-2">
                  <div className="text-sm font-black text-[#092545]">{faq.q}</div>
                  <p className="text-xs sm:text-sm text-[#2d435e] leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
