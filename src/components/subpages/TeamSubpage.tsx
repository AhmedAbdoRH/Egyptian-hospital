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
  const teamMembers = TEAM_MEMBERS.filter((m) => m.id !== chairman.id);

  const chairmanMetrics = [
    { value: '1970', label: 'Healthcare Legacy in Nigeria' },
    { value: '130+', label: 'National Hospitals Directed' },
    { value: '2019', label: 'Founded Cairo Hospital Abuja' },
    { value: 'MRCOG', label: 'Royal College Fellow · Dublin' },
  ];

  const clinicalDepartments = [
    {
      dept: 'Obstetrics, Gynaecology & Infertility',
      lead: 'Dr. Ahmed Shaker (Chairman)',
      specialty: 'MRCOG Dublin, 50-Year Heritage across Nigeria',
      procedures: ['High-Risk Maternal Care', 'Advanced Laparoscopic Gyn', 'Fertility Profiling'],
    },
    {
      dept: 'Orthopedics & Arthroplasty',
      lead: 'Dr. Mohammed Hesham (CMD)',
      specialty: 'Ain Shams University, Arthroplasty & Stem Cell BMAC',
      procedures: ['Total Knee & Hip Replacement', 'Stem Cell Injections', 'Complex Trauma Reconstruction'],
    },
    {
      dept: 'Emergency & Acute Trauma Care',
      lead: 'Clinical Resuscitation Team',
      specialty: '24/7 Rapid Triage & Dedicated Ambulance Unit',
      procedures: ['Cardiopulmonary Resuscitation', 'Acute Trauma Stabilization', '24/7 Critical Triage'],
    },
    {
      dept: 'Kinetic Rehabilitation & Physiotherapy',
      lead: 'Dr. Bassam Makhlouf',
      specialty: 'Specialized Neuromuscular & Post-Surgical Recovery',
      procedures: ['Physiotherapy', 'Cupping', 'Acupuncture', 'BEMER Vascular Therapy'],
    },
    {
      dept: 'General, Endoscopic & Laparoscopic Surgery',
      lead: 'Dr. Wael',
      specialty: 'General Surgeon',
      procedures: ['General Surgery', 'Endoscopic Surgery', 'Laparoscopic Surgery', 'Bariatric & Plastic Surgery'],
    },
    {
      dept: 'Pharmaceutical Distribution',
      lead: 'Alexandria Pharmacy Ltd.',
      specialty: 'Alexandria Pharmacy Ltd. & Skinic Clinic',
      procedures: ['Egyptian & European Formulations', 'Aseptic Compounding', 'Specialty Therapeutics'],
    },
    {
      dept: 'Medical Tourism & International Liaison',
      lead: 'Mr. Mohammed Fadl',
      specialty: 'Rahma Travel & Al-Azhar Financial Strategy',
      procedures: ['Direct Cairo Hospital Pipelines', 'Medical Travel Coordination', 'Consular Expedited Visas'],
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Subpage Hero */}
      <SubpageHero
        badge="Distinguished Medical Board"
        badgeIcon={<Users className="w-4 h-4 text-[#013777]" />}
        title="Decades of Surgical Mastery,"
        highlightedText="International Accreditation."
        description="Led by Founder & Chairman Dr. Ahmed Shaker and our specialist clinical team, Cairo Hospital in Abuja unites Royal College fellowships with over fifty years of dedicated healthcare stewardship in Nigeria."
        breadcrumbs={[{ label: 'Our Medical Team' }]}
        onNavigateHome={onNavigateHome}
        onOpenWhatsAppBooking={() => onOpenWhatsAppBooking()}
        stats={[
          { label: 'Nigerian Presence', value: '50+ Yrs' },
          { label: 'Royal College MRCOG', value: 'Fellows' },
          { label: 'Specialist Theaters', value: '100% Sterile' },
          { label: 'Patient Reviews', value: '5-Star' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Exclusive Flagship Section #1: Founder & Chairman Dr. Ahmed Shaker */}
        <section className="space-y-8">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#013777] tracking-wide">
              Office of the Founder & Chairman
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#061a33] tracking-tight [text-wrap:balance]">
              Hospital Founder & Chairman of the Board
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              Over half a century of visionary healthcare leadership in Nigeria, anchoring Cairo Hospital’s clinical ethics and international surgical standards.
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
                          Founder & {chairman.role}
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
                      <span>Founder & Chairman of the Board</span>
                      <span className="text-white/40" aria-hidden="true">
                        ·
                      </span>
                      <span className="!text-[#bae6fd]">MRCOG Fellow · Dublin</span>
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

        {/* Regular Medical & Administrative Team Grid (Includes Dr. Mohammed Hesham normally) */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.id} variant="up" delay={(idx % 4) * 85} className="h-full">
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
                          {member.qualifications.slice(0, 2).map((q, qIdx) => (
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

        {/* Hospital Care Team Group Photo Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" aria-labelledby="care-team-photo-title">
          <Reveal
            as="figure"
            variant="left"
            className="lg:col-span-7 relative min-h-[18rem] sm:min-h-[22rem] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl bg-slate-100"
          >
            <img
              src="/images/team/care-team-2026.jpg"
              alt="Cairo Hospital care team standing together at the hospital"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011633]/65 via-transparent to-transparent" />
            <figcaption className="photo-caption absolute bottom-4 left-4 right-4 !text-white text-sm font-bold drop-shadow-md">
              The people behind your care at Cairo Hospital Abuja
            </figcaption>
          </Reveal>
          <Reveal variant="right" delay={100} className="lg:col-span-5 flex">
            <div className="w-full glass-panel rounded-[2rem] border border-white/80 bg-white/90 p-7 sm:p-9 flex flex-col justify-center gap-4 shadow-sm">
              <span className="text-xs font-bold text-[#013777] tracking-wide flex items-center gap-2">
                <Users className="w-4 h-4 text-[#013777]" aria-hidden="true" />
                <span>Cairo Hospital Care Team</span>
              </span>
              <h2 id="care-team-photo-title" className="text-2xl sm:text-3xl font-black tracking-tight text-[#092545]">
                A team patients can meet and trust.
              </h2>
              <p className="text-sm leading-relaxed text-[#2d435e]">
                Inside Cairo Hospital in Garki 2, Abuja, our physicians, rehabilitation specialists, and nursing staff coordinate every inpatient and outpatient journey with attentive care.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Clinical Department Structure & Leadership Matrix */}
        <section className="space-y-10">
          <Reveal variant="up" className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Specialist Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Clinical Departments & Specialist Leads
            </h2>
            <p className="text-sm text-[#2d435e]">
              Our specialized divisions operate under synchronized protocols ensuring comprehensive inpatient and outpatient continuity.
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
                      Active Unit
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-black text-[#092545]">{dept.dept}</h3>
                    <div className="text-xs font-bold text-[#013777]">{dept.lead}</div>
                    <div className="text-[11px] text-slate-500">{dept.specialty}</div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Core Procedures:
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

        {/* Academic Foundations & Royal College Accreditations */}
        <Reveal variant="scale">
          <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-sky-50/40 to-slate-50 shadow-lg space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
                Academic Pedigree
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#092545] tracking-tight">
                Trained in the Finest Medical Faculties of Egypt & The UK
              </h2>
              <p className="text-xs sm:text-sm text-[#2d435e] leading-relaxed">
                Our clinicians hold degrees and fellowships from historic medical institutions renowned worldwide for surgical innovation, academic rigor, and patient ethics.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="text-sm font-black text-[#092545]">MRCOG Dublin</div>
                <div className="text-[11px] text-slate-500">Royal College of Obstetricians & Gynaecologists</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="text-sm font-black text-[#092545]">Ain Shams University</div>
                <div className="text-[11px] text-slate-500">Faculty of Medicine, Cairo, Egypt</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="text-sm font-black text-[#092545]">Al-Azhar University</div>
                <div className="text-[11px] text-slate-500">Faculty of Commerce & Health Management</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
                <div className="text-sm font-black text-[#092545]">Cairo University</div>
                <div className="text-[11px] text-slate-500">Faculty of Science & Sustainable Energy</div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Direct Chairman Consultation Suite */}
        <Reveal variant="scale">
          <section className="contrast-dark relative overflow-hidden rounded-3xl border border-[#fdc33e]/40 bg-gradient-to-br from-[#041830] via-[#012859] to-[#013777] p-8 sm:p-12 text-white shadow-2xl">
            <div className="h-1.5 absolute inset-x-0 top-0 bg-gradient-to-r from-[#fdc33e] via-[#38bdf8] to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold !text-[#fdc33e] tracking-wide">
                  Chairman’s Clinical Consultation
                </span>
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight !text-white [text-wrap:balance]">
                  Consult Directly with Founder & Chairman Dr. Ahmed Shaker
                </h3>
                <p className="text-xs sm:text-sm !text-sky-100/95 leading-relaxed max-w-2xl">
                  Schedule an in-person consultation in Garki 2, Abuja or a preliminary clinical review via WhatsApp with our Founder & Chairman, Dr. Ahmed Shaker, or connect with our 24/7 clinical desk.
                </p>
                <div className="pt-2 flex flex-wrap gap-3.5">
                  <button
                    onClick={() => onOpenWhatsAppBooking(chairman.name)}
                    className="glass-button-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white font-extrabold text-sm shadow-lg transition-transform hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book with Dr. Ahmed Shaker</span>
                  </button>
                  <button
                    onClick={() => setSelectedDoctor(chairman)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/12 hover:bg-white/20 border border-white/25 !text-white font-bold text-sm transition-colors cursor-pointer"
                  >
                    <Stethoscope className="w-4 h-4 !text-[#fdc33e]" />
                    <span>View Chairman’s Full Dossier</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-8">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(chairman)}
                  className="w-full text-left flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-[#fdc33e]/35 transition-colors cursor-pointer"
                >
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    className="w-16 h-20 rounded-xl object-cover object-top border-2 border-[#fdc33e]/60 bg-[#061a33] shrink-0"
                  />
                  <div className="min-w-0 space-y-0.5">
                    <div className="text-[11px] font-bold !text-[#fdc33e]">
                      Founder & Chairman
                    </div>
                    <div className="text-base font-black !text-white truncate">
                      {chairman.name}
                    </div>
                    <div className="text-[11px] !text-[#bae6fd] truncate">
                      MRCOG Dublin · Ain Shams
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
