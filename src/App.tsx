import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { OrthobiologicsHighlight } from './components/OrthobiologicsHighlight';
import { MedicalTourism } from './components/MedicalTourism';
import { PartnersSection } from './components/PartnersSection';
import { TeamSection } from './components/TeamSection';
import { FacilityGallery } from './components/FacilityGallery';
import { AccreditationSection } from './components/AccreditationSection';
import { ContactUs } from './components/ContactUs';
import { WhatsAppBookingPage } from './components/WhatsAppBookingPage';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<string>('');
  const [preselectedDoctor, setPreselectedDoctor] = useState<string>('');

  const handleOpenBooking = (doctorName?: string, specialtyName?: string) => {
    if (doctorName) setPreselectedDoctor(doctorName);
    if (specialtyName) setPreselectedSpecialty(specialtyName);
    setIsBookingModalOpen(true);
  };

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06152b] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* 1. Global Navigation Header */}
      <Header
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenWhatsAppBooking={() => handleOpenBooking()}
      />

      {/* 2. Main Content Container */}
      <main className="flex-1">
        {/* Render Home or Specific Targeted View */}
        {activeTab === 'home' && (
          <>
            <Hero
              onOpenWhatsAppBooking={() => handleOpenBooking()}
              onExploreServices={() => handleNavigate('services')}
              onExploreTourism={() => handleNavigate('tourism')}
            />
            <AboutUs onOpenWhatsAppBooking={() => handleOpenBooking()} />
            <ServicesSection
              onSelectServiceForBooking={(service) =>
                handleOpenBooking(undefined, service)
              }
            />
            <OrthobiologicsHighlight
              onOpenWhatsAppBooking={() =>
                handleOpenBooking(undefined, 'Orthobiologics & Stem Cell Therapy')
              }
            />
            <MedicalTourism
              onOpenWhatsAppBooking={() =>
                handleOpenBooking(undefined, 'Medical Tourism Overseas Referral')
              }
            />
            <PartnersSection onOpenWhatsAppBooking={() => handleOpenBooking()} />
            <TeamSection
              onOpenWhatsAppBooking={(doctor) => handleOpenBooking(doctor)}
            />
            <FacilityGallery />
            <AccreditationSection />
            <ContactUs />
          </>
        )}

        {activeTab === 'about' && (
          <div className="pt-6">
            <AboutUs onOpenWhatsAppBooking={() => handleOpenBooking()} />
            <AccreditationSection />
            <TeamSection
              onOpenWhatsAppBooking={(doctor) => handleOpenBooking(doctor)}
            />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-6">
            <ServicesSection
              onSelectServiceForBooking={(service) =>
                handleOpenBooking(undefined, service)
              }
            />
            <OrthobiologicsHighlight
              onOpenWhatsAppBooking={() =>
                handleOpenBooking(undefined, 'Orthobiologics & Stem Cell Therapy')
              }
            />
            <PartnersSection onOpenWhatsAppBooking={() => handleOpenBooking()} />
          </div>
        )}

        {activeTab === 'orthobiologics' && (
          <div className="pt-6">
            <OrthobiologicsHighlight
              onOpenWhatsAppBooking={() =>
                handleOpenBooking(undefined, 'Orthobiologics & Stem Cell Therapy')
              }
            />
            <ServicesSection
              onSelectServiceForBooking={(service) =>
                handleOpenBooking(undefined, service)
              }
            />
          </div>
        )}

        {activeTab === 'tourism' && (
          <div className="pt-6">
            <MedicalTourism
              onOpenWhatsAppBooking={() =>
                handleOpenBooking(undefined, 'Medical Tourism Overseas Referral')
              }
            />
            <PartnersSection onOpenWhatsAppBooking={() => handleOpenBooking()} />
          </div>
        )}

        {activeTab === 'team' && (
          <div className="pt-6">
            <TeamSection
              onOpenWhatsAppBooking={(doctor) => handleOpenBooking(doctor)}
            />
            <PartnersSection onOpenWhatsAppBooking={() => handleOpenBooking()} />
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="pt-6">
            <FacilityGallery />
            <AboutUs onOpenWhatsAppBooking={() => handleOpenBooking()} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-6">
            <ContactUs />
            <AccreditationSection />
          </div>
        )}

        {activeTab === 'booking' && (
          <div className="pt-6">
            <WhatsAppBookingPage
              preselectedSpecialty={preselectedSpecialty}
              preselectedDoctor={preselectedDoctor}
            />
          </div>
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWhatsAppBooking={() => handleOpenBooking()}
      />

      {/* 4. Persistent Floating Professional WhatsApp Button */}
      <FloatingWhatsAppButton
        onOpenBookingModal={() => handleOpenBooking()}
      />

      {/* 5. Direct WhatsApp Booking Interactive Modal */}
      {isBookingModalOpen && (
        <WhatsAppBookingPage
          isOpenModal={true}
          onCloseModal={() => setIsBookingModalOpen(false)}
          preselectedSpecialty={preselectedSpecialty}
          preselectedDoctor={preselectedDoctor}
        />
      )}
    </div>
  );
}
