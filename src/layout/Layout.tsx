import { useTheme } from '../theme/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            {/* Page Alert - Optional */}
            <div className="mb-8">
              <div className="rounded-md bg-blue-50 dark:bg-blue-900/30 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-blue-700 dark:text-blue-200">
                      Welcome to our website! We're excited to show you around.
                    </p>
                    <p className="mt-3 text-sm md:mt-0 md:ml-6">
                      <button className="whitespace-nowrap font-medium text-blue-700 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-100">
                        Learn more →
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Breadcrumbs - Optional */}
            <nav className="mb-8">
              <ol className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <a href="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</a>
                </li>
                <li className="before:content-['/'] before:mx-2">
                  <span className="text-gray-700 dark:text-gray-300">Current Page</span>
                </li>
              </ol>
            </nav>

            {/* Main Content Area */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                {children}
              </div>
            </div>

            {/* Back to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 bg-primary-main dark:bg-dark-primary-main text-white p-3 rounded-full shadow-lg hover:bg-primary-dark dark:hover:bg-dark-primary-dark transition-colors"
              aria-label="Back to top"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </button>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="h-full bg-primary-main dark:bg-dark-primary-main"
          style={{
            scaleX: 0,
            transformOrigin: '0%',
          }}
          animate={{
            scaleX: typeof window !== 'undefined'
              ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
              : 0
          }}
        />
      </div>
    </div>
  );
};

export default Layout;