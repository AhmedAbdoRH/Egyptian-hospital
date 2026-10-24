import React, { useState } from 'react';
import {
  MessageCircle,
  X,
  Calendar,
  PhoneCall,
  Sparkles,
  ExternalLink,
  ChevronUp,
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Expanded Quick Action Drawer */}
      {drawerOpen && (
        <div className="glass-panel p-5 rounded-3xl border border-emerald-500/40 shadow-2xl w-80 space-y-4 bg-slate-900/95 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Cairo Hospital WhatsApp</h4>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online · Coordination Desk</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-1 rounded-lg text-sky-200 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {/* Action 1: Fill guided booking form */}
            <button
              onClick={() => {
                setDrawerOpen(false);
                onOpenBookingModal();
              }}
              className="w-full text-left p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-sky-300 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-white">Guided Booking Form</div>
                  <div className="text-[11px] text-sky-100 font-medium">Select doctor, specialty & time</div>
                </div>
              </div>
              <ChevronUp className="w-3.5 h-3.5 text-sky-300 rotate-90" />
            </button>

            {/* Action 2: Direct Doctor Consult */}
            <button
              onClick={() => handleDirectWhatsApp('Doctor Appointment & Consultation')}
              className="w-full text-left p-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/40 transition-colors cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-white">Direct Chat with Reception</div>
                  <div className="text-[11px] text-emerald-200 font-semibold">+234 909 865 6437</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
            </button>

            {/* Action 3: Medical Tourism Inquiry */}
            <button
              onClick={() => handleDirectWhatsApp('Overseas Medical Tourism (Egypt / UK / UAE)')}
              className="w-full text-left p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 transition-colors cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-300 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-white">Medical Tourism Desk</div>
                  <div className="text-[11px] text-sky-100 font-medium">Egypt · UK · UAE · USA Treatment</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-sky-200" />
            </button>

            {/* Action 4: Urgent Emergency Phone */}
            <a
              href={`tel:${HOSPITAL_CONTACT.phone1}`}
              className="w-full text-left p-3 rounded-2xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/40 transition-colors flex items-center justify-between block group"
            >
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-rose-300 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-bold text-white">Emergency Call 24/7</div>
                  <div className="text-[11px] text-rose-200 font-mono font-bold">{HOSPITAL_CONTACT.phone1}</div>
                </div>
              </div>
              <span className="text-[11px] font-black text-rose-200 px-2 py-0.5 rounded-md bg-rose-600">CALL</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Persistent Floating WhatsApp Trigger */}
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="glass-button-whatsapp relative p-4 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center gap-2.5 group animate-whatsapp-pulse"
        aria-label="Open WhatsApp Appointment Desk"
        title="Book on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-extrabold text-sm pr-1">
          {drawerOpen ? 'Close' : 'Book on WhatsApp'}
        </span>
      </button>
    </div>
  );
};
