import React, { useState } from 'react';
import {
  Plane,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Globe,
  Building2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Users,
  Calendar,
  Hotel,
  Car,
  Utensils,
  FileText,
  Camera,
  Languages,
  Heart,
  Star,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Activity,
  Award,
  Luggage,
  HelpCircle,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import { SubpageHero } from './SubpageHero';
import { Reveal } from '../ScrollReveal';
import { HOSPITAL_CONTACT } from '../../data/cairoHospitalData';

interface MedicalTourismSubpageProps {
  onNavigateHome: () => void;
  onOpenWhatsAppBooking: (specialtyName?: string) => void;
}

interface DestinationData {
  id: string;
  country: string;
  region: 'middle-east' | 'europe' | 'americas' | 'africa';
  flag: string;
  tagline: string;
  network: string;
  leadTime: string;
  specialties: string[];
  highlights: string[];
  badge: string;
}

export const MedicalTourismSubpage: React.FC<MedicalTourismSubpageProps> = ({
  onNavigateHome,
  onOpenWhatsAppBooking,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Interactive Planner State
  const [plannerDestination, setPlannerDestination] = useState<string>('Egypt');
  const [plannerSpecialty, setPlannerSpecialty] = useState<string>('Orthopedics & Joint Replacement');
  const [plannerCompanion, setPlannerCompanion] = useState<string>('Traveling with 1 Companion');

  const destinations: DestinationData[] = [
    {
      id: 'egypt',
      country: 'Egypt',
      region: 'middle-east',
      flag: '🇪🇬',
      tagline: 'Premier Orthopedic, Stem Cell & Tertiary Surgical Care in Cairo',
      network: 'Cleopatra Hospitals Group & Leading University Surgical Centres',
      leadTime: '3 - 5 Days Expedited Coordination',
      badge: 'Flagship Partner Hub',
      specialties: [
        'Complex Joint Replacements (Knee & Hip)',
        'Orthobiologics & Stem Cell Regenerative Therapy',
        'Spine Reconstruction & Neurosurgery',
        'Advanced Ophthalmology & Dental',
        'Cardiovascular Interventions & Bypass',
      ],
      highlights: [
        'Direct institutional relationship via Egyptian consultant founders',
        'Seamless clinical continuity: Post-op rehabilitation directly at Cairo Hospital Abuja',
        'Affordable, internationally accredited tertiary hospital beds in Cairo',
      ],
    },
    {
      id: 'dubai',
      country: 'Dubai (UAE)',
      region: 'middle-east',
      flag: '🇦🇪',
      tagline: 'World-Class Healthcare, Robotic Surgery & Luxury Recovery',
      network: 'Dubai Healthcare City (DHCC) & Accredited Private Hospitals',
      leadTime: '4 - 7 Days Fast-Track Visa & Booking',
      badge: 'Ultra-Modern & Robotic',
      specialties: [
        'Robotic Orthopedic & General Surgery',
        'Advanced Interventional Cardiology',
        'Aesthetic & Reconstructive Surgery',
        'Executive Comprehensive Health Checkups',
        'Sports Medicine & Arthroscopy',
      ],
      highlights: [
        'State-of-the-art robotic medical technology and minimal wait times',
        'World-renowned international visiting professors and surgeons',
        'Luxury convalescence accommodation near clinical facilities',
      ],
    },
    {
      id: 'uk',
      country: 'United Kingdom',
      region: 'europe',
      flag: '🇬🇧',
      tagline: 'Pioneering Academic Medicine, Harley Street & Complex Tertiary Care',
      network: 'Harley Street Medical District & Leading London Private Wings',
      leadTime: '7 - 14 Days Medical Visa Processing',
      badge: 'Pioneering Specialists',
      specialties: [
        'Complex Neuro-Oncology & Spine Surgery',
        'Pediatric Surgery & Rare Disease Management',
        'Advanced Structural Cardiology & TAVI',
        'Rheumatology & Immunology Protocols',
        'Independent Second Opinions by UK Professors',
      ],
      highlights: [
        'Access to renowned NHS foundation trust private healthcare wings',
        'Rigorous clinical governance and multi-disciplinary tumor boards',
        'Comprehensive documentation and liaison with UK-registered consultants',
      ],
    },
    {
      id: 'turkey',
      country: 'Turkey',
      region: 'europe',
      flag: '🇹🇷',
      tagline: 'JCI-Accredited Excellence, Hair Restoration & Aesthetic Care',
      network: 'Top-tier JCI Accredited Hospital Networks in Istanbul & Ankara',
      leadTime: '3 - 6 Days Rapid Entry & Appointment',
      badge: 'High Value & Specialized',
      specialties: [
        'Advanced Spinal Deformity & Scoliosis Correction',
        'Precision Hair Restoration (FUE/DHI)',
        'Cosmetic & Reconstructive Surgery',
        'Smile Makeover & Advanced Implantology',
        'CyberKnife & Precision Radiation Oncology',
      ],
      highlights: [
        'Exceptional price-to-quality ratio with internationally trained surgeons',
        'Turnkey packages covering hotel, VIP transfers, and translation',
        'Modern medical recovery facilities situated in Istanbul',
      ],
    },
    {
      id: 'usa',
      country: 'United States',
      region: 'americas',
      flag: '🇺🇸',
      tagline: 'Cutting-Edge Clinical Trials, Rare Disease & Landmark Cancer Centres',
      network: 'Premier US Medical Centres & Academic Referral Consortia',
      leadTime: '14 - 21 Days Medical B-2 Visa Facilitation',
      badge: 'Advanced Research Protocols',
      specialties: [
        'Genomic Targeted Oncology & CAR-T Cell Therapies',
        'Complex Pediatric & Adult Neurosurgery',
        'Novel Experimental Treatment Protocols',
        'Advanced Organ Transplantation & Complex GI',
        'Multi-Disciplinary Diagnostic Quests',
      ],
      highlights: [
        'Access to the latest FDA-approved therapeutics and breakthrough trials',
        'Formal medical invitation letters for US embassy visa appointments',
        'Coordinated follow-up protocol back in Nigeria with our physicians',
      ],
    },
    {
      id: 'nigeria',
      country: 'Nigeria (Interstate)',
      region: 'africa',
      flag: '🇳🇬',
      tagline: 'Premium Interstate Referral Coordination Across Abuja & Lagos',
      network: 'Cairo Hospital Abuja & Partner Tertiary Centres in Lagos',
      leadTime: 'Same-Day or 24h Coordination',
      badge: 'Local Excellence',
      specialties: [
        'Orthopedics, Spine & Joint Reconstruction',
        'Comprehensive Physical Rehabilitation & Hydrotherapy',
        'Inpatient Surgical & Observation Wards',
        'On-site Diagnostics, 24/7 Pharmacy & Emergency Ambulance',
        'Orthobiologics & Stem Cell Consultations',
      ],
      highlights: [
        'Zero visa or international travel friction for Nigerian residents',
        'On-site medical team and surgical suite right in Garki 2, Abuja',
        'Full administrative support with major HMOs (NHIS, Alamida, Zenith Medica, Cleopatra)',
      ],
    },
  ];

  const travelSupportServices = [
    {
      icon: <FileText className="w-6 h-6 text-sky-500" />,
      title: 'Visa Provision & Medical Clearance',
      description:
        'Official hospital invitation letters, consular medical expediting, and comprehensive paperwork support for patient and accompanying family.',
      benefit: 'Guaranteed medical documentation',
    },
    {
      icon: <Plane className="w-6 h-6 text-teal-500" />,
      title: 'Flight Ticket & Logistics Coordination',
      description:
        'Flexible flight reservations, medical stretcher clearance when needed, wheelchair services, and coordinated arrival itineraries.',
      benefit: 'Priority flight routing & special assistance',
    },
    {
      icon: <Hotel className="w-6 h-6 text-blue-500" />,
      title: 'Curated Hotel & Serviced Apartments',
      description:
        'Pre-vetted 4/5-star accommodation and accessible serviced suites located within 5 to 15 minutes of partner clinical facilities.',
      benefit: 'Comfortable recovery environment',
    },
    {
      icon: <Car className="w-6 h-6 text-indigo-500" />,
      title: 'Private Chauffeured Ground Transport',
      description:
        'VIP airport pickup upon landing, scheduled daily clinic transfers, and round-the-clock transportation for emergency needs.',
      benefit: 'Stress-free navigation abroad',
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-rose-500" />,
      title: 'Pre-Travel Medical Protocol & Second Opinion',
      description:
        'Direct review of your MRIs, CT scans, and lab reports by overseas chief consultants with a transparent written treatment quote before leaving Nigeria.',
      benefit: 'No surprise costs or unexpected delays',
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-500" />,
      title: 'Representative Follow-Up & Abuja Post-Op Rehab',
      description:
        'A dedicated bilingual liaison monitors your treatment abroad until your safe return, followed by continuous physiotherapy & checkups at Cairo Hospital Abuja.',
      benefit: 'Crucial continuity of care back home',
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Initial Records Review & Case Assessment',
      desc: 'Submit your recent medical reports, imaging (MRI/CT), and clinical history via our WhatsApp or at our Garki 2 clinic in Abuja.',
      badge: 'Day 1 - 2',
    },
    {
      step: '02',
      title: 'Overseas Clinical Plan & Fixed Quotation',
      desc: 'Our overseas medical committee pairs you with premier international hospitals and provides a customized treatment roadmap and cost estimate.',
      badge: 'Day 3',
    },
    {
      step: '03',
      title: 'Visa, Flight & Accommodation Concierge',
      desc: 'Our travel desk issues medical invitation letters, assists with expedited visas, books suitable flights, and arranges patient-friendly lodging.',
      badge: 'Day 4 - 7',
    },
    {
      step: '04',
      title: 'VIP Arrival, Admission & Treatment Abroad',
      desc: 'Private chauffeur meets you at the airport. A dedicated liaison officer assists you through hospital admission, surgery, and immediate post-op care.',
      badge: 'During Stay',
    },
    {
      step: '05',
      title: 'Safe Return & Continuity of Care in Abuja',
      desc: 'Return to Nigeria with peace of mind. Cairo Hospital’s physicians in Abuja take over your rehabilitation, wound care, and long-term follow-up.',
      badge: 'Post Return',
    },
  ];

  const faqs = [
    {
      q: 'Why should I arrange my medical travel through Cairo Hospital instead of booking independently?',
      a: 'The most dangerous aspect of independent medical travel is the lack of post-operative follow-up once you return to Nigeria. When you travel via Cairo Hospital, you receive verified treatment at accredited partner institutions, pre-negotiated institutional rates, dedicated liaison tracking abroad, and most importantly, continuous post-surgical rehabilitation and wound management right here at Cairo Hospital & Rehabilitation Centre in Garki 2, Abuja.',
    },
    {
      q: 'How long does medical visa processing take for Egypt, Dubai, UK, or Turkey?',
      a: 'Egypt and Dubai visas are typically expedited within 3 to 5 business days using our official hospital invitation and medical clearance letters. Turkey typically requires 4 to 7 business days, while the UK and USA require 10 to 21 days depending on embassy appointment availability. Our team provides complete documentation to support urgent medical appointments.',
    },
    {
      q: 'Can family members or companions travel with the patient?',
      a: 'Yes, absolutely. Our concierge arranges visa support, flight tickets, and spacious serviced apartments designed for both the patient and accompanying relatives, ensuring full comfort and privacy throughout the medical journey.',
    },
    {
      q: 'What medical documents should I prepare to get started?',
      a: 'Please share your most recent doctor’s summary, lab results, and diagnostic imaging reports (MRI, CT scan, X-Rays) in digital format. If you need updated scans or a fresh consultation, you can visit Cairo Hospital in Garki 2, Abuja for immediate assessment before sending your file abroad.',
    },
    {
      q: 'How are payments handled?',
      a: 'We provide full transparency. Treatment costs are quoted directly with no hidden fees. Payment arrangements are clearly outlined in advance, with options for bank transfers or local institutional facilitation.',
    },
    {
      q: 'What happens when I return to Abuja after my surgery or treatment?',
      a: 'You will have a scheduled follow-up at Cairo Hospital & Rehabilitation Centre. Our multidisciplinary medical and physical therapy team receives full clinical notes from your overseas operating surgeon to execute your rehabilitation program, suture removal, medication titration, and follow-up lab/X-ray tests.',
    },
  ];

  const filteredDestinations =
    selectedRegion === 'all'
      ? destinations
      : destinations.filter((d) => d.region === selectedRegion);

  const handleLaunchWhatsAppPlanner = () => {
    const text = `Hello Cairo Hospital Medical Tourism Desk,\n\nI would like to inquire about Medical Tourism coordination:\n- Preferred Destination: ${plannerDestination}\n- Specialty / Condition: ${plannerSpecialty}\n- Travel Party: ${plannerCompanion}\n\nPlease advise on the next steps for medical records review and treatment quotes. Thank you.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${HOSPITAL_CONTACT.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-[#013777] selection:text-white">
      {/* 1. HERO SECTION */}
      <SubpageHero
        badge="Official Overseas Medical Travel Desk"
        badgeIcon={<Globe className="w-4 h-4 text-[#013777]" />}
        title="World-Class Medical Tourism,"
        highlightedText="Coordinated with Abuja Excellence."
        description="Access premier hospital networks across Dubai, the UK, Nigeria, Egypt, USA, and Turkey. Cairo Hospital coordinates every step—from medical visa expediting and flight booking to personalized surgical protocols and vital post-operative rehabilitation right here in Garki 2, Abuja."
        breadcrumbs={[{ label: 'Medical Tourism Hub' }]}
        onNavigateHome={onNavigateHome}
        onOpenWhatsAppBooking={() => onOpenWhatsAppBooking('Medical Tourism Coordination')}
        stats={[
          { label: 'Destinations Listed', value: '6 Global Hubs' },
          { label: 'Concierge Care', value: '100% End-to-End' },
          { label: 'Physician Liaison', value: 'Until Return' },
          { label: 'Follow-up Rehab', value: 'Cairo Hospital Abuja' },
        ]}
      />

      {/* 2. REGIONAL DESTINATIONS SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#013777] uppercase tracking-wider">
                <Plane className="w-4 h-4 text-sky-600" />
                <span>Destinations Listed in Hospital Profile</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight">
                Explore Our 6 Medical Destinations
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Cairo Hospital maintains direct physician networks and institutional relationships with top-tier hospitals across three continents.
              </p>

              {/* Region Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                {[
                  { id: 'all', label: 'All Destinations (6)' },
                  { id: 'middle-east', label: 'Egypt & Dubai' },
                  { id: 'europe', label: 'UK & Turkey' },
                  { id: 'americas', label: 'United States' },
                  { id: 'africa', label: 'Nigeria (Interstate)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedRegion(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      selectedRegion === tab.id
                        ? 'bg-[#013777] text-white shadow-md shadow-[#013777]/25 scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Destination Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, idx) => (
              <Reveal key={dest.id} delay={idx * 80} className="h-full">
                <div className="h-full flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 hover:border-sky-400 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="space-y-5">
                    {/* Top Row: Flag + Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl drop-shadow-sm">{dest.flag}</span>
                        <div>
                          <h3 className="text-2xl font-black text-[#092545] group-hover:text-[#013777] transition-colors">
                            {dest.country}
                          </h3>
                          <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                            {dest.badge}
                          </span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#013777] group-hover:text-white transition-all">
                        <Globe className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      {dest.tagline}
                    </p>

                    {/* Hospital Network */}
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800">
                        <Building2 className="w-4 h-4 text-sky-600" />
                        <span>Partner Network</span>
                      </div>
                      <p className="text-slate-600 leading-normal pl-5">
                        {dest.network}
                      </p>
                    </div>

                    {/* Lead Time */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span>{dest.leadTime}</span>
                    </div>

                    {/* Key Specialties */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Key Clinical Specialties
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.specialties.map((spec, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-sky-50/70 border border-sky-100 text-xs font-medium text-sky-900"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                      {dest.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Button */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onOpenWhatsAppBooking(`Medical Tourism - ${dest.country}`)}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#013777] to-[#0b5599] hover:from-[#0b5599] hover:to-sky-600 text-white font-bold text-sm shadow-md shadow-[#013777]/20 group-hover:shadow-lg transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire for {dest.country}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE TRAVEL SUPPORT SERVICES (PROFILE'S 6 PILLARS) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-xs font-bold text-[#013777] uppercase tracking-wider shadow-xs">
                <Luggage className="w-4 h-4 text-[#013777]" />
                <span>Turnkey Travel Support Services</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight">
                Complete Concierge From Door to Door
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Every detail of your trip is coordinated by Cairo Hospital’s overseas administrative team, so you and your family can concentrate 100% on recovery.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {travelSupportServices.map((srv, idx) => (
              <Reveal key={idx} delay={idx * 70} className="h-full">
                <div className="h-full p-6 sm:p-7 bg-white rounded-3xl border border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                      {srv.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#092545] mb-2">{srv.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{srv.description}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-teal-700">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>{srv.benefit}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE CAIRO HOSPITAL ADVANTAGE: WHY TRAVEL WITH US */}
      <section className="py-16 sm:py-24 bg-[#001d40] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-sky-300">
                Patient Safety & Clinical Accountability
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                The Cairo Hospital Advantage
              </h2>
              <p className="text-base sm:text-lg text-slate-300">
                Traveling independently for surgery leaves you vulnerable to unrecognized clinics and zero post-operative follow-up back home. See how Cairo Hospital protects you.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Independent Medical Travel (The Risks) */}
            <Reveal variant="left">
              <div className="h-full p-8 rounded-3xl bg-slate-900/70 border border-rose-500/30 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Independent Medical Travel</h3>
                    <p className="text-xs text-rose-300">High Risk & Post-Op Abandonment</p>
                  </div>
                </div>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-bold mt-0.5">•</span>
                    <span><strong>Unverified Clinics:</strong> Patients frequently end up at commercial, sub-tier clinics with questionable credentials.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-bold mt-0.5">•</span>
                    <span><strong>Hidden Financial Exploitation:</strong> Prices escalate upon arrival due to lack of institutional contracts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-bold mt-0.5">•</span>
                    <span><strong>Zero Continuity Back Home:</strong> Local Nigerian doctors do not know what procedure was performed, leading to complications.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-400 font-bold mt-0.5">•</span>
                    <span><strong>Language & Visa Hurdles:</strong> Navigating foreign bureaucracies and embassy paperwork without medical sponsorship.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Cairo Hospital Coordinated Care (The Gold Standard) */}
            <Reveal variant="right">
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-[#012654] to-[#013777] border border-sky-400/50 space-y-6 shadow-2xl relative">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
                    Recommended Protocol
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Cairo Hospital Coordinated Care</h3>
                    <p className="text-xs text-sky-200">Physician-Supervised & Complete Continuity</p>
                  </div>
                </div>
                <ul className="space-y-4 text-sm text-slate-100">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span><strong>Accredited Institutional Tier:</strong> Direct referral only to internationally accredited institutions (JCI / Cleopatra / NHS / DHCC).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span><strong>Pre-Travel Written Quotation:</strong> Negotiated hospital rates with transparent package pricing before you leave Abuja.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span><strong>Post-Return Continuity in Garki 2:</strong> Our physical rehabilitation centre and physicians in Abuja execute post-op recovery.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                    <span><strong>Official Medical Visa Sponsorship:</strong> Comprehensive invitation paperwork for fast-track consular approval.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE 5-STEP JOURNEY ROADMAP */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#013777] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>Step-by-Step Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight">
                Your 5-Step Journey to Healing
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                From your initial file review in Abuja until your full physical recovery, we walk beside you every single step.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {journeySteps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100} className="h-full">
                <div className="h-full p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-sky-400 flex flex-col justify-between space-y-4 transition-all duration-300 relative group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-sky-500/80 group-hover:text-sky-600 transition-colors">
                        {step.step}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-500">
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#092545] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-sky-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>Coordinated by CRC</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE TRAVEL PLANNER & INQUIRY GENERATOR */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-100 via-sky-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Interactive Consultation Assistant</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#092545]">
                  Plan Your Medical Journey in Seconds
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Select your destination and medical needs below to launch a direct WhatsApp consultation with our overseas case officer.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* 1. Destination */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    1. Preferred Destination
                  </label>
                  <select
                    value={plannerDestination}
                    onChange={(e) => setPlannerDestination(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Egypt (Cairo)">Egypt 🇪🇬 (Cleopatra & Partner Hospitals)</option>
                    <option value="Dubai (UAE)">Dubai 🇦🇪 (Robotic & Advanced Care)</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧 (Harley Street)</option>
                    <option value="Turkey (Istanbul)">Turkey 🇹🇷 (Spine & Aesthetics)</option>
                    <option value="United States">United States 🇺🇸 (Advanced Protocols)</option>
                    <option value="Nigeria (Interstate)">Nigeria 🇳🇬 (Abuja - Lagos Transfer)</option>
                  </select>
                </div>

                {/* 2. Specialty */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Clinical Specialty
                  </label>
                  <select
                    value={plannerSpecialty}
                    onChange={(e) => setPlannerSpecialty(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Orthopedics & Joint Replacement">Orthopedics & Joint Replacement</option>
                    <option value="Orthobiologics & Stem Cell Therapy">Orthobiologics & Stem Cell Therapy</option>
                    <option value="Spine Surgery & Neurosurgery">Spine Surgery & Neurosurgery</option>
                    <option value="Cardiology & Bypass Surgery">Cardiology & Bypass Surgery</option>
                    <option value="Oncology & Radiation">Oncology & Radiation</option>
                    <option value="Cosmetic, Dental & Hair Restoration">Cosmetic, Dental & Hair</option>
                    <option value="Comprehensive Executive Checkup">Executive Full-Body Checkup</option>
                  </select>
                </div>

                {/* 3. Companion */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    3. Traveling Party
                  </label>
                  <select
                    value={plannerCompanion}
                    onChange={(e) => setPlannerCompanion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-sm font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  >
                    <option value="Patient Traveling Solo">Patient Traveling Solo</option>
                    <option value="Patient + 1 Companion">Patient + 1 Companion</option>
                    <option value="Patient + Family (2+ Companions)">Patient + Family</option>
                    <option value="Medical Escort Required">Medical Escort / Stretcher Required</option>
                  </select>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 text-center">
                <button
                  type="button"
                  onClick={handleLaunchWhatsAppPlanner}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-base shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Start WhatsApp Consultation for {plannerDestination}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-slate-500 mt-3">
                  Direct encrypted connection to Cairo Hospital Overseas Coordination Desk · No booking fees
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          <Reveal>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-[#013777] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-[#013777]" />
                <span>Got Questions?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#092545] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-slate-600">
                Clear answers regarding visas, companions, cost estimates, and post-travel follow-up in Nigeria.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-800 hover:text-[#013777] transition-colors cursor-pointer"
                    >
                      <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#013777] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM EMERGENCY & DIRECT CONTACT BANNER */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#013777] via-[#012654] to-[#001d40] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md">
              <div className="space-y-3 text-center md:text-left">
                <span className="px-3 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  Direct Medical Travel Liaison
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Ready to Discuss Your Case with Our Consultants?
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                  Visit our clinic at 16 Oke Agbe Street, Garki 2, Abuja, or connect directly through our 24/7 dedicated WhatsApp coordination desk.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenWhatsAppBooking('Direct Medical Tourism Desk')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp Overseas Desk</span>
                </button>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>Back to Homepage</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
