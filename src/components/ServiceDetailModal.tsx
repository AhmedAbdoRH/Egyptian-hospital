import React, { useEffect } from 'react';
import {
  X,
  CheckCircle,
  MessageCircle,
  Clock,
  Sparkles,
  Stethoscope,
  Building2,
  Calendar,
} from 'lucide-react';
import { MedicalService } from '../types/hospital';
import { SERVICE_PAGE_CONTENT, ServicePageContent } from '../data/servicePageContent';
import { HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface ServiceDetailModalProps {
  service: MedicalService | null;
  onClose: () => void;
  onBookOnWhatsApp: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookOnWhatsApp,
}) => {
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const content: ServicePageContent | undefined =
    SERVICE_PAGE_CONTENT[service.id] ||
    SERVICE_PAGE_CONTENT[service.id.replace(/-/g, '')] ||
    Object.entries(SERVICE_PAGE_CONTENT).find(([k]) =>
      service.id.includes(k) || k.includes(service.id)
    )?.[1];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-[#011633]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-[#012f66] via-[#013777] to-[#08284d] text-white p-6 sm:p-7 relative shrink-0">
          <div className="absolute top-4 right-4 z-10">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2 max-w-[85%]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-sky-200 text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5 text-teal-300" />
              <span>{service.departmentLabel}</span>
            </div>
            <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {service.title}
            </h2>
            {content?.headline && (
              <p className="text-xs sm:text-sm text-sky-100 font-semibold leading-relaxed">
                {content.headline}
              </p>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-slate-800">
          {/* Paragraphs */}
          <div className="space-y-3 text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
            {content?.paragraphs && content.paragraphs.length > 0 ? (
              content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))
            ) : (
              <p>{service.description}</p>
            )}
          </div>

          {/* Sections from clinical PDF */}
          {content?.sections && content.sections.length > 0 && (
            <div className="space-y-5 pt-3 border-t border-slate-100">
              {content.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base sm:text-lg font-black text-[#092545] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#013777]" />
                    <span>{section.title}</span>
                  </h3>
                  {section.text && (
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {section.text}
                    </p>
                  )}
                  {section.items && (
                    <ul className="space-y-1.5 pl-1 pt-1">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1e293b]">
                          <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Key Capabilities */}
          {service.details && service.details.length > 0 && (
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#013777]">
                Key Clinical Procedures & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-xs font-medium text-slate-800"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Working Hours & Consultation Details */}
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-1">
              <div className="font-bold text-[#013777] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#013777]" />
                <span>Working Hours & Availability</span>
              </div>
              <p className="text-slate-600">
                {service.id === 'pharmacy'
                  ? 'Cairo Pharmacy: Mon – Sat: 10:00 AM – 6:00 PM (On-site hospital dispensary).'
                  : 'Outpatient Clinic: Mon – Sat: 10:00 AM – 6:00 PM (By Appointments only).'}
              </p>
            </div>
            {service.id !== 'pharmacy' ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-sky-200 text-sky-800 font-bold shrink-0 self-start sm:self-auto">
                <Calendar className="w-3 h-3 text-[#013777]" />
                By Appointment
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold shrink-0 self-start sm:self-auto">
                On-Site Dispensary
              </span>
            )}
          </div>

          {content?.closing && (
            <p className="text-xs sm:text-sm font-bold text-[#013777] pt-2">
              {content.closing}
            </p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Cairo Hospital & Rehabilitation Centre · Garki 2, Abuja
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBookOnWhatsApp(service.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
