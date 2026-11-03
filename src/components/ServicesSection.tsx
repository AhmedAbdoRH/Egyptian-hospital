import React from 'react';
import {
  Activity,
  Ambulance,
  Bone,
  Dna,
  Footprints,
  Baby,
  Globe2,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from './ScrollReveal';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onNavigateServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  onNavigateServices,
}) => {
  // Top 6 most important services for homepage highlight
  const highlightServices = [
    {
      icon: <Bone className="w-6 h-6 text-[#013777]" />,
      title: 'Orthopedic Surgery',
      description: 'Advanced surgical treatments for bones, joints, and musculoskeletal conditions.',
    },
    {
      icon: <Dna className="w-6 h-6 text-teal-600" />,
      title: 'Orthobiologics (Stem Cells)',
      description: 'Regenerative therapy using stem cells, PRP, and advanced biologics.',
    },
    {
      icon: <Ambulance className="w-6 h-6 text-rose-600" />,
      title: 'Emergency Services',
      description: '24/7 emergency care and ambulance services for urgent medical needs.',
    },
    {
      icon: <Footprints className="w-6 h-6 text-emerald-600" />,
      title: 'Physiotherapy & Rehabilitation',
      description: 'Comprehensive physical therapy and rehabilitation programs.',
    },
    {
      icon: <Baby className="w-6 h-6 text-pink-600" />,
      title: 'Obstetrics & Gynaecology',
      description: 'Complete women\'s health services including prenatal and postnatal care.',
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#013777]" />,
      title: 'Medical Tourism',
      description: 'International patient services with visa, accommodation, and care coordination.',
    },
  ];

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
              From orthopedics and regenerative medicine to emergency care and medical tourism—explore our comprehensive range of specialized services.
            </p>
          </div>
        </Reveal>

        {/* Top 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {highlightServices.map((service, idx) => (
            <Reveal key={service.title} variant="up" delay={idx * 80}>
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-black text-[#092545] leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA: View All Services Button */}
        <Reveal variant="up" delay={480}>
          <div className="text-center pt-4">
            <button
              onClick={onNavigateServices}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0284c7] text-white font-bold text-sm hover:shadow-2xl hover:shadow-[#013777]/30 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Activity className="w-5 h-5" />
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
