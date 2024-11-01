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