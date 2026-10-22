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
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 border-t border-white/10">
      <div className="ambient-glow-navy bottom-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-sky-400 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span>Connect with Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact Cairo Hospital Abuja
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Conveniently located in the central healthcare hub of Garki 2, Abuja. Our clinical reception and emergency response coordinators are accessible 24/7.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3 glass-panel-hover">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Physical Address</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {HOSPITAL_CONTACT.address}
            </p>
            <div className="pt-2 text-[11px] font-semibold text-sky-400">
              Garki 2 · Abuja · FCTA
            </div>
          </div>

          {/* Emergency Phones */}
          <div className="glass-panel p-6 rounded-3xl border border-rose-500/20 space-y-3 glass-panel-hover">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Direct Phone Lines</h3>
            <div className="space-y-1 text-xs text-slate-300 font-mono">
              <div>
                <a href={`tel:${HOSPITAL_CONTACT.phone1}`} className="hover:text-white hover:underline">
                  {HOSPITAL_CONTACT.phone1}
                </a>
              </div>
              <div>
                <a href={`tel:${HOSPITAL_CONTACT.phone2}`} className="hover:text-white hover:underline">
                  {HOSPITAL_CONTACT.phone2}
                </a>
              </div>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-rose-400">
              24/7 Immediate Response
            </div>
          </div>

          {/* WhatsApp Coordination */}
          <div className="glass-panel p-6 rounded-3xl border border-emerald-500/20 space-y-3 glass-panel-hover">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">WhatsApp Desk</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Instant patient booking, report follow-ups, and overseas medical travel inquiries.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
              >
                Chat on WhatsApp (+234 909 865 6437)
              </a>
            </div>
          </div>

          {/* Email & Administration */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3 glass-panel-hover">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Official Email</h3>
            <p className="text-xs text-slate-300 font-mono">
              <a href={`mailto:${HOSPITAL_CONTACT.email}`} className="hover:text-white hover:underline">
                {HOSPITAL_CONTACT.email}
              </a>
            </p>
            <div className="pt-2 text-[11px] font-semibold text-teal-300">
              Administrative & Referral Enquiries
            </div>
          </div>
        </div>

        {/* Map & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 glass-panel rounded-3xl overflow-hidden border border-white/15 p-2 flex flex-col justify-between">
            <div className="relative w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden">
              <iframe
                title="Cairo Hospital Abuja Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3546736237256!2d7.487841375822394!3d9.031388089069792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba1dc0c634d%3A0xbce5c777e5e34789!2sGarki%202%2C%20Abuja!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-sky-400" />
                <span>16 Oke Agbe Street, Garki 2, Abuja</span>
              </div>
              <a
                href="https://maps.google.com/?q=16+Oke+Agbe+Street+Garki+2+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-sky-400 hover:underline"
              >
                Open in Maps App
              </a>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-white">Send Direct Inquiry</h3>
              <p className="text-xs text-slate-300 mt-1">
                Have a question or looking for corporate enrolment? Fill out this quick form to connect with our administrative team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1">
                  Your Inquiry *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-slate-500"
                />
              </div>

              <button
                type="submit"
                className="w-full glass-button-whatsapp py-3 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:scale-102 active:scale-98 transition-transform cursor-pointer shadow-lg"
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
