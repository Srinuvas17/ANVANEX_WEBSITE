
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-8 text-center"
      data-aos="fade-in" data-aos-anchor-placement="top-bottom"
    >
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base">
          Anvanex Technologies Pvt Ltd. &copy; {currentYear}. All Rights Reserved.
          <span className="mx-1 hidden md:inline">|</span>
          <br className="md:hidden"/>
          Designed by <a 
            href="#hero" /* Or link to anvanex.com if it's external */
            className="font-bold anvanex-blue hover:anvanex-yellow transition-colors duration-300 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Anvanex
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;