
import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from '../constants';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

// Removed TopHeaderBarProps interface as onGetQuoteClick is no longer needed here

const TopHeaderBar: React.FC = () => { // Removed onGetQuoteClick from props
  return (
    <div className="bg-gray-900 text-white py-2 px-4 md:px-8 text-sm sticky top-0 z-50"> {/* Added sticky and z-index */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6 mb-2 md:mb-0">
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-blue-400 transition-colors">
            <EnvelopeIcon className="w-4 h-4 mr-2" />
            {CONTACT_EMAIL}
          </a>
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="flex items-center hover:text-blue-400 transition-colors">
            <PhoneIcon className="w-4 h-4 mr-2" />
            {CONTACT_PHONE}
          </a>
        </div>
        <div className="flex items-center space-x-3"> {/* Adjusted spacing */}
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.name}
              className="hover:text-blue-400 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* "Get a Quote" button removed from here */}
      </div>
    </div>
  );
};

export default TopHeaderBar;