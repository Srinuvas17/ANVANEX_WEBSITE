
import React, { useEffect } from 'react';
import AOS from 'aos';
import TopHeaderBar from './components/TopHeaderBar';
import NavigationBar from './components/NavigationBar'; // Import new NavigationBar
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingCTAButton from './components/FloatingCTAButton';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home' || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-800"> {/* Removed bg-gray-50 from here */}
      <TopHeaderBar />
      <NavigationBar onNavLinkClick={scrollToSection} onGetQuoteClick={() => scrollToSection('contact')} />
      <main className="flex-grow">
        <HeroSection 
          onExploreServicesClick={() => scrollToSection('services')}
          onHowWeWorkClick={() => scrollToSection('how-we-work')}
        />
        <ServicesSection />
        <HowWeWorkSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTAButton onClick={() => scrollToSection('contact')} />
    </div>
  );
};

export default App;