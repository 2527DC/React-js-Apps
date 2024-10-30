import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
       className={`fixed top-0 left-0 w-full z-50  navbar ${
          isScrolled ? 'scrolled' : ''
        }`}>
        <div className="container mx-auto flex justify-between items-center px-4 py-2 mt-2">
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <div className="navbar-brand text-gray-600 text-lg font-bold text-white">
              <a href="">HOTEL</a>
            </div>
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="bg-red-600 text-white p-2 rounded focus:outline-none">
              {menuOpen ? 'X' : '☰'}
            </button>
          </div>

          {/* Inline Navigation Items (visible on larger screens) */}
          <div className="hidden md:flex space-x-4 ">
            <a className="nav-link" href="">HOME</a>
            <a className="nav-link" href="">ABOUT</a>
            <a className="nav-link" href="">SERVICES</a>
            <a className="nav-link" href="">CONTACT</a>
            <a className="nav-link" href="">BLOG</a>
            <a className="nav-link" href="">LOGIN</a>
          </div>
        </div>
      </nav>

      {/* Off-Canvas Sidebar Menu (visible on small screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-190 text-white transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}>
      
        <nav className="flex flex-col space-y-4 mt-16 ml-8">
          <a className="nav-link" href="">HOME</a>
          <a className="nav-link" href="">ABOUT</a>
          <a className="nav-link" href="">SERVICES</a>
          <a className="nav-link" href="">CONTACT</a>
          <a className="nav-link" href="">BLOG</a>
        </nav>
      </div>

      {/* Overlay to close the menu when clicking outside */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default NavBar;
