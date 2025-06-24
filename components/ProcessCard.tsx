
import React from 'react';
import { ProcessStep } from '../types';
// Removed: import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface ProcessCardProps {
  step: ProcessStep;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ step }) => {
  return (
    <div 
      className="bg-slate-900 border border-slate-700 rounded-xl shadow-xl p-6 flex flex-col transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/40 hover:border-green-500 transition-all duration-300 ease-in-out h-full group"
      data-aos="fade-up"
    >
      <div className="mb-4 self-start"> {/* Wrapper div for icon to maintain layout consistency */}
        {step.icon} {/* Render the icon from the step prop */}
      </div>
      <h3 className="text-xl font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">{step.title}</h3>
      <p className="text-gray-400 text-sm flex-grow group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
    </div>
  );
};

export default ProcessCard;