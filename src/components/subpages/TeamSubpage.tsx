import React, { useState } from 'react';
import {
  Users,
  Award,
  GraduationCap,
  ShieldCheck,
  Stethoscope,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';
import { SubpageHero } from './SubpageHero';
import { TEAM_MEMBERS } from '../../data/cairoHospitalData';
import { TeamMember } from '../../types/hospital';
import { DoctorModal } from '../DoctorModal';
import { Reveal } from '../ScrollReveal';

interface TeamSubpageProps {
  onNavigateHome: () => void;
  onOpenWhatsAppBooking: (doctorName?: string) => void;
}

export const TeamSubpage: React.FC<TeamSubpageProps> = ({
  onNavigateHome,
  onOpenWhatsAppBooking,
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState<TeamMember | null>(null);

  const chairman =
    TEAM_MEMBERS.find((m) => m.id === 'dr-ahmed-shaker') || TEAM_MEMBERS[0];
  const ceo =
    TEAM_MEMBERS.find((m) => m.id === 'dr-mohammed-hesham') || TEAM_MEMBERS[1];
  const teamMembers = TEAM_MEMBERS.filter(
    (m) => m.id !== chairman.id && m.id !== ceo.id
  );

  const chairmanMetrics = [
    { value: '1970', label: 'Worked in Nigeria since 1970' },
    { value: '130+', label: 'Hospitals managed' },
    { value: '2019', label: 'Cairo Hospital established' },
    { value: 'MRCOG', label: 'Qualification as listed in profile' },
  ];

  const ceoMetrics = [
    { value: '1997', label: 'Ain Shams University Medical School' },
    { value: '25+ Yrs', label: 'Orthopedic surgical leadership' },
    { value: '10 Yrs', label: 'Stuttgart German orthopedic team (Kuwait)' },
    { value: '10 Yrs', label: 'Nozha International Hospital (Cairo)' },
  ];

  const clinicalDepartments = [
    {
      dept: 'Obstetrics & Gynaecology',
      lead: 'Dr. Ahmed Shaker · Chairman',
      specialty: 'Consultant Obstetrics & Gynaecology',
      procedures: ['Obstetrics & Gynaecology', 'Infertility'],
    },
    {
      dept: 'Orthopedic Surgery',
      lead: 'Dr. Mohammed Hesham Shaker · Founder, CEO & CMD',
      specialty: 'Consultant Orthopedic & Arthroplasty Surgeon · Ain Shams University (1997)',
      procedures: ['Arthroplasty', 'Hand surgeries', 'Foot and ankle surgeries', 'External fixation & deformities'],
    },
    {
      dept: 'Surgical Scope Listed for Dr. Wael Khalil',
      lead: 'Dr. Wael Khalil · Bariatric Surgeon',
      specialty: 'Scope listed in the supplied profile',
      procedures: ['Laparoscopic surgeries', 'Bariatric surgeries', 'Oncology surgeries'],
    },
    {
      dept: 'Physical Therapy',
      lead: 'Dr. Bassam',
      specialty: 'Scope listed in the supplied profile',
      procedures: ['Physical therapy', 'Myofascial therapy', 'Cupping', 'Acupuncture', 'Neurological & musculoskeletal disorders'],
    },
    {
      dept: 'Outpatient Specialist Clinics',
      lead: 'Services listed in the profile',
      specialty: 'Contact the hospital to confirm current clinic availability',
      procedures: ['Cardiology', 'Neurology', 'Nephrology', 'Gastroenterology', 'Endocrinology', 'Family Medicine', 'Tropical Medicine'],
    },
    {
      dept: 'Inpatient Admissions',
      lead: 'Hospital admissions and recovery rooms',
      specialty: 'Contact the hospital to arrange admission',
      procedures: ['Inpatient admissions', 'Dedicated recovery rooms'],
    },
    {
      dept: 'Diagnostics & Pharmacy',
      lead: 'Services listed in the profile',
      specialty: 'Contact the hospital to confirm availability',
      procedures: ['Laboratory', 'X-Ray', 'Ultrasound', 'Pharmacy'],
    },
    {
      dept: 'Medical Tourism',
      lead: 'Support services listed in the profile',
      specialty: 'Contact the hospital to confirm current arrangements',
      procedures: ['Visa provision', 'Tickets', 'Accommodation', 'Transport', 'Medical plan', 'Representative follow-up'],
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Subpage Hero */}
      <SubpageHero
        badge="Medical & Administrative Team"
        badgeIcon={<Users className="w-4 h-4 text-[#013777]" />}
        title="Clinical & Administrative Team,"
        highlightedText="Cairo Hospital Abuja."
        description="The team is led by Dr. Ahmed Shaker (Chairman) and Dr. Mohammed Hesham Shaker (Founder, CEO & CMD — Consultant Orthopedic & Arthroplasty Surgeon), supported by Dr. Wael Khalil (Bariatric Surgeon) and Dr. Bassam (Physical Therapy). Confirm current clinician and appointment availability directly with Cairo Hospital."
        breadcrumbs={[{ label: 'Our Medical Team' }]}
        onNavigateHome={onNavigateHome}
        onOpenWhatsAppBooking={() => onOpenWhatsAppBooking()}
        stats={[
          { label: 'Chairman’s work in Nigeria', value: 'Since 1970' },
          { label: 'Hospitals managed', value: '130+' },
          { label: 'Cairo Hospital established', value: '2019' },
          { label: 'Services listed in profile', value: '22' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Chairman Dr. Ahmed Shaker */}
        <section className="space-y-8">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#013777] tracking-wide">
              Office of the Chairman
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#061a33] tracking-tight [text-wrap:balance]">
              Chairman of Cairo Hospital
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              The supplied profile notes that Dr. Ahmed Shaker worked in Nigeria from 1970 and served as NEPA Medical Director from 1970 to 1991.
            </p>
          </Reveal>

          <Reveal variant="scale">
            <article className="glass-panel-dark contrast-dark relative rounded-[2rem] border border-[#fdc33e]/45 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] shadow-2xl overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />

              <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Chairman Portrait Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="relative mx-auto max-w-[300px] sm:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#fdc33e]/65 bg-[#061a33] shadow-2xl">
                    <img
                      src={chairman.image}
                      alt={chairman.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#031124] via-[#031124]/75 to-transparent" />
                    <div className="photo-caption absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-bold !text-[#fdc33e] tracking-wide">
                          {chairman.role}
                        </div>
                        <div className="text-lg sm:text-xl font-black !text-white leading-snug">
                          {chairman.name}
                        </div>
                      </div>
                      <ShieldCheck className="w-5 h-5 !text-[#fdc33e] shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Chairman Comprehensive Dossier */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide !text-[#fdc33e]">
                      <span>Chairman · Cairo Hospital</span>
                      <span className="text-white/40" aria-hidden="true">
                        ·
                      </span>
                      <span className="!text-[#bae6fd]">MRCOG · Ain Shams University</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-black !text-white tracking-tight leading-tight">
                      {chairman.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-semibold !text-[#bae6fd]">
                      <span>{chairman.title}</span>
                      {chairman.education && (
                        <>
                          <span className="text-white/40" aria-hidden="true">
                            ·
                          </span>
                          <span className="inline-flex items-center gap-1.5 !text-white/95">
                            <GraduationCap className="w-4 h-4 !text-[#fdc33e] shrink-0" />
                            <span>{chairman.education}</span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm !text-sky-100 leading-relaxed">
                    {chairman.fullBio}
                  </p>

                  {/* 4-Column Tabular Legacy Metrics */}
                  <div className="py-4 border-y border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/15">
                    {chairmanMetrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className={`${
                          mIdx === 0
                            ? 'sm:pr-4'
                            : mIdx === chairmanMetrics.length - 1
                            ? 'sm:pl-4'
                            : 'sm:px-4'
                        }`}
                      >
                        <div className="text-lg sm:text-xl font-black !text-[#fdc33e] tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[11px] sm:text-xs !text-sky-100 mt-0.5 leading-snug">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Credentials & Leadership Milestones Side-by-Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <div className="text-xs font-bold !text-[#fdc33e] flex items-center gap-1.5">
                        <Award className="w-4 h-4 !text-[#fdc33e] shrink-0" />
                        <span>Fellowships & Appointments</span>
                      </div>
                      <ul className="space-y-2">
                        {chairman.qualifications.map((q, qIdx) => (
                          <li
                            key={qIdx}
                            className="flex items-start gap-2 text-xs !text-sky-100 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 !text-[#fdc33e] mt-0.5 shrink-0" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2.5">
                      <div className="text-xs font-bold !text-[#bae6fd] flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 !text-[#bae6fd] shrink-0" />
                        <span>Institutional Milestones</span>
                      </div>
                      <ul className="space-y-2">
                        {chairman.careerHighlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs !text-sky-100 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 !text-[#bae6fd] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Chairman Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      onClick={() => onOpenWhatsAppBooking(chairman.name)}
                      className="glass-button-whatsapp px-6 py-3 rounded-xl text-white font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Book Consultation with Dr. Ahmed Shaker</span>
                    </button>

                    <button
                      onClick={() => setSelectedDoctor(chairman)}
                      className="px-5 py-3 rounded-xl bg-white/12 hover:bg-white/20 border border-white/25 !text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Open Chairman’s Official Dossier</span>
                      <ExternalLink className="w-3.5 h-3.5 !text-[#fdc33e]" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        {/* Founder, CEO & CMD Dr. Mohammed Hesham Shaker */}
        <section className="space-y-8">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#013777] tracking-wide">
              Office of the Founder, CEO & CMD
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#061a33] tracking-tight [text-wrap:balance]">
              Founder, CEO & Chief Medical Director
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              Consultant Orthopedic & Arthroplasty Surgeon · Pioneering Arthroplasty, Trauma Surgeries, and Orthobiologics Stem Cells Regenerative Therapy in Nigeria.
            </p>
          </Reveal>

          <Reveal variant="scale">
            <article className="glass-panel-dark contrast-dark relative rounded-[2rem] border border-[#fdc33e]/45 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] shadow-2xl overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />

              <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* CEO Portrait Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="relative mx-auto max-w-[300px] sm:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#fdc33e]/65 bg-[#061a33] shadow-2xl">
                    <img
                      src={ceo.image}
                      alt={ceo.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#031124] via-[#031124]/75 to-transparent" />
                    <div className="photo-caption absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-bold !text-[#fdc33e] tracking-wide">
                          {ceo.role}
                        </div>
                        <div className="text-lg sm:text-xl font-black !text-white leading-snug">
                          {ceo.name}
                        </div>
                      </div>
                      <ShieldCheck className="w-5 h-5 !text-[#fdc33e] shrink-0" />
                    </div>
                  </div>
                </div>

                {/* CEO Comprehensive Dossier */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide !text-[#fdc33e]">
                      <span>Founder, CEO & CMD · Cairo Hospital Abuja</span>
                      <span className="text-white/40" aria-hidden="true">
                        ·
                      </span>
                      <span className="!text-[#bae6fd]">Ain Shams University (1997) · Arthroplasty & Trauma</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-black !text-white tracking-tight leading-tight">
                      {ceo.name}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-semibold !text-[#bae6fd]">
                      <span>{ceo.title}</span>
                      {ceo.education && (
                        <>
                          <span className="text-white/40" aria-hidden="true">
                            ·
                          </span>
                          <span className="inline-flex items-center gap-1.5 !text-white/95">
                            <GraduationCap className="w-4 h-4 !text-[#fdc33e] shrink-0" />
                            <span>{ceo.education}</span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm !text-sky-100 leading-relaxed">
                    {ceo.fullBio}
                  </p>

                  {/* 4-Column Tabular Metrics */}
                  <div className="py-4 border-y border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/15">
                    {ceoMetrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className={`${
                          mIdx === 0
                            ? 'sm:pr-4'
                            : mIdx === ceoMetrics.length - 1
                            ? 'sm:pl-4'
                            : 'sm:px-4'
                        }`}
                      >
                        <div className="text-lg sm:text-xl font-black !text-[#fdc33e] tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[11px] sm:text-xs !text-sky-100 mt-0.5 leading-snug">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Credentials & Leadership Milestones Side-by-Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <div className="text-xs font-bold !text-[#fdc33e] flex items-center gap-1.5">
                        <Award className="w-4 h-4 !text-[#fdc33e] shrink-0" />
                        <span>Specializations & Academic Appointments</span>
                      </div>
                      <ul className="space-y-2">
                        {ceo.qualifications.map((q, qIdx) => (
                          <li
                            key={qIdx}
                            className="flex items-start gap-2 text-xs !text-sky-100 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 !text-[#fdc33e] mt-0.5 shrink-0" />
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2.5">
                      <div className="text-xs font-bold !text-[#bae6fd] flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 !text-[#bae6fd] shrink-0" />
                        <span>Clinical Leadership & International Milestones</span>
                      </div>
                      <ul className="space-y-2">
                        {ceo.careerHighlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs !text-sky-100 leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 !text-[#bae6fd] mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CEO Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      onClick={() => onOpenWhatsAppBooking(ceo.name)}
                      className="glass-button-whatsapp px-6 py-3 rounded-xl text-white font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition-transform hover:scale-102 active:scale-98 cursor-pointer shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Book Consultation with Dr. Mohammed Hesham</span>
                    </button>

                    <button
                      onClick={() => setSelectedDoctor(ceo)}
                      className="px-5 py-3 rounded-xl bg-white/12 hover:bg-white/20 border border-white/25 !text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Open CEO & CMD’s Official Dossier</span>
                      <ExternalLink className="w-3.5 h-3.5 !text-[#fdc33e]" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </section>

        {/* Regular Medical & Administrative Team Grid */}
        <section className="space-y-8">
          <Reveal variant="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-200/90">
            <div>
              <span className="text-xs font-bold text-[#013777] tracking-wide">
                Medical & Administrative Team
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#061a33] tracking-tight mt-0.5">
                Hospital Specialists & Departmental Directors
              </h3>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Click any profile to review qualifications and clinical scope.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.id} variant="up" delay={(idx % 3) * 85} className="h-full">
                <div className="h-full glass-panel glass-panel-hover rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#013777]/30 transition-all duration-300 group">
                  <div>
                    {/* Photo Container */}
                    <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e6f0fa] to-[#c9dced] text-[#013777]"
                          aria-label={`${member.name} profile image unavailable`}
                        >
                          <Stethoscope className="w-14 h-14" />
                          <span className="text-4xl font-black">
                            {member.name.split(' ').slice(-1)[0].charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#012654]/85 via-transparent to-transparent" />

                      <div className="photo-caption absolute bottom-3 left-4 right-4 text-white">
                        <div className="text-[10px] font-bold !text-white/90 uppercase tracking-wider">
                          {member.role}
                        </div>
                        <h4 className="text-lg font-black tracking-tight !text-white mt-0.5">
                          {member.name}
                        </h4>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5 space-y-3.5">
                      <div>
                        <div className="text-xs font-extrabold text-[#013777] line-clamp-2 leading-snug">
                          {member.title}
                        </div>
                        {member.education && (
                          <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold mt-1">
                            <GraduationCap className="w-3.5 h-3.5 text-[#013777] shrink-0" />
                            <span className="truncate">{member.education}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-xs text-[#1e293b] font-medium leading-relaxed line-clamp-3">
                        {member.fullBio}
                      </p>

                      <div className="space-y-1.5 pt-2.5 border-t border-slate-100">
                        <ul className="space-y-1">
                          {member.qualifications.slice(0, 3).map((q, qIdx) => (
                            <li
                              key={qIdx}
                              className="flex items-start gap-1.5 text-xs text-[#0f172a] font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                              <span className="line-clamp-1">{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="p-5 pt-0 space-y-2">
                    {member.isDoctor && (
                      <button
                        onClick={() => onOpenWhatsAppBooking(member.name)}
                        className="w-full glass-button-whatsapp inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-white font-extrabold text-xs shadow-xs transition-transform hover:scale-102 active:scale-98 cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Book Appointment</span>
                      </button>
                    )}

                    <button
                      onClick={() => setSelectedDoctor(member)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#061a33] font-bold text-xs transition-colors cursor-pointer"
                    >
                      <span>View Qualifications</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#013777]" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Hospital Care Team Photograph (Clean album style, no text on photo) */}
        <section className="space-y-4">
          <Reveal variant="up">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 shadow-xl max-w-5xl mx-auto flex items-center justify-center">
              <img
                src="/images/team/care-team-2026.jpg"
                alt="Cairo Hospital clinical team"
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[620px] object-contain sm:object-cover sm:object-center"
              />
            </div>
          </Reveal>
        </section>

        {/* Clinical Department Structure & Leadership Matrix */}
        <section className="space-y-10">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Profile-Listed Departments & Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Services & Named Clinical Scopes
            </h2>
            <p className="text-sm text-[#2d435e]">
              The entries below reproduce departments, clinician names, and service scopes listed in the supplied profile. Contact the hospital to confirm current availability.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalDepartments.map((dept, idx) => (
              <Reveal key={idx} variant="up" delay={(idx % 3) * 75} className="h-full">
                <div className="h-full glass-panel p-6 rounded-3xl border border-slate-200/90 bg-white/90 shadow-sm space-y-4 hover:border-[#013777]/30 transition-all">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#013777] flex items-center justify-center font-bold text-sm tabular-nums">
                      0{idx + 1}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Profile Listing
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-black text-[#092545]">{dept.dept}</h3>
                    <div className="text-xs font-bold text-[#013777]">{dept.lead}</div>
                    <div className="text-[11px] text-slate-500">{dept.specialty}</div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Services & Scope Listed:
                    </div>
                    <ul className="space-y-1">
                      {dept.procedures.map((proc, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-1.5 text-xs text-[#2d435e]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Direct Executive Consultation Suite */}
        <Reveal variant="scale">
          <section className="contrast-dark relative overflow-hidden rounded-3xl border border-[#fdc33e]/40 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] p-8 sm:p-12 text-white shadow-2xl">
            <div className="h-1.5 absolute inset-x-0 top-0 bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold !text-[#fdc33e] tracking-wide">
                  Executive Clinical Consultations
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight !text-white [text-wrap:balance]">
                  Consult Directly with Cairo Hospital Leadership
                </h3>
                <p className="text-xs sm:text-sm !text-sky-100/95 leading-relaxed max-w-xl">
                  Arrange an in-person appointment at our Garki 2 hospital in Abuja with Dr. Ahmed Shaker (Obstetrics & Gynaecology) or Dr. Mohammed Hesham Shaker (Orthopedics, Arthroplasty & Stem Cells Therapy).
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenWhatsAppBooking(chairman.name)}
                    className="glass-button-whatsapp inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-extrabold text-xs sm:text-sm shadow-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book with Dr. Ahmed Shaker</span>
                  </button>
                  <button
                    onClick={() => onOpenWhatsAppBooking(ceo.name)}
                    className="glass-button-whatsapp inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-extrabold text-xs sm:text-sm shadow-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book with Dr. Mohammed Hesham</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 lg:border-l lg:border-white/15 lg:pl-8 space-y-3">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(chairman)}
                  className="w-full text-left flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#fdc33e]/35 transition-colors cursor-pointer"
                >
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    className="w-14 h-16 rounded-xl object-cover object-top border-2 border-[#fdc33e]/60 bg-[#061a33] shrink-0"
                  />
                  <div className="min-w-0 space-y-0.5">
                    <div className="text-[11px] font-bold !text-[#fdc33e]">
                      Chairman
                    </div>
                    <div className="text-base font-black !text-white truncate">
                      {chairman.name}
                    </div>
                    <div className="text-[11px] !text-[#bae6fd] truncate">
                      MRCOG · Ain Shams University
                    </div>
                    <div className="text-[11px] !text-sky-100 truncate">
                      Open Official Dossier →
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDoctor(ceo)}
                  className="w-full text-left flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#fdc33e]/35 transition-colors cursor-pointer"
                >
                  <img
                    src={ceo.image}
                    alt={ceo.name}
                    className="w-14 h-16 rounded-xl object-cover object-top border-2 border-[#fdc33e]/60 bg-[#061a33] shrink-0"
                  />
                  <div className="min-w-0 space-y-0.5">
                    <div className="text-[11px] font-bold !text-[#fdc33e]">
                      Founder, CEO & CMD
                    </div>
                    <div className="text-base font-black !text-white truncate">
                      {ceo.name}
                    </div>
                    <div className="text-[11px] !text-[#bae6fd] truncate">
                      Orthopedic Consultant · Arthroplasty & Stem Cells
                    </div>
                    <div className="text-[11px] !text-sky-100 truncate">
                      Open Official Dossier →
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </Reveal>
      </div>

      {/* Doctor Modal Lightbox */}
      {selectedDoctor && (
        <DoctorModal
          member={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onOpenWhatsAppBooking={(docName?: string) => {
            setSelectedDoctor(null);
            onOpenWhatsAppBooking(docName);
          }}
        />
      )}
    </div>
  );
};
