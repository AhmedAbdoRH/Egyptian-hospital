import {
  TeamMember,
  MedicalService,
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
  phone1: '+2349098656437',
  phone2: '+2349129799999',
  whatsappNumber: '2349098656437',
  whatsappSecondary: '2349129799999',
  whatsappDisplay: '+234 909 865 6437',
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
    id: 'mr-bassem-makhlouf',
    isDoctor: true,
    name: 'Dr. Bassam Makhlouf',
    role: 'Physiotherapist',
    title: 'Physiotherapy, Cupping & Acupuncture',
    education: '',
    qualifications: [
      'Physiotherapy',
      'Cupping Therapy',
      'Acupuncture',
    ],
    careerHighlights: [
      'Provides physiotherapy and rehabilitation services',
      'Provides cupping therapy',
      'Provides acupuncture',
    ],
    image: '/images/team/mr-bassem-makhlouf.png',
    fullBio:
      'Dr. Bassam Makhlouf is part of Cairo Hospital’s clinical team, providing physiotherapy, cupping, and acupuncture services.',
  },
  {
    id: 'mrs-elizabeth-blomqvist',
    isDoctor: false,
    name: 'Mrs. Elizabeth Blomqvist',
    role: 'Executive Team Member',
    title: 'Director of Strategic Partnerships & Healthcare Operations',
    education: 'Executive Healthcare Administration',
    qualifications: [
      'Director in Skinic Dermatology Clinic, Nigeria',
      'Specialist in International Healthcare Partnerships',
      'Expert in Healthcare Operations & Strategic Development',
    ],
    careerHighlights: [
      'Leads strategic partnerships that support hospital operations and patient services',
      'Co-founded strategic partnerships with Skinic Dermatology Centre for advanced aesthetic and clinical care',
      'Contributes to institutional development and multidisciplinary collaboration',
    ],
    image: '/images/team/mrs-elizabeth-blomqvist.png',
    fullBio:
      'Mrs. Elizabeth Blomqvist is a member of Cairo Hospital’s executive team, contributing to strategic partnerships and healthcare operations. She also serves as a Director at Skinic Dermatology Clinic, supporting cross-organizational collaboration and patient-focused service development.',
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

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'emergency-ambulance',
    title: 'Emergency Department & Ambulance Service',
    category: 'clinical',
    description: '24/7 acute trauma response, rapid triage, and dedicated fully equipped emergency ambulance fleet ready for immediate dispatch.',
    iconName: 'Ambulance',
    details: ['Immediate acute resuscitation', 'Dedicated ambulance dispatch vehicle', 'Continuous 24-hour on-duty medical personnel'],
    featured: true,
  },
  {
    id: 'orthopedics-surgery',
    title: 'Orthopedic Surgery & Arthroplasty',
    category: 'surgical',
    description: 'Specialized joint replacements, hand and foot surgeries, complex trauma reconstructions, and external fixation for deformities.',
    iconName: 'Bone',
    details: ['Total knee and hip arthroplasty', 'Hand and microsurgical reconstructions', 'Foot and ankle deformities correction', 'External fixation of non-union fractures'],
    featured: true,
  },
  {
    id: 'orthobiologics',
    title: 'Orthobiologics & Regenerative Therapy',
    category: 'regenerative',
    description: 'State-of-the-art non-surgical joint restoration utilizing Stem Cell therapy, Prolotherapy, PRP, and BMAC concentrates.',
    iconName: 'Dna',
    details: ['Stem Cell Regenerative Therapy', 'Prolotherapy injections', 'Platelet-Rich Plasma (PRP)', 'Bone Marrow Aspirate Concentrate (BMAC)'],
    featured: true,
  },
  {
    id: 'bemer-therapy',
    title: 'BEMER Physical Vascular Therapy',
    category: 'regenerative',
    description: 'Bio-Electro-Magnetic Energy Regulation technology stimulating microcirculation, cellular oxygenation, and tissue healing.',
    iconName: 'Zap',
    details: ['Enhanced microcirculation in capillaries', 'Accelerated muscle and wound recovery', 'Complementary therapy for chronic joint pain'],
    featured: true,
  },
  {
    id: 'diabetic-foot',
    title: 'Diabetic Foot Clinic',
    category: 'clinical',
    description: 'Comprehensive diabetic neuropathy management, wound debridement, infection prevention, and limb salvage protocols.',
    iconName: 'Footprints',
    details: ['Advanced specialized dressings', 'Ulcer prevention and off-loading therapy', 'Limb preservation multidisciplinary team'],
    featured: true,
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy & Cairo Rehabilitation Centre',
    category: 'clinical',
    description: 'Full-spectrum physical rehabilitation gym with modern kinetic equipment, therapeutic exercise, and post-operative mobility recovery.',
    iconName: 'Activity',
    details: ['Targeted kinetic rehabilitation', 'Post-orthopedic surgery physical therapy', 'Pediatric neuromuscular rehabilitation', 'Spinal decompressive therapy'],
    featured: true,
  },
  {
    id: 'pain-management',
    title: 'Pain Management Clinic',
    category: 'clinical',
    description: 'Assessment and care for acute and chronic pain as part of coordinated clinical treatment.',
    iconName: 'HeartPulse',
    details: ['Pain assessment', 'Coordinated treatment planning', 'Rehabilitation support'],
  },
  {
    id: 'cupping-therapy',
    title: 'Cupping Therapy',
    category: 'clinical',
    description: 'Cupping therapy provided as part of the hospital’s complementary rehabilitation services.',
    iconName: 'Sparkles',
  },
  {
    id: 'acupuncture',
    title: 'Acupuncture',
    category: 'clinical',
    description: 'Acupuncture offered as part of complementary care and rehabilitation services.',
    iconName: 'Activity',
  },
  {
    id: 'obstetrics-gyn',
    title: 'Obstetrics, Gynaecology & Infertility',
    category: 'clinical',
    description: 'Maternal-fetal health, antenatal care, safe delivery suites, and fertility evaluations led by senior Fellows of Royal Colleges.',
    iconName: 'Baby',
    details: ['Comprehensive antenatal and postnatal care', 'Infertility assessment & hormonal therapy', 'High-risk pregnancy monitoring', 'Dedicated maternity inpatient ward'],
    featured: true,
  },
  {
    id: 'general-surgery',
    title: 'General Surgery & Urosurgery',
    category: 'surgical',
    description: 'General surgical services including endoscopic and laparoscopic procedures, alongside urological and prostate surgery.',
    iconName: 'Scissors',
    details: ['Endoscopic surgery', 'Laparoscopic and open abdominal procedures', 'Urological surgical interventions', 'Aseptic operating suite standards'],
  },
  {
    id: 'bariatric-surgery',
    title: 'Bariatric Surgery',
    category: 'surgical',
    description: 'Surgical weight-management services provided by the general surgery team.',
    iconName: 'Scissors',
  },
  {
    id: 'plastic-surgery',
    title: 'Plastic Surgery',
    category: 'surgical',
    description: 'Plastic surgery services provided by the general surgery team.',
    iconName: 'Sparkles',
  },
  {
    id: 'dermatology-cosmetics',
    title: 'Dermatology & Cosmetics',
    category: 'clinical',
    description: 'Clinical and cosmetic dermatology services, in collaboration with the hospital’s dermatology partner.',
    iconName: 'Sparkles',
  },
  {
    id: 'internal-specialties',
    title: 'Cardiology, Neurology, Nephrology & Endocrinology',
    category: 'clinical',
    description: 'Expert diagnostic evaluations for cardiovascular conditions, stroke management, diabetes, kidney function, and endocrine disorders.',
    iconName: 'HeartPulse',
    details: ['Cardiovascular ECG and risk management', 'Neurological evaluations and neuropathy care', 'Kidney disease screening and metabolic profiling'],
  },
  {
    id: 'family-tropical',
    title: 'Family Medicine & Tropical Medicine',
    category: 'clinical',
    description: 'Primary community healthcare, preventative health screenings, and expert management of endemic tropical infections.',
    iconName: 'Users',
    details: ['Preventative family checkups', 'Malaria, typhoid, and tropical disease therapeutics', 'Pediatric and adult vaccinations'],
  },
  {
    id: 'diagnostics-lab-xray',
    title: 'Diagnostic Laboratory, Digital X-Ray & Ultrasound',
    category: 'diagnostic',
    description: 'Fully equipped in-house automated clinical laboratory, high-frequency digital radiography, and ultrasonography.',
    iconName: 'Scan',
    details: ['Instant blood chemistry and hematology', 'Digital bone and chest X-rays', 'High-resolution abdominal and pelvic ultrasound'],
  },
  {
    id: 'inpatient-pharmacy',
    title: 'Inpatient Suites & Alexandria Pharmacy',
    category: 'support',
    description: 'Comfortable private and semi-private recovery rooms paired with an accredited on-site pharmacy distributing international medications.',
    iconName: 'Pill',
    details: ['24/7 inpatient clinical nursing', 'Direct resourcing from Alexandria Pharmacy Ltd.', 'Certified genuine pharmaceuticals'],
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
    leadership: 'Led by Mrs. Elizabeth Blomqvist (CEO)',
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
    image: '/images/facility/building.png',
    description: 'External view of Cairo Hospital on Oke Agbe Street, Garki 2, Abuja.',
  },
  {
    id: 'fac-2',
    title: 'Reception & Patient Lounge',
    category: 'Outpatient',
    image: '/images/facility/reception.png',
    description: 'Welcoming reception desk and comfortable waiting area for patients and families.',
  },
  {
    id: 'fac-3',
    title: 'Cairo Rehabilitation Centre Hall',
    category: 'Rehabilitation',
    image: '/images/facility/rehab-hall.png',
    description: 'Spacious physical therapy hall equipped for mobility exercises and neuromuscular recovery.',
  },
  {
    id: 'fac-4',
    title: 'Rehabilitation Gym Equipment',
    category: 'Rehabilitation',
    image: '/images/facility/gym.png',
    description: 'Comprehensive kinetic training gym for sports injury rehab and joint restoration.',
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
    image: '/images/facility/ambulance.png',
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
    image: '/images/facility/orthopedic-surgery.png',
    description: 'Consultant surgeons performing complex joint and extremity interventions.',
  },
  {
    id: 'fac-9',
    title: 'Inpatient Suites & Wards',
    category: 'Inpatient',
    image: '/images/facility/inpatient-suite.png',
    description: 'Private and semi-private recovery rooms ensuring optimal patient hygiene and rest.',
  },
  {
    id: 'fac-10',
    title: 'Hospital Pharmacy Department',
    category: 'Pharmacy',
    image: '/images/facility/hospital-pharmacy.png',
    description: 'Well-stocked on-site pharmacy affiliated with Alexandria Pharmacy Ltd.',
  },
  {
    id: 'fac-11',
    title: 'Diagnostic Laboratory Department',
    category: 'Diagnostic',
    image: '/images/facility/lab-room.png',
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
