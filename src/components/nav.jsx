// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md h-16 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-[#2bbfff] transition duration-300">Home</a> 
            <a href="#about" className="hover:text-[#2bbfff] transition duration-300">About</a> 
            <a href="#pro" className="hover:text-[#2bbfff] transition duration-300">Projects</a> 
            <a href="#connect" className="hover:text-[#2bbfff] transition duration-300">Connect</a> 
            {/* <Link to="#about" className="hover:text-[#2bbfff] transition duration-300">About</Link>
            <Link to="#projects" className="hover:text-[#2bbfff] transition duration-300">Projects</Link>
            <Link to="#contact" className="hover:text-[#2bbfff] transition duration-300">Contact</Link> */}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-400  hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600">
              {/* Icon for mobile menu (hamburger icon) */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-2 bg-black w-36 m-0 p-0">
              <Link to="#home" className="hover:text-[#2bbfff] transition duration-300 ml-5 mt-3" onClick={toggleMenu}>Home</Link>
              <Link to="#about" className="hover:text-[#2bbfff] transition duration-300 ml-5 mt-3" onClick={toggleMenu}>About</Link>
              <Link to="#pro" className="hover:text-[#2bbfff] transition duration-300 ml-5 mt-3" onClick={toggleMenu}>Projects</Link>
              <Link to="#connect" className="hover:text-[#2bbfff] transition duration-300 ml-5 mt-3" onClick={toggleMenu}>Connect</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
