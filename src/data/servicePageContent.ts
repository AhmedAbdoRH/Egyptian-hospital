export interface ServicePageSection {
  title: string;
  text?: string;
  items?: string[];
}

export interface ServicePageContent {
  headline?: string;
  paragraphs: string[];
  sections: ServicePageSection[];
  closing?: string;
}

export const SERVICE_PAGE_CONTENT: Record<string, ServicePageContent> = {
  // Page 6 of PDF
  'orthopedic-surgery': {
    headline: 'Advanced Orthopedic Care for Better Movement and Quality of Life',
    paragraphs: [
      'At Cairo Hospital, we understand how bone and joint conditions can affect your mobility, independence, and everyday comfort. Our orthopedic surgery services focus on diagnosing and managing a wide range of musculoskeletal conditions through personalized surgical care.',
      'From joint replacement to complex trauma reconstruction, our orthopedic team works to identify the most suitable treatment approach for each patient’s needs.',
    ],
    sections: [
      {
        title: 'Our Orthopedic Surgical Services',
        items: [
          'Knee and Hip Replacement: For patients experiencing advanced arthritis or severe joint damage, knee and hip replacement surgery may help reduce pain and improve mobility when non-surgical treatments are no longer sufficient.',
          'Hand and Microsurgical Reconstruction: Specialized procedures address complex injuries and conditions involving the hands, including damage to bones, tendons, nerves, and surrounding tissues.',
          'Foot and Ankle Surgery: Our orthopedic services include the assessment and surgical management of selected foot and ankle injuries, deformities, and conditions affecting movement and stability.',
          'Complex Trauma Reconstruction: Severe fractures and complex orthopedic injuries may require reconstructive surgery or external fixation to support bone alignment and recovery.',
        ],
      },
      {
        title: 'When Should You See an Orthopedic Surgeon?',
        text: 'Persistent joint pain, restricted movement, recurring injuries, fractures, and physical deformities may require specialist assessment.',
      },
      {
        title: 'Why Choose Cairo Hospital?',
        text: 'Our approach combines medical expertise, individualized treatment planning, and coordinated rehabilitation support to guide patients through their orthopedic care journey.',
      },
    ],
    closing: 'Move toward better mobility. Book your orthopedic consultation at Cairo Hospital.',
  },

  // Page 7 & 8 of PDF
  'orthobiologics-bmac': {
    headline: 'FROM YOUR BODY, BACK TO YOUR BODY. Exploring Your Body’s Own Biological Potential',
    paragraphs: [
      'At Cairo Hospital, we offer Bone Marrow Aspirate Concentrate (BMAC) therapy as part of our orthobiologic orthopedic services.',
      'BMAC is a minimally invasive, patient-derived procedure that uses a concentrated preparation obtained from the patient’s own bone marrow. This preparation contains a mixture of biological components, including a small population of stem and progenitor cells, which are being investigated for their potential role in musculoskeletal care.',
      'Our approach reflects a simple concept: From Your Body, Back to Your Body.',
    ],
    sections: [
      {
        title: 'How Does BMAC Therapy Work?',
        items: [
          'Step 1 – Bone Marrow Collection: A sample of bone marrow is collected from the patient, usually from the pelvic bone, using an appropriate anesthetic technique.',
          'Step 2 – Concentration Process: The sample is processed to concentrate selected cellular and biological components.',
          'Step 3 – Targeted Application: The prepared concentrate is administered to the selected treatment area according to the patient’s diagnosis and clinical plan.',
        ],
      },
      {
        title: 'Why Consider BMAC Therapy?',
        items: [
          'From Your Own Body: BMAC uses a preparation obtained from the patient’s own bone marrow rather than donor-derived cells.',
          'Minimally Invasive Approach: The procedure generally involves needle-based collection and administration rather than open surgery.',
          'Potentially Shorter Recovery: Compared with major orthopedic surgery, the procedure itself may involve less downtime, although recovery varies by patient and condition.',
          'Personalized Orthopedic Care: Every patient undergoes an assessment to determine whether the procedure is appropriate.',
        ],
      },
      {
        title: 'BMAC for Arthritis and Spondylosis',
        text: 'BMAC has been investigated for certain degenerative joint conditions, including knee osteoarthritis. However, its effectiveness remains uncertain, and it has not been established as a definitive cure for arthritis. Evidence supporting BMAC for spondylosis is also insufficient to establish it as a routine treatment. BMAC does not guarantee cartilage regeneration, permanent pain relief, or avoidance of future surgery.',
      },
      {
        title: 'Other Orthobiologic Services',
        text: 'Depending on the patient’s condition, our orthopedic team led by Dr. Mohammed Hesham Shaker (CMD) may also discuss Platelet-Rich Plasma (PRP Injections) and prolotherapy as separate treatment options.',
      },
    ],
    closing: 'Cairo Hospital – Exploring the Science of Healing From Within. Book a consultation to learn whether BMAC-based orthopedic care may be suitable for you.',
  },

  // PRP Injections
  'prp-therapy': {
    headline: 'Platelet-Rich Plasma (PRP Injections) by Dr. Mohammed Hesham Shaker (CMD)',
    paragraphs: [
      'Platelet-Rich Plasma (PRP) therapy utilizes concentrated growth factors derived directly from your own blood to promote natural healing in damaged ligaments, tendons, and joint cartilage.',
      'Administered under rigorous clinical standards by Consultant Orthopedic Surgeon Dr. Mohammed Hesham Shaker, PRP offers a biological non-surgical pathway for chronic musculoskeletal pain.',
    ],
    sections: [
      {
        title: 'Clinical Indications for PRP',
        items: [
          'Osteoarthritis of the knee, hip, shoulder, and ankle',
          'Tendonitis & tendinopathy (patellar, Achilles, rotator cuff, tennis elbow)',
          'Ligament sprains and partial tears',
          'Chronic plantar fasciitis and joint inflammation',
        ],
      },
      {
        title: 'The Procedure',
        items: [
          'A simple blood sample is drawn from the patient in a sterile environment.',
          'Specialized centrifugation separates and concentrates the healing platelets and bioactive growth factors.',
          'The concentrated plasma is carefully injected into the affected joint or tendon under ultrasound guidance.',
        ],
      },
    ],
    closing: 'Book a consultation with Dr. Mohammed Hesham Shaker (CMD) to discuss your eligibility for PRP therapy.',
  },

  // Page 9 & 10 of PDF
  'diabetic-foot': {
    headline: 'Protecting Your Feet. Preserving Your Mobility.',
    paragraphs: [
      'Diabetes can affect the nerves, circulation, and skin of the feet, increasing the risk of wounds, infections, and complications that may affect mobility.',
      'At Cairo Hospital, our Diabetic Foot Clinic provides specialized assessment, wound care, and preventive management to help patients protect their foot health.',
    ],
    sections: [
      {
        title: 'Our Diabetic Foot Services',
        items: [
          'Diabetic Neuropathy Assessment: We assess symptoms such as numbness, tingling, burning sensations, and reduced sensitivity that may increase the risk of unnoticed injuries.',
          'Advanced Wound Care: Our wound management approach may include appropriate dressings, wound cleaning, debridement, and monitoring for signs of infection.',
          'Ulcer Prevention and Off-Loading: We help patients understand how pressure reduction, appropriate footwear, and regular foot examinations can support ulcer prevention and wound management.',
          'Limb Preservation Care: Complex diabetic foot conditions may require coordinated care involving different medical specialists, with the aim of preventing complications and preserving function whenever possible.',
        ],
      },
      {
        title: 'Warning Signs You Should Never Ignore',
        items: [
          'Persistent numbness or burning sensations.',
          'Open wounds or ulcers.',
          'Swelling, redness, or skin discoloration.',
          'Signs of infection or delayed wound healing.',
        ],
      },
    ],
    closing: 'Diabetic foot wounds can become serious quickly. New or worsening wounds should receive prompt medical attention. Protect your feet and your independence. Schedule a diabetic foot consultation at Cairo Hospital.',
  },

  // Page 10 & 11 of PDF
  'pain-management': {
    headline: 'Understanding Your Pain. Improving Your Everyday Life.',
    paragraphs: [
      'Living with persistent pain can affect your movement, sleep, productivity, and overall well-being.',
      'At Cairo Hospital, our Pain Management Clinic focuses on identifying the causes of acute and chronic pain and developing personalized management plans to support comfort, mobility, and daily function.',
    ],
    sections: [
      {
        title: 'Conditions We Assess',
        items: [
          'Joint Pain: Pain affecting the knees, hips, shoulders, or other joints resulting from arthritis, injury, inflammation, or degenerative conditions.',
          'Back and Neck Pain: Spinal discomfort associated with muscular strain, degenerative changes, nerve irritation, or disc problems.',
          'Muscle and Tendon Pain: Repetitive strain, sports injuries, and musculoskeletal conditions causing ongoing discomfort and restricted movement.',
          'Chronic Pain: Persistent pain requiring a coordinated approach addressing physical symptoms, daily function, and rehabilitation needs.',
        ],
      },
      {
        title: 'Our Pain Management Approach',
        items: [
          'Comprehensive Assessment: We begin by understanding your symptoms, medical history, physical condition, and relevant diagnostic findings.',
          'Targeted Treatment Planning: Depending on diagnosis, your specialist may recommend medication, rehabilitation, appropriate interventional procedures, or specialist care.',
          'Coordinated Rehabilitation: Individualized rehabilitation may help patients improve mobility, strength, and functional independence.',
        ],
      },
      {
        title: 'When Should You Seek Help?',
        text: 'If pain continues, repeatedly returns, limits movement, or interferes with daily activities, a specialist assessment can help identify appropriate next steps.',
      },
    ],
    closing: 'Start with the right diagnosis. Book your pain management consultation at Cairo Hospital.',
  },

  // Page 11 & 12 of PDF
  'bemer-therapy': {
    headline: 'A Non-Invasive Approach to Supportive Care',
    paragraphs: [
      'At Cairo Hospital, BEMER Therapy is offered as a non-invasive supportive treatment using pulsed electromagnetic field technology.',
      'BEMER devices deliver low-intensity electromagnetic signals through specialized applicators. Certain devices have specific indications related to temporary local circulation in healthy leg muscles and muscle stimulation.',
      'BEMER is sometimes explored as a complementary approach within musculoskeletal care, although evidence supporting its effectiveness for chronic pain, accelerated healing, and other therapeutic outcomes remains limited.',
    ],
    sections: [
      {
        title: 'How Does BEMER Therapy Work?',
        text: 'During a session, the patient is positioned comfortably while a specialized applicator delivers programmed electromagnetic signals. The treatment does not involve injections or surgical incisions. Session duration and suitability depend on the device and the supervising healthcare professional’s assessment.',
      },
      {
        title: 'Potential Features of BEMER Therapy',
        items: [
          'Non-Invasive Procedure: BEMER does not require surgery, needles, or injections.',
          'Comfortable Treatment Experience: Sessions are generally designed to be comfortable, although individual experiences may vary.',
          'Supportive Care Option: BEMER may be discussed as a complementary service alongside established medical treatments and rehabilitation.',
          'Personalized Assessment: Patients are evaluated to determine whether the therapy is suitable for their medical circumstances.',
        ],
      },
      {
        title: 'Is BEMER Therapy Right for You?',
        text: 'BEMER should not be considered a proven cure for arthritis, chronic joint pain, or degenerative conditions. It should not replace treatments with established clinical benefits. Patients should inform their healthcare provider about implanted electronic devices, pregnancy, or other relevant medical conditions before treatment.',
      },
    ],
    closing: 'Discover our supportive care services. Book a consultation at Cairo Hospital.',
  },

  // Page 13 of PDF
  physiotherapy: {
    headline: 'Restore Movement. Rebuild Strength. Improve Your Quality of Life.',
    paragraphs: [
      'At Cairo Hospital, our Physiotherapy and Rehabilitation Centre provides personalized rehabilitation programs designed to improve mobility, reduce pain, and restore physical function.',
      'Using modern rehabilitation equipment and targeted therapeutic exercises, our team supports patients recovering from injuries, orthopedic surgeries, and neurological or musculoskeletal conditions.',
    ],
    sections: [
      {
        title: 'Our Physiotherapy Services',
        items: [
          'Orthopedic Rehabilitation: Supporting recovery following fractures, joint replacement, and orthopedic surgery.',
          'Kinetic Rehabilitation: Improving strength, flexibility, balance, and movement through structured exercises.',
          'Pediatric Neuromuscular Rehabilitation: Supporting children with selected movement and neuromuscular difficulties.',
          'Spinal Decompression Therapy: Providing selected patients with non-surgical spinal traction approaches following clinical assessment.',
        ],
      },
      {
        title: 'Why Choose Cairo Hospital?',
        text: 'We combine individualized treatment plans, modern rehabilitation facilities, and professional supervision to support each patient’s recovery journey.',
      },
    ],
    closing: 'Move Better. Live Better. Book your physiotherapy consultation at Cairo Hospital.',
  },

  // Page 14 of PDF
  'cupping-therapy': {
    headline: 'A Complementary Approach to Muscle Relaxation and Recovery',
    paragraphs: [
      'At Cairo Hospital, cupping therapy is offered as part of our complementary physiotherapy services to support patients experiencing muscle tension and musculoskeletal discomfort.',
      'Cupping uses specialized cups to create gentle suction on the skin. It may provide temporary relief from muscle tightness and discomfort, although scientific evidence for its effectiveness remains limited.',
    ],
    sections: [
      {
        title: 'Potential Applications',
        items: [
          'Muscle Tension: May help relieve temporary muscle tightness.',
          'Myofascial Discomfort: Used as a complementary approach for selected soft-tissue complaints.',
          'Rehabilitation Support: May be incorporated into a physiotherapy program when clinically appropriate.',
        ],
      },
      {
        title: 'Personalized and Supervised Care',
        text: 'Our team assesses each patient’s condition before recommending cupping. Temporary skin marks, bruising, or irritation may occur, and the treatment is not suitable for everyone.',
      },
    ],
    closing: 'Relax. Recover. Restore Comfort. Explore cupping therapy at Cairo Hospital.',
  },

  // Page 14 & 15 of PDF
  acupuncture: {
    headline: 'Targeted Support for Pain Management and Rehabilitation',
    paragraphs: [
      'At Cairo Hospital, acupuncture is offered as a complementary treatment within our physiotherapy and rehabilitation services.',
      'This technique involves inserting very fine, sterile, single-use needles into specific points on the body. It may help manage certain types of pain and support rehabilitation when combined with appropriate medical care.',
    ],
    sections: [
      {
        title: 'Potential Applications',
        items: [
          'Pain Management: May help reduce certain chronic musculoskeletal pain symptoms.',
          'Neuromuscular Support: May be considered for selected muscle-related discomfort.',
          'Rehabilitation: Can complement physiotherapy and other recommended treatments.',
        ],
      },
      {
        title: 'Safe, Professional Care',
        text: 'Our team follows appropriate hygiene and clinical assessment procedures to determine whether acupuncture is suitable for each patient. Temporary soreness or minor bruising may occur.',
      },
    ],
    closing: 'Find Comfort. Support Your Recovery. Book an acupuncture consultation at Cairo Hospital.',
  },

  // Page 15 of PDF
  'obstetrics-gynaecology': {
    headline: 'Comprehensive Women’s Healthcare',
    paragraphs: [
      'At Cairo Hospital, we provide specialized obstetric and gynaecological care, from routine women’s health consultations to maternity services and surgical procedures.',
      'Our services include clinical and surgical gynaecology, dedicated delivery facilities, and consultant-led care supported by experienced MRCOG-qualified specialists including Chairman Dr. Ahmed Shaker.',
    ],
    sections: [
      {
        title: 'Clinical & Surgical Services',
        items: [
          'Routine gynaecological screening and examinations',
          'Clinical and surgical gynaecology procedures',
          'Dedicated delivery and maternity facilities',
          'Consultant-led obstetric care and post-delivery follow-up',
        ],
      },
    ],
    closing: 'Your Health. Our Priority. Book your consultation at Cairo Hospital.',
  },

  // Page 15 of PDF
  'antenatal-care': {
    headline: 'Caring for You Throughout Your Pregnancy',
    paragraphs: [
      'At Cairo Hospital, our antenatal care services support mothers and babies throughout pregnancy with regular check-ups, ultrasound monitoring, and personalized medical guidance.',
      'We provide trimester screenings, high-risk pregnancy monitoring, delivery planning, and postnatal support to promote maternal and fetal well-being.',
    ],
    sections: [
      {
        title: 'Key Antenatal Care Services',
        items: [
          'Trimester-by-trimester routine medical screenings',
          'High-risk pregnancy specialized monitoring',
          'Regular high-resolution fetal ultrasound check-ups',
          'Delivery planning, maternal health, and postnatal support',
        ],
      },
    ],
    closing: 'Every Pregnancy Deserves Expert Care. Book your antenatal consultation today.',
  },

  // Page 16 of PDF
  infertility: {
    headline: 'Personalized Fertility Care for Your Parenthood Journey',
    paragraphs: [
      'At Cairo Hospital, we support couples experiencing difficulties conceiving through comprehensive fertility assessments and individualized reproductive care.',
      'Our services include male and female fertility evaluations, hormonal testing, ovulation induction when appropriate, and personalized treatment planning.',
      'Our specialists guide patients through their available options with understanding, privacy, and professional care.',
    ],
    sections: [
      {
        title: 'Fertility Services Offered',
        items: [
          'Male and female fertility evaluations',
          'Hormonal profiling and reproductive health testing',
          'Ovulation induction when medically appropriate',
          'Personalized treatment plans tailored to couple requirements',
        ],
      },
    ],
    closing: 'Your Journey to Parenthood Starts with Understanding. Book your fertility consultation at Cairo Hospital.',
  },

  // Page 16 of PDF
  'general-surgery': {
    headline: 'Expert Surgical Care. Personalized for You.',
    paragraphs: [
      'At Cairo Hospital, we provide comprehensive general surgery services focused on treating a wide range of abdominal, gastrointestinal, and soft-tissue conditions.',
      'Our experienced surgical team combines clinical expertise with modern surgical techniques to deliver individualized care, from initial diagnosis to post-operative recovery.',
    ],
    sections: [
      {
        title: 'Our Surgical Services',
        items: [
          'Abdominal Surgery: Surgical management of selected conditions affecting abdominal organs.',
          'Hernia Repair: Open and minimally invasive procedures for different types of hernias.',
          'Gallbladder Surgery: Surgical treatment of gallbladder conditions, including gallstones when intervention is required.',
          'Gastrointestinal Surgery: Procedures addressing selected digestive system conditions.',
          'Soft-Tissue Surgery: Assessment and surgical treatment of certain lumps, cysts, and soft-tissue abnormalities.',
        ],
      },
      {
        title: 'Modern Surgical Facilities',
        text: 'Our operating theatres are designed to support sterile surgical procedures, with high standards of infection prevention, anesthesia support, and dedicated recovery suites.',
      },
    ],
    closing: 'Book your surgical consultation at Cairo Hospital.',
  },

  // Page 17 of PDF
  'endoscopic-surgery': {
    headline: 'Precision-Focused Care Through Minimally Invasive Techniques',
    paragraphs: [
      'At Cairo Hospital, our endoscopic surgery services use specialized instruments and camera-guided techniques to support the diagnosis and treatment of selected medical conditions.',
      'Endoscopic procedures allow specialists to visualize internal structures and, in appropriate cases, perform targeted interventions without the need for traditional open surgery.',
    ],
    sections: [
      {
        title: 'Our Endoscopic Capabilities',
        items: [
          'Diagnostic Endoscopy: Detailed visualization of internal structures to support accurate diagnosis.',
          'Therapeutic Endoscopy: Selected interventions performed using specialized endoscopic instruments.',
          'Minimally Invasive Techniques: Procedures designed to reduce the need for large surgical incisions where appropriate.',
          'Precision-Guided Procedures: High-definition imaging to support clinical accuracy.',
        ],
      },
      {
        title: 'Benefits of Endoscopic Surgery',
        text: 'Depending on the procedure and patient’s condition, endoscopic techniques may offer reduced post-operative discomfort, shorter hospital stays, and faster recovery compared with certain open surgical approaches. Our specialists evaluate each patient individually to determine whether an endoscopic procedure is appropriate.',
      },
    ],
    closing: 'Advanced Visualization. Personalized Surgical Care. Book your consultation at Cairo Hospital.',
  },

  // Page 18 of PDF
  'laparoscopic-surgery': {
    headline: 'Smaller Incisions. Advanced Surgical Care.',
    paragraphs: [
      'At Cairo Hospital, we offer laparoscopic surgery, a minimally invasive approach that allows surgeons to perform selected abdominal and pelvic procedures through small incisions using specialized cameras and surgical instruments.',
      'This technique may help reduce surgical trauma and support a smoother recovery compared with traditional open surgery in suitable patients.',
    ],
    sections: [
      {
        title: 'Our Laparoscopic Surgical Services',
        items: [
          'Laparoscopic Gallbladder Removal: Minimally invasive removal of the gallbladder when medically indicated.',
          'Laparoscopic Appendectomy: Surgical removal of the appendix through small abdominal incisions.',
          'Minimally Invasive Abdominal Repairs: Selected abdominal procedures performed using laparoscopic techniques.',
          'Post-Operative Recovery Support: Individualized monitoring and guidance to support safe recovery.',
        ],
      },
      {
        title: 'Why Consider Laparoscopic Surgery?',
        items: [
          'Smaller surgical scars.',
          'Reduced post-operative discomfort.',
          'Shorter hospital stays.',
          'Earlier return to everyday activities.',
        ],
      },
      {
        title: 'Clinical Evaluation',
        text: 'Not every condition is suitable for laparoscopic surgery. Our surgical team carefully evaluates each case to recommend the safest and most appropriate treatment approach.',
      },
    ],
    closing: 'Smaller Incisions. A Personalized Path to Recovery. Schedule your surgical consultation at Cairo Hospital.',
  },

  // Page 19 of PDF
  'family-medicine': {
    headline: 'Comprehensive Healthcare for Every Stage of Life',
    paragraphs: [
      'At Cairo Hospital, our Family Medicine services provide personalized primary healthcare for children, adults, and seniors, focusing on disease prevention, early diagnosis, and long-term health management.',
      'Our medical team supports patients through routine check-ups, preventive screenings, and ongoing care for chronic conditions such as hypertension and diabetes.',
    ],
    sections: [
      {
        title: 'Our Family Medicine Services',
        items: [
          'Comprehensive Health Check-ups: Routine medical assessments to monitor overall health and identify potential concerns early.',
          'Chronic Disease Management: Continuous care and monitoring for diabetes, hypertension, and other long-term conditions.',
          'Preventive Healthcare: Health screenings, vaccinations, and lifestyle guidance to support long-term wellness.',
          'Family-Centered Care: Personalized medical attention for patients across different age groups.',
        ],
      },
    ],
    closing: 'Your Family’s Health, Our Priority. Book your family medicine consultation at Cairo Hospital.',
  },

  // Page 19 & 20 of PDF
  'tropical-medicine': {
    headline: 'Specialized Care for Tropical and Infectious Diseases',
    paragraphs: [
      'At Cairo Hospital, our Tropical Medicine services focus on the diagnosis, treatment, and prevention of infectious diseases commonly encountered in Nigeria and other tropical regions.',
      'Through clinical assessment and laboratory-supported investigations, our medical team helps patients receive appropriate care for conditions such as malaria, typhoid fever, and other endemic infections.',
    ],
    sections: [
      {
        title: 'Our Tropical Medicine Services',
        items: [
          'Malaria Diagnosis & Treatment: Laboratory-supported diagnosis and appropriate treatment based on clinical findings.',
          'Typhoid Fever Management: Medical assessment, appropriate testing, and targeted treatment for suspected or confirmed infections.',
          'Fever & Infectious Disease Assessment: Evaluation of persistent fever and symptoms associated with tropical infections.',
          'Travel Health & Prevention: Preventive guidance for travelers, including infection prevention and recommended vaccinations.',
        ],
      },
      {
        title: 'Why Early Diagnosis Matters',
        text: 'Many tropical diseases share similar symptoms, including fever, fatigue, and body aches. Accurate diagnosis is essential to selecting appropriate treatment and avoiding unnecessary medication.',
      },
    ],
    closing: 'Expert Care. Accurate Diagnosis. Better Health. Schedule your tropical medicine consultation at Cairo Hospital.',
  },

  // Page 20 & 21 of PDF
  'herbal-medicine': {
    headline: 'Natural Wellness Supported by Medical Guidance',
    paragraphs: [
      'At Cairo Hospital, our Herbal Medicine service offers clinically supervised botanical and natural wellness approaches as part of complementary healthcare.',
      'We recognize that some patients are interested in integrating traditional plant-based products with conventional medical care. Our approach emphasizes professional assessment, responsible use, and patient safety.',
    ],
    sections: [
      {
        title: 'Our Herbal Medicine Services',
        items: [
          'Botanical Wellness Support: Assessment of selected plant-based products and their potential role in general wellness.',
          'Clinician-Guided Complementary Care: Personalized guidance on herbal products alongside conventional medical treatments.',
          'Integrated Wellness Planning: Supportive approaches that consider the patient’s medical history, lifestyle, and overall health needs.',
          'Safety & Medication Review: Evaluation of potential side effects, contraindications, and interactions between herbal products and prescribed medications.',
        ],
      },
      {
        title: 'A Responsible Approach to Natural Healthcare',
        text: 'Natural does not always mean risk-free. Herbal products vary in quality and effectiveness, and some may interact with medications or be unsuitable for certain medical conditions. At Cairo Hospital, herbal medicine is approached as complementary care rather than a replacement for evidence-based medical treatment.',
      },
    ],
    closing: 'Natural Wellness. Guided by Medical Expertise. Book your herbal medicine consultation at Cairo Hospital.',
  },

  // Page 21 of PDF
  'x-ray': {
    headline: 'Accurate Imaging. Better Diagnosis.',
    paragraphs: [
      'At Cairo Hospital, our X-Ray & Ultrasound Department provides advanced diagnostic imaging to support accurate diagnosis and effective treatment planning.',
      'Using digital radiography and high-resolution ultrasound technology, we help physicians assess orthopedic injuries, internal organs, and pregnancy-related conditions.',
    ],
    sections: [
      {
        title: 'Our Imaging Services',
        items: [
          'Digital X-Ray: Imaging for fractures, joints, chest conditions, and trauma.',
          'Abdominal & Pelvic Ultrasound: Examination of internal organs and pelvic structures.',
          'Obstetric Ultrasound: Monitoring fetal development throughout pregnancy.',
          'Diagnostic Reporting: Timely imaging results to support medical decisions.',
        ],
      },
    ],
    closing: 'Clear Imaging. Confident Care. Book your imaging appointment at Cairo Hospital.',
  },

  // Page 21 & 22 of PDF
  'laboratory-services': {
    headline: 'Reliable Testing for Better Health Decisions',
    paragraphs: [
      'Cairo Hospital’s in-house laboratory provides automated diagnostic testing to support disease detection, preventive healthcare, and treatment monitoring.',
      'Our laboratory combines modern technology with quality-control procedures to deliver reliable results across different medical specialties. Working hours: Mon – Sat: 10:00 AM – 6:00 PM.',
    ],
    sections: [
      {
        title: 'Our Laboratory Services',
        items: [
          'Hematology: Blood counts and blood-related investigations.',
          'Clinical Biochemistry: Kidney, liver, glucose, and metabolic testing.',
          'Hormonal Testing: Hormone assessments and reproductive health investigations.',
          'Infection Screening: Laboratory tests for selected infectious diseases.',
          'Quality Control: Verification procedures to support accurate reporting.',
        ],
      },
    ],
    closing: 'Accurate Results. Informed Decisions. Schedule your laboratory tests at Cairo Hospital.',
  },

  // Page 22 of PDF
  pharmacy: {
    headline: 'Trusted Medications. Professional Care. Open 24 Hours.',
    paragraphs: [
      'Cairo Pharmacy, located within Cairo Hospital, provides convenient access to genuine Egyptian and international medications, supported by professional pharmaceutical guidance.',
      'Our pharmacy team helps patients understand their prescriptions and use medications safely and effectively. Open 24 Hours daily to serve inpatients and outpatients.',
    ],
    sections: [
      {
        title: 'Our Pharmacy Services',
        items: [
          'Prescription Dispensing: Supplying prescribed medications promptly.',
          'Egyptian & International Medicines: Pharmaceutical products from approved supply channels.',
          'Medication Counseling: Guidance on dosage, administration, and precautions.',
          'Patient Safety: Support for appropriate medication use and awareness of drug interactions.',
          'On-Site Convenience: 24 Hours easy access to medications during hospital visits.',
        ],
      },
    ],
    closing: 'Cairo Pharmacy – Trusted Medicines. Caring Expertise. Visit Cairo Pharmacy at Cairo Hospital.',
  },

  // Inpatient Admissions
  'inpatient-admissions': {
    headline: 'Comfortable Inpatient Admissions & Dedicated Recovery Suites',
    paragraphs: [
      'Cairo Hospital provides inpatient admissions designed for patients undergoing surgical procedures, specialized medical observations, and comprehensive clinical care.',
      'Our inpatient department features comfortable private and semi-private recovery rooms, continuous 24-hour nursing observation, and daily consultant rounds.',
    ],
    sections: [
      {
        title: 'Inpatient Care Services',
        items: [
          'Private and semi-private inpatient suites equipped for comfort and recovery',
          'Post-surgical continuous monitoring and specialized nursing',
          'Pain management, wound dressing, and bedside physical therapy',
          'Daily consultant reviews and coordinated discharge planning',
        ],
      },
    ],
    closing: 'Cairo Hospital Inpatient Department — Dedicated Clinical Attention in a Calming Environment.',
  },

  // Page 23 & 24 of PDF
  'medical-tourism': {
    headline: 'Your Health Journey Beyond Borders, Guided by Cairo Hospital',
    paragraphs: [
      'At Cairo Hospital, we believe that accessing specialized healthcare should be a well-coordinated and reassuring experience, wherever your treatment takes place.',
      'Our Medical Tourism service connects patients in Nigeria with international healthcare providers in Egypt, the United Kingdom, Dubai, and Turkey.',
      'From initial medical consultations and international hospital referrals to travel coordination and post-treatment follow-up, our team supports patients throughout their medical journey.',
    ],
    sections: [
      {
        title: 'Our Medical Tourism Services',
        items: [
          '1. Medical Assessment & Treatment Planning: Your journey begins with a medical consultation at Cairo Hospital, where our specialists review your medical history, current condition, diagnostic reports, and treatment needs.',
          '2. International Hospital Referrals: We facilitate referrals to selected hospitals and specialist medical centers abroad, including facilities in Cairo and other international destinations. Our team assists with sharing relevant medical records and coordinating communication with the receiving healthcare provider.',
          '3. Medical Visa & Travel Assistance: Guidance on medical visa documentation and applications, assistance with flight arrangements and travel logistics, coordination of appointment schedules with international hospitals, and pre-travel guidance.',
          '4. Pre-Travel Medical Preparation: Before departure, our team helps patients understand their medical requirements, organize necessary documentation, and prepare for their scheduled consultations or procedures abroad.',
          '5. Post-Treatment Follow-Up in Abuja: Your healthcare journey does not necessarily end when you return home. Cairo Hospital provides post-return medical assessment and follow-up support in Abuja, coordinating with treating specialists when appropriate.',
        ],
      },
      {
        title: 'Why Choose Cairo Hospital for Medical Tourism?',
        items: [
          'International Healthcare Access: Referrals to medical providers across multiple countries (Egypt, Dubai, UK, Turkey).',
          'Coordinated Patient Support: Assistance throughout the referral and travel preparation process.',
          'Medical Expertise: Clinical guidance to help patients make informed treatment decisions.',
          'Continuity of Care: Local follow-up support after returning to Nigeria.',
          'Personalized Experience: Individual attention to each patient’s medical and travel needs.',
        ],
      },
    ],
    closing: 'From Abuja to International Healthcare — And Back to Trusted Care. Contact Cairo Hospital today to discuss your medical tourism needs and schedule your initial consultation. Office hours: Mon – Sat: 10:00 AM – 6:00 PM.',
  },

  // Outpatient Specialist Clinics
  'outpatient-clinics': {
    headline: 'Comprehensive Outpatient Specialist Care by Appointment',
    paragraphs: [
      'Cairo Hospital coordinates outpatient specialist consultations across leading clinical disciplines.',
      'All outpatient clinics operate Monday through Saturday from 10:00 AM to 6:00 PM strictly by prior appointment, ensuring dedicated consultant time and minimal waiting.',
    ],
    sections: [
      {
        title: 'Specialist Disciplines Available',
        items: [
          'Orthopedics & Joint Arthroplasty',
          'Obstetrics & Gynaecology (MRCOG)',
          'General, Laparoscopic & Endoscopic Surgery',
          'Cardiology, Neurology & Nephrology',
          'Family, Tropical & Complementary Herbal Medicine',
        ],
      },
    ],
    closing: 'Call or book on WhatsApp to confirm consultant clinic schedules and reserve your appointment.',
  },

  // Urosurgery
  urosurgery: {
    headline: 'Specialized Urosurgical Assessment and Care',
    paragraphs: [
      'Our urosurgical services address conditions affecting the urinary tract, bladder, kidneys, and male reproductive system with dedicated clinical diagnosis and surgical solutions.',
    ],
    sections: [
      {
        title: 'Urosurgical Scope',
        items: [
          'Urinary tract disorders and stone evaluations',
          'Prostate and bladder clinical assessments',
          'Sterile operating theatre surgical interventions',
          'Post-procedure follow-up and monitoring',
        ],
      },
    ],
    closing: 'Book a consultation to discuss urosurgical treatment options at Cairo Hospital.',
  },

  // Ambulance Call-Out
  'ambulance-services': {
    headline: 'Scheduled Ambulance Transport Services',
    paragraphs: [
      'Cairo Hospital provides scheduled patient ambulance transport services by advance arrangement.',
      'Please note that this is non-resuscitation medical transport; the hospital does not operate a 24/7 emergency resuscitation or acute trauma service.',
    ],
    sections: [
      {
        title: 'Arrangement Guidelines',
        items: [
          'Transport scheduled in advance for hospital admission or outpatient appointments',
          'Comfortable, equipped patient transfer vehicle',
          'Advance booking required via phone or WhatsApp desk',
        ],
      },
    ],
    closing: 'Contact Cairo Hospital front desk to schedule patient transport.',
  },
};
