import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import {
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

// Import your logo
import Logo from '../assets/images/logo1.svg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary-main dark:bg-dark-primary-main text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center hover:text-gray-200">
                <PhoneIcon className="h-4 w-4 mr-1" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@vibrant.com" className="flex items-center hover:text-gray-200">
                <EnvelopeIcon className="h-4 w-4 mr-1" />
                <span>info@vibrant.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-gray-200">News</a>
              <a href="#" className="hover:text-gray-200">Careers</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={Logo} 
                alt="Vibrant Company Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-primary-main dark:text-dark-primary-main">
                Vibrant
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-main dark:hover:text-dark-primary-main font-medium"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-main dark:hover:text-dark-primary-main font-medium"
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary-main dark:hover:text-dark-primary-main font-medium"
              >
                Services
              </Link>
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
                <Link 
                  to="/" 
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-main dark:hover:text-dark-primary-main font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-main dark:hover:text-dark-primary-main font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-main dark:hover:text-dark-primary-main font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <button className="bg-primary-main dark:bg-dark-primary-main text-white px-6 py-2 rounded-md hover:bg-primary-dark dark:hover:bg-dark-primary-dark transition-colors w-full">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;