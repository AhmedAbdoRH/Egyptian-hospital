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
} from 'lucide-react';
import { MEDICAL_SERVICES } from '../data/cairoHospitalData';
import { MedicalService } from '../types/hospital';

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
        return <Ambulance className="w-6 h-6 text-rose-400" />;
      case 'Bone':
        return <Bone className="w-6 h-6 text-sky-400" />;
      case 'Dna':
        return <Dna className="w-6 h-6 text-teal-300" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-emerald-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-blue-400" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-pink-400" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-indigo-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-red-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      case 'Scan':
        return <Scan className="w-6 h-6 text-teal-400" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-purple-400" />;
      default:
        return <Activity className="w-6 h-6 text-sky-400" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Specialties (22)' },
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
    <section id="services" className="py-24 relative overflow-hidden bg-slate-900/90 border-t border-white/10">
      <div className="ambient-glow-cyan top-40 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Activity className="w-4 h-4 text-sky-400" />
            <span>Comprehensive Tertiary Care</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Medical Services & Specialties
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From 24/7 trauma triage and complex orthopedic reconstructions to non-surgical orthobiologics and dedicated maternal-fetal suites, Cairo Hospital offers complete specialized care in Abuja.
          </p>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by specialty, surgery, or medical condition..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-panel text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border border-white/15"
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
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/25 font-black'
                    : 'glass-panel text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 glass-panel-hover flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20">
                    {service.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bullet Points */}
                {service.details && (
                  <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-slate-400">
                    {service.details.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Action */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="w-full glass-button-whatsapp py-2.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
