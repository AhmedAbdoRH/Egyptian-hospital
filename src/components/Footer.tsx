import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { HOSPITAL_CONTACT, MEDICAL_SERVICES } from '../data/cairoHospitalData';
import { Reveal } from './ScrollReveal';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenWhatsAppBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenWhatsAppBooking,
}) => {
  return (
    <footer className="bg-[#001d40] text-sky-100 pt-16 pb-12 border-t border-[#013777]/30 relative overflow-hidden">
      <div className="ambient-glow-navy bottom-0 right-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Logo & Overview */}
          <Reveal variant="up" delay={0} className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-md border border-white/20 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Cairo Hospital Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  Cairo Hospital
                </span>
                <div className="text-xs font-bold text-white">
                  Cairo Rehabilitation Centre (CRC)
                </div>
              </div>
            </div>

            <p className="text-xs text-sky-100 leading-relaxed font-medium">
              The first Egyptian-led hospital founded in Abuja in 2019, carrying forward five decades of healthcare leadership in Nigeria since 1971. International multi-specialties care, advanced orthopedic surgery, and global medical tourism.
            </p>

            <div className="space-y-1.5 text-xs text-sky-100 pt-1 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>{HOSPITAL_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white flex-shrink-0" />
                <span>{HOSPITAL_CONTACT.workingHours}</span>
              </div>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal variant="up" delay={70} className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">Explore Cairo Hospital</h4>
            <ul className="space-y-2 text-xs">
              {[
                ['about', 'About Us & 4 Pillars'],
                ['services', '22 Medical Specialties'],
                ['team', 'Executive Medical Team'],
                ['contact', 'Campus Location & Contact'],
                ['booking', 'Direct WhatsApp Scheduling'],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-white transition-colors cursor-pointer text-left font-bold text-sky-100 hover:translate-x-1 duration-200 inline-block"
                  >
                    • {label}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Key Specialties Preview */}
          <Reveal variant="up" delay={140} className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Centers of Excellence
            </h4>
            <ul className="space-y-1.5 text-xs text-sky-100 font-medium">
              <li>• Orthopedic Surgery</li>
              <li>• Prolotherapy & Stem Cells</li>
              <li>• Diabetic Foot Center</li>
              <li>• Obstetrics & Infertility</li>
              <li>• General & Urosurgery</li>
              <li>• Digital X-Ray & Ultrasound</li>
              <li>• Alexandria Pharmacy Ltd.</li>
              <li>• Skinic Dermatology Clinic</li>
            </ul>
          </Reveal>

          {/* WhatsApp & Emergency Helpline */}
          <Reveal variant="up" delay={210} className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Patient Helplines
            </h4>
            <div className="space-y-2.5 text-xs">
              <button
                onClick={onOpenWhatsAppBooking}
                className="w-full glass-button-whatsapp py-3 rounded-xl text-white font-extrabold flex items-center justify-center gap-2 hover:scale-102 transition-transform cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp Booking</span>
              </button>

              <div className="p-3 rounded-xl bg-white/10 border border-white/20 space-y-1 text-white">
                <div className="text-[11px] text-white font-bold">Emergency Ambulance Hotline</div>
                <a
                  href={`tel:${HOSPITAL_CONTACT.phone1}`}
                  className="text-white font-mono font-black hover:text-sky-300 text-sm block"
                >
                  {HOSPITAL_CONTACT.phone1}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-white/10 border border-white/20 space-y-1 text-white">
                <div className="text-[11px] text-white font-bold">Hospital Inquiries & Referrals</div>
                <a
                  href={`mailto:${HOSPITAL_CONTACT.email}`}
                  className="text-sky-100 text-xs font-mono hover:text-white hover:underline block font-semibold"
                >
                  {HOSPITAL_CONTACT.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Bar */}
        <Reveal variant="fade" delay={180} className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t border-white/10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1.5 text-[#fdc33e] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#fdc33e]" />
              NHIS Accredited
            </span>
            <span className="text-sky-400">·</span>
            <span className="text-sky-100 font-semibold">FCDA Certified</span>
            <span className="text-sky-400">·</span>
            <span className="text-sky-100 font-semibold">African Union, UN & UNICEF Enrolled</span>
          </div>

          <div className="text-sky-100 font-medium">
            © {new Date().getFullYear()} Cairo Hospital Abuja. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
