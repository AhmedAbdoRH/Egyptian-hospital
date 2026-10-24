import React, { useState } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  MessageCircle,
  Calendar,
  Shield,
} from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tabId: string) => void;
  onOpenWhatsAppBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  onOpenWhatsAppBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Our Team' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'booking', label: 'Book via WhatsApp' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Notification Strip */}
      <div className="bg-[#002654] border-b border-white/10 text-xs text-sky-100 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-sky-300 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Garki 2, Abuja, Nigeria</span>
            </div>
            <span className="text-sky-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-sky-100">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 Level-1 Emergency & Inpatient Care</span>
            </div>
            <span className="text-sky-600 hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-amber-300 font-medium">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>NHIS, AU & UN Enrolled Hospital</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOSPITAL_CONTACT.phone1}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-sky-300 transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span className="font-mono">{HOSPITAL_CONTACT.phone1}</span>
            </a>
            <button
              onClick={onOpenWhatsAppBooking}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-extrabold hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Desk</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className="bg-white/90 backdrop-blur-md border-b border-[#013777]/15 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Official Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer text-left group"
          >
            <div className="relative w-12 h-12 rounded-xl bg-white p-1 shadow-md border border-slate-200 flex-shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="Cairo Hospital Abuja"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-[#013777] tracking-tight leading-tight">
                Cairo Hospital
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-[#0b5599] uppercase tracking-wider">
                Abuja · Nigeria
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-xs sm:text-sm transition-all relative py-1 cursor-pointer font-bold ${
                  activeTab === item.id
                    ? 'text-[#013777] font-black'
                    : 'text-[#2d435e] hover:text-[#013777]'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#013777] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('booking')}
              className="glass-button-whatsapp inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-extrabold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Book via WhatsApp</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-[#013777] hover:bg-slate-200"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 p-5 space-y-4 shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left w-full px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#013777]/10 text-[#013777] border border-[#013777]/20 font-black'
                    : 'text-[#2d435e] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('booking');
              }}
              className="w-full glass-button-whatsapp py-3 rounded-xl text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Appointment via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
