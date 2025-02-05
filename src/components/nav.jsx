import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll for smooth scrolling
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for hamburger menu animations

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
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={500} 
              className="hover:text-[#2bbfff] cursor-pointer transition duration-300"
            >
              Home
            </ScrollLink>
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={500} 
              className="hover:text-[#2bbfff] cursor-pointSer transition duration-300"
            >
              About
            </ScrollLink>
            <Link to="/projects" className="hover:text-[#2bbfff] transition duration-300">
              Projects
            </Link>
            <ScrollLink 
              to="skills" 
              smooth={true} 
              duration={500} 
              className="hover:text-[#2bbfff] cursor-pointer transition duration-300"
            >
              Skills
            </ScrollLink>
            <ScrollLink 
              to="connect" 
              smooth={true} 
              duration={500} 
              className="hover:text-[#2bbfff] cursor-pointer transition duration-300"
            >
              Connect
            </ScrollLink>
            <Link 
                            to="/blog" 
                            smooth={true} 
                            duration={500} 
                            className="hover:text-[#2bbfff] transition duration-300" 
                            onClick={toggleMenu}
                          >
                            Blogs
                          </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-2 bg-black p-6">
              <ScrollLink 
                to="home" 
                smooth={true} 
                duration={500} 
                className="hover:text-[#2bbfff] transition duration-300" 
                onClick={toggleMenu}
              >
                Home
              </ScrollLink>
              <ScrollLink 
                to="about" 
                smooth={true} 
                duration={500} 
                className="hover:text-[#2bbfff] transition duration-300" 
                onClick={toggleMenu}
              >
                About
              </ScrollLink>
              <Link 
                to="/projects" 
                className="hover:text-[#2bbfff] transition duration-300" 
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <ScrollLink 
              to="skills" 
              smooth={true} 
              duration={500} 
              className="hover:text-[#2bbfff] cursor-pointer transition duration-300"
            >
              Skills
            </ScrollLink>
              <ScrollLink 
                to="connect" 
                smooth={true} 
                duration={500} 
                className="hover:text-[#2bbfff] transition duration-300" 
                onClick={toggleMenu}
              >
                Connect
              </ScrollLink>
              <Link 
                              to="/blog" 
                              smooth={true} 
                              duration={500} 
                              className="hover:text-[#2bbfff] transition duration-300" 
                              onClick={toggleMenu}
                            >
                              Blogs
                            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
