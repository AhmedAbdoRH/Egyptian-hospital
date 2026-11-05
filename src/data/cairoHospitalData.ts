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
  email: 'Info@cairohospitals.com',
  workingHours:
    'Outpatient Clinic & Pharmacy: Mon - Sat: 10:00 AM - 6:00 PM (By Appointments only) · Lab: Mon - Sat: 10:00 AM - 6:00 PM · Medical Tourism: Mon - Sat: 10:00 AM - 6:00 PM · No emergency services',
};

export const CLINIC_HOURS = {
  outpatient: 'Mon - Sat: 10:00 AM - 6:00 PM (By Appointments only)',
  pharmacy: 'Mon - Sat: 10:00 AM - 6:00 PM',
  laboratory: 'Mon - Sat: 10:00 AM - 6:00 PM',
  medicalTourism: 'Mon - Sat: 10:00 AM - 6:00 PM',
  emergency: 'No emergency services',
  inpatient: 'Inpatient Admissions & Dedicated Recovery Rooms Available',
};

export const HOSPITAL_STATS = [
  { value: '1970', label: 'Chairman’s Work in Nigeria', sublabel: 'Working in Nigeria since 1970' },
  { value: '22', label: 'Clinical Services', sublabel: 'Multispecialty departments & clinics' },
  { value: 'Mon-Sat', label: 'Cairo Pharmacy', sublabel: 'Genuine medicines & pharmaceutical care' },
  { value: 'Mon-Sat', label: 'Outpatient & Lab', sublabel: '10:00 AM - 6:00 PM (By Appointment)' },
];

export const PILLARS_OF_CARE = [
  {
    title: 'Patient Compliance & Satisfaction',
    description: 'A named aim in the supplied hospital profile.',
    icon: 'Users',
  },
  {
    title: 'Hygiene',
    description: 'A named pillar of the hospital’s stated aim.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Comfort',
    description: 'A named pillar of the hospital’s stated aim.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Care',
    description: 'A named pillar of the hospital’s stated aim.',
    icon: 'Stethoscope',
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
    name: 'Dr. Mohammed Hesham Shaker',
    role: 'Founder, CEO & CMD',
    title: 'Consultant Orthopedic & Arthroplasty Surgeon',
    specialty: 'Orthopedic Consultant · Arthroplasty & Stem Cells Regenerative Therapy',
    education: 'Ain Shams University Medical School, Cairo, Egypt (Graduated 1997)',
    qualifications: [
      'PRP Injection & Stem Cell Regenerative Therapy',
      'Orthopedic Consultant',
      'Graduated from Ain Shams University Medical School in Cairo, Egypt (1997)',
      'Specialized in Arthroplasty and stem cells regenerative therapy in musculoskeletal disorders',
      'Member of the ASRIC (African Scientific Research and Innovation Council) of the African Union',
      'Lecturer in Abuja University of Science and Technology in collaboration with Push Africa Organisation',
      'Specialized in Orthopedic Arthroplasty, Trauma Surgeries, and Orthobiologics stem cells regenerative therapy',
    ],
    careerHighlights: [
      'PRP Injection, BMAC & Joint Regenerative Therapy Pioneer',
      'Currently Founder, CEO & CMD of Cairo Hospital in Abuja, Nigeria',
      'Worked in Nozha International Hospital, Cairo, Egypt for 10 years',
      'Worked with the Stuttgart German orthopedic team for 10 years in Elrazi Trauma Center in Kuwait',
      'Pioneering Orthobiologics & Stem Cells Regenerative Therapy in West Africa',
      '25+ years of distinguished international orthopedic surgical leadership',
    ],
    image: '/images/team/dr-mohammed-hesham.png',
    fullBio:
      'Dr. Mohammed Hesham Shaker is an Orthopedic Consultant and the Founder, CEO & CMD of Cairo Hospital in Abuja, Nigeria. He graduated from Ain Shams University Medical School in Cairo, Egypt in 1997. Dr. Shaker specializes in Arthroplasty, PRP Injection, and stem cells regenerative therapy in musculoskeletal disorders, orthopedic trauma surgeries, and orthobiologics. His distinguished clinical journey spans over 25 years, including 10 years at Nozha International Hospital in Cairo, Egypt, and 10 years working with the renowned Stuttgart German orthopedic team in Elrazi Trauma Center in Kuwait. An active academic and regional healthcare pioneer, Dr. Shaker is a Member of the ASRIC (African Scientific Research and Innovation Council) of the African Union, and serves as a Lecturer in Abuja University of Science and Technology in collaboration with Push Africa Organisation.',
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

// Reordered strictly according to user prompt and PDF instructions:
// 1. Orthobiologics (First on top)
// 2. Physiotherapy
// 3. General Surgery
// 4. Medical Tourism (Separated, directly after General Surgery)
// 5. Obstetrics & Gynaecology
// 6. Orthopedics & Arthroplasty
// 7. Specialist Clinics
// 8. Family & Tropical Medicine
// 9. Diagnostics & Support
export const SERVICE_DEPARTMENTS: {
  id: ServiceDepartmentId;
  label: string;
  shortLabel: string;
}[] = [
  {
    id: 'orthobiologics',
    label: 'Orthobiologics & Stem Cells',
    shortLabel: 'Orthobiologics',
  },
  {
    id: 'physiotherapy',
    label: 'Physiotherapy & Rehabilitation',
    shortLabel: 'Physiotherapy',
  },
  {
    id: 'general-surgery',
    label: 'General Surgery & Urosurgery',
    shortLabel: 'General Surgery',
  },
  {
    id: 'medical-tourism',
    label: 'Medical Tourism Desk',
    shortLabel: 'Medical Tourism',
  },
  {
    id: 'obgyn',
    label: 'Obstetrics & Gynaecology',
    shortLabel: 'Obstetrics & Gynaecology',
  },
  {
    id: 'orthopedics',
    label: 'Orthopedics & Arthroplasty',
    shortLabel: 'Orthopedic Surgery',
  },
  {
    id: 'specialist-clinics',
    label: 'Specialist Clinics',
    shortLabel: 'Specialist Clinics',
  },
  {
    id: 'family-tropical',
    label: 'Family, Tropical & Herbal Medicine',
    shortLabel: 'Family & Tropical',
  },
  {
    id: 'diagnostics-support',
    label: 'Diagnostics, Pharmacy & Inpatient Care',
    shortLabel: 'Diagnostics & Pharmacy',
  },
];

export const MEDICAL_SERVICES: MedicalService[] = [
  // 1. Orthobiologics (Top department)
  {
    id: 'orthobiologics-bmac',
    title: 'Orthobiologics (BMAC & Stem Cells)',
    departmentId: 'orthobiologics',
    departmentLabel: 'Orthobiologics',
    category: 'regenerative',
    description:
      'From Your Body, Back to Your Body. Bone Marrow Aspirate Concentrate (BMAC) therapy, cellular regenerative treatments, and autologous orthobiologics for joint and musculoskeletal conditions.',
    iconName: 'Dna',
    details: [
      'Bone marrow collection with precise local technique',
      'Cellular concentration process',
      'Targeted image-guided administration',
      'Minimally invasive approach with shorter recovery',
    ],
    featured: true,
  },
  {
    id: 'prp-therapy',
    title: 'Platelet-Rich Plasma (PRP Injections)',
    departmentId: 'orthobiologics',
    departmentLabel: 'Orthobiologics',
    category: 'regenerative',
    description:
      'Autologous platelet-rich plasma injections administered by Dr. Mohammed Hesham Shaker (CMD) for tendon, ligament, and cartilage healing.',
    iconName: 'Dna',
    details: [
      'PRP Injections for joint and tendon conditions',
      'Autologous growth factor therapy',
      'Consultant-led joint assessment',
    ],
    featured: true,
  },
  {
    id: 'diabetic-foot',
    title: 'Diabetic Foot Clinic',
    departmentId: 'orthobiologics',
    departmentLabel: 'Orthobiologics',
    category: 'clinical',
    description:
      'Protecting Your Feet. Preserving Your Mobility. Specialized assessment, diabetic neuropathy testing, advanced wound care, debridement, and ulcer prevention.',
    iconName: 'Footprints',
    details: [
      'Diabetic neuropathy assessment',
      'Advanced wound care & specialized dressings',
      'Ulcer prevention and off-loading guidance',
      'Limb preservation coordination',
    ],
    featured: true,
  },
  {
    id: 'pain-management',
    title: 'Pain Management Clinic',
    departmentId: 'orthobiologics',
    departmentLabel: 'Orthobiologics',
    category: 'clinical',
    description:
      'Understanding Your Pain. Improving Your Everyday Life. Comprehensive assessment and targeted treatment planning for acute, chronic, back, neck, and joint pain.',
    iconName: 'Activity',
    details: [
      'Comprehensive pain diagnosis',
      'Targeted interventional treatment planning',
      'Coordinated rehabilitation and mobility recovery',
    ],
    featured: true,
  },
  {
    id: 'bemer-therapy',
    title: 'BEMER Therapy',
    departmentId: 'orthobiologics',
    departmentLabel: 'Orthobiologics',
    category: 'regenerative',
    description:
      'A Non-Invasive Approach to Supportive Care. Bio Electro Magnetic Energy Resonance Therapy using pulsed electromagnetic fields to support temporary local microcirculation.',
    iconName: 'Zap',
    details: [
      'Non-invasive, comfortable procedure',
      'Pulsed electromagnetic signal delivery',
      'Supportive care alongside physiotherapy and medical management',
    ],
  },

  // 2. Physiotherapy & Rehabilitation
  {
    id: 'physiotherapy',
    title: 'Physiotherapy & Rehabilitation',
    departmentId: 'physiotherapy',
    departmentLabel: 'Physiotherapy',
    category: 'clinical',
    description:
      'Restore Movement. Rebuild Strength. Improve Your Quality of Life. Comprehensive physical therapy with modern rehabilitation equipment and targeted therapeutic exercise.',
    iconName: 'Activity',
    details: [
      'Orthopedic rehabilitation post-surgery and fracture',
      'Kinetic rehabilitation for strength and balance',
      'Pediatric neuromuscular rehabilitation',
      'Spinal decompression traction therapy',
    ],
    featured: true,
  },
  {
    id: 'cupping-therapy',
    title: 'Cupping Therapy',
    departmentId: 'physiotherapy',
    departmentLabel: 'Physiotherapy',
    category: 'clinical',
    description:
      'A Complementary Approach to Muscle Relaxation and Recovery. Clinically supervised cupping to relieve muscle tension, tightness, and myofascial discomfort.',
    iconName: 'Activity',
    details: [
      'Relief for localized muscle tension',
      'Myofascial discomfort therapy',
      'Supervised clinical hygiene protocols',
    ],
  },
  {
    id: 'acupuncture',
    title: 'Acupuncture',
    departmentId: 'physiotherapy',
    departmentLabel: 'Physiotherapy',
    category: 'clinical',
    description:
      'Targeted Support for Pain Management and Rehabilitation. Very fine, sterile, single-use needles placed at targeted points to help manage musculoskeletal pain.',
    iconName: 'Activity',
    details: [
      'Sterile single-use acupuncture technique',
      'Neuromuscular support and pain management',
      'Integrated with medical rehabilitation plans',
    ],
  },

  // 3. General Surgery & Urosurgery
  {
    id: 'general-surgery',
    title: 'General Surgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery & Urosurgery',
    category: 'surgical',
    description:
      'Expert Surgical Care. Personalized for You. Operating theatres designed for sterile procedures, abdominal surgery, hernia repair, gallbladder surgery, and soft-tissue excision.',
    iconName: 'Scissors',
    details: [
      'Abdominal surgery for internal conditions',
      'Open and minimally invasive hernia repair',
      'Gallbladder surgery and gallstones management',
      'Soft-tissue and cyst surgical treatment',
    ],
    featured: true,
  },
  {
    id: 'endoscopic-surgery',
    title: 'Endoscopic Surgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery & Urosurgery',
    category: 'surgical',
    description:
      'Precision-Focused Care Through Minimally Invasive Techniques. High-definition camera-guided visualization and targeted internal interventions without open surgery.',
    iconName: 'Scissors',
    details: [
      'Diagnostic endoscopy for internal structures',
      'Therapeutic endoscopic interventions',
      'High-definition imaging precision',
      'Reduced post-operative discomfort',
    ],
  },
  {
    id: 'laparoscopic-surgery',
    title: 'Laparoscopic Surgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery & Urosurgery',
    category: 'surgical',
    description:
      'Smaller Incisions. Advanced Surgical Care. Minimally invasive gallbladder removal, appendectomy, and abdominal repairs with shorter recovery times and smaller scars.',
    iconName: 'Scissors',
    details: [
      'Laparoscopic gallbladder removal',
      'Laparoscopic appendectomy',
      'Minimally invasive abdominal repairs',
      'Individualized post-operative monitoring',
    ],
    featured: true,
  },
  {
    id: 'urosurgery',
    title: 'Urosurgery',
    departmentId: 'general-surgery',
    departmentLabel: 'General Surgery & Urosurgery',
    category: 'surgical',
    description:
      'Urosurgical consultations, assessment, and surgical procedures for urinary and renal conditions by qualified surgeons.',
    iconName: 'Scissors',
    details: [
      'Urosurgical evaluation and diagnosis',
      'Urinary tract procedure planning',
      'Sterile operating theatre capabilities',
    ],
  },

  // 4. Medical Tourism (Dedicated department, placed immediately after General Surgery)
  {
    id: 'medical-tourism',
    title: 'Medical Tourism Coordination',
    departmentId: 'medical-tourism',
    departmentLabel: 'Medical Tourism',
    category: 'support',
    description:
      'Your Health Journey Beyond Borders, Guided by Cairo Hospital. Referrals to top medical centres in Egypt, Dubai, the United Kingdom, and Turkey. Visa guidance, tickets, accommodation, transport, treatment plan, and follow-up in Abuja upon return.',
    iconName: 'Globe2',
    details: [
      'Medical assessment & international hospital referral',
      'Medical visa guidance & travel logistics',
      'Coordination of international appointments',
      'Post-treatment recovery & follow-up in Abuja',
    ],
    featured: true,
  },

  // 5. Obstetrics & Gynaecology
  {
    id: 'obstetrics-gynaecology',
    title: 'Obstetrics & Gynaecology',
    departmentId: 'obgyn',
    departmentLabel: 'Obstetrics & Gynaecology',
    category: 'clinical',
    description:
      'Comprehensive Women’s Healthcare. Dedicated delivery facilities, clinical and surgical gynaecology, and consultant-led care supported by MRCOG-qualified specialists.',
    iconName: 'Baby',
    details: [
      'Consultant-led obstetric care',
      'Clinical and surgical gynaecology',
      'Dedicated delivery facilities',
      'Postnatal care and maternal health',
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
      'Caring for You Throughout Your Pregnancy. Trimester screenings, ultrasound monitoring, high-risk pregnancy management, delivery planning, and personalized guidance.',
    iconName: 'Baby',
    details: [
      'Trimester screenings & health check-ups',
      'High-risk pregnancy monitoring',
      'Fetal ultrasound tracking',
      'Delivery planning and postnatal guidance',
    ],
  },
  {
    id: 'infertility',
    title: 'Infertility Services',
    departmentId: 'obgyn',
    departmentLabel: 'Obstetrics & Gynaecology',
    category: 'clinical',
    description:
      'Personalized Fertility Care for Your Parenthood Journey. Male and female fertility evaluations, hormonal investigations, ovulation induction, and treatment planning.',
    iconName: 'Baby',
    details: [
      'Male and female fertility evaluations',
      'Comprehensive hormonal testing',
      'Ovulation induction when indicated',
      'Private, compassionate consultations',
    ],
  },

  // 6. Orthopedic Surgery & Arthroplasty
  {
    id: 'orthopedic-surgery',
    title: 'Orthopedic Surgery & Arthroplasty',
    departmentId: 'orthopedics',
    departmentLabel: 'Orthopedics',
    category: 'surgical',
    description:
      'Advanced Orthopedic Care for Better Movement and Quality of Life. Joint replacement (knee & hip), hand reconstruction, foot and ankle surgery, and complex trauma reconstruction.',
    iconName: 'Bone',
    details: [
      'Stem Cell Injections',
      'Total knee and hip replacement',
      'Complex trauma reconstruction & external fixation',
      'PRP Injection',
      'Hand and microsurgical reconstruction',
      'Foot and ankle surgeries',
    ],
    featured: true,
  },

  // 7. Specialist Clinics
  {
    id: 'outpatient-clinics',
    title: 'Outpatient Specialist Clinics',
    departmentId: 'specialist-clinics',
    departmentLabel: 'Specialist Clinics',
    category: 'clinical',
    description:
      'Consultant outpatient appointments: Mon – Sat: 10:00 AM – 6:00 PM (By Appointments only). Coordinated specialist consultations across major disciplines.',
    iconName: 'Stethoscope',
    details: [
      'Mon – Sat: 10:00 AM – 6:00 PM (By Appointments only)',
      'Consultations strictly by appointment',
      'Multispecialty physician network',
    ],
    featured: true,
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    departmentId: 'specialist-clinics',
    departmentLabel: 'Specialist Clinics',
    category: 'clinical',
    description:
      'Cardiology outpatient consultations, cardiovascular screening, hypertension management, and specialist clinical assessment.',
    iconName: 'HeartPulse',
    details: [
      'Cardiovascular assessment',
      'Hypertension and heart health management',
      'Specialist consultant schedule confirmed at booking',
    ],
  },
  {
    id: 'neurology',
    title: 'Neurology',
    departmentId: 'specialist-clinics',
    departmentLabel: 'Specialist Clinics',
    category: 'clinical',
    description:
      'Neurological outpatient clinic for brain, spinal, and nerve disorder assessment and ongoing medical management.',
    iconName: 'Activity',
    details: [
      'Neurological evaluation',
      'Headache, neuropathy, and movement disorder assessment',
      'Coordinated rehabilitation referrals',
    ],
  },
  {
    id: 'nephrology',
    title: 'Nephrology',
    departmentId: 'specialist-clinics',
    departmentLabel: 'Specialist Clinics',
    category: 'clinical',
    description:
      'Renal health assessment, kidney function evaluation, and medical management of acute and chronic kidney conditions.',
    iconName: 'Activity',
    details: [
      'Renal function evaluation',
      'Kidney disease medical management',
      'Laboratory-guided metabolic monitoring',
    ],
  },
  {
    id: 'gastroenterology',
    title: 'Gastroenterology',
    departmentId: 'specialist-clinics',
    departmentLabel: 'Specialist Clinics',
    category: 'clinical',
    description:
      'Digestive health evaluations for liver, stomach, bowel, and gastrointestinal conditions.',
    iconName: 'Stethoscope',
    details: [
      'Digestive symptom assessment',
      'Liver and gastrointestinal work-up',
      'Dietary and medication guidance',
    ],
  },
  {
    id: 'endocrinology',
    title: 'Endocrinology',
    departmentId: 'specialist-clinics',
    departmentLabel: 'Specialist Clinics',
    category: 'clinical',
    description:
      'Specialized care for diabetes, thyroid conditions, metabolic disorders, and hormonal imbalances.',
    iconName: 'Stethoscope',
    details: [
      'Diabetes optimization & monitoring',
      'Thyroid and hormonal disorder care',
      'Metabolic health guidance',
    ],
  },

  // 8. Family, Tropical & Herbal Medicine
  {
    id: 'family-medicine',
    title: 'Family Medicine',
    departmentId: 'family-tropical',
    departmentLabel: 'Family & Tropical Medicine',
    category: 'clinical',
    description:
      'Comprehensive Healthcare for Every Stage of Life. Routine medical check-ups, chronic disease management (hypertension, diabetes), vaccinations, and preventive healthcare.',
    iconName: 'Users',
    details: [
      'Comprehensive health check-ups',
      'Chronic disease management',
      'Preventive screenings & vaccination guidance',
      'Family-centered healthcare across all ages',
    ],
  },
  {
    id: 'tropical-medicine',
    title: 'Tropical Medicine',
    departmentId: 'family-tropical',
    departmentLabel: 'Family & Tropical Medicine',
    category: 'clinical',
    description:
      'Specialized Care for Tropical and Infectious Diseases. Laboratory-supported diagnosis and targeted treatment for malaria, typhoid fever, and regional endemic infections.',
    iconName: 'Stethoscope',
    details: [
      'Malaria laboratory diagnosis & targeted therapy',
      'Typhoid fever testing & medical management',
      'Evaluation of persistent and unexplained fevers',
      'Travel health guidance and infection prevention',
    ],
  },
  {
    id: 'herbal-medicine',
    title: 'Herbal Medicine',
    departmentId: 'family-tropical',
    departmentLabel: 'Family & Tropical Medicine',
    category: 'clinical',
    description:
      'Natural Wellness Supported by Medical Guidance. Clinically supervised botanical and plant-based approaches as responsible complementary care.',
    iconName: 'Leaf',
    details: [
      'Botanical wellness assessment',
      'Clinician-guided complementary care',
      'Safety and medication interaction review',
      'Integrated wellness planning',
    ],
  },

  // 9. Diagnostics, Pharmacy & Inpatient Care
  {
    id: 'laboratory-services',
    title: 'Laboratory Services',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics & Pharmacy',
    category: 'diagnostic',
    description:
      'Reliable Testing for Better Health Decisions. Automated diagnostic testing, hematology, clinical biochemistry (kidney, liver, glucose), hormonal assays, and infection screening.',
    iconName: 'Microscope',
    details: [
      'Mon – Sat: 10:00 AM – 6:00 PM',
      'Hematology & full blood counts',
      'Clinical biochemistry (liver, kidney, glucose, lipids)',
      'Hormonal testing & infection screening',
    ],
    featured: true,
  },
  {
    id: 'x-ray',
    title: 'X-Ray & Ultrasound Department',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics & Pharmacy',
    category: 'diagnostic',
    description:
      'Accurate Imaging. Better Diagnosis. High-resolution digital radiography for fractures, joints, and chest, plus abdominal, pelvic, and obstetric ultrasound.',
    iconName: 'Scan',
    details: [
      'Digital X-rays for trauma, fractures, and joints',
      'Abdominal and pelvic ultrasound',
      'Obstetric ultrasound for fetal monitoring',
      'Rapid diagnostic imaging reports',
    ],
  },
  {
    id: 'pharmacy',
    title: 'Cairo Pharmacy',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics & Pharmacy',
    category: 'support',
    description:
      'Trusted Medications. Professional Care. Located within Cairo Hospital, providing genuine Egyptian and international medicines with professional pharmacist guidance.',
    iconName: 'Pill',
    details: [
      'Genuine Egyptian & international medicines',
      'Prescription dispensing from approved channels',
      'Medication counseling and patient safety checks',
      '24 Hours',
    ],
    featured: true,
  },
  {
    id: 'inpatient-admissions',
    title: 'Inpatient Admissions',
    departmentId: 'diagnostics-support',
    departmentLabel: 'Diagnostics & Pharmacy',
    category: 'support',
    description:
      'Comfortable Inpatient Admissions & Dedicated Post-Surgical Recovery. Private and semi-private rooms equipped with modern patient monitoring and dedicated nursing supervision.',
    iconName: 'Building',
    details: [
      'Dedicated inpatient recovery suites',
      'Continuous clinical observation & nursing care',
      'Daily consultant medical rounds',
      'Post-operative wound care and rehabilitation',
    ],
    featured: true,
  },
];

export const ORTHOBIOLOGICS_DATA: OrthobiologicProcedure[] = [
  {
    title: 'Stem Cell Regenerative Therapy (BMAC)',
    abbr: 'Stem Cells',
    description:
      'From Your Body, Back to Your Body. Minimally invasive, patient-derived Bone Marrow Aspirate Concentrate for musculoskeletal and joint conditions.',
    indications: [
      'Musculoskeletal degenerative or traumatic disorders',
      'Sports medicine and joint wear',
      'Minimally invasive biological procedures',
    ],
    benefits: [
      'Autologous preparation from the patient’s own bone marrow',
      'Consultant assessment to evaluate individual appropriateness',
    ],
  },
  {
    title: 'Platelet-Rich Plasma Injections',
    abbr: 'PRP',
    description:
      'Concentrated autologous platelets and growth factors administered by Dr. Mohammed Hesham Shaker (CMD) for tendon, ligament, and cartilage healing.',
    indications: [
      'Chronic tendon injuries and joint inflammation',
      'Ligament sprains and partial tears',
      'Degenerative joint disease support',
    ],
    benefits: [
      'Concentrated patient growth factors',
      'Targeted ultrasound-guided injection',
    ],
  },
  {
    title: 'Prolotherapy',
    abbr: 'Prolotherapy',
    description:
      'Targeted regenerative injection technique designed to stimulate healing in weakened ligaments and tendons.',
    indications: ['Ligament laxity', 'Chronic joint instability', 'Musculoskeletal pain'],
    benefits: ['Non-surgical supportive therapy tailored by clinical specialists.'],
  },
  {
    title: 'BEMER Physical Vascular Therapy',
    abbr: 'BEMER',
    description:
      'Pulsed electromagnetic field therapy designed to support microcirculation and complementary tissue wellness.',
    indications: ['Supportive care within rehabilitation', 'Circulatory muscle support'],
    benefits: ['Non-invasive, comfortable sessions supervised by clinical team.'],
  },
];

export const MEDICAL_TOURISM_DETAILS = {
  title: 'Medical Tourism Services',
  subtitle: 'Your Health Journey Beyond Borders, Guided by Cairo Hospital',
  description:
    'Cairo Hospital coordinates medical travel to top specialist hospitals in Egypt, Dubai, the United Kingdom, and Turkey. From medical consultations and hospital referrals to visa guidance, tickets, accommodation, transport, and continuous follow-up upon returning to Abuja.',
  destinations: [
    { country: 'Egypt', flag: '🇪🇬', cities: 'Cairo, Alexandria & Partner Centres' },
    { country: 'Dubai', flag: '🇦🇪', cities: 'Dubai Healthcare City & Private Hospitals' },
    { country: 'United Kingdom', flag: '🇬🇧', cities: 'London & Harley Street' },
    { country: 'Turkey', flag: '🇹🇷', cities: 'Istanbul & Ankara' },
  ],
  services: [
    {
      title: '1. Medical Assessment & Treatment Planning',
      description: 'Specialists review medical history, diagnostic reports, and identify appropriate international care options.',
      icon: 'ClipboardList',
    },
    {
      title: '2. International Hospital Referrals',
      description: 'Facilitating referrals to accredited hospital partners abroad and sharing clinical files securely.',
      icon: 'Building',
    },
    {
      title: '3. Medical Visa & Travel Assistance',
      description: 'Guidance on visa applications, flights, accommodation, and appointment scheduling with overseas hospitals.',
      icon: 'Plane',
    },
    {
      title: '4. Pre-Travel Medical Preparation',
      description: 'Organizing essential documentation, medications, and clinical readiness prior to departure.',
      icon: 'FileCheck',
    },
    {
      title: '5. Post-Treatment Follow-up in Abuja',
      description: 'Comprehensive recovery monitoring and coordinated follow-up at Cairo Hospital in Abuja after return.',
      icon: 'CheckCircle2',
    },
  ],
};

// Accreditations confirmed per PDF pages 1 & 4:
// "Trusted and enrolled by: NHIS – FCDA – African Union"
export const ACCREDITATIONS_DATA: AccreditationOrg[] = [
  {
    name: 'NHIS (National Health Insurance Authority)',
    type: 'accreditation',
    description:
      'Accredited provider under the National Health Insurance Scheme for enrolled members and insured corporate beneficiaries in Nigeria.',
  },
  {
    name: 'FCDA Health Department',
    type: 'accreditation',
    description:
      'Registered and certified private tertiary healthcare facility by the Federal Capital Development Authority (FCDA) Health and Human Services Secretariat.',
  },
  {
    name: 'African Union (AU)',
    type: 'enrolled',
    description:
      'Approved and enrolled healthcare facility serving diplomatic personnel and official delegations of the African Union stationed in Nigeria.',
  },
];

// Per PDF page 5:
// The Executive Medical Board in Abuja photo is the featured main image.
// The crossed-out secondary photos have been removed.
export const FACILITY_GALLERY: HospitalFacilityItem[] = [
  {
    id: 'profile-leadership',
    title: 'Hospital Governance · Executive Medical Board in Abuja',
    category: 'Executive Leadership',
    image: '/images/delegation/cairo-hospital-leadership.jpg',
    description:
      'Executive Medical Board photograph from the supplied Cairo Hospital profile, showing Dr. Ahmed Shaker and hospital directors.',
  },
  {
    id: 'profile-institutional-event',
    title: 'Institutional Partnership & Official Engagement',
    category: 'Governance',
    image: '/images/delegation/cairo-hospital-partnership-handshake.jpg',
    description:
      'Formal institutional photograph from the official hospital profile.',
  },
  {
    id: 'profile-team-visit',
    title: 'Cairo Hospital Medical Mission',
    category: 'Clinical Team',
    image: '/images/delegation/cairo-hospital-team-visit.jpg',
    description:
      'Cairo Hospital medical and administration delegation.',
  },
];
