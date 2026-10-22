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

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenWhatsAppBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenWhatsAppBooking,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="ambient-glow-navy bottom-0 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Logo & Overview */}
          <div className="lg:col-span-4 space-y-4">
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
                <div className="text-xs font-semibold text-sky-400">
                  Cairo Rehabilitation Centre (CRC)
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              The first Egyptian-led hospital founded in Abuja in 2019, carrying forward five decades of healthcare leadership in Nigeria since 1971. International multi-specialties care, advanced orthopedic surgery, and global medical tourism.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{HOSPITAL_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{HOSPITAL_CONTACT.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore Cairo Hospital</h4>
            <ul className="space-y-2 text-xs">
              {[
                ['about', 'About Us'], ['services', 'Services'], ['team', 'Our Team'],
                ['contact', 'Contact Us'], ['booking', 'Direct WhatsApp Booking'],
              ].map(([id, label]) => (
                <li key={id}><button onClick={() => onNavigate(id)} className="hover:text-white transition-colors cursor-pointer text-left">{label}</button></li>
              ))}
            </ul>
          </div>
          {/* Key Specialties Preview */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Centers
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>• Orthopedic Surgery</li>
              <li>• Prolotherapy & PRP</li>
              <li>• Diabetic Foot Clinic</li>
              <li>• Obstetrics & Infertility</li>
              <li>• General & Urosurgery</li>
              <li>• Digital X-Ray & Lab</li>
              <li>• Alexandria Pharmacy</li>
              <li>• Skinic Dermatology</li>
            </ul>
          </div>

          {/* WhatsApp & Emergency Helpline */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Patient Helplines
            </h4>
            <div className="space-y-2.5 text-xs">
              <button
                onClick={onOpenWhatsAppBooking}
                className="w-full glass-button-whatsapp py-3 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:scale-102 transition-transform cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </button>

              <div className="p-3 rounded-xl glass-panel border border-white/10 space-y-1">
                <div className="text-[11px] text-slate-400">Emergency Phone</div>
                <a
                  href={`tel:${HOSPITAL_CONTACT.phone1}`}
                  className="text-white font-mono font-bold hover:text-sky-400 text-sm block"
                >
                  {HOSPITAL_CONTACT.phone1}
                </a>
              </div>

              <div className="p-3 rounded-xl glass-panel border border-white/10 space-y-1">
                <div className="text-[11px] text-slate-400">Email Enquiries</div>
                <a
                  href={`mailto:${HOSPITAL_CONTACT.email}`}
                  className="text-sky-300 text-xs font-mono hover:underline block"
                >
                  {HOSPITAL_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              NHIS Accredited
            </span>
            <span>·</span>
            <span>FCDA Certified</span>
            <span>·</span>
            <span>African Union, UN & UNICEF Enrolled</span>
          </div>

          <div>
            © {new Date().getFullYear()} Cairo Hospital Abuja. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
