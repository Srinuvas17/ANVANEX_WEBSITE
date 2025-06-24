import React from 'react';
import { HOW_WE_WORK_STEPS } from '../constants';
import ProcessCard from './ProcessCard';

const HowWeWorkSection: React.FC = () => {
  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            How We Work at Anvanex
          </h2>
          <p className="text-lg text-gray-300 italic mb-4">
            — Building Secure, Scalable, Stunning Digital Solutions —
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Our process is built on collaboration, transparency, and a relentless pursuit of excellence.
            We ensure every project is handled with precision, from initial concept to final deployment,
            always prioritizing your vision and business goals.
          </p>
        </div>

        {/* ✅ Image Grid: 4-Step Process */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our 4-Step Value Process</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Discovery */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <img src="/discovery.png" alt="Discovery" className="w-full h-auto mx-auto mb-4 rounded-lg shadow-md" />
            <h4 className="text-xl font-semibold text-green-400 mb-2">Discovery</h4>
            <p className="text-gray-300 text-sm">We deep-dive into your goals, challenges, and tech vision.</p>
          </div>

          {/* Strategy */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <img src="/strategy.png" alt="Strategy" className="w-full h-auto mx-auto mb-4 rounded-lg shadow-md" />
            <h4 className="text-xl font-semibold text-green-400 mb-2">Strategy</h4>
            <p className="text-gray-300 text-sm">We create a secure, scalable blueprint aligned with your mission.</p>
          </div>

          {/* Execution */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <img src="/execution.png" alt="Execution" className="w-full h-auto mx-auto mb-4 rounded-lg shadow-md" />
            <h4 className="text-xl font-semibold text-green-400 mb-2">Execution</h4>
            <p className="text-gray-300 text-sm">Our experts build using the latest in AI, DevOps, and cybersecurity tech.</p>
          </div>

          {/* Delivery */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <img src="/delivary.png" alt="Delivery" className="w-full h-auto mx-auto mb-4 rounded-lg shadow-md" />
            <h4 className="text-xl font-semibold text-green-400 mb-2">Delivery</h4>
            <p className="text-gray-300 text-sm">Timely, transparent deployment with full QA & ongoing support.</p>
          </div>
        </div>

        {/* ✅ Subheading "What Sets Us Apart" */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h3 className="text-2xl font-bold text-green-400 mt-4">What Sets Us Apart</h3>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        {/* Existing feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_WE_WORK_STEPS.map((step, index) => (
            <div key={step.id} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="h-full">
              <ProcessCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
