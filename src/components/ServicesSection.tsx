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
  Stethoscope,
  Leaf,
  Microscope,
  Globe2,
} from 'lucide-react';
import { MEDICAL_SERVICES, SERVICE_DEPARTMENTS } from '../data/cairoHospitalData';
import { MedicalService } from '../types/hospital';
import { Reveal } from './ScrollReveal';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [activeDepartment, setActiveDepartment] = useState<string>('all');
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
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#013777]" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-600" />;
      case 'Scan':
        return <Scan className="w-6 h-6 text-teal-600" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-sky-600" />;
      case 'Pill':
        return <Pill className="w-6 h-6 text-purple-600" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#013777]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      default:
        return <Activity className="w-6 h-6 text-[#013777]" />;
    }
  };

  const departmentTabs = [
    { id: 'all', label: 'All Services' },
    ...SERVICE_DEPARTMENTS.map((dept) => ({
      id: dept.id,
      label: dept.shortLabel,
    })),
  ];

  const matchesQuery = (srv: MedicalService) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      srv.title.toLowerCase().includes(q) ||
      srv.departmentLabel.toLowerCase().includes(q) ||
      srv.description.toLowerCase().includes(q)
    );
  };

  const visibleDepartments = SERVICE_DEPARTMENTS.filter(
    (dept) => activeDepartment === 'all' || dept.id === activeDepartment
  )
    .map((dept, deptIdx) => ({
      ...dept,
      orderIndex: SERVICE_DEPARTMENTS.findIndex((d) => d.id === dept.id) + 1 || deptIdx + 1,
      services: MEDICAL_SERVICES.filter(
        (srv) => srv.departmentId === dept.id && matchesQuery(srv)
      ),
    }))
    .filter((group) => group.services.length > 0);

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
              Our Medical Services & Specialties
            </h2>
            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              From orthopedic surgery, stem cell orthobiologics, and physiotherapy to obstetrics & gynaecology, minimally invasive surgeries, diagnostics, and medical tourism.
            </p>
          </div>
        </Reveal>

        {/* Search & Department Filter Tabs */}
        <Reveal variant="up" delay={100}>
          <div className="max-w-5xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by service, department, or procedure..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-[#092545] font-semibold placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#013777] shadow-sm"
              />
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
              {departmentTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDepartment(tab.id)}
                  className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    activeDepartment === tab.id
                      ? 'bg-[#013777] text-white shadow-md shadow-[#013777]/25 font-black scale-102'
                      : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:text-[#013777]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Ordered Department Groups */}
        <div className="space-y-12">
          {visibleDepartments.map((group) => (
            <div key={group.id} className="space-y-5">
              <Reveal variant="up">
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-200/90">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-xs font-black text-[#013777] tabular-nums">
                      0{group.orderIndex}.
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#061a33] tracking-tight">
                      {group.label}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 tabular-nums">
                    {group.services.length}{' '}
                    {group.services.length === 1 ? 'Service' : 'Services'}
                  </span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.services.map((service, idx) => (
                  <Reveal
                    key={`${activeDepartment}-${service.id}`}
                    variant="up"
                    delay={(idx % 3) * 80}
                    className="h-full"
                  >
                    <div className="h-full glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-5">
                      <div className="space-y-4">
                        {/* Icon & Department Kicker */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                            {getServiceIcon(service.iconName)}
                          </div>
                          <span className="text-[11px] font-bold text-[#013777] text-right">
                            {service.departmentLabel}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h4 className="text-lg font-black text-[#092545] leading-snug">
                            {service.title}
                          </h4>
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
                          className="w-full glass-button-whatsapp py-2.5 px-4 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 hover:brightness-105 transition-all cursor-pointer shadow-md"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span className="truncate">Book {service.title}</span>
                        </button>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          {visibleDepartments.length === 0 && (
            <div className="p-10 text-center rounded-3xl bg-white border border-slate-200 space-y-3">
              <div className="text-base font-bold text-[#092545]">
                No services matched “{searchQuery}”
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveDepartment('all');
                }}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-[#013777] text-white text-xs font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
