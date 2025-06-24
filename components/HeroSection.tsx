
import React, { useEffect, useRef, useCallback } from 'react';
import Typed from 'typed.js';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import type { Engine } from "tsparticles-engine";
import { HERO_TYPED_STRINGS, PARTICLE_OPTIONS } from '../constants';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';


interface HeroSectionProps {
  onExploreServicesClick: () => void;
  onHowWeWorkClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreServicesClick, onHowWeWorkClick }) => {
  const typedEl = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    if (typedEl.current) {
      const options = {
        strings: HERO_TYPED_STRINGS,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        smartBackspace: true,
      };
      typedInstance.current = new Typed(typedEl.current, options);
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={PARTICLE_OPTIONS as any} // Cast to any if PARTICLE_OPTIONS doesn't match exactly ParticleProps['options']
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 p-4" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 hero-text-shadow">
          Welcome to <span className="text-blue-400">Anvanex</span> Technologies
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-light hero-text-shadow">
          Next-Gen Security Meets Next-Level Design
        </p>
        <div className="text-2xl sm:text-3xl md:text-4xl text-yellow-400 font-semibold mb-12 h-12 hero-text-shadow">
          <span ref={typedEl}></span>
        </div>
        <div className="space-x-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={onExploreServicesClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-lg"
          >
            Explore Services
          </button>
          <button 
            onClick={onHowWeWorkClick}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-lg"
          >
            How We Work
          </button>
        </div>
      </div>
      <div 
        className="absolute bottom-10 z-10 animate-bounce cursor-pointer" 
        onClick={onExploreServicesClick}
        title="Scroll to services"
        data-aos="fade-up" data-aos-delay="500"
      >
        <ChevronDoubleDownIcon className="w-10 h-10 text-white opacity-70 hover:opacity-100" />
      </div>
    </section>
  );
};

export default HeroSection;