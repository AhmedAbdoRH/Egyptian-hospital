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
  'orthopedic-surgery': {
    headline: 'Advanced Orthopedic Care for Better Movement and Quality of Life',
    paragraphs: [
      'At Cairo Hospital, we understand how bone and joint conditions can affect mobility, independence, and everyday comfort. Our orthopedic surgery services focus on diagnosing and managing musculoskeletal conditions through personalized surgical care.',
      'From joint replacement to complex trauma reconstruction, our orthopedic team works to identify the most suitable treatment approach for each patient.',
    ],
    sections: [
      { title: 'Knee and Hip Replacement', text: 'For advanced arthritis or severe joint damage, replacement surgery may help reduce pain and improve mobility when non-surgical treatments are no longer sufficient.' },
      { title: 'Hand and Microsurgical Reconstruction', text: 'Specialized procedures address complex hand injuries involving bones, tendons, nerves, and surrounding tissues.' },
      { title: 'Foot and Ankle Surgery', text: 'Assessment and surgical management of selected foot and ankle injuries, deformities, and conditions affecting movement and stability.' },
      { title: 'Complex Trauma Reconstruction', text: 'Severe fractures and complex orthopedic injuries may require reconstructive surgery or external fixation to support bone alignment and recovery.' },
      { title: 'When to seek assessment', text: 'Persistent joint pain, restricted movement, recurring injuries, fractures, and physical deformities may require specialist assessment.' },
    ],
    closing: 'Our approach combines medical expertise, individualized treatment planning, and coordinated rehabilitation support.',
  },
  'orthobiologics-bmac': {
    headline: 'Exploring Your Body’s Own Biological Potential',
    paragraphs: [
      'At Cairo Hospital, Bone Marrow Aspirate Concentrate (BMAC) is offered as part of orthobiologic orthopedic services. BMAC is a patient-derived preparation obtained from bone marrow. It contains a mixture of biological components, including a small population of stem and progenitor cells being investigated for their potential role in musculoskeletal care.',
      'BMAC is an evolving field of medicine. Its effectiveness for conditions such as knee osteoarthritis remains uncertain, and evidence is insufficient to establish it as a routine treatment for spondylosis. It is not an established cure for arthritis and does not guarantee cartilage regeneration, permanent pain relief, or avoidance of future surgery.',
    ],
    sections: [
      { title: 'How the procedure is planned', items: ['A bone marrow sample is collected, usually from the pelvic bone, using an appropriate anesthetic technique.', 'The sample is processed to concentrate selected cellular and biological components.', 'The concentrate is administered to a selected treatment area according to the patient’s diagnosis and clinical plan.'] },
      { title: 'Other orthobiologic options', text: 'Depending on the condition, the orthopedic team may discuss Platelet-Rich Plasma (PRP) and prolotherapy as separate options. Benefits, risks, and limitations are reviewed individually.' },
    ],
    closing: 'The team focuses on accurate diagnosis, informed decisions, and clear discussion of potential benefits, limitations, and risks.',
  },
  'diabetic-foot': {
    headline: 'Protecting Your Feet. Preserving Your Mobility.',
    paragraphs: ['Diabetes can affect the nerves, circulation, and skin of the feet, increasing the risk of wounds, infections, and complications that may affect mobility. The Diabetic Foot Clinic provides specialized assessment, wound care, and preventive management.'],
    sections: [
      { title: 'Diabetic neuropathy assessment', text: 'Assessment of numbness, tingling, burning sensations, and reduced sensitivity that may increase the risk of unnoticed injuries.' },
      { title: 'Advanced wound care', text: 'Care may include appropriate dressings, wound cleaning, debridement, and monitoring for signs of infection.' },
      { title: 'Ulcer prevention and off-loading', text: 'Guidance on pressure reduction, appropriate footwear, and regular foot examinations to support prevention and wound management.' },
      { title: 'Warning signs that need prompt attention', items: ['Persistent numbness or burning sensations', 'Open wounds or ulcers', 'Swelling, redness, or skin discoloration', 'Signs of infection or delayed wound healing'] },
    ],
    closing: 'Diabetic foot wounds can become serious quickly. New or worsening wounds should receive prompt medical attention. Early assessment, regular monitoring, and personalized care help protect foot health and independence.',
  },
  'pain-management': {
    headline: 'Understanding Your Pain. Improving Your Everyday Life.',
    paragraphs: ['Persistent pain can affect movement, sleep, productivity, and overall wellbeing. The Pain Management Clinic focuses on identifying causes of acute and chronic pain and developing personalized plans to support comfort, mobility, and daily function.'],
    sections: [
      { title: 'Conditions assessed', items: ['Joint pain involving the knees, hips, shoulders, or other joints', 'Back and neck pain associated with strain, degenerative changes, or nerve irritation', 'Muscle and tendon pain from repetitive strain, sports injuries, or other conditions', 'Persistent pain requiring coordinated management of symptoms and daily function'] },
      { title: 'Our approach', items: ['Assessment of symptoms, medical history, physical condition, and diagnostic findings', 'Individual treatment planning, which may include medication, rehabilitation, procedures, or specialist care', 'Coordinated rehabilitation to support mobility, strength, and function'] },
    ],
    closing: 'A specialist assessment can help when pain continues, repeatedly returns, limits movement, or interferes with daily activities.',
  },
  'bemer-therapy': {
    headline: 'A Non-Invasive Approach to Supportive Care',
    paragraphs: ['BEMER Therapy uses pulsed electromagnetic field technology. Certain devices have specific indications related to temporary local circulation in healthy leg muscles and muscle stimulation. Evidence for chronic pain, accelerated healing, and other therapeutic outcomes remains limited.'],
    sections: [
      { title: 'What to expect', text: 'During a session, a specialized applicator delivers programmed electromagnetic signals. The treatment does not involve injections or surgical incisions; duration and suitability depend on the device and clinician assessment.' },
      { title: 'Important limitations and precautions', text: 'BEMER is not a proven cure for arthritis, chronic joint pain, or degenerative conditions and should not replace treatments with established clinical benefits. Tell your healthcare provider about implanted electronic devices, pregnancy, or other relevant medical conditions.' },
    ],
    closing: 'A clinician can explain the intended role, limitations, and whether BEMER may fit within an overall care plan.',
  },
  physiotherapy: {
    headline: 'Restore Movement. Rebuild Strength. Improve Your Quality of Life.',
    paragraphs: ['The Physiotherapy and Rehabilitation Centre provides personalized programs designed to improve mobility, reduce pain, and restore physical function. Modern rehabilitation equipment and therapeutic exercises support recovery from injuries, orthopedic surgery, and neurological or musculoskeletal conditions.'],
    sections: [{ title: 'Physiotherapy services', items: ['Orthopedic rehabilitation following fractures, joint replacement, and orthopedic surgery', 'Kinetic rehabilitation to improve strength, flexibility, balance, and movement', 'Pediatric neuromuscular rehabilitation for selected movement difficulties', 'Spinal decompression approaches for selected patients following clinical assessment'] }],
    closing: 'Individualized treatment plans, modern facilities, and professional supervision support each patient’s recovery journey.',
  },
  'cupping-therapy': {
    headline: 'A Complementary Approach to Muscle Relaxation and Recovery',
    paragraphs: ['Cupping is offered as part of complementary physiotherapy services for selected muscle tension and musculoskeletal discomfort. Specialized cups create gentle suction on the skin; it may provide temporary relief, although scientific evidence for effectiveness remains limited.'],
    sections: [{ title: 'Personalized and supervised care', text: 'Assessment determines whether cupping is appropriate. Temporary skin marks, bruising, or irritation may occur, and treatment is not suitable for everyone.' }],
  },
  acupuncture: {
    headline: 'Targeted Support for Pain Management and Rehabilitation',
    paragraphs: ['Acupuncture is offered as a complementary treatment within physiotherapy and rehabilitation. It uses fine, sterile, single-use needles at specific points and may help manage certain pain symptoms when combined with appropriate medical care.'],
    sections: [{ title: 'Safety and assessment', text: 'The team uses hygiene protocols and clinical assessment to determine suitability. Temporary soreness or minor bruising may occur.' }],
  },
  'obstetrics-gynaecology': {
    headline: 'Comprehensive Women’s Healthcare',
    paragraphs: ['Cairo Hospital provides specialized obstetric and gynaecological care, from routine women’s health consultations to maternity services and surgical procedures.'],
    sections: [{ title: 'Care services', text: 'Services include clinical and surgical gynaecology and dedicated delivery facilities, with consultant-led care supported by experienced MRCOG-qualified specialists.' }],
  },
  'antenatal-care': {
    headline: 'Caring for You Throughout Your Pregnancy',
    paragraphs: ['Antenatal services support mothers and babies throughout pregnancy with regular check-ups, ultrasound monitoring, and personalized medical guidance.'],
    sections: [{ title: 'Pregnancy support', items: ['Trimester screenings', 'High-risk pregnancy monitoring', 'Delivery planning', 'Postnatal support'] }],
  },
  infertility: {
    headline: 'Personalized Fertility Care for Your Parenthood Journey',
    paragraphs: ['Cairo Hospital supports couples experiencing difficulties conceiving through fertility assessments and individualized reproductive care. Specialists explain available options with privacy and professional care.'],
    sections: [{ title: 'Fertility services', items: ['Male and female fertility evaluations', 'Hormonal testing', 'Ovulation induction when appropriate', 'Personalized treatment planning'] }],
  },
  'general-surgery': {
    headline: 'Expert Surgical Care. Personalized for You.',
    paragraphs: ['General surgery services focus on a range of abdominal, gastrointestinal, and soft-tissue conditions, with individualized care from diagnosis through post-operative recovery.'],
    sections: [{ title: 'Surgical services', items: ['Abdominal surgery for selected conditions', 'Open and minimally invasive hernia repair', 'Gallbladder surgery, including treatment of gallstones when indicated', 'Gastrointestinal procedures for selected digestive conditions', 'Assessment and treatment of certain lumps, cysts, and soft-tissue abnormalities'] }, { title: 'Surgical facilities', text: 'Operating theatres support sterile surgical procedures. Suitability and expected recovery depend on each patient and procedure.' }],
  },
  'endoscopic-surgery': {
    headline: 'Precision-Focused Care Through Minimally Invasive Techniques',
    paragraphs: ['Endoscopic services use specialized instruments and camera-guided techniques to support diagnosis and treatment of selected conditions. Internal structures can be visualized and, when appropriate, targeted interventions performed without traditional open surgery.'],
    sections: [{ title: 'Endoscopic capabilities', items: ['Diagnostic visualization of internal structures', 'Selected therapeutic interventions', 'Minimally invasive techniques when appropriate', 'High-definition imaging to support clinical assessment'] }, { title: 'Potential benefits vary', text: 'Depending on the procedure and patient, endoscopic techniques may reduce post-operative discomfort, hospital stay, or recovery time compared with certain open procedures. A specialist assesses each case.' }],
  },
  'laparoscopic-surgery': {
    headline: 'Smaller Incisions. Advanced Surgical Care.',
    paragraphs: ['Laparoscopic surgery allows selected abdominal and pelvic procedures through small incisions using cameras and specialized instruments. It may support recovery compared with open surgery for suitable patients.'],
    sections: [{ title: 'Laparoscopic services', items: ['Gallbladder removal when medically indicated', 'Appendectomy through small abdominal incisions', 'Selected minimally invasive abdominal repairs', 'Individualized post-operative monitoring and recovery guidance'] }, { title: 'Is it suitable for everyone?', text: 'Not every condition is suitable. The surgical team evaluates each case; potential benefits may include smaller scars, reduced discomfort, shorter hospital stays, or earlier return to daily activities.' }],
  },
  'family-medicine': {
    headline: 'Comprehensive Healthcare for Every Stage of Life',
    paragraphs: ['Family Medicine provides personalized primary healthcare for children, adults, and seniors, focusing on prevention, early diagnosis, and long-term health management.'],
    sections: [{ title: 'Family medicine services', items: ['Routine health check-ups', 'Ongoing care for hypertension, diabetes, and other chronic conditions', 'Preventive screenings, vaccinations, and lifestyle guidance', 'Family-centered attention across age groups'] }],
  },
  'tropical-medicine': {
    headline: 'Specialized Care for Tropical and Infectious Diseases',
    paragraphs: ['Tropical Medicine focuses on diagnosing, treating, and preventing infectious diseases commonly encountered in Nigeria and other tropical regions. Clinical assessment and laboratory-supported investigations guide care for malaria, typhoid fever, and other endemic infections.'],
    sections: [{ title: 'Tropical medicine services', items: ['Laboratory-supported malaria diagnosis and appropriate treatment', 'Assessment, testing, and targeted treatment for suspected typhoid', 'Evaluation of persistent fever and possible tropical infections', 'Travel health guidance, infection prevention, and recommended vaccinations'] }, { title: 'Why early diagnosis matters', text: 'Many tropical diseases share symptoms. Accurate diagnosis helps select appropriate treatment and avoid unnecessary medication.' }],
  },
  'herbal-medicine': {
    headline: 'Natural Wellness Supported by Medical Guidance',
    paragraphs: ['Herbal Medicine offers clinically supervised botanical and natural wellness approaches as complementary healthcare, with emphasis on professional assessment, responsible use, and patient safety.'],
    sections: [{ title: 'Services', items: ['Assessment of selected plant-based products and their role in general wellness', 'Guidance on herbal products alongside conventional treatment', 'Wellness planning that considers medical history and lifestyle', 'Review of potential side effects, contraindications, and medication interactions'] }, { title: 'A responsible approach', text: 'Natural products are not always risk-free. Quality and effectiveness vary, and some products can interact with medication or be unsuitable for certain conditions. Herbal medicine does not replace evidence-based treatment.' }],
  },
  'xray-ultrasound': {
    headline: 'Accurate Imaging. Better Diagnosis.',
    paragraphs: ['The X-Ray & Ultrasound Department provides diagnostic imaging to support assessment and treatment planning. Digital radiography and ultrasound help physicians assess orthopedic injuries, internal organs, and pregnancy-related conditions.'],
    sections: [{ title: 'Imaging services', items: ['Digital X-rays for fractures, joints, chest conditions, and trauma', 'Abdominal and pelvic ultrasound', 'Obstetric ultrasound for fetal monitoring', 'Diagnostic reporting to support clinical decisions'] }],
  },
  'laboratory-services': {
    headline: 'Reliable Testing for Better Health Decisions',
    paragraphs: ['The in-house laboratory provides diagnostic testing for disease detection, preventive healthcare, and treatment monitoring, with quality-control procedures to support reliable results.'],
    sections: [{ title: 'Laboratory services', items: ['Hematology and blood counts', 'Clinical biochemistry including kidney, liver, glucose, and metabolic testing', 'Hormonal and reproductive health investigations', 'Selected infection screening', 'Verification procedures supporting accurate reporting'] }],
  },
  pharmacy: {
    headline: 'Trusted Medications. Professional Care.',
    paragraphs: ['Cairo Pharmacy is located within Cairo Hospital and provides access to Egyptian and international medicines with professional guidance on prescriptions and safe use.'],
    sections: [{ title: 'Pharmacy services', items: ['Prescription dispensing', 'Egyptian and international medicines from approved supply channels', 'Guidance on dosage, administration, and precautions', 'Support in understanding medication interactions and safe use', 'On-site convenience during hospital visits'] }],
  },
  'medical-tourism': {
    headline: 'Your Health Journey Beyond Borders, Guided by Cairo Hospital',
    paragraphs: ['Cairo Hospital connects patients in Nigeria with international healthcare providers in Egypt, the United Kingdom, the United Arab Emirates, the United States, and Turkey. The team supports patients from initial medical consultations and referrals through travel coordination and post-treatment follow-up.'],
    sections: [
      { title: '1. Medical assessment and treatment planning', text: 'Specialists review medical history, current condition, diagnostic reports, and treatment needs to help identify international healthcare options for further evaluation or specialized treatment.' },
      { title: '2. International hospital referrals', text: 'The team facilitates referrals to selected hospitals and specialist centers, helps share relevant medical records, and coordinates communication with receiving providers.' },
      { title: '3. Medical visa and travel assistance', items: ['Guidance on medical visa documents and applications', 'Assistance with flight arrangements and travel logistics', 'Coordination of appointment schedules with international hospitals', 'Pre-travel guidance to help patients prepare'] },
      { title: '4. Pre-travel medical preparation', text: 'Help organizing medical requirements and documents for scheduled consultations or procedures abroad.' },
      { title: '5. Follow-up in Abuja after treatment', text: 'Post-return assessment and follow-up may include medical reviews, recovery monitoring, and rehabilitation guidance, coordinated with treating specialists when appropriate.' },
      { title: 'Important travel information', text: 'Visa approval and travel arrangements are determined by the relevant authorities and service providers. Care plans and referrals are confirmed with receiving healthcare providers.' },
    ],
    closing: 'Contact Cairo Hospital’s Medical Tourism office to discuss options. Office hours are Monday–Saturday, 10:00 AM–6:00 PM.',
  },
};
