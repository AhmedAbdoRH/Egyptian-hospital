import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Activity,
  History,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  ChevronRight,
  Microscope,
  type LucideIcon,
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

interface ClinicalStandard {
  title: string;
  desc: string;
  tag: string;
  Icon: LucideIcon;
  tile: string;
}

export const AboutSubpage: React.FC<AboutSubpageProps> = ({
  onNavigateHome,
  onOpenWhatsAppBooking,
  onNavigateServices,
  onNavigateTeam,
}) => {
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

  const clinicalStandards: ClinicalStandard[] = [
    {
      title: 'Fully Equipped Laboratory',
      desc: 'A fully equipped laboratory supported the outpatient services described in the hospital profile.',
      tag: 'Diagnostics',
      Icon: Microscope,
      tile: 'from-[#013777] to-[#0b5599]',
    },
    {
      title: 'Digital X-Ray',
      desc: 'Digital X-ray is listed among the diagnostic services at Cairo Hospital.',
      tag: 'Imaging',
      Icon: Activity,
      tile: 'from-[#0f766e] to-[#14b8a6]',
    },
    {
      title: 'Surgery, Inpatient & Pharmacy',
      desc: 'The 2021 expansion added a fully equipped surgery room, an inpatient department, and a pharmacy department.',
      tag: 'Surgical & Inpatient',
      Icon: ShieldCheck,
      tile: 'from-[#0284c7] to-[#38bdf8]',
    },
    {
      title: 'Multispecialty Clinics',
      desc: 'The profile lists cardiology, neurology, nephrology, gastroenterology, endocrinology, family medicine, and tropical medicine.',
      tag: 'Specialist Clinics',
      Icon: Users,
      tile: 'from-[#4f46e5] to-[#6366f1]',
    },
  ];

  const pillarIcons: LucideIcon[] = [Users, ShieldCheck, HeartHandshake, Stethoscope];
  const pillarAccents = [
    'from-[#013777] via-[#0284c7] to-sky-300',
    'from-[#0f766e] via-teal-500 to-teal-300',
    'from-[#0284c7] via-sky-500 to-sky-300',
    'from-[#4f46e5] via-indigo-500 to-indigo-300',
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
          { label: 'Cairo Pharmacy', value: '24 Hours' },
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
              In 2021, Cairo Centre expanded its specialties and added a fully equipped surgery room, an inpatient department, and a pharmacy department. The supplied profile also lists outpatient clinics, orthobiologics, specialist clinics, diagnostics, and medical tourism. No emergency services are available.
            </p>

            {/* Milestones at a glance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              {[
                { value: '2019', label: 'Founded in Abuja' },
                { value: '2021', label: 'Surgery & inpatient added' },
                { value: '22', label: 'Services listed' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-xs"
                >
                  <div className="text-lg font-black text-[#013777] tabular-nums leading-none">
                    {item.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-bold text-slate-500 leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1 flex flex-wrap gap-4">
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

        {/* Founding Timeline */}
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
              <Reveal key={milestone.year} variant="up" delay={idx * 75} className="h-full">
                <div className="h-full flex flex-col">
                  {/* Timeline rail — node plus a connector that bridges the grid gap */}
                  <div className="hidden lg:flex items-center h-3 mb-5" aria-hidden="true">
                    <span className="relative z-10 w-3 h-3 rounded-full bg-[#013777] ring-4 ring-white shadow-[0_0_0_1px_rgba(1,55,119,0.18)]" />
                    {idx < timelineMilestones.length - 1 && (
                      <span className="-mr-6 flex-1 h-px bg-gradient-to-r from-[#013777]/35 to-[#013777]/10" />
                    )}
                  </div>

                  <div className="group relative h-full flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(9,37,69,0.04),0_14px_30px_-24px_rgba(9,37,69,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#013777]/25 hover:shadow-[0_24px_46px_-26px_rgba(1,55,119,0.42)]">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[3px] w-2/5 bg-gradient-to-r from-[#013777] via-[#0284c7] to-sky-300 transition-[width] duration-700 ease-out group-hover:w-full"
                    />

                    <div className="flex items-start justify-between gap-2">
                      <span className="text-3xl font-black text-[#013777] tracking-tight tabular-nums">
                        {milestone.year}
                      </span>
                      <span className="text-[10px] font-black text-[#013777] uppercase tracking-wider bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-lg text-center leading-tight">
                        {milestone.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-black text-[#092545] leading-snug">
                      {milestone.title}
                    </h3>
                    <div className="mt-1 text-[11.5px] font-black text-[#0f766e] leading-snug">
                      {milestone.subtitle}
                    </div>
                    <p className="mt-3 text-xs text-slate-600 font-medium leading-relaxed flex-1">
                      {milestone.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-1.5 text-[11px] font-black text-[#013777] leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-px" />
                      <span>{milestone.highlight}</span>
                    </div>
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

          <Reveal variant="up" delay={60}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-200/70 shadow-[0_1px_2px_rgba(9,37,69,0.04),0_18px_38px_-26px_rgba(9,37,69,0.45)]">
              {PILLARS_OF_CARE.map((pillar, idx) => {
                const Icon = pillarIcons[idx] ?? Sparkles;
                return (
                  <div
                    key={pillar.title}
                    className="group relative bg-white p-6 sm:p-7 transition-colors duration-500 hover:bg-slate-50/80"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${pillarAccents[idx]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 text-[#013777] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <span className="text-[11px] font-black tracking-[0.22em] text-slate-300 transition-colors duration-500 group-hover:text-[#013777]/40">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-black text-[#092545] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 font-medium leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal variant="up" delay={120}>
            <div className="flex justify-center">
              <button
                onClick={() => onOpenWhatsAppBooking()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-black shadow-md shadow-[#25D366]/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consult Our Team</span>
              </button>
            </div>
          </Reveal>
        </section>

        {/* Facilities & Clinical Scope */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {clinicalStandards.map((std, idx) => (
              <Reveal key={std.title} variant="up" delay={idx * 75} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_1px_2px_rgba(9,37,69,0.04),0_14px_30px_-24px_rgba(9,37,69,0.4)] transition-all duration-500 hover:-translate-y-1 hover:border-[#013777]/20 hover:shadow-[0_24px_46px_-26px_rgba(1,55,119,0.4)] flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${std.tile} text-white flex items-center justify-center shrink-0 shadow-md shadow-slate-900/10 ring-1 ring-white/40 transition-transform duration-500 group-hover:scale-105`}
                  >
                    <std.Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>

                  <div className="space-y-2 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-black text-[#092545]">{std.title}</h3>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">
                        {std.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{std.desc}</p>
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
