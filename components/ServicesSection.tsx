
import React from 'react';
import { SERVICES_DATA } from '../constants';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const handleLearnMore = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-900"> {/* Changed background to dark gray */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2> {/* Title text to white */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto"> {/* Subtitle text to light gray */}
            We deliver comprehensive solutions to meet your unique business needs.
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div> {/* Divider to cyan */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.id} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="h-full"> {/* Ensure grid items take full height for card alignment */}
              <ServiceCard service={service} onLearnMore={handleLearnMore} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;