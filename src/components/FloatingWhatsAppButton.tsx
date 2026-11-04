import React, { useState } from 'react';
import {
  X,
  PhoneCall,
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronUp,
  MessageSquare,
  Mail,
} from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface FloatingWhatsAppButtonProps {
  onOpenBookingModal: () => void;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  onOpenBookingModal,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDirectWhatsApp = (subject: string) => {
    const text = encodeURIComponent(`Hello Cairo Hospital Abuja, I would like to inquire about: ${subject}`);
    window.open(`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="Cairo Hospital contact options"
      className="fixed bottom-5 right-5 z-[999999] flex flex-col items-end gap-2.5 select-none pointer-events-auto"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999999,
      }}
    >
      {/* Quick Contact Drawer */}
      {drawerOpen && (
        <div className="p-4 sm:p-5 rounded-3xl border border-white/20 shadow-2xl w-80 max-w-[calc(100vw-2rem)] space-y-3.5 bg-[#011a38]/95 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-150 text-white">
          <div className="flex items-center justify-between pb-2.5 border-b border-white/15">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white">
                  Cairo Hospital Contact
                </h4>
                <div className="text-[10px] text-emerald-300 font-semibold">
                  Garki 2, Abuja · Available online
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
              onClick={() => handleDirectWhatsApp('General Inquiry & Appointment')}
              className="w-full text-left p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold transition-all cursor-pointer flex items-center justify-between shadow-md"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                <div className="leading-tight">
                  <div className="text-xs font-black">Chat on WhatsApp</div>
                  <div className="text-[10px] text-emerald-100 font-mono font-medium">{HOSPITAL_CONTACT.whatsappDisplay}</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
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
              <ChevronUp className="w-3.5 h-3.5 text-sky-300 rotate-90 shrink-0" />
            </button>

            {/* Action 3: Hospital Phone Call */}
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

      {/* Compact, Non-Intrusive Floating Button */}
      <button
        type="button"
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-900/40 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-108 active:scale-95 border-2 border-white/30"
        aria-label="Open WhatsApp Chat with Cairo Hospital"
        title="Chat with Cairo Hospital on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full ring-2 ring-[#011a38]" />
        </div>
      </button>
    </aside>
  );
};
