import React from 'react';
import { HOW_WE_WORK_STEPS } from '../constants';
import ProcessCard from './ProcessCard';

const HowWeWorkSection: React.FC = () => {
  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-gray-900"> {/* Changed background to dark gray */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">How We Work at Anvanex</h2> {/* Title text to white */}
          <p className="text-lg text-gray-300 italic mb-4"> {/* Subtitle text to light gray */}
            — Building Secure, Scalable, Stunning Digital Solutions —
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed"> {/* Intro text to light gray */}
            Our process is built on collaboration, transparency, and a relentless pursuit of excellence. We ensure every project is handled with precision, from initial concept to final deployment, always prioritizing your vision and business goals.
          </p>
           <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div> {/* Divider to green */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_WE_WORK_STEPS.map((step, index) => (
             <div key={step.id} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="h-full"> {/* Ensure grid items take full height */}
                <ProcessCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;