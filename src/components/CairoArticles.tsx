import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { Reveal } from './ScrollReveal';
import { HOSPITAL_CONTACT } from '../data/cairoHospitalData';

interface ArticleItem {
  title: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  note: string;
}

const ARTICLES_DATA: ArticleItem[] = [
  {
    title: 'Orthopedics & Arthroplasty',
    subtitle: 'Surgical care for bones and joints',
    intro: 'The hospital profile lists orthopedic services and a range of surgical procedures for musculoskeletal conditions.',
    bullets: ['Arthroplasty', 'Hand surgeries', 'Foot and ankle surgeries', 'External fixation and deformities'],
    note: 'The treating team confirms whether a procedure is suitable after an individual assessment.',
  },
  {
    title: 'Orthobiologics',
    subtitle: 'Regenerative options listed in the profile',
    intro: 'Cairo Hospital lists stem-cell regenerative therapy, prolotherapy, PRP, and BMAC under its orthobiologics services.',
    bullets: ['Stem-cell regenerative therapy', 'Prolotherapy', 'Platelet-rich plasma (PRP)', 'Bone marrow aspirate concentrate (BMAC)'],
    note: 'These are clinical options, not guaranteed outcomes. Discuss suitability, evidence, alternatives, and risks with a qualified clinician.',
  },
  {
    title: 'BEMER Therapy',
    subtitle: 'Bio Electro Magnetic Energy Resonance',
    intro: 'BEMER therapy is listed in the hospital profile as Bio Electro Magnetic Energy Resonance Therapy.',
    bullets: ['Listed within the hospital’s orthobiologics services', 'Use and suitability should be discussed with the treating clinician'],
    note: 'This service should not replace an assessment or treatment recommended by a qualified medical professional.',
  },
  {
    title: 'Diabetic Foot Clinic',
    subtitle: 'Specialist assessment and foot care',
    intro: 'A Diabetic Foot Clinic is included in the hospital’s list of services.',
    bullets: ['Foot assessment', 'Clinical review of diabetic-foot concerns', 'Care plan and follow-up based on assessment'],
    note: 'New wounds, infection signs, or rapidly worsening symptoms need prompt medical attention.',
  },
  {
    title: 'Physical Therapy & Rehabilitation',
    subtitle: 'Care for neurological and musculoskeletal disorders',
    intro: 'The profile lists physical therapy with Dr. Bassam, including myofascial therapy, cupping, and acupuncture.',
    bullets: ['Physical therapy', 'Myofascial therapy', 'Cupping', 'Acupuncture'],
    note: 'The clinical team assesses the patient and confirms which approaches are appropriate.',
  },
  {
    title: 'Obstetrics & Gynaecology',
    subtitle: 'Women’s health consultations',
    intro: 'Obstetrics and Gynaecology are listed among Cairo Hospital’s clinical services.',
    bullets: ['Obstetrics', 'Gynaecology', 'Appointment and clinic availability confirmed by the hospital'],
    note: 'Contact the hospital to arrange an appointment and confirm the clinician’s schedule.',
  },
  {
    title: 'Infertility Services',
    subtitle: 'Consultation and assessment',
    intro: 'Infertility is listed in the hospital profile under its clinical services.',
    bullets: ['Initial consultation', 'Clinical assessment', 'Next steps discussed with the care team'],
    note: 'The appropriate work-up and treatment plan depend on each patient’s circumstances.',
  },
  {
    title: 'General Surgery',
    subtitle: 'Surgical consultation and care',
    intro: 'General Surgery is listed as a hospital service, with an equipped surgery room included in the hospital profile.',
    bullets: ['General surgical consultation', 'Case review', 'Procedure availability confirmed by the clinical team'],
    note: 'A consultation is required to determine the appropriate care plan.',
  },
  {
    title: 'Urosurgery',
    subtitle: 'A listed surgical service',
    intro: 'Urosurgery appears in the hospital’s current service list.',
    bullets: ['Consultation and assessment', 'Clinical care planning', 'Availability confirmed when booking'],
    note: 'Contact the hospital to confirm the clinician and procedures available for your case.',
  },
  {
    title: 'Bariatric, Laparoscopic & Oncology Surgeries',
    subtitle: 'Dr. Wael Khalil · Bariatric Surgeon',
    intro: 'The current profile lists laparoscopic, bariatric, and oncology surgeries within Dr. Wael Khalil’s clinical scope.',
    bullets: ['Bariatric surgeries', 'Laparoscopic surgeries', 'Oncology surgeries'],
    note: 'The hospital can confirm consultation availability and case-specific services.',
  },
  {
    title: 'Family Medicine',
    subtitle: 'Primary care consultations',
    intro: 'Family Medicine is listed among the hospital’s services.',
    bullets: ['Consultation', 'Clinical assessment', 'Follow-up arranged with the clinic'],
    note: 'Contact the hospital to confirm availability and appointment times.',
  },
  {
    title: 'Tropical Medicine',
    subtitle: 'A listed outpatient specialty',
    intro: 'Tropical Medicine is listed among the hospital’s services.',
    bullets: ['Specialist consultation', 'Clinical assessment', 'Follow-up as advised by the clinician'],
    note: 'The hospital confirms clinic availability when you book.',
  },
  {
    title: 'Specialist Outpatient Clinics',
    subtitle: 'Cardiology, neurology, nephrology and more',
    intro: 'The profile lists outpatient clinics for Cardiology, Neurology, Nephrology, Gastroenterology, and Endocrinology.',
    bullets: ['Cardiology', 'Neurology', 'Nephrology', 'Gastroenterology', 'Endocrinology'],
    note: 'Consultant schedules and appointment availability should be confirmed with the hospital.',
  },
  {
    title: 'Inpatient Admissions & Cairo Pharmacy',
    subtitle: 'Hospital facilities and patient care',
    intro: 'The hospital profile lists an Inpatient Department with dedicated recovery rooms and Cairo Pharmacy operating 24 hours daily.',
    bullets: ['Inpatient admissions and recovery rooms', 'Cairo Pharmacy open 24 Hours', 'Outpatient clinics Mon-Sat 10:00 AM - 6:00 PM by appointment', 'Ambulance transport by scheduled arrangement (non-resuscitation)'],
    note: 'Cairo Hospital operates scheduled outpatient clinics, inpatient rooms, and pharmacy. It does not provide emergency resuscitation services.',
  },
];

interface CairoArticlesProps {
  onOpenWhatsAppBooking?: () => void;
}

export const CairoArticles: React.FC<CairoArticlesProps> = ({ onOpenWhatsAppBooking }) => {
  const [openCardIdx, setOpenCardIdx] = useState<number | null>(null);

  const toggleCard = (idx: number) => {
    setOpenCardIdx(openCardIdx === idx ? null : idx);
  };

  return (
    <section id="cairo-articles" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <Reveal variant="up" className="space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#0879b8]">
            Knowledge Centre · Cairo Hospital
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092545] tracking-tight">
            Services & Care Guides
          </h2>
          <p className="text-sm sm:text-base text-[#47627c] leading-relaxed max-w-3xl">
            A patient-friendly overview of the clinical services listed in Cairo Hospital’s current profile. Contact the hospital to confirm consultant schedules and service availability.
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#06284a] text-white">
            <div className="space-y-1">
              <span className="font-bold text-sm block">Appointments & Service Availability</span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-sky-200">
                <span>• Outpatient clinic schedules: call to confirm</span>
                <span>• Pharmacy opening hours: call to confirm</span>
                <span>• Laboratory & diagnostics: call to confirm</span>
              </div>
            </div>
            <strong className="text-xs text-[#fdc33e] max-w-md text-left md:text-right">
              Emergency Department & ambulance service are listed; call {HOSPITAL_CONTACT.whatsappDisplay} to confirm current access.
            </strong>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ARTICLES_DATA.map((article, idx) => {
            const isOpen = openCardIdx === idx;
            return (
              <Reveal key={idx} variant="up" delay={(idx % 6) * 50}>
                <article className="border border-slate-200 rounded-2xl bg-gradient-to-b from-white to-[#f8fcff] shadow-xs flex flex-col justify-between overflow-hidden h-full">
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0879b8]">
                      Cairo Hospital
                    </span>
                    <h3 className="text-lg font-black text-[#092545] leading-tight">
                      {article.title}
                    </h3>
                    <h4 className="text-xs font-bold text-[#0b5d8d]">
                      {article.subtitle}
                    </h4>
                    <p className="text-xs text-[#47627c] leading-relaxed">
                      {article.intro}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 mt-auto">
                    <button
                      type="button"
                      onClick={() => toggleCard(idx)}
                      className="w-full px-5 py-3 flex items-center justify-between text-xs font-bold text-[#075985] hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span>{isOpen ? 'Show Less' : 'More Details'}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 space-y-3 bg-sky-50/50">
                        <ul className="list-disc pl-5 space-y-1 text-xs text-[#38516b]">
                          {article.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                        <p className="text-[11px] text-[#5b7184] italic pt-2 border-t border-sky-100">
                          {article.note}
                        </p>
                        {onOpenWhatsAppBooking && (
                          <button
                            type="button"
                            onClick={onOpenWhatsAppBooking}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0879b8] hover:underline cursor-pointer"
                          >
                            <span>Contact & Appointments</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
