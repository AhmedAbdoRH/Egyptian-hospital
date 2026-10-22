import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { OrthobiologicsHighlight } from './components/OrthobiologicsHighlight';
import { MedicalTourism } from './components/MedicalTourism';
import { PartnersSection } from './components/PartnersSection';
import { TeamSection } from './components/TeamSection';
import { ContactUs } from './components/ContactUs';
import { AccreditationSection } from './components/AccreditationSection';
import { WhatsAppBookingPage } from './components/WhatsAppBookingPage';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [preselectedSpecialty, setPreselectedSpecialty] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');

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
    <div className="min-h-screen flex flex-col bg-[#06152b] text-slate-100 selection:bg-sky-500 selection:text-white">
      <Header activeTab={activeTab} onNavigate={handleNavigate} onOpenWhatsAppBooking={() => handleOpenBooking()} />
      <main className="flex-1">
        {activeTab === 'home' && <Hero onOpenWhatsAppBooking={() => handleOpenBooking()} onExploreServices={() => handleNavigate('services')} onExploreTourism={() => handleNavigate('about')} />}
        {activeTab === 'about' && <><AboutUs onOpenWhatsAppBooking={() => handleOpenBooking()} /><AccreditationSection /></>}
        {activeTab === 'services' && <>
          <ServicesSection onSelectServiceForBooking={(service) => handleOpenBooking(undefined, service)} />
          <OrthobiologicsHighlight onOpenWhatsAppBooking={() => handleOpenBooking(undefined, 'Orthobiologics & Stem Cell Therapy')} />
          <MedicalTourism onOpenWhatsAppBooking={() => handleOpenBooking(undefined, 'Medical Tourism Overseas Referral')} />
          <PartnersSection onOpenWhatsAppBooking={() => handleOpenBooking()} />
        </>}
        {activeTab === 'team' && <TeamSection onOpenWhatsAppBooking={(doctor) => handleOpenBooking(doctor)} />}
        {activeTab === 'contact' && <ContactUs />}
        {activeTab === 'booking' && <div className="pt-8 pb-16"><WhatsAppBookingPage preselectedSpecialty={preselectedSpecialty} preselectedDoctor={preselectedDoctor} /></div>}
      </main>
      <Footer onNavigate={handleNavigate} onOpenWhatsAppBooking={() => handleOpenBooking()} />
      <FloatingWhatsAppButton onOpenBookingModal={() => handleOpenBooking()} />
    </div>
  );
}
