import React, { useState } from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Activity,
  History,
  Target,
  Award,
  Users,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  FileCheck2,
  Clock,
  MapPin,
  ChevronRight,
  Eye,
  Microscope,
  Cpu,
} from 'lucide-react';
import { SubpageHero } from './SubpageHero';
import { PILLARS_OF_CARE, HOSPITAL_CONTACT, TEAM_MEMBERS } from '../../data/cairoHospitalData';
import { FacilityGallery } from '../FacilityGallery';
import { Reveal } from '../ScrollReveal';

interface AboutSubpageProps {
  onNavigateHome: () => void;
  onOpenWhatsAppBooking: (doctorName?: string) => void;
  onNavigateServices: () => void;
  onNavigateTeam: () => void;
}

export const AboutSubpage: React.FC<AboutSubpageProps> = ({
  onNavigateHome,
  onOpenWhatsAppBooking,
  onNavigateServices,
  onNavigateTeam,
}) => {
  const [activePillar, setActivePillar] = useState(0);

  const chairmanDirector =
    TEAM_MEMBERS.find((m) => m.id === 'dr-ahmed-shaker') || TEAM_MEMBERS[0];

  const timelineMilestones = [
    {
      year: '1970',
      title: 'Dr. Ahmed Shaker Begins Work in Nigeria',
      subtitle: 'Healthcare Leadership & NEPA Medical Director',
      description:
        'Dr. Ahmed Shaker worked in Nigeria from 1970. The profile names him NEPA Medical Director from 1970 to 1991 and separately notes that he managed more than 130 hospitals in the government and private sectors. It also lists his later roles at AGUDA Hospital in Lagos, Weaner Hospital in Abuja, and Katameya Hospital until 2019.',
      tag: 'Chairman’s Experience',
      highlight: 'More than 130 Hospitals Managed',
    },
    {
      year: '2019',
      title: 'Inception of Cairo Hospital Abuja',
      subtitle: 'Cairo Rehabilitation Centre (CRC)',
      description:
        'Cairo Hospital was established in Abuja by a group of Egyptian doctors and administrators. It began as an outpatient orthopedics and physiotherapy centre with a fully equipped laboratory and digital X-ray.',
      tag: 'Abuja Inception',
      highlight: 'First Egyptian Hospital in Abuja',
    },
    {
      year: '2021',
      title: 'Hospital Expansion',
      subtitle: 'Surgery Room, Inpatient Department & Pharmacy',
      description:
        'The hospital expanded its specialties and added a fully equipped surgery room, an inpatient department, and a pharmacy department.',
      tag: 'Hospital Expansion',
      highlight: 'Surgery, Inpatient & Pharmacy',
    },
    {
      year: 'Today',
      title: 'Regional Orthobiologics & Multi-Specialties Hub',
      subtitle: 'Pioneering Regenerative Medicine in West Africa',
      description:
        'The current profile lists outpatient clinics, cardiology, neurology, nephrology, gastroenterology, endocrinology, family and tropical medicine, surgery, rehabilitation, diagnostics, pharmacy, and medical tourism.',
      tag: 'Current Services',
      highlight: 'Multispecialty Hospital Profile',
    },
  ];

  const clinicalStandards = [
    {
      title: 'Fully Equipped Laboratory',
      desc: 'A fully equipped laboratory supported the outpatient services described in the hospital profile.',
      icon: <Microscope className="w-5 h-5 text-[#013777]" />,
    },
    {
      title: 'Digital X-Ray',
      desc: 'Digital X-ray is listed among the diagnostic services at Cairo Hospital.',
      icon: <Building2 className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Surgery, Inpatient & Pharmacy',
      desc: 'The 2021 expansion added a fully equipped surgery room, an inpatient department, and a pharmacy department.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Multispecialty Clinics',
      desc: 'The profile lists cardiology, neurology, nephrology, gastroenterology, endocrinology, family medicine, and tropical medicine.',
      icon: <Users className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Subpage Hero */}
      <SubpageHero
        badge="Hospital Heritage & Clinical Leadership"
        badgeIcon={<History className="w-4 h-4 text-[#013777]" />}
        title="Decades of Medical Distinction,"
        highlightedText="Rooted in Abuja."
        description="Established in Abuja in 2019 by a group of Egyptian doctors and an administrative team, Cairo Hospital began as an outpatient orthopedics and physical rehabilitation clinic. Its 2021 expansion added more specialties, a fully equipped surgery room, an inpatient department, and a pharmacy."
        breadcrumbs={[{ label: 'About Us' }]}
        onNavigateHome={onNavigateHome}
        onOpenWhatsAppBooking={() => onOpenWhatsAppBooking()}
        stats={[
          { label: 'Chairman’s Experience', value: 'Since 1970' },
          { label: 'Hospital Founded', value: '2019' },
          { label: 'Services Listed', value: '22' },
          { label: 'Cairo Pharmacy', value: 'Mon - Sat' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Executive Statement & Institutional Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <Reveal variant="left" className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
                Institutional Mission & Vision
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
                Empowering Health Through Precision, Compassion, and Integrity
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Cairo Hospital was established in Abuja in 2019 by a group of Egyptian doctors and an administrative team. It began as an outpatient orthopedics and physical rehabilitation clinic, with a fully equipped laboratory diagnostic department and digital X-ray.
            </p>

            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              In 2021, Cairo Centre expanded its specialties and added a fully equipped surgery room, an inpatient department, and a pharmacy department. The supplied profile also lists outpatient clinics, emergency and ambulance services, orthobiologics, specialist clinics, diagnostics, and medical tourism.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onNavigateServices}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#013777] hover:bg-[#092545] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Explore Our Medical Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateTeam}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 text-[#092545] font-black text-sm transition-colors cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#013777]" />
                <span>Meet Medical Leadership</span>
              </button>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100} className="lg:col-span-5">
            <div className="glass-panel-dark contrast-dark rounded-3xl border border-[#fdc33e]/40 shadow-2xl bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />

              <div className="p-6 sm:p-8 space-y-6">
                {/* Chairman Header Label */}
                <div className="flex items-center justify-between gap-2 text-xs font-bold !text-[#fdc33e] tracking-wide">
                  <span>Chairman of Cairo Hospital</span>
                  <ShieldCheck className="w-4 h-4 !text-[#fdc33e] shrink-0" />
                </div>

                {/* Portrait + Identity */}
                <div className="flex items-center gap-4">
                  <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#fdc33e]/65 bg-[#061a33] shadow-xl shrink-0">
                    <img
                      src={chairmanDirector.image}
                      alt={chairmanDirector.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold !text-[#fdc33e]">
                      MRCOG · Ain Shams University
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black !text-white leading-tight">
                      {chairmanDirector.name}
                    </h4>
                    <p className="text-xs !text-[#bae6fd] font-medium leading-snug">
                      {chairmanDirector.title}
                    </p>
                  </div>
                </div>

                {/* Hospital motive as stated in the profile */}
                <blockquote className="py-4 border-y border-white/15 text-xs sm:text-sm !text-sky-100 font-medium italic leading-relaxed">
                  “Solving health challenges across Nigeria and West Africa through accurate diagnosis and prompt treatment.”
                </blockquote>

                {/* Key Tabular Highlights */}
                <div className="grid grid-cols-3 gap-3 divide-x divide-white/15">
                  <div>
                    <div className="text-base font-black !text-[#fdc33e] tabular-nums">
                      1970
                    </div>
                    <div className="text-[11px] !text-sky-100 font-medium">
                      Work in Nigeria since 1970
                    </div>
                  </div>
                  <div className="pl-3">
                    <div className="text-base font-black !text-[#fdc33e] tabular-nums">
                      130+
                    </div>
                    <div className="text-[11px] !text-sky-100 font-medium">
                      Hospitals Managed
                    </div>
                  </div>
                  <div className="pl-3">
                    <div className="text-base font-black !text-[#fdc33e] tabular-nums">
                      MRCOG
                    </div>
                    <div className="text-[11px] !text-sky-100 font-medium">
                      Royal College
                    </div>
                  </div>
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onOpenWhatsAppBooking(chairmanDirector.name)}
                    className="flex-1 glass-button-whatsapp py-2.5 px-4 rounded-xl text-white font-extrabold text-xs inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Consult Dr. Ahmed Shaker</span>
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateTeam}
                    className="py-2.5 px-4 rounded-xl bg-white/12 hover:bg-white/20 border border-white/20 !text-white font-bold text-xs inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Medical Team</span>
                    <ChevronRight className="w-3.5 h-3.5 !text-[#fdc33e]" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Interactive Founding Timeline */}
        <section className="space-y-10">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Historical Evolution
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              A Timeline of Continuous Clinical Growth
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              Trace Dr. Ahmed Shaker’s medical work in Nigeria from 1970, Cairo Hospital’s establishment in 2019, and the expansion described in the hospital profile.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineMilestones.map((milestone, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 75} className="h-full">
                <div className="h-full glass-panel p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#013777]/30 transition-all duration-300 relative group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-[#013777] tracking-tight">
                        {milestone.year}
                      </span>
                      <span className="text-[10px] font-black text-slate-800 uppercase tracking-wider bg-slate-200 px-2.5 py-1 rounded-lg">
                        {milestone.tag}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-black text-[#092545] leading-snug">
                        {milestone.title}
                      </h3>
                      <div className="text-xs font-black text-[#013777]">
                        {milestone.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-[#1e293b] font-medium leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-black text-[#013777]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{milestone.highlight}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The 4 Pillars of Clinical Practice */}
        <section className="space-y-10">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              The Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Our 4 Pillars of Patient Care
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              Every clinical decision at Cairo Hospital is anchored in four uncompromising values.
            </p>
          </Reveal>

          {/* Interactive Pillar Selector */}
          <Reveal variant="up" delay={60} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {PILLARS_OF_CARE.map((pillar, idx) => (
              <button
                key={idx}
                onClick={() => setActivePillar(idx)}
                className={`py-3 px-4 rounded-2xl text-xs font-black tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activePillar === idx
                    ? 'bg-[#013777] text-white shadow-md shadow-[#013777]/25 scale-102'
                    : 'bg-white border border-slate-300 text-[#092545] hover:bg-slate-50'
                }`}
              >
                <span>{pillar.title}</span>
              </button>
            ))}
          </Reveal>

          {/* Active Pillar Deep Dive */}
          <Reveal variant="scale" delay={110}>
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200/90 bg-white shadow-lg max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-300 text-[#013777] flex items-center justify-center font-black text-2xl">
                  0{activePillar + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#092545]">
                    Pillar: {PILLARS_OF_CARE[activePillar].title}
                  </h3>
                  <p className="text-xs font-bold text-[#013777]">Cairo Hospital Abuja Clinical Standard</p>
                </div>
              </div>

              <button
                onClick={() => onOpenWhatsAppBooking()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-black shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Consult Our Team</span>
              </button>
            </div>

            <p className="text-base text-[#1e293b] font-medium leading-relaxed">
              {PILLARS_OF_CARE[activePillar].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-1">
                <div className="text-xs font-black text-[#092545]">Clinical Focus</div>
                <div className="text-xs text-slate-700 font-medium">The profile emphasizes accurate diagnosis and effective treatment.</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-1">
                <div className="text-xs font-black text-[#092545]">Patient Access</div>
                <div className="text-xs text-slate-700 font-medium">Outpatient, inpatient, diagnostic, and pharmacy services are listed.</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-1">
                <div className="text-xs font-black text-[#092545]">Departmental Scope</div>
                <div className="text-xs text-slate-700 font-medium">Specialist clinics and services are coordinated through the hospital.</div>
              </div>
            </div>
            </div>
          </Reveal>
        </section>

        {/* Clinical Safety & Infection Prevention Grid */}
        <section className="space-y-8">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Facilities & Clinical Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Facilities & Services in the Hospital Profile
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              The hospital profile describes diagnostic, outpatient, inpatient, surgical, pharmacy, and specialist-clinic services.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinicalStandards.map((std, idx) => (
              <Reveal key={idx} variant="up" delay={idx * 75} className="h-full">
                <div className="h-full glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex items-start gap-4 hover:border-[#013777]/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    {std.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-black text-[#092545]">{std.title}</h3>
                    <p className="text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed">{std.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Facilities Section */}
        <FacilityGallery />

        {/* Direct Chairman & Clinical Desk Call to Action Banner */}
        <Reveal variant="scale">
          <section className="contrast-dark relative overflow-hidden rounded-3xl border border-[#fdc33e]/35 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] p-8 sm:p-12 text-white shadow-2xl">
            <div className="h-1.5 absolute inset-x-0 top-0 bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold !text-[#fdc33e] tracking-wide">
                  Contact the Chairman & Specialist Clinics
                </span>
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight !text-white [text-wrap:balance]">
                  Schedule a Consultation with Dr. Ahmed Shaker or Our Specialist Clinics
                </h3>
                <p className="text-xs sm:text-sm !text-sky-100/95 leading-relaxed max-w-2xl">
                  Send an appointment request through WhatsApp. Contact the hospital to confirm consultant availability, current clinic schedules, and next steps.
                </p>
                <div className="pt-2 flex flex-wrap gap-3.5">
                  <button
                    onClick={() => onOpenWhatsAppBooking(chairmanDirector.name)}
                    className="glass-button-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Consult Dr. Ahmed Shaker on WhatsApp</span>
                  </button>
                  <a
                    href={`tel:${HOSPITAL_CONTACT.phone1}`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/12 hover:bg-white/20 border border-white/25 !text-white font-bold text-sm transition-colors cursor-pointer"
                  >
                    <Clock className="w-4 h-4 !text-[#fdc33e]" />
                  <span>Call to confirm availability: {HOSPITAL_CONTACT.phone1}</span>
                  </a>
                </div>
              </div>

              {/* Chairman Portrait Seal */}
              <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-8">
                <div className="flex items-center gap-4">
                  <img
                    src={chairmanDirector.image}
                    alt={chairmanDirector.name}
                    className="w-20 h-24 rounded-2xl object-cover object-top border-2 border-[#fdc33e]/60 bg-[#061a33] shadow-lg shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="text-xs font-bold !text-[#fdc33e]">
                      Chairman
                    </div>
                    <div className="text-lg font-black !text-white leading-tight">
                      {chairmanDirector.name}
                    </div>
                    <div className="text-xs !text-[#bae6fd]">
                      MRCOG · Ain Shams University
                    </div>
                    <div className="text-[11px] !text-sky-100/90">
                      Worked in Nigeria since 1970
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
};
