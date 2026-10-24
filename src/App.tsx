import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { OrthobiologicsHighlight } from './components/OrthobiologicsHighlight';
import { FacilityGallery } from './components/FacilityGallery';
import { MedicalTourism } from './components/MedicalTourism';
import { PartnersSection } from './components/PartnersSection';
import { TeamSection } from './components/TeamSection';
import { ContactUs } from './components/ContactUs';
import { AccreditationSection } from './components/AccreditationSection';
import { WhatsAppBookingPage } from './components/WhatsAppBookingPage';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';
import { AboutSubpage } from './components/subpages/AboutSubpage';
import { ServicesSubpage } from './components/subpages/ServicesSubpage';
import { TeamSubpage } from './components/subpages/TeamSubpage';
import { ContactSubpage } from './components/subpages/ContactSubpage';
import { BookingSubpage } from './components/subpages/BookingSubpage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [preselectedSpecialty, setPreselectedSpecialty] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');

  useEffect(() => {
    const targets = document.querySelectorAll('main section, main .glass-panel');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach((target) => {
      target.classList.add('scroll-reveal');
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, [activeTab]);

  const handleOpenBooking = (doctorName?: string, specialtyName?: string) => {
    if (doctorName) setPreselectedDoctor(doctorName);
    if (specialtyName) setPreselectedSpecialty(specialtyName);
    setActiveTab('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#2d435e] selection:bg-[#013777] selection:text-white">
      <Header
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenWhatsAppBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {/* HOMEPAGE: The complete, rich clinical showcase */}
        {activeTab === 'home' && (
          <>
            <Hero
              onOpenWhatsAppBooking={() => handleOpenBooking()}
              onExploreServices={() => handleNavigate('services')}
              onExploreTourism={() => handleNavigate('about')}
            />
            <EmergencyBanner onOpenWhatsAppBooking={() => handleOpenBooking()} />
            <AboutUs onOpenWhatsAppBooking={() => handleOpenBooking()} />
            <ServicesSection
              onSelectServiceForBooking={(service) => handleOpenBooking(undefined, service)}
            />
            <OrthobiologicsHighlight
              onOpenWhatsAppBooking={() =>
                handleOpenBooking(undefined, 'Orthobiologics & Stem Cell Therapy')
              }
            />
            <FacilityGallery />
            <TeamSection onOpenWhatsAppBooking={(doctor) => handleOpenBooking(doctor)} />
            <MedicalTourism
              onOpenWhatsAppBooking={() =>
                handleOpenBooking(undefined, 'Medical Tourism Overseas Referral')
              }
            />
            <PartnersSection onOpenWhatsAppBooking={() => handleOpenBooking()} />
            <AccreditationSection />
            <div className="py-16 bg-gradient-to-b from-[#001d40] via-[#012654] to-[#001d40] text-white relative">
              <WhatsAppBookingPage
                isDarkBg={true}
                preselectedSpecialty={preselectedSpecialty}
                preselectedDoctor={preselectedDoctor}
              />
            </div>
            <ContactUs />
          </>
        )}

        {/* DEDICATED ABOUT TAB */}
        {activeTab === 'about' && (
          <AboutSubpage
            onNavigateHome={() => handleNavigate('home')}
            onOpenWhatsAppBooking={() => handleOpenBooking()}
            onNavigateServices={() => handleNavigate('services')}
            onNavigateTeam={() => handleNavigate('team')}
          />
        )}

        {/* DEDICATED SERVICES TAB */}
        {activeTab === 'services' && (
          <ServicesSubpage
            onNavigateHome={() => handleNavigate('home')}
            onSelectServiceForBooking={(service) => handleOpenBooking(undefined, service)}
            onOpenWhatsAppBooking={() => handleOpenBooking()}
          />
        )}

        {/* DEDICATED TEAM TAB */}
        {activeTab === 'team' && (
          <TeamSubpage
            onNavigateHome={() => handleNavigate('home')}
            onOpenWhatsAppBooking={(doctor) => handleOpenBooking(doctor)}
          />
        )}

        {/* DEDICATED CONTACT TAB */}
        {activeTab === 'contact' && (
          <ContactSubpage
            onNavigateHome={() => handleNavigate('home')}
            onOpenWhatsAppBooking={() => handleOpenBooking()}
          />
        )}

        {/* DEDICATED WHATSAPP BOOKING TAB */}
        {activeTab === 'booking' && (
          <BookingSubpage
            onNavigateHome={() => handleNavigate('home')}
            preselectedSpecialty={preselectedSpecialty}
            preselectedDoctor={preselectedDoctor}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} onOpenWhatsAppBooking={() => handleOpenBooking()} />
      <FloatingWhatsAppButton onOpenBookingModal={() => handleOpenBooking()} />
    </div>
  );
}
