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
  presenceSince: 1970,
  address: '16 Oke Agbe Street, Garki 2, Abuja, FCTA, Nigeria',
  city: 'Abuja',
  state: 'FCTA',
  country: 'Nigeria',
  phone1: '+2349129799999',
  whatsappNumber: '2349129799999',
  whatsappDisplay: '+234 912 979 9999',
  email: 'nigeria.crc@gmail.com',
  workingHours: 'Contact the hospital to confirm clinic schedules, pharmacy hours, emergency access, and ambulance availability.',
};

export const HOSPITAL_STATS = [
  { value: '1970', label: 'Chairman’s Work in Nigeria', sublabel: 'Working in Nigeria since 1970' },
  { value: '22', label: 'Services Listed', sublabel: 'Items in the profile’s services list' },
  { value: '3 listed', label: 'Diagnostics', sublabel: 'Laboratory · X-Ray · Ultrasound' },
  { value: 'Listed', label: 'Emergency & Ambulance', sublabel: 'Call to confirm current availability' },
];

export const PILLARS_OF_CARE = [
  {
    title: 'PATIENT COMPLIANCE & SATISFACTION',
    description: 'A named aim in the supplied hospital profile.',
    icon: 'Users',
  },
  {
    title: 'ACCURATE DIAGNOSIS & EFFECTIVE TREATMENT',
    description: 'A named aim in the supplied hospital profile.',
    icon: 'Microscope',
  },
  {
    title: 'HYGIENE',
    description: 'A named pillar of the hospital’s stated aim.',
    icon: 'ShieldCheck',
  },
  {
    title: 'COMFORT',
    description: 'A named pillar of the hospital’s stated aim.',
    icon: 'HeartHandshake',
  },
  {
    title: 'CARE',
    description: 'A named pillar of the hospital’s stated aim.',
    icon: 'Stethoscope',
  },
  {
    title: 'REASSURANCE',
    description: 'A named pillar of the hospital’s stated aim.',
    icon: 'Activity',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dr-ahmed-shaker',
    isDoctor: true,
    name: 'Dr. Ahmed Shaker',
    role: 'Chairman',
    title: 'Consultant Obstetrics & Gynaecology',
    education: 'Ain Shams University',
    qualifications: [
      'MRCOG (member of the Royal College of Surgeons in Dublin)',
      'Vice President of the Egyptian Committee in Nigeria',
      'Former Medical Director, National Electric Power Authority (NEPA)',
      'Managed AGUDA Hospital in Lagos and Weaner Hospital in Abuja',
      'CMD, Katameya Hospital',
    ],
    careerHighlights: [
      'Worked in Nigeria since 1970',
      'NEPA Medical Director from 1970 to 1991; managed more than 130 hospitals under his authority',
      'Partnered with investors to establish Katameya Hospital until 2019',
    ],
    image: '/images/team/dr-ahmed-shaker.png',
    fullBio:
      'Dr. Ahmed Shaker is Chairman and Consultant in Obstetrics & Gynaecology. The profile lists Ain Shams University, MRCOG (member of the Royal College of Surgeons in Dublin), his role as Vice President of the Egyptian Committee in Nigeria, and his earlier medical leadership in Nigeria. He worked as NEPA Medical Director from 1970 to 1991, managing more than 130 hospitals under his authority, then managed AGUDA Hospital in Lagos and Weaner Hospital in Abuja, and partnered with investors to establish Katameya Hospital until 2019.',
  },
  {
    id: 'dr-mohammed-hesham',
    isDoctor: true,
    name: 'Dr. Mohammed Hesham',
    role: 'CMD',
    title: 'Consultant Orthopedic Surgery',
    education: 'Ain Shams University',
    qualifications: [
      'Consultant Orthopedic Surgery',
      'Ain Shams University',
    ],
    careerHighlights: [
      'Chief Medical Director (CMD)',
      'Consultant Orthopedic Surgery',
    ],
    image: '/images/team/dr-mohammed-hesham.png',
    fullBio:
      'The hospital profile lists Dr. Mohammed Hesham as CMD and Consultant in Orthopedic Surgery, with Ain Shams University named in his profile.',
  },
  {
    id: 'dr-wael',
    isDoctor: true,
    name: 'Dr. Wael Khalil',
    role: 'Bariatric Surgeon',
    title: 'Bariatric Surgeon',
    education: '',
    qualifications: [
      'Laparoscopic Surgeries',
      'Bariatric Surgeries',
      'Oncology Surgeries',
    ],
    careerHighlights: [
      'Laparoscopic surgeries',
      'Bariatric surgeries',
      'Oncology surgeries',
    ],
    image: '/images/team/dr-wael-khalil.jpg',
    fullBio:
      'The current supplied profile identifies Dr. Wael Khalil as a Bariatric Surgeon and lists laparoscopic, bariatric, and oncology surgeries within his clinical scope. Contact Cairo Hospital to confirm consultation availability and case-specific services.',
  },
  {
    id: 'dr-bassam',
    isDoctor: true,
    name: 'Dr. Bassam',
    role: 'Physical Therapy',
    title: 'Physical Therapy',
    education: '',
    qualifications: [
      'Myofascial Therapy',
      'Cupping',
      'Acupuncture',
      'Neurological Disorders',
      'Musculoskeletal Disorders',
    ],
    careerHighlights: [
      'Physical therapy',
      'Myofascial therapy, cupping, and acupuncture',
      'Neurological and musculoskeletal disorders',
    ],
    image: '/images/team/dr-bassam-physical-therapy.jpg',
    fullBio:
      'The supplied profile lists Dr. Bassam under Physical Therapy, Myofascial Therapy, Cupping, and Acupuncture, with neurological and musculoskeletal disorders included in the stated scope. Contact the hospital to confirm availability and suitability.',
  },
  {
    id: 'mr-mohammed-fadl',
    isDoctor: false,
    name: 'Mr. Mohammed Fadl',
    role: 'Finance Director',
    title: 'Finance Director',
    education: 'Al-Azhar University',
    qualifications: [
      'ACC. AZHAR UNIVERSITY',
      'Director, Rahma Travel Agency',
    ],
    careerHighlights: [
      'Finance Director at Cairo Hospital',
      'Director of Rahma Travel Agency',
    ],
    image: '/images/team/mr-mohammed-fadl.png',
    fullBio:
      'The supplied profile lists Mr. Mohammed Fadl as Finance Director, notes “ACC. AZHAR UNIVERSITY,” and identifies him as Director of Rahma Travel Agency.',
  },
  {
    id: 'mr-basem-makhlouf',
    isDoctor: false,
    name: 'Mr. Bassem Makhlouf',
    role: 'Business Development Director',
    title: 'Business Development Director',
    education: 'Faculty of Science, Cairo University',
    qualifications: [
      'Faculty of Science, Cairo University',
    ],
    careerHighlights: [
      'Business Development Director at Cairo Hospital',
    ],
    image: '/images/team/mr-bassem-makhlouf.png',
    fullBio:
      'The supplied profile lists Mr. Bassem Makhlouf as Business Development Director and names the Faculty of Science, Cairo University.',
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
    label: 'General Surgery & Urosurgery',
    shortLabel: 'General · Urosurgery',
  },
  {
    id: 'specialist-clinics',
    label: 'Specialist Clinics',
    shortLabel: 'Specialist Clinics',
  },
  {
    id: 'family-tropical',
    label: 'Family & Tropical Medicine',
    shortLabel: 'Family · Tropical',
  },
  {
    id: 'diagnostics-support',
    label: 'Diagnostics, Support & Medical Tourism',
    shortLabel: 'Diagnostics · Pharmacy · Ambulance · Tourism',
  },
];

export const MEDICAL_SERVICES: MedicalService[] = [
  {
    id: 'emergency-department', title: 'Emergency Department', departmentId: 'diagnostics-support', departmentLabel: 'Diagnostics & Support', category: 'support',
    description: 'Emergency Department is listed in the supplied hospital profile. Contact the hospital directly to confirm current access and availability.', iconName: 'Ambulance', details: ['Emergency Department listed in the profile', 'Call to confirm current access and availability'], featured: true,
  },
  {
    id: 'general-surgery', title: 'General Surgery', departmentId: 'general-surgery', departmentLabel: 'General Surgery & Urosurgery', category: 'surgical',
    description: 'General Surgery is listed among the hospital services. The profile also lists laparoscopic, bariatric, and oncology surgeries in Dr. Wael Khalil’s scope.', iconName: 'Scissors', details: ['General Surgery', 'Dr. Wael Khalil: laparoscopic surgeries', 'Dr. Wael Khalil: bariatric surgeries', 'Dr. Wael Khalil: oncology surgeries'], featured: true,
  },
  {
    id: 'outpatient-clinics', title: 'Outpatient Clinics', departmentId: 'specialist-clinics', departmentLabel: 'Specialist Clinics', category: 'clinical',
    description: 'Outpatient clinics are listed in the hospital profile. Contact the hospital to confirm clinic schedules and consultant availability.', iconName: 'Stethoscope', details: ['Outpatient Clinics listed in the profile', 'Appointments and availability confirmed by the hospital'], featured: true,
  },
  {
    id: 'ambulance-services', title: 'Ambulance Service', departmentId: 'diagnostics-support', departmentLabel: 'Diagnostics & Support', category: 'support',
    description: 'Ambulance Service is listed in the supplied profile. Call Cairo Hospital to confirm current availability and arrangements.', iconName: 'Ambulance', details: ['Ambulance service listed in the profile', 'Call to confirm current availability and arrangements'], featured: true,
  },
  {
    id: 'urosurgery', title: 'Urosurgery', departmentId: 'general-surgery', departmentLabel: 'General Surgery & Urosurgery', category: 'surgical',
    description: 'Urosurgery is listed in the hospital profile. Contact the hospital to confirm consultant availability and the services relevant to your case.', iconName: 'Scissors', details: ['Urosurgery listed in the profile', 'Case-specific availability confirmed by the hospital'],
  },
  {
    id: 'cardiology', title: 'Cardiology', departmentId: 'specialist-clinics', departmentLabel: 'Specialist Clinics', category: 'clinical',
    description: 'Cardiology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.', iconName: 'HeartPulse', details: ['Cardiology listed in the profile', 'Consultant schedule confirmed at booking'],
  },
  {
    id: 'orthopedic-surgery', title: 'Orthopedic Surgery', departmentId: 'orthopedics', departmentLabel: 'Orthopedics', category: 'surgical',
    description: 'The profile lists orthopedic surgeries including arthroplasty, hand surgeries, foot and ankle surgeries, external fixation, and deformities.', iconName: 'Bone', details: ['Arthroplasty', 'Hand surgeries', 'Foot and ankle surgeries', 'External fixation and deformities'], featured: true,
  },
  {
    id: 'family-medicine', title: 'Family Medicine', departmentId: 'family-tropical', departmentLabel: 'Family & Tropical Medicine', category: 'clinical',
    description: 'Family Medicine is listed among the hospital services. Contact the hospital to confirm clinic availability.', iconName: 'Users', details: ['Family Medicine listed in the profile', 'Consultation availability confirmed by the hospital'],
  },
  {
    id: 'neurology', title: 'Neurology', departmentId: 'specialist-clinics', departmentLabel: 'Specialist Clinics', category: 'clinical',
    description: 'Neurology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.', iconName: 'Activity', details: ['Neurology listed in the profile', 'Consultant schedule confirmed at booking'],
  },
  {
    id: 'physiotherapy', title: 'Physiotherapy', departmentId: 'physiotherapy', departmentLabel: 'Physiotherapy', category: 'clinical',
    description: 'The profile lists Physical Therapy, Myofascial Therapy, Cupping, and Acupuncture with Dr. Bassam, including neurological and musculoskeletal disorders.', iconName: 'Activity', details: ['Physical therapy', 'Myofascial therapy', 'Cupping', 'Acupuncture', 'Neurological and musculoskeletal disorders'], featured: true,
  },
  {
    id: 'tropical-medicine', title: 'Tropical Medicine', departmentId: 'family-tropical', departmentLabel: 'Family & Tropical Medicine', category: 'clinical',
    description: 'Tropical Medicine is listed among the hospital services. Contact the hospital to confirm clinic availability.', iconName: 'Stethoscope', details: ['Tropical Medicine listed in the profile', 'Consultation availability confirmed by the hospital'],
  },
  {
    id: 'nephrology', title: 'Nephrology', departmentId: 'specialist-clinics', departmentLabel: 'Specialist Clinics', category: 'clinical',
    description: 'Nephrology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.', iconName: 'Activity', details: ['Nephrology listed in the profile', 'Consultant schedule confirmed at booking'],
  },
  {
    id: 'orthobiologics', title: 'Orthobiologics', departmentId: 'orthopedics', departmentLabel: 'Orthopedics', category: 'regenerative',
    description: 'The profile lists stem-cell regenerative therapy, prolotherapy, PRP, and BMAC under orthobiologics for musculoskeletal degenerative or traumatic disorders.', iconName: 'Dna', details: ['Stem-cell regenerative therapy', 'Prolotherapy', 'PRP', 'BMAC', 'Page 7 lists sports medicine, spinal implications, minimal invasive procedures, demand for viscosupplementation, and stem-cells-based treatments'], featured: true,
  },
  {
    id: 'laboratory-services', title: 'Laboratory', departmentId: 'diagnostics-support', departmentLabel: 'Diagnostics & Support', category: 'diagnostic',
    description: 'A fully equipped laboratory diagnostic department is listed in the hospital profile. Contact the hospital to confirm tests and arrangements.', iconName: 'Microscope', details: ['Fully equipped laboratory diagnostic department listed in the profile'], featured: true,
  },
  {
    id: 'gastroenterology', title: 'Gastroenterology', departmentId: 'specialist-clinics', departmentLabel: 'Specialist Clinics', category: 'clinical',
    description: 'Gastroenterology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.', iconName: 'Stethoscope', details: ['Gastroenterology listed in the profile', 'Consultant schedule confirmed at booking'],
  },
  {
    id: 'diabetic-foot', title: 'Diabetic Foot Clinic', departmentId: 'orthopedics', departmentLabel: 'Orthopedics', category: 'clinical',
    description: 'Diabetic Foot Clinic is listed among the hospital services. Contact the hospital to confirm clinic availability.', iconName: 'Footprints', details: ['Diabetic Foot Clinic listed in the profile', 'Contact the hospital for assessment availability'],
  },
  {
    id: 'x-ray', title: 'X-Ray', departmentId: 'diagnostics-support', departmentLabel: 'Diagnostics & Support', category: 'diagnostic',
    description: 'Digital X-ray is listed in the hospital profile. Contact the hospital to confirm the investigation and arrangements.', iconName: 'Scan', details: ['Digital X-ray department listed in the profile'],
  },
  {
    id: 'endocrinology', title: 'Endocrinology', departmentId: 'specialist-clinics', departmentLabel: 'Specialist Clinics', category: 'clinical',
    description: 'Endocrinology is listed among the outpatient services in the hospital profile. Contact the hospital to confirm clinic availability.', iconName: 'Stethoscope', details: ['Endocrinology listed in the profile', 'Consultant schedule confirmed at booking'],
  },
  {
    id: 'obstetrics-gynaecology', title: 'Obstetrics & Gynaecology', departmentId: 'obgyn', departmentLabel: 'Obstetrics & Gynaecology', category: 'clinical',
    description: 'Obstetrics & Gynaecology is listed in the profile. Dr. Ahmed Shaker is identified as a Consultant in Obstetrics & Gynaecology.', iconName: 'Baby', details: ['Obstetrics & Gynaecology service listed in the profile', 'Consultant availability confirmed by the hospital'], featured: true,
  },
  {
    id: 'ultrasound', title: 'Ultrasound', departmentId: 'diagnostics-support', departmentLabel: 'Diagnostics & Support', category: 'diagnostic',
    description: 'Ultrasound is listed among the diagnostic services in the hospital profile. Contact the hospital to confirm availability and arrangements.', iconName: 'Scan', details: ['Ultrasound department listed in the profile'],
  },
  {
    id: 'infertility', title: 'Infertility', departmentId: 'obgyn', departmentLabel: 'Obstetrics & Gynaecology', category: 'clinical',
    description: 'Infertility is listed among the hospital services. Contact the hospital to confirm consultation availability.', iconName: 'Baby', details: ['Infertility service listed in the profile', 'Consultation availability confirmed by the hospital'],
  },
  {
    id: 'pharmacy', title: 'Pharmacy', departmentId: 'diagnostics-support', departmentLabel: 'Diagnostics & Support', category: 'support',
    description: 'The profile lists a pharmacy department. Contact Cairo Hospital to confirm current opening hours and product availability.', iconName: 'Pill', details: ['Pharmacy department listed in the profile', 'Hours and product availability confirmed by phone'], featured: true,
  },
  {
    id: 'bemer-therapy', title: 'BEMER Therapy', departmentId: 'orthopedics', departmentLabel: 'Orthopedics', category: 'regenerative',
    description: 'BEMER Therapy is listed in the profile as Bio Electro Magnetic Energy Resonance Therapy.', iconName: 'Zap', details: ['Bio Electro Magnetic Energy Resonance Therapy', 'Discuss suitability and expected outcomes with a qualified clinician'],
  },
  {
    id: 'medical-tourism', title: 'Medical Tourism', departmentId: 'diagnostics-support', departmentLabel: 'Diagnostics & Support', category: 'support',
    description: 'The profile lists Dubai, UK, Nigeria, Egypt, USA, and Turkey as destinations, with visa provision, tickets, accommodation, transport, a medical plan, and representative follow-up.', iconName: 'Globe2', details: ['Visa provision', 'Tickets', 'Accommodation', 'Transport', 'Medical plan', 'Representative follow-up until return to Nigeria and follow-up at Cairo Hospital'], featured: true,
  },
];

export const ORTHOBIOLOGICS_DATA: OrthobiologicProcedure[] = [
  {
    title: 'Stem Cell Regenerative Therapy', abbr: 'Stem Cells',
    description: 'Listed in the hospital profile under orthobiologics for musculoskeletal degenerative or traumatic disorders.',
    indications: ['Musculoskeletal degenerative or traumatic disorders', 'Page 7 lists sports medicine, spinal implications, minimal invasive procedures, and demand for viscosupplementation'],
    benefits: ['Suitability, evidence, alternatives, and risks should be discussed with the treating clinician.'],
  },
  {
    title: 'Prolotherapy', abbr: 'Prolotherapy',
    description: 'Prolotherapy is listed among the orthobiologics services in the hospital profile.',
    indications: ['Listed under orthobiologics in the profile'],
    benefits: ['Individual assessment and discussion with a qualified clinician are needed.'],
  },
  {
    title: 'Platelet-Rich Plasma', abbr: 'PRP',
    description: 'PRP is listed among the orthobiologics services in the hospital profile.',
    indications: ['Listed under orthobiologics in the profile'],
    benefits: ['Individual assessment and discussion with a qualified clinician are needed.'],
  },
  {
    title: 'Bone Marrow Aspirate Concentrate', abbr: 'BMAC',
    description: 'BMAC is listed among the orthobiologics services in the hospital profile.',
    indications: ['Listed under orthobiologics in the profile'],
    benefits: ['Individual assessment and discussion with a qualified clinician are needed.'],
  },
];

export const MEDICAL_TOURISM_DETAILS = {
  title: 'Medical Tourism Services',
  subtitle: 'Travel Support and Follow-up Listed in the Profile',
  description:
    'The profile lists Dubai, the UK, Nigeria, Egypt, the USA, and Turkey as destinations. Support includes visa provision, tickets, accommodation, transport, and a medical plan. A representative follows up until the patient returns to Nigeria, with follow-up at Cairo Hospital after return.',
  destinations: [
    { country: 'Dubai', flag: '◆', cities: 'As listed in profile' },
    { country: 'UK', flag: '🇬🇧', cities: 'As listed in profile' },
    { country: 'Nigeria', flag: '🇳🇬', cities: 'As listed in profile' },
    { country: 'Egypt', flag: '🇪🇬', cities: 'As listed in profile' },
    { country: 'USA', flag: '🇺🇸', cities: 'As listed in profile' },
    { country: 'Turkey', flag: '🇹🇷', cities: 'As listed in profile' },
  ],
  services: [
    { title: 'Visa Provision', description: 'Visa provision is included in the medical-travel support listed in the profile.', icon: 'FileCheck' },
    { title: 'Tickets', description: 'Tickets are included in the medical-travel support listed in the profile.', icon: 'Plane' },
    { title: 'Accommodation', description: 'Accommodation is included in the medical-travel support listed in the profile.', icon: 'Building' },
    { title: 'Transport', description: 'Transport is included in the medical-travel support listed in the profile.', icon: 'Car' },
    { title: 'Medical Plan', description: 'A medical plan is included in the support listed in the profile.', icon: 'ClipboardList' },
    { title: 'Representative Follow-up', description: 'The profile states that a representative follows up until the patient returns to Nigeria, with follow-up at Cairo Hospital after return.', icon: 'CheckCircle2' },
  ],
};



export const ACCREDITATIONS_DATA: AccreditationOrg[] = [
  {
    name: 'NHIS (National Health Insurance System)',
    type: 'accreditation',
    description: 'Listed as an accreditation in the current Cairo Hospital profile.',
  },
  {
    name: 'FCDA Health Department',
    type: 'accreditation',
    description: 'Listed as an accreditation in the current Cairo Hospital profile.',
  },
  {
    name: 'African Union',
    type: 'accreditation',
    description: 'Listed as an accreditation in the current Cairo Hospital profile.',
  },
  {
    name: 'Alamida',
    type: 'enrolled',
    description: 'Listed as an enrolled organization in the current Cairo Hospital profile.',
  },
  {
    name: 'Zenith Medica',
    type: 'enrolled',
    description: 'Listed as an enrolled organization in the current Cairo Hospital profile.',
  },
  {
    name: 'Cleopatra',
    type: 'enrolled',
    description: 'Listed as an enrolled organization in the current Cairo Hospital profile.',
  },
  {
    name: 'NNPH',
    type: 'enrolled',
    description: 'Listed as an enrolled organization in the current Cairo Hospital profile.',
  },
  {
    name: 'Push Africa NGO',
    type: 'enrolled',
    description: 'Listed as an enrolled organization in the current Cairo Hospital profile.',
  },
  {
    name: 'ASRIC',
    type: 'enrolled',
    description: 'Listed as an enrolled organization in the current Cairo Hospital profile.',
  },
];

export const FACILITY_GALLERY: HospitalFacilityItem[] = [
  {
    id: 'profile-leadership',
    title: 'Cairo Hospital Representatives',
    category: 'Leadership',
    image: '/images/delegation/cairo-hospital-leadership.jpg',
    description: 'Institutional photograph extracted from the supplied Cairo Hospital profile.',
  },
  {
    id: 'profile-institutional-event',
    title: 'Institutional Event',
    category: 'Institutional',
    image: '/images/delegation/cairo-hospital-partnership-handshake.jpg',
    description: 'A formal event photograph extracted from the supplied Cairo Hospital profile.',
  },
  {
    id: 'profile-team-visit',
    title: 'Cairo Hospital Team Visit',
    category: 'Team',
    image: '/images/delegation/cairo-hospital-team-visit.jpg',
    description: 'Cairo Hospital team photograph extracted from the supplied profile.',
  },
  {
    id: 'dr-wael-profile',
    title: 'Dr. Wael Khalil · Bariatric Surgeon',
    category: 'Clinical Team',
    image: '/images/team/dr-wael-khalil.jpg',
    description: 'Doctor photograph extracted from the supplied profile. Listed clinical scope includes laparoscopic, bariatric, and oncology surgeries.',
  },
  {
    id: 'dr-bassam-profile',
    title: 'Dr. Bassam · Physical Therapy',
    category: 'Clinical Profile',
    image: '/images/team/dr-bassam-physical-therapy.jpg',
    description: 'Clinical photograph extracted from the supplied profile. Dr. Bassam is listed under physical therapy, myofascial therapy, cupping, and acupuncture.',
  },
];
