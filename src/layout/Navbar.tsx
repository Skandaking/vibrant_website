import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import {
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

import Logo from '../assets/images/logo1.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <header className="w-full relative">
      {/* Top Bar - Full Width */}
      <div className="bg-primary-main dark:bg-dark-primary-main text-white w-full pt-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start text-sm pb-8">
            <div className="flex items-center space-x-4 mt-2">
              <a href="tel:+1234567890" className="flex items-center hover:text-gray-200">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@vibrant.com" className="flex items-center hover:text-gray-200">
                <EnvelopeIcon className="h-4 w-4 mr-1" />
                <span>info@vibrant.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <a href="#" className="hover:text-gray-200">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaYoutube size={18} />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Modified positioning */}
      <div className="absolute left-0 right-0 -bottom-10 top-12 z-50">
        <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md rounded-sm max-w-[80%] mx-auto">
          <div className="px-6">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src={Logo} 
                  alt="Vibrant Company Logo" 
                  className="h-20 w-auto"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `
                    text-gray-700 dark:text-gray-200 hover:text-secondary-main dark:hover:text-secondary-main font-medium relative group
                    ${isActive ? 'text-secondary-main dark:text-secondary-main' : ''}
                  `}
                >
                  <span className="relative">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-main group-hover:w-full transition-all duration-300"></span>
                  </span>
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `
                    text-gray-700 dark:text-gray-200 hover:text-secondary-main dark:hover:text-secondary-main font-medium relative group
                    ${isActive ? 'text-secondary-main dark:text-secondary-main' : ''}
                  `}
                >
                  <span className="relative">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-main group-hover:w-full transition-all duration-300"></span>
                  </span>
                </NavLink>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => `
                    text-gray-700 dark:text-gray-200 hover:text-secondary-main dark:hover:text-secondary-main font-medium relative group
                    ${isActive ? 'text-secondary-main dark:text-secondary-main' : ''}
                  `}
                >
                  <span className="relative">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-main group-hover:w-full transition-all duration-300"></span>
                  </span>
                </NavLink>
                <button className="bg-primary-main dark:bg-dark-primary-main text-white px-6 py-2 rounded-md hover:bg-primary-dark dark:hover:bg-dark-primary-dark transition-colors">
                  Contact Us
                </button>
              </div>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden py-4">
                <div className="flex flex-col space-y-4">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => `
                      text-gray-700 dark:text-gray-200 hover:text-secondary-main dark:hover:text-secondary-main font-medium
                      ${isActive ? 'text-secondary-main dark:text-secondary-main' : ''}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => `
                      text-gray-700 dark:text-gray-200 hover:text-secondary-main dark:hover:text-secondary-main font-medium
                      ${isActive ? 'text-secondary-main dark:text-secondary-main' : ''}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink 
                    to="/services" 
                    className={({ isActive }) => `
                      text-gray-700 dark:text-gray-200 hover:text-secondary-main dark:hover:text-secondary-main font-medium
                      ${isActive ? 'text-secondary-main dark:text-secondary-main' : ''}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </NavLink>
                  <button className="bg-primary-main dark:bg-dark-primary-main text-white px-6 py-2 rounded-md hover:bg-primary-dark dark:hover:bg-dark-primary-dark transition-colors w-full">
                    Contact Us
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;