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

    {/* Desktop Get a Quote Button */}
    <button
      onClick={() => setIsModalOpen(true)}
      className="hidden md:inline-block bg-[#065f46] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#047857] transition-all"
    >
      Get a Quote
    </button>

    {/* Mobile Menu and Get a Quote (same line) */}
    <div className="md:hidden flex justify-between items-center w-full">
      {/* Left: Hamburger + Menu */}
      <div className="flex items-center space-x-2">
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

      {/* Right: Get a Quote */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#065f46] text-white font-semibold py-1.5 px-4 rounded-full shadow hover:bg-[#047857] transition-all"
      >
        Get Quote
      </button>
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
    </ul>
  )}
</nav>
