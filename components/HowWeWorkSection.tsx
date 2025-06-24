import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We deep-dive into your goals, challenges, and tech vision.',
    image: '/discovery.png',
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'We create a secure, scalable blueprint aligned with your mission.',
    image: '/strategy.png',
  },
  {
    id: 3,
    title: 'Execution',
    description: 'Our experts build using the latest in AI, DevOps, and cybersecurity tech.',
    image: '/execution.png',
  },
  {
    id: 4,
    title: 'Delivery',
    description: 'Timely, transparent deployment with full QA & ongoing support.',
    image: '/delivary.png',
  },
];

const HowWeWorkSection: React.FC = () => {
  return (
    <section id="how-we-work" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/grid-bg.svg')",
          backgroundSize: 'cover',
          opacity: 0.05,
          zIndex: 0,
        }}
      ></div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            How We Work at Anvanex
          </h2>
          <p className="text-lg text-gray-300 italic mb-4">
            — Building Secure, Scalable, Stunning Digital Solutions —
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Our process is built on collaboration, transparency, and a relentless pursuit of
            excellence. We ensure every project is handled with precision, from initial concept
            to final deployment, always prioritizing your vision and business goals.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-slate-900 border border-cyan-500/20 rounded-xl shadow-lg transform transition duration-300 hover:shadow-cyan-500/30 hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-44 object-contain p-4"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
