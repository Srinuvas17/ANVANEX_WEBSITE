import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {  
service: Service;
  onLearnMore: (id: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onLearnMore }) => {
  return (
    <div 
      className="bg-slate-900 border border-slate-700 rounded-xl shadow-xl p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 hover:border-cyan-500 transition-all duration-300 ease-in-out h-full group"
      data-aos="fade-up"
    >
      {/* Icon color is now set in SERVICES_DATA */}
      {service.icon} 
      <h3 className="text-xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">{service.title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
      <a
        href="#contact" // Default href, actual scrolling handled by onLearnMore
        onClick={(e) => { 
          e.preventDefault(); 
          onLearnMore('contact'); // Scrolls to contact section as per previous logic
        }}
        className="mt-auto text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm group-hover:text-cyan-200"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
};

export default ServiceCard;