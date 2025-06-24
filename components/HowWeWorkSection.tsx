import React from 'react';
import Image from 'next/image';

const howWeWorkData = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We deep-dive into your goals, challenges, and tech vision.',
    image: '/images/discovery.png', // replace with correct path
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'We create a secure, scalable blueprint aligned with your mission.',
    image: '/images/strategy.png',
  },
  {
    id: 3,
    title: 'Execution',
    description: 'Our experts build using the latest in AI, DevOps, and cybersecurity tech.',
    image: '/images/execution.png',
  },
  {
    id: 4,
    title: 'Delivery',
    description: 'Timely, transparent deployment with full QA & ongoing support.',
    image: '/images/delivary.png',
  },
];

const HowWeWorkSection: React.FC = () => {
  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">How We Work at Anvanex</h2>
          <p className="text-lg text-gray-300 italic mb-4">
            — Building Secure, Scalable, Stunning Digital Solutions —
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Our process is built on collaboration, transparency, and a relentless pursuit of excellence.
            We ensure every project is handled with precision, from initial concept to final deployment,
            always prioritizing your vision and business goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
          {howWeWorkData.map((item, index) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-700 rounded-xl shadow-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-green-500/40 hover:border-green-500"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-400 mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
