import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Navigation,
  ShieldCheck,
  Ambulance,
} from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/cairoHospitalData';

export const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `📍 *General Inquiry for Cairo Hospital Abuja*
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;
    const url = `https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="ambient-glow-navy bottom-10 left-10 pointer-events-none" />
      <div className="ambient-glow-cyan top-10 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#013777]" />
            <span>Connect with Us · Abuja Healthcare Hub</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
            Contact Cairo Hospital Abuja
          </h2>
          <p className="text-sm sm:text-base text-[#2d435e] leading-relaxed">
            Conveniently located in the central healthcare hub of Garki 2, Abuja. Our clinical reception, emergency ambulance dispatch, and patient coordinators are accessible 24/7.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200/90 space-y-3 glass-panel-hover bg-white/90 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#013777] border border-sky-100 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#013777]" />
            </div>
            <h3 className="text-base font-black text-[#092545]">Physical Address</h3>
            <p className="text-xs text-[#2d435e] leading-relaxed">
              {HOSPITAL_CONTACT.address}
            </p>
            <div className="pt-2 text-[11px] font-bold text-[#013777]">
              Garki 2 · Abuja · FCTA
            </div>
          </div>

          {/* Emergency Phones */}
          <div className="glass-panel p-6 rounded-3xl border border-rose-200 space-y-3 glass-panel-hover bg-white/90 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center">
              <Phone className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-base font-black text-[#092545]">Direct Phone Lines</h3>
            <div className="space-y-1 text-xs text-[#2d435e] font-mono font-bold">
              <div>
                <a href={`tel:${HOSPITAL_CONTACT.phone1}`} className="hover:text-[#013777] hover:underline">
                  {HOSPITAL_CONTACT.phone1}
                </a>
              </div>
              <div>
                <a href={`tel:${HOSPITAL_CONTACT.phone2}`} className="hover:text-[#013777] hover:underline">
                  {HOSPITAL_CONTACT.phone2}
                </a>
              </div>
            </div>
            <div className="pt-2 text-[11px] font-bold text-rose-700">
              24/7 Immediate Clinical Response
            </div>
          </div>

          {/* WhatsApp Coordination */}
          <div className="glass-panel p-6 rounded-3xl border border-emerald-200 space-y-3 glass-panel-hover bg-white/90 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-emerald-600 fill-current" />
            </div>
            <h3 className="text-base font-black text-[#092545]">WhatsApp Desk</h3>
            <p className="text-xs text-[#2d435e] leading-relaxed">
              Instant patient booking, report follow-ups, and overseas medical travel inquiries.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
              >
                <span>Chat on WhatsApp (+234 909 865 6437)</span>
              </a>
            </div>
          </div>

          {/* Email & Administration */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200/90 space-y-3 glass-panel-hover bg-white/90 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 border border-teal-100 flex items-center justify-center">
              <Mail className="w-6 h-6 text-teal-700" />
            </div>
            <h3 className="text-base font-black text-[#092545]">Official Email</h3>
            <p className="text-xs text-[#2d435e] font-mono font-medium">
              <a href={`mailto:${HOSPITAL_CONTACT.email}`} className="hover:text-[#013777] hover:underline">
                {HOSPITAL_CONTACT.email}
              </a>
            </p>
            <div className="pt-2 text-[11px] font-bold text-teal-700">
              Administrative & Referral Enquiries
            </div>
          </div>
        </div>

        {/* Map & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden border border-slate-200/90 p-2.5 flex flex-col justify-between bg-white shadow-sm">
            <div className="relative w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                title="Cairo Hospital Abuja Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3546736237256!2d7.487841375822394!3d9.031388089069792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba1dc0c634d%3A0xbce5c777e5e34789!2sGarki%202%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 flex flex-wrap items-center justify-between text-xs text-[#2d435e] gap-2">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#013777]" />
                <span className="font-semibold">16 Oke Agbe Street, Garki 2, Abuja</span>
              </div>
              <a
                href="https://maps.google.com/?q=16+Oke+Agbe+Street+Garki+2+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#013777] hover:underline"
              >
                Open in Maps App
              </a>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-5 bg-white/95 shadow-sm">
            <div>
              <h3 className="text-xl font-black text-[#092545]">Send Direct Inquiry</h3>
              <p className="text-xs text-[#2d435e] mt-1">
                Have a question or looking for corporate enrolment? Fill out this quick form to connect with our administrative team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#013777] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white placeholder:text-slate-400 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#013777] uppercase mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#013777] uppercase mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#013777] uppercase mb-1">
                  Your Inquiry *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#092545] text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] focus:bg-white placeholder:text-slate-400 font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full glass-button-whatsapp py-3 rounded-xl text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-102 active:scale-98 transition-transform cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Send via WhatsApp Coordinator</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
