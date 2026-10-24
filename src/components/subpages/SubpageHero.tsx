import React from 'react';
import { ChevronRight, Home, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { HOSPITAL_CONTACT } from '../../data/cairoHospitalData';

interface SubpageHeroProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightedText?: string;
  description: string;
  breadcrumbs: { label: string; tab?: string }[];
  onNavigateHome: () => void;
  onOpenWhatsAppBooking?: () => void;
  stats?: { label: string; value: string }[];
}

export const SubpageHero: React.FC<SubpageHeroProps> = ({
  badge,
  badgeIcon,
  title,
  highlightedText,
  description,
  breadcrumbs,
  onNavigateHome,
  onOpenWhatsAppBooking,
  stats,
}) => {
  return (
    <div className="relative pt-10 pb-16 sm:pb-20 overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-sky-50/70 via-white to-[#f4f8fc]">
      {/* Dynamic ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#013777]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        {/* Breadcrumb Navigation with High-Contrast Typography */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#013777] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-slate-600" />
            <span>Home</span>
          </button>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span
                className={
                  idx === breadcrumbs.length - 1
                    ? 'text-[#013777] font-black'
                    : 'text-slate-700 hover:text-[#013777] transition-colors'
                }
              >
                {crumb.label}
              </span>
            </React.Fragment>
          ))}
        </nav>

        {/* Hero Headline & Intro */}
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-xs text-xs font-black text-[#013777] uppercase tracking-wider">
            {badgeIcon || <Sparkles className="w-4 h-4 text-[#013777]" />}
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#061a33] tracking-tight leading-tight">
            {title}{' '}
            {highlightedText && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#013777] via-[#0b5599] to-[#0284c7]">
                {highlightedText}
              </span>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#1e293b] font-medium leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>

        {/* Action Controls & Key Metrics */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-200/80">
          <div className="flex flex-wrap items-center gap-3">
            {onOpenWhatsAppBooking && (
              <button
                onClick={onOpenWhatsAppBooking}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm shadow-md shadow-[#25D366]/25 transition-all transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book via WhatsApp Now</span>
              </button>
            )}
            <a
              href={`tel:${HOSPITAL_CONTACT.phone1}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-[#092545] font-black text-sm shadow-xs transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#013777]" />
              <span>24/7 Desk: {HOSPITAL_CONTACT.phone1}</span>
            </a>
          </div>

          {stats && stats.length > 0 && (
            <div className="flex items-center gap-6 overflow-x-auto pb-1 sm:pb-0">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-[#013777]/30 pl-3">
                  <div className="text-xl sm:text-2xl font-black text-[#013777]">{stat.value}</div>
                  <div className="text-xs font-black text-slate-700 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
