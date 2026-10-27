import React, { useEffect, useRef, useState } from 'react';
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
import { LoadingScreen } from './components/LoadingScreen';
import { RevealReadyContext } from './components/ScrollReveal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [isLoaderLeaving, setIsLoaderLeaving] = useState(false);
  const [preselectedSpecialty, setPreselectedSpecialty] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');
  const loaderTimers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      loaderTimers.current.forEach(window.clearTimeout);
    };
  }, []);

  const showLoader = () => {
    loaderTimers.current.forEach(window.clearTimeout);
    setIsLoaderVisible(true);
    setIsLoaderLeaving(false);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const leaveDelay = reducedMotion ? 450 : 1850;
    const removeDelay = reducedMotion ? 500 : 2240;
    loaderTimers.current = [
      window.setTimeout(() => setIsLoaderLeaving(true), leaveDelay),
      window.setTimeout(() => setIsLoaderVisible(false), removeDelay),
    ];
  };

  useEffect(() => {
    showLoader();
  }, []);

  useEffect(() => {
    // Smooth scroll to top on tab change
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  const handleOpenBooking = (doctorName?: string, specialtyName?: string) => {
    if (doctorName) setPreselectedDoctor(doctorName);
    if (specialtyName) setPreselectedSpecialty(specialtyName);
    navigateTo('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (tabId: string) => {
    if (tabId === activeTab) return;
    showLoader();
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tabId: string) => navigateTo(tabId);
  const isRevealReady = !isLoaderVisible || isLoaderLeaving;

  return (
    <RevealReadyContext.Provider value={isRevealReady}>
      <div
        data-loader-active={isLoaderVisible && !isLoaderLeaving ? 'true' : 'false'}
        className="min-h-screen flex flex-col bg-transparent text-[#2d435e] selection:bg-[#013777] selection:text-white"
      >
        {isLoaderVisible && <LoadingScreen isLeaving={isLoaderLeaving} />}
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
              <div className="contrast-dark py-8 sm:py-14 bg-gradient-to-b from-[#001d40] via-[#012654] to-[#001d40] text-white relative">
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
    </RevealReadyContext.Provider>
  );
}
