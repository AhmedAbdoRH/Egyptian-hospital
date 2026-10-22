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
    { id: 'orthobiologics', label: 'Orthobiologics' },
    { id: 'tourism', label: 'Medical Tourism' },
    { id: 'team', label: 'Our Team' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Notification Strip with Glass Accent */}
      <div className="bg-slate-950/90 border-b border-white/5 backdrop-blur-md text-xs text-slate-300 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-sky-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Garki 2, Abuja, Nigeria</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>24/7 Emergency & Inpatient Care</span>
            </div>
            <span className="text-slate-600 hidden md:inline">|</span>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>NHIS & FCDA Accredited</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOSPITAL_CONTACT.phone1}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span className="font-mono">{HOSPITAL_CONTACT.phone1}</span>
            </a>
            <button
              onClick={onOpenWhatsAppBooking}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className="glass-panel border-b border-white/10 px-4 sm:px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Official Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer text-left"
          >
            <div className="relative w-12 h-12 rounded-xl bg-white p-1 shadow-md border border-white/20 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Cairo Hospital Abuja"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-tight">
                Cairo Hospital
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-sky-400 uppercase tracking-wider">
                Abuja · Nigeria
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-xs sm:text-sm font-semibold transition-all relative py-1 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-sky-400 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenWhatsAppBooking}
              className="glass-button-whatsapp inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Book via WhatsApp</span>
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-white/10 p-5 space-y-4 shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppBooking();
              }}
              className="w-full glass-button-whatsapp py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2"
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
