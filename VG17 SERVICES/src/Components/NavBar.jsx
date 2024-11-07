import React, { useState, useEffect } from 'react';

import  "./NavBar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({ services: false, b2b: false });

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);  // Set the state to true when scrolled down
      } else {
        setIsScrolled(false);  // Set it back to false when at the top
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <nav className={`transition-all duration-300  ${isScrolled ? 'bg-blue-600' : 'bg-white'} fixed top-0 left-0 w-full z-50`}>
      <div className="container mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="#home" className="flex items-center">
            <img src="public/logo.jpeg" alt="logo" className="h-10 w-10 lg:h-16 lg:w-16 object-contain" />
            <span className="ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <span className="font-semibold">VG17</span>
              <span className="ml-1 lg:ml-2 font-bold">Services</span>
            </span>
          </a>
        </div>

        {/* Large screen nav links */}
        <div className="hidden lg:flex space-x-4 items-center">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>

          {/* Services Dropdown - Hover for large screens */}
          <div className="relative group">
            <button className="nav-link flex items-center">
              Our Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black border border-gray-200 rounded-lg shadow-lg w-40 p-2 z-50">
              <ul className="space-y-1">
                <li><a href="#service1" className="block p-2 hover:bg-gray-100">Prospect Lists</a></li>
                <li><a href="#service2" className="block p-2 hover:bg-gray-100">Cleansing Data</a></li>
                <li><a href="#service5" className="block p-2 hover:bg-gray-100">Marketing Via Email</a></li>
                <li><a href="#service6" className="block p-2 hover:bg-gray-100">Verification Of Data</a></li>
              </ul>
            </div>
          </div>

          {/* B2B Dropdown - Hover for large screens */}
          <div className="relative group">
            <button className="nav-link flex items-center">
              B2B Email List
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black border border-gray-200 rounded-lg shadow-lg w-40 p-2 z-50">
              <ul className="space-y-1">
                <li><a href="#healthcare" className="block p-2 hover:bg-gray-100">Healthcare List</a></li>
                <li><a href="#c-level" className="block p-2 hover:bg-gray-100">C Level List</a></li>
                <li><a href="#technology" className="block p-2 hover:bg-gray-100">Technology List</a></li>
              </ul>
            </div>
          </div>

          <a href="#reseller" className="nav-link">Reseller</a>
          <a href="#industries" className="nav-link">Industries</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Drawer Menu for Mobile/Tablet */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center text-gray-700 mb-6"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <a href="#home" className="block p-2 text-black font-semibold">Home</a>
              <a href="#about" className="block p-2 text-black font-semibold">About Us</a>

              {/* Mobile Dropdowns - Click to toggle with arrow indicator */}
              <button onClick={() => toggleDropdown('services')} className="w-full text-left p-2 text-black font-semibold flex justify-between">
                Our Services
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen.services ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen.services && (
                <div className="pl-4">
                  <a href="#service1" className="block p-2 text-black">Prospect Lists</a>
                  <a href="#service2" className="block p-2 text-black">Cleansing Data</a>
                  <a href="#service5" className="block p-2 text-black">Marketing Via Email</a>
                  <a href="#service6" className="block p-2 text-black">Verification Of Data</a>
                </div>
              )}

              <button onClick={() => toggleDropdown('b2b')} className="w-full text-left p-2 text-black font-semibold flex justify-between">
                B2B Email List
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${isDropdownOpen.b2b ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen.b2b && (
                <div className="pl-4">
                  <a href="#healthcare" className="block p-2 text-black">Healthcare List</a>
                  <a href="#c-level" className="block p-2 text-black">C Level List</a>
                  <a href="#technology" className="block p-2 text-black">Technology List</a>
                </div>
              )}

              <a href="#reseller" className="block p-2 text-black font-semibold">Reseller</a>
              <a href="#industries" className="block p-2 text-black font-semibold">Industries</a>
              <a href="#contact" className="block p-2 text-black font-semibold">Contact Us</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
