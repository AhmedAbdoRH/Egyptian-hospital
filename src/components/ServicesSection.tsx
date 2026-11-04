import React, { useState } from 'react';
import {
  Activity,
  Bone,
  Dna,
  Footprints,
  Baby,
  Globe2,
  ArrowRight,
  Pill,
  Scissors,
  Info,
} from 'lucide-react';
import { Reveal } from './ScrollReveal';
import { ServiceDetailModal } from './ServiceDetailModal';
import { MEDICAL_SERVICES } from '../data/cairoHospitalData';
import { MedicalService } from '../types/hospital';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onNavigateServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  onNavigateServices,
}) => {
  const [selectedService, setSelectedService] = useState<MedicalService | null>(null);

  // Top services for homepage highlight, ordered with Orthobiologics top, no emergency card, and Cairo Pharmacy
  const highlightServices = [
    {
      id: 'orthobiologics-bmac',
      icon: <Dna className="w-6 h-6 text-teal-600" />,
      title: 'Orthobiologics & Stem Cells',
      description: 'Regenerative therapy using autologous BMAC, PRP injections, and cellular therapy for joint healing.',
    },
    {
      id: 'orthopedic-surgery',
      icon: <Bone className="w-6 h-6 text-[#013777]" />,
      title: 'Orthopedic Surgery & Arthroplasty',
      description: 'Advanced joint replacements (knee & hip), complex trauma reconstruction, and microsurgical hand care.',
    },
    {
      id: 'physiotherapy',
      icon: <Footprints className="w-6 h-6 text-emerald-600" />,
      title: 'Physiotherapy & Rehabilitation',
      description: 'Comprehensive physical therapy, kinetic rehabilitation, cupping, acupuncture, and spinal decompression.',
    },
    {
      id: 'general-surgery',
      icon: <Scissors className="w-6 h-6 text-indigo-600" />,
      title: 'General & Laparoscopic Surgery',
      description: 'Sterile surgical suites, minimally invasive laparoscopic appendectomy, gallbladder, and hernia procedures.',
    },
    {
      id: 'medical-tourism',
      icon: <Globe2 className="w-6 h-6 text-[#013777]" />,
      title: 'Medical Tourism Desk',
      description: 'Cross-border patient coordination to Egypt, Dubai, UK, and Turkey with visa, tickets, and follow-up in Abuja.',
    },
    {
      id: 'pharmacy',
      icon: <Pill className="w-6 h-6 text-purple-600" />,
      title: 'Cairo Pharmacy',
      description: 'On-site dispensary within Cairo Hospital, stocking genuine Egyptian and international approved medications.',
    },
  ];

  const handleOpenDetail = (serviceId: string) => {
    const fullService =
      MEDICAL_SERVICES.find((s) => s.id === serviceId) ||
      MEDICAL_SERVICES.find((s) => s.id.includes(serviceId)) || {
        id: serviceId,
        title: highlightServices.find((s) => s.id === serviceId)?.title || 'Service Details',
        departmentId: 'orthobiologics',
        departmentLabel: 'Clinical Department',
        category: 'clinical',
        description: highlightServices.find((s) => s.id === serviceId)?.description || '',
        iconName: 'Activity',
      };
    setSelectedService(fullService as MedicalService);
  };

  return (
    <section id="services" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-cyan top-40 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Activity className="w-4 h-4 text-[#013777]" />
              <span>Comprehensive Tertiary Healthcare</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              Our Medical Services & Specialties
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              From orthobiologics and arthroplasty to general surgery, physiotherapy, and medical tourism—explore our comprehensive range of specialized care.
            </p>
          </div>
        </Reveal>

        {/* Top 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {highlightServices.map((service, idx) => (
            <Reveal key={service.title} variant="up" delay={idx * 70}>
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                      {service.icon}
                    </div>
                    <span className="text-[11px] font-bold text-[#013777] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      By Appointment
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-[#092545] leading-snug mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#334155] leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Actions: See More and Book Consultation */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(service.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#013777] font-bold text-xs transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>See More</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Book WhatsApp</span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA: View All Services Button */}
        <Reveal variant="up" delay={420}>
          <div className="text-center pt-2">
            <button
              onClick={onNavigateServices}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0284c7] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#013777]/30 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              <Activity className="w-5 h-5" />
              <span>Explore All 22+ Services & Clinics</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Service Detail Modal (See More) */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookOnWhatsApp={onSelectServiceForBooking}
      />
    </section>
  );
};
