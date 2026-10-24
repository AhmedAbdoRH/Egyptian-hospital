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
import { PILLARS_OF_CARE, HOSPITAL_CONTACT } from '../../data/cairoHospitalData';
import { AccreditationSection } from '../AccreditationSection';
import { FacilityGallery } from '../FacilityGallery';

interface AboutSubpageProps {
  onNavigateHome: () => void;
  onOpenWhatsAppBooking: () => void;
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

  const timelineMilestones = [
    {
      year: '1971',
      title: 'Five Decades of Medical Stewardship',
      subtitle: 'Roots in Nigerian National Healthcare',
      description:
        'Dr. Ahmed Shaker and senior Egyptian clinicians began providing transformative medical care across Nigeria. Dr. Shaker served as Medical Director for NEPA, orchestrating care across more than 130 hospitals nationwide.',
      tag: 'Heritage & Experience',
      highlight: '50+ Years Legacy',
    },
    {
      year: '2019',
      title: 'Inception of Cairo Hospital Abuja',
      subtitle: 'Cairo Rehabilitation Centre (CRC)',
      description:
        'Established by Dr. Ahmed Shaker, Dr. Mohammed Hesham, and leading partners in Abuja to provide specialized outpatient orthopedic and kinetic rehabilitation services at international standards.',
      tag: 'Abuja Inception',
      highlight: 'First Egyptian Center in FCT',
    },
    {
      year: '2021',
      title: 'Tertiary Hospital Major Expansion',
      subtitle: 'Inpatient Suites, Surgical Theaters & Diagnostics',
      description:
        'Underwent comprehensive expansion: fully sterile laminar-flow operating theater, dedicated inpatient admission wards, automated laboratory, digital X-ray diagnostics, and partnership with Alexandria Pharmacy Ltd.',
      tag: 'Tertiary Upgrade',
      highlight: 'Full Inpatient & Surgical Facility',
    },
    {
      year: 'Today',
      title: 'Regional Orthobiologics & Multi-Specialties Hub',
      subtitle: 'Pioneering Regenerative Medicine in West Africa',
      description:
        'Delivering 22 medical specialties, stem cell therapies, BMAC, prolotherapy, Royal College gynaecology, and international medical tourism connections with leading hospitals across Cairo and Egypt.',
      tag: 'Future of Medicine',
      highlight: 'Center of Excellence',
    },
  ];

  const clinicalStandards = [
    {
      title: 'HEPA Positive-Pressure Theaters',
      desc: 'Our operating theater operates under strict positive pressure air filtration, eliminating airborne pathogens for zero-infection surgical outcomes.',
      icon: <ShieldCheck className="w-5 h-5 text-[#013777]" />,
    },
    {
      title: 'Multidisciplinary Board Review',
      desc: 'Complex trauma, joint deformities, and high-risk pregnancies are evaluated collectively by Egyptian and Nigerian senior consultants.',
      icon: <Users className="w-5 h-5 text-teal-600" />,
    },
    {
      title: 'Computerized Autoclave Sterilization',
      desc: 'Hospital-wide aseptic protocols with Class-B autoclave cycle logging, surgical instrument traceability, and clinical barrier safety.',
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Automated Diagnostic Cross-Check',
      desc: 'All hematology, clinical chemistry, and digital radiographs are verified with dual-sign-off protocols before initiating therapeutic plans.',
      icon: <Microscope className="w-5 h-5 text-emerald-600" />,
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
        description="Cairo Hospital represents the union of world-class Egyptian surgical expertise, groundbreaking orthobiologics, and compassionate healthcare stewardship dedicated to the people of Nigeria and the West African region."
        breadcrumbs={[{ label: 'About Us' }]}
        onNavigateHome={onNavigateHome}
        onOpenWhatsAppBooking={onOpenWhatsAppBooking}
        stats={[
          { label: 'Nigerian Heritage', value: 'Since 1971' },
          { label: 'Hospital Founded', value: '2019' },
          { label: 'Specialized Centers', value: '22+' },
          { label: 'Clinical Response', value: '24/7' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        {/* Executive Statement & Institutional Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
                Institutional Mission & Vision
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
                Empowering Health Through Precision, Compassion, and Integrity
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Cairo Hospital in Abuja (operating under Cairo Rehabilitation Centre Ltd.) was conceived with a profound imperative: to provide Nigerian families and regional patients with direct, domestic access to the rigorous standards of Egyptian specialized surgery and regenerative orthopedics.
            </p>

            <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
              Instead of traveling abroad for joint reconstructions, deformity corrections, or regenerative therapies, our patients receive international-grade clinical care right here in Garki 2, Abuja. We combine state-of-the-art diagnostic imaging, computer-assisted therapy, and the seasoned judgment of senior Royal College fellows and Ain Shams consultants.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onNavigateServices}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#013777] hover:bg-[#092545] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Explore Our 22 Specialties</span>
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
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg bg-white space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-2xl -z-10" />
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#013777] shadow-sm shrink-0">
                  <img
                    src="/images/team/dr-ahmed-shaker.png"
                    alt="Dr. Ahmed Shaker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-black text-[#092545]">Dr. Ahmed Shaker</h4>
                  <p className="text-xs font-bold text-[#013777]">Chairman & Founder · MRCOG Dublin</p>
                  <p className="text-xs text-slate-700 font-semibold">50+ Years Medical Leadership in Nigeria</p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#0f172a] font-medium italic leading-relaxed border-l-2 border-[#013777] pl-4">
                "Our guiding creed has never wavered: when a patient enters Cairo Hospital, they must experience unwavering clinical rigor, absolute hygienic safety, and deep human empathy. We brought Egypt’s most accomplished surgical traditions to Abuja to serve with honor."
              </blockquote>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200">
                  <div className="font-black text-[#092545]">Ain Shams & Royal College</div>
                  <div className="text-slate-700 font-semibold text-[11px]">Academic Heritage</div>
                </div>
                <div className="p-3 rounded-xl bg-teal-50/80 border border-teal-200">
                  <div className="font-black text-[#092545]">National Network</div>
                  <div className="text-slate-700 font-semibold text-[11px]">130+ Hospitals Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Founding Timeline */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Historical Evolution
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              A Timeline of Continuous Clinical Growth
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              Trace our journey from early national health management in Nigeria to the establishment of Abuja's most trusted Egyptian multi-specialties hospital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineMilestones.map((milestone, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#013777]/30 transition-all duration-300 relative group"
              >
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
            ))}
          </div>
        </section>

        {/* The 4 Pillars of Clinical Practice */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              The Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Our 4 Pillars of Patient Care
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              Every clinical decision at Cairo Hospital is anchored in four uncompromising values.
            </p>
          </div>

          {/* Interactive Pillar Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
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
          </div>

          {/* Active Pillar Deep Dive */}
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
                onClick={onOpenWhatsAppBooking}
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
                <div className="text-xs font-black text-[#092545]">Clinical Protocol</div>
                <div className="text-xs text-slate-700 font-medium">Continuous auditing by CMD & Senior Nursing Directorate</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-1">
                <div className="text-xs font-black text-[#092545]">Patient Guarantee</div>
                <div className="text-xs text-slate-700 font-medium">Transparent consent, respectful care, and zero compromise</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-1">
                <div className="text-xs font-black text-[#092545]">Quality Benchmark</div>
                <div className="text-xs text-slate-700 font-medium">Aligned with Egyptian Ministry of Health & Nigerian FCTA standards</div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Safety & Infection Prevention Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#013777]">
              Safety First
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#092545] tracking-tight">
              Hospital Governance & Aseptic Excellence
            </h2>
            <p className="text-sm text-[#1e293b] font-medium">
              Stringent environmental and microbiological protocols safeguarding patients across all inpatient and surgical journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinicalStandards.map((std, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white shadow-sm flex items-start gap-4 hover:border-[#013777]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  {std.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-black text-[#092545]">{std.title}</h3>
                  <p className="text-xs sm:text-sm text-[#1e293b] font-medium leading-relaxed">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Section */}
        <FacilityGallery />

        {/* Accreditations Section */}
        <AccreditationSection />

        {/* Direct WhatsApp Call to Action Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#012654] via-[#013777] to-[#044a9e] p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-sky-300">
              Personalized Patient Assistance
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Have Questions About Our Doctors, Treatments, or Inpatient Care?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-2xl">
              Our clinical coordination desk is available 24/7 on WhatsApp to explain our treatments, schedule consultations with Dr. Ahmed Shaker or Dr. Mohammed Hesham, and assist your family.
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
                <Clock className="w-4 h-4 text-sky-300" />
                <span>Call Emergency: {HOSPITAL_CONTACT.phone1}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
