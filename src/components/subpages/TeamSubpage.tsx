import React, { useState } from 'react';
import {
  Users,
  Award,
  GraduationCap,
  ShieldCheck,
  Stethoscope,
  MessageCircle,
  Calendar,
  ExternalLink,
  ChevronRight,
  Star,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SubpageHero } from './SubpageHero';
import { TEAM_MEMBERS, HOSPITAL_CONTACT } from '../../data/cairoHospitalData';
import { TeamMember } from '../../types/hospital';
import { DoctorModal } from '../DoctorModal';

interface TeamSubpageProps {
  onNavigateHome: () => void;
  onOpenWhatsAppBooking: (doctorName?: string) => void;
}

export const TeamSubpage: React.FC<TeamSubpageProps> = ({
  onNavigateHome,
  onOpenWhatsAppBooking,
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState<TeamMember | null>(null);

  const clinicalDepartments = [
    {
      dept: 'Orthopedics & Arthroplasty',
      lead: 'Dr. Mohammed Hesham (CMD)',
      specialty: 'Ain Shams University, Arthroplasty & Stem Cell BMAC',
      procedures: ['Total Knee & Hip Replacement', 'Stem Cell Injections', 'Complex Trauma Reconstruction'],
    },
    {
      dept: 'Obstetrics, Gynaecology & Infertility',
      lead: 'Dr. Ahmed Shaker (Chairman)',
      specialty: 'MRCOG Dublin, 50-Year Heritage across Nigeria',
      procedures: ['High-Risk Maternal Care', 'Advanced Laparoscopic Gyn', 'Fertility Profiling'],
    },
    {
      dept: 'Emergency & Acute Trauma Care',
      lead: 'Clinical Resuscitation Team',
      specialty: '24/7 Rapid Triage & Dedicated Ambulance Unit',
      procedures: ['Cardiopulmonary Resuscitation', 'Acute Trauma Stabalization', '24/7 Critical Triage'],
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
        description="Meet the visionary Egyptian medical pioneers and administrative strategists who established Cairo Hospital in Abuja, uniting Royal College fellowships with fifty years of dedicated healthcare stewardship in Nigeria."
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
        {/* Executive Board Showcase */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Executive Directorate
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Hospital Executive Directors & Founders
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              Click any profile to review academic qualifications, surgical credentials, and career milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="glass-panel glass-panel-hover rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#013777]/30 transition-all duration-300 group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#e6f0fa] to-[#c9dced] text-[#013777]" aria-label={`${member.name} profile image unavailable`}>
                        <Stethoscope className="w-14 h-14" />
                        <span className="text-4xl font-black">{member.name.split(' ').slice(-1)[0].charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#012654] via-transparent to-transparent opacity-85" />

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[11px] font-black !text-white uppercase tracking-wider">
                        {member.role}
                      </div>
                      <h3 className="text-xl font-black tracking-tight text-white drop-shadow-xs">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-xs font-black text-[#013777]">{member.title}</div>
                      {member.education && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold mt-1">
                          <GraduationCap className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                          <span>{member.education}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed line-clamp-3">
                      {member.fullBio}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[10px] font-black text-slate-700 uppercase tracking-wider">
                        Credentials:
                      </div>
                      <ul className="space-y-1">
                        {member.qualifications.slice(0, 2).map((q, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-xs text-[#0f172a] font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  {member.isDoctor && (
                    <button
                      onClick={() => onOpenWhatsAppBooking(member.name)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs shadow-xs transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Book Appointment with {member.name.split(' ')[1] || member.name}</span>
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedDoctor(member)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-[#092545] font-black text-xs transition-colors cursor-pointer"
                  >
                    <span>View Complete Qualifications & Bio</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#013777]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clinical Department Structure & Leadership Matrix */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Specialist Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Clinical Departments & Specialist Leads
            </h2>
            <p className="text-sm text-[#2d435e]">
              Our specialized divisions operate under synchronized protocols ensuring comprehensive inpatient and outpatient continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalDepartments.map((dept, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-slate-200/90 bg-white/90 shadow-sm space-y-4 hover:border-[#013777]/30 transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#013777] flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md">
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
            ))}
          </div>
        </section>

        {/* Academic Foundations & Royal College Accreditations */}
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

        {/* Direct WhatsApp Call to Action Banner */}
        <section className="contrast-dark relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#012654] via-[#013777] to-[#044a9e] p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-sky-300">
              Personalized Consultation
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight !text-[#fdc33e]">
              Consult with Our Chief Medical Director or Chairman Directly
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-2xl">
              Take the first step toward decisive healing. Schedule an in-person or preliminary WhatsApp evaluation with Dr. Mohammed Hesham or Dr. Ahmed Shaker today.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenWhatsAppBooking('Dr. Mohammed Hesham (CMD)')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-[#25D366]/30 transition-all transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Book with Dr. Mohammed Hesham</span>
              </button>
              <button
                onClick={() => onOpenWhatsAppBooking('Dr. Ahmed Shaker (Chairman)')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-sky-300" />
                <span>Book with Dr. Ahmed Shaker</span>
              </button>
            </div>
          </div>
        </section>
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
