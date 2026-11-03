import React from 'react';
import { ArrowLeft, CheckCircle, MessageCircle, Stethoscope } from 'lucide-react';
import { MedicalService } from '../../types/hospital';
import { ServicePageContent } from '../../data/servicePageContent';
import { SubpageHero } from './SubpageHero';
import { Reveal } from '../ScrollReveal';

interface ServiceDetailSubpageProps {
  service: MedicalService;
  content?: ServicePageContent;
  onBack: () => void;
  onNavigateHome: () => void;
  onBook: () => void;
}

export const ServiceDetailSubpage: React.FC<ServiceDetailSubpageProps> = ({
  service,
  content,
  onBack,
  onNavigateHome,
  onBook,
}) => (
  <div className="space-y-12 pb-20">
    <SubpageHero
      badge={service.departmentLabel}
      badgeIcon={<Stethoscope className="w-4 h-4 text-[#013777]" />}
      title={service.title}
      description={content?.headline || service.description}
      breadcrumbs={[
        { label: 'Services & Specialties' },
        { label: service.title },
      ]}
      onNavigateHome={onNavigateHome}
      onOpenWhatsAppBooking={onBook}
      stats={[
        { label: 'Department', value: service.departmentLabel },
        { label: 'Consultation', value: 'By appointment' },
      ]}
    />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-bold text-[#013777] hover:underline cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back to all services
      </button>

      <Reveal variant="up" className="glass-panel rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 shadow-sm space-y-7">
        <div className="space-y-4 text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
          {content?.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          {!content && <p>{service.description}</p>}
        </div>

        {service.details && service.details.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-black text-[#092545]">Key clinical capabilities</h2>
            <ul className="space-y-2">
              {service.details.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-[#1e293b]">
                  <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />{item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {content?.sections.map((section, index) => (
          <section key={index} className="space-y-2">
            <h2 className="text-xl font-black text-[#092545]">{section.title}</h2>
            {section.text && <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">{section.text}</p>}
            {section.items && (
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed">
                {section.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}

        {content?.closing && <p className="pt-4 border-t border-slate-100 font-bold text-[#013777]">{content.closing}</p>}
      </Reveal>

      <div className="rounded-3xl bg-[#012654] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <h2 className="text-xl font-black">Need an appointment?</h2>
          <p className="mt-1 text-sm text-sky-100">Contact our team to discuss this service and arrange a consultation.</p>
        </div>
        <button onClick={onBook} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-black text-white hover:bg-[#20bd5a] cursor-pointer">
          <MessageCircle className="w-4 h-4" /> Book via WhatsApp
        </button>
      </div>
    </div>
  </div>
);
