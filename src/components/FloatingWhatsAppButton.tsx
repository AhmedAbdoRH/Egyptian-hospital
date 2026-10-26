import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  PhoneCall,
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronUp,
  MessageSquare,
} from 'lucide-react';
import { HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface FloatingWhatsAppButtonProps {
  onOpenBookingModal: () => void;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  onOpenBookingModal,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAutoExpanded, setIsAutoExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-expand (unfold) for 3 seconds, then stay folded (collapsed) for 12 seconds
  useEffect(() => {
    let collapseTimer: NodeJS.Timeout | null = null;
    let expandInterval: NodeJS.Timeout | null = null;

    // Initially expand for 3 seconds so visitor sees the helpline label, then fold
    setIsAutoExpanded(true);
    collapseTimer = setTimeout(() => {
      setIsAutoExpanded(false);
    }, 3000);

    // Cycle: 12 seconds folded (collapsed) + 3 seconds unfolded = 15 seconds total
    expandInterval = setInterval(() => {
      setIsAutoExpanded(true);
      collapseTimer = setTimeout(() => {
        setIsAutoExpanded(false);
      }, 3000);
    }, 15000);

    return () => {
      if (collapseTimer) clearTimeout(collapseTimer);
      if (expandInterval) clearInterval(expandInterval);
    };
  }, []);

  const handleDirectWhatsApp = (subject: string) => {
    const text = encodeURIComponent(`Hello Cairo Hospital Abuja, I would like to inquire about: ${subject}`);
    window.open(`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <aside
      aria-label="24/7 Hospital Call & Help Desk"
      className="fixed bottom-6 left-6 z-[999999] flex flex-col items-start gap-3 select-none pointer-events-auto"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 999999,
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform',
        isolation: 'isolate',
      }}
    >
      {/* Expanded Quick Contact Drawer */}
      {drawerOpen && (
        <div className="p-5 rounded-3xl border border-white/15 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] ring-1 ring-black/20 w-84 max-w-[calc(100vw-2.5rem)] space-y-4 bg-slate-950/75 backdrop-blur-2xl animate-in fade-in slide-in-from-bottom-4 duration-150 text-white">
          <div className="flex items-center justify-between pb-3 border-b border-white/15">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 via-[#25D366] to-[#087f68] text-white flex items-center justify-center shadow-lg shadow-emerald-950/40 border border-white/25">
                <PhoneCall className="w-5 h-5 animate-phone-ring text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Cairo Hospital Helpline
                </h4>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Direct Patient Line · Abuja</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {/* Action 1: Instant Emergency Call 24/7 */}
            <a
              href={`tel:${HOSPITAL_CONTACT.phone1}`}
              className="w-full text-left p-3.5 rounded-2xl bg-white/[0.06] hover:bg-rose-500/15 border border-rose-300/25 hover:border-rose-300/50 transition-all flex items-center justify-between block group shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-400 to-rose-700 text-white flex items-center justify-center shrink-0 shadow-lg shadow-rose-950/40 border border-white/20">
                  <PhoneCall className="w-4 h-4 group-hover:scale-110 transition-transform animate-phone-ring" />
                </div>
                <div>
                  <div className="font-extrabold text-white text-xs sm:text-sm">Emergency & Doctor Hotline</div>
                  <div className="text-[11px] text-rose-200 font-mono font-bold tracking-wider">{HOSPITAL_CONTACT.phone1}</div>
                </div>
              </div>
              <span className="text-[10px] font-black text-white px-2.5 py-1 rounded-lg bg-rose-500/80 border border-rose-200/25 shadow-sm uppercase tracking-wider">CALL 24/7</span>
            </a>

            {/* Action 2: Secondary Ambulatory Call */}
            <a
              href={`tel:${HOSPITAL_CONTACT.phone2}`}
              className="w-full text-left p-3 rounded-2xl bg-white/[0.05] hover:bg-sky-400/10 border border-white/10 hover:border-sky-300/30 transition-all flex items-center justify-between block group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-300 to-blue-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-950/40 border border-white/20">
                  <Phone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-white">Inpatient & Ambulance Desk</div>
                  <div className="text-[11px] text-sky-200 font-mono font-semibold">{HOSPITAL_CONTACT.phone2}</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-sky-100 px-2 py-0.5 rounded-md bg-sky-500/20 border border-sky-300/20">DIAL</span>
            </a>

            {/* Action 3: WhatsApp Chat Consultation */}
            <button
              type="button"
              onClick={() => handleDirectWhatsApp('General Inquiry & Appointment')}
              className="w-full text-left p-3 rounded-2xl bg-white/[0.05] hover:bg-emerald-400/10 border border-white/10 hover:border-emerald-300/30 transition-all cursor-pointer flex items-center justify-between group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-300 to-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-950/40 border border-white/20">
                  <MessageSquare className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-white">WhatsApp Consultation Desk</div>
                  <div className="text-[11px] text-emerald-200 font-semibold">{HOSPITAL_CONTACT.whatsappDisplay}</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
            </button>

            {/* Action 4: Guided Online Booking Form */}
            <button
              type="button"
              onClick={() => {
                setDrawerOpen(false);
                onOpenBookingModal();
              }}
              className="w-full text-left p-3 rounded-2xl bg-white/[0.05] hover:bg-sky-400/10 border border-white/10 hover:border-sky-300/30 transition-all cursor-pointer flex items-center justify-between group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-300/30 to-blue-500/20 text-sky-200 flex items-center justify-center shrink-0 shadow-inner border border-sky-200/20">
                  <Calendar className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-white">Book Doctor Appointment</div>
                  <div className="text-[11px] text-sky-100 font-medium">Select specialty, doctor & time</div>
                </div>
              </div>
              <ChevronUp className="w-3.5 h-3.5 text-sky-300 rotate-90" />
            </button>

            {/* Action 5: Medical Tourism Inquiry */}
            <button
              type="button"
              onClick={() => handleDirectWhatsApp('Overseas Medical Tourism (Egypt / UK / UAE)')}
              className="w-full text-left p-3 rounded-2xl bg-white/[0.05] hover:bg-teal-400/10 border border-white/10 hover:border-teal-300/30 transition-all cursor-pointer flex items-center justify-between group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-300/30 to-emerald-500/20 text-teal-200 flex items-center justify-center shrink-0 shadow-inner border border-teal-200/20">
                  <Sparkles className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="font-bold text-white">International Patient Desk</div>
                  <div className="text-[11px] text-sky-100 font-medium">Egypt · UK · UAE Medical Travel</div>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-sky-200" />
            </button>
          </div>
        </div>
      )}

      {/* Main Persistent Floating Call Trigger with Auto-Expand / Collapse */}
      <button
        type="button"
        onClick={() => setDrawerOpen(!drawerOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative flex items-center text-white shadow-2xl cursor-pointer group animate-call-pulse bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0e7569] transition-all duration-500 ease-in-out hover:scale-105 active:scale-95 ${
          (isAutoExpanded || isHovered || drawerOpen)
            ? 'px-4 py-3 sm:px-5 sm:py-3.5 rounded-full gap-3'
            : 'p-3.5 sm:p-4 rounded-full gap-0'
        }`}
        aria-label="Call Hospital 24/7 Helpline"
        title="Cairo Hospital 24/7 Call Center"
      >
        <div className="relative flex items-center justify-center shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-phone-ring" />
          </div>
        </div>

        <div
          className={`flex flex-col text-left leading-tight whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
            (isAutoExpanded || isHovered || drawerOpen)
              ? 'max-w-[210px] opacity-100 pr-1'
              : 'max-w-0 opacity-0 pr-0'
          }`}
        >
          <div className="font-black text-xs sm:text-sm tracking-wide text-white flex items-center gap-1.5">
            <span>{drawerOpen ? 'Close Desk' : 'Call & Help 24/7'}</span>
          </div>
          <div className="text-[10px] text-emerald-50 font-bold tracking-tight">
            {drawerOpen ? 'Click to minimize' : 'Emergency · Doctor Hotline'}
          </div>
        </div>
      </button>
    </aside>
  );
};
