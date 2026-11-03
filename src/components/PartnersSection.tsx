import React from 'react';
import { ShieldCheck, Building2, MessageCircle } from 'lucide-react';
import { ACCREDITATIONS_DATA } from '../data/cairoHospitalData';
import { Reveal } from './ScrollReveal';

interface PartnersSectionProps {
  onOpenWhatsAppBooking: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onOpenWhatsAppBooking,
}) => {
  const accreditations = ACCREDITATIONS_DATA.filter((item) => item.type === 'accreditation');
  const enrolled = ACCREDITATIONS_DATA.filter((item) => item.type === 'enrolled');

  const groups = [
    { title: 'Accreditation', note: 'Listed under “Accreditation” in the supplied profile', items: accreditations },
    { title: 'Enrolled Organisations', note: 'Listed under “Enrolled Organisations” in the supplied profile', items: enrolled },
  ];

  return (
    <section id="accreditations" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-navy top-20 left-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10">
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#013777]" />
              <span>Institutional Listings</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              Accreditations & Enrolled Organisations
            </h2>
            <p className="text-sm sm:text-base text-[#2d435e] leading-relaxed">
              Names and categories are reproduced from the supplied hospital profile. This list does not imply a commercial partnership or guarantee of service availability.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {groups.map((group, index) => (
            <Reveal key={group.title} variant={index === 0 ? 'left' : 'right'} delay={index * 100} className="h-full">
              <div className="h-full glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/90 shadow-sm space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 text-[#013777] border border-sky-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#092545]">{group.title}</h3>
                    <p className="text-xs text-[#2d435e] font-medium">{group.note}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                      <div className="text-sm font-black text-[#013777]">{item.name}</div>
                      <p className="text-xs text-[#2d435e] mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={120} className="text-center">
          <button
            onClick={onOpenWhatsAppBooking}
            className="glass-button-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask About an Appointment</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
};
