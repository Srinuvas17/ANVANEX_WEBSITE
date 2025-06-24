import React, { useState } from "react";

const NavigationBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 relative">
      {/* Branding Section */}
      <div className="bg-[#051320] text-white py-10 px-4 flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <img src="/logo.png" alt="Anvanex Logo" className="h-40 w-auto mb-4 md:mb-0" />
        <div className="text-center md:mt-10">
          <h1 className="text-6xl font-extrabold tracking-wide text-[#1ca089]">ANVANEX</h1>
          <p className="text-2xl font-medium text-[#1ca089] mt-1">Technologies Pvt Ltd</p>
          <p className="text-sm font-light italic text-slate-400 mt-1">
            Where smart innovation meets secure encryption
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-cyan-700 to-green-500 shadow-md px-4">
        <div className="flex justify-between items-center py-4 max-w-screen-xl mx-auto">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-white font-semibold text-lg tracking-wide pl-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Our Services</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>

          {/* Desktop "Get a Quote" Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:inline-block bg-[#065f46] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#047857] transition-all"
          >
            Get a Quote
          </button>

          {/* Mobile: Hamburger + "Menu" */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white text-2xl"
            >
              ☰
            </button>
            <span
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white font-semibold text-lg cursor-pointer"
            >
              Menu
            </span>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-2 text-white font-semibold text-lg px-4 pb-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="mt-2 bg-[#065f46] text-white py-2 px-4 rounded-full shadow hover:bg-[#047857] transition-all"
              >
                Get a Quote
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            &times;
          </button>
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-xl relative">
            <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
              <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
              <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" />
              <input type="text" placeholder="What service are you looking for?" className="w-full border p-2 rounded" />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
                Submit
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
