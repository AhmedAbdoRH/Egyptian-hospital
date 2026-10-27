import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Copy,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Ambulance,
  Car,
  Accessibility,
  Building,
  AlertTriangle,
} from 'lucide-react';
import { SubpageHero } from './SubpageHero';
import { HOSPITAL_CONTACT } from '../../data/cairoHospitalData';
import { Reveal } from '../ScrollReveal';

interface ContactSubpageProps {
  onNavigateHome: () => void;
  onOpenWhatsAppBooking: () => void;
}

export const ContactSubpage: React.FC<ContactSubpageProps> = ({
  onNavigateHome,
  onOpenWhatsAppBooking,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'General Inquiries & Appointments',
    message: '',
  });
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOSPITAL_CONTACT.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `🏥 *Cairo Hospital Abuja - Patient Inquiry*
━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *From:* ${formData.name}
📱 *Phone:* ${formData.phone}
🏢 *Department:* ${formData.department}
📝 *Inquiry Details:* ${formData.message || 'Information requested'}
━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Facility:* 16 Oke Agbe Street, Garki 2, Abuja`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const departments = [
    {
      name: 'Emergency & Ambulance Dispatch',
      phone: HOSPITAL_CONTACT.phone1,
      hours: '24 Hours / 7 Days',
      desc: 'Immediate resuscitation, acute trauma intake, and mobile ambulance call-out.',
      urgent: true,
    },
    {
      name: 'Orthopedic & Arthroplasty Clinic',
      phone: HOSPITAL_CONTACT.phone1,
      hours: 'Mon - Sat: 8:00 AM - 8:00 PM',
      desc: 'Consultations with Dr. Mohammed Hesham and senior surgical team.',
    },
    {
      name: 'Obstetrics & Gynaecology Clinic',
      phone: HOSPITAL_CONTACT.phone2,
      hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
      desc: 'Antenatal reviews, fertility assessments with Dr. Ahmed Shaker (MRCOG).',
    },
    {
      name: 'Diagnostic Laboratory & Digital X-Ray',
      phone: HOSPITAL_CONTACT.phone1,
      hours: '24 Hours Daily',
      desc: 'Urgent biochemistry, hematology, and emergency musculoskeletal imaging.',
    },
    {
      name: 'Alexandria Pharmacy Ltd. Dispensary',
      phone: HOSPITAL_CONTACT.phone2,
      hours: '24 Hours Daily',
      desc: 'Specialized inpatient and outpatient pharmaceutical resourcing.',
    },
    {
      name: 'Medical Tourism & Overseas Liaison',
      phone: HOSPITAL_CONTACT.phone1,
      hours: 'Mon - Fri: 9:00 AM - 5:00 PM',
      desc: 'International hospital transfers and specialized referrals to Egypt.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Subpage Hero */}
      <SubpageHero
        badge="Hospital Campus & 24/7 Triage Desk"
        badgeIcon={<MapPin className="w-4 h-4 text-[#013777]" />}
        title="Connect with Cairo Hospital,"
        highlightedText="Garki 2, Abuja."
        description="Whether you require 24/7 emergency trauma dispatch, wish to schedule an outpatient consultation with our medical board, or need directions to our modern hospital campus, our coordination team is ready to assist you."
        breadcrumbs={[{ label: 'Contact Us' }]}
        onNavigateHome={onNavigateHome}
        onOpenWhatsAppBooking={onOpenWhatsAppBooking}
        stats={[
          { label: 'Emergency Response', value: '24/7' },
          { label: 'Ambulance Ready', value: 'Instant' },
          { label: 'Garki 2 Campus', value: '16 Oke Agbe' },
          { label: 'WhatsApp Desk', value: 'Under 15m' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Core Contact Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Emergency & Hotline */}
          <Reveal variant="up" delay={0} className="h-full">
            <div className="h-full glass-panel p-6 rounded-3xl border border-rose-300 bg-rose-50/70 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <Ambulance className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                    Emergency Line 24/7
                  </span>
                  <h3 className="text-base font-black text-[#092545]">Acute Trauma Desk</h3>
                </div>
                <p className="text-xs text-[#1e293b] font-medium">
                  Immediate triage, medical personnel on-site, and dedicated ambulance call-out.
                </p>
              </div>
              <a
                href={`tel:${HOSPITAL_CONTACT.phone1}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-xs transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{HOSPITAL_CONTACT.phone1}</span>
              </a>
            </div>
          </Reveal>

          {/* Card 2: Campus Address */}
          <Reveal variant="up" delay={70} className="h-full">
            <div className="h-full glass-panel p-6 rounded-3xl border border-slate-300 bg-white shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#013777] flex items-center justify-center font-bold border border-sky-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#013777] bg-sky-100 px-2 py-0.5 rounded-md">
                    Hospital Campus
                  </span>
                  <h3 className="text-base font-black text-[#092545]">Physical Address</h3>
                </div>
                <p className="text-xs text-[#092545] font-bold">
                  {HOSPITAL_CONTACT.address}
                </p>
              </div>
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#092545] font-black text-xs transition-colors cursor-pointer"
              >
                {copiedAddress ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#013777]" />
                    <span>Copy Campus Address</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* Card 3: WhatsApp Desk */}
          <Reveal variant="up" delay={140} className="h-full">
            <div className="h-full glass-panel p-6 rounded-3xl border border-emerald-300 bg-emerald-50/70 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    Instant Messaging
                  </span>
                  <h3 className="text-base font-black text-[#092545]">WhatsApp Portal</h3>
                </div>
                <p className="text-xs text-[#1e293b] font-medium">
                  Fastest way to book consultations, verify doctor schedules, and ask clinical questions.
                </p>
              </div>
              <a
                href={`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs shadow-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat +{HOSPITAL_CONTACT.whatsappNumber}</span>
              </a>
            </div>
          </Reveal>

          {/* Card 4: Operating Hours */}
          <Reveal variant="up" delay={210} className="h-full">
            <div className="h-full glass-panel p-6 rounded-3xl border border-slate-300 bg-white shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#092545] flex items-center justify-center font-bold border border-slate-200">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                    Working Hours
                  </span>
                  <h3 className="text-base font-black text-[#092545]">Hospital Schedule</h3>
                </div>
                <div className="text-xs text-[#1e293b] space-y-1 font-medium">
                  <div><span className="font-bold text-[#092545]">Emergency & Inpatient:</span> 24/7/365</div>
                  <div><span className="font-bold text-[#092545]">Outpatient Clinics:</span> 8am - 9pm</div>
                  <div><span className="font-bold text-[#092545]">Pharmacy & Lab:</span> Open 24 Hours</div>
                </div>
              </div>
              <div className="py-2.5 px-3 rounded-xl bg-slate-100 text-center text-xs font-black text-slate-800 border border-slate-200">
                Always Open for Critical Care
              </div>
            </div>
          </Reveal>
        </section>

        {/* Map & Inquiry Form Split Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Interactive Map & Campus Orientation */}
          <Reveal variant="left" delay={60} className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/95 shadow-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-black text-[#092545]">Campus Location & Navigation</h3>
                  <p className="text-xs text-slate-500">16 Oke Agbe Street, Garki 2, Abuja, FCTA</p>
                </div>
                <a
                  href="https://maps.google.com/?q=16+Oke+Agbe+Street+Garki+2+Abuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#013777] text-white text-xs font-bold hover:bg-[#092545] transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative shadow-inner bg-slate-100">
                <iframe
                  title="Cairo Hospital Abuja Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.354674315357!2d7.487042575775317!3d9.031388989063541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bcf5311e967%3A0xe54e58b16e1dbb5b!2sOke-Agbe%20St%2C%20Garki%202%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Campus Amenities & Accessibility Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <Car className="w-5 h-5 text-[#013777] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#092545]">Free Parking</div>
                    <div className="text-[10px] text-slate-500">Secure 24/7 guarded parking</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <Accessibility className="w-5 h-5 text-teal-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#092545]">Wheelchair Ramp</div>
                    <div className="text-[10px] text-slate-500">Ground-floor step-free access</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#092545]">Emergency Bay</div>
                    <div className="text-[10px] text-slate-500">Dedicated ambulance entrance</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Instant WhatsApp Patient Inquiry Form */}
          <Reveal variant="right" delay={140} className="lg:col-span-5 space-y-6">
            <form
              onSubmit={handleSendMessage}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/95 shadow-md space-y-5"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[11px] font-bold text-[#013777] mb-2">
                  <Send className="w-3.5 h-3.5" />
                  <span>Direct Desk Inquiry</span>
                </div>
                <h3 className="text-xl font-black text-[#092545]">Send an Official Inquiry</h3>
                <p className="text-xs text-[#2d435e]">
                  Your message will be formatted and routed straight to our patient coordination desk on WhatsApp for prompt response.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Alh. Ibrahim Danladi"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., +234 803 123 4567"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1">
                    Department of Interest
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none bg-white cursor-pointer"
                  >
                    <option value="General Inquiries & Appointments">General Inquiries & Appointments</option>
                    <option value="Orthopedic Surgery & Arthroplasty">Orthopedic Surgery & Arthroplasty</option>
                    <option value="Orthobiologics & Stem Cell Therapy">Orthobiologics & Stem Cell Therapy</option>
                    <option value="Obstetrics & Gynaecology (Dr. Shaker)">Obstetrics & Gynaecology (Dr. Shaker)</option>
                    <option value="Emergency Ambulance Dispatch">Emergency Ambulance Dispatch</option>
                    <option value="Alexandria Pharmacy Resourcing">Alexandria Pharmacy Resourcing</option>
                    <option value="Medical Tourism Referral to Egypt">Medical Tourism Referral to Egypt</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#013777] mb-1">
                    Your Message / Medical Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly state your inquiry, medical questions, or requested appointment date..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-[#092545] focus:ring-2 focus:ring-[#013777] outline-none resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-[#25D366]/25 transition-all transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Submit to WhatsApp Coordinator</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>WhatsApp opened! You can now send your pre-formatted message directly.</span>
                </div>
              )}
            </form>
          </Reveal>
        </section>

        {/* Detailed Department Hotlines Directory */}
        <section className="space-y-8">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Internal Lines
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Hospital Department Telephone Directory
            </h2>
            <p className="text-sm text-[#2d435e]">
              Direct contact numbers for specialized wards, labs, pharmacy, and corporate inquiries.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <Reveal key={idx} variant="up" delay={(idx % 3) * 75} className="h-full">
                <div
                  className={`h-full glass-panel p-6 rounded-3xl border shadow-sm space-y-4 flex flex-col justify-between ${
                    dept.urgent
                      ? 'border-rose-200 bg-rose-50/30'
                      : 'border-slate-200/90 bg-white/95'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#013777]">{dept.hours}</span>
                      {dept.urgent && (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                          24/7 Priority
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-black text-[#092545]">{dept.name}</h3>
                    <p className="text-xs text-[#2d435e]">{dept.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-600">{dept.phone}</span>
                    <a
                      href={`tel:${dept.phone}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#013777] hover:text-white text-[#092545] text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
