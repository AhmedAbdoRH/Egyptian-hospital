import React, { useState } from 'react';
import {
  X,
  PhoneCall,
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface FloatingWhatsAppButtonProps {
  onOpenBookingModal: () => void;
}

// Authentic WhatsApp SVG Icon (handset inside speech bubble with tail)
export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-7 h-7',
  size,
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size || 24}
    height={size || 24}
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
  </svg>
);

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  onOpenBookingModal,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDirectWhatsApp = (subject: string = 'General Inquiry') => {
    const text = encodeURIComponent(`Hello Cairo Hospital Abuja, I would like to inquire about: ${subject}`);
    window.open(`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="Cairo Hospital WhatsApp and quick contact"
      className="fixed bottom-6 left-6 z-[999999] flex flex-col items-start gap-3 select-none pointer-events-auto"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 999999,
      }}
    >
      {/* Quick Contact Drawer */}
      {drawerOpen && (
        <div className="p-4 sm:p-5 rounded-3xl border border-white/20 shadow-2xl w-80 max-w-[calc(100vw-2.5rem)] space-y-3.5 bg-[#011a38]/95 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-150 text-white">
          <div className="flex items-center justify-between pb-2.5 border-b border-white/15">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white">
                  Cairo Hospital Abuja
                </h4>
                <div className="text-[10px] text-emerald-300 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online · Garki 2, Abuja</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {/* Primary Action: Direct WhatsApp Chat */}
            <button
              type="button"
              onClick={() => handleDirectWhatsApp('Consultation & Appointment')}
              className="w-full text-left p-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold transition-all cursor-pointer flex items-center justify-between shadow-lg shadow-emerald-900/40"
            >
              <div className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                <div className="leading-tight">
                  <div className="text-xs font-black">Chat on WhatsApp</div>
                  <div className="text-[10px] text-emerald-100 font-mono font-medium">{HOSPITAL_CONTACT.whatsappDisplay}</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </button>

            {/* Action 2: Guided Booking Form */}
            <button
              type="button"
              onClick={() => {
                setDrawerOpen(false);
                onOpenBookingModal();
              }}
              className="w-full text-left p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-300 shrink-0" />
                <div className="leading-tight">
                  <div className="text-xs font-bold text-white">Book Doctor Appointment</div>
                  <div className="text-[10px] text-sky-200">Outpatient Mon-Sat 10 AM - 6 PM</div>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-sky-300 shrink-0" />
            </button>

            {/* Action 3: Hospital Phone Desk */}
            <a
              href={`tel:${HOSPITAL_CONTACT.phone1}`}
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between block"
            >
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-rose-300 shrink-0" />
                <div className="leading-tight">
                  <div className="text-xs font-bold text-white">Hospital Phone Desk</div>
                  <div className="text-[10px] text-slate-300 font-mono">{HOSPITAL_CONTACT.phone1}</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-sky-200 uppercase">CALL</span>
            </a>

            {/* Action 4: Medical Tourism */}
            <button
              type="button"
              onClick={() => handleDirectWhatsApp('Medical Tourism Inquiry')}
              className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#fdc33e] shrink-0" />
                <div className="leading-tight">
                  <div className="text-xs font-bold text-white">Medical Tourism Desk</div>
                  <div className="text-[10px] text-slate-300">Egypt · Dubai · UK · Turkey</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#fdc33e] shrink-0" />
            </button>
          </div>
        </div>
      )}

      {/* The Classic Floating WhatsApp Button */}
      <button
        type="button"
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-900/50 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40"
        aria-label="Open Cairo Hospital WhatsApp options"
        title="Chat on WhatsApp (+234 706 596 1605)"
      >
        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        
        {/* Authentic WhatsApp SVG Logo */}
        <div className="relative text-white">
          <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          </span>
        </div>
      </button>
    </aside>
  );
};
