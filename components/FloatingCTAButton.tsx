
import React from 'react';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

interface FloatingCTAButtonProps {
  onClick: () => void;
}

const FloatingCTAButton: React.FC<FloatingCTAButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      title="Let's Talk"
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-110 z-50"
      aria-label="Let's Talk - Contact Us"
      data-aos="fade-left" data-aos-delay="1000" data-aos-anchor-placement="top-bottom"
    >
      <ChatBubbleLeftEllipsisIcon className="w-7 h-7" />
    </button>
  );
};

export default FloatingCTAButton;