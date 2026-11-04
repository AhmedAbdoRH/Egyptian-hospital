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
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Leaf,
  Microscope,
  Globe2,
  Info,
  Building,
} from 'lucide-react';
import { SubpageHero } from './SubpageHero';
import {
  MEDICAL_SERVICES,
  SERVICE_DEPARTMENTS,
  HOSPITAL_CONTACT,
  CLINIC_HOURS,
} from '../../data/cairoHospitalData';
import { MedicalService } from '../../types/hospital';
import { OrthobiologicsHighlight } from '../OrthobiologicsHighlight';
import { ServiceDetailModal } from '../ServiceDetailModal';
import { Reveal } from '../ScrollReveal';

interface ServicesSubpageProps {
  onNavigateHome: () => void;
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onOpenWhatsAppBooking: () => void;
  onNavigateTourism?: () => void;
}

export const ServicesSubpage: React.FC<ServicesSubpageProps> = ({
  onNavigateHome,
  onSelectServiceForBooking,
  onOpenWhatsAppBooking,
  onNavigateTourism,
}) => {
  const [activeDepartment, setActiveDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedModalService, setSelectedModalService] = useState<MedicalService | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ambulance':
        return <Ambulance className="w-6 h-6 text-indigo-600" />;
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
      case 'Building':
        return <Building className="w-6 h-6 text-blue-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      default:
        return <Activity className="w-6 h-6 text-[#013777]" />;
    }
  };

  const departmentTabs = [
    { id: 'all', label: `All Services (${MEDICAL_SERVICES.length})` },
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

  const serviceFaqs = [
    {
      q: 'What are the official clinic and department working hours?',
      a: 'Outpatient clinic: Monday – Saturday: 10:00 AM – 6:00 PM (strictly by appointments only). Cairo Pharmacy: Open 24 Hours daily. Laboratory Diagnostic testing: Monday – Saturday: 10:00 AM – 6:00 PM. Medical Tourism Desk: Monday – Saturday: 10:00 AM – 6:00 PM.',
    },
    {
      q: 'Does Cairo Hospital provide emergency or 24/7 acute trauma services?',
      a: 'No. Cairo Hospital operates scheduled outpatient clinics, inpatient admissions, and pharmacy services. We do not operate emergency resuscitation services. Patient ambulance transport is available strictly by advance scheduled arrangement without emergency resuscitation.',
    },
    {
      q: 'Do you offer non-surgical orthobiologic alternatives for joint arthritis?',
      a: 'Yes. Led by Consultant Orthopedic Surgeon Dr. Mohammed Hesham Shaker (CMD), Cairo Hospital offers Bone Marrow Aspirate Concentrate (BMAC), Platelet-Rich Plasma (PRP Injections), prolotherapy, and supportive BEMER therapy for musculoskeletal conditions.',
    },
    {
      q: 'How does Cairo Hospital coordinate international Medical Tourism?',
      a: 'Cairo Hospital coordinates medical referrals to top healthcare centers in Egypt, Dubai, the United Kingdom, and Turkey. The dedicated team assists with medical reports, visa guidance, tickets, accommodation, and continuous clinical follow-up at Cairo Hospital in Abuja after return.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Subpage Hero */}
      <SubpageHero
        badge="Multispecialty Directory"
        badgeIcon={<Activity className="w-4 h-4 text-[#013777]" />}
        title="Comprehensive Clinical Services"
        highlightedText="Under One Roof"
        description="From orthobiologics and arthroplasty to general surgery, physiotherapy, and medical tourism. Explore all medical departments, clinical scopes, and appointment schedules."
        breadcrumbs={[{ label: 'Services & Specialties' }]}
        onNavigateHome={onNavigateHome}
        onOpenWhatsAppBooking={onOpenWhatsAppBooking}
        stats={[
          { label: 'Services Listed', value: '22' },
          { label: 'Outpatient Clinic', value: '10 AM - 6 PM' },
          { label: 'Cairo Pharmacy', value: '24 Hours' },
          { label: 'Appointments', value: 'By Schedule' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Working Hours Notice Card */}
        <Reveal variant="up">
          <div className="p-6 sm:p-7 rounded-3xl bg-sky-50/80 border border-sky-200/80 text-sky-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xs">
            <div className="space-y-1.5 max-w-3xl">
              <div className="text-xs font-black uppercase tracking-wider text-[#013777] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#013777]" />
                <span>Working Hours & Clinical Notice</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                <strong>Outpatient Clinic:</strong> Mon – Sat: 10:00 AM – 6:00 PM (By Appointments only) ·{' '}
                <strong>Cairo Pharmacy:</strong> 24 Hours Open ·{' '}
                <strong>Laboratory:</strong> Mon – Sat: 10:00 AM – 6:00 PM ·{' '}
                <strong>Medical Tourism:</strong> Mon – Sat: 10:00 AM – 6:00 PM ·{' '}
                <span className="text-[#013777] font-semibold">Inpatient admissions available.</span> (No emergency services; ambulance by scheduled arrangement only).
              </p>
            </div>
            <button
              onClick={onOpenWhatsAppBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs shrink-0 cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Appointment</span>
            </button>
          </div>
        </Reveal>

        {/* Directory Controls: Search & Reordered Department Tabs */}
        <section className="space-y-6">
          <Reveal variant="up" className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-black text-[#092545] tracking-tight">
                Clinical Departments & Services
              </h2>

              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search service, procedure, doctor..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-[#092545] font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#013777] shadow-xs"
                />
              </div>
            </div>

            {/* Department Filter Tabs (Ordered with Orthobiologics First, Medical Tourism right after General Surgery) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {departmentTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDepartment(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeDepartment === tab.id
                      ? 'bg-[#013777] text-white shadow-md shadow-[#013777]/25 scale-102 font-black'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Department Groups Grid */}
          <div className="space-y-12 pt-2">
            {visibleDepartments.map((group) => (
              <div key={group.id} className="space-y-5">
                <Reveal variant="up">
                  <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-200">
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
                  {group.services.map((service, index) => (
                    <Reveal
                      key={`${activeDepartment}-${service.id}`}
                      variant="up"
                      delay={(index % 3) * 70}
                      className="h-full"
                    >
                      <div className="h-full glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between space-y-5 hover:border-[#013777]/30 transition-all duration-300">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs shrink-0">
                              {getServiceIcon(service.iconName)}
                            </div>
                            <span className="text-[11px] font-bold text-[#013777] text-right">
                              {service.departmentLabel}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-lg font-black text-[#092545] leading-snug">
                              {service.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed line-clamp-3">
                              {service.description}
                            </p>
                          </div>

                          {service.details && (
                            <div className="pt-2 space-y-1.5 border-t border-slate-100">
                              <div className="text-[11px] font-black text-[#013777] uppercase tracking-wider">
                                Key Clinical Capabilities:
                              </div>
                              <ul className="space-y-1">
                                {service.details.slice(0, 3).map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-xs text-[#1e293b] font-medium"
                                  >
                                    <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Interactive Buttons: See More (Full PDF Clinical Detail) & WhatsApp */}
                        <div className="pt-4 border-t border-slate-100 space-y-2">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setSelectedModalService(service)}
                              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#013777] font-bold text-xs transition-colors cursor-pointer"
                            >
                              <Info className="w-3.5 h-3.5" />
                              <span>See More</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => onSelectServiceForBooking(service.title)}
                              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs shadow-xs transition-colors cursor-pointer"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-current" />
                              <span>Book Appt</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {visibleDepartments.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 space-y-3">
              <Search className="w-8 h-8 text-slate-400 mx-auto" />
              <div className="text-base font-bold text-[#092545]">
                No clinical specialties matched “{searchQuery}”
              </div>
              <p className="text-xs text-slate-500">
                Try searching for orthobiologics, physiotherapy, surgery, medical tourism, or pharmacy.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveDepartment('all');
                }}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#013777] text-white text-xs font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Featured Orthobiologics Highlight */}
        <OrthobiologicsHighlight
          onOpenWhatsAppBooking={() =>
            onSelectServiceForBooking('Orthobiologics (Stem Cells Regenerative Therapy)')
          }
        />

        {/* Clinical FAQs */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-[#092545]">
              Frequently Asked Questions About Our Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Key guidance for patients, appointments, and hospital schedules.
            </p>
          </div>

          <div className="space-y-3">
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#092545] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#013777] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Service Detail Modal (See More) */}
      <ServiceDetailModal
        service={selectedModalService}
        onClose={() => setSelectedModalService(null)}
        onBookOnWhatsApp={onSelectServiceForBooking}
      />
    </div>
  );
};
