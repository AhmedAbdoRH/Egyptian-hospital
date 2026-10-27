import {
  TeamMember,
  MedicalService,
  ServiceDepartmentId,
  OrthobiologicProcedure,
  HospitalFacilityItem,
  AccreditationOrg,
} from '../types/hospital';

export const HOSPITAL_CONTACT = {
  name: 'Cairo Hospital',
  subtitle: 'Cairo Rehabilitation Centre (CRC)',
  tagline: 'International Standard Multi-Specialties Hospital',
  established: 2019,
  presenceSince: 1971,
  address: '16 Oke Agbe Street, Garki 2, Abuja, FCTA, Nigeria',
  city: 'Abuja',
  state: 'FCTA',
  country: 'Nigeria',
  phone1: '+2349129799999',
  phone2: '+2349098656437',
  whatsappNumber: '2349129799999',
  whatsappSecondary: '2349098656437',
  whatsappDisplay: '+234 912 979 9999',
  email: 'nigeria.crc@gmail.com',
  workingHours: '24/7 Emergency & Inpatient Services | Outpatient Clinics: 8:00 AM - 9:00 PM',
};

export const HOSPITAL_STATS = [
  { value: '1971', label: 'Legacy in Nigeria', sublabel: 'Over 5 Decades of Care' },
  { value: '22+', label: 'Medical Specialties', sublabel: 'Comprehensive Tertiary Care' },
  { value: '100%', label: 'Dedicated Diagnostic Tech', sublabel: 'Digital X-Ray & Lab' },
  { value: '24/7', label: 'Emergency & Ambulance', sublabel: 'Immediate Response Unit' },
];

export const PILLARS_OF_CARE = [
  {
    title: 'HYGIENE',
    description: 'Strict clinical sterilization, HEPA-filtered surgical suites, and aseptic operating standards.',
    icon: 'ShieldCheck',
  },
  {
    title: 'COMFORT',
    description: 'Patient-first amenities, private inpatient suites, and compassionate healing environments.',
    icon: 'HeartHandshake',
  },
  {
    title: 'CARE',
    description: 'Multidisciplinary treatment plans delivered by experienced Egyptian and Nigerian medical leaders.',
    icon: 'Stethoscope',
  },
  {
    title: 'REASSURANCE',
    description: 'Transparent clinical consultations, accurate diagnostics, and prompt evidence-based treatment.',
    icon: 'Activity',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dr-ahmed-shaker',
    isDoctor: true,
    name: 'Dr. Ahmed Shaker',
    role: 'Chairman',
    title: 'Consultant in Obstetrics & Gynaecology',
    education: 'Ain Shams University Medical School',
    qualifications: [
      'MRCOG (Member of the Royal College of Obstetricians and Gynaecologists / Surgeons Dublin)',
      'Vice President of the Egyptian Committee in Nigeria',
      'Former Medical Director, National Electric Power Authority (NEPA)',
      'Former Director of AGUDA Hospital in Lagos & Weaner Hospital in Abuja',
      'Chief Medical Director (CMD), Katameya Hospital (Founded 2019)',
    ],
    careerHighlights: [
      'Over five decades of distinguished healthcare leadership in Nigeria since 1970',
      'Oversaw a national network of over 130 hospitals across Nigeria as NEPA Medical Director until 1991',
      'Founded Cairo Hospital in Abuja to establish an Egyptian-standard tertiary healthcare beacon in West Africa',
    ],
    image: '/images/team/dr-ahmed-shaker.png',
    fullBio:
      'Dr. Ahmed Shaker received his medical education at Ain Shams University and holds the prestigious MRCOG qualification. With a remarkable career spanning over five decades, Dr. Shaker has made monumental contributions to healthcare in Nigeria. He began his journey in 1970, serving as the Medical Director of NEPA, overseeing a network of over 130 hospitals across the nation until 1991. Transitioning to the private sector, Dr. Shaker served as Director of AGUDA Hospital in Lagos and Weaner Hospital in Abuja. In 2019, he partnered with leading medical investors to establish Katameya Hospital and Cairo Hospital in Abuja, further expanding his enduring legacy of healthcare innovation and compassionate patient care in Nigeria and across West Africa.',
  },
  {
    id: 'dr-mohammed-hesham',
    isDoctor: true,
    name: 'Dr. Mohammed Hesham',
    role: 'Chief Medical Director (CMD)',
    title: 'Consultant Orthopedic & Joint Reconstruction Surgeon',
    education: 'Faculty of Medicine, Ain Shams University',
    qualifications: [
      'Senior Consultant in Orthopedic Surgery & Traumatology',
      'Specialist in Advanced Arthroplasty, Prolotherapy & BMAC Cell Therapy',
      'Leader in Joint Deformity Correction & Minimally Invasive Orthopedic Interventions',
    ],
    careerHighlights: [
      'Pioneered advanced orthobiologics treatments in Abuja, including Stem Cell therapy and Prolotherapy',
      'Heads the surgical and orthopedic inpatient theater at Cairo Hospital',
      'Extensive clinical experience in complex trauma management and diabetic foot limb salvage',
    ],
    image: '/images/team/dr-mohammed-hesham.png',
    fullBio:
      'Dr. Mohammed Hesham is the Chief Medical Director at Cairo Hospital and a Senior Consultant Orthopedic Surgeon trained at Ain Shams University. Dr. Hesham leads the hospital’s advanced orthopedic surgery and orthobiologics divisions, specializing in knee and hip arthroplasty, reconstructive hand and foot surgeries, external fixation, and cutting-edge regenerative treatments such as Stem Cell Therapy, PRP, and Prolotherapy.',
  },
  {
    id: 'mr-mohammed-fadl',
    isDoctor: false,
    name: 'Mr. Mohammed Fadl',
    role: 'Finance Director',
    title: 'Director of Financial Operations & Strategic Partnerships',
    education: 'Faculty of Commerce, Al-Azhar University',
    qualifications: [
      'Accredited Accounting & Financial Strategist, Al-Azhar University',
      'Director, Rahma Travel Agency (Medical Logistics & Tourism)',
      'Expert in Healthcare Financial Architecture & Insurance Network Contracting',
    ],
    careerHighlights: [
      'Architect of financial compliance with national health systems including NHIS',
      'Orchestrates international travel and logistics for Cairo Hospital’s Medical Tourism division',
      'Steers capital investments in advanced diagnostic and medical imaging technologies',
    ],
    image: '/images/team/mr-mohammed-fadl.png',
    fullBio:
      'Mr. Mohammed Fadl brings vast corporate finance and medical logistics expertise to Cairo Hospital. A graduate of Al-Azhar University and Director of Rahma Travel Agency, he ensures smooth fiscal operations, seamless corporate enrolments with multinational organizations, and transparent medical tourism travel arrangements for patients seeking specialized care abroad.',
  },
  {
    id: 'mr-basem-makhlouf',
    isDoctor: false,
    name: 'Mr. Basem Makhlouf',
    role: 'Business Development Director',
    title: 'Director of Business Development & Strategic Growth',
    education: 'Faculty of Science, Cairo University',
    qualifications: [
      'Faculty of Science, Cairo University',
      'Founder & Owner of Red Sea Green Solutions for Solar Energy',
      'Strategic Healthcare Partnerships & Institutional Growth',
    ],
    careerHighlights: [
      'Directs business development, corporate relations, and strategic partnerships at Cairo Hospital Abuja',
      'Founder & Owner of Red Sea Green Solutions for Solar Energy, advancing sustainable healthcare infrastructure',
      'Expands corporate and institutional healthcare outreach across Abuja and West Africa',
    ],
    image: '/images/team/mr-bassem-makhlouf.png',
    fullBio:
      'Mr. Basem Makhlouf serves as Business Development Director at Cairo Hospital in Abuja. A graduate of the Faculty of Science at Cairo University and Founder & Owner of Red Sea Green Solutions for Solar Energy, he leads strategic partnerships, corporate outreach, and sustainable operational growth for the hospital.',
  },
  {
    id: 'dr-bassam',
    isDoctor: true,
    name: 'Dr. Bassam',
    role: 'Physiotherapist',
    title: 'Physiotherapy, Cupping & Acupuncture',
    education: '',
    qualifications: [
      'Physiotherapy',
      'Cupping',
      'Acupuncture',
    ],
    careerHighlights: [
      'Comprehensive physiotherapy and neuromuscular rehabilitation programs',
      'Therapeutic cupping sessions for pain relief and recovery',
      'Clinical acupuncture for targeted pain management and mobility',
    ],
    image: '',
    fullBio:
      'Dr. Bassam is part of Cairo Hospital’s clinical rehabilitation team in Abuja, providing specialized physiotherapy, cupping, and acupuncture treatments tailored to patient recovery, mobility restoration, and pain management.',
  },
  {
    id: 'dr-wael',
    isDoctor: true,
    name: 'Dr. Wael',
    role: 'General Surgeon',
    title: 'General, Endoscopic & Laparoscopic Surgery',
    education: '',
    qualifications: [
      'General Surgery',
      'Endoscopic Surgery',
      'Laparoscopic Surgery',
      'Bariatric Surgery',
      'Plastic Surgery',
      'Dermatology & Cosmetics',
    ],
    careerHighlights: [
      'General and endoscopic surgical services',
      'Laparoscopic and bariatric surgery',
      'Plastic surgery, dermatology, and cosmetic services',
    ],
    image: '',
    fullBio:
      'Dr. Wael is a general surgeon whose listed services include endoscopic, laparoscopic, bariatric, and plastic surgery, as well as dermatology and cosmetic services.',
  },
];

export const SERVICE_DEPARTMENTS: {
  id: ServiceDepartmentId;
  label: string;
  shortLabel: string;
}[] = [
  {
    id: 'orthopedics',
    label: 'Orthopedics',
    shortLabel: 'Orthopedics',
  },
  {
    id: 'physiotherapy',
    label: 'Physiotherapy',
    shortLabel: 'Physiotherapy',
  },
  {
    id: 'obgyn',
    label: 'Obstetrics & Gynaecology',
    shortLabel: 'Obstetrics & Gynaecology',
  },
  {
    id: 'general-surgery',
    label: 'General Surgery',
    shortLabel: 'General Surgery',
  },
  {
    id: 'medicine-herbal',
    label: 'Family, Tropical & Herbal Medicine',
    shortLabel: 'Family · Tropical · Herbal',
  },
  {
    id: 'diagnostics-support',
    label: 'Diagnostics, Support & Medical Tourism',
    shortLabel: 'Diagnostics · Pharmacy · Ambulance · Tourism',
  },
];

export const MEDICAL_SERVICES: MedicalService[] = [
  // 1. Orthopedics
  {
    id: 'orthopedic-surgery',
    title: 'Orthopedic Surgery',
    departmentId: 'orthopedics',
    departmentLabel: 'Orthopedics',
    category: 'surgical',
    description:
      'Specialized joint replacements, hand and foot surgeries, complex trauma reconstructions, and external fixation for deformities.',
    iconName: 'Bone',
    details: [
      'Total knee and hip arthroplasty',
      'Hand and microsurgical reconstructions',
      'Foot and ankle deformities correction',
      'External fixation of non-union fractures',
    ],
    featured: true,
  },
  {
    id: 'orthobiologics',
    title: 'Orthobiologics (Stem Cells Regenerative Therapy)',
    departmentId: 'orthopedics',
    departmentLabel: 'Orthopedics',
    category: 'regenerative',
    description:
      'State-of-the-art non-surgical joint restoration utilizing Stem Cell regenerative therapy, Prolotherapy, PRP, and BMAC concentrates.',
    iconName: 'Dna',
    details: [
      'Stem Cell Regenerative Therapy',
      'Prolotherapy injections',
      'Platelet-Rich Plasma (PRP)',
      'Bone Marrow Aspirate Concentrate (BMAC)',
    ],
    featured: true,
  },
  {
    id: 'diabetic-foot',
    title: 'Diabetic Foot Clinic',
    departmentId: 'orthopedics',
    departmentLabel: 'Orthopedics',
    category: 'clinical',
    description:
      'Comprehensive diabetic neuropathy management, wound debridement, infection prevention, and limb salvage protocols.',
    iconName: 'Footprints',
    details: [
      'Advanced specialized dressings',
      'Ulcer prevention and off-loading therapy',
      'Limb preservation multidisciplinary team',
    ],
    featured: true,
  },
  {
    id: 'pain-management',
    title: 'Pain Management Clinic',
    departmentId: 'orthopedics',
    departmentLabel: 'Orthopedics',
    category: 'clinical',
    description:
      'Specialized clinical assessment and targeted interventional relief for acute and chronic joint, spinal, and musculoskeletal pain.',
    iconName: 'HeartPulse',
    details: [
      'Acute and chronic pain assessment',
      'Targeted joint and spine pain protocols',
      'Coordinated rehabilitation planning',
    ],
  },
  {
    id: 'bemer-therapy',
    title: 'BEMER Therapy',
    departmentId: 'orthopedics',
    departmentLabel: 'Orthopedics',
    category: 'regenerative',
    description:
      'Bio-Electro-Magnetic Energy Regulation vascular therapy stimulating microcirculation, cellular oxygenation, and tissue healing.',
    iconName: 'Zap',
    details: [
      'Enhanced microcirculation in capillaries',
      'Accelerated muscle and wound recovery',
      'Complementary therapy for chronic joint pain',
    ],
    featured: true,
  },

  // 2. Physiotherapy
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    departmentId: 'physiotherapy',
    departmentLabel: 'Physiotherapy',
    category: 'clinical',
    description:
      'Full-spectrum physical rehabilitation gym at Cairo Rehabilitation Centre with modern kinetic equipment and post-operative mobility recovery.',
    iconName: 'Activity',
    details: [
      'Targeted kinetic rehabilitation',
      'Post-orthopedic surgery physical therapy',
      'Pediatric neuromuscular rehabilitation',
      'Spinal decompressive therapy',
    ],
    featured: true,
  },
  {
    id: 'cupping-therapy',
    title: 'Cupping',
    departmentId: 'physiotherapy',
    departmentLabel: 'Physiotherapy',
    category: 'clinical',
    description:
      'Clinical cupping therapy sessions integrated into physical rehabilitation for myofascial release, circulation, and recovery.',
    iconName: 'Sparkles',
    details: [
      'Therapeutic myofascial decompression',
      'Localized circulation enhancement',
      'Integrated physical therapy support',
    ],
  },
  {
    id: 'acupuncture',
    title: 'Acupuncture',
    departmentId: 'physiotherapy',
    departmentLabel: 'Physiotherapy',
    category: 'clinical',
    description:
      'Precision clinical acupuncture offered as part of complementary neuromuscular care, pain modulation, and rehabilitation.',
    iconName: 'Activity',
    details: [
      'Neuromuscular pain modulation',
      'Post-injury functional recovery',
      'Sterile single-use clinical protocols',
    ],
  },

  // 3. Obstetrics & Gynaecology
  {
    id: 'obstetrics-gynaecology',
    title: 'Obstetrics & Gynaecology',
    departmentId: 'obgyn',
    departmentLabel: 'Obstetrics & Gynaecology',
    category: 'clinical',
    description:
      'Comprehensive women’s healthcare, safe delivery suites, and surgical gynaecology led by senior Royal College Fellows (MRCOG).',
    iconName: 'Baby',
    details: [
      'Comprehensive clinical & surgical gynaecology',
      'Safe delivery suites & maternity inpatient ward',
      'Consultant MRCOG clinical supervision',
    ],
    featured: true,
  },
  {
    id: 'antenatal-care',
    title: 'Antenatal Care',
    departmentId: 'obgyn',
    departmentLabel: 'Obstetrics & Gynaecology',
    category: 'clinical',
    description:
      'Structured pregnancy follow-up, maternal-fetal ultrasound monitoring, high-risk pregnancy care, and postnatal guidance.',
    iconName: 'Baby',
    details: [
      'Scheduled trimester screenings & fetal imaging',
      'High-risk pregnancy monitoring',
      'Safe delivery planning & postnatal support',
    ],
  },
  {
    id: 'infertility',
    title: 'Infertility',
    departmentId: 'obgyn',
    departmentLabel: 'Obstetrics & Gynaecology',
    category: 'clinical',
    description:
      'Dedicated fertility assessments, hormonal profiling, ovulation induction, and tailored reproductive care for couples.',
    iconName: 'Baby',
    details: [
      'Male & female fertility evaluations',
      'Reproductive hormonal profiling',
      'Personalized conception treatment plans',
    ],
  },

  // 4. General Surgery
  {
    id: 'general-surgery',
    title: 'General Surgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery',
    category: 'surgical',
    description:
      'Comprehensive abdominal, soft-tissue, and urological surgical procedures performed inside HEPA-filtered sterile operating theaters.',
    iconName: 'Scissors',
    details: [
      'Open & minimally invasive general procedures',
      'Hernia, gallbladder & gastrointestinal surgery',
      'Strict positive-pressure aseptic theater standards',
    ],
  },
  {
    id: 'endoscopic-surgery',
    title: 'Endoscopic Surgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery',
    category: 'surgical',
    description:
      'Diagnostic and therapeutic endoscopic surgical interventions offering high visual precision and rapid patient recovery.',
    iconName: 'Scissors',
    details: [
      'Minimally invasive endoscopic interventions',
      'High-definition visualization',
      'Reduced recovery time & hospital stay',
    ],
  },
  {
    id: 'laparoscopic-surgery',
    title: 'Laparoscopic Surgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery',
    category: 'surgical',
    description:
      'Advanced keyhole abdominal and pelvic surgeries minimizing post-operative discomfort, scarring, and inpatient convalescence.',
    iconName: 'Scissors',
    details: [
      'Laparoscopic cholecystectomy & appendectomy',
      'Minimally invasive abdominal repairs',
      'Accelerated post-surgical mobilization',
    ],
  },
  {
    id: 'bariatric-surgery',
    title: 'Bariatric Surgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery',
    category: 'surgical',
    description:
      'Specialized surgical weight-management procedures supported by comprehensive pre-operative evaluation and nutritional follow-up.',
    iconName: 'Scissors',
    details: [
      'Metabolic & weight-reduction surgery',
      'Pre-operative multidisciplinary assessment',
      'Long-term post-bariatric clinical follow-up',
    ],
  },
  {
    id: 'plastic-surgery',
    title: 'Plastic Surgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery',
    category: 'surgical',
    description:
      'Reconstructive and aesthetic surgical procedures delivered with meticulous surgical technique and private inpatient recovery.',
    iconName: 'Sparkles',
    details: [
      'Post-trauma & scar reconstruction',
      'Contouring & aesthetic surgical care',
      'Dedicated surgical aftercare',
    ],
  },
  {
    id: 'dermatology-cosmetics',
    title: 'Dermatology & Cosmetics',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery',
    category: 'clinical',
    description:
      'Clinical and cosmetic dermatology services including mesotherapy and skin rejuvenation in collaboration with Skinic Dermatology Clinic.',
    iconName: 'Sparkles',
    details: [
      'Medical skin diagnosis & therapeutics',
      'Mesotherapy & aesthetic rejuvenation',
      'All-natural dermatological care protocols',
    ],
  },

  // 5. Family Medicine, Tropical Medicine & Herbal Medicine
  {
    id: 'family-medicine',
    title: 'Family Medicine',
    departmentId: 'medicine-herbal',
    departmentLabel: 'Family, Tropical & Herbal Medicine',
    category: 'clinical',
    description:
      'Primary healthcare for children, adults, and seniors, encompassing preventative checkups, chronic disease care, and health screenings.',
    iconName: 'Users',
    details: [
      'Comprehensive family health checkups',
      'Hypertension, diabetes & chronic care',
      'Preventative screenings & vaccinations',
    ],
  },
  {
    id: 'tropical-medicine',
    title: 'Tropical Medicine',
    departmentId: 'medicine-herbal',
    departmentLabel: 'Family, Tropical & Herbal Medicine',
    category: 'clinical',
    description:
      'Rapid laboratory-backed diagnosis and evidence-based treatment of malaria, typhoid, and endemic infectious diseases.',
    iconName: 'Stethoscope',
    details: [
      'Acute febrile & endemic infection protocols',
      'Malaria & typhoid targeted therapeutics',
      'Preventative travel & tropical medicine advice',
    ],
  },
  {
    id: 'herbal-medicine',
    title: 'Herbal Medicine',
    departmentId: 'medicine-herbal',
    departmentLabel: 'Family, Tropical & Herbal Medicine',
    category: 'clinical',
    description:
      'Clinically supervised natural and botanical therapeutic formulations supporting holistic wellness and complementary care.',
    iconName: 'Leaf',
    details: [
      'Standardized natural botanical support',
      'Clinician-guided complementary protocols',
      'Integrated wellness & recovery care',
    ],
  },

  // 6. Diagnostics, Pharmacy, Ambulance & Medical Tourism
  {
    id: 'xray-ultrasound',
    title: 'X-Ray & Ultrasound Department',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics, Support & Medical Tourism',
    category: 'diagnostic',
    description:
      'High-frequency digital radiography and high-resolution 2D/3D diagnostic ultrasonography for accurate, immediate clinical imaging.',
    iconName: 'Scan',
    details: [
      'Digital orthopedic, chest & trauma X-rays',
      'Abdominal, pelvic & obstetric ultrasound',
      'Rapid radiologic reporting for clinicians',
    ],
  },
  {
    id: 'laboratory-services',
    title: 'Laboratory Services',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics, Support & Medical Tourism',
    category: 'diagnostic',
    description:
      'Fully automated in-house clinical pathology, hematology, biochemistry, and microbiology laboratory delivering rapid diagnostic results.',
    iconName: 'Microscope',
    details: [
      'Automated hematology & blood chemistry',
      'Hormonal, metabolic & infection panels',
      'Dual-verified diagnostic quality control',
    ],
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics, Support & Medical Tourism',
    category: 'support',
    description:
      'Accredited on-site hospital pharmacy powered by Alexandria Pharmacy Ltd., dispensing genuine Egyptian and international medications.',
    iconName: 'Pill',
    details: [
      'Authentic Egyptian & European formulations',
      'Direct sourcing via Alexandria Pharmacy Ltd.',
      'Clinical pharmacist medication counseling',
    ],
  },
  {
    id: 'ambulance-services',
    title: 'Ambulance Services',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics, Support & Medical Tourism',
    category: 'support',
    description:
      '24/7 emergency ambulance dispatch and mobile resuscitation unit staffed by trained acute-care personnel across Abuja.',
    iconName: 'Ambulance',
    details: [
      '24-hour emergency ambulance dispatch',
      'On-board resuscitation & trauma monitoring',
      ' Safe inter-facility & airport patient transfers',
    ],
    featured: true,
  },
  {
    id: 'medical-tourism',
    title: 'Medical Tourism',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics, Support & Medical Tourism',
    category: 'support',
    description:
      'End-to-end international patient referrals to premier hospitals in Egypt, the UK, UAE, USA, and Turkey, with visa, travel, and Abuja follow-up.',
    iconName: 'Globe2',
    details: [
      'Expedited medical visas & flight logistics',
      'Direct referral to Cairo & international centers',
      'Pre-travel review & post-return care in Abuja',
    ],
    featured: true,
  },
];

export const ORTHOBIOLOGICS_DATA: OrthobiologicProcedure[] = [
  {
    title: 'Stem Cell Regenerative Therapy',
    abbr: 'Stem Cells',
    description: 'Biological cellular therapy harvesting mesenchymal cells to promote cellular regeneration in degenerated cartilage and tendons.',
    indications: ['Advanced osteoarthritis of the knee and hip', 'Severe chondral defects', 'Degenerative disc disease'],
    benefits: ['Stimulates natural tissue repair', 'Delays or avoids joint replacement', 'Minimally invasive outpatient procedure'],
  },
  {
    title: 'Prolotherapy',
    abbr: 'Prolotherapy',
    description: 'Targeted injection of a natural proliferant solution that stimulates local healing cascades to strengthen lax ligaments and chronic tendon tears.',
    indications: ['Chronic low back and neck pain', 'Sacroiliac joint dysfunction', 'Recurrent ankle sprains and rotator cuff tendinopathy'],
    benefits: ['Re-establishes joint stability', 'Non-surgical resolution of chronic pain', 'Safe, natural, and repeatable'],
  },
  {
    title: 'Platelet-Rich Plasma',
    abbr: 'PRP',
    description: 'Concentrated autologous growth factors derived from the patient’s own blood to accelerate healing in inflamed joints and tissues.',
    indications: ['Knee osteoarthritis (Mild to Moderate)', 'Tennis/Golfer’s elbow', 'Plantar fasciitis and Achilles tendinitis'],
    benefits: ['100% biocompatible autologous serum', 'Reduces joint inflammation and stiffness', 'Improves physical mobility quickly'],
  },
  {
    title: 'Bone Marrow Aspirate Concentrate',
    abbr: 'BMAC',
    description: 'Autologous bone marrow harvesting rich in progenitor cells, anti-inflammatory cytokines, and growth factors for deep tissue healing.',
    indications: ['Avascular necrosis of the femoral head', 'Non-healing bone fractures', 'Cartilage resurfacing procedures'],
    benefits: ['High concentration of regenerative cells', 'Potent anti-inflammatory action', 'Supports bone and cartilage restoration'],
  },
];

export const MEDICAL_TOURISM_DETAILS = {
  title: 'Comprehensive Medical Tourism Services',
  subtitle: 'Seamless Treatment Journeys from Nigeria to Egypt and Worldwide',
  description:
    'At Cairo Hospital, our medical tourism department facilitates premier international treatments for complex clinical cases requiring specialized overseas care in Egypt, the United Kingdom, United Arab Emirates, the United States, and Turkey. From pre-travel consultations to post-operative follow-up back in Abuja, our dedicated medical representatives accompany you at every milestone.',
  destinations: [
    { country: 'Egypt', flag: '🇪🇬', cities: 'Cairo & Alexandria (Katameya Hospital Network)' },
    { country: 'United Kingdom', flag: '🇬🇧', cities: 'London & Dublin Partner Hospitals' },
    { country: 'United Arab Emirates', flag: '🇦🇪', cities: 'Dubai & Abu Dhabi Specialty Centers' },
    { country: 'United States', flag: '🇺🇸', cities: 'Selected Academic Medical Centers' },
    { country: 'Turkey', flag: '🇹🇷', cities: 'Istanbul Tertiary Surgical Centers' },
  ],
  services: [
    {
      title: 'Prompt Visa Provision',
      description: 'Expedited medical visa issuance with official hospital invitation letters and consular coordination.',
      icon: 'FileCheck',
    },
    {
      title: 'Flight Tickets & Travel Logistics',
      description: 'Curated flight bookings, medical escorts if required, and wheelchair assistance across international transit.',
      icon: 'Plane',
    },
    {
      title: 'Premium Accommodation',
      description: 'Comfortable hotel and serviced apartment bookings near our partner hospitals for patients and companions.',
      icon: 'Building',
    },
    {
      title: 'Ground Transportation',
      description: 'VIP airport meet-and-greet, ambulance transfers, and private chauffeurs between clinics and hotels.',
      icon: 'Car',
    },
    {
      title: 'Tailored Medical Treatment Plan',
      description: 'Pre-departure case reviews by Egyptian and international consultants with fixed-cost medical quotes.',
      icon: 'ClipboardList',
    },
    {
      title: 'Continuous Follow-up Back in Abuja',
      description: 'Our medical representatives follow up before departure and continue recovery management at Cairo Hospital upon return.',
      icon: 'CheckCircle2',
    },
  ],
};

export const PARTNERS_DATA = [
  {
    id: 'alexandria-pharmacy',
    name: 'Alexandria Pharmacy Ltd.',
    relationship: 'Affiliated Pharmaceutical Distribution Partner',
    description:
      'We resource and distribute pharmaceutical products from Egypt to Nigeria, as well as collaborating with reputable international pharmaceutical manufacturers to ensure authentic, high-efficacy medications are readily available.',
    image: '/images/partners/alexandria-pharmacy.png',
    shelvesImage: '/images/partners/alexandria-pharmacy-shelves.png',
    badges: ['Egyptian Pharmaceutical Supply', 'Quality Assured Logistics', 'Direct Clinical Sourcing'],
  },
  {
    id: 'skinic-dermatology',
    name: 'Skinic Dermatology Clinic',
    relationship: 'Strategic Clinical Dermatology Partner in Nigeria',
    description:
      'Cairo Hospital is in active partnership with Skinic Dermatology Clinic in Nigeria, housing leading experts in clinical and aesthetic dermatology, Mesotherapy, anti-aging solutions, and all-natural skin rejuvenation.',
    image: '/images/partners/skinic-dermatology.png',
    treatmentImage: '/images/partners/skinic-treatment.png',
    leadership: 'Director in Skinic Dermatology Clinic',
    badges: ['Mesotherapy Treatments', 'Clinical & Cosmetic Dermatology', 'Natural Skin Rejuvenation'],
  },
];

export const ACCREDITATIONS_DATA: AccreditationOrg[] = [
  {
    name: 'National Health Insurance Scheme (NHIS)',
    type: 'accreditation',
    description: 'Fully accredited healthcare provider under the National Health Insurance System for insured civil and private enrollees.',
  },
  {
    name: 'FCDA Health Department',
    type: 'accreditation',
    description: 'Certified and licensed by the Federal Capital Development Authority (FCDA) Health Services Management Board, Abuja.',
  },
  {
    name: 'African Union (AU)',
    type: 'enrolled',
    description: 'Approved healthcare provider for diplomatic and official delegations of the African Union stationed in Nigeria.',
  },
  {
    name: 'United Nations (UN)',
    type: 'enrolled',
    description: 'Enrolled medical facility serving United Nations personnel and agency teams across the Federal Capital Territory.',
  },
  {
    name: 'UNICEF',
    type: 'enrolled',
    description: 'Enrolled partner providing maternal, pediatric, and general clinical care to UNICEF staff and family networks.',
  },
  {
    name: 'NNPC (Nigerian National Petroleum Corporation)',
    type: 'enrolled',
    description: 'Recognized medical destination providing healthcare services for corporate staff and retirees of NNPC.',
  },
];

export const FACILITY_GALLERY: HospitalFacilityItem[] = [
  {
    id: 'fac-1',
    title: 'Hospital Entrance & Gate',
    category: 'Facility',
    image: '/images/facility/building-2026.jpg',
    description: 'External view of Cairo Hospital on Oke Agbe Street, Garki 2, Abuja.',
  },
  {
    id: 'fac-2',
    title: 'Reception & Patient Lounge',
    category: 'Outpatient',
    image: '/images/facility/reception-2026.jpg',
    description: 'Welcoming reception desk and comfortable waiting area for patients and families.',
  },
  {
    id: 'fac-3',
    title: 'Cairo Rehabilitation Centre Hall',
    category: 'Rehabilitation',
    image: '/images/facility/rehabilitation-weights-2026.jpg',
    description: 'Updated rehabilitation gym with strength and mobility equipment for guided recovery.',
  },
  {
    id: 'fac-4',
    title: 'Physiotherapy & Exercise Area',
    category: 'Rehabilitation',
    image: '/images/facility/rehabilitation-therapy-2026.jpg',
    description: 'Therapeutic exercise space with cardio and balance-training equipment.',
  },
  {
    id: 'fac-5',
    title: 'Prolotherapy & Orthobiologics Procedure Room',
    category: 'Clinical',
    image: '/images/facility/prolotherapy.png',
    description: 'Physician administering ultrasound-guided prolotherapy and joint regenerative injections.',
  },
  {
    id: 'fac-6',
    title: 'Emergency Ambulance Fleet',
    category: 'Emergency',
    image: '/images/facility/ambulance-2026.jpg',
    description: 'Rapid response ambulance van stationed for emergency patient transfers across Abuja.',
  },
  {
    id: 'fac-7',
    title: 'Surgical Operating Theater',
    category: 'Surgical',
    image: '/images/facility/operating-room.png',
    description: 'Fully sterile surgical suite supporting orthopedic arthroplasty and general surgeries.',
  },
  {
    id: 'fac-8',
    title: 'Orthopedic Surgery in Progress',
    category: 'Surgical',
    image: '/images/facility/orthopedic-surgery-vector.svg',
    description: 'Consultant surgeons performing complex joint and extremity interventions.',
  },
  {
    id: 'fac-9',
    title: 'Inpatient Suites & Wards',
    category: 'Inpatient',
    image: '/images/facility/inpatient-room-2026.jpg',
    description: 'Private and semi-private recovery rooms ensuring optimal patient hygiene and rest.',
  },
  {
    id: 'fac-10',
    title: 'Hospital Pharmacy Department',
    category: 'Pharmacy',
    image: '/images/facility/pharmacy-2026.jpg',
    description: 'Well-stocked on-site pharmacy affiliated with Alexandria Pharmacy Ltd.',
  },
  {
    id: 'fac-11',
    title: 'Diagnostic Laboratory Department',
    category: 'Diagnostic',
    image: '/images/facility/laboratory-2026.jpg',
    description: 'Fully equipped laboratory diagnostics supporting prompt and accurate medical testing.',
  },
  {
    id: 'fac-12',
    title: 'Maternity & Post-Op Recovery',
    category: 'Inpatient',
    image: '/images/facility/maternity-ward.png',
    description: 'Dedicated post-surgical and obstetrics recovery care with compassionate nursing.',
  },
];
