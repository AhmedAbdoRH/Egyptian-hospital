import React, { useState } from 'react';
import {
  Activity,
  Ambulance,
  Bone,
  Dna,
  Zap,
  Footprints,
  Baby,
  Scissors,
  HeartPulse,
  Users,
  Scan,
  Pill,
  CheckCircle,
  MessageCircle,
  Search,
  Sparkles,
} from 'lucide-react';
import { MEDICAL_SERVICES } from '../data/cairoHospitalData';
import { MedicalService } from '../types/hospital';
import { Reveal } from './ScrollReveal';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ambulance':
        return <Ambulance className="w-6 h-6 text-rose-600" />;
      case 'Bone':
        return <Bone className="w-6 h-6 text-[#013777]" />;
      case 'Dna':
        return <Dna className="w-6 h-6 text-teal-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-600" />;
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-emerald-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-blue-600" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-pink-600" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-indigo-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-red-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-600" />;
      case 'Scan':
        return <Scan className="w-6 h-6 text-teal-600" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-purple-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      default:
        return <Activity className="w-6 h-6 text-[#013777]" />;
    }
  };

  const categories = [
    { id: 'all', label: `All ${MEDICAL_SERVICES.length} Specialties` },
    { id: 'surgical', label: 'Surgeries & Orthopedics' },
    { id: 'regenerative', label: 'Orthobiologics & Rehab' },
    { id: 'clinical', label: 'Clinical Medicine' },
    { id: 'diagnostic', label: 'Diagnostics & Lab' },
    { id: 'support', label: 'Pharmacy & Support' },
  ];

  const filteredServices = MEDICAL_SERVICES.filter((srv) => {
    const matchesCategory = activeCategory === 'all' || srv.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="ambient-glow-cyan top-40 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10 sm:space-y-14">
        {/* Section Header */}
        <Reveal variant="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#013777] uppercase tracking-wider">
              <Activity className="w-4 h-4 text-[#013777]" />
              <span>Comprehensive Tertiary Healthcare</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#092545] tracking-tight">
              Our Medical Specialties & Centers
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              From emergency trauma triage and complex joint reconstructions to non-surgical orthobiologics and dedicated maternal-fetal suites, Cairo Hospital offers complete specialized care in Abuja.
            </p>
          </div>
        </Reveal>

        {/* Search & Category Filter Pills */}
        <Reveal variant="up" delay={100}>
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by specialty, surgery, or clinical condition..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-[#092545] font-semibold placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] shadow-sm"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#013777] text-white shadow-md shadow-[#013777]/25 font-black scale-102'
                      : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:text-[#013777]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <Reveal
              key={`${activeCategory}-${service.id}`}
              variant="up"
              delay={(idx % 3) * 85}
              className="h-full"
            >
              <div className="h-full glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#013777] px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-300">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-black text-[#092545] group-hover:text-[#013777] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#1e293b] font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  {service.details && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-[#0f172a] font-semibold">
                      {service.details.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#013777] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="w-full glass-button-whatsapp py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 hover:brightness-105 transition-all cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Book {service.title.split(' ')[0]} on WhatsApp</span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
