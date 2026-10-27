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
} from 'lucide-react';
import { SubpageHero } from './SubpageHero';
import {
  MEDICAL_SERVICES,
  SERVICE_DEPARTMENTS,
  HOSPITAL_CONTACT,
} from '../../data/cairoHospitalData';
import { MedicalService } from '../../types/hospital';
import { OrthobiologicsHighlight } from '../OrthobiologicsHighlight';
import { MedicalTourism } from '../MedicalTourism';
import { Reveal } from '../ScrollReveal';

interface ServicesSubpageProps {
  onNavigateHome: () => void;
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onOpenWhatsAppBooking: () => void;
}

export const ServicesSubpage: React.FC<ServicesSubpageProps> = ({
  onNavigateHome,
  onSelectServiceForBooking,
  onOpenWhatsAppBooking,
}) => {
  const [activeDepartment, setActiveDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  const totalMatchingCount = visibleDepartments.reduce(
    (sum, g) => sum + g.services.length,
    0
  );

  const clinicalPathway = [
    {
      step: '01',
      title: 'Triage & Specialist Consultation',
      desc: 'Rapid intake by medical officers followed by in-depth evaluation with Royal College & Ain Shams specialist consultants.',
    },
    {
      step: '02',
      title: 'High-Resolution Diagnostics',
      desc: 'Digital X-ray imaging, 2D/3D ultrasonography, and rapid clinical lab panels performed on-site within minutes.',
    },
    {
      step: '03',
      title: 'Tailored Intervention Protocol',
      desc: 'Formulation of targeted surgical interventions, regenerative orthobiologic cell therapy, or focused medical management.',
    },
    {
      step: '04',
      title: 'Kinetic Rehabilitation & Follow-up',
      desc: 'Structured physiotherapy in our Cairo Rehabilitation Centre gym, continuous follow-up, and dedicated WhatsApp patient support.',
    },
  ];

  const serviceFaqs = [
    {
      q: 'How quickly can I book a specialist consultation?',
      a: 'Through our dedicated WhatsApp booking desk, appointments are scheduled within minutes for either same-day emergency reviews or preferred specialist consultation clinic days.',
    },
    {
      q: 'Do you offer non-surgical alternatives for knee and joint arthritis?',
      a: 'Yes. Our advanced Orthobiologics unit provides Stem Cell Regenerative Therapy, Bone Marrow Aspirate Concentrate (BMAC), Platelet-Rich Plasma (PRP), and Prolotherapy injections designed to regenerate cartilage and defer or prevent joint replacement.',
    },
    {
      q: 'What should I bring for my first medical consultation?',
      a: 'Please bring any prior MRI/X-ray films, lab results, current medication lists, and your national ID or HMO card if enrolled under a partner health maintenance organization.',
    },
    {
      q: 'How does Cairo Hospital facilitate medical tourism to Egypt?',
      a: 'Under the coordination of our Medical Tourism office and Rahma Travel Agency, we arrange complete overseas clinical referrals to premier teaching hospitals and specialty centers in Cairo and worldwide, managing medical visas, travel, and follow-up back in Abuja.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Subpage Hero */}
      <SubpageHero
        badge="Tertiary Healthcare Directory"
        badgeIcon={<Activity className="w-4 h-4 text-[#013777]" />}
        title="Comprehensive Medical Services,"
        highlightedText="Pioneering Care in Abuja."
        description="Explore our full directory of clinical specialties—ordered from Orthopedics, Orthobiologics, and Physiotherapy to Obstetrics & Gynaecology, General Surgery, Family & Herbal Medicine, Diagnostics, and Medical Tourism."
        breadcrumbs={[{ label: 'Services & Specialties' }]}
        onNavigateHome={onNavigateHome}
        onOpenWhatsAppBooking={onOpenWhatsAppBooking}
        stats={[
          { label: 'Medical Specialties', value: '22+' },
          { label: 'Emergency & Ambulance', value: '24/7' },
          { label: 'Diagnostic Lab', value: '100% In-House' },
          { label: 'Consultant Ratio', value: '100% Senior' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Search & Department Filter Navigation */}
        <section className="space-y-8">
          <Reveal variant="up" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black text-[#092545]">
                  Specialized Clinical Departments & Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 font-bold tabular-nums">
                  Showing {totalMatchingCount} of {MEDICAL_SERVICES.length} hospital services
                </p>
              </div>

              {/* Live Search Input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search specialty, surgery, symptom..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-300 text-xs sm:text-sm text-[#092545] font-semibold placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#013777] shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Interactive Department Tabs */}
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
          </Reveal>

          {/* Ordered Department Groups */}
          <div className="space-y-12 pt-2">
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
                  {group.services.map((service, index) => {
                    const isExpanded = expandedCardId === service.id;
                    return (
                      <Reveal
                        key={`${activeDepartment}-${service.id}`}
                        variant="up"
                        delay={(index % 3) * 70}
                        className="h-full"
                      >
                        <div className="h-full glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between space-y-5 hover:border-[#013777]/30 transition-all duration-300">
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
                                  {service.details
                                    .slice(0, isExpanded ? service.details.length : 3)
                                    .map((detail, idx) => (
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

                          <div className="pt-4 border-t border-slate-100 space-y-2">
                            <button
                              onClick={() => onSelectServiceForBooking(service.title)}
                              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs shadow-xs transition-colors cursor-pointer"
                            >
                              <MessageCircle className="w-4 h-4 fill-current" />
                              <span>Book Consultation on WhatsApp</span>
                            </button>

                            {service.details && service.details.length > 3 && (
                              <button
                                onClick={() =>
                                  setExpandedCardId(isExpanded ? null : service.id)
                                }
                                className="w-full text-center text-[11px] font-bold text-[#013777] hover:underline cursor-pointer py-1"
                              >
                                {isExpanded
                                  ? 'Show Less'
                                  : `View All Capabilities (${service.details.length})`}
                              </button>
                            )}
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
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
                Try searching for orthopedic, physiotherapy, obstetrics, surgery, or lab.
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

        {/* Featured Orthobiologics Breakthrough Component */}
        <OrthobiologicsHighlight
          onOpenWhatsAppBooking={() =>
            onSelectServiceForBooking(
              'Orthobiologics (Stem Cells Regenerative Therapy)'
            )
          }
        />

        {/* The 4-Step Clinical Care Pathway */}
        <section className="space-y-10">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              The Patient Experience
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Our 4-Step Clinical Care Pathway
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              From triage to long-term kinetic mobility, your treatment is coordinated seamlessly by our multidisciplinary medical faculty.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalPathway.map((path, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 75} className="h-full">
                <div className="h-full glass-panel p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm space-y-3 relative group hover:border-[#013777]/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-300 text-[#013777] flex items-center justify-center font-black text-lg tabular-nums">
                    {path.step}
                  </div>
                  <h3 className="text-base font-black text-[#092545]">{path.title}</h3>
                  <p className="text-xs text-[#1e293b] font-medium leading-relaxed">{path.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Medical Tourism Overseas Coordination Section */}
        <MedicalTourism
          onOpenWhatsAppBooking={() => onSelectServiceForBooking('Medical Tourism')}
        />

        {/* Services FAQ Accordion */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <Reveal variant="up" className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Clinical Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#092545] tracking-tight">
              Frequently Asked Clinical Questions
            </h2>
          </Reveal>

          <div className="space-y-3">
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <Reveal key={idx} variant="up" delay={idx * 65}>
                  <div className="glass-panel rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs transition-all">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-sm text-[#092545] hover:text-[#013777] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#013777] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Direct WhatsApp Call to Action Banner */}
        <Reveal variant="scale">
          <section className="contrast-dark relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#012654] via-[#013777] to-[#044a9e] p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-sky-300">
                Immediate Clinical Support
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight !text-[#fdc33e]">
                Need Help Deciding Which Specialty Is Right for You?
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-2xl">
                Connect directly with our clinical triage desk on WhatsApp. Share your symptoms or existing reports, and we will route you to the appropriate consultant immediately.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenWhatsAppBooking}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-[#25D366]/30 transition-all transform active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat with Clinical Desk on WhatsApp</span>
                </button>
                <a
                  href={`tel:${HOSPITAL_CONTACT.phone1}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  <Activity className="w-4 h-4 text-sky-300" />
                  <span>Call Emergency Triage: {HOSPITAL_CONTACT.phone1}</span>
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};
